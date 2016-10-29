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

  // this.activeSession = false;

  this.currentUser = {};



  // this.createUserSession = function(foundUser) {
  //   var sessionOwner = foundUser;
  //   this.activeSession = true;
  //   angular.copy(sessionOwner, this.currentUser);
  // };

function createUserSession(foundUser) {
    this.currentUser = foundUser;
  }


  this.findUser = function(username, password) {
    console.log('in findUser');
    var usersArray = this.allUsers;
    var foundUser = {};
    usersArray.forEach(function(user){
      if (user.username === username && user.password === password) {
        console.log('in foundUser if statement');
        foundUser = user;
      }

      createUserSession(foundUser);
      return foundUser;


    });
  };



});
