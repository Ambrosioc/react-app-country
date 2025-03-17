import React from 'react';
import { motion } from 'framer-motion';
import { Logo, Nav } from '../header';

const Layout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="layout"
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Logo />
        <Nav />
      </motion.div>
      <motion.main
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {children}
      </motion.main>
    </motion.div>
  );
};

export default Layout;