angular.module('App').controller('CategoryAddController', ['$scope','$rootScope', 'CategoryService', '$state', '$stateParams', function($scope, $rootScope, CategoryService, $state, $stateParams) { 
    $scope.category = {};

    $scope.addCategory = function() {
        CategoryService.postCategory($scope.category).then(function(data) {
           $state.go('category-list');
       }, function(error) {
           console.log(error);
       });
   }

   
   $scope.updateCategory = function() {
       CategoryService.putCategory($scope.category).then(function(data) {
           $state.go('category-list');
       }, function(error) {
           console.log(error);
       });
   }

   $scope.onCancel = function() {
       $state.go('category-list');
   }


   var populatePage = function(id) {
        CategoryService.getCategory(id).then(function(data){
            console.log(data);
            $scope.category = angular.copy(data);
        }, function(error){
            console.log(error);
        });

   }

    
   console.log($stateParams);

   if($stateParams && $stateParams.id) {
       console.log("You came to edit page")
       populatePage($stateParams.id);
   } else {
       console.log("You came to add page")
   }

}]);