(function() {
  'use strict';

  angular
    .module('birthdayTrackerSampleApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(birthdayTrackerService) {
    var vm = this;

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
      vm.sortByProperty = 'birthdays';
      vm.reverse = true;
    };

    vm.setChronologicalSort = function() {
      vm.sortByProperty = 'order';
      vm.reverse = false;
    };

    vm.isBirthdaySort = function() {
      return vm.sortByProperty === 'birthdays'
    };

    vm.isChronologicalSort = function() {
      return vm.sortByProperty === 'order'
    };

    vm.months = birthdayTrackerService.getMonths();

    vm.init();
  }
})();
