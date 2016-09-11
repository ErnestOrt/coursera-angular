(function(){
  'use strict';

  angular.module('LunchCheck',[]).controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
      setMessageAndStyle("Please enter data first", "empty");

      $scope.checkItems = function () {
        if($scope.itemsCsv == ""){
          setMessageAndStyle("Please enter data first", "empty");
        }else if($scope.itemsCsv.split(',').length <= 3){
          setMessageAndStyle("Enjoy!", "not-empty");
        }else{
          setMessageAndStyle("Too much!", "not-empty");
        }
      }

      function setMessageAndStyle(message, style) {
        $scope.messageOutput = message;
        $scope.messageOutputStyle = style;
      }
  }

})();
