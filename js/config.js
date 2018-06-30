

angular.module("App").config(function($stateProvider) {
    console.log('Config Function is running');

    $stateProvider.state('home', {
        url : '/home',
        templateUrl : './templates/home/home.html'
    }).state('about', {
        url : '/about',
        templateUrl : './templates/about/about.html',
        controller : 'AboutController'
    }).state('products-list', {
        url : 'products-list',
        templateUrl : './templates/products/products-list/products-list.html',
        controller : 'ProductsListController'
    }).state('products-add', {
        url : 'products-add',
        templateUrl : './templates/products/products-add/products-add.html',
        controller : 'ProductsAddController'
    }).state('category-list', {
        url : 'category-list',
        templateUrl : './templates/category/category-list/category-list.html',
        controller : 'CategoryListController'
    }).state('category-add', {
        url : 'category-add/:id',
        templateUrl : './templates/category/category-add/category-add.html',
        controller : 'CategoryAddController',
        params: {
            id : { squash: true, value: null }
        }
    });
});