(function(){
  "use strict";

  angular
    .module('public')
    .controller('MyinfoController', MyinfoController);

  MyinfoController.$inject = ['myInfo', 'ApiPath'];
  function MyinfoController(myInfo, ApiPath) {

    var $ctrl = this;
    $ctrl.basePath = ApiPath;

    // dentro myInfo è gia contenuto il risultato del json del prodotto inserito dall'utente
    $ctrl.newsletterFormData = myInfo;





    /*
    // chiamo il servizio getMenuItemById per acquisire le informazioni del prodotto che l'utente ha inserito nel form
    // Come argomento passo il campo menunumber
    var promise = MenuService.getMenuItemById($ctrl.newsletterFormData.menunumber);
    promise.then(function(response){
      $ctrl.favoriteDish = response;
    }).catch(function(error){
      console.error(error);
    })
    */

  }

})();