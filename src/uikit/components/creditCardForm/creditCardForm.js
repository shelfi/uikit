(function(){

	'use strict';

	angular.module('uikit.components.creditCardForm', [])
		
		//https://github.com/jessepollak/card
		//https://github.com/gavruk/angular-card/blob/master/src/card.js

		.directive('cardNumberValidator', function () {
			return {
				restrict: 'A',
				require: 'ngModel',
				scope: {
					cardNumberValidator: '='
				},
				link: function(scope, element, attrs, ctrl) {
					ctrl.$validators.cardNumberValidator = function (value) {
						if (value) {
							var cardNumber = value.replace(/\s/g, '');
							var validator = scope.cardNumberValidator;
							if (angular.isString(validator) || angular.isNumber(validator)) {
								var valid = cardNumber.substring(0, validator.toString().length) === validator.toString();
								if (valid) {
									return Payment.fns.validateCardNumber(value);
								}
							}
							else if (angular.isArray(validator)) {
								var i = 0;
								for (i = 0; i < validator.length; i++) {
									var valid = cardNumber.substring(0, validator[i].toString().length) === validator[i].toString();
									if (valid) {
										return Payment.fns.validateCardNumber(value);
									}
								}
							}
							else {
								return Payment.fns.validateCardNumber(value);
							}
							return false;
						}
						return false;
					};
				}
			};
		})

		.directive('cardExpiryValidator', function () {
			return {
				restrict: 'A',
				require: 'ngModel',
				link: function(scope, element, attrs, ctrl) {
					ctrl.$validators.cardExpiryValidator = function (value) {
						if (value) {
							var expiry = Payment.fns.cardExpiryVal(value);
							return Payment.fns.validateCardExpiry(expiry.month, expiry.year);
						}
						return false;
					};
				}
			};
		})

		.directive('cardCvcValidator', function () {
			return {
				restrict: 'A',
				require: 'ngModel',
				link: function(scope, element, attrs, ctrl) {
					ctrl.$validators.cardCvcValidator = function (value) {
						if (value) {
							return Payment.fns.validateCardCVC(value);
						}
						return false;
					};
				}
			};
		})
		
		.directive('sfCreditCardForm', function () {
			return {
				restrict: 'E',
				require: '?ngModel',
				templateUrl: 'components/creditCardForm/creditCardForm.tmpl.html',
				scope: {
					card: '=ngModel',
					form: '=',
					preview: '@',
					onCreditCardChange: '&'
				},
				bindToController: true,
				controller: function () {
					var _self = this;
					this.structure = {
						row: [
							{
								inputContainer: {
									label: 'Full name',
									input: {
										type: 'text',
										name: 'name',
										ngModel: 'data.name',
										required: '',
										validationTexts: {
											required : 'Full name is required. Please fill the input.'
										}
									}
								}
							},
							{
								inputContainer: {
									label: 'Card number',
									input: {
										type: 'text',
										name: 'number',
										ngModel: 'data.number',
										ngChange: _self.onCreditCardChange,
										required: '',
										cardNumberValidator: '',
										validationTexts: {
											required : 'Card number is required. Please fill the input.',
											cardNumberValidator : 'The card number is not valid!'
										}
									}
								}
							},
							{
								inputContainer: {
									label: 'Expiry',
									input: {
										type: 'text',
										name: 'expiry',
										ngModel: 'data.expiry',
										ngChange: _self.onCreditCardChange,
										required: '',
										cardExpiryValidator: '',
										validationTexts: {
											required : 'Expiry is required. Please fill the input.',
											cardExpiryValidator : 'Expiry is not valid!'
										}
									}
								}
							},
							{
								inputContainer: {
									label: 'Cvc',
									input: {
										type: 'text',
										name: 'cvc',
										ngModel: 'data.cvc',
										ngChange: _self.onCreditCardChange,
										autocomplete: 'off',
										required: '',
										cardCvcValidator: '',
										validationTexts: {
											required : 'Cvc is required. Please fill the input.',
											cardCvcValidator : 'Cvc is not valid!'
										}
									}
								}
							}
						]
					};
				},
				controllerAs: 'ctrl',
				link: function (scope, element, attrs, ngModelCtrl) {
					if (ngModelCtrl) {
						ngModelCtrl.$formatters.push(function (v) {
							
							v.name = v.name || '';
							v.number = v.number || '';
							v.expiry = v.expiry || '';
							v.cvc = v.cvc || '';

							v.number = Payment.fns.formatCardNumber(v.number);

							if (!Payment.fns.validateCardNumber(v.number)) {
								v.number = '';
							}

							var expiry = Payment.fns.cardExpiryVal(v.expiry);
							if (!Payment.fns.validateCardExpiry(expiry.month, expiry.year)) {
								v.expiry = '';
							}

							if (!Payment.fns.validateCardCVC(v.cvc)) {
								v.cvc = '';
							}
							return v;
						});

						//ngModelCtrl.$parsers.push(function (v) {
						//	console.log('parsers', v);
						//	return v;
						//});

						if (scope.ctrl.card && scope.ctrl.card.number) {
							scope.ctrl.onCreditCardChange();
						}
					}

					var simulateEvents = function () {
						//console.log('watchMAIN');
						//http://stackoverflow.com/questions/446892/how-to-find-event-listeners-on-a-dom-node
						//WebKit Inspector in Chrome or Safari browsers now does this. It will display the event listeners for a DOM element when you select it in the Elements pane.
						//http://www.w3schools.com/jsref/met_document_addeventlistener.asp
						//https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
						//http://stackoverflow.com/questions/18823872/jquery-dispatchevent-wrapper-method
						//https://github.com/sandeep45/betterTrigger
						//https://learn.jquery.com/events/triggering-event-handlers/
						angular.element('input[name="name"]').simulate('keyup');
						angular.element('input[name="number"]').simulate('keyup');
						angular.element('input[name="expiry"]').simulate('keyup');
						angular.element('input[name="cvc"]').simulate('keyup');
						scope.ctrl.onCreditCardChange();
					}

					scope.$watch('ctrl.card', simulateEvents);

					element.ready(function () {
						var card = new Card({
							form: 'form[name="creditCardForm.form"]',
							container: '.card-wrapper',
							width: 200,
							formatting: true,
							debug: true
						});
						simulateEvents();
					});
				}
			};
		});

})();