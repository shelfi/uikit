(function(){
'use strict';
angular.module('uikit.components.productOptions', [])
  .directive('sfProductOptions', sfProductOptionsDirective);


function sfProductOptionsDirective($mdTheming){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'components/productOptions/productOptions.tmpl.html',
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