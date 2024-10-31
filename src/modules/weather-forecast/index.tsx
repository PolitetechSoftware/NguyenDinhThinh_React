import React, { useMemo } from "react";
import WeatherHeader from "./components/weather-header";
import WeatherCurrent from "./components/weather-current";
import WeatherTransactions from "./components/WeatherTransactions";
import { useWeatherForecastContext } from "./contexts";
import WeatherSearchRange from "./components/weather-search-range";

interface WeatherForecastModuleProps {
  supportLang: "en" | "vi";
}

const WeatherForecastModule: React.FC<WeatherForecastModuleProps> = ({}) => {
  const { weatherInfos, weatherContains } = useWeatherForecastContext();

  const weathers = useMemo(() => {
    return weatherInfos.filter((f) => weatherContains.includes(f.id));
  }, [weatherInfos.length, weatherContains.length]);

  return (
    <>
      <WeatherHeader />
      {!!weatherInfos.length && <WeatherSearchRange />}

      {!!weathers.length && (
        <div className="container-fluid">
          {weathers.map((f, idx) => (
            <WeatherCurrent weatherInfo={f} key={idx} />
          ))}
        </div>
      )}
      {!weathers.length && (
        <div className="record-not-found">Record Not Found</div>
      )}
      <WeatherTransactions />
    </>
  );
};

export default WeatherForecastModule;
