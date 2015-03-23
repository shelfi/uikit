(function () {

	'use strict';

	angular.module('shop')
		.config(function ($stateProvider) {
			$stateProvider.state('cart', {
				url: '/cart',
				templateUrl: 'shop/views/cart/cart.html',
				controller: 'cartController',
				controllerAs: 'ctrl'
			});
		});
})();