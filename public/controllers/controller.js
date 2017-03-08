var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    $http.get("/contactlist").then(function (success){
    	$scope.contactList = success.data;
    },function (error){

   });
    
}]);