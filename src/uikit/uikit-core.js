(function() {
'use strict';

/**
 * Initialization for uikit-core
 */
angular
  .module('uikit.core', ['ngMaterial'])
  .config( SfCoreConfigure )
  .directive('sfTemplate', function ($compile) {
    return {
      restrict: 'A',
      //scope: {
      //  template: '=sfTemplate',
      //  item: '=ngModel'
      //},
      link: function (scope, element, attrs) {

        //if (scope.template) {
        //  element.html(scope.template);
        //  $compile(element.contents())(scope);
        //}

        //console.log(attrs.sfTemplate, attrs.ngModel);

        //console.log(attrs.ngModel, scope.$parent[attrs.ngModel]);
        //console.log(attrs.sfTemplate, scope[attrs.sfTemplate]);
        //console.log(attrs.sfTemplate, scope);
        //console.log(attrs.sfTemplate, scope.$eval(attrs.sfTemplate));
        //var t = scope.$parent.$eval(attrs.sfTemplate);

        var t = scope.$eval(attrs.sfTemplate);
        if (t) {
          //console.log(t, scope.$parent);
          element.html(t);
          //console.log(element.contents());
          //$compile(element.contents())(scope.$parent);
          $compile(element.contents())(scope);
        }
      }
    }

  })



.directive('ngIncludeReplace', function () {
    return {
        require: 'ngInclude',
        restrict: 'A',
        link: function (scope, el, attrs) {
            el.replaceWith(el.children());
        }
    };
});

function SfCoreConfigure($mdThemingProvider, $mdIconProvider) {

  //$mdThemingProvider.alwaysWatchTheme(true);
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('purple') // specify primary color, all other color intentions will be inherited from default
    .accentPalette('orange');
  $mdThemingProvider.theme('docs-dark', 'default')
    .primaryPalette('orange')
    .dark();
  $mdIconProvider
    .iconSet('action', '/uikit/images/icons/svg-sprite-action.svg', 24)
    .iconSet('navigation', '/uikit/images/icons/svg-sprite-navigation.svg', 24)
    .iconSet('communication', '/uikit/images/icons/svg-sprite-communication.svg', 24)
    .iconSet('maps', '/uikit/images/icons/svg-sprite-maps.svg', 24)

    //.iconSet('action', '/bower_components/shelfi-uikit/images/icons/svg-sprite-action.svg', 24)
    //.iconSet('navigation', '/bower_components/shelfi-uikit/images/icons/svg-sprite-navigation.svg', 24)
    //.iconSet('communication', '/bower_components/shelfi-uikit/images/icons/svg-sprite-communication.svg', 24)
}

angular.module('uikit.components', ['uikit.core']);
angular.module('uikit.snippets', ['uikit.core']);

})();