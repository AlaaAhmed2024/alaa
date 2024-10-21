import "./Project1.css"
import audioSuccess from "../src/sound/success.mp3"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck , faCircleExclamation} from '@fortawesome/free-solid-svg-icons'
import { icon } from "@fortawesome/fontawesome-svg-core"



export default function Modal({isVisble ,errorMassage=null }){
  
    if(errorMassage!=null){
        var icon1 =faCircleExclamation
        
    }else{
        var icon1 =faCircleCheck
        

    }


    // let audio1 = new Audio(audioSuccess)
    // audio1.play()
if(isVisble){
    return(
        <div id="modal" >
            <div id="modal-content" style={{backgroundColor:errorMassage ? "#ffafaf":"#ffffff" }}>
                <h4 style={{backgroundColor:"#ffafaf" ,position:"static" , zIndex:"10000" , color:errorMassage ? "#8d0000":"green" , textAlign: "center"}}>{errorMassage!=null? 
                
                
                <div className="alert alert-warning alert-dismissible fade show" role="alert" style={{backgroundColor:errorMassage ? "#ffafaf":"#ffffff",
                    border: "none"}}>
                    <div style={{fontSize:"50px" , marginBottom:"20px" , paddingLeft:"20PX"}}>
                    
                   <FontAwesomeIcon icon={icon1} style={{color:errorMassage ? "#d01616": "#239c21",}} />
                   </div>
                <strong> {errorMassage}</strong> 
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div> 
                
               :
                    
                    <div className="alert alert-warning alert-dismissible fade show" role="alert" style={{backgroundColor: "#ffffff",
                        border: "none"}}>
                        <div style={{fontSize:"50px" , marginBottom:"20px" , paddingLeft:"20PX"}}>
                        
                       <FontAwesomeIcon icon={icon1} style={{color:errorMassage ? "#d01616": "#239c21",}} />
                       </div>
                    <strong>تم</strong> الحسبه علي حسب البيانات
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div> 
                    
                    
                    }</h4>
            </div>
        </div>
    )
}else{
    return(<></>)
}
 
}










// {<div class="alert alert-danger d-flex align-items-center" role="alert">
//   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
//   <div>
//     An example danger alert with an icon
//   </div>
// </div> 



//  <div class="alert alert-success d-flex align-items-center" role="alert">
//   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
//   <div>
//     An example success alert with an icon
//   </div>
// </div> 




// <div class="alert alert-primary d-flex align-items-center" role="alert">
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
//     <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
//   </svg>
//   <div>
//     An example alert with an icon
//   </div>
// </div>



//  <div class="alert alert-warning alert-dismissible fade show" role="alert">
//   <strong>Holy guacamole!</strong> You should check in on some of those fields below.
//   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
// </div> 



