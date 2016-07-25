(function() {
  'use strict';

  angular
    .module('birthdayTrackerSampleApp')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
