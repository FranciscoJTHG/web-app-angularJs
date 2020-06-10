// Controlador de Acceso
app.controller("loginController", ['$scope', '$location', 'loginServices', function ($scope, $location, loginServices) {   
    
    $scope.submitForm = function () {

        let email = $scope.email;
        let password = $scope.password;
        let app = $scope.app;

        $scope.usuario = { email, password, app };

        if ( email == undefined && password == undefined && app == undefined ) {
            $scope.error = 'Los campos del formulario no pueden estar vacios';
            $location.path('/');
        } else {
            const promise = loginServices.login($scope.usuario);
            $scope.loading = true;            
            
            promise.then(function (response) {

                if (response.statusVal == 400) {
                    
                    $scope.error = response.data;
                    $location.path('/');
                    $scope.loading = false;
                } else {
                    
                    $location.path('/listado');
                }
            });
        }    
    }

    $scope.logout = function() {
        loginServices.logout();
    }

}]);
