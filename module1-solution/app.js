(function(){

  angular
    .module('LunchCheck', [])
    .controller('lunchCheckController', lunchCheckController);

  lunchCheckController.$inject = ['$scope'];

  function lunchCheckController($scope) {
    
    $scope.lunchItems = '';

    var lunchStatus = {
      'empty' : {
        'msg': 'Please enter data first',
        'class': 'ko'
      },
      'ok' : {
        'msg': 'Enjoy!',
        'class': 'ok'
      },
      'ko' : {
        'msg': 'Too much!',
        'class': 'ok'
      }
    }

    $scope.lunchItemsCheck = function () {
      $scope.lunchItems = cleanArray ($scope.lunchItems); // array
      $scope.lunchStatus = printMsg(); // object
    };

    function printMsg() {
      if ($scope.lunchItems.length === 0) {
        return lunchStatus.empty;
      } else if ($scope.lunchItems.length <= 3) {
        return lunchStatus.ok;
      } else {
        return lunchStatus.ko;
      }
    };

    function cleanArray (arr) {
      var arr = arr.split(',');
      var newArr = [];

      for(var i = 0; i<arr.length; i++) {
        // If the length of the resulting string is 0, then you can be sure the original only contained whitespace.
        if (arr[i].replace(/\s/g, '').length) {
          newArr.push(arr[i]);
        }
      }

      return newArr;  
    }

  }

}());