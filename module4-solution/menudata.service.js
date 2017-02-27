(function () {
  'use strict';

  angular
    .module('data')
    .service('MenuDataService', MenuDataService);


  MenuDataService.$inject = ['$http'];
  function MenuDataService ($http) {
    var mds = this;

    // getAllCategories :: this method should return a promise
    // which is a result of using the $http service,
    // REST API endpoint: https://davids-restaurant.herokuapp.com/categories.json
    mds.getAllCategories = function () {
      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/categories.json'
      }).then(function(result){
        return result.data;
      })
    };

    // getItemsForCategory(categoryShortName)
    // this method should return a promise which is a result of using the $http service
    // REST API endpoint: https://davids-restaurant.herokuapp.com/menu_items.json?category=,
    // before the call to the server, your code should append whatever categoryShortName value was passed in as an argument into the getItemsForCategory method.
    mds.getItemsForCategory = function(categoryShortName) {

      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=',
        params: {
          categoryShortName: categoryShortName
        }
      })

    }

  }

}());