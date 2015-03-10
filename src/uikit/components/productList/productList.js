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
					this.changeItemLayout = function (layout) {
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