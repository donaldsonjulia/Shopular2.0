angular.module('shopular')
.controller('ShopController', function Shop(UserService, Inventory, $state) {

    this.inventory = Inventory.fetch();


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
      item.id = Date.now();
      this.item = angular.copy(item);
      console.log(this.item);

      this.inventory.push(this.item);
      Inventory.set(this.inventory);
      $state.go('inventory');

    };

    this.sortParam = 'currentPrice';
    this.sortBy = function(property) {
      this.sortParam = property;

    };




});
