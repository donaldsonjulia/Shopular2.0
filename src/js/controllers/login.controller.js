angular.module('shopular').controller("LoginController", function(UserService, $state) {

  this.loginGo = function(user) {
    console.log('logging in with login controller');
    UserService.findUser(user.username, user.password);
  };


});
