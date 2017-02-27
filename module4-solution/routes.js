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
        templateUrl: 'menuapp-home.template.html'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'menuapp-categories.template.html',
        controller: 'CategoriesCtrl as categories',
        resolve: {
          categoriesList: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state('itemDetail', {
        url: '/itemDetail/{itemId}',
        templateUrl: 'menuapp-itemDetail.template.html',
        controller: 'ItemDetailCtrl as itemDetail',
        resolve: {
          item: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.itemId).then(function (items){
              return items[$stateParams.itemId];
            })
          }]
        }
      })

  }


}());