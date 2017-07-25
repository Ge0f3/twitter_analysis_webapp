function sayhello(){
alert("Hi ! hello it worked !!");
}
var myapp=angular.module('mymodule',[]);
myapp.controller('myController',function($scope){
  var employee = {
    firstname : "Geoffrey",
    lastname :"Rathinapandi",
    email : "geo.geofe@gmail.com"
  };
  $scope.employee=employee;
  $scope.message='AngularJs Tutorial !';

});