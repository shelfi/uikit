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
					itemLayout: '@',
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
					scope.ctrl.itemLayout = 'list';
					scope.ctrl.predefineQuantity = false;
					scope.ctrl.quantity = {
						value: 1,
						step: 100,
						min:100,
						max: 5000
					}

					if (ctrl) {
						scope.ctrl.showImage = scope.ctrl.showImage || ctrl.showImage;
						scope.ctrl.showName = scope.ctrl.showName || ctrl.showName;
						scope.ctrl.showDescription = scope.ctrl.showDescription || ctrl.showDescription;
						scope.ctrl.showPrice = scope.ctrl.showPrice || ctrl.showPrice;
						scope.ctrl.showQuantity = scope.ctrl.showQuantity || ctrl.showQuantity;
						scope.ctrl.showPromotion = scope.ctrl.showPromotion || ctrl.showPromotion;
						scope.ctrl.selectable = scope.ctrl.selectable || ctrl.selectable;
					}

					scope.ctrl.itemLayout = scope.ctrl.itemLayout || 'grid';
				}
			};

			//function link (scope, element){
			//	$mdTheming(element);
			//}
			
		});

})();