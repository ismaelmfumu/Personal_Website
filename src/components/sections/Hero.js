import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Computer Systems Engineer passionate about solving complex problems with innovative solutions.";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-content"
      >
        <div className="hero-images">
          <motion.img
            src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/cb3c99de953c9af2e631fb5e3fb778d7-1714580938099/4642bcd2-98dc-40f0-960c-cfc8a2331795.JPG"
            alt="Ismael Mfumu 1"
            className="hero-image"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.img
            src="https://media.licdn.com/dms/image/D4E03AQFAQNVaYHByZg/profile-displayphoto-shrink_200_200/0/1685381568331?e=2147483647&v=beta&t=GAmUe1e_gn9kVUhNqdxaQOj4aKl1mELE3uzMWGnCaeU"
            alt="Ismael Mfumu 2"
            className="hero-image"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          />
        </div>
        <h1>Hi, I'm Ismael Mfumu</h1>
        <p>{typedText}</p>
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
