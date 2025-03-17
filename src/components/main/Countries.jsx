import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const radioVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      className="countries"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="radio-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="range-container" variants={radioVariants}>
          <label>Nombre de pays : {rangeValue}</label>
          <input
            type="range"
            min="1"
            max="250"
            value={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
          />
        </motion.div>
        
        <motion.div className="continent-container" variants={containerVariants}>
          {radios.map((continent) => (
            <motion.div
              key={continent}
              className="radio-item"
              variants={radioVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <input
                type="radio"
                id={continent}
                name="continentRadio"
                checked={continent === selectedRadio}
                onChange={(e) => setSelectedRadio(e.target.id)}
              />
              <motion.label 
                htmlFor={continent}
                whileHover={{ color: "#61dafb" }}
              >
                {continent}
              </motion.label>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      <AnimatePresence mode="wait">
        {selectedRadio && (
          <motion.button
            onClick={() => setSelectedRadio("")}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Annuler la recherche
          </motion.button>
        )}
      </AnimatePresence>

      <motion.div 
        className="countries-grid"
        layout
      >
        <AnimatePresence mode="popLayout">
          {data
            .filter((country) => country.continents[0].includes(selectedRadio))
            .sort((a, b) => b.population - a.population)
            .slice(0, rangeValue)
            .map((country) => (
              <Card key={country.name.common} country={country} />
            ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Countries;