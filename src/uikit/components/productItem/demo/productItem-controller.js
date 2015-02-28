(function(){

'use strict';

	angular.module('uikit.components.productItem')
		
		.controller('productItemCtrl', function () {

			this.product = {
				name: 'product 12',
				image: 'holder.js/100%x300',
				price: 15,
				desc: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the * two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...' 
			};

			this.click = function (product) {
				console.log('click', product);
			};

			this.addToCart = function (product) {
				console.log('addToCart', product);
			};
		});

})();