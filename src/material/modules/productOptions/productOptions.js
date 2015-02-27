(function(){
'use strict';
angular.module('uikit.modules.productOptions', [])
  .directive('sfProductOptions', sfProductOptionsDirective);


function sfProductOptionsDirective($mdTheming){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'modules/productOptions/productOptions.tmpl.html',
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
}
})();