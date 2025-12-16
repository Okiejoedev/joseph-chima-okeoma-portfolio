'use client';

import { motion } from 'framer-motion';
import { Trophy, Star, Heart, Users, Calendar, Award, Target, Sparkles, TrendingUp } from 'lucide-react';

const AwardsSection = () => {
  const awards = [
    {
      title: "Overall Best Student in English",
      organization: "Deeper Life High School",
      location: "Lagos State, Nigeria",
      date: "Oct 2010",
      type: "Academic",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Best Project Student",
      organization: "Federal University Oye Ekiti",
      location: "Oye Ekiti, Nigeria",
      date: "July 2022",
      type: "Academic",
      icon: Award,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Award of Leadership Excellence",
      organization: "National Youth Service Corps",
      location: "Ogbomosho, Oyo State, Nigeria",
      date: "July 2024",
      type: "Leadership",
      icon: Star,
      color: "from-blue-500 to-blue-600"
    }
  ];

  const leadershipExperience = [
    {
      title: "Editorial Team",
      organization: "Federal Road Safety Corps, National Youth Service Corps (CDS)",
      location: "Ogbomosho, Oyo State, Nigeria",
      period: "May 2024 – July 2024",
      achievements: [
        "Produced 30+ videos, graphics, and articles leading 10-member team",
        "Created 10 AI-driven videos boosting audience reach from 500 to 10,000+",
        "Drew initiatives leading to uniform reforms and increased student membership from 20 to 50+"
      ],
      metrics: {
        content: "30+",
        reach: "10K+",
        growth: "150%"
      }
    },
    {
      title: "Vice President",
      organization: "Deeper Life Campus Fellowship",
      location: "Federal University Oye Ekiti, Nigeria",
      period: "Jan 2022 – Oct 2022",
      achievements: [
        "Supervised 10+ departmental units fostering collaboration among 50+ workers",
        "Organized monthly leadership meetings enhancing team communication",
        "Improved fellowship efficiency boosting participation by 50%"
      ],
      metrics: {
        units: "10+",
        workers: "50+",
        growth: "50%"
      }
    }
  ];

  const communityService = [
    {
      title: "TECH UNPLUGGED",
      period: "Aug 2024 – Nov 2024",
      achievements: [
        "Created 50+ interactive visuals using AI tools enhancing presentation quality",
        "Led 3-member team coordinating AI-powered content for audience experience",
        "Grew event engagement from 600 to 17,000+ participants achieving record milestone"
      ],
      metrics: {
        visuals: "50+",
        team: "3",
        participants: "17K+"
      },
      impact: "Technology education and community engagement"
    },
    {
      title: "AFRICA FUTURE LEADERS CONFERENCE",
      period: "July 2024",
      achievements: [
        "Created and managed 10 AI-powered videos streamlining production",
        "Led 4 collaborators aligning content across departments for seamless streaming",
        "Increased event attendance by 40% to 500+ participants attracting high-profile guests"
      ],
      metrics: {
        videos: "10",
        team: "4",
        attendance: "500+"
      },
      impact: "Leadership development and networking"
    },
    {
      title: "FRSC COMMUNITY DEVELOPMENT SERVICE NYSC",
      period: "Jul 2023 – Jul 2024",
      achievements: [
        "Volunteered creating documentary-style videos amplifying FRSC sanitation initiatives",
        "Participated in major community clean-up covering 100+ shops and 80+ houses",
        "Boosted community engagement by over 200% earning recognition for social impact"
      ],
      metrics: {
        videos: "Multiple",
        coverage: "180+",
        engagement: "200%+"
      },
      impact: "Public safety and environmental sanitation"
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
    <section id="awards" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
              Awards & Recognition
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating achievements in academics, leadership, and community service
          </p>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Academic & Professional Awards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${award.color} rounded-full flex items-center justify-center mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{award.title}</h4>
                    <p className="text-purple-600 font-semibold mb-1">{award.organization}</p>
                    <p className="text-gray-600 text-sm mb-2">{award.location}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {award.date}
                    </div>
                    <div className="mt-3 px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">
                      {award.type}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Leadership Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <Users className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Leadership Experience</h3>
              <p className="text-gray-600">Roles demonstrating leadership and organizational skills</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadershipExperience.map((leadership, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{leadership.title}</h4>
                    <p className="text-blue-600 font-semibold">{leadership.organization}</p>
                    <p className="text-gray-600 text-sm">{leadership.location}</p>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  {leadership.period}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {Object.entries(leadership.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-2 bg-white rounded-lg">
                      <div className="text-lg font-bold text-blue-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                <ul className="space-y-2">
                  {leadership.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Service */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-8">
            <Heart className="w-8 h-8 text-red-600 mr-3" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Community Service & Volunteering</h3>
              <p className="text-gray-600">Giving back to the community through meaningful service</p>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {communityService.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 border-b border-red-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {service.period}
                  </div>
                </div>

                <div className="p-6">
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(service.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-2 bg-red-50 rounded">
                        <div className="text-sm font-bold text-red-600">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="mb-4 p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg">
                    <p className="text-sm text-red-700 font-medium">
                      <Target className="w-4 h-4 inline mr-1" />
                      Impact: {service.impact}
                    </p>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {service.achievements.slice(0, 2).map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <Sparkles className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-xs leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Overall Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-6">Community Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "17K+", label: "People Engaged", icon: Users },
                { number: "50+", label: "Content Created", icon: Target },
                { number: "200%", label: "Engagement Growth", icon: TrendingUp },
                { number: "3", label: "Major Initiatives", icon: Award }
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                  >
                    <Icon className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;