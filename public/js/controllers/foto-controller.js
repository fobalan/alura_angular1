angular.module('Alurapic')
    .controller('FotoController', function ($scope, cadastroDeFoto, recursoFoto, $routeParams) {
        $scope.foto = {};
        $scope.mensagem = '';
        $scope.submeter = function () {
            if ($scope.formulario.$valid) {
                cadastroDeFoto.cadastrar($scope.foto)
                .then(function(dados){
                    $scope.mensagem = dados.mensagem;
                    if(dados.inclusao){
                        $scope.foto = {};
                    }
                })
                .catch(function(dados){
                    $scope.mensagem = dados.mensagem;
                });
            };
        };

        if ($routeParams.fotoId) {
            recursoFoto.get({ fotoId: $routeParams.fotoId }, function(foto) {
                $scope.foto = foto;
            }, function (erro) {
                console.log(error);
            });
        };
    });