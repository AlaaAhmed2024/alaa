


import CssBaseline from "@mui/material/CssBaseline";
// import "./Nologin"
import ThemeContextProvider from "./context/ThemeContext.jsx"; 
import AppNoLogin from "./appNoLogin";
import { HashRouter } from "react-router-dom";
document.documentElement.dir = "rtl";


export default function IndexVistor(){

return(
    <HashRouter>
  <ThemeContextProvider>
         <CssBaseline />
         <AppNoLogin />
  </ThemeContextProvider>

  </HashRouter>

   )

}


