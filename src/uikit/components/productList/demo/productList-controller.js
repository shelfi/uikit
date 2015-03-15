(function(){

	'use strict';

	angular.module('uikit.components.productList')
		
		.controller('productListCtrl', function () {

			this.products = [
				{ name: 'Product with a really long name that can reach over two lines', image: 'holder.js/100%x300', price: 15, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...', promotion: [
					{ description: 'Free Shipping', icon: 'maps:ic_local_shipping_24px' }
				]}, 
				{ name: 'product 2', image: 'holder.js/100%x300', price: 30, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...22222222222222222 33333333333333333' },
				{ name: 'product 3', image: 'holder.js/100%x300', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...', promotion: [
					{ description: '%15 discount', icon: 'action:ic_loyalty_24px' }
				]},
				{ name: 'product 4', image: 'holder.js/100%x300', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
				{ name: 'product 5', image: 'holder.js/100%x300', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
				{ name: 'product 6', image: 'holder.js/100%x300', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
				{ name: 'product 7', image: 'holder.js/100%x300', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
			];

			this.config = {
				itemLayout: "grid",
				rowItems: 4,
				actionButtons : {
								compare: function (selectedItems) {
									console.log('compare', selectedItems);
								},
								addToCart: function (selectedItems) {
									console.log('addToCart', selectedItems);
								}
				}				
			};


			this.actionButtons = {
				compare: function (selectedItems) {
					console.log('compare', selectedItems);
				},
				addToCart: function (selectedItems) {
					console.log('addToCart', selectedItems);
				}
			};
		});

})();