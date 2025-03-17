import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Card = forwardRef(({ country }, ref) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${country.name.common}`);
  };

  return (
    <motion.li
      ref={ref}
      className="card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.2, zIndex: 2 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="infos"
      >
        <h2>{country.translations.fra.common}</h2>
        <h3>{country.capital}</h3>
        <p>Pop. {country.population.toLocaleString()}</p>
      </motion.div>
      <img
        src={country.flags.svg}
        alt={"drapeau " + country.translations.fra.common}
      />
    </motion.li>
  );
});

Card.displayName = 'Card';

export default Card;