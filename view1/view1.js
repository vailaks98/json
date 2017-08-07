(function() {
  var app = angular.module('myapp.view1', ['ngRoute']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/code.html',
      controller: 'View1Ctrl'
    });
  }]);

  app.controller('View1Ctrl', function($scope, $http) {
    $http.get("https://api.myjson.com/bins/1fgfb3")
      .then(function(response) {
        $scope.names = response.data;
      });
  });
})();
