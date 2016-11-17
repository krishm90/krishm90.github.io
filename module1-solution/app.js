var lunchApp = angular.module('lunchApp', []);
lunchApp.controller('lunchController', function($scope) {

	$scope.actionMessage = "";
    $scope.checkIfTooMuch = function() {
        var lunchItems = $scope.items;
        if (lunchItems == "" || lunchItems === undefined) {
            $scope.actionMessage = "Please enter data first";
            $scope.errorExists = true;
        } else {
        	var lunchItemsArray = lunchItems.split(",");
        	var isEmptyItemsPresent = lunchItemsArray.indexOf("") >= 0;
            if (!isEmptyItemsPresent) {
                if (lunchItemsArray.length > 3) {
                    $scope.actionMessage = "Too much!";
                    $scope.errorExists = false;
                } else {
                    $scope.actionMessage = "Enjoy!";
                    $scope.errorExists = false;
                }
            } else {
                $scope.actionMessage = "Please don't enter an empty item";
                $scope.errorExists = true;
            }
        }
    }
});
