(function(){

'use strict';

	angular.module('uikit.components.productItem', [])
	
		.directive('sfProductItem', function ($mdTheming) {
			return {
				restrict: 'E',
				transclude: true,
				templateUrl: 'components/productItem/productItem.tmpl.html',
				controller: function (){
				},
				controllerAs: 'ctrl',
				bindToController: true,
				//check for angular 1.4 bindToController usage:
				//http://blog.thoughtram.io/angularjs/2015/01/02/exploring-angular-1.3-bindToController.html#improvements-in-14
				link: link,
				scope: {
					item: '=ngModel',
					showAddButton: '@',
					showPrice: '@',
					showImage: '@',
					showDescription: '@'
				}
			};	
			function link (scope, element){
				$mdTheming(element);
			}
		});

})();