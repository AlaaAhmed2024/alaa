
// import { Box, Typography, Card, CardContent } from "@mui/material";
// import { useContext } from "react";
// import { ColorModeContext } from "../context/ThemeContext";

// export default function Home() {
//   const { mode } = useContext(ColorModeContext);

//   // ألوان الخلفية والنصوص حسب الوضع
//   const bgColor = mode === "light" ? "#f4f6fa" : "#182237";
//   const cardBg = mode === "light" ? "#ffffff" : "#1f2a3b";
//   const textColor = mode === "light" ? "text.primary" : "#f4f6fa";

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         backgroundColor: bgColor,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         transition: "background-color 0.5s ease", // ✅ الانتقال السلس للخلفية
//         p: 4,
//       }}
//     >
//       <Card
//         sx={{
//           maxWidth: 700,
//           width: "100%",
//           p: 3,
//           backgroundColor: cardBg,
//           transition: "background-color 0.5s ease", // ✅ الانتقال السلس للكارد أيضًا
//         }}
//       >
//         <CardContent>
//           <Typography variant="h4" fontWeight="bold" mb={2} color={textColor}>
//             مرحبًا بك
//           </Typography>
//           <Typography color={textColor}>
//             هذه الصفحة الرئيسية. يمكنك الانتقال إلى صفحة حاسبة التمويل العقاري
//             لمعرفة قدرتك التمويلية بكل سهولة.
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }



// import { Box, Typography } from "@mui/material";
// import { useContext, useEffect, useState } from "react";
// import { ColorModeContext } from "../context/ThemeContext";
// import { motion, AnimatePresence } from "framer-motion";

// import financeImg from "../photo/home1.jpg";
// import realEstateImg from "../photo/home2.jpg";

// const slides = [
//   {
//     image: financeImg,
//     title: "حاسبة التمويل العقاري",
//     subtitle: "مستشارك المالي • أفضل تمويل • أفضل بنك",
//   },
//   {
//     image: realEstateImg,
//     title: "عقارات للبيع",
//     subtitle: "نقدر نحصلك طلبك بأفضل العروض",
//   },
// ];

// export default function Home() {
//   const { mode } = useContext(ColorModeContext);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 6000); // ⏱️ كل 6 ثواني
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         minHeight: "100vh",
//         overflow: "hidden",
//       }}
//     >
//       {/* الخلفية المتحركة */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//           style={{
//             position: "absolute",
//             inset: 0,
//             backgroundImage: `url(${slides[index].image})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//       </AnimatePresence>

//       {/* Overlay داكن أنيق */}
//       <Box
//         sx={{
//           position: "absolute",
//           inset: 0,
//           background:
//             mode === "light"
//               ? "rgba(0,0,0,0.6)"
//               : "rgba(0,0,0,0.6)",
//         }}
//       />

//       {/* النص المتحرك */}
//       <Box
//         sx={{
//           position: "relative",
//           zIndex: 2,
//           minHeight: "100vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//           px: 3,
//         }}
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={slides[index].title}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -40 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Typography
//               variant="h3"
//               fontWeight="bold"
//               color="#fff"
//               mb={2}
//             >
//               {slides[index].title}
//             </Typography>

//             <Typography
//               variant="h6"
//               sx={{ color: "#e0e0e0", maxWidth: 600 }}
//             >
//               {slides[index].subtitle}
//             </Typography>
//           </motion.div>
//         </AnimatePresence>
//       </Box>
//     </Box>
//   );
// }














// import { Box, Typography, Button } from "@mui/material";
// import { useContext, useEffect, useState } from "react";
// import { ColorModeContext } from "../context/ThemeContext";
// import { motion, AnimatePresence, useMotionValue } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// import financeImg from "../photo/home1.jpg";
// import realEstateImg from "../photo/home2.jpg";

// const slides = [
//   {
//     image: financeImg,
//     title: "حاسبة التمويل العقاري",
//     subtitle: "مستشارك المالي • أفضل تمويل • أفضل بنك",
//     cta: "احسب تمويلك الآن",
//     link: "/calculator",
//   },
//   {
//     image: realEstateImg,
//     title: "عقارات للبيع",
//     subtitle: "نقدر نحصلك طلبك بأفضل العروض",
//     cta: "تصفح العقارات",
//     link: "/offers",
//   },
// ];

// export default function Home() {
//   const { mode } = useContext(ColorModeContext);
//   const [index, setIndex] = useState(0);
//   const navigate = useNavigate();

//   // Parallax
//   const y = useMotionValue(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         minHeight: "100vh",
//         overflow: "hidden",
//         backgroundColor: "#000", // يمنع أي فلاش
//       }}
//     >
//       {/* الخلفية */}
//       <AnimatePresence initial={false}>
//         <motion.div
//           key={index}
//           style={{
//             position: "absolute",
//             inset: 0,
//             backgroundImage: `url(${slides[index].image})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             y,
//           }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//         />
//       </AnimatePresence>

//       {/* Overlay شفاف بدون سواد */}
//       <Box
//         sx={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.55))",
//         }}
//       />

//       {/* المحتوى */}
//       <Box
//         sx={{
//           position: "relative",
//           zIndex: 2,
//           minHeight: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//           px: 3,
//         }}
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={slides[index].title}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -40 }}
//             transition={{ duration: 0.8 }}
//             style={{
//               backdropFilter: "blur(6px)",
//               background: "rgba(0,0,0,0.25)",
//               padding: "32px",
//               borderRadius: "16px",
//               maxWidth: 700,
//             }}
//           >
//             <Typography variant="h3" fontWeight="bold" color="#fff" mb={2}>
//               {slides[index].title}
//             </Typography>

//             <Typography variant="h6" color="#e0e0e0" mb={3}>
//               {slides[index].subtitle}
//             </Typography>

//             <Button
//               variant="contained"
//               size="large"
//               sx={{
//                 px: 5,
//                 py: 1.5,
//                 fontWeight: "bold",
//                 borderRadius: "30px",
//                 background:
//                   "linear-gradient(90deg, #1976d2, #42a5f5)",
//               }}
//               onClick={() => navigate(slides[index].link)}
//             >
//               {slides[index].cta}
//             </Button>
//           </motion.div>
//         </AnimatePresence>

//         {/* مؤشرات النقاط */}
//         <Box sx={{ display: "flex", gap: 1.5, mt: 4 }}>
//           {slides.map((_, i) => (
//             <Box
//               key={i}
//               onClick={() => setIndex(i)}
//               sx={{
//                 width: index === i ? 14 : 10,
//                 height: index === i ? 14 : 10,
//                 borderRadius: "50%",
//                 backgroundColor: index === i ? "#fff" : "rgba(255,255,255,0.5)",
//                 cursor: "pointer",
//                 transition: "all 0.3s ease",
//               }}
//             />
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// }





// import { Box, Typography, Button, useMediaQuery } from "@mui/material";
// import { useContext, useEffect, useRef, useState } from "react";
// import { ColorModeContext } from "../context/ThemeContext";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet";

// import financeImg from "../photo/home1.jpg";
// import realEstateImg from "../photo/home2.jpg";

// const slides = [
//   {
//     image: financeImg,
//     title: "حاسبة التمويل العقاري",
//     subtitle: "مستشارك المالي • أفضل تمويل • أفضل بنك",
//     cta: "احسب تمويلك الآن",
//     link: "/calculator",
//     seoDesc: "احسب تمويلك العقاري بسهولة مع أفضل البنوك",
//   },
//   {
//     image: realEstateImg,
//     title: "عقارات للبيع",
//     subtitle: "نقدر نحصلك طلبك بأفضل العروض",
//     cta: "تصفح العقارات",
//     link: "/offers",
//     seoDesc: "عقارات للبيع بأفضل الأسعار في السعودية",
//   },
// ];

// export default function Home() {
//   const { mode } = useContext(ColorModeContext);
//   const isMobile = useMediaQuery("(max-width:900px)");
//   const navigate = useNavigate();

//   const [index, setIndex] = useState(0);
//   const paused = useRef(false);

//   /* ⏱️ Auto Slider */
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!paused.current) {
//         setIndex((i) => (i + 1) % slides.length);
//       }
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   /* Swipe */
//   const handleDragEnd = (_, info) => {
//     if (info.offset.x < -100) {
//       setIndex((i) => (i + 1) % slides.length);
//     }
//     if (info.offset.x > 100) {
//       setIndex((i) => (i - 1 + slides.length) % slides.length);
//     }
//   };

//   return (
//     <>
//       {/* SEO */}
//       <Helmet>
//         <title>{slides[index].title}</title>
//         <meta name="description" content={slides[index].seoDesc} />
//       </Helmet>

//       <Box
//         sx={{
//           position: "relative",
//           minHeight: "100vh",
//           overflow: "hidden",
//           backgroundColor: "#000",
//         }}
//         onMouseEnter={() => (paused.current = true)}
//         onMouseLeave={() => (paused.current = false)}
//         onTouchStart={() => (paused.current = true)}
//         onTouchEnd={() => (paused.current = false)}
//       >
//         {/* Background */}
//         <AnimatePresence initial={false}>
//           <motion.div
//             key={index}
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             onDragEnd={handleDragEnd}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             style={{
//               position: "absolute",
//               inset: 0,
//               backgroundImage: `url(${slides[index].image})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           />
//         </AnimatePresence>

//         {/* Overlay */}
//         <Box
//           sx={{
//             position: "absolute",
//             inset: 0,
//             background:
//               "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.55))",
//           }}
//         />

//         {/* Content */}
//         <Box
//           sx={{
//             position: "relative",
//             zIndex: 2,
//             minHeight: "100vh",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             px: 2,
//           }}
//         >
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={slides[index].title}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -40 }}
//               transition={{ duration: 0.7 }}
//               style={{
//                 backdropFilter: "blur(6px)",
//                 background: "rgba(0,0,0,0.25)",
//                 padding: isMobile ? 20 : 36,
//                 borderRadius: 16,
//                 maxWidth: isMobile ? "100%" : 720,
//                 width: "100%",
//                 textAlign: "center",
//               }}
//             >
//               {/* SEO H1 */}
//               <Typography
//                 component="h1"
//                 variant={isMobile ? "h5" : "h3"}
//                 fontWeight="bold"
//                 color="#fff"
//                 mb={2}
//               >
//                 {slides[index].title}
//               </Typography>

//               <Typography
//                 variant={isMobile ? "body1" : "h6"}
//                 color="#e0e0e0"
//                 mb={3}
//               >
//                 {slides[index].subtitle}
//               </Typography>

//               <Button
//                 fullWidth={isMobile}
//                 size="large"
//                 sx={{
//                   fontWeight: "bold",
//                   borderRadius: 30,
//                   py: 1.5,
//                   background:
//                     "linear-gradient(90deg, #1976d2, #42a5f5)",
//                 }}
//                 onClick={() => navigate(slides[index].link)}
//               >
//                 {slides[index].cta}
//               </Button>
//             </motion.div>
//           </AnimatePresence>
//         </Box>

//         {/* Dots */}
//         <Box
//           sx={{
//             position: "absolute",
//             bottom: 24,
//             width: "100%",
//             display: "flex",
//             justifyContent: "center",
//             gap: 1.5,
//             zIndex: 3,
//           }}
//         >
//           {slides.map((_, i) => (
//             <Box
//               key={i}
//               onClick={() => setIndex(i)}
//               sx={{
//                 width: index === i ? 14 : 10,
//                 height: index === i ? 14 : 10,
//                 borderRadius: "50%",
//                 backgroundColor:
//                   index === i ? "#fff" : "rgba(255,255,255,0.5)",
//                 transition: "all 0.3s ease",
//                 cursor: "pointer",
//               }}
//             />
//           ))}
//         </Box>
//       </Box>
//     </>
//   );
// }











import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { ColorModeContext } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import financeImg from "../photo/home1.jpg";
import realEstateImg from "../photo/home2.jpg";
import NewsSliderSection from "../components/News";
import NewsSlider from "../components/News";

const slides = [
  {
    image: financeImg,
    title: "حاسبة التمويل العقاري",
    subtitle: "مستشارك المالي • أفضل تمويل • أفضل بنك",
    cta: "احسب تمويلك الآن",
    link: "/mycalculator",
    seoDesc: "احسب تمويلك العقاري بسهولة مع أفضل البنوك",
  },
  {
    image: realEstateImg,
    title: "عقارات للبيع",
    subtitle: "نقدر نحصلك طلبك بأفضل العروض",
    cta: "تصفح العقارات",
    link: "/offerss",
    seoDesc: "عقارات للبيع بأفضل الأسعار في السعودية",
  },
];

export default function Home() {
  const { mode } = useContext(ColorModeContext);
  const isMobile = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const paused = useRef(false);

  /* ⏱️ Auto Slider */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused.current) {
        setIndex((i) => (i + 1) % slides.length);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  /* Swipe */
  const handleDragEnd = (_, info) => {
    if (info.offset.x < -100) {
      setIndex((i) => (i + 1) % slides.length);
    }
    if (info.offset.x > 100) {
      setIndex((i) => (i - 1 + slides.length) % slides.length);
    }
  };

  // return (
  //   <>
  //     {/* SEO */}
  //     <Helmet>
  //       <title>{slides[index].title}</title>
  //       <meta name="description" content={slides[index].seoDesc} />
  //     </Helmet>

  //     <Box
  //       sx={{
  //         position: "relative",
  //         minHeight: "100vh",
  //         overflow: "hidden",
  //         backgroundColor: "#000",
  //       }}
  //     >
  //       {/* Background */}
  //       <AnimatePresence initial={false}>
  //         <motion.div
  //           key={index}
  //           drag="x"
  //           dragConstraints={{ left: 0, right: 0 }}
  //           onDragEnd={handleDragEnd}
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           exit={{ opacity: 0 }}
  //           transition={{ duration: 1 }}
  //           style={{
  //             position: "absolute",
  //             inset: 0,
  //             backgroundImage: `url(${slides[index].image})`,
  //             backgroundSize: "cover",
  //             backgroundPosition: "center",
  //           }}
  //         />
  //       </AnimatePresence>

  //       {/* Overlay */}
  //       <Box
  //         sx={{
  //           position: "absolute",
  //           inset: 0,
  //           background:
  //             "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.55))",
  //         }}
  //       />

  //       {/* Content */}
  //       <Box
  //         sx={{
  //           position: "relative",
  //           zIndex: 2,
  //           minHeight: "100vh",
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "center",
  //           px: 2,
  //         }}
  //       >
  //         <AnimatePresence mode="wait">
  //           <motion.div
  //             key={slides[index].title}
  //             onMouseEnter={() => {
  //               paused.current = true;
  //               setIsPaused(true);
  //             }}
  //             onMouseLeave={() => {
  //               paused.current = false;
  //               setIsPaused(false);
  //             }}
  //             onTouchStart={() => {
  //               paused.current = true;
  //               setIsPaused(true);
  //             }}
  //             onTouchEnd={() => {
  //               paused.current = false;
  //               setIsPaused(false);
  //             }}
  //             initial={{ opacity: 0, y: 40 }}
  //             animate={{ opacity: 1, y: 0 }}
  //             exit={{ opacity: 0, y: -40 }}
  //             transition={{ duration: 0.7 }}
  //             style={{
  //               position: "relative",
  //               backdropFilter: "blur(6px)",
  //               background: "rgba(0,0,0,0.25)",
  //               padding: isMobile ? 20 : 36,
  //               borderRadius: 16,
  //               maxWidth: isMobile ? "100%" : 720,
  //               width: "100%",
  //               textAlign: "center",
  //             }}
  //           >
  //             {/* Paused Indicator */}
  //             <AnimatePresence>
  //               {isPaused && (
  //                 <motion.div
  //                   initial={{ opacity: 0, y: -10 }}
  //                   animate={{ opacity: 1, y: 0 }}
  //                   exit={{ opacity: 0, y: -10 }}
  //                   style={{
  //                     position: "absolute",
  //                     top: -14,
  //                     right: 16,
  //                     background: "rgba(0, 0, 0, 0)",
  //                     color: "#fff",
  //                     padding: "4px 10px",
  //                     borderRadius: 12,
  //                     fontSize: 12,
  //                     display: "flex",
  //                     alignItems: "center",
  //                     gap: 6,
  //                   }}
  //                 >
  //                   {/* ⏸ متوقف مؤقتًا */}
  //                 </motion.div>
  //               )}
  //             </AnimatePresence>

  //             {/* SEO H1 */}
  //             <Typography
  //               component="h1"
  //               variant={isMobile ? "h5" : "h3"}
  //               fontWeight="bold"
  //               color="#fff"
  //               mb={2}
  //             >
  //               {slides[index].title}
  //             </Typography>

  //             <Typography
  //               variant={isMobile ? "body1" : "h6"}
  //               color="#e0e0e0"
  //               mb={3}
  //             >
  //               {slides[index].subtitle}
  //             </Typography>

  //             {/* CTA Button */}
  //             <Button
  //               fullWidth={isMobile}
  //               size="large"
  //               onClick={() => navigate(slides[index].link)}
  //               sx={{
  //                 fontWeight: "bold",
  //                 borderRadius: 30,
  //                 color:"black",
  //                 minWidth:"200px",
  //                 py: 1.5,
  //                 background:
  //                   "linear-gradient(90deg, #1976d2, #42a5f5)",
  //                 transition: "all 0.3s ease",
  //                 "&:hover": {
  //                   transform: "translateY(-2px)",
  //                   boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
  //                   background:
  //                     "linear-gradient(90deg, #1565c0, #1e88e5)",
  //                 },
  //               }}
  //             >
  //               {slides[index].cta}
  //             </Button>
  //           </motion.div>
  //         </AnimatePresence>
  //       </Box>

  //       {/* Dots */}
  //       <Box
  //         sx={{
  //           position: "absolute",
  //           bottom: 24,
  //           width: "100%",
  //           display: "flex",
  //           justifyContent: "center",
  //           gap: 1.5,
  //           zIndex: 3,
  //         }}
  //       >
  //         {slides.map((_, i) => (
  //           <Box
  //             key={i}
  //             onClick={() => setIndex(i)}
  //             sx={{
  //               width: index === i ? 14 : 10,
  //               height: index === i ? 14 : 10,
  //               borderRadius: "50%",
  //               backgroundColor:
  //                 index === i ? "#fff" : "rgba(255,255,255,0.5)",
  //               transition: "all 0.3s ease",
  //               cursor: "pointer",
  //             }}
  //           />
  //         ))}
  //       </Box>
  //     </Box>
  //   </>
  // );



return (
  <>
    {/* SEO */}
    <Helmet>
      <title>{slides[index].title}</title>
      <meta name="description" content={slides[index].seoDesc} />
    </Helmet>

    {/** ================== THEME LOGIC ================== */}
    {(() => {
      const overlayBg =
        mode === "light"
          ? "linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.25))"
          : "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.7))";

      // const cardBg =
      //   mode === "light"
      //     ? "rgba(255,255,255,0.65)"
      //      : "rgba(0,0,0,0.35)";
        
          

      const titleColor = mode === "light" ? "#020617" : "#ffffff";
      const textColor = mode === "light" ? "#334155" : "#e5e7eb";

      const blurValue = mode === "light" ? "blur(4px)" : "blur(10px)";

      const cardShadow =
        mode === "light"
          ? "0 0 0 1px rgba(255,255,255,0.7), 0 8px 30px rgba(255,255,255,0.45)"
          : "0 20px 50px rgba(0,0,0,0.55)";

      const buttonBg =
        mode === "light"
        ?  "linear-gradient(90deg, #2563eb, #60a5fa)"
          // ? "linear-gradient(90deg, #16a34a, #22c55e)"
          : "linear-gradient(90deg, #2563eb, #60a5fa)";

      const buttonHoverBg =
        mode === "light"
          // ? "linear-gradient(90deg, #15803d, #16a34a)"
          ?  "linear-gradient(90deg, #1d4ed8, #3b82f6)"
          : "linear-gradient(90deg, #1d4ed8, #3b82f6)";

      const dotActiveColor = mode === "light" ? "#020617" : "#ffffff";
      const dotInactiveColor =
        mode === "light"
          ? "rgba(2,6,23,0.35)"
          : "rgba(255,255,255,0.45)";

      return (

        <Box
       
          sx={{
            position: "relative",
            minHeight: "100vh",
            overflow: "hidden",
            backgroundColor: "#000",
          }}
        >
          {/* Background */}
          <AnimatePresence initial={false}>
            <motion.div
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${slides[index].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </AnimatePresence>

          {/* Overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: overlayBg,
            }}
          />

          {/* Content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              px: 2,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[index].title}
                onMouseEnter={() => {
                  paused.current = true;
                  setIsPaused(true);
                }}
                onMouseLeave={() => {
                  paused.current = false;
                  setIsPaused(false);
                }}
                onTouchStart={() => {
                  paused.current = true;
                  setIsPaused(true);
                }}
                onTouchEnd={() => {
                  paused.current = false;
                  setIsPaused(false);
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.7 }}
                style={{
                  position: "relative",
                  backdropFilter: blurValue,
                  WebkitBackdropFilter: blurValue,
                  // background: cardBg,
                  boxShadow: cardShadow,
                  padding: isMobile ? 20 : 36,
                  borderRadius: 20,
                  maxWidth: isMobile ? "100%" : 720,
                  width: "100%",
                  textAlign: "center",
                }}
              >
                {/* Title */}
                <Typography
                  component="h1"
                  variant={isMobile ? "h5" : "h3"}
                  fontWeight="bold"
                  color={titleColor}
                  mb={2}
                >
                  {slides[index].title}
                </Typography>

                {/* Subtitle */}
                <Typography
                  variant={isMobile ? "body1" : "h6"}
                  color={textColor}
                  mb={3}
                >
                  {slides[index].subtitle}
                </Typography>

                {/* CTA */}
                <Button
                  fullWidth={isMobile}
                  size="large"
                  onClick={() => navigate(slides[index].link)}
                  sx={{
                    fontWeight: "bold",
                    borderRadius: 30,
                    minWidth: "200px",
                    py: 1.5,
                    color: "#fff",
                    background: buttonBg,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                      background: buttonHoverBg,
                    },
                  }}
                >
                  {slides[index].cta}
                </Button>
              </motion.div>
            </AnimatePresence>
          </Box>

          {/* Dots */}
          <Box
          
            sx={{
              position: "absolute",
              bottom: 24,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: 1.5,
              zIndex: 3,
            }}
          >
            {slides.map((_, i) => (
              <Box
                key={i}
                onClick={() => setIndex(i)}
                sx={{
                  width: index === i ? 14 : 10,
                  height: index === i ? 14 : 10,
                  borderRadius: "50%",
                  backgroundColor:
                    index === i ? dotActiveColor : dotInactiveColor,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              />
            ))}
          </Box>
        </Box>
      );
    })()}


  <NewsSlider />
   
  </>
);


}
