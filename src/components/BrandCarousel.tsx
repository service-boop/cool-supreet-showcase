
// // import React, { useMemo } from "react";

// // const BrandCarousel: React.FC = () => {
// //   const logos = useMemo(
// //     () => [
// //       "/brands/daikin.png",
// //       "/brands/voltas.png",
// //        "/brands/mitsubhisi.png",
// //        "/brands/carrier.png",
    
// //       "/brands/blue star.png",
// //       "/brands/LG.png",
// //       "/brands/midea.png",
// //       "/brands/hitachi.png",
// //       "/brands/edgetech.png",
// //       "/brands/zeco.png",
// //       "/brands/maico.png",
// //       "/brands/caryaire.png",
// //       "/brands/kruger.png",
// //       "/brands/14-whirlpool.png",
// //       "/brands/15-thermocool.png",
// //     ],
// //     []
// //   );

// //   const logosForScroll = [...logos, ...logos];

// //   const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
// //     e.currentTarget.style.display = "none";
// //   };

// //   return (
// //     <div className="py-8">
// //       <div className="container mx-auto px-4">
// //         <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6">
// //           {/* <span className="text-[#2C2726]">Brands</span>{" "}
// //           <span className="text-[#FF6B35]">We Deal In</span> */}
// //         </h2>

// //         <div className="brand-marquee" aria-label="Brand logos carousel" role="region">
// //           <div className="brand-marquee__track" style={{ animationDuration: "12s" }}>
// //             {logosForScroll.map((src, i) => (
// //               <div key={i} className="brand-marquee__item" aria-hidden={i >= logos.length ? "true" : "false"}>
// //                 <img
// //                   src={src}
// //                   alt={`Brand logo ${i % logos.length + 1}`}
// //                   onError={handleImgError}
// //                   draggable={false}
// //                 /> 
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BrandCarousel;

// import React, { useMemo } from "react";

// const BrandCarousel: React.FC = () => {
//   const logos = useMemo(
//     () => [
//       "/brands/daikin.png",
//       "/brands/voltas.png",
//       "/brands/mitsubhisi.png",
//       "/brands/carrier.png",
//       "/brands/blue star.png",    // <-- has a space
//       "/brands/LG.png",
//       "/brands/midea.png",
//       "/brands/hitachi.png",
//       "/brands/edgetech.png",
//       "/brands/zeco.png",
//       "/brands/maico.png",
//       "/brands/caryaire.png",
//       "/brands/kruger.png",
//       "/brands/14-whirlpool.png",
//       "/brands/15-thermocool.png",
//     ],
//     []
//   );

//   const logosForScroll = [...logos, ...logos];

//   const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
//     // hide broken images so they don't show as broken icons and don't affect layout
//     e.currentTarget.style.display = "none";
//   };

//   return (
//     <div className="py-8">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6">
//           {/* optional title */}
//         </h2>

//         {/* Simple CSS scoped to this component for consistent logo sizing */}
//         <style>
//           {`
//             /* adjust this value to make logos larger/smaller */
//             :root { --logo-height: 68px; }

//             .brand-marquee {
//               overflow: hidden;
//             }

//             .brand-marquee__track {
//               display: flex;
//               align-items: center;
//               gap: 28px;
//               /* marquee animation (kept as in your original) */
//               animation-name: marquee;
//               animation-timing-function: linear;
//               animation-iteration-count: infinite;
//             }

//             .brand-marquee__item {
//               display: flex;
//               align-items: center;
//               justify-content: center;
//               padding: 0 10px;
//               flex: 0 0 auto;
//               width: auto;
//             }

//             .brand-marquee__item img {
//               /* unify visual size while preserving aspect ratio */
//               height: var(--logo-height);
//               max-height: var(--logo-height);
//               width: auto;
//               display: block;
//               object-fit: contain;
//               filter: none; /* remove if you had filters */
//               -webkit-user-drag: none;
//               user-select: none;
//             }

//             /* optional: slightly reduce opacity for very large logos to balance visuals */
//             .brand-marquee__item img.large-logo {
//               opacity: 0.98;
//             }

//             /* marquee keyframes (you already set animationDuration inline; keep it) */
//             @keyframes marquee {
//               0% { transform: translateX(0); }
//               100% { transform: translateX(-50%); } /* because we doubled the logos array */
//             }

//             /* Responsive tweak: reduce logo size on small screens */
//             @media (max-width: 640px) {
//               :root { --logo-height: 52px; }
//             }
//           `}
//         </style>

//         <div className="brand-marquee" aria-label="Brand logos carousel" role="region">
//           <div className="brand-marquee__track" style={{ animationDuration: "12s" }}>
//             {logosForScroll.map((src, i) => {
//               const safeSrc = encodeURI(src); // handles spaces and special chars in filenames
//               return (
//                 <div
//                   key={i}
//                   className="brand-marquee__item"
//                   aria-hidden={i >= logos.length ? "true" : "false"}
//                 >
//                   <img
//                     src={safeSrc}
//                     alt={`Brand logo ${i % logos.length + 1}`}
//                     onError={handleImgError}
//                     draggable={false}
//                     loading="lazy"
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrandCarousel;


import React, { useMemo } from "react";

const BrandCarousel: React.FC = () => {
  const logos = useMemo(
    () => [
      "/brands/daikin.png",
      "/brands/voltas.png",
      "/brands/mitsubhisi.png",
      "/brands/carrier.png",
      "/brands/blue-star.png", // rename to remove spaces if possible
      "/brands/LG.png",
      "/brands/midea.png",
      "/brands/hitachi.png",
      "/brands/edgetech.png",
      "/brands/zeco.png",
      "/brands/maico.png",
      "/brands/caryaire.png",
      "/brands/kruger.png",
      "/brands/14-whirlpool.png",
      "/brands/15-thermocool.png",
    ],
    []
  );

  const logosForScroll = [...logos, ...logos];

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = "none";
  };

  const handleImgLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    const target = 68; // px visual height
    const naturalH = img.naturalHeight || img.height;
    if (!naturalH) return;
    const scale = target / naturalH;
    if (scale > 1.05) {
      const capped = Math.min(scale, 1.6);
      img.style.transform = `scale(${capped})`;
      img.style.transformOrigin = "center";
      img.style.transition = "transform 240ms ease";
      img.classList.add("scaled-up");
    } else {
      img.style.transform = "";
      img.classList.remove("scaled-up");
    }
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <style>{`
          /* Adjust these values to change visual size */
          :root { --logo-height: 68px; --logo-max-width: 180px; }

          .brand-marquee { overflow: hidden; }
          .brand-marquee__track {
            display: flex;
            align-items: center;
            gap: 28px;
            animation-name: marquee;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }

          /* fixed bounding box so scaling doesn't shift layout */
          .brand-marquee__item {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 12px;
            flex: 0 0 auto;
            height: calc(var(--logo-height) + 10px);
            width: auto;
            overflow: hidden;
          }

          .brand-marquee__item img {
            height: var(--logo-height);        /* unify height */
            max-height: var(--logo-height);
            max-width: var(--logo-max-width);  /* cap excessive widths (fixes wide banners) */
            width: auto;                       /* preserve aspect ratio */
            display: block;
            object-fit: contain;
            -webkit-user-drag: none;
            user-select: none;
            transition: transform 180ms ease;
          }

          /* responsive: smaller logos on small screens */
          @media (max-width: 1024px) {
            :root { --logo-height: 60px; --logo-max-width: 150px; }
          }
          @media (max-width: 640px) {
            :root { --logo-height: 48px; --logo-max-width: 110px; }
          }

          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        <div className="brand-marquee" aria-label="Brand logos carousel" role="region">
          <div className="brand-marquee__track" style={{ animationDuration: "12s" }}>
            {logosForScroll.map((src, i) => {
              const safeSrc = encodeURI(src);
              return (
                <div
                  key={i}
                  className="brand-marquee__item"
                  aria-hidden={i >= logos.length ? "true" : "false"}
                >
                  <img
                    src={safeSrc}
                    alt={`Brand logo ${i % logos.length + 1}`}
                    onError={handleImgError}
                    onLoad={handleImgLoad}
                    draggable={false}
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;
