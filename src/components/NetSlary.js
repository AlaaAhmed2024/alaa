import { useContext, useEffect, useState } from "react";
import "../Project1.css";
import Modal from "../Model";
import "./netSalary.css";
import audioError from "../sound/error.mp3";
import audioSuccess from "../sound/success.mp3";
import audioWarning from "../sound/warning.mp3";
import currencyLogo from "../photo/rsb.png"

import AlartBootstap from "./alartBootstrap";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ColorModeContext } from "../Context/ThemeContext";
export default function NetSalary(props) {

  // const [darkSide, setShwoDarkSide] = useState(

  //       ()=>{

  //  const savedMode = localStorage.getItem("darkMode");
  //  if (savedMode === "true") return true;
  // if (savedMode === "false") return false;
  // return true; // الوضع الافتراضي
  //   }
  // );


    const { mode } = useContext(ColorModeContext); // الوضع الحالي: light / dark
  
  
        const [darkSide, setShwoDarkSide] = useState(() => mode === "dark")
    useEffect(() => {
      
    setShwoDarkSide(mode === "dark");
  }, [mode]);

  
    const [modalShowBootstap, setModalShowBootstap] = useState(false);
 const [showa, setShowa] = useState(false);


  function handelDarkSide() {
    // setShwoDarkSide(!darkSide);
    const newMode = !darkSide;
  setShwoDarkSide(newMode);
  localStorage.setItem("darkMode", newMode); // حفظ الوضع
  }

  if (props.pDarkSide) {
    var textMode = "داكن";
    var classNameModel = "loan-form";
      var classNameModelBootstrap = "box-dark-bootstrap ";
    var ic1 = faMoon;
    var classRotate = 0;
    var classColor = "model-light";
    var tableDark = "";
    var lableMode = "flex net-salary";
    var backColor = "link-log-dark  dark-buttom-about";
  } else if (darkSide) {
    var textMode = "داكن";
      var classNameModelBootstrap = "box-dark-bootstrap ";
    var classNameModel = "loan-form";
    var ic1 = faMoon;
    var classRotate = 0;
    var classColor = "model-light";
    var tableDark = "";
    var lableMode = "flex net-salary";
    var backColor = "link-log-dark  dark-buttom-about";
  } else {
    var textMode = "فاتح";
      var classNameModelBootstrap = "box-dark-bootstrap ";
    var classNameModel = "loan-form-dark";
    var ic1 = faCircleHalfStroke;
    var classRotate = 180;
    var classColor = "#050505";
    var tableDark = "table-Dark";
    var lableMode = "flex net-salary-dark";
    var backColor = "link-log-dark  dark-buttom-about  back-color";
  }

  const [calulationInputs, setcalulationInputs] = useState({
    total: "",
    basicSalary: "",
    job: "",
    houssing: "",
    installment: "0",
  });
  const [calulationOutputs, setCalulationOutputs] = useState({
    netSalary: "",
    netName: "",
  });

  const [showModdal, setShowModal] = useState(false);
  const [errorMassge, setErrorMassge] = useState(null);
const[currency,setCurrency]= useState(false)
  function calculation(event) {
    let audio1 = new Audio(audioSuccess);
    let audio2 = new Audio(audioWarning);
    let audio3 = new Audio(audioError);
     setCurrency(true)
       setShowa(true);

    if (calulationInputs.job === "1") {
      var netSalaryCalculation =
        1*calulationInputs.total -
        1* calulationInputs.basicSalary * 0.09 -
        1*calulationInputs.installment;
      setCalulationOutputs({
        ...calulationOutputs,
        netSalary: new Intl.NumberFormat().format(
          netSalaryCalculation.toFixed(0)
        ),
        netName: "الراتب الصافي",
      });
    } else if (calulationInputs.job === "2") {
      var netSalaryCalculation =
      1* calulationInputs.total -
      1* calulationInputs.basicSalary * 0.1 -
      1*calulationInputs.houssing * 0.1 -
      1*calulationInputs.installment;

      setCalulationOutputs({
        ...calulationOutputs,
        netSalary: new Intl.NumberFormat().format(
          netSalaryCalculation.toFixed(0)
        ),
        netName: "الراتب الصافي",
      });
    } else {
      var netSalaryCalculation =
      1*calulationInputs.total -
      1* calulationInputs.basicSalary * 0.0975 -
      1* calulationInputs.installment;
      setCalulationOutputs({
        ...calulationOutputs,
        netSalary: new Intl.NumberFormat().format(
          netSalaryCalculation.toFixed(0)
        ),
        netName: "الراتب الصافي",
      });
    }

    event.preventDefault();

  //   setErrorMassge(null);

  //   const { total, basicSalary, houssing, installment, job } = calulationInputs;
  //   if (total.length < 4 || total.length > 5) {
  //     setErrorMassge("خطأ فضلا التاكد من الراتب الاجمالي");
  //     audio3.play();
  //   } else if (basicSalary.length < 4 || basicSalary.length > 5) {
  //     setErrorMassge("خطأ تاكد من الراتب الاساسي ");
  //     audio3.play();
  //   } else if (1*basicSalary >= 1*total) {
  //     setErrorMassge("خطأ تاكد من الراتب  الاجمالي او الاساسي ");
  //     audio3.play();
  //   } else if (houssing.length > 4 && job==="2") {
  //     setErrorMassge(" تاكد من بدل السكن  ");
  //     audio3.play();
  //   } else if (houssing.length < 3 && job==="2") {
  //     setErrorMassge(" تاكد من بدل السكن  ");
  //     audio3.play();
  //   }else if (houssing==="" && job==="2") {
  //       setErrorMassge(" اكتب بدل السكن ان وجد");
  //     audio2.play();
  //   } else if (installment.length > 4) {
  //     setErrorMassge(" تاكد من قسط التسليف ");
  //     audio3.play();
  //   }

  //   setShowModal(true);
  // }

  setErrorMassge(null);

const errors = [];

const {
  total,
  basicSalary,
  houssing,
  installment,
  job
} = calulationInputs;

// التحقق من الشروط وجمع الأخطاء
if (total.length < 4 || total.length > 5) {
  errors.push("خطأ فضلا التاكد من الراتب الاجمالي");
  audio3.play();
}

if (basicSalary.length < 4 || basicSalary.length > 5) {
  errors.push("خطأ تاكد من الراتب الاساسي");
  audio3.play();
}

if (1 * basicSalary >= 1 * total) {
  errors.push(" خطأ تاكد من  الاساسي لا يزيد عن الاجمالي");
  audio3.play();
}



if(houssing !="0" && job === "2"){

if (houssing.length > 4 && job === "2") {
  errors.push("تاكد من بدل السكن او اكتب صفر");
  audio3.play();
}

if (houssing.length < 3 && job === "2") {
  errors.push("تاكد من بدل السكن");
  audio3.play();
  }
}
if (houssing === "" && job === "2") {
  errors.push("اكتب بدل السكن ان وجد او اكتب صفر");
  audio2.play();
}

if (installment.length > 4) {
  errors.push("تاكد من قسط التسليف");
  audio3.play();
}

// عرض الأخطاء أو المتابعة
if (errors.length > 0) {
  setErrorMassge(errors); // عرض الأخطاء دفعة واحدة
  setShowModal(true);
  setModalShowBootstap(true);
  return;
}

// لا يوجد أخطاء
setShowModal(true);
setModalShowBootstap(true);
  }



  const btnIsDisable =
    calulationInputs.total == "" || calulationInputs.basicSalary == "";

  function handelDivClick() {
    if (showModdal == true) {
      setShowModal(false);
    }
  }

  if (calulationInputs.job == "2") {
    var show = true;
  } else {
    show = false;
  }
  const handleNumericInput = (e, field, maxLength) => {
    const newValue = e.target.value;
  
    if (/^\d*$/.test(newValue) && newValue.length <= maxLength) {
      setcalulationInputs((prev) => ({
        ...prev,
        [field]: newValue,
      }));
    }}

  // function checkLength(e) {
  //   if (e.target.value.length === e.target.maxLength) {
  //     e.stopPropagation();
  //     e.preventDefault();
  //     return false;
  //   }
  //   return true;
  // }

  return (
    <div style={{ height: "100vh" }}>
      <div
        className={lableMode}
        style={{ marginTop: "22px" }}
        onClick={handelDivClick}
      >
        <form
        style={{ margin: " 2px 5px 10px", padding: "10px 20px",minWidth: "290px", width:"33%"}}
          className="flex-dir"
          id={classNameModel}
          onSubmit={(event) => {
            event.preventDefault();
          }}
          
        >
          <div style={{ width: "100%", direction: "rtl" }}>
            <div
              style={{
                margin: "10px",
                textAlign: "center",
                fontWeight: "bold",
                color: darkSide ? "black" : "white",
              }}
            >
              حساب الراتب الصافي
            </div>
            </div>
            <div style={{ width: "100%", direction: "rtl" }} className="input-container">
            <label style={{ marginTop: "2px", marginBottom: "1px"  ,  width:"100% " , display:"block"}}>

              {" "}
              الوظيفه
            </label>
           
            <select
              value={calulationInputs.job}
              style={{  width:"100% "}}

              
              onChange={(event) => {
                setcalulationInputs({
                  ...calulationInputs,
                  job: event.target.value,
                });
              }}
            >
              <option value="1"> مدني /عسكري</option>
              <option value="2">قطاع خاص</option>
              <option value="3">حكومي ساب</option>
            </select>
             <span></span>
          </div>

          <div style={{ width: "100%", direction: "rtl" }} className="input-container">
            <label style={{ marginTop: "2px", marginBottom: "1px" ,  width:"100% " , display:"block"}}>
              الراتب الاجمالي
            </label>
           
            <input
                                // onKeyDown={checkLength}
                           
                               style={{  width:"100% "}}
              value={calulationInputs.total}

                                    type="text"
                      inputMode="numeric"
                      maxLength={5}
                      
                 
                     
                      onChange={(e) => handleNumericInput(e, 'total', 10)}
         
            />
             <span></span>
          </div>

          <div style={{ width: "100%", direction: "rtl" }} className="input-container">
            <label style={{ marginTop: "2px", marginBottom: "1px" ,  width:"100% " , display:"block"}}>
              الراتب الاساسي
            </label>
           
            <input
                                            // onKeyDown={checkLength}
                                          
                                         
                                           style={{  width:"100% "}}
              value={calulationInputs.basicSalary}

                                    type="text"
                      inputMode="numeric"
                      maxLength={5}
                      
                 
                     
                      onChange={(e) => handleNumericInput(e, 'basicSalary', 10)}
          
            />
             <span></span>
          </div>

          <div
            style={{
              display: show ? "" : "none",
              width: "100%",
              direction: "rtl",
            }}
            className="input-container"
          >
            <label style={{ marginTop: "2px", marginBottom: "1px" ,  width:"100% " , display:"block" }}>
              {" "}
              بدل السكن
            </label>
           
            <input
                                             // onKeyDown={checkLength}
                                        
                                            style={{  width:"100% "}}
              value={calulationInputs.houssing}

                                                  type="text"
                      inputMode="numeric"
                      maxLength={5}
                      
                 
                     
                      onChange={(e) => handleNumericInput(e, 'houssing', 10)}
        
            />
             <span></span>
          </div>

          <div style={{ width: "100%", direction: "rtl" }} className="input-container">
            <label style={{ marginTop: "2px", marginBottom: "1px" ,  width:"100% " , display:"block" }}>
              {" "}
              بنك التسليف
            </label>
           
            <input
                                             // onKeyDown={checkLength}
                                         
                                            style={{  width:"100% " }}
              value={calulationInputs.installment}


                                                  type="text"
                      inputMode="numeric"
                      maxLength={5}
                      
                 
                     
                      onChange={(e) => handleNumericInput(e, 'installment', 10)}
      
            />
             <span></span>
          </div>

          <div
            style={{ width: "100%", direction: "rtl",maxHeight: "60px",
              marginBottom: "5px",  display: "flex"
              ,justifyContent:"space-between"  ,   borderRadius: "10px" }}
            className={calulationOutputs.netSalary == 0 ? "" : "bg-net"}
          >
            <label style={{ display:"inline-block" ,   width:"50% ", margin: "10px 15px 10px 1px"}}>
              {" "}
              {calulationOutputs.netName}{" "}
            </label>
            <p style={{display:"inline-block", padding: "6PX" ,   margin:" 5px 1px 5px 35px"}} className="net-salary-p">{calulationOutputs.netSalary}

                                  <img  className={darkSide ? "currency-color" : "currency-color-dark"}   style={{display:currency?"":"none" , width:"15px" , marginRight:"5px" }}    src={currencyLogo}
                        alt="SAR"
                  
                      />
            </p>
          </div>

          <div>
            <button
              className={btnIsDisable ? "disabled" : ""}
              disabled={btnIsDisable}
              onClick={calculation}
              id="submit-loan-btn2"
              style={{
                width: "100%",
                cursor: btnIsDisable ? "not-allowed" : "",
                margin:"8px 0"
              }}
            >
              احسب
            </button>
          </div>
        </form>
        {/* <Modal isVisble={showModdal} errorMassage={errorMassge} /> */}

            <AlartBootstap
            show={modalShowBootstap}
            onHide={() => setModalShowBootstap(false)}
            errorMassage={errorMassge}
            classNameModelBootstrap={classNameModelBootstrap}
            darkSide={darkSide}
         
         addNote={"تمت الحسبة على حسب البيانات\nوالراتب الصافي هو: " +calulationOutputs.netSalary}


          />





                <div
                  style={{
                    marginTop: "20px",
                    position: "fixed",
                    left: "2px",
                    bottom: "47px",
                    zIndex:"100",
                   maxWidth:"85%"
    
  



                  }}
                >
                  <Row  className="no-print">
                    <Col xs={12} >
                      <Toast
                        onClose={() => setShowa(false)}
                        show={showa}
                        delay={6500}
                        autohide
                         
                      >
                        <Toast.Header
                          style={{
                            direction: "ltr",
                            backgroundColor: "#DEDFDF",
                          }}
                        >
                          <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                          />
                          <strong className="me-auto">اشعار</strong>
                          <small>just now</small>
                        </Toast.Header>
                        <Toast.Body
                          style={{ backgroundColor: "#212529", color: "white" }}
                        >
                          {errorMassge == null || errorMassge == ""
                            ? " الحسبة علي حسب البيانات"
                            : errorMassge.map((err, i) => (
                                <div key={i}>{err}</div>
                              ))
                            
                            
                    



                            
                            }
                        </Toast.Body>
                      </Toast>
                    </Col>
                  </Row>
                </div>





        <div>
          <button
            className={backColor}
            activeClassName="active_sidebar"
            style={{
              borderRadius: "30px",
              maxWidth: "130px",
              position: "fixed",
              // left: "30px",
              // bottom: "48px",
                    left: "22px",
                      bottom: "42px",
              zIndex:"1"
            }}
            onClick={handelDarkSide}
          >
            <div className="icon" style={{ marginRight: "5px" }}>
              {
                <FontAwesomeIcon
                  icon={ic1}
                  rotation={classRotate}
                  style={{ color: { classColor } }}
                />
              }
            </div>
            <div style={{margin:"0 10px" }} className="link_text">
              {textMode}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
