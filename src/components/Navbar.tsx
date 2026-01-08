
// import React, { useEffect, useRef, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
// import logo from "@/assets/logo.png";

// const NAV_HEIGHT = 80; // adjust to your navbar height (px)

// const aboutLinks = [
//   { label: "Our Story", hash: "our-story" },
//   { label: "Our Vision", hash: "our-vision" },
//   { label: "Our Team", hash: "our-team" },
//   { label: "Brands We Deal", hash: "brands-we-deal" },
//   { label: "Testimonials", hash: "testimonials" },
// ];

// const navLinks = [
//   { name: "Home", path: "/" },
//   // About will be handled separately (dropdown)
//   { name: "Projects", path: "/projects" },
//   { name: "Services", path: "/services" },
//   { name: "Career", path: "/career" },
//   { name: "Contact", path: "/contact" },
// ];

// export default function Navbar(): JSX.Element {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [aboutOpen, setAboutOpen] = useState(false); // desktop dropdown
//   const [mobileAboutOpen, setMobileAboutOpen] = useState(false); // mobile nested
//   const aboutRef = useRef<HTMLDivElement | null>(null);
//   const navRef = useRef<HTMLDivElement | null>(null);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Close dropdown on outside click
//   useEffect(() => {
//     function onDoc(e: MouseEvent) {
//       if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
//         setAboutOpen(false);
//       }
//       if (navRef.current && !navRef.current.contains(e.target as Node)) {
//         // don't auto-close mobile menu here - mobile toggles via button
//       }
//     }
//     document.addEventListener("mousedown", onDoc);
//     return () => document.removeEventListener("mousedown", onDoc);
//   }, []);

//   // Close dropdowns on route change
//   useEffect(() => {
//     setAboutOpen(false);
//     setIsMenuOpen(false);
//     setMobileAboutOpen(false);
//   }, [location]);

//   // ESC to close
//   useEffect(() => {
//     function onKey(e: KeyboardEvent) {
//       if (e.key === "Escape") {
//         setAboutOpen(false);
//         setIsMenuOpen(false);
//         setMobileAboutOpen(false);
//       }
//     }
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   // Smooth scroll helper with offset for fixed navbar
//   function scrollToHash(hash: string) {
//     if (!hash) return;
//     // remove leading '#' if present
//     const id = hash.replace("#", "");
//     const el = document.getElementById(id);
//     if (!el) return;
//     const top = el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT - 12;
//     window.scrollTo({ top, behavior: "smooth" });
//   }

//   // Unified handler for about link click
//   function handleAboutNavigation(hash: string) {
//     const path = "/about";
//     // if already on /about page -> just scroll
//     if (location.pathname === path) {
//       // close menus then scroll a little after closing for smoothness
//       setAboutOpen(false);
//       setMobileAboutOpen(false);
//       setIsMenuOpen(false);
//       // small timeout to allow UI closing transitions
//       setTimeout(() => scrollToHash(hash), 80);
//     } else {
//       // navigate to /about#hash - About page should also read location.hash and scroll on mount
//       navigate(`${path}#${hash}`);
//     }
//   }

//   return (
//     <nav
//       ref={navRef}
//       className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border"
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3">
//             <img src={logo} alt="Supreet Cooling Solution" className="h-24 md:h-28 w-auto" />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             <Link
//               to="/"
//               className="text-foreground hover:text-primary transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
//             >
//               Home
//             </Link>

//             {/* About with dropdown */}
//             <div className="relative" ref={aboutRef}>
//               <button
//                 onClick={() => setAboutOpen((s) => !s)}
//                 aria-expanded={aboutOpen}
//                 aria-haspopup="menu"
//                 className="flex items-center gap-2 text-foreground hover:text-primary transition font-medium px-2 py-1"
//               >
//                 About
//                 <ChevronDown size={16} />
//               </button>

//               <div
//                 className={`absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 transform transition-all ${
//                   aboutOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
//                 }`}
//               >
//                 <ul className="py-2" role="menu" aria-label="About sections">
//                   {aboutLinks.map((l) => (
//                     <li key={l.hash}>
//                       <button
//                         onClick={() => handleAboutNavigation(l.hash)}
//                         className="w-full text-left px-4 py-3 text-sm text-gray-800 hover:bg-gray-50"
//                         role="menuitem"
//                       >
//                         {l.label}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className="text-foreground hover:text-primary transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
//               >
//                 {link.name}
//               </Link>
//             ))}

//             <Button asChild>
//               <Link to="/contact">Get Quote</Link>
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-foreground"
//             onClick={() => setIsMenuOpen((s) => !s)}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden py-4 border-t border-border">
//             <div className="flex flex-col gap-3">
//               <Link
//                 to="/"
//                 className="text-foreground hover:text-primary transition-colors font-medium py-2"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Home
//               </Link>

//               {/* Mobile About expandable */}
//               <div className="border-t border-border pt-3">
//                 <button
//                   onClick={() => setMobileAboutOpen((s) => !s)}
//                   className="w-full flex items-center justify-between text-foreground px-2 py-2 font-medium"
//                   aria-expanded={mobileAboutOpen}
//                 >
//                   <span>About</span>
//                   <ChevronRight
//                     size={16}
//                     className={`transform transition-transform ${mobileAboutOpen ? "rotate-90" : "rotate-0"}`}
//                   />
//                 </button>

//                 {mobileAboutOpen && (
//                   <div className="mt-2 space-y-1 pl-4">
//                     {aboutLinks.map((l) => (
//                       <button
//                         key={l.hash}
//                         onClick={() => handleAboutNavigation(l.hash)}
//                         className="block w-full text-left text-sm text-gray-700 px-2 py-2 rounded hover:bg-gray-50"
//                       >
//                         {l.label}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className="text-foreground hover:text-primary transition-colors font-medium py-2"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               ))}

//               <div className="pt-3">
//                 <Button asChild>
//                   <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
//                     Get Quote
//                   </Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import logo from "@/assets/logo.png";

const NAV_HEIGHT = 80;

const aboutLinks = [
  { label: "Our Story", hash: "our-story" },
  { label: "Our Vision", hash: "our-vision" },
  { label: "Founders & CEO", hash: "our-team" },
  { label: "Brands We Deal", hash: "brands-we-deal" },
  { label: "Testimonials", hash: "testimonials" },
];

// 👇 Removed HOME from here to prevent duplication
const navLinks = [
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Career", path: "/career" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => {
    setAboutOpen(false);
    setIsMenuOpen(false);
    setMobileAboutOpen(false);
  }, [location]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setAboutOpen(false);
        setIsMenuOpen(false);
        setMobileAboutOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function scrollToHash(hash: string) {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT - 12;
    window.scrollTo({ top, behavior: "smooth" });
  }

  function handleAboutNavigation(hash: string) {
    const path = "/about";
    if (location.pathname === path) {
      setAboutOpen(false);
      setMobileAboutOpen(false);
      setIsMenuOpen(false);
      setTimeout(() => scrollToHash(hash), 80);
    } else {
      navigate(`${path}#${hash}`);
    }
  }

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Supreet Cooling Solution" className="h-14 md:h-16 w-auto" />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {/* Home kept manually */}
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Home
            </Link>

            {/* About */}
            <div className="relative" ref={aboutRef}>
              <button
                onClick={() => setAboutOpen((s) => !s)}
                className="flex items-center gap-2 text-foreground hover:text-primary transition font-medium px-2 py-1"
              >
                About
                <ChevronDown size={16} />
              </button>

              <div
                className={`absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 transform transition-all ${
                  aboutOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <ul className="py-2">
                  {aboutLinks.map((l) => (
                    <li key={l.hash}>
                      <button
                        onClick={() => handleAboutNavigation(l.hash)}
                        className="w-full text-left px-4 py-3 text-sm text-gray-800 hover:bg-gray-50"
                      >
                        {l.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Other Links */}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.name}
              </Link>
            ))}

            <Button asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-3">
              <Link to="/" className="py-2" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>

              <div className="border-t pt-3">
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="flex justify-between w-full py-2"
                >
                  <span>About</span>
                  <ChevronRight size={16} className={`${mobileAboutOpen ? "rotate-90" : "rotate-0"} transition`} />
                </button>

                {mobileAboutOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    {aboutLinks.map((l) => (
                      <button
                        key={l.hash}
                        onClick={() => handleAboutNavigation(l.hash)}
                        className="block w-full text-left py-2 text-sm"
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <Button asChild>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
