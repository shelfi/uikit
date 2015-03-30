(function () {

	'use strict';

	angular.module('shop')
		.run(function ($state) {
			//run
			console.log($state.current.name);
		});
})();