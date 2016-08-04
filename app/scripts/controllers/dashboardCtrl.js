(function () {
    'use strict';
    
    angular.module('app')
        .controller('dashboardCtrl', ['dashboardSvc', '$scope', function (customerService, $scope) {
            $scope.Title = 'Angular Customer';
        }]);
})();


