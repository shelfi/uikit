/**
 * Pass the Fabricator views through Handlebars
 */

'use strict';

// modules
var fs = require('fs');
var path = require('path');
var through = require('through2');
var nunjucks = require('nunjucks');
var config = require('../config');

/**
 * Contents of data.json
 * @type {Object}
 */
var data;
var sourceDir = config.sourceDir + '/';

var env = nunjucks.configure(sourceDir + 'views/partials/', {tags: {
	variableStart: '<$',
	variableEnd: '$>'
}, watch: true});
/**
 * Register partials with Nunjucks
 */
var registerPartials = function () {
	//define source directory
	var partials = fs.readdirSync(sourceDir + 'views/partials'),
		html;
	for (var i = partials.length - 1; i >= 0; i--) {
		html = fs.readFileSync(sourceDir + 'views/partials/' + partials[i], 'utf-8');
		env.getTemplate(partials[i], html);
	}
};


/**
 * Assemble standard views (e.g. components, structures, documentation)
 */

var assembleFabricator = function (file, enc, cb) {
	// augment data object
	env.addGlobal('fabricator', true);
	// template pages
	var source = file.contents.toString(),
		template = env.renderString(source, data),
		html = template;
		//html = template;
	// save as file buffer
	file.contents = new Buffer(html);
	this.push(file);

	cb();
};

/**
 * Assemble templates
 */
var assembleTemplates = function (file, enc, cb) {
	// augment data object
	//data.fabricator = false;
	env.addGlobal('fabricator', false);

	// use the filename as the key value lookup in the data.json object
	var key = path.basename(file.path, '.html').replace(/-/g, '');

	// define comment blocks to wrap the template code
	var comments = {
			start: '\n\n<!-- Start ' + data.templates[key].name + ' template -->\n\n',
			end: '\n\n<!-- /End ' + data.templates[key].name + ' template -->\n\n'
		};

	// concat file contents
	var source = '{% include "intro.html" %}' +
				comments.start +
				data.templates[key].content +
				comments.end +
				'{% include "outro.html" %}';

	// template
	var template = env.renderString(source),
	html = template;

	// save as file buffer
	file.contents = new Buffer(html);
	this.push(file);
	cb();

};

module.exports = function (opts) {
	data = JSON.parse(fs.readFileSync(opts.data));
	registerPartials();
	return through.obj((opts.template) ? assembleTemplates : assembleFabricator);
};
