import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      name: 'Project A',
      description: 'A web application for managing tasks.',
      technologies: ['React', 'Node.js'],
    },
    {
      name: 'Project B',
      description: 'A machine learning model for predictive analytics.',
      technologies: ['Python', 'TensorFlow'],
    },
    // Add more projects here...
  ];

  return (
    <section className="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
