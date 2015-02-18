(function(){
'use strict';
module.exports = ['$scope', '$timeout', '$mdBottomSheet', function ($scope, $timeout, $mdBottomSheet) {	
	$scope.alert = '';
	  $scope.showBottomSheetGrid = function($event) {
	    $scope.alert = '';
	    $mdBottomSheet.show({
	      templateUrl: 'bottomsheetgrid.html',
	      controller: 'BottomsheetCtrl',
	      targetEvent: $event
	    }).then(function(clickedItem) {
	      $scope.alert = clickedItem.name + ' clicked!';
	    });
	  };
	  $scope.showBottomSheetList = function($event) {
	    $scope.alert = '';
	    $mdBottomSheet.show({
	      templateUrl: 'bottomsheetlist.html',
	      controller: 'BottomsheetCtrl',
	      targetEvent: $event
	    }).then(function(clickedItem) {
	      $scope.alert = clickedItem.name + ' clicked!';
	    });
	  };
	  $scope.items = [
	      { name: 'Share', icon: 'share' },
	      { name: 'Upload', icon: 'upload' },
	      { name: 'Copy', icon: 'copy' },
	      { name: 'Print this page', icon: 'print' },
	    ];
	    $scope.listItemClick = function($index) {
	      var clickedItem = $scope.items[$index];
	      $mdBottomSheet.hide(clickedItem);
	    };
}];
})();