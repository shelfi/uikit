(function(){
'use strict';
angular.module('uikit.modules.cart', [])
  .directive('sfCart', sfCartDirective);


function sfCartDirective($mdTheming){
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

	function postLink (scope, element){
		$mdTheming(element);
	}

	function getTemplate (){
		return '<p>this is cart</p>';
	}
}
})();