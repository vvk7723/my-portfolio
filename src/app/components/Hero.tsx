import React from 'react';
import { ArrowRight, Download, MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import personalInfo from '@/data/personalInfo.json';
import socialLinks from '@/data/socialLinks.json';
import { Linkedin, Github, Mail as MailIcon } from 'lucide-react';

const Hero: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    linkedin: Linkedin,
    github: Github,
    mail: MailIcon
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Name & Title */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {personalInfo.role}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {personalInfo.tagline}
            </p>
          </motion.div>

          {/* Location & Contact */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm text-gray-600 dark:text-gray-400"
          >
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>{personalInfo.email}</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              View Projects
              <ArrowRight size={20} />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/VivekPatel_Resume.pdf"
              download="VivekPatel_Resume.pdf"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              Download Resume
              <Download size={20} />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            {socialLinks.links.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <motion.a
                  key={link.id}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow text-gray-700 dark:text-gray-300"
                  aria-label={link.name}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Availability Badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            {personalInfo.availability}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
