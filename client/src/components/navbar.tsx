import { Button } from "./ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold text-white"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Added scroll to top functionality
          >
            Jupiter Leathers
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {["Home", "Products", "About", "Contact"].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -2 }}
                className="relative group"
              >
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-white hover:text-primary transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  {item}
                </Link>
                <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.div>
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              Sign In
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}