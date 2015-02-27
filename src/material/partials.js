angular.module("uikit").run(["$templateCache", function($templateCache) {$templateCache.put("snippets/sidenavPrimary/sidenavPrimary.tmpl.html","<md-sidenav class=\"md-sidenav-left sf-main-sidenav site-sidenav md-sidenav-left\" md-is-locked-open=\"$media(\'gt-md\')\" md-component-id=\"main-sidebar\">\n<md-toolbar class=\"sf-primary\"><span class=\"md-toolbar-tools\"><img data-src=\"holder.js/100%x40/text:{{ctrl.brand}}\" alt=\"Logo\" /></span></md-toolbar>\n	<md-content>\n		<div layout=\"column\">\n			<sf-menu ng-model=\"ctrl.nav.primary\"></sf-menu>\n		</div>\n	</md-content>\n</md-sidenav>");
$templateCache.put("snippets/spot/spot.tmpl.html","<div class=\"sf-spot\" layout=\"row\">\n	<div flex=\"33\" layout-padding layout-align=\"center center\" layout=\"column\" class=\"sf-spot__title\">\n		<h3>New Product</h3>\n		<md-button>Click here</md-button>\n	</div>\n	<div flex=\"66\" class=\"sf-spot__image\"><img data-src=\"holder.js/100%x380/text:big bold image\" alt=\"\"></div>\n	<div ng-transclude></div>\n</div><!-- /sf-spot -->");
$templateCache.put("snippets/toolbarPrimary/toolbarPrimary.tmpl.html","<md-toolbar layout-align=\"center\">\n<div class=\"md-toolbar-tools\">\n	<div flex=\"20\" hide-gt-md>\n		<md-button ng-click=\"ctrl.toggleMainSidebar()\" aria-label=\"Toggle Menu\"><md-icon md-svg-icon=\"navigation:ic_menu_24px\" alt=\"Help\"></md-icon></md-button>\n	</div>\n	<div flex><sf-search ng-model=\"this.ctrl.search\"></sf-search></div>\n	<div flex=\"15\" layout=\"row\" layout-align=\"end center\">\n		<md-button aria-label=\"Mini Cart\" ng-click=\"ctrl.toggleMiniCart()\" class=\"md-primary-theme\"><md-icon md-svg-icon=\"action:ic_shopping_cart_24px\" alt=\"Exit\"></md-icon>\n		<span class=\"badge\">2</span>\n		</md-button>\n	</div>\n</div>\n</md-toolbar>");
$templateCache.put("snippets/topbar/topbar.tmpl.html","<div class=\"sf-topbar sf-user-info\" layout=\"row\" layout-align=\"start center\">\n	<div class=\"sf-user-info__name\" flex=\"20\" layout-padding hide-sm><small>Hello, {{ctrl.user.name}}</small></div>\n	<div class=\"sf-user-info__user-nav\" layout-align-gt-sm=\"end center\" flex layout=\"row\">\n		<span><md-button class=\"md-primary\" aria-label=\"Help\"><md-icon md-svg-icon=\"action:ic_help_24px\" alt=\"Exit\"></md-icon></md-button><md-tooltip>\n          Help\n        </md-tooltip></span>\n		<span><md-button ng-click=\"ctrl.toggleUserPanel()\" class=\"md-primary\" aria-label=\"User Panel\"><md-icon md-svg-icon=\"action:ic_account_box_24px\" alt=\"Exit\" aria-label=\"UserPanel\"></md-icon></md-button>\n		<md-tooltip>\n          User\n        </md-tooltip>\n		</span>\n		<span><md-button class=\"md-primary\"><md-icon md-svg-icon=\"action:ic_exit_to_app_24px\" alt=\"Exit\" aria-label=\"Exit\"></md-icon></md-button>\n		<md-tooltip>\n          Exit\n        </md-tooltip>\n		</span>\n	</div>\n</div>");
$templateCache.put("modules/breadcrumb/breadcrumb.tmpl.html","<div class=\"sf-breadcrumb\">\n	<ul class=\"inline\">\n		<li class=\"sf-breadcrumb__item\" ng-repeat=\"item in ctrl.navitems.primary\"><a href=\"{{ctrl.navitems.link}}\">{{item.title}}</a></li>\n	</ul>\n</div>");
$templateCache.put("modules/cart/cart.tmpl.html","\n<md-content>\n\n<table class=\"table table-striped cart\">\n	<thead>\n		<tr>\n			<th>Urun</th>\n			<th>Adet</th>\n			<th>Birim Fiyat</th>\n			<th>Ara Toplam</th>\n			<th ng-if=\"config.showRemoveButton\"></th>\n		</tr>\n	</thead>\n	<tfoot>\n		<tr ng-if=\"$root.order.vat\">\n			<td colspan=\"3\"><span class=\"pull-right\">KDV:</span></td>\n			<td>{{ $root.order.vat | currency }}</td>\n		</tr>\n		<tr ng-repeat=\"extra in $root.order.extras\" ng-class=\"extra.type\">\n			<td colspan=\"3\"><i></i> {{ extra.description }}</td>\n			<td><span ng-if=\"extra.discount\">-</span> {{ extra.amount | currency }}</td>\n		</tr>\n		<tr ng-if=\"$root.order.total\" class=\"total\">\n			<td colspan=\"3\"><span class=\"pull-right\">Toplam:</span></td>\n			<td><strong>{{ $root.order.total | currency }}</strong></td>\n		</tr>\n	</tfoot>\n	<tbody>\n		<tr ng-repeat=\"product in $root.order.products\">\n			<td>\n				<ul class=\"product-info list-inline\">\n					<li><a href=\"#/products/{{product.slug | multi:\'language\'}}\"><img ng-init=\"image=(product.images | image:\'list\')\" ng-src=\"{{image.path}}\" width=\"{{image.w}}\" height=\"{{image.h}}\" alt=\"{{product.images.description | multi:\'language\'}}\" title=\"{{product.images.description | multi:\'language\'}}\" /></a></li>\n					<li>\n						<product-title-secondary item=\"product\"></product-title-secondary> \n						<span class=\"option\">Beyaz</span>\n						<span class=\"option\">Medium</span>\n					</li>\n				</ul>\n			</td>\n			<td ng-if=\"config.editable\"><input type=\"text\" class=\"form-control input-sm\" required=\"required\" pattern=\"\" title=\"\" ng-model=\"product.qty\" ng-change=\"orderService.product.onAmountChange(product)\"></td>\n			<td ng-if=\"!config.editable\">{{ product.qty }}</td>\n			<td>{{ product.price | multi:\"currency\" }}</td>\n			<td>{{ product.amount | currency }}</td>\n			<td ng-if=\"config.showRemoveButton\"><button type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"orderService.product.remove(product)\">&times;</button></td>\n		</tr>\n	</tbody>\n</table>\n</md-content>");
$templateCache.put("modules/filter/filter.tmpl.html","productFilter.tmpl.html");
$templateCache.put("modules/menu/menu.tmpl.html","<ul class=\"sf-menu\">\n    <li ng-repeat=\"item in ctrl.menu\" class=\"parent-list-item\">\n        <md-button class=\"md-button-toggle\" ng-click=\"toggle()\">\n        {{item.title}}\n        <span aria-hidden=\"true\" class=\"md-toggle-icon\" ng-class=\"{\'toggled\' : isOpen()}\"></span>\n		<span class=\"visually-hidden\">Toggle {{isOpen()? \'expanded\' : \'collapsed\'}}</span>\n		</md-button>\n    </li>\n</ul>\n\n\n<md-button class=\"md-button-toggle\"\n  ng-click=\"toggle()\"\n  flex layout=\"row\"\n  aria-expanded=\"{{isOpen()}}\">\n  {{section.name}}\n  <span aria-hidden=\"true\" class=\"md-toggle-icon\"\n  ng-class=\"{\'toggled\' : isOpen()}\"></span>\n  <span class=\"visually-hidden\">\n    Toggle {{isOpen()? \'expanded\' : \'collapsed\'}}\n  </span>\n</md-button>\n\n");
$templateCache.put("modules/miniCart/miniCart.tmpl.html","<div class=\"sf-minicart\" layout=\"column\">\n  <div class=\"sf-minicart__cart-selector\">\n    <md-select ng-model=\"ctrl.savedcart\" placeholder=\"default cart\">\n      <md-option ng-value=\"opt.title\" ng-repeat=\"opt in ctrl.savedcarts\">{{ opt.title }}</md-option>\n    </md-select>\n  </div>\n<div class=\"sf-minicart__detail\">\n  <md-list>\n    <md-item ng-repeat=\"item in ctrl.order\">\n      <md-item-content layout=\"row\">\n          <div flex=\"25\"><img data-src=\"{{item.image}}\" /></div>\n          <div flex><small>{{item.title}}</small></div>\n          <div flex=\"10\">{{item.price}} TL</div>\n          <div flex=\"10\"><md-input-container><label>Quantity</label><input ng-model=\"item.quantity\"></md-input-container></div>\n          <div flex=\"5\"><md-button aria-label=\"remove from cart\"><md-icon md-svg-icon=\"navigation:ic_close_24px\"></md-icon></md-button></div>\n      </md-item-content>\n    </md-item>\n    <md-item-content layout=\"column\" layout-align=\"center end\">\n          <div flex>Total: 20TL</div>\n      </md-item-content>\n  </md-list>\n  <md-button class=\"md-raised md-primary\">GO TO CART</md-button>\n</div>\n</div>");
$templateCache.put("modules/navbar/navbar.tmpl.html","<nav class=\"navbar-primary\">\n<md-button ng-click=\"$NavbarCtrl.isCollapsed = !$NavbarCtrl.isCollapsed\" class=\"navbar-toggle\" aria-label=\"Menu\" show-sm hide>\n</md-button>\n<ul>\n	<li ng-repeat=\"item in ctrl.item\"><a href=\"{{item.link}}\">{{item.title}}</a></li>\n</ul>\n</nav>");
$templateCache.put("modules/orderSummary/orderSummary.tmpl.html","<div class=\"order-summary-container\">	\n	<div class=\"panel panel-contrast\">\n		<div class=\"panel-heading\">\n			Sipariş Özeti\n		</div><!-- /panel-heading -->\n		<div class=\"panel-body\">\n			<div class=\"order-summary\">\n				<strong>Urun Adet</strong>\n				<span class=\"order-quantity\">{{ $root.order.products.length }}</span>\n				<strong>KDV Dahil Toplam Tutar</strong>\n				<span class=\"order-total-price\">{{ $root.order.total | currency }}<!--<em>TL</em>--></span>\n			</div><!-- /order-sumary -->\n			<div class=\"order-extra\">\n				<sf-checkbox value=\"0\" id=\"order-extra-note\" text=\"Siparis Notum Var\" checked=\"false\"></sf-checkbox>\n				<sf-checkbox value=\"0\" id=\"order-extra-gift\" text=\"Hediye Paketi Olsun\" checked=\"false\"></sf-checkbox>\n			</div><!-- /order-extra -->\n			<div class=\"order-cta\">\n				<button type=\"button\" class=\"btn btn-primary btn-xs\" ng-click=\"cartCtrl.addPromotionCode()\">Promosyon kodu Ekle <span class=\"fui-plus pull-right\"></span></button>\n				<button type=\"button\" class=\"btn btn-primary btn-xs\">Ek Urun Ekle <span class=\"fui-plus pull-right\"></span></button>\n			</div><!-- /order-cta -->\n		</div><!-- /panel-body -->\n		<div class=\"panel-footer pbl\">\n			<div class=\"step-action\" ng-transclude></div>\n		</div><!-- panel-footer -->\n	</div>\n</div>");
$templateCache.put("modules/productAction/productAction.tmpl.html","<div class=\"sf-product-action__container\">\n	<div class=\"sf-product-action__quantity\" ng-show=\"ctrl.quantity\">\n		<md-input-container>\n			<label>Adet</label>\n			<input required type=\"number\" step=\"any\" name=\"rate\" ng-model=\"project.rate\" min=\"800\" max=\"4999\">\n		</md-input-container>\n	</div>\n	<div class=\"sf-product-action__button\">\n		<md-button class=\"md-primary\">Sepete Ekle</md-button>\n	</div>\n</div>");
$templateCache.put("modules/productContainer/productContainer.tmpl.html","<div class=\"sf-product-container\">\n	<div ng-transclude></div>\n</div>");
$templateCache.put("modules/productImage/productImage.tmpl.html","<div class=\"sf-product__image\">\n	<a href=\"{{ctrl.product.link}}\"><img data-src=\"{{ctrl.product.image}}\"></a>\n</div>");
$templateCache.put("modules/productInfo/productInfo.tmpl.html","<h3 class=\"sf-product-item__title\">{{ctrl.item.title}}</h3>");
$templateCache.put("modules/productList/productList.tmpl.html","<div class=\"sf-productList-container\">\n	<md-content>\n		<div ng-transclude ng-attr-layout=\"{{ctrl.layout === \'grid\' ? \'row\' : \'column\'}}\" layout-wrap><div>\n	</md-content>\n</div>\n");
$templateCache.put("modules/productOptions/productOptions.tmpl.html","<div class=\"sf-product-item__variations\">\n	<select name=\"\" id=\"\">\n		<option value=\"\">Option1</option>\n		<option value=\"\">Option2</option>\n	</select>\n</div>");
$templateCache.put("modules/search/search.tmpl.html","<div class=\"sf-search-container\">\n	<md-input-container>\n		<label><md-icon md-svg-icon=\"action:ic_search_24px\" alt=\"Icon Alt\"></md-icon></label>\n		<input ng-model=\"search.entry\">\n	</md-input-container>\n</div>");
$templateCache.put("modules/sort/sort.tmpl.html","<div class=\"sf-product-sorter\">\n	<select ng-model=\"ctrl.products\" ng-options=\"opt as opt.label for opt in options\">\n    </select>\n</div>");
$templateCache.put("modules/userInfo/userInfo.tmpl.html","<div layout=\"column\" layout-fill>\n	<md-card class=\"md-whiteframe-z1\" layout=\"column\" layout-align=\"center center\" md-padding>\n		<div><img data-src=\"{{ctrl.user.image}}\" alt=\"{{ctrl.user.name}}\"></div>\n		<h5>{{ctrl.user.name}}</h5>\n		<p><md-button><md-icon md-svg-icon=\"communication:ic_email_24px\" alt=\"Help\" aria-label=\"email\"></md-icon></md-button>{{ctrl.user.email}}</p>\n		<p><md-button><md-icon md-svg-icon=\"communication:ic_phone_24px\" alt=\"Help\" aria-label=\"phone\"></md-icon></md-button>{{ctrl.user.phone}}</p>\n	</md-card>\n</div>");
$templateCache.put("templates/partials/minicartSidenav.tmpl.html","<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"mini-cart\">\n    <md-toolbar>\n        <h2 class=\"md-toolbar-tools\">Mini Cart\n			<md-button ng-click=\"ctrl.closeMiniCart()\" aria-label=\"Close\"><md-icon md-svg-icon=\"navigation:ic_close_24px\" alt=\"Close\"></md-icon></md-button>\n        </h2>\n    </md-toolbar>\n    <md-content class=\"md-padding\">\n    	<sf-mini-cart ng-model=\"ctrl.order\"></sf-mini-cart>\n    </md-content>\n</md-sidenav>");
$templateCache.put("templates/partials/usermenuSidenav.tmpl.html","<div class=\"sf-sidenav__user\">\n<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"user-panel\">\n    <md-toolbar class=\"md-theme-light\">\n        <h2 class=\"md-toolbar-tools\">User Panel\n		<md-button ng-click=\"ctrl.closeUserPanel()\" alt=\"Close\" aria-label=\"Close\"><md-icon md-svg-icon=\"navigation:ic_close_24px\"></md-icon></md-button>\n        </h2>\n    </md-toolbar>\n    <md-content class=\"md-padding\">\n    <sf-user-info ng-model=\"ctrl.user\"></sf-user-info>\n	    <md-list>\n	      <md-item ng-repeat=\"item in ctrl.user.menu\">\n	        <md-item-content>\n	          <div class=\"md-tile-left\">\n	          	<md-button>\n	              <md-icon md-svg-icon=\"{{item.icon}}\" alt=\"Exit\" aria-label=\"{{item.title}}\"></md-icon>\n	              {{item.title}}\n	              </md-button>\n	          </div>\n	        </md-item-content>\n	      </md-item>\n	    </md-list>\n    </md-content>\n</md-sidenav>\n</div><!-- /sf-sidenav-user -->");}]);