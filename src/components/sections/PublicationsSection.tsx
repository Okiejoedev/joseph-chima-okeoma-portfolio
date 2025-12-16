'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Users, FileText, Quote, BookOpen, TrendingUp, Eye } from 'lucide-react';

const PublicationsSection = () => {
  const publications = [
    {
      title: "AI-Driven STEM Education for Public Health in Sustainable Agriculture",
      authors: "Joseph Chima Okeoma, Tope Julius Ojo, Arsema Getachew Temtme, Lucia Patrick Maganga, Okorie David Amah, Joy Ekerete James",
      journal: "World Journal of Agricultural Research and Innovations (WJARR)",
      year: "2025",
      doi: "https://doi.org/10.30574/wjarr.2025.28.2.3697",
      status: "published",
      type: "Journal Article",
      abstract: "This research explores the integration of AI-driven approaches in STEM education to address public health challenges in sustainable agriculture, providing innovative solutions for educational and agricultural sectors."
    },
    {
      title: "Adopting Artificial Intelligence in Small And Medium Enterprises: Exploring Administrative Challenges and Strategic Pathways For Effective Implementation",
      authors: "Abdullahi Umar Nasiru, Godsent Osimokha Achief, Kingsley Senior Sarpong Abeyie, Chinonso Anyaehie, Isiaka Ibrahim Oshobugie, Joseph Chima Okeoma",
      journal: "Problems of Science and Education",
      year: "2025",
      doi: "http://dx.doi.org/10.22178/pos.123-10",
      status: "published",
      type: "Journal Article",
      abstract: "An comprehensive analysis of AI adoption challenges in SMEs, exploring strategic pathways and administrative frameworks for successful implementation."
    },
    {
      title: "Generative AI in Marketing Communications: Implications For Brand Distinctiveness, Consumer Trust, And Regulatory Disclosure",
      authors: "Okoye Obumneme Chinweogor, Ogundimu Tosin Victoria, Nicholas Adoga Onma, Butum Grace Allan, Victoria Ochanya Agbo, Joseph Okeoma, Onukak Wisdom Okon",
      journal: "Zenodo",
      year: "2025",
      doi: "https://doi.org/10.5281/zenodo.17749967",
      status: "published",
      type: "Preprint",
      abstract: "Investigating the impact of generative AI on marketing communications, brand identity, consumer trust, and the regulatory landscape for AI-generated content."
    },
    {
      title: "AI-Enhanced Differentiated Learning in Elementary STEM: Promoting Mental Health, Psychological Resilience and Equity",
      authors: "Ololade Owolabi Babatunde, Oluwakemi Mary Alo, Joseph Chima Okeoma, Chinenyenwa Ihuaku Onuoha, Ridwan Olalekan Adeyemi, Eniola Christianah Ajila",
      journal: "World Journal of Agricultural Research and Innovations (WJARR)",
      year: "2025",
      doi: "https://doi.org/10.30574/wjarr.2025.28.1.3442",
      status: "published",
      type: "Journal Article",
      abstract: "Exploring the implementation of AI-enhanced differentiated learning in elementary STEM education, with focus on mental health promotion and educational equity."
    },
    {
      title: "Artificial Intelligence for Public Health Surveillance: Emerging Applications in Nigeria and Africa - A Systematic Review for Sustainable Urban Development",
      authors: "Micheal A. Oladosu, Moses A. Abah, Ugochukwu B. Akpor, Ojo A. Musefiu, Simeon I. Offiong, Franklin O. Ede, Abdullahi O. Olalere, Joseph C. Okeoma, Angel O. Ekele",
      journal: "Nigerian Journal of Technology and Research (NJRT)",
      year: "2025",
      status: "under_review",
      type: "Journal Article",
      abstract: "A systematic review examining AI applications in public health surveillance across Nigeria and Africa, focusing on sustainable urban development initiatives."
    },
    {
      title: "Advances in Explainable AI for Critical Decision Systems: Methods, Implementation Challenges, and Emerging Opportunities",
      authors: "Oladosu, Micheal; Abah, Moses; Adedoyin, Marvellous; Chiezie, Ifunanya; Ismail, Abiodun; Drefo, Somtochukwu; Ugwuja, Moses; Ajayi, Opeyemi; Okeoma, Joseph; Oladosu, Olaide",
      journal: "Journal of Social Computing",
      year: "2025",
      status: "under_review",
      type: "Journal Article",
      manuscriptId: "JSC-2025-0242",
      abstract: "Comprehensive review of explainable AI methods, implementation challenges, and emerging opportunities in critical decision-making systems."
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return { color: 'bg-green-100 text-green-700', text: 'Published' };
      case 'under_review':
        return { color: 'bg-yellow-100 text-yellow-700', text: 'Under Review' };
      default:
        return { color: 'bg-gray-100 text-gray-700', text: status };
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Journal Article':
        return BookOpen;
      case 'Preprint':
        return FileText;
      default:
        return FileText;
    }
  };

  return (
    <section id="publications" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
              Publications
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contributing to advancing knowledge in AI, education, and technology through peer-reviewed research
          </p>
        </motion.div>

        {/* Publications Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { number: "6", label: "Total Publications", icon: FileText },
            { number: "4", label: "Published", icon: BookOpen },
            { number: "2", label: "Under Review", icon: TrendingUp },
            { number: "15+", label: "Co-authors", icon: Users }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100"
              >
                <Icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Publications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {publications.map((publication, index) => {
            const statusBadge = getStatusBadge(publication.status);
            const TypeIcon = getTypeIcon(publication.type);
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Publication Header */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <TypeIcon className="w-5 h-5 text-purple-600 mr-2" />
                      <span className="text-sm font-medium text-purple-600">{publication.type}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusBadge.color}`}>
                      {statusBadge.text}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {publication.title}
                  </h3>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="truncate">{publication.authors.split(',')[0]} et al.</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <BookOpen className="w-4 h-4 mr-1" />
                      <span className="truncate">{publication.journal}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{publication.year}</span>
                    </div>
                  </div>
                </div>

                {/* Publication Content */}
                <div className="p-6">
                  {/* Abstract */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Quote className="w-4 h-4 text-purple-600 mr-2" />
                      <span className="font-semibold text-gray-900">Abstract</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                      {publication.abstract}
                    </p>
                  </div>

                  {/* Authors */}
                  <div className="mb-4">
                    <span className="font-semibold text-gray-900 text-sm">Authors:</span>
                    <p className="text-gray-600 text-xs mt-1 leading-relaxed">
                      {publication.authors}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {publication.doi && (
                      <motion.a
                        href={publication.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center justify-center hover:shadow-lg transition-shadow duration-200"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Publication
                      </motion.a>
                    )}
                    
                    {publication.manuscriptId && (
                      <div className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        ID: {publication.manuscriptId}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Research Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Research Impact</h3>
            <p className="text-lg mb-6 opacity-90">
              My research focuses on creating meaningful impact at the intersection of AI, education, and public health
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "AI in Education",
                  description: "Enhancing learning outcomes through AI-powered educational tools",
                  icon: "🎓"
                },
                {
                  title: "Public Health AI",
                  description: "Leveraging AI for disease surveillance and health monitoring",
                  icon: "🏥"
                },
                {
                  title: "Sustainable Development",
                  description: "Promoting sustainable practices through technology innovation",
                  icon: "🌱"
                }
              ].map((impact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <div className="text-3xl mb-2">{impact.icon}</div>
                  <h4 className="font-semibold mb-2">{impact.title}</h4>
                  <p className="text-sm opacity-90">{impact.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PublicationsSection;