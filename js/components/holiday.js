angular.module('usholidays').component('holiday', {
  bindings: { holiday: '<' },
  template: '<div layout-margin>' +
            '<h2>{{$ctrl.holiday.name}}</h2>' +
            ' <p>Date: {{$ctrl.holiday.date}}</p>' +
            ' <p>Date Observed: {{$ctrl.holiday.observed}}</p>' +
            ' <p>Public: {{$ctrl.holiday.public}}</p>' +
            '</div>'
});