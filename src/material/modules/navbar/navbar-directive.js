(function(){
'use strict';
module.exports = function (){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'modules/navbar/navbar.tmpl.html',
		controller: 'NavbarCtrl',
		controllerAs: '$NavbarCtrl',
		scope: {
			navitems: '='
		}
	};
		};
})();