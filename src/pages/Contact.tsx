import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Leaf } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Pal Colony Near Gram Panchayat Chandayan",
        "Baghpat, Uttar Pradesh 250645",
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 7078461752", "+91 9958824879"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@pushpvatika.com", "support@pushpvatika.com"],
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Mon - Sat: 8:00 AM - 9:00 PM",
      ],
      color: "from-lime-500 to-green-500",
    },
  ];

  return (
    <div className="pt-20 bg-gradient-to-b from-green-50 via-white to-green-50">
      {/* Hero Section with Botanical Theme */}
      <section className="relative py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
            <Leaf className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Let's Grow Together
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Your dream garden awaits. Reach out to the Pushpvatika team for personalized landscaping solutions that bring nature to your doorstep.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Connect With Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          {/* Contact Cards Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, idx) => (
              <Card 
                key={idx} 
                className="group relative border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white hover:-translate-y-2"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardContent className="relative pt-10 pb-8 text-center z-10">
                  {/* Icon */}
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mx-auto mb-5 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-white transition-colors duration-300">
                    {info.title}
                  </h3>
                  
                  {/* Details */}
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p 
                        key={i} 
                        className="text-gray-600 group-hover:text-white/95 text-sm transition-colors duration-300"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 shadow-xl border border-green-100">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-6">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Ready to Transform Your Space?
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Whether you need landscape design, garden maintenance, or plant consultation, our expert team at Pushpvatika is here to help. Visit our nursery or give us a call for a free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-green-600 text-green-700 hover:bg-green-50 px-8 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Get Directions
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Elements */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-white/90">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">100+</p>
              <p className="text-white/90">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">5+</p>
              <p className="text-white/90">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">100%</p>
              <p className="text-white/90">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
