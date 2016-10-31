
    angular.module('shopular', ['ui.router', 'LocalStorageModule'])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('main');

      $stateProvider.state('main', {
      url: 'main',
      controller: 'ShopController as shop',
      views: {
        'header': {
          templateUrl: './src/templates/header.html',
          controller: 'HeaderController as header'
        },
        'main': {
          templateUrl: './src/templates/main.html'
        }
      }

    }).state('main.inventory', {
      url: 'inventory',
      views: {
        'header': {
          templateUrl: './src/templates/header.html',
          controller: 'HeaderController as header'
        },
        'main': {
          templateUrl: './src/templates/shop_inventory.html'
        }
      }
    }).state('main.add', {
      url: 'add',
      views: {
        'header': {
          templateUrl: './src/templates/header.html',
          controller: 'HeaderController as header'
        },
        'main': {
          templateUrl: './src/templates/add_item.html'
        }
      }

    }).state('main.login', {
      url: 'login',
      views: {
        'header': {
          templateUrl: './src/templates/header.html',
          controller: 'HeaderController as header'
        },
        'main': {
          templateUrl: './src/templates/login.html',
          controller: 'LoginController as login'
        }
      }
    });


    });
