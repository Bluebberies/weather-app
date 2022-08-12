import React from "react";
import Col from "react-bootstrap/Col";
import WeekDayInfo from "./weekDayInfo";
import Highlights from "./highlights";
import Footer from "./footer";

const Main = ({
  weatherData,
  setUnit,
  degreeUnit,
  unitConverter,
  toggleMode,
  getDate,
  lightMode,
}) => {
  const setLight = () => {
    if (lightMode) {
      return "lightMode";
    }
  };

  return (
    <Col style={{ padding: "0" }}>
      <div className={`dailyForecasts ${setLight()}`}>
        <WeekDayInfo
          weatherData={weatherData}
          setUnit={setUnit}
          degreeUnit={degreeUnit}
          unitConverter={unitConverter}
          getDate={getDate}
          toggleMode={toggleMode}
          lightMode={lightMode}
        />
        <Highlights weatherData={weatherData} lightMode={lightMode} />
        <Footer lightMode={lightMode} />
      </div>
    </Col>
  );
};

export default Main;