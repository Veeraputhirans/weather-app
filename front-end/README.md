Weather App

A simple and responsive weather application that allows users to check the current weather conditions and air quality of any city worldwide.

## Features

- **Search for Any City**: Enter the name of a city to retrieve weather details.
- **Live Weather Data**: Fetches real-time weather data using the OpenWeather API.
- **Temperature Display**: Shows the current temperature in Celsius.
- **Weather Condition Icons**: Displays appropriate weather icons.
- **Humidity & Air Pollution**: Provides humidity levels and Air Quality Index (AQI).
- **Responsive Design**: Optimized for both desktop and mobile views.

## Technologies Used

- **Frontend**: React.js
- **Styling**: CSS (Responsive design with Flexbox)
- **API**: OpenWeather API
- **Icons**: React Icons

## Installation & Setup

1. **Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Get OpenWeather API Key**
   - Sign up at [OpenWeather](https://openweathermap.org/api) and obtain an API key.
   - Replace `API_KEY` in `Home.js` with your key.

4. **Run the Application**
   ```sh
   npm start
   ```
   The app will run on `http://localhost:3000/`

## File Structure
```
/weather-app
├── src
│   ├── Assets
│   │   ├── Images
│   │   │   ├── background.jpg
│   │   │   ├── Search.svg
│   ├── Components
│   │   ├── Home.js
│   ├── App.js
│   ├── index.js
│   ├── Home.css
├── package.json
├── README.md
```

## Screenshots
![Weather App Screenshot](./screenshot.png)

## Future Enhancements
- Add a 5-day weather forecast feature.
- Implement geolocation-based weather search.
- Dark mode support.

## License
This project is open-source and available under the MIT License.

---
**Developed by Veeraputhiran** 🚀

