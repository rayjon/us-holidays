var ngModule = angular.module('usholidays', ['ngMaterial', 'ui.router']);

// .config 
// Use this method to register work which needs to be performed on module loading.
// https://docs.angularjs.org/guide/providers#provider-recipe
ngModule.config(function($stateProvider) {
    var states = [
        {
            name: 'holidays',
            url: '/holidays',
            component: 'holidays',
            resolve: {
                holidays: function(HolidayService) {
                    return HolidayService.getAllHolidays();
                }
            }
        },
        {
            name: 'holiday',
            url: '/holidays/{holidayName}',
            component: 'holiday',
            resolve: {
                holiday: function(HolidayService, $transition$) {
                    return HolidayService.getHoliday($transition$.params().holidayName);
                }
            }
        }
    ]

    states.forEach(function(state) {
        $stateProvider.state(state);
    });
});