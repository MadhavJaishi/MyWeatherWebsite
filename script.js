const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c790ddcfc0msh74796440f3d21f0p1d7e8cjsn2f44364ed84f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=> {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		tempn.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidityn.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speedn.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
	})
	.catch(err => console.error(err));
}
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chicago', options)
	.then(response => response.json())
	.then(response => {
		cloud_pct2.innerHTML = response.cloud_pct
		temp2.innerHTML = response.temp
		feels_like2.innerHTML = response.feels_like
		humidity2.innerHTML = response.humidity
		min_temp2.innerHTML = response.min_temp
		max_temp2.innerHTML = response.max_temp
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees2.innerHTML = response.wind_degrees
		sunrise2.innerHTML = response.sunrise
		sunset2.innerHTML = response.sunset

	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
	.then(response => response.json())
	.then(response => {
		cloud_pct3.innerHTML = response.cloud_pct
		temp3.innerHTML = response.temp
		feels_like3.innerHTML = response.feels_like
		humidity3.innerHTML = response.humidity
		min_temp3.innerHTML = response.min_temp
		max_temp3.innerHTML = response.max_temp
		wind_speed3.innerHTML = response.wind_speed
		wind_degrees3.innerHTML = response.wind_degrees
		sunrise3.innerHTML = response.sunrise
		sunset3.innerHTML = response.sunset

	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
	.then(response => response.json())
	.then(response => {
		cloud_pct4.innerHTML = response.cloud_pct
		temp4.innerHTML = response.temp
		feels_like4.innerHTML = response.feels_like
		humidity4.innerHTML = response.humidity
		min_temp4.innerHTML = response.min_temp
		max_temp4.innerHTML = response.max_temp
		wind_speed4.innerHTML = response.wind_speed
		wind_degrees4.innerHTML = response.wind_degrees
		sunrise4.innerHTML = response.sunrise
		sunset4.innerHTML = response.sunset

	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris', options)
	.then(response => response.json())
	.then(response => {
		cloud_pct5.innerHTML = response.cloud_pct
		temp5.innerHTML = response.temp
		feels_like5.innerHTML = response.feels_like
		humidity5.innerHTML = response.humidity
		min_temp5.innerHTML = response.min_temp
		max_temp5.innerHTML = response.max_temp
		wind_speed5.innerHTML = response.wind_speed
		wind_degrees5.innerHTML = response.wind_degrees
		sunrise5.innerHTML = response.sunrise
		sunset5.innerHTML = response.sunset

	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Istanbul', options)
	.then(response => response.json())
	.then(response => {
		cloud_pct6.innerHTML = response.cloud_pct
		temp6.innerHTML = response.temp
		feels_like6.innerHTML = response.feels_like
		humidity6.innerHTML = response.humidity
		min_temp6.innerHTML = response.min_temp
		max_temp6.innerHTML = response.max_temp
		wind_speed6.innerHTML = response.wind_speed
		wind_degrees6.innerHTML = response.wind_degrees
		sunrise6.innerHTML = response.sunrise
		sunset6.innerHTML = response.sunset

	})
	.catch(err => console.error(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
	.then(response => response.json())
	.then(response => {
		cloud_pct7.innerHTML = response.cloud_pct
		temp7.innerHTML = response.temp
		feels_like7.innerHTML = response.feels_like
		humidity7.innerHTML = response.humidity
		min_temp7.innerHTML = response.min_temp
		max_temp7.innerHTML = response.max_temp
		wind_speed7.innerHTML = response.wind_speed
		wind_degrees7.innerHTML = response.wind_degrees
		sunrise7.innerHTML = response.sunrise
		sunset7.innerHTML = response.sunset

	})
	.catch(err => console.error(err));

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")


	//I used async function so that await can be used
	//But every value was showing undefined so I had to choose up way for getting value
// try {
// 	async function k() {
// 		const response = await fetch(url, options);
// 		const result =  await response.text();

// 		cloud_pct.innerHTML = response.cloud_pct
// 		temp.innerHTML = response.temp
// 		feels_like.innerHTML = response.feels_like
// 		humidity.innerHTML = response.humidity
// 		min_temp.innerHTML = response.min_temp
// 		max_temp.innerHTML = response.max_temp
// 		wind_speed.innerHTML = response.wind_speed
// 		wind_degrees.innerHTML = response.wind_degrees
// 		// sunrise.innerHTML = response.sunrise
// 		// sunset.innerHTML = response.sunset
// 		console.log(result);
// 	};
// 	k();
// } 



// catch (error) {
// 	console.error('Error:', error);
// }

