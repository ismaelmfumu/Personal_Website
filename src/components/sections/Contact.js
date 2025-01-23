import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const contactMethods = [
    {
      name: 'LinkedIn',
      image: 'https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg',
      link: 'https://www.linkedin.com/in/ismael-mfumu/',
      description: 'Connect with me professionally and stay updated on my career journey.'
    },
    {
      name: 'GitHub',
      image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      link: 'https://github.com/ismaelmfumu',
      description: 'Explore my coding projects and contributions to open-source.'
    },
    {
      name: 'Email',
      image: 'https://www.freepnglogos.com/uploads/email-png/email-western-libraries-12.png',
      link: 'mailto:mfumui395@gmail.com',
      description: 'Reach out to me directly for inquiries or collaboration opportunities.'
    }
  ];

  return (
    <section className="contact">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>
      <div className="contact-cards">
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            className="contact-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <a href={method.link} target="_blank" rel="noopener noreferrer">
              <motion.img
                src={method.image}
                alt={method.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {method.name}
              </motion.h3>
              <motion.p
                className="description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {method.description}
              </motion.p>
            </a>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="feedback-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3>I'd Love to Hear From You!</h3>
        <p>Your feedback is valuable to me. Whether you have a question about my projects, want to discuss potential collaborations, or just want to say hello, I'm always open to dialogue. Feel free to reach out through any of the channels above or leave a message here:</p>
        <textarea placeholder="Your message here..." rows="4"></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Contact;
