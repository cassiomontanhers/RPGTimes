var myApp = angular.module('myApp', ['ngRoute', 'ngAudio']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.service('nameService', function() {
   
    var self = this;
    this.name = 'John Doe';
    
    this.namelength = function() {
      
        return self.name.length;
        
    };
    
});

myApp.controller('mainController', ['$scope', '$log', 'nameService', 'ngAudio', function($scope, $log, nameService, ngAudio) {
    

    $scope.audio = ngAudio.load('sounds/audio.mp3');

    $scope.audio2 = ngAudio.load('sounds/audio2.mp3');
    
    $scope.name = nameService.name;
    
    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });
    
    $log.log(nameService.name);
    $log.log(nameService.namelength());
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {
    
    $scope.num = $routeParams.num || 1;
    
    $scope.name = nameService.name;
    
    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });
    
}]);

