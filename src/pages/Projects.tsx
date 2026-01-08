import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import heroSlide3 from "@/assets/project-bg.jpeg";
import p1 from "@/assets/project-1.jpeg";
import p2 from "@/assets/project-2.jpeg";
import p3 from "@/assets/project-3.jpeg";
import p4 from "@/assets/project-4.jpeg";
import p5 from "@/assets/project-5.jpeg";
import p6 from "@/assets/project-6.jpeg";
import p7 from "@/assets/project-7.jpeg";
import p8 from "@/assets/project-8.jpeg";
import p9 from "@/assets/project-9.jpeg";
import p10 from "@/assets/project-10.jpeg";
import p11 from "@/assets/project-11.jpeg";
import p12 from "@/assets/project-12.jpeg";
import p13 from "@/assets/project-13.jpeg";
import p14 from "@/assets/project-14.jpeg";
import p15 from "@/assets/project-15.jpeg";
import p16 from "@/assets/project-16.jpeg";

const Projects = () => {
  const cities = [
    {
      name: "Mumbai",
      slug: "mumbai",
      description: "Over 200+ successful installations in Mumbai's commercial and residential sectors",
      projects: "200+",
    },
    {
      name: "Pune",
      slug: "pune",
      description: "Leading provider of HVAC solutions in Pune's IT parks and manufacturing units",
      projects: "150+",
    },
    {
      name: "Bangalore",
      slug: "bangalore",
      description: "Trusted partner for cooling solutions in Bangalore's tech hubs and offices",
      projects: "180+",
    },
    {
      name: "Indore",
      slug: "indore",
      description: "Comprehensive air conditioning services across Indore's growing business landscape",
      projects: "120+",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HeroSection
          title="Our Projects"
          subtitle="Excellence Delivered Across India"
          backgroundImage={heroSlide3}
        />
       
        {/* Stats Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15000+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">19</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">4</div>
                <p className="text-muted-foreground">Major Cities</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

       {/* Projects Gallery Section */}
<section className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
      Our Project  <span style={{ color: "rgb(255, 107, 53)" }}>Showcase</span>
    </h2>
    <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
      Explore some of our completed projects across India.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16].map(
        (img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
          >
            <img
              src={img}
              alt={`Project ${index + 1}`}
              className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">
                Project {index + 1}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  </div>
</section>


        {/* Project Types */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Project <span style={{ color: "rgb(255, 107, 53)" }}>Categories</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: "Commercial", count: 6000, suffix: "+" },
                { title: "Residential", count: 9000, suffix: "+" },
                { title: "Industrial", count: 1000, suffix: "+" },
              ].map((category, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="pt-6">
                    <AnimatedCounter end={category.count} suffix={category.suffix} />
                    <h3 className="text-xl font-semibold">{category.title} Projects</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-accent to-primary text-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-background/90 max-w-2xl mx-auto">
              Join hundreds of satisfied clients across India
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
