(function () {

	'use strict';

	angular.module('shop')
		.service('productService', ['globalService', function (globalService) {

			this.getUnitPrice = function (product) {

				//overridable global property
				//urun fiyati vergi iceriyor / icermiyor
				//vergi orani
				
				var price = product.price[globalService.currency.current];
				if(product.included) {
					price = product.price[globalService.currency.current] * 100 / (100 + product.vat);
				}
				return price;
				/*
				var price = product.price[0].value;
				if(product.included) {
					price = product.price[0].value * 100 / (100 + product.vat);
				}
				return price;

				var i = 0;
				var qty = 0;
				for(i = 0; i < orderDocument.products.length; i++) {
					qty += parseFloat(orderDocument.products[i].qty);
				}
				for(i = 0; i < product.price.length; i++) {
					
					if(parseFloat(product.price[i].min) <= qty && parseFloat(product.price[i].max) >= qty) {
						return parseFloat(product.price[i]);
					}
					//Return highest unit price
					if(i == product.price.length - 1) {
						return parseFloat(product.price[i]);
					}
				}
				return product.price;
				*/
			};

			this.getAmount = function (product) {
				return this.getUnitPrice(product) * product.qty;
			};

			this.onAmountChange = function (product) {
				product.amount = this.getAmount(product);
			};
			
			/*
			//Computed properties
			//http://angular-tips.com/blog/2014/02/computer-properties-with-javascript-properties/
			
			Object.defineProperty(product, 'amount', {
				get: function () {
					return _self.product.getLineAmount(product);
				},
				//https://github.com/es-shims/es5-shim
				//https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
				//defineGetter: function () {
				//	return _self.product.getLineAmount(product);	
				}
			});

			Object.defineProperty(doc, 'subtotal', {
				get: function () {
					return _self.getCartTotal();
				}
			});
			*/



			/*
			
			// open modal
			this.calculateShipment = function (size) {
			    var modalInstance = $modal.open({
			      templateUrl: 'components/modal/partials/modal-calculate-shipment.html',
			      controller: globalService.ModalInstanceCtrl,
			      size: size
			    });
			 };
			 this.addGiftOption = function (size) {
			    var modalInstance = $modal.open({
			      templateUrl: 'components/modal/partials/modal-add-gift-option.html',
			      controller: globalService.ModalInstanceCtrl,
			      size: size
			    });
			 };
			 this.addPromotionCode = function (size) {
			    var modalInstance = $modal.open({
			      templateUrl: 'components/modal/partials/modal-add-gift-option.html',
			      controller: globalService.ModalInstanceCtrl,
			      size: size
			    });
			 };
			 this.addOrderNote = function (size) {
			    var modalInstance = $modal.open({
			      templateUrl: 'components/modal/partials/modal-add-order-note.html',
			      controller: globalService.ModalInstanceCtrl,
			      size: size
			    });
			 };
			 CartFactory.getCartQuantity();
			 //this.order = docs.order;

			// Please note that $modalInstance represents a modal window (instance) dependency.
			// It is not the same as the $modal service used above.
			*/
		}]);
})();