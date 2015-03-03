(function(){
'use strict';
angular.module('uikit.components.menu', [])
  .directive('sfMenu', sfMenuDirective);


function sfMenuDirective(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'components/menu/menu.tmpl.html',
		controller: function(){},
		controllerAs: 'ctrl',
		bindToController: true,
		scope: {
			item: '=ngModel',
		}
	};
}
})();