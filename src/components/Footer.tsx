"use client";
import { footerLinks, socialLinks } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 border-t border-blue-500/20 pt-20 pb-10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and description */}
          <div>
            <Link href="/">
              <div className="flex items-center space-x-2 mb-6 cursor-pointer">
                <Image src="/images/Aakarshan.png" width={200} height={200} alt="logo" className="w-48" />
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
                <span>Aakarshan Skill Development Center, Sona Marble Building, Bhondsi, Gurugram, Haryana - 122102</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 text-blue-400">📞</div>
                <span>+91 8851245368</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 text-blue-400">✉️</div>
                <span>lalitkumar52221@gmail.com</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 text-blue-400">🕒</div>
                <span>Mon-Sat: 9:00 AM - 5:30 PM</span>
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
            © {currentYear} Aakarshan Skill Development Center. All rights reserved.
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