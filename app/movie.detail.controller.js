(function() {
    'use strict';

    angular
        .module('app')
        .controller('detailController', detailController);

    detailController.$inject = ['movieFactory', '$stateParams'];

    /* @ngInject */
    function detailController(movieFactory, $stateParams) {
        var vm = this;
        vm.title = 'detailController';
        vm.findMovie = findMovie;

        findMovie($stateParams.title); 

        function findMovie(moviename){
            if(moviename){
            
        	movieFactory.getMovieDetails(moviename).then(function(result) {
        		vm.names = result.data;
        	})
            } else { debugger;}	

        }
    }
})();