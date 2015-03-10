(function(){

	'use strict';

	angular.module('uikit.components.productListControl', [])
		
		.directive('sfProductListControl', function () {
			return {
				restrict: 'E',
				//transclude: true,
				templateUrl: 'components/productListControl/productListControl.tmpl.html',
				scope: {
					items: '=ngModel'
				},
				bindToController: true,
				controller: function () {
					//asd
				},
				controllerAs: 'ctrl'
			};
		});

})();