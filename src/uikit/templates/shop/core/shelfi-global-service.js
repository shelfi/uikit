(function () {

	'use strict';

	angular.module('shop')
		//.service('globalService', ['configService', 'settingService', 'languageService', 'currencyService', 'breadcrumbService', function (configService, settingService, languageService, currencyService, breadcrumbService) {
		.service('globalService', ['languageService', 'currencyService', 'breadcrumbService', function (languageService, currencyService, breadcrumbService) {

			this.checkoutProgress = false;
			
			// Configs
			this.configs = {
				//asd
			};

			// Settings
			this.settings = {
				sfProduct: {
					vat: 8,
					included: true
				},
				sfOrder: {
					cartExist: true
				}
			};

			// Language
			this.language = languageService;
			this.language.change('en');

			// Currency
			this.currency = currencyService;
			this.currency.change('usd');

			// Breadcrumb
			this.breadcrumb = breadcrumbService;
			this.breadcrumb.clear();
		}]);
})();