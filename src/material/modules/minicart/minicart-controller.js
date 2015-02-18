(function(){
'use strict';
module.exports = [function(){
		this.cartitems = [{name: 'Super T-shirt', price: 15, quantity: 1}, {name: 'Awesome Pants', price: 30,  quantity: 1}];
		this.showitems = false;
		this.title = 'Mini Sepet';
		this.getTotals = function (){
			var _this = this,
			totals = {};
			for (var i = 0; i < _this.cartitems.length; i++){
				totals.quantity =+ _this.cartitems[i].quantity;
				totals.price =+ _this.cartitems[i].price;
			}
			return totals;
		};
}];
})();