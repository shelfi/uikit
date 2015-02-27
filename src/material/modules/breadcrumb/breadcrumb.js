(function(){
'use strict';
angular.module('uikit.breadcrumb', ['uikit.core'])
  .directive('sfBreadcrumb', sfBreadcrumbDirective);


function sfBreadcrumbDirective(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'modules/breadcrumb/breadcrumb.tmpl.html',
		controller: function(){},
		controllerAs: 'ctrl',
		bindToController: true,
		scope:{
			navitems: '=ngModel'
		}
	}
}
})();