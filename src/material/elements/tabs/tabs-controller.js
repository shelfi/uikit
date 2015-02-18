(function(){
'use strict';
module.exports = ['$scope', function($scope){
	var tabs = [
	      { title: 'One', content: "Tabs will become paginated if there isn't enough room for them."},
	      { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},
	      { title: 'Three', content: "You can bind the selected tab via the selected attribute on the md-tabs element."}
	    ];
	    $scope.tabs = tabs;
	    $scope.selectedIndex = 2;
}];
})();