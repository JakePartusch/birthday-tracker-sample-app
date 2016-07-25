(function() {
  'use strict';

  angular
    .module('birthdayTrackerSampleApp')
    .controller('BirthdaysController', BirthdaysController);

  /** @ngInject */
  function BirthdaysController(birthdayTrackerService) {
    var vm = this;

    vm.birthdays = 'birthdays';
    vm.order = 'order';

    vm.init = function() {
      vm.setChronologicalSort();
    };

    vm.toggleSort = function () {
      if(vm.isBirthdaySort()) {
        vm.setChronologicalSort();
      } else {
        vm.setBirthdaySort();
      }
    };

    vm.setBirthdaySort = function() {
      vm.sortByProperty = vm.birthdays;
      vm.reverse = true;
    };

    vm.setChronologicalSort = function() {
      vm.sortByProperty = vm.order;
      vm.reverse = false;
    };

    vm.isBirthdaySort = function() {
      return vm.sortByProperty === vm.birthdays
    };

    vm.isChronologicalSort = function() {
      return vm.sortByProperty === vm.order;
    };

    vm.months = birthdayTrackerService.getMonths();

    vm.init();
  }
})();
