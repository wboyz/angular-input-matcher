(function() {
    'use strict';

    angular
        .module('wb-matcher')
        .directive('matchTo', matchTo);

    /* @ngInject */
    function matchTo() {
        var directive = {
            require: 'ngModel',
            restrict: 'A',
            scope: {
                otherModelValue: '=matchTo'
            },
            link: linkFunc,
        };

        return directive;

        function linkFunc(scope, el, attr, ngModel) {
            ngModel.$validators.matchTo = function (modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch('otherModelValue', function() {
                ngModel.$validate();
            });
        }
    }
})();
