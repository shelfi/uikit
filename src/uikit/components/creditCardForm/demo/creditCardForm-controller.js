(function(){

	'use strict';

	angular.module('uikit.components.creditCardForm')

		.controller('creditCardFormCtrl', function () {

			this.updateInstallmentList = function () {
				if (!this.amount_) {
					this.amount_ = this.amount;
				}
				this.installments.forEach(function (v) {
					if (v.rate > 0) {
						var amount = (this.amount_ * 1) + (this.amount_ * v.rate / 100);
						if (amount > this.amount) {
							v.amount = amount - this.amount;
						}
						else {
							v.amount = amount - this.amount;
							//v.amount = ' -' + (this.amount - amount);
						}
					}
					else {
						delete v.amount;
					}
				}.bind(this));
			};

			this.amount = 100.56;
			this.installments = [
				{ installment: 1, rate: 0 },
				{ installment: 3, rate: 0 },
				{ installment: 6, rate: 1.3 },
				{ installment: 9, rate: 2.6 }
			];
			this.updateInstallmentList();

			this.installmentChanged = function () {
				var selected = this.installments.filter(function (v) {
					return v.installment === parseInt(this.installment);
				}.bind(this));
				
				this.amount = this.amount_;

				if (selected[0].rate > 0) {
					this.amount = (this.amount_ * 1) + (this.amount_ * selected[0].rate / 100);
				}

				this.updateInstallmentList();
			};

			this.common = {
				name: 'Ahmet Niyazi',
				number: '4929233596865177',
				expiry: '05 / 2015',
				cvc: '355'
			};

			this.card = angular.copy(this.common);

			this.proceed = function (card) {
				console.log('proceed', card, this.card);
			};

			this.change = function () {
				this.card = {
					name: 'Ayse Hatice',
					number: '4556249932451571',
					expiry: '13 / 2015',
					cvc: 'asd'
				};
			}

			this.change2Prev = function () {
				this.card = angular.copy(this.common);
			}
		});

})();