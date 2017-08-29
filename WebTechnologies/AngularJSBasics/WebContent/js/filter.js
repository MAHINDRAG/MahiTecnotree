/**
 * Created by DELL on 7/30/2017.
 */


var app = angular.module('myApp', []);
app.controller('personCtrl', function ($scope) {
    $scope.firstName = "Mahindra";
    $scope.lastName = "Gopisetty";
    $scope.fullName = function () {
        return $scope.firstName + " " + $scope.lastName;
    }
});

app.controller("namesCtrl", function ($scope) {
    $scope.names = [
        {name: "Mahindra", country: "India"},
        {name: "Raghava", country: "WestIndies"},
        {name: "Sachin", country: "Nepal"},
        {name: "Afridi", country: "Pakistan"}
    ];
});

app.controller("myfilter", function ($scope) {
    $scope.names = ['Ramesh', 'pooja', 'Mahesh', 'Osama', 'lovely'];
});

app.controller("myinput", function ($scope) {
    $scope.names = ['Ramesh', 'pooja', 'Mahesh', 'Osama', 'lovely'];
});

app.controller("myheader", function ($scope) {
    $scope.names = [
        {name: "Mahindra", country: "India"},
        {name: "Rajesh", country: "Australia"},
        {name: 'Hege', country: 'Norway'},
        {name: 'Joe', country: 'Denmark'},
        {name: 'Gustav', country: 'Sweden'},
        {name: 'Birgit', country: 'Denmark'},
        {name: 'Mary', country: 'England'},
        {name: "karthik", country: "Canada"}
    ];
});

app.controller("costCtrl", function ($scope) {
    $scope.price = "85";
});

app.filter("myfilter", function () {
    var len = 0;
    return function (x) {
      for(var  i=0;x.length;i++){
          len++;
          console.log("Length :"+len);
      }
      return len;
    };
});