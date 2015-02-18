(function(){
'use strict';
module.exports = function ($mdTheming){
	return {
		restrict: 'E',
		transclude: true,
		template: getTemplate,
		link: postLink,
		controller: 'MinicartCtrl',
		controllerAs: '$MinicartCtrl',
		scope: {
			cartitems: '=cartitems'
		}
	};

	function postLink (scope, element, attr){
		$mdTheming(element);
		scope.greetings = attr.greetings;
	}

	function getTemplate (){
		return '<div class="sf-minicart-container">\
				<md-button class="md-primary md-raised" ng-mouseover="$MinicartCtrl.showitems = true" ng-mouseout="$MinicartCtrl.showitems = false">{{$MinicartCtrl.title}} : {{$MinicartCtrl.getTotals().quantity}}</md-button>\
				<md-content ng-show="$MinicartCtrl.showitems" class="md-padding">\
        			<md-list>\
						<md-item ng-repeat="item in $MinicartCtrl.cartitems">\
						<md-item-content>{{item.name}} | {{item.price}} | {{item.quantity}}<md-item-content>\
        			</md-list>\
        		</md-content>\
        		<div ng-transclude><div>\
			</div>';
	}
};
})();