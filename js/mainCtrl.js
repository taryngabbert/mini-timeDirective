angular.module("timeApp")
.controller("mainCtrl", function($scope) {

var personsName= prompt("What is your name?","I have no name")
$scope.name = "Hello, "+ personsName+"!";
















})
