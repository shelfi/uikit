(function(){
'use strict';
module.exports = function ($mdTheming){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'modules/menu/menu.tmpl.html',
		link: postLink,
		bindToController: true,
		controller: function(){},
		controllerAs: 'ctrl',
		scope: {
			menu: '=ngModel',
		}
	};

	function postLink (scope, element, attr){
		$mdTheming(element);
	}
};
})();