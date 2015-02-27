(function(){
'use strict';
angular.module('uikit.productInfo', ['uikit.core'])
  .directive('sfProductInfo', sfProductInfoDirective);


function sfProductInfoDirective($mdTheming, $parse){
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
		return '<div>this is productinfo</div>';
	}
};
})();