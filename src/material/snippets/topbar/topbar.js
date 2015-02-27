(function(){
'use strict';
angular.module('uikit.snippets.topbar', [])
  .directive('sfTopbar', sfTopbarDirective);

function sfTopbarDirective(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'snippets/topbar/topbar.tmpl.html'
	};
}

})();