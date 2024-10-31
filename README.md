# Weather App

## Objective
The Weather App allows users to search for cities and filter them by current temperature, utilizing data from the OpenWeatherMap API. It is built with React and TypeScript, emphasizing code quality and type safety.

## Tech Stack
- **React**: For building the user interface.
- **TypeScript**: For type safety and improving code quality.
- **Vite**: For fast development and optimized builds.

## Features
1. **City Search**: Users can search for cities by name using a search bar.
2. **Temperature Filtering**: Users can filter cities based on current temperatures.
3. **API Integration**: 
   - Fetches weather data from the OpenWeatherMap API.
   - Handles responses, loading states, and errors effectively.

## User Interface
- A clean and responsive UI displaying:
  - City names
  - Current temperatures
  - Weather conditions

## Code Quality
- Follows best practices in React and TypeScript:
  - Strong typing throughout the application.
  - Clean and modular code structure.
  - Reusable components for better maintainability.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)

### Installation
1. Install dependencies:
- npm install

2. Environment Variables
- Create a .env file in the root directory and add your OpenWeatherMap API key:
- VITE_OPEN_WEATHER_API_KEY = your_api_key_here

### Running the App
- Start the development server:
- npm run dev