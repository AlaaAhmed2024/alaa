// import { Box, Typography, Divider, IconButton ,Tooltip} from "@mui/material";
// import { Navigate, useParams } from "react-router-dom";
// import { useContext } from "react";
// import { ColorModeContext } from "../context/ThemeContext";
// import newsData from "../components/newsData";
// import { Helmet } from "react-helmet";

//         import HomeIcon from "@mui/icons-material/Home";

// import { useNavigate } from "react-router-dom";



// import { motion } from "framer-motion";


// export default function NewsDetails() {
//   const { id } = useParams();
//   const { mode } = useContext(ColorModeContext);
// const navigate = useNavigate()


//   const news = newsData.find((n) => n.id === Number(id));

//   if (!news) {
//     return (
//       <Typography align="center" mt={10}>
//         الخبر غير موجود
//       </Typography>
//     );
//   }

//   return (
//     <>
//       {/* SEO */}
//       <Helmet>
//         <title>{news.title}</title>
//         <meta name="description" content={news.title} />
//       </Helmet>

//       <Box
//         sx={{
//           maxWidth: 900,
//           mx: "auto",
//           px: 2,
//           py: 8,
//         }}
//       >
//         {/* Title */}
//         <Typography variant="h4" fontWeight="bold" mb={2}>
//           {news.title}
//         </Typography>

//         {/* Meta */}
//         <Typography sx={{ opacity: 0.7 }} mb={2}>
//           {news.source} • {news.date} • {news.time}
//         </Typography>



// <IconButton
//   onClick={() => navigate("/")}
//   sx={{
//     position: "fixed",
//     bottom: 90,
//     right: 20,
//     backgroundColor: "#2563eb",
//     color: "#fff",
//     width: 55,
//     height: 55,
//     "&:hover": {
//       backgroundColor: "#1d4ed8",
//     },
//   }}
// >
//   <HomeIcon />
// </IconButton>


//         <Divider sx={{ mb: 4 }} />


//         {/* Image */}
//         <Box
//           component="img"
//           src={news.image}
//           alt={news.title}
//           sx={{
//             width: "100%",
//             borderRadius: 3,
//             mb: 4,
//           }}
//         />

//         {/* Content */}
//         <Typography
//           sx={{
//             whiteSpace: "pre-line",
//             lineHeight: 1.9,
//             fontSize: 17,
//             color: mode === "dark" ? "#e5e7eb" : "#020617",
//           }}
//         >
//           {news.content}
//         </Typography>
//       </Box>
//     </>
//   );
// }





// import { Box, Typography, Divider, IconButton, Tooltip, Button, Snackbar } from "@mui/material";
// import { useParams, useNavigate } from "react-router-dom";
// import { useContext, useState, useEffect } from "react";
// import { ColorModeContext } from "../context/ThemeContext";
// import newsData from "../components/newsData";
// import { Helmet } from "react-helmet";
// import HomeIcon from "@mui/icons-material/Home";
// import ShareIcon from "@mui/icons-material/Share";

// export default function NewsDetails() {
//   const { id } = useParams();
//   const { mode } = useContext(ColorModeContext);
//   const navigate = useNavigate();

//   const news = newsData.find((n) => n.id === Number(id));

//   // حالة Snackbar للمشاركة
//   const [openShare, setOpenShare] = useState(false);
//   const [shareMessage, setShareMessage] = useState("");

//   useEffect(() => {
//     if (!news) return;
//     // أي effect آخر تريد تنفيذه عند تحميل الخبر
//   }, [news]);

//   if (!news) {
//     return (
//       <Typography align="center" mt={10}>
//         الخبر غير موجود
//       </Typography>
//     );
//   }

//   const handleShare = (platform) => {
//     let url = encodeURIComponent(window.location.href);
//     let text = encodeURIComponent(news.title);

//     if (platform === "whatsapp") {
//       window.open(`https://wa.me/?text=${text}%20${url}`, "_blank");
//     } else if (platform === "x") {
//       window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
//     } else if (platform === "instagram") {
//       // Instagram لا يدعم المشاركة عبر رابط مباشر، يمكن إضافة alert
//       alert("Instagram لا يدعم المشاركة عبر الويب مباشرة.");
//     }
//     setShareMessage(`تم المشاركة على ${platform}`);
//     setOpenShare(true);
//   };

//   return (
//     <>
//       <Helmet>
//         <title>{news.title}</title>
//         <meta name="description" content={news.title} />
//       </Helmet>

//       <Box sx={{ maxWidth: 900, mx: "auto", px: 2, py: 8 }}>
//         {/* Title */}
//         <Typography variant="h4" fontWeight="bold" mb={2}>
//           {news.title}
//         </Typography>

//         {/* Meta */}
//         <Typography sx={{ opacity: 0.7 }} mb={2}>
//           {news.source} • {news.date} • {news.time}
//         </Typography>

//         {/* زر العودة للصفحة الرئيسية */}
//         <Tooltip title="العودة للرئيسية">
//           <IconButton
//             onClick={() => navigate("/")}
//             sx={{
//               position: "fixed",
//               bottom: 90,
//               right: 20,
//               backgroundColor: "#2563eb",
//               color: "#fff",
//               width: { xs: 45, sm: 55 },
//               height: { xs: 45, sm: 55 },
//               "&:hover": { backgroundColor: "#1d4ed8" },
//             }}
//           >
//             <HomeIcon />
//           </IconButton>
//         </Tooltip>

//         <Divider sx={{ mb: 4 }} />

//         {/* Image */}
//         <Box
//           component="img"
//           src={news.image}
//           alt={news.title}
//           sx={{ width: "100%", borderRadius: 3, mb: 4 }}
//         />

//         {/* Content */}
//         <Typography
//           sx={{
//             whiteSpace: "pre-line",
//             lineHeight: 1.9,
//             fontSize: 17,
//             color: mode === "dark" ? "#e5e7eb" : "#020617",
//           }}
//         >
//           {news.content}
//         </Typography>

//         {/* أزرار المشاركة */}
//         <Box mt={4} display="flex" gap={2}>
//           <Button
//             variant="contained"
//             color={mode === "dark" ? "secondary" : "primary"}
//             startIcon={<ShareIcon />}
//             onClick={() => handleShare("whatsapp")}
//           >
//             WhatsApp
//           </Button>
//           <Button
//             variant="contained"
//             color={mode === "dark" ? "secondary" : "primary"}
//             startIcon={<ShareIcon />}
//             onClick={() => handleShare("x")}
//           >
//             X
//           </Button>
//           <Button
//             variant="contained"
//             color={mode === "dark" ? "secondary" : "primary"}
//             startIcon={<ShareIcon />}
//             onClick={() => handleShare("instagram")}
//           >
//             Instagram
//           </Button>
//         </Box>

//         {/* Snackbar */}
//         <Snackbar
//           open={openShare}
//           autoHideDuration={3000}
//           onClose={() => setOpenShare(false)}
//           message={shareMessage}
//           anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//         />
//       </Box>
//     </>
//   );
// }



// import { Box, Typography, Divider, IconButton, Tooltip, Snackbar } from "@mui/material";
// import { useParams, useNavigate } from "react-router-dom";
// import { useContext, useState } from "react";
// import { ColorModeContext } from "../context/ThemeContext";
// import newsData from "../components/newsData";
// import { Helmet } from "react-helmet";
// import HomeIcon from "@mui/icons-material/Home";
// import ShareIcon from "@mui/icons-material/Share";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// export default function NewsDetails() {
//   const { id } = useParams();
//   const { mode } = useContext(ColorModeContext);
//   const navigate = useNavigate();

//   const news = newsData.find((n) => n.id === Number(id));

//   const [openSnack, setOpenSnack] = useState(false);

//   if (!news) {
//     return (
//       <Typography align="center" mt={10}>
//         الخبر غير موجود
//       </Typography>
//     );
//   }

//   const handleShare = (platform) => {
//     const url = window.location.href;
//     const text = news.title;

//     switch (platform) {
//       case "whatsapp":
//         window.open(`https://wa.me/?text=${encodeURIComponent(text)}%20${encodeURIComponent(url)}`, "_blank");
//         break;
//       case "x":
//         window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank");
//         break;
//       case "instagram":
//         // Instagram لا يدعم المشاركة عبر الرابط المباشر، يمكن إضافة النسخ
//         break;
//       case "copy":
//         navigator.clipboard.writeText(url);
//         break;
//       default:
//         break;
//     }

//     setOpenSnack(false); // إغلاق المودال بعد الضغط على أي أيقونة
//   };

//   return (
//     <>
//       <Helmet>
//         <title>{news.title}</title>
//         <meta name="description" content={news.title} />
//       </Helmet>

//       <Box sx={{ maxWidth: 900, mx: "auto", px: 2, py: 8 }}>
//         {/* العنوان */}
//         <Typography variant="h4" fontWeight="bold" mb={2}>
//           {news.title}
//         </Typography>

//         {/* المصدر */}
//         <Typography sx={{ opacity: 0.7 }} mb={2}>
//           {news.source} • {news.date} • {news.time}
//         </Typography>

//         {/* زر العودة للرئيسية */}
//         <Tooltip title="العودة للرئيسية">
//           <IconButton
//             onClick={() => navigate("/")}
//             sx={{
//               position: "fixed",
//               bottom: 90,
//               right: 20,
//               backgroundColor: "#2563eb",
//               color: "#fff",
//               width: { xs: 45, sm: 55 },
//               height: { xs: 45, sm: 55 },
//               "&:hover": { backgroundColor: "#1d4ed8" },
//             }}
//           >
//             <HomeIcon />
//           </IconButton>
//         </Tooltip>

//         <Divider sx={{ mb: 4 }} />

//         {/* الصورة */}
//         <Box
//           component="img"
//           src={news.image}
//           alt={news.title}
//           sx={{ width: "100%", borderRadius: 3, mb: 4 }}
//         />

//         {/* المحتوى */}
//         <Typography
//           sx={{
//             whiteSpace: "pre-line",
//             lineHeight: 1.9,
//             fontSize: 17,
//             color: mode === "dark" ? "#e5e7eb" : "#020617",
//           }}
//         >
//           {news.content}
//         </Typography>

//         {/* زر المشاركة العام */}
//         <Tooltip title="مشاركة على المنصات" arrow>
//           <IconButton
//             onClick={() => setOpenSnack(true)}
//             sx={{
//               position: "fixed",
//               bottom: 20,
//               left: 20,
//               backgroundColor: mode === "dark" ? "#2563eb" : "#1d4ed8",
//               color: "#fff",
//               width: { xs: 45, sm: 55 },
//               height: { xs: 45, sm: 55 },
//               "&:hover": {
//                 backgroundColor: mode === "dark" ? "#1e40af" : "#1e3a8a",
//               },
//             }}
//           >
//             <ShareIcon />
//           </IconButton>
//         </Tooltip>

//         {/* Snackbar يظهر أيقونات المشاركة */}
//         <Snackbar
//           open={openSnack}
//           onClose={() => setOpenSnack(false)}
//           anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//           message={
//             <Box display="flex" gap={1}>
//               <IconButton onClick={() => handleShare("whatsapp")} sx={{ color: "#25D366" }}>
//                 <WhatsAppIcon />
//               </IconButton>
//               <IconButton onClick={() => handleShare("x")} sx={{ color: "#1DA1F2" }}>
//                 <TwitterIcon />
//               </IconButton>
//               <IconButton onClick={() => handleShare("instagram")} sx={{ color: "#E4405F" }}>
//                 <InstagramIcon />
//               </IconButton>
//               <IconButton onClick={() => handleShare("copy")} sx={{ color: mode === "dark" ? "#fff" : "#000" }}>
//                 <ContentCopyIcon />
//               </IconButton>
//             </Box>
//           }
//         />
//       </Box>
//     </>
//   );
// }



import { Box, Typography, Divider, IconButton, Tooltip, Snackbar, } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ColorModeContext } from "../context/ThemeContext";
import newsData from "../components/newsData";
import { Helmet } from "react-helmet";
import HomeIcon from "@mui/icons-material/Home";
import ShareIcon from "@mui/icons-material/Share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function NewsDetails() {
  const { id } = useParams();
  const { mode } = useContext(ColorModeContext);
  const navigate = useNavigate();
const [hoverHome, setHoverHome] = useState(false);


  const news = newsData.find((n) => n.id === Number(id));
  const [openSnack, setOpenSnack] = useState(false);
console.log("newsData:", newsData, Array.isArray(newsData));
  if (!news) {
    return (
      <Typography align="center" mt={10}>
        الخبر غير موجود
      </Typography>
    );
  }

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = news.title;

    switch (platform) {
      case "whatsapp":
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}%20${encodeURIComponent(url)}`, "_blank");
        break;
      case "x":
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank");
        break;
      case "instagram":
        break; // Instagram لا يدعم الرابط المباشر
      case "copy":
        navigator.clipboard.writeText(url);
        break;
      default:
        break;
    }
    setOpenSnack(false); // إغلاق Snackbar بعد الضغط على أي أيقونة
  };

  return (
    <div style={{backgroundColor:mode==="dark"?"#121212":""}}>
      <Helmet>
        <title>{news.title}</title>
        <meta name="description" content={news.title} />
      </Helmet>

      <Box sx={{ maxWidth: 900, mx: "auto", px: 2, py: 8 }}>
        {/* العنوان مع زر المشاركة */}
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h4" fontWeight="bold">
            {news.title}
          </Typography>
          <Tooltip title="مشاركة على المنصات" arrow>
            <IconButton
              onClick={() => setOpenSnack(true)}
              sx={{
                backgroundColor: mode === "dark" ? "#2563eb" : "#1d4ed8",
                color: "#fff",
                "&:hover": {
                  backgroundColor: mode === "dark" ? "#1e40af" : "#1e3a8a",
                },
              }}
            >
              <ShareIcon />
            </IconButton>
          </Tooltip>
        </Box>

        {/* المصدر */}
        <Typography sx={{ opacity: 0.7, mb: 2 }}>
          {news.source} • {news.date} • {news.time}
        </Typography>

        {/* زر العودة للرئيسية */}
        {/* <Tooltip title="العودة للرئيسية">
          <IconButton
            onClick={() => navigate("/")}
            sx={{
              position: "fixed",
              bottom: 90,
              right: 20,
              backgroundColor: "#2563eb",
              color: "#fff",
              width: { xs: 45, sm: 55 },
              height: { xs: 45, sm: 55 },
              "&:hover": { backgroundColor: "#1d4ed8" },
            }}
          >
            <HomeIcon />
          </IconButton>
        </Tooltip> */}

        <div
  style={homeStyles.container}
  onMouseEnter={() => setHoverHome(true)}
  onMouseLeave={() => setHoverHome(false)}
>
  {/* النص عند الهوفر */}
  <div
    style={{
      ...homeStyles.tooltip,
      opacity: hoverHome ? 1 : 0,
      transform: hoverHome
        ? "translateY(-50%) translateX(0)"
        : "translateY(-50%) translateX(10px)",
      backgroundColor: mode === "dark" ? "#1e293b" : "#0c3a68",
      color: "#fff",
    }}
  >
    العودة للرئيسية
  </div>

  {/* زر الهوم */}
  <IconButton
    onClick={() => navigate("/eskana")}
    sx={{
      backgroundColor: "#2563eb",
      color: "#fff",
      width: { xs: 45, sm: 55 },
      height: { xs: 45, sm: 55 },
      "&:hover": { backgroundColor: "#1d4ed8" },
    }}
  >
    <HomeIcon />
  </IconButton>
</div>


        <Divider sx={{ mb: 4 }} />

        {/* الصورة */}
        <Box
          component="img"
          src={news.image}
          alt={news.title}
          sx={{ width: "100%", borderRadius: 3, mb: 4 }}
        />

        {/* المحتوى */}
        <Typography
          sx={{
            whiteSpace: "pre-line",
            lineHeight: 1.9,
            fontSize: 17,
            color: mode === "dark" ? "#e5e7eb" : "#020617",
          }}
        >
          {news.content}
        </Typography>

        {/* Snackbar يظهر أيقونات المشاركة */}
        <Snackbar
          open={openSnack}
            ContentProps={{
    sx: {
      backgroundColor: mode === "dark" ? "#0e0588ff" : "#0c3a68ff", // لون الخلفية
      color: "#fff", // لون النص
      "&:hover": {
        backgroundColor: "#0e305eff", // لون عند المرور أو الضغط
      },
    },
  }}
        
          onClose={() => setOpenSnack(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          message={
            <Box display="flex" gap={1} >
              <IconButton onClick={() => handleShare("whatsapp")} sx={{ color: "#25D366" }}>
                <WhatsAppIcon />
              </IconButton>
              <IconButton onClick={() => handleShare("x")} sx={{ color: "#030303ff" }}>
                <XIcon />
              </IconButton>
              <IconButton onClick={() => handleShare("instagram")} sx={{ color: "#E4405F" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton onClick={() => handleShare("copy")} sx={{ color: mode === "dark" ? "#fff" : "#000" }}>
                <ContentCopyIcon />
              </IconButton>
            </Box>
          }
        />
      </Box>
    </div>
  );
}






const homeStyles = {
  container: {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    zIndex: 1000,
  },
  tooltip: {
    position: "absolute",
    right: "65px", // ← النص على يسار الأيقونة
    top: "50%",
    transform: "translateY(-50%) translateX(10px)",
    padding: "6px 12px",
    borderRadius: "6px",
    whiteSpace: "nowrap",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    fontSize: "14px",
    transition: "opacity 0.3s ease, transform 0.3s ease",
    pointerEvents: "none",
  },
};
