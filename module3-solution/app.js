(function() {
'use strict';

angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItemsDirective);	

function FoundItemsDirective() {
	var ddo = {
		restrict: 'E',
		templateUrl: 'foundItems.html',
		scope : {
			foundItems : '<',
			onRemove : '&'
		}		
	}
	return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
	var controller = this;
	controller.displayErrorMessage = false;
	controller.foundItems = [];
	controller.searchTerm = '';

	controller.doSearchTerm = function() {
		console.log('searchTerm invoked with', controller.searchTerm);
		if (controller.searchTerm) {
			MenuSearchService.getMatchedMenuItems(controller.searchTerm).then(showResponse);		
		}
		else {
			controller.foundItems = [];
			controller.displayErrorMessage = true;
		}
	}

	 function resetSearch() {      	
      	controller.displayErrorMessage = false;
      	controller.searchTerm = '';
  	}

	function showResponse(response) {
		resetSearch();
		controller.foundItems = response;
		if(controller.foundItems.length === 0) {
			controller.displayErrorMessage = true;
		}
		console.log(controller.foundItems);	
	}
	
	controller.removeItem = function(itemIndex) {
		controller.foundItems.splice(itemIndex, 1);
	}
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
	var service = this;	

	service.getMatchedMenuItems = function(searchTerm) {
		return $http({
			method : "GET",
			url : ("https://davids-restaurant.herokuapp.com/menu_items.json")
		})
		.then(function(result) {
			var items = [];
			var menu_items = result.data.menu_items;
			for (var i = 0 ; i < menu_items.length ; i++) {
				var menu_item = menu_items[i];
				if (menu_item.description.toLowerCase().indexOf(searchTerm) !== -1) {
					items.push(menu_item);
				}
			}
			return items;
		})
		.catch(function(error) {
			console.log("Error occurred during menu retrieval");
		});
	};
}
})();