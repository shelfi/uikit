(function(){
'use strict';
angular.module('uikit').controller('PrintonlineCtrl', PrintonlineController);

function PrintonlineController($mdSidenav, $scope, $log, $mdDialog, $mdBottomSheet){
	this.brand = 'PRINTONLINE | 3M';
	this.banner = false;
	this.nav = {
		primary: [{title: "Anasayfa", type: "link", link: "/"}, {title: "Ürünler", type: "link", link: "/"}, {title: "Standart Kartvizit", type: "link", link: "/"}, ],
		secondary: [
		{title: 'ANASAYFA', link: '/PO/PO-home.html'},
		{title: 'ÜRÜNLER', link: '/PO/PO-product-list.html', submenu: [{title: 'Şablon Ürünler', link: '/PO/PO-product-list.html'},{title: 'Dinamik Ürünler', link: '/PO/PO-product-detail.html'}]},
		{title: 'HESABIM', link: '#', submenu: [{title: 'Hesap Ayarları', link: 'blabla'},{title: 'Adreslerim', link: 'blabal'},{title: 'Sepetlerim', link: 'nalnalan'}, {title: 'Veri Listelerim', link: 'nalnalan'}]},
		{title: 'SİPARİŞ GEÇMİŞİM', link: '#'}
		]
	};
	this.menu = {
			root: [
			{title: 'Şablon Ürünler', link: '#', 
			submenu: [{title: 'Kartvizit', link: '/kartvizit', 
					subsubmenu: [
						{title: 'Genel Müdürlük Kartvizit', link: '/genel'},
						{title: 'Ankara Bölge Kartvizit', link: '/ankara'},
						{title: 'Adana Bölge Kartvizit', link: '/adana '}
					]},
					{title: 'Etiket', link: '/etiket', 
						subsubmenu: [
							{title: 'Etiket(Kolay Sokulen)', link: '/kolayetiket'},
							{title: 'Etiket Normal', link: 'blabla'}
					]}
				]}
			]
		};
	this.user = {
		name: 'Ahmet Okan',
		image: 'holder.js/250x125',
		email: 'ahmet@gmail.com',
		phone: '(0216) 555-22-22',
		menu: [
			{title: 'Hesabım', icon: 'action:ic_account_circle_24px'},
			{title: 'Ayarlar', icon: 'action:ic_settings_24px'},
			{title: 'KAyıtlı Sepetler', icon: 'action:ic_shopping_cart_24px'},
			{title: 'Veri Listelerim', icon: 'action:ic_assignment_24px'}
		]
	};
	this.products = [
		{name: 'Kartvizit 12,5cm x 18cm', image: 'holder.js/100%x150', desc: '1. sınıf standart kartvizit', price: '15'},
		{name: 'Standart Zarf', image: 'holder.js/100%x150', desc: '1. sınıf standart zarf', price: '20'},
		{name: 'Ürün tanıtım broşür', image: 'holder.js/100%x150', desc: 'A6 boyutunda ürün tanıtım broşürü', price: '30'},
		{name: 'Flyer', image: 'holder.js/100%x150', desc: 'İki taraflı A6 boyutunda flyer', price: '15'}
	];

	this.order = [
		{image: 'holder.js/60x60', title: 'Super T-shirt', price: 15, quantity: 1 }, 
		{image: 'holder.js/60x60', title: 'Awesome Pants', price: 30,  quantity: 1 },
	];

	this.columns = [
		{ name: 'image', width: '30', template: '<img data-src="{{item.image}}" />' },
		{ name: 'title', width: '25', template: '<small>{{item.title}}</small>' },
		{ name: 'price', width: '15' },
		//{ name: 'quantity', width: '10', template: '<md-input-container><label>Quantity</label><input ng-model="item.quantity"></md-input-container>' }
		//{ name: 'quantity', width: '10', template: '<md-input-container><md-select ng-model="item.quantity" placeholder="Select quantity"><md-option ng-repeat="opt in [100, 250, 500, 1000, 2500]" ng-value="opt">{{ opt }}</md-option></md-select></md-input-container>'
		{ name: 'quantity', width: '30', template: '<md-select ng-model="item.quantity" placeholder="Adet"><md-option ng-repeat="opt in [100, 200, 500, 1000, 5000]" ng-value="opt">{{ opt }}</md-option></md-select>' }
	];
	this.search = {
		placeholder : 'Search by Name, Item#, Order#'
	};
	this.pages = [
				{page: 1},
				{page: 2},
			];
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
		brand: [{title: 'Tip'}, {name: 'Sandisk', cb:false},{name: 'Toshiba', cb:false},{name: 'Samsung', cb:false}],
		color: [{title: 'renk'}, {name: 'Siyah', cb:false},{name: 'Mavi', cb:false},{name: 'Yeşil', cb:false}],
		size: [{title: 'boyut'}, {name: '32GB', cb:false},{name: '64GB', cb:false},{name: '128GB', cb:false}]
	};

	var tabs = [
	        { title: 'Teknik Bilgiler', content: "Tur: Poster"},
	        { title: 'Detaylar', content: "Olculer: 245x165 cm"},
	        { title: 'Fiyatlandırma', content: "1 - 50: 0,50 TL / Adet "}
	      ];
	      this.tabs = tabs;
	      this.selectedIndex = 2;

	this.makePayment = function(ev) {
        $mdDialog.show({
        	templateUrl: 'payment.tmpl.html',
        	targetEvent: ev
        })
    };


    this.productdetail = {
    	info1: false,
    	info2: false,
    	info3: false
    };

    this.showBottomSheetGrid = function($event) {
      this.alert = '';
      $mdBottomSheet.show({
        templateUrl: 'bottomsheetgrid.html',
        controller: 'PrintonlineCtrl as ctrl',
        targetEvent: $event
      }).then(function(clickedItem) {
        this.alert = clickedItem.name + ' clicked!';
      });
    };


      this.showHoverProduct = function(ev) {
      	$mdDialog.show({
      	     templateUrl: 'templates/PO/partials/PO-hover.tmpl.html',
      	     targetEvent: ev,
      	   })
      };
}
})();