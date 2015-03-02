'use strict';

/**
 * @ngdoc service
 * @name recognitionApp.GetAssociateService
 * @description
 * # GetAssociateService
 * Service in the recognitionApp.
 */
angular.module('recognitionApp')
  .service('GetAssociateService', function ($cacheFactory, $http,$rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getAssociates = function (fileName) {
      var cache = $cacheFactory('associateCache');
      var data = cache.get('associates');
      console.log('data from cache is:',data);
      if (!data) {
        return $http({
          method: 'GET',
          url: "data/" + fileName + ".json",
          headers: {'Content-Type': 'application/json'},
          cache: true
        })
          .then(function (response) {
            cache.put('associates',response.data);
            console.log(cache);
            $rootScope.$emit('associate data ready');
            console.log('emit happened');
            return response.data;
          }, function (result) {
            console.log("The request failed: " + result);
          });

      }
    }
  });
