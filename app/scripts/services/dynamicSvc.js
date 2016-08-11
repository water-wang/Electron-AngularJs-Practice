angular.module('app')
    .service('DynamicService', ['Promise', 'HttpGet', function (Promise, HttpGet) {
        return {
            GetTradeVolumn: function (params) {
                return Promise(function (defer) {
                    if (params) {
                        HttpGet('http://10.61.131.220:8080/tradeAPI', params, defer);
                    }
                });
            }
        }
    }]);
