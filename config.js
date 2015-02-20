var gutil = require('gulp-util');

// uikit source
exports.sourceDir = './src/material';

// uikit configs
exports.general = {
		dev: gutil.env.dev,
		src: {
			scripts: {
				fabricator: [
					'./src/fabricator/scripts/prism.js',
					'./src/fabricator/scripts/fabricator.js'
				],
				uikit: this.sourceDir + '/assets/scripts/uikit.js'
			},
			styles: {
				fabricator: './src/fabricator/styles/fabricator.scss',
				uikit: this.sourceDir + '/assets/styles/uikit.scss'
			},
			images: this.sourceDir + '/assets/images/**/*',
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
		}
};