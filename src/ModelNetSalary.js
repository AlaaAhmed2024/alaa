import "./Project1.css"
export default function ModelNetSalary({isVisble ,errorMassage=null }){
if(isVisble){
    return(
        <div id="modal-net-salary" >
            <div id="modal-content" style={{backgroundColor:errorMassage ? "#ffafaf":"#ffffff"}}>
                <h5 style={{background:errorMassage ? "#ffafaf":"#ffffff",position:"static" , zIndex:"10000" , color:errorMassage ? "red":"green" , textAlign: "center"}}>{errorMassage!=null? errorMassage:"البيانات صحيحه"}</h5>
            </div>
        </div>
    )
}else{
    return(<></>)
}
 
}