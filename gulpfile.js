'use strict';

// modules
var browserify = require('browserify');
var browserSync = require('browser-sync');
var collate = require('./tasks/collate');
var compile = require('./tasks/compile');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
var prefix = require('gulp-autoprefixer');
var Q = require('q');
var rename = require('gulp-rename');
var reload = browserSync.reload;
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');
var jshint = require('gulp-jshint');
var config = require('./config');
var webpack = require('webpack');
var ngAutoBootstrap = require('gulp-ng-autobootstrap');
var ngtemplateCache = require('gulp-angular-templatecache');
var webpackConfig = require("./webpack.config.js");
var webpackCompiler = webpack(webpackConfig);


// clean
gulp.task('clean', function (cb) {
	del([config.general.dest.root], cb);
});



//jshint
gulp.task('jshint', function () {
  return gulp.src([config.sourceDir + '/**/*.js', '!' + config.sourceDir + '/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});



//inject sass files to uikit.scss preprocessor
gulp.task('injector:sass', function () {
  return gulp.src(config.sourceDir + '/assets/styles/uikit.scss')
    .pipe(inject(gulp.src([
        config.sourceDir + '/assets/styles/**/*.scss',
        config.sourceDir + '/elements/**/*.scss',
        config.sourceDir + '/snippets/**/*.scss',
        config.sourceDir + '/modules/**/*.scss',
        config.sourceDir + '/templates/**/*.scss',
        '!' + config.sourceDir + '/assets/styles/uikit.scss',
        '!' + config.sourceDir + '/assets/styles/vendor.scss' 
      ], {read: false}), {
      transform: function(filePath) {
        filePath = filePath.replace('src/material/', '../../');
        return '@import \'' + filePath + '\';';
      },
      starttag: '// injector',
      endtag: '// endinjector',
      addRootSlash: false
    }))
    .pipe(gulp.dest( config.sourceDir + '/assets/styles/'));
});



gulp.task('injector', ['injector:sass']);


// styles
gulp.task('styles:fabricator', function () {
	return gulp.src(config.general.src.styles.fabricator)
		.pipe(sass({
			errLogToConsole: true
		}))
		.pipe(prefix('last 1 version'))
		.pipe(gulpif(!config.general.dev, csso()))
		.pipe(rename('f.css'))
		.pipe(gulp.dest(config.general.dest.fabricator + '/styles'))
		.pipe(gulpif(config.general.dev, reload({stream:true})));
});

gulp.task('styles:uikit',function () {

	return gulp.src(config.general.src.styles.uikit)
		.pipe(sass({style: 'expanded'}))
		.on('error', function handleError(err) {
		  console.error(err.toString());
		  this.emit('end');
		})
		.pipe(prefix('last 1 version'))
		.pipe(gulpif(!config.general.dev, csso()))
		.pipe(gulp.dest(config.general.dest.uikit + '/styles'))
		.pipe(gulpif(config.general.dev, reload({stream:true})));
});

gulp.task('styles', ['styles:fabricator']);


// scripts
gulp.task('scripts:fabricator', function () {
	return gulp.src(config.general.src.scripts.fabricator)
		.pipe(concat('f.js'))
		.pipe(gulpif(!config.general.dev, uglify()))
		.pipe(gulp.dest(config.general.dest.fabricator + '/scripts'));
});

gulp.task('scripts:uikit', ['jshint'], function () {
	return browserify(config.general.src.scripts.uikit)
		.bundle()
		.on('error', function (error) {
			gutil.log(gutil.colors.red(error));
			this.emit('end');
		})
		.pipe(source('uikit.js'))
		.pipe(gulpif(!config.general.dev, streamify(uglify())))
		.pipe(gulp.dest(config.general.dest.uikit + '/scripts'));
});

gulp.task('scripts', ['scripts:fabricator']);



// images
gulp.task('images', ['favicon'], function () {
	return gulp.src(config.general.src.images)
		/*.pipe(imagemin({
			svgoPlugins: [{removeViewBox: false}, {removeEmptyAttrs: false}]
		}))*/
		.pipe(gulp.dest(config.general.dest.uikit + '/images'));
});

gulp.task('favicon', function () {
	return gulp.src('./src/favicon.ico')
		.pipe(gulp.dest(config.general.dest.root));
});

//components
gulp.task('components', function () {
	return gulp.src(config.general.src.components)
		.pipe(gulp.dest(config.general.dest.root + '/bower_components'));
});


// collate
gulp.task('collate', function () {

	// 'collate' is a little different -
	// it returns a promise instead of a stream

	var deferred = Q.defer();

	var opts = {
		materials: config.general.src.materials,
		dest: config.general.dest.fabricator + '/data/data.json'
	};

	// run the collate task; resolve deferred when complete
	collate(opts, deferred.resolve);

	return deferred.promise;

});

// assembly
gulp.task('assemble:fabricator', function () {
	var opts = {
		data: config.general.dest.fabricator + '/data/data.json',
		template: false
	};

	return gulp.src(config.general.src.views)
		.pipe(compile(opts))
		.pipe(gulp.dest(config.general.dest.root));
});

gulp.task('assemble:templates', function () {
	var opts = {
		data: config.general.dest.fabricator + '/data/data.json',
		template: true
	};
	return gulp.src(config.sourceDir + '/templates/*.html')
		.pipe(compile(opts))
		.pipe(rename({
			prefix: 'template-'
		}))
		.pipe(gulp.dest(config.general.dest.root));
});

gulp.task('assemble', ['collate'], function () {
	gulp.start('assemble:fabricator', 'assemble:templates');
});


// server
gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: config.general.dest.root
		},
		notify: false,
		logPrefix: 'FABRICATOR',
		port: 9000,
		open:false
	});
});


//ng-autobootstrap
gulp.task('ngautobootstrap', function() {
	var options = {
		bootstrap: {
			path: 'bootstrap.js'
		},
		moduleTypes: {
			controller: {
				path: '**/*/*-controller.js',
				casing: 'pascalCase',
				suffix: 'Ctrl',
				omit: '-controller'
			},
			directive: {
				path: '**/*/*-directive.js',
				casing: 'pascalCase',
				prefix: 'sf',
				omit: '-directive'
			},
			run: {
				path: '**/*-run.js'
			}
		}
	};
	var ngautobootstrap = function(){
		return new ngAutoBootstrap(options);
	}
    return gulp
        .src([config.sourceDir + '/**/*/*.js', '!' + config.sourceDir + '/assets/**/*.js',  config.sourceDir + '/*-run.js'])
        .pipe(ngautobootstrap({}))
        .pipe(gulp.dest(config.sourceDir));
});

gulp.task('ngtemplatecache', function () {
    gulp.src(config.sourceDir + '/**/**/*.tmpl.html')
        .pipe(ngtemplateCache({
        	filename: 'templates-run.js',
			moduleSystem: 'browserify',
			templateHeader: '["$templateCache", function ($templateCache) {\n',
			templateFooter: '\n}];'
        }))
        .pipe(gulp.dest(config.sourceDir));
});


gulp.task('webpack', ['jshint', 'ngautobootstrap'], function (cb) {
	webpackCompiler.run(function (err, stats) {
		if(err) throw new gutil.PluginError('webpack', err);
		gutil.log('[webpack]', stats.toString({
			colors: true
		}));
		cb();
	});
});


// watch
gulp.task('watch', ['browser-sync'], function () {
	gulp.watch([config.sourceDir + '/**/**/*.{html,md}', '!' + config.sourceDir + '/**/**/*.tmpl.html'], ['assemble', browserSync.reload]);
	gulp.watch(config.sourceDir + '/**/**/*.tmpl.html', ['ngtemplatecache', 'webpack', browserSync.reload]);
	gulp.watch('src/fabricator/styles/**/*.scss', ['styles:fabricator']);
	gulp.watch(config.sourceDir + '/assets/styles/**/*.css', ['webpack', browserSync.reload]);
	gulp.watch(config.sourceDir + '/assets/styles/**/*.scss', ['webpack', browserSync.reload]);
	gulp.watch(config.sourceDir + '/elements/**/*.scss', ['webpack', browserSync.reload]);
	gulp.watch(config.sourceDir + '/snippets/**/*.scss', ['webpack', browserSync.reload]);
	gulp.watch(config.sourceDir + '/modules/**/*.scss', ['webpack', browserSync.reload]);
	gulp.watch(config.sourceDir + '/templates/**/*.scss', ['webpack', browserSync.reload]);
	gulp.watch('src/fabricator/scripts/**/*.js', ['scripts:fabricator', browserSync.reload]);
	gulp.watch([config.sourceDir + '/uikit.js'], ['webpack', browserSync.reload]);
	gulp.watch(config.sourceDir + '/assets/scripts/**/*.js', ['webpack', browserSync.reload]);
	gulp.watch(config.sourceDir + '/elements/**/*.js', ['webpack', browserSync.reload]);
	gulp.watch(config.sourceDir + '/snippets/**/*.js', ['webpack', browserSync.reload]);
	gulp.watch(config.sourceDir + '/modules/**/*.js', ['webpack', browserSync.reload]);
	gulp.watch(config.sourceDir + '/templates/**/*.js', ['webpack', browserSync.reload]);
	gulp.watch(config.general.src.images, ['images', browserSync.reload]);
});


// default build task
gulp.task('default', ['clean'], function () {

	// define build tasks
	var tasks = [
		'jshint',
		'injector',
		'styles',
		'scripts',
		'images',
		'assemble',
		'components',
		'ngtemplatecache',
		'webpack'
	];

	// run build
	runSequence(tasks, function () {
		if (config.general.dev) {
			gulp.start('watch');
		}
	});

});
