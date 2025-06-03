// import { footerLinks } from '@/lib/data';
// import Link from 'next/link';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-900 text-white z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Institute Info */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">EduInstitute</h3>
//             <p className="mb-4 text-gray-300">
//               Empowering students through quality education since 2005. 
//               Committed to academic excellence and holistic development.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <FaFacebook size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <FaTwitter size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <FaInstagram size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white">
//                 <FaLinkedin size={20} />
//               </a>
//             </div>
//           </div>

//           {/* Footer Links */}
//           {footerLinks.map((section) => (
//             <div key={section.title}>
//               <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
//               <ul className="space-y-2">
//                 {section.links.map((link) => (
//                   <li key={link.name}>
//                     <Link 
//                       href={link.path}
//                       className="text-gray-400 hover:text-amber-400 transition-colors"
//                     >
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <FaMapMarkerAlt className="text-amber-400 mt-1 mr-3" />
//                 <span>123 Education Street, Campus City, CC 54321</span>
//               </li>
//               <li className="flex items-center">
//                 <FaPhone className="text-amber-400 mr-3" />
//                 <span>(123) 456-7890</span>
//               </li>
//               <li className="flex items-center">
//                 <FaEnvelope className="text-amber-400 mr-3" />
//                 <span>info@eduinst.edu</span>
//               </li>
//             </ul>
            
//             {/* Newsletter */}
//             <div className="mt-6">
//               <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
//               <form className="flex flex-col sm:flex-row gap-2">
//                 <input 
//                   type="email" 
//                   placeholder="Your email" 
//                   className="px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
//                 />
//                 <button 
//                   type="submit"
//                   className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded font-medium transition-colors"
//                 >
//                   Subscribe
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
        
//         {/* Copyright */}
//         <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//           <p>&copy; {currentYear} EduInstitute. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Courses',
      links: [
        { name: 'Basic Computer & Tally', href: '/courses/basic-computer-tally' },
        { name: 'Spoken English', href: '/courses/spoken-english' },
        { name: 'Beauty & Wellness', href: '/courses/beauty-wellness' },
        { name: 'All Courses', href: '/#courses' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Learning Portal', href: '/lms' },
        { name: 'Career Guidance', href: '/careers' },
        { name: 'Blog', href: '/blog' },
        { name: 'FAQs', href: '/faqs' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Trainers', href: '/#trainers' },
        { name: 'Contact Us', href: '/#contact' },
        { name: 'Privacy Policy', href: '/privacy' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'Instagram', icon: '📸', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'YouTube', icon: '▶️', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 border-t border-blue-500/20 pt-20 pb-10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and description */}
          <div>
            <Link href="/">
              <div className="flex items-center space-x-2 mb-6 cursor-pointer">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-xl w-10 h-10 rounded-lg flex items-center justify-center">
                  N
                </div>
                <div>
                  <span className="text-white font-bold text-xl">Nexus</span>
                  <span className="text-blue-400 font-bold text-xl">Institute</span>
                </div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Providing quality professional education with industry-relevant courses at affordable fees.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl">
                  <motion.span whileHover={{ y: -5 }}>
                    {social.icon}
                  </motion.span>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-bold text-lg mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <motion.span whileHover={{ x: 5 }}>
                        {link.name}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <div className="mr-3 text-blue-400">📍</div>
                <span>123 Education Street, Learning District, Knowledge City - 560001</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 text-blue-400">📞</div>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 text-blue-400">✉️</div>
                <span>info@nexusinstitute.com</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 text-blue-400">🕒</div>
                <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-10 border-t border-blue-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-white text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400 max-w-2xl">
                Subscribe to our newsletter for course updates, special offers, and career tips.
              </p>
            </div>
            <div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 bg-gray-800 border border-blue-500/30 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-6 py-3 rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-blue-500/10 text-center">
          <p className="text-gray-500">
            © {currentYear} Nexus Institute. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4 text-gray-500 text-sm">
            <Link href="/terms"><span className="hover:text-white">Terms of Service</span></Link>
            <Link href="/privacy"><span className="hover:text-white">Privacy Policy</span></Link>
            <Link href="/refund"><span className="hover:text-white">Refund Policy</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}