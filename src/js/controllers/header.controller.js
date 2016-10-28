angular.module('shopular')
.controller('HeaderController', function Header($state) {


  $('header').on('click', '#home-title', function(event){
    event.preventDefault();
    $state.go('main');
  });

  // $('header').on('click', '#add-new-item', function(event){
  //   event.preventDefault();
  //   $('.add-item-container').slideToggle();
  // });

  $('header').on('click', '#add-new-item', function(event){
    event.preventDefault();
    $state.go('add');
  });


  $('header').on('click', '#view-inventory', function(event){
    event.preventDefault();
    $state.go('inventory');
  });



    this.activeSession = false;
    this.user = 'Jane';


});
