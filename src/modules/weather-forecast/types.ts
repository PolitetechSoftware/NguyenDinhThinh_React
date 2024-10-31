export interface Localnames {
  vi: string;
  en: string;
}

export interface LocationInfo {
  name: string;
  local_names?: Localnames;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

export enum ExcludePart {
  Current = "current",
  Minutely = "minutely",
  Hourly = "hourly",
  Daily = "daily",
  Alerts = "alerts",
}

export interface WeatherStateRequest {
  lat: number;
  lon: string;
  exclude: ExcludePart;
}

export interface WeatherStateResponse {
  location: LocationInfo;

  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
interface Clouds {
  all: number;
}
interface Wind {
  speed: number;
  deg: number;
}
interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}
interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface Coord {
  lon: number;
  lat: number;
}
