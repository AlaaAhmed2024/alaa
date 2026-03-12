import "./home.css";
import ahly from "../alahliLogo.svg";
import alrajhi from "../alrajhiLogo.svg";
import albilad from "../albiladLogo.svg";
import sab from "../sab.svg"
import alfransi from "../alfransi.svg"
import alinma from "../alinma.svg"

import image2 from "../logo.png";
import { useContext, useEffect, useState } from "react";
import ProgressCounter from './ProgressCounter'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleHalfStroke,
  faMoon,
  faCheck,
  faGripVertical,
  faLeftRight,

} from "@fortawesome/free-solid-svg-icons";
import Note from "./note";
import HomeHrz from "./testHome";
import { ColorModeContext } from "../Context/ThemeContext";
import HomeFooter from "./HomeFooter";

import { useNavigate } from "react-router-dom";




export default function Home() {
const navigate = useNavigate();
  
  const [show, setShow] = useState(true);
  setTimeout(() => {
    setShow(false);
  }, 3500);




const[vertical,setVertical]= useState(true)
function handelVertical() {
  setVertical(!vertical);
}

if(vertical){
var textVtoh="افقي"
var ic2=faLeftRight
}else{
var textVtoh="راسي"
var ic2=faGripVertical
}

  // const [darkSide, setShwoDarkSide] = useState(
  //       ()=>{

  //  const savedMode = localStorage.getItem("darkMode");
  //   if (savedMode === "true") return true;
  // if (savedMode === "false") return false;
  // return true; // الوضع الافتراضي
  //   }
  // );

    const { mode } = useContext(ColorModeContext); // الوضع الحالي: light / dark
  
  
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

  if (darkSide) {
    var textMode = "داكن";
    var classNameModel = "col box-home card-move h-400";
    var ic1 = faMoon;
    var classRotate = 0;
    var classColor = "model-light";
    var tableDark = "";
    var backColor = "link-log-dark  dark-buttom-about";
    var backTab = "";
  } else {
    var textMode = "فاتح";
    var classNameModel = "col box-dark card-move-dark h-400";
    var ic1 = faCircleHalfStroke;
    var classRotate = 180;
    var classColor = "#050505";
    var tableDark = "table-Dark";
    var backColor = "link-log-dark  dark-buttom-about  back-color";
    var backTab = "#29314d";
  }

  var notAlAhli="اخر تحديث البنك الاهلي تعديل سياسه حساب الراتب التقاعدي  -  تم تطبيق 160 لوزاره الدفاع مع نسب خاصه -  لا يوجد بدون تحويل راتب"
  var nameBankAlahli="البنك الاهلي"
  var lastUpdatedAlAhli="28/12/2025"
  var anmAlAhli = "anm2 home-flex"
var anmAlAhliLight = "anm2-light home-flex"
  
  var notAlrajhi="  اخر تحديث بنك الراجحي   ارتفاع النسب للفوائد بقدار 10 نقاط  - تم تطبيق 160 لوزاره الدفاع مع نسب خاصه -  اقل راتب مع اضافه قسط الدعم 6,000  "
  var nameBankAlrajhi="بنك الراجحي"
  var lastUpdatedAlrajhi="15/1/2025"
 var anmAlrajhi = "anm5 home-flex"
  var anmAlrajhiLight = "anm5-light home-flex"



  var notAlbilad="اخر تحديث بنك البلاد  لم يتم تطبيق 160 لوزاره الدفاع -  التحديث مده التمويل الي  30 سنه "
  var nameBankAlbilad="بنك البلاد"
  var lastUpdatedAlbilad="15/12/2024"
 var anmAlbilad = "anm6 home-flex"
 var anmAlbiladLight = "anm6-light home-flex"

  var notSab="اخر تحديث بنك ساب  لم يتم تطبيق 160 لوزاره الدفاع... جاري "
  var nameBankSab="بنك ساب"
  var lastUpdatedSab="15/11/2024"
   var anmSab = "anm6 home-flex"
     var anmSabLight = "anm6-light home-flex"


  var notAlinma="اخر تحديث بنك الانماء لم يتم تطبيق 160 لوزاره الدفاع   ...   جاري "
  var nameBankAlinma="بنك الانماء"
  var lastUpdatedAlinma="16/12/2024"
   var anmAlinma = "anm5 home-flex"
     var anmAlinmaLight = "anm5-light home-flex"


  var notAlfransi="اخر تحديث البنك الفرنسي لم يتم تطبيق 160 لوزاره الدفاع  ...   جاري "
  var nameBankAlfransi="البنك الفرنسي"
  var lastUpdatedAlfransi="16/12/2024"
   var anmAlfransi = "anm2 home-flex"
     var anmAlfransiLight = "anm2-light home-flex"



     const banksData = [
  {
    id: 1,
    name: nameBankAlahli,
    note: notAlAhli,
    lastUpdated: lastUpdatedAlAhli,
    image: ahly,
  },
  {
    id: 2,
    name: nameBankAlrajhi,
    note: notAlrajhi,
    lastUpdated: lastUpdatedAlrajhi,
    image: alrajhi,
  },
  {
    id: 3,
    name: nameBankAlbilad,
    note: notAlbilad,
    lastUpdated: lastUpdatedAlbilad,
    image: albilad,
  },
  {
    id: 4,
    name: nameBankSab,
    note: notSab,
    lastUpdated: lastUpdatedSab,
    image: sab,
  },
  {
    id: 5,
    name: nameBankAlinma,
    note: notAlinma,
    lastUpdated: lastUpdatedAlinma,
    image: alinma,
  },
  {
    id: 6,
    name: nameBankAlfransi,
    note: notAlfransi,
    lastUpdated: lastUpdatedAlfransi,
    image: alfransi,
  },
];



const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const banksRows = chunkArray(banksData, 3);






 
  return (
    <div id="timeout">
      <header
        class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionStatic css-pxz6q9"
        style={{ margin: "30px 0px 0px 0px" }}
      >
        <div class="MuiTabs-root css-h1nntfc">
          <div class="MuiTabs-scroller MuiTabs-fixed css-1anid1y">
            <div
              aria-label="full width tabs"
              class="MuiTabs-flexContainer css-k008qs"
              role="tablist"
            >
              <h3
              className="font-size-h3"
                style={{
                  textAlign: "center",
                  padding: "3px",
                  color: "black",
                  margin: "auto",
                }}
              >
                Eskan Salman Home
              </h3>
            </div>
          </div>
        </div>
      </header>

      <div style={{ display: show ? "" : "none" }} className="image-home" >
  

        <div className="loader-container" style={{    flexDirection: "column" , marginTop:"-100px"}} >
                    <div className="logo-reveal" style={{marginBottom:"10px"}}>
                      <img src={image2} alt="Eskan Salman Logo" className="logo-color"/>
                      <div className="logo-mask"></div>
                      
                      
                      </div>
   
          <ProgressCounter/>
         </div>

      </div>

      <div style={{ display: show ? "none" : "" }}>

      {vertical? (



<div className="p-relative" style={{ margin: "0px 10px" }}>
  {banksRows.map((row, rowIndex) => (
    <div
      key={rowIndex}
      className="row flex-mobile"
      style={{ marginBottom: rowIndex === 0 ? "1px" : "20px" }}
    >
      {row.map((bank) => (
        <div
          key={bank.id}
          className={classNameModel}
          style={rowIndex !== 0 ? { marginTop: "8px" } : {}}
          // onClick={() => (window.location.href = `/alaa/#/start/${banksRows.id}`)}
              onClick={() => navigate(`/start/${bank.id}`)}
          role="button"
        >
          <Note
            imageBank={bank.image}
            pDarkSide={darkSide}
            note={bank.note}
            lastUpdated={bank.lastUpdated}
            nameBank={bank.name}
          />
        </div>
      ))}
    </div>
  ))}
</div>



      
       
      )
      
         
      :
      (  
       <>
        <div className="anm1" style={{marginBottom:"20px"}}>اخر تحديثات البنوك</div>
        <HomeHrz dark={darkSide}  imageBank={ahly}   note={notAlAhli} lastUpdated={lastUpdatedAlAhli} nameBank={nameBankAlahli} anm={anmAlAhli} anmLight={anmAlAhliLight}/>
        <HomeHrz dark={darkSide}  imageBank={alrajhi}   note={notAlrajhi} lastUpdated={lastUpdatedAlrajhi} nameBank={nameBankAlrajhi} anm={anmAlrajhi} anmLight={anmAlrajhiLight}/>
        <HomeHrz dark={darkSide}  imageBank={albilad}   note={notAlbilad} lastUpdated={lastUpdatedAlbilad} nameBank={nameBankAlbilad} anm={anmAlbilad} anmLight={anmAlbiladLight}/>
        <HomeHrz dark={darkSide}  imageBank={sab}   note={notSab} lastUpdated={lastUpdatedSab} nameBank={nameBankSab} anm={anmSab} anmLight={anmSabLight}/>
        <HomeHrz dark={darkSide}  imageBank={alinma}   note={notAlinma} lastUpdated={lastUpdatedAlinma} nameBank={nameBankAlinma} anm={anmAlinma} anmLight={anmAlinmaLight}/>
        <HomeHrz dark={darkSide}  imageBank={alfransi}   note={notAlfransi} lastUpdated={lastUpdatedAlfransi} nameBank={nameBankAlfransi} anm={anmAlfransi} anmLight={anmAlfransiLight}/>
       </>
        )
      }


  
        {/* <br></br>

        <div className="po" style={{ marginBottom: "40px" }}>
          <div className="anm3"></div>
        </div>

        <br></br> */}
  <HomeFooter/>

        <button
                className={backColor}
                activeClassName="active_sidebar"
                style={{
                  borderRadius: "30px",
                  maxWidth: "89px",
                  position: "fixed",
                  left: "22px",
                  bottom: "92px",
                }}
                onClick={handelVertical}
              >
                <div className="icon" style={{ marginRight: "5px" }}>
                  {
                    <FontAwesomeIcon
                      icon={ic2}
                      rotation={classRotate}
                      style={{ color: { classColor } }}
                    />
                  }
                </div>
                <div style={{ margin: "0 10px" }} className="link_text">
                  {textVtoh}
                </div>
              </button>




      

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
  );
}
