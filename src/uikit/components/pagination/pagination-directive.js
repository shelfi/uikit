(function(){
'use strict';
angular.module('uikit.components.pagination', ['uikit.core'])
  .directive('sfPagination', sfPaginationDirective);


function sfPaginationDirective($mdTheming){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'components/pagination/pagination.tmpl.html',
		controller: function(){},
		controllerAs: 'ctrl',
		bindToController: true,
		scope: {
			pages: '=ngModel'
		}
	};
}
})();