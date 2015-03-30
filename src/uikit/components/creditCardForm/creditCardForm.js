(function(){

	'use strict';

	angular.module('uikit.components.creditCardForm', [])
		
		
		//https://www.airpair.com/javascript/integrating-stripe-into-angular-app

		.directive('sfCreditCardForm', function () {
			return {
				restrict: 'E',
				templateUrl: 'components/creditCardForm/creditCardForm.tmpl.html',
				scope: {
					card: '=ngModel'
				},
				bindToController: true,
				controller: function () {
					//asd
				},
				controllerAs: 'ctrl',
				link: function () {
					console.log('sfCreditCardForm link function');
					/*
					angular.element('form').card({
						container: '.card-wrapper'
					});
					*/
				}
			};
		});

})();