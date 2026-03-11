
import { NavLink } from "react-router-dom";
import "./home.css";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ar"; // اللغة العربية



import { Badge, IconButton, Menu, MenuItem, Tab, Tabs, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CommentsModal from "../offers/CommentsModal"; // المودال الخاص بالتعليقات





import im from "../logo.png";

import imBottom from "../logoBottom.png";

import Marquee from "react-fast-marquee"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleHalfStroke,faMoon,faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useRef, useContext } from "react";


import photoName from "../alaa.jpeg";
//import imgDark from "../dark-mode-li.svg"
import imgDark from "../dark-mode.svg"
import imgLight from "../light-mode.svg"
import audioOut from "../sound/out.mp3";
import ModalX from "../modalX";
import { ColorModeContext } from "../Context/ThemeContext";







  dayjs.extend(relativeTime);

export default function Nave(props) {


 const { mode, toggleColorMode } = useContext(ColorModeContext);


 const userName = localStorage.getItem("name"); // نص








    const [anchorEl, setAnchorEl] = useState(null);


  // const [notifications, setNotifications] = useState([]);
  const [notifications, setNotifications] = useState({ unread: [], read: [] });
const [tab, setTab] = useState("unread"); // "unread" or "read"
  

const [openModal, setOpenModal] = useState(false);
  const [selectedOfferId, setSelectedOfferId] = useState(null);




  const open = Boolean(anchorEl);




//   const fetchNotifications = async () => {
    
//   try {
//     const res = await fetch(`http://localhost:8090/commentsnew?currentUser=${userName}`);
//     const data = await res.json();

//     // فصل المقروء عن غير المقروء
//     setNotifications({
//       unread: data.filter((n) => n.isRead === 0),
//       read: data.filter((n) => n.isRead === 1)
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };


















// const fetchNotifications = async () => {
//   try {
//     const res = await fetch(`http://localhost:8090/commentsnew?currentUser=${userName}`);
//     const data = await res.json();

//     // فصل المقروء عن غير المقروء
//     setNotifications({
//       unread: data.filter((n) => n.isRead === 0),
//       read: data.filter((n) => n.isRead === 1)
//     });
//   } catch (err) {
//     console.error(err);

//     // 🔹 بيانات تجريبية (Demo Mode)
//     const demoData = [
//       {
//         id: 1,
//         offerId: 170,
//         userName: "علاء",
//         message: "مرحبا هذا إشعار تجريبي",
//         createdAt: "2025-09-06 01:00",
//         isRead: 0,
//         type: "comment",
//         replyTo: null
//       },
//       {
//         id: 2,
//         offerId: 170,
//         userName: "احمد",
//         message: " النظام في وضع التجربة ",
//         createdAt: "2025-09-06 01:01",
//         isRead: 1,
//         type: "system",
//         replyTo: 1
//       },
//       {
//         id: 3,
//         offerId: 170,
//         userName: "محمد",
//         message: "يمكنك تجربة النظام ",
//         createdAt: "2025-09-06 01:02",
//         isRead: 0,
//         type: "reply",
//         replyTo: 1
//       }
//     ];

//     setNotifications({
//       unread: demoData.filter((n) => n.isRead === 0),
//       read: demoData.filter((n) => n.isRead === 1)
//     });
//   }
// };





let serverFailed = false; // متغير عام يوقف المحاولة لو فشل الاتصال

const fetchNotifications = async () => {
  // ⛔ لو حصل خطأ قبل كذا، لا نحاول مرة ثانية
  if (serverFailed) return;

  try {
    const res = await fetch(`http://localhost:8090/commentsnew?currentUser=${userName}`);
    if (!res.ok) throw new Error("فشل الاتصال بالسيرفر");

    const data = await res.json();

    // فصل المقروء عن غير المقروء
    setNotifications({
      unread: data.filter((n) => n.isRead === 0),
      read: data.filter((n) => n.isRead === 1)
    });
  } catch (err) {
    console.error("⚠️ فشل الاتصال، التحويل لوضع تجربة:", err.message);
    serverFailed = true; // سجل أن السيرفر غير متاح حتى نتوقف عن المحاولة نهائياً

    // 🔹 بيانات تجريبية (Demo Mode)
    const demoData = [
      {
        id: 1,
        offerId: 170,
        userName: "علاء",
        message: "مرحبا هذا إشعار تجريبي",
        createdAt: "2025-09-06 01:00",
        isRead: 0,
        type: "comment",
        replyTo: null
      },
      {
        id: 2,
        offerId: 170,
        userName: "احمد",
        message: "النظام في وضع التجربة",
        createdAt: "2025-09-06 01:01",
        isRead: 1,
        type: "system",
        replyTo: 1
      },
      {
        id: 3,
        offerId: 170,
        userName: "محمد",
        message: "يمكنك تجربة النظام",
        createdAt: "2025-09-06 01:02",
        isRead: 0,
        type: "reply",
        replyTo: 1
      }
    ];

    setNotifications({
      unread: demoData.filter((n) => n.isRead === 0),
      read: demoData.filter((n) => n.isRead === 1)
    });
  }
};




  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 5000); // تحديث كل 5 ثواني
    return () => clearInterval(interval);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };






  // // فتح المودال عند الضغط على إشعار
  // const handleNotificationClick = async (n) => {
  //   setSelectedOfferId(n.offerId);
  //   setOpenModal(true);

  //   // وضع التعليقات المقروءة
  //   try {
  //     await fetch("http://localhost:8090/commentsmarkread", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ ids: [n.id] }),
  //     });
  //     fetchNotifications(); // تحديث العدد بعد القراءة
  //   } catch (err) {
  //     console.error(err);
  //   }

  //   handleClose(); // اغلاق القائمة
  // };



//   const handleNotificationClick = async (n) => {
//   setSelectedOfferId(n.offerId);
//   setOpenModal(true);

//   try {
//     await fetch("http://localhost:8090/commentsmarkread", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ ids: [n.id] }),
//     });

//     // نقل الإشعار من unread إلى read
//     setNotifications((prev) => ({
//       unread: prev.unread.filter((x) => x.id !== n.id),
//       read: [...prev.read, { ...n, isRead: 1 }]
//     }));
//   } catch (err) {
//     console.error(err);
//   }

//   handleClose();
// };


const handleNotificationClick = async (n) => {
  setSelectedOfferId(n.offerId);
  setOpenModal(true);

  try {
    await fetch("http://localhost:8090/commentsmarkread", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: [n.id] }),
    });

    // نقل الإشعار من unread إلى read
    setNotifications((prev) => ({
      unread: prev.unread.filter((x) => x.id !== n.id),
      read: [...prev.read, { ...n, isRead: 1 }]
    }));
  } catch (err) {
    console.error("❌ فشل الاتصال بالخادم:", err);

    // 🔹 وضع التجربة (Demo Mode) – نقل محلي فقط
    setNotifications((prev) => ({
      unread: prev.unread.filter((x) => x.id !== n.id),
      read: [...prev.read, { ...n, isRead: 1 }]
    }));
  }

  handleClose();
};








//   const handleMarkRead = async (id) => {
//   try {
//     await fetch("http://localhost:8090/commentsmarkread", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ ids: [id] }),
//     });

//     // حدث القائمة محليًا بإزالة التعليق
//     setNotifications((prev) => prev.filter((n) => n.id !== id));
//   } catch (err) {
//     console.error(err);
//   }
// };



const handleMarkRead = async (id) => {
  // حفظ نسخة للرجوع إليها لو فشل الطلب
  let previousState;
  setNotifications(prev => {
    previousState = prev;
    const unread = prev.unread || [];
    const read = prev.read || [];
    const item = unread.find(n => n.id == id);
    if (!item) return prev;
    return {
      unread: unread.filter(n => n.id != id),
      read: [{ ...item, isRead: 1 }, ...read],
    };
  });

  try {
    const res = await fetch("http://localhost:8090/commentsmarkread", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: [id] }),
    });

    if (!res.ok) throw new Error("Failed to mark read on server");
    // ممكن هنا تحديث من رد الخادم لو أرجع بيانات محدثة
  } catch (err) {
    console.error("Failed to mark read, reverting:", err);
    // نرجع الحالة السابقة
    setNotifications(previousState);
  }
};






     const photoUserShowLocalStorage = localStorage.getItem("photo") || photoName;

//   //مشكله اعده تحديث و اختفاء الصورة 
//   var photoUserShow=props.passPhoto2
// // بشكل استاتك لحين التعديل

//   var photoUserShow=photoName


  //dark
  // const [dark, setShwoDark] = useState(false);
    


      const [dark, setShwoDark] = useState(() => mode === "dark")
  useEffect(() => {
    
  setShwoDark(mode === "dark");
}, [mode]);



  function handelDark() {
    setShwoDark(!dark);
  }

  if (dark) {
    var textMode = "داكن";
    var ic1 =  faCircleHalfStroke;
    var classRotate = 0;
    var classColor = "back-colr-light";
    var bottomBackground="back-colr-light fixed-bottom"
    var textBottom="text-bottom-light"
    var rfcBottom="light-to-chlid fixed-bottom "
    
 
  } else {
    var textMode = "فاتح";
    var ic1 =faMoon ;
    var classRotate = 180;
    var classColor = "back-colr-dark";
     var bottomBackground="back-colr-dark fixed-bottom"
      var textBottom="text-bottom"
      var rfcBottom="fixed-bottom"
   
  
  }


    const [menuOpen, setMenuOpen] = useState(false);
 const [isTouchDevice, setIsTouchDevice] = useState(false);

  // const userPhoto = localStorage.getItem("photoUserShowLocalStorage"); // رابط الصورة


  const [vis, setvis] = useState(false);
  const [mes, setMes] = useState(null);
   let audio1 = new Audio(audioOut);





 




 



  // const handleLogout = () => {
  //   localStorage.clear();
  //   setMenuOpen(false);
  //   audio1.play();
  //   setvis(true);
  //   setMes("جاري تسجيل الخروج");
  //   setTimeout(() => {

  //     window.localStorage.removeItem("name");
    
  //     window.location.pathname = "/alaa";
  //   }, 2300);


  // };

  // const goToUserDashboard = () => {
  //   setMenuOpen(false);
  //   window.location.href = "https://alaaahmed2024.github.io/alaa/#/user-dashboard";
  // };

  // const handleImageClick = () => {
  //   // عند الضغط، نفترض أنه جهاز لمس، ونبدّل حالة القائمة
  //   setIsTouchDevice(true);
  //   setMenuOpen((prev) => !prev);
  // };



  
  const menuRef = useRef(null);



   const savedMode = localStorage.getItem("darkMode");

if(savedMode == "false"){
  var commentDark=false

}else{
  var commentDark=true
}
  

  const handleLogout = () => {
  
  
   



   localStorage.clear();
    setMenuOpen(false);
    audio1.play();
    setvis(true);
    setMes("جاري تسجيل الخروج");
    setTimeout(() => {

      window.localStorage.removeItem("name");
    
      window.location.pathname = "/alaa";
    }, 2300);



  };






    
    
  const goToUserDashboard = () => {
    setMenuOpen(false);
    window.location.href = "https://alaaahmed2024.github.io/alaa/#/user-dashboard";
  };

  const handleImageClick = () => {
    setIsTouchDevice(true);
    setMenuOpen((prev) => !prev);
  };

  // ✅ إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  
  

    const renderTime = (createdAt) => {
    const now = dayjs();
    const created = dayjs(createdAt);
    const format12 = (date) => date.format("hh:mm A").replace("AM", "ص").replace("PM", "م");

    if (now.isSame(created, "day")) return format12(created);
    if (now.subtract(1, "day").isSame(created, "day")) return "أمس " + format12(created);
    return created.format("DD/MM/YYYY ") + format12(created);
  };





  return (
    <div className="" style={{ backgroundColor: dark ? "white" : "" }}>
       <ModalX isVisble={vis} errorMassage={mes}  darkMode={dark}/>
      <nav
        className="fixed-top"
        style={{ backgroundColor: dark ? "white" : "" }}
      >
        <NavLink
          className="navbar-brand"
          to="/start"
          style={{ position: "fixed", left: "10px", top: "25px" }}
        >
          <img alt="" src={im} className={ dark ? "loge-left" : "imageWtoB" }  />
        </NavLink>


        <div className="dark"  style={{}}>
        <button
        style={{color:"black" , minWidth:"unset"
          }}
                className={classColor}
                    activeClassName="active_sidebar"
  
                    // onClick={handelDark}
                     onClick={toggleColorMode}
                  >
                   
                   <div className="icon" style={{     padding: "5px" , display:"inline-block"}}>
                      
                      {/* {
                        <FontAwesomeIcon
                          icon={ic1}
                          rotation={classRotate}
                          style={{ color: { classColor } }}
                        />
                      } */}

                    <img style={{ width: "20px"}} src={dark? imgLight:imgDark} alt="الوضع" title={textMode}/>
                    </div>

                 

                  </button>


                  
                  {/* <div style={{display:"inline-block"}}>
                       <img alt="user" src={photoUserShowLocalStorage} className="user-show-css" />
        

                       
                  </div> */}



{/* <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => !isTouchDevice && setMenuOpen(true)}
      onMouseLeave={() => !isTouchDevice && setMenuOpen(false)}
    >
      <img
        alt="user"
        // src={userPhoto}
           src={photoUserShowLocalStorage}
        className="user-show-css"
        onClick={handleImageClick}
        style={{
          cursor: "pointer",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "2px solid #007bff",
        }}
      />

      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            backgroundColor: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            borderRadius: "8px",
            padding: "10px",
            minWidth: "180px",
            zIndex: 1000,
            textAlign: "right",
          }}
        >
          <div
            onClick={goToUserDashboard}
            style={{
              padding: "8px 12px",
              borderBottom: "1px solid #eee",
              cursor: "pointer",
              color: "#007bff",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FontAwesomeIcon icon={faUser} />
            {userName || "الملف الشخصي"}
          </div>
          <div
            onClick={handleLogout}
            style={{
              padding: "8px 12px",
              cursor: "pointer",
              color: "red",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "5px",
            }}
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
            تسجيل الخروج
          </div>
        </div>
      )}
    </div>
          */}

 <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => !isTouchDevice && setMenuOpen(true)}
      onMouseLeave={() => !isTouchDevice && setMenuOpen(false)}
      ref={menuRef}
    >
      <img
        alt="user"
        // src={userPhoto}
           src={photoUserShowLocalStorage}
        className="user-show-css"
        onClick={handleImageClick}
        style={{
          cursor: "pointer",
          width: "43px",
          height: "43px",
          borderRadius: "50%",
          border: "2px solid #007bff",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "100%",
          fontSize: "15px",
          minWidth: "210px",
          right: "-60px",
    
          zIndex: 1000,
          transition: "opacity 0.3s ease, transform 0.3s ease",
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "translateY(0px)" : "translateY(-10px)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}

      >
        <div
          style={{
            backgroundColor: dark ? "#fff" : "#fff" ,
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            borderRadius: "8px",
            padding: "10px",
            textAlign: "right",
          }}
        >
          <div
            onClick={goToUserDashboard}
            style={{
              padding: "8px 12px",
              borderBottom: "1px solid #eee",
              cursor: "pointer",
              color: "#007bff",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              borderRadius: "6px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0f8ff")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <FontAwesomeIcon icon={faUser} />
            {userName || "الملف الشخصي" + " | " + window.localStorage.getItem("name")}
          </div>

          <div
            onClick={handleLogout}
            style={{
              padding: "8px 12px",
              cursor: "pointer",
              color: "red",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "5px",
              borderRadius: "6px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ffe6e6")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
            تسجيل الخروج
          </div>
        </div>
      </div>
    </div>


        </div>
        



  <div style={{ position:"fixed", paddingTop: "8px", left:"250px" }}>
      <IconButton color="inherit" onClick={handleClick}>
        {/* <Badge badgeContent={notifications.length} color="error">
          <NotificationsIcon style={{ color: !dark ? "white" : "#222943"  , fontSize:"32px"}} />
        </Badge> */}

        <Badge badgeContent={notifications.unread.length} color="error">
         <NotificationsIcon style={{ color: !dark ? "white" : "#222943", fontSize:"32px"}} />
       </Badge>


      </IconButton>


      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{ style: { maxHeight: 400, width: "350px" } }}
        className={commentDark===true? "":"dark-menu"}
      >

        
{/* <Tabs
  value={tab}
  onChange={(e, newValue) => setTab(newValue)}
  variant="fullWidth"

>
  <Tab label="غير مقروءة" value="unread" />
  <Tab label="مقروءة" value="read" />
</Tabs> */}

<Tabs
  value={tab}
  onChange={(e, newValue) => setTab(newValue)}
  variant="fullWidth"
  sx={{
    "& .MuiTab-root": {
      color: commentDark === false ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
    },
    "& .Mui-selected": {
      color: commentDark === false ? "#fff" : "#000", // اللون عند التحديد
    },
  }}
>
  <Tab label="غير مقروءة" value="unread" />
  <Tab label="مقروءة" value="read" />
</Tabs>


        {/* {notifications.length === 0 && (
          <MenuItem>
            <Typography variant="body2">لا توجد إشعارات جديدة</Typography>
          </MenuItem>
        )} */}



        {/* {(tab === "unread" ? notifications.unread : notifications.read).length === 0 && (
  <MenuItem>
    <Typography variant="body2" >
      {tab === "unread" ? "لا توجد إشعارات جديدة" : "لا توجد إشعارات مقروءة"}
    </Typography>
  </MenuItem>
)} */}

{(tab === "unread" ? notifications.unread : notifications.read).length === 0 && (
  <MenuItem
    onClick={() => {
      // نجرب فتح الشات مع عرض فارغ
      setSelectedOfferId(null);
      setOpenModal(true);
    }}
    style={{ cursor: "pointer" }}
  >
    <Typography variant="body2" color="textSecondary">
      {tab === "unread" ? "لا توجد إشعارات جديدة" : "لا توجد إشعارات مقروءة"}
    </Typography>
  </MenuItem>
)}


{/* {notifications.map((n) => (
  <MenuItem
    key={n.id}
    onClick={() => handleNotificationClick(n)}
    style={{
      whiteSpace: "normal",
      flexDirection: "column",
      alignItems: "flex-start",
      cursor: "pointer",
      position: "relative",
    }}
  >
    <div style={{ width: "100%" }} className="ho-comment">
      <Typography variant="subtitle2">
      
         {(n.userName === userName ? "أنت" : n.userName)} - عرض #{n.offerId}




<span style={{
  color:
    n.notificationType === "comment_on_your_offer" ? "green" :
    n.notificationType === "reply_to_your_comment" ? "blue" :
    n.notificationType === "owner_reply" ? "orange" : "gray"
}}>

        {(n.notificationType === "comment_on_your_offer"
      ? "تعليق على إعلانك"
      : n.notificationType === "reply_to_your_comment"
      ? "رد على تعليقك"
      : n.notificationType === "owner_reply"
      ? "رد من المالك"
      : "تعليق عام")}
</span>


      </Typography>
      <Typography variant="body2">{n.message}</Typography>
      <Typography
        variant="caption"
        sx={{
          color: commentDark === false ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)"
        }}
      >
        {new Date(n.createdAt).toLocaleString()}


      </Typography>
    </div>

    <IconButton
      size="small"
      onClick={(e) => { e.stopPropagation(); handleMarkRead(n.id); }}
      sx={{
        position: "absolute",
        top: 4,
        left: 22,
        opacity: 0,
        transition: "opacity 0.2s",
        "&:hover": { color: "red !important" },
        ".MuiMenuItem-root:hover &": { opacity: 1 },
      }}
    >
      ✖
    </IconButton>
  </MenuItem>
))} */}


{(tab === "unread" ? notifications.unread : notifications.read).map((n) => (
  <MenuItem
    key={n.id}
    onClick={() => handleNotificationClick(n)}
    style={{
      whiteSpace: "normal",
      flexDirection: "column",
      alignItems: "flex-start",
      cursor: "pointer",
       borderBottom: commentDark === false ? ".12em solid rgba(255, 255, 255, 0.1)" : ".12em solid rgba(0,0,0,0.2)" , // الخط تحت كل إشعار
      position: "relative",
    }}
  >
    {/* نفس كود الإشعار اللي عندك */}
    <div style={{ width: "100%" }} className="ho-comment">
      <Typography variant="subtitle2">
        {(n.userName === userName ? "أنت" : n.userName)} - عرض #{n.offerId}
        <span
          style={{
            color:
              n.notificationType === "comment_on_your_offer"
                ? "green"
                : n.notificationType === "reply_to_your_comment"
                ? "#5b5bff"
                : n.notificationType === "owner_reply"
                ? "orange"
                : "gray",
          }}
        >
  

            {n.notificationType === "comment_on_your_offer"
  ? "(تعليق على إعلانك)"
  : n.notificationType === "reply_to_your_comment"
  ? "(رد على تعليقك)"
  : n.notificationType === "owner_reply"
  ? "(رد من صاحب الاعلان)"
  : "(تعليق عام)"}

        </span>
      </Typography>

      <Typography variant="body2">{n.message}</Typography>
      <Typography
        variant="caption"
        sx={{
          color:
            commentDark === false
              ? "rgba(255,255,255,0.6)"
              : "rgba(0,0,0,0.6)",
        }}
      >
  




   


       {renderTime(n.createdAt)}

      </Typography>
    </div>

    <IconButton
      size="small"
      onClick={(e) => {
        e.stopPropagation();
        handleMarkRead(n.id);
      }}
      sx={{
        position: "absolute",
        top: 4,
        left: 22,
        opacity: 0,
        transition: "opacity 0.2s",
        "&:hover": { color: "red !important" },
        ".MuiMenuItem-root:hover &": { opacity: 1 },
      }}
    >
      ✖
    </IconButton>
  </MenuItem>
))}

      </Menu>

      {/* مودال التعليقات */}
      {selectedOfferId && (
        <CommentsModal
          offerId={selectedOfferId}
          open={openModal}
          onClose={() => setOpenModal(false)}
        />
      )}
    </div>
  
      
        

        <div className="ddd" style={{ marginRight: "160px" }}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/start"
                style={{ padding: "10px", marginRight: "50px",color: dark ? "#0d6efd" : "" }}

                
              >
                {" "}
                التحديثات
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink  to="/about" style={{ padding: "10px",color: dark ? "#0d6efd" : "" }}>
                الحسبة
              </NavLink>
            </li>

            {/* <li className='nav-item'>
                  <NavLink to="/login"  style={{padding:"10px"}}>الدخول</NavLink>
             </li> */}

            <li className="nav-item">
              <NavLink to="/clients"  style={{ padding: "10px" ,color: dark ? "#0d6efd" : ""}}>
                العملاء
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/profit"  style={{ padding: "10px" ,color: dark ? "#0d6efd" : ""}}>
                الفوائد
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/plus"  style={{ padding: "10px" ,color: dark ? "#0d6efd" : ""}}>
                قروض
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/netsalary"  style={{ padding: "10px",color: dark ? "#0d6efd" : "" }}>
                الراتب{" "}
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink to="/price"  style={{ padding: "10px",color: dark ? "#0d6efd" : "" }}>
                عرض السعر{" "}
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink to="/banks" style={{ padding: "10px" ,color: dark ? "#0d6efd" : ""}}>
                البنوك{" "}
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/new_documents" style={{ padding: "10px" ,color: dark ? "#0d6efd" : ""}}>
                السندات{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <div  className={rfcBottom} style={{height:"38px" , width:"100%" , backgroundColor: dark ? "white" : "" ,     borderTop: "1px solid gray"}} >
      <Marquee direction="right" loop="100" pauseOnClick="true" pauseOnHover="true">
        
        <div>
          <img src={im} alt="eskan" className={textBottom}/>
               اخر تحديثات البنوك ......   البنك الاهلي : لا يوجد بدون تحويل في الوقت الراهن .......      بنك الراجحي: اقل راتب 5 الف .... اخر تحديثات الحسبه ..... جاري العمل علي تحديث السياسات و تفاصيل عرض المحتسب للدفاع        
             
         </div>
      </Marquee>


        {/* <Marquee direction="right" loop="100" > ...... اخر تحديثات البنوك ......   البنك الاهلي : لا يوجد بدون تحويل في الوقت الراهن ........          بنك الراجحي: اقل راتب 65 الاف</Marquee> */}
        {/* <Marquee direction="left" loop="5" onmouseover={this.stop()} onmouseout={this.start()}>---           kjj fij ji         fjfjvjj fffffffff f f f</Marquee> */}

      </div>
    </div>
  );
}






















// import { NavLink } from "react-router-dom";
// import "./home.css";
// import im from "../logo.png";
// import { useState } from "react";

// export default function Nave() {
//   //dark
//   const [dark, setShwoDark] = useState(false);

//   function handelDark() {
//     setShwoDark(!dark);
//   }

//   return (
//     <div className="" style={{ backgroundColor: dark ? "black" : "" }}>
//       <div
//         className="fixed-top"
//         style={{ backgroundColor: dark ? "black" : "" }}
//       >
//         <NavLink
//           className="navbar-brand"
//           style={{ position: "fixed", left: "10px", top: "25px" }}
//         >
//           <img alt="" src={im} className="loge-left" />
//         </NavLink>

//         <div className="dark">
//           <button onClick={handelDark}> {dark ? "ابيض" : "اسود"} </button>
//         </div>

//         {/* <div className='ddd navbar-nav ml-auto' style={{marginRight:"200px"}}> */}

//         <header className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionStatic css-pxz6q9">
//           <div className="MuiTabs-root css-h1nntf">
//             <div
//               className="MuiTabs-scroller MuiTabs-fixed css-1anid1y"
//               style={{overflow: "hidden", marginBottom: "0px"}}
//             >
//               <div
//                 aria-label="full width tabs"
//                 className="MuiTabs-flexContainer css-k008qs"
//                 role="tablist"
//               >
//                 <button
//                   className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary MuiTab-fullWidth Mui-selected css-mt1cr8"
//                   tabindex="0"
//                   type="button"
//                   role="tab"
//                   aria-selected="true"
//                   id="full-width-tab-0"
//                   aria-controls="full-width-tabpanel-0"
//                 >
//                   معلومات العقد
//                   <span className="MuiTouchRipple-root css-w0pj6f"></span>
//                 </button>
//                 <button
//                   className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary MuiTab-fullWidth css-ysavq2"
//                   tabindex="-1"
//                   type="button"
//                   role="tab"
//                   aria-selected="false"
//                   id="full-width-tab-1"
//                   aria-controls="full-width-tabpanel-1"
//                 >
//                   قنوات الإعلان
//                   <span className="MuiTouchRipple-root css-w0pj6f"></span>
//                 </button>
//                 <button
//                   className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary MuiTab-fullWidth css-ysavq2"
//                   tabindex="-1"
//                   type="button"
//                   role="tab"
//                   aria-selected="false"
//                   id="full-width-tab-2"
//                   aria-controls="full-width-tabpanel-2"
//                 >
//                   البيانات الأساسية
//                   <span className="MuiTouchRipple-root css-w0pj6f"></span>
//                 </button>

//             </div>
//           </div>
//           </div>
//         </header>
//       </div>
//     </div>
//   );
// }

{
  /* <div className="btn-group" role="group" aria-label="Basic radio toggle button group"  style={{marginRight:"200px"}}>
<div style={{marginRight:"50px"}}>
  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
  <label className="btn btn-outline-primary" for="btnradio1">Radio 1</label>
  </div>
  <div  style={{marginRight:"50px"}}>
 <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
 <label className="btn btn-outline-primary" for="btnradio2">Radio 2</label>
 </div>
 <div  style={{marginRight:"50px"}}>
 <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
 <label className="btn btn-outline-primary" for="btnradio3">Radio 3</label>
</div>
</div> */
}
