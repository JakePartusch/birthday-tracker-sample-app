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
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment, $state) {
      var vm = this;
      vm.state = $state;
      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
