var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: "HomeController",
            templateUrl: "views/home.html"
        })
        .when('/people', {
            controller: "PeopleController",
            templateUrl: "views/people.html"
        })
        .when('/photos/:id', {
            controller: 'PhotoController',
            templateUrl: 'views/photo.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
