angular.module('Alurapic').controller('FotosController', function ($scope, recursoFoto) {

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    recursoFoto.query(function (fotos) {
        $scope.fotos = fotos;
    }, function (erro) {
        console.log(error);
    });

    $scope.remover = function (foto) {
        recursoFoto.delete({ fotoId : foto._id }, function () {
            $scope.fotos.splice($scope.fotos.indexOf(foto), 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso';
        }, function (erro) {
            console.log(erro);
            $scope.mensagem = 'Foto ' + foto.titulo + ' não foi removida';
        });
    }

});