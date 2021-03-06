(function() {
    'use strict';

    $('header').on('click', '#add-new-item', function(event){
      event.preventDefault();
      $('.add-item-container').slideToggle();
    });

    angular.module('shopular', [])
    .controller('ShopController', function Shop() {



        this.title = 'SHOPULAR';

        this.inventory = [
            {
                "id": 2957,
                "name": "widget",
                "price": 32,
                "quantity": 203,
                "color": "red",
                "discount": 31
            }, {
                "id": 89274,
                "name": "golf club",
                "price": 98,
                "quantity": 10,
                "color": "black",
                "discount": 0
            }, {
                "id": 64,
                "name": "iPhone",
                "price": 499,
                "quantity": 2,
                "color": "white",
                "discount": 0
            }, {
                "id": 87363,
                "name": "bonzai tree",
                "price": 76,
                "quantity": 2,
                "color": "green",
                "discount": 0
            }, {
                "id": 1736,
                "name": "towel",
                "price": 55,
                "quantity": 30,
                "color": "brown",
                "discount": 10
            }, {
                "id": 4836,
                "name": "dog bed",
                "price": 99,
                "quantity": 10,
                "color": "beige",
                "discount": 50
            }, {
                "id": 829,
                "name": "waste basket",
                "price": 15,
                "quantity": 40,
                "color": "silver",
                "discount": 0
            }, {
                "id": 46,
                "name": "guitar",
                "price": 899,
                "quantity": 0,
                "color": "blue",
                "discount": 150
            }, {
                "id": 17456,
                "name": "matcha tea",
                "price": 42,
                "quantity": 4,
                "color": "green",
                "discount": 11
            }, {
                "id": 3292,
                "name": "enlightenment",
                "price": 99999,
                "quantity": 1,
                "color": "red",
                "discount": 0
            }, {
                "id": 533,
                "name": "eggs",
                "price": 5,
                "quantity": 12,
                "color": "brown",
                "discount": 1
            }, {
                "id": 683,
                "name": "pillow",
                "price": 27,
                "quantity": 10,
                "color": "black",
                "discount": 12
            }
        ];


        this.getPrice = function(item) {
          var tax = 1.0575;
          item.currentPrice = null;

          if (item.discount === 0) {
            item.currentPrice = item.price * tax;
            return item.price * tax;
          } else {
            item.currentPrice = (item.price - item.discount) * tax;
            return (item.price - item.discount) * tax;
          };
        };

        this.item = {};

        this.addItem = function(item) {
          console.log('in');
          this.item = angular.copy(item);
          console.log(this.item);

          this.inventory.push(this.item);

        };
        this.sortParam = 'price';
        this.sortBy = function(property) {
          this.sortParam = property;

        };


        this.activeSession = true;


        this.user = 'Jane';





    });





})();
;
    angular.module('shopular', ['ui.router', 'LocalStorageModule'])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/';)

      $stateProvider.state('shopularParent', {
        url: '/',
        abstract: true,
        views: {
          '': {
            templateUrl: './src/templates/main.html'
          },
          'header': {
            templateUrl: '.src/templates/header.html'
          },
          'content': {
            templateUrl: '.src/templates/login.html'
          }
        }
      })

    });
