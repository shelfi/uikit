(function(){
'use strict';
angular.module('uikit.sort', ['uikit.core'])
  .directive('sfSort', sfSortDirective);


function sfSortDirective($mdTheming){
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
		return '<div>this is sort</div>';
	}
};
})();