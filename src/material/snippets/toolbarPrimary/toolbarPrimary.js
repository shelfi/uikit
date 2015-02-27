(function(){
'use strict';
angular.module('uikit.snippets.toolbarPrimary', [])
  .directive('sfToolbarPrimary', sfToolbarPrimaryDirective);

function sfToolbarPrimaryDirective(){
	return {
		restrict: 'E',
		transclude: true,
		replace: true,
		templateUrl: 'snippets/toolbarPrimary/toolbarPrimary.tmpl.html'
	};
}

})();