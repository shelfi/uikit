(function(){
'use strict';
angular.module('uikit.filter', [])
  .directive('sfFilter', sfFilterDirective);


function sfFilterDirective($mdTheming){
	return {
		restrict: 'E',
		transclude: true,
		template: getTemplate,
		link: postLink,
		scope: {
			item: '=ngModel'
		}
	};

	function postLink (scope, element, attr){
		$mdTheming(element);
	}

	function getTemplate (){
		return '<div>this is filter</div>';
	}
};
})();