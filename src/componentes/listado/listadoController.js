// Listado - controlador
app.controller("compListado", ['$scope', 'listaSevice', function($scope, listaSevice){

    var promise = listaSevice.obtieneLista();
    promise.then(function(data) {
        $scope.records = data;
        $scope.propertyName = $scope.records.bookingId;
        $scope.reverse = true;

        $scope.orderByMe = function(propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
        }
        }, function(error) {
            $scope.loading = false;
    });    
}]);