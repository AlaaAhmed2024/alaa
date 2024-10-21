import { useState } from "react"
import "../Project1.css"
import Modal from "../Model";
import "./netSalary.css";
import ModelNetSalary from "../ModelNetSalary";


import audioError from "../sound/error.mp3"
import audioSuccess from "../sound/success.mp3"
import audioWarning from "../sound/warning.mp3"



export default function NetSalaryModel2({isVisble }){
    
 
  const [calulationInputs,setcalulationInputs]=useState({
          total:"",
          basicSalary:"",
          job:"",
          houssing:"",
          installment:"0",
          });
 const [calulationOutputs,setCalulationOutputs]=useState({
            netSalary:"",
            netName :"",
          })

          const[showModdal,setShowModal]=useState(false)
          const [errorMassge ,setErrorMassge]=useState(null)
  
function calculation(event){
   
  let audio1 = new Audio(audioSuccess)
  let audio2 = new Audio(audioWarning)
  let audio3 = new Audio(audioError)


 if(calulationInputs.job==="1"){
  var netSalaryCalculation =calulationInputs.total - calulationInputs.basicSalary*.09 - calulationInputs.installment
  setCalulationOutputs({...calulationOutputs,
    netSalary:new Intl.NumberFormat().format(netSalaryCalculation.toFixed(0)),
netName :"الراتب الصافي"
  });

 }else if(calulationInputs.job==="2"){
    var netSalaryCalculation =calulationInputs.total - calulationInputs.basicSalary*.1 -calulationInputs.houssing*.1 - calulationInputs.installment
            
    setCalulationOutputs({...calulationOutputs,
        netSalary:new Intl.NumberFormat().format(netSalaryCalculation.toFixed(0)),
    netName :"الراتب الصافي"
      });
}else {
var netSalaryCalculation =calulationInputs.total - calulationInputs.basicSalary*.0975 - calulationInputs.installment
setCalulationOutputs({...calulationOutputs,
    netSalary:new Intl.NumberFormat().format(netSalaryCalculation.toFixed(0)),
netName :"الراتب الصافي"
  });    
  }


  event.preventDefault()

setErrorMassge(null)

const { total ,basicSalary,houssing,installment} =calulationInputs
 if(total.length < 4 || total.length >5){
      setErrorMassge(" فضلا التاكد من الراتب الاجمالي")
      audio3.play()
    }else if(basicSalary.length<4 ||basicSalary.length>5){
      setErrorMassge("خطأ تاكد من الراتب الاساسي ")
      audio3.play()
    }else if(basicSalary>total){
        setErrorMassge(" تاكد من الراتب  الاجمالي او الاساسي ")
        audio3.play()
      }else if(houssing.length>4){
        setErrorMassge(" تاكد من بدل السكن  ")
        audio3.play()
      }else if(installment.length>4){
        setErrorMassge(" تاكد من قسط التسليف ")
        audio3.play()
       
    }
 


  setShowModal(true)



}




   const btnIsDisable = calulationInputs.total==''||calulationInputs.basicSalary==""


   function handelDivClick(){
    if(showModdal==true){
    setShowModal(false)
    
    }
}


const [close,setClose]=useState(false)

    function handelDivClickX(){
        // if(showModdal==true){
          
            setClose(!close)
         
         
            
           
        }
       
  
        if(calulationInputs.job=="2"){
          var show =true
        }else {
          show = false
        }

    

if(close){
    return(
<div></div>
    )
}else if(isVisble){
       return(
   <div>
        <div id="modal" >
            <div id="modal-content" style={{backgroundColor:"white"}} >
         
           <button onClick={handelDivClickX}>x</button>
           <div  onClick={handelDivClick}>
           <ModelNetSalary isVisble={showModdal} errorMassage={errorMassge} />
           <div style={{margin:"20px" , textAlign:"center", fontWeight:"bold" , color:"black"}}>حساب الراتب الصافي</div>
            <form  onSubmit={(event)=>{event.preventDefault()}}>
              <div style={{width:"100%" , direction:"rtl"}}>
                <label style={{marginTop:"2px", marginBottom:"1px"}}>  الوظيفه</label>
                <select value={calulationInputs.job} onChange={(event)=>{setcalulationInputs({...calulationInputs, job:event.target.value})}}>
                 <option value="1"> مدني /عسكري</option>
                 <option value="2">قطاع خاص</option>
                 <option value="3">حكومي ساب</option>
        
               </select>
               </div>

    
               <div style={{width:"100%" , direction:"rtl"}}>
                <label style={{marginTop:"2px", marginBottom:"1px"}}>الراتب الاجمالي</label>
                <input type="number" value={calulationInputs.total} onChange={(event)=>{setcalulationInputs({...calulationInputs , total:event.target.value })}}/>
                </div>


                <div style={{width:"100%" , direction:"rtl"}}>
                <label style={{marginTop:"2px", marginBottom:"1px"}}>الراتب الاساسي</label>
                <input type="number" value={calulationInputs.basicSalary} onChange={(event)=>{setcalulationInputs({...calulationInputs , basicSalary:event.target.value })}}/>
                </div>



                <div style={{display:show? "":"none",width:"100%" , direction:"rtl"}}>
                <label style={{marginTop:"2px", marginBottom:"1px"}}> بدل السكن</label>
                <input type="number" value={calulationInputs.houssing} onChange={(event)=>{setcalulationInputs({...calulationInputs , houssing:event.target.value })}}/>
                </div>

                
                <div style={{width:"100%" , direction:"rtl"}}>
                <label style={{marginTop:"2px", marginBottom:"1px"}}>  بنك التسليف</label>
                <input type="number" value={calulationInputs.installment} onChange={(event)=>{setcalulationInputs({...calulationInputs , installment:event.target.value })}}/>
                </div>
      

                <div style={{width:"100%" , direction:"rtl", marginTop:"15px" }} className={(calulationOutputs.netSalary==0)? "":"bg-net"}>
                  <label style={{marginRight:"20px"}}> {calulationOutputs.netName} </label>
                <p className="net-salary-p">{calulationOutputs.netSalary}</p>
                </div>

                <div>
                <button className={btnIsDisable? "disabled" :""} disabled={btnIsDisable} onClick={calculation} id="submit-loan-btn2" style={{width:"100%"}}>calculation</button>
              </div>
             
              </form>
              
            </div>
            </div>
            </div>
            </div>
    )


    }else{
        return(
            <div>

            </div>
        )
    }

}


