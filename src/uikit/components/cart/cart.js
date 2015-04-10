(function(){

	'use strict';

	angular.module('uikit.components.cart', [])

		.controller('cartCtrl', function () {

			this.order = [
				{image: 'holder.js/60x60', title: 'Super T-shirt', price: 15, quantity: 1 }, 
				{image: 'holder.js/60x60', title: 'Awesome Pants', price: 30,  quantity: 1 },
			];

			this.columns = [
				{ name: 'image', width: '10', template: '<img data-src="{{item.image}}" />' },
				{ name: 'title', width: '', template: '<small>{{item.title}}</small>' },
				{ name: 'price', width: '10' },
				//{ name: 'quantity', width: '10', template: '<md-input-container><label>Quantity</label><input ng-model="item.quantity"></md-input-container>' }
				//{ name: 'quantity', width: '10', template: '<md-input-container><md-select ng-model="item.quantity" placeholder="Select quantity"><md-option ng-repeat="opt in [100, 250, 500, 1000, 2500]" ng-value="opt">{{ opt }}</md-option></md-select></md-input-container>'
				{ name: 'quantity', width: '15', template: '<md-select ng-model="item.quantity" placeholder="q"><md-option ng-repeat="opt in [100, 200, 500, 1000, 5000]" ng-value="opt">{{ opt }}</md-option></md-select>' }
			];
		})

		.directive('sfCart', function () {
			return {
				restrict: 'E',
				templateUrl: 'components/cart/cart.tmpl.html',
				scope: {
					order: '=ngModel',
					columns: '=?',
					totals: '=?',
					actions: '=?',
					showHeader: '@',
					showGroupAction: '@',
					removeItem: '&'
				},
				bindToController: true,
				controller: function () {
					this.triggerActionCallback = function (cb) {
						var items = this.order.products.filter(function (p) {
							return p.selected === true;
						});
						if (items.length) {
							cb(items);
						}
					};
				},
				controllerAs: 'ctrl',
				link: function (scope, element, attrs) {
					if (!attrs.columns) {
						scope.ctrl.columns = [
							{ name: 'image', title: 'Image', width: '10', template: '<img holder-js="{{ item.image }}" />' },
							{ name: 'name', title: 'Name' },
							{ name: 'qty', title: 'Qty', width: '15', template: '<md-input-container ng-if="!item.qtyOptions"><label>Quantity</label><input ng-model="item.qty"></md-input-container><md-select ng-if="item.qtyOptions" ng-model="item.qty" placeholder="Select quantity"><md-option ng-repeat="qtyOption in item.qtyOptions" ng-value="qtyOption">{{ qtyOption }}</md-option></md-select>' },
							{ name: 'total', title: 'Total', width: '10', template: '{{ item.price * item.qty | currency }}' }
						];
					}

					if (scope.ctrl.showGroupAction === 'true') {
						scope.ctrl.columns.unshift({
							name: 'select',
							title: 'Select',
							width: '5',
							template: '<md-checkbox ng-model="item.selected" aria-label="Select item"></md-checkbox>'
						});
					}

					if (!attrs.totals) {
						scope.ctrl.totals = [
							{
								name: 'total',
								title: 'Total',
								fn: function (order) {
									return order.products.reduce(function (returned, current) {
										return returned + (current.price * current.qty);
									}, 0);
								}
							}
						];
					}
					scope.ctrl.actions = scope.ctrl.actions || [];
					if (attrs.removeItem) {
						scope.ctrl.actions.unshift({
							name: 'remove',
							title: 'Remove',
							icon: 'navigation:ic_close_24px',
							cb: function (items) {
								scope.ctrl.removeItem({ items: items });
							}
						});
					}
					if (scope.ctrl.actions.length) {
						scope.ctrl.columns.push({
							name: 'actions',
							title: 'Actions',
							width: '5',
							template: '<md-button ng-repeat="action in ctrl.actions" aria-label="{{ action.title }}" ng-click="action.cb(item)"><md-icon md-svg-icon="{{ action.icon }}"></md-icon></md-button>'
						});
					}
				}
			};
		});

})();