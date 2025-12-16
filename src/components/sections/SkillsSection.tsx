'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Users, MessageSquare, Brain, Cpu, Monitor, BarChart, Star } from 'lucide-react';

const SkillsSection = () => {
  const skillsCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "Python", level: 95 },
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "OpenAI API", level: 88 },
        { name: "Unity3D", level: 82 },
        { name: "Unreal Engine", level: 78 },
        { name: "Blender", level: 80 },
        { name: "HTML/CSS/JavaScript", level: 85 },
        { name: "Figma", level: 75 },
        { name: "Git", level: 90 },
        { name: "Jupyter Notebook", level: 92 }
      ]
    },
    {
      title: "Research & Design",
      icon: Brain,
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "User Experience (UX) Design", level: 88 },
        { name: "Human-Computer Interaction", level: 92 },
        { name: "Usability Testing", level: 85 },
        { name: "Eye-Tracking Analysis", level: 80 },
        { name: "Data Visualization", level: 87 },
        { name: "Neural Network Design", level: 90 },
        { name: "Model Evaluation", level: 88 },
        { name: "Generative AI (LLMs)", level: 93 },
        { name: "Diffusion Models", level: 85 },
        { name: "AR/VR Prototyping", level: 82 },
        { name: "Interaction Design Research", level: 89 }
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "from-green-500 to-green-600",
      skills: [
        { name: "Communication", level: 95 },
        { name: "Creative Problem-Solving", level: 92 },
        { name: "Collaboration", level: 90 },
        { name: "Leadership", level: 88 },
        { name: "Critical Thinking", level: 93 },
        { name: "Time Management", level: 87 },
        { name: "Presentation", level: 91 },
        { name: "Research Writing", level: 89 }
      ]
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

  const SkillBar = ({ skill, index }: { skill: { name: string; level: number }, index: number }) => (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: "100%", opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="mb-3"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-xs text-gray-500">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 0.8, delay: index * 0.05 + 0.2 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-white">
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
              Skills & Competencies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise spanning technical skills, research methodologies, and interpersonal abilities
          </p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skillsCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-1">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      index={categoryIndex * 20 + skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Core Competencies Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Brain,
                  title: "AI/ML Expertise",
                  description: "Deep learning, neural networks, and generative AI"
                },
                {
                  icon: Monitor,
                  title: "VR/AR Development",
                  description: "Immersive experiences and spatial computing"
                },
                {
                  icon: BarChart,
                  title: "Data Analysis",
                  description: "Statistical analysis and visualization"
                },
                {
                  icon: MessageSquare,
                  title: "UX Research",
                  description: "User-centered design and testing"
                }
              ].map((competency, index) => {
                const Icon = competency.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">{competency.title}</h4>
                    <p className="text-sm opacity-90">{competency.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Certifications Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Generative AI: The Future of UX UI Design - IBM",
              "Introduction to Modern AI - University of Michigan",
              "Generative AI: Prompt Engineering Basics - IBM",
              "Foundations of Cybersecurity - Google"
            ].map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-purple-50 border border-purple-200 rounded-full px-4 py-2 text-sm text-purple-700"
              >
                <Star className="w-4 h-4 inline mr-1" />
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;