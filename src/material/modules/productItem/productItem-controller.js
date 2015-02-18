(function(){
'use strict';
module.exports = ['$scope', function($scope){
	this.name = 'john';
	this.products = [
	{title: 'nike tshirt', image: 'holder.js/200x200', shortDesc: 'this is a nice short description about super nike tshirt...', price: '15'},
	{title: 'adidas shorts', image: 'holder.js/200x200', shortDesc: 'this is another short description about adidas shorts...', price: '20'},
	{title: 'reebok shoes', image: 'holder.js/200x200', shortDesc: 'this is a also short description about reebok shoes...', price: '10'}
];
}];
})();