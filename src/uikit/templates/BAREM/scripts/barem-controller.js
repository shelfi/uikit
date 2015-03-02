(function(){
'use strict';
angular.module('uikit').controller('BaremCtrl', BaremController);

function BaremController($mdSidenav, $scope, $log){
	this.brand = 'BAREM B2B';
	this.banner = false;
	this.nav = {
		primary: [{title: "TÜM KATEGORİLER", type: "link", link: "/"}],
		secondary: [{title: "TÜM KATEGORİLER", type: "link", link: "/"}]
	};
	this.user = {
		name: 'Ahmet Okan',
		image: 'holder.js/250x125',
		email: 'ahmet@gmail.com',
		phone: '(0216) 555-22-22',
		menu: [
			{title: 'My Account', icon: 'action:ic_account_circle_24px'},
			{title: 'Settings', icon: 'action:ic_settings_24px'},
			{title: 'Saved Carts', icon: 'action:ic_shopping_cart_24px'},
			{title: 'Quotes', icon: 'action:ic_assignment_24px'},
			{title: 'Returns', icon: 'action:ic_redeem_24px'}
		]
	};
	this.products = [
		{name: 'SAMSUNG 120GB', image: 'holder.js/100%x150', desc: 'Kablosuz, 300Mbps 2.4GHz Outdoor Access Point', price: '15'},
		{name: 'TPLINK WRL 5200', image: 'holder.js/100%x150', desc: 'Kablosuz, 300Mbps 2.4GHz Outdoor Access Point', price: '20'},
		{name: 'HP 500656-B21', image: 'holder.js/100%x150', desc: 'Kablosuz, 300Mbps 2.4GHz Outdoor Access Point', price: '30'},
		{name: 'HP 748921-021', image: 'holder.js/100%x150', desc: 'Kablosuz, 300Mbps 2.4GHz Outdoor Access Point', price: '15'}
	];

	this.order = [
		{image: 'holder.js/60x60', title: 'Super T-shirt', price: 15, quantity: 1 }, 
		{image: 'holder.js/60x60', title: 'Awesome Pants', price: 30,  quantity: 1 },
	];

	this.columns = [
		{ name: 'image', width: '10', template: '<img data-src="{{item.image}}" />' },
		{ name: 'title', width: '', template: '<small>{{item.title}}</small>' },
		{ name: 'price', width: '10' },
		//{ name: 'quantity', width: '10', template: '<md-input-container><label>Quantity</label><input ng-model="item.quantity"></md-input-container>' }
		//{ name: 'quantity', width: '10', template: '<md-input-container><md-select ng-model="item.quantity" placeholder="Select quantity"><md-option ng-repeat="opt in [100, 250, 500, 1000, 2500]" ng-value="opt">{{ opt }}</md-option></md-select></md-input-container>'
		{ name: 'quantity', width: '15', template: '<md-select ng-model="item.quantity" placeholder="Select quantity"><md-option ng-repeat="opt in [100, 200, 500, 1000, 5000]" ng-value="opt">{{ opt }}</md-option></md-select>' }
	];
	this.search = {
		placeholder : 'Search by Name, Item#, Order#'
	};
	this.lang = [
		{title: 'ENG', value: 'ENG'},{title: 'TR', value: 'TR'},
	];
	this.toggleMainSidebar = function() {
		$mdSidenav('main-sidenav').toggle()
			.then(function() {
				$log.debug("user panel active");
			});
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
		{image: 'holder.js/60x60', title: 'Awesome Pants', price: 30,  quantity: 1},
	];

	this.features = [
		{title:'Product Category01', image:'holder.js/100%x200'},
		{title:'Product Category02', image:'holder.js/100%x200'},
		{title:'Product Category03', image:'holder.js/100%x200'},
		{title:'Product Category04', image:'holder.js/100%x200'}
	];


	this.filter = {
		brand: [{title: 'marka'}, {name: 'Sandisk', cb:false},{name: 'Toshiba', cb:false},{name: 'Samsung', cb:false}],
		color: [{title: 'renk'}, {name: 'Siyah', cb:false},{name: 'Mavi', cb:false},{name: 'Yeşil', cb:false}],
		size: [{title: 'boyut'}, {name: '32GB', cb:false},{name: '64GB', cb:false},{name: '128GB', cb:false}]
	};

	var tabs = [
	        { title: 'Teknik Bilgiler', content: "Kablosuz, 300Mbps 2.4GHz Outdoor Access Point"},
	        { title: 'Detaylar', content: "Kablosuz, 300Mbps 2.4GHz Outdoor Access Point"}
	      ];
	      this.tabs = tabs;
	      this.selectedIndex = 2;


}
})();