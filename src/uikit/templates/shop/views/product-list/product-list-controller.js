(function () {

	'use strict';

	angular.module('shop')
		.controller('productListController', function ($controller, $timeout, $scope, $state, orderService) {

			//scope.ctrl.itemLayout = scope.ctrl.itemLayout || 'grid';
			//scope.ctrl.showItemLayout = !attrs.itemLayout;
			
			this.listCtrl = $controller('listController', { $scope: $scope });
			this.listCtrl.config.cliensidePagination = true;
			this.listCtrl.doRequest = function (currentPage) {
				$timeout(function () {
					var r = [
						{ slug: 'product-1', name: 'Product with a really long name that can reach over two lines', image: 'holder.js/100%x300/text:product1', price: 15, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...', promotion: [
							{ description: 'Free Shipping', icon: 'maps:ic_local_shipping_24px' }
						]}, 
						{ slug: 'product-2', name: 'product 2', image: 'holder.js/100%x300/text:product2', price: 30, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...22222222222222222 33333333333333333' },
						{ slug: 'product-3', name: 'product 3', image: 'holder.js/100%x300/text:product3', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...', promotion: [
							{ description: '%15 discount', icon: 'action:ic_loyalty_24px' }
						]},
						{ slug: 'product-4', name: 'product 4', image: 'holder.js/100%x300/text:product4', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
						{ slug: 'product-5', name: 'product 5', image: 'holder.js/100%x300/text:product5', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
						{ slug: 'product-6', name: 'product 6', image: 'holder.js/100%x300/text:product6', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
						{ slug: 'product-7', name: 'product 7', image: 'holder.js/100%x300/text:product7', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
						{ slug: 'product-8', name: 'product 8', image: 'holder.js/100%x300/text:product8', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
						{ slug: 'product-9', name: 'product 9', image: 'holder.js/100%x300/text:product9', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
						{ slug: 'product-10', name: 'product 10', image: 'holder.js/100%x300/text:product10', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
						{ slug: 'product-11', name: 'product 11', image: 'holder.js/100%x300/text:product11', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
						{ slug: 'product-12', name: 'product 12', image: 'holder.js/100%x300/text:product12', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
						{ slug: 'product-13', name: 'product 13', image: 'holder.js/100%x300/text:product13', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
						{ slug: 'product-14', name: 'product 14', image: 'holder.js/100%x300/text:product14', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
						{ slug: 'product-15', name: 'product 15', image: 'holder.js/100%x300/text:product15', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
						{ slug: 'product-16', name: 'product 16', image: 'holder.js/100%x300/text:product16', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
						{ slug: 'product-17', name: 'product 17', image: 'holder.js/100%x300/text:product17', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
						{ slug: 'product-18', name: 'product 18', image: 'holder.js/100%x300/text:product18', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
						{ slug: 'product-19', name: 'product 19', image: 'holder.js/100%x300/text:product19', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' }
					];
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
		});

})();