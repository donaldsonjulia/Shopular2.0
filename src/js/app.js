
    angular.module('shopular', ['ui.router', 'LocalStorageModule'])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider.state('shopularParent', {
        url: '/',
        // abstract: true,
        templateUrl: './src/templates/main.html',
        controller: 'ShopController as shop'
    });



    });
