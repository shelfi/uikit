(function(){
'use strict';
angular.module('uikit.modules.pagination', ['uikit.core'])
  .directive('sfPagination', sfPaginationDirective);


function sfPaginationDirective($mdTheming){
	return {
		restrict: 'E',
		transclude: true,
		template: getTemplate,
		controller: function(){},
		controllerAs: 'ctrl',
		bindToController: true,
		link: postLink,
		scope: {
			item: '=ngModel'
		}
	};

	function postLink (scope, element){
		$mdTheming(element);
	}

	function getTemplate (){
		return '<div>this is pagination</div>';
	}
}
})();