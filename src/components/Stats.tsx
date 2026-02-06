import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, Code, Zap } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '1.10+',
      label: 'Years Experience',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      value: '3+',
      label: 'Major Projects',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      value: '40%',
      label: 'Performance Boost',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      value: '100%',
      label: 'Client Satisfaction',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <stat.icon className="text-white" size={32} />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: 'spring' }}
                className="text-4xl font-bold text-white mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-white/90 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
