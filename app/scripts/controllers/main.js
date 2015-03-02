'use strict';

/**
 * @ngdoc function
 * @name recognitionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recognitionApp
 */
angular.module('recognitionApp')
  .controller('MainCtrl', function ($scope, $timeout, GetAssociateService,$rootScope) {

    GetAssociateService.getAssociates('hof').then(function (data) {
      $scope.associates = data.ConventionWallofFame.Associate.slice(1,200);

      $timeout(function(){
        new AnimOnScroll(document.getElementById('grid'), {
          minDuration: 0.4,
          maxDuration: 0.7,
          viewportFactor: 0.2
        });
      },3000);

      console.log("after data loaded",$scope.associates);


    });
  console.log('before data loaded')
  });
