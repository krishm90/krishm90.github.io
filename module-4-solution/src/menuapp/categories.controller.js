(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  var catController = this;
  catController.categories = categories.data;
}

})();