const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '355c712178mshf522c3cbeaf3b24p1fac4ejsn4368d1f70307',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather =(city) => {
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response =>
		{ //console.log(response)


			cityName.innerHTML=city
			// cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML =response.temp
			//feels_like.innerHTML=response.feels_like
			humidity.innerHTML=response.humidity
			min_temp.innerHTML=response.min_temp
			max_temp.innerHTML=response.max_temp
			wind_speed.innerHTML=response.wind_speed
			// wind_degrees.innerHTML=response.wind_degrees
			// sunrise.innerHTML=response.sunrise
			// sunset.innerHTML=response.sunset
		
		
		
		})
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
	//e.PreventDefault()
	if(city.value != "")
	getWeather(city.value)
	else getWeather("delhi")
})
getWeather("kharar");