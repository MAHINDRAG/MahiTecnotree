/**
 * Created by DELL on 7/23/2017.
 */

var app = angular.module('myapp', []);
app.controller('mycontroller', function ($scope) {
    $scope.firstName = "Mahindra";
    $scope.lastName = "Gopisetty";
    $scope.fullName = function () {
        return $scope.firstName + " " + $scope.lastName;
    };
});