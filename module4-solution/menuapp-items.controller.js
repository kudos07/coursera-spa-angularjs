(function () {
  'use strict';

  angular
    .module('data')
    .controller('ItemsCtrl', ItemsCtrl);

  ItemsCtrl.$inject = ['items', '$stateParams'];
  function ItemsCtrl(items, $stateParams) {

    // "itemsList" è la label del controller definito nello state
    var itemsList = this;
    itemsList.pageTitle = 'Elenco prodotti per la categoria:';
    itemsList.items = items;
    itemsList.catName = $stateParams.categoryId;

  }

}());