(function(){
'use strict';
module.exports = function (){
	return {
		restrict: 'E',
		transclude: true,
		template: getTemplate,
		link: postLink,
		controller: 'NavbarCtrl',
		controllerAs: '$NavbarCtrl',
		scope: {
			navsource: '=navsource'
		}
	};

	function postLink (scope, element, attr){

	}

	function getTemplate (){
		return '<nav class="navbar__default">\
				<md-button ng-click="$NavbarCtrl.isCollapsed = !$NavbarCtrl.isCollapsed" class="navbar-toggle" aria-label="Menu" show-sm hide>\
				</md-button>\
				<ul>\
					<li ng-repeat="item in $NavbarCtrl.navitems"><a href="{{item.link}}">{{item.title}}</a></li>\
				</ul>\
				</nav>';
				}
		};
})();