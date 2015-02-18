(function(){
'use strict';
module.exports = ['$scope', function ($scope) {
	var colortitle = ['red', 'green', 'blue', 'gray', 'orange'];
	var COLORS = ['#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336'];
	  $scope.colorTiles = (function() {
	    var tiles = [];
	    for (var i = 0; i < 46; i++) {
	      tiles.push({
	        color: randomColor(),
	        colspan: randomSpan(),
	        rowspan: randomSpan(),
	        title: randomColorTitle()
	      });
	    }
	    return tiles;
	  })();
	  function randomColor() {
	    return COLORS[Math.floor(Math.random() * COLORS.length)];
	  }
	  function randomColorTitle() {
	    return colortitle[Math.floor(Math.random() * colortitle.length)];
	  }
	  function randomSpan() {
	    var r = Math.random();
	    if (r < 0.8) {
	      return 1;
	    } else if (r < 0.9) {
	      return 2;
	    } else {
	      return 3;
	    }
	  }

	}];
})();