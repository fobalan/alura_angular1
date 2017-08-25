angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){

    var ddo = {};

    ddo.restric = "E";

    ddo.scope = {
        titulo: '@'
    };

    ddo.transclude = true;

    ddo.templateUrl = "js/directives/meu-painel.html";
    return ddo;
})
.directive('minhaFoto', function(){

    var ddo = {};

    ddo.restric = "AE";

    ddo.scope = {
        titulo: '@',
        url: '@'
    }

    ddo.templateUrl = "js/directives/minha-foto.html";
    return ddo;
})
.directive('meuBotaoPerigo', function(){

    var ddo = {};

    ddo.restric = 'AE';

    ddo.scope = {
        acao : '&',
        nome : '@'
    }

    ddo.templateUrl = "js/directives/meu-botao-perigo.html"

    return ddo;
})
.directive('meuFocus', function(){

    var ddo = {};

    ddo.restric = 'A';

    ddo.link = function(scope, element){
        scope.$on('cadastroDeFoto', function(){
            element[0].focus();
        });
    }

    return ddo;

});