
import { Link } from "wouter";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                setIsOpen(!isOpen);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-2xl font-bold text-white flex items-center gap-2 cursor-pointer"
            >
              <span>Jupiter Leathers</span>
              <span className="md:hidden">
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </span>
            </motion.button>
          </div>

          <div className={`${isOpen ? 'block' : 'hidden'} md:flex absolute md:relative top-16 md:top-0 left-0 right-0 bg-black/90 md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-8`}>
            {['Home', 'Products', 'About', 'Contact'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -2 }}
                className="relative group"
              >
                <Link 
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-white hover:text-primary transition-colors block md:inline-block"
                  onClick={() => {
                    setIsOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {item}
                </Link>
                <motion.div 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
