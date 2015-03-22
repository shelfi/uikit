(function(){

	'use strict';

	angular.module('uikit.components.listManager', [])
		
		.directive('sfListManager', function () {
			return {
				restrict: 'E',
				templateUrl: 'components/listManager/listManager.tmpl.html',
				scope: {
					items: '=ngModel',
					showItemLayout: '@',
					itemLayout: '@',
					onItemLayoutChange: '&',
					
					sortOptions: '=',
					sort: '=',
					onSortChange: '&',

					actionButtons: '='
				},
				bindToController: true,
				controller: function () {
					this.onActionClick = function (cb) {
						cb(this.items.filter(function (item) {
							return item.selected;
						}));
					};
					this.getIcon = function (action) {
						return action.toLowerCase().replace(/\s/g, '_');
					};
				},
				controllerAs: 'ctrl'
			};
		});

})();