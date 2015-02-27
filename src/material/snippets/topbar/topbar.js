(function(){
'use strict';
angular.module('uikit.header', [])
  .directive('sfTopbar', sfTopbarDirective);

function sfTopbarDirective($mdTheming){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'snippets/topbar/topbar.tmpl.html',
		link: postLink,
		controller: function (){},
		controllerAs: 'ctrl',
		bindToController: true,
		scope: {
			item: '=ngModel'
		}
	};

	function postLink (scope, element, attr){
		$mdTheming(element);
	}
}


})();