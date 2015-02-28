(function(){

	'use strict';

	angular.module('uikit.components.productList', [])
		
		.directive('sfProductList', function () {
			return {
				restrict: 'E',
				//transclude: true,
				templateUrl: 'components/productList/productList.tmpl.html',
				scope: {
					items: '=ngModel',
					layout: '@',
					rowItems: '@'
				},
				bindToController: true,
				controller: function () {
					//asd
				},
				controllerAs: 'ctrl'
			};
		});

})();