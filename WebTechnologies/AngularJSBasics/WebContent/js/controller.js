/**
 * Created by Mahindra on 30-04-2017
 */

angular.module("myapp", [])  
    .controller("HelloController", function($scope) {  
        $scope.helloTo = {};  
        $scope.helloTo.title = "World, AngularJS";  
    } );  