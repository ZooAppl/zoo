angular.module('starter.controllers', [])


.controller('MapCtrl', function($scope) {})

.controller('AnimalsCtrl', function($scope, Animals) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.animals = Animals.all();
})

.controller('AnimalDetailCtrl', function($scope, $stateParams, Animals, Kids) {
  $scope.animal = Animals.get($stateParams.animalId);
  $scope.kids = !Kids.get();
})

.controller('SettingsCtrl', function($scope, Kids) {
  $scope.kids = true;
  $scope.notifications = true;
  $scope.toggleValue = function(){
    Kids.set($scope.kids);
    $scope.kids = !$scope.kids;
    console.log(Kids.get());
  };    
})
.controller('QRcodeCtrl', function($scope, Animals){})
;
