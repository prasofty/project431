'use strict';

/* Initialize Parse */
Parse.initialize("gluKproWCh1eTnFbhiFtjzNhuOzOZMAZBMXlk7Ci", "VnMpNi4Ei58fuFTkjdxk5jyCpuBpIbLNEaHuUVh8");

angular
    .module('project431', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('root', {
                url: '',
                abstract: true,
                views: {
                    'header': {
                        templateUrl: 'views/header.html',
                        controller: 'headerController'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html'
                    }
                }
            })
            .state('root.home', {
                url: '/',
                views: {
                    'content_body@': {
                        templateUrl: 'views/intro.html'
                    }
                }
            })
            .state('root.dashboard', {
                url: '/dashboard',
                views: {
                    'container@': {
                        templateUrl: 'views/dashboard.html'
                    }
                }
            });
    });