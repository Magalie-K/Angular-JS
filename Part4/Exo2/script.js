var App = angular.module('App', []);
App.controller('voitureCtrl', function($scope, $http) {
  $http.get('voiture.json')
  .then(function(res) {
    $scope.car = res.data;
  });
});
