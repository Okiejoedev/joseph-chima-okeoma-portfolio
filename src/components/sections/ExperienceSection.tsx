'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin, Users, Award, TrendingUp, Building, School } from 'lucide-react';

const ExperienceSection = () => {
  const teachingExperience = [
    {
      title: "Tutor",
      organization: "Jofat Model College",
      location: "Ogbomosho, Nigeria",
      period: "Sept 2023 - July 2024",
      type: "Teaching",
      achievements: [
        "Taught Computer Science to 70+ students across Junior and Senior Secondary classes",
        "Achieved 70% improvement in academic performance and 80% excellence rate in Junior WAEC exams",
        "Initiated afterschool tutorial program growing from 20 to 100+ students",
        "Modernized curriculum with digital tools and 15+ practical lab sessions"
      ],
      metrics: {
        students: "70+",
        improvement: "70%",
        excellence: "80%"
      }
    },
    {
      title: "Undergraduate Tutor",
      organization: "Federal University Oye-Ekiti",
      location: "Ekiti State, Nigeria",
      period: "Feb 2020 - April 2022",
      type: "Teaching",
      achievements: [
        "Mentored 30+ peers in weekly tutorial sessions with measurable CGPA improvements",
        "Delivered Machine Learning and Deep Learning workshops using Python, TensorFlow, PyTorch",
        "Guided 20+ students across 5 supervisors in final-year projects",
        "90% of guided students achieved distinction grades"
      ],
      metrics: {
        students: "30+",
        projects: "20+",
        distinction: "90%"
      }
    },
    {
      title: "Web Design Tutor",
      organization: "Today's Tech",
      location: "Lagos State, Nigeria",
      period: "Feb 2021 - April 2021",
      type: "Teaching",
      achievements: [
        "Trained 10+ students in web design with HTML, CSS, and WordPress",
        "Led team project from planning to website launch in one month",
        "Expanded web design community from 5 to 10+ active members"
      ],
      metrics: {
        students: "10+",
        duration: "3 months",
        community: "10+"
      }
    }
  ];

  const industrialExperience = [
    {
      title: "VR Developer / Designer",
      organization: "Truedis Media",
      location: "Lekki County, Lagos State, Nigeria",
      period: "Nov 2022 - Dec 2024",
      type: "Industrial",
      achievements: [
        "Contributed to educational VR project advancement from 20% to 90% completion",
        "Designed immersive virtual environments with multidisciplinary team",
        "Supported project launch achieving 500,000+ user engagements",
        "Drove significant growth from initial 50,000 users"
      ],
      metrics: {
        completion: "90%",
        users: "500K+",
        growth: "900%"
      }
    },
    {
      title: "IT Support Specialist",
      organization: "Lagos State Building and Control Agency (LABCA)",
      location: "Lagos State, Nigeria",
      period: "Sept 2021 - Dec 2021",
      type: "Industrial",
      achievements: [
        "Provided daily technical support to 10-15 employees resolving 7+ issues daily",
        "Assisted in system installations, updates, and device procurement",
        "Co-organized state event attended by Governor of Lagos",
        "Received commendation and incentives for outstanding contribution"
      ],
      metrics: {
        users: "15",
        issues: "7+/day",
        events: "1"
      }
    },
    {
      title: "IT Support Intern",
      organization: "First Bank Nigeria",
      location: "Lagos State, Nigeria",
      period: "Jan 2020 - March 2020",
      type: "Industrial",
      achievements: [
        "Supported 10+ users daily resolving 5-7 software, hardware, and network issues",
        "Installed, configured, and updated Windows, Office, and banking applications",
        "Collaborated with IT team on troubleshooting improving service response",
        "Earned A-grade internship evaluation"
      ],
      metrics: {
        users: "10+",
        issues: "5-7/day",
        grade: "A"
      }
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

  const ExperienceCard = ({ experience, index }: { experience: any, index: number }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Card Header */}
      <div className={`p-6 bg-gradient-to-r ${
        experience.type === 'Teaching' 
          ? 'from-green-50 to-emerald-50 border-b border-green-100' 
          : 'from-blue-50 to-indigo-50 border-b border-blue-100'
      }`}>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
              experience.type === 'Teaching'
                ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                : 'bg-gradient-to-r from-blue-500 to-indigo-500'
            }`}>
              {experience.type === 'Teaching' ? (
                <GraduationCap className="w-5 h-5 text-white" />
              ) : (
                <Briefcase className="w-5 h-5 text-white" />
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
              <p className={`font-semibold ${
                experience.type === 'Teaching' ? 'text-green-600' : 'text-blue-600'
              }`}>
                {experience.organization}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {experience.period}
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {experience.location}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Key Metrics */}
        {experience.metrics && (
          <div className="grid grid-cols-3 gap-3 mb-6">
            {Object.entries(experience.metrics).map(([key, value]) => (
              <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                <div className={`text-lg font-bold ${
                  experience.type === 'Teaching' ? 'text-green-600' : 'text-blue-600'
                }`}>
                  {value}
                </div>
                <div className="text-xs text-gray-600 capitalize">
                  {key.replace(/_/g, ' ')}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Achievements */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <Award className="w-4 h-4 mr-2 text-yellow-500" />
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement: string, achIndex: number) => (
              <li key={achIndex} className="flex items-start">
                <TrendingUp className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm leading-relaxed">
                  {achievement}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 bg-white">
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
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diverse experience spanning education, technology development, and IT support
          </p>
        </motion.div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { number: "6", label: "Years Experience", icon: Calendar },
            { number: "200+", label: "Students Taught", icon: Users },
            { number: "500K+", label: "Users Reached", icon: TrendingUp },
            { number: "3", label: "Organizations", icon: Building }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 text-center border border-purple-100"
              >
                <Icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Teaching Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <School className="w-8 h-8 text-green-600 mr-3" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Teaching Experience</h3>
              <p className="text-gray-600">Educational roles and mentorship positions</p>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {teachingExperience.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </motion.div>
        </motion.div>

        {/* Industrial Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-8">
            <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Industrial Experience</h3>
              <p className="text-gray-600">Professional roles in technology and IT support</p>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {industrialExperience.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index + 100} />
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Applied Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Skills Applied in Practice</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "AI/ML Development",
                "VR/AR Design",
                "Curriculum Development",
                "Technical Support",
                "Project Management",
                "Team Leadership",
                "System Administration",
                "User Training"
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center text-sm font-medium"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;