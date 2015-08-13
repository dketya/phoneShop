(function () {
  'use strict';
  var serviceBase = 'http://localhost/';

  var app = angular.module('myApp',
     [
       'ui.bootstrap',
       'ngAnimate',
       'ui.router',
       'oc.lazyLoad',
     ]);

  app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase
  });
  
}());