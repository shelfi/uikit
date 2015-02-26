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
var insert = require('gulp-insert');
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
gulp.task('injector:sass',['styles'], function () {
  return gulp.src(config.sourceDir + '/assets/styles/uikit.scss')
    .pipe(inject(gulp.src([
        config.sourceDir + '/assets/styles/**/*.scss',
        config.sourceDir + '/snippets/**/*.scss',
        config.sourceDir + '/modules/**/*.scss',
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

//inject css
gulp.task('injector:css', function () {
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


gulp.task('injector', ['injector:sass', 'injector:css', 'injector:js', 'wiredep']);


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

gulp.task('styles', ['styles:fabricator', 'styles:uikit']);


// scripts
gulp.task('scripts:fabricator', function () {
	return gulp.src(config.general.src.scripts.fabricator)
		.pipe(concat('f.js'))
		.pipe(gulpif(!config.general.dev, uglify()))
		.pipe(gulp.dest(config.general.dest.fabricator + '/scripts'));
});


gulp.task('angularmodules', function(){
    return gulp.src('./src/material/modules/**/*.js')
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
		.pipe(gulpif(!config.general.dev, ngAnnotate()))
		//.pipe(gulpif(!config.general.dev, uglify()))
		.pipe(gulp.dest(config.general.dest.uikit + '/scripts'));
});

gulp.task('scripts', ['scripts:fabricator', 'scripts:uikit']);



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

//controllers
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




/** *****************************************
 *
 * Project-wide Build Tasks
 *
 ** ***************************************** */

gulp.task('build', ['build-resources', 'build-scss', 'build-js']);

gulp.task('build-resources', function() {
  return gulp.src(['material-font/*'])
    .pipe(gulp.dest(path.join(config.outputDir, 'material-font')));
});

gulp.task('build-all-modules', function() {
  return series(gulp.src(['src/components/*', 'src/core/'])
    .pipe(through2.obj(function(folder, enc, next) {
      var moduleId = folder.path.indexOf('components') > -1 ?
        'material.components.' + path.basename(folder.path) :
        'material.' + path.basename(folder.path);

      var stream;
      if (IS_RELEASE_BUILD && BUILD_MODE.useBower) {
        stream = mergeStream(buildModule(moduleId, true), buildModule(moduleId, false));
      } else {
        stream = buildModule(moduleId, false);
      }

      stream.on('end', function() {
        next();
      });
    })),
  themeBuildStream().pipe(
      gulp.dest(path.join(BUILD_MODE.outputDir, 'core'))
  ));
});

function buildModule(module, isRelease) {
  if ( module.indexOf(".") < 0) {
    module = "material.components." + module;
  }

  var name = module.split('.').pop();
  gutil.log('Building ' + module + (isRelease && ' minified' || '') + ' ...');

  utils.copyDemoAssets(name, 'src/components/', 'dist/demos/');

  return utils.filesForModule(module)
    .pipe(filterNonCodeFiles())
    .pipe(gulpif('*.scss', buildModuleStyles(name)))
    .pipe(gulpif('*.js', buildModuleJs(name)))
    .pipe(BUILD_MODE.transform())
    .pipe(insert.prepend(config.banner))
    .pipe(gulpif(isRelease, buildMin()))
    .pipe(gulp.dest(BUILD_MODE.outputDir + name));


  function buildMin() {
    return lazypipe()
      .pipe(gulpif, /.css$/, minifyCss(), uglify({ preserveComments: 'some' }))
      .pipe(rename, function(path) {
        path.extname = path.extname
          .replace(/.js$/, '.min.js')
          .replace(/.css$/, '.min.css');
      })
      .pipe(utils.buildModuleBower, name, VERSION)
      ();
  }

function buildModuleJs(name) {
  return lazypipe()
    .pipe(plumber)
    .pipe(ngAnnotate)
    .pipe(concat, name + '.js')
    ();
}

function buildModuleStyles(name) {
  var files = [];
  config.themeBaseFiles.forEach(function(fileGlob) {
    files = files.concat(glob(fileGlob, { cwd: __dirname }));
  });
  var baseStyles = files.map(function(fileName) {
    return fs.readFileSync(fileName, 'utf8').toString();
  }).join('\n');

  return lazypipe()
    .pipe(insert.prepend, baseStyles)
    .pipe(gulpif, /theme.scss/,
      rename(name + '-default-theme.scss'), concat(name + '.scss')
    )
    .pipe(sass)
    .pipe(autoprefix)
    (); // invoke the returning fn to create our pipe
}

}


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



gulp.task('ngtemplatecache', function () {
    gulp.src([config.sourceDir + '/**/**/*.tmpl.html'])
        .pipe(ngtemplateCache({
          module: 'uikit',
        	filename: 'partials.js',
          //moduleSystem: 'browserify',
          //templateHeader: '["$templateCache", function ($templateCache) {\n',
          //templateFooter: '\n}];'
        }))
        .pipe(gulp.dest(config.sourceDir));
});



// watch
gulp.task('watch', ['browser-sync'], function () {
	gulp.watch([config.sourceDir + '/**/**/*.{html,md}', '!' + config.sourceDir + '/**/**/*.tmpl.html', '!' + config.sourceDir + '/templates/partials/*.html'], ['assemble', browserSync.reload]);
	gulp.watch([config.sourceDir + '/**/**/*.tmpl.html'], ['ngtemplatecache', 'scripts:uikit', browserSync.reload]);
	gulp.watch([config.sourceDir + '/templates/partials/*.html'], ['assemble', browserSync.reload]);
	gulp.watch('src/fabricator/styles/**/*.scss', ['styles:fabricator']);
	gulp.watch(config.sourceDir + '/assets/styles/**/*.scss', ['styles', browserSync.reload]);
	gulp.watch(config.sourceDir + '/elements/**/*.scss', ['styles:uikit', browserSync.reload]);
	gulp.watch(config.sourceDir + '/snippets/**/*.scss', ['styles:uikit', browserSync.reload]);
	gulp.watch(config.sourceDir + '/modules/**/*.scss', ['styles:uikit', browserSync.reload]);
	gulp.watch(config.sourceDir + '/templates/**/*.scss', ['uikit:uikit', browserSync.reload]);
	gulp.watch('src/fabricator/scripts/**/*.js', ['scripts:fabricator', browserSync.reload]);
	gulp.watch([config.sourceDir + '/uikit-core.js'], ['scripts:uikit', browserSync.reload]);
	gulp.watch(config.sourceDir + '/assets/scripts/**/*.js', ['scripts:uikit', browserSync.reload]);
	gulp.watch(config.sourceDir + '/elements/**/*.js', ['scripts:uikit', browserSync.reload]);
	gulp.watch(config.sourceDir + '/snippets/**/*.js', ['scripts:uikit', browserSync.reload]);
	gulp.watch(config.sourceDir + '/modules/**/*.js', ['scripts:uikit', browserSync.reload]);
	gulp.watch([config.sourceDir + '/templates/*.js', config.sourceDir + '/elements/*.js', ], ['controllers', 'scripts:uikit', browserSync.reload]);
	gulp.watch(config.general.src.images, ['images', browserSync.reload]);
});


// default build task
gulp.task('default', ['clean'], function () {
	// define build tasks
	var tasks = [
		'injector',
		'images',
		'assemble',
    'controllers',
		'components'
	];

	// run build
	runSequence(tasks, function () {
		if (config.general.dev) {
			gulp.start('watch');
		}
	});

});
