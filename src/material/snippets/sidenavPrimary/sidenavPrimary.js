(function(){
'use strict';
angular.module('uikit.sidenav', [])
  .directive('sidenavPrimary', sidenavPrimaryDirective);

function sidenavPrimaryDirective($mdTheming){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'snippets/sidenavPrimary/sidenavPrimary.tmpl.html',
		link: postLink,
		controller: function (){},
		controllerAs: 'ctrl',
		bindToController: true,
		scope: {
			item: '=ngModel'
		}
	};

	function postLink (scope, element, attr){
		$mdTheming(element);
	}
}

})();