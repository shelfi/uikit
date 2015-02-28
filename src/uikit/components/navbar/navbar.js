(function(){
'use strict';
angular.module('uikit.components.navbar', [])
  .directive('sfNavbar', sfNavbarDirective);


function sfNavbarDirective(){
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: 'components/navbar/navbar.tmpl.html',
			controller: function(){},
			controllerAs: 'ctrl',
			scope: {
				items: '=ngModel'
			}
		};
	}
})();