"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import CourseCard from '@/components/CourseCard';
import RegistrationForm from '@/components/RegistrationForm';
import TrainerSection from '@/components/TrainerSection';
import LmsSection from '@/components/LmsSection';
import ParticlesBackground from '@/components/ParticlesBackground';
import { courses } from '@/lib/data';
import { FaRupeeSign } from 'react-icons/fa';

export default function HomePage() {
  const [showForm, setShowForm] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <ParticlesBackground />
      </div>
            
      {/* Hero Section */}
      <header id='home' className="relative py-28 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {/* Transform Your <span className="text-amber-400">Career</span> Today */}
                Aakarshan Skill <span className="text-amber-400">Development</span> Center
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300 mb-8 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Affordable professional courses with industry-recognized certifications and 100% placement assistance
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <button 
                  onClick={() => setShowForm(true)}
                  className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <span className="relative z-10">Enroll Today</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
                <p className="mt-4 text-gray-400 flex items-center">
                  <span className="inline-block w-8 h-px bg-blue-500 mr-2"></span>
                  Limited seats available for upcoming batches
                </p>
              </motion.div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-900 to-purple-900 border border-blue-500/30 rounded-2xl w-72 h-72 md:w-96 md:h-96 shadow-2xl flex items-center justify-center">
                  <div className="absolute inset-4 border border-blue-500/20 rounded-xl"></div>
                  <div className="text-center p-6">
                    <div className="text-5xl mb-4">🎓</div>
                    <h3 className="text-xl font-bold mb-2">Professional Certification</h3>
                    <p className="text-gray-400">Industry-recognized courses at minimal fees</p>
                  </div>
                </div>
                <motion.div 
                  className="flex items-center justify-center absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                <FaRupeeSign size={15} />1200/- only
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Courses Section */}
      <section id="courses" className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-blue-400">Professional</span> Courses</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Affordable courses designed to make you job-ready in the shortest time possible
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers">
        <TrainerSection />
      </section>

      {/* LMS Section */}
      <section id="lms">
        <LmsSection />
      </section>

      {/* Registration Form Popup */}
      {showForm && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div 
            className="bg-gray-800 border border-blue-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="flex justify-between items-center p-6 border-b border-blue-500/20">
              <h3 className="text-xl font-bold">Course Registration</h3>
              <button 
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <RegistrationForm courses={courses} />
          </motion.div>
        </motion.div>
      )}

      {/* Floating Enroll Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold p-4 rounded-full shadow-lg z-40"
        onClick={() => setShowForm(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="flex items-center">
          <span className="mr-2">📝</span> Enroll Now
        </span>
      </motion.button>
    </div>
  );
}