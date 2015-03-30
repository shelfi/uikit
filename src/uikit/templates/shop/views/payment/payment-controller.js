(function () {

	'use strict';

	angular.module('shop')
		.controller('paymentController', function (paymentService) {
			//controller

			this.gateways = paymentService.getGateways();
		});

})();