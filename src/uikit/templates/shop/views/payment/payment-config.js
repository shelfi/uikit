(function () {

	'use strict';

	angular.module('shop')
		.config(function ($stateProvider, paymentServiceProvider) {
			$stateProvider.state('payment', {
				url: '/payment',
				templateUrl: 'shop/views/payment/payment.html',
				controller: 'paymentController',
				controllerAs: 'ctrl'
			});

			paymentServiceProvider.addGateway({
				name: 'Garanti'
			});

			paymentServiceProvider.addGateway({
				name: 'Isbank'
			});

			paymentServiceProvider.addGateway({
				name: 'Paypal'
			});

			paymentServiceProvider.addGateway({
				name: 'Payu'
			});
		});
})();