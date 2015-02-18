(function(){
'use strict';
module.exports = ['$scope', '$timeout', '$mdSidenav', '$log', function($scope, $timeout, $mdSidenav, $log){
      	$scope.toggleLeft = function() {
    	    $mdSidenav('left').toggle()
              .then(function(){
                  $log.debug("toggle left is done");
              });
        $scope.toggleRight = function() {
          $mdSidenav('right').toggle()
                              .then(function(){
                                $log.debug("toggle RIGHT is done");
                              });
        };
        $scope.closeLeft = function() {
          $mdSidenav('left').close()
                            .then(function(){
                              $log.debug("close LEFT is done");
                            });
        };
        $scope.closeRight = function() {
          $mdSidenav('right').close()
                              .then(function(){
                                $log.debug("close RIGHT is done");
                              });
        };
      };  
	}];
})();