(function(){

	'use strict';

	angular.module('uikit.components.listManager', [])
		
		.directive('sfListManager', function () {
			return {
				restrict: 'E',
				//transclude: true,
				templateUrl: 'components/listManager/listManager.tmpl.html',
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