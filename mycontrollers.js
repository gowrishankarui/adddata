
var app = angular.module("myapp",['angularUtils.directives.dirPagination']);
app.controller("mycntrl",function($scope,$http) {

$http.get("http://api.nal.usda.gov/ndb/list?format=json&api_key=ytQUheon12DDjs76TqIOKYXomltoqAamMOiQ0tQi")
.success(function(response) {$scope.names = response.list.item;});

 

$scope.addRow = function(){	
          if ($scope.id=="" && $scope.name==""){
          alert("Please eneter name and id");
         } else {	
	$scope.names.push({ 'id': $scope.id, 'name': $scope.name });
        
	$scope.id='';
	$scope.name='';
        
	 }
                          


   };

});

