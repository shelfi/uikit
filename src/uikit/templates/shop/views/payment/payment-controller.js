(function () {

	'use strict';

	angular.module('shop')
		.controller('paymentController', function (paymentService, $mdDialog) {
			//controller


			this.amount = 100;

			this.gateways = paymentService.getGateways();




			this.banks = [
				{
					name: 'Isbank',
					gateway: 'Isbank',
					installment: [
						{
							installment: 1,
							rate: 0
						},
						{
							installment: 3,
							rate: 0
						},
						{
							installment: 6,
							rate: 0
						},
						{
							installment: 9,
							rate: 2.4
						}
					]
				},
				{
					name: 'Garanti',
					gateway: 'Garanti',
					installment: [
						{
							installment: 1,
							rate: 0
						},
						{
							installment: 3,
							rate: 0
						},
						{
							installment: 6,
							rate: 3
						},
						{
							installment: 9,
							rate: 4.5
						}
					]
				}
			];



			this.showModal = function (bank, installment) {

				$mdDialog.show({
					controller: function ($mdDialog) {
						//ss
						this.closeDialog = function() {
							$mdDialog.hide();
						}

						this.bank = bank;
						this.installment = installment;
					},
					controllerAs: 'ctrl',
					template:
						'<md-dialog aria-label="List dialog">' +
						'  <md-content>{{ ctrl.bank }}{{ ctrl.installment }}</md-content>' +
						'  <div class="md-actions">' +
						'    <md-button ng-click="ctrl.closeDialog()">' +
						'      Close Dialog' +
						'    </md-button>' +
						'  </div>' +
						'</md-dialog>',
					//templateUrl: 'dialog1.tmpl.html',
					//targetEvent: ev,
				})
				.then(function(answer) {
					console.log('You said the information was "' + answer + '".');
				}, function() {
					console.log('You cancelled the dialog.');
				});
			}
		});

})();