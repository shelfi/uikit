(function(){
'use strict';
angular.module('uikit.components.productList', [])
  .directive('sfProductList', sfProductListDirective);


function sfProductListDirective(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'components/productList/productList.tmpl.html',
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