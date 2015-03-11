(function(){

	'use strict';

	angular.module('uikit.components.productList', [])

		.directive('sfProductList', function () {
			return {
				restrict: 'E',
				templateUrl: 'components/productList/productList.tmpl.html',
				scope: {
					items: '=ngModel',
					layout: '@',
					rowItems: '@',
					

					actionButtons: '=',
					//pagination = true
					//sorter = true
					//filter = true



					// Comes from productItem
					itemLayout: '@',
					showImage: '@',
					showName: '@',
					showDescription: '@',
					showPrice: '@',
					showQuantity: '@',
					showPromotion: '@',
					selectable: '@'
				},
				bindToController: true,
				controller: function () {
					this.actionCallback = function (cb) {
						cb(this.items.filter(function (item) {
							return item.selected;
						}));
					};
					this.changeItemLayout = function (layout) {
						if (this.itemLayout === 'grid' && layout !== 'grid') {
							this.rowItems_ = this.rowItems;
							this.rowItems = 1;
						}
						else if (layout === 'grid') {
							this.rowItems = this.rowItems_ || 1;
						}
						this.itemLayout = layout;
					};
				},
				controllerAs: 'ctrl',
				link: function (scope, element, attrs) {
					scope.ctrl.itemLayout = scope.ctrl.itemLayout || 'grid';
					scope.ctrl.showItemLayout = !attrs.itemLayout;
				}
			};
		});

})();