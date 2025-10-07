import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery = () => {
  // Featured projects for carousel with details
  const featuredProjects = [
    {
      id: 1,
      title: "Tranquil Water Garden",
      category: "Water Features",
      image: "https://res.cloudinary.com/dd3fmtksn/image/upload/v1759816062/IMG-20251002-WA0080_wpa4eg.jpg",
      description: "Beautiful koi pond with natural stone features and lush plantings",
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
  ];

  // Gallery images - Add as many as you want here (just image URLs)
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
    

    // Add more image URLs here as needed
  ];

  return (
    <div className="pt-20 bg-gradient-to-b from-green-50 via-white to-green-50 min-h-screen">
      {/* Compact Hero Section */}
      <section className="relative py-8 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 left-10 w-20 h-20 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-5 right-20 w-32 h-32 border-4 border-white rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 animate-fade-in">
            Our Gallery
          </h1>
          <p className="text-base md:text-lg text-white/95 max-w-2xl mx-auto animate-slide-up">
            Explore our portfolio of beautiful landscapes and transformations
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Compact Featured Carousel Section */}
        <div className="py-6">
          <div className="mb-3">
            <h2 className="text-xl font-bold text-gray-800">Featured Projects</h2>
            <div className="w-14 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-1"></div>
          </div>

          <Carousel className="w-full">
            <CarouselContent>
              {featuredProjects.map((project) => (
                <CarouselItem key={project.id}>
                  <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                      <div className="p-4 text-white w-full">
                        <span className="inline-block px-2.5 py-0.5 bg-green-600/90 text-white text-xs font-semibold rounded-full mb-1.5">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold mb-1 text-white">
                          {project.title}
                        </h3>
                        <p className="text-white/90 text-xs">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Full Gallery Grid Below */}
        <div className="pb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Complete Portfolio</h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
