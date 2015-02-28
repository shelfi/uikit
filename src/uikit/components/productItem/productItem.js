(function(){

'use strict';

	angular.module('uikit.components.productItem', [])

		.directive('sfProductItem', function ($mdTheming) {
			return {
				restrict: 'E',
				templateUrl: 'components/productItem/productItem.tmpl.html',
				//link: link,
				scope: {
					item: '=ngModel',
					//showAddToCartButton: '@',
					//showPrice: '@',
					//showImage: '@',
					//showDescription: '@'
					click: '&',
					addToCart: '&'
				},
				bindToController: true,
				controller: function () {
					//console.log('ctrl');
					//this.showAddToCartButton = this.showAddToCartButton || 'false';
				},
				controllerAs: 'ctrl',
				link: function (scope, element, attrs) {
					scope.showAddToCartButton = attrs.addToCart ? 'true' : 'false';
				}
			};


			//function link (scope, element){
			//	$mdTheming(element);
			//}



			/*
			//check for angular 1.4 bindToController usage:
			//http://blog.thoughtram.io/angularjs/2015/01/02/exploring-angular-1.3-bindToController.html#improvements-in-14

			<!--
			<div class="sf-product md-whiteframe-z1" layout-padding layout-align="center center" layout="column">
				<div class="sf-product__image">
					<a href="{{ctrl.item.url}}"><img data-src="{{ctrl.item.image}}" alt="{{item.title}}" title="{{item.title}}"></a>
				</div>
				<div class="sf-product__title">
					<h4><a href="{{ctrl.item.url}}">{{ctrl.item.title}}</a></h4>
				</div>
					
				<div class="sf-product__description">
					<p>{{ctrl.item.shortDesc}}</p>
				</div>

				<div class="sf-product__promotion" ng-show="ctrl.item.desc">
					<span>{{ctrl.item.promotion}}</span>
				</div>

				<sf-product-price></sf-product-price>

				<div class="sf-product__action">
					<div class="sf-product__quantity" ng-show="ctrl.quantity">
						<md-input-container>
							<label>Adet</label>
							<input required type="number" step="any" name="rate" ng-model="project.rate" min="800" max="4999">
						</md-input-container>
					</div>
					<div class="sf-product__button">
						<md-button class="md-fab md-primary md-raised">
						<md-icon md-svg-icon="action:ic_shopping_cart_24px" alt="Icon Alt"></md-icon>
						<md-tooltip></md-tooltip>
						Sepete Ekle
					</md-button>
					</div>
				</div>
			</div>
			-->
			*/
		});

})();