(function () {
  'use strict';

  angular
    .module('data')
    .controller('CategoriesCtrl', CategoriesCtrl);

  CategoriesCtrl.$inject = ['categoriesList']
  function CategoriesCtrl(categoriesList) {

    // "categories" è la label del controller definito nello state
    var categories = this;
    categories.pageTitle = 'Categorie';


    // categoriesList contiene la promise definita nel resolve dello state
    // per richiamare la lista di categorie dal servizio menudata.service.js
    categories.categoriesList = categoriesList;
  }




}());