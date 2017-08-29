/**
 * Created by DELL on 8/27/2017.
 */

var app = angular.module("serviceapp", []);
app.service("angularServices", function ($http) {
    this.squareOfNumber = function (x) {
        return x * x;
    }
});

app.controller("angularController", function ($scope, angularServices) {
    $scope.getResult = angularServices.squareOfNumber(10);
});