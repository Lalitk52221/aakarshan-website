// components/CourseDetails.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import { FaRupeeSign } from 'react-icons/fa';

interface Trainer {
  name: string;
  experience: string;
  expertise: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  fees: string;
  benefits: string[];
  duration: string;
  syllabus: string[];
  trainers: Trainer[];
}

interface CourseDetailsProps {
  course: Course;
}

export default function CourseDetails({ course }: CourseDetailsProps) {
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="max-w-7xl mx-auto py-16 pt-28 px-4">
      {/* Course Header */}
      <motion.div 
        className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl overflow-hidden mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-1">
          <div className="bg-gray-900 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-10 md:mb-0 md:pr-10">
                <motion.h1 
                  className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {course.title}
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-300 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {course.description}
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-4 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="bg-blue-900/50 text-blue-400 px-4 py-2 rounded-full">
                    <span className="font-bold">Duration:</span> {course.duration}
                  </div>
                  <div className="bg-amber-900/50 text-amber-400 px-4 py-2 rounded-full">
                    <span className="font-bold  flex items-center justify-center">Fees: <FaRupeeSign size={15} className='ml-1.5'/>{course.fees}</span>
                  </div>
                </motion.div>
                
                <motion.button 
                  onClick={() => setShowForm(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Enroll Now
                </motion.button>
              </div>
              
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-full w-48 h-48 flex items-center justify-center">
                    <div className="bg-gray-900 rounded-full w-44 h-44 flex items-center justify-center">
                      <div className="text-5xl">
                        {course.id === 'basic-computer-tally' && '💻'}
                        {course.id === 'spoken-english' && '🎤'}
                        {course.id === 'beauty-wellness' && '💄'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Course Content */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30 rounded-2xl overflow-hidden">
        <div className="p-1">
          <div className="bg-gray-900 rounded-2xl">
            <div className="border-b border-blue-500/20 mb-8">
              <nav className="flex flex-wrap">
                {['overview', 'syllabus', 'trainers', 'benefits'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-5 px-6 font-medium text-sm ${
                      activeTab === tab
                        ? 'text-blue-400 border-b-2 border-blue-500'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6 md:p-8">
              {activeTab === 'overview' && (
                <motion.div 
                  className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold mb-6 text-white">About This Course</h3>
                    <p className="text-gray-300 mb-6">
                      Our {course.title} course is designed to provide comprehensive training in the most 
                      in-demand skills in the industry. With a perfect blend of theoretical knowledge and 
                      practical application, this course will prepare you for real-world challenges.
                    </p>
                    <p className="text-gray-300 mb-8">
                      Whether you&apos;re a beginner looking to start a new career or a professional seeking to 
                      upgrade your skills, this course offers the perfect opportunity to learn from industry 
                      experts and gain hands-on experience.
                    </p>
                    
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                      <h4 className="font-bold text-lg mb-4 text-blue-400">Who Should Enroll?</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-300">
                        <li>Students pursuing graduation or recently graduated</li>
                        <li>Working professionals looking to enhance their skills</li>
                        <li>Entrepreneurs and business owners</li>
                        <li>Anyone seeking career growth opportunities</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-b from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-6 h-fit">
                    <h3 className="text-xl font-bold mb-6 text-white">Key Highlights</h3>
                    <ul className="space-y-4">
                      {[
                        'Industry-recognized certification',
                        'Practical hands-on training',
                        '100% placement assistance',
                        'Flexible batch timings',
                        'Access to LMS with study materials',
                        'Installment payment options available'
                      ].map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-400 text-xl mr-3">✓</span>
                          <span className="text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      onClick={() => setShowForm(true)}
                      className="flex items-center justify-center mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300"
                    >
                      Enroll Now at <FaRupeeSign size={15} className='ml-1.5' />{course.fees}
                    </button>
                  </div>
                </motion.div>
              )}

              {activeTab === 'syllabus' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-8 text-white">Course Syllabus</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {course.syllabus.map((item, index) => (
                      <div 
                        key={index} 
                        className={`p-5 rounded-xl border ${
                          index % 2 === 0 
                            ? 'bg-blue-900/20 border-blue-500/30' 
                            : 'bg-purple-900/20 border-purple-500/30'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className="bg-gray-800 text-blue-400 rounded-full w-8 h-8 flex items-center justify-center mr-4">
                            {index + 1}
                          </div>
                          <span className="text-gray-300">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'trainers' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-8 text-white">Meet Your Trainers</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {course.trainers.map((trainer, index) => (
                      <div 
                        key={index} 
                        className="bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30 rounded-xl p-6"
                      >
                        <div className="flex items-start">
                          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-full mr-6">
                            <div className="bg-gray-800 rounded-full p-1">
                              <div className="bg-gray-200 border-2 border-dashed rounded-full w-16 h-16" />
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white">{trainer.name}</h4>
                            <p className="text-blue-400 font-medium mb-2">{trainer.expertise}</p>
                            <p className="text-amber-400 text-sm mb-4">{trainer.experience} experience</p>
                            <p className="text-gray-400">
                              Expert in {course.title} with practical industry experience. Focuses on 
                              student-centered learning and real-world applications.
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'benefits' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-8 text-white">Career Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {course.benefits.map((benefit, index) => (
                      <div 
                        key={index} 
                        className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-6"
                      >
                        <div className="flex items-start">
                          <div className="text-blue-400 text-2xl mr-4">{index + 1}.</div>
                          <span className="text-gray-300 text-lg">{benefit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-lg mb-4 text-amber-400">Career Opportunities</h4>
                    <p className="mb-4 text-gray-300">
                      After completing this course, you&apos;ll be qualified for positions such as:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.id === 'basic-computer-tally' && (
                        <>
                          <li className="text-gray-300 flex items-center">
                            <span className="text-amber-400 mr-2">▹</span> Accountant
                          </li>
                          <li className="text-gray-300 flex items-center">
                            <span className="text-amber-400 mr-2">▹</span> Data Entry Operator
                          </li>
                          <li className="text-gray-300 flex items-center">
                            <span className="text-amber-400 mr-2">▹</span> Accounts Executive
                          </li>
                          <li className="text-gray-300 flex items-center">
                            <span className="text-amber-400 mr-2">▹</span> Tax Consultant
                          </li>
                        </>
                      )}
                      {course.id === 'spoken-english' && (
                        <>
                          <li className="text-gray-300 flex items-center">
                            <span className="text-amber-400 mr-2">▹</span> Customer Service Executive
                          </li>
                          <li className="text-gray-300 flex items-center">
                            <span className="text-amber-400 mr-2">▹</span> Content Writer
                          </li>
                          <li className="text-gray-300 flex items-center">
                            <span className="text-amber-400 mr-2">▹</span> Front Office Executive
                          </li>
                          <li className="text-gray-300 flex items-center">
                            <span className="text-amber-400 mr-2">▹</span> Language Trainer
                          </li>
                        </>
                      )}
                      {course.id === 'beauty-wellness' && (
                        <>
                          <li className="text-gray-300 flex items-center">
                            <span className="text-amber-400 mr-2">▹</span> Beauty Therapist
                          </li>
                          <li className="text-gray-300 flex items-center">
                            <span className="text-amber-400 mr-2">▹</span> Salon Manager
                          </li>
                          <li className="text-gray-300 flex items-center">
                            <span className="text-amber-400 mr-2">▹</span> Spa Therapist
                          </li>
                          <li className="text-gray-300 flex items-center">
                            <span className="text-amber-400 mr-2">▹</span> Makeup Artist
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form Popup */}
      {showForm && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div 
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <div className="flex justify-between items-center p-6 border-b border-blue-500/20">
              <h3 className="text-xl font-bold">Enroll in {course.title}</h3>
              <button 
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <RegistrationForm courses={[course]} />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}