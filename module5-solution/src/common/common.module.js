(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://enigmatic-dawn-47212.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
