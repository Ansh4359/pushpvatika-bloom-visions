import { ChevronDown, Leaf, Hammer, Droplet, TreePine, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
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

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
Link
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-white">
            Transform Your Outdoor Space
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-delay">
            Expert landscaping services bringing nature's beauty to your doorstep
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <button
              onClick={() => scrollToSection('services')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Services
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white hover:bg-gray-100 text-green-800 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Get Free Quote
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Pushpvatika?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We combine expertise, creativity, and passion to create outdoor spaces that inspire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-green-700 via-green-600 to-green-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Landscape?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create the outdoor space of your dreams
          </p>
          <button
            className="bg-white hover:bg-gray-100 text-green-800 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center"
          >
            <Link to={"/contact"}>
            Contact Us Today
            </Link>
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
