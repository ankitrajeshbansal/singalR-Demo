// Name: devtestservice
// Type: Angular Service
// Purpose: To provide all server integration for managing reference data 
// Design: On initialisation this service loads the reference data from the server
// Operation: Insert, Update, Delete, List for DevTest model.
(function () {
    'use strict';
    var serviceId = 'devtestservice';
    angular.module('SignalRApp').factory(serviceId,
        [ '$http', 'config', '$q', devtestservice]);
    function devtestservice($http, config, $q) {
        var baseUrl = config.servicesUrlPrefix;
        var service = {
            list: list,
            submitDetail: submitDetail,
            getById: getById,
            deleteById: deleteById
        };
        return service;

        function list()
        {
            var deferred = $q.defer();
            var wkUrl = baseUrl + 'DevTest';
            return $http({
                url: wkUrl,
                method: 'GET',
                cache: false,
                headers: { 'Content-Type': 'application/json;charset=utf-8' }
            }).then(success, fail)
            function success(resp) {
                return resp.data;
                deferred.resolve();
            }
            function fail(error) {
                deferred.reject();
            }
            return deferred.promise;
        }

        function submitDetail(detail) {
            var deferred = $q.defer();
            var wkUrl = baseUrl + 'DevTest';
            return $http({
                url: wkUrl,
                method: 'POST',
                cache: false,
                data: detail,
                headers: { 'Content-Type': 'application/json' }
            }).then(success, fail)
            function success(resp) {
                return resp.data;
                deferred.resolve();
            }
            function fail(error) {
                deferred.reject();
            }
            return deferred.promise;
        }

        function getById(Id)
        {
            var deferred = $q.defer();
            var wkUrl = baseUrl + 'DevTest/' + Id;
            return $http({
                url: wkUrl,
                method: 'GET',
                cache: false,
                headers: { 'Content-Type': 'application/json' }
            }).then(success, fail)
            function success(resp) {
                return resp.data;
                deferred.resolve();
            }
            function fail(error) {
               deferred.reject();
            }
            return deferred.promise;
        }
        function deleteById(Id) {
            var deferred = $q.defer();
            var wkUrl = baseUrl + 'DevTest/' + Id;
            return $http({
                url: wkUrl,
                method: 'DELETE',
                cache: false,
                headers: { 'Content-Type': 'application/json' }
            }).then(success, fail)
            function success(resp) {
                return resp.data;
                deferred.resolve();
            }
            function fail(error) {
               deferred.reject();
            }
            return deferred.promise;
        }
    }
})();
