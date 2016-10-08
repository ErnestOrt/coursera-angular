(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['items'];
function CategoriesController(items) {
  console.log('controller');
  console.log(items);
  var mainList = this;
  mainList.items = items.data;
  console.log(mainList.items);
}

})();
