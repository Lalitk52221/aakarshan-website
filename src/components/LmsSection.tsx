import { motion } from 'framer-motion';

export default function LmsSection() {
  return (
    <section className="relative py-20 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-16 lg:mb-0 lg:pr-16"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-blue-400">Learning Management</span> System
            </h2>
            <p className="text-gray-400 mb-10">
              Access course materials, submit assignments, track progress, and interact with trainers through our modern LMS platform.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: '📚', title: 'Course Materials', desc: 'Access all study materials, presentations, and resources anytime' },
                { icon: '📝', title: 'Assignments & Quizzes', desc: 'Submit assignments and take quizzes to track your progress' },
                { icon: '🎯', title: 'Progress Tracking', desc: 'Monitor your learning journey with detailed analytics' },
                { icon: '💬', title: 'Trainer Interaction', desc: 'Get personalized feedback and ask questions directly to trainers' },
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start p-4 bg-gray-800 rounded-xl border border-blue-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  <div className="text-3xl mr-4 text-blue-400">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.button 
              className="mt-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Access LMS Portal
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-1">
              <div className="bg-gray-900 rounded-xl p-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-20 rounded-xl"></div>
                  <div className="bg-gray-800 rounded-xl p-6 relative z-10">
                    <div className="flex justify-between mb-8">
                      <div>
                        <div className="text-2xl font-bold text-white">LMS Dashboard</div>
                        <div className="text-blue-400">Student Portal</div>
                      </div>
                      <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
                        👤
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between items-center">
                        <div className="text-gray-400">Course Progress</div>
                        <div className="text-white font-bold">65%</div>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-2/3"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="bg-gray-700/50 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-white">12</div>
                        <div className="text-xs text-gray-400">Modules</div>
                      </div>
                      <div className="bg-gray-700/50 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-white">24</div>
                        <div className="text-xs text-gray-400">Lessons</div>
                      </div>
                      <div className="bg-gray-700/50 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-white">8</div>
                        <div className="text-xs text-gray-400">Assignments</div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-500/30 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-white font-bold">Recent Assignment</div>
                          <div className="text-sm text-gray-400">Due: Tomorrow</div>
                        </div>
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm py-2 px-4 rounded-lg">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">95%</div>
                    <div className="text-gray-400">Completion</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">4.8/5</div>
                    <div className="text-gray-400">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">80%</div>
                    <div className="text-gray-400">Placement</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}