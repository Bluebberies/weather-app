import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import { handleVisibiltyVal, convertWindSpeed } from "../weatherDataObj";

const Highlights = ({ weatherData, lightMode }) => {
  const setLight = () => {
    if (lightMode) {
      return "lightMode";
    }
  };

  return (
    <React.Fragment>
      <Col>
        <p className="highlights">Today's Highlights</p>
      </Col>
      <Row style={{ width: "100%", paddingLeft: "1rem" }}>
        <Col sm={5} style={{ width: "22rem" }}>
          <div className={`highlightCard ${setLight()}`}>
            <p className={setLight()}>Wind status</p>
            <h3 className={setLight()}>
              <span>{convertWindSpeed(weatherData.current.wind_speed)}</span>
              <span className="unit">mph</span>
            </h3>
            <div className={`windDirection ${setLight()}`}>
              <div>
                <i className={`fa-brands fa-telegram ${setLight()}`}></i>
              </div>
              <span>WSW</span>
            </div>
          </div>
        </Col>
        <Col sm={5} style={{ width: "22rem" }}>
          <div className={`highlightCard ${setLight()}`}>
            <p className={setLight()}>Humidity</p>
            <h3 className={setLight()}>
              <span>{weatherData.current.humidity}</span>
              <span className="unit">%</span>
            </h3>
            <div className="humidityPercentage">
              <div className="levels">
                <span className={setLight()}>0</span>
                <span className={setLight()}>50</span>
                <span className={setLight()}>100</span>
              </div>
              <div>
                <ProgressBar
                  className={setLight()}
                  variant="warning"
                  now={weatherData.current.humidity}
                />
              </div>
              <span className="percentUnit">%</span>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ width: "100%", paddingLeft: "1rem" }}>
        <Col sm={5} style={{ width: "22rem" }}>
          <div className={`highlightCardLower ${setLight()}`}>
            <p className={setLight()}>Visibility</p>
            <h3 className={setLight()}>
              <span>{handleVisibiltyVal(weatherData.current.visibility)}</span>
              <span className="unit">miles</span>
            </h3>
          </div>
        </Col>
        <Col sm={5} style={{ width: "22rem" }}>
          <div className={`highlightCard ${setLight()}`}>
            <p className={setLight()}>Air pressure</p>
            <h3 className={setLight()}>
              <span>{weatherData.current.pressure}</span>
              <span className="unit">mb</span>
            </h3>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Highlights;
