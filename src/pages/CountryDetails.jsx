import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";

const CountryDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
        setCountry(response.data[0]);
      } catch (error) {
        console.error("Error fetching country:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [name]);

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen">
          <p>Chargement...</p>
        </div>
      </Layout>
    );
  }

  if (!country) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-screen">
          <p>Pays non trouvé</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg"
          >
            Retour à l'accueil
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <motion.div
        className="country-details"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          className="back-button"
          onClick={() => navigate("/")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Retour
        </motion.button>

        <motion.div
          className="country-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flag-container">
            <motion.img
              src={country.flags.svg}
              alt={`Drapeau ${country.translations.fra.common}`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            />
          </div>

          <div className="info-container">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {country.translations.fra.common}
            </motion.h1>

            <motion.div
              className="details-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="detail-item">
                <h3>Capitale</h3>
                <p>{country.capital?.[0] || "N/A"}</p>
              </div>

              <div className="detail-item">
                <h3>Région</h3>
                <p>{country.region}</p>
              </div>

              <div className="detail-item">
                <h3>Population</h3>
                <p>{country.population.toLocaleString()}</p>
              </div>

              <div className="detail-item">
                <h3>Langues</h3>
                <p>
                  {Object.values(country.languages || {}).join(", ") || "N/A"}
                </p>
              </div>

              <div className="detail-item">
                <h3>Monnaie</h3>
                <p>
                  {Object.values(country.currencies || {})
                    .map((currency) => `${currency.name} (${currency.symbol})`)
                    .join(", ") || "N/A"}
                </p>
              </div>

              <div className="detail-item">
                <h3>Superficie</h3>
                <p>{country.area?.toLocaleString() || "N/A"} km²</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default CountryDetails;