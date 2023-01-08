const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c0e94f6c94mshcc8c23ccaac0e2dp1833d2jsnf62005986ee8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,options)
    .then((response) => response.json())
    .then((response) => {

        console.log(response);

        //cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp

        temp2.innerHTML = response.temp
        humidity2.innerHTML = response.humidity
        wind_speed2.innerHTML = response.wind_speed

        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        sunset.innerHTML = response.sunset
        
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise

        //cloud_pct.innerHTML = response.cloud_pct
    })
    .catch((err) => console.error(err));
    
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value)
})

getWeather("Delhi");