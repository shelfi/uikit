(function(){

'use strict';
	
	angular.module('uikit.components.cart')
		
		.controller('cartCtrl', function () {

			this.order = {
				products: [
					{ slug: 'product-2', name: 'product 2', image: 'holder.js/100%x300/text:product2', price: 20, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...22222222222222222 33333333333333333' },
					{ slug: 'product-4', name: 'product 4', image: 'holder.js/100%x300/text:product4', price: 40, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...', qtyOptions: [100, 150, 250, 500] },
					{ slug: 'product-6', name: 'product 6', image: 'holder.js/100%x300/text:product6', price: 60, desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...', qtyOptions: [100, 150, 250, 500] }
				]
			};
		});

})();