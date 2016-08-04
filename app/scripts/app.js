var _templateBase = '../app/views/pages';

angular.module('app', [
    'ui.router',
    'ngMaterial',
    'ngAnimate'
])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/dashboard');

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: _templateBase + '/dashboard.html',
                controller: 'dashboardCtrl'
            })
            .state('dynamic', {
                url: '/dynamic',
                templateUrl: _templateBase + '/dynamicChart.html',
                controller: 'dynamicCtrl'
            })
            .state('static', {
                url: '/static',
                templateUrl: _templateBase + '/staticChart.html',
                controller: 'staticCtrl'
            })
            .state('monitor', {
                url: '/monitor',
                templateUrl: _templateBase + '/monitor.html',
                controller: 'monitorCtrl'
            });
    }]);