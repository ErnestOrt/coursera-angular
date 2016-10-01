(function(){
  'use strict';


 angular.module('NarrowItDownApp', [])
 .controller('NarrowItDownController', NarrowItDownController)
 .service('MenuSearchService', MenuSearchService)
 .directive('foundItems', FoundItemsDirective);
 

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}



 NarrowItDownController.$inject = ['MenuSearchService'];
 function NarrowItDownController(MenuSearchService) {
  this.found = [];
  this.searchTerm = "";

  this.retrieveItems = function () {
    this.found = MenuSearchService.getMatchedMenuItems(this.searchTerm);
  }

  this.removeItem = function (itemIndex) {
      this.found.splice(itemIndex, 1);
  }
 }


MenuSearchService.$inject = ['$http']
function MenuSearchService($http){
  this.getMatchedMenuItems = function (searchTerm) {

    return $http({
                  method: "GET",
                  url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
                }
          ).then(function (result) {
              var foundItems = [];
              var allItems = result.data.menu_items;           

              for(var index = 0; index<allItems.length; index++){
                if(result.data.menu_items[index].description.toLowerCase().indexOf(searchTerm) !== -1 ){
                  foundItems.push(allItems[index]);
                }
              }

              return foundItems;
          });
  }
}
})();