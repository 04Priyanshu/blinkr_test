'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  // Dots animation variants
  const dotVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: [0, -10, 0] }
  };

  // Text fade in variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Progress bar animation
  const progressVariants = {
    initial: { width: 0 },
    animate: { width: '100%', transition: { duration: 2.5, ease: "easeInOut" } }
  };

  // Logo animation
  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { scale: 1, rotate: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
      <div className="flex flex-col items-center gap-6 max-w-md w-full p-6">
        {/* Logo animation */}
        <motion.div
          className="relative"
          initial="hidden"
          animate="visible"
          variants={logoVariants}
        >
          <div className="w-24 h-24 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
            <div className="text-3xl font-bold text-white">BL</div>
          </div>
          <motion.div 
            className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Main title */}
        <motion.h1 
          className="text-2xl md:text-3xl font-bold text-white"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Blinkr Loan
        </motion.h1>

        {/* Loading text */}
        <motion.h2 
          className="text-xl font-semibold text-emerald-400"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          Preparing Your Application
        </motion.h2>

        {/* Progress bar */}
        <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600"
            initial="initial"
            animate="animate"
            variants={progressVariants}
          />
        </div>

        {/* Loading dots */}
        <div className="flex gap-2 justify-center mt-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-emerald-500 rounded-full"
              variants={dotVariants}
              initial="hidden"
              animate="visible"
              transition={{
                delay: index * 0.2,
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>

        {/* Descriptive text */}
        <motion.p 
          className="text-gray-400 text-center"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          We&apos;re setting up your personalized loan application form. This won&apos;t take long.
        </motion.p>

        {/* Animated feature indicators */}
        <div className="w-full mt-4">
          {[
            "Checking available offers", 
            "Preparing personalized rates", 
            "Setting up secure application"
          ].map((text, index) => (
            <motion.div 
              key={index}
              className="flex items-center gap-2 mb-2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5 + index * 0.3 }}
            >
              <motion.div 
                className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.2, 1],
                  backgroundColor: ["#10b981", "#059669", "#10b981"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div 
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ scale: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
              </motion.div>
              <span className="text-sm text-gray-300">{text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}