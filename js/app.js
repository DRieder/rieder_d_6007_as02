// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var starter = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
starter.controller('listController', function($scope, $http){

    var site = "http://www.d-rieder.com/phoneapp";
    var page = "/getChamps.php";
    $http.get(site + page)
    .success(function(response) {$scope.champs = response;});

});
starter.controller('champInfo', function($scope, $http){

    var site = "http://www.d-rieder.com/phoneapp";
    var page = "/champInfo.php";
    $http.get(site + page)
    .success(function(response) {$scope.champs = response;});

});
starter.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'templates/home.html'
  })
  $stateProvider.state('detail', {
    url: '/detail/:champId',
    templateUrl: 'templates/detail.html',
    controller: 'champInfo'

  })
});