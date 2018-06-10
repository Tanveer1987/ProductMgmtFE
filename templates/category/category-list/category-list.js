angular.module('App').controller('CategoryListController', ['$scope', '$rootScope', '$location', 'CategoryService', function($scope, $rootScope, $location, CategoryService) { 
    
   $scope.categories = [];


   var initializePage = function() {
       CategoryService.getCategories().then(function(data){
           $scope.categories = data;
           console.log($scope.categories);
       }, function(error) {
           console.log('error ', error);
       });
   }

   initializePage();
  

   $scope.onEdit = function(category) {
       $rootScope.category = category;
       $location.path('/category-add');
   }

   $scope.onDelete = function(category) {
       console.log("Delete ", category);   
       CategoryService.deleteCategory(category).then(function(response) {
           console.log("Delete successfully");
           
           initializePage();

       } , function(error) {
           console.log("Not Delete");
       }); 
   }

   $scope.onAdd = function() {
       $location.path('/category-add');
   }
}]);