(function(){
  "use strict";

  angular.module('public')
    .controller('NewsletterController', NewsletterController);

  NewsletterController.$inject = ['MenuService', 'FormDataService'];
  function NewsletterController (MenuService, FormDataService) {

    var $ctrl = this;
    $ctrl.newsletter = {};
    $ctrl.itemFound = null;

    $ctrl.submit = function () {
      var serviceItemPromise = MenuService.getMenuItemById($ctrl.newsletter.menunumber);
      serviceItemPromise.then(function (response) {
        $ctrl.itemFound = true;
        $ctrl.newsletter.registered = true;

        // mi salvo le informazioni del prodotto selezionato dall'utente cosi me le ritrovo in automatico in my-info
        $ctrl.newsletter.favoriteDish = response;

        // chiamo un servizio che mi vada a salvare le informazioni inserite cosi da poterle riutilizzare
        FormDataService.updateFormDataStorage($ctrl.newsletter);

      }).catch(function (error) {
        $ctrl.itemFound = false;
        $ctrl.newsletter.registered = false;
      });

    }

  }

})()