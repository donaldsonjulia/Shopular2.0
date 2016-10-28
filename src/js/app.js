
    angular.module('shopular', ['ui.router', 'LocalStorageModule'])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/main');

      $stateProvider.state('shopularParent', {
        url: '/',
        abstract: true,
        template: '<ui-view></ui-view>'

    }).state('main', {
      url: 'main',
      parent: 'shopularParent',
      templateUrl: './src/templates/main.html',
      controller: 'ShopController as shop'

    });



    });
