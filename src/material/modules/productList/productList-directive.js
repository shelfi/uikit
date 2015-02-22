(function(){
'use strict';
module.exports = function ($mdTheming){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'modules/productList/productList.tmpl.html',
		controller: 'ProductListCtrl',
		controllerAs: 'ctrl',
		bindToController: true,
		scope: {
			layout: '@',
			itemperpage: '@',
			products: '=ngModel',
			itemflex: '='
		}
	};
};
})();