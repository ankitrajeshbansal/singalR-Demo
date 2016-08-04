// Name: BaseCtrl
// Type: Angular Controller
// Purpose: To provide as base controller
(function () {
    'use strict';
    var controllerId = 'BaseCtrl';
    var app = angular.module('SignalRApp');
    app.controller(controllerId, [  baseController]);
    function baseController() {
        var vm = this;       
    }
})();