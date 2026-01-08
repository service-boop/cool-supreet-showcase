
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Zap, Heart, Users as UsersIcon, TrendingUp } from "lucide-react";
import BrandCarousel from "@/components/BrandCarousel";

import founderImg from "@/assets/founder.jpg";
import coFounderImg from "@/assets/co-founder.jpg";
import heroImage from "@/assets/hero-bg.jpg"; 

// ---------------- REVIEWS --------------------
interface Review {
  text: string;
  name: string;
  rating: number;
}

const reviews: Review[] = [
  {
    text:
      "Very professional team of cooling experts! Highly recommended for both commercial and residential cooling solutions.",
    name: "Vivek Agarwal",
    rating: 5,
  },
  {
    text:
      "Very happy with Supreet Cooling Solutions. The team was prompt, polite, and fixed the issue efficiently. Good service overall!",
    name: "Vikas Khetan",
    rating: 5,
  },
  { text: "Had a great experience with Supreet AC Servicing! Iliyas was professional, punctual, and really knew his work. Our AC is running perfectly now. Highly recommend their services!", name: "Kumar Gaurav", rating: 5 },
  { text: "Awesome service and sales", name: "Tanmay Kulkarni", rating: 5 },
];

const ReviewsSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((p) => (p + 1) % reviews.length), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          What Our <span className="text-orange-500">Customers Say</span>
        </h2>
        <div className="relative h-48">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <p className="text-lg italic mb-3">"{review.text}"</p>
              <div className="text-yellow-400 mb-3">{"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}</div>
              <h4 className="text-orange-500 font-semibold">- {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ------------ Navbar Height ------------
const NAV_HEIGHT = 80;

const About: React.FC = () => {
  const location = useLocation();

  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!location) return;

    const hash = location.hash;
    if (!hash) return;

    if (location.pathname && !location.pathname.includes("/about")) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const t = setTimeout(() => {
      const top = el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT - 12;
      window.scrollTo({ top, behavior: "smooth" });
    }, 90);

    return () => clearTimeout(t);
  }, [location]);

  
  useEffect(() => {
    if (typeof window === "undefined") return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("visible");
          } else {
            
            el.classList.remove("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* -------- HERO SECTION WITH JPEG IMAGE -------- */}
        <div
          className="relative h-[420px] md:h-[520px] flex items-center justify-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full container mx-auto px-4">
            <div className="text-white max-w-3xl text-center mx-auto">
              <h1
                className="text-4xl md:text-5xl font-bold mb-5 
  bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text"
              >
                <span style={{ color: "rgb(255, 107, 53)" }}></span>Excellence in Air Conditioning Solutions Since 2007
              </h1>

              <p className="text-lg md:text-xl opacity-90">
                Delivering smart HVAC and refrigeration systems tailored to commercial & residential needs.
              </p>
            </div>
          </div>
        </div>

        {/* <section id="our-story" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our <span style={{ color: "rgb(255, 107, 53)" }}>Story</span>
              </h2>

              <p className="text-[18px] text-muted-foreground leading-8 mx-auto max-w-2xl">
                With nearly two decades of retail experience, Supreet Cooling Solutions is a brand
                synonymous with unparalleled expertise and unwavering commitment to the highest
                standards of excellence in the HVAC and Commercial Refrigeration Industry. With a
                legacy steeped in innovation and precision, we combine the best of global practices
                with an in-depth understanding of local nuances, ensuring that our solutions are not
                only technologically advanced but also culturally and environmentally sensitive.
                Standing as vanguards in the HVAC industry, we take pride in crafting experiences 
                through engineered environments that redefine comfort.
              </p>

              <p className="text-[18px] text-muted-foreground leading-8 mx-auto max-w-2xl mt-8">
                Over the years, Supreet Cooling Solutions has consistently been acknowledged as a 
                reputable, reliable, and forward-thinking partner with a strong focus on elevating 
                standards of living.
              </p>
            </div>
          </div>
        </section> */}

        <section id="our-story" className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our <span style={{ color: "rgb(255, 107, 53)" }}>Story</span>
      </h2>

      <div className="space-y-8 text-lg leading-relaxed text-gray-700">
        <p>
          With nearly two decades of retail experience, <strong>Supreet Cooling Solutions</strong> is a brand synonymous with unparalleled expertise and unwavering commitment to the highest standards of excellence in the HVAC and Commercial Refrigeration Industry.
        </p>

        <p>
          Our legacy is steeped in <em>innovation and precision</em>, combining the best of global practices with an in-depth understanding of local nuances. This ensures our solutions are not only technologically advanced but also culturally and environmentally sensitive.
        </p>

        <p>
          As vanguards in the HVAC industry, we take pride in crafting experiences through engineered environments that redefine comfort. Over the years, Supreet Cooling Solutions has consistently been acknowledged as a reputable, reliable, and forward-thinking partner with a strong focus on elevating standards of living.
        </p>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-500">
          <p className="font-semibold text-gray-800">
            <strong>Key Highlights:</strong>
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Founded in 2007 with a focus on excellence.</li>
            <li>45+ years of combined industry experience.</li>
            {/* <li>Serving commercial and residential sectors across India.</li> */}
            <li>Commitment to innovation, integrity, and customer satisfaction.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
        {/* ---------------- UPDATED OUR TEAM (animated on scroll) ---------------- */}
        <section id="our-team" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
               Founder <span style={{ color: "rgb(255, 107, 53)" }}>& CEO</span>
            </h2>

            {/* Styles for animation (kept inside component for convenience) */}
            <style>
              {`
                /* entrance animations */
                @keyframes slideInLeft {
                  0% { opacity: 0; transform: translateX(-60px) scale(0.98); }
                  100% { opacity: 1; transform: translateX(0) scale(1); }
                }

                @keyframes slideInRight {
                  0% { opacity: 0; transform: translateX(60px) scale(0.98); }
                  100% { opacity: 1; transform: translateX(0) scale(1); }
                }

                /* subtle running float effect while visible */
                @keyframes runningFloat {
                  0% { transform: translateY(0) translateX(0); }
                  50% { transform: translateY(-6px) translateX(4px); }
                  100% { transform: translateY(0) translateX(0); }
                }

                /* card base styles */
                .founder-card {
                  opacity: 0;
                  transform: translateY(8px);
                  transition: box-shadow 300ms ease, transform 300ms ease;
                }

                .founder-card.visible[data-dir="left"] {
                  animation: slideInLeft 900ms cubic-bezier(.2,.9,.2,1) both;
                }

                .founder-card.visible[data-dir="right"] {
                  animation: slideInRight 900ms cubic-bezier(.2,.9,.2,1) both;
                }

                /* after entrance, add runningFloat loop */
                .founder-card.visible .card-inner {
                  animation: runningFloat 3.6s ease-in-out infinite;
                }

                .founder-card.visible {
                  box-shadow: 0 10px 30px rgba(20,20,20,0.06);
                }

                .founder-image {
                  width: min(370px, 40vw);
                  height: min(370px, 40vw);
                  object-fit: cover;
                  border-radius: 10px;
                  background: #fff;
                  padding: 5px;
                  box-sizing: border-box;
                  flex: 0 0 auto;
                }

                .founder-name { margin: 0; font-size: 24px; color: #111; }
                .founder-role { margin: 5px 0 20px; color: #444; }
                .founder-text { line-height: 1.6; margin-bottom: 15px; color: #333; }
              `}
            </style>

            <div
              style={{
                width: "100%",
                padding: "0 8px",
                boxSizing: "border-box",
                maxWidth: 1100,
                margin: "0 auto",
              }}
            >
              {/* Founder 1 */}
              <div
                ref={(el) => (cardRefs.current[0] = el)}
                data-dir="left"
                className="founder-card"
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                  background: "#fafafa",
                  padding: "20px",
                  borderRadius: "12px",
                  marginBottom: "40px",
                  flexWrap: "wrap",
                }}
              >
                <div
                  className="card-inner"
                  style={{ display: "flex", gap: "20px", width: "100%", alignItems: "flex-start" }}
                >
                  <img src={founderImg} alt="Founder Photo" className="founder-image" />

                  <div style={{ maxWidth: "800px", flex: "1 1 300px" }}>
                    <h2 className="founder-name">Mr. Surinder Bedi</h2>
                    <h4 className="founder-role">Founder </h4>

                    <p className="founder-text">
                      Mr. Surinder Bedi, the visionary founder of Supreet Cooling Solutions,
                      boasts a remarkable career spanning 45 years, marked by dynamic leadership
                      and entrepreneurial prowess.
                    </p>

                    <p className="founder-text">
                      Throughout his illustrious journey, he has demonstrated an exceptional
                      ability to establish and lead successful ventures across industries such as
                      manufacturing, automobiles, and air conditioning.
                    </p>

                    <p className="founder-text">
                      A trailblazer in every sense, Mr. Bedi has consistently set new benchmarks
                      for excellence, embodying innovation, resilience, and a relentless commitment
                      to success. Under his guidance, Supreet Cooling Solutions has flourished into 
                      a beacon of excellence in the cooling industry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Founder 2 */}
              <div
                ref={(el) => (cardRefs.current[1] = el)}
                data-dir="right"
                className="founder-card"
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                  background: "#fafafa",
                  padding: "20px",
                  borderRadius: "12px",
                  flexWrap: "wrap",
                  flexDirection: "row-reverse",
                }}
              >
                <div
                  className="card-inner"
                  style={{ display: "flex", gap: "20px", width: "100%", alignItems: "flex-start", flexDirection: "row-reverse" }}
                >
                  <img src={coFounderImg} alt="Co-Founder Photo" className="founder-image" />

                  <div style={{ maxWidth: "800px", flex: "1 1 300px" }}>
                    <h2 className="founder-name">Mr. Mankaran Bedi</h2>
                    <h4 className="founder-role">CEO</h4>

                    <p className="founder-text">
                      Mankaran Bedi, the Co-Founder of Supreet Cooling Solutions, brings to the 
                      forefront two decades of deep market understanding and operational leadership.
                    </p>

                    <p className="founder-text">
                      With a Masters in Marketing Management, he blends strategic insight with 
                      strong relationship-building abilities.
                    </p>

                    <p className="founder-text">
                      His journey has been defined by the management of diverse clients across 
                      industries and consistently delivering excellence.
                    </p>

                    <p className="founder-text">
                      A dynamic force in the organization, Mankaran leads with innovation, vision, 
                      and an unwavering commitment to delivering superior cooling solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------- VISION -------- */}
        {/* <div className="py-20 bg-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our <span style={{ color: "rgb(255, 107, 53)" }}>Vision</span>
            </h2>

            <div className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 p-[1px] rounded-2xl shadow-xl">
              <div className="bg-white p-10 rounded-2xl">
                <p className="text-lg text-gray-700 leading-relaxed">
                  A Comprehensive Cooling Solution-ist, our vision is to deliver exemplary services across the retail and corporate segments to become the foremost choice for state-of-the-art HVAC services, setting new standards in the industry.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        {/* -------- VISION -------- */}
<section id="our-vision" className="py-20 bg-gray-100">  {/* Added id="our-vision" and changed to <section> */}
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-8">
      Our <span style={{ color: "rgb(255, 107, 53)" }}>Vision</span>
    </h2>

    <div className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 p-[1px] rounded-2xl shadow-xl">
      <div className="bg-white p-10 rounded-2xl">
        <p className="text-lg text-gray-700 leading-relaxed">
          A Comprehensive Cooling Solution-ist, our vision is to deliver exemplary services across the retail and corporate segments to become the foremost choice for state-of-the-art HVAC services, setting new standards in the industry.
        </p>
      </div>
    </div>
  </div>
</section>

        {/* -------- REVIEWS -------- */}
        <ReviewsSlider />

        {/* -------- BRANDS -------- */}
        <section id="brands-we-deal" className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Brands We <span style={{ color: "rgb(255, 107, 53)" }}>Deal In</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              We partner with leading air conditioning brands to bring you the best in cooling technology.
            </p>
            <div className="max-w-5xl mx-auto">
              <BrandCarousel />
            </div>
          </div>
        </section>

        {/* -------- CORE VALUES -------- */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { icon: <Zap className="w-10 h-10 text-accent group-hover:text-white transition-colors duration-300" />, title: "Excellence", desc: "Committed to the highest standards in every project" },
                { icon: <Heart className="w-10 h-10 text-accent group-hover:text-white transition-colors duration-300" />, title: "Integrity", desc: "Honest and transparent in all our dealings" },
                { icon: <TrendingUp className="w-10 h-10 text-accent group-hover:text-white transition-colors duration-300" />, title: "Innovation", desc: "Embracing new technologies and methods" },
                { icon: <UsersIcon className="w-10 h-10 text-accent group-hover:text-white transition-colors duration-300" />, title: "Customer Focus", desc: "Your satisfaction is our top priority" },
              ].map((value, index) => (
                <Card key={index} className="group text-center hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-orange-500">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground group-hover:text-white transition-colors duration-300">
                      {value.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
