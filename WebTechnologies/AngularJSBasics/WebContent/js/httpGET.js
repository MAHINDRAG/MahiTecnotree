/**
 * Created by DELL on 8/21/2017.
 */

var app = angular.module("myapp", []);
app.controller("myctrl", function ($scope, $http) {
    var config = {
        headers : {'contentType' : 'application/json'}
    };
   $http.get("http://localhost:8097/RESTExamples/rest/customers/100").then(function success(response) {
       console.log("Response:"+response.data);
       alert("HI");
       $scope.msg = "Data Retrieved successfully";
        $scope.myWelcome = response.data;
        $scope.statusVal = response.status;
        $scope.statusText = response.statusText;
        $scope.headers = response.headers();
        $scope.config = response.config;
    }, function error(response) {
       console.log("Response :-"+response.data);
       alert("HI this is error message = "+response.status);
       $scope.statusVal = response.status;
       $scope.statusText = response.statusText;
       $scope.headers = response.headers();
       $scope.config = response.config;
    });
});