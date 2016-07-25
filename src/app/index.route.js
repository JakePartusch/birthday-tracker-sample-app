(function() {
  'use strict';

  angular
    .module('birthdayTrackerSampleApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('birthdays', {
        url: '/',
        templateUrl: 'app/birthdays/birthdays.html',
        controller: 'BirthdaysController',
        controllerAs: 'birthdays'
      })
      .state('addBirthday', {
        url: '/addBirthday',
        templateUrl: 'app/addBirthday/addBirthday.html',
        controller: 'AddBirthdayController',
        controllerAs: 'addBirthday'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
