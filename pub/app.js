var app = angular.module('capp', []);

app.controller("ChallengeController",
  function ($scope, $http) {
	  $scope.resultList = [];
      $http.get('/api/challenge')
         .success(function (response) {
			 $scope.zide = {
                  title: "Success"
              };			  
			  $scope.resultlist = response;
         });
		 $scope.add = function(user) {
			 var request_body =  { "name" : user.name, "email" : user.email, "minutes" : user.minutes };
			 $http.post('/api/challenge', request_body)
	              .success(function (response) {
			 $scope.zide = {
                  title: "Success"
              };			  
			  $scope.resultlist = response;
			  user.name = "";
			  user.email = "";
			  user.minutes = "";
            });
		 };
         $scope.delete = function(id) {
			 $http.delete('/api/challenge/' + id)
			    .success(function (response) {
			      $scope.resultlist = response;
            });
		 };
 });
 
