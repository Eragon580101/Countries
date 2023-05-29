import React, { useContext } from "react";

import "./Detail.scss";
import Navbar from "../../Components/Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../../App";

const Detail = () => {
  const { code } = useParams();
  const { darkModeOn, data } = useContext(ThemeContext);
  const CountryDetail = data.find((country) => country.cca3 === code);

  const getBorderCountry = (code) => {
    const country = data.find((country) => country.cca3 === code);
    return country.name.common;
  };

  const getlanguages = () => {
    const languages = Object.values(CountryDetail.languages);
    return languages.map((language) => language);
  };

  return (
    <div>
      <Navbar />
      {CountryDetail && (
        <div className={`detailScreen ${darkModeOn ? "dark" : ""}`}>
          <Link to="/" className="back-button pill">
            <i className="fas fa-arrow-left"></i>
            <span>Back</span>
          </Link>
          <div className="detail">
            <div className="detail__flag">
              <img
                style={
                  CountryDetail.name.common === "Nepal"
                    ? { border: 0 }
                    : { border: "1px solid #333" }
                }
                src={CountryDetail.flags.png}
                alt={CountryDetail.flags.alt}
              />
            </div>
            <div className="detail__info">
              <h1 className="detail__info__name">
                {CountryDetail.name.official}
              </h1>
              <div className="detail__info__content">
                <div className="detail__info__content__left">
                  {CountryDetail.name.nativeName && (
                    <p>
                      <span className="title">Native Name:</span>{" "}
                      {Object.values(CountryDetail.name.nativeName).map(
                        (nativeName) => nativeName.common + "\t"
                      )}
                    </p>
                  )}
                  <p>
                    <span className="title">Population:</span>{" "}
                    {CountryDetail.population}
                  </p>
                  <p>
                    <span className="title">Region:</span>{" "}
                    {CountryDetail.region}
                  </p>
                  <p>
                    <span className="title">Sub Region:</span>{" "}
                    {CountryDetail.subregion}
                  </p>
                  {CountryDetail.cpaital && <p>
                    <span className="title">Capital:</span>{" "}
                    {CountryDetail.capital.map((capital) => capital)}
                  </p>}
                </div>
                <div className="detail__info__content__right">
                  <p>
                    <span className="title">Top Level Domain:</span>{" "}
                    {CountryDetail.tld.map((tld) => tld + "\t")}
                  </p>
                  {CountryDetail.currencies && <p>
                    <span className="title">Currencies:</span>{" "}
                    {Object.values(CountryDetail.currencies).map(
                      (currency) => currency.name +`(${currency.symbol})`
                    )}
                  </p>}  
                  {CountryDetail.languages && <p>
                    <span className="title">Languages:</span>{" "}
                    <span className="borders__co">
                      {Object.values(CountryDetail.languages).map(
                        (language) => language + "\t"
                      )}
                    </span>
                  </p>}
                </div>
              </div>
              {CountryDetail.borders && (
                <div className="detail__info__content__bottom">
                  <p className="borders__title">
                    <span className="title">Border Countries:</span>{" "}
                    <span className="borders__co">
                      {CountryDetail.borders.map((border) => (
                        <span className="borders pill">
                          {getBorderCountry(border)}
                        </span>
                      ))}
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
