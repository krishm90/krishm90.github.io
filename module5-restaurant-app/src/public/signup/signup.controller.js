(function() {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['MenuService', 'SignupService'];

    function SignupController(MenuService, SignupService) {
        var reg = this;
        reg.user = {};
        reg.user.invalid_favourite_menu = false;
        reg.user.saved = false;

        reg.submit = function() {
        	resetValues();
            console.log('New user registration invoked');
            var favMenu = reg.user.favourite_menu_number;
            var favMenuItemPromise = MenuService.getMenuItem(favMenu);
            favMenuItemPromise.then(function(response) {
                    reg.user.favourite_menu = response.data;
                    console.log('Menu Item for ', favMenu, ' is', reg.user.favourite_menu);                    
                    SignupService.saveNewUser(reg.user);
                    reg.user.saved = true;
                })
                .catch(function(error) {
                    reg.user.invalid_favourite_menu = true;
                });
        };

        function resetValues() {
			reg.user.saved = false;
			reg.user.invalid_favourite_menu = false;        	
        }
    }
})();
