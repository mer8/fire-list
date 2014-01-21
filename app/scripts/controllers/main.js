'use strict';

angular.module('fireListApp')
  .controller('MainCtrl', function ($scope, angularFire) {
  	
  	$scope.items = [];


  	var database = new Firebase("https://my-firebase-mer8.firebaseio.com/items");
  	angularFire(database, $scope, "items");



  	$scope.addItem = function() {
	 $scope.items.push({name: $scope.newItem, done: false, date: $scope.date});
  	 $scope.newItem = "";
  	 $scope.date = "";
  		
  	}

  });