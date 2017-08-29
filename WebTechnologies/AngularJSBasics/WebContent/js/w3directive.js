/**
 * Created by DELL on 7/23/2017.
 */

var  app = angular.module("myapp",[]);
app.directive("w3TestDirective",function () {
   return{
       restrict : "E",
       template : "<h1>Made by a custom directive</h1>"
   };
});