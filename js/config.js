

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
    });
});