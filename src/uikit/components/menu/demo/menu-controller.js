(function(){

'use strict';
	angular.module('uikit.components.menu')
		.controller('MenuCtrl', function () {
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
		});

})();