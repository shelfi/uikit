(function () {

	'use strict';

	angular.module('shop')
		.service('orderService', ['globalService', 'orderDocument', 'productService', function (globalService, orderDocument, productService) {

			var _self = this;

			this.calculate = function () {
				var subtotal = 0;
				var vat = 0;
				var total = 0;
				if(orderDocument.products) {
					for(var i = 0; i < orderDocument.products.length; i++) {
						var p = orderDocument.products[i];
						if(p.amount) {
							var config = globalService.settings.sfProduct;
							var s = p.amount;
							var v = p.amount * (p.vat || config.vat) / 100;
							var t = s + v;

							if((p.included || config.included) === true) {
								//amount = price + (price * vat / 100)
								//100 * amount = (100 * price) + (price * vat)
								//100 * amount = price * (100 + vat)
								//price = 100 * amount / (100 + vat)
								s = p.amount * 100 / (100 + (p.vat || config.vat));
								v = p.amount - s; //s * p.vat / 100;
								t = p.amount;
							}

							subtotal += s;
							vat += v;
							total += t;
						}
					}
				}
				orderDocument.subtotal = subtotal;
				orderDocument.vat = vat;
				orderDocument.total = total;
			};

			this.product = {};

			this.product.add = function (product) {
				
				if(!product.qty) {
					product.qty = 1;
				}

				if(!orderDocument.products) {
					orderDocument.products = [];
				}
				//Delete product if cart module does not exist
				var config = globalService.settings.sfOrder;
				if(!config.cartExist) {
					orderDocument.products = [];
				}
				//$rootScope.$broadcast('order::beforeProductAdded', product);
				orderDocument.products.push(product);
				_self.calculate();
				//$rootScope.$broadcast('order::afterProductAdded', product);
			};

			this.product.remove = function (product) {
				//$rootScope.$broadcast('order::beforeProductDeleted', product);
				var index = orderDocument.products.indexOf(product);
				orderDocument.products.splice(index, 1);
				_self.calculate();
				//$rootScope.$broadcast('order::afterProductDeleted', product);
			};
			
			this.product.onAmountChange = function (product) {
				product.amount = productService.getAmount(product);
				_self.calculate();
			};
		}]);
})();