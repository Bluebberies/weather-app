import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WeekDayInfo = ({
  setUnit,
  degreeUnit,
  weatherData,
  unitConverter,
  getDate,
  toggleMode,
  lightMode,
}) => {
  const setLight = () => {
    if (lightMode) {
      return "lightMode";
    }
  };

  return (
    <React.Fragment>
      <Col className="changeMetrics">
        <div className="modeToggle" onClick={toggleMode}>
          <div className="moon-icon">
            <i className={`fa-solid fa-moon ${setLight()}`}></i>
          </div>
          <h3 className={setLight()}>{lightMode ? "DarkMode" : "LightMode"}</h3>
        </div>
        <div className="tempToggle">
          <p
            onClick={() => setUnit("C")}
            className={
              degreeUnit === "C" ? `active ${setLight()}` : `${setLight()}`
            }
          >
            <sup>o</sup>C
          </p>
          <p
            onClick={() => setUnit("F")}
            className={
              degreeUnit === "F" ? `active ${setLight()}` : `${setLight()}`
            }
          >
            <sup>o</sup>F
          </p>
        </div>
      </Col>
      <Row className="d-flex" style={{ margin: "0" }}>
        <Col xs={6} sm={5} md={4} lg={3} xl={2} style={{ width: "11rem" }}>
          <div className={`dayCard ${setLight()}`}>
            <p className={setLight()}>Tommorrow</p>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.daily[1].weather[0].icon}@2x.png`}
              alt=""
            />
            <div className="tempLevels">
              <span className={setLight()}>
                {unitConverter(weatherData.daily[1].temp.max)}
                <sub>
                  <sup>o</sup>
                  {degreeUnit === "C" ? "C" : "F"}
                </sub>
              </span>
              <span className={`lowerTemp ${setLight()}`}>
                {unitConverter(weatherData.daily[1].temp.min)}
                <sub>
                  <sup>o</sup>
                  {degreeUnit === "C" ? "C" : "F"}
                </sub>
              </span>
            </div>
          </div>
        </Col>
        {weatherData.daily.slice(2, 6).map((card, index) => (
          <Col
            xs={6}
            sm={5}
            md={4}
            lg={3}
            xl={2}
            key={index}
            style={{ width: "11rem" }}
          >
            <div className={`dayCard ${setLight()}`}>
              <p className={setLight()}>{getDate(card.dt)}</p>
              <img
                src={`https://openweathermap.org/img/wn/${card.weather[0].icon}@2x.png`}
                alt=""
              />
              <div className="tempLevels">
                <span className={setLight()}>
                  {unitConverter(card.temp.max)}
                  <sub>
                    <sup>o</sup>
                    {degreeUnit === "C" ? "C" : "F"}
                  </sub>
                </span>
                <span className={`lowerTemp ${setLight()}`}>
                  {unitConverter(card.temp.min)}
                  <sub>
                    <sup>o</sup>
                    {degreeUnit === "C" ? "C" : "F"}
                  </sub>
                </span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default WeekDayInfo;
