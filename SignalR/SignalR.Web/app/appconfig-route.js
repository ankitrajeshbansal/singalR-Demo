// Name: App Route
// Type: Angular Config
// Purpose: Define angular app
(function () {
    'use strict';
    var app = angular.module('SignalRApp');

    // constant routes for 
    app.constant('routes', getRoutes());

    app.config(['$stateProvider', '$urlRouterProvider', 'routes', routeConfigurator]);
    function routeConfigurator($stateProvider, $urlRouterProvider,  routes) {
        routes.forEach(function (r) {
            $stateProvider.state(r.name, r.stateConfig);
        });
        $urlRouterProvider.when('', '/list');
        $urlRouterProvider.when('#/', '/list');
    }

    function getRoutes() {
        return [
                {
                    name: 'list',
                    stateConfig: {
                        url: '/list',
                        templateUrl: 'app/ui/devtest/devtest-list.html'
                    }
                }
        ];
    }
})();