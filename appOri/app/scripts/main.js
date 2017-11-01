angular.module("ngAudioDemo", ['ngAudio', 'ui.router'])
    .config(function($urlRouterProvider, $stateProvider) {
        // $urlRouterProvider
        $stateProvider
        .state("home", {
            url: "/t",
            templateUrl: "partial/home.html",
            controller: function($scope, ngAudio, songRemember) {
                var url = 'audio/song1.mp3';
                
                if (songRemember[url]) {
                    $scope.audio = songRemember[url];
                } else {
                    $scope.audio = ngAudio.load(url);
                    $scope.audio.volume = 0.8;
                    songRemember[url] = $scope.audio;

                    
                }
            }
        })

        .state('docs', {
            url: "/docs",
            templateUrl: "partial/ngAudioDocs.html",
        })

        .state("audio", {
            url: "/audio",
            templateUrl: "partial/audioFullView.html",

        })

        .state("rpg", {
            url: "/rpg",
            templateUrl: "partial/rpg.html",

        })

        .state("rpgAudioDaLista", {
            url: "/rpgAudioDaLista",
            templateUrl: "partial/rpgAudioDaLista.html",

        })

        .state('audio.detail', {
            url: "/:id",
            templateUrl: "partial/audioEditView.html",
            controller: function($stateParams, $scope, ngAudio,songRemember) {
                var url = $stateParams.id;

                if (songRemember[url]) {
                    $scope.audio = songRemember[url];
                } else {
                    $scope.audio = ngAudio.load(url);
                    $scope.audio.volume = 0.8;
                    songRemember[url] = $scope.audio;
                    $scope.audio.play();                    
                }
            }
        })

        $urlRouterProvider.otherwise('/');

    })
.value("songRemember",{})
    .controller('Demo', function($scope, ngAudio) {
        
/*
        $scope.audios = [
            {audioObj:ngAudio.load('audio/button-1.mp3'),nome:'Botão 1',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/button-2.mp3'),nome:'Botão 2',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/button-3.mp3'),nome:'Botão 3',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/button-4.mp3'),nome:'Botão 4',loopCheck:'false'},

        ];

        $scope.musicas = [
            {audioObj:ngAudio.load('audio/song1.mp3'),nome:'Song 1',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/song2.mp3'),nome:'Song 2',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/song3.mp3'),nome:'Song 3',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/daniel_stern_robot_hitchiker.mp3'),nome:'Daniel Stern Robot Hitchiker',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/audio.mp3'),nome:'Sweet Sacrifice',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/audio2.mp3'),nome:'Farther Away',loopCheck:'false'},
        ];

*/


        var categoria1 = {};
        var categoria2 = {};
        var categoria3 = {};

        /*
        var musica = [
            {audioObj:ngAudio.load('audio/music/song1.mp3'),nome:'Song 1',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/music/song2.mp3'),nome:'Song 2',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/music/song3.mp3'),nome:'Song 3',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/music/daniel_stern_robot_hitchiker.mp3'),nome:'Daniel Stern Robot Hitchiker',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/music/audio.mp3'),nome:'Sweet Sacrifice',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/music/audio2.mp3'),nome:'Farther Away',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/music/creepy-music-box.mp3'),nome:'creepy-music-box',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/music/dark-waltz-music.mp3'),nome:'dark-waltz-music',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/music/horror-music.mp3'),nome:'horror-music',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/music/horror-piano.mp3'),nome:'horror-piano',loopCheck:'false'},
        ];

        var effects = [
            {audioObj:ngAudio.load('audio/effects/button-1.mp3'),nome:'Botão 1',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/effects/button-2.mp3'),nome:'Botão 2',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/effects/button-3.mp3'),nome:'Botão 3',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/effects/button-4.mp3'),nome:'Botão 4',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/effects/cavalry-charge.mp3'),nome:'cavalry-charge',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/effects/horse-gallop.mp3'),nome:'horse-gallop',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/effects/medieval-battle-infantry.mp3'),nome:'medieval-battle-infantry',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/effects/monster-growling.mp3'),nome:'monster-growling',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/effects/scary-cave-monster.mp3'),nome:'scary-cave-monster',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/effects/sword-fight.mp3'),nome:'sword-fight',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/effects/trotting-horse.mp3'),nome:'trotting-horse',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/effects/zombie-group-roaming.mp3'),nome:'zombie-group-roaming',loopCheck:'false'},
        ];

        var ambience = [
            {audioObj:ngAudio.load('audio/ambience/medieval-war-drums.mp3'),nome:'medieval-war-drums',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/ambience/metal-impact.mp3'),nome:'metal-impact',loopCheck:'false'},
            {audioObj:ngAudio.load('audio/ambience/rain.mp3'),nome:'rain',loopCheck:'false'},
        ];
        */

        var musica = [
            {audioObj:null,localizacao:'audio/music/song1.mp3',nome:'Song 1',loopCheck:'false'},
            {audioObj:null,localizacao:'audio/music/song2.mp3',nome:'Song 2',loopCheck:'false'},
            {audioObj:null,localizacao:'audio/music/song3.mp3',nome:'Song 3',loopCheck:'false'},
            {audioObj:null,localizacao:'audio/music/daniel_stern_robot_hitchiker.mp3',nome:'Daniel Stern Robot Hitchiker',loopCheck:'false'},
            {audioObj:null,localizacao:'audio/music/audio.mp3',nome:'Sweet Sacrifice',loopCheck:'false'},
            {audioObj:null,localizacao:'audio/music/audio2.mp3',nome:'Farther Away',loopCheck:'false'},
            {audioObj:null,localizacao:'audio/music/creepy-music-box.mp3',nome:'creepy-music-box',loopCheck:'false'},
            {audioObj:null,localizacao:'audio/music/dark-waltz-music.mp3',nome:'dark-waltz-music',loopCheck:'false'},
            {audioObj:null,localizacao:'audio/music/horror-music.mp3',nome:'horror-music',loopCheck:'false'},
            {audioObj:null,localizacao:'audio/music/horror-piano.mp3',nome:'horror-piano',loopCheck:'false'},
        ];

        var effects = [
            {audioObj:null,localizacao:'audio/effects/button-1.mp3',nome:'Botão 1',loopCheck:'false'},
            {audioObj:null,localizacao:'audio/effects/button-2.mp3',nome:'Botão 2',loopCheck:'false'},
            {audioObj:null,localizacao:'audio/effects/button-3.mp3',nome:'Botão 3',loopCheck:'false'},
            {audioObj:null,localizacao:'audio/effects/button-4.mp3',nome:'Botão 4',loopCheck:'false'},
            {audioObj:null,localizacao:'audio/effects/cavalry-charge.mp3',nome:'cavalry-charge',loopCheck:'false'},
            {audioObj:null,localizacao:'audio/effects/horse-gallop.mp3',nome:'horse-gallop',loopCheck:'false'},
            {audioObj:null,localizacao:'audio/effects/medieval-battle-infantry.mp3',nome:'medieval-battle-infantry',loopCheck:'false'},
            {audioObj:null,localizacao:'audio/effects/monster-growling.mp3',nome:'monster-growling',loopCheck:'false'},
            {audioObj:null,localizacao:'audio/effects/scary-cave-monster.mp3',nome:'scary-cave-monster',loopCheck:'false'},
            {audioObj:null,localizacao:'audio/effects/sword-fight.mp3',nome:'sword-fight',loopCheck:'false'},
            {audioObj:null,localizacao:'audio/effects/trotting-horse.mp3',nome:'trotting-horse',loopCheck:'false'},
            {audioObj:null,localizacao:'audio/effects/zombie-group-roaming.mp3',nome:'zombie-group-roaming',loopCheck:'false'},
        ];

        var ambience = [
            {audioObj:null,localizacao:'audio/ambience/medieval-war-drums.mp3',nome:'medieval-war-drums',loopCheck:'false'},
            {audioObj:null,localizacao:'audio/ambience/metal-impact.mp3',nome:'metal-impact',loopCheck:'false'},
            {audioObj:null,localizacao:'audio/ambience/rain.mp3',nome:'rain',loopCheck:'false'},
        ];




        categoria1['audios'] = musica;
        categoria1['nome'] = 'Musica';
        
        categoria2['audios'] = effects;
        categoria2['nome'] = 'Effects';
        
        categoria3['audios'] = ambience;
        categoria3['nome'] = 'Ambience';

        $scope.categorias = {categoria1, categoria2, categoria3};


/*
        $scope.testeString = function(teste) {
            console.log(ngAudio);
            console.log(teste.musica);
            var clovis = ngAudio.load(teste.musica);
            clovis.play();
        };
*/

        $scope.testeAudio = function(teste) {
            console.log(ngAudio);
            console.log(teste);

            if(teste.audio.audioObj === null){
                teste.audio.audioObj = ngAudio.load(teste.audio.localizacao);
            }

            if(teste.audio.audioObj.paused){
                if(teste.audio.loopCheck === true){
                    teste.audio.audioObj.loop = 666;
                }else{
                    teste.audio.audioObj.loop = 0;
                }
                teste.audio.audioObj.play();
            }else{
                teste.audio.audioObj.stop();
            }


        };

    })
