(function(){
'use strict';
angular.module('uikit.modules.productInfo', [])
  .directive('sfProductInfo', sfProductInfoDirective);


function sfProductInfoDirective($mdTheming){
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
		return '<div>this is productinfo</div>';
	}
}
})();