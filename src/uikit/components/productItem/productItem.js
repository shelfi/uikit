(function(){

'use strict';

	angular.module('uikit.components.productItem', [])

		.directive('sfProductItem', function ($mdTheming) {
			return {
				restrict: 'E',
				require: "^?sfProductList",
				templateUrl: 'components/productItem/productItem.tmpl.html',
				scope: {
					item: '=ngModel',
					showImage: '@',
					showName: '@',
					showDescription: '@',
					showPrice: '@',
					showQuantity: '@',
					showPromotion: '@',
					selectable: '@',
					click: '&',
					addToCart: '&'
				},
				// Check for angular 1.4 bindToController usage: http://blog.thoughtram.io/angularjs/2015/01/02/exploring-angular-1.3-bindToController.html#improvements-in-14
				bindToController: true,
				controller: function () {
					//console.log('ctrl', this.addToCart);
				},
				controllerAs: 'ctrl',
				link: function (scope, element, attrs, ctrl) {
					scope.ctrl.showAddToCartButton = attrs.addToCart ? 'true' : 'false';
					//if (ctrl) {
					//	scope.selectable = scope.selectable || ctrl.selectable;
					//}
				}
			};

			//function link (scope, element){
			//	$mdTheming(element);
			//}
			
		});

})();