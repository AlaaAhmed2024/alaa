import { Box, Typography, Divider, IconButton, Tooltip, Snackbar, } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";


import { Helmet } from "react-helmet";
import HomeIcon from "@mui/icons-material/Home";
import ShareIcon from "@mui/icons-material/Share";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { ColorModeContext } from "../Context/ThemeContext";
import newsData from "./HomeNewsData";

export default function NewsDetails() {
  const { id } = useParams();
  const { mode } = useContext(ColorModeContext);


 const [darkSide, setShwoDarkSide] = useState(() => mode === "dark")
    useEffect(() => {
      
    setShwoDarkSide(mode === "dark");
  }, [mode]);

  
  function handelDarkSide() {
    // setShwoDarkSide(!darkSide);
    const newMode = !darkSide;
  setShwoDarkSide(newMode);
  localStorage.setItem("darkMode", newMode); // حفظ الوضع
  }


  if (!darkSide) {

      var bg1="#2563eb" 
      var bc2="#1e293b"
      var tex1="#e5e7eb"
      var textHover1="#1e40af" 

      var bw1="#0e0588ff" 
      var bgcid =  "loan-form-home-details-dark"

  }else{

    var bg1="#1d4ed8"
    var bc2="#0c3a68"
    var tex1=  "#020617"
    var textHover1="#1e3a8a"
 var bw1= "#0c3a68ff"

 var bgcid="loan-form-home-details"
  }






  const navigate = useNavigate();
const [hoverHome, setHoverHome] = useState(false);
 console.log("newsData:", newsData, Array.isArray(newsData));
  const news = newsData.find((n) => n.id === Number(id));
 
  const [openSnack, setOpenSnack] = useState(false);

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
    <div id={bgcid}>
      <Helmet>
        <title>{news.name}</title>
        <meta name="description" content={news.name} />
      </Helmet>

      <Box sx={{ maxWidth: 900, mx: "auto", px: 2, py: 8 }}>
        {/* العنوان مع زر المشاركة */}
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h4" fontWeight="bold" sx={{padding: "5px 15px"}} >
            {news.name}
          </Typography>
          <Tooltip title="مشاركة على المنصات" arrow>
            <IconButton
              onClick={() => setOpenSnack(true)}
              sx={{
                backgroundColor: bg1,
                color: "#fff",
                "&:hover": {
                  backgroundColor: textHover1,
                },
              }}
            >
              <ShareIcon />
            </IconButton>
          </Tooltip>
        </Box>

        {/* المصدر */}
        <Typography sx={{color: tex1 ,opacity: 0.7, mb: 2 }}>
          {news.source} • {news.lastUpdated} • {news.time}
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
      backgroundColor: bc2,
      color: "#fff",
    }}
  >
    العودة للرئيسية
  </div>

  {/* زر الهوم */}
  <IconButton
    onClick={() => navigate("/start")}
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
        {/* <Box
          component="img"
          src={news.bankLogo}
          alt={news.name}
          sx={{ width: "100%", borderRadius: 3, mb: 4 }}
        /> */}

        <Box
  component="img"
  src={news.bankLogo}
  alt={news.name}
  sx={{
    width: "40%",              // حجم أصغر للصورة
    height: "auto",
    display: "block",
    mx: "auto",              // توسيط أفقي
    mb: 4,
    borderRadius: 2,

    // في الوضع الداكن
    filter: !darkSide? "brightness(0) invert(1)" : "none",
  }}
/>


        {/* المحتوى */}
        <Typography
          sx={{
            whiteSpace: "pre-line",
            lineHeight: 1.9,
            fontSize: 17,
            color: tex1,
          }}
        >
          {news.note}
        </Typography>

        {/* Snackbar يظهر أيقونات المشاركة */}
        <Snackbar
          open={openSnack}
            ContentProps={{
    sx: {
      backgroundColor:bw1, // لون الخلفية
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
              <IconButton onClick={() => handleShare("copy")} sx={{ color: tex1 }}>
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
    bottom: "50px",
    left: "20px",
    zIndex: 1000,
  },
  tooltip: {
    position: "absolute",
    left: "65px", // ← النص على يسار الأيقونة
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
