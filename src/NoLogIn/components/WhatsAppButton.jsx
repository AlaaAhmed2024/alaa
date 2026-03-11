// import React from "react";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import { IconButton } from "@mui/material";

// const WhatsAppButton = () => {
//   const phoneNumber = "966508417587"; 
//   const message = "مرحباً، أريد الاستفسار عن العقارات";

//   const openWhatsApp = () => {
//     window.open(
//       `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
//       "_blank"
//     );
//   };

//   return (
//     <div style={styles.container}>
//       <IconButton
//         onClick={openWhatsApp}
//         style={styles.button}
//       >
//         <WhatsAppIcon style={{ color: "#fff", fontSize: 30 }} />
//       </IconButton>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     position: "fixed",
//     bottom: "20px",
//     right: "20px",
//     zIndex: 1000,
//   },
//   button: {
//     backgroundColor: "#25D366", // لون واتساب الأخضر
//     width: "60px",
//     height: "60px",
//     borderRadius: "50%",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
//   },
// };

// export default WhatsAppButton;



import React, { useContext, useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IconButton } from "@mui/material";
import { ColorModeContext } from "../context/ThemeContext.jsx";

const WhatsAppButton = () => {
  const { mode } = useContext(ColorModeContext);
  const [hover, setHover] = useState(false);
  const phoneNumber = "966508417587"; // ضع رقمك
  const message = "مرحباً، أريد الاستفسار عن العقارات";



      // const textColor = mode === "light" ? "#000" : "#fff";
      // const bgColor = mode === "light" ? "#fff" : "#000";
      
      const textColor = mode === "light" ? "#ffffffff" : "#fff";
       const bgColor  = mode === "dark" ? "#1e293b" : "#0c3a68"

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div style={styles.container}>
      <div
        style={{ position: "relative", display: "inline-block" }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <IconButton onClick={openWhatsApp} style={styles.button}>
          <WhatsAppIcon style={styles.icon} />
        </IconButton>

        {/* النص عند الهوفر مع Fade */}
        <div
          style={{
            ...styles.tooltip,
            opacity: hover ? 1 : 0,
            transform: hover
              ? "translateY(-50%) translateX(0)"
              : "translateY(-50%) translateX(10px)",
              color:textColor,
              backgroundColor:bgColor,
          }}
        >
          تواصل واتساب
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    bottom: "20px",
    right: "15px",
    zIndex: 1000,
  },
  button: {
    backgroundColor: "#25D366",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
  },
  icon: {
    color: "#fff",
    fontSize: "30px",
  },
  tooltip: {
    position: "absolute",
    right: "70px",
    top: "50%",
    transform: "translateY(-50%) translateX(10px)",
    // backgroundColor:textColor,
    // color: textColor,
    padding: "5px 10px",
    borderRadius: "5px",
    whiteSpace: "nowrap",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    fontSize: "14px",
    transition: "opacity 0.3s ease, transform 0.3s ease",
  },
};

// CSS إضافي لجعل الزر أصغر على الموبايل
const mediaQuery = `
  @media (max-width: 600px) {
    .whatsapp-btn {
      width: 45px !important;
      height: 45px !important;
    }
    .whatsapp-btn svg {
      font-size: 24px !important;
    }
    .whatsapp-tooltip {
      right: 55px !important;
      font-size: 12px !important;
      padding: 4px 8px !important;
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mediaQuery;
document.head.appendChild(styleSheet);

export default WhatsAppButton;

