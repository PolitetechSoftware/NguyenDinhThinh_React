import { ToastContainer } from "react-toastify";
import { WeatherForecastModule } from "./modules";
import { WeatherForecastProvider } from "./modules/weather-forecast/contexts/provider";
import 'react-toastify/dist/ReactToastify.css';
import "./assets/styles/styles.scss";

const LANGUAGE_DEFAULT = "en";

function App() {
  console.log(import.meta.env.VITE_OPEN_WEATHER_API_KEY);
  return (
    <>
      <WeatherForecastProvider>
        <WeatherForecastModule supportLang={LANGUAGE_DEFAULT} />
      </WeatherForecastProvider>
      <ToastContainer />
    </>
  );
}

export default App;
