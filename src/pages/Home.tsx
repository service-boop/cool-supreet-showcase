import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wind,
  Users,
  Award,
  Shield,
  Monitor,
  Building2,
  Utensils,
  Factory,
  Home as HomeIcon,
  Briefcase,
  Snowflake,
  Filter,
  Fan,
  Thermometer,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
  
    let current = 0;
    const interval = setInterval(() => {
      setVisibleIndex((prev) => {
        if (prev >= 3) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
      current++;
    }, 180);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Wind className="w-12 h-12" aria-hidden />,
      title: "Premium Quality",
      description: "Top-tier HVAC solutions with the latest technology and best practices.",
    },
    {
      icon: <Users className="w-12 h-12" aria-hidden />,
      title: "Expert Team",
      description: "Certified professionals with decades of combined experience.",
    },
    {
      icon: <Award className="w-12 h-12" aria-hidden />,
      title: "Industry Leader",
      description: "Award-winning service recognized across India.",
    },
    {
      icon: <Shield className="w-12 h-12" aria-hidden />,
      title: "Guaranteed Service",
      description: "Comprehensive warranty and 24/7 support for your peace of mind.",
    },
  ];

  const clientCategories = [
    { icon: <Monitor className="w-12 h-12" aria-hidden />, title: "CO-WORKING SPACES" },
    { icon: <Building2 className="w-12 h-12" aria-hidden />, title: "HOSPITALS" },
    { icon: <Utensils className="w-12 h-12" aria-hidden />, title: "RESTAURANTS" },
    { icon: <Factory className="w-12 h-12" aria-hidden />, title: "TECH PARKS" },
    { icon: <Briefcase className="w-12 h-12" aria-hidden />, title: "ACADEMIC INSTITUTIONS" }, // fixed spelling
    { icon: <HomeIcon className="w-12 h-12" aria-hidden />, title: "INDUSTRIES" },
  ];

  const offerings = [
    { title: "VRV Systems", Icon: Wind },
    { title: "Chillers", Icon: Snowflake },
    { title: "AHUs", Icon: Filter },
    { title: "Ventilation", Icon: Building2 },
    { title: "Hi Wall, Cassette, Ductable", Icon: Fan },
    { title: "Commercial Refrigeration", Icon: Thermometer },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="relative">
          <HeroSlider />
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              Why Choose <span style={{ color: "rgb(255, 107, 53)" }}>Supreet Cooling Solutions?</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={feature.title}
                  className={`text-center transition-all duration-500 hover:scale-105 hover:shadow-xl transform-gpu`}
                  style={{
                    
                    opacity: visibleIndex >= index ? 1 : 0,
                    transform: visibleIndex >= index ? "translateY(0)" : "translateY(12px)",
                  }}
                >
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4 text-[#ff6b35]">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Patronage */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Client <span style={{ color: "rgb(255, 107, 53)" }}>Patronage</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Trusted by leading organizations across diverse sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {clientCategories.map((category) => (
                <Card
                  key={category.title}
                  className="group bg-white border border-gray-200 rounded-xl shadow-sm p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 bg-gray-100 text-gray-700 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#ff6b35] group-hover:to-[#ffa726] group-hover:text-white shadow-md">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold uppercase tracking-wide text-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#ff6b35] group-hover:to-[#ffa726] group-hover:bg-clip-text group-hover:text-transparent">
                        {category.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        {/* <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold">
                Our <span style={{ color: "rgb(255, 107, 53)" }}>Offerings</span>
              </h2>
              <p className="text-gray-600 mt-3">Smart HVAC technologies built for performance & precision.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offerings.map((item, i) => (
                <div
                  key={item.title}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#ff6b35]/10 rounded-bl-full pointer-events-none" />

                  <item.Icon size={42} strokeWidth={1.6} className="mb-4 text-[#ff6b35]" aria-hidden />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">Efficient & reliable HVAC performance you can trust.</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Offerings Section */}
<section className="py-12 bg-gray-50">  {/* Changed from py-20 to py-12 */}
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold">
        Our <span style={{ color: "rgb(255, 107, 53)" }}>Offerings</span>
      </h2>
      <p className="text-gray-600 mt-3">Smart HVAC technologies built for performance & precision.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {offerings.map((item, i) => (
        <div
          key={item.title}
          className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#ff6b35]/10 rounded-bl-full pointer-events-none" />

          <item.Icon size={42} strokeWidth={1.6} className="mb-4 text-[#ff6b35]" aria-hidden />
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600">Efficient & reliable HVAC performance you can trust.</p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Services Preview */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Our <span style={{ color: "rgb(255, 107, 53)" }}>Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive air conditioning solutions for all your needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-3">Labour AMC</h3>
                  <p className="text-muted-foreground mb-4">
                    Ensuring uninterrupted cooling with skilled professionals keeping your systems running seamlessly.
                  </p>
                  <Button asChild variant="outline">
                    <Link to="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-3">Comprehensive AMC</h3>
                  <p className="text-muted-foreground mb-4">
                    A holistic package covering maintenance, repairs, and preventive measures for peak system performance.
                  </p>
                  <Button asChild variant="outline">
                    <Link to="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-3">Service of Breakdown</h3>
                  <p className="text-muted-foreground mb-4">
                    Rely on swift and efficient Breakdown Service, ensuring a prompt response to unexpected issues.
                  </p>
                  <Button asChild variant="outline">
                    <Link to="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-accent to-primary text-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
