(function() {
    "use strict";

    angular.module('common')
        .service('SignupService', SignupService);

	function SignupService() {
		var service = this;
		service.savedUser = [];

		service.saveNewUser = function(newUserDetails) {
			service.savedUser = newUserDetails;
		};

		service.retrieveSavedUser = function () {
			return service.savedUser;
		};
	}
})(); 