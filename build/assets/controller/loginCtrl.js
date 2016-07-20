
angular.module('application')
.controller('loginCtrl', MyController);
MyController.$inject = ['$scope', '$stateParams', '$state', '$controller', 'FoundationApi'];
function MyController($scope, $stateParams, $state, $controller, fa) {
angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));
// Your code...

$('input.formUsername').focus(function() {
    $(".placeLogin").addClass("expand");
});
$('input.formUsername').blur(function() {
    $(".placeLogin").removeClass("expand");
});
$('input.formPassword').focus(function() {
    $(".placeLogin").addClass("expand");
});
$('input.formPassword').blur(function() {
    $(".placeLogin").removeClass("expand");
});
$('input.formReturn').focus(function() {
    $(".placeLogin").addClass("expand");
});
$('input.formReturn').blur(function() {
    $(".placeLogin").removeClass("expand");
});

/*alert("loginCtrl");

$scope.test = function(){ alert("loginCtrl test function"); }
$scope.load = function(){
    debugger
    fa.publish('main-notifications', { title: 'عنوان پیام', content: 'مدل نمایش آلارم سیستم از داخل کنترلر' });
}
$scope.load();*/


}
