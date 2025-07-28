import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800 mb-4"
      >
        Organize your work. Move faster.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg text-gray-600 mb-6"
      >
        The modern task manager for individuals and teams.
      </motion.p>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
        className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg"
      >
        Get Started Free
      </motion.button>
    </section>
  );
}
