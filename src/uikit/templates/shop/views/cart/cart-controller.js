(function () {

	'use strict';

	angular.module('shop')
		.controller('cartController', function (orderDocument, products, orderService) {
			//controller

			this.order = orderDocument;



			//INFO: Sayfa yenilendiginde kaybolan urunler icin gecici olarak eklendi
			if (!this.order.products) {
				this.order.products = [];
			}
			if (this.order.products.length === 0) {
				orderService.product.add(products[1]);
				orderService.product.add(products[3]);
				orderService.product.add(products[5]);
			}
			//...
			

			this.columns = [
				{ name: 'image', width: '10', template: '<img holder-js="{{ item.image }}" />' },
				{ name: 'name', width: '', template: '<small>{{item.name}}</small>' },
				{ name: 'price', width: '10' },
				//{ name: 'quantity', width: '10', template: '<md-input-container><label>Quantity</label><input ng-model="item.quantity"></md-input-container>' }
				//{ name: 'quantity', width: '10', template: '<md-input-container><md-select ng-model="item.quantity" placeholder="Select quantity"><md-option ng-repeat="opt in [100, 250, 500, 1000, 2500]" ng-value="opt">{{ opt }}</md-option></md-select></md-input-container>'
				{ name: 'quantity', width: '15', template: '<md-select ng-model="item.quantity" placeholder="Select quantity"><md-option ng-repeat="opt in [100, 200, 500, 1000, 5000]" ng-value="opt">{{ opt }}</md-option></md-select>' }
			];
		});

})();