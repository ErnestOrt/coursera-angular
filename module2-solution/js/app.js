(function(){
  'use strict';


 angular.module('ShoppingListCheckOff', [])
 .controller('ToBuyShoppingController', ToBuyShoppingController)
 .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
 .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {

  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    }
}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}


function ShoppingListCheckOffService() {
 var service = this;

 var toBuyItems = [];
 var alreadyBoughtItems = [];

 toBuyItems.push({ name: "cookies", quantity: 10 });
 toBuyItems.push({ name: "milk", quantity: 3 });
 toBuyItems.push({ name: "coke", quantity: 5 });
 toBuyItems.push({ name: "donutts", quantity: 10 });
 toBuyItems.push({ name: "hot dogs", quantity: 10 });

 service.getToBuyItems = function () { return toBuyItems;};
 service.getAlreadyBoughtItems = function () { return alreadyBoughtItems;};

 service.buyItem = function (itemIndex) {
   alreadyBoughtItems.push(toBuyItems[itemIndex]);
   toBuyItems.splice(itemIndex, 1);
 }
}


})();
