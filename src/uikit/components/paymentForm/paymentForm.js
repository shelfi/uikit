(function(){

	'use strict';

	angular.module('uikit.components.paymentForm', [])

		.directive('sfPaymentForm', function () {
			return {
				restrict: 'E',
				templateUrl: function (element, attrs) {
					var view = attrs.view || 'tab';
					return 'components/paymentForm/paymentForm-' + view + '.tmpl.html';
				},
				scope: {
					paymentOptions: '=ngModel',
					proceed: '&'
				},
				bindToController: true,
				controller: function () {
					//asdsad
				},
				controllerAs: 'ctrl'
				//link: function (scope, element, attrs, ngModelCtrl) {
				//	//asd
				//}
			};
		});

})();