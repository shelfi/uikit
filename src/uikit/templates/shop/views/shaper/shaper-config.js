(function () {

	'use strict';

	angular.module('shop')
		.config(function ($stateProvider) {
			$stateProvider.state('shaper', {
				url: '/shaper',
				templateUrl: 'shop/views/shaper/shaper.html',
				controller: 'shaperController',
				controllerAs: 'ctrl'
			});
		});
})();