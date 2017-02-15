	var movie = angular.module('movie', ['ngRoute']);

	// configure our routes
	movie.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/m1', {
				templateUrl : 'pages/m1.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/m2', {
				templateUrl : 'pages/m2.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/m3', {
				templateUrl : 'pages/m3.html',
				controller  : 'contactController'
			});
	});

	
	movie.controller('mainController', function($scope) {

	});

	movie.controller('aboutController', function($scope) {
	
	});

	movie.controller('contactController', function($scope) {
            
	});