(function () {

	'use strict';

	angular.module('shop')
		.config(function ($stateProvider) {
			$stateProvider.state('products_', {
				url: '/products/:slug',
				templateUrl: 'shop/views/product-detail/product-detail.html',
				controller: 'productDetailController',
				controllerAs: 'ctrl'
			});
		});
})();