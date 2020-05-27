// control de rutas
app.config(['$locationProvider','$routeProvider', function ($locationProvider, $routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "componentes/login/login.tmpl.html", 
            controller: "contPrincipal"
        })
        .when("/login", {
            templateUrl: "componentes/login/login.tmpl.html", 
            controller: "contPrincipal"
        })
        .when("/listado", {
            templateUrl: 'componentes/listado/listado.tmpl.html',
            controller: 'compListado'
        })
        .when("/404", {
            templateUrl: "componentes/noFound/noFound.tmpl.html", 
            controller: "controladorPrincipal"
        })
        .otherwise({
            redirectTo: '/404'
        });
}]);