import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skills = ['JavaScript', 'React', 'Python', 'C++', 'Problem-Solving', 'Team Collaboration'];

  return (
    <section className="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: '#007bff' }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Skills;
