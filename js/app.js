var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: "PeopleController",
            templateUrl: "views/people.html"
        })
        .when('/home', {
            controller: "HomeController",
            templateUrl: "views/home.html"
        })

        .when('/photos/:id', {
            controller: 'PhotoController',
            templateUrl: 'views/photo.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
