angular.module('usholidays').component('holidays', {
  bindings: { holidays: '<' },
  
  template: '<h3>US Holidays</h3>' +
            '<ul>' +
            '   <li ng-repeat="holiday in $ctrl.holidays.holidays">' +
            '       <a ui-sref="holiday({ holidayName: holiday[0].name})">' +
            '           {{holiday[0].name}}' +
            '       </a>' +
            '   </li>' +
            '</ul>'
});

