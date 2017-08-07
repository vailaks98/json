var app = angular.module('myapp', [

  'ngResource',
  'ngRoute',
  'myapp.view1'
]);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({
    redirectTo: '/view1'
  });
}]);
