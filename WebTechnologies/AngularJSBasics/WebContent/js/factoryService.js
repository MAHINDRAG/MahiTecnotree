/**
 * Created by DELL on 8/27/2017.
 */


var app = angular.module("factoryapp", []);
app.factory("myFactory", function () {
    var displayFact;
    var addMSG = function (msg) {
        displayFact = "Hi Guest! Welcome to " + msg;
    }
    return {
        setMSG: function (msg) {
            addMSG(msg);
        },

        getMSG: function () {
            return displayFact;
        }
    };
});

app.service("myservice", function () {
    var displayServ;
    var addMSG = function (msg) {
        displayServ = "Hi Guest ! Welcome to :" + msg;
    }
    this.setMSG = function (msg) {
        addMSG(msg);
    }
    this.getMSG = function () {
        return displayServ;
    }
});

app.controller("factoryController", function ($scope, myFactory, myservice) {
    myFactory.setMSG("Tutlane (with Factory)");
    myservice.setMSG("Tutlane (with Service)");

    $scope.myCollections = [
        myFactory.getMSG(),
        myservice.getMSG()
    ];
});