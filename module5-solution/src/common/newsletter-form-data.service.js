(function(){
  "use strict";

  angular
    .module('common')
    .service('FormDataService', FormDataService);

  function FormDataService () {
    var service = this;

    service.formDataStorage = {
      menunumber: '',
      user: {
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: ''
      }
    };

    // Aggiorno le mie informazioni con i dati provenienti dalle view
    service.updateFormDataStorage = function (formDataUserObj) {
      service.formDataStorage = formDataUserObj;
    };

    // ritorno l'oggetto aggiornato
    service.getFormDataStorage = function () {
      return service.formDataStorage;
    }

  }

})();