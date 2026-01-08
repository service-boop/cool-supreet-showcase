import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

import { Briefcase, Users, TrendingUp, Wrench, ClipboardList } from "lucide-react";

import { useState } from "react";
import careerHero from "@/assets/career-hero.jpg";
import emailjs from "@emailjs/browser";

const Career = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const jobs = [
    {
      title: "Mechanical Engineers",
      icon: Wrench,
      location: "Pune • Mumbai • Bangalore • Indore",
      type: "Full-time | 1-3 yrs",
      description:
        "Design, select and supervise installation of mechanical HVAC equipment. Ensure systems meet performance, efficiency and safety standards across projects.",
      requirements: [
        "B.E. / B.Tech in Mechanical Engineering",
        "1-3 years experience in HVAC / MEP projects",
        "Knowledge of VRV/VRF, chillers, AHUs and ducting",
        "Ability to read GA drawings and perform equipment selection",
        "Good communication and site coordination skills",
      ],
    },
    {
      title: "Technicians",
      icon: Wrench,
      location: "Pune • Mumbai • Bangalore • Indore",
      type: "Full-time | 0-2 yrs",
      description:
        "Execute installations, commissioning and routine maintenance of HVAC systems. Troubleshoot onsite issues and maintain equipment per manufacturer standards.",
      requirements: [
        "ITI / Diploma or equivalent technical certification",
        "0-2 years hands-on experience with HVAC equipment",
        "Skilled in piping, electrical hookups, testing and commissioning",
        "Ability to work on-site and follow safety protocols",
        "Good problem-solving attitude and teamwork skills",
      ],
    },
    {
      title: "HVAC Design Engineers",
      icon: Briefcase,
      location: "Pune • Mumbai • Bangalore",
      type: "Full-time | 0-2 yrs",
      description:
        "Perform HVAC load calculations, create system layouts, and prepare equipment schedules & duct drawings. Coordinate designs with architects and MEP teams.",
      requirements: [
        "B.E. / B.Tech in Mechanical or HVAC specialization",
        "0-2 years experience in HVAC design (AutoCAD / Revit preferred)",
        "Proficient in load calculations, duct/fluid sizing and equipment selection",
        "Attention to detail for shop drawings and coordination",
        "Strong communication and client coordination skills",
      ],
    },
    {
      title: "Back Office",
      icon: ClipboardList,
      location: "Pune",
      type: "Full-time | 0-2 yrs",
      description:
        "Provide administrative and operational support — documentation, purchase order follow-ups, invoice coordination, and internal communication to enable smooth project delivery.",
      requirements: [
        "Graduate in any discipline; office/administration diploma is a plus",
        "0-2 years experience in office administration / back-office support",
        "Proficient in MS Excel, Word and email communication",
        "Organized with strong attention to detail",
        "Able to coordinate with vendors, field teams and clients",
      ],
    },
  ];



// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   setIsSubmitting(true);

//   const formData = new FormData(e.currentTarget);
//   const name = (formData.get("name") as string) || "";
//   const email = (formData.get("email") as string) || "";
//   const phone = (formData.get("phone") as string) || "";
//   const position = (formData.get("position") as string) || "";
//   const experience = (formData.get("experience") as string) || "";
//   const message = (formData.get("message") as string) || "";
//   const resumeFile = formData.get("resume") as any;

//   // Combine Career info into a single message
//   const emailMessage = `
// Position Applied: ${position}
// Experience: ${experience} years
// Phone: ${phone}
// Resume: ${resumeFile?.name || "Not provided"}
// Cover Letter / Message:
// ${message || "Not provided"}
// `;

//   try {
//     await emailjs.send(
//       "service_kulkuc4",       // Service ID
//       "template_giapj9l",      // Template ID
//       {
//         name,
//         email,
//         message: emailMessage,
//       },
//       "4p8rm7z2qfH0t5Z8-"        // Replace with your EmailJS public key
//     );

//     toast({
//       title: "Application Submitted",
//       description: "Your application has been sent successfully.",
//     });

//     (e.target as HTMLFormElement).reset();
//     setSelectedJob("");
//   } catch (error) {
//     toast({
//       title: "Submission Failed",
//       description: "Something went wrong. Please try again.",
//       variant: "destructive",
//     });
//     console.error(error);
//   } finally {
//     setIsSubmitting(false);
//   }
// };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formData = new FormData(e.currentTarget);
  const name = (formData.get("name") as string) || "";
  const email = (formData.get("email") as string) || "";
  const phone = (formData.get("phone") as string) || "";
  const position = (formData.get("position") as string) || "";
  const experience = (formData.get("experience") as string) || "";
  const message = (formData.get("message") as string) || "";
  const resumeFile = formData.get("resume") as File;

  // Convert resume to Base64 for attachment
  const fileBase64 = resumeFile ? await fileToBase64(resumeFile) : "";

  const emailMessage = `
Position Applied: ${position}
Experience: ${experience} years
Phone: ${phone}
Cover Letter / Message:
${message || "Not provided"}
`;

  try {
    await emailjs.send(
      "service_kulkuc4",       // Your Service ID
      "template_giapj9l",      // Your Template ID
      {
        name,
        email,
        message: emailMessage,
        attachments: fileBase64 ? [{ content: fileBase64, filename: resumeFile.name, type: resumeFile.type }] : [],
      },
      "4p8rm7z2qfH0t5Z8-"        // Your EmailJS Public Key
    );

    toast({
      title: "Application Submitted",
      description: "Your application has been sent successfully.",
    });

    (e.target as HTMLFormElement).reset();
    setSelectedJob("");
  } catch (error) {
    toast({
      title: "Submission Failed",
      description: "Something went wrong. Please try again.",
      variant: "destructive",
    });
    console.error(error);
  } finally {
    setIsSubmitting(false);
  }
};

// Helper function to convert file to Base64
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve((reader.result as string).split(",")[1]); // Remove prefix
    reader.onerror = (error) => reject(error);
  });
};

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HeroSection
          title="Join Our Team"
          subtitle="Build Your Career with Supreet Cooling Solutions"
          backgroundImage={careerHero}
        />

        {/* Why Join Us */}
        <section className="py-16 bg-gradient-to-br from-background via-accent/5 to-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-4xl font-bold text-center mb-4">
              Why <span style={{ color: "rgb(255, 107, 53)" }}>Join Us?</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Be part of a team that values innovation, growth, and excellence
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: TrendingUp,
                  title: "Career Growth",
                  description: "Continuous learning opportunities and clear career progression paths",
                },
                {
                  icon: Users,
                  title: "Great Team",
                  description: "Work with experienced professionals in a collaborative environment",
                },
                {
                  icon: Briefcase,
                  title: "Exciting Projects",
                  description: "Work on diverse and challenging HVAC projects across multiple sectors",
                },
              ].map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-none animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="pt-8 pb-8 text-center">
                      <div className="relative inline-block mb-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <IconComponent className="w-8 h-8 text-background" />
                        </div>
                        <div className="absolute inset-0 rounded-xl bg-accent/30 blur-xl group-hover:blur-2xl transition-all duration-300" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        
        <section className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl md:text-4xl font-bold text-center mb-4">
      Open <span style={{ color: "rgb(255, 107, 53)" }}>Positions</span>
    </h2>
    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
      Find your perfect role and grow with us
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {jobs.map((job, index) => {
        const IconComponent = job.icon;
        return (
          <Card
            key={index}
            className="group h-full flex flex-col hover:shadow-2xl transition-all duration-500 hover:scale-105 border-none animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="pt-6 pb-6 flex flex-col h-full">
              
              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-6 h-6 text-background" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">📍 {job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
              </div>

              {/* Make description & requirements fill available space */}
              <div className="flex-1">
                <p className="text-muted-foreground mb-4 text-sm">{job.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">Requirements:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Button stays at bottom now */}
              <Button
                onClick={() => {
                  setSelectedJob(job.title);
                  document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full mt-auto"
              >
                Apply Now
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  </div>
</section>


        {/* Application Form */}
        <section id="application-form" className="py-16 bg-gradient-to-br from-background via-accent/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-4xl font-bold text-center mb-4">
                Apply <span style={{ color: "rgb(255, 107, 53)" }}>Now</span>
              </h2>
              <p className="text-center text-muted-foreground mb-12">
                Fill out the form below and we'll get back to you soon
              </p>
              <Card className="border-none shadow-2xl">
                <CardContent className="pt-8 pb-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" placeholder="Enter your full name" required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="position">Position Applied For *</Label>
                      <Input
                        id="position"
                        name="position"
                        placeholder="Select or enter position"
                        value={selectedJob}
                        onChange={(e) => setSelectedJob(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience *</Label>
                      <Input id="experience" name="experience" type="number" min="0" placeholder="Years of relevant experience" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Cover Letter / Additional Information</Label>
                      <Textarea id="message" name="message" placeholder="Tell us why you're a great fit for this position..." rows={5} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="resume">Resume (PDF) *</Label>
                      <Input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" required />
                      <p className="text-xs text-muted-foreground">Please upload your resume in PDF or DOC format</p>
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Career;
