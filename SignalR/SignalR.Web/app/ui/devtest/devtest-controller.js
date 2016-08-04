// Name: DevTestCtrl
// Type: Angular Controller
// Purpose: To provide as controller of devTest
// Operation: Insert, Update, Delete, List for DevTest model.
(function () {
    'use strict';
    var controllerId = 'DevTestCtrl';
    var app = angular.module('SignalRApp');
    app.controller(controllerId, ['devtestservice', devtestController]);
    function devtestController(devtestservice) {
        var vm = this;

        //define object of SignalR 
        var signalrHub = $.connection.signalRHub;

        //initlize controller
        vm.initlize = function () {           

            signalrHub.client.refreshList = function (isRefreshed) {
                vm.listAll();
            };

            //Start SignalR Hub
            $.connection.hub.start();

            vm.listAll();            
        };

        // Add or edit operations 
        vm.submit = function (devtestForm) {
            if (devtestForm.$valid) {
                devtestservice.submitDetail(vm.devtest).then(function (nestResp) {
                    if (nestResp) {
                        vm.devtest = vm.NewDevtest();
                        bootbox.alert('Data save successfully!');
                        $('#myModal .close').click();
                        vm.RefreshHub();
                    }
                    else {
                        bootbox.alert('Something went wrong. Please try again.');
                    }
                }, function (resp) {
                    bootbox.alert('Something went wrong. Please try again.');
                });
            }
        };
    
        // List 
        vm.listAll = function () {
            devtestservice.list().then(function (resp) {
                vm.devtestList = resp;
            });
        };

        // Edit modal popup open
        vm.edit = function (id)
        {
            devtestservice.getById(id).then(function (resp) {
                if (resp != null) {
                    if (resp.Date != null){
                        resp.Date = ToShortDate(new Date(resp.Date));
                    }
                    vm.devtest = resp;
                }
                else {
                    bootbox.alert('Something went wrong. Please try again.');
                }
            }, function (resp) {
                bootbox.alert('Something went wrong. Please try again.');
            });
        };

        //Delete
        vm.delete = function (id) {
            bootbox.confirm('do you confirm to delete this record?', function (result) {
                if (result) {
                    devtestservice.deleteById(id).then(function (resp) {
                        if (resp) {
                            bootbox.alert('Record deleted successfully!');
                            vm.RefreshHub();
                        }
                        else {
                            bootbox.alert('Something went wrong. Please try again.');
                        }
                    }, function (resp) {
                        bootbox.alert('Something went wrong. Please try again.');
                    });
                }
            });
        };

        // Send notification to the server
        vm.RefreshHub = function ()
        {
            signalrHub.server.send(true);
        }

        // Get new refrence or DevTest object
        vm.NewDevtest = function () {
            return {
                Id:0,
                CampaignName: '',
                Date: null,
                Clicks: null,
                Conversions: null,
                Impressions: null,
                AffiliateName: ''
            };
        };

        vm.devtest = vm.NewDevtest();

        vm.initlize();
    }
})();