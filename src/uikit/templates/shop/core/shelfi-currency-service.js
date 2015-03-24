(function () {

	'use strict';

	angular.module('shop')
		.service('currencyService', [function () {

			this.items = [];
			this.current = '';
			this.change = function (currency) {

				if(this.current === currency) {
					return;
				}

				var index = this.items.indexOfByKey('_id', currency);
				if(index === -1) {
					console.log('currency not found!');
					return;
				}

				this.current = currency;
				//$cookies.currency = currency;
			};

			this.items.push({ _id: 'usd', name: 'Dollar' });
			this.items.push({ _id: 'try', name: 'Türk Lirası' });
			this.items.push({ _id: 'euro', name: 'Euro' });
		}]);
})();