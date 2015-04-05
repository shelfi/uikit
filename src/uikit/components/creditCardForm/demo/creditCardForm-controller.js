(function(){

	'use strict';

	angular.module('uikit.components.creditCardForm')

		.controller('creditCardFormCtrl', function ($timeout) {

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

			this.queryCampaign = function () {
				this.loading = true;
				$timeout(function () {
					this.campaigns = [
						{ name: 'vada', title: 'vada' },
						{ name: 'bonus', title: 'bonus' },
						{ name: 'postpone', title: '+ 3 taksit erteleme' }
					];
					this.loading = false;
				}.bind(this), 1500);
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
				name: 'Ahmet Niyazi 111',
				number: '4929233596865177',
				expiry: '05 / 2015',
				cvc: '355'
			};

			this.card = angular.copy(this.common);

			this.onCreditCardChange = function () {
				this.installment = null;
				this.campaigns = null;
				this.campaign = null;

				this.availableForInstallment = false;
				if (this.card.number) {
					//https://gist.github.com/berkayunal/1595676
					//https://github.com/hbayraksan/tr-bin-numbers/blob/master/master_BIN.csv
					//http://www.yapikredipos.com.tr/odeme-cozumlerimiz/duyurular/bin-numaralari.aspx
					var isbankBIN = ['418342', '418343', '418344', '418345', '450803', '454318', '454358', '454359', '454360', '510152', '540667', '540668', '543771', '552096', '553058', '492923'];
					var cardNumber = this.card.number.replace(/\s/g, '').substring(0, 6);
					if (isbankBIN.indexOf(cardNumber) !== -1) {
						this.availableForInstallment = true;
					}	
				}
			};

			this.proceed = function () {
				/*
				if (!this.creditCardForm.$valid) {
					alert('form validation failed');
					return;
				}
				*/
				console.log('proceed', this.card, this.installment, this.campaign);
			};

			this.change = function () {
				this.card = {
					name: 'Ayse Hatice 222',
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