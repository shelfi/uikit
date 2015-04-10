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
				{ name: 'total', title: 'Total', width: '10', template: '{{ item.price * item.qty | currency }}' },
				{ name: 'image', title: 'Image', width: '10', template: '<img holder-js="{{ item.image }}" />' },
				{ name: 'name', title: 'Name' },
				{ name: 'qty', title: 'Qty', width: '15', template: '<md-input-container ng-if="!item.qtyOptions"><label>Quantity</label><input ng-model="item.qty"></md-input-container><md-select ng-if="item.qtyOptions" ng-model="item.qty" placeholder="Select quantity"><md-option ng-repeat="qtyOption in item.qtyOptions" ng-value="qtyOption">{{ qtyOption }}</md-option></md-select>' }
			];



			this.actions = [
				{
					name: 'standby',
					title: 'Standby',
					icon: 'navigation:ic_more_vert_24px',
					cb: function (items) {
						console.log('Standby', items);
					}
				}
			];


			this.removeItem = function (items) {
				console.log('REMOVE', items);


				/*
				var confirm = $mdDialog.confirm()
					.title('Would you like to delete?')
					//.content('All of the banks have agreed to forgive you your debts.')
					//.ariaLabel('Lucky day')
					.ok('Yes')
					.cancel('No');
					//.targetEvent(ev);

				$mdDialog.show(confirm).then(function () {
					var index = this.items.indexOf(item);
					if (index !== -1) {
						this.items.splice(index, 1);
					}
				}.bind(this));
				*/
			};

			/*
			if (this.showStandbyButton === 'true') {

				this.standbyItem = function (item) {

					console.log('standby', item);
				};

				buttons.template += '<md-button aria-label="remove from cart" ng-click="ctrl.standbyItem(item)"><md-icon md-svg-icon="navigation:ic_unfold_more_24px"></md-icon></md-button>';
			}
			*/





			/*
			this.columns = [
				{ name: 'image', width: '10', template: '<img holder-js="{{ item.image }}" />' },
				{ name: 'name', width: '' },
				{ name: 'price', width: '10', template: '<small>{{ item.price | currency }}</small>' },
				{ name: 'qty', width: '15', template: '<md-input-container ng-if="!item.qtyOptions"><label>Quantity</label><input ng-model="item.qty"></md-input-container><md-select ng-if="item.qtyOptions" ng-model="item.qty" placeholder="Select quantity"><md-option ng-repeat="opt in item.qtyOptions" ng-value="opt">{{ opt }}</md-option></md-select>' }
			];

			this.totals = [
				{ title: 'vat', fn: function () { return 4; } },
				{ title: 'total', fn: function () { return 16; } }
			];
			*/
		});

})();