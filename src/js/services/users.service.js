angular.module('shopular').service('UserService', function($state, localStorageService) {

  this.allUsers = [
    {
      "name": "Jane",
      "surname": "Doe",
      "username": "admin",
      "password": "shopular"
    },
    {
      "name": "John",
      "surname": "Smith",
      "username": "manager",
      "password": "shopular"
    }
  ];



function setCurrentUser(user) {
  localStorageService.set('currentUser', user);
}

this.getCurrentUser = function() {
  return localStorageService.get('currentUser') || {};
}

function defineSession(status) {
  localStorageService.set('sessionStatus', status)
}

this.getSessionStatus = function() {
  return localStorageService.get('sessionStatus');
}


function createUserSession(foundUser) {
    setCurrentUser(foundUser);
    defineSession(true);
    $state.go('inventory');
  }

this.endUserSession = function() {
  console.log('logged out with UserService');
  setCurrentUser({});
  defineSession(false);
};


  this.findUser = function(username, password) {
    console.log('finding user with UserService');
    var usersArray = this.allUsers;
    var foundUser = {};
    usersArray.forEach(function(user){
      if (user.username === username && user.password === password) {
        console.log('User found and logged in: ' + user.name +' ' + user.surname );
        foundUser = user;
        createUserSession(foundUser);
      }
    });
  };






});
