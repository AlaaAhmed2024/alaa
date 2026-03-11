

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

import { Link } from "react-router-dom";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import XIcon from "@mui/icons-material/X";


import { useMotionValue, animate } from "framer-motion";
import { ColorModeContext } from "../Context/ThemeContext";

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

export default function HomeFooter() {
  const { mode } = useContext(ColorModeContext);


 
  
  
 const [darkSide, setShwoDarkSide] = useState(() => mode === "dark")
    useEffect(() => {
      
    setShwoDarkSide(mode === "dark");
  }, [mode]);


//   }


if(darkSide){
var bgColor =  "#e7f3ff" 
var textColor = "#020617"

   var brandGreen =  "#220f9c" 

 var brandGreenSend = "#166534" 

 
  var linkHoverColor =  "#220f9c"

 var statsBg =  "#f8fafc" 

       var statsBorder = "#e2e8f0" 
         var    bgColor2="linear-gradient(to top, #3f25d3ff, #2d1befff)"


         
       var colorHov  = "#000" 


       
        var bgc1= "#ffffff" 
       var col1= "#000000" 
      
       var box1=     "0 4px 10px rgba(0,0,0,.15)"
}else{
var bgColor =  "#020617"
var textColor = "#ffffff";
   var brandGreen =  "#685ce5ff";

    var brandGreenSend = "#202c61"
     var linkHoverColor = "#60a5fa";
      var statsBg = "#0f172a";
            var statsBorder = "#1e293b";
         var    bgColor2="linear-gradient(to top, #191cae8d, #220f9cc9)"

       var colorHov  =  "#fff"

        var bgc1=  "#1f2937"
       var col1=  "#ffffff"
      
       var box1=     "0 4px 12px rgba(0,0,0,.6)"
       
}



  

    
 

  const iconStyle = (color) => ({
    color,
    transition: "0.3s",
    "&:hover": { transform: "translateY(-4px)" },
  });





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
    background:bgColor2,
  
   
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
    backgroundColor: bgc1,
    color: col1,
    boxShadow:box1,
    
  
    transition: "all 0.25s ease",
    zIndex: 10,
  },

  "@media (hover: hover)": {
    "&:hover": {
      color:colorHov
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
    <Box component="footer" sx={{ backgroundColor: bgColor, color: textColor  , marginBottom:"25px"}}>
      
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
                ونسبة الاستقطاع مع إمكانية مقارنة أفضل الجهات التمويلية.
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
                 <IconButton sx={iconStyle2(col1)}
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

  <Link to="/banks" style={{ textDecoration: "none" }}>
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
      سياسات البنوك
    </Typography>
  </Link>

  <Link to="/about" style={{ textDecoration: "none" }}>
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

    <Link to="/show-offers" style={{ textDecoration: "none" }}>
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
