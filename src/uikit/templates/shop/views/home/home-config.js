(function () {

	'use strict';

	angular.module('shop')
		.config(function ($stateProvider) {

			$stateProvider.state('home', {
				url: '/',
				templateUrl: 'shop/views/home/home.html',
				controller: 'homeController',
				controllerAs: 'ctrl'
			});
		});
})();