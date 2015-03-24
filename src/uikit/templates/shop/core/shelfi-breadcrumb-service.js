(function () {

	'use strict';

	angular.module('shop')
		.service('breadcrumbService', ['$state', function ($state) {

			var _self = this;

			this.items = [];
			
			this.clear = function () {
				this.items = [];
			};

			this.resolve = function (state) {
				//console.log(state.name);
				if (state.instead) {
					var root = $state.get(state.instead);
					if (this.items.indexOf(root) === -1) {
						this.items.push(root);	
					}
				}
				else {
					this.items.push(state);
				}
				var parents = state.name.split('.');
				parents.pop();
				var parent = parents.join('.');
				if (parent) {
					var p = $state.get(parent);
					return this.resolve(p);
				}
			};

			this.set = function (state) {
				this.clear();
				this.resolve(state);
				this.items.reverse();
			};

			this.add = function (item) {
				if(!item || !angular.isObject(item) || !item.name)
					return;
				this.items.push(item);
			};

			this.getHome = function () {
				var s = this.items[0];
				return $state.get(s.name);
			};

			this.getCurrent = function () {
				return $state.current;
			};

			this.getParent = function () {
				var s = this.items[this.items.length - 2];
				return $state.get(s.name);
			};
		}]);
})();