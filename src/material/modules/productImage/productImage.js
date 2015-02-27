(function(){
'use strict';
angular.module('uikit.modules.productImage', [])
  .directive('sfProductImage', sfProductImageDirective);


function sfProductImageDirective(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'modules/productImage/productImage.tmpl.html',
		link: function(scope, element){
			//var zoomVal = $parse(attr['sfMode']);
			var newSize = {
				width: 200,
				height: 200
			};
			if (scope.sfMode === 'zoom'){
				element.on('mouseover', function(){
					element.css({
						width: newSize.width + 'px',
						height: newSize.height + 'px'
					});
				});
			} else {
				element.on('mouseover', function(){
					console.log('image change src to next item in collection');
				});
			}
		},
		controller: function (){
		},
		controllerAs: 'ctrl',
		bindToController: true,
		scope: {
			product: '=ngModel',
			sfMode: '@'
		}
	};
}
})();