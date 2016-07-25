(function() {
  'use strict';

  angular
    .module('birthdayTrackerSampleApp')
    .factory('birthdayTrackerService', birthdayTrackerService);

  /** @ngInject */
  function birthdayTrackerService() {
    var self = this;
    self.months = initialState();
    self.months = initializeTotalBirthdays();

    var service = {
      getMonths: getMonths,
      addBirthday: addBirthday
    };

    return service;

    /*
      Return the array of months.
     */
    function getMonths() {
      return self.months;
    }

    /*
      Name is required on the form, but ignored here since
      the requirements only pertain to the number of birthdays
      in a given month.
     */
    function addBirthday(name, date) {
      var month = self.months[date.getMonth()];
      month.birthdays++;
    }

    function initializeTotalBirthdays() {
      return self.months.map(function(month) {
        month.birthdays = 0;
        return month;
      });
    }

    function initialState() {
      return [{
        name: "January"
      }, {
        name: "February"
      }, {
        name: "March"
      }, {
        name: "April"
      }, {
        name: "May"
      }, {
        name: "June"
      }, {
        name: "July"
      }, {
        name: "August"
      }, {
        name: "September"
      }, {
        name: "October"
      }, {
        name: "November"
      }, {
        name: "December"
      }]
    }
  }
})();
