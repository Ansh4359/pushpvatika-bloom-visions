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
  CircleDot, 
  Droplets,
  Leaf,
  Apple
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Sprout,
      title: "Landscape Development",
      description: "Complete landscape design and installation services, from concept to completion. We create stunning outdoor spaces tailored to your needs and style.",
      features: ["Site Analysis", "Design Planning", "Plant Selection", "Installation"],
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: "Comprehensive maintenance programs to keep your landscape looking its best year-round. Regular care ensures lasting beauty.",
      features: ["Lawn Care", "Pruning", "Fertilization", "Seasonal Cleanup"],
    },
    {
      icon: Leaf,
      title: "Natural & Artificial Plants",
      description: "Offering both natural and artificial plant solutions with premium quality artificial grass installation. Perfect for low-maintenance, year-round greenery.",
      features: ["Artificial Grass Installation", "Faux Plants & Trees", "Natural Plant Arrangements", "Water-Saving Solutions"],
    },
    {
      icon: Home,
      title: "Hardscape",
      description: "Expert installation of patios, walkways, retaining walls, and outdoor living spaces using premium materials.",
      features: ["Patios & Decks", "Walkways", "Retaining Walls", "Outdoor Kitchens"],
    },
    {
      icon: Flower2,
      title: "Horticulture Consultancy",
      description: "Professional guidance on plant selection, garden planning, and sustainable landscaping practices.",
      features: ["Plant Selection", "Soil Analysis", "Garden Planning", "Sustainable Practices"],
    },
    {
      icon: TreePine,
      title: "Nursery",
      description: "Wide selection of premium plants, trees, and shrubs. Expert advice to help you choose the perfect plants for your space.",
      features: ["Native Plants", "Ornamentals", "Trees & Shrubs", "Seasonal Flowers"],
    },
    {
      icon: Apple,
      title: "Kitchen Garden",
      description: "Design and setup of productive kitchen gardens for terraces and backyards. Grow your own fresh, organic vegetables, herbs, and fruits at home.",
      features: ["Vegetable Gardens", "Herb Stations", "Fruit Trees", "Organic Gardening Methods"],
    },
    {
      icon: Waves,
      title: "Water Features",
      description: "Design and installation of beautiful water features that add tranquility and visual interest to your landscape.",
      features: ["Ponds & Fountains", "Waterfalls", "Streams", "Koi Ponds"],
    },
    {
      icon: Droplets,
      title: "Irrigation Solutions",
      description: "Efficient irrigation systems designed to keep your landscape healthy while conserving water.",
      features: ["Sprinkler Systems", "Drip Irrigation", "Smart Controllers", "System Maintenance"],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-slide-up">
            Comprehensive landscaping solutions for residential and commercial properties
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
