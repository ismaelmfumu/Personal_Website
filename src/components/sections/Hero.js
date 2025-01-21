import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/path-to-your-photo.jpg"
          alt="Ismael Mfumu"
          className="hero-image"
        />
        <h1>Hi, I'm Ismael Mfumu</h1>
        <p>Computer Systems Engineer passionate about solving complex problems with innovative solutions.</p>
        <motion.a
          href="#projects"
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View Projects
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
