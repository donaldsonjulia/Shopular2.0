angular.module('shopular').service('UserService', function($state) {

  this.allUsers = [
    {
      "name": "Jane",
      "surname": "Doe",
      "username": "admin",
      "password": "shopularjane"
    },
    {
      "name": "John",
      "surname": "Smith",
      "username": "manager",
      "password": "shopularJohn"
    }
  ];

  this.activeSession = false;

  this.currentUser = {};




function createUserSession(foundUser) {
    this.currentUser = foundUser;
    $state.go('inventory');
  }

this.endUserSession = function() {
  console.log('logged out');
  this.currentUser = {};
};


  this.findUser = function(username, password) {
    console.log('in findUser');
    var usersArray = this.allUsers;
    var foundUser = {};
    usersArray.forEach(function(user){
      if (user.username === username && user.password === password) {
        console.log('User logged in: ' + user.name +' ' + user.surname );
        foundUser = user;
        createUserSession(foundUser);
      }
    });
  };



});
