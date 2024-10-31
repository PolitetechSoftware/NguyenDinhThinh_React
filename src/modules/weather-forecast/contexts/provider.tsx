/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropsWithChildren, useEffect, useState } from "react";
import { WeatherForecastContext } from ".";
import { ExcludePart, LocationInfo, WeatherStateResponse } from "../types";
import { toast } from "react-toastify";
import instance from "../../../services";
import { HttpStatusCode } from "axios";
import { kelvinToFahrenheit } from "../../helper";

export const WeatherForecastProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [location, setLocation] = useState<string>("");
  const [locationInfos, setLocationInfos] = useState<LocationInfo[]>([]);
  const [searchLoading, setSearchLoading] = useState<boolean>(false);
  const [excludePart, setExcludePart] = useState<ExcludePart>(
    ExcludePart.Current
  );
  const [weatherInfos, setWeatherInfos] = useState<WeatherStateResponse[]>([]);
  const [weatherContains, setWeatherContains] = useState<number[]>([]);
  const [rangeLess, setRangeLess] = useState<number>(0);
  const [rangeGreater, setRangeGreater] = useState<number>(100);

  const fetchLocationInfosByText = async (queryStr: string) => {
    if (queryStr === "") {
      toast.error("Please enter city code, zip");
      return;
    }
    setSearchLoading(true);
    try {
      const response = await instance.get<LocationInfo[]>(
        `http://api.openweathermap.org/geo/1.0/direct?q=${queryStr}&limit=10&appid=${
          import.meta.env.VITE_OPEN_WEATHER_API_KEY
        }`
      );
      if (response.status === HttpStatusCode.Ok) {
        setLocationInfos(response.data);
      }
    } catch (error: any) {
      toast.error("Data not found!");
    } finally {
      setSearchLoading(false);
    }
  };

  const fetchWeatherForLocation = async (params: LocationInfo) => {
    console.log("params", params);
    try {
      const response = await instance.get<WeatherStateResponse>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          params.lat
        }&lon=${params.lon}&appid=${
          import.meta.env.VITE_OPEN_WEATHER_API_KEY
        }&lang=en`
      );

      if (response.status === HttpStatusCode.Ok) {
        setWeatherInfos(
          weatherInfos.concat({
            ...response.data,
            location: {
              ...params,
            },
          })
        );
      }
    } catch (error) {
      toast.error("Data not found!");
    }
  };

  const deleteWeather = (id: number) => {
    setWeatherInfos(weatherInfos.filter((s) => s.id !== id));
  };



  useEffect(()=>{
    const weathers = weatherInfos
    .filter(
      (f) =>
        rangeLess <= kelvinToFahrenheit(f.main.feels_like) &&
        rangeGreater >= kelvinToFahrenheit(f.main.feels_like)
    )
    .map((f) => f.id);
  setWeatherContains(weathers);
  }, [weatherInfos, rangeLess, rangeGreater])

  return (
    <WeatherForecastContext.Provider
      value={{
        location: location,
        locationInfos: locationInfos,
        searchLoading: searchLoading,
        excludePart: excludePart,
        weatherInfos: weatherInfos,
        setLocation,
        setLocationInfos,
        fetchLocationInfosByText,
        fetchWeatherForLocation,
        setExcludePart,
        deleteWeather,
        setRangeLess,
        setRangeGreater,
        rangeGreater,
        rangeLess,
        weatherContains,
      }}
    >
      <div className="wt-wrapper">{children}</div>
    </WeatherForecastContext.Provider>
  );
};
