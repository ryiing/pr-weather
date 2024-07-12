const weatherInfo = document.getElementsByClassName('weatherInfo');

const APIKey = 'd570cceb03824262b4405434241007';


const apiSetup = (() => {

});


const weather = (() => {

    const getWeather =  (async () => {
        try {
            const res = await fetch ('https://api.weatherapi.com/v1/current.json?key=d570cceb03824262b440543424100&q=London&aqi=no');
            if (res.ok) {
                return console.log('ok!');
            }
            else {
                const errorResponse = await res.json();
                const errorMessage = errorResponse.error.message;
                throw new Error (errorMessage || "Failed to fetch weather data");
            }
            
            
            const weatherData = await res.json();
            console.log(weatherData.current.temp_c);
        }
        catch (error) {
            console.error('error featching weather data:', error.message);
        }
    });

    getWeather();
})();