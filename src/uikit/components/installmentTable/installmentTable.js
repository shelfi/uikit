(function(){

	'use strict';

	angular.module('uikit.components.installmentTable', [])

		.directive('sfInstallmentTable', function () {
			return {
				restrict: 'E',
				templateUrl: 'components/installmentTable/installmentTable.tmpl.html',
				scope: {
					amount: '=ngModel',
					paymentOptions: '=',
					onSelectOption: '&'
				},
				bindToController: true,
				controller: function () {
					this.getAmount = function (installment) {
						return this.amount + (this.amount * installment.rate / 100);
					};
				},
				controllerAs: 'ctrl',
				link: function (scope, element, attrs) {
					scope.onSelectOption = false;
					if (attrs.onSelectOption) {
						scope.onSelectOption = true;
					}
				}
			};
		});

})();