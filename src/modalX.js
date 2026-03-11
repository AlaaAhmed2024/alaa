// import "./Project1.css"
// import audioSuccess from "../src/sound/success.mp3"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faCircleCheck , faCircleExclamation} from '@fortawesome/free-solid-svg-icons'
// import { icon } from "@fortawesome/fontawesome-svg-core"



// export default function ModalX({isVisble ,errorMassage=null }){
  
//     if(errorMassage!=null){
//         var icon1 =faCircleExclamation
        
//     }else{
//         var icon1 =faCircleCheck
        

//     }


//     // let audio1 = new Audio(audioSuccess)
//     // audio1.play()
// if(isVisble){
//     return(
//         <div id="modal" style={{zIndex:"10000"}}>
//             <div id="modal-content" style={{backgroundColor:errorMassage ? "#ffafaf":"#ffffff" }}>
//                 <h4 style={{backgroundColor:"#ffafaf" ,position:"static" , zIndex:"1000000" , color:errorMassage ? "#8d0000":"green" , textAlign: "center"}}>{errorMassage!=null? 
                
                
//                 <div className="alert alert-warning alert-dismissible fade show" role="alert" style={{backgroundColor:errorMassage ? "#ffafaf":"#ffffff",
//                     border: "none" , color:"#58151c"}}>
//                     <div style={{fontSize:"50px" , marginBottom:"20px" , paddingLeft:"20PX"}}>
                    
//                    <FontAwesomeIcon icon={icon1} style={{color:errorMassage ? "#d01616": "#239c21", height: ".9em"}} />
//                    </div>
//                 <strong> {errorMassage}</strong> 
      
//               </div> 
                
//                :
                    
//                     <div className="alert alert-warning alert-dismissible fade show" role="alert" style={{backgroundColor: "#ffffff",
//                         border: "none", color:"#58151c"}}>
//                         <div style={{fontSize:"50px" , marginBottom:"20px" , paddingLeft:"20PX"}}>
                        
//                        <FontAwesomeIcon icon={icon1} style={{color:errorMassage ? "#d01616": "#239c21", height: ".9em"}} />
//                        </div>
//                     <strong>تم</strong> الحسبه علي حسب البيانات
                 
//                   </div> 
                    
                    
//                     }</h4>
//             </div>
//         </div>
//     )
// }else{
//     return(<></>)
// }
 
// }


import { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
 import audioSuccess from "./sound/success.mp3";

export default function ModalX({ isVisble, errorMassage = null, darkMode = false }) {
 

    const icon1 = errorMassage ? faCircleExclamation : faCircleCheck;

  useEffect(() => {
    if (isVisble && errorMassage === null) {
      const audio = new Audio(audioSuccess);
      audio.play();
    }
  }, [isVisble, errorMassage]);

  // ألوان حسب الوضع المظلم
  const colors = {
    background: !darkMode ? (errorMassage ? "#4b1c1c" : "#1b3a1b") : (errorMassage ? "#fff3f3" : "#f0fdf4"),
    text: !darkMode ? (errorMassage ? "#ffb3b3" : "#b0e6b0") : (errorMassage ? "#8d0000" : "#1a3f1a"),
    icon: errorMassage ? (!darkMode ? "#ff4c4c" : "#d01616") : (!darkMode ? "#4cc94c" : "#239c21"),
  };

  return (
    <Modal
      show={isVisble}
      centered
      backdrop="static"
      keyboard={false}
      // contentClassName="p-4 text-center"
       contentClassName="text-center"
      dialogClassName="custom-bootstrap-modal"
    >
      <Modal.Body style={{
        backgroundColor: colors.background,
        borderRadius: "10px",
        fontSize: "20px",
        fontWeight: "bold",
        color: colors.text,
      }}>
        <div style={{ fontSize: "24px", marginBottom: "15px" , display:"inline-block"  ,marginLeft:"15px"}}>
          <FontAwesomeIcon icon={icon1} 
          
          style={{
            
            // color: colors.icon 
          color: "#239c21"
          
          }}
          
          
          />
        </div>
      <div style={{display:"inline-block"}}>
          {errorMassage
            ? (Array.isArray(errorMassage)
              ? errorMassage.map((err, i) => <div key={i}>{err}</div>)
              : <div>{errorMassage}</div>)
            : "تمت العملية بنجاح حسب البيانات"
          }
        </div>
      </Modal.Body>
    </Modal>
  );
}

