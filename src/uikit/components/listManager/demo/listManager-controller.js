(function(){

	'use strict';

	angular.module('uikit.components.listManager')
		
		.controller('listManagerCtrl', function () {
			this.totalItems = 40;
			this.itemsPerPage = 10;
			this.currentPage = 2;
			this.pageChanged = function () {
				console.log('pageChanged');
			};
			this.itemLayout = 'grid';
			this.rowItems = 4;
		});

})();