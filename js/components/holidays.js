angular.module('usholidays').component('holidays', {
  bindings: { holidays: '<' },
  template: '<mdlist>' +
            '   <md-list-item  ui-sref="holiday({ holidayName: holiday.name})" ng-repeat="holiday in $ctrl.holidays.holidays">' +
            '     <span class="md-list-item-text">' +
            '       {{holiday.name}}' +
            '     </span>' +
            '     <md-divider ng-if="!$last"></md-divider>' +
            '   </md-list-item>' +
            '</mdlist>'
});

