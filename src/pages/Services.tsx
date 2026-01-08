
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Wrench,
  Settings,
  ShieldCheck,
  Thermometer,
  Building2,
  Home,
  Factory,
  Hotel,
  Heart,
  Factory as FactoryIcon,
} from "lucide-react";
import heroSlide2 from "@/assets/hero-slide-3.jpg";
import founderImg from "@/assets/founder.jpg"; // keep if still used elsewhere
import coFounderImg from "@/assets/co-founder.jpg";

const Services: React.FC = () => {
  const services = [
    {
      icon: <Wrench className="w-12 h-12 text-accent" />,
      title: "Labour AMC",
      description:
        "Ensuring uninterrupted cooling with skilled professionals keeping your systems running seamlessly.",
    },
    {
      icon: <Settings className="w-12 h-12 text-accent" />,
      title: "Non-Comprehensive AMC",
      description:
        "Delivering essential maintenance to maximize the lifespan of your cooling systems.",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-accent" />,
      title: "Comprehensive AMC",
      description:
        "A holistic package covering maintenance, repairs, and preventive measures for peak system performance.",
    },
    {
      icon: <Thermometer className="w-12 h-12 text-accent" />,
      title: "Service of Breakdown",
      description:
        "Rely on swift and efficient Breakdown Service, ensuring a prompt response to unexpected issues to restore your cooling systems promptly.",
    },
    {
      icon: <Building2 className="w-12 h-12 text-accent" />,
      title: "Heat Load Calculation & System Design",
      description:
        "Providing precision in designing HVAC systems for optimal performance and energy efficiency.",
    },
    {
      icon: <FactoryIcon className="w-12 h-12 text-accent" />,
      title: "Execution Planning for Builders",
      description:
        "Featuring advanced copper and drain piping solutions to seamlessly integrate state-of-the-art cooling into your structures.",
    },
  ];

  const sectors = [
    {
      icon: <Building2 className="w-10 h-10 text-primary" />,
      title: "Commercial",
      description: "Offices, retail spaces, and commercial complexes",
    },
    {
      icon: <Home className="w-10 h-10 text-primary" />,
      title: "Residential",
      description: "Apartments, villas, and housing complexes",
    },
    {
      icon: <FactoryIcon className="w-10 h-10 text-primary" />,
      title: "Industrial",
      description: "Factories, warehouses, and manufacturing units",
    },
    {
      icon: <Hotel className="w-10 h-10 text-primary" />,
      title: "Hospitality",
      description: "Hotels, restaurants, and entertainment venues",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HeroSection
          title="Our Services"
          subtitle="Comprehensive Air Conditioning Solutions for Every Need"
          backgroundImage={heroSlide2}
        />

        {/* Main Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-4xl font-bold text-center mb-4">
              Our <span style={{ color: "rgb(255, 107, 53)" }}>Services</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Comprehensive air conditioning solutions tailored to your needs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-none bg-card hover:bg-accent/10 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-center text-sm">
                      {service.description}
                    </p>
                    
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

       
        {/* Our Values */}
        <section className="py-20 bg-gradient-to-br from-muted/50 via-background to-muted/30 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Our <span style={{ color: "rgb(255, 107, 53)" }}>Values</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Quality Assurance",
                  description:
                    "At Supreet Cooling Solutions, quality is our foundation. Every project undergoes rigorous checks to meet top industry standards.",
                  icon: ShieldCheck,
                },
                {
                  title: "Client-Centric Approach",
                  description:
                    "We work closely with clients to understand needs and tailor solutions accordingly, ensuring exceptional service at every stage.",
                  icon: Building2,
                },
                {
                  title: "Innovation",
                  description:
                    "We stay ahead by embracing the latest HVAC advancements to deliver future-proof, efficient solutions.",
                  icon: Thermometer,
                },
                {
                  title: "Craftsmanship",
                  description:
                    "Each project is executed with meticulous attention to detail from blueprint to installation.",
                  icon: Settings,
                },
                {
                  title: "Craftsmanship in Every Detail",
                  description:
                    "We treat every connection and finish with precision so systems perform seamlessly and last longer.",
                  icon: Wrench,
                },
                {
                  title: "Commitment to Comfort",
                  description:
                    "Our solutions are engineered to enhance comfort, energy efficiency, and long-term satisfaction.",
                  icon: Heart,
                },
              ].map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card
                    key={index}
                    className="group relative overflow-hidden border-2 border-border/50 hover:border-accent/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 animate-fade-in hover:-translate-y-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#ff6b35] to-[#ffa726] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <IconComponent className="w-8 h-8 text-background" />
                          </div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                            {value.title}
                          </h3>
                          <p className="text-foreground/80 leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-4xl font-bold text-center mb-4">
              Our<span style={{ color: "rgb(255, 107, 53)" }}> Process</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              A streamlined approach to deliver excellence at every step
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {[
                { step: "01", title: "Consultation", description: "Understanding your requirements and providing expert guidance", icon: Wrench },
                { step: "02", title: "Assessment", description: "Detailed site visit and comprehensive evaluation", icon: Settings },
                { step: "03", title: "Installation", description: "Professional setup with rigorous testing", icon: Building2 },
                { step: "04", title: " Service Support", description: "Ongoing maintenance and dedicated care", icon: ShieldCheck },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card 
                    key={index} 
                    className="group relative overflow-hidden border-none bg-card hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="pt-8 pb-8 relative z-10">
                      <div className="flex flex-col items-center text-center gap-4">
                        <div className="relative mb-2">
                          <div className="text-6xl font-bold bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                            {item.step}
                          </div>
                        </div>

                        <div className="relative -mt-8">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <IconComponent className="w-8 h-8 text-background" />
                          </div>
                        </div>

                        <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-accent to-primary text-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Professional HVAC Services?</h2>
            <p className="text-xl mb-8 text-background/90 max-w-2xl mx-auto">Get in touch with our experts for a customized solution</p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
