(function() {
  'use strict';

  angular
    .module('birthdayTrackerSampleApp')
    .factory('birthdayTrackerService', birthdayTrackerService);

  /** @ngInject */
  function birthdayTrackerService() {
    var self = this;
    self.birthdays = initialState();

    var service = {
      getMonths: getMonths,
      addBirthday: addBirthday
    };

    return service;

    function initialState() {
      return [{
        name: "January",
        birthdays: 0
      }, {
        name: "February",
        birthdays: 0
      }, {
        name: "March",
        birthdays: 0
      }, {
        name: "April",
        birthdays: 0
      }, {
        name: "May",
        birthdays: 0
      }, {
        name: "June",
        birthdays: 0
      }, {
        name: "July",
        birthdays: 0
      }, {
        name: "August",
        birthdays: 0
      }, {
        name: "September",
        birthdays: 0
      }, {
        name: "October",
        birthdays: 0
      }, {
        name: "November",
        birthdays: 0
      }, {
        name: "December",
        birthdays: 0
      }]
    }

    function getMonths() {
      return self.birthdays;
    }

    function addBirthday(name, date) {
      var month = self.birthdays[date.getMonth()];
      month.birthdays++;
    }

  }
})();
