(function () {

	'use strict';

	angular.module('shop')
		.controller('productListController', function ($controller, $timeout, $scope, $state, orderService, products, $mdSidenav) {

			//scope.ctrl.itemLayout = scope.ctrl.itemLayout || 'grid';
			//scope.ctrl.showItemLayout = !attrs.itemLayout;
			
			this.listCtrl = $controller('listController', { $scope: $scope });
			this.listCtrl.config.cliensidePagination = true;
			this.listCtrl.doRequest = function (currentPage) {
				$timeout(function () {
					var r = products;
					if (this.config.cliensidePagination) {
						this.allItems = r;
						this.totalItems = r.length;
						this.filter();
						return;
					}
					this.items = r;
				}.bind(this), 500);
			};
			this.listCtrl.doRequest();
			//this.listCtrl.items = this.items;
			//scope.listCtrl = listCtrl;
			//scope.$watch('items', function (newValue) {
			//	if (newValue) {
			//		scope.listCtrl.allItems = newValue;
			//		scope.listCtrl.items = newValue;
			//	}
			//});


			this.sortOptions = [
				'title',
				'title-',
				'price',
				'price-'
			];

			this.actionButtons = {
				'Compare Selected': function (selectedItems) {
					console.log('compare', selectedItems);
				},
				'Add Selected To Cart': function (selectedItems) {
					console.log('Add To Cart', selectedItems);
					selectedItems.forEach(function (product) {
						orderService.product.add(product);
					});
					$state.go('cart');
				},
				'Add Selected To Favorite': function (selectedItems) {
					console.log('Add To Favorite', selectedItems);
				}
			};

			this.itemLayout = 'grid';
			this.rowItems = 4; 

			this.onItemLayoutChange = function (layout) {
				if (this.itemLayout === 'grid' && layout !== 'grid') {
					this.rowItems_ = this.rowItems;
					this.rowItems = 1;
				}
				else if (layout === 'grid') {
					this.rowItems = this.rowItems_ || 1;
				}
				this.itemLayout = layout;
			};

			this.addToCart = function (product) {
				orderService.product.add(product);
				$state.go('cart');
			};

			this.click = function (product) {
				$state.go('products_', {
					slug: product.slug
				});
			};

			/*
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
			*/
			this.toggleSidenav = function() {
			    $mdSidenav('product-filter').toggle();
			};


		});

})();