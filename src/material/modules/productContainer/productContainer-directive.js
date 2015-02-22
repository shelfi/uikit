(function(){
'use strict';
module.exports = function ($mdTheming){
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
	var backupstring = '<a ui-sref="shop.products_({ locale: $root.global.language.current, slug: (data.slug | multi:\'language\') })" href="#/products/{{data.slug | multi:\'language\'}}" ng-init="image=(data.images | image:\'list\')">\
			<img ng-src="{{image.path}}" width="{{image.w}}" height="{{image.h}}" alt="{{data.images.description | multi:\'language\'}}" title="{{data.images.description | multi:\'language\'}}" />'
	};
})();