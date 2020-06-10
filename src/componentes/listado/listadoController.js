// Listado - controlador
app.controller("compListado", ['$scope', 'listaSevice', 'uiGridConstants', function($scope, listaSevice, uiGridConstants){

    var promise = listaSevice.obtieneLista();

    promise.then(function(data) { 
        
        $scope.gridOptions.data = data

        angular.forEach($scope.gridOptions.data, function (row) {
            
            row.getFullName = function () {

                return this.tutenUserClient.firstName +' '+ this.tutenUserClient.lastName
            }
        });

        // $scope.records = data;
        /*$scope.propertyName = $scope.records.bookingId;
        $scope.reverse = true;

        $scope.orderByMe = function(propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
        } */
        }, function(error) {
            $scope.loading = false;
    });

    $scope.gridOptions = {
        enableSorting: true,
        columnDefs: [
            {
                name: 'BookingId',
                field: 'bookingId', 
                enableColumnMenu: false,
                suppressRemoveSort: false,
                enableFiltering: false
                /* sort: {
                    direction: uiGridConstants.ASC
                } */
            },
            {
                name: 'Cliente',
                field: 'getFullName()',
                enableColumnMenu: false,
                enableSorting: false
            },
            {
                name: 'Fecha de Creación',
                field: 'bookingTime',
                enableColumnMenu: false,
                enableSorting: false
            },
            {
                name: 'Dirección',
                field: 'locationId.streetAddress',
                enableColumnMenu: false,
                enableSorting: false
            },
            {
                name: 'Precio',
                field: 'bookingPrice',
                enableColumnMenu: false,
                suppressRemoveSort: false,
                enableFiltering: false
                /* sort: {
                    direction: uiGridConstants.DESC
                } */
            },

        ]
    };
}]);