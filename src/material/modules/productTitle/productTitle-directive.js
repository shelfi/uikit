(function(){
'use strict';
module.exports = function (){
	return {
		restrict: 'E',
		transclude: true,
		template: getTemplate,
		link: postLink,
		scope: {
			scopeitem: '=scopeitem'
		}
	};

	function postLink (scope, element, attr){
		$mdTheming(element);
	}

	function getTemplate (){
		return '<div></div>';
	}
};
})();