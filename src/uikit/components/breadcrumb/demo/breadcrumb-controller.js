(function(){
'use strict';
angular.module('uikit.components.breadcrumb')
	.controller('BreadcrumbDemoCtrl', BreadcrumbDemoController);

	function BreadcrumbDemoController($scope){
		this.nav = {
			primary: [{title: "Dashboard", type: "link", link: "/"}, {title: "Products", type: "toggle", link: "/"}, {title: "Orders", type: "toggle", link: "/"}]
		};
	}

})();
