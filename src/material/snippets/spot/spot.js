(function(){
'use strict';
angular.module('uikit.snippets.sfSpot', [])
  .directive('sfSpot', sfSpotDirective);

function sfSpotDirective(){
	return {
		restrict: 'E',
		transclude: true,
		replace: true,
		templateUrl: 'snippets/spot/spot.tmpl.html'
	};
}

})();