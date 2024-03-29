(function() {
  'use strict';  angular.module('playerFmApp.router', []).config(function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'home/index.html',
      controller: 'HomeCtrl'
    }).when('/blog', {
      templateUrl: 'blog/index.html',
      controller: 'BlogCtrl'
    }).when('/e2e', {
      templateUrl: 'e2e.html'
    });
  });

}).call(this);
