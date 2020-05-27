app.factory("loginServices", ['$http', '$location', 'sesionesControl', 'mensajesFlash', 'urls', function($http, $location, sesionesControl, mensajesFlash, urls){
    
    const cacheSession = function (response) {
        sesionesControl.set('usuarioLogin', true);

        let usuario = {
            email: response.data.email,
            token: response.data.sessionTokenBck,
            config: response.config,
            userRole: response.data.userRole
        };

        sesionesControl.setList('usuario',usuario);        
    }

    const unCacheSession = function () {
        sesionesControl.unset("usuarioLogin");
        sesionesControl.unset("usuario");
    }

    return{
        login: function(usuario) {
            let headers = { 'Accept': 'application/json', 'password': usuario.password, 'app': usuario.app };

            return $http({
                url: urls.servidor +'testapis%40tuten.cl',
                method: "PUT",
                headers: headers
            }).then(function (response) {
                mensajesFlash.clear();
                cacheSession(response);
                sesionesControl.unset("mensaje");
                $location.path('/listado');
            }, function error(response) {
                if (response.status==400) {
                    mensajesFlash.show(data.mensaje,"danger");
                }
            });
        },
    }
}]);