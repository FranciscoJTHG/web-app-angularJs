app.controller('contPrincipal', ['$rootScope', '$scope', 'sesionesControl', 'mensajesFlash', function ($rootScope, $scope, sesionesControl, mensajesFlash) {
    $rootScope.alerts = [];
    $scope.nombre = "";
    const usuarioInfo = sesionesControl.getList("usuario");
    if ( usuarioInfo != null ) {
        $scope.nombre = usuarioInfo.nombre;
    }

    $scope.inf = "";

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
        sesionesControl.unset("mensaje");
    };

    $scope.volver = function() {
        window.history.back();
    }
}]);

// controlador para la navegacion
app.controller('menuControlador', ['$scope', '$location', function ($scope, $location) {  
    $scope.navClass = function (page, isParent) {    

        const currentRoute = $location.path().substring(1) || 'home';

        if(isParent){        
            return currentRoute.indexOf(page) != -1 ? 'active' : '';
        }else{
            if(currentRoute.indexOf(page) != -1){
                return 'active'
            }else{
                return (currentRoute.indexOf(page.substring(0,page.length-1)) || currentRoute.indexOf(page.substring(0,page.length-2))) != -1 ? 'active' : ''; 
            }
        }  
    };

    $scope.expand = function (page) {
        const currentRoute = $location.path().substring(1) || 'home';
        const expandeStyle = currentRoute.indexOf(page) != -1 ? 'block' : 'hidden';
        return expandeStyle;
    };   
}]);

