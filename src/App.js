
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Calculations from './Calculations';
import { createContext, useState } from 'react';
import Te from './Context/Te';
import Modal from "./Model"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash,faUser,faPhone,faEnvelope,faHashtag,faList, faLock} from '@fortawesome/free-solid-svg-icons'
import video from './hvid.f147a847.webm'
import loginlogo from './loginLogo.png'
import './components/registr.css'
import "./Project1.css"

import audioError from "./sound/error.mp3"
import audioSuccess from "./sound/success.mp3"
import audioWarning from "./sound/warning.mp3"



export const UseData=createContext(false)
function App() {

const [formInputs,setFormInput]=useState({inputName:"",inputPassword:""})

const[showModdal,setShowModal]=useState(false)
const [errorMassge ,setErrorMassge]=useState(null)
const [showPassword ,setShowPassword]=useState(false)

var name ="alaa"
const pass="123456"
const [check,setCheck]=useState(false)


function handelCheckDisable(event){

  let audio1 = new Audio(audioSuccess)
  let audio2 = new Audio(audioWarning)
  let audio3 = new Audio(audioError)

    event.preventDefault()
      setErrorMassge(null)

   const { inputName ,inputPassword  } =formInputs

   if(inputPassword!=pass && inputName!=name){
    setErrorMassge(" خطأ تاكد من الاسم و الرقم السري")
    audio3.play()
     }else if(inputPassword.length < 6 ){
          setErrorMassge("الرقم السري لا يقل عن 6 احرف")
          audio3.play()
         
    }else if(inputPassword!=pass){
          setErrorMassge(" خطأ تاكد من رقم السري")
          audio3.play()
         
     }else if(inputName!=name){
        setErrorMassge(" خطأ تاكد من الاسم")
        audio3.play()
       
      }
      setShowModal(true)


      if(inputName===name && inputPassword===pass){

        setCheck(true)
        audio1.play()
        
        }else{
         setCheck(false)
        }
};

const btnIsDisable = formInputs.inputName==''||formInputs.inputPassword==""
function handelDivClick(){
    if(showModdal==true){
    setShowModal(false)
    }
}


const [forgot , setForget]=useState(false)
const[sendEmail , setSendEmail]=useState("")
const btnIsDisableSendEmail = sendEmail==''

const [diaplay, setDisplay]= useState("display-none")

function getRandomNumber(min, max) {
  var xx= Math.floor(Math.random() * (max - min + 1)) + min;
  return xx

}

const hangleSendEmail =()=>{
   
        setDisplay('p-red');

}



if(forgot===true){
  return(
    <div style={{marginTop:"0px"}} >
    <video width="300px" height="300px" className="vedio" autoPlay loop src={video} >Your browser does not support the video tag.</video>
       <div className="video-overlay"></div>
       <div className='form-div '>
     <div className='form-login '>
       <div className="card css-login">
     <div className="ineer-container">
     <div className="form-logo">
        <div className="form-logo-ineer ">
          <img src={loginlogo} style={{width:"70%"}} alt="logo form"/>
        </div>
        </div>
        <div div className='form-logo'>
       <div className="ineer-container">
          <div className="css-text">
              <label className="css-login-lable ">رجاء تسجيل الايميل</label>
              </div>
              
     </div >
     </div>
    
  <div className="form-logo">
  <div className="input-form-login">
       <form className="flex-dir" id="loan-form-start" onSubmit={(event)=>{event.preventDefault()}} >
          <div className="circle" style={{zIndex:"-1"}}>
          <FontAwesomeIcon icon={faUser} className="photo-user" />
          </div>
          <hr></hr>
          <label htmlFor="email">Email</label>
                <div className="flex-password">

                <div className="icon-password" >
                <FontAwesomeIcon icon={faEnvelope}/>
                   </div>

                  <div style={{width:"100%"}}>
                     <input style={{margin:"0"}} name="email" id="email" type="email" className="form-control" placeholder="Email" value={sendEmail} onChange={(e)=>setSendEmail(e.target.value)} />
                   </div>
           
                 </div>
      
  
 



 
            <div className={diaplay}>
                   <p style={{margin:"0px"}}  >{sendEmail==""?"email requird":""}</p>
             </div>
             <div className="submit-container"> 
               <div>
            <button  className="submit gray back-btn" onClick={()=>setForget(false)} >Back</button>
               </div> 
             
             <div>
              <button className={btnIsDisableSendEmail? "disabled submit" :"submit gray back-btn"} disabled={btnIsDisableSendEmail} onClick={hangleSendEmail}>Send</button>
              </div> 
             </div> 
              <div className={diaplay}>
             <p>{" go to emali" +" ' "+ sendEmail + " ' " }</p>
             <p>and Back enter password</p>
             <span style={{color:"green",fontWeight:"500" }}>{getRandomNumber(1000,9999)}</span>
  
             </div>
             </form>
           </div>
        </div>
      </div>
    </div>
   </div>
 </div>
</div>

 )



 }else if(check===false){
  return(  

    <div style={{marginTop:"0px"}} onClick={handelDivClick}>
       
    <video width="300px" height="300px" className="vedio" autoPlay loop src={video} >Your browser does not support the video tag.</video>
       <div className="video-overlay">
       <div className='form-div '>
       <div className='form-login '>
     
       <div className="card css-login">
       <Modal style={{width:"100px !important" , height:"100px !important" ,background:"#ffafaf" }} isVisble={showModdal} errorMassage={errorMassge}  />
     <div className="ineer-container">

     <div className="form-logo">
    
        <div className="form-logo-ineer ">
          <img src={loginlogo} style={{width:"70%"}} alt="logo form"/>
        </div>
        </div>
<div className='form-logo'>
       <div className="ineer-container">
          <div className="css-text">
              <label className="css-login-lable ">رجاء تسجيل الدخول</label>
              </div>
              
     </div >
    </div>
   
   
  <div className="form-logo">
  <div className="input-form-login">
       <form className="flex-dir" id="loan-form-start"  onSubmit={(event)=>{event.preventDefault()}}>
          <div className="circle" style={{zIndex:"-1"}}>
          <FontAwesomeIcon icon={faUser} className="photo-user" />
          </div>
          <hr style={{margin:"5px"}}></hr>
          <label htmlFor="name">Name</label>
                <div className="flex-password">

                <div className="icon-password" >
                   <FontAwesomeIcon icon={faUser} />
                   </div>

                  <div style={{width:"100%"}}>
                     <input style={{margin:"0"}} id="name" className="form-control" value={formInputs.inputName} onChange={(event)=>{setFormInput({...formInputs , inputName:event.target.value})}}/>
                   </div>
           
                 </div>
      
     <label htmlFor="password">password</label>
      <div className="flex-password">
         <div className="icon-password">
           <FontAwesomeIcon icon={faLock} />
          </div>
           <div style={{width:"100%"}}>
              <input style={{margin:"0"}} className="form-control" type= {showPassword? "text" :"password"} autoComplete="true" value={formInputs.inputPassword} placeholder="password" id='password' onChange={(e)=>setFormInput({...formInputs , inputPassword:e.target.value})} />
           </div>

           <div className="icon-password-show" onClick={()=>setShowPassword(!showPassword)}>
              {
               showPassword? <FontAwesomeIcon icon={faEye} />:<FontAwesomeIcon icon={faEyeSlash} />  
               }
           </div>
           </div>

           <div className="forgot-password">Forgot password ?<span onClick={()=>{setForget(true)}}>Clik Here!</span></div>
    
<div> 
     <div style={{display:"inline-block" ,width:"100%"}}>
     <button className={btnIsDisable? "disabled" :""} disabled={btnIsDisable} onClick={handelCheckDisable} id="submit-loan-btn" style={{width:"100%" , marginRight:"0"}}>الدخول</button>
     </div> 

</div>
  </form>
 



</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
   )


}else{
  return(
    <div>
      <UseData.Provider value={check}>
         <Calculations/>
      </UseData.Provider>
   </div>
  )
 
}


}
export default App;




