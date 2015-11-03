(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngMaterial'])
	.config(Config);
	// Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider, $httpProvider) {
		$stateProvider.state('Home', {
			url: '/',
			templateUrl: 'views/Home.html'
		}).state('CreatePotluck', {
			url: '/host',
			templateUrl: 'views/CreatePotluck.html'
		}).state('EditPotluck', {
			url: '/editpotluck/:id',
			templateUrl: 'views/EditPotluck.html'
		}).state('ViewPotluck', {
			url: '/viewpotluck/:id',
			templateUrl: 'views/ViewPotluck.html'
		}).state('LogReg', {
			url: '/logreg',
			templateUrl: 'views/LogReg.html'
		}).state('Profile', {
			url: '/profile/:id',
			templateUrl: 'views/Profile.html'
		});
		$urlRouterProvider.otherwise('/');
		$httpProvider.interceptors.push('AuthInterceptor');

	}
})();
