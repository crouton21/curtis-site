var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ngMaterial']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  console.log('myApp -- config')

  $routeProvider
    .when('/', {
      redirectTo: '/home',
    })
    .when('/home', {
      templateUrl:'/views/home.html',
      controller: 'HomeController as Ctrl',
    })
    .when('/portfolio', {
      templateUrl:'/views/portfolio.html',
      controller: 'PortfolioController as Ctrl',
    })
    .when('/cv', {
      templateUrl:'/views/cv.html',
      controller: 'CvController as Ctrl',
    })
    .when('/freelance', {
      templateUrl:'/views/freelance.html',
      controller: 'FreelanceController as Ctrl',
    })
    .when('/fun', {
      templateUrl:'/views/fun.html',
      controller: 'FunController as Ctrl',
    })
    .otherwise({
      template: '<h1>404</h1>'
    });
}]);
