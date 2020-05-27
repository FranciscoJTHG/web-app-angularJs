app.controller("logout", ['$scope', '$location', 'sesionesControl', 'mensajesFlash', function ($scope, $location, sesionesControl, mensajesFlash) {

    $scope.logout = function() {
        console.log(sesionesControl);
        // mensajesFlash.show('Hasta Luego',"danger");
        sesionesControl.clear();
        sesionesControl.setList("mensaje", {texto:"Hasta Pronto!", titpo:"success"});
        $location.path("/login");

    };

}]);
