
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import HeroSection from "@/components/HeroSection";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent } from "@/components/ui/card";
// import { Mail, Phone, MapPin, Clock } from "lucide-react";
// import { useState } from "react";
// import { useToast } from "@/hooks/use-toast";
// import heroSlide1 from "@/assets/contact-bg.jpg";
// import emailjs from "@emailjs/browser";
// // Uncomment for SendGrid: import sgMail from '@sendgrid/mail';

// const Contact = () => {
//   const { toast } = useToast();

//   // const [formData, setFormData] = useState({
//   //   name: "",
//   //   email: "",
//   //   phone: "",
//   //   message: "",
//   // });
//   const [formData, setFormData] = useState({
//   name: "",
//   email: "",
//   phone: "",
//   message: "",
//   subject: "",      // ⭐ ADD THIS
// });


//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = (e: React.FormEvent) => {
//   //   e.preventDefault();

//   //   // Option 1: EmailJS (your current setup with added logging)
//   //   emailjs
//   //     .send(
//   //       "service_outlook",  // Confirm this is correct in EmailJS dashboard
//   //       "template_giapj9l",  // Confirm template exists and matches params
//   //       {
//   //         name: formData.name,
//   //         email: formData.email,
//   //         phone: formData.phone,
//   //         message: formData.message,
//   //       },
//   //       "4p8rm7z2qfH0t5Z8-"  // Confirm public key
//   //     )
//   //     .then(
//   //       (response) => {
//   //         // Added logging for debugging
//   //         console.log('EmailJS Success Response:', response);
//   //         console.log('Status Code:', response.status);
//   //         console.log('Response Text:', response.text);
//   //         toast({
//   //           title: "Message Sent ✅",
//   //           description: "Your message has been sent successfully. ",
//   //         });
//   //         setFormData({
//   //           name: "",
//   //           email: "",
//   //           phone: "",
//   //           message: "",
//   //         });
//   //       },
//   //       (error) => {
//   //         // Added detailed error logging
//   //         console.error("EmailJS Error:", error);
//   //         toast({
//   //           title: "Error ❌",
//   //           description: `Failed to send message: ${error.text || error.message || "Unknown error"}. Check console for details.`,
//   //           variant: "destructive",
//   //         });
//   //       }
//   //     );

    
//   // };

// //   const handleSubmit = (e: React.FormEvent) => {
// //   e.preventDefault();

// //   // 1️⃣ send message to YOUR company inbox (already working)
// //   emailjs
// //     .send(
// //       "service_outlook",
// //       "template_giapj9l", // contact-us template ID
// //       {
// //         name: formData.name,
// //         email: formData.email,
// //         phone: formData.phone,
// //         message: formData.message,
// //          title: formData.subject,

// //       },
// //       "4p8rm7z2qfH0t5Z8-"
// //     )
// //     .then(
// //       (response) => {
// //         console.log("EmailJS Success Response:", response);

// //         // 2️⃣ AUTO-REPLY email to user
// //         emailjs.send(
// //           "service_outlook",
// //           "template_t7mhxyf",   // ⭐ your Auto-Reply template ID
// //           {
// //             name: formData.name,
// //             email: formData.email,
// //           },
// //           "4p8rm7z2qfH0t5Z8-"
// //         );

// //         toast({
// //           title: "Message Sent ✅",
// //           description: "Your message has been sent successfully.",
// //         });

// //         setFormData({
// //           name: "",
// //           email: "",
// //           phone: "",
// //           message: "",
// //         });
// //       },
// //       (error) => {
// //         console.error("EmailJS Error:", error);
// //         toast({
// //           title: "Error ❌",
// //           description: `Failed to send message: ${
// //             error.text || error.message || "Unknown error"
// //           }.`,
// //           variant: "destructive",
// //         });
// //       }
// //     );
// // };

//   return (
//     <>
//       <Navbar />
//       <main className="pt-20">
//         <HeroSection
//           title="Contact Us"
//           subtitle="Get in Touch with Our Expert Team"
//           backgroundImage={heroSlide1}
//         />

//         <section className="py-16">
//           <div className="container mx-auto px-4">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//               {/* Contact Form */}
//               <div>
//                 <h2 className="text-4xl font-bold mb-6">
//                   Send Us a{" "}
//                   <span style={{ color: "rgb(255, 107, 53)" }}>Message</span>
//                 </h2>

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Full Name *
//                     </label>
//                     <Input
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       placeholder="John Doe"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Email *
//                     </label>
//                     <Input
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       placeholder="john@example.com"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Phone *
//                     </label>
//                     <Input
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       required
//                       placeholder="+91 0000000000"
//                     />
//                   </div>

                  

//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Message *
//                     </label>
//                     <Textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       placeholder="Tell us about your project..."
//                       className="min-h-[120px]"
//                     />
//                   </div>

//                   <Button type="submit" size="lg" className="w-full">
//                     Send Message
//                   </Button>
//                 </form>
//               </div>

//               {/* Contact Info */}
//               <div className="space-y-6">
//                 <h2 className="text-4xl font-bold">
//                   Contact <span style={{ color: "rgb(255, 107, 53)" }}>Information</span>
//                 </h2>

//                 <Card>
//                   <CardContent className="pt-6 flex gap-4">
//                     <Phone className="w-6 h-6 text-accent" />
//                     <div>
//                       <h3 className="font-semibold">Phone</h3>
//                       <p>+91 98765 43210</p>
//                       <p>+91 98765 43211</p>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card>
//                   <CardContent className="pt-6 flex gap-4">
//                     <Mail className="w-6 h-6 text-accent" />
//                     <div>
//                       <h3 className="font-semibold">Email</h3>
//                       <p>info@supreet.org</p>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card>
//                   <CardContent className="pt-6 flex gap-4">
//                     <MapPin className="w-6 h-6 text-accent" />
//                     <div>
//                       <h3 className="font-semibold">Address</h3>
//                       <p>
//                         OFFICE NO 501, Opposite GERA TRINITY TOWER,<br />
//                         Kharadi, Pune, Maharashtra 411014
//                       </p>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card>
//                   <CardContent className="pt-6 flex gap-4">
//                     <Clock className="w-6 h-6 text-accent" />
//                     <div>
//                       <h3 className="font-semibold">Business Hours</h3>
//                       <p>Mon - Sat: 10:30 AM - 7:30 PM</p>
//                       <p>Sunday - Closed</p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* New Map Section */}
//         <section className="py-16 bg-gray-50">
//           <div className="container mx-auto px-4">
//             <h2 className="text-4xl font-bold text-center mb-8">
//               Our <span style={{ color: "rgb(255, 107, 53)" }}>Location</span>
//             </h2>
//             <div className="max-w-4xl mx-auto">
             

// <iframe
//   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4497.999740052906!2d73.95481566650902!3d18.558169176819085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c369f5dc47df%3A0xf6f93c8cb9cb320!2sSupreet%20Cooling%20Solutions!5e0!3m2!1sen!2sin!4v1767902013108!5m2!1sen!2sin"
//   width="100%"
//   height="450"
//   style={{ border: 0 }}
//   allowFullScreen
//   loading="lazy"
//   referrerPolicy="no-referrer-when-downgrade"
//   title="Supreet Cooling Solutions Location"
// />

//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Contact;

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import heroSlide1 from "@/assets/contact-bg.jpg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ⭐⭐ FINAL WORKING SUBMIT FUNCTION ⭐⭐
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1️⃣ Send message to your company inbox
    emailjs
      .send(
        "service_outlook",
        "template_giapj9l",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          title: formData.subject, // ⭐ must match emailjs variable
        },
        "4p8rm7z2qfH0t5Z8-"
      )
      .then(() => {
        // 2️⃣ Auto reply email to user
        emailjs.send(
          "service_outlook",
          "template_t7mhxyf", // ⭐ your auto reply template ID
          {
            name: formData.name,
            email: formData.email,
            title: formData.subject,
          },
          "4p8rm7z2qfH0t5Z8-"
        );

        toast({
          title: "Message Sent ✅",
          description: "We’ve received your message successfully.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          subject: "",
        });
      })
      .catch((error) => {
        console.error(error);
        toast({
          title: "Sending Failed ❌",
          description: "Please try again later.",
          variant: "destructive",
        });
      });
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HeroSection
          title="Contact Us"
          subtitle="Get in Touch with Our Expert Team"
          backgroundImage={heroSlide1}
        />

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Send Us a{" "}
                  <span style={{ color: "rgb(255, 107, 53)" }}>Message</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone *
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 0000000000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Service Enquiry / AC Installation / Repair"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">
                  Contact{" "}
                  <span style={{ color: "rgb(255, 107, 53)" }}>Information</span>
                </h2>

                <Card>
                  <CardContent className="pt-6 flex gap-4">
                    <Phone className="w-6 h-6 text-accent" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p>+91 98765 43210</p>
                      <p>+91 98765 43211</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 flex gap-4">
                    <Mail className="w-6 h-6 text-accent" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p>info@supreet.org</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 flex gap-4">
                    <MapPin className="w-6 h-6 text-accent" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p>
                        OFFICE NO 501, Opposite GERA TRINITY TOWER,
                        <br />
                        Kharadi, Pune, Maharashtra 411014
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 flex gap-4">
                    <Clock className="w-6 h-6 text-accent" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p>Mon - Sat: 10:30 AM - 7:30 PM</p>
                      <p>Sunday - Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section — NOT REMOVED */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">
              Our <span style={{ color: "rgb(255, 107, 53)" }}>Location</span>
            </h2>

            <div className="max-w-4xl mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4497.999740052906!2d73.95481566650902!3d18.558169176819085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c369f5dc47df%3A0xf6f93c8cb9cb320!2sSupreet%20Cooling%20Solutions!5e0!3m2!1sen!2sin!4v1767902013108!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Supreet Cooling Solutions Location"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
