angular.module('usholidays').component('holiday', {
  bindings: { holiday: '<' },
  template: '<h3>{{$ctrl.holiday.name}}</h3>' +
            ' <p>Date: {{$ctrl.holiday.date}}</p>' +
            ' <p>Date Observed: {{$ctrl.holiday.Observed}}</p>' +
            ' <p>Public: {{$ctrl.holiday.public}}</p>'  
});