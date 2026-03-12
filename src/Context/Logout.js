import React, { useState } from "react"
import { createContext } from "react";



if(window.location.pathname==="/login" ){
    
     var ax= false
}else{
      ax = true
}


const ShowApp=createContext()

 function Logout({children}){
     

    return(
          <ShowApp.Provider value={ax}>
           {children}
          </ShowApp.Provider>  
          )
    };




    export{Logout,ShowApp }



    
 

    
// import React, { createContext } from "react";
// import { useLocation } from "react-router-dom";

// const ShowApp = createContext();

// function Logout({ children }) {
//   const location = useLocation();
//   const ax = location.pathname !== "/login";

//   return (
//     <ShowApp.Provider value={ax}>
//       {children}
//     </ShowApp.Provider>
//   );
// }

// export { Logout, ShowApp };


