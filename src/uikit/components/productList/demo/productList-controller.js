(function(){

	'use strict';

	angular.module('uikit.components.productList')
		
		.controller('productListCtrl', function () {

			this.products = [
				{ name: 'product 1', image: 'holder.js/100%x300', price: 15, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' }, 
				{ name: 'product 2', image: 'holder.js/100%x300', price: 30, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...22222222222222222 33333333333333333' },
				{ name: 'product 3', image: 'holder.js/100%x300', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
				{ name: 'product 4', image: 'holder.js/100%x300', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
				{ name: 'product 5', image: 'holder.js/100%x300', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
				{ name: 'product 6', image: 'holder.js/100%x300', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
				{ name: 'product 7', image: 'holder.js/100%x300', price: 45, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' },
			];
		});

})();