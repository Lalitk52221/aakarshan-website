"use client"
import { useParams } from 'next/navigation';
// import { motion } from 'framer-motion';
import CourseDetails from '../../../components/CourseDetails';
// import { courses } from '@/lib/data';

export default function CoursePage() {
  const params = useParams();
  const courseId = params?.courseId;

  const courses = [
    {
      id: 'basic-computer',
      title: 'Basic Computere',
      description: 'Master computer fundamentals and professional accounting with Tally Prime',
      fees: "1200/-",
      benefits: [
        'Industry-recognized certification',
        'Hands-on practical training',
        'Placement assistance',
        'Financial accounting expertise',
        'GST filing knowledge',
        'Data security practices'
      ],
      duration: '6 months',
      syllabus: [
        'Computer Fundamentals',
        'MS Office (Word, Excel, PowerPoint)',
        'Internet & Email Basics',
        'Tally Prime Installation & Setup',
        'Accounting Principles',
        'GST Filing & E-Way Bills',
        'Inventory Management',
        'Payroll Processing',
        'Data Backup & Security',
        'Final Project & Certification'
      ],
      trainers: [
        {
          name: 'Lalit kumar',
          experience: '5+ years',
          expertise: 'Accounting Software Specialist',
          img: '/images/trainers/Lalit.jpg',
        },
        
      ]
    },
    {
      id: 'tally',
      title: 'Tally Prime',
      description: 'Master computer fundamentals and professional accounting with Tally Prime',
      fees: "1500/-",
      benefits: [
        'Industry-recognized certification',
        'Hands-on practical training',
        'Placement assistance',
        'Financial accounting expertise',
        'GST filing knowledge',
        'Data security practices'
      ],
      duration: '4 months',
      syllabus: [
        'Computer Fundamentals',
        'MS Office (Word, Excel, PowerPoint)',
        'Internet & Email Basics',
        'Tally Prime Installation & Setup',
        'Accounting Principles',
        'GST Filing & E-Way Bills',
        'Inventory Management',
        'Payroll Processing',
        'Data Backup & Security',
        'Final Project & Certification'
      ],
      trainers: [
        {
          name: 'Lalit kumar',
          experience: '5+ years',
          expertise: 'Accounting Software Specialist',
          img: '/images/trainers/Lalit.jpg',
        },
        
      ]
    },
    {
      id: 'spoken-english',
      title: 'Spoken English',
      description: 'Build confidence in English communication for all situations',
      fees: "1200/-",
      benefits: [
        'Daily conversation practice',
        'Accent reduction techniques',
        'Interview preparation',
        'Public speaking skills',
        'Vocabulary building',
        'Business communication skills'
      ],
      duration: '4 months',
      syllabus: [
        'Grammar Fundamentals',
        'Pronunciation & Accent Training',
        'Daily Conversation Practice',
        'Presentation Skills',
        'Business Communication',
        'Interview Techniques',
        'Group Discussions',
        'Email & Telephone Etiquette',
        'Cultural Nuances',
        'Final Assessment & Certification'
      ],
      trainers: [
        {
          name: 'Gladys N. Baite',
          experience: '3+ years',
          expertise: 'English Language Specialist',
          img:"https://avatar.iran.liara.run/public/75",
        }
      ]
    },
    {
      id: 'beauty-wellness',
      title: 'Beauty & Wellness',
      description: 'Master beauty techniques and wellness practices for a rewarding career',
      fees: '1800/-',
      benefits: [
        'Internationally recognized certification',
        'Practical salon training',
        'Entrepreneurship guidance',
        'Skin and hair care expertise',
        'Wellness therapy techniques',
        'Client management skills'
      ],
      duration: '4 months',
      syllabus: [
        'Skincare Techniques',
        'Hair Styling & Coloring',
        'Makeup Application',
        'Spa & Massage Treatments',
        'Manicure & Pedicure',
        'Wellness Therapies',
        'Salon Management',
        'Client Consultation Skills',
        'Product Knowledge',
        'Final Practical Exam & Certification'
      ],
      trainers: [
        {
          name: 'Kiara Foujdar',
          experience: '2+ years',
          expertise: 'Beauty & Wellness Expert',
          img:"https://avatar.iran.liara.run/public/69",
        }
      ]
    }
  ];

  const course = courses.find(c => c.id === courseId) || courses[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      <CourseDetails course={course} />
    </div>
  );
}