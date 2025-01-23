import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="about">
      <motion.div
  className="profile-image"
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  <img src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/cb3c99de953c9af2e631fb5e3fb778d7-1714580938099/4642bcd2-98dc-40f0-960c-cfc8a2331795.JPG" alt="Ismael Mfumu" />
</motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2>About Me</h2>
        <motion.div className="info-box" variants={boxVariants} initial="hidden" whileInView="visible">
          <p>
            I'm Ismael Mfumu, a Computer Systems Engineering student at Carleton University, set to graduate in 2024. My passion lies in bridging the gap between hardware and software technologies, with a focus on innovative solutions and continuous learning.
          </p>
        </motion.div>

        <motion.div className="info-box" variants={boxVariants} initial="hidden" whileInView="visible">
          <h3>Technical Skills</h3>
          <ul>
            <li>Programming Languages: Java, Python, C++, Go, C, Assembly</li>
            <li>Web Development: JavaScript, CSS, HTML, Flask, REST APIs</li>
            <li>Hardware: Raspberry Pi, Arduino, PCB and ASIC development</li>
            <li>Tools: Firebase, Microsoft Access</li>
          </ul>
        </motion.div>

        <motion.div className="info-box" variants={boxVariants} initial="hidden" whileInView="visible">
          <h3>Professional Experience</h3>
          <p>
            Currently, I'm a Retail Sales Representative at the Ottawa Senators Hockey Club, where I blend customer service with technical skills. Previously, I honed my interpersonal and sales abilities at Tommy Hilfiger, consistently achieving top performance recognition.
          </p>
        </motion.div>

        <motion.div className="info-box" variants={boxVariants} initial="hidden" whileInView="visible">
          <h3>Key Achievements</h3>
          <ul>
            <li>Developed machine learning models for predictive analytics</li>
            <li>Contributed to Tommy Hilfiger's top 10 ranking in Canada</li>
            <li>Multiple-time Employee of the Month at Tommy Hilfiger</li>
          </ul>
        </motion.div>

        <motion.div className="info-box" variants={boxVariants} initial="hidden" whileInView="visible">
          <p>
            I'm passionate about teamwork, innovation, and applying my engineering knowledge to real-world challenges. Let's connect and explore how we can create impactful solutions together!
          </p>
        </motion.div>

        <motion.div className="contact-info" variants={boxVariants} initial="hidden" whileInView="visible">
          <p>Email: mfumui395@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/ismael-mfumu" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/ismael-mfumu</a></p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
