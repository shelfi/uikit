(function(){

	'use strict';

	angular.module('uikit.components.listManager', [])
		
		.directive('sfListManager', function () {
			return {
				restrict: 'E',
				//transclude: true,
				templateUrl: 'components/listManager/listManager.tmpl.html',
				scope: {
					list: '=ngModel'
				},
				bindToController: true,
				controller: function () {
					this.changeItemLayout = function (layout) {
						if (this.list.itemLayout === 'grid' && layout !== 'grid') {
							this.list.rowItems_ = this.list.rowItems;
							this.list.rowItems = 1;
						}
						else if (layout === 'grid') {
							this.list.rowItems = this.list.rowItems_ || 1;
						}
						this.list.itemLayout = layout;
					};
					this.actionCallback = function (cb) {
						cb(this.list.filter(function (item) {
							return item.selected;
						}));
					};
				},
				controllerAs: 'ctrl'
			};
		});

})();