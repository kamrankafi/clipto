var application = angular.module('application');
application.controller('mainCtrl', mainCtrl);
function mainCtrl($scope) {
    $scope.load = function () {

    }
    $scope.load();
}

application.controller('loginCtrl', panelCtrl);
function loginCtrl($scope) {
    loginCtrl($scope);
};

application.controller('panelCtrl', panelCtrl);
function panelCtrl($scope) {
    _fileUploader();
    panelCtrl($scope);
};

application.controller('videoListCtrl', videoListCtrl);
function videoListCtrl($scope) {
    videoListCtrl($scope);
};

application.controller('sprintCtrl', sprintCtrl);
function sprintCtrl($scope) {
    sprintCtrl($scope);
};

