(function () {
'use strict';

angular.module('ShoppingCheckOff', [])
	.service('ShoppingListCheckOffService', function () {
		var toBuyItems = [
							{"name" : "cookies","quantity": 10},
							{"name" : "breads", "quantity" : 5}, 
							{"name" : "jam", "quantity" : 2},
							{"name" : "butter", "quantity" : 2},
							{"name" : "noodles", "quantity" : 3}
						 ];
		var boughtItems = [];
		
		this.getToBuyItems = function () {
			return toBuyItems;
		};

		this.getBoughtItems = function () {
			return boughtItems;
		};

		this.buyItem = function (itemIndex) {
			var item = toBuyItems[itemIndex];
			toBuyItems.splice(itemIndex, 1);
			boughtItems.push(item);
		};
	})
	.controller('ToBuyController', function(ShoppingListCheckOffService) {
		this.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
		this.buyItem = function (index) {
			ShoppingListCheckOffService.buyItem(index);
		}
	})
	.controller('AlreadyBoughtController',function(ShoppingListCheckOffService) {
		this.boughtItems = ShoppingListCheckOffService.getBoughtItems();
	});
})();