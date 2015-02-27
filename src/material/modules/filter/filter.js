(function(){
'use strict';
angular.module('uikit.modules.filter', [])
  .directive('sfFilter', sfFilterDirective);


function sfFilterDirective($mdTheming){
	return {
		restrict: 'E',
		transclude: true,
		template: getTemplate,
		link: postLink,
		controller: function(){},
		controllerAs: 'ctrl',
		bindToController: true,
		scope: {
			item: '=ngModel'
		}
	};

	function postLink (scope, element){
		$mdTheming(element);
	}

	function getTemplate (){
		return '<div>this is filter</div>';
	}
}
})();