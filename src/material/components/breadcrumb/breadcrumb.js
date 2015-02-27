(function(){
'use strict';
angular.module('uikit.components.breadcrumb', [])
  .directive('sfBreadcrumb', sfBreadcrumbDirective);


function sfBreadcrumbDirective(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'components/breadcrumb/breadcrumb.tmpl.html',
		controller: function(){},
		controllerAs: 'ctrl',
		bindToController: true,
		scope:{
			navitems: '=ngModel'
		}
	};
}
})();