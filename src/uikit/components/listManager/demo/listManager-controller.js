(function(){

	'use strict';

	angular.module('uikit.components.listManager')
		
		.config(function ($mdThemingProvider, $mdIconProvider) {

			$mdIconProvider
				.icon('compare_selected', '/uikit/images/icons/core/compare.svg')
				.icon('add_selected_to_cart', '/uikit/images/icons/core/cart.svg')
				.icon('add_selected_to_favorite', '/uikit/images/icons/core/cart.svg');
		})

		.controller('listManagerCtrl', function () {






			this.items = [
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

			this.sortOptions = [
				'price',
				'title',
				'image'
			];

			this.onItemLayoutChange = function (item) {
				console.log('onItemLayoutChange', item);
			};

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
		});

})();