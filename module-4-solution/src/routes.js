(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/menuapp/templates/home.template.html'
            })

        .state('categories', {
            url: '/categories',
            templateUrl: 'src/menuapp/categories.html',
            controller: 'CategoriesController as catController',
            resolve: {
            	categories : ['MenuDataService', function(MenuDataService) {
            		return MenuDataService.getAllCategories();
            	}]
            }
        })

        .state('categories.items', {
            url: '/items/{categoryName}',
            templateUrl: 'src/menuapp/items.html',
            controller: "ItemsController as iController",
            resolve: {
            	items : ['MenuDataService', '$stateParams', function(MenuDataService,$stateParams) {
            		return MenuDataService.getItemsForCategory($stateParams.categoryName);
            	}]
            }
        });
    };

})();
