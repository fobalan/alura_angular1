angular.module('meusServicos', ['ngResource'])
    .factory('recursoFoto', function ($resource) {
        return $resource('v1/fotos/:fotoId', null, {
            update: {
                method: 'PUT'
            }
        });
    })
    .factory('cadastroDeFoto', function (recursoFoto, $q, $rootScope) {
        var servico = {};

        servico.cadastrar = function (foto) {
            return $q(function (resolve, refuse) {
                if (foto._id) {
                    recursoFoto.update({ fotoId: foto._id }, foto,
                        function () {
                            $rootScope.$broadcast('cadastroDeFoto');
                            resolve({
                                mensagem: 'Foto ' + foto.titulo + ' alterada com sucesso!',
                                inclusao: false
                            });
                        },
                        function (erro) {
                            console.log(erro);
                            refuse({
                                mensagem: 'Foto ' + foto.titulo + 'não foi alterada'
                            });
                        });
                } else {
                    recursoFoto.save(foto,
                        function () {
                            $rootScope.$broadcast('cadastroDeFoto');
                            resolve({
                                mensagem: 'Foto ' + foto.titulo + ' incluida com sucesso!',
                                inclusao: true
                            });
                        },
                        function (erro) {
                            console.log(erro);
                            refuse({
                                mensagem: 'Foto ' + foto.titulo + 'não foi incluida'
                            });
                        });
                }
            });
        };

        return servico;
    });