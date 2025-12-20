import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
      width={35}
      height={35}
      style={{
        position: 'absolute',
        top: `${startY}%`,
        left: -50,
        pointerEvents: 'none',
        zIndex: 1,
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
      }}
      initial={{ x: -100, y: 0, rotate: 0, opacity: 0 }}
      animate={{
        x: ['0vw', '30vw', '60vw', '100vw'],
        y: [0, 100, -50, 150, 50],
        rotate: [0, 180, 360, 540, 720],
        opacity: [0, 0.6, 0.8, 0.6, 0],
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
        strokeWidth="1"
        opacity="0.85"
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
        height: '80px',
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
        viewBox="0 0 1920 80"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M0 40 Q480 10 960 30 Q1440 50 1920 25" stroke="#3F2B1F" strokeWidth="8" fill="none" opacity="0.5" />
        <path d="M0 45 Q480 15 960 35 Q1440 55 1920 30" stroke="#2D1F16" strokeWidth="4" fill="none" opacity="0.3" />
        
        {[100, 250, 400, 580, 720, 890, 1050, 1200, 1380, 1520, 1680, 1820].map((x, i) => (
          <motion.ellipse
            key={i}
            cx={x}
            cy={25 + (i % 3) * 10}
            rx="14"
            ry="6"
            fill="#4ADE80"
            opacity="0.6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
          />
        ))}
      </svg>
    </motion.div>
  );
};

// Lighter Background
const LightForestBackground = () => {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80)',
          filter: 'blur(2px) brightness(0.6)',
          opacity: 0.15,
          zIndex: 0
        }}
      />
      
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(74,222,128,0.08) 0%, rgba(34,197,94,0.05) 100%)',
          zIndex: 1
        }}
      />
    </>
  );
};

const Gallery = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const generatedLeaves = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      delay: i * 2.5,
      startY: Math.random() * 80,
      duration: 15 + Math.random() * 5
    }));
    setLeaves(generatedLeaves);
  }, []);

  const featuredProjects = [
    {
      id: 1,
      title: "Natural Flower Installation",
      category: "Natural Solutions",
      image: "https://res.cloudinary.com/dt1evns9n/image/upload/v1766260816/WhatsApp_Image_2025-12-17_at_9.45.36_PM_1_dh1iu0.jpg",
      description: "Low-maintenance natural flower perfect for year-round greenery",
    },
    {
      id: 2,
      title: "Modern Hardscape Patio",
      category: "Hardscape",
      image: "https://res.cloudinary.com/dd3fmtksn/image/upload/v1759816076/IMG-20251002-WA0025_jswvpa.jpg",
      description: "Contemporary outdoor living space with stone pavers and seating",
    },
    {
      id: 3,
      title: "Luxury Pool Oasis",
      category: "Roof Top Garden",
      image: "https://res.cloudinary.com/dd3fmtksn/image/upload/v1759816075/IMG-20251002-WA0030_ahfa0c.jpg",
      description: "Custom roof top Garden integrated tropical landscaping",
    },
    {
      id: 4,
      title: "Residential Garden",
      category: "Landscape Development",
      image: "https://res.cloudinary.com/dd3fmtksn/image/upload/v1759816077/IMG-20251002-WA0022_zspayo.jpg",
      description: "Colorful flower beds and manicured lawn with ornamental trees",
    },
    {
      id: 5,
      title: "Kitchen Garden Setup",
      category: "Kitchen Garden",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800",
      description: "Organic vegetable garden with raised beds and herb stations",
    },
    {
      id: 6,
      title: "Artificial Grass Installation",
      category: "Artificial Solutions",
      image: "https://res.cloudinary.com/dd3fmtksn/image/upload/v1759816073/IMG-20251002-WA0047_mj9ht4.jpg",
      description: "Low-maintenance artificial grass perfect for year-round greenery",
    },
     {
      id: 7,
      title: "Tranquil Water Garden",
      category: "Water Features",
      image: "https://res.cloudinary.com/dd3fmtksn/image/upload/v1759816062/IMG-20251002-WA0080_wpa4eg.jpg",
      description: "Beautiful koi pond with natural stone features and lush plantings",
    },
  ];

  const galleryImages = [
    "https://res.cloudinary.com/dd3fmtksn/image/upload/v1759816062/IMG-20251002-WA0080_wpa4eg.jpg",
    "https://res.cloudinary.com/dd3fmtksn/image/upload/v1759816077/IMG-20251002-WA0022_zspayo.jpg",
    "https://res.cloudinary.com/dd3fmtksn/image/upload/v1759816078/IMG-20251002-WA0023_gc3ege.jpg",
    "https://res.cloudinary.com/dd3fmtksn/image/upload/v1759816078/IMG-20251002-WA0027_ggnfqc.jpg",
    "https://res.cloudinary.com/dd3fmtksn/image/upload/v1759816076/IMG-20251002-WA0026_qq3d6q.jpg",
    "https://res.cloudinary.com/dd3fmtksn/image/upload/v1759816077/IMG-20251002-WA0021_ynkdak.jpg",
    "https://res.cloudinary.com/dd3fmtksn/image/upload/v1759816078/IMG-20251002-WA0019_sksdtp.jpg",
    "https://res.cloudinary.com/dd3fmtksn/image/upload/v1759816076/IMG-20251002-WA0028_syjcks.jpg",
    "https://res.cloudinary.com/dd3fmtksn/image/upload/v1759816068/IMG-20251002-WA0072_kjz5us.jpg",
    "https://res.cloudinary.com/dd3fmtksn/image/upload/v1759816067/IMG-20251002-WA0053_b411tu.jpg",
    "https://res.cloudinary.com/dd3fmtksn/image/upload/v1759816072/IMG-20251002-WA0076_ddktyf.jpg",
    "https://res.cloudinary.com/dt1evns9n/image/upload/v1766260816/WhatsApp_Image_2025-12-17_at_9.45.33_PM_c2nyo2.jpg",
    "https://res.cloudinary.com/dt1evns9n/image/upload/v1766260816/WhatsApp_Image_2025-12-17_at_9.45.36_PM_ko40gc.jpg",
    "https://res.cloudinary.com/dt1evns9n/image/upload/v1766260816/WhatsApp_Image_2025-12-17_at_9.45.42_PM_anvnhj.jpg",
    "https://res.cloudinary.com/dt1evns9n/image/upload/v1766260815/WhatsApp_Image_2025-12-17_at_9.45.40_PM_y9stzo.jpg",
    "https://res.cloudinary.com/dt1evns9n/image/upload/v1766260814/WhatsApp_Image_2025-12-17_at_9.45.34_PM_cbytk2.jpg",
    "https://res.cloudinary.com/dt1evns9n/image/upload/v1766260814/WhatsApp_Image_2025-12-17_at_9.45.31_PM_vkogwi.jpg",
    "https://res.cloudinary.com/dt1evns9n/image/upload/v1766260815/WhatsApp_Image_2025-12-17_at_9.45.33_PM_1_aebaxi.jpg"
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="pt-20 relative overflow-hidden min-h-screen" style={{ 
      background: 'linear-gradient(135deg, #2D5A2E 0%, #34623F 25%, #2D5A2E 50%, #1E4620 75%, #2D5A2E 100%)' 
    }}>
      {/* Floating Leaves */}
      {leaves.map((leaf) => (
        <FloatingLeaf
          key={leaf.id}
          delay={leaf.delay}
          startY={leaf.startY}
          duration={leaf.duration}
        />
      ))}

      {/* Hero + Featured Projects Section - Full Screen */}
      <section className="relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #34623F 0%, #2D5A2E 50%, #34623F 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <LightForestBackground />
        <BranchBorder position="top" />
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full" style={{ 
          border: '3px solid rgba(110,231,183,0.3)',
          zIndex: 3 
        }}></div>
        <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full" style={{ 
          border: '3px solid rgba(110,231,183,0.2)',
          zIndex: 3 
        }}></div>
        
        <div className="absolute top-10 right-10 w-60 h-60 rounded-full blur-3xl" style={{ 
          background: 'rgba(74,222,128,0.15)',
          zIndex: 2 
        }}></div>

        <div className="container mx-auto px-4 py-12 relative z-10 flex flex-col flex-1">
          {/* Hero Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{ color: '#D1FAE5', textShadow: '0 3px 15px rgba(74,222,128,0.3)' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Our Gallery
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto font-light"
              style={{ color: '#A7F3D0' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Explore our portfolio of beautiful landscapes and transformations
            </motion.p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            className="flex-1 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="mb-6">
              {/* <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ 
                color: '#6EE7B7',
                textShadow: '0 2px 10px rgba(74,222,128,0.2)'
              }}>
                Featured Projects
              </h2> */}
              <div className="w-20 h-1 rounded-full" style={{ 
                background: 'linear-gradient(90deg, #22C55E 0%, #10B981 100%)' 
              }}></div>
            </div>

            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {featuredProjects.map((project) => (
                  <CarouselItem key={project.id}>
                    <motion.div
                      className="relative h-[500px] rounded-2xl overflow-hidden border-2"
                      style={{
                        borderColor: '#22C55E',
                        boxShadow: '0 20px 50px rgba(34,197,94,0.3)'
                      }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end">
                        <div className="p-8 text-white w-full">
                          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-3" style={{
                            background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)'
                          }}>
                            {project.category}
                          </span>
                          <h3 className="text-3xl font-bold mb-2" style={{ color: '#D1FAE5' }}>
                            {project.title}
                          </h3>
                          <p className="text-lg font-light" style={{ color: '#A7F3D0' }}>
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" style={{ 
                background: 'rgba(34,197,94,0.9)',
                borderColor: '#22C55E',
                color: 'white'
              }} />
              <CarouselNext className="right-4" style={{ 
                background: 'rgba(34,197,94,0.9)',
                borderColor: '#22C55E',
                color: 'white'
              }} />
            </Carousel>
          </motion.div>
        </div>
      </section>

      {/* Complete Portfolio Section - Appears on Scroll */}
      <section className="py-20 relative" style={{ 
        background: 'linear-gradient(135deg, #1E4620 0%, #254D2A 50%, #1E4620 100%)' 
      }}>
        <LightForestBackground />
        
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full blur-3xl" style={{ 
          background: 'rgba(74,222,128,0.1)',
          zIndex: 2 
        }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl" style={{ 
          background: 'rgba(52,211,153,0.08)',
          zIndex: 2 
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ 
              color: '#6EE7B7',
              textShadow: '0 2px 10px rgba(74,222,128,0.2)'
            }}>
              Complete Portfolio
            </h2>
            <div className="w-25 h-1 mx-auto rounded-full" style={{ 
              background: 'linear-gradient(90deg, #22C55E 0%, #10B981 100%)' 
            }}></div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {galleryImages.map((image, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className="group overflow-hidden border-2 shadow-lg transition-all duration-500 cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, rgba(21,48,31,0.6) 0%, rgba(20,83,45,0.6) 100%)',
                    backdropFilter: 'blur(8px)',
                    borderColor: '#22C55E'
                  }}
                >
                  <motion.div
                    className="relative h-64 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                      background: 'linear-gradient(135deg, rgba(34,197,94,0.4) 0%, rgba(16,185,129,0.4) 100%)'
                    }}></div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
