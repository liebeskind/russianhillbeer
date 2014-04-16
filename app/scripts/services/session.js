'use strict';

angular.module('russiahillbeersApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
