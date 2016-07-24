(function() {
  'use strict';

  angular
    .module('birthdayTrackerSampleApp')
    .controller('AddBirthdayController', AddBirthdayController);

  /** @ngInject */
  function AddBirthdayController(birthdayTrackerService, $timeout) {
    var vm = this;

    vm.showAlert = false;

    vm.submit = function() {
      birthdayTrackerService.addBirthday(vm.name, vm.birthdate);
      vm.clearForm();
      vm.showBriefSuccessMessage();
    };

    vm.clearForm = function() {
      vm.name = '';
      vm.birthdate = '';
    };

    vm.showBriefSuccessMessage = function() {
      vm.showAlert = true;
      $timeout(function () {
        vm.showAlert = false;
      }, 2000);
    };
  }
})();
