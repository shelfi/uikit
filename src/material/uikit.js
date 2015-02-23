'use strict'
var theme = require('raw!./assets/styles/theme.css');
var m = angular.module('uikit', ['ngMaterial', 'ngMessages'])
	.config(function($mdThemingProvider, $mdIconProvider) {
		$mdThemingProvider.alwaysWatchTheme(true);
		$mdThemingProvider.theme('altTheme')
			.primaryPalette('purple') // specify primary color, all other color intentions will be inherited from default
			.accentPalette('orange');
		$mdIconProvider
			.iconSet('action', './uikit/images/icons/svg-sprite-action.svg', 24)
			.iconSet('navigation', './uikit/images/icons/svg-sprite-navigation.svg', 24)
	    })

	//.constant('$MD_THEME_CSS', theme);
require('./bootstrap.js')(m);
require('./assets/styles/uikit.scss');