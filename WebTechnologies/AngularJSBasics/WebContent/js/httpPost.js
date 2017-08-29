/**
 * Created by DELL on 8/21/2017.
 */

var app = angular.module("postServiceApp", []);
app.controller("postServiceCtrl", function ($scope, $http) {
    $scope.name = null;
    $scope.age = null;
    $scope.address = null;
    $scope.postdata = function (name, age, address) {
        var data = {
            name: name,
            age: age,
            address: address
        };
        //Call the services
        $http.post('/api/users/post', JSON.stringify(data)).then(function (response) {
            if (response.data)
                $scope.msg = "post Data submitted successfully";
        }, function (response) {
            $scope.msg = "Service Not Exists";
            $scope.statusVal = response.status;
            $scope.stausText = response.statusText;
            $scope.headers = response.headers();
            $scope.config = response.config;
        });
    };
});