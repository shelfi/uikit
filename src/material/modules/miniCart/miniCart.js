(function(){
'use strict';
angular.module('uikit.modules.miniCart', [])
  .directive('sfMiniCart', sfMiniCartDirective);


function sfMiniCartDirective($mdTheming){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'modules/miniCart/miniCart.tmpl.html',
		link: postLink,
		controller: function(){
			this.getTotals = function (){
			var _this = this,
			totals = {};
			for (var i = 0; i < _this.cartitems.length; i++){
				totals.quantity =+ _this.cartitems[i].quantity;
				totals.price =+ _this.cartitems[i].price;
				}
				return totals;
			};
		},
		bindToController: true,
		controllerAs: 'ctrl',
		scope: {
			order: '=ngModel'
		}
	};

	function postLink (scope, element){
		$mdTheming(element);
	}
}
})();