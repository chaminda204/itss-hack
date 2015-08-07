'use strict';

/* Services */

var providerServices = angular.module('providerServices', ['ngResource']);

providerServices.factory('ProviderSearch', ['$resource',
  function($resource){
    return $resource('http://localhost.:8080/providers', {}, {
      query: {method:'POST', isArray:true}
    });
  }]);
