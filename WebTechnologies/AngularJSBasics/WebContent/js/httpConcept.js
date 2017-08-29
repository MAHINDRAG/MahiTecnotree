/**
 * Created by DELL on 8/21/2017.
 */

var app = angular.module("myapp", []);
app.controller("myctrl", function ($scope, $http) {
    $http.get('http://localhost:8097/RESTExamples/rest/customers/100')
        .then(function (response) {
            $scope.myWelcome = "Data Retrieved successfully";
        });
});