import { createContext, useContext } from "react";
import { ExcludePart, LocationInfo, WeatherStateResponse } from "../types";

interface WeatherForecastContextType {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  locationInfos: LocationInfo[];
  setLocationInfos: React.Dispatch<React.SetStateAction<LocationInfo[]>>;
  fetchLocationInfosByText: (queryStr: string) => void;
  searchLoading: boolean;
  fetchWeatherForLocation: (params: LocationInfo) => void;
  excludePart: ExcludePart;
  setExcludePart: React.Dispatch<React.SetStateAction<ExcludePart>>;
  weatherInfos: WeatherStateResponse[];
  deleteWeather: (id: number) => void;
  weatherContains: number[];
  setRangeLess: React.Dispatch<React.SetStateAction<number>>;
  setRangeGreater: React.Dispatch<React.SetStateAction<number>>;
  rangeLess: number;
  rangeGreater: number;
}

export const WeatherForecastContext = createContext<WeatherForecastContextType>(
  {} as WeatherForecastContextType
);

export const useWeatherForecastContext = () => {
  const context = useContext(WeatherForecastContext);
  return context;
};
