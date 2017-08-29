/**
 * Created by Mahindra on 18-04-2017
 */

var mainApp = angular.module("mainApp", []);

mainApp.controller('studentController', function($scope) {
	$scope.student = {
			firstName: "Mahesh",
			lastName: "Parashar",

			fullName: function() {
				var studentObject;
				studentObject = $scope.student;
				return studentObject.firstName + " " + studentObject.lastName;
			}
	};
});