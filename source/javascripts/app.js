'use strict';

/* Initialize Parse */
Parse.initialize("gluKproWCh1eTnFbhiFtjzNhuOzOZMAZBMXlk7Ci", "VnMpNi4Ei58fuFTkjdxk5jyCpuBpIbLNEaHuUVh8");

angular
    .module('project431', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.when('/dashboard', '/dashboard/overview');
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('intro', {
                url: '',
                templateUrl: 'views/intro.html'
            });
    });



