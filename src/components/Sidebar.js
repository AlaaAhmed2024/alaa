import { NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins, faBars, faHouse, faCalculator, faPenToSquare, faUsers, faChartColumn,
  faMoneyBill, faPlus, faRightFromBracket, faCircleHalfStroke, faMoon, faFolderOpen,
  faBuilding, faHouseMedicalCircleXmark, faSquarePollVertical, faUsersRectangle,
  faAngleDown, faAngleLeft, faUsersBetweenLines, faUsersGear, faUserPlus,
  faGamepad,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { useContext, useEffect, useState } from "react";
import im from "../logo3.png";
import "../Project1.css";
import audioOut from "../sound/out.mp3";
import ModalX from "../modalX";
import { ColorModeContext } from "../Context/ThemeContext";

export default function Sidebar({ children }) {
  const audio1 = new Audio(audioOut);
  const [isOpen, setIsOpen] = useState(false);
  const [vis, setvis] = useState(false);
  const [mes, setMes] = useState(null);

  const [showSubMenuDocs, setShowSubMenuDocs] = useState(false);
  const [showSubMenuOffers, setShowSubMenuOffers] = useState(false);
  const [showSubMenuClientOffers, setShowSubMenuClientOffers] = useState(false);

  // const [darkSide, setShwoDarkSide] = useState(() => {
  //   const savedMode = localStorage.getItem("darkModeAll");
  //   return savedMode === "true";
  // });

   
    const { mode } = useContext(ColorModeContext); // الوضع الحالي: light / dark
  const [darkSide, setShwoDarkSide] = useState(() => mode === "light")
  useEffect(() => {
    
  setShwoDarkSide(mode === "light");
}, [mode]);


  function handelDarkSide() {
    const newMode = !darkSide;
    setShwoDarkSide(newMode);
    localStorage.setItem("darkModeAll", newMode);
  }

  const textMode = darkSide ? "فاتح" : "داكن";
  const classNameModel = darkSide ? "model-dark overflow-phone" : "model-light overflow-phone";
  const ic1 = darkSide ? faMoon : faCircleHalfStroke;
  const classRotate = darkSide ? 0 : 180;

  function alaa() {
    audio1.play();
    setvis(true);
    setMes(" تسجيل الخروح ...");
    setTimeout(() => {
      localStorage.removeItem("name");
      window.location.pathname = "/alaa";
    }, 1300);
  }

  const menuItem = [
    { path: "/start", name: "تحديثات البنوك", icon: <FontAwesomeIcon icon={faHouse} /> },
    { path: "/about", name: "الحسبة الرئيسية", icon: <FontAwesomeIcon icon={faCalculator} style={{ width: "1.1em" }} /> },
    { path: "/clients", name: "قائمه عملائي", icon: <FontAwesomeIcon icon={faUsers} /> },
    { path: "/profit", name: "نسب الفوائد", icon: <FontAwesomeIcon icon={faChartColumn} /> },
    { path: "/plus", name: "قروض اضافيه", icon: <FontAwesomeIcon icon={faPlus} /> },
    { path: "/netsalary", name: "الراتب الصافي", icon: <FontAwesomeIcon icon={faCoins} /> },
    { path: "/banks", name: "سياسات البنوك", icon: <FontAwesomeIcon icon={faPenToSquare} /> },
    { path: "/price", name: " عرض السعر", icon: <FontAwesomeIcon icon={faMoneyBill} /> },
    { path: "/user-dashboard", name: "الاحصائيات و التقارير", icon: <FontAwesomeIcon icon={faSquarePollVertical} /> },
    
    { path: "/game", name: " فكر و العب ", icon: <FontAwesomeIcon icon={faGamepad} /> },
  ];

  // للـ Overlay في الشاشات الصغيرة
  // const isSmallScreen = window.innerWidth <= 768;
const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);



  return (
    <div 
    // className=      "container-sidebar flex  hide-scrollbar"
              className={`container-sidebar flex  hide-scrollbar ${ isOpen ? "show-line" : ""}`}

    
    >
      <div>
        <div
          style={{
            width: isSmallScreen
              ? (isOpen ? "230px" : "0")
              : (isOpen ? "230px" : "80px"),

          }}
          className={`sidebar sidebar-background hover-sidebar  ${isSmallScreen && isOpen ? "show-sidebar" : ""}`}
        >
         <div className="top_section" style={{    paddingLeft: "1rem",
                                                  paddingRight:isSmallScreen? ".8rem":"1.5rem" }}>
            <img
              alt=""
              src={im}
              className="logo-right"
              style={{
                display: isOpen ? "block" : "none",
                width: "135px",
                height: "47px",
                marginRight: "8px",
              }}
            />
            <div
              className={`bars ${isSmallScreen ? "bars-toggle-small" : ""}`}
              // onClick={() => setIsOpen(!isOpen)}
              onClick={() => {
                  if (isSmallScreen) {
                    setIsOpen(true); // إفتح فقط في الشاشات الصغيرة
                    } else {
                        setIsOpen((prev) => !prev); // toggle في الشاشات الكبيرة
                    }

                    }}
                    
              title={isOpen ? "اخفاء القائمه" : "تثبيت القائمة"}
            >
              <FontAwesomeIcon icon={faBars} style={{ width: "1em", cursor: "pointer" }} />
            </div>
          </div>


          <div style={{ overflowY: "overlay", height: "85%", 
          paddingLeft:isSmallScreen && !isOpen ?"": "1rem",paddingRight:isSmallScreen && !isOpen ? "":"1rem",
       }}>
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
               className="link button-move-sidebar "
                activeClassName="active_sidebar"
              >
                <div className="icon">{item.icon}</div>
                <div style={{ display: isOpen ? "block" : "none" }} 
                className=
                
                {`link_text ${
                item.path == "/user-dashboard" ? "font-s-15" : ""
                }`}
                >
                  {item.name}
                </div>
              </NavLink>
            ))}

            {/* السندات */}
            <div className="link button-move-sidebar" style={{ cursor: "pointer" }} onClick={() => setShowSubMenuDocs(!showSubMenuDocs)}>
              <div className="icon"><FontAwesomeIcon icon={faFolderOpen} /></div>
              <div style={{ display: isOpen ? "flex" : "none", justifyContent: "space-between" }} className="link_text">
                <span>السندات</span>
                <FontAwesomeIcon icon={showSubMenuDocs ? faAngleDown : faAngleLeft} style={{ marginRight: "68px" }} />
              </div>
            </div>
            <div className={`submenu-container ${showSubMenuDocs ? "submenu-open" : "submenu-closed"}`} style={{ marginRight: isOpen ? "20px" : "0px" }}>
              <NavLink to="/new_documents" className="link button-move-sidebar" activeClassName="active_sidebar">
                <div className="icon"><FontAwesomeIcon icon={faFolderOpen} /></div>
                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">انشاء السندات</div>
              </NavLink>
              <NavLink to="/show_documents" className="link button-move-sidebar" activeClassName="active_sidebar">
                <div className="icon"><FontAwesomeIcon icon={faUsersRectangle} /></div>
                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">عملاء السندات</div>
              </NavLink>
            </div>

            {/* العروض */}
            <div className="link button-move-sidebar" style={{ cursor: "pointer" }} onClick={() => setShowSubMenuOffers(!showSubMenuOffers)}>
              <div className="icon"><FontAwesomeIcon icon={faBuilding} /></div>
              <div style={{ display: isOpen ? "flex" : "none", justifyContent: "space-between" }} className="link_text">
                <span>العروض</span>
                <FontAwesomeIcon icon={showSubMenuOffers ? faAngleDown : faAngleLeft} style={{ marginRight: "68px" }} />
              </div>
            </div>
            <div className={`submenu-container ${showSubMenuOffers ? "submenu-open" : "submenu-closed"}`} style={{ marginRight: isOpen ? "20px" : "0px" }}>
              <NavLink to="/add-offers" className="link button-move-sidebar" activeClassName="active_sidebar">
                <div className="icon"><FontAwesomeIcon icon={faMoneyBill} /></div>
                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">إنشاء عرض</div>
              </NavLink>
              <NavLink to="/show-offers" className="link button-move-sidebar" activeClassName="active_sidebar">
                <div className="icon"><FontAwesomeIcon icon={faHouseMedicalCircleXmark} /></div>
                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">جميع العروض</div>
              </NavLink>



                            <NavLink to="/real-estate-map" className="link button-move-sidebar" activeClassName="active_sidebar">
                <div className="icon"><FontAwesomeIcon icon={faMapLocationDot} /></div>
                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">  خريطة العروض</div>
              </NavLink>
            

            </div>

            {/* العملاء */}
            <div className="link button-move-sidebar" style={{ cursor: "pointer" }} onClick={() => setShowSubMenuClientOffers(!showSubMenuClientOffers)}>
              <div className="icon"><FontAwesomeIcon icon={faUsersGear} /></div>
              <div style={{ display: isOpen ? "flex" : "none", justifyContent: "space-between" }} className="link_text">
                <span>العملاء للعروض</span>
                <FontAwesomeIcon icon={showSubMenuClientOffers ? faAngleDown : faAngleLeft} style={{ marginRight: "21px" }} />
              </div>
            </div>
            <div className={`submenu-container ${showSubMenuClientOffers ? "submenu-open" : "submenu-closed"}`} style={{ marginRight: isOpen ? "20px" : "0px" }}>
              <NavLink to="/add-client" className="link button-move-sidebar" activeClassName="active_sidebar">
                <div className="icon"><FontAwesomeIcon icon={faUserPlus} /></div>
                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">اضافه عميل</div>
              </NavLink>

              <NavLink to="/show-client" className="link button-move-sidebar" activeClassName="active_sidebar">
                <div className="icon"><FontAwesomeIcon icon={faUsersBetweenLines} /></div>
                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">جميع العملاء</div>
              </NavLink>
            </div>

            <NavLink to="/" className="link-log button-move-sidebar" activeClassName="active_sidebar" onClick={alaa}>
              <div className="icon"><FontAwesomeIcon icon={faRightFromBracket} /></div>
              <div style={{ display: isOpen ? "block" : "none" }} className="link_text">الخروج</div>
            </NavLink>





            <button className="link-log-dark dark-buttom button-move-sidebar"
              onClick={handelDarkSide}
              style={{ top: "10px", position: "relative", width: "100%" }}
            >
              <div className="icon" style={{ marginRight: "5px" }}>
                <FontAwesomeIcon icon={ic1} rotation={classRotate} />
              </div>
              <div id="show-text-dark-hover" style={{ display: isOpen ? "block" : "none", marginRight: "18px" }} className="link_text">
                {textMode}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay عند فتح القائمة بالشاشات الصغيرة */}
      {isOpen && isSmallScreen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.3)",
            zIndex: 998,
          }}
        />
      )}

      <main
        className={classNameModel}
        style={{
          marginRight: !isSmallScreen ? (isOpen ? "231px" : "81px") : "0",
        }}
      >
        <ModalX isVisble={vis} errorMassage={mes} darkMode={darkSide} />
        {children}
      </main>
    </div>
  );
}
