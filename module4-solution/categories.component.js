(function () {
  'use strict';

  angular
    .module('data')
    .component('categoriesList', {
      templateUrl: 'categories.template.html',
      bindings: {
        items: '<'
      }
    });

  // shows all available categories in the menu to the user.
  // The categories component should NOT directly use the MenuDataService
  // The proper data should be simply passed into the component.



}());