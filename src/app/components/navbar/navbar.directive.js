(function() {
  'use strict';

  angular
    .module('birthdayTrackerSampleApp')
    .directive('birthdayNavbar', birthdayNavbar);

  /** @ngInject */
  function birthdayNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {},
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($state) {
      var vm = this;
      vm.state = $state;
    }
  }

})();
