(function(){

	'use strict';

	angular.module('uikit.components.creditCardForm', [])
		
		//https://github.com/jessepollak/card
		//https://github.com/gavruk/angular-card/blob/master/src/card.js

		.directive('cardNumberValidator', function () {
			return {
				require: 'ngModel',
				link: function(scope, element, attrs, ngModel) {
					ngModel.$validators.cardNumberValidator = function (value) {
						return Payment.fns.validateCardNumber(value);
					};
				}
			};
		})

		.directive('cardExpiryValidator', function () {
			return {
				require: 'ngModel',
				link: function(scope, element, attrs, ngModel) {
					ngModel.$validators.cardExpiryValidator = function (value) {
						console.log(value);
						
						//TODO: accomplish this with regex!
						
						//console.log();
						//var r = /^\d+\/\d+/$/.test(value);

						//var r = value.split(' / ');
						//console.log(r);


						var month = '02', year = '2020';
						return Payment.fns.validateCardExpiry(month, year);
					};
				}
			};
		})

		.directive('cardCvcValidator', function () {
			return {
				require: 'ngModel',
				link: function(scope, element, attrs, ngModel) {
					ngModel.$validators.cardCvcValidator = function (value) {
						return Payment.fns.validateCardCVC(value);
					};
				}
			};
		})

		.directive('sfCreditCardForm', function () {
			return {
				restrict: 'E',
				templateUrl: 'components/creditCardForm/creditCardForm.tmpl.html',
				scope: {
					card: '=ngModel',
					proceed: '&'
				},
				bindToController: true,
				controller: function () {
					this.proceed_ = function () {
						if (!this.creditCardForm.$valid) {
							alert('form validation failed');
							return;
						}
						this.proceed();
					};
				},
				controllerAs: 'ctrl',
				link: function (scope, element) {
					var card = new Card({
						form: 'form[name="ctrl.creditCardForm"]',
						container: '.card-wrapper',
						width: 200,
						formatting: true,
						debug: true
					});
				}
			};
		});

})();