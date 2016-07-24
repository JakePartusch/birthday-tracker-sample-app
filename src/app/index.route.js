(function() {
  'use strict';

  angular
    .module('birthdayTrackerSampleApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
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
