(function(){
'use strict';
angular.module('uikit').controller('ElementsCtrl', ElementsController);


function ElementsController ($log, $q, $timeout, $mdBottomSheet, $mdDialog, $scope, $interval, $mdSidenav, $mdToast){




  /*--- AUTOCOMPLETE --- */

  var self = this;
  // list of `state` value/display objects
  self.states       = loadAll();
  self.selectedItem = null;
  self.searchText   = null;
  self.querySearch  = querySearch;
  // ******************************
  // Internal methods
  // ******************************
  /**
   * Search for states... use $timeout to simulate
   * remote dataservice call.
   */
  function querySearch (query) {
    var deferred = $q.defer();
    $timeout(function () {
      var results = query ? self.states.filter( createFilterFor(query) ) : [ ];
      deferred.resolve( results );
    }, Math.random() * 1000, false);
    return deferred.promise;
  }
  /**
   * Build `states` list of key/value pairs
   */
  function loadAll() {
    var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Deleware,\
              Florida, Georgia, Hawaii, Idaho, Illanois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
    return allStates.split(/, +/g).map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
    });
  }
  /**
   * Create filter function for a query string
   */
  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);
    return function filterFn(state) {
      return (state.value.indexOf(lowercaseQuery) === 0);
    };
  }





  /*--- BOTTOMSHEET --- */

    this.alert = '';
    this.showBottomSheetGrid = function($event) {
      this.alert = '';
      $mdBottomSheet.show({
        templateUrl: 'bottomsheetgrid.html',
        controller: 'ElementsCtrl as ctrl',
        targetEvent: $event
      }).then(function(clickedItem) {
        this.alert = clickedItem.name + ' clicked!';
      });
    };
    this.showBottomSheetList = function($event) {
      this.alert = '';
      $mdBottomSheet.show({
        templateUrl: 'bottomsheetlist.html',
        controller: 'ElementsCtrl as ctrl',
        targetEvent: $event
      }).then(function(clickedItem) {
        this.alert = clickedItem.name + ' clicked!';
      });
    };
    this.bottomsheetitems = [
        { name: 'Share', icon: 'share' },
        { name: 'Upload', icon: 'upload' },
        { name: 'Copy', icon: 'copy' },
        { name: 'Print this page', icon: 'print' },
      ];
      this.listItemClick = function($index) {
        var clickedItem = this.items[$index];
        $mdBottomSheet.hide(clickedItem);
      };



  /* --- BUTTONS --- */
  this.button = {
    title: 'click here'
  };




  /*--- CHECKBOX ---*/
  this.checkboxdata = {};
  this.checkboxdata.cb1 = true;
  this.checkboxdata.cb2 = false;
  this.checkboxdata.cb3 = false;
  this.checkboxdata.cb4 = false;
  this.checkboxdata.cb5 = false;





  /* --- DIALOG --- */
   this.alert = '';
    this.showAlert = function(ev) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('This is an alert title')
          .content('You can specify some description text in here.')
          .ariaLabel('Password notification')
          .ok('Got it!')
          .targetEvent(ev)
      );
    };
    this.showConfirm = function(ev) {
      var confirm = $mdDialog.confirm()
        .title('Would you like to delete your debt?')
        .content('All of the banks have agreed to forgive you your debts.')
        .ariaLabel('Lucky day')
        .ok('Please do it!')
        .cancel('Sounds like a scam')
        .targetEvent(ev);
      $mdDialog.show(confirm).then(function() {
        this.alert = 'You decided to get rid of your debt.';
      }, function() {
        this.alert = 'You decided to keep your debt.';
      });
    };
    this.showAdvanced = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'dialog.tmpl.html',
        targetEvent: ev,
      })
      .then(function(answer) {
        this.alert = 'You said the information was "' + answer + '".';
      }, function() {
        this.alert = 'You cancelled the dialog.';
      });
    };
    function DialogController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }





    /* --- DIVIDER --- */
    this.messages = [{
      face: 'http://placehold.it/50x50',
      note: " I'll be in your neighborhood doing errands"
    }, {
      face: 'http://placehold.it/50x50',
      note: " I'll be in your neighborhood doing errands"
    }, {
      face: 'http://placehold.it/50x50',
      note: " I'll be in your neighborhood doing errands"
    }];




    /* --- GRID --- */
    var colortitle = ['red', 'green', 'blue', 'gray', 'orange'];
    var COLORS = ['#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336'];
    
    this.colorTiles = (function() {
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


  /* --- HIGHLIGHT --- */
  this.highlightresults = [{text: 'first'}, {text: 'second'}, {text: 'third'}, ];



  /* --- INPUT --- */
  this.formuser = {
    title : 'Ahmet Okan',
    address: 'Blabla St. No:1/1',
    city: 'Istanbul'
  };
  this.formproject = {
      description: 'Nuclear Missile Defense System',
      clientName: 'Bill Clinton',
      rate: 500
    };




  /* --- LIST --- */
    this.listmessages = [{
        face: 'http://placehold.it/50x50',
        note: " I'll be in your neighborhood doing errands"
      }, {
        face: 'http://placehold.it/50x50',
        note: " I'll be in your neighborhood doing errands"
      }, {
        face: 'http://placehold.it/50x50',
        note: " I'll be in your neighborhood doing errands"
      }];







  /* --- PROGRESS --- */


  $scope.mode = 'query';
  $scope.determinateValue = 30;
  $scope.determinateValue2 = 30;
  $interval(function() {
    $scope.determinateValue += 1;
    $scope.determinateValue2 += 1.5;
    if ($scope.determinateValue > 100) {
    $scope.determinateValue = 30;
    $scope.determinateValue2 = 30;
    }
  }, 100, 0, true);
  $interval(function() {
        $scope.mode = ($scope.mode === 'query' ? 'determinate' : 'query');
      }, 7200, 0, true);





/* --- SELECT --- */


this.selectuser = {
  name: 'Ahmet Okan'
};
this.selectmenu = ['My Account', 'Settings', 'Exit'];



/* --- SIDENAV --- */

this.toggleLeft = function() {
  $mdSidenav('left').toggle()
      .then(function(){
          $log.debug("toggle left is done");
      });
};
this.toggleRight = function() {
  $mdSidenav('right').toggle()
                      .then(function(){
                        $log.debug("toggle RIGHT is done");
                      });
};
this.closeLeft = function() {
  $mdSidenav('left').close()
                    .then(function(){
                      $log.debug("close LEFT is done");
                    });
};
this.closeRight = function() {
  $mdSidenav('right').close()
                      .then(function(){
                        $log.debug("close RIGHT is done");
                      });
};





  /* --- SLIDER --- */
  this.slidermyValue = 80;
  this.sliderrating1 = 3;
  this.sliderrating2 = 2;
  this.sliderrating3 = 4;
  this.sliderdisabled1 = 0;
  this.sliderdisabled2 = 70;





/* --- SWITCH --- */
this.switchdata = {
    cb1: true,
    cb4: true
  };
  this.switchOnChange = function(cbState){
  this.switchmessage = "The switch is now: " + cbState;
  };





/* --- TABS --- */
var tabs = [
        { title: 'One', content: "Tabs will become paginated if there isn't enough room for them."},
        { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},
        { title: 'Three', content: "You can bind the selected tab via the selected attribute on the md-tabs element."}
      ];
      this.tabs = tabs;
      this.selectedIndex = 2;


/* --- TOAST --- */


$scope.toastPosition = {
   bottom: false,
   top: true,
   left: false,
   right: true
 };
 $scope.getToastPosition = function() {
   return Object.keys($scope.toastPosition)
     .filter(function(pos) { return $scope.toastPosition[pos]; })
     .join(' ');
 };
 $scope.showCustomToast = function() {
   $mdToast.show({
     controller: 'ToastCtrl',
     templateUrl: 'toast-template.html',
     hideDelay: 6000,
     position: $scope.getToastPosition()
   });
 };
 $scope.showSimpleToast = function() {
   $mdToast.show(
     $mdToast.simple()
       .content('Simple Toast!')
       .position($scope.getToastPosition())
       .hideDelay(3000)
   );
 };
 $scope.showActionToast = function() {
   var toast = $mdToast.simple()
         .content('Action Toast!')
         .action('OK')
         .highlightAction(false)
         .position($scope.getToastPosition());
   $mdToast.show(toast).then(function() {
     alert('You clicked \'OK\'.');
   });
 };



this.tooltip = {};





  
}
})();