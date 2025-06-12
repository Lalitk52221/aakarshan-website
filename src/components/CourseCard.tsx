import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaRupeeSign } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { LoadingBarContext } from './LoadingBarProvider';


interface Course {
  id: string;
  title: string;
  description: string;
  fees: string;
  image: string;
  benefits: string[]; 
  duration: string;
  color: string;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const router = useRouter();
  const { start } = useContext(LoadingBarContext);


  const getImage = () => {
    switch (course.image) { 
      case 'computer':
        return <Image src="/images/Msoffice.png" alt="Computer Course" width={80} height={80} />;
      case 'english':
        return <Image src="/images/English.png" alt="English Course" width={80} height={80} />;
      case 'beauty':
        return <Image src="/images/Beauty.png" alt="Beauty Course" width={80} height={80} />;
      case 'tally':
        return <Image src="/images/Tally.png" alt="Beauty Course" width={80} height={80} />;
      default:
        return '📚';
    }
  };

  return (
    <motion.div 
      className="h-full"
      whileHover={{ y: -10 }}
    >
      <div className={`h-full bg-gradient-to-br ${course.color} rounded-2xl overflow-hidden shadow-2xl flex flex-col`}>
        <div className="p-1 flex-1 flex flex-col">
          <div className="bg-gray-900 rounded-xl p-6 h-full justify-between flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="text-5xl mb-4">{getImage()}</div>
              <span className=" flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                <FaRupeeSign size={13} />{course.fees}
              </span>
            </div>
            
            <h3 className="text-xl font-bold mb-3">{course.title}</h3>
            <p className="text-gray-400 mb-6">{course.description}</p>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-blue-400">Key Benefits:</h4>
              <ul className="space-y-2">
                {course.benefits.slice(0, 3).map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-between items-center mt-8 ">
              <span className="text-sm text-gray-500">{course.duration}</span>
              <motion.button 
                className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  start();
                  setTimeout(() => {
                    router.push(`/courses/${course.id}`);
                  }, 300);
                }}
              >
                View Details
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}