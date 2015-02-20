'use strict';

module.exports = function(app) {
	// Controllers
	app.controller('BreadcrumbCtrl', require('./collections/breadcrumb/breadcrumb-controller'));
	app.controller('HeaderCtrl', require('./collections/header/header-controller'));
	app.controller('NavbarCtrl', require('./collections/navbar/navbar-controller'));
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
	app.controller('SidenavCtrl', require('./elements/sidenav/sidenav-controller'));
	app.controller('SliderCtrl', require('./elements/slider/slider-controller'));
	app.controller('SwitchCtrl', require('./elements/switch/switch-controller'));
	app.controller('TableCtrl', require('./elements/table/table-controller'));
	app.controller('TabsCtrl', require('./elements/tabs/tabs-controller'));
	app.controller('ToastCtrl', require('./elements/toast/toast-controller'));
	app.controller('TooltipCtrl', require('./elements/tooltip/tooltip-controller'));
	app.controller('CartCtrl', require('./modules/cart/cart-controller'));
	app.controller('MinicartCtrl', require('./modules/minicart/minicart-controller'));
	app.controller('ProductItemCtrl', require('./modules/productItem/productItem-controller'));
	app.controller('ProductListCtrl', require('./modules/productList/productList-controller'));
	// Directives
	app.directive('sfBreadcrumb', require('./collections/breadcrumb/breadcrumb-directive'));
	app.directive('sfHeader', require('./collections/header/header-directive'));
	app.directive('sfNavbar', require('./collections/navbar/navbar-directive'));
	app.directive('sfCart', require('./modules/cart/cart-directive'));
	app.directive('sfMinicart', require('./modules/minicart/minicart-directive'));
	app.directive('sfProductDetail', require('./modules/productDetail/productDetail-directive'));
	app.directive('sfProductFilter', require('./modules/productFilter/productFilter-directive'));
	app.directive('sfProductItem', require('./modules/productItem/productItem-directive'));
	app.directive('sfProductList', require('./modules/productList/productList-directive'));
	app.directive('sfProductSorter', require('./modules/productSorter/productSorter-directive'));
	app.directive('sfSearch', require('./modules/search/search-directive'));
	// Runs
	app.run(require('./templates-run'));
};