var gutil = require('gulp-util');

// uikit source
exports.tmpDir = './.tmp';
exports.sourceDir = './src/material';
exports.VERSION = '0.1.0';

// uikit configs
exports.general = {
		dev: gutil.env.dev,
		src: {
			scripts: {
				fabricator: [
					'./src/fabricator/scripts/prism.js',
					'./src/fabricator/scripts/fabricator.js'
				],
				uikit: [this.tmpDir + '/uikit.js', this.sourceDir + '/uikit-core.js' , this.sourceDir + '/modules/**/*.js', this.sourceDir + '/snippets/**/*.js', this.sourceDir + '/partials.js']
			},
			styles: {
				fabricator: './src/fabricator/styles/fabricator.scss',
				uikit: this.sourceDir + '/assets/styles/uikit.scss'
			},
			images: this.sourceDir + '/assets/images/**/*',
			controllers: [this.sourceDir + '/*/*-controller.js'],
			components: 'bower_components/**/*',
			views: this.sourceDir + '/views/*.html',
			materials: [
				'elements',
				'snippets',
				'templates',
				'documentation',
				'modules'
			]
		},
		dest: {
			root: './dist',
			fabricator: './dist/fabricator',
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
		    this.sourceDir + 'modules/**/*.js',
		    '!' + this.sourceDir + 'modules/**/*.spec.js',
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
		  paths: this.sourceDir + 'modules/**',
		  outputDir: 'dist/'
		}
};
