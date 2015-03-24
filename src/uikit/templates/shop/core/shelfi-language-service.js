(function () {

	'use strict';

	angular.module('shop')
		.service('languageService', [function () {

			this.items = [];
			this.current = '';
			this.change = function (language) {

				if(this.current === language) {
					return;
				}

				var index = this.items.indexOfByKey('_id', language);
				if(index === -1) {
					console.log('language not found!');
					return;
				}

				//console.log(language);
				this.current = language;
			};

			this.items.push({ _id: 'en', name: 'English' });
			this.items.push({ _id: 'tr', name: 'Türkçe' });
			this.items.push({ _id: 'de', name: 'Deutsch' });
			this.items.push({ _id: 'fr', name: 'French' });
		}]);
})();