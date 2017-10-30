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


    $scope.audios = [
        ngAudio.load('sounds/audio.mp3'),
        ngAudio.load('sounds/audio2.mp3'),
    ];

    
    $scope.teste = function(teste) {

        console.log(ngAudio);

        console.log(teste);

        teste.audio.play();

    };

    
    $scope.name = nameService.name;
    
    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });
    
    $log.log(nameService.name);
    $log.log(nameService.namelength());
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', 'ngAudio', function($scope, $log, $routeParams, nameService, ngAudio) {
    
    $scope.num = $routeParams.num || 1;
    
    $scope.name = nameService.name;
    
    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });
    
}]);

