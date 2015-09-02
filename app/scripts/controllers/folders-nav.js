'use strict';

/**
 * @ngdoc function
 * @name miniumMailApp.controller:FoldersNavCtrl
 * @description
 * # MailListCtrl
 * Controller of the miniumMailApp
 */
angular.module('miniumMailApp')
  .controller('FoldersNavCtrl', function () {
    this.folders = data.folders;
  });
