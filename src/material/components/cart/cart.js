(function(){

	'use strict';

	angular.module('uikit.components.cart', [])

	.controller('cartCtrl', function () {
		this.columns = [
			{ name: 'image', width: '25', template: '<img data-src="{{item.image}}" />' },
			{ name: 'title', width: '', template: '<small>{{item.title}}</small>' },
			{ name: 'price', width: '10' },
			{ name: 'quantity', width: '10', template: '<md-input-container><label>Quantity</label><input ng-model="item.quantity"></md-input-container>' }
		];
	})
	.directive('sfCart', function ($mdTheming) {
		return {
			restrict: 'E',
			templateUrl: 'components/cart/cart.tmpl.html',
			//link: postLink,
			bindToController: true,
			controller: function () {				

				if (this.showDeleteButton === 'true') {
					this.columns.push({
						name: 'delete',
						width: '5',
						template: '<md-button aria-label="remove from cart"><md-icon md-svg-icon="navigation:ic_close_24px"></md-icon></md-button>'
					});
				}

				this.getTotals = function () {
					var _this = this,
					totals = {};
					for (var i = 0; i < _this.cartitems.length; i++){
						totals.quantity =+ _this.cartitems[i].quantity;
						totals.price =+ _this.cartitems[i].price;
					}
					return totals;
				};
			},
			controllerAs: 'ctrl',
			scope: {
				order: '=ngModel',
				columns: '=',
				showHeader: '@',
				showDeleteButton: '@',
				showTotals: '@'
			}
		};

		//function postLink (scope, element){
		//	$mdTheming(element);
		//}
	});

})();