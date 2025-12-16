'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Trophy, Brain, Microscope, School, ChevronRight } from 'lucide-react';

const ResearchSection = () => {
  const researchExperiences = [
    {
      title: "Research Assistant",
      organization: "Research Hub Nexus",
      location: "Lagos State, Nigeria",
      period: "Jan 2025 - Present",
      icon: Brain,
      color: "from-purple-500 to-purple-600",
      achievements: [
        "Co-authored two AI and Deep Learning papers, one published and one under peer review",
        "Contributed to projects on Explainable AI and AI applications for public health surveillance",
        "Collaborated within a research community to develop innovative ideas in Machine Learning and Data Science"
      ]
    },
    {
      title: "Research Assistant",
      organization: "Federal University Oye Ekiti",
      location: "Ekiti State, Nigeria",
      period: "Jan 2022 - Dec 2024",
      icon: Microscope,
      color: "from-blue-500 to-blue-600",
      achievements: [
        "Developed a 3D Virtual Reality Classroom using Unity 3D, Mozilla Hubs, and Oculus Rift",
        "Led team on 'Breast Cancer Detection and Classification Using Deep Learning' with 95% accuracy",
        "Engaged 100+ students, improving classroom participation and focus by over 40%"
      ]
    },
    {
      title: "AI-Enhanced Differentiated Learning Research",
      organization: "Elementary STEM Education Project",
      location: "Nigeria",
      period: "Aug 2025 – Nov 2025",
      icon: School,
      color: "from-green-500 to-green-600",
      achievements: [
        "Deployed AI-enhanced learning tools across 4 elementary STEM classes for 120+ students",
        "Achieved 78% increase in engagement and 65% improvement in learning outcomes",
        "Trained 8 educators to integrate AI-based content personalization and mental-health monitoring"
      ],
      advisor: "Micheal A. Oladosu"
    },
    {
      title: "Undergraduate Research",
      organization: "Interactive 3D Classroom Project",
      location: "Federal University Oye Ekiti",
      period: "Jan 2022 – Jan 2023",
      icon: Brain,
      color: "from-orange-500 to-orange-600",
      achievements: [
        "Developed fully immersive VR classroom ecosystem with 4 virtual classrooms and staff rooms",
        "Designed secure SQL-backed database for students and educators",
        "Achieved 80% improvement in engagement compared to traditional classrooms",
        "Awarded Best Final-Year Project (Grade: A) by the department"
      ],
      advisor: "Dr Daramola Ademidunsi"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 0.8, delay: 0.3 }
    }
  };

  return (
    <section id="research" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
              Research Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering research at the intersection of AI, VR, and educational technology
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <motion.div
            variants={lineVariants}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-blue-400 transform md:-translate-x-1/2"
          />

          {/* Research Items */}
          <div className="space-y-12">
            {researchExperiences.map((experience, index) => {
              const Icon = experience.icon;
              const isEven = index % 2 === 1;
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-purple-500 rounded-full z-10">
                    <div className={`absolute inset-1 bg-gradient-to-r ${experience.color} rounded-full`}></div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}
                  >
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className={`w-12 h-12 bg-gradient-to-r ${experience.color} rounded-lg flex items-center justify-center mr-4`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {experience.title}
                            </h3>
                            <p className="text-purple-600 font-semibold">
                              {experience.organization}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {experience.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {experience.location}
                        </div>
                      </div>

                      {/* Advisor (if available) */}
                      {experience.advisor && (
                        <div className="bg-purple-50 rounded-lg p-3 mb-4">
                          <p className="text-sm text-purple-700">
                            <span className="font-semibold">Advisor:</span> {experience.advisor}
                          </p>
                        </div>
                      )}

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center">
                          <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <ChevronRight className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact Metrics */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex flex-wrap gap-2">
                          {experience.achievements.some(a => a.includes('100+')) && (
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                              100+ Students Impacted
                            </span>
                          )}
                          {experience.achievements.some(a => a.includes('95%')) && (
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                              95% Accuracy
                            </span>
                          )}
                          {experience.achievements.some(a => a.includes('80%')) && (
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                              80% Improvement
                            </span>
                          )}
                          {experience.achievements.some(a => a.includes('published')) && (
                            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                              Published Research
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Research Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Research Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "100+", label: "Students Engaged" },
                { number: "95%", label: "Model Accuracy" },
                { number: "40%", label: "Participation Increase" },
                { number: "2", label: "Published Papers" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm opacity-90">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;