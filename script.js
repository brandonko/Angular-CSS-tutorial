var app = angular.module('myApp', []);
var btn = document.getElementById("button1");
var count = 0;

//angular
app.controller('myCtrl', function($scope) {
	$scope.lastName= "lastName";
	$scope.variable1= "variable one"
	$scope.count = 0;
});

//js dom
btn.addEventListener("click", function() {
	count++;
	console.log(count);
});

angular.bootstrap(document.getElementById("module2", [""]));