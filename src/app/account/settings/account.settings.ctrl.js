'use strict';

define(['angular', 'ramda'], function (angular, R) {

    return angular
        .module('account.settings.ctrl', [])
        .controller('account.settings.ctrl', ['$scope', function ($scope) {
            $scope.multiply = R.multiply(2);
            $scope.title = 'Settings';
        }]);

});