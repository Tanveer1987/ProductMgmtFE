

angular.module("App").config(function($routeProvider) {
    console.log('Config Function is running');

    $routeProvider.when('/home', {
        templateUrl : './templates/home/home.html'
    }).when('/about', {
        templateUrl : './templates/about/about.html',
        controller : 'AboutController'
    }).when('/products-list', {
        templateUrl : './templates/products/products-list/products-list.html',
        controller : 'ProductsListController'
    }).when('/products-add', {
        templateUrl : './templates/products/products-add/products-add.html',
        controller : 'ProductsAddController'
    }).when('/category-list', {
        templateUrl : './templates/category/category-list/category-list.html',
        controller : 'CategoryListController'
    }).when('/category-add', {
        templateUrl : './templates/category/category-add/category-add.html',
        controller : 'CategoryAddController'
    });
});