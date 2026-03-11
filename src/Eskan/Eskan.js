import React, { useContext, useEffect, useState } from "react";
import writtenNumber from 'written-number';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import html2canvas from "html2canvas";
import axios from "axios";
import "../Project1.css";
import Modal from "../Model";
import im from "../logo.png";
import audioError from "../sound/error.mp3";
import audioSuccess from "../sound/success.mp3";
import audioWarning from "../sound/warning.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke, faMoon } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment-hijri';
import 'moment/locale/ar-sa'; // للتعريب
import CreatableSelect from "react-select/creatable";
import emkan from "../emkan.png";
import ahly from "../alahliLogo.png";
import alrajhi from "../alrajhiLogo.png";
import albilad from "../albiladLogo.png";
import alfransi from "../alfransiLlogo.png";
import alinma from "../alinmaLogo.png";
import sab from "../sabLogo.png";
import nayifat from "../nayifat.png";
import masar from "../masar.png";
import FirstDocm from "./Fist";
import Second from "./Second";
import Therd from "./therd";
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import Sixth from "./Sixth";
import Seventh from "./Seventh";

import { validateClientInputs } from "./validatorsEskan"; //   



import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/esm/Container";
import AlartBootstap from "../components/alartBootstrap";
import ModalX from "../modalX";
import { ColorModeContext } from "../Context/ThemeContext";



export default function Eskan(props) {

    const arrData = props.editClint;











  // const [darkSide, setShwoDarkSide] = useState(

  //       ()=>{

  //  const savedMode = localStorage.getItem("darkMode");
  // if (savedMode === "true") return true;
  // if (savedMode === "false") return false;
  // return true; // الوضع الافتراضي
  //   }
  

  // );
    const { mode } = useContext(ColorModeContext); // الوضع الحالي: light / dark


      const [darkSide, setShwoDarkSide] = useState(() => mode === "dark")
  useEffect(() => {
    
  setShwoDarkSide(mode === "dark");
}, [mode]);


  
  function handelDarkSide() {
    // setShwoDarkSide(!darkSide);
    const newMode = !darkSide;
  setShwoDarkSide(newMode);
  localStorage.setItem("darkMode", newMode); // حفظ الوضع
  }

  const today = new Date();

  const day = today.getDate(); // اليوم
  const month = today.getMonth() + 1; // الشهر (من 0 إلى 11، عشان كذا نضيف 1)
  const year = today.getFullYear(); // السنة
  const weekDays = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  // const dayName = weekDays[today.getDay()]; // اسم يوم الأسبوع

  const currentDayIndex = new Date().getDay(); // يرجع رقم من 0 إلى 6

  const dayName = weekDays[currentDayIndex]


  // نضيف 10 أيام
  const dueDate = new Date();
  dueDate.setDate(today.getDate() + 10);

  const dayAdd = dueDate.getDate();
  const monthAdd = dueDate.getMonth() + 1;
  const yearAdd = dueDate.getFullYear();
  const weekDaysAdd = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  const dayNameAdd = weekDays[dueDate.getDay()];


const todayHijri = moment().locale('ar-sa').format('iD/iM/iYYYY');
  const dayNameH = moment().locale('ar-sa').format('dddd');

  const [dayH, monthH, yearH] = todayHijri.split('/');



  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);
  const [modalShow4, setModalShow4] = React.useState(false);
  const [modalShow5, setModalShow5] = React.useState(false);
  const [modalShow6, setModalShow6] = React.useState(false);
  const [modalShow7, setModalShow7] = React.useState(false);
  writtenNumber.defaults.lang = 'ar'; // تعيين اللغة إلى العربية
  if (props.pDarkSide) {
    var textMode = "داكن";
    var classNameModel = "calculation-input-loan-form";
    var classNameModelBootstrap = "box-dark-bootstrap ";
        var butClass="outline-success"
    var ic1 = faMoon;
    var classRotate = 0;
    var classColor = "model-light";
    var tableDark = "table-Clean";
    var backColor = "link-log-dark  dark-buttom-about";
  } else if (darkSide) {
    var textMode = "داكن";
    var classNameModel = "calculation-input-loan-form";
        var classNameModelBootstrap = "box-dark-bootstrap ";
        var butClass="outline-success"
    var ic1 = faMoon;
    var classRotate = 0;
    var classColor = "model-light";
    var tableDark = "table-Clean";
    var backColor = "link-log-dark  dark-buttom-about";
  } else {
    var textMode = "فاتح";
    var classNameModel = "calculation-input-loan-form-dark";
        var classNameModelBootstrap = "box-dark-bootstrap ";
        var butClass="outline-primary"
    var ic1 = faCircleHalfStroke;
    var classRotate = 180;
    var classColor = "#050505";
    var tableDark = "table-Dark table-Clean";
    var backColor = "link-log-dark  dark-buttom-about  back-color";
  }










  // const [calulationInputs, setcalulationInputs] = useState({
   
  //   phone:"",
  //   currentBank: "alrajhi",
  //   documentType:"pay",
  //   person:"no",
  //   branch:"الدمام",


  //   paymentAmount:"",
  //   eskanAmount:"",


  //   customerName:"",
  //   customerId:"",
  //   customerCity:"",


  //   prsonName:"",
  //   prsonId:"",
  //   prsonCity:"",


  //   ownerName:"",
  //   ownerId:"",
  //   price:"",
  //   cheq:"",
  //  typeOwner:"one",

  //   ownerPrson:"no",
  //   ownerNameAdd:"",
  //   ownerIdAdd:"",
  //   ownerAdd:"",

  //   nowDay:day,
  //   nowMonth:month,
  //   nowYear:year,

  //   nowDayH:dayH,
  //   nowMonthH:monthH,
  //   nowYearH:yearH,


  //   addDay:dayAdd,
  //   addMonth:monthAdd,
  //   addYear:yearAdd,

  //   aqarCity:"",

  //   dayNam:dayName,
  //   toEskan:"بعد الانتهاء من شراء البيت ",
  //  userAddData: window.localStorage.getItem("name"),
  
  // });



  
    if (arrData === undefined) {
      var showHead = true;
  
 var editphone = "";
var editcurrentBank = "alrajhi";
var editdocumentType = "pay";
var editperson = "no";
var editbranch = "الدمام";

var editpaymentAmount = "";
var editeskanAmount = "";

var editcustomerName = "";
var editcustomerId = "";
var editcustomerCity = "";

var editprsonName = "";
var editprsonId = "";
var editprsonCity = "";

var editownerName = "";
var editownerId = "";
var editprice = "";
var editcheq = "";
var edittypeOwner = "one";

var editownerPrson = "no";
var editownerNameAdd = "";
var editownerIdAdd = "";
var editownerAdd = "";

var editnowDay = day;
var editnowMonth = month;
var editnowYear = year;

var editnowDayH = dayH;
var editnowMonthH = monthH;
var editnowYearH = yearH;

var editaddDay = dayAdd;
var editaddMonth = monthAdd;
var editaddYear = yearAdd;

var editaqarCity = "";

var editdayNam = dayName;
var edittoEskan = "بعد الانتهاء من شراء البيت";



    } else {
 editphone = arrData.phone;
  editcurrentBank = arrData.currentBank;
  editdocumentType = arrData.documentType;
  editperson = arrData.person;
  editbranch = arrData.branch;

  editpaymentAmount = arrData.paymentAmount;
  editeskanAmount = arrData.eskanAmount;

  editcustomerName = arrData.customerName;
  editcustomerId = arrData.customerId;
  editcustomerCity = arrData.customerCity;

  editprsonName = arrData.prsonName;
  editprsonId = arrData.prsonId;
  editprsonCity = arrData.prsonCity;

  editownerName = arrData.ownerName;
  editownerId = arrData.ownerId;
  editprice = arrData.price;
  editcheq = arrData.cheq;
  edittypeOwner = arrData.typeOwner;

  editownerPrson = arrData.ownerPrson;
  editownerNameAdd = arrData.ownerNameAdd;
  editownerIdAdd = arrData.ownerIdAdd;
  editownerAdd = arrData.ownerAdd;

  editnowDay = arrData.nowDay;
  editnowMonth = arrData.nowMonth;
  editnowYear = arrData.nowYear;

  editnowDayH = arrData.nowDayH;
  editnowMonthH = arrData.nowMonthH;
  editnowYearH = arrData.nowYearH;

  editaddDay = arrData.addDay;
  editaddMonth = arrData.addMonth;
  editaddYear = arrData.addYear;

  editaqarCity = arrData.aqarCity;

  editdayNam = arrData.dayNam;
  edittoEskan = arrData.toEskan;
 
    }
  
    // console.log(arrData.id , typeof(arrData.id))
    const [calulationInputs, setcalulationInputs] = useState({
     phone: editphone,
  currentBank: editcurrentBank,
  documentType: editdocumentType,
  person: editperson,
  branch: editbranch,

  paymentAmount: editpaymentAmount,
  eskanAmount: editeskanAmount,

  customerName: editcustomerName,
  customerId: editcustomerId,
  customerCity: editcustomerCity,

  prsonName: editprsonName,
  prsonId: editprsonId,
  prsonCity: editprsonCity,

  ownerName: editownerName,
  ownerId: editownerId,
  price: editprice,
  cheq: editcheq,
  typeOwner: edittypeOwner,

  ownerPrson: editownerPrson,
  ownerNameAdd: editownerNameAdd,
  ownerIdAdd: editownerIdAdd,
  ownerAdd: editownerAdd,

  nowDay: editnowDay,
  nowMonth: editnowMonth,
  nowYear: editnowYear,

  nowDayH: editnowDayH,
  nowMonthH: editnowMonthH,
  nowYearH: editnowYearH,

  addDay: editaddDay,
  addMonth: editaddMonth,
  addYear: editaddYear,

  aqarCity: editaqarCity,

  dayNam: editdayNam,
  toEskan: edittoEskan,
  userAddData: window.localStorage.getItem("name")
    });
  
    
    if (arrData === undefined){
     var editNumber=""
     var editNumber1=""
   
    }else{
   var editNumber=arrData.number
   var editNumber1=arrData.number1
     

    }

 const [modalShowBootstap, setModalShowBootstap] = useState(false);

      const [text, setText] = useState(editNumber);
  const [text1, setText1] = useState(editNumber1);
    
  const [cityOptions, setCityOptions] = useState([]);
    useEffect(() => {
  axios
    .get("http://localhost:8090/citiesDocuments")
    .then((res) => {
      setCityOptions(res.data); 
    })
    .catch((err) => {
      console.error("❌ خطأ في جلب المدن:", err);
      setCheckConnected(false);
    });
}, []);

 const [clientPhoneIsValid, setClientPhoneIsValid] = useState(true);
 const [phoneExistsMessage, setPhoneExistsMessage] = useState("");

  const handleNumericInputClientPhone = async (e, field, maxLength) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      setcalulationInputs((prev) => ({
        ...prev,
        [field]: value,
      }));

      if (value.length === 12) {
        if (offersPhones.includes(value)) {
          setClientPhoneIsValid(false);
          setPhoneExistsMessage("رقم الهاتف موجود بالفعل.");
        } else {
          setClientPhoneIsValid(true);
          setPhoneExistsMessage("");
        }
      } else {
        setClientPhoneIsValid(false);
        setPhoneExistsMessage("رقم الهاتف يجب أن يكون 12 رقمًا.");
      }

    }
  };

    const btnIsDisableToAdd =
    calulationInputs.customerName == "" ||
  
 
    calulationInputs.customerId.length !== 10 || // الرقم مش 12 رقم
   
   calulationInputs.phone.length !== 12 || // الرقم مش 12 رقم
  !clientPhoneIsValid; // الرقم غير صالح أو موجود





    if (arrData === undefined) {
    if (btnIsDisableToAdd) {
      var textSend = " اكمل البيانات";
    } else {
      var textSend = "اضافه للعملاء";
    }
  } else {
    if (btnIsDisableToAdd) {
      // var textSend = " اكمل البيانات";
      var textSend = "تحديث العميل";
    } else {
      var textSend = "تحديث العميل";
    }
  }






 const customSelectStyle = {
    control: (base) => ({
      ...base,
      minHeight: "40px",
      height: "40px",
      fontSize: "14px",
    }),
    valueContainer: (base) => ({
      ...base,
      height: "40px",
      padding: "0 6px",
    }),
    input: (base) => ({
      ...base,
      margin: "0px",
    }),
    indicatorsContainer: (base) => ({
      ...base,
      height: "40px",
    }),
  };







console.log(calulationInputs.eskanAmount , typeof(calulationInputs.eskanAmount ))

const handleNumericInput = (e, field, maxLength) => {
  const newValue = e.target.value;

  if (/^\d*$/.test(newValue) && newValue.length <= maxLength) {
    setcalulationInputs((prev) => ({
      ...prev,
      [field]: newValue,
    }));
  }}

const [idIsValid, setIdIsValid] = useState(true);

const handleNumericInputId = (e, field, maxLength) => {
  const value = e.target.value;

  // يُسمح فقط بالأرقام
  if (/^\d*$/.test(value)) {
    setcalulationInputs((prev) => ({
      ...prev,
      [field]: value,
    }));

    // تحقق أن العدد بالضبط 10 أرقام
    setIdIsValid(value.length === 10);
  }
};

const [idIsValidPhone, setIdIsValidphone] = useState(true);
// const handleNumericInputClientPhone = (e, field, maxLength) => {
//   const value = e.target.value;

//   // يسمح فقط بالأرقام
//   if (/^\d*$/.test(value)) {
//     setcalulationInputs((prev) => ({
//       ...prev,
//       [field]: value,
//     }));

//     // تحقق: هل العدد بالضبط 12 أرقام؟
//     if (field === "phone") {
//       setIdIsValidphone(value.length === 12);
//     }
//   }
// };
 


  

const [idPersonIsValid, setIdPersonIsValid] = useState(true);

const handleNumericInputIdPerson = (e, field, maxLength) => {
  const value = e.target.value;

  // يسمح فقط بالأرقام
  if (/^\d*$/.test(value)) {
    setcalulationInputs((prev) => ({
      ...prev,
      [field]: value,
    }));

    // تحقق: هل العدد بالضبط 10 أرقام؟
    if (field === "prsonId") {
      setIdPersonIsValid(value.length === 10);
    }
  }
};


const [ownerIdIsValid, setOwnerIdIsValid] = useState(true);
const handleNumericInputIdOwner = (e, field, maxLength) => {
  const value = e.target.value;

  // فقط أرقام
  if (/^\d*$/.test(value)) {
    setcalulationInputs((prev) => ({
      ...prev,
      [field]: value,
    }));

    // تحقق من الطول لكل حقل
    if (field === "ownerId") {
      setOwnerIdIsValid(value.length === 10);
    }
    // (أضف الشروط الأخرى لبقية الحقول إن لم تكن مضافة)

    
  }
};




const [ownerIdIsValidOwnerAddO, setOwnerIdIsValidOwnerAddO] = useState(true);
const handleNumericInputIdOwnerAddO = (e, field, maxLength) => {
  const value = e.target.value;

  // فقط أرقام
  if (/^\d*$/.test(value)) {
    setcalulationInputs((prev) => ({
      ...prev,
      [field]: value,
    }));

    // تحقق من الطول لكل حقل
    if (field === "ownerAdd") {
      setOwnerIdIsValidOwnerAddO(value.length === 10);
    }
    // (أضف الشروط الأخرى لبقية الحقول إن لم تكن مضافة)

    
  }
};



const [ownerIdIsValidAdd, setOwnerIdIsValidAdd] = useState(true);
const handleNumericInputIdOwnerAdd = (e, field, maxLength) => {
  const value = e.target.value;

  // فقط أرقام
  if (/^\d*$/.test(value)) {
    setcalulationInputs((prev) => ({
      ...prev,
      [field]: value,
    }));

    // تحقق من الطول لكل حقل
    if (field === "ownerIdAdd") {
      setOwnerIdIsValidAdd(value.length === 10);
    }
    // (أضف الشروط الأخرى لبقية الحقول إن لم تكن مضافة)

    
  }
};




  const [calulationOutputs, setCalulationOutputs] = useState({
    customerName: "",
    firstInstallment: "",
    netProfit: "",
    profitRatePersonal: "",
    age: "",
    durationPersonal: "",
    precent: "",
    total: "",
  });

  const inputPerson =
  calulationInputs.person == "no";

  const inputType=calulationInputs.documentType=="pay"

  const [showModdal, setShowModal] = useState(false);
  const [errorMassge, setErrorMassge] = useState(null);


  const printPdf = () => {
    window.print();
  };
 
  // var namePhoto = props.input.name + ".png";
  var namePhoto = "سند الامر"+".png"
    function capture() {
      html2canvas(document.querySelector('.modal-content')).then((canvas) => {
        
  
        let a = document.createElement("a");
        a.download = namePhoto;
        a.href = canvas.toDataURL("image/png");
        // a.href = canvas.toDataURL("image/jpeg");
        // var base64image = canvas.toDataURL("image/png");
        // window.open(base64image , "_blank");
        a.click();
      });
    }

    if(calulationInputs.currentBank==="alahli"){
      var imageBank =ahly
      }else if(calulationInputs.currentBank==="alrajhi"){
        var imageBank =alrajhi
      
      }else if(calulationInputs.currentBank==="albilad"){
        var imageBank =albilad
      }else if(calulationInputs.currentBank==="alfransi"){
        var imageBank =alfransi
      
      }else if(calulationInputs.currentBank==="alinma"){
        var imageBank =alinma
      
      }else if(calulationInputs.currentBank==="sab"){
        var imageBank =sab
      
      }else {
        var imageBank =""
      }
 
      const [number, setNumber] = useState(editNumber);
      // const [text, setText] = useState('');
      
      const [number1, setNumber1] = useState(editNumber1);
      // const [text1, setText1] = useState('');

      

   

        const handleChange = (e) => {
          const value = e.target.value;
          setNumber(value);
          if (!isNaN(value) && value !== '') {
            setText(writtenNumber(parseInt(value)));
          } else {
            setText('');
          }
        }


        const handleChange1 = (e) => {
          const value1 = e.target.value;

          
          setNumber1(value1);
          if (!isNaN(value1) && value1 !== '') {
            setText1(writtenNumber(parseInt(value1)));
          } else {
            setText('');
          }
        }
         
         


    //  var val=calulationInputs.eskanAmount
    //  if (!isNaN(val) && val !== '') {
    //   setText2(writtenNumber(parseInt(val)));
    // } else {
    //   setText('');
    // }

        // setText2(writtenNumber(parseInt(calulationInputs.eskanAmount)))


 const [nameIsValid, setNameIsValid] = useState(true);

 



  const validateName = (value) => {
   // const onlyLetters = /^[\u0600-\u06FFa-zA-Z\s]+$/; // حروف عربية/إنجليزية فقط
     const onlyLetters = /^[\u0600-\u06FF\s]+$/; // 
    const wordCount = value.trim().split(/\s+/).length;
    return onlyLetters.test(value) && wordCount >= 4;
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setcalulationInputs({
      ...calulationInputs,
      customerName: value,
    });
    setNameIsValid(validateName(value));
  };


 const [prsonNameIsValid, setPrsonNameIsValid] = useState(true);
const validateArabicName = (value) => {
  const onlyArabicLetters = /^[\u0600-\u06FF\s]+$/; // حروف عربية ومسافات
  const wordCount = value.trim().split(/\s+/).length;
  return onlyArabicLetters.test(value) && wordCount >= 4;
};

  const handleNameChangePrson = (event) => {
    const value = event.target.value;
    setcalulationInputs({
      ...calulationInputs,
      prsonName: value,
    });
  
  setPrsonNameIsValid(validateArabicName(value));
  };


  const [ownerNameIsValid, setOwnerNameIsValid] = useState(true);
  const validateArabicNameOwner = (value) => {
  const onlyArabicLetters = /^[\u0600-\u06FF\s]+$/; // حروف عربية ومسافات فقط
  const wordCount = value.trim().split(/\s+/).length;
  return onlyArabicLetters.test(value) && wordCount >= 4;
};
    const handleNameChangeOwner = (event) => {
    const value = event.target.value;
    setcalulationInputs({
      ...calulationInputs,
      ownerName: value,
    });
   setOwnerNameIsValid(validateArabicNameOwner(value));

  };




   const [ownerNameIsValidAdd, setOwnerNameIsValidAdd] = useState(true);
  const validateArabicNameOwnerAdd = (value) => {
  const onlyArabicLetters = /^[\u0600-\u06FF\s]+$/; // حروف عربية ومسافات فقط
  const wordCount = value.trim().split(/\s+/).length;
  return onlyArabicLetters.test(value) && wordCount >= 4;
};
    const handleNameChangeOwnerAdd = (event) => {
    const value = event.target.value;
    setcalulationInputs({
      ...calulationInputs,
      ownerNameAdd: value,
    });
   setOwnerNameIsValidAdd(validateArabicNameOwnerAdd(value));

  };
  









const [loading, setLoading] = useState();
const [showAlart, setShowAlart] = useState(false);
  
  var [checkConnected, setCheckConnected] = useState();

  const [showa, setShowa] = useState(false);
    const [addClient, setAddClient] = useState(false);


 const [offersPhones, setOffersPhones] = useState([]);
  const [offersData, setOffersData] = useState([]);



    useEffect(() => {
      const userName = localStorage.getItem("name"); // تأكد أنه موجود
      if (!userName) return;
    
      axios
        .get("http://localhost:8090/usersDocuments", {
          params: { name: userName },
        })
      
          .then((res) => {
            const data = res.data;
            setOffersData(data);
    
    
    
            // استخراج أرقام الهواتف
            const allPhones = data
              .map((item) => item.phone?.trim())
              .filter((phone) => phone); // استبعاد القيم الفارغة
    
            setOffersPhones(allPhones); // ستحتاج إلى useState
            setCheckConnected(true);
          })
          .catch((err) => {
            console.error("خطأ في جلب البيانات:", err);
            setCheckConnected(false);
          });
      }, []);
    








const fullData = {
  ...calulationInputs,
  number,
  number1,
};
  
  //  const onSubmitChange = async (e) => {

  //    if (checkConnected === false) {
  //     setErrorMassge(" عفواً لا يوجد اتصال بقاعدة البيانات ");
  //   } else {
  //     setErrorMassge(" تم  الاضافه الي العملاء   ");
  //   }
  //   setShowa(true);
  //   setShowModal(true);
  //   setAddClient(true);
 
  //     e.preventDefault();




      
  //     try {
  //       const responce = await axios.post(
  //         "http://localhost:8090/createDocuments",
  //         // calulationInputs
  //         fullData
  //       );
  
  //       console.log(responce);
  
  //       setTimeout(() => {
  //         setLoading(true);
  //         //window.location.href = "https://alaaahmed2024.github.io/alaa/#/about";
  //       }, 2300);
  //     } catch (err) {
  //       console.log("Something Wrong DataBase");
  //     }
  
  //     let audio1 = new Audio(audioSuccess);
  //     audio1.play();
  //     setShowAlart(true);
  //   };







  const onSubmitChange = async (e) => {
  e.preventDefault();
  setErrorMassge(null);

  // ✅ تحقق من البيانات
  const fullData = {
    ...calulationInputs,
    number,
    number1,
  };

  const errors = validateClientInputs(fullData, clientPhoneIsValid);
  if (errors.length > 0) {
    setErrorMassge(errors);
    setShowa(true);
    setShowModal(true);
    setModalShowBootstap(true);
    return;
  }

  if (checkConnected === false) {
    setErrorMassge(" عفواً لا يوجد اتصال بقاعدة البيانات ");
  } else {
    setErrorMassge(" تم  الاضافه الي العملاء   ");
  }

 


  setErrorMassge("جاري إضافة العميل...");
  setShowa(true);
  setShowModal(true);
  setModalShowBootstap(true);
  try {
    const responce = await axios.post(
      "http://localhost:8090/createDocuments",
      fullData
    );

    console.log(responce);

    setTimeout(() => {
      setLoading(true);
    }, 2300);
  } catch (err) {
    console.log("Something Wrong DataBase");
  }

  let audio1 = new Audio(audioSuccess);
  audio1.play();
  setShowAlart(true);
};











const updateNumberText = (value, setter) => {
  if (!isNaN(value) && value !== '') {
    setter(writtenNumber(parseInt(value)));
  } else {
    setter('');
  }
};

useEffect(() => {
  if (arrData) {
    if (arrData.number) {
      const num = arrData.number.toString();
      setNumber(num);
      updateNumberText(num, setText);
    }

    if (arrData.number1) {
      const num1 = arrData.number1.toString();
      setNumber1(num1);
      updateNumberText(num1, setText1);
    }
  }
}, [arrData]);






      // const onSubmitChangeEdit = async (ide) => {
      //   setShowa(true);
      //   setErrorMassge(" تم  تحديث  العميل   ");
      //   setAddClient(true);
      //   setShowModal(true);
      //   setTimeout(() => {
      //     // setLoading(true);
      //     if (
      //       window.location.href != "https://alaaahmed2024.github.io/alaa/#/new_documents"
      //     ) {
      //       window.location.href = "https://alaaahmed2024.github.io/alaa/#/new_documents";
      //     } else {
      //       window.location.href = "https://alaaahmed2024.github.io/alaa/#/show_documents";
      //     }
    
      //     // setShowInCalculation(1);
      //   }, 2300);
    
      //   // const{id}=useParams
      //   //  e.preventDefault();
    
      //   try {
      //     const responce = await axios.put(
      //       `http://localhost:8090/updateDocuments/${ide}`,
      //       // calulationInputs
      //       fullData
      //     );
          
      //     console.log(responce);
      //     console.log(calulationInputs);
    
      //     // setTimeout(() => {
      //     //   // setLoading(true);
      //     //   window.location.href = "https://alaaahmed2024.github.io/alaa/#/about";
      //     // }, 2300);
      //   } catch (err) {
      //     console.log("Something Wrong DataBase");
      //   }
    
      //   let audio1 = new Audio(audioSuccess);
      //   audio1.play();
      //   setShowAlart(true);
      // };




const onSubmitChangeEdit = async (ide) => {
  setErrorMassge(null);

  // ✅ تحقق من البيانات
  const fullData = {
    ...calulationInputs,
    number,
    number1,
  };

  const errors = validateClientInputs(fullData, clientPhoneIsValid);
  if (errors.length > 0) {
    setErrorMassge(errors);
    setShowa(true);
    setShowModal(true);
    setModalShowBootstap(true);
    return;
  }


 setErrorMassge("تم تحديث العرض");
  setShowa(true);
  setShowModal(true);
   
  setModalShowBootstap(true);



  setTimeout(() => {
    if (
      window.location.href !=
      "https://alaaahmed2024.github.io/alaa/#/new_documents"
    ) {
      window.location.href =
        "https://alaaahmed2024.github.io/alaa/#/new_documents";
    } else {
      window.location.href =
        "https://alaaahmed2024.github.io/alaa/#/show_documents";
    }
  }, 2300);

  try {
    const responce = await axios.put(
      `http://localhost:8090/updateDocuments/${ide}`,
      fullData
    );

    console.log(responce);
    console.log(calulationInputs);
  } catch (err) {
    console.log("Something Wrong DataBase");
  }

  let audio1 = new Audio(audioSuccess);
  audio1.play();
  setShowAlart(true);
};


    











if(calulationInputs.typeOwner=="one"){
var textName="اسم المالك"
var textId="هويه المالك"
var textNamePlac=" ادخل الاسم رباعي"
var textIdPlac="رقم الهوية"

}else{
  var textName="اسم الموسسة"
  var textId="سجل المؤسسه"
  var textNamePlac=" ادخل اسم المؤسسة "
  var textIdPlac="رقم السجل"

}




  const btnIsDisable =
    calulationInputs.netSalary == "" ||
    calulationInputs.birthMonth == "" ||
    calulationInputs.birthYear == "" ||
    calulationInputs.currentMonth == "" ||
    calulationInputs.currentYear == "" ||
    calulationInputs.basicSalary == "";

  function handelDivClick() {
    if (showModdal == true) {
      setShowModal(false);
    }
  }

    if (loading) {
    return <Eskan />;
  }
  if (loading) {
    return <Eskan />;
  }

  console.log(number1 ,typeof(number1))

  return (
    <div style={{ marginTop: "10px" }} onClick={handelDivClick}>

      {/* <div style={{ marginTop: "10px", height: "100%" }} onClick={handelDivClick}> */}




      {/* <Modal isVisble={showModdal} errorMassage={errorMassge} /> */}
          {/* <ModalX isVisble={showModdal} errorMassage={errorMassge} darkMode={darkSide}  /> */}

       <AlartBootstap
                        show={modalShowBootstap}
                        onHide={() => setModalShowBootstap(false)}
                        errorMassage={errorMassge}
                        classNameModelBootstrap={classNameModelBootstrap}
                        darkSide={darkSide}
                  
                      addNote={"تمت الاضافه الي العملاء  "}
      
            
                      />
      

      <div className="p-relative" style={{ margin: "0px 5px" }}>
        <div className="row flex-mobile" style={{ marginBottom: "200px" }}>
          <div className="col box input-css" id={classNameModel} style={{ marginBottom:"0px"}}>
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
                <label className="">البنك الحالي</label>
                     <div  className="input-wrapper">
                <select
                  className="w-60"
                  value={calulationInputs.currentBank}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      currentBank: event.target.value,
                    });
                  }}
                >
                  <option value="alahli">الاهلي</option>
                  <option selected value="alrajhi">
                    الراجحي
                  </option>
                  <option value="albilad"> البلاد</option>
                  <option value="sab">ساب</option>
                  <option value="alinma">الانماء</option>
                  <option value="riyad"> الرياض</option>
                  <option value="alfransi"> الفرنسي</option>
                  <option value="aljazira"> الجزيرة</option>
                  <option value="any">الاخري</option>
                </select>
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">نوع السند</label>
                                <div  className="input-wrapper">
                <select
                  className="w-60"
                  value={calulationInputs.documentType}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      documentType: event.target.value,
                    });
                  }}
                >
                  <option value="downPayment">الدفعه المقدمه</option>
                  <option selected value="pay">سداد الالتزامات</option>
                    
                </select>
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label className=""> يوجد كفيل</label>
                                <div  className="input-wrapper">
                <select
                  className="w-60"
                  value={calulationInputs.person}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      person: event.target.value,
                    });
                  }}
                >
                  <option value="yes">نعم</option>
                  <option selected value="no">  لا</option>

                </select>
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">فرع التوقيع</label>
                                <div  className="input-wrapper">
                <select
                  className="w-60"
                  value={calulationInputs.branch}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      branch: event.target.value,
                    });
                  }}
                >
               
                  <option selected value="الدمام">
                    الدمام
                  </option>
                  <option value="الرياض">الرياض</option>
                  <option value="القصيم">القصيم</option>
                  <option value="خميس مشيط">خميس مشيط</option>
                  <option value="جيزان "> جيزان</option>
                  <option value="جدة"> جدة</option>
                  <option value=" مكه المكرمة">مكه المكرمة</option>
                  <option value="المدينه المنوره">المدينه المنورة</option>
                  <option value="الطائف">الطائف</option>
    
                </select>
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>


              <div style={{ width: "100%", direction: "rtl" }}>
                <label className=""> اليوم</label>
                                <div  className="input-wrapper">

      <select value={calulationInputs.dayNam}
       className="w-60"
                        onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      dayNam: event.target.value,
                    });
                  }}
      
      >
        {weekDays.map((day, index) => (
          <option key={index} value={day}>
            {day}
          </option>
        ))}
      </select>
                                              <span  className="underline-input"></span>
                   
                   </div>

{/* 
                <select
                  className="w-60"
                  value={calulationInputs.dayNam}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      dayNam: event.target.value,
                    });
                  }}
                >
               
                  <option selected value="السبت">السبت</option>
                  <option value="الاحد">الاحد</option>
                  <option value="الاثنين">الاثنين</option>
                  <option value=" الثلاثاء">الثلاثاء </option>
                  <option value="الاربعاء "> الاربعاء</option>
                  <option value="الخميس"> الخميس</option>
                  <option value="الجمعه">الجمعه</option>
    
                </select> */}
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">مبلغ السداد</label>
                                <div  className="input-wrapper">
                <input
                 
                  className="w-60"
                   // onKeyDown={checkLength}
                  maxLength="6"
                  
                  // value={calulationInputs.paymentAmount}
                  // onChange={(event) => {
                  //   setcalulationInputs({
                  //     ...calulationInputs,
                  //     paymentAmount: event.target.value,
                  //   });
                  // }}

                  type="text"
                  value={number}
                  onChange={handleChange}

                />
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>



              <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">مبلغ السعي</label>
                                <div  className="input-wrapper">
                <input
                 
                  className="w-60"
                   // onKeyDown={checkLength}
                  maxLength="5"
                 
                  // value={calulationInputs.eskanAmount}
                  // onChange={(event) => {
                  //   setcalulationInputs({
                  //     ...calulationInputs,
                  //     eskanAmount: event.target.value,
                  //   });
                  // }}

                  type="text"
                  value={number1}
                  onChange={handleChange1}
                />
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>





<div style={{ width: "100%", direction: "rtl" }}>
      <label>اسم العميل</label>
      <div className="input-wrapper">
        <input
          maxLength="120"
          type="text"
          value={calulationInputs.customerName}
          onChange={handleNameChange}
          className={`w-60 input-custom ${!nameIsValid ? "input-error" : ""}`}
          placeholder="أدخل الاسم الرباعي"
          style={{border:!nameIsValid?" 1px red solid":""}}
        />
        <span className="underline-input"></span>
  
      </div>
      
            {!nameIsValid && (
          <div className="error-text">
            يجب إدخال اسم رباعي بدون أرقام أو رموز.
          </div>
        )}

    </div>

{/* 
              <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">اسم العميل</label>
                                <div  className="input-wrapper">
                <input
                 
                  className="w-60"
                   // onKeyDown={checkLength}
                  maxLength="120"
                  type="text"
                  value={calulationInputs.customerName}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      customerName: event.target.value,
                    });
                  }}
                />
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div> */}



{/* 
              <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">هويه العميل</label>
                                <div  className="input-wrapper">
     



<input
  type="text"
  inputMode="numeric"
  maxLength={10}
  className="w-60"
  placeholder="رقم هوية العميل"
  value={calulationInputs.customerId}
  onChange={(e) => handleNumericInput(e, 'customerId', 10)}
/>
                                        <span  className="underline-input"></span>
                   
                   </div>

              </div> */}

              <div style={{ width: "100%", direction: "rtl" }}>
  <label className="">هويه العميل</label>
  <div className="input-wrapper">
    <input
      style={{border:!idIsValid?" 1px red solid":""}}
      type="text"
      inputMode="numeric"
      maxLength={10}
      className={`w-60 input-custom ${!idIsValid ? "input-error" : ""}`}
      placeholder="رقم هوية العميل"
      value={calulationInputs.customerId}
      onChange={(e) => handleNumericInputId(e, 'customerId', 10)}
    />
    <span className="underline-input"></span>

 
  </div>
     {!idIsValid && (
      <div className="error-text">
        يجب أن يتكون رقم الهوية من 10 أرقام .
      </div>
    )}
</div>


              <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">عنوان العميل</label>
                                <div  className="input-wrapper w-100-city">
                {/* <input
                 
                  className="w-60"
                   // onKeyDown={checkLength}
                  maxLength="50"
                  type="text"
                  value={calulationInputs.customerCity}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      customerCity: event.target.value,
                    });
                  }}
                /> */}









 {/* <CreatableSelect
                        options={cityOptions}
                        placeholder="اختر أو أضف مدينة"
                        value={
                          cityOptions.find(
                            (opt) => opt.value === calulationInputs.selectedCity
                          ) || {
                            value: calulationInputs.selectedCity,
                            label: calulationInputs.selectedCity,
                          }
                        }
                        onChange={(selectedOption) => {
                          const selectedCity = selectedOption?.value || "";
                          if (
                            selectedCity &&
                            !cityOptions.find((c) => c.value === selectedCity)
                          ) {
                            setCityOptions([...cityOptions, selectedOption]);
                          }

                          setcalulationInputs({
                            ...calulationInputs,
                            selectedCity,
                            selectedDistricts: [],
                          });
                        }}
                        formatCreateLabel={(inputValue) => inputValue}
                        styles={customSelectStyle}
                      /> */}


                      <CreatableSelect
  options={cityOptions}
  placeholder="اختر أو أضف مدينة"
  value={
    cityOptions.find((opt) => opt.value === calulationInputs.customerCity) || {
      value: calulationInputs.customerCity,
      label: calulationInputs.customerCity,
    }
  }
  onChange={(selectedOption) => {
    const selectedCity = selectedOption?.value || "";
    if (
      selectedCity &&
      !cityOptions.find((c) => c.value === selectedCity)
    ) {
      setCityOptions([...cityOptions, selectedOption]);
    }

    setcalulationInputs((prev) => ({
      ...prev,
      customerCity: selectedCity, // ✅ هو نفسه الحقل المرسل
    }));
  }}
  formatCreateLabel={(inputValue) => inputValue}
  styles={customSelectStyle}
/>






                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>

{/* 
           <div style={{ width: "100%", direction: "rtl" }}>
  <label className="">جوال العميل</label>
  <div className="input-wrapper">
    <input
      style={{border:!idIsValidPhone?" 1px red solid":""}}
      type="text"
      inputMode="numeric"
      maxLength={10}
      className={`w-60 input-custom ${!idIsValidPhone ? "input-error" : ""}`}
      placeholder="رقم جوال العميل"
      value={calulationInputs.phone}
      onChange={(e) => handleNumericInputClientPhone(e, 'phone', 12)}
    />
    <span className="underline-input"></span>

 
  </div>
     {!idIsValidPhone && (
      <div className="error-text">
        يجب أن يتكون رقم الجوال من 12 أرقام .
      </div>
    )}
</div>
 */}



                  <div style={{ width: "100%", direction: "rtl" }}>
                    <label>رقم الجوال </label>
                    <div className="input-wrapper">
          

                      <input
                        name="phone"
                        style={{
                          border: !clientPhoneIsValid ? " 1px red solid" : "",
                        }}
                        placeholder="966..."
                        className={!clientPhoneIsValid ? "input-error" : ""}
                        value={calulationInputs.phone}
                        type="text"
                        maxLength={12}
                        inputMode="numeric"
                        onChange={(e) =>
                          handleNumericInputClientPhone(e, "phone", 12)
                        }
                      />

                      <span className="underline-input"></span>
                    </div>

                    {/* {!clientPhoneIsValid && (
                     <div className="error-text">رقم الجوال يجب ان يكون 12 رقم  .</div>
                     )} */}

                    {!clientPhoneIsValid && (
                      //  <p style={{ color: 'red', fontSize: '13px', marginTop: '5px' }}>
                      //    {phoneExistsMessage}
                      //   </p>
                      <div className="error-text"> {phoneExistsMessage}</div>
                    )}
                  </div>



              {/* <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">اسم الكفيل</label>
                                <div  className="input-wrapper">
                <input
                                       style={{
                                        background: inputPerson ? "rgb(205 205 205)" : "",
                                      }}
                                      disabled={inputPerson}
                                      placeholder={inputPerson ? "غير مسموح" : ""}
                  className="w-60"
                   // onKeyDown={checkLength}
                  maxLength="120"
                  type="text"
                  value={calulationInputs.prsonName}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      prsonName: event.target.value,
                    });
                  }}
                />
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div> */}

{calulationInputs.person=="yes"? (

<>

              <div style={{ width: "100%", direction: "rtl" }}>
  <label className="">اسم الكفيل</label>
  <div className="input-wrapper">
    <input
      style={{
        background: inputPerson ? "rgb(205 205 205)" : "",
          border:!prsonNameIsValid?" 1px red solid":""
      }}
      disabled={inputPerson}
      placeholder={inputPerson ? "غير مسموح" : "اسم الكفيل الرباعي"}
      className={`w-60 input-custom ${!prsonNameIsValid ? "input-error" : ""}`}
      maxLength="120"
      type="text"
      value={calulationInputs.prsonName}
      onChange={ handleNameChangePrson}
  
    />
    <span className="underline-input"></span>

  
  </div>
    {!prsonNameIsValid && (
      <div className="error-text">
        يجب إدخال اسم رباعي  بالحروف العربية فقط.
      </div>
    )}
</div>



<div style={{ width: "100%", direction: "rtl" }}>
  <label className="">هويه الكفيل</label>
  <div className="input-wrapper">
    <input
      style={{
        background: inputPerson ? "rgb(205 205 205)" : "",

         border:!idPersonIsValid?" 1px red solid":""
      }}
      disabled={inputPerson}
      placeholder={inputPerson ? "غير مسموح" : "رقم هوية الكفيل"}
      inputMode="numeric"
      type="text"
      className={`w-60 input-custom ${!idPersonIsValid ? "input-error" : ""}`}
      maxLength={10}
      value={calulationInputs.prsonId}
      onChange={(e) => handleNumericInputIdPerson(e, 'prsonId', 10)}
    />
    <span className="underline-input"></span>


  </div>
      {!idPersonIsValid && (
      <div className="error-text">رقم الهوية يجب أن يكون 10 أرقام .</div>
    )}
</div>






              <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">عنوان الكفيل</label>
                                <div  className="input-wrapper">
                <input
                                                        style={{
                                                          background: inputPerson ? "rgb(205 205 205)" : "",
                                                        }}
                                                        disabled={inputPerson}
                                                        placeholder={inputPerson ? "غير مسموح" : ""}
                  className="w-60"
                   // onKeyDown={checkLength}
                  maxLength="50"
                  type="text"
                  value={calulationInputs.prsonCity}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      prsonCity: event.target.value,
                    });
                  }}
                />
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>




</>


):

(<>


</>)}



            {/* <div style={{ width: "100%", direction: "rtl" }}>
                <label className=""> نوع المالك </label>
                                <div  className="input-wrapper">
                <select
                  className="w-60"
                        style={{
                         background: inputType ? "rgb(205 205 205)" : "",
                       }}
                  disabled={inputType}
                  
                  value={calulationInputs.typeOwner}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      typeOwner: event.target.value,
                    });
                  }}
                >
                  <option value="one">فرد </option>
                  <option selected value="any">  موسسة / شركه</option>

                </select>
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div> */}




  {/* <div style={{ width: "100%", direction: "rtl" }}>
  <label className="">اسم المالك</label>
  <div className="input-wrapper">
    <input
      style={{
        background: inputType ? "rgb(205 205 205)" : "",
         border:!ownerNameIsValid?" 1px red solid":""
      }}
      disabled={inputType}
      placeholder={inputType ? "غير مسموح" : "أدخل الاسم الرباعي"}
      className={`w-60 input-custom ${!ownerNameIsValid ? "input-error" : ""}`}
      maxLength="120"
      type="text"
      value={calulationInputs.ownerName}
      onChange={handleNameChangeOwner}
    />
    <span className="underline-input"></span>


  </div>
      {!ownerNameIsValid && (
      <div className="error-text">
        يجب إدخال اسم رباعي صحيح بالحروف العربية فقط.
      </div>
    )}
</div> */}

         


{/* <div style={{ width: "100%", direction: "rtl" }}>
  <label className="">هويه المالك</label>
  <div className="input-wrapper">
    <input
      style={{
        background: inputType ? "rgb(205 205 205)" : "",
          border:!ownerIdIsValid?" 1px red solid":""
      }}
      disabled={inputType}
      placeholder={inputType ? "غير مسموح" : "رقم الهوية "}
      className={`w-60 input-custom ${!ownerIdIsValid ? "input-error" : ""}`}
      value={calulationInputs.ownerId}
      type="text"
      maxLength={10}
      inputMode="numeric"
      onChange={(e) => handleNumericInputIdOwner(e, 'ownerId', 10)}
    />
    <span className="underline-input"></span>


  </div>

      {!ownerIdIsValid && (
      <div className="error-text">رقم الهوية يجب أن يكون 10 أرقام صحيحة.</div>
    )}
</div> */}





{/* 



            <div style={{ width: "100%", direction: "rtl" }}>
                <label className=""> يوجد وكيل</label>
                                <div  className="input-wrapper">
                <select
                  className="w-60"
                        style={{
                       background: inputType ? "rgb(205 205 205)" : "",
                       }}
                  disabled={inputType}
                  value={calulationInputs.ownerPrson}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      ownerPrson: event.target.value,
                    });
                  }}
                >
                  <option value="yes">نعم</option>
                  <option selected value="no">  لا</option>

                </select>
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>


{
calulationInputs.ownerPrson=="yes"&&!inputType? 
  
  (<>
  
  
<div style={{ width: "100%", direction: "rtl" }}>
  <label className="">رقم الوكاله</label>
  <div className="input-wrapper">
    <input
      style={{
        background: inputType ? "rgb(205 205 205)" : "",
          border:!ownerIdIsValidOwnerAddO?" 1px red solid":""
      }}
     
      placeholder={ "رقم الوكاله "}
      className={`w-60 input-custom ${!ownerIdIsValidOwnerAddO ? "input-error" : ""}`}
      value={calulationInputs.ownerAdd}
      type="text"
      maxLength={10}
      inputMode="numeric"
      onChange={(e) => handleNumericInputIdOwnerAddO(e, 'ownerAdd', 10)}
    />
    <span className="underline-input"></span>


  </div>

      {!ownerIdIsValidOwnerAddO && (
      <div className="error-text">رقم الوكاله يجب أن يكون 10 أرقام صحيحة.</div>
    )}
</div>



<div style={{ width: "100%", direction: "rtl" }}>
  <label className="">اسم الوكيل</label>
  <div className="input-wrapper">
    <input
      style={{
        background: inputType ? "rgb(205 205 205)" : "",
         border:!ownerNameIsValidAdd?" 1px red solid":""
      }}
    
      placeholder={"أدخل الاسم الرباعي"}
      className={`w-60 input-custom ${!ownerNameIsValidAdd ? "input-error" : ""}`}
      maxLength="120"
      type="text"
      value={calulationInputs.ownerNameAdd}
      onChange={handleNameChangeOwnerAdd}
    />
    <span className="underline-input"></span>


  </div>
      {!ownerNameIsValidAdd && (
      <div className="error-text">
        يجب إدخال اسم رباعي صحيح بالحروف العربية فقط.
      </div>
    )}
</div>

         







<div style={{ width: "100%", direction: "rtl" }}>
  <label className="">هويه الوكيل</label>
  <div className="input-wrapper">
    <input
      style={{
        background: inputType ? "rgb(205 205 205)" : "",
          border:!ownerIdIsValidAdd?" 1px red solid":""
      }}
    
      placeholder={ "رقم الهوية "}
      className={`w-60 input-custom ${!ownerIdIsValidAdd ? "input-error" : ""}`}
      value={calulationInputs.ownerIdAdd}
      type="text"
      maxLength={10}
      inputMode="numeric"
      onChange={(e) => handleNumericInputIdOwnerAdd(e, 'ownerIdAdd', 10)}
    />
    <span className="underline-input"></span>


  </div>

      {!ownerIdIsValidAdd && (
      <div className="error-text">رقم الهوية يجب أن يكون 10 أرقام صحيحة.</div>
    )}
</div>

  
  
  
  </>)


:
  
  (<></>)



}

















              <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">سعر العقار</label>
                                <div  className="input-wrapper">
                <input
                           style={{
                            background: inputType ? "rgb(205 205 205)" : "",
                          }}
                          disabled={inputType}
                          placeholder={inputType ? "غير مسموح" : ""}
                 
                  className="w-60"
                   // onKeyDown={checkLength}
                 
                  value={calulationInputs.price}
                  type="text"
                
                  maxLength={7}
               
                  onChange={(e) => handleNumericInput(e, 'price', 10)}
                />
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>


              <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">شيك المالك</label>
                                <div  className="input-wrapper">
                <input
                 
                 style={{
                  background: inputType ? "rgb(205 205 205)" : "",
                }}
                disabled={inputType}
                placeholder={inputType ? "غير مسموح" : ""}


                  className="w-60"
                   // onKeyDown={checkLength}
            
                  value={calulationInputs.cheq}
                  type="text"
                
                  maxLength={7}
               
                  onChange={(e) => handleNumericInput(e, 'cheq', 10)}
                />
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>


              <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">مدينة العقار</label>
                                <div  className="input-wrapper">
                <input

// style={{
//   background: inputType ? "rgb(205 205 205)" : "",
// }}
// disabled={inputType}
// placeholder={inputType ? "غير مسموح" : ""}
                 
                  className="w-60"
                   // onKeyDown={checkLength}
                  maxLength="50"
                  type="text"
                  value={calulationInputs.aqarCity}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      aqarCity: event.target.value,
                    });
                  }}
                />
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>
 */}





{/* 
              <div className="form-row">
  <label>تاريخ الإنشاء</label>

  <div className="input-wrapper triple" style={{ marginLeft: "3px" }}>
    <input
       style={{width:"100%"}}
      className="input-field"
      name="nowDay"
      placeholder="يوم"
      type="text"
      inputMode="numeric"
      maxLength={2}
      value={calulationInputs.nowDay}
      onChange={(e) => handleNumericInput(e, "nowDay", 10)}
    />
    <span className="underline-input-day"></span>
  </div>

  <div className="input-wrapper triple" style={{ marginLeft: "3px" }}>
    <input
           style={{width:"100%"}}
      className="input-field"
      name="nowMonth"
      placeholder="شهر"
      type="text"
      inputMode="numeric"
      maxLength={2}
      value={calulationInputs.nowMonth}
      onChange={(e) => handleNumericInput(e, "nowMonth", 10)}
    />
    <span className="underline-input-day"></span>
  </div>

  <div className="input-wrapper triple" style={{width:" 26%"}}>
    <input
           style={{width:"100%"}}
      className="input-field"
      name="nowYear"
      placeholder="سنة"
      type="text"
      inputMode="numeric"
      maxLength={4}
      value={calulationInputs.nowYear}
      onChange={(e) => handleNumericInput(e, "nowYear", 10)}
    />
    <span className="underline-input-day"></span>
  </div>
</div> */}


{/* 
<div className="form-row">
  <label>التاريخ هجري</label>

  <div className="input-wrapper triple" style={{ marginLeft: "3px" }}>
    <input
           style={{width:"100%"}}
      className="input-field"
      name="nowDayH"
      placeholder="يوم"
      type="text"
      inputMode="numeric"
      maxLength={2}
      value={calulationInputs.nowDayH}
      onChange={(e) => handleNumericInput(e, "nowDayH", 10)}
    />
    <span className="underline-input-day"></span>
  </div>

  <div className="input-wrapper triple" style={{ marginLeft: "3px" }}>
    <input
           style={{width:"100%"}}
      className="input-field"
      name="nowMonthH"
      placeholder="شهر"
      type="text"
      inputMode="numeric"
      maxLength={2}
      value={calulationInputs.nowMonthH}
      onChange={(e) => handleNumericInput(e, "nowMonthH", 10)}
    />
    <span className="underline-input-day"></span>
  </div>

  <div className="input-wrapper triple" style={{width:" 26%"}}>
    <input
           style={{width:"100%"}}
      className="input-field"
      name="nowYearH"
      placeholder="سنة"
      type="text"
      inputMode="numeric"
      maxLength={4}
      value={calulationInputs.nowYearH}
      onChange={(e) => handleNumericInput(e, "nowYearH", 10)}
    />
    <span className="underline-input-day"></span>
  </div>
</div>
 */}

{/* 
<div className="form-row">
  <label>تاريخ الاستحقاق</label>

  <div className="input-wrapper triple" style={{ marginLeft: "3px" }}>
    <input
           style={{width:"100%"}}
      className="input-field"
      name="addDay"
      placeholder="يوم"
      type="text"
      inputMode="numeric"
      maxLength={2}
      value={calulationInputs.addDay}
      onChange={(e) => handleNumericInput(e, "addDay", 10)}
    />
    <span className="underline-input-day"></span>
  </div>

  <div className="input-wrapper triple" style={{ marginLeft: "3px" }}>
    <input
           style={{width:"100%"}}
      className="input-field"
      name="addMonth"
      placeholder="شهر"
      type="text"
      inputMode="numeric"
      maxLength={2}
      value={calulationInputs.addMonth}
      onChange={(e) => handleNumericInput(e, "addMonth", 10)}
    />
    <span className="underline-input-day"></span>
  </div>

  <div className="input-wrapper triple" style={{width:" 26%"}}>
    <input
           style={{width:"100%"}}
      className="input-field"
      name="addYear"
      placeholder="سنة"
      type="text"
      inputMode="numeric"
      maxLength={4}
      value={calulationInputs.addYear}
      onChange={(e) => handleNumericInput(e, "addYear", 10)}
    />
    <span className="underline-input-day"></span>
  </div>
</div>
 */}


              
              <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">طريقه الاسترداد</label>
                                <div  className="input-wrapper">
                <input
                 
                  className="w-60"
                   // onKeyDown={checkLength}
                  maxLength="200"
                  type="text"
                  value={calulationInputs.toEskan}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      toEskan: event.target.value,
                    });
                  }}
                />
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>

   
{/* 
              <div
                style={{ width: "100%", direction: "rtl", marginTop: "20px" }}
              >
                <label style={{ marginTop: "10px" }}> اضافه للعملاء</label>
                <input
                  type="checkbox"
                  checked={calulationInputs.inputCheck}
                  onChange={handelChecked}
                  style={{ width: "60%", height: "28px" }}
                />
              </div>

               */}
              <div style={{ width: "100%", direction: "rtl" }}></div>
            </form>
          </div>




          <div className="col box input-css" id={classNameModel} style={{ marginBottom:"0px"}}>
            <form
              className="flex-dir"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <h4
                style={{ textAlign: "center", margin: "0px", padding: "6px" }}
              >
                البيانات للمالك
              </h4>
              <hr></hr>




            <div style={{ width: "100%", direction: "rtl" }}>
                <label className=""> نوع المالك </label>
                                <div  className="input-wrapper">
                <select
                  className="w-60"
                        style={{
                         background: inputType ? "rgb(205 205 205)" : "",
                       }}
                  disabled={inputType}
                  
                  value={calulationInputs.typeOwner}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      typeOwner: event.target.value,
                    });
                  }}
                >
                  <option value="one">فرد </option>
                  <option selected value="any">  موسسة / شركه</option>

                </select>
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>




  <div style={{ width: "100%", direction: "rtl" }}>
  <label className=""> {textName}</label>
  <div className="input-wrapper">
    <input
      style={{
        background: inputType ? "rgb(205 205 205)" : "",
         border:calulationInputs.typeOwner=="any" ? "":!ownerNameIsValid?" 1px red solid":""
      }}
      disabled={inputType}
      placeholder={inputType ? "غير مسموح" : textNamePlac}
      className={`w-60 input-custom ${calulationInputs.typeOwner=="any" ? "":  !ownerNameIsValid ? "input-error" : ""}`}
      maxLength="120"
      type="text"
      value={calulationInputs.ownerName}
      onChange={handleNameChangeOwner}
    />
    <span className="underline-input"></span>


  </div>
      {
      calulationInputs.typeOwner=="any" ? (<></>):(

         !ownerNameIsValid && (
      <div className="error-text">
        يجب إدخال اسم رباعي صحيح بالحروف العربية فقط.
      </div>
    )
      
  
  )
      
     }
</div>

         


<div style={{ width: "100%", direction: "rtl" }}>
  <label className="">{textId} </label>
  <div className="input-wrapper">
    <input
      style={{
        background: inputType ? "rgb(205 205 205)" : "",
          border:calulationInputs.typeOwner=="any" ? "":!ownerIdIsValid?" 1px red solid":""
      }}
      disabled={inputType}
      placeholder={inputType ? "غير مسموح" : textIdPlac}
      className={`w-60 input-custom ${calulationInputs.typeOwner=="any" ? "":!ownerIdIsValid ? "input-error" : ""}`}
      value={calulationInputs.ownerId}
      type="text"
      maxLength={10}
      inputMode="numeric"
      onChange={(e) => handleNumericInputIdOwner(e, 'ownerId', 10)}
    />
    <span className="underline-input"></span>


  </div>

      {!ownerIdIsValid && (
      <div className="error-text">رقم  يجب أن يكون 10 أرقام صحيحة.</div>
    )}
</div>









            <div style={{ width: "100%", direction: "rtl" }}>
                <label className=""> يوجد وكيل</label>
                                <div  className="input-wrapper">
                <select
                  className="w-60"
                        style={{
                       background: inputType ? "rgb(205 205 205)" : "",
                       }}
                  disabled={inputType}
                  value={calulationInputs.ownerPrson}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      ownerPrson: event.target.value,
                    });
                  }}
                >
                  <option value="yes">نعم</option>
                  <option selected value="no">  لا</option>

                </select>
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>


{
calulationInputs.ownerPrson=="yes"&&!inputType? 
  
  (<>
  
  
<div style={{ width: "100%", direction: "rtl" }}>
  <label className="">رقم الوكاله</label>
  <div className="input-wrapper">
    <input
      style={{
        background: inputType ? "rgb(205 205 205)" : "",
          border:!ownerIdIsValidOwnerAddO?" 1px red solid":""
      }}
     
      placeholder={ "رقم الوكاله "}
      className={`w-60 input-custom ${!ownerIdIsValidOwnerAddO ? "input-error" : ""}`}
      value={calulationInputs.ownerAdd}
      type="text"
      maxLength={10}
      inputMode="numeric"
      onChange={(e) => handleNumericInputIdOwnerAddO(e, 'ownerAdd', 10)}
    />
    <span className="underline-input"></span>


  </div>

      {!ownerIdIsValidOwnerAddO && (
      <div className="error-text">رقم الوكاله يجب أن يكون 10 أرقام صحيحة.</div>
    )}
</div>



<div style={{ width: "100%", direction: "rtl" }}>
  <label className="">اسم الوكيل</label>
  <div className="input-wrapper">
    <input
      style={{
        background: inputType ? "rgb(205 205 205)" : "",
         border:!ownerNameIsValidAdd?" 1px red solid":""
      }}
    
      placeholder={"أدخل الاسم الرباعي"}
      className={`w-60 input-custom ${!ownerNameIsValidAdd ? "input-error" : ""}`}
      maxLength="120"
      type="text"
      value={calulationInputs.ownerNameAdd}
      onChange={handleNameChangeOwnerAdd}
    />
    <span className="underline-input"></span>


  </div>
      {!ownerNameIsValidAdd && (
      <div className="error-text">
        يجب إدخال اسم رباعي صحيح بالحروف العربية فقط.
      </div>
    )}
</div>

         







<div style={{ width: "100%", direction: "rtl" }}>
  <label className="">هويه الوكيل</label>
  <div className="input-wrapper">
    <input
      style={{
        background: inputType ? "rgb(205 205 205)" : "",
          border:!ownerIdIsValidAdd?" 1px red solid":""
      }}
    
      placeholder={ "رقم الهوية "}
      className={`w-60 input-custom ${!ownerIdIsValidAdd ? "input-error" : ""}`}
      value={calulationInputs.ownerIdAdd}
      type="text"
      maxLength={10}
      inputMode="numeric"
      onChange={(e) => handleNumericInputIdOwnerAdd(e, 'ownerIdAdd', 10)}
    />
    <span className="underline-input"></span>


  </div>

      {!ownerIdIsValidAdd && (
      <div className="error-text">رقم الهوية يجب أن يكون 10 أرقام صحيحة.</div>
    )}
</div>

  
  
  
  </>)


:
  
  (<></>)



}

















              <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">سعر العقار</label>
                                <div  className="input-wrapper">
                <input
                           style={{
                            background: inputType ? "rgb(205 205 205)" : "",
                          }}
                          disabled={inputType}
                          placeholder={inputType ? "غير مسموح" : ""}
                 
                  className="w-60"
                   // onKeyDown={checkLength}
                 
                  value={calulationInputs.price}
                  type="text"
                
                  maxLength={7}
               
                  onChange={(e) => handleNumericInput(e, 'price', 10)}
                />
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>


              <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">شيك المالك</label>
                                <div  className="input-wrapper">
                <input
                 
                 style={{
                  background: inputType ? "rgb(205 205 205)" : "",
                }}
                disabled={inputType}
                placeholder={inputType ? "غير مسموح" : ""}


                  className="w-60"
                   // onKeyDown={checkLength}
            
                  value={calulationInputs.cheq}
                  type="text"
                
                  maxLength={7}
               
                  onChange={(e) => handleNumericInput(e, 'cheq', 10)}
                />
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>


              <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">مدينة العقار</label>
                                <div  className="input-wrapper">
                <input


                 
                  className="w-60"
                   // onKeyDown={checkLength}
                  maxLength="50"
                  type="text"
                  value={calulationInputs.aqarCity}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      aqarCity: event.target.value,
                    });
                  }}
                />
                  <span  className="underline-input"></span>
                   
                   </div>
              </div>










              <div className="form-row">
  <label>تاريخ الإنشاء</label>

  <div className="input-wrapper triple" style={{ marginLeft: "3px" }}>
    <input
       style={{width:"100%"}}
      className="input-field"
      name="nowDay"
      placeholder="يوم"
      type="text"
      inputMode="numeric"
      maxLength={2}
      value={calulationInputs.nowDay}
      onChange={(e) => handleNumericInput(e, "nowDay", 10)}
    />
    <span className="underline-input-day"></span>
  </div>

  <div className="input-wrapper triple" style={{ marginLeft: "3px" }}>
    <input
           style={{width:"100%"}}
      className="input-field"
      name="nowMonth"
      placeholder="شهر"
      type="text"
      inputMode="numeric"
      maxLength={2}
      value={calulationInputs.nowMonth}
      onChange={(e) => handleNumericInput(e, "nowMonth", 10)}
    />
    <span className="underline-input-day"></span>
  </div>

  <div className="input-wrapper triple" style={{width:" 26%"}}>
    <input
           style={{width:"100%"}}
      className="input-field"
      name="nowYear"
      placeholder="سنة"
      type="text"
      inputMode="numeric"
      maxLength={4}
      value={calulationInputs.nowYear}
      onChange={(e) => handleNumericInput(e, "nowYear", 10)}
    />
    <span className="underline-input-day"></span>
  </div>
</div>

<div className="form-row">
  <label>التاريخ هجري</label>

  <div className="input-wrapper triple" style={{ marginLeft: "3px" }}>
    <input
           style={{width:"100%"}}
      className="input-field"
      name="nowDayH"
      placeholder="يوم"
      type="text"
      inputMode="numeric"
      maxLength={2}
      value={calulationInputs.nowDayH}
      onChange={(e) => handleNumericInput(e, "nowDayH", 10)}
    />
    <span className="underline-input-day"></span>
  </div>

  <div className="input-wrapper triple" style={{ marginLeft: "3px" }}>
    <input
           style={{width:"100%"}}
      className="input-field"
      name="nowMonthH"
      placeholder="شهر"
      type="text"
      inputMode="numeric"
      maxLength={2}
      value={calulationInputs.nowMonthH}
      onChange={(e) => handleNumericInput(e, "nowMonthH", 10)}
    />
    <span className="underline-input-day"></span>
  </div>

  <div className="input-wrapper triple" style={{width:" 26%"}}>
    <input
           style={{width:"100%"}}
      className="input-field"
      name="nowYearH"
      placeholder="سنة"
      type="text"
      inputMode="numeric"
      maxLength={4}
      value={calulationInputs.nowYearH}
      onChange={(e) => handleNumericInput(e, "nowYearH", 10)}
    />
    <span className="underline-input-day"></span>
  </div>
</div>

<div className="form-row">
  <label>تاريخ الاستحقاق</label>

  <div className="input-wrapper triple" style={{ marginLeft: "3px" }}>
    <input
           style={{width:"100%"}}
      className="input-field"
      name="addDay"
      placeholder="يوم"
      type="text"
      inputMode="numeric"
      maxLength={2}
      value={calulationInputs.addDay}
      onChange={(e) => handleNumericInput(e, "addDay", 10)}
    />
    <span className="underline-input-day"></span>
  </div>

  <div className="input-wrapper triple" style={{ marginLeft: "3px" }}>
    <input
           style={{width:"100%"}}
      className="input-field"
      name="addMonth"
      placeholder="شهر"
      type="text"
      inputMode="numeric"
      maxLength={2}
      value={calulationInputs.addMonth}
      onChange={(e) => handleNumericInput(e, "addMonth", 10)}
    />
    <span className="underline-input-day"></span>
  </div>

  <div className="input-wrapper triple" style={{width:" 26%"}}>
    <input
           style={{width:"100%"}}
      className="input-field"
      name="addYear"
      placeholder="سنة"
      type="text"
      inputMode="numeric"
      maxLength={4}
      value={calulationInputs.addYear}
      onChange={(e) => handleNumericInput(e, "addYear", 10)}
    />
    <span className="underline-input-day"></span>
  </div>
</div>



              

   

              {/* <div
                style={{ width: "100%", direction: "rtl", marginTop: "20px" }}
              >
                <label style={{ marginTop: "10px" }}> اضافه للعملاء</label>
                <input
                  type="checkbox"
                  checked={calulationInputs.inputCheck}
                  onChange={handelChecked}
                  style={{ width: "60%", height: "28px" }}
                />
              </div> */}




                  <div
                    style={{
                      width: "100%",
                      direction: "rtl",
                      marginTop: "6px",
                    }}
                  >
                    <label style={{ marginTop: "10px" }}>اضافه للعملاء</label>

                    {arrData === undefined ? (
                      <button
                        disabled={btnIsDisableToAdd}
                        type="submit"
                        style={{
                          width: "65%",
                          minHeight: "40px",
                          color: "white",
                          cursor: btnIsDisableToAdd ? "not-allowed" : "",
                          fontSize: "1rem",
                          padding: "2px",
                          borderRadius: ".375rem",
                          backgroundColor: btnIsDisableToAdd ? "" : "#0238e8",
                        }}
                        className={
                          btnIsDisableToAdd
                            ? "disabled   button-move"
                            : "  button-move"
                        }
                        onClick={(e) => onSubmitChange(e)}
                      >
                        {textSend}
                      </button>
                    ) : (
                      <button
                        // disabled={btnIsDisableToAdd}
                        disabled={false}
                        type="submit"
                        style={{
                          width: "65%",
                          minHeight: "40px",
                          color: "white",
                          // cursor: btnIsDisableToAdd ? "not-allowed" : "",
                          // backgroundColor: btnIsDisableToAdd ? "" : "#0238e8",
                               cursor: btnIsDisableToAdd ? "" : "",
                               backgroundColor: btnIsDisableToAdd ? "" : "",
                        }}
                        className={
                          // btnIsDisableToAdd ? "disabled" : "btn btn-primary"
                          btnIsDisableToAdd ? "btn btn-primary" : "btn btn-primary"
                        }
                        onClick={() => onSubmitChangeEdit(arrData.id)}
                        // onClick={(e) => onSubmitChange(e)}
                      >
                        {textSend}
                      </button>
                    )}

                  </div>










              <div style={{ width: "100%", direction: "rtl" }}></div>
            </form>
          </div>




  

          <div className="col box" id={classNameModel} style={{marginBottom:"0px"}}>

          <div style={{}}>

       
              <div style={{ display: "flex",
    justifyContent: "space-between",
}}>

<div className="loader-container" style={{    height: "auto", width: "150px"}}>
                    <div className="logo-reveal">
                      <img src={im} alt="Eskan Salman Logo" className={   darkSide ? "logo-color" : "logo-color-dark" } style={{    width: "135px"}}/>
                      <div className="logo-mask-infinite">
                  
                      </div>
                      
                      
                      </div></div>
              {/* <img alt="" src={im} className={darkSide ? "logo-screen" : "logo-screen-dark" } style={{    width: "135px"}} /> */}
              <img alt="لوجو " src={imageBank} className={ darkSide ? "logo-screen" : "logo-screen-dark" } style={{height: "auto"}}  />
              </div>
              <hr style={{marginTop:"1px"}}></hr>

              {/* <img alt="" src={im} className={darkSide ? "logo-screen" : "logo-screen-dark" } style={{}} /> */}


              {/* <h4
                style={{ textAlign: "center", margin: "0px", padding: "6px" }}
              >
                عرض السعر
              </h4>
              <hr></hr> */}



              <table className={tableDark}>
                <tr>
                      <td style={{marginTop:"10px"}}> سند الامر</td>

                       <td>


                       
<Button variant={butClass}   onClick={() => setModalShow2(true)}>
عرض و طباعه
</Button>
                        </td> 

                    
  

      {/* <Button variant="outline-success"  onClick={printPdf}>ملف</Button> */}

      <Second
        show={modalShow2}
        onHide={() => setModalShow2(false)}
       

        
      
        data={text}
        input={calulationInputs}

        number={number}





      />
                  







                
                  
                  
                  
                          {/* <Button variant="outline-success"  onClick={capture}>صورة</Button> */}
                         
                         
                       
                  
                  

                 
                 
            
                </tr>
                <tr>
                  <td style={{marginTop:"10px"}}> الاقرار</td>
                  <td>

                 
<Button variant={butClass}  onClick={() => setModalShow3(true)}>
عرض و طباعه
</Button>

<Therd
  show={modalShow3}
  onHide={() => setModalShow3(false)}



  data={text}
  input={calulationInputs}
  number={number}






/>

            </td>



                </tr>
                <tr>
                  <td style={{marginTop:"10px"}}>اتفاقية استخراج </td>
                  <td>
                  <Button variant={butClass}   onClick={() => setModalShow4(true)}>
عرض و طباعه
</Button>

<Fourth
  show={modalShow4}
  onHide={() => setModalShow4(false)}



  data={text}
  input={calulationInputs}
  number={number}






/>


                  </td>
                
                </tr>
                <tr>
                  <td style={{marginTop:"10px"}}> سند السعي</td>
                  <td>

                 
      <Button variant={butClass}   onClick={() => setModalShow(true)}>
      عرض و طباعه
      </Button>

      <FirstDocm
        show={modalShow}
        onHide={() => setModalShow(false)}

     
      
        data={text1}
        input={calulationInputs}
        number={number1}






      />
    
                  </td>
            
                </tr>

   

                <tr>
                  <td style={{marginTop:"10px"}}>عميل و كفيل </td>
                  <td>


             

                 
<Button  variant={butClass}  onClick={() => setModalShow5(true)}                                        style={{
                                        background: inputPerson ? "rgb(205 205 205)" : "",
                                      }}
                                      disabled={inputPerson}
                                      placeholder={inputPerson ? "غير مسموح" : ""}>
عرض و طباعه
</Button>

<Fifth
  show={modalShow5}
  onHide={() => setModalShow5(false)}



  data={text}
  input={calulationInputs}
  number={number}






/>

            </td>


                 
 
                </tr>

                <tr>
                  <td style={{marginTop:"10px"}}>سند كفيل</td>
                  <td>


                 
                  <Button variant={butClass}  onClick={() => setModalShow6(true)}                                
                          style={{
                                        background: inputPerson ? "rgb(205 205 205)" : "",
                                      }}
                                      disabled={inputPerson}
                                      placeholder={inputPerson ? "غير مسموح" : ""}>
عرض و طباعه
</Button>

<Sixth
  show={modalShow6}
  onHide={() => setModalShow6(false)}



  data={text}
  input={calulationInputs}
  number={number}






/>


                  </td>
  
                </tr>

                <tr>
                  <td style={{marginTop:"10px"}}>اتفاقية المالك </td>
                  <td>



                 
                  <Button variant={butClass} onClick={() => setModalShow7(true)}
                    
                    style={{
                      background: inputType ? "rgb(205 205 205)" : "",
                    }}
                    disabled={inputType}
                    placeholder={inputType ? "غير مسموح" : ""}
                    
                    >
عرض و طباعه
</Button>

<Seventh
  show={modalShow7}
  onHide={() => setModalShow7(false)}



  data={text}
  input={calulationInputs}
  number={number}






/>






                  </td>
            
                </tr>
  

 
      
              </table>





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




                               {!Array.isArray(errorMassge) || errorMassge.length == 0 ? (
  "تمت الاضافه الي العروض"
) : (
  errorMassge.map((err, i) => <div key={i}>{err}</div>)
)}

                                </Toast.Body>
                              </Toast>
                            </Col>
                          </Row>
                        </div>


              <div></div>
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
                <div style={{ margin: "0 10px" }} className="link_text">
                  {textMode}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
