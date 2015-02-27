(function(){
'use strict';
angular.module('uikit.productList', ['uikit.core'])
  .directive('sfProductList', sfProductListDirective);


function sfProductListDirective($mdTheming){
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
};
})();