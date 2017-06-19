angular.module('usholidays').service('HolidayService', function($http) {
  var service = {
    getAllHolidays: function() {
        var testAPIKey = '4bac12e2-37db-4823-b4e4-4814839e4dea';
        var liveAPIKey = '1070be91-d959-4452-a7f1-107fe21fbaf1';
        var year = '2015';
        var country = 'US';
        var url = 'https://holidayapi.com/v1/holidays?key=' + testAPIKey + '&country=' + country + '&year=' + year;
        var holidaysFlattened = [];
        
        return $http.get(url, { cache: true }).then(function(response) {
            //flatten the holidays in each date array
            for(var date in response.data.holidays) {
              for(var holiday in response.data.holidays[date])
                holidaysFlattened.push(response.data.holidays[date][holiday]);
            }
            //returned flattened response data with HTTP status
            return {holidays: holidaysFlattened, status: response.data.status};
        });
    },
    
    getHoliday: function(day) {
      return service.getAllHolidays().then(function(holidays) {
        var holidayList = holidays.holidays;
        
        // Search in the holiday list for the link that was clicked
        for(var prop in holidayList) {
          console.log(holidayList[prop]);
          if(holidayList[prop].name === day) {
            //return the matching object
            return holidayList[prop];
          }
        }
        // return false when no matching holiday is found
        return false;
      });
    }
  }

  return service;
});
