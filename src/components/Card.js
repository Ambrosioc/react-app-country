import React from "react";

const Card = ({ country }) => {
  return (
    <li href="#" className="card">
      <a href="#">
        <img
          src={country.flags.svg}
          alt={"drapeau " + country.translations.fra.common}
        />
        <div className="infos">
          <h2>{country.translations.fra.common}</h2>
          <h3>{country.capital}</h3>
          <p>Pop. {country.population.toLocaleString()}</p>
        </div>
      </a>
    </li>
  );
};

export default Card;
