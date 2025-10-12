import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Floating Leaf Component
const FloatingLeaf = ({ delay = 0, startY = 0, duration = 15 }) => {
  const [randomPath] = useState(() => Math.floor(Math.random() * 3));
  
  const leafPaths = [
    "M16 2 Q10 8 8 16 Q10 24 16 30 Q22 24 24 16 Q22 8 16 2 Z",
    "M20 4 Q12 10 10 20 Q14 28 20 30 Q26 28 30 20 Q28 10 20 4 Z M20 10 Q18 16 20 22",
    "M18 2 Q8 12 6 22 Q10 30 18 32 Q26 30 30 22 Q28 12 18 2 Z M18 8 L18 28"
  ];

  return (
    <motion.svg
      width={40}
      height={40}
      style={{
        position: 'absolute',
        top: `${startY}%`,
        left: -50,
        pointerEvents: 'none',
        zIndex: 1,
        filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.4))'
      }}
      initial={{ x: -100, y: 0, rotate: 0, opacity: 0 }}
      animate={{
        x: ['0vw', '30vw', '60vw', '100vw'],
        y: [0, 100, -50, 150, 50],
        rotate: [0, 180, 360, 540, 720],
        opacity: [0, 0.7, 0.9, 0.7, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: 'easeInOut',
        times: [0, 0.25, 0.5, 0.75, 1]
      }}
      viewBox="0 0 32 32"
    >
      <path
        d={leafPaths[randomPath]}
        fill="#4ADE80"
        stroke="#166534"
        strokeWidth="1.2"
        opacity="0.9"
      />
    </motion.svg>
  );
};

// Branch Border Component
const BranchBorder = ({ position = 'top' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: position === 'top' ? -20 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100px',
        [position]: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 15,
        overflow: 'hidden'
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M0 50 Q480 15 960 40 Q1440 65 1920 30" stroke="#3F2B1F" strokeWidth="12" fill="none" opacity="0.8" />
        <path d="M0 55 Q480 20 960 45 Q1440 70 1920 35" stroke="#2D1F16" strokeWidth="6" fill="none" opacity="0.6" />
        
        {[100, 250, 400, 580, 720, 890, 1050, 1200, 1380, 1520, 1680, 1820].map((x, i) => (
          <motion.ellipse
            key={i}
            cx={x}
            cy={30 + (i % 3) * 12}
            rx="16"
            ry="7"
            fill="#4ADE80"
            opacity="0.85"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
          />
        ))}
      </svg>
    </motion.div>
  );
};

// Dark Forest Background
const DarkForestBackground = () => {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&q=80)',
          filter: 'blur(2px) brightness(0.3)',
          opacity: 0.4,
          zIndex: 0
        }}
      />
      
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(34,197,94,0.15) 0%, rgba(21,128,61,0.08) 100%)',
          zIndex: 1
        }}
      />
      
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 Q20 18 15 30 Q20 42 30 50 Q40 42 45 30 Q40 18 30 10' fill='%23166534' opacity='0.7'/%3E%3C/svg%3E")`,
          zIndex: 2
        }}
      />
    </>
  );
};

const Contact = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const generatedLeaves = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      delay: i * 2,
      startY: Math.random() * 80,
      duration: 14 + Math.random() * 6
    }));
    setLeaves(generatedLeaves);
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Pal Colony Near Gram Panchayat Chandayan Baghpat, Uttar Pradesh 250645",

      ],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 7078461752", "+91 9958824879"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["pushpvatikadecor@gmail.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 8:00 AM - 9:00 PM"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="pt-20 relative overflow-hidden" style={{ background: '#1A3A1F' }}>
      {/* Floating Leaves */}
      {leaves.map((leaf) => (
        <FloatingLeaf
          key={leaf.id}
          delay={leaf.delay}
          startY={leaf.startY}
          duration={leaf.duration}
        />
      ))}

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0F2419 0%, #1A3A1F 30%, #14532D 60%, #1A3A1F 100%)'
      }}>
        <DarkForestBackground />
        <BranchBorder position="top" />
        
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(74,222,128,0.12)', zIndex: 3 }}></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(34,197,94,0.1)', zIndex: 3 }}></div>

        <motion.div
          className="container mx-auto px-4 text-center relative"
          style={{ zIndex: 20 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: '#D1FAE5', textShadow: '0 4px 20px rgba(74,222,128,0.4)' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto font-light"
            style={{ color: '#A7F3D0', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Let's bring your landscape vision to life
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 relative" style={{ 
        background: 'linear-gradient(135deg, #1E4620 0%, #254D2A 50%, #1E4620 100%)' 
      }}>
        <DarkForestBackground />
        
        <div className="absolute top-32 right-20 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(74,222,128,0.1)', zIndex: 2 }}></div>
        <div className="absolute bottom-20 left-32 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(52,211,153,0.08)', zIndex: 2 }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ 
              color: '#6EE7B7', 
              textShadow: '0 2px 12px rgba(74,222,128,0.3)' 
            }}>
              Connect With Us
            </h2>
            <div className="w-24 h-1.5 mx-auto rounded-full" style={{ 
              background: 'linear-gradient(90deg, #22C55E 0%, #10B981 100%)' 
            }}></div>
          </motion.div>

          {/* Contact Cards Grid */}
          <motion.div
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {contactInfo.map((info, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card 
                  className="group relative border-2 transition-all duration-500 overflow-hidden h-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(21,48,31,0.9) 0%, rgba(20,83,45,0.9) 100%)',
                    backdropFilter: 'blur(10px)',
                    borderColor: '#22C55E'
                  }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)'
                    }}
                  />
                  
                  <CardContent className="relative pt-10 pb-8 text-center z-10">
                    {/* Icon */}
                    <motion.div
                      className="h-20 w-20 rounded-3xl flex items-center justify-center mx-auto mb-6"
                      style={{ 
                        background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                        boxShadow: '0 8px 24px rgba(34,197,94,0.4)'
                      }}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <info.icon className="h-10 w-10 text-white" />
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-4" style={{ color: '#6EE7B7' }}>
                      {info.title}
                    </h3>
                    
                    {/* Details */}
                    <div className="space-y-2">
                      {info.details.map((detail, i) => (
                        <p 
                          key={i} 
                          className="text-base font-light leading-relaxed"
                          style={{ color: '#D1FAE5' }}
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action Section */}
          <motion.div
            className="max-w-4xl mx-auto text-center rounded-3xl p-12 border-2 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(20,83,45,0.95) 0%, rgba(21,128,61,0.95) 100%)',
              backdropFilter: 'blur(10px)',
              borderColor: '#22C55E',
              boxShadow: '0 25px 60px rgba(34,197,94,0.3)'
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
              style={{
                background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                boxShadow: '0 10px 30px rgba(34,197,94,0.5)'
              }}
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Leaf className="w-10 h-10 text-white" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ 
              color: '#D1FAE5',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}>
              Ready to Transform Your Space?
            </h2>
            
            <p className="text-lg mb-8 leading-relaxed max-w-2xl mx-auto font-light" style={{ color: '#A7F3D0' }}>
              Whether you need landscape design, garden maintenance, or plant consultation, our expert team at Pushpvatika is here to help. Visit our nursery or give us a call for a free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F0FDF4 100%)',
                    color: '#14532D'
                  }}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="px-8 py-6 text-lg rounded-xl transition-all duration-300"
                  style={{
                    background: 'transparent',
                    border: '2px solid #D1FAE5',
                    color: '#D1FAE5'
                  }}
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Get Directions
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #14532D 0%, #166534 50%, #14532D 100%)'
      }}>
        <DarkForestBackground />
        
        <div className="absolute top-10 left-20 w-72 h-72 rounded-full blur-3xl" style={{ background: 'rgba(74,222,128,0.12)', zIndex: 2 }}></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(34,197,94,0.1)', zIndex: 2 }}></div>
        
        <motion.div
          className="container mx-auto px-4 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Happy Clients" },
              { number: "100+", label: "Projects Completed" },
              { number: "5+", label: "Years Experience" },
              { number: "100%", label: "Satisfaction" }
            ].map((stat, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <motion.p
                  className="text-5xl md:text-6xl font-bold mb-3"
                  style={{ color: '#6EE7B7', textShadow: '0 2px 12px rgba(74,222,128,0.4)' }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.number}
                </motion.p>
                <p className="text-lg font-light" style={{ color: '#D1FAE5' }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
