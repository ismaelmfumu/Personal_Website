import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import './Projects.css';

// Import your images here
import Snow1 from '../../images/Snow1.png';
import Snow2 from '../../images/Snow2.png';
import Snow3 from '../../images/Snow3.png';
import Snow4 from '../../images/Snow4.png';
import Snow5 from '../../images/Snow5.png';
import VotingImage1 from '../../images/VotingImage1.png';
import VotingImage2 from '../../images/VotingImage2.png';
import VotingImage3 from '../../images/VotingImage3.png';
import Mentor1 from '../../images/Mentor1.png';
import Mentor2 from '../../images/Mentor2.png';
import Mentor3 from '../../images/Mentor3.png';
import Plant1 from '../../images/Plant1.png';
import Plant2 from '../../images/Plant2.png';
import Plant3 from '../../images/Plant3.png';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      name: 'Music Voting and Community Platform',
      description: 'A dynamic web application using Python Flask and Firebase, showcasing full-stack development and cloud integration.',
      technologies: ['Python', 'Flask', 'Firebase', 'REST APIs', 'HTML', 'CSS', 'JavaScript', 'Git'],
      keyFeatures: [
        'Implemented robust server-side logic using Python Flask',
        'Utilized Firebase Firestore for real-time data storage and retrieval',
        'Designed secure login and registration system',
        'Created intuitive API endpoints for voting and leaderboard updates',
        'Crafted responsive user interfaces',
        'Implemented data sanitization for security'
      ],
      images: [VotingImage1, VotingImage2, VotingImage3],
      rating: 0,
      totalRatings: 0
    },
    {
      name: 'Automated Snow Plow',
      description: 'A robot designed to clear snow or debris within a designated area, adhering to specific rules and avoiding penalties.',
      technologies: ['Robotics', 'Analog Circuit Design', 'Back-end Operations'],
      keyFeatures: [
        'Designed robot to clear debris within confined space',
        'Implemented obstacle avoidance and relocation',
        'Ensured adherence to size limits and boundary restrictions',
        'Collaborated in a team environment'
      ],
      images: [Snow1, Snow2, Snow3, Snow4, Snow5],
      rating: 0,
      totalRatings: 0
    },
    {
      name: 'Smart Garden Irrigation System',
      description: 'A combination of hardware and software to create an intelligent irrigation system for gardens.',
      technologies: ['Arduino Due', 'Web Development', 'Database Design', 'Sensors'],
      keyFeatures: [
        'Integrated soil moisture sensors with Arduino Due',
        'Developed web application for remote monitoring and control',
        'Designed database for storing sensor data and user settings',
        'Applied project management skills'
      ],
      images: [Plant1, Plant2, Plant3],
      rating: 0,
      totalRatings: 0
    },
    {
      name: 'MentorMe App',
      description: 'A personal project addressing a need in the engineering industry. (Contact for more information)',
      technologies: ['To be disclosed'],
      keyFeatures: [
        'Identified and addressed a gap in the engineering industry',
        'Developed innovative solution to meet industry needs'
      ],
      images: [Mentor1, Mentor2, Mentor3],
      rating: 0,
      totalRatings: 0
    }
  ]);

  const handleRating = (index, rating) => {
    setProjects(prevProjects => {
      const newProjects = [...prevProjects];
      const project = newProjects[index];
      const newTotalRatings = project.totalRatings + 1;
      const newRating = ((project.rating * project.totalRatings) + rating) / newTotalRatings;
      newProjects[index] = {
        ...project,
        rating: newRating,
        totalRatings: newTotalRatings
      };
      return newProjects;
    });
  };

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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <ul>
              {project.keyFeatures.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <div className="project-images">
              {project.images.map((image, imageIndex) => (
                <img key={imageIndex} src={image} alt={`${project.name} - Image ${imageIndex + 1}`} className="project-image" />
              ))}
            </div>
            <div className="rating">
              <p>Average Rating: {project.rating.toFixed(1)} ({project.totalRatings} ratings)</p>
              <div>
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;
                  return (
                    <FaStar
                      key={i}
                      className="star"
                      color={ratingValue <= project.rating ? "#ffc107" : "#e4e5e9"}
                      onClick={() => handleRating(index, ratingValue)}
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
