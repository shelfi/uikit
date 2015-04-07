(function () {

	'use strict';

	angular.module('shop')
		.config(function ($stateProvider) {
			$stateProvider.state('delivery', {
				url: '/delivery',
				templateUrl: 'shop/views/delivery/delivery.html',
				controller: 'deliveryController',
				controllerAs: 'ctrl'
			});
		});
})();