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

	function postLink (){
	}

	function getTemplate (){
		return '<div class="sf-search-container">\
				<md-input-container>\
        			<label>Sitede Ara</label>\
        			<input ng-model="search.entry">\
				</md-input-container>\
			</div>';
		}
	};
})();