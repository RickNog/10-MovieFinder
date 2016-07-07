(function() {
    'use strict';

    angular
        .module('app')
        .controller('movieController', movieController);

    movieController.$inject = ['movieFactory'];

    /* @ngInject */
    function movieController(movieFactory) {
        var vm = this;
        vm.title = 'movieController';
        vm.findMovie = findMovie;

        activate();

        function activate() {
            findMovie();
        }

        //reads from factory
        function findMovie(moviename){       
            movieFactory.getMovieInfo(moviename).then(function(result) {
                vm.names = result.data;
                vm.search = vm.names.Title; 
            })  

        }
    }
})();