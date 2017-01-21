(function() {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['SignupService','ApiPath'];

    function MyInfoController(SignupService, ApiPath) {
    	var myInfo = this;
    	myInfo.user = SignupService.retrieveSavedUser();
    	myInfo.user_not_registered = false;
    	if (!(myInfo.user.email && myInfo.user.phone)) {
    		myInfo.user_not_registered = true;
    	}
    	else {
    		myInfo.user.favourite_menu.image_url = ApiPath + "/images/" + myInfo.user.favourite_menu.short_name + ".jpg";	
    	}
    };
})();