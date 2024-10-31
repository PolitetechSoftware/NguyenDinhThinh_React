import { CircleX } from "lucide-react";
import { kelvinToFahrenheit } from "../../helper";
import { WeatherStateResponse } from "../types";
import { useWeatherForecastContext } from "../contexts";
import { toast } from "react-toastify";

interface WeatherInfoProps {
  weatherInfo: WeatherStateResponse;
}

const WeatherToday: React.FC<WeatherInfoProps> = ({ weatherInfo }) => {
  const { deleteWeather } = useWeatherForecastContext();
  return (
    <div className="container-weather-info">
      <div className="close-icon">
        <CircleX
          onClick={() => {
            let isConfirmed = confirm(
              "Are you sure you want to delete this item?"
            );
            if (isConfirmed) {
              deleteWeather(weatherInfo.id);
              toast.success(
                `Delete location [${weatherInfo.location.state}] successfully!`
              );
            }
          }}
        />
      </div>
      <div className="flex-container">
        <h2>
          {weatherInfo.location.name}{" "}
          {weatherInfo.location.state ? `, ${weatherInfo.location.state}` : ""}
        </h2>
      </div>
      <hr />
      <div className="flex">
        <div className="w-50">
          <div className="flex-container">
            <img
              src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@2x.png`}
              height={50}
              width={50}
              alt=""
            />
            <div style={{ fontSize: "3rem" }}>
              {kelvinToFahrenheit(weatherInfo.main.feels_like).toFixed(0) +
                "°F"}
            </div>
            <span style={{ marginLeft: 20 }}>
              {weatherInfo?.weather[0].description}
            </span>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div className="weather-item">
            <span className="label">Wind Gusts:</span>
            <span className="value">{weatherInfo?.wind.speed}</span>
          </div>
          <div className="weather-item">
            <span className="label">Humidity:</span>
            <span className="value">{weatherInfo?.main.humidity}%</span>
          </div>

          <div className="weather-item">
            <span className="label">Pressure:</span>
            <span className="value">{weatherInfo?.main.pressure}</span>
          </div>
          <div className="weather-item">
            <span className="label">Cloud Cover:</span>
            <span className="value">{weatherInfo?.clouds.all}%</span>
          </div>
          <div className="weather-item">
            <span className="label">Visibility:</span>
            <span className="value">{weatherInfo?.visibility}m</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherToday;
