/**
 * Created by joelmiller on 1/8/16.
 */
var app = angular.module('myApp', []);

app.controller('IndexController', ['$scope', '$http', function($scope, $http){
	$scope.cat = {};
	$scope.cats = [];

	var fetchCats = function(){
		console.log('fetching cats');
		$http.get('/cats').then(function(response){
			console.log('response back', response)
			$scope.cat = {};
			$scope.cats = response.data;
		})
	};

	$scope.addCat = function(){
		console.log('Cat console', $scope.cat);
		$http.post('/add', $scope.cat).then(fetchCats());
	}

}]);