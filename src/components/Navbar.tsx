"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import UserButton from "./UserButton";

export default function Navbar() {
  const navbarVariant = useSelector((state: RootState)=>state.navbar.variant);
  const theme = useSelector((state: RootState)=>state.theme.mode);
  const { data: session } = useSession();
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
    { name: "Contact", href: "/#contact" },
    ...(session?.user?.role === "Admin" ? [{ name: "Admin", href: "/admin" }] : [])
  ];
  const course: { name: string; href: string }[] = [
    { name: "Basic Computer", href: "/course-material/basic-computer" },
    { name: "Tally Prime", href: "/course-material/tally-prime" },
    { name: "Spoken English", href: "/course-material/spoken-english" },
    { name: "Beauty Wellness", href: "/course-material/beauty-wellness" },
  ];

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md border-b border-blue-500/20 py-2"
          : theme === "dark"
          ? "bg-gray-900/50 backdrop-blur-md border-b border-blue-500/20 py-2"
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
            {navbarVariant==="default"? navLinks.map((link) => (
              <Link key={link.name} href={link.href} scroll={false}>
                <motion.span
                  className={`${theme==="dark"?"text-gray-300 hover:text-orange-400":"text-blue-700 hover:text-orange-700"}  hover:text-lg transition-all cursor-pointer font-semibold`}
                  whileHover={{ y: -2 }}
                  onClick={e => handleNavClick(e, link.href)}
                >
                  {link.name}
                </motion.span>
              </Link>
            )):navbarVariant==="course"? course.map((link) => (
              <Link key={link.name} href={link.href} scroll={false}>
                <motion.span
                  className="hover:bg-gradient-to-r  from-blue-600 to-purple-600 hover:text-white transition-all text-sm py-2 px-4 text-gray-300 border-b hover:bg-amber-800   font-medium cursor-pointer"
                  whileHover={{ y: -2 }}
                  onClick={e => handleNavClick(e, link.href)}
                >
                  {link.name}
                </motion.span>
              </Link>
            )):
            navbarVariant==="auth"?"":
            "null"}
            
          </nav>
             
          {/* Desktop Button */}
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          > */}
            
    
            {navbarVariant==="default" && (
              
             <UserButton/>
            )}
          {/* </motion.button> */}

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden${theme==="dark"?" text-gray-300":"text-gray-800"} focus:outline-none z-50`}
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
            className={` md:hidden fixed top-0  inset-0 z-40 backdrop-blur-lg transition-colors duration-500 h-screen ${
              scrolled ? 'bg-gray-900/90' : 'bg-gray-900/50'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-10">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} scroll={false}>
                  <motion.span
                    className="text-2xl font-medium text-gray-300 hover:text-orange-500 cursor-pointer"
                    onClick={e => handleNavClick(e, link.href)}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
              {/* <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-3 rounded-full text-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Enroll Now
              </motion.button> */}
            <UserButton/>
            </div>
          </motion.div>
        )}
        
      </AnimatePresence>
    </header>
  );
}
