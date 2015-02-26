(function(){
'use strict';
angular.module('uikit.productContainer', [])
  .directive('sfProductContainer', sfProductContainerDirective);


function sfProductContainerDirective($mdTheming){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'modules/productContainer/productContainer.tmpl.html',
		controller: function ($scope){
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
	function link (scope, element, attr, controller){
		$mdTheming(element);
	}
};
})();