(function(){
'use strict';
angular.module('uikit.components.menu', [])
  .directive('sfMenu', sfMenuDirective);


function sfMenuDirective($mdTheming){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'components/menu/menu.tmpl.html',
		link: postLink,
		controller: function(){},
		controllerAs: 'ctrl',
		bindToController: true,
		scope: {
			menu: '=ngModel',
		}
	};

	function postLink (scope, element){
		$mdTheming(element);
	}
}
})();