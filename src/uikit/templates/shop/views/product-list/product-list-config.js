(function () {

	'use strict';

	angular.module('shop')
		.config(function ($urlRouterProvider, $stateProvider) {

			$urlRouterProvider.otherwise('/');

			$stateProvider.state('home', {
				url: '/',
				templateUrl: 'shop/views/home/home.html',
				controller: 'homeController',
				controllerAs: 'ctrl'
			});

			$stateProvider.state('products', {
				url: '/products',
				templateUrl: 'shop/views/product-list/product-list.html',
				controller: 'productListController',
				controllerAs: 'ctrl'
			});

		});
})();