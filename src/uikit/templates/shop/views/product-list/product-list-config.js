(function () {

	'use strict';

	angular.module('shop')
		.config(function ($stateProvider) {
			$stateProvider.state('products', {
				url: '/products',
				templateUrl: 'shop/views/product-list/product-list.html',
				controller: 'productListController',
				controllerAs: 'ctrl'
			});
		});
})();