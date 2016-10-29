angular.module('shopular')
.controller('HeaderController', function Header(UserService, $state) {


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


  // this.activeUser = UserService.currentUser;
  //
  // this.user = UserService.findUser("admin", "shopularjane");


});
