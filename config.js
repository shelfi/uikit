var gutil = require('gulp-util');

// uikit source
exports.tmpDir = './.tmp';
exports.sourceDir = './src/uikit';
exports.VERSION = '0.1.0';

// uikit configs
exports.general = {
		dev: gutil.env.dev,
		src: {
			scripts: {
				demo: [
					'./src/demo/scripts/prism.js',
					'./src/demo/scripts/demo.js'
				],
				uikit: [this.tmpDir + '/uikit.js', this.sourceDir + '/uikit-core.js' , this.sourceDir + '/components/*/*.js', this.tmpDir + '/partials.js']
			},
			styles: {
				demo: './src/demo/styles/demo.scss',
				uikit: this.sourceDir + '/assets/styles/uikit.scss'
			},
			images: this.sourceDir + '/assets/images/**/*',
			controllers: [this.sourceDir + '/**/*-controller.js'],
			components: 'bower_components/**/*',
			views: this.sourceDir + '/views/*.html',
			materials: [
				'elements',
				'components',
				'templates',
				'documentation'
			]
		},
		dest: {
			root: './dist',
			demo: './dist/demo',
			uikit: './dist/uikit'
		},
		buildconfig: {
		  banner:
		    '/*!\n' +
		    ' * Angular Material Design\n' +
		    ' * https://github.com/angular/material\n' +
		    ' * @license MIT\n' +
		    ' * v' + this.VERSION + '\n' +
		    ' */\n',
		  jsBaseFiles: [
		    this.sourceDir + 'components/**/*.js',
		    '!' + this.sourceDir + 'components/**/*.spec.js',
		  ],
		  jsFiles: [
		    'src/**/*.js'
		  ],
		  themeBaseFiles: [
		    this.sourceDir + 'assets/styles/variables.scss',
		    this.sourceDir + 'assets/styles/mixins.scss',
		  ],
		  scssBaseFiles: [
		    this.sourceDir + 'assets/styles/uikit.scss',
		  ],
		  scssStandaloneFiles: [
		    this.sourceDir + 'assets/styles/uikit.scss',
		  ],
		  paths: this.sourceDir + 'components/**',
		  outputDir: 'dist/'
		}
};
