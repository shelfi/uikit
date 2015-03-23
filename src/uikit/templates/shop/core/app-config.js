(function () {

	'use strict';

	angular.module('shop')
		.config(function ($urlRouterProvider) {

			$urlRouterProvider.otherwise('/');
		});
})();