# Weather Forecasting Application

This is a weather forecasting application that provides users with real-time weather information for a given location. The application uses a frontend tech stack consisting of HTML, CSS, and JavaScript to create a user-friendly interface, while the backend tech stack is built using Node.js and Express.js to handle API requests. The application relies on the OpenWeather API to fetch weather data.

## Frontend Tech Stack

The frontend of the application is built using the following technologies:

- **HTML**: The standard markup language for creating the structure of the web pages.

- **CSS**: Used to style the HTML elements and create an aesthetically pleasing user interface.

- **JavaScript**: Provides interactivity to the application and handles user interactions. It also makes API requests to the backend server.

## Backend Tech Stack

The backend of the application is built using the following technologies:

- **Node.js**: A JavaScript runtime that allows us to execute JavaScript code outside the browser. It serves as the backend server for this application.

- **Express.js**: A web application framework for Node.js that simplifies the process of building robust APIs and handling HTTP requests.

## APIs

The application relies on the following external API:

- **OpenWeather API**: Used to fetch real-time weather data based on user input. It provides various endpoints to retrieve weather forecasts, current weather conditions, and more.

## How to Run the Application

To run this weather forecasting application locally, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/your-username/weather-forecast-app.git
   ```

2. Navigate to the project directory:

   ```
   cd weather-forecast-app
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

4. Obtain an API key from OpenWeather API by signing up on their website (https://openweathermap.org/) and creating a new API key.

5. Create a `.env` file in the project's root directory and add the API key as follows:

   ```
   API_KEY=your_openweather_api_key
   ```

6. Start the server:

   ```
   npm start
   ```

   This will start the backend server using Node.js and Express.js.

7. Open your web browser and go to `http://localhost:3000` to access the weather forecasting application.

## Usage

- Enter the location (city name or coordinates) for which you want to get the weather forecast.
- Click the "Get Weather" button to fetch and display the weather information.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository on GitHub.

2. Create a new branch with a descriptive name:

   ```
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```
   git commit -m "Add your commit message here"
   ```

4. Push your changes to your forked repository:

   ```
   git push origin feature/your-feature-name
   ```

5. Open a pull request on the original repository, describing the changes you made.

6. Your pull request will be reviewed, and upon approval, it will be merged into the main branch.

