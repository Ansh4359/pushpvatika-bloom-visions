import { ChevronDown, Leaf, Hammer, Droplet, TreePine, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Floating Leaf Component with darker colors
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
        zIndex: 1, // Changed from 5 to 1 - stays behind content
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

// Branch Border Component with dark wood tones
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
        zIndex: 15, // Above leaves but below text
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
        {position === 'top' ? (
          <>
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
          </>
        ) : (
          <>
            <path d="M0 50 Q480 75 960 45 Q1440 15 1920 55" stroke="#3F2B1F" strokeWidth="12" fill="none" opacity="0.8" />
            <path d="M0 45 Q480 70 960 40 Q1440 10 1920 50" stroke="#2D1F16" strokeWidth="6" fill="none" opacity="0.6" />
            
            {[80, 220, 380, 540, 700, 860, 1020, 1180, 1340, 1500, 1660, 1840].map((x, i) => (
              <motion.ellipse
                key={i}
                cx={x}
                cy={60 - (i % 3) * 12}
                rx="16"
                ry="7"
                fill="#4ADE80"
                opacity="0.85"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
              />
            ))}
          </>
        )}
      </svg>
    </motion.div>
  );
};

// Dark Forest Background with rich textures
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

const Home = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    // Generate random floating leaves
    const generatedLeaves = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      delay: i * 1.8,
      startY: Math.random() * 80,
      duration: 13 + Math.random() * 7
    }));
    setLeaves(generatedLeaves);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: Leaf,
      title: "Expert Design",
      description: "Professional landscape architecture tailored to your vision",
    },
    {
      icon: Hammer,
      title: "Quality Hardscape",
      description: "Durable and beautiful outdoor structures and pathways",
    },
    {
      icon: Droplet,
      title: "Water Features",
      description: "Stunning pools, fountains, and irrigation systems",
    },
    {
      icon: TreePine,
      title: "Plant Nursery",
      description: "Premium selection of plants and horticulture consultation",
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="relative overflow-hidden" style={{ background: '#1A3A1F' }}>
      {/* Floating Leaves */}
      {leaves.map((leaf) => (
        <FloatingLeaf
          key={leaf.id}
          delay={leaf.delay}
          startY={leaf.startY}
          duration={leaf.duration}
        />
      ))}

      {/* Hero Section - Deep Forest Night */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0F2419 0%, #1A3A1F 30%, #14532D 60%, #1A3A1F 100%)'
      }}>
        <DarkForestBackground />
        <BranchBorder position="top" />
        
        {/* Hero image overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            opacity: 0.25,
            zIndex: 3
          }}
        >
          <div className="absolute inset-0" style={{ 
            background: 'linear-gradient(135deg, rgba(15,36,25,0.85) 0%, rgba(26,58,31,0.8) 50%, rgba(20,83,45,0.85) 100%)' 
          }}></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(74,222,128,0.12)', zIndex: 4 }}></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(34,197,94,0.1)', zIndex: 4 }}></div>

        {/* Content with highest z-index */}
        <div className="relative text-center px-4 max-w-5xl mx-auto" style={{ zIndex: 20 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6" style={{ 
              color: '#D1FAE5', 
              textShadow: '0 4px 20px rgba(74,222,128,0.4)' 
            }}>
              Transform Your Outdoor Space
            </h1>
          </motion.div>

          <motion.p
            className="text-2xl md:text-3xl mb-12 font-light"
            style={{ color: '#A7F3D0', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Expert landscaping services bringing nature's beauty to your doorstep
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: "0 10px 40px rgba(34,197,94,0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('services')}
              className="px-10 py-5 rounded-full font-bold transition-all shadow-2xl text-lg"
              style={{
                background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                color: '#FFFFFF'
              }}
            >
              Explore Services
              <ArrowRight className="inline ml-2 h-6 w-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08, boxShadow: "0 10px 40px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="bg-white hover:bg-gray-50 px-10 py-5 rounded-full font-bold transition-all shadow-2xl text-lg"
              style={{ color: '#14532D' }}
            >
              Get Free Quote
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          style={{ zIndex: 20 }}
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          onClick={() => scrollToSection('services')}
        >
          <ChevronDown className="h-10 w-10" style={{ color: '#D1FAE5', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))' }} />
        </motion.div>
      </section>

      {/* Features Section - Dark Moss Green */}
      <section id="services" className="py-28 relative" style={{ 
        background: 'linear-gradient(135deg, #1E4620 0%, #254D2A 50%, #1E4620 100%)' 
      }}>
        <DarkForestBackground />
        
        <div className="absolute top-32 right-20 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(74,222,128,0.1)', zIndex: 2 }}></div>
        <div className="absolute bottom-20 left-32 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(52,211,153,0.08)', zIndex: 2 }}></div>
        
        <motion.div
          className="container mx-auto px-4 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ 
              color: '#6EE7B7', 
              textShadow: '0 2px 12px rgba(74,222,128,0.3)' 
            }}>
              Why Choose PushpLandscaping?
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light" style={{ color: '#D1FAE5' }}>
              We combine expertise, creativity, and passion to create outdoor spaces that inspire
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border-2"
                style={{
                  background: 'linear-gradient(135deg, rgba(21,48,31,0.9) 0%, rgba(20,83,45,0.9) 100%)',
                  backdropFilter: 'blur(10px)',
                  borderColor: '#22C55E'
                }}
                variants={itemVariants}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  boxShadow: "0 25px 60px rgba(34,197,94,0.4)"
                }}
              >
                <motion.div
                  className="h-20 w-20 rounded-3xl flex items-center justify-center mb-8"
                  style={{ 
                    background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                    boxShadow: '0 8px 24px rgba(34,197,94,0.4)'
                  }}
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="h-10 w-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#6EE7B7' }}>
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-lg font-light" style={{ color: '#D1FAE5' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section - Hunter Green */}
      <section id="contact" className="py-28 relative overflow-hidden" style={{ 
        background: 'linear-gradient(135deg, #14532D 0%, #166534 50%, #14532D 100%)' 
      }}>
        <DarkForestBackground />
        {/* <BranchBorder position="bottom" /> */}
        
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl" style={{ background: 'rgba(74,222,128,0.12)', zIndex: 3 }}></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(34,197,94,0.1)', zIndex: 3 }}></div>

        <motion.div
          className="container mx-auto px-4 text-center relative"
          style={{ zIndex: 20 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-10"
            style={{ color: '#6EE7B7', textShadow: '0 4px 20px rgba(74,222,128,0.4)' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to Transform Your Landscape?
          </motion.h2>

          <motion.p
            className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            style={{ color: '#D1FAE5', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Let's discuss your vision and create the outdoor space of your dreams
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link to="/contact">
              <motion.button
                className="bg-white px-12 py-6 rounded-full font-bold transition-all shadow-2xl inline-flex items-center text-xl group"
                style={{ color: '#14532D' }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 20px 60px rgba(255,255,255,0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Today
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
