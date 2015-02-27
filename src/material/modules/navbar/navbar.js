(function(){
'use strict';
angular.module('uikit.modules.navbar', [])
  .directive('sfNavbar', sfNavbarDirective);


function sfNavbarDirective(){
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: 'modules/navbar/navbar.tmpl.html',
			controller: function(){},
			controllerAs: 'ctrl',
			scope: {
				items: '=ngModel'
			}
		};
	}
})();