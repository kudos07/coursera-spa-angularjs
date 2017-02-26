(function () {
  'use strict';

  angular
    .module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        template: '<h1 class="text-center">Welcome to our Restaurant</h1><a ui-sref="categories">Show all categories</a>'
      })
      .state('categories', {
        url: '/categories',
        template: '<h1 class="text-center">Elenco delle categorie</h1><categories items="categories.items"></categories>',
        controller: 'CategoriesCtrl as categories',
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

  }


}());