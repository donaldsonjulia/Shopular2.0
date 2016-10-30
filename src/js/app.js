
    angular.module('shopular', ['ui.router', 'LocalStorageModule'])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('main');

      $stateProvider.state('shopularParent', {
        url: '/',
        abstract: true,
        template: '<ui-view></ui-view>'

    }).state('main', {
      url: 'main',
      parent: 'shopularParent',
      templateUrl: './src/templates/main.html'
    }).state('inventory', {
      url: 'inventory',
      parent: 'shopularParent',
      templateUrl: './src/templates/shop_inventory.html',
      controller: 'ShopController as shop'
    }).state('add', {
      url: 'add',
      parent: 'shopularParent',
      templateUrl: './src/templates/add_item.html',
      controller: 'ShopController as shop'
    }).state('login', {
      url: 'login',
      parent: 'shopularParent',
      templateUrl: './src/templates/login.html',
      controller: 'LoginController as login'
    });


    });
