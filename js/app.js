

// ngModule.controller('holidayController', function($scope, $http) {
//     var testAPIKey = '4bac12e2-37db-4823-b4e4-4814839e4dea';
//     var liveAPIKey = '1070be91-d959-4452-a7f1-107fe21fbaf1';
//     var year = '2015';
//     var country = 'US';
//     var url = 'https://holidayapi.com/v1/holidays?key=' + testAPIKey + '&country=' + country + '&year=' + year;

//     $http.get(url)
//     .then(function success(response) {
//         $scope.myHolidays = response.data;
//     }, function error(response) {
//         $scope.myHolidays = "Oh, no! Something went wrong. Please alert me @raycjon";
//     });
// });

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
            name: 'holidays.holiday',
            url: '/{holidaySlug}',
            component: 'holiday',
            resolve: {
                holiday: function(holidays, $stateParams) {
                    // console.log(holidays.holidays["2015-01-01"][0].name);
                    for (let key in holidays.holidays) {
                        if (holidays.holidays.hasOwnProperty(key)) {
                            
                        }
                    }
                    return holidays.find(function(holiday) {
                        console.log(holiday);
                        return holiday.name === $stateParamas.holidaySlug;
                    });
                }
            }
        }
    ]

    states.forEach(function(state) {
        $stateProvider.state(state);
    });
});