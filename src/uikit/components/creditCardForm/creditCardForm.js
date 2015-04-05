(function(){

	'use strict';

	angular.module('uikit.components.creditCardForm', [])
		
		//https://github.com/jessepollak/card
		//https://github.com/gavruk/angular-card/blob/master/src/card.js

		.directive('cardNumberValidator', function () {
			return {
				restrict: 'A',
				require: 'ngModel',
				link: function(scope, element, attrs, ctrl) {
					ctrl.$validators.cardNumberValidator = function (value) {
						if (value) {
							return Payment.fns.validateCardNumber(value);
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
					preview: '@',
					onCreditCardChange: '&'
				},
				bindToController: true,
				controller: function () {},
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
					//console.log('cardddd');
					var card = new Card({
						form: 'form[name="ctrl.creditCardForm"]',
						container: '.card-wrapper',
						width: 200,
						formatting: true,
						debug: true
					});

					//angular.element('input[name="number"]').on('keyup', function () {
					//	console.log('name keyup');
					//	scope.ctrl.onCreditCardChange();
					//});

					scope.$watch('ctrl.card', function (val) {
						//console.log('watchMAIN', val);

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
					});
				}
			};
		});

})();