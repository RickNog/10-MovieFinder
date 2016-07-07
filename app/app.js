(function() {
    'use strict';

    var movieApp = angular.module('app', ['ui.router']);

		movieApp.config(function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/state1');

			$stateProvider
			 //calls state1.html which consists the text entry and first movie result
			.state('state1', {  
			    url: '/state1',
			    templateUrl: 'app/partials/state1.html',
			    controller: "movieController",
			    controllerAs: "vm"
			})

			// second state which consists of details selected movie
			.state('state2', {  
              	url: "/state2/:title",
              	templateUrl: "app/partials/state2.html",
              	controller: "detailController",
              	controllerAs: "vm"

            }); 	// end router
		});  		
})();