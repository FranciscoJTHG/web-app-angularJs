// Listado - servicio
app.factory("listaSevice", ['$http', 'sesionesControl', 'urls', function($http, sesionesControl, urls) {

    const promise = sesionesControl.getList('usuario');
    let email = promise.email;
    let token = promise.token;
    let app = promise.config.headers.app;
    let headers = { 'Content-Type': 'application/json', 'adminemail': email, 'token': token, 'app': app };
    
    return{
        obtieneLista : function() {
            return $http({
                url: urls.servidor +'contacto%40tuten.cl/bookings?current=true',
                method: "GET",
                headers: headers
            }).then(function(response){    
                return response.data;
            })
            .catch(function (err) {
                console.log(err);
                throw err;
            });
        }
    }
}]);