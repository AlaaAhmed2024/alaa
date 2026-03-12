
import "./home.css";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import currencyLogo from "../photo/rsb.png";

export default function AlartBootstap(props) {
  const { errorMassage, darkSide, addNote, onHide } = props;

  const icon = errorMassage ? faCircleExclamation : faCircleCheck;
  const iconColor = errorMassage ? "#d01616" : "#239c21";

  const textColor = darkSide ? "black" : "white";
  const currencyClass = darkSide
    ? "currency-color"
    : "currency-color-dark";

  return (
    <Modal
      {...props}
      centered
      backdrop="static"
      keyboard={false}
      // className={`${darkSide ? "ba-img-light" : "ba-img-dark dark-lib"} max-85`}
       className={`${darkSide ? "ba-img-light" : "ba-img-dark dark-lib"} `}
    >
      <Modal.Header closeButton style={{ padding: "8px" }}>
        <Modal.Title id="contained-modal-title-vcenter">
          <FontAwesomeIcon
            icon={icon}
            style={{
              color: iconColor,
              fontSize: "25px",
              marginLeft: "10px",
              display: "inline-block",
            }}
          />
          <h5 style={{ color: textColor, display: "inline-block" }}>
            التحقق
          </h5>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>

        {errorMassage ? (
          <strong style={{ color: "#ff0404" }}>
            {Array.isArray(errorMassage)
              ? errorMassage.map((err, i) => (
                  <div key={i}>❌ {err}</div>
                ))
              : <div>❌ {errorMassage}</div>}
          </strong>
        ) : (
          <strong style={{ color: textColor, whiteSpace: "pre-line" }}>
            {addNote}
            <img
              className={currencyClass}
              src={currencyLogo}
              alt="SAR"
              style={{
                width: "15px",
                marginRight: "5px",
              }}
            />
          </strong>
        )}
      </Modal.Body>

      <Modal.Footer style={{ padding: "5px" }}>
        <Button
          variant="outline-secondary"
          style={{ width: "100%" }}
          onClick={onHide}
        >
          
          إغلاق
        </Button>
      </Modal.Footer>
    </Modal>
  );
}



// import { useEffect } from "react";
// import Modal from "react-bootstrap/Modal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleCheck, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
// import audioSuccess from "../sound/success.mp3";

// export default function AlartBootstap({ isVisble, errorMassage = null, darkMode = false }) {
//   const icon1 = errorMassage ? faCircleExclamation : faCircleCheck;

//   useEffect(() => {
//     if (isVisble && errorMassage === null) {
//       const audio = new Audio(audioSuccess);
//       audio.play();
//     }
//   }, [isVisble, errorMassage]);

//   // ألوان حسب الوضع المظلم
//   const colors = {
//     background: darkMode ? (errorMassage ? "#4b1c1c" : "#1b3a1b") : (errorMassage ? "#fff3f3" : "#f0fdf4"),
//     text: darkMode ? (errorMassage ? "#ffb3b3" : "#b0e6b0") : (errorMassage ? "#8d0000" : "#1a3f1a"),
//     icon: errorMassage ? (darkMode ? "#ff4c4c" : "#d01616") : (darkMode ? "#4cc94c" : "#239c21"),
//   };

//   return (
//     <Modal
//       show={isVisble}
//       centered
//       backdrop="static"
//       keyboard={false}
//       contentClassName="p-4 text-center"
//       dialogClassName="custom-bootstrap-modal"
//     >
//       <Modal.Body style={{
//         backgroundColor: colors.background,
//         borderRadius: "10px",
//         fontSize: "18px",
//         fontWeight: "bold",
//         color: colors.text,
//       }}>
//         <div style={{ fontSize: "45px", marginBottom: "15px" }}>
//           <FontAwesomeIcon icon={icon1} style={{ color: colors.icon }} />
//         </div>
//         <div>
//           {errorMassage
//             ? (Array.isArray(errorMassage)
//               ? errorMassage.map((err, i) => <div key={i}>{err}</div>)
//               : <div>{errorMassage}</div>)
//             : "تمت العملية بنجاح حسب البيانات"
//           }
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// }






// import "./home.css"

// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faCircleCheck , faCircleExclamation} from '@fortawesome/free-solid-svg-icons'
// import currencyLogo from "../photo/rsb.png";

// export default function AlartBootstap(props) {

//     if(props.errorMassage!=null){
//         var icon1 =faCircleExclamation
        
//     }else{
//         var icon1 =faCircleCheck
        

//     }
//   return (
//     <Modal
//       {...props}
      
//       aria-labelledby="contained-modal-title-vcenter"
//         centered
//         backdrop="static"
//         keyboard={false}
//         // className={props.classNameModelBootstrap}
//          className={props.darkSide?"ba-img-light  max-85":"  ba-img-dark dark-lib max-85"}
         

        
//     >
//       <Modal.Header closeButton style={{padding:"8px"}}>
//         <Modal.Title id="contained-modal-title-vcenter"  >
       
//           <FontAwesomeIcon icon={icon1} style={{color:props.errorMassage ? "#d01616": "#239c21" , height: ".9em",    fontSize: "25px",
//            marginLeft:" 10px" , display:"inline-block"}} />
      
//        <h5 style={{color:props.darkSide?"black":"white" , display:"inline-block"}} > {  "التحقق " }</h5>
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
        
//         <p >
// {

// props.errorMassage!=null?
// (
// <>
// <div>

//                    <strong style={{color:"#ff0404"}}> 
                    
//                   {/* {props.errorMassage.map((err, i) => (
//                    <div key={i}>{err}</div>
//                   ))}
//  */}
//  {Array.isArray(props.errorMassage)
//   ? props.errorMassage.map((err, i) => <div key={i}>{err}</div>)
//   : <div>{props.errorMassage}</div>}


//                   </strong> 
// </div>
// </>):

// (<>

// <div>
  
// <strong  style={{color:props.darkSide?"black":"white" , whiteSpace: "pre-line"   }}>


//   {props.addNote}
//                     <img
//                       className={
//                         props.darkSide ? "currency-color" : "currency-color-dark"
//                       }
//                       style={{
                        
//                         width: "15px",
//                         marginRight: "5px",
//                       }}
//                       src={currencyLogo}
//                       alt="SAR"
//                     />
  
  
//   </strong>
// </div>



// </>)

    
// }
//         </p>
//       </Modal.Body>
//       <Modal.Footer style={{padding:"5px"}}>
//         {/* <Button onClick={props.onHide}>Close</Button> */}
//          <Button  variant="outline-secondary" style={{width:"100%"}} onClick={props.onHide}>اغلاق</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }