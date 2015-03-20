(function(){

	'use strict';

	angular.module('uikit.components.productList', [])

		.directive('sfProductList', function ($controller) {
			return {
				restrict: 'E',
				templateUrl: 'components/productList/productList.tmpl.html',
				scope: {
					items: '=ngModel',
					layout: '@',
					rowItems: '@',
					actionButtons: '=',
					//pagination = true
					//sorter = true
					//filter = true


					// Comes from pagination

					sortable: '@',
					sort: '=',

					//<select name="sort" id="sort" ng-model="ctrl.sort" >
					//	ng-repeat="item in ctrl.items"
					//	<option value="">Sırala</option>
					//	<option value="">Urun Kodu</option>
					//	<option value="">Stok</option>
					//	<option value="">Marka</option>
					//	<option value="">Fiyat Azalan</option>
					//	<option value="">Fiyat Artan</option>
					//	<option value="">Puan</option>
					//</select>



					paginator: '@',
					currentPage: '=',
					totalItems: '@',
					itemsPerPage: '@',
					maxSize: '@',
					numPages: '@',
					rotate: '@',
					directionLinks: '@',
					previousText: '@',
					nextText: '@',
					boundaryLinks: '@',
					firstText: '@',
					lastText: '@',
				    //ng-model : Current page number. First page is 1.
				    //total-items : Total number of items in all pages.
				    //items-per-page (Defaults: 10) : Maximum number of items per page. A value less than one indicates all items on one page.
				    //max-size (Defaults: null) : Limit number for pagination size.
				    //num-pages readonly (Defaults: angular.noop) : An optional expression assigned the total number of pages to display.
				    //rotate (Defaults: true) : Whether to keep current page in the middle of the visible ones.
				    //direction-links (Default: true) : Whether to display Previous / Next buttons.
				    //previous-text (Default: 'Previous') : Text for Previous button.
				    //next-text (Default: 'Next') : Text for Next button.
				    //boundary-links (Default: false) : Whether to display First / Last buttons.
				    //first-text (Default: 'First') : Text for First button.
				    //last-text (Default: 'Last') : Text for Last button.


					// Comes from productItem
					itemLayout: '@',
					showImage: '@',
					showName: '@',
					showDescription: '@',
					showPrice: '@',
					showQuantity: '@',
					showPromotion: '@',
					selectable: '@'
				},
				bindToController: true,
				controller: function () {
					this.actionCallback = function (cb) {
						cb(this.items.filter(function (item) {
							return item.selected;
						}));
					};
					this.changeItemLayout = function (layout) {
						if (this.itemLayout === 'grid' && layout !== 'grid') {
							this.rowItems_ = this.rowItems;
							this.rowItems = 1;
						}
						else if (layout === 'grid') {
							this.rowItems = this.rowItems_ || 1;
						}
						this.itemLayout = layout;
					};
				},
				controllerAs: 'ctrl',
				
				// http://stackoverflow.com/questions/27949398/can-controllers-be-completely-replaced-by-the-link-function-in-a-directive
				// Best Practice: use controller when you want to expose an API to other directives. Otherwise use link.
				link: function (scope, element, attrs) {
					scope.ctrl.itemLayout = scope.ctrl.itemLayout || 'grid';
					scope.ctrl.showItemLayout = !attrs.itemLayout;
					
					var listCtrl = $controller('listController');
					listCtrl.config.cliensidePagination = true;
					listCtrl.allItems = scope.ctrl.items;
					listCtrl.items = scope.ctrl.items;
					scope.listCtrl = listCtrl;
					scope.$watch('items', function (newValue) {
						if (newValue) {
							scope.listCtrl.allItems = newValue;
							scope.listCtrl.items = newValue;
						}
					});
				}
			};
		});

})();