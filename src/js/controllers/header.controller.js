angular.module('shopular')
.controller('HeaderController', function Header($rootScope, $scope, UserService, $state) {
  console.log('header');

  $('header').on('click', '#home-title', function(event){
    event.preventDefault();
    $state.go('main');
  });

  $('header').on('click', '#add-new-item', function(event){
    event.preventDefault();
    $state.go('add');
  });

  $('header').on('click', '#view-inventory', function(event){
    event.preventDefault();
    $state.go('inventory');
  });

  $('header').on('click', '#login', function(event){
    event.preventDefault();
    $state.go('login');
  });

  $('header').on('click', '#logout', function(event){
    event.preventDefault();
    UserService.endUserSession();
    $state.go('login');
  });

  //$rootScope.user = UserService.getCurrentUser();
  //$rootScope.session = UserService.getSessionStatus();
});
