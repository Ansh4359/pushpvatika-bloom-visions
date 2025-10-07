import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const Gallery = () => {
  const projects = [
    {
      id: 1,
      title: "Tranquil Water Garden",
      category: "Water Features",
      image: gallery1,
      description: "Beautiful koi pond with natural stone features and lush plantings",
    },
    {
      id: 2,
      title: "Modern Hardscape Patio",
      category: "Hardscape",
      image: gallery2,
      description: "Contemporary outdoor living space with stone pavers and seating",
    },
    {
      id: 3,
      title: "Luxury Pool Oasis",
      category: "Swimming Pools",
      image: gallery3,
      description: "Custom swimming pool integrated with waterfall and tropical landscaping",
    },
    {
      id: 4,
      title: "Residential Garden",
      category: "Landscape Development",
      image: gallery4,
      description: "Colorful flower beds and manicured lawn with ornamental trees",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Water Features", "Hardscape", "Swimming Pools", "Landscape Development"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Our Gallery
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-slide-up">
            Explore our portfolio of beautiful landscapes and transformations
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id}>
                  <div className="relative h-[500px] rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex items-end">
                      <div className="p-8 text-primary-foreground">
                        <p className="text-sm font-semibold mb-2 text-primary-foreground/80">
                          {project.category}
                        </p>
                        <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                        <p className="text-primary-foreground/90">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-background text-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden border-border hover:shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-primary-foreground">
                      <p className="text-xs font-semibold mb-1">{project.category}</p>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
