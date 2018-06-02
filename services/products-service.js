angular.module("App").service("ProductsService", function($http, $q) {
    
        this.getProducts = function() {
            return $q(function(resolve, reject) {
                $http({
                    method : 'GET',
                    url :  "http://localhost:3000/api/products"
                }).then(function(response) {
                    resolve(response.data);
                }, function(error) {
                    reject(error);
                });
            });
        }


        this.postProduct = function(product) {
            return $q(function(resolve, reject) {
                $http({
                    method : 'POST',
                    url :  "http://localhost:3000/api/products",
                    data : product
                }).then(function(response) {
                    resolve(response.data);
                }, function(error) {
                    reject(error);
                });
            });
        }



        this.deleteProduct = function(product) {
            return $q(function(resolve, reject) {
                $http({
                    method : 'DELETE',
                    url :  "http://localhost:3000/api/products/" + product._id
                }).then(function(response) {
                    resolve(response.data);
                }, function(error) {
                    reject(error);
                });
            });
        }



        
        this.putProduct = function(product) {
            return $q(function(resolve, reject) {
                $http({
                    method : 'PUT',
                    url :  "http://localhost:3000/api/products/" + product._id,
                    data : product
                }).then(function(response) {
                    resolve(response.data);
                }, function(error) {
                    reject(error);
                });
            });
        }

});