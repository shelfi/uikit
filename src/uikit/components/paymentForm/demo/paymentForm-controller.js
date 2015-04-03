(function(){

	'use strict';

	angular.module('uikit.components.paymentForm')

		.controller('paymentFormCtrl', function () {

			this.paymentOptions = [
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
				},
				{
					name: 'Garanti 2',
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
				},
				{
					name: 'Garanti 3',
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
				},
				{
					name: 'Garanti 4',
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
				},
				{
					name: 'Garanti 5',
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
				},
				{
					name: 'Garanti 6',
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
				},
				{
					name: 'Garanti 7',
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
				},
				{
					name: 'Garanti 8',
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
				},
				{
					name: 'Garanti 9',
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
				},
				{
					name: 'Garanti 10',
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
		});

})();