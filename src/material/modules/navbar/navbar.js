(function(){
'use strict';
angular.module('uikit.navbar', [])
  .directive('sfNavbar', sfNavbarDirective);


function sfNavbarDirective($mdTheming){
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
	};
})();