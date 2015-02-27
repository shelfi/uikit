(function() {
'use strict';

/**
 * Initialization for uikit-core
 */
angular
  .module('uikit.core', ['ngMaterial'])
  .config( SfCoreConfigure );

function SfCoreConfigure($mdThemingProvider, $mdIconProvider) {

  //$mdThemingProvider.alwaysWatchTheme(true);
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('purple') // specify primary color, all other color intentions will be inherited from default
    .accentPalette('orange');
  $mdIconProvider
    .iconSet('action', './uikit/images/icons/svg-sprite-action.svg', 24)
    .iconSet('navigation', './uikit/images/icons/svg-sprite-navigation.svg', 24)
    .iconSet('communication', './uikit/images/icons/svg-sprite-communication.svg', 24)
}

angular.module('uikit.components', ['uikit.core']);
angular.module('uikit.snippets', ['uikit.core']);

})();