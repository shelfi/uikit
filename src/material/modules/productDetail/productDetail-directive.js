(function(){
'use strict';
module.exports = function (){
	return {
		restrict: 'E',
		transclude: true,
		template: getTemplate,
		scope: {
			scopeitem: '=scopeitem'
		}
	};

	function getTemplate (){
		return '<div></div>';
	}
};
})();