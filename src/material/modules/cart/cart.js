(function(){
'use strict';
angular.module('uikit.cart', [])
  .directive('sfCart', sfCartDirective);


function sfCartDirective(){
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
	}

	function getTemplate (){
		return '<p>this is cart</p>';
	}
};
})();