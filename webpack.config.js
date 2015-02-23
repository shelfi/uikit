// webpack.config.js
var webpack = require("webpack");
var config = require('./config')

module.exports = {
	debug: true,
	//devtool: 'eval-source-map',
	//devtool: 'sourcemap',
	devtool: 'eval',
	cache: true,
	progress: true,
	colors: true,
	entry: {
		uikit: './src/material/uikit.js',
		vendor: [
			'angular',
			'angular-material',
			'angular-aria',
			'angular-animate',
			'angular-messages',
			'imports?this=>window!holderjs'
		]
	},
	output: {
		path: "./dist/uikit/scripts/",
		filename: "[name].bundle.js",
		chunkFilename: '[id].bundle.js',
		publicPath: '/'
		//libraryTarget: 'var'
	},
	module:{
		loaders: [
			//{ test: /\.js$/, loader: "script" },
			{ test: /\.html$/, loader: "html" },
			{ test: /\.json$/, loader: "json" },
			//{ test: /\.css$/, loader: "style!css"},
			//{ test: /\.scss$/, loader: "style!css!sass?outputStyle=expanded&error=true&includePaths[]=./bower_components"},
			{ test: /\.css$/, loader: "css"},
			{ test: /\.scss$/, loader: "style!css!sass?outputStyle=expanded&error=true&includePaths[]=./bower_components, ./src/material/assets"},
			//{test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
			{ test: /\.jpg$/, loader: "url?limit=100000" },
			{ test: /\.ico$/, loader: "url?limit=100000" },
			{ test: /\.png$/, loader: "url?mimetype=image/png" },
			{ test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&prefix=build/&mimetype=application/font-woff" },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000"}
		]
	},
	resolve: {
		//root: [bowerComponentsPath, publicAssetsPath, appPath, nodeModulesPath]
		modulesDirectories: ['./node_modules', './bower_components'],
		alias: {
			angular: 'angular/angular.min.js',
			'angular-material': 'angular-material/angular-material.js',
			'angular-animate': 'angular-animate/angular-animate.min.js',
			'angular-aria': 'angular-aria/angular-aria.min.js',
			'angular-messages': 'angular-messages/angular-messages.min.js',
			'holderjs': 'holderjs/holder.min.js'

		}
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
	]
};