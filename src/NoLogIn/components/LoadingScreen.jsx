



// import { motion } from "framer-motion";
// import logoWhite from "../photo/logo_white.png";
// import logoBlue from "../photo/logo.png";
// import "./LoadingScreen.css";
// import { useState, useContext } from "react";
// import { ColorModeContext } from "../context/ThemeContext"; // الوضع الحالي
// export default function LoadingScreen() {

//       const { mode } = useContext(ColorModeContext); // الوضع الحالي: light / dark
//       const bgColor = mode === "light" ? "#f4f6fa" : "#182237";



//       if(mode === "light"){

//       }else{

//       }
//   return (
  
//                 <div
//                   className="loader-container"
//                   style={{ height: "auto", width: "150px" }}
//                 >
//                   <div className="logo-reveal">
//                     <img
//                       src={logoBlue}
//                       alt="Eskan Salman Logo"
//                       className={mode === "light" ? "logo-color" : "logo-color-dark"}
//                       style={{ width: "135px" }}
//                     />
//                     <div className="logo-mask-2"></div>
//                   </div>
//                 </div>
             
          
//   );
// }










// import { motion } from "framer-motion";
// import logoWhite from "../photo/logo_white.png";
// import logoBlue from "../photo/logo.png";
// import "./LoadingScreen.css";
// import { useContext } from "react";
// import { ColorModeContext } from "../context/ThemeContext";

// export default function LoadingScreen() {
//   const { mode } = useContext(ColorModeContext);

//   return (
//     <div className={`loader-wrapper ${mode}`}>
//       <div
//         className="loader-container"
//         style={{ width: "150px" }}
//       >
//         <div className="logo-reveal">
//           <img
//             src={logoBlue}
//             alt="Eskan Salman Logo"
//             className={mode === "light" ? "logo-color" : "logo-color-dark"}
//           />
//           <div className="logo-mask-2"></div>
//         </div>

//         {/* النص */}
//         <div className="loading-text">
//           جاري التحميل ...
//         </div>
//       </div>
//     </div>
//   );
// }




import logoBlue from "../photo/logo.png";
import "./LoadingScreen.css";
import { useContext } from "react";
import { ColorModeContext } from "../context/ThemeContext";

export default function LoadingScreen() {
  const { mode } = useContext(ColorModeContext);

  return (
    <div className={`loader-wrapper ${mode}`}>
      <div className="loader-container">

        {/* اللوجو */}
        <div className="logo-reveal">
          <img
            src={logoBlue}
            alt="Eskan Salman Logo"
            className={mode === "light" ? "logo-color" : "logo-color-dark"}
          />
          <div className="logo-mask-2"></div>
        </div>

        {/* النص تحت اللوجو */}
        <div className="loading-text">
          جاري التحميل 
        </div>

      </div>
    </div>
  );
}



