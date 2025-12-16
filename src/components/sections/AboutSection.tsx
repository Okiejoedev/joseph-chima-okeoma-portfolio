'use client';

import { motion } from 'framer-motion';
import { Brain, Lightbulb, Target, Zap, GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';

const AboutSection = () => {
  const researchInterests = [
    {
      icon: Brain,
      title: "Human Computer Interaction",
      description: "Designing intuitive interfaces and seamless interactions between humans and technology",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Lightbulb,
      title: "Human-AI Interaction",
      description: "Exploring the dynamics of human collaboration with artificial intelligence systems",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Target,
      title: "Intelligent Systems",
      description: "Building smart systems that can adapt, learn, and make autonomous decisions",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Zap,
      title: "Deep Learning",
      description: "Developing neural network architectures for complex pattern recognition and prediction",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate researcher and innovator dedicated to advancing the frontiers of AI and human-computer interaction
          </p>
        </motion.div>

        {/* Research Interests */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Research Interests</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My research focuses on creating intelligent systems that enhance human capabilities and improve user experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchInterests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={interest.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${interest.color} rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-r ${interest.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                      {interest.title}
                    </h4>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Academic Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Academic Background</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strong foundation in computer science with specialized focus on AI and human-computer interaction
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* University Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    Federal University Oye Ekiti
                  </h4>
                  <p className="text-lg text-purple-600 font-semibold mb-1">
                    Bachelor of Science (Hons.) in Computer Science
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Sept. 2018 - Jan. 2023
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      Ekiti State, Nigeria
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-4">
                    <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                      <span className="text-sm text-gray-600">CGPA:</span>
                      <span className="ml-2 font-bold text-purple-600">4.45/5.00</span>
                    </div>
                    <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                      <span className="text-sm text-gray-600">US Equivalent:</span>
                      <span className="ml-2 font-bold text-purple-600">3.66/4.0</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center mb-2">
                      <BookOpen className="w-5 h-5 text-purple-600 mr-2" />
                      <span className="font-semibold text-gray-900">Thesis Title:</span>
                    </div>
                    <p className="text-gray-700 italic">
                      "Interactive 3D Classroom with User Support Using Virtual Reality"
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-center md:justify-start">
                    <div className="flex items-center text-green-600">
                      <Award className="w-5 h-5 mr-2" />
                      <span className="font-medium">Best Final-Year Project (Grade: A)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;