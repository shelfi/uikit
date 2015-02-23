'use strict';

module.exports = function(app) {
	// Controllers
	app.controller('TemplatesCtrl', require('./templates/templates-controller'));
	app.controller('AutocompleteCtrl', require('./elements/autocomplete/autocomplete-controller'));
	app.controller('BottomsheetCtrl', require('./elements/bottomsheet/bottomsheet-controller'));
	app.controller('ButtonCtrl', require('./elements/button/button-controller'));
	app.controller('CardCtrl', require('./elements/card/card-controller'));
	app.controller('CheckboxCtrl', require('./elements/checkbox/checkbox-controller'));
	app.controller('DialogCtrl', require('./elements/dialog/dialog-controller'));
	app.controller('DividerCtrl', require('./elements/divider/divider-controller'));
	app.controller('GridCtrl', require('./elements/grid/grid-controller'));
	app.controller('HighlightCtrl', require('./elements/highlight/highlight-controller'));
	app.controller('IconCtrl', require('./elements/icon/icon-controller'));
	app.controller('InputCtrl', require('./elements/input/input-controller'));
	app.controller('ListCtrl', require('./elements/list/list-controller'));
	app.controller('ProgressCtrl', require('./elements/progress/progress-controller'));
	app.controller('RadioCtrl', require('./elements/radio/radio-controller'));
	app.controller('SelectCtrl', require('./elements/select/select-controller'));
	app.controller('SidenavCtrl', require('./elements/sidenav/sidenav-controller'));
	app.controller('SliderCtrl', require('./elements/slider/slider-controller'));
	app.controller('SwitchCtrl', require('./elements/switch/switch-controller'));
	app.controller('TableCtrl', require('./elements/table/table-controller'));
	app.controller('TabsCtrl', require('./elements/tabs/tabs-controller'));
	app.controller('ToastCtrl', require('./elements/toast/toast-controller'));
	app.controller('TooltipCtrl', require('./elements/tooltip/tooltip-controller'));
	app.controller('CarouselCtrl', require('./modules/carousel/carousel-controller'));
	app.controller('CartCtrl', require('./modules/cart/cart-controller'));
	app.controller('MenuCtrl', require('./modules/menu/menu-controller'));
	app.controller('MiniCartCtrl', require('./modules/miniCart/miniCart-controller'));
	app.controller('NavbarCtrl', require('./modules/navbar/navbar-controller'));
	app.controller('ProductContainerCtrl', require('./modules/productContainer/productContainer-controller'));
	app.controller('ProductListCtrl', require('./modules/productList/productList-controller'));
	app.controller('BreadcrumbCtrl', require('./snippets/breadcrumb/breadcrumb-controller'));
	app.controller('HeaderCtrl', require('./snippets/header/header-controller'));
	// Directives
	app.directive('sfCarousel', require('./modules/carousel/carousel-directive'));
	app.directive('sfCart', require('./modules/cart/cart-directive'));
	app.directive('sfFilter', require('./modules/filter/filter-directive'));
	app.directive('sfMenu', require('./modules/menu/menu-directive'));
	app.directive('sfMiniCart', require('./modules/miniCart/miniCart-directive'));
	app.directive('sfNavbar', require('./modules/navbar/navbar-directive'));
	app.directive('sfOrderSummary', require('./modules/orderSummary/orderSummary-directive'));
	app.directive('sfPagination', require('./modules/pagination/pagination-directive'));
	app.directive('sfProductAction', require('./modules/productAction/productAction-directive'));
	app.directive('sfProductContainer', require('./modules/productContainer/productContainer-directive'));
	app.directive('sfProductImage', require('./modules/productImage/productImage-directive'));
	app.directive('sfProductInfo', require('./modules/productInfo/productInfo-directive'));
	app.directive('sfProductList', require('./modules/productList/productList-directive'));
	app.directive('sfProductOptions', require('./modules/productOptions/productOptions-directive'));
	app.directive('sfProductPrice', require('./modules/productPrice/productPrice-directive'));
	app.directive('sfSearch', require('./modules/search/search-directive'));
	app.directive('sfSort', require('./modules/sort/sort-directive'));
	app.directive('sfBreadcrumb', require('./snippets/breadcrumb/breadcrumb-directive'));
	app.directive('sfHeader', require('./snippets/header/header-directive'));
	// Runs
	app.run(require('./templates-run'));
};