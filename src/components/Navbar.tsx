// "use client"
// import { navLinks } from '@/lib/data';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="text-white bg-indigo-800/60 shadow-lg sticky top-0 z-50 backdrop-blur-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link href="/" className="flex items-center gap-7">
//               {/* <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
//               <span className="ml-3 text-xl font-bold">EduInstitute</span> */}
//               <Image src="/images/Aakarshan.png" width={130} height={130} alt='logo' className='w-full'/>
//               <Image src="/images/SMF.png" width={100} height={100} alt='logo' className='w-full '/>
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.path}
//                 className="hover:text-amber-300 transition-colors font-medium"
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <button className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full font-semibold transition-colors">
//               Apply Now
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-amber-300 focus:outline-none"
//             >
//               <svg
//                 className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//               <svg
//                 className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-indigo-900">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.path}
//               className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700"
//               onClick={() => setIsOpen(false)}
//             >
//               {link.name}
//             </Link>
//           ))}
//           <button className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full font-semibold">
//             Apply Now
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add type for navLinks
  const navLinks: { name: string; href: string }[] = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/#courses" },
    { name: "Trainers", href: "/#trainers" },
    { name: "LMS", href: "/#lms" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-md border-b border-blue-500/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/images/Aakarshan.png"
                width={130}
                height={130}
                alt="logo"
                className="w-full"
              />
              
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <motion.span
                  className="text-gray-300 hover:text-white transition-colors font-medium cursor-pointer"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
                src="/images/SMF.png"
                width={100}
                height={100}
                alt="logo"
                className="w-full "
              />
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-lg z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-10">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <motion.span
                    className="text-2xl font-medium text-gray-300 hover:text-white cursor-pointer"
                    onClick={() => setIsOpen(false)}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-3 rounded-full text-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Enroll Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
