import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Sprout, 
  Wrench, 
  Home, 
  Flower2, 
  TreePine, 
  Waves, 
  Droplets,
  Leaf,
  Apple
} from "lucide-react";
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

const Services = () => {
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

  const services = [
    {
      icon: Sprout,
      title: "Landscape Development",
      description: "Complete landscape design and installation services, from concept to completion. We create stunning outdoor spaces tailored to your needs and style.",
      features: ["Site Analysis", "Design Planning", "Plant Selection", "Installation"],
      gradient: "from-emerald-500 to-green-600"
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: "Comprehensive maintenance programs to keep your landscape looking its best year-round. Regular care ensures lasting beauty.",
      features: ["Lawn Care", "Pruning", "Fertilization", "Seasonal Cleanup"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Leaf,
      title: "Natural & Artificial Plants",
      description: "Offering both natural and artificial plant solutions with premium quality artificial grass installation. Perfect for low-maintenance, year-round greenery.",
      features: ["Artificial Grass Installation", "Faux Plants & Trees", "Natural Plant Arrangements", "Water-Saving Solutions"],
      gradient: "from-lime-500 to-green-600"
    },
    {
      icon: Home,
      title: "Hardscape",
      description: "Expert installation of patios, walkways, retaining walls, and outdoor living spaces using premium materials.",
      features: ["Patios & Decks", "Walkways", "Retaining Walls", "Outdoor Kitchens"],
      gradient: "from-teal-500 to-emerald-600"
    },
    {
      icon: Flower2,
      title: "Horticulture Consultancy",
      description: "Professional guidance on plant selection, garden planning, and sustainable landscaping practices.",
      features: ["Plant Selection", "Soil Analysis", "Garden Planning", "Sustainable Practices"],
      gradient: "from-green-400 to-emerald-600"
    },
    {
      icon: TreePine,
      title: "Nursery",
      description: "Wide selection of premium plants, trees, and shrubs. Expert advice to help you choose the perfect plants for your space.",
      features: ["Native Plants", "Ornamentals", "Trees & Shrubs", "Seasonal Flowers"],
      gradient: "from-emerald-600 to-green-700"
    },
    {
      icon: Apple,
      title: "Kitchen Garden",
      description: "Design and setup of productive kitchen gardens for terraces and backyards. Grow your own fresh, organic vegetables, herbs, and fruits at home.",
      features: ["Vegetable Gardens", "Herb Stations", "Fruit Trees", "Organic Gardening Methods"],
      gradient: "from-lime-600 to-green-700"
    },
    {
      icon: Waves,
      title: "Water Features",
      description: "Design and installation of beautiful water features that add tranquility and visual interest to your landscape.",
      features: ["Ponds & Fountains", "Waterfalls", "Streams", "Koi Ponds"],
      gradient: "from-cyan-500 to-teal-600"
    },
    {
      icon: Droplets,
      title: "Irrigation Solutions",
      description: "Efficient irrigation systems designed to keep your landscape healthy while conserving water.",
      features: ["Sprinkler Systems", "Drip Irrigation", "Smart Controllers", "System Maintenance"],
      gradient: "from-teal-600 to-green-700"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto font-light"
            style={{ color: '#A7F3D0', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Comprehensive landscaping solutions for residential and commercial properties
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative" style={{ 
        background: 'linear-gradient(135deg, #1E4620 0%, #254D2A 50%, #1E4620 100%)' 
      }}>
        <DarkForestBackground />
        
        <div className="absolute top-32 right-20 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(74,222,128,0.1)', zIndex: 2 }}></div>
        <div className="absolute bottom-20 left-32 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(52,211,153,0.08)', zIndex: 2 }}></div>
        
        <motion.div
          className="container mx-auto px-4 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className="group border-2 transition-all duration-500 h-full overflow-hidden relative"
                  style={{
                    background: 'linear-gradient(135deg, rgba(21,48,31,0.9) 0%, rgba(20,83,45,0.9) 100%)',
                    backdropFilter: 'blur(10px)',
                    borderColor: '#22C55E'
                  }}
                >
                  {/* Gradient Overlay on Hover */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>

                  <CardHeader className="relative z-10">
                    <motion.div
                      className="h-20 w-20 rounded-3xl flex items-center justify-center mb-6"
                      style={{ 
                        background: `linear-gradient(135deg, #22C55E 0%, #16A34A 100%)`,
                        boxShadow: '0 8px 24px rgba(34,197,94,0.4)'
                      }}
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="h-10 w-10 text-white" />
                    </motion.div>
                    <CardTitle className="text-2xl font-bold" style={{ color: '#6EE7B7' }}>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="mb-6 leading-relaxed font-light" style={{ color: '#D1FAE5' }}>
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center text-base font-light"
                          style={{ color: '#A7F3D0' }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span 
                            className="h-2 w-2 rounded-full mr-3 flex-shrink-0"
                            style={{ background: '#4ADE80' }}
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #14532D 0%, #166534 50%, #14532D 100%)'
      }}>
        <DarkForestBackground />
        
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(74,222,128,0.12)', zIndex: 2 }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(34,197,94,0.1)', zIndex: 2 }}></div>

        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: '#6EE7B7', textShadow: '0 4px 20px rgba(74,222,128,0.4)' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Let's Discuss Your Project
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light"
            style={{ color: '#D1FAE5', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Contact us today for a free consultation and quote
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link to="/contact">
              <motion.button
                className="bg-white px-12 py-6 rounded-full font-bold text-xl transition-all shadow-2xl"
                style={{ color: '#14532D' }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 20px 60px rgba(255,255,255,0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
