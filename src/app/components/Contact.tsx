import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import personalInfo from '@/data/personalInfo.json';
import socialLinks from '@/data/socialLinks.json';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      link: null,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const iconMap: Record<string, React.ElementType> = {
    linkedin: Linkedin,
    github: Github,
    mail: Mail
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, or partnerships
          </p>
        </motion.div>

        <div className="flex justify-center items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-2xl"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    {method.link ? (
                      <a
                        href={method.link}
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <method.icon className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                            {method.label}
                          </p>
                          <p className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {method.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-4 rounded-lg">
                        <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <method.icon className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                            {method.label}
                          </p>
                          <p className="text-gray-800 dark:text-gray-200 font-medium">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
                  Connect with me
                </h4>
                <div className="flex gap-3 justify-center">
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
                        className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
                        aria-label={link.name}
                      >
                        <Icon size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
