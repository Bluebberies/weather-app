import React from "react";
import Col from "react-bootstrap/Col";
import SideBarInputSearch from "./sideBarInputSearch";
import SideBarLocationDetails from "./sideBarLocationDetails";

const SideBar = ({
  showSearch,
  toggleSearchBar,
  getLocation,
  weatherData,
  degreeUnit,
  unitConverter,
  getDate,
  locationName,
  inputVal,
  textInput,
  handleChange,
  handleKeyDown,
  handleSearch,
  setPlace,
  lightMode,
  ios
}) => {
  return (
    <Col xl={4} className="sideBar">
      {!showSearch && (
        <SideBarLocationDetails
          toggleSearchBar={toggleSearchBar}
          getLocation={getLocation}
          weatherData={weatherData}
          unitConverter={unitConverter}
          degreeUnit={degreeUnit}
          getDate={getDate}
          locationName={locationName}
          lightMode={lightMode}
          ios={ios}
        />
      )}
      {showSearch && (
        <SideBarInputSearch
          toggleSearchBar={toggleSearchBar}
          inputVal={inputVal}
          textInput={textInput}
          handleChange={handleChange}
          handleKeyDown={handleKeyDown}
          handleSearch={handleSearch}
          setPlace={setPlace}
          lightMode={lightMode}
        />
      )}
    </Col>
  );
};

export default SideBar;
