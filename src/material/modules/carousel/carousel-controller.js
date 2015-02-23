(function(){
'use strict';
module.exports = ['$scope', function($scope){
	var tabs = [
	      { title: 'One', content: "Tabs will become paginated if there isn't enough room for them.", image: 'holder.js/800x350'},
	      { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs.", image: 'holder.js/800x350'},
	      { title: 'Three', content: "You can bind the selected tab via the selected attribute on the md-tabs element.", image: 'holder.js/850x350'},
	      { title: 'Four', content: "If you set the selected tab binding to -1, it will leave no tab selected.", image: 'holder.js/800x350'}
	    ];
	    $scope.tabs = tabs;
}];
})();