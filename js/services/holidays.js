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
      function holidayMatch(holiday) {
        return holiday.name === day;
      }
      
      return service.getAllHolidays().then(function(holidays) {
        console.log(holidays);
        //return holidays.find(holidayMatch)
        return holidays.holidays;
      });
    }
  }
  
  return service;
});
