(function () {

	'use strict';

	angular.module('shop')
		.config(function ($stateProvider, $mdIconProvider) {
			$stateProvider.state('products', {
				url: '/products',
				templateUrl: 'shop/views/product-list/product-list.html',
				controller: 'productListController',
				controllerAs: 'ctrl'
			});
			$mdIconProvider
				.icon('add_selected_to_cart', '/shop/assets/images/icons/cart.svg', 24)
				.icon('add_selected_to_favorite', '/shop/assets/images/icons/star-circle.svg', 24)
				.icon('compare_selected', '/shop/assets/images/icons/thumbs-up-down.svg', 24);
		});
})();