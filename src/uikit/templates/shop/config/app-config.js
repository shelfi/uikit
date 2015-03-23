(function () {

	'use strict';

	angular.module('shop')
		.config(function ($urlRouterProvider, $stateProvider) {

			$urlRouterProvider.otherwise('/');

			$stateProvider.state('home', {
				url: '/',
				templateUrl: 'shop/assets/templates/pages/home.html',
				controller: 'homeController',
				controllerAs: 'ctrl'
			});

			$stateProvider.state('products', {
				url: '/products',
				templateUrl: 'shop/assets/templates/pages/product-list.html',
				controller: 'productListController',
				controllerAs: 'ctrl'
			});

		});
})();