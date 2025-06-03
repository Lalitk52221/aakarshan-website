import { trainers } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TrainerSection() {
  
  return (
    <section className="relative py-20 px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our <span className="text-blue-400">Expert</span> Trainers</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Learn from industry professionals with years of teaching experience
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              className="h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/20 rounded-2xl overflow-hidden shadow-xl">
                <div className="p-1">
                  <div className="bg-gray-900 rounded-xl p-6 h-full">
                    <div className="flex flex-col items-center mb-6">
                      <div className="relative mb-4">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-full">
                          <div className="bg-gray-800 rounded-full p-1">
                            {/* <div className="bg-gray-200 border-2 border-dashed rounded-full w-24 h-24"> */}
                              <Image 
                                src={trainer.img} 
                                alt={trainer.name} 
                                width={96} 
                                height={96} 
                                className="rounded-full object-cover"/>
                            {/* </div> */}
                          </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          {trainer.experience}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
                      <p className="text-blue-400 font-medium">{trainer.expertise}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-blue-400">Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {trainer.courses.map((course, index) => (
                          <span key={index} className="bg-blue-900/50 text-blue-400 text-xs px-3 py-1 rounded-full">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-400">{trainer.bio}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}