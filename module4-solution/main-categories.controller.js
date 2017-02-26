(function () {
  'use strict';

  angular
    .module('MenuApp')
    .controller('CategoriesCtrl', CategoriesCtrl);

  CategoriesCtrl.$inject = ['items']
  function CategoriesCtrl(items) {

    var categories = this;
    categories.items = items;

    console.log('ctrl', categories.items);

  }




}());