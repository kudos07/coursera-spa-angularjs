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
        templateUrl: 'view/home.template.html'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'view/categories.template.html',
        controller: 'CategoriesCtrl as categories',
        resolve: {
          categoriesList: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

  }


}());