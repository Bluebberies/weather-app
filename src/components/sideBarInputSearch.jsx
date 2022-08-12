import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "../cityData";

const SideBarInputSearch = ({
  toggleSearchBar,
  inputVal,
  textInput,
  handleChange,
  handleKeyDown,
  handleSearch,
  setPlace,
  lightMode,
}) => {
  const setLight = () => {
    if (lightMode) {
      return "lightMode";
    }
  };

  return (
    <div className={`searchBar ${setLight()}`}>
      <Container>
        <Col className="cancel d-flex justify-content-end">
          <i onClick={toggleSearchBar} className="fa-solid fa-xmark"></i>
        </Col>
        <Row>
          <Col xs={9}>
            <div className="searchInput">
              <div className="searchIcon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <input
                placeholder="search location"
                value={inputVal}
                autoFocus={true}
                ref={textInput}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col xs={3} className="searchBtn">
            <p onClick={handleSearch}>Search</p>
          </Col>
        </Row>
        <Col className="places mt-5">
          {inputVal &&
            data
              .filter((item) =>
                item.toLowerCase().startsWith(inputVal.toLowerCase())
              )
              .map((place, index) => (
                <div
                  onClick={() => setPlace(place)}
                  className="placeOptions"
                  key={index}
                >
                  <p>{place}</p>
                  <div className="arrow">
                    <i className="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              ))}
        </Col>
      </Container>
    </div>
  );
};

export default SideBarInputSearch;
