(function(){
'use strict';
angular.module('uikit.components.userinfo', [])
  .directive('sfUserInfo', sfUserInfoDirective);


function sfUserInfoDirective($mdTheming){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'components/userInfo/userInfo.tmpl.html',
		link: postLink,
		controller: function (){},
		controllerAs: 'ctrl',
		bindToController: true,
		scope: {
			user: '=ngModel'
		}
	};

	function postLink (scope, element){
		$mdTheming(element);
	}

}
})();