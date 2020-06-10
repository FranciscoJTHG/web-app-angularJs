(function () {
    'use strict';

    app.factory("loginServices", ['$http', 'sesionesControl', 'urls', function($http, sesionesControl, urls){
        
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
                let statusVal = '';
                let data = '';

                return $http({
                    url: urls.servidor +'testapis%40tuten.cl',
                    method: "PUT",
                    headers: headers
                }).then(function (response) {
                    
                    cacheSession(response);
                    sesionesControl.unset("mensaje");
                    statusVal = response.status;
                    data = response.data;
                    return {statusVal, data};

                });
            },
        }
    }]);
})();