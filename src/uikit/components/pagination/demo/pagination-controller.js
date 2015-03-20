(function(){

	'use strict';

	angular.module('uikit.components.pagination')
		
		.controller('paginationCtrl', function () {

			this.itemsPerPageOptions = [100, 200, 700, 900];
			this.totalItems = 160;
			this.itemsPerPage = 10;
			this.currentPage = 2;

			this.pageChanged = function () {
				console.log('pageChanged');
			};
		});

})();