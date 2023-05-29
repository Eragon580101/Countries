import React, { useContext } from "react";

import "./Detail.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Data from "../../data.json";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../../App";

const Detail = () => {
  const { code } = useParams();
  const { darkModeOn } = useContext(ThemeContext);
  const CountryDetail = Data.find((country) => country.alpha3Code === code);

  const getBorderCountry = (code) => {
    const country = Data.find((country) => country.alpha3Code === code);
    return country.name;
  };

  return (
    <div>
      <Navbar />
      {CountryDetail && (
        <div className={`detailScreen ${darkModeOn?'dark':''}`}>
          <Link to="/" className="back-button pill">
            <i className="fas fa-arrow-left"></i>
            <span>Back</span>
          </Link>
          <div className="detail">
            <div className="detail__flag">
              <img
                style={
                  CountryDetail.name === "Nepal"
                    ? { border: 0 }
                    : { border: "1px solid #333" }
                }
                src={CountryDetail.flags.png}
                alt={CountryDetail.name}
              />
            </div>
            <div className="detail__info">
              <h1 className="detail__info__name">{CountryDetail.name}</h1>
              <div className="detail__info__content">
                <div className="detail__info__content__left">
                  <p>
                    <span className="title">Native Name:</span>{" "}
                    {CountryDetail.nativeName}
                  </p>
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
                  <p>
                    <span className="title">Capital:</span>{" "}
                    {CountryDetail.capital}
                  </p>
                </div>
                <div className="detail__info__content__right">
                  <p>
                    <span className="title">Top Level Domain:</span>{" "}
                    {CountryDetail.topLevelDomain}
                  </p>
                  <p>
                    <span className="title">Currencies:</span>{" "}
                    {CountryDetail.currencies.map(
                      (currency) => currency.name + "(" + currency.symbol + ")"
                    )}
                  </p>
                  <p>
                    <span className="title">Languages:</span>{" "}
                    <span className="borders__co">
                      {CountryDetail.languages.map((language, index) => (
                        <span
                          style={{
                            marginRight: "5px",
                          }}
                        >
                          {language.name}
                          {CountryDetail.languages.length > 1 &&
                            index !== CountryDetail.languages.length - 1 &&
                            ","}
                        </span>
                      ))}
                    </span>
                  </p>
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
