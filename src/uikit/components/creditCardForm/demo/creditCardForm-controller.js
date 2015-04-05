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
						v.amount = amount - this.amount;
					}
					else {
						delete v.amount;
					}
				}.bind(this));
			};

			this.installmentChanged = function () {
				var selected = _.find(this.installments, { 'installment': parseInt(this.installment) });

				this.amount = this.amount_;

				if (selected.rate > 0) {
					this.amount = (this.amount_ * 1) + (this.amount_ * selected.rate / 100);
				}
				this.updateInstallmentList();
			};

			this.amount = 100.56;
			this.installments = [
				{ installment: 1, rate: 0 },
				{ installment: 3, rate: 0 },
				{ installment: 6, rate: 1.3 },
				{ installment: 9, rate: 2.6 }
			];
			this.updateInstallmentList();

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