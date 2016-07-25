(function() {
  'use strict';

  angular
    .module('birthdayTrackerSampleApp')
    .controller('AddBirthdayController', AddBirthdayController);

  /** @ngInject */
  function AddBirthdayController(birthdayTrackerService, $timeout) {
    var vm = this;

    vm.init = function() {
      vm.showAlert = false;
      vm.dateOptions = {
        dateDisabled: false
      };
      vm.format = 'dd-MM-yyyy';
      vm.popup = {
        opened: false
      };
    };

    vm.openCalendar = function() {
      vm.popup.opened = true;
    };

    vm.submit = function() {
      birthdayTrackerService.addBirthday(vm.name, vm.birthdate);
      vm.clearForm();
      vm.showBriefSuccessMessage();
    };

    vm.clearForm = function() {
      vm.name = '';
      vm.birthdate = '';
    };

    /* Show the alert for 2 seconds, then remove it*/
    vm.showBriefSuccessMessage = function() {
      vm.showAlert = true;
      $timeout(function () {
        vm.showAlert = false;
      }, 2000);
    };

    vm.init();
  }
})();
