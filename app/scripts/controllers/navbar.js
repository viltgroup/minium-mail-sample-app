'use strict';

/**
 * @ngdoc function
 * @name miniumMailAppApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the miniumMailAppApp
 */
angular.module('miniumMailApp')
  .controller('NavbarCtrl', function ($modal, loading, configuration) {

    this.openConfigurationWindow = function(mailForm) {
      var modalInstance = $modal.open({
        templateUrl: 'views/configuration-form.html',
        controller: 'ConfigurationFormCtrl',
        controllerAs: 'configFormCtrl',
        resolve: {
          configurationForm: function () {
            return angular.copy(configuration);
          }
        }
      });
      modalInstance.result.then(function (configurationForm) {
        angular.copy(configurationForm, configuration);
      });
    };

  });