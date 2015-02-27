(function(){
'use strict';
angular.module('uikit.modules.productList', [])
  .directive('sfProductList', sfProductListDirective);


function sfProductListDirective(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'modules/productList/productList.tmpl.html',
		controller: function(){},
		controllerAs: 'ctrl',
		bindToController: true,
		scope: {
			layout: '@',
			itemperpage: '@',
			products: '=ngModel',
			itemflex: '='
		}
	};
}
})();