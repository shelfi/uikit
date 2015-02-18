(function(){
'use strict';
module.exports = ['$scope', function ($scope) {
	
	$scope.user = {
		title : 'Ahmet Okan',
		address: 'Blabla St. No:1/1'
	};
	$scope.project = {
	    description: 'Nuclear Missile Defense System',
	    clientName: 'Bill Clinton',
	    rate: 500
	  };
}];
})();