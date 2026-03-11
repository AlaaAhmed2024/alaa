












import React, { useContext, useEffect, useState } from "react";
import "../Project1.css";
import "./all.css"

import Select from 'react-select'





import audioError from "../sound/error.mp3";
import audioSuccess from "../sound/success.mp3";
import audioWarning from "../sound/warning.mp3";
import imageCamera from "../photo/camera-solid.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleHalfStroke,
  faMoon,
  faCheck,
  faTableList,
  faCamera,
  faTrash,

 faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Cons from "./cons";


import GoogleMapReact from 'google-map-react';




import MapPicker from './MapPicker';
import { ColorModeContext } from "../Context/ThemeContext";





function AddOffers(){

      const [calulationInputs, setcalulationInputs] = useState({
        a1: "",
        a2: "",
        a3: "",
        a4: "",
        a5: "",
        a6: "",
        a7: "",
        a8: "",
        a9: "",
        aa1: "",
        aa2: "",
        aa3: "",
        aa4: "",
        aa5: "",
        aa6: "",
        aa7: "",
        aa8: "",
        aa9: "",

      })


 const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };







     const [colorSelect, setColorSelect] = useState("#f2f2f2");
    function onCangeColor(e) {
        setColorSelect(e.target.value);
      }


      //  const [darkSide, setShwoDarkSide] = useState(true);
        const { mode } = useContext(ColorModeContext); // الوضع الحالي: light / dark
      
      
            const [darkSide, setShwoDarkSide] = useState(() => mode === "dark")
        useEffect(() => {
          
        setShwoDarkSide(mode === "dark");
      }, [mode]);
      function handelDarkSide() {
        setShwoDarkSide(!darkSide);
      }




        const inputNewPersonal =
        calulationInputs.newPersonalFinance == "noNewPrsonal";

    const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDelete = () => {
    setImage(null); // نرجع كل شيء من البداية
  };



      const [image2, setImage2] = useState(null);

  const handleImageChange2 = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage2(URL.createObjectURL(file));
    }
  };

  const handleDelete2 = () => {
    setImage2(null); // نرجع كل شيء من البداية
  };




      const [image3, setImage3] = useState(null);

  const handleImageChange3 = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage3(URL.createObjectURL(file));
    }
  };

  const handleDelete3 = () => {
    setImage3(null); // نرجع كل شيء من البداية
  };


      
      // const [image, setImage] = useState(imageCamera)

const onImageChange = (event) => {
 if (event.target.files && event.target.files[0]) {
   setImage(URL.createObjectURL(event.target.files[0]));
 }
}


const AnyReactComponent = ({ text }) => <div>{text}</div>;

 
  const defaultProps = {
    center: {
      lat: 26.406506124804114,
      lng: 50.10370930157406

      
    },
    zoom: 11
  };

   
    
      if (darkSide) {
        var textMode = "داكن";
        var classNameModel = "col box box-about";
        var classNameModelPrint = "col box box-about photo-print";
        var ic1 = faMoon;
        var classRotate = 0;
        var classColor = "model-light";
        var tableDark = "";
        var backColor = "link-log-dark  dark-buttom-about";
        var backTab = "";
        var borderStyle = "3px solid rgb(41 45 72)";
      } else {
        var textMode = "فاتح";
        var classNameModel = "col box-dark box-abput";
        var classNameModelPrint = "col box-dark box-abput  photo-print";
    
        var ic1 = faCircleHalfStroke;
        var classRotate = 180;
        var classColor = "#050505";
        var tableDark = "table-Dark";
        var backColor = "link-log-dark  dark-buttom-about  back-color";
        var backTab = "#29314d";
        var borderStyle = " 3px solid #b6b1ff";
      }
    
     const [showModdal, setShowModal] = useState(false);

    function handelDivClick() {
        if (showModdal == true) {
          setShowModal(false);
        }
      }


      var className1 =
      "MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary MuiTab-fullWidth Mui-selected css-mt1cr8  button-move ";
    var className2 =
      "MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary MuiTab-fullWidth css-ysavq2 button-move ";
    var className3 = "MuiTabs-indicator css-13x8htl";
    var className4 = "MuiTouchRipple-root css-w0pj6f";
  

 const [showInCalculation, setShowInCalculation] = useState(1);

  function bnt1() {
    setShowInCalculation(1);
  }

  function bnt2() {
    setShowInCalculation(2);
  }

  function bnt3() {
    setShowInCalculation(3);
  }

  function bnt4() {
    setShowInCalculation(4);
  }

  function bnt5() {
    setShowInCalculation(5);
  }

  function bnt6() {
    setShowInCalculation(6);
  }

  function bnt7() {
    setShowInCalculation(7);
  }

        if (showInCalculation === 1) {

          var rightMove = "5px";
        } else if (showInCalculation === 2) {
          var rightMove = "15%";
         // var showCompontent = < Cons pDarkSide={darkSide} />

         var showCompontent=
           <div>


           <div className={classNameModel} id={classNameModel} style={{ marginBottom: "0px" , width:"100%" }}>
            <form
              className="flex-dir"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <h4
                style={{ textAlign: "center", margin: "0px", padding: "6px" }}
              >
                البيانات
              </h4>
              <hr></hr>

              <div style={{ width: "100%", direction: "rtl" }}>


              <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> نوع العقار</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">شقه</option>
                      <option selected value="شركه"> فيلا</option>
                      <option value="مؤسسة / شركة شخص واحد">  شقه ديبلكس</option>
                      <option value="مالكان">دور</option>
                         <option value="مالكان">روف</option>
                    </select>
               </div>

              <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد الادزار</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">1</option>
                      <option selected value="شركه"> 2</option>
                      <option value="مؤسسة / شركة شخص واحد">  3 </option>
               
                    </select>
               </div>

              <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> يوجد ملحق</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">نعم</option>
                      <option selected value="شركه"> لا</option>
                 
                    </select>
               </div>


              <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> مكان العقار</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">الدور الارضي</option>
                      <option selected value="شركه"> الدور الاول</option>
                      <option value="مؤسسة / شركة شخص واحد">  الدور الثاني </option>
                      <option value="مالكان">الدور الثالث</option>
                         <option value="مالكان">الدور الرابع</option>
                    </select>
               </div>



            



              </div>


                </form>
               </div>

           <div className={classNameModel} id={classNameModel} style={{ marginBottom: "0px" , width:"100%"}}>
                  
                  <h4        style={{ textAlign: "center", margin: "0px", padding: "6px" }}>تفاصيل الدور الارضي</h4>
                   <hr></hr>
                  <div>

                 <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد المجالس</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">0</option>
                      <option selected value="شركه"> 1</option>
                      <option value="مؤسسة / شركة شخص واحد">  2 </option>
                 <option value="مؤسسة / شركة شخص واحد">  3 </option>
                   <option value="مؤسسة / شركة شخص واحد">  4 </option>
                    <option value="مؤسسة / شركة شخص واحد">  5 </option>
                     <option value="مؤسسة / شركة شخص واحد">  6 </option>
                    <option value="مؤسسة / شركة شخص واحد">  7 </option>
                     <option value="مؤسسة / شركة شخص واحد">  8 </option>
                      <option value="مؤسسة / شركة شخص واحد">  9 </option>
                       <option value="مؤسسة / شركة شخص واحد">  10 </option>

                    </select>
               </div>  


                 <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد الصالات</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">0</option>
                      <option selected value="شركه"> 1</option>
                      <option value="مؤسسة / شركة شخص واحد">  2 </option>
                 <option value="مؤسسة / شركة شخص واحد">  3 </option>
                   <option value="مؤسسة / شركة شخص واحد">  4 </option>
                    <option value="مؤسسة / شركة شخص واحد">  5 </option>
                     <option value="مؤسسة / شركة شخص واحد">  6 </option>
                    <option value="مؤسسة / شركة شخص واحد">  7 </option>
                     <option value="مؤسسة / شركة شخص واحد">  8 </option>
                      <option value="مؤسسة / شركة شخص واحد">  9 </option>
                       <option value="مؤسسة / شركة شخص واحد">  10 </option>

                    </select>
               </div>  


                 <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد المقلط</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">0</option>
                      <option selected value="شركه"> 1</option>
                      <option value="مؤسسة / شركة شخص واحد">  2 </option>
                 <option value="مؤسسة / شركة شخص واحد">  3 </option>
                   <option value="مؤسسة / شركة شخص واحد">  4 </option>
                    <option value="مؤسسة / شركة شخص واحد">  5 </option>
                     <option value="مؤسسة / شركة شخص واحد">  6 </option>
                    <option value="مؤسسة / شركة شخص واحد">  7 </option>
                     <option value="مؤسسة / شركة شخص واحد">  8 </option>
                      <option value="مؤسسة / شركة شخص واحد">  9 </option>
                       <option value="مؤسسة / شركة شخص واحد">  10 </option>

                    </select>
               </div>  
                 <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد دورات المياة</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">0</option>
                      <option selected value="شركه"> 1</option>
                      <option value="مؤسسة / شركة شخص واحد">  2 </option>
                 <option value="مؤسسة / شركة شخص واحد">  3 </option>
                   <option value="مؤسسة / شركة شخص واحد">  4 </option>
                    <option value="مؤسسة / شركة شخص واحد">  5 </option>
                     <option value="مؤسسة / شركة شخص واحد">  6 </option>
                    <option value="مؤسسة / شركة شخص واحد">  7 </option>
                     <option value="مؤسسة / شركة شخص واحد">  8 </option>
                      <option value="مؤسسة / شركة شخص واحد">  9 </option>
                       <option value="مؤسسة / شركة شخص واحد">  10 </option>

                    </select>
               </div>  



                 <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد الغرف</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">0</option>
                      <option selected value="شركه"> 1</option>
                      <option value="مؤسسة / شركة شخص واحد">  2 </option>
                 <option value="مؤسسة / شركة شخص واحد">  3 </option>
                   <option value="مؤسسة / شركة شخص واحد">  4 </option>
                    <option value="مؤسسة / شركة شخص واحد">  5 </option>
                     <option value="مؤسسة / شركة شخص واحد">  6 </option>
                    <option value="مؤسسة / شركة شخص واحد">  7 </option>
                     <option value="مؤسسة / شركة شخص واحد">  8 </option>
                      <option value="مؤسسة / شركة شخص واحد">  9 </option>
                       <option value="مؤسسة / شركة شخص واحد">  10 </option>

                    </select>
               </div>  






                 <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد الغرف الماستر</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">0</option>
                      <option selected value="شركه"> 1</option>
                      <option value="مؤسسة / شركة شخص واحد">  2 </option>
                 <option value="مؤسسة / شركة شخص واحد">  3 </option>
                   <option value="مؤسسة / شركة شخص واحد">  4 </option>
                    <option value="مؤسسة / شركة شخص واحد">  5 </option>
                     <option value="مؤسسة / شركة شخص واحد">  6 </option>
                    <option value="مؤسسة / شركة شخص واحد">  7 </option>
                     <option value="مؤسسة / شركة شخص واحد">  8 </option>
                      <option value="مؤسسة / شركة شخص واحد">  9 </option>
                       <option value="مؤسسة / شركة شخص واحد">  10 </option>

                    </select>
               </div>  





                 <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد المطابخ</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">0</option>
                      <option selected value="شركه"> 1</option>
                      <option value="مؤسسة / شركة شخص واحد">  2 </option>
                 <option value="مؤسسة / شركة شخص واحد">  3 </option>
                   <option value="مؤسسة / شركة شخص واحد">  4 </option>
                    <option value="مؤسسة / شركة شخص واحد">  5 </option>
                     <option value="مؤسسة / شركة شخص واحد">  6 </option>
                    <option value="مؤسسة / شركة شخص واحد">  7 </option>
                     <option value="مؤسسة / شركة شخص واحد">  8 </option>
                      <option value="مؤسسة / شركة شخص واحد">  9 </option>
                       <option value="مؤسسة / شركة شخص واحد">  10 </option>

                    </select>
               </div>  










                  </div>
            </div>


            <div className={classNameModel} id={classNameModel} style={{ marginBottom: "0px" , width:"100%"}}>
                  
                  <h4       style={{ textAlign: "center", margin: "0px", padding: "6px" }}>تفاصيل الدور الاول</h4>
                   <hr></hr>
                  <div>

                 <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد المجالس</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">0</option>
                      <option selected value="شركه"> 1</option>
                      <option value="مؤسسة / شركة شخص واحد">  2 </option>
                 <option value="مؤسسة / شركة شخص واحد">  3 </option>
                   <option value="مؤسسة / شركة شخص واحد">  4 </option>
                    <option value="مؤسسة / شركة شخص واحد">  5 </option>
                     <option value="مؤسسة / شركة شخص واحد">  6 </option>
                    <option value="مؤسسة / شركة شخص واحد">  7 </option>
                     <option value="مؤسسة / شركة شخص واحد">  8 </option>
                      <option value="مؤسسة / شركة شخص واحد">  9 </option>
                       <option value="مؤسسة / شركة شخص واحد">  10 </option>

                    </select>
               </div>  


                 <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد الصالات</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">0</option>
                      <option selected value="شركه"> 1</option>
                      <option value="مؤسسة / شركة شخص واحد">  2 </option>
                 <option value="مؤسسة / شركة شخص واحد">  3 </option>
                   <option value="مؤسسة / شركة شخص واحد">  4 </option>
                    <option value="مؤسسة / شركة شخص واحد">  5 </option>
                     <option value="مؤسسة / شركة شخص واحد">  6 </option>
                    <option value="مؤسسة / شركة شخص واحد">  7 </option>
                     <option value="مؤسسة / شركة شخص واحد">  8 </option>
                      <option value="مؤسسة / شركة شخص واحد">  9 </option>
                       <option value="مؤسسة / شركة شخص واحد">  10 </option>

                    </select>
               </div>  


                 <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد المقلط</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">0</option>
                      <option selected value="شركه"> 1</option>
                      <option value="مؤسسة / شركة شخص واحد">  2 </option>
                 <option value="مؤسسة / شركة شخص واحد">  3 </option>
                   <option value="مؤسسة / شركة شخص واحد">  4 </option>
                    <option value="مؤسسة / شركة شخص واحد">  5 </option>
                     <option value="مؤسسة / شركة شخص واحد">  6 </option>
                    <option value="مؤسسة / شركة شخص واحد">  7 </option>
                     <option value="مؤسسة / شركة شخص واحد">  8 </option>
                      <option value="مؤسسة / شركة شخص واحد">  9 </option>
                       <option value="مؤسسة / شركة شخص واحد">  10 </option>

                    </select>
               </div>  
                 <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد دورات المياة</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">0</option>
                      <option selected value="شركه"> 1</option>
                      <option value="مؤسسة / شركة شخص واحد">  2 </option>
                 <option value="مؤسسة / شركة شخص واحد">  3 </option>
                   <option value="مؤسسة / شركة شخص واحد">  4 </option>
                    <option value="مؤسسة / شركة شخص واحد">  5 </option>
                     <option value="مؤسسة / شركة شخص واحد">  6 </option>
                    <option value="مؤسسة / شركة شخص واحد">  7 </option>
                     <option value="مؤسسة / شركة شخص واحد">  8 </option>
                      <option value="مؤسسة / شركة شخص واحد">  9 </option>
                       <option value="مؤسسة / شركة شخص واحد">  10 </option>

                    </select>
               </div>  



                 <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد الغرف</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">0</option>
                      <option selected value="شركه"> 1</option>
                      <option value="مؤسسة / شركة شخص واحد">  2 </option>
                 <option value="مؤسسة / شركة شخص واحد">  3 </option>
                   <option value="مؤسسة / شركة شخص واحد">  4 </option>
                    <option value="مؤسسة / شركة شخص واحد">  5 </option>
                     <option value="مؤسسة / شركة شخص واحد">  6 </option>
                    <option value="مؤسسة / شركة شخص واحد">  7 </option>
                     <option value="مؤسسة / شركة شخص واحد">  8 </option>
                      <option value="مؤسسة / شركة شخص واحد">  9 </option>
                       <option value="مؤسسة / شركة شخص واحد">  10 </option>

                    </select>
               </div>  






                 <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد الغرف الماستر</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">0</option>
                      <option selected value="شركه"> 1</option>
                      <option value="مؤسسة / شركة شخص واحد">  2 </option>
                 <option value="مؤسسة / شركة شخص واحد">  3 </option>
                   <option value="مؤسسة / شركة شخص واحد">  4 </option>
                    <option value="مؤسسة / شركة شخص واحد">  5 </option>
                     <option value="مؤسسة / شركة شخص واحد">  6 </option>
                    <option value="مؤسسة / شركة شخص واحد">  7 </option>
                     <option value="مؤسسة / شركة شخص واحد">  8 </option>
                      <option value="مؤسسة / شركة شخص واحد">  9 </option>
                       <option value="مؤسسة / شركة شخص واحد">  10 </option>

                    </select>
               </div>  





                 <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد المطابخ</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">0</option>
                      <option selected value="شركه"> 1</option>
                      <option value="مؤسسة / شركة شخص واحد">  2 </option>
                 <option value="مؤسسة / شركة شخص واحد">  3 </option>
                   <option value="مؤسسة / شركة شخص واحد">  4 </option>
                    <option value="مؤسسة / شركة شخص واحد">  5 </option>
                     <option value="مؤسسة / شركة شخص واحد">  6 </option>
                    <option value="مؤسسة / شركة شخص واحد">  7 </option>
                     <option value="مؤسسة / شركة شخص واحد">  8 </option>
                      <option value="مؤسسة / شركة شخص واحد">  9 </option>
                       <option value="مؤسسة / شركة شخص واحد">  10 </option>

                    </select>
               </div>  










                  </div>
            </div>



           <div className={classNameModel} id={classNameModel} style={{ marginBottom: "0px", width:"100%"}}>
                  
                  <h4       style={{ textAlign: "center", margin: "0px", padding: "6px" }}>تفاصيل الدور الملحق</h4>
                   <hr></hr>
                  <div>

                 <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد المجالس</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">0</option>
                      <option selected value="شركه"> 1</option>
                      <option value="مؤسسة / شركة شخص واحد">  2 </option>
                 <option value="مؤسسة / شركة شخص واحد">  3 </option>
                   <option value="مؤسسة / شركة شخص واحد">  4 </option>
                    <option value="مؤسسة / شركة شخص واحد">  5 </option>
                     <option value="مؤسسة / شركة شخص واحد">  6 </option>
                    <option value="مؤسسة / شركة شخص واحد">  7 </option>
                     <option value="مؤسسة / شركة شخص واحد">  8 </option>
                      <option value="مؤسسة / شركة شخص واحد">  9 </option>
                       <option value="مؤسسة / شركة شخص واحد">  10 </option>

                    </select>
               </div>  


                 <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد الصالات</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">0</option>
                      <option selected value="شركه"> 1</option>
                      <option value="مؤسسة / شركة شخص واحد">  2 </option>
                 <option value="مؤسسة / شركة شخص واحد">  3 </option>
                   <option value="مؤسسة / شركة شخص واحد">  4 </option>
                    <option value="مؤسسة / شركة شخص واحد">  5 </option>
                     <option value="مؤسسة / شركة شخص واحد">  6 </option>
                    <option value="مؤسسة / شركة شخص واحد">  7 </option>
                     <option value="مؤسسة / شركة شخص واحد">  8 </option>
                      <option value="مؤسسة / شركة شخص واحد">  9 </option>
                       <option value="مؤسسة / شركة شخص واحد">  10 </option>

                    </select>
               </div>  


                 <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد المقلط</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">0</option>
                      <option selected value="شركه"> 1</option>
                      <option value="مؤسسة / شركة شخص واحد">  2 </option>
                 <option value="مؤسسة / شركة شخص واحد">  3 </option>
                   <option value="مؤسسة / شركة شخص واحد">  4 </option>
                    <option value="مؤسسة / شركة شخص واحد">  5 </option>
                     <option value="مؤسسة / شركة شخص واحد">  6 </option>
                    <option value="مؤسسة / شركة شخص واحد">  7 </option>
                     <option value="مؤسسة / شركة شخص واحد">  8 </option>
                      <option value="مؤسسة / شركة شخص واحد">  9 </option>
                       <option value="مؤسسة / شركة شخص واحد">  10 </option>

                    </select>
               </div>  
                 <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد دورات المياة</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">0</option>
                      <option selected value="شركه"> 1</option>
                      <option value="مؤسسة / شركة شخص واحد">  2 </option>
                 <option value="مؤسسة / شركة شخص واحد">  3 </option>
                   <option value="مؤسسة / شركة شخص واحد">  4 </option>
                    <option value="مؤسسة / شركة شخص واحد">  5 </option>
                     <option value="مؤسسة / شركة شخص واحد">  6 </option>
                    <option value="مؤسسة / شركة شخص واحد">  7 </option>
                     <option value="مؤسسة / شركة شخص واحد">  8 </option>
                      <option value="مؤسسة / شركة شخص واحد">  9 </option>
                       <option value="مؤسسة / شركة شخص واحد">  10 </option>

                    </select>
               </div>  



                 <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد الغرف</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">0</option>
                      <option selected value="شركه"> 1</option>
                      <option value="مؤسسة / شركة شخص واحد">  2 </option>
                 <option value="مؤسسة / شركة شخص واحد">  3 </option>
                   <option value="مؤسسة / شركة شخص واحد">  4 </option>
                    <option value="مؤسسة / شركة شخص واحد">  5 </option>
                     <option value="مؤسسة / شركة شخص واحد">  6 </option>
                    <option value="مؤسسة / شركة شخص واحد">  7 </option>
                     <option value="مؤسسة / شركة شخص واحد">  8 </option>
                      <option value="مؤسسة / شركة شخص واحد">  9 </option>
                       <option value="مؤسسة / شركة شخص واحد">  10 </option>

                    </select>
               </div>  






                 <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد الغرف الماستر</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">0</option>
                      <option selected value="شركه"> 1</option>
                      <option value="مؤسسة / شركة شخص واحد">  2 </option>
                 <option value="مؤسسة / شركة شخص واحد">  3 </option>
                   <option value="مؤسسة / شركة شخص واحد">  4 </option>
                    <option value="مؤسسة / شركة شخص واحد">  5 </option>
                     <option value="مؤسسة / شركة شخص واحد">  6 </option>
                    <option value="مؤسسة / شركة شخص واحد">  7 </option>
                     <option value="مؤسسة / شركة شخص واحد">  8 </option>
                      <option value="مؤسسة / شركة شخص واحد">  9 </option>
                       <option value="مؤسسة / شركة شخص واحد">  10 </option>

                    </select>
               </div>  





                 <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد المطابخ</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">0</option>
                      <option selected value="شركه"> 1</option>
                      <option value="مؤسسة / شركة شخص واحد">  2 </option>
                 <option value="مؤسسة / شركة شخص واحد">  3 </option>
                   <option value="مؤسسة / شركة شخص واحد">  4 </option>
                    <option value="مؤسسة / شركة شخص واحد">  5 </option>
                     <option value="مؤسسة / شركة شخص واحد">  6 </option>
                    <option value="مؤسسة / شركة شخص واحد">  7 </option>
                     <option value="مؤسسة / شركة شخص واحد">  8 </option>
                      <option value="مؤسسة / شركة شخص واحد">  9 </option>
                       <option value="مؤسسة / شركة شخص واحد">  10 </option>

                    </select>
               </div>  










                  </div>
           </div>
                
        
              
          </div>

       
        } else if (showInCalculation === 3) {
          var rightMove = "30%";
          var showCompontent=
          <div>

           <div className={classNameModel} id={classNameModel} style={{ marginBottom: "0px" , width:"100%"}}>
            <form
              className="flex-dir"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              
<div >

<div style={{   justifyContent:"space-between" , flexWrap: "nowrap" ,
    display: "flex"
 
}}>

        <div style={{ textAlign: 'center', marginTop: '25px', minWidth:"22%" }}>
      
      {/* ✅ أيقونة الكاميرا (تظهر فقط إذا ما تم اختيار صورة) */}
      {!image && (
        <label htmlFor="fileInput" style={{ cursor: 'pointer', fontSize: '100px' }}>
          <div style={{fontSize:"30px"}}>
              <FontAwesomeIcon icon={faCamera}  style={{color:darkSide?"blue":"#c0c00d"}}/>

          </div>
      <div style={{fontSize:"30px"}}>
     <FontAwesomeIcon icon={faPlus} style={{color:darkSide?"blue":"#c0c00d"}} />

       </div>
    
         <div style={{fontSize:"15px"}}> صوره الصك</div>
        </label>

      )}

      {/* ✅ input مخفي لاختيار الصورة */}
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />

      {/* ✅ عرض الصورة + زر الحذف */}
      {image && (
        <div style={{ marginTop: '20px', position: 'relative', display: 'inline-block' }}>
          <img
            src={image}
            alt="عرض الصورة"
            style={{ maxWidth: '90%', height: 'auto', borderRadius: '10px' ,minHeight:"180px" , maxHeight:"180px" }}
          />

          {/* ✅ أيقونة الحذف */}
          <button
            onClick={handleDelete}
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
          <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>

        <div style={{ textAlign: 'center', marginTop: '25px' , minWidth:"22%"}}>
      
      {/* ✅ أيقونة الكاميرا (تظهر فقط إذا ما تم اختيار صورة) */}
      {!image2 && (
        <label htmlFor="fileInput2" style={{ cursor: 'pointer', fontSize: '100px' }}>
          <div style={{fontSize:"30px"}}>
              <FontAwesomeIcon icon={faCamera} style={{color:darkSide?"blue":"#c0c00d"}} />

          </div>
      <div style={{fontSize:"30px"}}>
     <FontAwesomeIcon icon={faPlus} style={{color:darkSide?"blue":"#c0c00d"}} />

       </div>
    
         <div style={{fontSize:"15px"}}> صوره السجل</div>
        </label>

      )}

      {/* ✅ input مخفي لاختيار الصورة */}
      <input
        id="fileInput2"
        type="file"
        accept="image/*"
        onChange={handleImageChange2}
        style={{ display: 'none' }}
      />

      {/* ✅ عرض الصورة + زر الحذف */}
      {image2 && (
        <div style={{ marginTop: '20px', position: 'relative', display: 'inline-block' }}>
          <img
            src={image2}
            alt="عرض الصورة"
            style={{ maxWidth: '90%', height: 'auto', borderRadius: '10px' , minHeight:"180px" , maxHeight:"180px"  }}
          />

          {/* ✅ أيقونة الحذف */}
          <button
            onClick={handleDelete2}
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
          <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>

           <div style={{ textAlign: 'center', marginTop: '25px' , minWidth:"22%"}}>
      
      {/* ✅ أيقونة الكاميرا (تظهر فقط إذا ما تم اختيار صورة) */}
      {!image2 && (
        <label htmlFor="fileInput2" style={{ cursor: 'pointer', fontSize: '100px' }}>
          <div style={{fontSize:"30px"}}>
              <FontAwesomeIcon icon={faCamera} style={{color:darkSide?"blue":"#c0c00d"}} />

          </div>
      <div style={{fontSize:"30px"}}>
     <FontAwesomeIcon icon={faPlus} style={{color:darkSide?"blue":"#c0c00d"}} />

       </div>
    
         <div style={{fontSize:"15px"}}> صوره السجل</div>
        </label>

      )}

      {/* ✅ input مخفي لاختيار الصورة */}
      <input
        id="fileInput2"
        type="file"
        accept="image/*"
        onChange={handleImageChange2}
        style={{ display: 'none' }}
      />

      {/* ✅ عرض الصورة + زر الحذف */}
      {image2 && (
        <div style={{ marginTop: '20px', position: 'relative', display: 'inline-block' }}>
          <img
            src={image2}
            alt="عرض الصورة"
            style={{ maxWidth: '90%', height: 'auto', borderRadius: '10px' , minHeight:"180px" , maxHeight:"180px"  }}
          />

          {/* ✅ أيقونة الحذف */}
          <button
            onClick={handleDelete2}
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
          <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>

           <div style={{ textAlign: 'center', marginTop: '25px' , minWidth:"22%"}}>
      
      {/* ✅ أيقونة الكاميرا (تظهر فقط إذا ما تم اختيار صورة) */}
      {!image2 && (
        <label htmlFor="fileInput2" style={{ cursor: 'pointer', fontSize: '100px' }}>
          <div style={{fontSize:"30px"}}>
              <FontAwesomeIcon icon={faCamera} style={{color:darkSide?"blue":"#c0c00d"}} />

          </div>
      <div style={{fontSize:"30px"}}>
     <FontAwesomeIcon icon={faPlus} style={{color:darkSide?"blue":"#c0c00d"}} />

       </div>
    
         <div style={{fontSize:"15px"}}> صوره السجل</div>
        </label>

      )}

      {/* ✅ input مخفي لاختيار الصورة */}
      <input
        id="fileInput2"
        type="file"
        accept="image/*"
        onChange={handleImageChange2}
        style={{ display: 'none' }}
      />

      {/* ✅ عرض الصورة + زر الحذف */}
      {image2 && (
        <div style={{ marginTop: '20px', position: 'relative', display: 'inline-block' }}>
          <img
            src={image2}
            alt="عرض الصورة"
            style={{ maxWidth: '90%', height: 'auto', borderRadius: '10px' , minHeight:"180px" , maxHeight:"180px"  }}
          />

          {/* ✅ أيقونة الحذف */}
          <button
            onClick={handleDelete2}
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
          <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>

</div>

<div style={{   justifyContent:"space-between" , flexWrap: "nowrap" ,
    display: "flex"
 
}}>

        <div style={{ textAlign: 'center', marginTop: '25px', minWidth:"22%" }}>
      
      {/* ✅ أيقونة الكاميرا (تظهر فقط إذا ما تم اختيار صورة) */}
      {!image && (
        <label htmlFor="fileInput" style={{ cursor: 'pointer', fontSize: '100px' }}>
          <div style={{fontSize:"30px"}}>
              <FontAwesomeIcon icon={faCamera}  style={{color:darkSide?"blue":"#c0c00d"}}/>

          </div>
      <div style={{fontSize:"30px"}}>
     <FontAwesomeIcon icon={faPlus} style={{color:darkSide?"blue":"#c0c00d"}} />

       </div>
    
         <div style={{fontSize:"15px"}}> صوره الصك</div>
        </label>

      )}

      {/* ✅ input مخفي لاختيار الصورة */}
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />

      {/* ✅ عرض الصورة + زر الحذف */}
      {image && (
        <div style={{ marginTop: '20px', position: 'relative', display: 'inline-block' }}>
          <img
            src={image}
            alt="عرض الصورة"
            style={{ maxWidth: '90%', height: 'auto', borderRadius: '10px' ,minHeight:"180px" , maxHeight:"180px" }}
          />

          {/* ✅ أيقونة الحذف */}
          <button
            onClick={handleDelete}
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
          <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>

        <div style={{ textAlign: 'center', marginTop: '25px' , minWidth:"22%"}}>
      
      {/* ✅ أيقونة الكاميرا (تظهر فقط إذا ما تم اختيار صورة) */}
      {!image2 && (
        <label htmlFor="fileInput2" style={{ cursor: 'pointer', fontSize: '100px' }}>
          <div style={{fontSize:"30px"}}>
              <FontAwesomeIcon icon={faCamera} style={{color:darkSide?"blue":"#c0c00d"}} />

          </div>
      <div style={{fontSize:"30px"}}>
     <FontAwesomeIcon icon={faPlus} style={{color:darkSide?"blue":"#c0c00d"}} />

       </div>
    
         <div style={{fontSize:"15px"}}> صوره السجل</div>
        </label>

      )}

      {/* ✅ input مخفي لاختيار الصورة */}
      <input
        id="fileInput2"
        type="file"
        accept="image/*"
        onChange={handleImageChange2}
        style={{ display: 'none' }}
      />

      {/* ✅ عرض الصورة + زر الحذف */}
      {image2 && (
        <div style={{ marginTop: '20px', position: 'relative', display: 'inline-block' }}>
          <img
            src={image2}
            alt="عرض الصورة"
            style={{ maxWidth: '90%', height: 'auto', borderRadius: '10px' , minHeight:"180px" , maxHeight:"180px"  }}
          />

          {/* ✅ أيقونة الحذف */}
          <button
            onClick={handleDelete2}
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
          <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>

           <div style={{ textAlign: 'center', marginTop: '25px' , minWidth:"22%"}}>
      
      {/* ✅ أيقونة الكاميرا (تظهر فقط إذا ما تم اختيار صورة) */}
      {!image2 && (
        <label htmlFor="fileInput2" style={{ cursor: 'pointer', fontSize: '100px' }}>
          <div style={{fontSize:"30px"}}>
              <FontAwesomeIcon icon={faCamera} style={{color:darkSide?"blue":"#c0c00d"}} />

          </div>
      <div style={{fontSize:"30px"}}>
     <FontAwesomeIcon icon={faPlus} style={{color:darkSide?"blue":"#c0c00d"}} />

       </div>
    
         <div style={{fontSize:"15px"}}> صوره السجل</div>
        </label>

      )}

      {/* ✅ input مخفي لاختيار الصورة */}
      <input
        id="fileInput2"
        type="file"
        accept="image/*"
        onChange={handleImageChange2}
        style={{ display: 'none' }}
      />

      {/* ✅ عرض الصورة + زر الحذف */}
      {image2 && (
        <div style={{ marginTop: '20px', position: 'relative', display: 'inline-block' }}>
          <img
            src={image2}
            alt="عرض الصورة"
            style={{ maxWidth: '90%', height: 'auto', borderRadius: '10px' , minHeight:"180px" , maxHeight:"180px"  }}
          />

          {/* ✅ أيقونة الحذف */}
          <button
            onClick={handleDelete2}
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
          <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>

           <div style={{ textAlign: 'center', marginTop: '25px' , minWidth:"22%"}}>
      
      {/* ✅ أيقونة الكاميرا (تظهر فقط إذا ما تم اختيار صورة) */}
      {!image2 && (
        <label htmlFor="fileInput2" style={{ cursor: 'pointer', fontSize: '100px' }}>
          <div style={{fontSize:"30px"}}>
              <FontAwesomeIcon icon={faCamera} style={{color:darkSide?"blue":"#c0c00d"}} />

          </div>
      <div style={{fontSize:"30px"}}>
     <FontAwesomeIcon icon={faPlus} style={{color:darkSide?"blue":"#c0c00d"}} />

       </div>
    
         <div style={{fontSize:"15px"}}> صوره السجل</div>
        </label>

      )}

      {/* ✅ input مخفي لاختيار الصورة */}
      <input
        id="fileInput2"
        type="file"
        accept="image/*"
        onChange={handleImageChange2}
        style={{ display: 'none' }}
      />

      {/* ✅ عرض الصورة + زر الحذف */}
      {image2 && (
        <div style={{ marginTop: '20px', position: 'relative', display: 'inline-block' }}>
          <img
            src={image2}
            alt="عرض الصورة"
            style={{ maxWidth: '90%', height: 'auto', borderRadius: '10px' , minHeight:"180px" , maxHeight:"180px"  }}
          />

          {/* ✅ أيقونة الحذف */}
          <button
            onClick={handleDelete2}
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
          <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>

</div>


<div style={{   justifyContent:"space-between" , flexWrap: "nowrap" ,
    display: "flex"
 
}}>

        <div style={{ textAlign: 'center', marginTop: '25px', minWidth:"22%" }}>
      
      {/* ✅ أيقونة الكاميرا (تظهر فقط إذا ما تم اختيار صورة) */}
      {!image && (
        <label htmlFor="fileInput" style={{ cursor: 'pointer', fontSize: '100px' }}>
          <div style={{fontSize:"30px"}}>
              <FontAwesomeIcon icon={faCamera}  style={{color:darkSide?"blue":"#c0c00d"}}/>

          </div>
      <div style={{fontSize:"30px"}}>
     <FontAwesomeIcon icon={faPlus} style={{color:darkSide?"blue":"#c0c00d"}} />

       </div>
    
         <div style={{fontSize:"15px"}}> صوره الصك</div>
        </label>

      )}

      {/* ✅ input مخفي لاختيار الصورة */}
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />

      {/* ✅ عرض الصورة + زر الحذف */}
      {image && (
        <div style={{ marginTop: '20px', position: 'relative', display: 'inline-block' }}>
          <img
            src={image}
            alt="عرض الصورة"
            style={{ maxWidth: '90%', height: 'auto', borderRadius: '10px' ,minHeight:"180px" , maxHeight:"180px" }}
          />

          {/* ✅ أيقونة الحذف */}
          <button
            onClick={handleDelete}
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
          <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>

        <div style={{ textAlign: 'center', marginTop: '25px' , minWidth:"22%"}}>
      
      {/* ✅ أيقونة الكاميرا (تظهر فقط إذا ما تم اختيار صورة) */}
      {!image2 && (
        <label htmlFor="fileInput2" style={{ cursor: 'pointer', fontSize: '100px' }}>
          <div style={{fontSize:"30px"}}>
              <FontAwesomeIcon icon={faCamera} style={{color:darkSide?"blue":"#c0c00d"}} />

          </div>
      <div style={{fontSize:"30px"}}>
     <FontAwesomeIcon icon={faPlus} style={{color:darkSide?"blue":"#c0c00d"}} />

       </div>
    
         <div style={{fontSize:"15px"}}> صوره السجل</div>
        </label>

      )}

      {/* ✅ input مخفي لاختيار الصورة */}
      <input
        id="fileInput2"
        type="file"
        accept="image/*"
        onChange={handleImageChange2}
        style={{ display: 'none' }}
      />

      {/* ✅ عرض الصورة + زر الحذف */}
      {image2 && (
        <div style={{ marginTop: '20px', position: 'relative', display: 'inline-block' }}>
          <img
            src={image2}
            alt="عرض الصورة"
            style={{ maxWidth: '90%', height: 'auto', borderRadius: '10px' , minHeight:"180px" , maxHeight:"180px"  }}
          />

          {/* ✅ أيقونة الحذف */}
          <button
            onClick={handleDelete2}
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
          <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>

           <div style={{ textAlign: 'center', marginTop: '25px' , minWidth:"22%"}}>
      
      {/* ✅ أيقونة الكاميرا (تظهر فقط إذا ما تم اختيار صورة) */}
      {!image2 && (
        <label htmlFor="fileInput2" style={{ cursor: 'pointer', fontSize: '100px' }}>
          <div style={{fontSize:"30px"}}>
              <FontAwesomeIcon icon={faCamera} style={{color:darkSide?"blue":"#c0c00d"}} />

          </div>
      <div style={{fontSize:"30px"}}>
     <FontAwesomeIcon icon={faPlus} style={{color:darkSide?"blue":"#c0c00d"}} />

       </div>
    
         <div style={{fontSize:"15px"}}> صوره السجل</div>
        </label>

      )}

      {/* ✅ input مخفي لاختيار الصورة */}
      <input
        id="fileInput2"
        type="file"
        accept="image/*"
        onChange={handleImageChange2}
        style={{ display: 'none' }}
      />

      {/* ✅ عرض الصورة + زر الحذف */}
      {image2 && (
        <div style={{ marginTop: '20px', position: 'relative', display: 'inline-block' }}>
          <img
            src={image2}
            alt="عرض الصورة"
            style={{ maxWidth: '90%', height: 'auto', borderRadius: '10px' , minHeight:"180px" , maxHeight:"180px"  }}
          />

          {/* ✅ أيقونة الحذف */}
          <button
            onClick={handleDelete2}
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
          <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>

           <div style={{ textAlign: 'center', marginTop: '25px' , minWidth:"22%"}}>
      
      {/* ✅ أيقونة الكاميرا (تظهر فقط إذا ما تم اختيار صورة) */}
      {!image2 && (
        <label htmlFor="fileInput2" style={{ cursor: 'pointer', fontSize: '100px' }}>
          <div style={{fontSize:"30px"}}>
              <FontAwesomeIcon icon={faCamera} style={{color:darkSide?"blue":"#c0c00d"}} />

          </div>
      <div style={{fontSize:"30px"}}>
     <FontAwesomeIcon icon={faPlus} style={{color:darkSide?"blue":"#c0c00d"}} />

       </div>
    
         <div style={{fontSize:"15px"}}> صوره السجل</div>
        </label>

      )}

      {/* ✅ input مخفي لاختيار الصورة */}
      <input
        id="fileInput2"
        type="file"
        accept="image/*"
        onChange={handleImageChange2}
        style={{ display: 'none' }}
      />

      {/* ✅ عرض الصورة + زر الحذف */}
      {image2 && (
        <div style={{ marginTop: '20px', position: 'relative', display: 'inline-block' }}>
          <img
            src={image2}
            alt="عرض الصورة"
            style={{ maxWidth: '90%', height: 'auto', borderRadius: '10px' , minHeight:"180px" , maxHeight:"180px"  }}
          />

          {/* ✅ أيقونة الحذف */}
          <button
            onClick={handleDelete2}
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
          <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>

</div>
</div>



                </form>
                </div>


          </div>
        
        } else if (showInCalculation === 4) {
          var rightMove = "45%";
          var showCompontent = <div></div>;
        } else if (showInCalculation === 5) {
          
          var rightMove = "60%";

          var showCompontent=

          <div>

           <div className={classNameModel} id={classNameModel} style={{ marginBottom: "0px" , width:"100%"}}>
            <form
              className="flex-dir"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
        <div >


<div style={{ marginBottom:"25px" , justifyContent:"space-between" , flexWrap: "nowrap" ,
    display: "flex"
 
}}>

      <label>
        <input type="checkbox"
    
        />
        مدخل سيارة
      </label>
            <label>
        <input type="checkbox"
    
        />
      حوش
      </label>
            <label>
        <input type="checkbox"
    
        />
        ملحق خارجي
      </label>


</div>

<div style={{ marginBottom:"25px" ,  justifyContent:"space-between" , flexWrap: "nowrap" ,
    display: "flex"
 
}}>

 
            <label>
        <input type="checkbox"
    
        />
      مستودع
      </label>
            <label>
        <input type="checkbox"
    
        />
    غرفه غسيل
      </label>

      <label>
        <input type="checkbox"
    
        />
       غرفه خادمه
      </label>
</div>


<div style={{ marginBottom:"25px" ,  justifyContent:"space-between" , flexWrap: "nowrap" ,
    display: "flex"
 
}}>


            <label>
        <input type="checkbox"
    
        />
      تاسيس مصعد
      </label>
            <label>
        <input type="checkbox"
    
        />
      سطح
      </label>

      <label>
        <input type="checkbox"
    
        />
       غرفه سائق
      </label>
</div>


<div style={{ marginBottom:"25px" ,  justifyContent:"space-between" , flexWrap: "nowrap" ,
    display: "flex"
 
}}>
     <label>
        <input type="checkbox"
    
        />
        مصعد مركب
      </label>

            <label>
        <input type="checkbox"
    
        />
       غرفه حارس
      </label>

           <label>
        <input type="checkbox"
    
        />
        مصعد مركب
      </label>
</div>
  
         </div>

              </form>


              

           </div>
          </div>
          
        } else if (showInCalculation === 6) {
          var rightMove = "75%";
          var showCompontent=
       
           <div>


           <div className={classNameModel} id={classNameModel} style={{ marginBottom: "0px" , width:"100%"}}>
            <form
              className="flex-dir"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
    

              <div style={{ width: "100%", direction: "rtl" }}>


              <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}>  سعر العقار</label>
         <input
                      style={{
                        background: inputNewPersonal ? "rgb(205 205 205)" : "",
                      }}
                      disabled={inputNewPersonal}
                      placeholder={inputNewPersonal ? "غير مسموح" : ""}
                      value={calulationInputs.aa5}
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa5: event.target.value,
                        });
                      }}
                    ></input>
               </div>

                <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}>  مساحه العقار</label>
                     <input
                      style={{
                        background: inputNewPersonal ? "rgb(205 205 205)" : "",
                      }}
                      disabled={inputNewPersonal}
                      placeholder={inputNewPersonal ? "غير مسموح" : ""}
                      value={calulationInputs.aa5}
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa5: event.target.value,
                        });
                      }}
                    ></input>
               </div>






              <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عدد الشوارع</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">1</option>
                      <option selected value="شركه"> 2</option>
                      <option value="مؤسسة / شركة شخص واحد">  3 </option>
                          <option value="مؤسسة / شركة شخص واحد">  4 </option>
               
                    </select>
               </div>

              <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> الواجهه 1</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">شرقية</option>
                      <option selected value="غربيه"> غربيه</option>
                        <option selected value="غربيه"> شماليه</option>
                          <option selected value="غربيه"> جنوبية</option>
                 
                    </select>
               </div>


              <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عرض الشارع 1</label>
              <input
                      style={{
                        background: inputNewPersonal ? "rgb(205 205 205)" : "",
                      }}
                      disabled={inputNewPersonal}
                      placeholder={inputNewPersonal ? "غير مسموح" : ""}
                      value={calulationInputs.aa5}
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa5: event.target.value,
                        });
                      }}
                    ></input>
               </div>



              <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> الواجهه 2</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">شرقية</option>
                      <option selected value="غربيه"> غربيه</option>
                        <option selected value="غربيه"> شماليه</option>
                          <option selected value="غربيه"> جنوبية</option>
                 
                    </select>
               </div>


              <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عرض الشارع 2</label>
              <input
                      style={{
                        background: inputNewPersonal ? "rgb(205 205 205)" : "",
                      }}
                      disabled={inputNewPersonal}
                      placeholder={inputNewPersonal ? "غير مسموح" : ""}
                      value={calulationInputs.aa5}
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa5: event.target.value,
                        });
                      }}
                    ></input>
               </div>




              <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> الواجهه 3</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">شرقية</option>
                      <option selected value="غربيه"> غربيه</option>
                        <option selected value="غربيه"> شماليه</option>
                          <option selected value="غربيه"> جنوبية</option>
                 
                    </select>
               </div>


              <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عرض الشارع 3</label>
              <input
                      style={{
                        background: inputNewPersonal ? "rgb(205 205 205)" : "",
                      }}
                      disabled={inputNewPersonal}
                      placeholder={inputNewPersonal ? "غير مسموح" : ""}
                      value={calulationInputs.aa5}
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa5: event.target.value,
                        });
                      }}
                    ></input>
               </div>





              <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> الواجهه 4</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">شرقية</option>
                      <option selected value="غربيه"> غربيه</option>
                        <option selected value="غربيه"> شماليه</option>
                          <option selected value="غربيه"> جنوبية</option>
                 
                    </select>
               </div>


              <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> عرض الشارع 4</label>
              <input
                      style={{
                        background: inputNewPersonal ? "rgb(205 205 205)" : "",
                      }}
                      disabled={inputNewPersonal}
                      placeholder={inputNewPersonal ? "غير مسموح" : ""}
                      value={calulationInputs.aa5}
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa5: event.target.value,
                        });
                      }}
                    ></input>
               </div>



            



              </div>


                </form>
               </div>

      

        
              
          </div>


        } else if (showInCalculation === 7) {
          var rightMove = "90%";


           var showCompontent = <MapPicker  />;
        }


    return(

<div style={{ marginTop: "10px" }} onClick={handelDivClick}>
      <div className="p-relative" style={{ margin: "0 6px" }}>
      
        <div
          className="row flex-mobile"
          style={{
            marginBottom: "90px",
            marginRight: "5px",
            marginLeft: "5px",
          }}
        >
          <div>
            <header
              className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionStatic css-pxz6q9"
              style={{ marginTop: "20px"  }}
              //style={{ marginTop: "20px", display: showHead ? "" : "none" }}
            >
              {/* 
              <div className="MuiTabs-root css-h1nntf" style={{backgroundColor:darkSide?"":"#29314d"}}> */}
              <div
                className="MuiTabs-root css-h1nntf"
                style={{
                  backgroundColor: darkSide
                    ? "rgb(225, 229, 237)"
                    : "rgb(41, 49, 77)",
                }}
              >
                <div
                  className="MuiTabs-scroller MuiTabs-fixed css-1anid1y"
                  style={{ overflow: "scroll", marginBottom: "0px" }}
                  // style={{ overflow: "auto", marginBottom: "0px" }}
                >
                  <div
                    aria-label="full width tabs"
                    className="MuiTabs-flexContainer css-k008qs"
                    role="tablist"
                  >
                    <button
                      className={
                        showInCalculation === 1 ? className1 : className2
                      }
                      tabindex="0"
                      type="button"
                      role="tab"
                      aria-selected="true"
                      id="full-width-tab-0"
                      aria-controls="full-width-tabpanel-0"
                      onClick={bnt1}
                    >
                      معلومات العقار
                      <span
                        className={
                          showInCalculation === 1 ? className3 : className4
                        }
                      ></span>
                    </button>
                    <button
                      className={
                        showInCalculation === 2 ? className1 : className2
                      }
                      tabindex="-1"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      id="full-width-tab-1"
                      aria-controls="full-width-tabpanel-1"
                      onClick={bnt2}
                    >
                       البيانات الاساسية
                      <span
                        className={
                          showInCalculation === 2 ? className3 : className4
                        }
                      ></span>
                    </button>

                    <button
                      className={
                        showInCalculation === 3 ? className1 : className2
                      }
                      tabindex="-1"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      id="full-width-tab-1"
                      aria-controls="full-width-tabpanel-1"
                      onClick={bnt3}
                    >
                      صور العقار 
                      <span
                        className={
                          showInCalculation === 3 ? className3 : className4
                        }
                      ></span>
                    </button>

                    <button
                      className={
                        showInCalculation === 4 ? className1 : className2
                      }
                      tabindex="-1"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      id="full-width-tab-1"
                      aria-controls="full-width-tabpanel-1"
                      onClick={bnt4}
                    >
                      الوثائق الرسميه
                      <span
                        className={
                          showInCalculation === 4 ? className3 : className4
                        }
                      ></span>
                    </button>

                    <button
                      className={
                        showInCalculation === 5 ? className1 : className2
                      }
                      tabindex="-1"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      id="full-width-tab-1"
                      aria-controls="full-width-tabpanel-1"
                      onClick={bnt5}
                    >
                       مميزات العقار
                      <span
                        className={
                          showInCalculation === 5 ? className3 : className4
                        }
                      ></span>
                    </button>

                    <button
                      className={
                        showInCalculation === 6 ? className1 : className2
                      }
                      tabindex="-1"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      id="full-width-tab-1"
                      aria-controls="full-width-tabpanel-1"
                      onClick={bnt6}
                    >
                      معلومات العقار 
                      <span
                        className={
                          showInCalculation === 6 ? className3 : className4
                        }
                      ></span>
                    </button>

                    <button
                      className={
                        showInCalculation === 7 ? className1 : className2
                      }
                      tabindex="-1"
                      type="button"
                      role="tab"
                      aria-selected="false"
                      id="full-width-tab-1"
                      aria-controls="full-width-tabpanel-1"
                      onClick={bnt7}
                    >
                       عنوان العقار
                      <span
                        className={
                          showInCalculation === 7 ? className3 : className4
                        }
                      ></span>
                    </button>
                  </div>
                  <span
                    className="MuiTabs-indicator css-13x8htl"
                    style={{ right: rightMove, width: "90px" }}
                  ></span>
                </div>
              </div>
            </header>
          </div>


<div style={{ marginTop: "10px", height: "100%" }} onClick={handelDivClick}>


      <div className="p-relative" style={{ margin: "0px 5px" }}>
        <div className="row flex-mobile" style={{ marginBottom: "60px"}}>

        {showInCalculation === 1 ? (
            <>
          <div className={classNameModel} id={classNameModel} style={{ marginBottom: "0px"}}>
            <form
              className="flex-dir"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <h4
                style={{ textAlign: "center", margin: "0px", padding: "6px" }}
              >
                البيانات
              </h4>
              <hr></hr>

              <div style={{ width: "100%", direction: "rtl" }}>


              <div  style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> النوع</label>
                    <select
                      value={calulationInputs.aa9}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa9: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="مالك">مالك</option>
                      <option selected value="شركه"> شركة</option>
                      <option value="مؤسسة / شركة شخص واحد"> مؤسسة / شركة شخص واحد</option>
                      <option value="مالكان">مالكان</option>
                    </select>
                    </div>



                    <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <label style={{ width: "49%" }}>رقم  الصك </label>
                    <input
                      style={{
                        background: inputNewPersonal ? "rgb(205 205 205)" : "",
                      }}
                      disabled={inputNewPersonal}
                      placeholder={inputNewPersonal ? "غير مسموح" : ""}
                      value={calulationInputs.aa8}
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa8: event.target.value,
                        });
                      }}
                    ></input>
                  </div>


                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <label style={{ width: "49%" }}>رقم  المخطط </label>
                    <input
                      style={{
                        background: inputNewPersonal ? "rgb(205 205 205)" : "",
                      }}
                      disabled={inputNewPersonal}
                      placeholder={inputNewPersonal ? "غير مسموح" : ""}
                      value={calulationInputs.aa7}
                      // onKeyDown={checkLength}
                      maxLength="50"
                      type="text"
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa7: event.target.value,
                        });
                      }}
                    ></input>
                  </div>

  
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <label style={{ width: "49%" }}>رقم  القطعه </label>
                    <input
                      style={{
                        background: inputNewPersonal ? "rgb(205 205 205)" : "",
                      }}
                      disabled={inputNewPersonal}
                      placeholder={inputNewPersonal ? "غير مسموح" : ""}
                      value={calulationInputs.aa6}
                      // onKeyDown={checkLength}
                      maxLength="50"
                      type="text"
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa6: event.target.value,
                        });
                      }}
                    ></input>
                  </div>

  

                  <div    style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> مدة بالاشهر</label>
                    <select
                      value={calulationInputs.aa4}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa4: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="3">3</option>
                      <option  value="4"> 4</option>
                      <option value="5">  5</option>
                      <option value="6">6</option>
                      <option  value="7"> 7</option>
                      <option value="8">  8</option>
                      <option value="9">9</option>
                      <option  value="10"> 10</option>
                      <option value="11">  11</option>
                      <option selected value="12">12</option>

                   
                    </select>
                    </div>

                    <div    style={{ display: "flex", justifyContent: "space-between" }}>
                    <label style={{ width: "49%" }}> يوجد وكاله</label>
                    <select
                      value={calulationInputs.aa3}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa3: event.target.value,
                        });
                      }}
                    >
                         {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                      <option value="نعم">نعم</option>
                      <option selected value="لا"> لا</option>
                   
                    </select>
                    </div>



                    <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <label style={{ width: "49%" }}>اسم  المالك </label>
                    <input
                      style={{
                        background: inputNewPersonal ? "rgb(205 205 205)" : "",
                      }}
                      disabled={inputNewPersonal}
                      placeholder={inputNewPersonal ? "غير مسموح" : ""}
                      value={calulationInputs.aa2}
                      // onKeyDown={checkLength}
                      maxLength="100"
                      type="text"
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa2: event.target.value,
                        });
                      }}
                    ></input>
                  </div>



                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <label style={{ width: "49%" }}>رقم  جوال المالك </label>
                    <input
                      style={{
                        background: inputNewPersonal ? "rgb(205 205 205)" : "",
                      }}
                      disabled={inputNewPersonal}
                      placeholder={inputNewPersonal ? "غير مسموح" : ""}
                      value={calulationInputs.aa1}
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          aa1: event.target.value,
                        });
                      }}
                    ></input>
                  </div>



                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <label style={{ width: "49%" }}>رقم  هويه المالك </label>
                    <input
                      style={{
                        background: inputNewPersonal ? "rgb(205 205 205)" : "",
                      }}
                      disabled={inputNewPersonal}
                      placeholder={inputNewPersonal ? "غير مسموح" : ""}
                      value={calulationInputs.a9}
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          a9: event.target.value,
                        });
                      }}
                    ></input>
                  </div>



                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <label style={{ width: "49%" }}>تاريخ  الميلاد </label>
                    <input
                      style={{
                        background: inputNewPersonal ? "rgb(205 205 205)" : "",
                      }}
                      disabled={inputNewPersonal}
                      placeholder={inputNewPersonal ? "غير مسموح" : ""}
                      value={calulationInputs.a8}
                      // value="2018-07-22"
                      // onKeyDown={checkLength}
                      maxLength="5"
                    
                      type="date"
                      id="start"
                      name="trip-start"
                     
                      min="1925-01-01"
                      max="2007-12-31" 
                      



                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          a8: event.target.value,
                        });
                      }}
                    ></input>
                  </div>

               
                  </div>
                  </form>
              </div>
              
          <div className={classNameModel} id={classNameModel} style={{ marginBottom: "0px"}}>
              <div style={{ width: "100%", direction: "rtl" }}>

              <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <label style={{ width: "49%" }}>إسم الموكل له    </label>
                    <input
                      style={{
                        background: inputNewPersonal ? "rgb(205 205 205)" : "",
                      }}
                      disabled={inputNewPersonal}
                      placeholder={inputNewPersonal ? "غير مسموح" : ""}
                      value={calulationInputs.a7}
                      // onKeyDown={checkLength}
                      maxLength="100"
                      type="text"
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          a7: event.target.value,
                        });
                      }}
                    ></input>
                  </div>

                  
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <label style={{ width: "49%" }}>

رقم جوال الموكل له</label>
                    <input
                      style={{
                        background: inputNewPersonal ? "rgb(205 205 205)" : "",
                      }}
                      disabled={inputNewPersonal}
                      placeholder={inputNewPersonal ? "غير مسموح" : ""}
                      value={calulationInputs.a6}
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          a6: event.target.value,
                        });
                      }}
                    ></input>
                  </div>


                  
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <label style={{ width: "49%" }}>

رقم هوية الموكل له    </label>
                    <input
                      style={{
                        background: inputNewPersonal ? "rgb(205 205 205)" : "",
                      }}
                      disabled={inputNewPersonal}
                      placeholder={inputNewPersonal ? "غير مسموح" : ""}
                      value={calulationInputs.a1}
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          a1: event.target.value,
                        });
                      }}
                    ></input>
                  </div>





                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <label style={{ width: "49%" }}>تاريخ ميلاد الموكل له
                    </label>
                    <input
                      style={{
                        background: inputNewPersonal ? "rgb(205 205 205)" : "",
                      }}
                      disabled={inputNewPersonal}
                      placeholder={inputNewPersonal ? "غير مسموح" : ""}
                      value={calulationInputs.a2}
                      // value="2018-07-22"
                      // onKeyDown={checkLength}
                      maxLength="5"
                    
                      type="date"
                      id="start"
                      name="trip-start"
                     
                      min="1925-01-01"
                      max="2007-12-31" 
                 
                      



                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          a2: event.target.value,
                        });
                      }}
                    ></input>
                  </div>


                  {/* <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <label style={{ width: "49%" }}>   صورة الصك </label>
                    <input
                      style={{
                        background: inputNewPersonal ? "rgb(205 205 205)" : "",
                      }}
                      disabled={inputNewPersonal}
                      placeholder={inputNewPersonal ? "غير مسموح" : ""}
                      value={calulationInputs.a3}
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="file"
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          a3: event.target.value,
                        });
                      }}
                    ></input>
                  </div>


                  
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <label style={{ width: "49%" }}>صورة الوكالة    </label>

                    
                    <input
                      style={{
                        background: inputNewPersonal ? "rgb(205 205 205)" : "",
                      }}
                      disabled={inputNewPersonal}
                      placeholder={inputNewPersonal ? "غير مسموح" : ""}
                      value={calulationInputs.a4}
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="file"
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          a4: event.target.value,
                        });
                      }}
                    ></input>
                  </div>




                  
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <label style={{ width: "49%" }}>صورة السجل    </label>





                    <input
                      style={{
                        background: inputNewPersonal ? "rgb(205 205 205)" : "",
                      }}
                      disabled={inputNewPersonal}
                      placeholder={inputNewPersonal ? "غير مسموح" : ""}
                      value={calulationInputs.a5}
                     
                    
                      maxLength="5"
                      type="file"
         
                      onChange={onImageChange}  
                      
                    >



                    </input>
                    <img style={{width:"300px" , height:"400px"}} alt="صوره" src={image} />
                    

                  </div> */}

<div style={{   justifyContent:"space-between" , flexWrap: "nowrap" ,
    display: "flex"
 
}}>

        <div style={{ textAlign: 'center', marginTop: '25px', minWidth:"45%" }}>
      
      {/* ✅ أيقونة الكاميرا (تظهر فقط إذا ما تم اختيار صورة) */}
      {!image && (
        <label htmlFor="fileInput" style={{ cursor: 'pointer', fontSize: '100px' }}>
          <div style={{fontSize:"30px"}}>
              <FontAwesomeIcon icon={faCamera}  style={{color:darkSide?"blue":"#c0c00d"}}/>

          </div>
      <div style={{fontSize:"30px"}}>
     <FontAwesomeIcon icon={faPlus} style={{color:darkSide?"blue":"#c0c00d"}} />

       </div>
    
         <div style={{fontSize:"15px"}}> صوره الصك</div>
        </label>

      )}

      {/* ✅ input مخفي لاختيار الصورة */}
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />

      {/* ✅ عرض الصورة + زر الحذف */}
      {image && (
        <div style={{ marginTop: '20px', position: 'relative', display: 'inline-block' }}>
          <img
            src={image}
            alt="عرض الصورة"
            style={{ maxWidth: '90%', height: 'auto', borderRadius: '10px' ,minHeight:"180px" , maxHeight:"180px" }}
          />

          {/* ✅ أيقونة الحذف */}
          <button
            onClick={handleDelete}
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
          <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>






        <div style={{ textAlign: 'center', marginTop: '25px' , minWidth:"45%"}}>
      
      {/* ✅ أيقونة الكاميرا (تظهر فقط إذا ما تم اختيار صورة) */}
      {!image2 && (
        <label htmlFor="fileInput2" style={{ cursor: 'pointer', fontSize: '100px' }}>
          <div style={{fontSize:"30px"}}>
              <FontAwesomeIcon icon={faCamera} style={{color:darkSide?"blue":"#c0c00d"}} />

          </div>
      <div style={{fontSize:"30px"}}>
     <FontAwesomeIcon icon={faPlus} style={{color:darkSide?"blue":"#c0c00d"}} />

       </div>
    
         <div style={{fontSize:"15px"}}> صوره السجل</div>
        </label>

      )}

      {/* ✅ input مخفي لاختيار الصورة */}
      <input
        id="fileInput2"
        type="file"
        accept="image/*"
        onChange={handleImageChange2}
        style={{ display: 'none' }}
      />

      {/* ✅ عرض الصورة + زر الحذف */}
      {image2 && (
        <div style={{ marginTop: '20px', position: 'relative', display: 'inline-block' }}>
          <img
            src={image2}
            alt="عرض الصورة"
            style={{ maxWidth: '90%', height: 'auto', borderRadius: '10px' , minHeight:"180px" , maxHeight:"180px"  }}
          />

          {/* ✅ أيقونة الحذف */}
          <button
            onClick={handleDelete2}
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
          <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>

</div>
<div>


        <div style={{ textAlign: 'center', marginTop: '25px', minWidth:"45%" }}>
      
      {/* ✅ أيقونة الكاميرا (تظهر فقط إذا ما تم اختيار صورة) */}
      {!image3 && (
        <label htmlFor="fileInput3" style={{ cursor: 'pointer', fontSize: '100px' }}>
          <div style={{fontSize:"30px"}}>
              <FontAwesomeIcon icon={faCamera} style={{color:darkSide?"blue":"#c0c00d"}}/>

          </div>
      <div style={{fontSize:"30px"}}>
     <FontAwesomeIcon icon={faPlus}  style={{color:darkSide?"blue":"#c0c00d"}} />

       </div>
    
         <div style={{fontSize:"15px"}}> صوره الوكاله</div>
        </label>

      )}

      {/* ✅ input مخفي لاختيار الصورة */}
      <input
        id="fileInput3"
        type="file"
        accept="image/*"
        onChange={handleImageChange3}
        style={{ display: 'none' }}
      />

      {/* ✅ عرض الصورة + زر الحذف */}
      {image3 && (
        <div style={{ marginTop: '20px', position: 'relative', display: 'inline-block' }}>
          <img
            src={image3}
            alt="عرض الصورة"
            style={{ maxWidth: '90%', height: 'auto', borderRadius: '10px' , minHeight:"180px" , maxHeight:"180px" }}
          />

          {/* ✅ أيقونة الحذف */}
          <button
            onClick={handleDelete3}
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '20px',
              cursor: 'pointer'
            }}
          >
          <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
    </div>
</div>








                  


{/* 
                  <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>

</div> */}

<div>

</div>






</div>




            </div>



            
</>
   ) : (
            showCompontent
          )}

                
                  </div>
                  </div>






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
                                        height: "45px",
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
                                      <div>
                                        <div style={{ margin: "0 5px" }} className="link_text">
                                          {textMode}
                                        </div>
                                      </div>
                                      <div className="color_picker">
                                        <input
                                          type="color"
                                          id="favcolor"
                                          name="favcolor"
                                          value={colorSelect}
                                          style={{
                                            backgroundColor: colorSelect,
                  
                                            width: "50px",
                                          }}
                                          title="اختار لون"
                                          onChange={(e) => onCangeColor(e)}
                                        />
                                      </div>
                                    </button>
                                  </div>

                        





          </div>
        



          </div>
          

        </div> 
    )
};

export default AddOffers;