import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, Heart } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

// Branch Border Component with darker wood tones
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

const About = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const generatedLeaves = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      delay: i * 1.8,
      startY: Math.random() * 80,
      duration: 13 + Math.random() * 7
    }));
    setLeaves(generatedLeaves);
  }, []);

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality in every project",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Working closely with clients to bring their vision to life",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Attention to detail in every aspect of landscape design",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Genuine love for nature and creating beautiful spaces",
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
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

      {/* Combined Hero + Story Section - Full Screen */}
      <section className="relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0F2419 0%, #1A3A1F 30%, #14532D 60%, #1A3A1F 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <DarkForestBackground />
        <BranchBorder position="top" />
        
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(74,222,128,0.12)', zIndex: 3 }}></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(34,197,94,0.1)', zIndex: 3 }}></div>

        <div className="container mx-auto px-4 py-16 relative" style={{ zIndex: 20 }}>
          {/* Hero Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-7xl font-bold mb-6"
              style={{ color: '#D1FAE5', textShadow: '0 4px 20px rgba(74,222,128,0.4)' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              About PushpLandscaping
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl max-w-4xl mx-auto font-light"
              style={{ color: '#A7F3D0', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Crafting natural masterpieces since our inception, bringing expertise and passion to every landscape
            </motion.p>
          </motion.div>

          {/* Story Section - Same Screen */}
          <div className="grid md:grid-cols-2 gap-16 items-center mt-20">
            <motion.div
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              variants={itemVariants}
            >
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-8"
                style={{ color: '#6EE7B7', textShadow: '0 2px 12px rgba(74,222,128,0.3)' }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                Our Story
              </motion.h2>
              <motion.div
                className="space-y-6 text-lg leading-relaxed"
                style={{ color: '#D1FAE5' }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.p variants={itemVariants} className="font-light">
                  PushpLandscaping was born from a deep appreciation for nature and a vision to transform outdoor spaces into living works of art. Our journey began with a simple belief: that every landscape has the potential to become extraordinary.
                </motion.p>
                <motion.p variants={itemVariants} className="font-light">
                  With years of experience in landscape development, maintenance, and design, we've built a reputation for excellence and innovation. Our team combines traditional horticultural knowledge with modern techniques to create sustainable, beautiful outdoor environments.
                </motion.p>
                <motion.p variants={itemVariants} className="font-light">
                  From intimate garden spaces to expansive commercial landscapes, we approach each project with the same dedication to quality, creativity, and client satisfaction that has defined our company from the start.
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              variants={imageVariants}
            >
              <motion.div
                className="absolute -top-6 -right-6 w-full h-full rounded-3xl"
                style={{ background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)', opacity: 0.3, zIndex: -1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.7 }}
              />
              <motion.img
                src={aboutImage}
                alt="Pushpvatika team at work"
                className="rounded-3xl w-full h-auto relative z-10"
                style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.6)' }}
                whileHover={{ scale: 1.02, boxShadow: '0 30px 70px rgba(34,197,94,0.4)' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Hunter Green */}
      <section className="py-28 relative" style={{ 
        background: 'linear-gradient(135deg, #14532D 0%, #166534 50%, #14532D 100%)' 
      }}>
        <DarkForestBackground />
        
        <div className="absolute top-28 left-16 w-72 h-72 rounded-full blur-3xl" style={{ background: 'rgba(74,222,128,0.12)', zIndex: 2 }}></div>
        <div className="absolute bottom-24 right-24 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(34,197,94,0.1)', zIndex: 2 }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ 
              color: '#6EE7B7', 
              textShadow: '0 2px 12px rgba(74,222,128,0.3)' 
            }}>
              Our Values
            </h2>
            <p className="text-2xl max-w-3xl mx-auto font-light" style={{ color: '#A7F3D0' }}>
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -14, scale: 1.04 }}
              >
                <Card className="border-2 hover:shadow-2xl h-full transition-all duration-300" style={{
                  borderColor: '#22C55E',
                  background: 'linear-gradient(135deg, rgba(21,48,31,0.9) 0%, rgba(20,83,45,0.9) 100%)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <CardContent className="pt-10 pb-10 text-center">
                    <motion.div
                      className="h-24 w-24 rounded-3xl flex items-center justify-center mx-auto mb-8"
                      style={{ 
                        background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                        boxShadow: '0 8px 24px rgba(34,197,94,0.4)'
                      }}
                      whileHover={{ rotate: 360, scale: 1.2, boxShadow: '0 12px 32px rgba(34,197,94,0.6)' }}
                      transition={{ duration: 0.6 }}
                    >
                      <value.icon className="h-12 w-12 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: '#6EE7B7' }}>
                      {value.title}
                    </h3>
                    <p className="leading-relaxed text-lg font-light" style={{ color: '#D1FAE5' }}>
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section - Deep Forest */}
      <section className="py-28 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0F2419 0%, #1A3A1F 30%, #14532D 60%, #1A3A1F 100%)'
      }}>
        <DarkForestBackground />
        {/* <BranchBorder position="bottom" /> */}
        
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(74,222,128,0.12)', zIndex: 3 }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(34,197,94,0.1)', zIndex: 3 }}></div>

        <motion.div
          className="container mx-auto px-4 max-w-5xl text-center relative"
          style={{ zIndex: 20 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-10"
            style={{ color: '#6EE7B7', textShadow: '0 4px 20px rgba(74,222,128,0.4)' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-2xl md:text-3xl leading-relaxed font-light"
            style={{ color: '#D1FAE5', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            To create sustainable, beautiful outdoor environments that enhance the quality of life for our clients and communities. We strive to blend artistic vision with environmental responsibility, delivering landscapes that are not only stunning but also harmonious with nature.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
