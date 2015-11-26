angular.module('project431')
    .controller('sessionController', function($scope, $uibModal, $modalInstance) {

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.sessionModal = function(template) {
            console.log(template)
            var sessionModalInstance = $uibModal.open({
                animation: true,
                templateUrl: template,
                controller: 'sessionController'
            });
        };

        $scope.signIn = function() {
            var signInModalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/sign_in.html',
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

        $scope.forgetPassword = function () {
            var forgetPasswordModalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/forget_password.html',
                controller: 'sessionController'
            });
        };
    });
