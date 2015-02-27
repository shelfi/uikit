(function(){
'use strict';
angular.module('uikit.snippets.sidenavPrimary', [])
  .directive('sfSidenavPrimary', sfSidenavPrimaryDirective);

function sfSidenavPrimaryDirective(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'snippets/sidenavPrimary/sidenavPrimary.tmpl.html',
		replace: true
	};
}

})();