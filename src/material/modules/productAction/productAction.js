(function(){
'use strict';
angular.module('uikit.modules.productAction', [])
  .directive('sfProductAction', sfProductActionDirective);


function sfProductActionDirective($mdTheming){
	return {
		restrict: 'E',
		transclude: true,
		template: getTemplate,
		link: postLink,
		controller: function(){},
		controllerAs: 'ctrl',
		bindToController: true,
		scope: {
			scopeitem: '=scopeitem'
		}
	};

	function postLink (scope, element){
		$mdTheming(element);
	}

	function getTemplate (){
		return '<div>this is product action</div>';
	}
}
})();