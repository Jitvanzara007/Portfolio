import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer } from 'react-icons/fa';

const About = () => {
  const cards = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Creating beautiful and responsive user interfaces using modern frameworks and best practices.',
    },
    {
      icon: <FaServer className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Building robust and scalable server-side applications with efficient database management.',
    },
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      title: 'Full Stack Solutions',
      description: 'Delivering end-to-end solutions that combine frontend and backend technologies seamlessly.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm a passionate full-stack developer with a keen eye for design and a love for creating
            exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{card.title}</h3>
              <p className="text-gray-400">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-400 mb-6">
                With several years of experience in web development, I've worked on various projects
                ranging from small business websites to complex web applications. I'm constantly
                learning and adapting to new technologies to deliver the best solutions.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">3+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">50+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">30+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-1">
                <div className="w-full h-full rounded-2xl bg-gray-900/50 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
                      Let's Work Together
                    </div>
                    <p className="text-gray-400">
                      I'm always open to new opportunities and collaborations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 