(function() {
  'use strict';

  angular
    .module('birthdayTrackerSampleApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
