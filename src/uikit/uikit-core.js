(function() {

	'use strict';

	/**
	* Initialization for uikit-core
	*/
	angular.module('uikit.core', ['ngMaterial'])
		
		.config(function ($mdThemingProvider, $mdIconProvider) {
			//$mdThemingProvider.alwaysWatchTheme(true);
			$mdThemingProvider.theme('altTheme')
				.primaryPalette('purple') // specify primary color, all other color intentions will be inherited from default
				.accentPalette('orange');

			$mdThemingProvider.theme('docs-dark', 'default')
				.primaryPalette('orange')
				.dark();

			$mdIconProvider
				.iconSet('action', '/uikit/images/icons/svg-sprite-action.svg', 24)
				.iconSet('navigation', '/uikit/images/icons/svg-sprite-navigation.svg', 24)
				.iconSet('communication', '/uikit/images/icons/svg-sprite-communication.svg', 24)
				.iconSet('maps', '/uikit/images/icons/svg-sprite-maps.svg', 24)
				.iconSet('av', '/uikit/images/icons/svg-sprite-av.svg', 24)
				.iconSet('extra', '/uikit/images/icons/extra.svg');
		})
		.run(function($log){
		  $log.debug("uikit + ngMaterial running...");
		})
		.directive('sfTemplate', function ($compile) {
			return {
				restrict: 'A',
				//scope: {
				//  template: '=sfTemplate',
				//  item: '=ngModel'
				//},
				link: function (scope, element, attrs) {

					//if (scope.template) {
					//  element.html(scope.template);
					//  $compile(element.contents())(scope);
					//}

					//console.log(attrs.sfTemplate, attrs.ngModel);

					//console.log(attrs.ngModel, scope.$parent[attrs.ngModel]);
					//console.log(attrs.sfTemplate, scope[attrs.sfTemplate]);
					//console.log(attrs.sfTemplate, scope);
					//console.log(attrs.sfTemplate, scope.$eval(attrs.sfTemplate));
					//var t = scope.$parent.$eval(attrs.sfTemplate);

					var t = scope.$eval(attrs.sfTemplate);
					if (t) {
						//console.log(t, scope.$parent);
						element.html(t);
						//console.log(element.contents());
						//$compile(element.contents())(scope.$parent);
						$compile(element.contents())(scope);
					}
				}
			};
		})
		.directive('ngIncludeReplace', function () {
			return {
				require: 'ngInclude',
				restrict: 'A',
				link: function (scope, el, attrs) {
					el.replaceWith(el.children());
				}
			};
		});

	angular.module('uikit.components', ['uikit.core']);
	angular.module('uikit.snippets', ['uikit.core']);












	
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




	function listController () {

		this.config = {};
		this.columns = [];
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




	//general
	//listController.prototype.setConfig = function (config) {
	//	this.config = angular.extend({}, defaultListConfig, config);
	//};

	listController.prototype.doRequest = function () {
		
		var data = {
			//multi: true
			cliensidePagination: this.config.cliensidePagination,
			selectedFilterItems: this.selectedFilter.filterItems,
			search: this.search.$,
			orderBy: this.orderBy,
			reverse: this.reverse,
			itemsPerPage: this.itemsPerPage,
			currentPage: this.currentPage
		};

		console.log('doRequest', this.config);
		//console.log('doRequest', data);

		Restangular.all(this.config.url).getList(data).then(function (response) {

			//console.log('doRequest', response);

			if(response.listOptions) {

				if(response.listOptions.hasOwnProperty('cliensidePagination')) {

					_self.config.cliensidePagination = response.listOptions.cliensidePagination;
				}
				
				if(response.listOptions.hasOwnProperty('totalItems')) {
					_self.totalItems = response.listOptions.totalItems;
				}
			}

			var r = response.list || response;

			if(_self.config.cliensidePagination) {

				_self.allItems = r;
				_self.totalItems = r.length;
				_self.filter();
				return;
			}

			_self.items = r;
		});
	};

	//filter
	listController.prototype.selectFilter = function (filter) {
		this.selectedFilter = angular.copy(filter);
		//console.log('selectFilter', this.selectedFilter);
		this.filter();
	};

	listController.prototype.selectDefaultFilter = function () {
		this.selectedFilter = angular.copy(this.filters[0]);
		//console.log('selectDefaultFilter', this.selectedFilter);
		this.filter();
	};

	listController.prototype.removeFilterItem = function (filterItem) {
		var index = this.selectedFilter.filterItems.indexOf(filterItem);
		if (index > -1) {
			this.selectedFilter.filterItems.splice(index, 1);
			//console.log('removeFilterItem', this.selectedFilter);
			if(this.selectedFilter.filterItems.length === 0) {
				this.selectDefaultFilter();
				return;
			}
			this.filter();
		}
	};

	listController.prototype.loadFilter = function () {
		/*
		//TODO:Load filter dynamically
		this.filters = [
			{ id: '0', name: this.config.defaultFilterName, filterItems: [] },
			{ id: '1', name: 'elmalar', filterItems: [ 
				{column: 'name', operator: 'eq', value: 'elma1'}
				,{column: 'name', operator: 'eq', value: 'elma2'} 
			]},
			{ id: '2', name: '100 TL\'den buyuk siparisler', filterItems: [ 
				{column: 'sku', operator: 'eq', value: 'asd'}, 
				{column: 'name', operator: 'neq', value: 'asd'}, 
				{column: 'name', operator: 'sm', value: 'asd'},
				{column: 'name', operator: 'nsm', value: 'asd'},
				{column: 'name', operator: 'gt', value: 'asd'},
				{column: 'name', operator: 'gteq', value: 'asd'},
				{column: 'name', operator: 'lt', value: 'asd'},
				{column: 'name', operator: 'lteq', value: 'asd'},
				{column: 'name', operator: 'btw', value: '1', value2: '5'},
				{column: 'name', operator: 'sw', value: 'asd'},
				{column: 'name', operator: 'ew', value: 'asd'}
			]},
			{ id: '3', name: 'Ucretsiz kargo kampanyasina ait siparisler', filterItems: [ {column: 'sku', operator: 'eq', value: 'asd'} ]}
		];
		*/
	};

	listController.prototype.saveFilter = function (filter) {
		//console.log('saveFilter', filter);
		if(filter.id) {
			//update
			if(filter.id === '0') {
				return false;
			}

			//TODO:save to DB
			for(var i = 0; i < this.filters.length; i++) {

				if(this.filters[i].id === filter.id) {

					this.filters[i] = filter;
					this.selectFilter(filter);
					return true;
				}
			}
			return false;
		}
		else {
			//add
			//TODO:save to DB
			this.filters.push(filter);
			this.selectFilter(filter);
			return true;
		}
		return false;
	};

	listController.prototype.removeFilter = function (filter) {
		//console.log('removeFilter', filter);
		if(filter.id === '0') {
			return false;
		}
		//TODO:save to DB
		for(var i = 0; i < this.filters.length; i++) {

			if(this.filters[i].id === filter.id) {
				this.selectDefaultFilter();
				this.filters.splice(i, 1);
				return true;
			}
		}
		return false;
	};

	listController.prototype.searchChanged = function () {
		//console.log('searchChanged', this.search);
		this.filter();
	};

	listController.prototype.filter = function () {

		//console.log('filter');
		if(this.config.cliensidePagination) {
			
			//process order --- ng-repeat="item in items | filter:search | orderBy:orderBy:reverse | offset:(currentPage-1)*itemsPerPage | limitTo:itemsPerPage"
			//--------------------------------------------------------------------------------------
			//1. filter:filter
			//2. filter:search
			//3. orderby
			//------------------------ pagination
			//4. offset
			//5. limit

			var items = this.allItems;

			items = $filter('filter')(items, function (item) {

				for(var i = 0; i < _self.selectedFilter.filterItems.length; i++) {

					var filterItem = _self.selectedFilter.filterItems[i];
					var value = item[filterItem.column];

					if(!operators.check(value, filterItem.operator, filterItem.value, filterItem.value2)) {
						return false;
					}
				}
				return true;
			});

			//search
			items = $filter('filter')(items, this.search);

			this.currentPage = 1;
			this.itemsFiltered = items;
			this.sort();
			return;
		}
		this.doRequest();
	};

	//sort
	listController.prototype.sortChanged = function (column) {
		//console.log(column);
		if(this.orderBy === column) {
			this.reverse = !this.reverse;
			this.sort();
			return;
		}
		this.orderBy = column;
		this.reverse = false;
		this.sort();
	};

	listController.prototype.sort = function () {
		if(this.config.cliensidePagination) {
			this.itemsSorted = $filter('orderBy')(this.itemsFiltered, this.orderBy, this.reverse);
			this.paginate();
			return;
		}
		this.doRequest();
	};

	//pagination
	listController.prototype.itemsPerPageChanged = function() {
		//console.log('itemsPerPageChanged', this.itemsPerPage);
		this.currentPage = 1;
		this.paginate();
	};

	listController.prototype.pageChanged = function() {
		//console.log('pageChanged', this.currentPage);
		this.paginate();
	};

	listController.prototype.paginate = function() {
		//console.log('paginate');
		if(this.config.cliensidePagination) {
			var items = this.itemsSorted;
			items = $filter('offset')(items, (this.currentPage - 1) * this.itemsPerPage);
			items = $filter('limitTo')(items, this.itemsPerPage);
			this.items = items;
			return;
		}
		this.doRequest();
	};

	//action
	listController.prototype.selectedItemActionFilter = function(action) {
		return action.apply === 'selected' || action.apply === 'all';
	};

	listController.prototype.itemActionFilter = function(action) {
		return action.apply === 'item' || action.apply === 'all';
	};

	listController.prototype.actionSelected = function (action) {
		var selectedItems = $filter('filter')(this.items, { selected: true });
		//console.log('actionSelected', action, selectedItems);
		action.fn(selectedItems);
	};

	

})();