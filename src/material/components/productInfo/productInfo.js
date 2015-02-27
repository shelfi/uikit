(function(){
'use strict';
angular.module('uikit.components.productInfo', [])
  .directive('sfProductInfo', sfProductInfoDirective);


function sfProductInfoDirective(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'components/productInfo/productInfo.tmpl.html',
		controller: function(){},
		controllerAs: 'ctrl',
		bindToController: true,
		scope: {
			item: '=ngModel'
		}
	};

}
})();