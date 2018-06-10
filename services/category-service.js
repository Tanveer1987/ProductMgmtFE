angular.module("App").service("CategoryService", function($http, $q) {

    this.getCategories = function() {
        return $q(function(resolve, reject) {
            $http({
                method : 'GET',
                url :  "http://localhost:3000/api/categories"
            }).then(function(response) {
                resolve(response.data);
            }, function(error) {
                reject(error);
            });
        });
    }


    this.postCategory = function(category) {
        return $q(function(resolve, reject) {
            $http({
                method : 'POST',
                url :  "http://localhost:3000/api/categories",
                data : category
            }).then(function(response) {
                resolve(response.data);
            }, function(error) {
                reject(error);
            });
        });
    }



    this.deleteCategory = function(category) {
        return $q(function(resolve, reject) {
            $http({
                method : 'DELETE',
                url :  "http://localhost:3000/api/categories/" + category._id
            }).then(function(response) {
                resolve(response.data);
            }, function(error) {
                reject(error);
            });
        });
    }



    
    this.putCategory = function(category) {
        return $q(function(resolve, reject) {
            $http({
                method : 'PUT',
                url :  "http://localhost:3000/api/categories/" + category._id,
                data : category
            }).then(function(response) {
                resolve(response.data);
            }, function(error) {
                reject(error);
            });
        });
    }


});

