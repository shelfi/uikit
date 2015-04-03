(function(){

	'use strict';

	angular.module('uikit.components.paymentFormManager')

		.controller('paymentFormManagerCtrl', function ($mdSidenav) {
			
			this.toggleLeft = function () {
				$mdSidenav('left').toggle().then(function () {
					console.log("toggle left is done");
				});
			};

			this.close = function () {
				$mdSidenav('left').close().then(function () {
					console.log("close LEFT is done");
				});
			};

			this.addPaymentOption = function () {
				this.paymentOptions.push({
					title: 'New payment option'
				});
				this.selectPaymentOption(this.paymentOptions[this.paymentOptions.length - 1]);
			};

			this.removePaymentOption = function (paymentOption) {
				var i = this.paymentOptions.indexOf(paymentOption);
				if (i !== -1) {
					var removed = this.paymentOptions.splice(i, 1);
					if (this.selected === removed[0]) {
						this.selectPaymentOption(this.paymentOptions[0]);
					}
				}
			};





			this.addInstallment = function () {
				this.selected.installments.push({});
			};

			this.removeInstallment = function (installment) {
				var i = this.selected.installments.indexOf(installment);
				if (i !== -1) {
					this.selected.installments.splice(i, 1);
				}
			};



			this.selectPaymentOption = function (paymentOption) {
				this.selected = paymentOption;
			};

			this.paymentOptions = [
				{
					title: 'Isbank',
					gateway: 'isbank',
					installment: true,
					installments: [
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
					title: 'Garanti',
					gateway: 'garanti',
					installment: true,
					installments: [
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

			this.selected = this.paymentOptions[0];
		});

})();