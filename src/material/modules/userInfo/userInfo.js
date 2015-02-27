(function(){
'use strict';
angular.module('uikit.userinfo', ['uikit.core'])
  .directive('sfUserInfo', sfUserInfoDirective);


function sfUserInfoDirective($mdTheming){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'modules/userInfo/userInfo.tmpl.html',
		link: postLink,
		controller: function (){},
		controllerAs: 'ctrl',
		bindToController: true,
		scope: {
			user: '=ngModel'
		}
	};

	function postLink (scope, element, attr){
		$mdTheming(element);
	}

};
})();