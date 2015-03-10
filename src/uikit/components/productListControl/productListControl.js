(function(){

	'use strict';

	function listController11111 () {

		this.config = {};
		this.items = [];
		this.itemsFiltered = [];
		this.itemsSorted = [];
		this.allItems = [];
		this.totalItems = 0;
		this.orderBy = this.config.pk;
		this.reverse = false;
		this.itemsPerPage = 5;
		this.currentPage = 1;
		this.search = '';
		this.filters = [
			{ id: '0', name: 'Genel', filterItems: [] }
			//{ id: '0', name: $translate.instant(this.config.url + '.' + this.config.defaultFilterName), filterItems: [] }
			//{ id: '0', name: this._scope.config.defaultFilterName, filterItems: [] }
		];
		this.selectedFilter = angular.copy(this.filters[0]);
	};

	//listController.prototype.asd


	angular.module('uikit.components.productListControl', [])
		
		.directive('sfProductListControl', function () {
			return {
				restrict: 'E',
				//transclude: true,
				templateUrl: 'components/productListControl/productListControl.tmpl.html',
				scope: {
					items: '=ngModel'
				},
				bindToController: true,
				controller: function () {
					//asd
				},
				controllerAs: 'ctrl'
			};
		});

})();