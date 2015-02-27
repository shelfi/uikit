(function(){
'use strict';
angular.module('uikit.search', [])
  .directive('sfSearch', sfSearchDirective);


function sfSearchDirective($mdTheming){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'modules/search/search.tmpl.html',
		link: postLink,
		controller: function (){},
		controllerAs: 'ctrl',
		bindToController: true,
		scope: {
			search: '=ngModel'
		}
	};

	function postLink (scope, element){
		$mdTheming(element);
	}

}
})();