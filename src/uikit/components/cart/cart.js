(function(){

	'use strict';

	angular.module('uikit.components.cart', [])

		.controller('cartCtrl', function () {

			this.order = [
				{image: 'holder.js/60x60', title: 'Super T-shirt', price: 15, quantity: 1 }, 
				{image: 'holder.js/60x60', title: 'Awesome Pants', price: 30,  quantity: 1 },
			];

			this.columns = [
				{ name: 'image', width: '10', template: '<img data-src="{{item.image}}" />' },
				{ name: 'title', width: '', template: '<small>{{item.title}}</small>' },
				{ name: 'price', width: '10' },
				//{ name: 'quantity', width: '10', template: '<md-input-container><label>Quantity</label><input ng-model="item.quantity"></md-input-container>' }
				//{ name: 'quantity', width: '10', template: '<md-input-container><md-select ng-model="item.quantity" placeholder="Select quantity"><md-option ng-repeat="opt in [100, 250, 500, 1000, 2500]" ng-value="opt">{{ opt }}</md-option></md-select></md-input-container>'
				{ name: 'quantity', width: '15', template: '<md-select ng-model="item.quantity" placeholder="q"><md-option ng-repeat="opt in [100, 200, 500, 1000, 5000]" ng-value="opt">{{ opt }}</md-option></md-select>' }
			];
		})

		.directive('sfCart', function ($mdTheming, $mdDialog) {
			return {
				restrict: 'E',
				templateUrl: 'components/cart/cart.tmpl.html',
				scope: {
					items: '=ngModel',
					columns: '=',
					showHeader: '@',
					showDeleteButton: '@',
					showStandbyButton: '@',
					showTotals: '@',
					deleteAction: '&',
					standbyAction: '&'
				},
				bindToController: true,
				controller: function () {

					var buttons = {
						name: 'buttons',
						width: '5',
						template: ''
					};

					if (this.showDeleteButton === 'true') {

						this.deleteItem = function (item) {

							var confirm = $mdDialog.confirm()
								.title('Would you like to delete?')
								//.content('All of the banks have agreed to forgive you your debts.')
								//.ariaLabel('Lucky day')
								.ok('Yes')
								.cancel('No');
								//.targetEvent(ev);

							$mdDialog.show(confirm).then(function () {
								var index = this.items.indexOf(item);
								if (index !== -1) {
									this.items.splice(index, 1);
								}
							}.bind(this));
						};
						
						buttons.template += '<md-button aria-label="remove from cart" ng-click="ctrl.deleteItem(item)"><md-icon md-svg-icon="navigation:ic_close_24px"></md-icon></md-button>';
					}

					if (this.showStandbyButton === 'true') {

						this.standbyItem = function (item) {

							console.log('standby', item);
						};

						buttons.template += '<md-button aria-label="remove from cart" ng-click="ctrl.standbyItem(item)"><md-icon md-svg-icon="navigation:ic_unfold_more_24px"></md-icon></md-button>';
					}

					if (buttons.template.length > 0) {
						this.columns.push(buttons);	
					}
				},
				controllerAs: 'ctrl'
				//link: postLink,
			};

			//function postLink (scope, element){
			//	$mdTheming(element);
			//}
		});

})();