angular.module('App').controller('ProductsAddController', ['$scope','$rootScope', 'ProductsService', '$location', function($scope, $rootScope, ProductsService, $location) { 
     $scope.product = {};

     $scope.addProduct = function() {
        ProductsService.postProduct($scope.product).then(function(data) {
            $location.path('/products-list');
        }, function(error) {
            console.log(error);
        });
    }

    
    $scope.updateProduct = function() {
        ProductsService.putProduct($scope.product).then(function(data) {
            $location.path('/products-list');
        }, function(error) {
            console.log(error);
        });
    }

    $scope.onCancel = function() {
        $location.path('/products-list');
    }

    if($rootScope.product) {
        $scope.product = $rootScope.product;
        $rootScope.product = undefined;
    }

}]);