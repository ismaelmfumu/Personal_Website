import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>
        <p>
          I am a Computer Systems Engineer with a strong background in software development and system design. I specialize in creating efficient, scalable solutions for complex problems.
        </p>
        <ul>
          <li>Bachelor's Degree in Computer Systems Engineering</li>
          <li>Developed a machine learning model for predictive analytics</li>
          <li>Passionate about teamwork and innovation</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default About;
