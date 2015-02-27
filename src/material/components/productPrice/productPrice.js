(function(){
'use strict';
angular.module('uikit.components.productPrice', [])
  .directive('sfproductPrice', sfproductPriceDirective);


function sfproductPriceDirective(){
	return {
		restrict: 'E',
		transclude: true,
		template: '1231321',
		controller: function(){
			console.log('12');
		},
		controllerAs: 'ctrl',
		bindToController: true
	};
}
})();