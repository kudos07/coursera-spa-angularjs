(function () {
  'use strict';

  angular
    .module('data')
    .controller('ItemDetailCtrl', ItemDetailCtrl);

  ItemDetailCtrl.$inject = ['item']
  function ItemDetailCtrl(item) {

    // "itemDetail" è la label del controller definito nello state
    var itemDetail = this;
    itemDetail.pageTitle = 'Dettaglio';

    itemDetail.name = item.name;
    itemDetail.description = item.description;

  }




}());