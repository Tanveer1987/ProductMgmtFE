angular.module('App').controller('ProductsListController', ['$scope', '$rootScope', '$location', 'ProductsService', function($scope, $rootScope, $location, ProductsService) { 
     
    $scope.products = [];


    var initializePage = function() {
        ProductsService.getProducts().then(function(data){
            $scope.products = data;
            console.log($scope.products);
        }, function(error) {
            console.log('error ', error);
        });
    }

    initializePage();
   

    $scope.onEdit = function(product) {
        console.log("Edit ", product);
        $rootScope.product = product;
        $location.path('/products-add');
    }

    $scope.onDelete = function(product) {
        console.log("Delete ", product);   
        ProductsService.deleteProduct(product).then(function(response) {
            console.log("Delete successfully");
            
            initializePage();

        } , function(error) {
            console.log("Not Delete");
        }); 
    }

    $scope.onAdd = function() {
        $location.path('/products-add');
    }
}]);