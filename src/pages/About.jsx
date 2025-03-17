import React from "react";
import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Layout>
      <motion.div
        className="about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          À Propos
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Projet d'Application des Pays du Monde en React
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Ce projet est une application interactive des pays du monde, créée en utilisant React et en se basant sur l'API Rest Countries. L'objectif de cette application est de permettre aux utilisateurs de rechercher et d'afficher des informations détaillées sur différents pays, telles que leur drapeau, leur capitale, leur population, leur langue et bien plus encore.
        </motion.p>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Fonctionnalités Principales
        </motion.h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h4>Exploration Facilitée</h4>
          <p>L'application permet aux utilisateurs de rechercher des pays par leur nom ou de parcourir la liste complète des pays du monde.</p>

          <h4>Détails des Pays</h4>
          <p>Chaque pays affiche des informations importantes telles que la population, la superficie, la monnaie utilisée, les langues parlées et bien d'autres détails.</p>

          <h4>Affichage des Drapeaux</h4>
          <p>L'application utilise l'API Rest Countries pour afficher les drapeaux officiels de chaque pays.</p>

          <h4>Tri et Filtrage</h4>
          <p>Les utilisateurs peuvent trier les pays par nom, population, superficie, etc., et appliquer des filtres pour afficher uniquement les pays répondant à certaines conditions.</p>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default About;