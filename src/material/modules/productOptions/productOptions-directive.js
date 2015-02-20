(function(){
'use strict';
module.exports = function ($mdTheming){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'modules/productOptions/productOptions.tmpl.html',
		link: postLink,
		scope: {
			scopeitem: '=scopeitem'
		}
	};

	function postLink (scope, element, attr){
		$mdTheming(element);
	}
};
})();