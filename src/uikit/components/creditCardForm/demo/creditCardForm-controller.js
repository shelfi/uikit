(function(){

	'use strict';

	angular.module('uikit.components.creditCardForm')

		.controller('creditCardFormCtrl', function () {

			this.common = {
				name: 'Ahmet Niyazi',
				number: '4929233596865177',
				expiry: '05 / 2015',
				cvc: '355'
			};

			this.card = angular.copy(this.common);

			this.proceed = function (card) {
				console.log('proceed', card, this.card);
			};

			this.change = function () {
				this.card = {
					name: 'Ayse Hatice',
					number: '4556249932451571',
					expiry: '13 / 2015',
					cvc: 'asd'
				};
			}

			this.change2Prev = function () {
				this.card = angular.copy(this.common);
			}
		});

})();