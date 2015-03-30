(function () {

	'use strict';

	angular.module('shop')
		.provider('paymentService', function () {

			var gateways = [];

			this.addGateway = function (gateway) {
				gateways.push(gateway);
			};

			this.$get = function () {

				return {
					getGateways: function () {
						return gateways;
					},
					getAmount: function () {
						return 5;
					}
				};
			};
		});
		/*
		.service('paymentService', ['globalService', 'orderDocument', function (globalService, orderDocument) {

			this.getAmount = function (product) {
				return this.getUnitPrice(product) * product.qty;
			};

			this.onAmountChange = function (product) {
				product.amount = this.getAmount(product);
			};
		}]);
		*/
})();