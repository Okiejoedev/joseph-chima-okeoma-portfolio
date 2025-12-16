'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ExternalLink, Linkedin, Globe, Calendar, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "josephokeoma07@gmail.com",
      href: "mailto:josephokeoma07@gmail.com",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 810 189 2632",
      href: "tel:+2348101892632",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      href: "#",
      color: "from-blue-500 to-blue-600"
    }
  ];

  const professionalLinks = [
    {
      name: "LinkedIn Profile",
      url: "https://www.linkedin.com/in/okiejoe",
      description: "Professional network and career updates",
      icon: Linkedin,
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "Research Hub Nexus",
      url: "#",
      description: "Current research institution profile",
      icon: Globe,
      color: "from-purple-600 to-purple-700"
    }
  ];

  const professionalAffiliations = [
    {
      name: "International Association of Engineers",
      url: "#",
      period: "Oct 2025 - present"
    },
    {
      name: "Research Hub Nexus Institute",
      url: "#",
      period: "Jan 2025 - present"
    },
    {
      name: "Global AI Community",
      url: "#",
      period: "Oct 2025 - present"
    },
    {
      name: "The AI Foundation",
      url: "#",
      period: "Oct 2025 - present"
    },
    {
      name: "South African Artificial Intelligence Association",
      url: "#",
      period: "Oct 2025 - present"
    },
    {
      name: "National Association of Computer Science Students (NACOS)",
      url: "#",
      period: "Sept 2018 – present"
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
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
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
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's connect and explore opportunities for collaboration and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      <div className={`w-10 h-10 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center mr-4`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{info.label}</p>
                        <p className="font-semibold text-gray-900">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Professional Links */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 mt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Professional Links</h3>
              <div className="space-y-3">
                {professionalLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="block p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg hover:from-purple-100 hover:to-blue-100 transition-all duration-200"
                    >
                      <div className="flex items-center">
                        <div className={`w-10 h-10 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center mr-3`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 text-sm">{link.name}</p>
                          <p className="text-xs text-gray-600">{link.description}</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form & Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
              
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mb-6"
              >
                <div className="flex items-center mb-3">
                  <MessageCircle className="w-6 h-6 text-purple-600 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-900">Let's Collaborate!</h4>
                </div>
                <p className="text-gray-700 mb-4">
                  I'm always interested in discussing research opportunities, 
                  AI projects, educational technology initiatives, and potential collaborations. 
                  Whether you're looking for a research partner, speaker, or consultant, 
                  feel free to reach out!
                </p>
                <div className="flex flex-wrap gap-2">
                  {["AI Research", "VR/AR Projects", "Educational Technology", "Public Health AI", "Machine Learning"].map((topic) => (
                    <span key={topic} className="px-3 py-1 bg-white text-purple-700 rounded-full text-xs font-medium">
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.a
                href="mailto:josephokeoma07@gmail.com?subject=Inquiry%20from%20Portfolio%20Website&body=Hi%20Joseph,%0A%0AI%20came%20across%20your%20portfolio%20website%20and%20would%20like%20to%20discuss..."
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Open Email Client
              </motion.a>
            </div>

            {/* Professional Affiliations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 mt-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Professional Affiliations</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-3"
              >
                {professionalAffiliations.map((affiliation, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                        <Globe className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{affiliation.name}</p>
                        <p className="text-xs text-gray-600 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {affiliation.period}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start a Conversation?</h3>
            <p className="text-lg mb-6 opacity-90">
              I'm excited to hear about your projects and explore how we can work together to create innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:josephokeoma07@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/okiejoe"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition-all duration-200 flex items-center justify-center"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;