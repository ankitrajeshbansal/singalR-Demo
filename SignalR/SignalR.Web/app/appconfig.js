(function () {
    'use strict';
    var app = angular.module('SignalRApp');
    
    var urlPrefix = "http://localhost:63461/api/";
    var config = {
        servicesUrlPrefix: urlPrefix,
        };

    // Make the above config settings available via config.
    app.value('config', config);


})();