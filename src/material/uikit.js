'use strict'
var theme = require('raw!./assets/styles/theme.css');
var m = angular.module('uikit', ['ngMaterial', 'ngMessages'])
	.config(function($mdThemingProvider) {
		$mdThemingProvider.alwaysWatchTheme(true);
		$mdThemingProvider.theme('altTheme')
			.primaryPalette('purple') // specify primary color, all other color intentions will be inherited from default
			.accentPalette('orange')
	    });
require('./bootstrap.js')(m);
require('./assets/styles/uikit.scss');