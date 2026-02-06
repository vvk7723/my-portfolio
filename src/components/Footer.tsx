import React from 'react';
import { Heart, Linkedin, Github, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import personalInfo from '@/lib/data/personalInfo.json';
import socialLinks from '@/lib/data/socialLinks.json';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const iconMap: Record<string, React.ElementType> = {
    linkedin: Linkedin,
    github: Github,
    mail: Mail
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">VP</span>
              </div>
              <span className="font-bold text-xl text-gray-800 dark:text-gray-200">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {personalInfo.tagline}
            </p>
            <div className="flex gap-3">
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
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all"
                    aria-label={link.name}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Get in Touch
            </h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>{personalInfo.email}</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.location}</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
            <p className="flex items-center gap-1">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            {/* <p className="flex items-center gap-1">
              Made with <Heart size={16} className="text-red-500 fill-current" /> using React & Tailwind CSS
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
