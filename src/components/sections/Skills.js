import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      name: 'JavaScript',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      description: 'Learned through online courses and building interactive web applications. Essential for front-end and back-end development in modern web engineering.',
      learning: 'Mastered through projects like creating dynamic user interfaces and server-side applications with Node.js.'
    },
    {
      name: 'React',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      description: 'Crucial for building efficient, scalable user interfaces. Its component-based architecture revolutionizes front-end development.',
      learning: 'Gained proficiency by developing several single-page applications and studying advanced React patterns.'
    },
    {
      name: 'Python',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
      description: 'Versatile language used in various fields of engineering, from web development to data science and machine learning.',
      learning: 'Learned through university courses and personal projects in data analysis and automation.'
    },
    {
      name: 'C++',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
      description: 'Powerful language for system programming and developing high-performance applications. Critical in embedded systems and game development.',
      learning: 'Mastered through rigorous university coursework and implementing complex algorithms.'
    },
    {
      name: 'Problem-Solving',
      image: 'https://cdn-icons-png.flaticon.com/512/4133/4133589.png',
      description: 'Core skill in engineering for analyzing complex issues and developing effective solutions.',
      learning: 'Honed through tackling challenging projects and participating in coding competitions.'
    },
    {
      name: 'Team Collaboration',
      image: 'https://cdn-icons-png.flaticon.com/512/1534/1534938.png',
      description: 'Essential for successful project execution in modern engineering environments.',
      learning: 'Developed through group projects, hackathons, and internships involving cross-functional teams.'
    }
  ];

  return (
    <section className="skills">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <div className="skill-cards">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={skill.image}
              alt={skill.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {skill.name}
            </motion.h3>
            <motion.p
              className="description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {skill.description}
            </motion.p>
            <motion.p
              className="learning"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <strong>How I learned:</strong> {skill.learning}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
