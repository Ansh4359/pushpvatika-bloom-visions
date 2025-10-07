import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, Heart } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";

const About = () => {
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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
            About Pushpvatika
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-slide-up">
            Crafting natural masterpieces since our inception, bringing expertise and passion to every landscape
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Pushpvatika was born from a deep appreciation for nature and a vision to transform outdoor spaces into living works of art. Our journey began with a simple belief: that every landscape has the potential to become extraordinary.
                </p>
                <p>
                  With years of experience in landscape development, maintenance, and design, we've built a reputation for excellence and innovation. Our team combines traditional horticultural knowledge with modern techniques to create sustainable, beautiful outdoor environments.
                </p>
                <p>
                  From intimate garden spaces to expansive commercial landscapes, we approach each project with the same dedication to quality, creativity, and client satisfaction that has defined our company from the start.
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src={aboutImage}
                alt="Pushpvatika team at work"
                className="rounded-lg shadow-hover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To create sustainable, beautiful outdoor environments that enhance the quality of life for our clients and communities. We strive to blend artistic vision with environmental responsibility, delivering landscapes that are not only stunning but also harmonious with nature.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
