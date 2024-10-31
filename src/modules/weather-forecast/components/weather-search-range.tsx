import { RangeProgress } from "../../../components/atoms/range/range-progress";
import { useWeatherForecastContext } from "../contexts";

const WeatherSearchRange: React.FC = () => {
  const { setRangeLess, setRangeGreater, rangeGreater, rangeLess } =
    useWeatherForecastContext();

  return (
    <div className=" container-fluid">
      <div className="range-container">
        <div style={{ width: 600, display: "flex" }}>
          <span style={{ width: 120 }}>Greater than: </span>
          <RangeProgress
            value={rangeLess}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= rangeGreater) {
                setRangeLess(rangeGreater);
                return;
              }
              setRangeLess(value);
            }}
          />
          <span>{rangeLess}°F</span>
        </div>
        <div style={{ width: 600, display: "flex" }}>
          <span style={{ width: 120 }}>Less than: </span>
          <RangeProgress
            value={rangeGreater}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value <= rangeLess) {
                setRangeGreater(rangeLess);
                return;
              }

              setRangeGreater(value);
            }}
          />
          <span>{rangeGreater}°F</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherSearchRange;
