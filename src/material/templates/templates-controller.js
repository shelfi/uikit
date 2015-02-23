(function(){
'use strict';
module.exports = ['$mdSidenav', '$scope', '$log', function($mdSidenav, $scope, $log){
	this.nav = {
		primary: [{title: "Dashboard", type: "link"}, {title: "Products", type: "toggle"}, {title: "Orders", type: "toggle"}]
	};
	this.user = {
		name: 'Ahmet Okan',
		menu: [
			{title: 'My Account', icon: 'action:ic_account_circle_24px'},
			{title: 'Settings', icon: 'action:ic_settings_24px'},
			{title: 'Help', icon: 'action:ic_help_24px'},
			{title: 'Exit', icon: 'action:ic_exit_to_app_24px'}
		]
	};


	this.toggleUserPanel = function() {
		$mdSidenav('user-panel').toggle()
			.then(function() {
				$log.debug("user panel active");
			});
	};
	this.closeUserPanel = function() {
		$mdSidenav('user-panel').close()
			.then(function() {
				$log.debug("close RIGHT is done");
			});
	};
	this.toggleMiniCart = function() {
		$mdSidenav('mini-cart').toggle()
			.then(function() {
				$log.debug("minicart active");
			});
	};
	this.closeMiniCart = function() {
		$mdSidenav('mini-cart').close()
			.then(function() {
				$log.debug("minicart is done");
			});
	};

	this.order = [
		{image: 'holder.js/60x60', title: 'Super T-shirt', price: 15, quantity: 1}, 
		{image: 'holder.js/60x60', title: 'Awesome Pants', price: 30,  quantity: 1}
	];

}];
})();