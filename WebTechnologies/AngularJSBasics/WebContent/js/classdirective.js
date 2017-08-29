/**
 * Created by DELL on 7/23/2017.
 */

var  app = angular.module("myapp",[]);
app.directive("w3TestDirective",function () {
    return {
        restrict: "M",
        replace : true,
        template: "<h1>This is class custom directive</h1>"
    };
});