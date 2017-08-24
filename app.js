var formApp = angular.module('formApp', []);

formApp.controller('mainController', function($scope) {

    $scope.submitForm = function(isValid) {

        if(isValid) {
            alert('Form is great');
        }
    }
});