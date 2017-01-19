(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['items'];
function ItemsController(items) {
  var iController = this;
  iController.items = items.data.menu_items;
  iController.categoryName = items.data.category.name; 
};

})();