import { trainers } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store/store';

type TrainerSectionProps = {
  theme?: 'light' | 'dark';
};

export default function TrainerSection({ theme }: TrainerSectionProps) {
  // Get global theme from Redux if prop not provided
  const globalTheme = useSelector((state: RootState) => state.theme.mode);
  const effectiveTheme = theme || globalTheme;

  // Helper for conditional classes
  const cardBg = effectiveTheme === 'dark'
    ? 'bg-gradient-to-br from-gray-800 to-gray-900'
    : 'bg-white';
  const innerBg = effectiveTheme === 'dark'
    ? 'bg-gray-900'
    : 'bg-blue-100';
  const titleText = effectiveTheme === 'dark'
    ? 'text-blue-400'
    : 'text-blue-900';
  const descText = effectiveTheme === 'dark'
    ? 'text-gray-400'
    : 'text-gray-700';
  const nameText = effectiveTheme === 'dark'
    ? 'text-white'
    : 'text-gray-900';
  const expertiseText = effectiveTheme === 'dark'
    ? 'text-blue-400'
    : 'text-blue-600';
  const courseBg = effectiveTheme === 'dark'
    ? 'bg-blue-900/50 text-blue-400'
    : 'bg-blue-600/50 text-blue-600';
  const bioText = effectiveTheme === 'dark'
    ? 'text-gray-400'
    : 'text-gray-600';

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
          <h2 className={`text-3xl md:text-4xl font-bold mb-4`}>Meet Our <span className={titleText}>Expert</span> Trainers</h2>
          <p className={`${descText} max-w-2xl mx-auto`}>
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
              <div className={`h-full ${cardBg} border border-blue-500/20 rounded-2xl overflow-hidden shadow-xl flex flex-col`}>
                <div className="p-1 flex-1 flex flex-col">
                  <div className={`${innerBg} rounded-xl p-6 h-full flex flex-col justify-between`}>
                    <div className="flex flex-col items-center mb-6">
                      <div className="relative mb-4">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-full">
                          <div className={`${theme==="dark"?"bg-gray-800":"bg-blue-100"} rounded-full p-1`}>
                            <Image
                              src={trainer.img}
                              alt={trainer.name}
                              width={96}
                              height={96}
                              className="rounded-full object-cover"/>
                          </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          {trainer.experience}
                        </div>
                      </div>
                      <h3 className={`text-xl font-bold ${nameText}`}>{trainer.name}</h3>
                      <p className={`font-medium ${expertiseText}`}>{trainer.expertise}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-blue-400">Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {trainer.courses.map((course, index) => (
                          <span key={index} className={`text-xs px-3 py-1 rounded-full ${courseBg}`}>
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className={`${bioText}`}>{trainer.bio}</p>
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