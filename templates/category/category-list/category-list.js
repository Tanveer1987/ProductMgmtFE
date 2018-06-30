angular.module('App').controller('CategoryListController', ['$scope', '$rootScope', '$state', 'CategoryService', function($scope, $rootScope, $state, CategoryService) { 
    
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
       $state.go('category-add', { id : category._id});
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
       $state.go('category-add');
   }
}]);