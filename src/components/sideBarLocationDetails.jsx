import React from "react";
import Col from "react-bootstrap/Col";

const SideBarLocationDetails = ({
  toggleSearchBar,
  getLocation,
  weatherData,
  unitConverter,
  degreeUnit,
  getDate,
  locationName,
  lightMode,
}) => {
  const setLight = () => {
    if (lightMode) {
      return "lightMode";
    }
  };

  return (
    <div className={`current-place ${setLight()}`}>
      <div className="navigate-location gap-5">
        <Col sm={4} className="d-flex justify-content-start">
          <p onClick={toggleSearchBar}>Search for places</p>
        </Col>
        <Col className="icon d-flex justify-content-end">
          <div className="location-icon">
            <i
              onClick={getLocation}
              className="fa-solid fa-location-crosshairs "
            ></i>
          </div>
        </Col>
      </div>
      <div className="image mt-5 d-flex align-items-center justify-content-center">
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
          alt=""
        />
      </div>
      <div className="degree d-flex align-items-center justify-content-center">
        <h1>
          {unitConverter(weatherData.current.temp)}
          <sub>
            <sup>o</sup>
            {degreeUnit === "C" ? "C" : "F"}
          </sub>
        </h1>
      </div>
      <p className="description d-flex align-items-center justify-content-center">
        {weatherData.current.weather[0].description}
      </p>
      <div className="day">
        <h3>
          <span className="weekday">Today</span>
          <span className="dot">.</span>
          <span className="weekdate">
            {weatherData.current.dt ? getDate(weatherData.current.dt) : ""}
          </span>{" "}
        </h3>
        <div className="place gap-1 d-flex align-items-center justify-content-center">
          <div>
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <p>{locationName}</p>
        </div>
      </div>
    </div>
  );
};

export default SideBarLocationDetails;
