'use strict'; module.exports = ["$templateCache", function ($templateCache) {
$templateCache.put("modules/cart/cart.tmpl.html","\n<md-content>\n\n<table class=\"table table-striped cart\">\n	<thead>\n		<tr>\n			<th>Urun</th>\n			<th>Adet</th>\n			<th>Birim Fiyat</th>\n			<th>Ara Toplam</th>\n			<th ng-if=\"config.showRemoveButton\"></th>\n		</tr>\n	</thead>\n	<tfoot>\n		<tr ng-if=\"$root.order.vat\">\n			<td colspan=\"3\"><span class=\"pull-right\">KDV:</span></td>\n			<td>{{ $root.order.vat | currency }}</td>\n		</tr>\n		<tr ng-repeat=\"extra in $root.order.extras\" ng-class=\"extra.type\">\n			<td colspan=\"3\"><i></i> {{ extra.description }}</td>\n			<td><span ng-if=\"extra.discount\">-</span> {{ extra.amount | currency }}</td>\n		</tr>\n		<tr ng-if=\"$root.order.total\" class=\"total\">\n			<td colspan=\"3\"><span class=\"pull-right\">Toplam:</span></td>\n			<td><strong>{{ $root.order.total | currency }}</strong></td>\n		</tr>\n	</tfoot>\n	<tbody>\n		<tr ng-repeat=\"product in $root.order.products\">\n			<td>\n				<ul class=\"product-info list-inline\">\n					<li><a href=\"#/products/{{product.slug | multi:\'language\'}}\"><img ng-init=\"image=(product.images | image:\'list\')\" ng-src=\"{{image.path}}\" width=\"{{image.w}}\" height=\"{{image.h}}\" alt=\"{{product.images.description | multi:\'language\'}}\" title=\"{{product.images.description | multi:\'language\'}}\" /></a></li>\n					<li>\n						<product-title-secondary item=\"product\"></product-title-secondary> \n						<span class=\"option\">Beyaz</span>\n						<span class=\"option\">Medium</span>\n					</li>\n				</ul>\n			</td>\n			<td ng-if=\"config.editable\"><input type=\"text\" class=\"form-control input-sm\" required=\"required\" pattern=\"\" title=\"\" ng-model=\"product.qty\" ng-change=\"orderService.product.onAmountChange(product)\"></td>\n			<td ng-if=\"!config.editable\">{{ product.qty }}</td>\n			<td>{{ product.price | multi:\"currency\" }}</td>\n			<td>{{ product.amount | currency }}</td>\n			<td ng-if=\"config.showRemoveButton\"><button type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"orderService.product.remove(product)\">&times;</button></td>\n		</tr>\n	</tbody>\n</table>\n</md-content>");
$templateCache.put("modules/productItem/productItem.tmpl.html","<div class=\"sf-product-item\">\n	<div class=\"sf-product-item__image\"><a href=\"{{ctrl.item.link}}\"><img data-src=\"{{ctrl.item.image}}\"></a></div>\n	<div class=\"sf-product-item__info\">\n			<h3 class=\"sf-product-item__title\">{{ctrl.item.title}}</h3>\n			<p class=\"sf-product-item__description\" ng-show=\"ctrl.showDescription\">{{ctrl.item.shortDesc}}</p>\n			<span class=\"sf-product-item__price\">{{ctrl.item.price}}<em>(+KDV)</em></span>\n		</div>\n		<div class=\"sf-product-item__cta\">\n			<md-button ng-show=\"ctrl.showAddButton\" class=\"md-raised md-primary\" ng-click=\"cartCtrl.addToCart(ctrl.item)\">Sepete Ekle</md-button>\n		</div	\n	<div ng-transclude></div>\n</div>");
$templateCache.put("modules/productList/productList.tmpl.html","<div class=\"sf-productList-container\">\n	<md-content>\n		<div ng-transclude ng-attr-layout=\"{{ctrl.layout === \'grid\' ? \'row\' : \'column\'}}\" layout-wrap><div>\n	</md-content>\n</div>\n");
}];