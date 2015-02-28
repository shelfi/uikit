angular.module("uikit").run(["$templateCache", function($templateCache) {$templateCache.put("components/breadcrumb/breadcrumb.tmpl.html","<div class=\"sf-breadcrumb\">\n	<ul class=\"inline\">\n		<li class=\"sf-breadcrumb__item\" ng-repeat=\"item in ctrl.navitems.primary\"><a href=\"{{ctrl.navitems.link}}\">{{item.title}}</a></li>\n	</ul>\n</div>");
$templateCache.put("components/cart/cart.tmpl.html","<div class=\"sf-minicart\" layout=\"column\">\n\n  <!--\n  <div class=\"sf-minicart__cart-selector\">\n    <md-select ng-model=\"ctrl.savedcart\" placeholder=\"default cart\">\n      <md-option ng-value=\"opt.title\" ng-repeat=\"opt in ctrl.savedcarts\">{{ opt.title }}</md-option>\n    </md-select>\n  </div>\n  -->\n\n  <div class=\"sf-minicart__detail\">\n    <md-list>\n\n      <md-item class=\"bold\" ng-show=\"ctrl.showHeader === \'true\'\">\n        <md-item-content layout=\"row\">\n          <div ng-repeat=\"column in ctrl.columns\" flex=\"{{column.width}}\">{{column.name}}</div>\n        </md-item-content>\n      </md-item>\n\n      <md-item ng-repeat=\"item in ctrl.items\">\n        <md-item-content layout=\"row\">\n          <div ng-repeat=\"column in ctrl.columns\" flex=\"{{column.width}}\" sf-template=\"column.template\" ng-model=\"item\">{{item[column.name]}}</div>\n        </md-item-content>\n      </md-item>\n\n      <md-item-content layout=\"column\" layout-align=\"center end\" ng-show=\"ctrl.showTotals === \'true\'\">\n        <div flex>Vat: 4TL</div>\n        <div flex>Total: 20TL</div>\n      </md-item-content>\n\n    </md-list>\n\n\n    <hr>\n    <md-select ng-model=\"item.quantity\" placeholder=\"Select quantity\">\n      <md-option ng-repeat=\"opt in [100, 200, 500, 1000, 5000]\" ng-value=\"opt\">{{ opt }}</md-option>\n      </md-select>\n    <!--<md-button class=\"md-raised md-primary\">GO TO CART</md-button>-->\n\n  </div>\n\n\n</div>\n\n\n\n\n");
$templateCache.put("components/filter/filter.tmpl.html","productFilter.tmpl.html");
$templateCache.put("components/menu/menu.tmpl.html","<ul class=\"sf-menu\">\n    <li ng-repeat=\"item in ctrl.menu\" class=\"parent-list-item\">\n        <md-button class=\"md-button-toggle\" ng-click=\"toggle()\">\n        {{item.title}}\n        <span aria-hidden=\"true\" class=\"md-toggle-icon\" ng-class=\"{\'toggled\' : isOpen()}\"></span>\n		<span class=\"visually-hidden\">Toggle {{isOpen()? \'expanded\' : \'collapsed\'}}</span>\n		</md-button>\n    </li>\n</ul>\n\n\n<md-button class=\"md-button-toggle\"\n  ng-click=\"toggle()\"\n  flex layout=\"row\"\n  aria-expanded=\"{{isOpen()}}\">\n  {{section.name}}\n  <span aria-hidden=\"true\" class=\"md-toggle-icon\"\n  ng-class=\"{\'toggled\' : isOpen()}\"></span>\n  <span class=\"visually-hidden\">\n    Toggle {{isOpen()? \'expanded\' : \'collapsed\'}}\n  </span>\n</md-button>\n\n");
$templateCache.put("components/miniCart/miniCart.tmpl.html","<div class=\"sf-minicart\" layout=\"column\">\n  <div class=\"sf-minicart__cart-selector\">\n    <md-select ng-model=\"ctrl.savedcart\" placeholder=\"default cart\">\n      <md-option ng-value=\"opt.title\" ng-repeat=\"opt in ctrl.savedcarts\">{{ opt.title }}</md-option>\n    </md-select>\n  </div>\n<div class=\"sf-minicart__detail\">\n  <md-list>\n    <md-item ng-repeat=\"item in ctrl.order\">\n      <md-item-content layout=\"row\">\n          <div flex=\"25\"><img data-src=\"{{item.image}}\" /></div>\n          <div flex><small>{{item.title}}</small></div>\n          <div flex=\"10\">{{item.price}} TL</div>\n          <div flex=\"10\"><md-input-container><label>Quantity</label><input ng-model=\"item.quantity\"></md-input-container></div>\n          <div flex=\"5\"><md-button aria-label=\"remove from cart\"><md-icon md-svg-icon=\"navigation:ic_close_24px\"></md-icon></md-button></div>\n      </md-item-content>\n    </md-item>\n    <md-item-content layout=\"column\" layout-align=\"center end\">\n          <div flex>Total: 20TL</div>\n      </md-item-content>\n  </md-list>\n  <md-button class=\"md-raised md-primary\">GO TO CART</md-button>\n</div>\n</div>");
$templateCache.put("components/navbar/navbar.tmpl.html","<nav class=\"navbar-primary\">\n<md-button ng-click=\"$NavbarCtrl.isCollapsed = !$NavbarCtrl.isCollapsed\" class=\"navbar-toggle\" aria-label=\"Menu\" show-sm hide>\n</md-button>\n<ul>\n	<li ng-repeat=\"item in ctrl.item\"><a href=\"{{item.link}}\">{{item.title}}</a></li>\n</ul>\n</nav>");
$templateCache.put("components/orderSummary/orderSummary.tmpl.html","<div class=\"order-summary-container\">	\n	<div class=\"panel panel-contrast\">\n		<div class=\"panel-heading\">\n			Sipariş Özeti\n		</div><!-- /panel-heading -->\n		<div class=\"panel-body\">\n			<div class=\"order-summary\">\n				<strong>Urun Adet</strong>\n				<span class=\"order-quantity\">{{ $root.order.products.length }}</span>\n				<strong>KDV Dahil Toplam Tutar</strong>\n				<span class=\"order-total-price\">{{ $root.order.total | currency }}<!--<em>TL</em>--></span>\n			</div><!-- /order-sumary -->\n			<div class=\"order-extra\">\n				<sf-checkbox value=\"0\" id=\"order-extra-note\" text=\"Siparis Notum Var\" checked=\"false\"></sf-checkbox>\n				<sf-checkbox value=\"0\" id=\"order-extra-gift\" text=\"Hediye Paketi Olsun\" checked=\"false\"></sf-checkbox>\n			</div><!-- /order-extra -->\n			<div class=\"order-cta\">\n				<button type=\"button\" class=\"btn btn-primary btn-xs\" ng-click=\"cartCtrl.addPromotionCode()\">Promosyon kodu Ekle <span class=\"fui-plus pull-right\"></span></button>\n				<button type=\"button\" class=\"btn btn-primary btn-xs\">Ek Urun Ekle <span class=\"fui-plus pull-right\"></span></button>\n			</div><!-- /order-cta -->\n		</div><!-- /panel-body -->\n		<div class=\"panel-footer pbl\">\n			<div class=\"step-action\" ng-transclude></div>\n		</div><!-- panel-footer -->\n	</div>\n</div>");
$templateCache.put("components/productInfo/productInfo.tmpl.html","<div class=\"sf-product__info\" layout=\"row\" layout-wrap>\n	<h4 flex=\"100\">Technical Info</h4>\n	<span flex=\"15\">Field Title</span>\n	<span flex=\"85\">Lorem ipsum dolor sit amet, consectetur  qui animi doloremque</span>\n</div>\n");
$templateCache.put("components/productItem/productItem.tmpl.html","<div class=\"sf-product md-whiteframe-z1\" layout-padding layout-align=\"center center\" layout=\"column\">\n	<div class=\"sf-product__image\">\n		<a href=\"{{ctrl.item.url}}\"><img data-src=\"{{ctrl.item.image}}\" alt=\"{{item.title}}\" title=\"{{item.title}}\"></a>\n	</div>\n	<div class=\"sf-product__title\">\n		<h4><a href=\"{{ctrl.item.url}}\">{{ctrl.item.title}}</a></h4>\n	</div>\n		\n	<div class=\"sf-product__description\">\n		<p>{{ctrl.item.shortDesc}}</p>\n	</div>\n\n	<div class=\"sf-product__promotion\" ng-show=\"ctrl.item.desc\">\n		<span>{{ctrl.item.promotion}}</span>\n	</div>\n\n	<sf-product-price></sf-product-price>\n\n	<div class=\"sf-product__action\">\n		<div class=\"sf-product__quantity\" ng-show=\"ctrl.quantity\">\n			<md-input-container>\n				<label>Adet</label>\n				<input required type=\"number\" step=\"any\" name=\"rate\" ng-model=\"project.rate\" min=\"800\" max=\"4999\">\n			</md-input-container>\n		</div>\n		<div class=\"sf-product__button\">\n			<md-button class=\"md-fab md-primary md-raised\">\n			<md-icon md-svg-icon=\"action:ic_shopping_cart_24px\" alt=\"Icon Alt\"></md-icon>\n			<md-tooltip></md-tooltip>\n			Sepete Ekle\n		</md-button>\n		</div>\n	</div><!-- /sf-product-item__action -->\n\n</div><!-- /sf-product-item-->");
$templateCache.put("components/productList/productList.tmpl.html","<div class=\"sf-productList-container\">\n	<md-content>\n		<div ng-transclude ng-attr-layout=\"{{ctrl.layout === \'grid\' ? \'row\' : \'column\'}}\" layout-wrap><div>\n	</md-content>\n</div>\n");
$templateCache.put("components/productOptions/productOptions.tmpl.html","<div class=\"sf-product-item__variations\">\n	<select name=\"\" id=\"\">\n		<option value=\"\">Option1</option>\n		<option value=\"\">Option2</option>\n	</select>\n</div>");
$templateCache.put("components/productPrice/productPrice.tmpl.html","<div class=\"sf-product__price\" layout=\"column\">\n	<span class=\"sf-product__price--primary\">25TL</span>\n	<span class=\"sf-product__price--discount\">30TL</span>\n</div>");
$templateCache.put("components/search/search.tmpl.html","<div class=\"sf-search-container\">\n	<md-input-container>\n		<label><md-icon md-svg-icon=\"action:ic_search_24px\" alt=\"Icon Alt\"></md-icon></label>\n		<input ng-model=\"search.entry\">\n	</md-input-container>\n</div>");
$templateCache.put("components/sort/sort.tmpl.html","<div class=\"sf-product-sorter\">\n	<select ng-model=\"ctrl.products\" ng-options=\"opt as opt.label for opt in options\">\n    </select>\n</div>");
$templateCache.put("components/userInfo/userInfo.tmpl.html","<div layout=\"column\" layout-fill>\n	<md-card class=\"md-whiteframe-z1\" layout=\"column\" layout-align=\"center center\" md-padding>\n		<div><img data-src=\"{{ctrl.user.image}}\" alt=\"{{ctrl.user.name}}\"></div>\n		<h5>{{ctrl.user.name}}</h5>\n		<p><md-button><md-icon md-svg-icon=\"communication:ic_email_24px\" alt=\"Help\" aria-label=\"email\"></md-icon></md-button>{{ctrl.user.email}}</p>\n		<p><md-button><md-icon md-svg-icon=\"communication:ic_phone_24px\" alt=\"Help\" aria-label=\"phone\"></md-icon></md-button>{{ctrl.user.phone}}</p>\n	</md-card>\n</div>");
$templateCache.put("snippets/sidenavPrimary/sidenavPrimary.tmpl.html","<md-sidenav class=\"md-sidenav-left sf-main-sidenav site-sidenav md-sidenav-left\" md-is-locked-open=\"$media(\'gt-md\')\" md-component-id=\"main-sidebar\">\n<md-toolbar class=\"sf-primary\"><span class=\"md-toolbar-tools\"><img data-src=\"holder.js/100%x40/text:{{ctrl.brand}}\" alt=\"Logo\" /></span></md-toolbar>\n	<md-content>\n		<div layout=\"column\">\n			<sf-menu ng-model=\"ctrl.nav.primary\"></sf-menu>\n		</div>\n	</md-content>\n</md-sidenav>");
$templateCache.put("snippets/spot/spot.tmpl.html","<div class=\"sf-spot\" layout=\"row\">\n	<div flex=\"33\" layout-padding layout-align=\"center center\" layout=\"column\" class=\"sf-spot__title\">\n		<h3>New Product</h3>\n		<md-button>Click here</md-button>\n	</div>\n	<div flex=\"66\" class=\"sf-spot__image\"><img data-src=\"holder.js/100%x380/text:big bold image\" alt=\"\"></div>\n	<div ng-transclude></div>\n</div><!-- /sf-spot -->");
$templateCache.put("snippets/toolbarPrimary/toolbarPrimary.tmpl.html","<md-toolbar layout-align=\"center\">\n<div class=\"md-toolbar-tools\">\n	<div flex=\"20\" hide-gt-md>\n		<md-button ng-click=\"ctrl.toggleMainSidebar()\" aria-label=\"Toggle Menu\"><md-icon md-svg-icon=\"navigation:ic_menu_24px\" alt=\"Help\"></md-icon></md-button>\n	</div>\n	<div flex><sf-search ng-model=\"this.ctrl.search\"></sf-search></div>\n	<div flex=\"15\" layout=\"row\" layout-align=\"end center\">\n		<md-button aria-label=\"Mini Cart\" ng-click=\"ctrl.toggleMiniCart()\" class=\"md-primary-theme\"><md-icon md-svg-icon=\"action:ic_shopping_cart_24px\" alt=\"Exit\"></md-icon>\n		<span class=\"badge\">2</span>\n		</md-button>\n	</div>\n</div>\n</md-toolbar>");
$templateCache.put("snippets/topbar/topbar.tmpl.html","<div class=\"sf-topbar sf-user-info\" layout=\"row\" layout-align=\"start center\">\n	<div class=\"sf-user-info__name\" flex=\"20\" layout-padding hide-sm><small>Hello, {{ctrl.user.name}}</small></div>\n	<div class=\"sf-user-info__user-nav\" layout-align-gt-sm=\"end center\" flex layout=\"row\">\n		<span><md-button class=\"md-primary\" aria-label=\"Help\"><md-icon md-svg-icon=\"action:ic_help_24px\" alt=\"Exit\"></md-icon></md-button><md-tooltip>\n          Help\n        </md-tooltip></span>\n		<span><md-button ng-click=\"ctrl.toggleUserPanel()\" class=\"md-primary\" aria-label=\"User Panel\"><md-icon md-svg-icon=\"action:ic_account_box_24px\" alt=\"Exit\" aria-label=\"UserPanel\"></md-icon></md-button>\n		<md-tooltip>\n          User\n        </md-tooltip>\n		</span>\n		<span><md-button class=\"md-primary\"><md-icon md-svg-icon=\"action:ic_exit_to_app_24px\" alt=\"Exit\" aria-label=\"Exit\"></md-icon></md-button>\n		<md-tooltip>\n          Exit\n        </md-tooltip>\n		</span>\n	</div>\n</div>");
$templateCache.put("templates/partials/minicartSidenav.tmpl.html","<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"mini-cart\">\n    <md-toolbar>\n        <h2 class=\"md-toolbar-tools\">Mini Cart\n			<md-button ng-click=\"ctrl.closeMiniCart()\" aria-label=\"Close\"><md-icon md-svg-icon=\"navigation:ic_close_24px\" alt=\"Close\"></md-icon></md-button>\n        </h2>\n    </md-toolbar>\n    <md-content class=\"md-padding\">\n    	<sf-mini-cart ng-model=\"ctrl.order\"></sf-mini-cart>\n    </md-content>\n</md-sidenav>");
$templateCache.put("templates/partials/sidebarPrimary.tmpl.html","<md-sidenav class=\"md-sidenav-left sf-main-sidenav site-sidenav md-sidenav-left\" md-is-locked-open=\"$media(\'gt-md\')\" md-component-id=\"main-sidebar\">\n<md-toolbar class=\"sf-primary\"><span class=\"md-toolbar-tools\"><img data-src=\"holder.js/100%x40/text:{{ctrl.brand}}\" alt=\"Logo\" /></span></md-toolbar>\n	<md-content>\n		<div layout=\"column\">\n			<sf-menu ng-model=\"ctrl.nav.primary\"></sf-menu>\n		</div>\n	</md-content>\n</md-sidenav>");
$templateCache.put("templates/partials/usermenuSidenav.tmpl.html","<div class=\"sf-sidenav__user\">\n<md-sidenav class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"user-panel\">\n    <md-toolbar class=\"md-theme-light\">\n        <h2 class=\"md-toolbar-tools\">User Panel\n		<md-button ng-click=\"ctrl.closeUserPanel()\" alt=\"Close\" aria-label=\"Close\"><md-icon md-svg-icon=\"navigation:ic_close_24px\"></md-icon></md-button>\n        </h2>\n    </md-toolbar>\n    <md-content class=\"md-padding\">\n    <sf-user-info ng-model=\"ctrl.user\"></sf-user-info>\n	    <md-list>\n	      <md-item ng-repeat=\"item in ctrl.user.menu\">\n	        <md-item-content>\n	          <div class=\"md-tile-left\">\n	          	<md-button>\n	              <md-icon md-svg-icon=\"{{item.icon}}\" alt=\"Exit\" aria-label=\"{{item.title}}\"></md-icon>\n	              {{item.title}}\n	              </md-button>\n	          </div>\n	        </md-item-content>\n	      </md-item>\n	    </md-list>\n    </md-content>\n</md-sidenav>\n</div><!-- /sf-sidenav-user -->");}]);