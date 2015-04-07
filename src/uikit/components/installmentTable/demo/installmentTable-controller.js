(function(){

	'use strict';

	angular.module('uikit.components.installmentTable')

		.controller('installmentTableCtrl', function () {
			
			this.onSelectOption = function (paymentOption, installment) {
				console.log(paymentOption, installment);
			};
			this.amount = 100;
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
		});

})();