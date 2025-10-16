import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = {
    quickLinks: ["Home", "About", "Services", "Gallery", "Contact"],
    services: [
      "Landscape Development",
      "Maintenance",
      "Hardscape",
      "Water Features",
      "Swimming Pools"
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <footer className="relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0F2419 0%, #1A3A1F 50%, #14532D 100%)'
    }}>
      {/* Dark Forest Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&q=80)',
          filter: 'blur(3px) brightness(0.2)',
          opacity: 0.3,
          zIndex: 0
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(34,197,94,0.1) 0%, rgba(21,128,61,0.05) 100%)',
          zIndex: 1
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-60 h-60 rounded-full blur-3xl" style={{ background: 'rgba(74,222,128,0.08)', zIndex: 2 }}></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(34,197,94,0.06)', zIndex: 2 }}></div>

      {/* Top decorative branch border */}
      <div className="absolute top-0 left-0 w-full h-20 pointer-events-none" style={{ zIndex: 10 }}>
        <svg width="100%" height="100%" viewBox="0 0 1920 80" preserveAspectRatio="none" fill="none">
          <path d="M0 40 Q480 60 960 35 Q1440 10 1920 45" stroke="#3F2B1F" strokeWidth="10" fill="none" opacity="0.6" />
          <path d="M0 35 Q480 55 960 30 Q1440 5 1920 40" stroke="#2D1F16" strokeWidth="5" fill="none" opacity="0.4" />
          {[80, 220, 380, 540, 700, 860, 1020, 1180, 1340, 1500, 1660, 1840].map((x, i) => (
            <ellipse
              key={i}
              cx={x}
              cy={45 - (i % 3) * 10}
              rx="14"
              ry="6"
              fill="#4ADE80"
              opacity="0.7"
            />
          ))}
        </svg>
      </div>

      <motion.div 
        className="container mx-auto px-4 py-16 relative"
        style={{ zIndex: 15 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="h-14 w-14 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                  boxShadow: '0 6px 20px rgba(34,197,94,0.4)'
                }}
              >
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold" style={{ color: '#6EE7B7', textShadow: '0 2px 8px rgba(74,222,128,0.3)' }}>
                PushpLandscaping
              </span>
            </motion.div>
            <p className="text-base leading-relaxed font-light" style={{ color: '#D1FAE5' }}>
              Transforming outdoor spaces into natural masterpieces with expert landscaping services.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6" style={{ color: '#6EE7B7', textShadow: '0 2px 8px rgba(74,222,128,0.3)' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-base font-light transition-all duration-300 inline-block"
                    style={{ color: '#D1FAE5' }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#6EE7B7')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#D1FAE5')}
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6" style={{ color: '#6EE7B7', textShadow: '0 2px 8px rgba(74,222,128,0.3)' }}>
              Services
            </h3>
            <ul className="space-y-3 text-base font-light" style={{ color: '#D1FAE5' }}>
              {footerLinks.services.map((service) => (
                <motion.li 
                  key={service}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6" style={{ color: '#6EE7B7', textShadow: '0 2px 8px rgba(74,222,128,0.3)' }}>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start space-x-3 text-base font-light"
                style={{ color: '#D1FAE5' }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: '#4ADE80' }} />
                <span>Pal Colony Near Gram Panchayat Chandayan Baghpat, Uttar Pradesh (250645)</span>
                <span>2nd Office Pal Electronics Shop Bega road Ganour Sonipat Haryana</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3 text-base font-light"
                style={{ color: '#D1FAE5' }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="h-5 w-5 flex-shrink-0" style={{ color: '#4ADE80' }} />
                <span>+91 7078461752</span>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3 text-base font-light"
                style={{ color: '#D1FAE5' }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="h-5 w-5 flex-shrink-0" style={{ color: '#4ADE80' }} />
                <span className="break-all">pushpvatikadecor@gmail.com</span>
              </motion.li>
            </ul>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <motion.a
                href="#"
                className="h-11 w-11 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'rgba(74,222,128,0.15)',
                  border: '2px solid rgba(74,222,128,0.3)'
                }}
                whileHover={{ 
                  scale: 1.15,
                  background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                  boxShadow: '0 6px 20px rgba(34,197,94,0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" style={{ color: '#D1FAE5' }} />
              </motion.a>
              <motion.a
                href="#"
                className="h-11 w-11 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'rgba(74,222,128,0.15)',
                  border: '2px solid rgba(74,222,128,0.3)'
                }}
                whileHover={{ 
                  scale: 1.15,
                  background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                  boxShadow: '0 6px 20px rgba(34,197,94,0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" style={{ color: '#D1FAE5' }} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div 
          className="mt-16 pt-8 text-center text-base font-light"
          style={{ 
            borderTop: '1px solid rgba(110,231,183,0.2)',
            color: '#A7F3D0'
          }}
          variants={itemVariants}
        >
          <p>&copy; {new Date().getFullYear()} PushpLandscaping. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
