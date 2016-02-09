var app = angular.module('pinterestApp', ['ngRoute']);
	app.config(function ($routeProvider) {
	    $routeProvider
	      .when('/', {
	        templateUrl: 'partials/main.html',
	        controller: 'MainPageCtrl',
	        controllerAs: 'main'
	      })
	    .otherwise({
        redirectTo: '/'
    });
});