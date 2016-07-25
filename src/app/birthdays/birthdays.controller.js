(function() {
  'use strict';

  angular
    .module('birthdayTrackerSampleApp')
    .controller('BirthdaysController', BirthdaysController);

  /** @ngInject */
  function BirthdaysController(birthdayTrackerService) {
    var vm = this;

    //Would prefer ES2015 'const' here, but sticking with ES5
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
      //Sort from high to low
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
