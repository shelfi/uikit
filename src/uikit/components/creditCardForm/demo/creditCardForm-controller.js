(function(){

	'use strict';

	angular.module('uikit.components.creditCardForm')

		.controller('creditCardFormCtrl', function () {

			this.card = {};

			this.proceed = function () {
				console.log('proceed');
			};
		});

})();