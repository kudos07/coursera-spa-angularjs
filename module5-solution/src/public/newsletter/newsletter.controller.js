(function(){
  "use strict";

  angular.module('public')
    .controller('NewsletterController', NewsletterController);

  NewsletterController.$inject = ['MenuService'];
  function NewsletterController (MenuService) {

    var $ctrl = this;
    $ctrl.newsletter = {};

    $ctrl.submit = function () {
      var userId = $ctrl.newsletter.user.menunumber;

      var serviceItemPromise = MenuService.getMenuItemById(userId);
      serviceItemPromise.then(function (response) {
        $ctrl.itemFound = true; // Prodotto trovato
      }).catch(function (error) {
        $ctrl.itemFound = false; // Prodotto NON trovato
      });

    }

  }

})()