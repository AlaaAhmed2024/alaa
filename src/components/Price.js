import { useContext, useEffect, useState } from "react";
import "../Project1.css";
import "./home.css"
import Modal from "../Model";
import im from "../logo.png";
import AlartBootstap from "./alartBootstrap";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import currencyLogo from "../photo/rsb.png"
import audioError from "../sound/error.mp3";
import audioSuccess from "../sound/success.mp3";
import audioWarning from "../sound/warning.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ahly from "../alahliLogo.png";
import alrajhi from "../alrajhiLogo.png";
import albilad from "../albiladLogo.png";
import alfransi from "../alfransiLlogo.png";
import alinma from "../alinmaLogo.png";
import sab from "../sabLogo.png";
import html2canvas from "html2canvas";
import {
  faCircleHalfStroke,
  faMoon,
  faCopy,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/esm/Button";
import Dropdown from "./select";
import { ColorModeContext } from "../Context/ThemeContext";

export default function Price(props) {


 const now = new Date();

 const date = now.toLocaleDateString("ar-EG", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const time = now.toLocaleTimeString("ar-EG", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});

   const nowToString=  date +" - " + time

  // const [darkSide, setShwoDarkSide] = useState(
  //       ()=>{

  //  const savedMode = localStorage.getItem("darkMode");
  //   if (savedMode === "true") return true;
  //   if (savedMode === "false") return false;
  //   return true; // الوضع الافتراضي
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

  if (props.pDarkSide) {
    var textMode = "داكن";
    var classNameModel = "calculation-input-loan-form";
      var classNameModelBootstrap = "box-dark-bootstrap ";
    var ic1 = faMoon;
    var classRotate = 0;
    var classColor = "model-light";
    var tableDark = "";
    var backColor = "link-log-dark  dark-buttom-about";
  } else if (darkSide) {
    var textMode = "داكن";
    var classNameModel = "calculation-input-loan-form";
      var classNameModelBootstrap = "box-dark-bootstrap ";
    var ic1 = faMoon;
    var classRotate = 0;
    var classColor = "model-light";
    var tableDark = "";
    var backColor = "link-log-dark  dark-buttom-about";
  } else {
    var textMode = "فاتح";
    var classNameModel = "calculation-input-loan-form-dark";
     var classNameModelBootstrap = "box-dark-bootstrap";
    var ic1 = faCircleHalfStroke;
    var classRotate = 180;
    var classColor = "#050505";
    var tableDark = "table-Dark";
    var backColor = "link-log-dark  dark-buttom-about  back-color";
  }

  const [calulationInputs, setcalulationInputs] = useState({
    name:"",
    typeCalculation: "priceHouse",
    currentBank: "alrajhi",
    firstHouse: "yes",
    housingSupport: "baqa",
    administrative: "",
    amontBaqa: "baqaSelect",
    monthlyHoussingSupport: "",
    totalPrice: "",
    prcentFirst: "prcent10",
    amonntRealEstateFinance: "",
    amonntFirst: "",
    editPrcentEskan: "",
    editAddpavment:0,
   
  });

  const [calulationOutputs, setCalulationOutputs] = useState({
    output0:"",
    outPut1: "",
    outPut2: "",
    outPut3: "",
    outPut4: "",
    outPut5: "",
    outPut6: "",
    outPut7: "",
    outPut8: "",
    outPut9: "",
    outPut10: "",
    outPut11: "",
   
  });

  const [showModdal, setShowModal] = useState(false);
  const [errorMassge, setErrorMassge] = useState(null);
const[currency,setCurrency]= useState(false)
 
    const [modalShowBootstap, setModalShowBootstap] = useState(false);
 const [showa, setShowa] = useState(false);

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
        var imageBank =im
      }

  const handleNumericInput = (e, field, maxLength) => {
  const newValue = e.target.value;

  if (/^\d*$/.test(newValue) && newValue.length <= maxLength) {
    setcalulationInputs((prev) => ({
      ...prev,
      [field]: newValue,
    }));
  }}
   

  function calculation(event) {
    let audio1 = new Audio(audioSuccess);
    let audio2 = new Audio(audioWarning);
    let audio3 = new Audio(audioError);
 setCurrency(true)
   setShowa(true);
  
//=============================================================================
    //بدايه حسابات
    if (calulationInputs.typeCalculation === "priceHouse" && calulationInputs.housingSupport==="noBaqa" ) {
      if (calulationInputs.prcentFirst === "prcent10") {
        var prcent = 10 / 100;
      } else if (calulationInputs.prcentFirst === "prcent5") {
        var prcent = 5 / 100;
      } else if (calulationInputs.prcentFirst === "prcent20") {
        var prcent = 20 / 100;
      } else if (calulationInputs.prcentFirst === "prcent30") {
        var prcent = 30 / 100;
      } else if (calulationInputs.prcentFirst === "prcent15") {
        var prcent = 15 / 100;
      }
      
      if (
        calulationInputs.housingSupport === "baqa" &&
        calulationInputs.amontBaqa === "baqa100"
      ) {
        //  var baqaDelet=100000;
        var baqaDelet = 0;
        var firstPrice =
          (1 * calulationInputs.totalPrice - baqaDelet) / (1 - prcent);
      } else if (
        calulationInputs.housingSupport === "baqa" &&
        calulationInputs.amontBaqa === "baqa150"
      ) {
        // var baqaDelet=150000;
        var baqaDelet = 0;
        var firstPrice =
          (1 * calulationInputs.totalPrice - baqaDelet) / (1 - prcent);
      } else {
        var baqaDelet = 0;
        var firstPrice =
          (1 * calulationInputs.totalPrice - baqaDelet) / (1 - prcent);
      }

      if (calulationInputs.editPrcentEskan != "") {
        var firstEskan = 1 * calulationInputs.editPrcentEskan;
      } else {
        var firstEskan = (firstPrice * 2.5) / 100;
      }

      if (firstPrice < 1000000 && calulationInputs.firstHouse == "yes") {
        var firstTax = 0;
      } else if (firstPrice > 1000000 && calulationInputs.firstHouse == "yes") {
        var firstTax = (firstPrice - 1000000) * 0.05;
      } else {
        var firstTax = firstPrice * 0.05;
      }

      if (
        calulationInputs.housingSupport === "baqa" &&
        calulationInputs.amontBaqa === "baqa100"
      ) {
        var outamontBaqa = 100000;
      } else if (
        calulationInputs.housingSupport === "baqa" &&
        calulationInputs.amontBaqa === "baqa150"
      ) {
        var outamontBaqa = 150000;
      } else if (
        calulationInputs.housingSupport === "noBaqa" &&
        calulationInputs.monthlyHoussingSupport != ""
      ) {
        var outamontBaqa = 1 * calulationInputs.monthlyHoussingSupport;
      } else {
        var outamontBaqa = "لايوجد";
      }

      if (
        calulationInputs.currentBank === "alahli" ||
        calulationInputs.currentBank === "alinma"
      ) {
        var addEskan = 0.15 * firstEskan;
      } else {
        var addEskan = 0;
      }

      if (calulationInputs.housingSupport === "baqa") {
        var pavmentEdit = outamontBaqa;
      } else {
        var pavmentEdit = 0;
      }

      var outAdministrative = 1 * calulationInputs.administrative;

      //=============================================

      if (
        calulationInputs.currentBank === "alahli" ||
        calulationInputs.currentBank === "alinma" ||
        calulationInputs.currentBank === "albilad"
      ) {
        var checkTotalPrice2 =
          firstPrice +
          firstEskan * prcent +
          outAdministrative +
          firstTax +
          addEskan;
      } else {
        var checkTotalPrice2 =
          firstPrice +
          firstEskan * prcent +
          outAdministrative +
          prcent * firstTax;
      }

      //======================
      if (calulationInputs.editPrcentEskan != "") {
        var firstEskan2 = 1 * calulationInputs.editPrcentEskan;
      } else {
        var firstEskan2 = (checkTotalPrice2 * 2.5) / 100;
      }

      if (checkTotalPrice2 < 1000000 && calulationInputs.firstHouse == "yes") {
        var firstTax2 = 0;
      } else if (
        checkTotalPrice2 > 1000000 &&
        calulationInputs.firstHouse == "yes"
      ) {
        var firstTax2 = (checkTotalPrice2 - 1000000) * 0.05;
      } else {
        var firstTax2 = checkTotalPrice2 * 0.05;
      }

      if (
        calulationInputs.currentBank === "alahli" ||
        calulationInputs.currentBank === "alinma"
      ) {
        var addEskan2 = 0.15 * firstEskan2;
      } else {
        var addEskan2 = 0;
      }

      if (
        calulationInputs.currentBank === "alahli" ||
        calulationInputs.currentBank === "alinma" ||
        calulationInputs.currentBank === "albilad"
      ) {
        var checkNetPrice2 =
          (1 - prcent) * checkTotalPrice2 -
          firstEskan2 * prcent -
          outAdministrative -
          firstTax2 -
          addEskan2;
      } else {
        var checkNetPrice2 =
          (1 - prcent) * checkTotalPrice2 -
          firstEskan2 * prcent -
          outAdministrative -
          prcent * firstTax2;
      }

      var error2 = Math.min(checkNetPrice2 - calulationInputs.totalPrice, 0);

      var checkTotalPrice3 = checkTotalPrice2 - error2;

      //======================
      if (calulationInputs.editPrcentEskan != "") {
        var firstEskan3 = 1 * calulationInputs.editPrcentEskan;
      } else {
        var firstEskan3 = (checkTotalPrice3 * 2.5) / 100;
      }

      if (checkTotalPrice3 < 1000000 && calulationInputs.firstHouse == "yes") {
        var firstTax3 = 0;
      } else if (
        checkTotalPrice3 > 1000000 &&
        calulationInputs.firstHouse == "yes"
      ) {
        var firstTax3 = (checkTotalPrice3 - 1000000) * 0.05;
      } else {
        var firstTax3 = checkTotalPrice3 * 0.05;
      }

      if (
        calulationInputs.currentBank === "alahli" ||
        calulationInputs.currentBank === "alinma"
      ) {
        var addEskan3 = 0.15 * firstEskan3;
      } else {
        var addEskan3 = 0;
      }

      if (
        calulationInputs.currentBank === "alahli" ||
        calulationInputs.currentBank === "alinma" ||
        calulationInputs.currentBank === "albilad"
      ) {
        var checkNetPrice3 =
          (1 - prcent) * checkTotalPrice3 -
          firstEskan3 * prcent -
          outAdministrative -
          firstTax3 -
          addEskan3;
      } else {
        var checkNetPrice3 =
          (1 - prcent) * checkTotalPrice3 -
          firstEskan3 * prcent -
          outAdministrative -
          prcent * firstTax3;
      }

      var error3 = Math.min(checkNetPrice3 - calulationInputs.totalPrice, 0);

      var checkTotalPrice4 = checkTotalPrice3 - error3;

      //======================
      if (calulationInputs.editPrcentEskan != "") {
        var firstEskan4 = 1 * calulationInputs.editPrcentEskan;
      } else {
        var firstEskan4 = (checkTotalPrice4 * 2.5) / 100;
      }

      if (checkTotalPrice4 < 1000000 && calulationInputs.firstHouse == "yes") {
        var firstTax4 = 0;
      } else if (
        checkTotalPrice4 > 1000000 &&
        calulationInputs.firstHouse == "yes"
      ) {
        var firstTax4 = (checkTotalPrice4 - 1000000) * 0.05;
      } else {
        var firstTax4 = checkTotalPrice4 * 0.05;
      }

      if (
        calulationInputs.currentBank === "alahli" ||
        calulationInputs.currentBank === "alinma"
      ) {
        var addEskan4 = 0.15 * firstEskan4;
      } else {
        var addEskan4 = 0;
      }

      if (
        calulationInputs.currentBank === "alahli" ||
        calulationInputs.currentBank === "alinma" ||
        calulationInputs.currentBank === "albilad"
      ) {
        var checkNetPrice4 =
          (1 - prcent) * checkTotalPrice4 -
          firstEskan4 * prcent -
          outAdministrative -
          firstTax4 -
          addEskan4;
      } else {
        var checkNetPrice4 =
          (1 - prcent) * checkTotalPrice4 -
          firstEskan4 * prcent -
          outAdministrative -
          prcent * firstTax4;
      }

      var error4 = Math.min(checkNetPrice4 - calulationInputs.totalPrice, 0);

      var checkTotalPrice5 = checkTotalPrice4 - error4;

      //======================
      if (calulationInputs.editPrcentEskan != "") {
        var firstEskan5 = 1 * calulationInputs.editPrcentEskan;
      } else {
        var firstEskan5 = (checkTotalPrice5 * 2.5) / 100;
      }

      if (checkTotalPrice5 < 1000000 && calulationInputs.firstHouse == "yes") {
        var firstTax5 = 0;
      } else if (
        checkTotalPrice5 > 1000000 &&
        calulationInputs.firstHouse == "yes"
      ) {
        var firstTax5 = (checkTotalPrice5 - 1000000) * 0.05;
      } else {
        var firstTax5 = checkTotalPrice5 * 0.05;
      }

      if (
        calulationInputs.currentBank === "alahli" ||
        calulationInputs.currentBank === "alinma"
      ) {
        var addEskan5 = 0.15 * firstEskan5;
      } else {
        var addEskan5 = 0;
      }

      if (
        calulationInputs.currentBank === "alahli" ||
        calulationInputs.currentBank === "alinma" ||
        calulationInputs.currentBank === "albilad"
      ) {
        var checkNetPrice5 =
          (1 - prcent) * checkTotalPrice5 -
          firstEskan5 * prcent -
          outAdministrative -
          firstTax5 -
          addEskan5;
      } else {
        var checkNetPrice5 =
          (1 - prcent) * checkTotalPrice5 -
          firstEskan5 * prcent -
          outAdministrative -
          prcent * firstTax5;
      }

      var error5 = Math.min(checkNetPrice5 - calulationInputs.totalPrice, 0);

      var checkTotalPrice6 = checkTotalPrice5 - error5;

      //======================
      if (calulationInputs.editPrcentEskan != "") {
        var firstEskan6 = 1 * calulationInputs.editPrcentEskan;
      } else {
        var firstEskan6 = (checkTotalPrice6 * 2.5) / 100;
      }

      if (checkTotalPrice6 < 1000000 && calulationInputs.firstHouse == "yes") {
        var firstTax6 = 0;
      } else if (
        checkTotalPrice6 > 1000000 &&
        calulationInputs.firstHouse == "yes"
      ) {
        var firstTax6 = (checkTotalPrice6 - 1000000) * 0.05;
      } else {
        var firstTax6 = checkTotalPrice6 * 0.05;
      }

      if (
        calulationInputs.currentBank === "alahli" ||
        calulationInputs.currentBank === "alinma"
      ) {
        var addEskan6 = 0.15 * firstEskan6;
      } else {
        var addEskan6 = 0;
      }

      if (
        calulationInputs.currentBank === "alahli" ||
        calulationInputs.currentBank === "alinma" ||
        calulationInputs.currentBank === "albilad"
      ) {
        var checkNetPrice6 =
          (1 - prcent) * checkTotalPrice6 -
          firstEskan6 * prcent -
          outAdministrative -
          firstTax6 -
          addEskan6;
      } else {
        var checkNetPrice6 =
          (1 - prcent) * checkTotalPrice6 -
          firstEskan6 * prcent -
          outAdministrative -
          prcent * firstTax6;
      }

      var error6 = Math.min(checkNetPrice6 - calulationInputs.totalPrice, 0);

      var checkTotalPrice7 = checkTotalPrice6 - error6;

      //======================
      if (calulationInputs.editPrcentEskan != "") {
        var firstEskan7 = 1 * calulationInputs.editPrcentEskan;
      } else {
        var firstEskan7 = (checkTotalPrice7 * 2.5) / 100;
      }

      if (checkTotalPrice7 < 1000000 && calulationInputs.firstHouse == "yes") {
        var firstTax7 = 0;
      } else if (
        checkTotalPrice7 > 1000000 &&
        calulationInputs.firstHouse == "yes"
      ) {
        var firstTax7 = (checkTotalPrice7 - 1000000) * 0.05;
      } else {
        var firstTax7 = checkTotalPrice7 * 0.05;
      }

      if (
        calulationInputs.currentBank === "alahli" ||
        calulationInputs.currentBank === "alinma"
      ) {
        var addEskan7 = 0.15 * firstEskan7;
      } else {
        var addEskan7 = 0;
      }

      if (
        calulationInputs.currentBank === "alahli" ||
        calulationInputs.currentBank === "alinma" ||
        calulationInputs.currentBank === "albilad"
      ) {
        var checkNetPrice7 =
          (1 - prcent) * checkTotalPrice7 -
          firstEskan7 * prcent -
          outAdministrative -
          firstTax7 -
          addEskan7;
      } else {
        var checkNetPrice7 =
          (1 - prcent) * checkTotalPrice7 -
          firstEskan7 * prcent -
          outAdministrative -
          prcent * firstTax7;
      }

      var error7 = Math.min(checkNetPrice7 - calulationInputs.totalPrice, 0);

      var checkTotalPrice8 = checkTotalPrice7 - error7;

      //======================
      if (calulationInputs.editPrcentEskan != "") {
        var firstEskan8 = 1 * calulationInputs.editPrcentEskan;
      } else {
        var firstEskan8 = (checkTotalPrice8 * 2.5) / 100;
      }

      if (checkTotalPrice8 < 1000000 && calulationInputs.firstHouse == "yes") {
        var firstTax8 = 0;
      } else if (
        checkTotalPrice8 > 1000000 &&
        calulationInputs.firstHouse == "yes"
      ) {
        var firstTax8 = (checkTotalPrice8 - 1000000) * 0.05;
      } else {
        var firstTax8 = checkTotalPrice8 * 0.05;
      }

      if (
        calulationInputs.currentBank === "alahli" ||
        calulationInputs.currentBank === "alinma"
      ) {
        var addEskan8 = 0.15 * firstEskan8;
      } else {
        var addEskan8 = 0;
      }

      if (
        calulationInputs.currentBank === "alahli" ||
        calulationInputs.currentBank === "alinma" ||
        calulationInputs.currentBank === "albilad"
      ) {
        var checkNetPrice8 =
          (1 - prcent) * checkTotalPrice8 -
          firstEskan8 * prcent -
          outAdministrative -
          firstTax8 -
          addEskan8;
      } else {
        var checkNetPrice8 =
          (1 - prcent) * checkTotalPrice8 -
          firstEskan8 * prcent -
          outAdministrative -
          prcent * firstTax8;
      }

      var error8 = checkNetPrice8 - calulationInputs.totalPrice;

      var firstPriceF = checkTotalPrice8;
      var firstEskanF = firstEskan8;
      var firstTaxF = firstTax8;
      var addEskanF = addEskan8;
      var pavment = checkTotalPrice8 - calulationInputs.totalPrice;
      var outRealEstateFinance =
        1 * checkTotalPrice8 +
        outAdministrative +
        firstEskan8 +
        addEskan8 -
        pavmentEdit -
        pavment +
        firstTax8;
      var total = firstEskan8 + checkTotalPrice8;
      var net = checkTotalPrice8 - pavment;

      var error = error8;

        var nameOut = "أ / " + calulationInputs.name
      setCalulationOutputs({
        ...calulationOutputs,
         output0:nameOut,
        outPut1: new Intl.NumberFormat().format(firstPriceF.toFixed(0)),
        outPut2: new Intl.NumberFormat().format(firstEskanF.toFixed(0)),
        outPut3: new Intl.NumberFormat().format(total.toFixed(0)),
        outPut4: new Intl.NumberFormat().format(
          outRealEstateFinance.toFixed(0)
        ),
        outPut5: outamontBaqa,
        outPut6: new Intl.NumberFormat().format(firstTaxF.toFixed(0)),
        outPut7: new Intl.NumberFormat().format(addEskanF.toFixed(0)),
        outPut8: new Intl.NumberFormat().format(outAdministrative.toFixed(0)),
        outPut9: new Intl.NumberFormat().format(pavment.toFixed(0)),
        outPut10: new Intl.NumberFormat().format(net.toFixed(0)),
        outPut11: new Intl.NumberFormat().format(error.toFixed(0)),
      });

//============================================================================









}else if (calulationInputs.typeCalculation === "priceHouse" && calulationInputs.housingSupport==="baqa" ) {
  if (calulationInputs.prcentFirst === "prcent10") {
    var prcent = 10 / 100;
  } else if (calulationInputs.prcentFirst === "prcent5") {
    var prcent = 5 / 100;
  } else if (calulationInputs.prcentFirst === "prcent20") {
    var prcent = 20 / 100;
  } else if (calulationInputs.prcentFirst === "prcent30") {
    var prcent = 30 / 100;
  } else if (calulationInputs.prcentFirst === "prcent15") {
    var prcent = 15 / 100;
  }
  
  if (
    calulationInputs.housingSupport ==="baqa" &&
    calulationInputs.amontBaqa === "baqa100"
  ) {
     var baqaDelet=100000;
    
    var firstPrice =
      (1 * calulationInputs.totalPrice - baqaDelet) / (1 - prcent);
  } else if (
    calulationInputs.housingSupport === "baqa" &&
    calulationInputs.amontBaqa === "baqa150"
  ) {
     var baqaDelet=150000;
    
    var firstPrice =
      (1 * calulationInputs.totalPrice - baqaDelet) / (1 - prcent);
  } else {
    var baqaDelet = 0;
    var firstPrice =
      (1 * calulationInputs.totalPrice - baqaDelet) / (1 - prcent);
  }

  if (calulationInputs.editPrcentEskan != "") {
    var firstEskan = 1 * calulationInputs.editPrcentEskan;
  } else {
    var firstEskan = (firstPrice * 2.5) / 100;
  }

  if (firstPrice < 1000000 && calulationInputs.firstHouse == "yes") {
    var firstTax = 0;
  } else if (firstPrice > 1000000 && calulationInputs.firstHouse == "yes") {
    var firstTax = (firstPrice - 1000000) * 0.05;
  } else {
    var firstTax = firstPrice * 0.05;
  }

  if (
    calulationInputs.housingSupport === "baqa" &&
    calulationInputs.amontBaqa === "baqa100"
  ) {
    var outamontBaqa = 100000;
  } else if (
    calulationInputs.housingSupport === "baqa" &&
    calulationInputs.amontBaqa === "baqa150"
  ) {
    var outamontBaqa = 150000;
  } else if (
    calulationInputs.housingSupport === "noBaqa" &&
    calulationInputs.monthlyHoussingSupport != ""
  ) {
    var outamontBaqa = 1 * calulationInputs.monthlyHoussingSupport;
  } else {
    var outamontBaqa = "لايوجد";
  }

  if (
    calulationInputs.currentBank === "alahli" ||
    calulationInputs.currentBank === "alinma"
  ) {
    var addEskan = 0.15 * firstEskan;
  } else {
    var addEskan = 0;
  }

  if (calulationInputs.housingSupport === "baqa") {
    var pavmentEdit = outamontBaqa;
  } else {
    var pavmentEdit = 0;
  }

  var outAdministrative = 1 * calulationInputs.administrative;

  //=============================================

  if (
    calulationInputs.currentBank === "alahli" ||
    calulationInputs.currentBank === "alinma" ||
    calulationInputs.currentBank === "albilad"
  ) {
    var checkTotalPrice2 = Math.max(1*calulationInputs.totalPrice+outAdministrative+addEskan ,
      firstPrice +
      firstEskan * prcent +
      outAdministrative +
      firstTax +
      addEskan)
  } else {
    var checkTotalPrice2 =Math.max(1*calulationInputs.totalPrice+outAdministrative+addEskan ,
      firstPrice +
      firstEskan * prcent +
      outAdministrative +
      prcent * firstTax);
  }

  //======================
  if (calulationInputs.editPrcentEskan != "") {
    var firstEskan2 = 1 * calulationInputs.editPrcentEskan;
  } else {
    var firstEskan2 = (checkTotalPrice2 * 2.5) / 100;
  }

  if (checkTotalPrice2 < 1000000 && calulationInputs.firstHouse == "yes") {
    var firstTax2 = 0;
  } else if (
    checkTotalPrice2 > 1000000 &&
    calulationInputs.firstHouse == "yes"
  ) {
    var firstTax2 = (checkTotalPrice2 - 1000000) * 0.05;
  } else {
    var firstTax2 = checkTotalPrice2 * 0.05;
  }

  if (
    calulationInputs.currentBank === "alahli" ||
    calulationInputs.currentBank === "alinma"
  ) {
    var addEskan2 = 0.15 * firstEskan2;
  } else {
    var addEskan2 = 0;
  }

  if (
    calulationInputs.currentBank === "alahli" ||
    calulationInputs.currentBank === "alinma" ||
    calulationInputs.currentBank === "albilad"
  ) {
    var checkNetPrice2 =
      (1 - prcent) * checkTotalPrice2 -
      firstEskan2 * prcent -
      outAdministrative -
      firstTax2 -
      addEskan2;
  } else {
    var checkNetPrice2 =
      (1 - prcent) * checkTotalPrice2 -
      firstEskan2 * prcent -
      outAdministrative -
      prcent * firstTax2;
  }

  var error2 = Math.min(checkNetPrice2 - calulationInputs.totalPrice + baqaDelet, 0);

  var checkTotalPrice3 = checkTotalPrice2 - error2;

  //======================
  if (calulationInputs.editPrcentEskan != "") {
    var firstEskan3 = 1 * calulationInputs.editPrcentEskan;
  } else {
    var firstEskan3 = (checkTotalPrice3 * 2.5) / 100;
  }

  if (checkTotalPrice3 < 1000000 && calulationInputs.firstHouse == "yes") {
    var firstTax3 = 0;
  } else if (
    checkTotalPrice3 > 1000000 &&
    calulationInputs.firstHouse == "yes"
  ) {
    var firstTax3 = (checkTotalPrice3 - 1000000) * 0.05;
  } else {
    var firstTax3 = checkTotalPrice3 * 0.05;
  }

  if (
    calulationInputs.currentBank === "alahli" ||
    calulationInputs.currentBank === "alinma"
  ) {
    var addEskan3 = 0.15 * firstEskan3;
  } else {
    var addEskan3 = 0;
  }

  if (
    calulationInputs.currentBank === "alahli" ||
    calulationInputs.currentBank === "alinma" ||
    calulationInputs.currentBank === "albilad"
  ) {
    var checkNetPrice3 =
      (1 - prcent) * checkTotalPrice3 -
      firstEskan3 * prcent -
      outAdministrative -
      firstTax3 -
      addEskan3;
  } else {
    var checkNetPrice3 =
      (1 - prcent) * checkTotalPrice3 -
      firstEskan3 * prcent -
      outAdministrative -
      prcent * firstTax3;
  }

  var error3 = Math.min(checkNetPrice3 - calulationInputs.totalPrice+ baqaDelet, 0);

  var checkTotalPrice4 = checkTotalPrice3 - error3;

  //======================
  if (calulationInputs.editPrcentEskan != "") {
    var firstEskan4 = 1 * calulationInputs.editPrcentEskan;
  } else {
    var firstEskan4 = (checkTotalPrice4 * 2.5) / 100;
  }

  if (checkTotalPrice4 < 1000000 && calulationInputs.firstHouse == "yes") {
    var firstTax4 = 0;
  } else if (
    checkTotalPrice4 > 1000000 &&
    calulationInputs.firstHouse == "yes"
  ) {
    var firstTax4 = (checkTotalPrice4 - 1000000) * 0.05;
  } else {
    var firstTax4 = checkTotalPrice4 * 0.05;
  }

  if (
    calulationInputs.currentBank === "alahli" ||
    calulationInputs.currentBank === "alinma"
  ) {
    var addEskan4 = 0.15 * firstEskan4;
  } else {
    var addEskan4 = 0;
  }

  if (
    calulationInputs.currentBank === "alahli" ||
    calulationInputs.currentBank === "alinma" ||
    calulationInputs.currentBank === "albilad"
  ) {
    var checkNetPrice4 =
      (1 - prcent) * checkTotalPrice4 -
      firstEskan4 * prcent -
      outAdministrative -
      firstTax4 -
      addEskan4;
  } else {
    var checkNetPrice4 =
      (1 - prcent) * checkTotalPrice4 -
      firstEskan4 * prcent -
      outAdministrative -
      prcent * firstTax4;
  }

  var error4 = Math.min(checkNetPrice4 - calulationInputs.totalPrice+ baqaDelet, 0);

  var checkTotalPrice5 = checkTotalPrice4 - error4;

  //======================
  if (calulationInputs.editPrcentEskan != "") {
    var firstEskan5 = 1 * calulationInputs.editPrcentEskan;
  } else {
    var firstEskan5 = (checkTotalPrice5 * 2.5) / 100;
  }

  if (checkTotalPrice5 < 1000000 && calulationInputs.firstHouse == "yes") {
    var firstTax5 = 0;
  } else if (
    checkTotalPrice5 > 1000000 &&
    calulationInputs.firstHouse == "yes"
  ) {
    var firstTax5 = (checkTotalPrice5 - 1000000) * 0.05;
  } else {
    var firstTax5 = checkTotalPrice5 * 0.05;
  }

  if (
    calulationInputs.currentBank === "alahli" ||
    calulationInputs.currentBank === "alinma"
  ) {
    var addEskan5 = 0.15 * firstEskan5;
  } else {
    var addEskan5 = 0;
  }

  if (
    calulationInputs.currentBank === "alahli" ||
    calulationInputs.currentBank === "alinma" ||
    calulationInputs.currentBank === "albilad"
  ) {
    var checkNetPrice5 =
      (1 - prcent) * checkTotalPrice5 -
      firstEskan5 * prcent -
      outAdministrative -
      firstTax5 -
      addEskan5;
  } else {
    var checkNetPrice5 =
      (1 - prcent) * checkTotalPrice5 -
      firstEskan5 * prcent -
      outAdministrative -
      prcent * firstTax5;
  }

  var error5 = Math.min(checkNetPrice5 - calulationInputs.totalPrice+ baqaDelet, 0);

  var checkTotalPrice6 = checkTotalPrice5 - error5;

  //======================
  if (calulationInputs.editPrcentEskan != "") {
    var firstEskan6 = 1 * calulationInputs.editPrcentEskan;
  } else {
    var firstEskan6 = (checkTotalPrice6 * 2.5) / 100;
  }

  if (checkTotalPrice6 < 1000000 && calulationInputs.firstHouse == "yes") {
    var firstTax6 = 0;
  } else if (
    checkTotalPrice6 > 1000000 &&
    calulationInputs.firstHouse == "yes"
  ) {
    var firstTax6 = (checkTotalPrice6 - 1000000) * 0.05;
  } else {
    var firstTax6 = checkTotalPrice6 * 0.05;
  }

  if (
    calulationInputs.currentBank === "alahli" ||
    calulationInputs.currentBank === "alinma"
  ) {
    var addEskan6 = 0.15 * firstEskan6;
  } else {
    var addEskan6 = 0;
  }

  if (
    calulationInputs.currentBank === "alahli" ||
    calulationInputs.currentBank === "alinma" ||
    calulationInputs.currentBank === "albilad"
  ) {
    var checkNetPrice6 =
      (1 - prcent) * checkTotalPrice6 -
      firstEskan6 * prcent -
      outAdministrative -
      firstTax6 -
      addEskan6;
  } else {
    var checkNetPrice6 =
      (1 - prcent) * checkTotalPrice6 -
      firstEskan6 * prcent -
      outAdministrative -
      prcent * firstTax6;
  }

  var error6 = Math.min(checkNetPrice6 - calulationInputs.totalPrice + baqaDelet, 0);

  var checkTotalPrice7 = checkTotalPrice6 - error6;

  //======================
  if (calulationInputs.editPrcentEskan != "") {
    var firstEskan7 = 1 * calulationInputs.editPrcentEskan;
  } else {
    var firstEskan7 = (checkTotalPrice7 * 2.5) / 100;
  }

  if (checkTotalPrice7 < 1000000 && calulationInputs.firstHouse == "yes") {
    var firstTax7 = 0;
  } else if (
    checkTotalPrice7 > 1000000 &&
    calulationInputs.firstHouse == "yes"
  ) {
    var firstTax7 = (checkTotalPrice7 - 1000000) * 0.05;
  } else {
    var firstTax7 = checkTotalPrice7 * 0.05;
  }

  if (
    calulationInputs.currentBank === "alahli" ||
    calulationInputs.currentBank === "alinma"
  ) {
    var addEskan7 = 0.15 * firstEskan7;
  } else {
    var addEskan7 = 0;
  }

  if (
    calulationInputs.currentBank === "alahli" ||
    calulationInputs.currentBank === "alinma" ||
    calulationInputs.currentBank === "albilad"
  ) {
    var checkNetPrice7 =
      (1 - prcent) * checkTotalPrice7 -
      firstEskan7 * prcent -
      outAdministrative -
      firstTax7 -
      addEskan7;
  } else {
    var checkNetPrice7 =
      (1 - prcent) * checkTotalPrice7 -
      firstEskan7 * prcent -
      outAdministrative -
      prcent * firstTax7;
  }

  var error7 = Math.min(checkNetPrice7 - calulationInputs.totalPrice + baqaDelet, 0);

  var checkTotalPrice8 = checkTotalPrice7 - error7;

  //======================
  if (calulationInputs.editPrcentEskan != "") {
    var firstEskan8 = 1 * calulationInputs.editPrcentEskan;
  } else {
    var firstEskan8 = (checkTotalPrice8 * 2.5) / 100;
  }

  if (checkTotalPrice8 < 1000000 && calulationInputs.firstHouse == "yes") {
    var firstTax8 = 0;
  } else if (
    checkTotalPrice8 > 1000000 &&
    calulationInputs.firstHouse == "yes"
  ) {
    var firstTax8 = (checkTotalPrice8 - 1000000) * 0.05;
  } else {
    var firstTax8 = checkTotalPrice8 * 0.05;
  }

  if (
    calulationInputs.currentBank === "alahli" ||
    calulationInputs.currentBank === "alinma"
  ) {
    var addEskan8 = 0.15 * firstEskan8;
  } else {
    var addEskan8 = 0;
  }

  if (
    calulationInputs.currentBank === "alahli" ||
    calulationInputs.currentBank === "alinma" ||
    calulationInputs.currentBank === "albilad"
  ) {
    var checkNetPrice8 =
      (1 - prcent) * checkTotalPrice8 -
      firstEskan8 * prcent -
      outAdministrative -
      firstTax8 -
      addEskan8;
  } else {
    var checkNetPrice8 =
      (1 - prcent) * checkTotalPrice8 -
      firstEskan8 * prcent -
      outAdministrative -
      prcent * firstTax8;
  }

  var error8 = checkNetPrice8 - calulationInputs.totalPrice + baqaDelet;



  var firstPriceF = Math.max(checkTotalPrice8,1*calulationInputs.totalPrice+outAdministrative+addEskan8);


  if (calulationInputs.editPrcentEskan != "") {
    var firstEskanm = 1 * calulationInputs.editPrcentEskan;
  } else {
    var firstEskanm = (firstPriceF * 2.5) / 100;
  }
  var firstEskanF =Math.max(firstEskan8,firstEskanm) ;


  if (
    calulationInputs.currentBank === "alahli" ||
    calulationInputs.currentBank === "alinma"
  ) {
    var addEskan8m = 0.15 * firstEskanF;
  } else {
    var addEskan8m = 0;
  }


  if (firstPriceF < 1000000 && calulationInputs.firstHouse == "yes") {
    var firstTax8m = 0;
  } else if (
    firstPriceF > 1000000 &&
    calulationInputs.firstHouse == "yes"
  ) {
    var firstTax8m = (firstPriceF - 1000000) * 0.05;
  } else {
    var firstTax8m = firstPriceF * 0.05;
  }

  var firstTaxF = Math.max(firstTax8,firstTax8m)
  var addEskanF = Math.max(addEskan8,addEskan8m)
  var pavment = Math.max(firstPriceF - 1*calulationInputs.totalPrice,outAdministrative+addEskanF );
  var outRealEstateFinance =
    1 * firstPriceF +
    outAdministrative +
    firstEskanF +
    addEskanF -
    pavmentEdit -
    pavment +
    firstTaxF;
  var total = firstEskanF + firstPriceF;
  var net = firstPriceF - pavment ;

  var error =Math.min(error8,net-1*calulationInputs.totalPrice) ;

  var nameOut = "أ / " + calulationInputs.name
  setCalulationOutputs({
    ...calulationOutputs,
     output0:nameOut,
    outPut1: new Intl.NumberFormat().format(firstPriceF.toFixed(0)),
    outPut2: new Intl.NumberFormat().format(firstEskanF.toFixed(0)),
    outPut3: new Intl.NumberFormat().format(total.toFixed(0)),
    outPut4: new Intl.NumberFormat().format(
      outRealEstateFinance.toFixed(0)
    ),
    outPut5: outamontBaqa,
    outPut6: new Intl.NumberFormat().format(firstTaxF.toFixed(0)),
    outPut7: new Intl.NumberFormat().format(addEskanF.toFixed(0)),
    outPut8: new Intl.NumberFormat().format(outAdministrative.toFixed(0)),
    outPut9: new Intl.NumberFormat().format(pavment.toFixed(0)),
    outPut10: new Intl.NumberFormat().format(net.toFixed(0)),
    outPut11: new Intl.NumberFormat().format(error.toFixed(0)),
  });
















      //================شيك المالك  =============================
    } else if (calulationInputs.typeCalculation === "bankCheque") {
      if (calulationInputs.prcentFirst === "prcent10") {
        var prcent = 10 / 100;
      } else if (calulationInputs.prcentFirst === "prcent5") {
        var prcent = 5 / 100;
      } else if (calulationInputs.prcentFirst === "prcent20") {
        var prcent = 20 / 100;
      } else if (calulationInputs.prcentFirst === "prcent30") {
        var prcent = 30 / 100;
      } else if (calulationInputs.prcentFirst === "prcent15") {
        var prcent = 15 / 100;
      }

      var bankCheque = 1 * calulationInputs.totalPrice;

      if (calulationInputs.editPrcentEskan != "") {
        var firstEskan = 1 * calulationInputs.editPrcentEskan;
      } else {
        var firstEskan = (bankCheque * 2.5) / 100;
      }

      if (bankCheque < 1000000 && calulationInputs.firstHouse == "yes") {
        var firstTax = 0;
      } else if (bankCheque > 1000000 && calulationInputs.firstHouse == "yes") {
        var firstTax = (bankCheque - 1000000) * 0.05;
      } else {
        var firstTax = bankCheque * 0.05;
      }

      if (
        calulationInputs.housingSupport === "baqa" &&
        calulationInputs.amontBaqa === "baqa100"
      ) {
        var outamontBaqa = 100000;
      } else if (
        calulationInputs.housingSupport === "baqa" &&
        calulationInputs.amontBaqa === "baqa150"
      ) {
        var outamontBaqa = 150000;
      } else if (
        calulationInputs.housingSupport === "noBaqa" &&
        calulationInputs.monthlyHoussingSupport != ""
      ) {
        var outamontBaqa = 1 * calulationInputs.monthlyHoussingSupport;
      } else {
        var outamontBaqa = "لايوجد";
      }

      if (
        calulationInputs.currentBank === "alahli" ||
        calulationInputs.currentBank === "alinma"
      ) {
        var addEskan = 0.15 * firstEskan;
      } else {
        var addEskan = 0;
      }

      if (calulationInputs.housingSupport === "baqa") {
        var pavmentEdit = outamontBaqa;
      } else {
        var pavmentEdit = 0;
      }

      var outAdministrative = 1 * calulationInputs.administrative;

      // التمويل و االدفعه و صافي المالك

      if (
        calulationInputs.currentBank === "alahli" ||
        calulationInputs.currentBank === "alinma" ||
        calulationInputs.currentBank === "albilad"
      ) {
        if (calulationInputs.housingSupport === "baqa") {
          var pavment =
            Math.max(
              0,
              prcent * (bankCheque + firstEskan +  (calulationInputs.currentBank === "albilad"?0: firstTax)) - pavmentEdit
            ) +
            outAdministrative +
            addEskan +1*calulationInputs.editAddpavment;
        } else {
          var pavment =
            Math.max(0, prcent * (bankCheque + firstEskan +  (calulationInputs.currentBank === "albilad"?0: firstTax)) - 0) +
            outAdministrative +
            addEskan+1*calulationInputs.editAddpavment;
        }
      } else {
        if (calulationInputs.housingSupport === "baqa") {
          var pavment =
            Math.max(
              0,
              prcent * (bankCheque + firstEskan + firstTax) - pavmentEdit
            ) + outAdministrative+1*calulationInputs.editAddpavment;
        } else {
          var pavment =
            Math.max(0, prcent * (bankCheque + firstEskan + firstTax) - 0) +
            outAdministrative+1*calulationInputs.editAddpavment;
        }
      }

      var firstPriceF = bankCheque;
      var firstEskanF = firstEskan;
      var firstTaxF = firstTax;
      var addEskanF = addEskan;

      var outRealEstateFinance =
        1 * firstPriceF +
        outAdministrative +
        firstEskanF +
        addEskanF -
        pavment +
        firstTaxF -
        pavmentEdit;

      var total = firstPriceF + firstEskanF;

      var net = firstPriceF - pavment;

      var error = 0;

      var nameOut = "أ / " + calulationInputs.name
      setCalulationOutputs({
        ...calulationOutputs,
         output0:nameOut,
        outPut1: new Intl.NumberFormat().format(firstPriceF.toFixed(0)),
        outPut2: new Intl.NumberFormat().format(firstEskanF.toFixed(0)),
        outPut3: new Intl.NumberFormat().format(total.toFixed(0)),
        outPut4: new Intl.NumberFormat().format(
          outRealEstateFinance.toFixed(0)
        ),
        outPut5: outamontBaqa,
        outPut6: new Intl.NumberFormat().format(firstTaxF.toFixed(0)),
        outPut7: new Intl.NumberFormat().format(addEskanF.toFixed(0)),
        outPut8: new Intl.NumberFormat().format(outAdministrative.toFixed(0)),
        outPut9: new Intl.NumberFormat().format(pavment.toFixed(0)),
        outPut10: new Intl.NumberFormat().format(net.toFixed(0)),
        outPut11: new Intl.NumberFormat().format(error.toFixed(0)),
      });

      //=======================لاحقا   =====================
    } else if (calulationInputs.typeCalculation === "realEstateFinance") {
      if (
        calulationInputs.currentBank === "alahli" ||
        calulationInputs.currentBank === "alinma"
      ) {
        var addEskan = 0.15 * firstEskan;
      } else {
        var addEskan = 0;
      }

      if (calulationInputs.housingSupport === "baqa") {
        var pavmentEdit = outamontBaqa;
      } else {
        var pavmentEdit = 0;
      }

      var pavment = firstPrice - calulationInputs.totalPrice;
      var outAdministrative = 1 * calulationInputs.administrative;
      var outRealEstateFinance =
        1 * calulationInputs.totalPrice +
        outAdministrative +
        firstEskan +
        addEskan -
        pavmentEdit;
      var total = firstEskan + firstPrice;

      var net = firstPrice - pavment;
       var nameOut = "أ / " + calulationInputs.name
      setCalulationOutputs({
        ...calulationOutputs,
         output0:nameOut,
        outPut1: new Intl.NumberFormat().format(firstPrice.toFixed(0)),
        outPut2: new Intl.NumberFormat().format(firstEskan.toFixed(0)),
        outPut3: new Intl.NumberFormat().format(total.toFixed(0)),
        outPut4: new Intl.NumberFormat().format(
          outRealEstateFinance.toFixed(0)
        ),
        outPut5: outamontBaqa,
        outPut6: new Intl.NumberFormat().format(firstTax.toFixed(0)),
        outPut7: new Intl.NumberFormat().format(addEskan.toFixed(0)),
        outPut8: new Intl.NumberFormat().format(outAdministrative.toFixed(0)),
        outPut9: new Intl.NumberFormat().format(pavment.toFixed(0)),
        outPut10: new Intl.NumberFormat().format(net.toFixed(0)),
        outPut11: new Intl.NumberFormat().format(error.toFixed(0)),
      });
    }

    event.preventDefault();


  //   setErrorMassge(null);

  //   const {
  //     typeCalculation,
  //     currentBank,
  //     firstHouse,
  //     housingSupport,
  //     administrative,
  //     amontBaqa,
  //     monthlyHoussingSupport,
  //     totalPrice,
  //     prcentFirst,
  //     amonntRealEstateFinance,
  //     amonntFirst,
  //     editPrcentEskan,
  //   } = calulationInputs;

  //   if (administrative.length < 3 || administrative.length > 4) {
  //     setErrorMassge("خطأ فضلا التاكد من الرسوم الاداريه");
  //     audio3.play();
  //   } else if (editPrcentEskan.length < 3 && editPrcentEskan != "") {
  //     setErrorMassge("  فضلا تاكد من مبلغ السعي  ");
  //     audio3.play();
  //   } else if (editPrcentEskan.length > 5 && editPrcentEskan != "") {
  //     setErrorMassge(" فضلا تاكد من مبلغ السعي   ");
  //     audio3.play();
  //   } else if (totalPrice.length < 5 && typeCalculation === "priceHouse") {
  //     setErrorMassge(" فضلا تاكد من سعر العقار   ");
  //     audio3.play();
  //   } else if (totalPrice.length > 7 && typeCalculation === "priceHouse") {
  //     setErrorMassge(" فضلا تاكد من سعر العقار   ");
  //     audio3.play();
  //   } else if (
  //     amonntFirst.length < 4 &&
  //     typeCalculation === "realEstateFinance"
  //   ) {
  //     setErrorMassge(" فضلا تاكد من مبلغ الدفعه   ");
  //     audio3.play();
  //   } else if (
  //     amonntFirst.length > 6 &&
  //     typeCalculation === "realEstateFinance"
  //   ) {
  //     setErrorMassge(" فضلا تاكد من مبلغ الدفعه   ");
  //     audio3.play();
  //   } else if (
  //     amonntRealEstateFinance.length < 5 &&
  //     typeCalculation === "realEstateFinance"
  //   ) {
  //     setErrorMassge(" فضلا تاكد من مبلغ التمويل   ");
  //     audio3.play();
  //   } else if (
  //     amonntRealEstateFinance.length > 7 &&
  //     typeCalculation === "realEstateFinance"
  //   ) {
  //     setErrorMassge(" فضلا تاكد من مبلغ التمويل   ");
  //     audio3.play();
  //   } else if (monthlyHoussingSupport === "" && housingSupport === "noBaqa") {
  //     setErrorMassge(" فضلا اكتب قسط الدعم ان وجد    ");
  //     audio2.play();
  //   }

  //   setShowModal(true);
  // }


  setErrorMassge(null);

const errors = []; // مصفوفة الأخطاء

const {
  typeCalculation,
  currentBank,
  firstHouse,
  housingSupport,
  administrative,
  amontBaqa,
  monthlyHoussingSupport,
  totalPrice,
  prcentFirst,
  amonntRealEstateFinance,
  amonntFirst,
  editPrcentEskan,
} = calulationInputs;

// الشروط وجمع الأخطاء

if (administrative =="") {
  errors.push("خطأ فضلا التاكد من الرسوم الادارية او اكتب صفر");
  audio3.play();
}

if(administrative!="0"){
if (administrative.length < 3 || administrative.length > 4) {
  errors.push("خطأ فضلا التاكد من الرسوم الاداريه");
  audio3.play();
}
}


if (editPrcentEskan.length < 3 && editPrcentEskan !== "") {
  errors.push("فضلا تاكد من مبلغ السعي");
  audio3.play();
}

if (editPrcentEskan.length > 5 && editPrcentEskan !== "") {
  errors.push("فضلا تاكد من مبلغ السعي");
  audio3.play();
}

if (totalPrice.length < 5 && typeCalculation === "priceHouse") {
  errors.push("فضلا تاكد من سعر العقار");
  audio3.play();
}

if (totalPrice.length > 7 && typeCalculation === "priceHouse") {
  errors.push("فضلا تاكد من سعر العقار");
  audio3.play();
}

if (amonntFirst.length < 4 && typeCalculation === "realEstateFinance") {
  errors.push("فضلا تاكد من مبلغ الدفعه");
  audio3.play();
}

if (amonntFirst.length > 6 && typeCalculation === "realEstateFinance") {
  errors.push("فضلا تاكد من مبلغ الدفعه");
  audio3.play();
}

if (
  amonntRealEstateFinance.length < 5 &&
  typeCalculation === "realEstateFinance"
) {
  errors.push("فضلا تاكد من مبلغ التمويل");
  audio3.play();
}

if (
  amonntRealEstateFinance.length > 7 &&
  typeCalculation === "realEstateFinance"
) {
  errors.push("فضلا تاكد من مبلغ التمويل");
  audio3.play();
}

if (monthlyHoussingSupport === "" && housingSupport === "noBaqa") {
  errors.push("فضلا اكتب قسط الدعم ان وجد او اكتب صفر");
  audio2.play();
}

// عرض الأخطاء أو المتابعة

if (errors.length > 0) {
  setErrorMassge(errors); // خزّن الأخطاء كمصفوفة
  setShowModal(true);
  setModalShowBootstap(true);
  return;
}

// لا يوجد أخطاء
setShowModal(true);
setModalShowBootstap(true);
  }



  function handelChecked(event) {
    setcalulationInputs({
      ...calulationInputs,
      inputCheck: event.target.checked,
    });
  }

  if (
    calulationInputs.typeCalculation === "priceHouse" &&
    calulationInputs.housingSupport === "baqa"
  ) {
    if (
      calulationInputs.administrative === "" ||
      calulationInputs.totalPrice === "" ||
      calulationInputs.prcentFirst === "" ||
      calulationInputs.amontBaqa === "baqaSelect"
    ) {
      var btnIsDisable = true;
    } else {
      var btnIsDisable = false;
    }
  } else if (
    calulationInputs.typeCalculation === "priceHouse" &&
    calulationInputs.housingSupport != "baqa"
  ) {
    if (
      calulationInputs.administrative === "" ||
      calulationInputs.totalPrice === "" ||
      calulationInputs.prcentFirst === ""
    ) {
      var btnIsDisable = true;
    } else {
      var btnIsDisable = false;
    }
  } else if (
    calulationInputs.typeCalculation === "bankCheque" &&
    calulationInputs.housingSupport === "baqa"
  ) {
    if (
      calulationInputs.administrative === "" ||
      calulationInputs.totalPrice === "" ||
      calulationInputs.prcentFirst === "" ||
      calulationInputs.amontBaqa === "baqaSelect"
    ) {
      var btnIsDisable = true;
    } else {
      var btnIsDisable = false;
    }
  } else if (
    calulationInputs.typeCalculation === "bankCheque" &&
    calulationInputs.housingSupport != "baqa"
  ) {
    if (
      calulationInputs.administrative === "" ||
      calulationInputs.totalPrice === "" ||
      calulationInputs.prcentFirst === ""
    ) {
      var btnIsDisable = true;
    } else {
      var btnIsDisable = false;
    }
  } else if (
    calulationInputs.typeCalculation === "realEstateFinance" &&
    calulationInputs.housingSupport === "baqa"
  ) {
    if (
      calulationInputs.administrative === "" ||
      calulationInputs.amonntRealEstateFinance === "" ||
      calulationInputs.amonntFirst === "" ||
      calulationInputs.amontBaqa === "baqaSelect"
    ) {
      var btnIsDisable = true;
    } else {
      var btnIsDisable = false;
    }
  } else if (
    calulationInputs.typeCalculation === "realEstateFinance" &&
    calulationInputs.housingSupport != "baqa"
  ) {
    if (
      calulationInputs.administrative === "" ||
      calulationInputs.amonntRealEstateFinance === "" ||
      calulationInputs.amonntFirst === ""
    ) {
      var btnIsDisable = true;
    } else {
      var btnIsDisable = false;
    }
  } else {
    var btnIsDisable = true;
  }

  function handelDivClick() {
    if (showModdal == true) {
      setShowModal(false);
    }
  }

  if (calulationInputs.housingSupport === "baqa") {
    var textOut = "مبلغ باقه الدعم";
  } else {
    var textOut = "قسط الدعم ";
  }

  if (calulationInputs.typeCalculation === "bankCheque") {
    var textPrice = "شيك المالك";
  } else {
    var textPrice = "سعر العقار";
  }

  if (calulationInputs.currentBank === "alrajhi") {
    var textNet = "صافي المالك";
  } else {
    var textNet = " صافي المالك + التصرفات";
  }
   const [copied, setCopied] = useState(false);

  // function copy() {
  //   navigator.clipboard.writeText(

  //     " اسم العميل : " +
  //     calulationOutputs.output0 +
  //     " شيك المالك : " +
  //       calulationOutputs.outPut1 +
  //       "  عمولة الشركة : " +
  //       calulationOutputs.outPut2 +
  //       " اجمالي الشيكات  : " +
  //       calulationOutputs.outPut3 +
  //       "  مبلغ التمويل : " +
  //       calulationOutputs.outPut3 +
  //       textOut +
  //       " : " +
  //       calulationOutputs.outPut5 +
  //       "  التصرفات العقارية : " +
  //       calulationOutputs.outPut6 +
  //       "  ضريبة السعي : " +
  //       calulationOutputs.outPut7 +
  //       " الرسوم الادارية  : " +
  //       calulationOutputs.outPut8 +
  //       "  الدفعه و الرسوم و الضريبة : " +
  //       calulationOutputs.outPut9 +
  //       textNet +
  //       " : " +
  //       calulationOutputs.outPut10
  //   );
  // }



    const handleCopy = async () => {
    const textToCopy =
    

          "اسم العميل : " + calulationOutputs.output0 + "\n" +
      "شيك المالك : " + calulationOutputs.outPut1 + "\n" +
      "عمولة الشركة : " + calulationOutputs.outPut2 + "\n" +
      "اجمالي الشيكات : " + calulationOutputs.outPut3 + "\n" +
      "مبلغ التمويل : " + calulationOutputs.outPut3 + "\n" +
      textOut + " : " + calulationOutputs.outPut5 + "\n" +
      "التصرفات العقارية : " + calulationOutputs.outPut6 + "\n" +
      "ضريبة السعي : " + calulationOutputs.outPut7 + "\n" +
      "الرسوم الادارية : " + calulationOutputs.outPut8 + "\n" +
      "الدفعه و الرسوم و الضريبة : " + calulationOutputs.outPut9 + "\n" +
      textNet + " : " + calulationOutputs.outPut10 +  "\n" +
      "  التاريخ و الوقت : " + nowToString ;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("فشل النسخ:", err);
    }
  };

  const disableInput = calulationInputs.typeCalculation=="realEstateFinance"




  //-------------------------------------
  var namePhoto = calulationOutputs.output0 + ".png";


 const logoBase64 =
 "data:image/png;base64,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"

  function capture() {
  // إخفاء العناصر غير المرغوب فيها
  document.querySelectorAll('.no-print, .hide-on-export').forEach(el => {
    el.style.display = 'none';
  });

  const target = document.querySelector(".photo-print");
  target.style.position = "relative"; // ضروري لتوسيط اللوجو داخله

  // ✅ إنشاء شعار مؤقت
  const logo = document.createElement("img");
  logo.src = logoBase64; // تأكد أنك عرّفت هذا المتغير
  logo.style.position = "absolute";
  logo.style.top = "50%";
  logo.style.left = "50%";
  logo.style.transform = "translate(-50%, -50%)";
  logo.style.width = "200px"; // حجم كبير
  logo.style.opacity = "0.1"; // شفاف ليبدو كخلفية
  logo.style.pointerEvents = "none"; // لا يتداخل مع الماوس
  logo.className = "temp-logo";

  target.appendChild(logo); // ✅ إضافة الشعار مؤقتًا

  html2canvas(target, {
    scale: 2,
    useCORS: true
  }).then((canvas) => {
    let a = document.createElement("a");
    a.download = namePhoto;
    a.href = canvas.toDataURL("image/png");
    a.click();

    // ✅ حذف الشعار المؤقت
    const tempLogo = document.querySelector(".temp-logo");
    if (tempLogo) tempLogo.remove();

    // إعادة إظهار العناصر بعد الالتقاط
    document.querySelectorAll('.no-print, .hide-on-export').forEach(el => {
      el.style.display = '';
    });
  });
}

  



  return (

    <div style={{ marginTop: "10px" }} onClick={handelDivClick}>
    {/* <div style={{ marginTop: "10px", height: "100%" }} onClick={handelDivClick}> */}


      {/* <Modal isVisble={showModdal} errorMassage={errorMassge} /> */}


                      <AlartBootstap
                  show={modalShowBootstap}
                  onHide={() => setModalShowBootstap(false)}
                  errorMassage={errorMassge}
                  classNameModelBootstrap={classNameModelBootstrap}
                  darkSide={darkSide}
            
                addNote={"تمت الحسبة على حسب البيانات\nوشيك المالك هو: " + calulationOutputs.outPut1}
       
      
                />

      <div className="p-relative" style={{ margin: "0px 5px" }}>
        <div className="row flex-mobile" style={{ marginBottom: "60px"}}>
          <div className="col box input-css" id={classNameModel} style={{ marginBottom: "0px"}}>
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
                <label className=""> الحسبة طبقا </label>
                <div  className="input-wrapper">
                <select
                  className="w-60"
                  value={calulationInputs.typeCalculation}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      typeCalculation: event.target.value,
                    });
                  }}
                >
                  <option value="priceHouse">لسعر العقار </option>
                  <option selected value="realEstateFinance">
                    لتمويل العميل
                  </option>
                  <option value="bankCheque">لشيك المالك </option>
                </select>
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">اسم البنك </label>
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
                <label className=""> المسكن الاول</label>
                <div  className="input-wrapper">
                <select
                  className="w-60"
                  value={calulationInputs.firstHouse}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      firstHouse: event.target.value,
                    });
                  }}
                >
                  <option value="yes">نعم </option>
                  <option selected value="no">
                    {" "}
                    لا{" "}
                  </option>
                </select>
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">الدعم السكني</label>
                <div  className="input-wrapper">
                <select
                  className="w-60"
                  value={calulationInputs.housingSupport}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      housingSupport: event.target.value,
                    });
                  }}
                >
                  <option selected value="baqa">
                    باقة الدعم
                  </option>
                  <option value="noBaqa"> الاخري</option>
               
                </select>
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label className=""> الرسوم الادارية </label>
                <div  className="input-wrapper">
                <input
                  className="w-60"
                   // onKeyDown={checkLength}
        





                  value={calulationInputs.administrative}



                 type="text"
                  inputMode="numeric"
                  maxLength={4}
            
                  onChange={(e) => handleNumericInput(e, 'administrative', 10)}




                

                />
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>

              {calulationInputs.housingSupport === "baqa" ? (
                <div style={{ width: "100%", direction: "rtl" }}>
                  <label className=""> قيمة الباقة </label>
                  <div  className="input-wrapper">
                  <select
                    className="w-60"
                    value={calulationInputs.amontBaqa}
                    onChange={(event) => {
                      setcalulationInputs({
                        ...calulationInputs,
                        amontBaqa: event.target.value,
                      });
                    }}
                  >
                    <option selected value="baqaSelect">
                      ---
                    </option>
                    <option value="baqa100">100,000 </option>
                    <option value="baqa150">150,000 </option>
                  </select>
                                                          <span  className="underline-input"></span>
                   
                   </div>
                </div>
              ) : (
                <div style={{ width: "100%", direction: "rtl" }}>
                  <label className=""> قسط الدعم </label>
                  <div  className="input-wrapper">
                  <input
                    className="w-60"
                     // onKeyDown={checkLength}
               
                    placeholder="قسط الدعم ان وجد"


           
               value={calulationInputs.monthlyHoussingSupport}
                                  type="text"
                  inputMode="numeric"
                  maxLength={4}
                  onChange={(e) => handleNumericInput(e, 'monthlyHoussingSupport', 10)}
                 
                 
                  />
                                                          <span  className="underline-input"></span>
                   
                   </div>
                </div> 
              )}

              {calulationInputs.typeCalculation != "realEstateFinance" ? (
                <>
                  <div style={{ width: "100%", direction: "rtl" }}>
                    <label className="">{textPrice}</label>
                    <div  className="input-wrapper">
                    <input
                      className="w-60"
                       // onKeyDown={checkLength}
                    


                      value={calulationInputs.totalPrice}

                                                    type="text"
                  inputMode="numeric"
                  maxLength={7}
        
                  onChange={(e) => handleNumericInput(e, 'totalPrice', 10)}
                 
                    />
                                                            <span  className="underline-input"></span>
                   
                   </div>
                  </div>

                  <div style={{ width: "100%", direction: "rtl" }}>
                    <label className=""> الدفعه المقدمة</label>
                    <div  className="input-wrapper">
                    <select
                      className="w-60"
                      value={calulationInputs.prcentFirst}
                      onChange={(event) => {
                        setcalulationInputs({
                          ...calulationInputs,
                          prcentFirst: event.target.value,
                        });
                      }}
                    >
                      <option value="prcent5"> 5%</option>
                      <option selected value="prcent10">
                        10%{" "}
                      </option>
                      <option value="prcent15">15% </option>
                      <option value="prcent20">20% </option>
                      <option value="prcent30">30% </option>
                    </select>
                                                            <span  className="underline-input"></span>
                   
                   </div>
                  </div>




                      {/* <div>
        
                   <Dropdown/>
                    </div> */}








                </>
              ) : (
                <>
                  <div style={{ width: "100%", direction: "rtl" }}>
                    <label className=""> مبلغ التمويل</label>
                    <div  className="input-wrapper">
                    <input
                      className="w-60"
                       // onKeyDown={checkLength}
                   
                      value={calulationInputs.amonntRealEstateFinance}
                      disabled={disableInput}
                      style={{background: disableInput? "rgb(205 205 205)" : "",}}

                                                           type="text"
                  inputMode="numeric"
                  maxLength={7}
                  onChange={(e) => handleNumericInput(e, 'amonntRealEstateFinance', 10)}
                 

               
                    />
                                                            <span  className="underline-input"></span>
                   
                   </div>
                  </div>

                  <div style={{ width: "100%", direction: "rtl" }}>
                    <label className=""> مبلغ الدفعه</label>
                    <div  className="input-wrapper">
                    <input
                       // onKeyDown={checkLength}
                    
                      className="w-60"
                      value={calulationInputs.amonntFirst}
                      disabled={disableInput}
                      style={{background: disableInput? "rgb(205 205 205)" : "",}}

    type="text"
                             inputMode="numeric"
                  maxLength={6}
                  onChange={(e) => handleNumericInput(e, 'amonntFirst', 10)}
                  
                    />
                                                            <span  className="underline-input"></span>
                   
                   </div>
                  </div>
                </>
              )}

{calulationInputs.typeCalculation == "bankCheque" ? (
  
  
  
  <div style={{ width: "100%", direction: "rtl" }}>
  <label className=""> زيادة الدفعه</label>
  <div  className="input-wrapper">
  <input
     // onKeyDown={checkLength}
 
    className="w-60"
    value={calulationInputs.editAddpavment}
    type="text"
           inputMode="numeric"
                  maxLength={6}
                  onChange={(e) => handleNumericInput(e, 'editAddpavment', 10)}
 
    
  />
                                          <span  className="underline-input"></span>
                   
                   </div>
</div>

)
  
  :(<></>)
  
  
  }
              <div style={{ width: "100%", direction: "rtl" }}>
                <label className=""> تعديل السعي</label>
                <div  className="input-wrapper">
                <input
                   // onKeyDown={checkLength}
              
                 
                  className="w-60"
                  value={calulationInputs.editPrcentEskan}
    type="text"
                 inputMode="numeric"
                  maxLength={5}
                  onChange={(e) => handleNumericInput(e, 'editPrcentEskan', 10)}
               
                />
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>



              <div style={{ width: "100%", direction: "rtl" }}>
                <label className=""> اسم العميل </label>
                <div  className="input-wrapper">
                <input
                  className="w-60"
                   // onKeyDown={checkLength}
                  maxLength="100"
                  type="text"
                  value={calulationInputs.name}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      name: event.target.value,
                    });
                  }}
                />
                                                        <span  className="underline-input"></span>
                   
                   </div>
              </div>




              <div>
                <button
                  className={btnIsDisable ? "disabled" : ""}
                  disabled={btnIsDisable}
                  onClick={calculation}
                  id="submit-loan-btn2"
                  style={{
                    width: "98%",
                    cursor: btnIsDisable ? "not-allowed" : "",
                    marginTop: "8px",
                  }}
                >
                  احسب
                </button>
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
              </div> */}

              <div style={{ width: "100%", direction: "rtl" }}></div>
            </form>
          </div>

          <div className="col box photo-print" id={classNameModel} style={{marginBottom:"0px"}}>
            <div >
              <div style={{ display: "flex",
    justifyContent: "space-between",
}}>


<div className="loader-container" style={{    height: "auto", width: "150px"}}>
                    <div className="logo-reveal">
                      <img src={im} alt="Eskan Salman Logo" className={   darkSide ? "logo-color" : "logo-color-dark" } style={{    width: "135px"}}/>
                      <div className="logo-mask-infinite">
                  
                      </div>
                      
                      
                      </div></div>

              {/* <img alt="" src={im} className={darkSide ? "logo-screen" : "logo-screen-dark" } style={{  width: "135px"}} /> */}
              <img alt="لوجو" src={imageBank} className={ darkSide ? "logo-screen" : "logo-screen-dark" }  />
              </div>
              <hr style={{marginTop:"1px"}}></hr>
              <h4
                style={{ textAlign: "center", margin: "0px", padding: "6px" }}
              >
                عرض السعر
              </h4>
              <table className={tableDark}>

              <tr>
                  <td> اسم العميل</td>
                  <td>{calulationOutputs.output0}</td>
                </tr>
                <tr>
                  <td> شيك المالك</td>
                  <td>{calulationOutputs.outPut1}
                                        <img  className={darkSide ? "currency-color" : "currency-color-dark"}   style={{display:currency?"":"none" , width:"15px" , marginRight:"5px" }}    src={currencyLogo}
                        alt="SAR"
                  
                      />
                  </td>
                </tr>

                <tr>
                  <td> عمولة الشركة</td>
                  <td>{calulationOutputs.outPut2}
                                        <img  className={darkSide ? "currency-color" : "currency-color-dark"}   style={{display:currency?"":"none" , width:"15px" , marginRight:"5px" }}    src={currencyLogo}
                        alt="SAR"
                  
                      />
                  </td>
                </tr>

                <tr>
                  <td> اجمالي الشيكات</td>
                  <td>{calulationOutputs.outPut3}
                                        <img  className={darkSide ? "currency-color" : "currency-color-dark"}   style={{display:currency?"":"none" , width:"15px" , marginRight:"5px" }}    src={currencyLogo}
                        alt="SAR"
                  
                      />
                  </td>
                </tr>

                <tr>
                  <td> مبلغ التمويل</td>
                  <td>{calulationOutputs.outPut4}
                                        <img  className={darkSide ? "currency-color" : "currency-color-dark"}   style={{display:currency?"":"none" , width:"15px" , marginRight:"5px" }}    src={currencyLogo}
                        alt="SAR"
                  
                      />
                  </td>
                </tr>

                {calulationInputs.housingSupport === "baqa" ? (
                  <tr>
                    <td> مبلغ الباقة</td>
                    <td>{calulationOutputs.outPut5}
                                          <img  className={darkSide ? "currency-color" : "currency-color-dark"}   style={{display:currency?"":"none" , width:"15px" , marginRight:"5px" }}    src={currencyLogo}
                        alt="SAR"
                  
                      />
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td> قسط الدعم ان وجد</td>
                    <td>{calulationOutputs.outPut5}
                                          <img  className={darkSide ? "currency-color" : "currency-color-dark"}   style={{display:currency?"":"none" , width:"15px" , marginRight:"5px" }}    src={currencyLogo}
                        alt="SAR"
                  
                      />
                    </td>
                  </tr>
                )}

                <tr>
                  <td> التصرفات العقارية</td>
                  <td>{calulationOutputs.outPut6}
                                        <img  className={darkSide ? "currency-color" : "currency-color-dark"}   style={{display:currency?"":"none" , width:"15px" , marginRight:"5px" }}    src={currencyLogo}
                        alt="SAR"
                  
                      />
                  </td>
                </tr>

                {calulationInputs.currentBank === "alahli" ? (
                  <tr>
                    <td> ضريبة السعي</td>
                    <td>{calulationOutputs.outPut7}
                                          <img  className={darkSide ? "currency-color" : "currency-color-dark"}   style={{display:currency?"":"none" , width:"15px" , marginRight:"5px" }}    src={currencyLogo}
                        alt="SAR"
                  
                      />
                    </td>
                  </tr>
                ) : (
                  <></>
                )}

                <tr>
                  <td> الرسوم الادارية </td>
                  <td>{calulationOutputs.outPut8}
                                        <img  className={darkSide ? "currency-color" : "currency-color-dark"}   style={{display:currency?"":"none" , width:"15px" , marginRight:"5px" }}    src={currencyLogo}
                        alt="SAR"
                  
                      />
                  </td>
                </tr>

                {calulationInputs.currentBank === "alahli" ? (
                  <tr>
                    <td> الدفعه و الرسوم و الضريبة </td>
                    <td>{calulationOutputs.outPut9}

                                          <img  className={darkSide ? "currency-color" : "currency-color-dark"}   style={{display:currency?"":"none" , width:"15px" , marginRight:"5px" }}    src={currencyLogo}
                        alt="SAR"
                  
                      />
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td> الدفعه و الرسوم </td>
                    <td>{calulationOutputs.outPut9}

                                          <img  className={darkSide ? "currency-color" : "currency-color-dark"}   style={{display:currency?"":"none" , width:"15px" , marginRight:"5px" }}    src={currencyLogo}
                        alt="SAR"
                  
                      />
                    </td>
                  </tr>
                )}

                <tr>
                  <td> {textNet} </td>
                  <td>{calulationOutputs.outPut10}
                                        <img  className={darkSide ? "currency-color" : "currency-color-dark"}   style={{display:currency?"":"none" , width:"15px" , marginRight:"5px" }}    src={currencyLogo}
                        alt="SAR"
                  
                      />
                  </td>
                </tr>

                <tr>
                  <td> العجز للمالك </td>
                  <td>{calulationOutputs.outPut11}
                                        <img  className={darkSide ? "currency-color" : "currency-color-dark"}   style={{display:currency?"":"none" , width:"15px" , marginRight:"5px" }}    src={currencyLogo}
                        alt="SAR"
                  
                      />
                  </td>
                </tr>

                 <tr>
                  <td>  التاريخ و الوقت </td>
                  <td>{nowToString}
                
                  </td>
                </tr>


             

                <tr  className="no-print none-hover" style={{padding:" 4px 1px"}}>
              
                                  <td>نسخ الحسبة</td>
                                  <td style={{ padding: "0px" }}>
                                    {/* <button
                                      onClick={copy}
                                      className="button-calculation"
                                      style={{
                                        marginTop: "0px",
                                        fontSize: "0.8rem", 
                                        backgroundColor:darkSide? "white":"#222a45",
              
                                        height: "40px",
                                      }}
                                    >
                                      نسخ
                                      <FontAwesomeIcon
                                        icon={faCheck}
                                        className="i-button-calculation"
                                        style={{ fontSize: "1.6rem" }}
                                      />
                                    </button> */}



             


                                    
    <button
      onClick={handleCopy}
      className={`copy-btn ${copied ? "copied" : ""}  ${darkSide ? "" : "dark-btn-copy"}  ${btnIsDisable ? "disabled" : ""}`}
       disabled={btnIsDisable}
  
                      style={{
                      
                        cursor: btnIsDisable ? "not-allowed" : "",
                         color:!darkSide?"white":""
                       
                      }}

    >
      <FontAwesomeIcon icon={copied ? faCheck : faCopy} />{" "}
      {copied ? "تم النسخ" : "نسخ"}
    </button>

                                  </td>

                 
                </tr>


                <tr className="no-print none-hover">
                  <td style={{    paddingTop: "11px"}}>  صوره الحسبة </td>
                  <td style={{padding:"2px"}}>
                  <Button variant="outline-secondary"  onClick={capture}>صورة</Button>

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
                                        {errorMassge == null || errorMassge == ""
                                          ? "تمت الحسبة علي حسب البيانات"
                                          : errorMassge.map((err, i) => (
                                              <div key={i}>{err}</div>
                                            ))
                                          
                                          
                                  
              
              
              
                                          
                                          }
                                      </Toast.Body>
                                    </Toast>
                                  </Col>
                                </Row>
                              </div>
              
              


              

           <div className="no-print">
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
    </div>
  );
}
