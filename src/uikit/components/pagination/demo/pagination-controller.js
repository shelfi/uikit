(function(){

	'use strict';

	angular.module('uikit.components.pagination')
		
		.controller('paginationCtrl', function () {

			this.totalItems = 100;
			this.itemsPerPage = 10;
			this.currentPage = 2;

			this.pageChanged = function () {
				console.log('pageChanged');
			};
		});

})();