// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Projects from "./pages/Projects";
// import ProjectCity from "./pages/ProjectCity";
// import Contact from "./pages/Contact";
// import Career from "./pages/Career";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/projects/:city" element={<ProjectCity />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/career" element={<Career />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Projects from "./pages/Projects";
// import ProjectCity from "./pages/ProjectCity";
// import Contact from "./pages/Contact";
// import Career from "./pages/Career";
// import NotFound from "./pages/NotFound";
// import ScrollToTop from "@/components/ScrollToTop";  // ✅ ADD THIS

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />

//       <BrowserRouter>
//         <ScrollToTop />   {/* ✅ ADD THIS LINE JUST AFTER BrowserRouter */}

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/projects/:city" element={<ProjectCity />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/career" element={<Career />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectCity from "./pages/ProjectCity";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop"; // ✓ already added

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <ScrollToTop /> {/* ✓ Keep this here */}

        {/* 🌟 Floating WhatsApp Button */}
        {/* <a
          href="https://wa.me/9890008513"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8.051.084a7.933 7.933 0 0 0-6.99 11.794L.06 15.896l4.284-1.113A7.933 7.933 0 1 0 8.05.084Zm3.941 11.47c-.17.47-.986.91-1.36.967-.347.05-.78.07-1.253-.08-.29-.094-.664-.215-1.14-.42-2.006-.87-3.31-2.9-3.41-3.04-.1-.14-.81-1.08-.81-2.06 0-.98.51-1.46.69-1.66.17-.2.37-.25.5-.25.13 0 .25.001.36.007.12.006.28-.046.44.34.17.41.58 1.42.63 1.52.05.1.08.22.01.35-.07.14-.11.22-.22.34-.11.12-.23.27-.33.36-.11.11-.23.22-.1.43.12.22.54.89 1.16 1.45.8.72 1.47.94 1.69 1.05.22.11.35.09.48-.05.13-.14.56-.65.71-.87.15-.22.3-.18.5-.11.2.07 1.28.6 1.5.71.22.11.37.16.42.25.06.09.06.51-.11.98Z" />
          </svg>
        </a> */}
        <a
  href="https://wa.me/9890008513?text=Hello%2C%20I%20visited%20your%20website%20and%20I%20would%20like%20to%20know%20more%20about%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all z-50"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M8.051.084a7.933 7.933 0 0 0-6.99 11.794L.06 15.896l4.284-1.113A7.933 7.933 0 1 0 8.05.084Zm3.941 11.47c-.17.47-.986.91-1.36.967-.347.05-.78.07-1.253-.08-.29-.094-.664-.215-1.14-.42-2.006-.87-3.31-2.9-3.41-3.04-.1-.14-.81-1.08-.81-2.06 0-.98.51-1.46.69-1.66.17-.2.37-.25.5-.25.13 0 .25.001.36.007.12.006.28-.046.44.34.17.41.58 1.42.63 1.52.05.1.08.22.01.35-.07.14-.11.22-.22.34-.11.12-.23.27-.33.36-.11.11-.23.22-.1.43.12.22.54.89 1.16 1.45.8.72 1.47.94 1.69 1.05.22.11.35.09.48-.05.13-.14.56-.65.71-.87.15-.22.3-.18.5-.11.2.07 1.28.6 1.5.71.22.11.37.16.42.25.06.09.06.51-.11.98Z" />
  </svg>
</a>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:city" element={<ProjectCity />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
