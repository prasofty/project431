angular.module('project431')
    .controller('headerController', function($scope, $state, $uibModal, $log) {
        $scope.$state = $state;

        $scope.sessionModal = function(template) {
            console.log(template)
            var sessionModalInstance = $uibModal.open({
                animation: true,
                templateUrl: template,
                controller: 'sessionController'
            });
        };

        /*$scope.signInModal = function() {
            var signInModalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/session_modal.html',
                controller: 'sessionController'
            });
        };

        $scope.signUpModal = function() {
            var signUpModalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/sign_up.html',
                controller: 'sessionController'
            });
        };

        $scope.forgetPasswordModal = function () {
            var forgetPasswordModalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/forget_password.html',
                controller: 'sessionController'
            });
        };*/

    });
