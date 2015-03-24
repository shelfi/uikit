(function () {

	'use strict';






	Array.prototype.indexOfByKey = function (key, value) {
		for (var i = 0; i < this.length; i++) {
			if (this[i][key] && this[i][key] === value) {
				return i;
			}
		}
		return -1;
	};

	angular.module('shop', [
		'ui.router',
		'uikit'
	]);
	
})();