(function() {
    'use strict';

    angular
        .module('app')
        .factory('movieFactory', movieFactory);

    movieFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function movieFactory($http, $q) {
        var service = {
            getMovieInfo: getMovieInfo,
            getMovieDetails: getMovieDetails
        };
        return service;
        // function for main controller
        function getMovieInfo(moviename) {   
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/',
                params: {
                    s: moviename
                }
                
            })                  
                .then(function(response) {
                    
                    defer.resolve(response);    
                    
                },
                function(error){
                    defer.reject(error);
                }); return defer.promise; 
        }

        // function for detail page
        function getMovieDetails(moviename) {  
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/',
                params: {
                    t: moviename
                }
                
            })  
                .then(function(response) {
                    
                    defer.resolve(response);    
                    
                },
                function(error){
                    defer.reject(error);
                }); return defer.promise; 
        }

    }
})();