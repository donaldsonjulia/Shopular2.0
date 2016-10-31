angular.module('shopular').controller("LoginController", function(UserService, $state) {

  this.loginGo = function(user) {
    console.log('logging in with LoginController, calling UserService to find user and create session if user is registered');
    UserService.findUser(user.username, user.password);
  };

});
