(function(){
'use strict';
module.exports = function ($mdTheming, $mdInkRipple){
	return {
		restrict: 'E',
		transclude: true,
		template: getTemplate,
		link: postLink,
		scope: {
			info: '=info'
		}
	};

	function postLink (scope, element, attr){
		scope.greetings = attr.greetings;
		$mdTheming(element);
		$mdInkRipple.attachButtonBehavior(scope, element);
	}

	function getTemplate (){
		return '<header>' +
             '   <md-icon></md-icon>'+
             '    <nav></nav>'+
             '      <md-item ng-repeat="item in items">'+
             '       <p>Number {{item}}</p>' +
             '      </md-item>'+
             '    </md-list>'+
             '  </md-content>' +
             '  <div class="md-actions">' +
             '    <md-button ng-click="closeDialog()">' +
             '      Close Dialog' +
             '    </md-button>' +
             '  </div>' +
             '</header>';
	}
};
})();