(function(){
'use strict';
module.exports = function ($mdTheming){
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

	function postLink (scope, element, attr){
		$mdTheming(element);
	}

};
})();