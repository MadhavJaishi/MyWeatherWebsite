# Weather App 🌤️

A simple weather app that displays real-time weather information for a city using the Weather API from RapidAPI.

## Features
- **City Name**: Displays the name of the city for which the weather is being fetched.
- **Cloud Percentage**: Shows the cloud cover percentage.
- **Temperature**: Displays the current temperature, feels like temperature, and more.
- **Humidity**: Provides the current humidity level.
- **Minimum & Maximum Temperatures**: Shows the minimum and maximum temperatures for the day.
- **Wind Details**: Displays wind speed and direction in degrees.

## Technologies Used
- **HTML, CSS, JavaScript**: For the frontend.
- **Fetch API**: To interact with the Weather API.
- **Weather API**: Provides weather details for a given city (powered by RapidAPI).

## How It Works
1. Enter the name of a city in the input field.
2. The app sends a request to the Weather API with the city name.
3. The API responds with the weather details, which are then displayed on the screen.

## API Details
The app uses the [Weather API](https://rapidapi.com/weatherapi/api/weatherapi-com) from RapidAPI. Below are the configurations used:

```javascript
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'YOUR_API_KEY', // Replace with your API Key
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};
```

## Example API Call
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    
## Clone the repository:
git clone https://github.com/your-username/weather-app.git

## Navigate to the project directory:
cd weather-app

## Open the index.html file in a web browser.

## Contributions
Contributions are welcome! Feel free to fork the repository and submit a pull request.
