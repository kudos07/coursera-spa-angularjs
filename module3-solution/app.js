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

  function NarrowItDownController ($scope, MenuSearchService) {
    var narrowItDown = this;

    // In the NarrowItDownController, simply remove that item from the found array.
    narrowItDown.removeItem = function (index) {
      narrowItDown.found.splice(index, 1);
    };

    // The controller should call the getMatchedMenuItems method when appropriate
    // Store the result in a property called "found" attached to the controller instance.
    narrowItDown.showListMenu = function () {
      var promise = MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm);
    
      promise
        .then(function (result) {
          narrowItDown.found = result.data.menu_items;
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      var response = $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      });

      // Once it gets all the menu items, it should loop through them
      // pick out the ones whose description matches the searchTerm.

      return response;
    };

  }


  // Declare and create foundItems directive.
  function FoundItems () {
    var ddo = {
      restrict: 'E',
      templateUrl: 'foundItems.html',
      replace: true,
      scope: {
        foundItems: '<',
        onRemove: '&'
      }
    };

    return ddo;
  }

}());

