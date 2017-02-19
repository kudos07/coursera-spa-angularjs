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
    narrowItDown.error = false; // loading
    narrowItDown.loader = false; // error: no found items

    // In the NarrowItDownController, simply remove that item from the found array.
    narrowItDown.removeMenuItem = function (index) {
      narrowItDown.found.splice(index, 1);
    };

    // The controller should call the getMatchedMenuItems method when appropriate
    // Store the result in a property called "found" attached to the controller instance.
    narrowItDown.showListMenu = function () {
      var promise = MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm);
      narrowItDown.loader = true;

      promise.then(function (response) {
        narrowItDown.found = response;
        narrowItDown.loader = false;
        if(narrowItDown.found.length < 1) {
          narrowItDown.error = true;
        }
      }).catch(function (error) {
        console.log('Errore: ',error);
      })
    }
  }

  function MenuSearchService($http) {
    var service = this;

    // quando chiamo questo metodo dal mio controller:
    // devo eseguire una chiamata http che mi ritorni menu_items.json
    // devo filtrare la lista in base alla chiave di ricerca "searchTerm" e controllare se appare da qualche parte nella description
    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      }).then(function (result) {

        var menu_items = result.data.menu_items;
        var foundItems = [];

        for(var i=0; i < menu_items.length; i++){
          if (menu_items[i].description.indexOf(searchTerm) > 0) {
            foundItems.push(menu_items[i]);
          }
        }

        // return processed items
        return foundItems;
      });
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

