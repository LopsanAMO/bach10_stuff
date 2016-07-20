(function(){
    'use strict';

    var registro = {
        controller: regisCtrl,
        templateUrl: 'app/components/registro/registro.html',
    };

    function regisCtrl(){
        var hola = this;
        hola.name= 'perro';
    }

    angular
        .module('goodreads')
        .component('registro', registro);
})();
