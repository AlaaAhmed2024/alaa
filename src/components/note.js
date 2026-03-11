// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleHalfStroke, faMoon } from "@fortawesome/free-solid-svg-icons";
import './home.css'


export default function Note(props) {
  
  if(props.nameBank=="البنك الاهلي"||props.nameBank=="البنك الفرنسي"){
var animationDelayStyle = "2s, 2s"


  }else if(props.nameBank=="بنك الراجحي"||props.nameBank=="بنك الانماء"){
     var animationDelayStyle = "3s, 4s"


  }else{
    var animationDelayStyle = "4s, 6s"
  }




    if (props.pDarkSide) {
      var textMode = "داكن";
      var classNameModel = "calculation-input-loan-form";
      //var ic1 = faMoon;
      var classRotate = 0;
      var classColor = "model-light";
      var tableDark = "";
      var backColor = "link-log-dark  dark-buttom-about";
      var lastUpdatedText="text-body-secondary"
     var bacgroundFooter = "card-footer"
     var bodyBack="card h-100 card-home"
   
    
    } else {
      var textMode = "فاتح";
      var classNameModel = "calculation-input-loan-form-dark";
      //var ic1 = faCircleHalfStroke;
      var classRotate = 180;
      var classColor = "#050505";
      var tableDark = "table-Dark";
      var backColor = "link-log-dark  dark-buttom-about  back-color";
      var lastUpdatedText="text-body-secondary text-color-lastUpdatedText"
      var bacgroundFooter = "card-footer bg-dark"
      var bodyBack="card h-100 card-home-dark"
    }

    return(
        // <div className="card h-100" style={{backgroundColor:props.pDarkSide? " " :"#222944",
        //   color:props.pDarkSide? "" : "white"}}>

        <div className={bodyBack} style={{backgroundColor:props.pDarkSide? "#f2f2f2" :"#222944",
          color:props.pDarkSide? "" : "white"}}>

           <img src={props.imageBank}  alt={props.nameBank}  className={props.pDarkSide ? "logo-screen-bank  card-img-top  image-bank-move  anm-home" : "logo-screen-bank-dark card-img-top image-bank-move  anm-home-dark" } style={{height: "220px" , width:"85%", marginTop:"25px" ,animationDelay:animationDelayStyle,}}/>
              <div className="card-body">
                 <h5 className="card-title">{props.nameBank}</h5>
                 <p className="card-text">{props.note}</p>
             </div>
           <div className={bacgroundFooter} >
            <small className={lastUpdatedText}>{props.lastUpdated}</small>
           </div>
      </div>
    )
}