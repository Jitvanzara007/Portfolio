import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaTools } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiBootstrap } from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = {
    frontend: {
      title: 'Frontend',
      icon: <FaReact className="w-6 h-6" />,
      skills: [
        { name: 'React', level: 90, icon: <FaReact /> },
        { name: 'JavaScript', level: 85, icon: <SiJavascript /> },
        { name: 'TypeScript', level: 80, icon: <SiTypescript /> },
        { name: 'Bootstrap', level: 85, icon: <SiBootstrap /> },
      ],
    },
    backend: {
      title: 'Backend',
      icon: <FaNodeJs className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', level: 85, icon: <FaNodeJs /> },
        { name: 'Express', level: 80, icon: <FaNodeJs /> },
        { name: 'MongoDB', level: 75, icon: <SiMongodb /> },
        { name: 'SQL', level: 70, icon: <FaDatabase /> },
      ],
    },
    tools: {
      title: 'Tools & Others',
      icon: <FaTools className="w-6 h-6" />,
      skills: [
        { name: 'Git', level: 85, icon: <FaTools /> },
        
      ],
    },
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Category selector */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span>{category.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-purple-400">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                <span className="text-purple-400 font-semibold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Additional Skills</h3>
          <div className="flex flex-wrap gap-4">
            {['Problem Solving', 'Team Collaboration', 'Agile Methodologies', 'UI/UX Design', 'Technical Writing', 'Code Review'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white/5 rounded-full text-gray-300 hover:bg-white/10 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 