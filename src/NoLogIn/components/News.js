// import {
//   Box,
//   Typography,
//   IconButton,
//   useMediaQuery,
// } from "@mui/material";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useRef, useState, useContext } from "react";
// import { ColorModeContext } from "../context/ThemeContext";
// import { useNavigate } from "react-router-dom";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// const news = [
//   {
//     id: 1,
//     title: "سكن تسلّم أكثر من 50 ألف وحدة سكنية للأسر المستحقة",
//     image: "https://alamlsa.com/wp-content/uploads/2025/12/2515384.jpg",
//     link: "/news/1",
//   },
//   {
//     id: 2,
//     title: "بدء المرحلة الأولى من تسليم الوحدات السكنية",
//     image: "https://alamlsa.com/wp-content/uploads/2025/12/1306425.jpeg",
//     link: "/news/2",
//   },
//   {
//     id: 3,
//     title: "شروط تملك الأجانب للعقار في السعودية",
//     image: "https://alamlsa.com/wp-content/uploads/2025/08/عقارات-الرياض-765x510-1.jpg",
//     link: "/news/3",
//   },
//   {
//     id: 4,
//     title: "ارتفاع الطلب على العقارات السكنية في المدن الكبرى",
//     image: "https://alamlsa.com/wp-content/uploads/2025/08/عقارات-الرياض-765x510-1.jpg",
//     link: "/news/4",
//   },
// ];

// export default function NewsSliderSection() {
//   const { mode } = useContext(ColorModeContext);
//   const navigate = useNavigate();

//   const isMobile = useMediaQuery("(max-width:600px)");
//   const isTablet = useMediaQuery("(max-width:900px)");

//   const perView = isMobile ? 1 : isTablet ? 2 : 3;
//   const pages = Math.ceil(news.length / perView);

//   const [page, setPage] = useState(0);
//   const paused = useRef(false);

//   /* Auto slide */
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!paused.current) {
//         setPage((p) => (p + 1) % pages);
//       }
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [pages]);

//   const start = page * perView;
//   const visibleNews = news.slice(start, start + perView);

//   return (
//     <Box
//       sx={{ py: 10 }}
//       component={motion.section}
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* Title */}
//       <Typography variant="h4" fontWeight="bold" align="center">
//         الأخبار
//       </Typography>
//       <Typography align="center" sx={{ opacity: 0.7 }} mb={5}>
//         آخر أخبار العقار والتمويل
//       </Typography>

//       {/* Slider */}
//       <Box
//         sx={{
//           position: "relative",
//           maxWidth: 1200,
//           mx: "auto",
//           px: 2,
//         }}
//         onMouseEnter={() => (paused.current = true)}
//         onMouseLeave={() => (paused.current = false)}
//       >
//         {/* Arrows */}
//         <IconButton
//           onClick={() =>
//             setPage((p) => (p - 1 + pages) % pages)
//           }
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: -10,
//             zIndex: 5,
//             backgroundColor:
//               mode === "dark"
//                 ? "rgba(255,255,255,0.1)"
//                 : "#fff",
//           }}
//         >
//           <ArrowBackIosNewIcon />
//         </IconButton>

//         <IconButton
//           onClick={() =>
//             setPage((p) => (p + 1) % pages)
//           }
//           sx={{
//             position: "absolute",
//             top: "50%",
//             right: -10,
//             zIndex: 5,
//             backgroundColor:
//               mode === "dark"
//                 ? "rgba(255,255,255,0.1)"
//                 : "#fff",
//           }}
//         >
//           <ArrowForwardIosIcon />
//         </IconButton>

//         {/* Slides */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={page}
//             initial={{ opacity: 0, x: 80 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -80 }}
//             transition={{ duration: 0.5 }}
//             style={{
//               display: "grid",
//               gridTemplateColumns: `repeat(${perView}, 1fr)`,
//               gap: 20,
//             }}
//           >
//             {visibleNews.map((item) => (
//               <Box
//                 key={item.id}
//                 sx={{
//                   borderRadius: 3,
//                   overflow: "hidden",
//                   cursor: "pointer",
//                   backgroundColor:
//                     mode === "dark"
//                       ? "rgba(255,255,255,0.05)"
//                       : "#fff",
//                   boxShadow:
//                     mode === "dark"
//                       ? "0 10px 30px rgba(0,0,0,0.5)"
//                       : "0 10px 30px rgba(0,0,0,0.12)",
//                 }}
//                 onClick={() => navigate(item.link)}
//               >
//                 <Box
//                   component="img"
//                   src={item.image}
//                   alt={item.title}
//                   sx={{
//                     width: "100%",
//                     height: 220,
//                     objectFit: "cover",
//                   }}
//                 />
//                 <Box sx={{ p: 2 }}>
//                   <Typography fontWeight="bold">
//                     {item.title}
//                   </Typography>
//                 </Box>
//               </Box>
//             ))}
//           </motion.div>
//         </AnimatePresence>

//         {/* Dots */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             gap: 1.2,
//             mt: 4,
//           }}
//         >
//           {Array.from({ length: pages }).map((_, i) => (
//             <Box
//               key={i}
//               onClick={() => setPage(i)}
//               sx={{
//                 width: page === i ? 14 : 10,
//                 height: page === i ? 14 : 10,
//                 borderRadius: "50%",
//                 backgroundColor:
//                   page === i
//                     ? "primary.main"
//                     : "rgba(0,0,0,0.3)",
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





// import React, { useState, useEffect } from "react";
// import { Box, Typography, IconButton } from "@mui/material";
// import { motion } from "framer-motion";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import newsData from "./newsData";
// import { useNavigate } from "react-router-dom";

// const NewsSlider = () => {
//   const [index, setIndex] = useState(0);
//   const navigate = useNavigate();

//   // Automatic slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [index]);

//   const handlePrev = () => {
//     setIndex((prev) => (prev === 0 ? newsData.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setIndex((prev) => (prev === newsData.length - 1 ? 0 : prev + 1));
//   };

//   const handleDotClick = (i) => {
//     setIndex(i);
//   };

//   return (
//     <Box sx={{ position: "relative", overflow: "hidden", width: "100%", mt: 3 }}>
//       {/* Slider Items */}
//       {newsData.map((news, i) => (
//         <motion.div
//           key={news.id}
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: i === index ? 1 : 0, x: i === index ? 0 : 100 }}
//           transition={{ duration: 0.6 }}
//           style={{
//             position: i === index ? "relative" : "absolute",
//             width: "100%",
//             cursor: "pointer",
//           }}
//           onClick={() => navigate(`/news/${news.id}`)}
//         >
//           <Box
//             sx={{
//               height: { xs: "200px", md: "400px" },
//               backgroundImage: `url(${news.image})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               borderRadius: 2,
//             }}
//           >
//             <Box
//               sx={{
//                 background: "rgba(0,0,0,0.4)",
//                 color: "#fff",
//                 p: 2,
//                 position: "absolute",
//                 bottom: 0,
//                 width: "100%",
//               }}
//             >
//               <Typography variant="h6">{news.title}</Typography>
//               <Typography variant="caption">
//                 {news.source} - {news.date}
//               </Typography>
//             </Box>
//           </Box>
//         </motion.div>
//       ))}

//       {/* Navigation Arrows */}
//       <IconButton
//         onClick={handlePrev}
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: 10,
//           transform: "translateY(-50%)",
//           background: "rgba(0,0,0,0.3)",
//           color: "#fff",
//           "&:hover": { background: "rgba(0,0,0,0.5)" },
//         }}
//       >
//         <ArrowBackIosIcon />
//       </IconButton>
//       <IconButton
//         onClick={handleNext}
//         sx={{
//           position: "absolute",
//           top: "50%",
//           right: 10,
//           transform: "translateY(-50%)",
//           background: "rgba(0,0,0,0.3)",
//           color: "#fff",
//           "&:hover": { background: "rgba(0,0,0,0.5)" },
//         }}
//       >
//         <ArrowForwardIosIcon />
//       </IconButton>

//       {/* Dots */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           mt: 2,
//           gap: 1,
//         }}
//       >
//         {newsData.map((_, i) => (
//           <Box
//             key={i}
//             onClick={() => handleDotClick(i)}
//             sx={{
//               width: 12,
//               height: 12,
//               borderRadius: "50%",
//               background: i === index ? "primary.main" : "grey.400",
//               cursor: "pointer",
//             }}
//           />
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default NewsSlider;






// import React, { useState, useEffect } from "react";
// import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
// import { motion } from "framer-motion";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import newsData from "./newsData";
// import { useNavigate } from "react-router-dom";

// const NewsSlider = () => {
//   const navigate = useNavigate();
//   const isSmall = useMediaQuery("(max-width:900px)"); // شاشة صغيرة: خبر واحد
//   const itemsPerSlide = isSmall ? 1 : 3;

//   // تقسيم الأخبار إلى شرائح
//   const slides = [];
//   for (let i = 0; i < newsData.length; i += itemsPerSlide) {
//     slides.push(newsData.slice(i, i + itemsPerSlide));
//   }

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handlePrev = () => {
//     setCurrentSlide((prev) =>
//       prev === 0 ? slides.length - 1 : prev - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentSlide((prev) =>
//       prev === slides.length - 1 ? 0 : prev + 1
//     );
//   };

//   // Auto play
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   return (
//     <Box sx={{ position: "relative", width: "100%", mt: 3, overflow: "hidden" }}>
//       {/* Slider Container */}
//       <Box
//         sx={{
//           display: "flex",
//           transition: "transform 0.5s ease",
//           transform: `translateX(-${currentSlide * 100}%)`,
//           width: `${slides.length * 100}%`,
//         }}
//       >
//         {slides.map((slide, slideIndex) => (
//           <Box
//             key={slideIndex}
//             sx={{
//               display: "flex",
//               gap: 2,
//             //   flex: `0 0 ${100 / slides.length}%`,
//             flex: `0 0 100%`,
//             }}
//           >
//             {slide.map((news) => (
//               <motion.div
//                 key={news.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 style={{ flex: 1, cursor: "pointer" }}
//                 onClick={() => navigate(`/news/${news.id}`)}
//               >
//                 <Box
//                   sx={{
//                     height: { xs: 200, md: 300 },
//                     backgroundImage: `url(${news.image})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     borderRadius: 2,
//                     position: "relative",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       background: "rgba(0,0,0,0.4)",
//                       color: "#fff",
//                       p: 2,
//                       position: "absolute",
//                       bottom: 0,
//                       width: "100%",
//                     }}
//                   >
//                     <Typography variant="subtitle1">{news.title}</Typography>
//                     <Typography variant="caption">
//                       {news.source} - {news.date}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </motion.div>
//             ))}
//           </Box>
//         ))}
//       </Box>

//       {/* Arrows */}
//       <IconButton
//         onClick={handlePrev}
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: 10,
//           transform: "translateY(-50%)",
//           background: "rgba(0,0,0,0.3)",
//           color: "#fff",
//           "&:hover": { background: "rgba(0,0,0,0.5)" },
//         }}
//       >
//         <ArrowBackIosIcon />
//       </IconButton>
//       <IconButton
//         onClick={handleNext}
//         sx={{
//           position: "absolute",
//           top: "50%",
//           right: 10,
//           transform: "translateY(-50%)",
//           background: "rgba(0,0,0,0.3)",
//           color: "#fff",
//           "&:hover": { background: "rgba(0,0,0,0.5)" },
//         }}
//       >
//         <ArrowForwardIosIcon />
//       </IconButton>

//       {/* Dots */}
//       <Box sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 1 }}>
//         {slides.map((_, i) => (
//           <Box
//             key={i}
//             onClick={() => setCurrentSlide(i)}
//             sx={{
//               width: 12,
//               height: 12,
//               borderRadius: "50%",
//               background: i === currentSlide ? "primary.main" : "grey.400",
//               cursor: "pointer",
//             }}
//           />
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default NewsSlider;






// src/components/NewsSlider.js
import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // ❗ الاستيراد الصحيح
import "./NewsSlider.css";
import { useContext, useEffect, useRef, useState } from "react";
import { ColorModeContext } from "../context/ThemeContext.jsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import newsData from "./newsData"; // مكان ملف الأخبار

export default function NewsSlider() {
      const { mode } = useContext(ColorModeContext);



  return (
    <Box sx={{ width: "100%", p: 2 }} className={mode==="dark"?"dark-vist-home":""}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // تمرير الموديولات
        className={mode === "light" ? "news-swiper-light" : "news-swiper-dark"}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },   // شاشة صغيرة: 1 خبر
          600: { slidesPerView: 2 }, // تابلت: 2 خبر
          900: { slidesPerView: 3 }, // شاشة كبيرة: 3 أخبار
        }}
      >
        {newsData.map((news) => (
          <SwiperSlide key={news.id}>
            <Box
              sx={{
                border: "1px solid #ccc",
                borderRadius: 2,
                overflow: "hidden",
                cursor: "pointer",
                "&:hover": { boxShadow: 3 },
              }}
              onClick={() => (window.location.href = `/alaa/#/newss/${news.id}`)}
            >
              {news.image && (
                <img
                  src={news.image} 
                  alt={news.title}
                  style={{ width: "100%", height: 180, objectFit: "cover" }}
                />
              )}

              <Box sx={{ p: 2 }}>
                <Typography variant="h6">{news.title}</Typography>
                <Typography variant="body2" color="text.secondary">

                  {news.date} | {news.source}

                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
