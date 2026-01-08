// import { Link } from "react-router-dom";
// import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
// import logo from "@/assets/logo.png";
// import footerBg from "@/assets/footer-bg.jpg";

// const Footer = () => {
//   return (
//     <footer 
//       className="relative bg-foreground text-background overflow-hidden"
//       style={{
//         backgroundImage: `url(${footerBg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="absolute inset-0 bg-foreground/90" />
      
//       <div className="relative container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
//           {/* Company Info */}
//           <div>
//             {/* <img src={logo} alt="Supreet Cooling Solution" className="h-16 mb-4 brightness-0 invert" /> */}
//             <img 
//   src={logo} 
//   alt="Supreet Cooling Solution" 
//   className="h-32 md:h-36 mb-4" 
// />

//             <p className="text-background/80 mb-4">
//               Leading air conditioning experts delivering excellence across India.
//             </p>
//             <div className="flex gap-4">
//               <a 
//                 href="https://facebook.com" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-[#1877F2] hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-background/20"
//                 aria-label="Facebook"
//               >
//                 <Facebook size={20} />
//               </a>
              
//               <a 
//   href="https://www.instagram.com/supreetcoolingsolutions/?igsh=dzlxNTBycmg4MGs4" 
//   target="_blank" 
//   rel="noopener noreferrer"
//   className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-background/20"
//   aria-label="Instagram"
// >
//   <Instagram size={20} />
// </a>

//               <a 
//                 href="https://www.linkedin.com/company/supreet-cooling-solutions/" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-[#0A66C2] hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-background/20"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin size={20} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-bold mb-4 ">Quick Links</h3>
            
//             <ul className="space-y-2">
//               {/* <li>
//                 <Link to="/" className="text-background/80 hover:text-background transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about" className="text-background/80 hover:text-background transition-colors">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services" className="text-background/80 hover:text-background transition-colors">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/projects" className="text-background/80 hover:text-background transition-colors">
//                   Projects
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="text-background/80 hover:text-background transition-colors">
//                   Contact
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/career" className="text-background/80 hover:text-background transition-colors">
//                   Career
//                 </Link>
//               </li> */}
//               <li>
//   <Link to="/" className="text-background/80 hover:text-orange-400 transition-colors">
//     Home
//   </Link>
// </li>
// <li>
//   <Link to="/about" className="text-background/80 hover:text-orange-400 transition-colors">
//     About Us
//   </Link>
// </li>
// <li>
//   <Link to="/services" className="text-background/80 hover:text-orange-400 transition-colors">
//     Services
//   </Link>
// </li>
// <li>
//   <Link to="/projects" className="text-background/80 hover:text-orange-400 transition-colors">
//     Projects
//   </Link>
// </li>
// <li>
//   <Link to="/contact" className="text-background/80 hover:text-orange-400 transition-colors">
//     Contact
//   </Link>
// </li>
// <li>
//   <Link to="/career" className="text-background/80 hover:text-orange-400 transition-colors">
//     Career
//   </Link>
// </li>

//             </ul>
//           </div>

         

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-xl font-bold mb-4">Contact Us</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start gap-2">
//                 <Phone size={20} className="mt-1 flex-shrink-0" />
//                 <span className="text-background/80">+91 98765 43210</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <Mail size={20} className="mt-1 flex-shrink-0" />
//                 <span className="text-background/80">info@supreet.org</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <MapPin size={20} className="mt-1 flex-shrink-0" />
//                 <span className="text-background/80">OFFICE NO 501, opposite GERA TRINITY TOWER, <br>
//                 </br>Rajaram Patil Nagar, Vitthal Nagar,<br>
//                 </br> Kharadi, Pune, Maharashtra 411014</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-background/20 pt-8 text-center">
//           <p className="text-background/80">
//             &copy; {new Date().getFullYear()} Supreet Cooling Solution. All rights reserved.
//           </p>
//         </div>
//         {/* <div className="border-t border-background/20 pt-8 text-center">
//   <p className="text-background/80">
//     &copy; {new Date().getFullYear()} Supreet Cooling Solution. All rights reserved. <br />
//     Developed by{" "}
//     <a
//       href="https://isha-khonde.vercel.app/"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="text-orange-500 hover:underline"
//     >
//       Isha Khonde
//     </a>
//   </p>
// </div> */}
   
//    {/* <a
//   href="https://wa.me/918010999130"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="flex items-center gap-2 text-green-400 hover:text-green-500 font-medium"
// >
 
// </a> */}

//       </div>
//     </footer>
//   );
// };

// export default Footer; 
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import footerBg from "@/assets/footer-bg.jpg";

const Footer = () => {
  return (
    <footer
      className="relative bg-foreground text-background overflow-hidden"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-foreground/90" />

      <div className="relative container mx-auto px-4 py-12">
        
        {/* Center the whole grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 text-center place-items-center">

          {/* Company Info */}
          <div className="flex flex-col items-center">
            <img
              src={logo}
              alt="Supreet Cooling Solution"
              className="h-16 md:h-18 mb-4"
            />

            <p className="text-background/80 mb-4 max-w-xs">
              Leading air conditioning experts delivering excellence across India.
            </p>

            <div className="flex gap-4 justify-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-[#1877F2] hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-background/20"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.instagram.com/supreetcoolingsolutions/?igsh=dzlxNTBycmg4MGs4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-background/20"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://www.linkedin.com/company/supreet-cooling-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-[#0A66C2] hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-background/20"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-center">
              <li><Link to="/" className="text-background/80 hover:text-orange-400">Home</Link></li>
              <li><Link to="/about" className="text-background/80 hover:text-orange-400">About Us</Link></li>
              <li><Link to="/services" className="text-background/80 hover:text-orange-400">Services</Link></li>
              <li><Link to="/projects" className="text-background/80 hover:text-orange-400">Projects</Link></li>
              <li><Link to="/contact" className="text-background/80 hover:text-orange-400">Contact</Link></li>
              <li><Link to="/career" className="text-background/80 hover:text-orange-400">Career</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-left">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>

            <ul className="space-y-3 text-center">
              <li className="flex items-center gap-2 justify-center">
                <Phone size={20} />
                <span className="text-background/80">+91 98765 43210</span>
              </li>

              <li className="flex items-center gap-2 justify-center">
                <Mail size={20} />
                <span className="text-background/80">info@supreet.org</span>
              </li>

              <li className="flex gap-2 justify-center">
                <MapPin size={20} />
                <span className="text-background/80 max-w-xs">
                  OFFICE NO 501, Opposite GERA TRINITY TOWER,
                  <br /> Rajaram Patil Nagar, Vitthal Nagar,
                  <br /> Kharadi, Pune, Maharashtra 411014
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copy Section */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80">
            &copy; {new Date().getFullYear()} Supreet Cooling Solution. All rights reserved.
          </p>
           
         {/* <p>
          Designed & Developed by 
    <a 
        href="https://isha-khonde.vercel.app/" 
       target="_blank" 
       rel="noopener noreferrer"
    >
        Isha Khonde
    </a>
  </p> */}
        </div>
       
       
      </div>
    </footer>
  );
};

export default Footer;

