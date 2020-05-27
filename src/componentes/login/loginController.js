// Controlador de Acceso
app.controller("loginController", ['$scope', 'loginServices', function ($scope, loginServices) {   
    
    $scope.submitForm = function () {
        $scope.usuario = { email: $scope.email, password: $scope.password, app: $scope.app};
        $scope.loading = true;
        const promise = loginServices.login($scope.usuario);
        
        promise.then(function (data) {
            $scope.loading = false;
        }, function (error) {
            $scope.usuario.password = "";
            $scope.loading = false;
        });
    }

    $scope.logout = function() {
        loginServices.logout();
    }

}]);
