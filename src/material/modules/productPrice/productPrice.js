(function(){
'use strict';
angular.module('uikit.productPrice', [])
  .directive('sfproductPrice', sfproductPriceDirective);


function sfproductPriceDirective($mdTheming){
	return {
		restrict: 'E',
		transclude: true,
		template: getTemplate,
		link: postLink,
		controller: function(){},
		controllerAs: 'ctrl',
		bindToController: true,
		scope: {
			item: '=ngModel'
		}
	};

	function postLink (scope, element, attr){
		$mdTheming(element);
	}

	function getTemplate (){
		return '<div>this is product price</div>';
	}
};
})();