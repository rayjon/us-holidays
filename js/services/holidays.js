angular.module('usholidays').service('HolidayService', function($http) {
  var service = {
    getAllHolidays: function() {
        var testAPIKey = '4bac12e2-37db-4823-b4e4-4814839e4dea';
        var liveAPIKey = '1070be91-d959-4452-a7f1-107fe21fbaf1';
        var year = '2015';
        var country = 'US';
        var url = 'https://holidayapi.com/v1/holidays?key=' + testAPIKey + '&country=' + country + '&year=' + year;
        
        return $http.get(url, { cache: true }).then(function(response) {
            return response.data;
        });
    },
    
    getHoliday: function(day) {    
      return service.getAllHolidays().then(function(holidays) {
        var holidayList = holidays.holidays;
        
        // Search in the holiday list for the link that was clicked
        for(var prop in holidayList) {
            // bypass any native properties of the Object class to speed things up
            if(holidayList.hasOwnProperty(prop)) {
                // There may be multiple holidays on the same date so we'll
                // iterate through each date array.
                for(var i in holidayList[prop]) {
                    if(holidayList[prop][i].name === day) {
                      return holidayList[prop][i];
                    }
                } 
            }
        }
        // return false when no matching date is found
        return false;
      });
    }
  }

  return service;
});
