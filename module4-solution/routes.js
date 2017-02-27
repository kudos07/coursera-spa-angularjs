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
        template: '<h1 class="text-center">Pagina: {{categories.pageTitle}}</h1> <ul><li ng-repeat="cat in categories.categoriesList">{{cat.name}}</li></ul>',
        controller: 'CategoriesCtrl as categories',
        resolve: {
          categoriesList: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

  }


}());