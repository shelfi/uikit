(function(){
'use strict';
angular.module('uikit.navbar', ['uikit.core'])
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