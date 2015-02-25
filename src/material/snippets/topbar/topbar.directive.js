(function(){
'use strict';
module.exports = function ($mdTheming){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'snippets/topbar/topbar.tmpl.html',
		link: postLink,
		controller: function (){},
		controllerAs: 'ctrl',
		bindToController: true
	};

	function postLink (scope, element, attr){
		$mdTheming(element);
	}

};
})();