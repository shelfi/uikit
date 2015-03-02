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

var wiredep = require('wiredep').stream;
var webpack = require('webpack');
var ngAnnotate = require('gulp-ng-annotate');
var angularModule = require('gulp-angular-module');
var ngAutoBootstrap = require('gulp-ng-autobootstrap');
var ngtemplateCache = require('gulp-angular-templatecache');
var webpackConfig = require("./webpack.config.js");
var webpackCompiler = webpack(webpackConfig);

var env = process.env.NODE_ENV || 'development';


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




// inject bower components
gulp.task('wiredep', function () {
  return gulp.src(config.sourceDir + '/views/partials/*.html')
    .pipe(wiredep({
      directory: 'bower_components',
      ignorePath: '../../../../',
      //exclude: [/bootstrap-sass-official/, /bootstrap\.css/, /bootstrap\.css/, /foundation\.css/]
    }))
    .pipe(gulp.dest(config.sourceDir + '/views/partials'));
});


//inject sass files to uikit.scss preprocessor
gulp.task('injector:sass', function () {
  return gulp.src(config.sourceDir + '/assets/styles/uikit.scss')
    .pipe(inject(gulp.src([
        config.sourceDir + '/assets/styles/**/*.scss',
        config.sourceDir + '/components/**/*.scss',
        '!' + config.sourceDir + '/assets/styles/uikit.scss',
        '!' + config.sourceDir + '/assets/styles/vendor.scss' 
      ], {read: false}), {
      transform: function(filePath) {
        filePath = filePath.replace('src/uikit/', '../../');
        return '@import \'' + filePath + '\';';
      },
      starttag: '// injector',
      endtag: '// endinjector',
      addRootSlash: false
    }))
    .pipe(gulp.dest( config.sourceDir + '/assets/styles/'));
});

//inject css
gulp.task('injector:css', ['styles:demo'], function () {
  return gulp.src(config.sourceDir + '/views/partials/intro.html')
    .pipe(inject(gulp.src([
        config.general.dest.uikit + '/styles/**/*.css'
        //'!.tmp/app/vendor.css'
      ], {read: false}), {
      ignorePath: '/dist',
      addRootSlash: false
    }))
    .pipe(gulp.dest(config.sourceDir + '/views/partials'));
});

//injector js
gulp.task('injector:js', ['scripts'], function () {
  return gulp.src(config.sourceDir + '/views/partials/outro.html')
    .pipe(inject(gulp.src([
      config.general.dest.uikit + '/scripts/**/*.js',
      !config.general.dest.uikit + '/scripts/**/*.spec.js',
      !config.general.dest.uikit + '/scripts/**/*.mock.js'
    ]).pipe(angularFilesort()), {
      ignorePath: '/dist',
      addRootSlash: false
    }))
    .pipe(gulp.dest(config.sourceDir + '/views/partials'));
});


gulp.task('injector', ['wiredep', 'injector:sass', 'injector:css', 'injector:js']);


// styles
gulp.task('styles:demo', ['wiredep'], function () {
	return gulp.src(config.general.src.styles.demo)
		.pipe(sass({
			errLogToConsole: true
		}))
		.pipe(prefix('last 1 version'))
		.pipe(gulpif(!env, csso()))
		.pipe(rename('demo.css'))
		.pipe(gulp.dest(config.general.dest.demo + '/styles'))
		.pipe(gulpif(env, reload({stream:true})));
});

gulp.task('styles:uikit', function () {

	return gulp.src(config.general.src.styles.uikit)
		.pipe(sass({style: 'expanded'}))
		.on('error', function handleError(err) {
		  console.error(err.toString());
		  this.emit('end');
		})
		.pipe(prefix('last 1 version'))
		.pipe(gulpif(!env, csso()))
		.pipe(gulp.dest(config.general.dest.uikit + '/styles'))
		.pipe(gulpif(env, reload({stream:true})));
});

gulp.task('styles', ['styles:demo', 'styles:uikit']);


// scripts
gulp.task('scripts:demo', function () {
	return gulp.src(config.general.src.scripts.demo)
		.pipe(concat('demo.js'))
		.pipe(gulpif(!env, uglify()))
		.pipe(gulp.dest(config.general.dest.demo + '/scripts'));
});


gulp.task('angularmodules', function(){
    return gulp.src(['./src/uikit/components/**/*.js'])
        .pipe(angularModule({
			//moduleDefinitionFileName: 'uikit.js',
			masterVendorModules: ['uikit.core', 'ngMaterial','ngMessages'],
			masterModule: 'uikit'
		}))
    .pipe(gulp.dest(config.tmpDir));
});

gulp.task('scripts:uikit', ['jshint', 'angularmodules', 'ngtemplatecache'], function (cb) {
	return gulp.src(config.general.src.scripts.uikit)
		.pipe(concat('uikit.js'))
		.pipe(gulpif(!env, ngAnnotate()))
		.pipe(gulpif(!env, uglify()))
		.pipe(gulp.dest(config.general.dest.uikit + '/scripts'));
});

gulp.task('scripts', ['scripts:demo', 'scripts:uikit']);



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

//copy bower components to dist directory
gulp.task('bowercopy', function () {
	return gulp.src(config.general.src.components)
		.pipe(gulp.dest(config.general.dest.root + '/bower_components'));
});

//copy template controllers to dist directory
gulp.task('controllers', function () {
  return gulp.src(config.general.src.controllers)
    .pipe(gulp.dest(config.general.dest.uikit + '/scripts'));
});


// collate
gulp.task('collate', function () {

	// 'collate' is a little different -
	// it returns a promise instead of a stream

	var deferred = Q.defer();

	var opts = {
		materials: config.general.src.materials,
		dest: config.general.dest.demo + '/data/data.json'
	};

	// run the collate task; resolve deferred when complete
	collate(opts, deferred.resolve);

	return deferred.promise;

});

// assembly
gulp.task('assemble:demo', function () {
	var opts = {
		data: config.general.dest.demo + '/data/data.json',
		template: false
	};

	return gulp.src(config.general.src.views)
		.pipe(compile(opts))
		.pipe(gulp.dest(config.general.dest.root));
});

gulp.task('assemble:templates', function () {
	var opts = {
		data: config.general.dest.demo + '/data/data.json',
		template: true
	};
	return gulp.src([config.sourceDir + '/templates/**/*.html', '!' + config.sourceDir + '/templates/*/partials/*.html', '!' + config.sourceDir + '/templates/*/styles/*.scss', '!' + config.sourceDir + '/templates/*/scripts/*.js'])
		.pipe(compile(opts))
		//.pipe(rename({
		//	suffix: 'template'
		//}))
		.pipe(gulp.dest(config.general.dest.root));
});

gulp.task('assemble', ['collate'], function () {
	gulp.start('assemble:demo', 'assemble:templates');
});





// server
gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: config.general.dest.root,
			routes: {
			        "/BAREM": "dist",
			        "/PO": "dist",
			        "/SFSHOP": "dist",
			}
		},
		notify: false,
		logPrefix: 'UIKIT',
		port: 9000,
		open:false
	});
});


//angular template cache
gulp.task('ngtemplatecache', function () {
    return gulp.src([config.sourceDir + '/**/**/*.tmpl.html'])
        .pipe(ngtemplateCache({
          module: 'uikit',
        	filename: 'partials.js',
          //moduleSystem: 'browserify',
          //templateHeader: '["$templateCache", function ($templateCache) {\n',
          //templateFooter: '\n}];'
        }))
        .pipe(gulp.dest(config.tmpDir));
});



// watch
gulp.task('watch', ['browser-sync'], function () {
	gulp.watch([config.sourceDir + '/**/**/*.{html,md}', '!' + config.sourceDir + '/**/**/*.tmpl.html'], ['assemble', browserSync.reload]);
	gulp.watch([config.sourceDir + '/**/**/*.tmpl.html', config.sourceDir + '/templates/*/partials/*.tmpl.html'], ['ngtemplatecache', 'scripts:uikit', browserSync.reload]);
	gulp.watch('src/demo/styles/**/*.scss', ['styles:demo']);
	gulp.watch(config.sourceDir + '/assets/styles/**/*.scss', ['styles', browserSync.reload]);
	gulp.watch(config.sourceDir + '/elements/**/*.scss', ['styles:uikit', browserSync.reload]);
	gulp.watch(config.sourceDir + '/components/**/*.scss', ['styles:uikit', browserSync.reload]);
	gulp.watch(config.sourceDir + '/templates/**/styles/*.scss', ['styles:uikit', browserSync.reload]);
	gulp.watch('src/demo/scripts/**/*.js', ['scripts:demo', browserSync.reload]);
	gulp.watch([config.sourceDir + '/uikit-core.js'], ['scripts:uikit', browserSync.reload]);
	gulp.watch(config.sourceDir + '/assets/scripts/**/*.js', ['scripts:uikit', browserSync.reload]);
	gulp.watch(config.sourceDir + '/elements/**/*.js', ['scripts:uikit', browserSync.reload]);
	gulp.watch(config.sourceDir + '/components/*/*.js', ['scripts:uikit', browserSync.reload]);
	gulp.watch(config.sourceDir + '/components/**/*-controller.js', ['controllers', browserSync.reload]);
	gulp.watch([config.sourceDir + '/templates/**/scripts/*.js', config.sourceDir + '/elements/*.js', ], ['controllers', 'scripts:uikit', browserSync.reload]);
	gulp.watch(config.general.src.images, ['images', browserSync.reload]);
});


// default build task
gulp.task('default', ['clean'], function () {
	// define build tasks
	var tasks = [
		'images',
		'styles',
		'scripts',
		'controllers',
		'assemble',
		'bowercopy',
		'injector'
	];

	// run build
	runSequence(tasks, function () {
		if (env) {
			gulp.start('watch');
		}
	});

});
