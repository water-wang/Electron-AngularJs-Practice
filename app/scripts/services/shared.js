var app = angular.module('app');

app.factory('Promise', ['$q', function ($q) {
    return function (handler) {
        var deferred = $q.defer();
        handler(deferred);

        return deferred.promise;
    }
}]);

app.factory('HttpGet', ['$http', function ($http) {
    return function (url, data, defer) {
        $http({
            method: 'GET',
            url: url,
            params: data
        }).then(function (result) {
            defer.resolve(result);
        }, function (response) {
            defer.reject(response.status);
        });
    }
}]);

app.factory('HttpPost', function ($http) {
    return function (url, data, defer) {
        $http({
            method: 'POST',
            url: url,
            data: data
        }).then(function (result) {
            defer.resolve(result);
        }, function (response) {
            defer.reject(response.status);
        });
    }
});