angular.module('App').controller('CategoryAddController', ['$scope','$rootScope', 'CategoryService', '$location', function($scope, $rootScope, CategoryService, $location) { 
    $scope.category = {};

    $scope.addCategory = function() {
        CategoryService.postCategory($scope.category).then(function(data) {
           $location.path('/category-list');
       }, function(error) {
           console.log(error);
       });
   }

   
   $scope.updateCategory = function() {
       CategoryService.putCategory($scope.category).then(function(data) {
           $location.path('/category-list');
       }, function(error) {
           console.log(error);
       });
   }

   $scope.onCancel = function() {
       $location.path('/category-list');
   }

   if($rootScope.category) {
       $scope.category = $rootScope.category;
       $rootScope.category = undefined;
   }

}]);