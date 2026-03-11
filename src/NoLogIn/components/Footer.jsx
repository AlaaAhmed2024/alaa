


// import {
//   Box,
//   Grid,
//   Typography,
//   IconButton,
//   Button,
//   Divider,
// } from "@mui/material";
// import { useContext } from "react";
// import { ColorModeContext } from "../context/ThemeContext";

// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import XIcon from "@mui/icons-material/X";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   const { mode } = useContext(ColorModeContext);
// ;

//   const bgColor = mode === "light" ? "#e0e0e0" : "#020617";
 
  
//   const textColor = mode === "light" ? "#010101ff" : "#ffffffff";

//   const iconStyle = (color) => ({
//     color,
//     transition: "all 0.3s ease",
//     "&:hover": {
//       transform: "translateY(-4px) scale(1.15)",
//       filter: "drop-shadow(0 4px 6px rgba(0,0,0,.4))",
//     },
//   });

//   return (
//     <Box sx={{ backgroundColor: bgColor, color: textColor, mt: 0 }}>
//       {/* الصف الأول */}
//       <Grid container spacing={4} px={4} py={6}>
//         <Grid item xs={12} md={4}>
//           <Typography variant="h6" fontWeight="bold">
//             التمويل العقاري
//           </Typography>
//           <Typography variant="body2" sx={{ opacity: 0.85, mt: 1 }}>
//             نوفر لك أداة احترافية لحساب قدرتك التمويلية
//             ومعرفة القسط الشهري ونسبة الاستقطاع بسهولة.

//           </Typography>


               
//           <Typography variant="h6" fontWeight="bold">
//      شركة اسكان سلمان العقارية
//           </Typography>
//           <Typography variant="body2" sx={{ opacity: 0.85, mt: 1 }}>
   
// مؤسسة إسكان سلمان هي مؤسسة ذات مسئولية محدودة تأسست 2010م حيث قامت المؤسسة باستقطاب نوع جديد ولقد تأسست المؤسسة لمواكبة إحتياجات السوق السعودي .
            
//           </Typography>
//         </Grid>

//         <Grid item xs={12} md={4}>
//           <Typography variant="h6" fontWeight="bold">
//             وسائل التواصل
//           </Typography>

//           <Box sx={{ display: "flex", gap: 1.5, mt: 2 }}>
//             <IconButton
//               href="https://wa.me/966508417587?text=مرحبا، أود الاستفسار عن التمويل العقاري"
//               target="_blank"
//               sx={iconStyle("#25D366")}
//             >
//               <WhatsAppIcon />
//             </IconButton>

//             <IconButton href="tel:+966508417587" sx={iconStyle("#38bdf8")}>
//               <PhoneIcon />
//             </IconButton>

//             <IconButton href="mailto:info@example.com" sx={iconStyle("#f97316")}>
//               <EmailIcon />
//             </IconButton>

//             <IconButton href="https://x.com" target="_blank" sx={iconStyle(mode==="light"?"black":"#ffffff")}>
//               <XIcon />
//             </IconButton>

//             <IconButton href="https://instagram.com" target="_blank" sx={iconStyle("#e1306c")}>
//               <InstagramIcon />
//             </IconButton>

//             <IconButton href="https://linkedin.com" target="_blank" sx={iconStyle("#0a66c2")}>
//               <LinkedInIcon />
//             </IconButton>
//           </Box>


//         </Grid>

//         <Grid item xs={12} md={4}>


//           <Typography fontWeight="bold">روابط</Typography>   
//                  <Link href="/" color="inherit">الرئيسية</Link><br />
//          <Link href="/calculator" color="inherit">الحاسبة</Link>


//           <Typography variant="h6" fontWeight="bold">
//             استشارة مجانية
//           </Typography>

//           <Typography variant="body2" sx={{ opacity: 0.85, mt: 1 }}>
//             تواصل معنا الآن واحصل على استشارة تمويلية
//             تناسب دخلك والتزاماتك.
//           </Typography>

//           <Button
//             variant="contained"
//             startIcon={<SupportAgentIcon />}
//             href="https://wa.me/966508417587?text=أرغب بالحصول على استشارة تمويلية"
//             target="_blank"
//             sx={{
//               mt: 2,
//               backgroundColor: "#22c55e",
//               "&:hover": { backgroundColor: "#16a34a" },
//             }}
//           >
//             طلب استشارة
//           </Button>
//         </Grid>
//       </Grid>

//       {/* الصف الثاني */}
//       <Divider sx={{ borderColor: "rgba(255,255,255,0.15)" }} />

//       <Box py={3} textAlign="center">
//         <Typography fontSize={13} sx={{ opacity: 0.7 }}>
//           © {new Date().getFullYear()} جميع الحقوق محفوظة — حاسبة التمويل العقاري
//         </Typography>
//       </Box>
//     </Box>
//   );
// }









// import {
//   Box,
//   Grid,
//   Typography,
//   IconButton,
//   Button,
//   Divider,
//   Stack,
// } from "@mui/material";
// import { useContext } from "react";
// import { ColorModeContext } from "../context/ThemeContext";

// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import XIcon from "@mui/icons-material/X";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   const { mode } = useContext(ColorModeContext);

//   const bgColor = mode === "light" ? "#e0e0e0" : "#020617";
//   const textColor = mode === "light" ? "#010101" : "#ffffff";

//   const iconStyle = (color) => ({
//     color,
//     transition: "all 0.3s ease",
//     "&:hover": {
//       transform: "translateY(-4px) scale(1.15)",
//       filter: "drop-shadow(0 4px 6px rgba(0,0,0,.4))",
//     },
//   });

//   return (
//     <Box
//       sx={{
//         backgroundColor: bgColor,
//         color: textColor,
//         direction: "rtl",
//       }}
//     >
//       {/* المحتوى */}
//       <Grid
//         container
//         spacing={{ xs: 4, md: 6 }}
//         px={{ xs: 2, md: 6 }}
//         py={6}
//       >
//         {/* العمود الأول */}
//         <Grid item xs={12} md={4}>
//           <Stack spacing={2} textAlign={{ xs: "center", md: "right" }}>
//             <Typography variant="h6" fontWeight="bold">
//               التمويل العقاري
//             </Typography>

//             <Typography variant="body2" sx={{ opacity: 0.85 }}>
//               نوفر لك أداة احترافية لحساب قدرتك التمويلية ومعرفة القسط الشهري
//               ونسبة الاستقطاع بسهولة.
//             </Typography>

//             <Typography variant="h6" fontWeight="bold" mt={2}>
//               شركة إسكان سلمان العقارية
//             </Typography>

//             <Typography variant="body2" sx={{ opacity: 0.85 }}>
//               مؤسسة إسكان سلمان هي مؤسسة ذات مسئولية محدودة تأسست عام 2010م
//               لمواكبة احتياجات السوق السعودي.
//             </Typography>
//           </Stack>
//         </Grid>

//         {/* العمود الثاني */}
//         <Grid item xs={12} md={4}>
//           <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
//             <Typography variant="h6" fontWeight="bold">
//               وسائل التواصل
//             </Typography>

//             <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
//               <IconButton
//                 href="https://wa.me/966508417587"
//                 target="_blank"
//                 sx={iconStyle("#25D366")}
//               >
//                 <WhatsAppIcon />
//               </IconButton>

//               <IconButton href="tel:+966508417587" sx={iconStyle("#38bdf8")}>
//                 <PhoneIcon />
//               </IconButton>

//               <IconButton href="mailto:info@example.com" sx={iconStyle("#f97316")}>
//                 <EmailIcon />
//               </IconButton>

//               <IconButton
//                 href="https://x.com"
//                 target="_blank"
//                 sx={iconStyle(mode === "light" ? "#000" : "#fff")}
//               >
//                 <XIcon />
//               </IconButton>

//               <IconButton
//                 href="https://instagram.com"
//                 target="_blank"
//                 sx={iconStyle("#e1306c")}
//               >
//                 <InstagramIcon />
//               </IconButton>

//               <IconButton
//                 href="https://linkedin.com"
//                 target="_blank"
//                 sx={iconStyle("#0a66c2")}
//               >
//                 <LinkedInIcon />
//               </IconButton>
//             </Box>
//           </Stack>
//         </Grid>

//         {/* العمود الثالث */}
//         <Grid item xs={12} md={4}>
//           <Stack
//             spacing={2}
//             textAlign={{ xs: "center", md: "right" }}
//             alignItems={{ xs: "center", md: "flex-start" }}
//           >
//             <Typography fontWeight="bold">روابط</Typography>

//             <Stack spacing={1}>
//               <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
//                 الرئيسية
//               </Link>
//               <Link
//                 to="/calculator"
//                 style={{ color: "inherit", textDecoration: "none" }}
//               >
//                 الحاسبة
//               </Link>
//             </Stack>

//             <Typography variant="h6" fontWeight="bold" mt={2}>
//               استشارة مجانية
//             </Typography>

//             <Typography variant="body2" sx={{ opacity: 0.85 }}>
//               تواصل معنا الآن واحصل على استشارة تمويلية تناسب دخلك والتزاماتك.
//             </Typography>

//             <Button
//               variant="contained"
//               startIcon={<SupportAgentIcon />}
//               href="https://wa.me/966508417587"
//               target="_blank"
//               sx={{
//                 mt: 1,
//                 backgroundColor: "#22c55e",
//                 px: 3,
//                 "&:hover": { backgroundColor: "#16a34a" },
//               }}
//             >
//               طلب استشارة
//             </Button>
//           </Stack>
//         </Grid>
//       </Grid>

//       <Divider sx={{ opacity: 0.2 }} />

//       {/* الحقوق */}
//       <Box py={3} textAlign="center">
//         <Typography fontSize={13} sx={{ opacity: 0.7 }}>
//           © {new Date().getFullYear()} جميع الحقوق محفوظة — حاسبة التمويل العقاري
//         </Typography>
//       </Box>
//     </Box>
//   );
// }






// import {
//   Box,
//   Grid,
//   Typography,
//   IconButton,
//   Button,
//   Divider,
//   Stack,
// } from "@mui/material";
// import { useContext } from "react";
// import { ColorModeContext } from "../context/ThemeContext";

// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import XIcon from "@mui/icons-material/X";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   const { mode } = useContext(ColorModeContext);

//   const bgColor = mode === "light" ? "#e0e0e0" : "#020617";
//   const textColor = mode === "light" ? "#010101" : "#ffffff";

//   const iconStyle = (color) => ({
//     color,
//     transition: "all 0.3s ease",
//     "&:hover": {
//       transform: "translateY(-4px) scale(1.15)",
//       filter: "drop-shadow(0 4px 6px rgba(0,0,0,.4))",
//     },
//   });

//   return (
//     <Box sx={{ backgroundColor: bgColor, color: textColor, direction: "rtl" }}>
//       <Grid
//         container
//         spacing={{ xs: 4, md: 6 }}
//         px={{ xs: 2, md: 6 }}
//         py={6}
//       >
//         {/* العمود الأول: تعريف وتسويق */}
//         <Grid item xs={12} md={4}>
//           <Stack spacing={2} textAlign={{ xs: "center", md: "right" }}>
//             <Typography variant="h6" fontWeight="bold">
//               حاسبة التمويل العقاري
//             </Typography>

//             <Typography variant="body2" sx={{ opacity: 0.85 }}>
//               نوفر لك حاسبة تمويل عقاري دقيقة تساعدك على معرفة قدرتك الشرائية،
//               القسط الشهري، ونسبة الاستقطاع بكل وضوح وسهولة.
//             </Typography>

//             <Typography variant="body2" sx={{ opacity: 0.85 }}>
//               نحن نساعدك على <strong>المقارنة بين أفضل العروض التمويلية</strong>،
//               واختيار الحل الأنسب لك من حيث القسط، المدة، والالتزامات.
//             </Typography>

//             <Typography variant="body2" sx={{ opacity: 0.85 }}>
//               تواصل معنا الآن لتحصيل <strong>أفضل عرض تمويلي متاح</strong> حسب
//               حالتك.
//             </Typography>
//           </Stack>
//         </Grid>

//         {/* العمود الثاني: التواصل + الروابط */}
//         <Grid item xs={12} md={4}>
//           <Stack
//             spacing={3}
//             alignItems={{ xs: "center", md: "flex-start" }}
//           >
//             <Typography variant="h6" fontWeight="bold">
//               وسائل التواصل
//             </Typography>

//             <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
//               <IconButton
//                 href="https://wa.me/966508417587"
//                 target="_blank"
//                 sx={iconStyle("#25D366")}
//               >
//                 <WhatsAppIcon />
//               </IconButton>

//               <IconButton href="tel:+966508417587" sx={iconStyle("#38bdf8")}>
//                 <PhoneIcon />
//               </IconButton>

//               <IconButton href="mailto:info@example.com" sx={iconStyle("#f97316")}>
//                 <EmailIcon />
//               </IconButton>

//               <IconButton
//                 href="https://x.com"
//                 target="_blank"
//                 sx={iconStyle(mode === "light" ? "#000" : "#fff")}
//               >
//                 <XIcon />
//               </IconButton>

//               <IconButton
//                 href="https://instagram.com"
//                 target="_blank"
//                 sx={iconStyle("#e1306c")}
//               >
//                 <InstagramIcon />
//               </IconButton>

//               <IconButton
//                 href="https://linkedin.com"
//                 target="_blank"
//                 sx={iconStyle("#0a66c2")}
//               >
//                 <LinkedInIcon />
//               </IconButton>
//             </Box>

//             {/* الروابط تحت التواصل */}
//             <Stack spacing={1} mt={1}>
//               <Typography fontWeight="bold">روابط سريعة</Typography>

//               <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
//                 الرئيسية
//               </Link>
//               <Link
//                 to="/calculator"
//                 style={{ color: "inherit", textDecoration: "none" }}
//               >
//                 حاسبة التمويل
//               </Link>
//             </Stack>
//           </Stack>
//         </Grid>

//         {/* العمود الثالث: التغطية + CTA */}
//         <Grid item xs={12} md={4}>
//           <Stack
//             spacing={2}
//             textAlign={{ xs: "center", md: "right" }}
//             alignItems={{ xs: "center", md: "flex-start" }}
//           >
//             <Typography variant="h6" fontWeight="bold">
//               عروضنا العقارية
//             </Typography>

//             <Typography variant="body2" sx={{ opacity: 0.85 }}>
//               نوفر عروض عقارية وتمويلية في <strong>جميع مدن المملكة</strong>،
//               تشمل جميع الأنواع (فلل، شقق، أراضي)،
//               وبمختلف المساحات والأسعار.
//             </Typography>

//             <Typography variant="body2" sx={{ opacity: 0.85 }}>
//               سواء كنت تبحث عن سكن أول أو استثمار عقاري،
//               نحن نوفر لك الحل المناسب.
//             </Typography>

//             <Button
//               variant="contained"
//               startIcon={<SupportAgentIcon />}
//               href="https://wa.me/966508417587"
//               target="_blank"
//               sx={{
//                 mt: 1,
//                 px: 3,
//                 backgroundColor: "#22c55e",
//                 "&:hover": { backgroundColor: "#16a34a" },
//               }}
//             >
//               تواصل لتحصيل العرض
//             </Button>
//           </Stack>
//         </Grid>
//       </Grid>

//       <Divider sx={{ opacity: 0.2 }} />

//       <Box py={3} textAlign="center">
//         <Typography fontSize={13} sx={{ opacity: 0.7 }}>
//           © {new Date().getFullYear()} جميع الحقوق محفوظة — حاسبة التمويل العقاري
//         </Typography>
//       </Box>
//     </Box>
//   );
// }






// import {
//   Box,
//   Grid,
//   Typography,
//   IconButton,
//   Button,
//   Divider,
//   Stack,
// } from "@mui/material";
// import { useContext, useEffect, useRef, useState } from "react";
// import { ColorModeContext } from "../context/ThemeContext";
// import { Link } from "react-router-dom";

// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import XIcon from "@mui/icons-material/X";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";

// import { useMotionValue, animate } from "framer-motion";

// /* =========================
//    Animated Counter
// ========================= */
// function AnimatedNumber({ value, duration = 1.6 }) {
//   const motionValue = useMotionValue(0);
//   const [display, setDisplay] = useState("0");

//   useEffect(() => {
//     const controls = animate(motionValue, value, {
//       duration,
//       ease: "easeOut",
//       onUpdate: (latest) =>
//         setDisplay(Math.round(latest).toLocaleString("en-US")),
//     });
//     return controls.stop;
//   }, [value, duration, motionValue]);

//   return <span>{display}</span>;
// }

// export default function Footer() {
//   const { mode } = useContext(ColorModeContext);

//   const bgColor = mode === "light" ? "#f1f5f9" : "#020617";
//   const textColor = mode === "light" ? "#020617" : "#ffffff";
//   const brandGreen = mode === "light" ? "#166534" : "#4ade80";

//   const statsBg = mode === "light" ? "#f8fafc" : "#0f172a";
//   const statsBorder = mode === "light" ? "#e2e8f0" : "#1e293b";

//   const iconStyle = (color) => ({
//     color,
//     "&:hover": { transform: "translateY(-3px)" },
//   });

//   const statsRef = useRef(null);
//   const [showStats, setShowStats] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setShowStats(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.4 }
//     );
//     if (statsRef.current) observer.observe(statsRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <Box sx={{ backgroundColor: bgColor, color: textColor, direction: "rtl" }}>
//       <Grid container spacing={{ xs: 4, md: 6 }} px={{ xs: 2, md: 6 }} py={6}>

//         {/* ===== العمود الأول: إسكان سلمان + الحاسبة ===== */}
//         <Grid item xs={12} md={4}>
//           <Stack spacing={2} textAlign={{ xs: "center", md: "right" }}>
//             <Typography variant="h5" fontWeight="bold" sx={{ color: brandGreen }}>
//               شركة إسكان سلمان العقارية
//             </Typography>

//             <Typography fontSize={16} sx={{ opacity: 0.9 }}>
//               مؤسسة إسكان سلمان هي مؤسسة ذات مسئولية محدودة تأسست عام <strong>2010م</strong>،
//               وتهدف إلى مواكبة احتياجات السوق العقاري السعودي من خلال حلول تمويلية
//               وتسويقية مبتكرة.
//             </Typography>

//             <Divider sx={{ opacity: 0.25 }} />

//             <Typography variant="h6" fontWeight="bold">
//               حاسبة التمويل العقاري
//             </Typography>

//             <Typography fontSize={16} sx={{ opacity: 0.9 }}>
//               نوفر لك أداة احترافية لحساب قدرتك التمويلية، القسط الشهري،
//               ونسبة الاستقطاع مع إمكانية المقارنة بين أفضل الجهات التمويلية.
//             </Typography>
//           </Stack>
//         </Grid>

//         {/* ===== العمود الثاني: التواصل + الروابط ===== */}
//         <Grid item xs={12} md={4}>
//           <Stack spacing={3} alignItems={{ xs: "center", md: "flex-start" }}>
//             <Typography variant="h5" fontWeight="bold" sx={{ color: brandGreen }}>
//               وسائل التواصل
//             </Typography>

//             <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
//               <IconButton href="https://wa.me/966508417587" sx={iconStyle("#22c55e")}>
//                 <WhatsAppIcon />
//               </IconButton>
//               <IconButton href="tel:+966508417587" sx={iconStyle("#0284c7")}>
//                 <PhoneIcon />
//               </IconButton>
//               <IconButton href="mailto:info@example.com" sx={iconStyle("#f97316")}>
//                 <EmailIcon />
//               </IconButton>
//               <IconButton href="https://x.com" sx={iconStyle(textColor)}>
//                 <XIcon />
//               </IconButton>
//               <IconButton href="https://instagram.com" sx={iconStyle("#e1306c")}>
//                 <InstagramIcon />
//               </IconButton>
//               <IconButton href="https://linkedin.com" sx={iconStyle("#0a66c2")}>
//                 <LinkedInIcon />
//               </IconButton>
//             </Box>

//             <Divider sx={{ width: "100%", opacity: 0.2 }} />

//             <Stack spacing={1}>
//               <Typography fontWeight="bold">روابط سريعة</Typography>
//               <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
//                 الرئيسية
//               </Link>
//               <Link to="/calculator" style={{ color: "inherit", textDecoration: "none" }}>
//                 حاسبة التمويل
//               </Link>
//             </Stack>
//           </Stack>
//         </Grid>

//         {/* ===== العمود الثالث: أرقام الثقة + CTA ===== */}
//         <Grid item xs={12} md={4}>
//           <Stack spacing={2} textAlign={{ xs: "center", md: "right" }}>
//             <Typography variant="h5" fontWeight="bold" sx={{ color: brandGreen }}>
//               أرقام تعكس الثقة
//             </Typography>

//             <Box
//               ref={statsRef}
//               sx={{
//                 p: 2.5,
//                 borderRadius: "16px",
//                 backgroundColor: statsBg,
//                 border: `1px solid ${statsBorder}`,
//               }}
//             >
//               <Grid container spacing={2} textAlign="center">
//                 <Grid item xs={4}>
//                   <Typography fontSize={22} fontWeight="bold">
//                     +{showStats && <AnimatedNumber value={5000} />}
//                   </Typography>
//                   <Typography fontSize={13}>عميل</Typography>
//                 </Grid>
//                 <Grid item xs={4}>
//                   <Typography fontSize={22} fontWeight="bold">
//                     {showStats && <AnimatedNumber value={92} />}%
//                   </Typography>
//                   <Typography fontSize={13}>نسبة قبول</Typography>
//                 </Grid>
//                 <Grid item xs={4}>
//                   <Typography fontSize={22} fontWeight="bold">
//                     {showStats && <AnimatedNumber value={15} />}+
//                   </Typography>
//                   <Typography fontSize={13}>جهة تمويل</Typography>
//                 </Grid>
//               </Grid>
//             </Box>

//             <Button
//               size="large"
//               variant="contained"
//               startIcon={<SupportAgentIcon />}
//               href="https://wa.me/966508417587"
//               sx={{
//                 mt: 2,
//                 fontWeight: "bold",
//                 backgroundColor: brandGreen,
//                 "&:hover": {
//                   backgroundColor: mode === "light" ? "#14532d" : "#22c55e",
//                 },
//               }}
//             >
//               تواصل لتحصيل أفضل عرض
//             </Button>
//           </Stack>
//         </Grid>
//       </Grid>

//       <Divider sx={{ opacity: 0.2 }} />

//       <Box py={3} textAlign="center">
//         <Typography fontSize={14} sx={{ opacity: 0.7 }}>
//           © {new Date().getFullYear()} جميع الحقوق محفوظة — إسكان سلمان العقارية
//         </Typography>
//       </Box>
//     </Box>
//   );
// }
















import {
  Box,
  Grid,
  Typography,
  IconButton,
  Button,
  Divider,
  Stack,
  Chip,
  Container,
} from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { ColorModeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import XIcon from "@mui/icons-material/X";


import { useMotionValue, animate } from "framer-motion";

/* Animated Counter */
function AnimatedNumber({ value }) {
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 1.6,
      onUpdate: (latest) =>
        setDisplay(Math.round(latest).toLocaleString("en-US")),
    });
    return controls.stop;
  }, [value, motionValue]);

  return <span>{display}</span>;
}

export default function Footer() {
  const { mode } = useContext(ColorModeContext);

  const bgColor = mode === "light" ? "#e7f3ff" : "#020617";
  const textColor = mode === "light" ? "#020617" : "#ffffff";
        // const brandGreen = mode === "light" ? "#166534" : "#4ade80";


   const brandGreen = mode === "light" ? "#220f9c" : "#685ce5ff";

    const brandGreenSend = mode === "light" ? "#166534" : "#202c61";

     const linkHoverColor = mode === "light" ? brandGreen : "#60a5fa";

     const statsBg = mode === "light" ? "#f8fafc" : "#0f172a";
       const statsBorder = mode === "light" ? "#e2e8f0" : "#1e293b";

  const iconStyle = (color) => ({
    color,
    transition: "0.3s",
    "&:hover": { transform: "translateY(-4px)" },
  });


//   const iconStyle2 = (color) => ({
//   position: "relative",
//   width: 48,
//   height: 48,
//   borderRadius: "50%",
//   overflow: "hidden",
//   color: color,
//   zIndex: 0,
//   transition: "color 0.3s ease",

//   "& svg": {
//     position: "relative",
//     zIndex: 2,
//     transition: "color 0.3s ease",
//   },

//   "&::before": {
//     content: '""',
//     position: "absolute",
//     left: 0,
//     right: 0,
//     bottom: 0,
//     height: "100%",
//     background: mode === "light" ? "linear-gradient(to top, #25d366, #4ade80)":"linear-gradient(to top, #047a2fff, #023d17ff)",
//     transform: "translateY(100%)",
  
//     transition: "transform 0.75s cubic-bezier(.66, 0, .34, 1)",

//     zIndex: 1,
//   },

//   "@media (hover: hover)": {
//     "&:hover": {
//       color: mode === "light" ?"#000":"#fff",
//     },
//     "&:hover::before": {
//       transform: "translateY(0)",
//     },
//   },
// });


const iconStyle2 = (color) => ({
  position: "relative",
  width: 48,
  height: 48,
  borderRadius: "50%",
  overflow: "visible", // علشان النص
  color,
  zIndex: 1,
  transition: "color 0.3s ease",

  "& svg": {
    position: "relative",
    zIndex: 3,
  },

  /* تعبئة الدائرة (مخفية بالقص) */
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    background:
      mode === "light"
        // ? "linear-gradient(to top, #25d366, #4ade80)"
        // : "linear-gradient(to top, #047a2f, #023d17)",
             ? "linear-gradient(to top, #3f25d3ff, #2d1befff)"
        : "linear-gradient(to top, #191cae8d, #220f9cc9)",
    clipPath: "inset(100% 0 0 0)", // مخفية بالكامل
    transition: "clip-path 0.8s cubic-bezier(.66,0,.34,1)",
    zIndex: 1,
  },

  /* اسم المنصّة */
  "&::after": {
    content: "attr(data-label)",
    position: "absolute",
    top: "-34px",
    left: "50%",
    transform: "translateX(-50%) translateY(6px)",
    opacity: 0,
    pointerEvents: "none",
    whiteSpace: "nowrap",
    fontSize: 12,
    padding: "4px 8px",
    borderRadius: 6,
    backgroundColor: mode === "light" ? "#ffffff" : "#1f2937",
    color: mode === "light" ? "#000000" : "#ffffff",
    boxShadow:
      mode === "light"
        ? "0 4px 10px rgba(0,0,0,.15)"
        : "0 4px 12px rgba(0,0,0,.6)",
    transition: "all 0.25s ease",
    zIndex: 10,
  },

  "@media (hover: hover)": {
    "&:hover": {
      color: mode === "light" ? "#000" : "#fff",
    },
    "&:hover::before": {
      clipPath: "inset(0 0 0 0)", // تعبئة من أسفل للأعلى
    },
    "&:hover::after": {
      opacity: 1,
      transform: "translateX(-50%) translateY(0)",
    },
  },
});






  const statsRef = useRef(null);
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowStats(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box component="footer" className="nofocuse" sx={{ backgroundColor: bgColor, color: textColor }}>
      
      {/* ✅ Container الحقيقي */}
      <Container maxWidth="lg" sx={{ py: 6, direction: "rtl" }}>
        <Grid container spacing={4}>

          {/* العمود الأول */}
          <Grid item xs={12} md={4} sx={{ minWidth: 0 }} className="max-wid-disk">
            <Stack spacing={2}>
              <Typography variant="h5" fontWeight="bold" sx={{ color: brandGreen }}>
                شركة إسكان سلمان العقارية
              </Typography>

              <Typography
                fontSize={15}
                sx={{
                  lineHeight: 1.9,
                
                }}
              >
                مؤسسة إسكان سلمان هي مؤسسة ذات مسئولية محدودة تأسست عام{" "}
                <strong>2010م</strong>، وتهدف إلى مواكبة احتياجات السوق العقاري
                السعودي من خلال حلول تمويلية وتسويقية مبتكرة.
              </Typography>

              <Divider />

              <Typography variant="h6" fontWeight="bold" sx={{ color: brandGreen }}>
                حاسبة التمويل العقاري
              </Typography>

              <Typography fontSize={15} sx={{ lineHeight: 1.9 }}>
                نوفر لك أداة احترافية لحساب قدرتك التمويلية، القسط الشهري،
                و مع  مقارنة أفضل الجهات التمويلية.
              </Typography>
            </Stack>
          </Grid>

          {/* العمود الثاني */}
          <Grid item xs={12} md={4} sx={{ minWidth: 0 }} className="max-wid-disk">
            <Stack spacing={3}>
              <Typography variant="h5" fontWeight="bold" sx={{ color: brandGreen  }}>
                وسائل التواصل
              </Typography>

              <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap"  }}>
                <IconButton sx={iconStyle2("#22c55e")} 
                    href="https://wa.me/966508417587?text=مرحبا، أود الاستفسار عن التمويل العقاري"
                       target="_blank"
                         data-label="واتساب"
                       ><WhatsAppIcon /></IconButton>
                <IconButton sx={iconStyle2("#0284c7")}
                
                
                  href="https://wa.me/966508417587?text=مرحبا، أود الاستفسار عن التمويل العقاري"
                   target="_blank"
                     data-label="اتصال"
                ><PhoneIcon 
                /></IconButton>
                <IconButton sx={iconStyle2("#f97316")}
                
                href="alaaelgad6@gmail.com"
                 target="_blank"
  data-label="الايميل"
                ><EmailIcon /></IconButton>
                <IconButton sx={iconStyle2("#e1306c")}
                
                href="https://instagram.com" target="_blank"
                  data-label="انستجرام"

                ><InstagramIcon /></IconButton>
                <IconButton sx={iconStyle2("#0a66c2")}
                   href="https://linkedin.com" target="_blank" 
                     data-label="لينكدان"
                ><LinkedInIcon /></IconButton>
                 <IconButton sx={iconStyle2(mode==="light"?"black":"#ffffff")}
              href="https://x.com"
              target="_blank"
                data-label="توتير - x"
                 
                 ><XIcon /></IconButton>


              </Box>

              <Divider />

<Stack spacing={1}>
  <Typography fontWeight="bold" sx={{ color: brandGreen }}>
    روابط سريعة
  </Typography>

  <Link to="/eskana" style={{ textDecoration: "none" }}>
    <Typography
      sx={{
        color: textColor,
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          color: linkHoverColor,
          transform: "translateX(-3px)",
            textDecoration: "underline",
          textUnderlineOffset: "4px",
        },
      }}
    >
      الرئيسية
    </Typography>
  </Link>

  <Link to="/mycalculator" style={{ textDecoration: "none" }}>
    <Typography
      sx={{
        color: textColor,
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          color: linkHoverColor,
          transform: "translateX(-3px)",
     
  textDecoration: "underline",
  textUnderlineOffset: "4px",
        },
      }}
    >
      حاسبة التمويل
    </Typography>
  </Link>

    <Link to="/offerss" style={{ textDecoration: "none" }}>
    <Typography
      sx={{
        color: textColor,
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          color: linkHoverColor,
          transform: "translateX(-3px)",
     
  textDecoration: "underline",
  textUnderlineOffset: "4px",
        },
      }}
    >
       العروض
    </Typography>
  </Link>


</Stack>


            </Stack>
          </Grid>

          {/* العمود الثالث */}
          <Grid item xs={12} md={4} sx={{ minWidth: 0 }} className="max-wid-disk">
            <Stack spacing={2}>
              <Typography variant="h5" fontWeight="bold" sx={{ color: brandGreen }}>
                أرقام تعكس الثقة
              </Typography>

              <Stack direction="row" spacing={1}>
                <Chip label="الأفضل" color="success" size="small" />
                <Chip label="موثوق" color="info" size="small" style={{marginRight:"10px" , marginLeft:"0px"}} />
                <Chip label="معتمد" color="warning" size="small" style={{marginRight:"10px"}}/>
              </Stack>

              <Box
                ref={statsRef}
                sx={{
                  p: 2.5,
                  borderRadius: 2,
                  backgroundColor: statsBg,
                  border: `1px solid ${statsBorder}`,
                }}
              >
                <Grid container textAlign="center">
                  <Grid item xs={4}>
                    <Typography fontWeight="bold">
                      +{showStats && <AnimatedNumber value={5000} />}
                    </Typography>
                    <Typography fontSize={13}>عميل</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography fontWeight="bold" style={{marginRight:"8px"}}>
                      {showStats && <AnimatedNumber value={92} />}%
                    </Typography>
                    <Typography fontSize={13} style={{marginRight:"10px"}}>نسبة قبول</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography fontWeight="bold">
                      {showStats && <AnimatedNumber value={15} />}+
                    </Typography>
                    <Typography fontSize={13} style={{marginRight:"10px"}}>جهة تمويل</Typography>
                  </Grid>
                </Grid>
              </Box>

              <Button
              variant="contained"
              href="https://wa.me/966508417587?text=أرغب بالحصول على استشارة تمويلية"
              target="_blank"
                startIcon={<SupportAgentIcon />}
                sx={{ backgroundColor: brandGreenSend }}
              >
                تواصل لتحصيل أفضل عرض
              </Button>
            </Stack>
          </Grid>

        </Grid>
      </Container>

      <Divider />

      <Box py={3} textAlign="center">
        <Typography fontSize={14} sx={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} جميع الحقوق محفوظة — إسكان سلمان العقارية
        </Typography>
      </Box>
    </Box>
  );
}
