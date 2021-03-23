(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  let toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

  toBuy.addBought = function (itemName, quantity) {
    ShoppingListCheckOffService.addBought(itemName, quantity);
  };

  toBuy.removeItemToBuy = function(itemIndex) {
    ShoppingListCheckOffService.removeItemToBuy(itemIndex);
  };

  toBuy.isEmpty = function() {
    return toBuy.items.length === 0;
  };
};


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  let bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();

  bought.isEmpty = function() {
    return bought.items.length === 0;
  };
};


function ShoppingListCheckOffService() {
  let service = this;

  let buyList = [
    { name: "Steak", quantity: "2" },
    { name: "A1", quantity: "1" },
    { name: "Rolls", quantity: "4" },
    { name: "Lettuce", quantity: "1" },
    { name: "Potatoes", quantity: "2" }
  ];

  // List of shopping items
  let boughtList = [];

  service.addBought = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    boughtList.push(item);
  };

  service.removeItemToBuy = function (itemIndex) {
      buyList.splice(itemIndex, 1);
  };

  service.getItemsToBuy = function () {
    return buyList;
  };

  service.getBoughtItems = function () {
    return boughtList;
  };
}

})();
