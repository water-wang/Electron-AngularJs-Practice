angular.module('app')
    .service('DynamicService', ['Promise', 'HttpGet', function (Promise, HttpGet) {
        return {
            GetTradeVolumn: function (params) {
                return Promise(function (defer) {
                    if (params) {
                        HttpGet('/User', { region: params.region, bizLine: params.bizLine }, defer);
                    }
                });
            }
        }
    }]);