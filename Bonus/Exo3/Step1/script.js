var ngApp = angular.module('appForm',[]);
ngApp.controller('ctrlForm',['$scope', function($scope){

$scope.clic = function (){
  $scope.nom = $scope.name;
};



}]);
