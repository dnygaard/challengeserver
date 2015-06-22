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
			 var request_body =  { "navn" : user.navn, "epost" : user.epost, "tid" : user.tid };
			 $http.post('/api/challenge', request_body)
	              .success(function (response) {
			 $scope.zide = {
                  title: "Success"
              };			  
			  $scope.resultlist = response;
			  user.navn = "";
			  user.epost = "";
			  user.tid = "";
         });
		 };
  
 });
 
