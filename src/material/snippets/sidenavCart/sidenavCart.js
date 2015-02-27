(function(){
'use strict';
angular.module('uikit.snippets.sfSidenavCart', [])
  .directive('sfSidenavCart', sfSidenavCartDirective);

function sfSidenavCartDirective(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'snippets/sidenavCart/sidenavCart.tmpl.html',
		replace: true
	};
}

})();