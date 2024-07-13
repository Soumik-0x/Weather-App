# Weather App

A simple weather application built with React.js and Vite.

## Features

- Fetches current weather data for a specified city
- Displays temperature, city name, and weather description
- Basic error handling and user input validation

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
Install dependencies:


npm install
Create an account on OpenWeatherMap and get your API key.

Create a file src/api/weather.js and add your API key:

javascript

import axios from 'axios';

const API_KEY = 'your_api_key_here';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        units: 'metric',
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
Running the App
To run the app in development mode:

bash

npm run dev
Open your browser and navigate to http://localhost:5173 to see the app in action.

Project Structure

weather-app/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── api/
│   │   └── weather.js
│   ├── components/
│   │   └── Weather.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
Deployment
To build the app for production:


npm run build
The output will be in the dist directory. You can deploy the contents of this directory to your web server or a static site hosting service like Netlify or Vercel.

Contributing
If you want to contribute to this project, feel free to open a pull request or issue on the GitHub repository.


## Author

- **Soumik Sadhu** - [X.com/Twitter](https://x.com/Sadhu_Soumik)
                   - [Github](https://github.com/Soumik-0x)

## Contact

For any inquiries, please reach out to me at [itsmesoumiksadhu@gmail.com](mailto:itsmesoumiksadhu@gmail.com).

Happy coding!
