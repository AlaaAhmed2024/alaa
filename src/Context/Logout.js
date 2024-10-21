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
 

    


