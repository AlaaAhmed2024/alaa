import "./home.css";
import ahly from "../alahliLogo.svg";
import alrajhi from "../alrajhiLogo.svg";
import albilad from "../albiladLogo.svg";
import sab from "../sab.svg"
import alfransi from "../alfransi.svg"
import alinma from "../alinma.svg"

export default function HomeHrz(props) {

  
if(props.dark){
  var anmBank = props.anmLight
}else{
var anmBank = props.anm
}

  return (
    <>
        
      
       

        <div className={anmBank} style={{marginTop:"20px"}}>
          <div>
            <p style={{ fontSize: "italic", fontWeight: "bold" }}> {props.nameBank}</p>
             <p>{props.note}</p>
             <p>{props.lastUpdated}</p>
          
          </div>
          <div>
            <img alt={props.nameBank} src={props.imageBank} className="logo-home" />
          </div>
        </div>

       
       
       
      </>
    
  );
}


