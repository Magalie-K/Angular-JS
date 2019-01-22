var app = angular.module('alertApp', []);
    app.controller('windowController', ['$scope', '$window', function($scope, $window) {
      $scope.message = 'Hey ! Bienvenue !';
      $scope.doMessage = function(message) {
        $window.alert(message);
      };
    }]);
