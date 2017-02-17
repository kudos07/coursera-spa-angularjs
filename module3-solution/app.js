/*
* Once the user enters something into the textbox and clicks the button, your app will reach out to the server and retrieve the list of menu items for the entire menu.
*
* Once retrieved, your task is to loop through all the items and, for each item, do a simple check if the string being searched for by the user appears anywhere in the description of the item.
* If it does, that item gets placed in a special found array. If it doesn't, you simply move on to the next item.
* You should also provide a "Don't want this one!" button next to each item in the list to give the user the ability to remove an item from that list.
*
* If nothing is found as a result of the search OR if the user leaves the textbox empty and clicks the "Narrow It Down For Me!" button, you should simply display the message "Nothing found".
*
*/
(function(){
  'use strict';

  angular
    .module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems);


  NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
  MenuSearchService.$inject = ['$http'];


  // Declare and create a NarrowItDownController (with controller as syntax) that will wrap your search textbox and button as well as the list of found items.
  function NarrowItDownController ($scope, MenuSearchService) {
    var local = this;

    // In the NarrowItDownController, simply remove that item from the found array.
    local.removeItem = function (index) {
      // You can do that using the Array's splice() method. For example, to remove an item with the index of 3 from the found array, you would call found.splice(3, 1);.
      found.splice(index, 1);
    }

    // The controller should call the getMatchedMenuItems method when appropriate and store the result in a property called "found" attached to the controller instance.
    local.showListMenu = function () {
      var promise = MenuSearchService.getMatchedMenuItems(local.searchTerm);
    
      promise
        .then(function (result) {
          local.found = result.data.menu_items;
        })
        .catch(function (error) {
          console.log(error)
        })
    }


  }

  // Declare and create MenuSearchService.
  function MenuSearchService($http) {
    var service = this;

    // The service should have the following method: getMatchedMenuItems(searchTerm).
    service.getMatchedMenuItems = function (searchTerm) {
      var response = $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      });

      // Once it gets all the menu items, it should loop through them to pick out the ones whose description matches the searchTerm.

      // Once a list of found items is compiled, it should return that list (wrapped in a promise).
      return response;
    };

  }


  // Declare and create foundItems directive.
  function FoundItems () {
    var ddo = {
      restrict: 'E',
      templateUrl: 'foundItems.html',
      replace: true,

      // The list should be displayed using this directive which takes the found array of items specified on it as an attribute (think one-way binding with '<').
      // To implement the functionality of the "Don't want this one!" button, the directive should also provide an on-remove attribute that will use function reference binding to invoke the parent controller removal an item from the found array based on an index into the found array.
      scope: {
        foundItems: '<',
        onRemove: '&'
      }
    };

    return ddo;
  }

}());

