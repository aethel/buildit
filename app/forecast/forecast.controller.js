(function() {
    'use strict';

    angular.module('forecast.forecasts').controller('ForecastController', ForecastController);

    ForecastController.$inject = ['dataservice', 'dataUrl'];

    function ForecastController(dataservice,dataUrl) {
        let vm = this;
        vm.forecasts;

        activate();

        function activate() {
            return getWeather().then(function() {
                console.log('Forecasts received', vm.forecasts);

            })
        }

        function getWeather() {
            return dataservice.get(`${dataUrl}`).then(function(data) {
                vm.forecasts = data;
                return vm.forecasts;
            })
        }

    }

})();
