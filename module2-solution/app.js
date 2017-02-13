(function(){

  angular
    .module('ShoppingListCheckOff',[])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['$scope','ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];

  // Think of being in a store with a shopping list that allows you to "check off" the items you've already bought,
  // except instead of checking them off, the bought item simply moves to the "Already Bought" list.


  function ShoppingListCheckOffService () {
    // your service will have to keep track of both 'to buy' and 'bought' items at the same time.
    // You can store 2 separate arrays in the service: one to hold "to buy" items and one to hold "bought" items.

    // The reference to the "to buy" array should be placed/exposed onto the ToBuyController instance as some property.
    this.tobuylist = [
      // Your ShoppingListCheckOffService would also be the place where you would store the initial array of "to buy" items.
      {name: "cookies", quantity: 10},
      {name: "cokes", quantity: 20},
      {name: "ice creams", quantity: 200},
      {name: "milk bottles", quantity: 5},
      {name: "water bottles", quantity: 50}
    ];

    // The reference to the "bought" items array should be placed/exposed onto the AlreadyBoughtController instance as some property.
    // The "Already Bought" list should initially be empty
    this.boughtlist = [];


    // When the user clicks on the "Bought" button, its associated item should be removed from the "To Buy" list and appear in the "Already Bought" list.
    // (Hint) When the user clicks on the "Bought" button, simply pass the call from your (ng-click) controller-bound method
    // to call the right method inside of your ShoppingListCheckOffService service, which removes that item from the "to buy" array and pushes it to the "bought" array.
    this.updateList = function (index) {
      this.boughtlist.push(this.tobuylist[index]);
      this.tobuylist.splice(index, 1);
    };

  }


  function ToBuyController($scope, ShoppingListCheckOffService) {

    this.evenToBuyList = ShoppingListCheckOffService.tobuylist;

    this.updateListView = function(index) {
      ShoppingListCheckOffService.updateList(index);
    };

  }

  function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
    this.alreadyBoughtList = ShoppingListCheckOffService.boughtlist;
  }

}());