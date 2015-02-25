/**
 * Collate "materials" - html and md files
 * @description Gets contents of files, parses, and creates JSON
 */

'use strict';

var beautifyJs = require('js-beautify').js;
var beautifyHtml = require('js-beautify').html;
var beautifyCss = require('js-beautify').css;

var changeCase = require('change-case');
var cheerio = require('cheerio');
var fs = require('fs');
var gutil = require('gulp-util');
var junk = require('junk');
var markdown = require('marked');
var mkpath = require('mkpath');
var path = require('path');
var wrench = require('wrench');
var nunjucks = require('nunjucks');
var config = require('../config');

/**
 * Compiled component/structure/etc data
 * @type {Object}
 */
var data;


// configure marked
markdown.setOptions({
	langPrefix: 'language-'
});


// configure beautifier
var beautifyOptions = {
	'indent_size': 1,
	'indent_char': '    ',
	'indent_with_tabs': true,
	'preserve-newlines': true
};

var sourceDir = config.sourceDir + '/';
/*
var env = new nunjucks.Environment({
	tags: { 
	variableStart: '<$',
	variableEnd: '$>'},
	autoescape: false
});
*/
var env = nunjucks.configure([sourceDir + 'templates/partials/'], {
	tags: {
	variableStart: '<$',
	variableEnd: '$>'
}, watch: false});
// here watch is set to true so nunjucks can update compiled templates in memory (gulp action looks like it hangs)

/**
 * Parse a directory of files
 * @param {Sting} dir The directory that contains .html and .md files to be parsed
 * @return {Function} A stream
 */
var parse = function (dir) {

	// create key if it doesn't exihust
	if (!data[dir]) {
		data[dir] = {};
	}

	// get directory/subdirectory contents with recursive method and filter result
	var raw = wrench.readdirSyncRecursive(sourceDir + dir).filter(function (e, i, a){
		var stats = fs.lstatSync(sourceDir + dir + '/' + e);
		return e = !stats.isDirectory();
	}).filter(function (e, i, a){
		return e.indexOf('.tmpl.') === -1;
	}).filter(junk.not);

	// create an array of file names
	var fileNames = raw.map(function (e, i) {
		return e.replace(path.extname(e), '');
	}).map(function (e, i){
		return e.replace('-controller', '');
	}).map(function (e, i){
		return e.replace('-directive', '');
	});


	// de-dupe file names (both .html and .md present)
	var items = fileNames.filter(function (e, i, a) {
		return a.indexOf(e) === i;
	});

	//register template partials so that templates can include them
	var registerTemplatePartials = function () {
		//define source directory
		var partials = fs.readdirSync(sourceDir + 'templates/partials'),
			html;
		for (var i = partials.length - 1; i >= 0; i--) {
			html = fs.readFileSync(sourceDir + 'templates/partials/' + partials[i], 'utf-8');
			env.getTemplate(partials[i], html);
		}
	};

	// iterate over each item, parse, add to item object
	for (var i = 0, length = items.length; i < length; i++) {

		var item = {};
		item.id = items[i];

		//remove path name and dashes from item name
		item.name = changeCase.titleCase(item.id.replace(/-/ig, ' ') && item.id.replace(/^.+\//ig, ''));

		try {
			// compile templates
			var content = fs.readFileSync(sourceDir + dir + '/' + items[i] + '.html', 'utf8').replace(/(\s*(\r?\n|\r))+$/, '');
			var template = env.renderString(content);
			item.content = beautifyHtml(template, beautifyOptions);
			var $ = cheerio.load(item.content);
			if ($('.container__item').html() !== null){
				item.section = $('.container__item').map(function(i, el) {
					this === el;
					this.sectionID = $(this).attr('id').replace(/-/ig, ' ');
			 		return {title: this.sectionID, content: $(this).html()
			 	}}).get();
			}
			// register the helper
		} catch (e) {}

		try{
			//compile styles
			var sassContent = fs.readFileSync(sourceDir + dir + '/' + items[i] + '.scss', 'utf8').replace(/(\s*(\r?\n|\r))+$/, '');
			//var styles = Handlebars.compile(sassContent);
			var styles = env.renderString(sassContent);
			item.styles = beautifyCss(styles, beautifyOptions);
		} catch (e) {}

		try{
			//compile controllers
			var controllerContent = fs.readFileSync(sourceDir + dir + '/' + items[i] + '-controller.js', 'utf8').replace(/(\s*(\r?\n|\r))+$/, '');
			var controllers = env.renderString(controllerContent);
			item.controllers = beautifyJs(controllers, beautifyOptions);
		} catch (e) {}

		try{
			//compile directives
			var directiveContent = fs.readFileSync(sourceDir + dir + '/' + items[i] + '-directive.js', 'utf8').replace(/(\s*(\r?\n|\r))+$/, '');
			var directives = env.renderString(directiveContent);
			item.directives = beautifyJs(directives, beautifyOptions);
		} catch (e) {}

		try{
			//compile scripts
			var scriptsContent = fs.readFileSync(sourceDir + dir + '/' + items[i] + '.js', 'utf8').replace(/(\s*(\r?\n|\r))+$/, '');
			var scripts = env.renderString(scriptsContent);
			item.scripts = beautifyJs(scripts, beautifyOptions);
		} catch (e) {}

		try {
			var notes = fs.readFileSync(sourceDir + dir + '/' + items[i] + '.md', 'utf8');
			item.notes = markdown(notes);
		} catch (e) {}
		data[dir][item.id.replace(/-/g, '')] = item;
		registerTemplatePartials();
	}
};

module.exports = function (opts, cb) {
	data = {};
	// iterate over each "materials" directory
	for (var i = 0, length = opts.materials.length; i < length; i++) {
		parse(opts.materials[i]);
	}

	// write the json file
	mkpath.sync(path.dirname(opts.dest));

	fs.writeFile(opts.dest, JSON.stringify(data), function (err) {
		if (err) {
			gutil.log(err);
		} else {
			cb();
		}
	});

};
