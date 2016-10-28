angular.module('shopular')
.controller('HeaderController', function Header() {

  // $state.go('main');

  $('header').on('click', '#add-new-item', function(event){
    event.preventDefault();
    $('.add-item-container').slideToggle();
  });




    // this.title = 'SHOPULAR v2.0';
    this.activeSession = false;
    this.user = 'Jane';




});
