// import React, { useState } from "react";
// import SaudiNeighborhoodChoiceGame from "./SaudiNeighborhoodChoiceGame";
// import SaudiNeighborhoodMapGame from "./SaudiNeighborhoodMapGame";
// import PriceGuessGame from "./PriceGuessGame";

// export default function SaudiNeighborhoodMain() {
//   const [mode, setMode] = useState(null);

//   if (mode === "easy" || mode === "medium") {
//     return <SaudiNeighborhoodChoiceGame level={mode} onExit={() => setMode(null)} />;
//   }

//   if (mode === "hard") {
//     return <SaudiNeighborhoodMapGame onExit={() => setMode(null)} />;
//   }

//   return (
//     <div className="text-center mt-5">
//       <h2>🎯 لعبة أحياء السعودية</h2>
//       <p className="lead">اختر مستوى الصعوبة:</p>
//       <div className="d-flex justify-content-center gap-3 mt-4">
//         <button className="btn btn-success" onClick={() => setMode("easy")}>
//           <i className="fas fa-leaf"></i> سهل
//         </button>
//         <button className="btn btn-warning" onClick={() => setMode("medium")}>
//           <i className="fas fa-adjust"></i> متوسط
//         </button>
//         <button className="btn btn-danger" onClick={() => setMode("hard")}>
//           <i className="fas fa-map-marker-alt"></i> صعب
//         </button>
//       </div>
//     </div>
//   );
// }



import React, { useContext, useEffect, useState } from "react";
import SaudiNeighborhoodChoiceGame from "./SaudiNeighborhoodChoiceGame";
import SaudiNeighborhoodMapGame from "./SaudiNeighborhoodMapGame";
import PriceGuessGame from "./PriceGuessGame";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPenToSquare,
  faTrash,
  faCircleHalfStroke,
  faMoon,
  faMagnifyingGlass,
  faBackward,
  faForward,
  faCaretRight,
  faCaretLeft,
  faDownload,
  faFileArrowDown,
  faLock,
  faX,
  faFileExcel,
  faFilePdf,
    faHashtag,
  faUser,
  faCalendarAlt,
  faHome,
  faLayerGroup,
  faStairs,
  faRulerCombined,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faMapLocationDot,
  faLink,
  faStickyNote,
 

  faDollarSign,

  faBuilding,
  faWarehouse,
  faCity,
  faHotel,
  faHouseChimney,
  faHouseUser,

   faBed,
  faBath,
  faCouch,
  faDoorOpen,
  faUtensils,
 faUsers,
  faRoad,
  faCar,
  faTree,
  faBoxes,

  faUserNurse,
  faUserShield,
  faUserTie,
  faElevator,

    faSolarPanel,
  
  faHandsWash,
  faBalcony,          // غير موجود رسميًا، سنستخدم بديل مناسب
           // لموقف سيارات
  faBroom,            // بديل للغسيل
 

faObjectGroup,




} from "@fortawesome/free-solid-svg-icons";
import { ColorModeContext } from "../Context/ThemeContext";

export default function SaudiNeighborhoodMain() {


  
    // const [darkSide, setShwoDarkSide] = useState(
    //       ()=>{
  
    //  const savedMode = localStorage.getItem("darkMode");
    // if (savedMode === "true") return true;
    // if (savedMode === "false") return false;
    // return true; // الوضع الافتراضي
    //   }
    // );

      const { modeA } = useContext(ColorModeContext); // الوضع الحالي: light / dark
    
    
          const [darkSide, setShwoDarkSide] = useState(() => modeA === "dark")
      useEffect(() => {
        
      setShwoDarkSide(modeA === "dark");
    }, [modeA]);
  

  
    function handelDarkSide() {
      // setShwoDarkSide(!darkSide);
      const newMode = !darkSide;
    setShwoDarkSide(newMode);
    localStorage.setItem("darkMode", newMode); // حفظ الوضع
    }
  
    if (darkSide) {
      var textMode = "داكن";
      var classNameModel = "loan-form";
      var ic1 = faMoon;
      var classRotate = 0;
      var classColor = "model-light";
      var tableDark = "";
      var lableMode = "flex net-salary";
      var backColor = "link-log-dark  dark-buttom-about";
      var searchClass = "light-search";
    } else {
      var textMode = "فاتح";
      var classNameModel = "loan-form-dark";
      var ic1 = faCircleHalfStroke;
      var classRotate = 180;
      var classColor = "#050505";
      var tableDark = "table-Dark";
      var lableMode = "flex net-salary-dark";
      var backColor = "link-log-dark  dark-buttom-about  back-color";
      var searchClass = "dark-search";
    }



  const [mode, setMode] = useState(null);

  if (mode === "easy" || mode === "medium") {
    return <SaudiNeighborhoodChoiceGame level={mode} onExit={() => setMode(null)} darkSide={darkSide} />;
  }

  if (mode === "hard") {
    return <SaudiNeighborhoodMapGame onExit={() => setMode(null)}  darkSide={darkSide}/>;
  }

  if (mode === "price") {
    return <PriceGuessGame onExit={() => setMode(null)}  darkSide={darkSide}/>;
  }

  return (




     <div div style={{ marginTop: "10px", height: "100vh" }}>
          <div className="p-relative" style={{ margin: "20px 0px" }}>
            <div className="row flex-mobile " id={classNameModel} style={{ marginBottom: "200px" , margin:"auto"  , padding:"inherit" , height:"100vh" , color:darkSide?"black":""}}>
    
    

    <div className="text-center mt-5">
      <h4 style={{padding:"8px"}}>🎯   اصب الهدف فكر و توقع  </h4>
      <div className="">اختر  احد التحديات  التاليه:</div>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <button className="btn btn-success" onClick={() => setMode("easy")}>
          <i className="fas fa-leaf"></i>  اختر المدينة للاحياء
        </button>
      
        <button className="btn btn-danger" onClick={() => setMode("hard")}>
          <i className="fas fa-map-marker-alt"></i>  اختر الحي من الخريطه
        </button>
        <button className="btn btn-primary" onClick={() => setMode("price")}>
          <i className="fas fa-dollar-sign"></i> توقع سعر العقار
        </button>
      </div>

                      <div>
                        <button
                          className={backColor}
                          activeClassName="active_sidebar"
                          style={{
                            borderRadius: "30px",
                            maxWidth: "130px",
                            position: "fixed",
                            // left: "30px",
                            // bottom: "48px",
                                  left: "22px",
                      bottom: "42px",
                            zIndex:"1"
                          }}
                          onClick={handelDarkSide}
                        >
      
      
                          <div className="icon" style={{ marginRight: "5px" }}>
                            {
                              <FontAwesomeIcon
                                icon={ic1}
                                rotation={classRotate}
                                style={{ color: { classColor } }}
                              />
                            }
                          </div>
                          <div style={{ margin: "0 10px" }} className="link_text">
                            {textMode}
                          </div>
                        </button>
                      </div>
    </div>
      </div>
        </div>
         </div> 
  );
}
