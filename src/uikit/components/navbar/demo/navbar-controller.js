(function(){

'use strict';
	angular.module('uikit.components.navbar')
		.controller('NavbarCtrl', function () {
			this.nav = {
					primary: [{title: "TÜM KATEGORİLER", type: "link", link: "/"}],
					secondary: [
					{title: 'BAREM', link: '#', submenu: [{title: 'BAREMsub1', link: 'blabla'},{title: 'BAREMsub2', link: 'blabla'},{title: 'BAREMsub3', link: 'ana '}]},
					{title: 'HESABIM', link: '#', submenu: [{title: 'HESABIMsub1', link: 'blabla'},{title: 'HESABIMsub2', link: 'blabal'},{title: 'HESABIMsub3', link: 'balba'}]},
					{title: 'KAMPANYALAR', link: '#', submenu: [{title: 'KAMPANYALARsub1', link: 'blabla'},{title: 'KAMPANYALARsub2', link: 'blabal'},{title: 'KAMPANYALARsub3', link: 'nalnalan'}]},
					{title: 'DESTEK', link: '#', submenu: [{title: 'DESTEKsub1', link: 'blabla'},{title: 'DESTEKsub2', link: 'blabal'},{title: 'DESTEKsub3', link: 'nalnalan'}]}
					]
				};
		});

})();