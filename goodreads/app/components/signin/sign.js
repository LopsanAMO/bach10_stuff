(function(){
    'use strict';

    var signin = {
        controller : signCtrl,
        templateUrl: 'app/components/signin/signin.html',
    };



    function signCtrl() {
        var hola = this;
        hola.name = 'Antonio';
        hola.no = 'no';
    }

    angular
        .module('goodreads')
        .component('signin', signin);
})();
