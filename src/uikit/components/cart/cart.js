(function(){

	'use strict';

	angular.module('uikit.components.cart', [])

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