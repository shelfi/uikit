(function(){
'use strict';
angular.module('uikit.snippets.sidenavUser', [])
  .directive('sfSidenavUser', sfSidenavUserDirective);

function sfSidenavUserDirective(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'snippets/sidenavUser/sidenavUser.tmpl.html',
		replace: true
	};
}

})();