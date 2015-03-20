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
				{ name: 'product 8', image: 'holder.js/100%x300', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
				{ name: 'product 9', image: 'holder.js/100%x300', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
				{ name: 'product 10', image: 'holder.js/100%x300', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
				{ name: 'product 11', image: 'holder.js/100%x300', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
				{ name: 'product 12', image: 'holder.js/100%x300', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
				{ name: 'product 13', image: 'holder.js/100%x300', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
				{ name: 'product 14', image: 'holder.js/100%x300', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
				{ name: 'product 15', image: 'holder.js/100%x300', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
				{ name: 'product 16', image: 'holder.js/100%x300', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
				{ name: 'product 17', image: 'holder.js/100%x300', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
				{ name: 'product 18', image: 'holder.js/100%x300', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
				{ name: 'product 19', image: 'holder.js/100%x300', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' }
			];

			this.actionButtons = {
				compare: function (selectedItems) {
					console.log('compare', selectedItems);
				},
				addToCart: function (selectedItems) {
					console.log('addToCart', selectedItems);
				}
			};

			this.cb = function () {
				console.log('asd');
			};

		});

})();