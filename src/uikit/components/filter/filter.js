(function(){
'use strict';
angular.module('uikit.components.filter', [])
  .directive('sfFilter', sfFilterDirective);


function sfFilterDirective(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'components/filter/filter.tmpl.html'
	};
}
})();