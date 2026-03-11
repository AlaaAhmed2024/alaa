


import {
  AppBar, Toolbar, Button, Box,
  IconButton, Drawer, List, ListItem, Typography,
  ListItemText,
  ListItemButton,
  ButtonBase , Switch, Tooltip
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { NavLink, useLocation } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { ColorModeContext } from "../context/ThemeContext";
import logoLight from "../photo/logo_white.png";
import logoDark from "../photo/logo.png";
import "./TopBar.css";
import { useNavigate } from "react-router-dom";

import LoginIcon from "@mui/icons-material/Login";



export default function TopBar() {
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const tabsRef = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const logo = mode === "light" ?logoDark  : logoLight;
  const appBarBg = mode === "light" ? "#f8f9fa" : "#0e0e0e";
  const textColor = mode === "light" ? "#0f172a" : "#ffffff";
  const hoverBg = mode === "light" ? "#e0e0e0" : "rgba(255,255,255,0.12)";
  const activeColor = mode === "light" ? "#0f172a" : "#ab8af7ff !important";
  const activeBg = mode === "light" ? "#ffffff" : "rgba(255,255,255,0.12)";


  const navigate = useNavigate();

  const tabs = [
    { label: "الرئيسية", path: "/eskana" },
    { label: "حاسبة التمويل", path: "/mycalculator" },
    { label: " العقارات", path: "/offerss" },
    
  ];

  // تحديث موقع المؤشر بدقة باستخدام getBoundingClientRect
  const updateIndicator = () => {
    const container = tabsRef.current[0]?.parentElement;
    const activeIndex = tabs.findIndex(tab => tab.path === location.pathname);
    const activeTab = tabsRef.current[activeIndex];
    if (activeTab && container) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();
      setIndicatorStyle({
        left: tabRect.left - containerRect.left + container.scrollLeft,
        width: tabRect.width,
      });
    }
  };



  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [location.pathname]);

  const getButtonStyle = (path) => ({
    color: location.pathname === path ? activeColor : textColor,
    fontWeight: location.pathname === path ? "bold" : "500",
    backgroundColor: location.pathname === path ? activeBg : "transparent",
    borderRadius: "8px",
    padding: "6px 16px",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: hoverBg,
      transform: "scale(1.05)",
    },
    // zIndex: 1,
  });




  return (
    <>
      <AppBar position="sticky" className={`top-bar-visit ${mode === "dark" && "dark-vist"}`}  sx={{ backgroundColor: appBarBg, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        {/* <Toolbar sx={{ justifyContent: "space-between" }}> */}
          <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              sx={{ display: { md: "none" }, color: textColor }}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>

            {/* <img src={logo} alt="logo" height={40} /> */}
            <div className="loader-container-top" style={{ height: "auto", width: "150px" ,cursor:"pointer" }}   onClick={() => navigate("/eskana")}> <div className="logo-reveal-top"> <img src={logo} alt="Eskan Salman Logo" className={mode === "light" ? "logo-color-top" : "logo-color-dark-top"} style={{ width: "135px" }} /> <div className="logo-mask-2-top"></div> </div> </div>




          </Box>

          {/* Tabs */}
          {/* <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, position: "relative" }}> */}
          <Box
  sx={{
    display: { xs: "none", md: "flex" },
    gap: 2,
    position: "relative",
    flexGrow: 1,          // ⭐ هذا السطر هو الحل
    justifyContent: "center",
  }}
>

            {tabs.map((tab, index) => (
              <Button
                key={tab.path}
                component={NavLink}
                to={tab.path}
                style={getButtonStyle(tab.path)}
                ref={el => (tabsRef.current[index] = el)}
              >
                {tab.label}
              </Button>
            ))}

            {/* Animated Indicator */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                height: "3px",
                bgcolor: activeColor,
                borderRadius: "2px",
                transition: "left 0.35s cubic-bezier(0.4, 0, 0.2, 1), width 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
            />
          </Box>







{/* 
<Tooltip title={mode === "dark" ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}>
  <Box
    onClick={toggleColorMode}
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      px: 1.5,
      py: 1,
      borderRadius: "999px",
      cursor: "pointer",
      backgroundColor: mode === "dark" ? "rgba(0,0,0,0.08)" :  "#8f8e93ff",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor:
          mode === "dark"
            ? "rgba(255,255,255,0.15)"
            : "rgba(0,0,0,0.6)",
      },
    }}
  >
  
    {mode === "dark" ? (
      <LightModeIcon fontSize="small" />
    ) : (
      <DarkModeIcon fontSize="small" />
    )}

    <Switch
      checked={mode === "dark"}
      size="small"
      sx={{
        pointerEvents: "none", // يخلي التحكم كله من الزر
      }}
    />
  </Box>
</Tooltip>

<Button
  onClick={() =>
    window.location.href =
      "https://alaaahmed2024.github.io/alaa/#/start"
  }
  startIcon={<LoginIcon />}
  sx={{
    color: "#ffffff",
    backgroundColor: "#6c63ff",
    borderRadius: "999px",
    px: 3,
    py: 1,
    fontWeight: "bold",
    ml: 2,
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#5848e5",
      transform: "scale(1.05)",
    },
    display: { xs: "none", md: "inline-flex" },
  }}
>
  تسجيل الدخول
</Button> */}


<Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 1.5,
    ml: "auto", // هذا أهم سطر → يدفعهم لأقصى اليسار
  }}
>
  {/* زر الوضع الليلي */}
  <Tooltip title={mode === "dark" ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}>
    <Box
      onClick={toggleColorMode}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        px: 1.5,
        py: 1,
        borderRadius: "999px",
        cursor: "pointer",
      position: { xs: "absolute", md: "relative" },
    left: { xs: 8, md: "auto" },
        backgroundColor: mode === "dark"
          ? "rgba(0,0,0,0.08)"
          // : "#8f8e93ff",
          :"rgb(143 142 147 / 45%)",

        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor:
            mode === "dark"
              ? "rgba(255,255,255,0.15)"
              : "rgba(0,0,0,0.6)",
        },
      }}
    >
      {mode === "dark" ? (
        <LightModeIcon fontSize="small" />
      ) : (
        <DarkModeIcon fontSize="small" />
      )}

      <Switch
        checked={mode === "dark"}
        size="small"
        sx={{ pointerEvents: "none" }}
      />
    </Box>
  </Tooltip>



  {/* زر تسجيل الدخول */}

<Tooltip title="تسجيل الدخول للتحكم الكامل بالحساب" arrow>
  <Button 
  title="تسجيل الدخول للتحم الكامل بالحسبة"
    onClick={() =>{
        localStorage.setItem("userTypeSelect", "user")
      window.location.href =
        "https://alaaahmed2024.github.io/alaa/#/start"
        window.location.reload();
    }}

    startIcon={<LoginIcon />}
    sx={{
      color: "#ffffff",
      backgroundColor: "#6c63ff",
      borderRadius: "999px",
      px: 3,
      py: 1,
      fontWeight: "bold",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#5848e5",
        transform: "scale(1.05)",
      },
      display: { xs: "none", md: "inline-flex" },
    }}
  >
    تسجيل الدخول
  </Button>
  </Tooltip>
</Box>


        </Toolbar>


      </AppBar>

      {/* Mobile Drawer */}
     <Drawer
  anchor="right" // بالفعل من اليمين
  open={mobileOpen}
  onClose={() => setMobileOpen(false)}
  PaperProps={{
    sx: {
      backgroundColor: appBarBg,
      width: 250,
      direction: "rtl", // هذا يجعل كل النصوص من اليمين
    },
  }}
>


  <List sx={{ height: "100%", paddingRight: 2 }}>
  {tabs.map(tab => (
    <ListItem key={tab.path} disablePadding>
      <ListItemButton
        component={NavLink}
        to={tab.path}
        onClick={() => setMobileOpen(false)}
        sx={{ justifyContent: "flex-end" }}
      >
        <ListItemText
          primary={tab.label}
          sx={{ color: textColor, textAlign: "right" }}
        />
      </ListItemButton>
    </ListItem>
  ))}

  {/* زر تسجيل الدخول */}
  <Tooltip title="تسجيل الدخول للتحكم الكامل بالحساب" arrow>
  <ListItem disablePadding sx={{ mt: 2 }}>
    <ListItemButton
      title="تسجيل الدخول للتحم الكامل بالحسبة"
      onClick={() => {
            localStorage.setItem("userTypeSelect", "user")
      window.location.href =
        "https://alaaahmed2024.github.io/alaa/#/start"
        window.location.reload();
      }}



      
      sx={{
        justifyContent: "flex-end",
        backgroundColor: "#6c63ff",
        borderRadius: "8px",
        mx: 1,
        "&:hover": {
          backgroundColor: "#5848e5",
        },
      }}
    >
      <LoginIcon sx={{ color: "#fff", ml: 1 }} />
      <ListItemText
        primary="تسجيل الدخول"
        sx={{
          color: "#fff",
          textAlign: "right",
          fontWeight: "bold",
        }}
      />
    </ListItemButton>
  </ListItem>
  </Tooltip>
</List>


</Drawer>

    </>
  );
}

