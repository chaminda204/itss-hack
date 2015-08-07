'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $routeParams, ProviderSearch) {
    $scope.searchRequest = {};
    $scope.providerTypes = ['Attendant Care', 'House Hold', 'Accommodation', 'Physio'];
    $scope.distances = [10, 20, 30, 40, 50, 60 ,70, 80, 90, 100];
    $scope.searchResults = [];
    $scope.map = { center: { latitude: -37.4713077, longitude: 144.7851531 }, zoom: 8 };

    $scope.search = function() {

        console.log($scope.searchRequest);
        $scope.searchResults = ProviderSearch.query($scope.searchRequest);
        console.log($scope.searchResults);
    };
});