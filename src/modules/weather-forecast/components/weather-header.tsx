import { useState } from "react";
import { WFSearchInput } from "../../../components/atoms";
import { SearchIcon, Sun } from "lucide-react";
import { useWeatherForecastContext } from "../contexts";

const WeatherHeader: React.FC = () => {
  const {
    searchLoading,
    location,
    locationInfos,
    setLocation,
    fetchLocationInfosByText,
    fetchWeatherForLocation,
    weatherInfos,
  } = useWeatherForecastContext();

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleFocus = () => {
    setIsSearchVisible(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsSearchVisible(false);
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      fetchLocationInfosByText(location);
    }
  };
  const selectKeys = weatherInfos.map(
    (f) => f.location.lat.toString() + f.location.lon.toString()
  );
  return (
    <header className="header container-fluid" id="header">
      <div className="logo">
        <Sun size={20} color="#f05513" />
        <span>Test Weather</span>
      </div>
      <div className="search-wrapper" onBlur={handleBlur} tabIndex={-1}>
        <WFSearchInput
          icons={
            <SearchIcon
              size={20}
              onClick={() => fetchLocationInfosByText(location)}
            />
          }
          type="text"
          placeholder="Address, City or Zip Code"
          onClick={handleFocus}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={searchLoading}
        />
        <div className={`search-dropdown ${isSearchVisible ? "visible" : ""}`}>
          {!!location.length &&
            !searchLoading &&
            locationInfos.map((locationInfo) => {
              const isSelect = selectKeys.includes(
                locationInfo.lat.toString() + locationInfo.lon.toString()
              );
              return (
                <div
                  className={`state-locations state-locations-header ${
                    isSelect ? "disable-event" : ""
                  }`}
                  onClick={() => {
                    !isSelect && fetchWeatherForLocation(locationInfo);
                  }}
                >
                  <div className="location-title">{locationInfo.name}</div>
                  <div className="location-content">{locationInfo.state}</div>
                </div>
              );
            })}
          {!location.length && !searchLoading && (
            <div className="state-locations state-locations-header">...</div>
          )}

          {location !== "" &&
            searchLoading &&
            [1, 2, 3, 4, 5].map((idx) => {
              return (
                <div
                  className="state-locations state-locations-header"
                  key={idx}
                >
                  <div className="skeleton">
                    <div className="skeleton-left">
                      <div className="line h25 w100"></div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </header>
  );
};

export default WeatherHeader;
