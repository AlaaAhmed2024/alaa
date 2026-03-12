import { useContext, useEffect, useState } from "react";
import "../Project1.css";
import Modal from "../Model";
import im from "../logo.png";
import AlartBootstap from "./alartBootstrap";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import currencyLogo from "../photo/rsb.png";
import audioError from "../sound/error.mp3";
import audioSuccess from "../sound/success.mp3";
import audioWarning from "../sound/warning.mp3";
import Button from "react-bootstrap/esm/Button";
import html2canvas from "html2canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleHalfStroke,
  faDiceFive,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

import emkan from "../emkan.png";
import ahly from "../alahliLogo.png";
import alrajhi from "../alrajhiLogo.png";
import albilad from "../albiladLogo.png";
import alfransi from "../alfransiLlogo.png";
import alinma from "../alinmaLogo.png";
import sab from "../sabLogo.png";
import nayifat from "../nayifat.png";
import masar from "../masar.png";
import moment from "moment-hijri";
import "moment/locale/ar-sa";
import { ColorModeContext } from "../Context/ThemeContext";

export default function Plus(props) {
  // const [darkSide, setShwoDarkSide] = useState( 

  //   ()=>{

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

  if (props.pDarkSide) {
    var textMode = "داكن";
      var classNameModelBootstrap = "box-dark-bootstrap ";
    var classNameModel = "calculation-input-loan-form";
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

  //  const todayHijri = moment().locale('ar-sa').format('iD/iM/iYYYY');
  const todayHijri = moment().locale("en").format("iD/iM/iYYYY");
  const [dayH, monthH, yearH] = todayHijri.split("/");

    const [modalShowBootstap, setModalShowBootstap] = useState(false);
 const [showa, setShowa] = useState(false);


  const [calulationInputs, setcalulationInputs] = useState({
    netSalary: "",
    currentBank: "alrajhi",
    type: "2",
    job: "مدني",
    installment1: "",

    editDurationPersonal: "",
    editPercentageFirst: "",
    editProfitRatePersonal: "",
    editPersonalInstallment: "",

    birthMonth: "",
    currentMonth: monthH,
    birthYear: "",
    currentYear: yearH,
  });

  const [calulationOutputs, setCalulationOutputs] = useState({
    personalFinance: "",
    firstInstallment: "",
    netProfit: "",
    profitRatePersonal: "",
    age: "",
    durationPersonal: "",
    precent: "",
    total: "",
  });

  const [showModdal, setShowModal] = useState(false);
  const [errorMassge, setErrorMassge] = useState(null);
  const [currency, setCurrency] = useState(false);

  if (calulationInputs.type === "1") {
    if (calulationInputs.currentBank === "alahli") {
      var imageBank = ahly;
    } else if (calulationInputs.currentBank === "alrajhi") {
      var imageBank = alrajhi;
    } else if (calulationInputs.currentBank === "albilad") {
      var imageBank = albilad;
    } else if (calulationInputs.currentBank === "alfransi") {
      var imageBank = alfransi;
    } else if (calulationInputs.currentBank === "alinma") {
      var imageBank = alinma;
    } else if (calulationInputs.currentBank === "sab") {
      var imageBank = sab;
    } else {
      var imageBank = im;
    }
  } else if (calulationInputs.type === "2") {
    var imageBank = emkan;
  } else if (calulationInputs.type === "3") {
    var imageBank = nayifat;
  } else if (calulationInputs.type === "4") {
    var imageBank = masar;
  } else {
    var imageBank = "";
  }

  function calculation(event) {
    let audio1 = new Audio(audioSuccess);
    let audio2 = new Audio(audioWarning);
    let audio3 = new Audio(audioError);
    setShowa(true);
    setCurrency(true);
    //بدايه حسابات الشخصي
    if (calulationInputs.type === "1") {
      var monthClint =
        calulationInputs.currentMonth - calulationInputs.birthMonth;
      var yearClint = calulationInputs.currentYear - calulationInputs.birthYear;
      var ageClint = ((monthClint + yearClint * 12) / 12).toFixed(2);

      //الاعمار التقاعديه
      var array1 = [75, 60, 60, 44, 46, 48, 50, 52, 44, 46, 48, 50, 52]; //التقاعد الفعلي
      var array2 = [
        "متقاعد",
        "مدني",
        "خاص",
        "جندي",
        "عريف",
        "وكيل رقيب",
        "رقيب",
        "رئيس رقباء",
        "ملازم",
        "نقيب",
        "رائد",
        "عقيد",
        "عميد",
      ];

      var numberJob = array2.indexOf(calulationInputs.job);
      var ageBeforeRetirement = array1.at(numberJob);
      // حساب المده المتبقيه الي التقاعد الفعلي
      var durationBefore = (ageBeforeRetirement - ageClint) * 12;
      //حساب اقصي مده للتمويل
      if (calulationInputs.netSalary == 0) {
        var maxxDurationBefore = 0;
      } else if (calulationInputs.editDurationPersonal == "") {
        var maxxDurationBefore = Math.min(durationBefore, 60);
      } else {
        var maxxDurationBefore = Math.min(
          durationBefore,
          60,
          calulationInputs.editDurationPersonal
        );
      }

      //نسب الفوائد
      var arrprsonalSalary = [
        2999, 3999, 4999, 5999, 6999, 7999, 8999, 9999, 11999, 14999, 19999,
        24999, 29999, 30000,
      ];
      var arrprcentPrsonal = [
        7.53, 7.47, 7.41, 5.23, 5.17, 5.05, 5.11, 4.99, 3.62, 3.56, 3.5, 3.44,
        3.13, 3.07,
      ];

      //حساب
      if (calulationInputs.netSalary == 0) {
        var prcentPrsonal = 0;
      } else if (calulationInputs.netSalary <= arrprsonalSalary.at(0)) {
        prcentPrsonal = arrprcentPrsonal.at(0);
      } else if (
        calulationInputs.netSalary > arrprsonalSalary.at(0) &&
        calulationInputs.netSalary <= arrprsonalSalary.at(1)
      ) {
        prcentPrsonal = arrprcentPrsonal.at(1);
      } else if (
        calulationInputs.netSalary > arrprsonalSalary.at(1) &&
        calulationInputs.netSalary <= arrprsonalSalary.at(2)
      ) {
        prcentPrsonal = arrprcentPrsonal.at(2);
      } else if (
        calulationInputs.netSalary > arrprsonalSalary.at(2) &&
        calulationInputs.netSalary <= arrprsonalSalary.at(3)
      ) {
        prcentPrsonal = arrprcentPrsonal.at(3);
      } else if (
        calulationInputs.netSalary > arrprsonalSalary.at(3) &&
        calulationInputs.netSalary <= arrprsonalSalary.at(4)
      ) {
        prcentPrsonal = arrprcentPrsonal.at(4);
      } else if (
        calulationInputs.netSalary > arrprsonalSalary.at(4) &&
        calulationInputs.netSalary <= arrprsonalSalary.at(5)
      ) {
        prcentPrsonal = arrprcentPrsonal.at(5);
      } else if (
        calulationInputs.netSalary > arrprsonalSalary.at(5) &&
        calulationInputs.netSalary <= arrprsonalSalary.at(6)
      ) {
        prcentPrsonal = arrprcentPrsonal.at(6);
      } else if (
        calulationInputs.netSalary > arrprsonalSalary.at(6) &&
        calulationInputs.netSalary <= arrprsonalSalary.at(7)
      ) {
        prcentPrsonal = arrprcentPrsonal.at(7);
      } else if (
        calulationInputs.netSalary > arrprsonalSalary.at(7) &&
        calulationInputs.netSalary <= arrprsonalSalary.at(8)
      ) {
        prcentPrsonal = arrprcentPrsonal.at(8);
      } else if (
        calulationInputs.netSalary > arrprsonalSalary.at(8) &&
        calulationInputs.netSalary <= arrprsonalSalary.at(9)
      ) {
        prcentPrsonal = arrprcentPrsonal.at(9);
      } else if (
        calulationInputs.netSalary > arrprsonalSalary.at(9) &&
        calulationInputs.netSalary <= arrprsonalSalary.at(10)
      ) {
        prcentPrsonal = arrprcentPrsonal.at(10);
      } else if (
        calulationInputs.netSalary > arrprsonalSalary.at(10) &&
        calulationInputs.netSalary <= arrprsonalSalary.at(11)
      ) {
        prcentPrsonal = arrprcentPrsonal.at(11);
      } else if (
        calulationInputs.netSalary > arrprsonalSalary.at(11) &&
        calulationInputs.netSalary <= arrprsonalSalary.at(12)
      ) {
        prcentPrsonal = arrprcentPrsonal.at(12);
      } else if (calulationInputs.netSalary > arrprsonalSalary.at(13)) {
        prcentPrsonal = arrprcentPrsonal.at(13);
      } else {
        prcentPrsonal = 5;
      }

      if (calulationInputs.job == "مدني" || calulationInputs.job == "متقاعد") {
        var prcentPrsonaFinal = prcentPrsonal;
      } else if (calulationInputs.job == "خاص") {
        var prcentPrsonaFinal = prcentPrsonal + 0.6;
      } else {
        var prcentPrsonaFinal = prcentPrsonal + 0.75;
      }

      if (calulationInputs.netSalary == 0) {
        var profitadd = 0;
      } else if (calulationInputs.editProfitRatePersonal != "") {
        var profitadd = calulationInputs.editProfitRatePersonal;
      } else {
        var profitadd = prcentPrsonaFinal;
      }

      // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد
      if (calulationInputs.netSalary == 0) {
        var precentAfterEdit1 = 0;
      } else if (
        calulationInputs.editPercentageFirst == "" &&
        calulationInputs.job == array2.at(0)
      ) {
        var precentAfterEdit1 = 25;
      } else if (calulationInputs.editPercentageFirst == "") {
        var precentAfterEdit1 = 33;
      } else {
        var precentAfterEdit1 = calulationInputs.editPercentageFirst;
      }

      //التمويل الشخصي اولا حساب القسط
      if (calulationInputs.editPersonalInstallment == "") {
        var personInstallment =
          (precentAfterEdit1 * calulationInputs.netSalary) / 100;
      } else {
        var personInstallment = calulationInputs.editPersonalInstallment;
      }

      //التمويل الشخصي ثالثا حساب مبلغ التمويل
      var PersonalFinance1 =
        (personInstallment * maxxDurationBefore) /
        (1 + 0.01 * profitadd * (maxxDurationBefore / 12));

      // التمويل الشخصي رابعا حساب فوائد الشخصي
      var profitPersonalFinance =
        personInstallment * maxxDurationBefore - PersonalFinance1;
      var total1 = PersonalFinance1 + profitPersonalFinance;

      //نهايه حسابات بنك الشخصي

      setCalulationOutputs({
        ...calulationOutputs,
        age: ageClint,
        durationPersonal: maxxDurationBefore,
        profitRatePersonal: profitadd,
        precent: precentAfterEdit1,
        firstInstallment: personInstallment,
        personalFinance: new Intl.NumberFormat().format(
          PersonalFinance1.toFixed(0)
        ),
        netProfit: new Intl.NumberFormat().format(
          profitPersonalFinance.toFixed(0)
        ),
        total: new Intl.NumberFormat().format(total1.toFixed(0)),

        //تغير الكتابه

        //   nameAmountHousingSupport:outNameHosingSuppory,
      });

      //==================بدايه امكان =========================//
    } else if (calulationInputs.type === "2") {
      //حساب  العمر

      var monthClint =
        calulationInputs.currentMonth - calulationInputs.birthMonth;
      var yearClint = calulationInputs.currentYear - calulationInputs.birthYear;
      var ageClint = ((monthClint + yearClint * 12) / 12).toFixed(2);
      //الاعمار التقاعديه
      var array1 = [75, 60, 60, 44, 46, 48, 50, 52, 44, 46, 48, 50, 52]; //التقاعد الفعلي
      var array2 = [
        "متقاعد",
        "مدني",
        "خاص",
        "جندي",
        "عريف",
        "وكيل رقيب",
        "رقيب",
        "رئيس رقباء",
        "ملازم",
        "نقيب",
        "رائد",
        "عقيد",
        "عميد",
      ];

      var numberJob = array2.indexOf(calulationInputs.job);
      var ageBeforeRetirement = array1.at(numberJob);
      // حساب المده المتبقيه الي التقاعد الفعلي
      var durationBefore = (ageBeforeRetirement - ageClint) * 12;

      var totalInstallment = calulationInputs.installment1;
      var precentTotalInstallment1 =
        (100 * totalInstallment) / calulationInputs.netSalary;

      if (precentTotalInstallment1 >= 45) {
        var precentTotalInstallment = 45;
      } else {
        var precentTotalInstallment = precentTotalInstallment1;
      }

      //حساب اقصي مده للتمويل
      if (calulationInputs.netSalary == 0 || precentTotalInstallment >= 45) {
        var maxxDurationBefore = 0;
      } else if (calulationInputs.editDurationPersonal == "") {
        var maxxDurationBefore = Math.min(durationBefore, 60);
      } else {
        var maxxDurationBefore = Math.min(
          durationBefore,
          60,
          calulationInputs.editDurationPersonal
        );
      }

      //حساب
      if (calulationInputs.netSalary == 0) {
        var profitadd = 0;
      } else if (calulationInputs.editProfitRatePersonal != "") {
        var profitadd = calulationInputs.editProfitRatePersonal;
      } else if (
        calulationInputs.currentBank == "alrajhi" &&
        calulationInputs.netSalary <= 10000
      ) {
        var profitadd = 12.25;
      } else if (
        calulationInputs.currentBank == "alrajhi" &&
        calulationInputs.netSalary <= 14999
      ) {
        var profitadd = 10.75;
      } else if (
        calulationInputs.currentBank == "alrajhi" &&
        calulationInputs.netSalary <= 25000
      ) {
        var profitadd = 7.99;
      } else if (
        calulationInputs.currentBank == "alrajhi" &&
        calulationInputs.netSalary > 25000
      ) {
        var profitadd = 6.49;
      } else if (
        calulationInputs.currentBank != "alrajhi" &&
        calulationInputs.netSalary <= 10000
      ) {
        var profitadd = 12.75;
      } else if (
        calulationInputs.currentBank != "alrajhi" &&
        calulationInputs.netSalary <= 14999
      ) {
        var profitadd = 11.25;
      } else if (
        calulationInputs.currentBank != "alrajhi" &&
        calulationInputs.netSalary <= 25000
      ) {
        var profitadd = 8.75;
      } else {
        var profitadd = 7.75;
      }

      // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد
      if (calulationInputs.netSalary == 0) {
        var precentAfterEdit1 = 0;
      } else if (
        calulationInputs.editPercentageFirst == "" &&
        calulationInputs.job == array2.at(0)
      ) {
        var precentAfterEdit1 = Math.min(11.67, 45 - precentTotalInstallment);
      } else if (calulationInputs.editPercentageFirst == "") {
        var precentAfterEdit1 = Math.min(11.67, 45 - precentTotalInstallment);
      } else {
        var precentAfterEdit1 = calulationInputs.editPercentageFirst;
      }

      //التمويل الشخصي اولا حساب القسط

      if (calulationInputs.editPersonalInstallment == "") {
        var personInstallment =
          (precentAfterEdit1 * calulationInputs.netSalary) / 100;
      } else {
        var personInstallment = calulationInputs.editPersonalInstallment;
      }

      //التمويل الشخصي ثالثا حساب مبلغ التمويل
      var PersonalFinance1 =
        (personInstallment * maxxDurationBefore) /
        (1 + 0.01 * profitadd * (maxxDurationBefore / 12));

      // التمويل الشخصي رابعا حساب فوائد الشخصي
      var profitPersonalFinance =
        personInstallment * maxxDurationBefore - PersonalFinance1;
      var total1 = PersonalFinance1 + profitPersonalFinance;

      //نهايه حسابات بنك الشخصي

      setCalulationOutputs({
        ...calulationOutputs,
        age: ageClint,
        durationPersonal: maxxDurationBefore,
        profitRatePersonal: profitadd,
        precent: precentAfterEdit1,
        firstInstallment: personInstallment,
        personalFinance: new Intl.NumberFormat().format(
          PersonalFinance1.toFixed(0)
        ),
        netProfit: new Intl.NumberFormat().format(
          profitPersonalFinance.toFixed(0)
        ),
        total: new Intl.NumberFormat().format(total1.toFixed(0)),

        //تغير الكتابه

        //   nameAmountHousingSupport:outNameHosingSuppory,
      });

      //==================بدايه  =========================//
    } else if (calulationInputs.type === "3" || calulationInputs.type === "5") {
      //حساب  العمر

      var monthClint =
        calulationInputs.currentMonth - calulationInputs.birthMonth;
      var yearClint = calulationInputs.currentYear - calulationInputs.birthYear;
      var ageClint = ((monthClint + yearClint * 12) / 12).toFixed(2);
      //الاعمار التقاعديه
      var array1 = [75, 60, 60, 44, 46, 48, 50, 52, 44, 46, 48, 50, 52]; //التقاعد الفعلي
      var array2 = [
        "متقاعد",
        "مدني",
        "خاص",
        "جندي",
        "عريف",
        "وكيل رقيب",
        "رقيب",
        "رئيس رقباء",
        "ملازم",
        "نقيب",
        "رائد",
        "عقيد",
        "عميد",
      ];

      var numberJob = array2.indexOf(calulationInputs.job);
      var ageBeforeRetirement = array1.at(numberJob);
      // حساب المده المتبقيه الي التقاعد الفعلي
      var durationBefore = (ageBeforeRetirement - ageClint) * 12;

      var totalInstallment = 1 * calulationInputs.installment1;
      var precentTotalInstallment1 =
        (100 * totalInstallment) / calulationInputs.netSalary;

      if (precentTotalInstallment1 >= 45) {
        var precentTotalInstallment = 45;
      } else {
        var precentTotalInstallment = precentTotalInstallment1;
      }

      //حساب اقصي مده للتمويل
      if (calulationInputs.netSalary == 0 || precentTotalInstallment >= 45) {
        var maxxDurationBefore = 0;
      } else if (calulationInputs.editDurationPersonal == "") {
        var maxxDurationBefore = Math.min(durationBefore, 60);
      } else {
        var maxxDurationBefore = Math.min(
          durationBefore,
          60,
          calulationInputs.editDurationPersonal
        );
      }

      if (calulationInputs.netSalary == 0) {
        var profitadd = 0;
      } else if (calulationInputs.editProfitRatePersonal != "") {
        var profitadd = calulationInputs.editProfitRatePersonal;
      } else if (calulationInputs.job == "متقاعد") {
        var profitadd = 8;
      } else {
        var profitadd = 17;
      }

      // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد
      if (calulationInputs.netSalary == 0) {
        var precentAfterEdit1 = 0;
      } else if (
        calulationInputs.editPercentageFirst == "" &&
        calulationInputs.job == array2.at(0)
      ) {
        var precentAfterEdit1 = Math.min(45 - precentTotalInstallment);
      } else if (calulationInputs.editPercentageFirst == "") {
        var precentAfterEdit1 = Math.min(45 - precentTotalInstallment);
      } else {
        var precentAfterEdit1 = calulationInputs.editPercentageFirst;
      }

      //التمويل الشخصي اولا حساب القسط

      if (calulationInputs.editPersonalInstallment == "") {
        var personInstallment =
          (precentAfterEdit1 * 1 * calulationInputs.netSalary) / 100;
      } else {
        var personInstallment = 1 * calulationInputs.editPersonalInstallment;
      }

      //التمويل الشخصي ثالثا حساب مبلغ التمويل
      var PersonalFinance1 =
        (personInstallment * maxxDurationBefore) /
        (1 + 0.01 * profitadd * (maxxDurationBefore / 12));

      // التمويل الشخصي رابعا حساب فوائد الشخصي
      var profitPersonalFinance =
        personInstallment * maxxDurationBefore - PersonalFinance1;
      var total1 = PersonalFinance1 + profitPersonalFinance;

      //نهايه حسابات بنك الشخصي

      setCalulationOutputs({
        ...calulationOutputs,
        age: ageClint,
        durationPersonal: maxxDurationBefore,
        profitRatePersonal: profitadd,
        precent: precentAfterEdit1,
        firstInstallment: personInstallment,
        personalFinance: new Intl.NumberFormat().format(
          PersonalFinance1.toFixed(0)
        ),
        netProfit: new Intl.NumberFormat().format(
          profitPersonalFinance.toFixed(0)
        ),
        total: new Intl.NumberFormat().format(total1.toFixed(0)),

        //تغير الكتابه

        //   nameAmountHousingSupport:outNameHosingSuppory,
      });

      //الفرنسي
    } else if (calulationInputs.type === "6") {
      //حساب  العمر

      var monthClint =
        calulationInputs.currentMonth - calulationInputs.birthMonth;
      var yearClint = calulationInputs.currentYear - calulationInputs.birthYear;
      var ageClint = ((monthClint + yearClint * 12) / 12).toFixed(2);
      //الاعمار التقاعديه
      var array1 = [75, 60, 60, 44, 46, 48, 50, 52, 44, 46, 48, 50, 52]; //التقاعد الفعلي
      var array2 = [
        "متقاعد",
        "مدني",
        "خاص",
        "جندي",
        "عريف",
        "وكيل رقيب",
        "رقيب",
        "رئيس رقباء",
        "ملازم",
        "نقيب",
        "رائد",
        "عقيد",
        "عميد",
      ];

      var numberJob = array2.indexOf(calulationInputs.job);
      var ageBeforeRetirement = array1.at(numberJob);
      // حساب المده المتبقيه الي التقاعد الفعلي
      var durationBefore = (ageBeforeRetirement - ageClint) * 12;

      var totalInstallment = calulationInputs.installment1;
      var precentTotalInstallment1 =
        (100 * totalInstallment) / calulationInputs.netSalary;

      if (precentTotalInstallment1 >= 45) {
        var precentTotalInstallment = 45;
      } else {
        var precentTotalInstallment = precentTotalInstallment1;
      }

      //حساب اقصي مده للتمويل
      if (calulationInputs.netSalary == 0 || precentTotalInstallment >= 45) {
        var maxxDurationBefore = 0;
      } else if (calulationInputs.editDurationPersonal == "") {
        var maxxDurationBefore = Math.min(durationBefore, 60);
      } else {
        var maxxDurationBefore = Math.min(
          durationBefore,
          60,
          calulationInputs.editDurationPersonal
        );
      }

      if (calulationInputs.netSalary == 0) {
        var profitadd = 0;
      } else if (calulationInputs.editProfitRatePersonal != "") {
        var profitadd = calulationInputs.editProfitRatePersonal;
      } else {
        var profitadd = 4.2;
      }

      // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد
      if (calulationInputs.netSalary == 0) {
        var precentAfterEdit1 = 0;
      } else if (
        calulationInputs.editPercentageFirst == "" &&
        calulationInputs.job == array2.at(0)
      ) {
        var precentAfterEdit1 = Math.min(45 - precentTotalInstallment);
      } else if (calulationInputs.editPercentageFirst == "") {
        var precentAfterEdit1 = Math.min(45 - precentTotalInstallment);
      } else {
        var precentAfterEdit1 = calulationInputs.editPercentageFirst;
      }

      //التمويل الشخصي اولا حساب القسط

      if (calulationInputs.editPersonalInstallment == "") {
        var personInstallment =
          (precentAfterEdit1 * calulationInputs.netSalary) / 100;
      } else {
        var personInstallment = calulationInputs.editPersonalInstallment;
      }

      //التمويل الشخصي ثالثا حساب مبلغ التمويل
      var PersonalFinance1 =
        (personInstallment * maxxDurationBefore) /
        (1 + 0.01 * profitadd * (maxxDurationBefore / 12));

      // التمويل الشخصي رابعا حساب فوائد الشخصي
      var profitPersonalFinance =
        personInstallment * maxxDurationBefore - PersonalFinance1;
      var total1 = PersonalFinance1 + profitPersonalFinance;

      //نهايه حسابات بنك الشخصي

      setCalulationOutputs({
        ...calulationOutputs,
        age: ageClint,
        durationPersonal: maxxDurationBefore,
        profitRatePersonal: profitadd,
        precent: precentAfterEdit1,
        firstInstallment: personInstallment,
        personalFinance: new Intl.NumberFormat().format(
          PersonalFinance1.toFixed(0)
        ),
        netProfit: new Intl.NumberFormat().format(
          profitPersonalFinance.toFixed(0)
        ),
        total: new Intl.NumberFormat().format(total1.toFixed(0)),

        //تغير الكتابه

        //   nameAmountHousingSupport:outNameHosingSuppory,
      });

      //ساب
    } else if (calulationInputs.type === "7") {
      //حساب  العمر

      var monthClint =
        calulationInputs.currentMonth - calulationInputs.birthMonth;
      var yearClint = calulationInputs.currentYear - calulationInputs.birthYear;
      var ageClint = ((monthClint + yearClint * 12) / 12).toFixed(2);
      //الاعمار التقاعديه
      var array1 = [75, 60, 60, 44, 46, 48, 50, 52, 44, 46, 48, 50, 52]; //التقاعد الفعلي
      var array2 = [
        "متقاعد",
        "مدني",
        "خاص",
        "جندي",
        "عريف",
        "وكيل رقيب",
        "رقيب",
        "رئيس رقباء",
        "ملازم",
        "نقيب",
        "رائد",
        "عقيد",
        "عميد",
      ];

      var numberJob = array2.indexOf(calulationInputs.job);
      var ageBeforeRetirement = array1.at(numberJob);
      // حساب المده المتبقيه الي التقاعد الفعلي
      var durationBefore = (ageBeforeRetirement - ageClint) * 12;

      var totalInstallment = calulationInputs.installment1;
      var precentTotalInstallment1 =
        (100 * totalInstallment) / calulationInputs.netSalary;

      if (precentTotalInstallment1 >= 45) {
        var precentTotalInstallment = 45;
      } else {
        var precentTotalInstallment = precentTotalInstallment1;
      }

      //حساب اقصي مده للتمويل
      if (calulationInputs.netSalary == 0 || precentTotalInstallment >= 45) {
        var maxxDurationBefore = 0;
      } else if (calulationInputs.editDurationPersonal == "") {
        var maxxDurationBefore = Math.min(durationBefore, 60);
      } else {
        var maxxDurationBefore = Math.min(
          durationBefore,
          60,
          calulationInputs.editDurationPersonal
        );
      }

      if (calulationInputs.netSalary == 0) {
        var profitadd = 0;
      } else if (calulationInputs.editProfitRatePersonal != "") {
        var profitadd = calulationInputs.editProfitRatePersonal;
      } else {
        var profitadd = 12.75;
      }

      // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد
      if (calulationInputs.netSalary == 0) {
        var precentAfterEdit1 = 0;
      } else if (
        calulationInputs.editPercentageFirst == "" &&
        calulationInputs.job == array2.at(0)
      ) {
        var precentAfterEdit1 = Math.min(45 - precentTotalInstallment);
      } else if (calulationInputs.editPercentageFirst == "") {
        var precentAfterEdit1 = Math.min(45 - precentTotalInstallment);
      } else {
        var precentAfterEdit1 = calulationInputs.editPercentageFirst;
      }

      //التمويل الشخصي اولا حساب القسط

      if (calulationInputs.editPersonalInstallment == "") {
        var personInstallment =
          (precentAfterEdit1 * calulationInputs.netSalary) / 100;
      } else {
        var personInstallment = calulationInputs.editPersonalInstallment;
      }

      //التمويل الشخصي ثالثا حساب مبلغ التمويل
      var PersonalFinance1 =
        (personInstallment * maxxDurationBefore) /
        (1 + 0.01 * profitadd * (maxxDurationBefore / 12));

      // التمويل الشخصي رابعا حساب فوائد الشخصي
      var profitPersonalFinance =
        personInstallment * maxxDurationBefore - PersonalFinance1;
      var total1 = PersonalFinance1 + profitPersonalFinance;

      //نهايه حسابات بنك الشخصي

      setCalulationOutputs({
        ...calulationOutputs,
        age: ageClint,
        durationPersonal: maxxDurationBefore,
        profitRatePersonal: profitadd,
        precent: precentAfterEdit1,
        firstInstallment: personInstallment,
        personalFinance: new Intl.NumberFormat().format(
          PersonalFinance1.toFixed(0)
        ),
        netProfit: new Intl.NumberFormat().format(
          profitPersonalFinance.toFixed(0)
        ),
        total: new Intl.NumberFormat().format(total1.toFixed(0)),

        //تغير الكتابه

        //   nameAmountHousingSupport:outNameHosingSuppory,
      });

      //دوتشية
    } else if (calulationInputs.type === "4") {
      //حساب  العمر

      var monthClint =
        calulationInputs.currentMonth - calulationInputs.birthMonth;
      var yearClint = calulationInputs.currentYear - calulationInputs.birthYear;
      var ageClint = ((monthClint + yearClint * 12) / 12).toFixed(2);
      //الاعمار التقاعديه
      var array1 = [75, 60, 60, 44, 46, 48, 50, 52, 44, 46, 48, 50, 52]; //التقاعد الفعلي
      var array2 = [
        "متقاعد",
        "مدني",
        "خاص",
        "جندي",
        "عريف",
        "وكيل رقيب",
        "رقيب",
        "رئيس رقباء",
        "ملازم",
        "نقيب",
        "رائد",
        "عقيد",
        "عميد",
      ];

      var numberJob = array2.indexOf(calulationInputs.job);
      var ageBeforeRetirement = array1.at(numberJob);
      // حساب المده المتبقيه الي التقاعد الفعلي
      var durationBefore = (ageBeforeRetirement - ageClint) * 12;

      var totalInstallment = calulationInputs.installment1;
      var precentTotalInstallment1 =
        (100 * totalInstallment) / calulationInputs.netSalary;

      if (calulationInputs.netSalary <= 3000) {
        var prcent = 40;
      } else if (
        calulationInputs.netSalary > 3000 &&
        calulationInputs.netSalary <= 15000
      ) {
        var prcent = 45;
      } else {
        var prcent = 55;
      }
      if (precentTotalInstallment1 >= prcent) {
        var precentTotalInstallment = prcent;
      } else {
        var precentTotalInstallment = precentTotalInstallment1;
      }

      //حساب اقصي مده للتمويل
      if (
        calulationInputs.netSalary == 0 ||
        precentTotalInstallment >= prcent
      ) {
        var maxxDurationBefore = 0;
      } else if (calulationInputs.editDurationPersonal == "") {
        var maxxDurationBefore = Math.min(durationBefore, 60);
      } else {
        var maxxDurationBefore = Math.min(
          durationBefore,
          60,
          calulationInputs.editDurationPersonal
        );
      }

      if (calulationInputs.netSalary == 0) {
        var profitadd = 0;
      } else if (calulationInputs.editProfitRatePersonal != "") {
        var profitadd = calulationInputs.editProfitRatePersonal;
      } else if (calulationInputs.netSalary <= 3000) {
        var profitadd = 30.25;
      } else if (
        calulationInputs.netSalary >= 3000 &&
        calulationInputs.netSalary <= 6999
      ) {
        var profitadd = 19.15;
      } else if (
        calulationInputs.netSalary >= 7000 &&
        calulationInputs.netSalary <= 14999
      ) {
        var profitadd = 13.5;
      } else {
        var profitadd = 10.7;
      }

      // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد
      if (calulationInputs.netSalary == 0) {
        var precentAfterEdit1 = 0;
      } else if (
        calulationInputs.editPercentageFirst == "" &&
        calulationInputs.job == array2.at(0)
      ) {
        var precentAfterEdit1 = Math.min(prcent - precentTotalInstallment);
      } else if (calulationInputs.editPercentageFirst == "") {
        var precentAfterEdit1 = Math.min(prcent - precentTotalInstallment);
      } else {
        var precentAfterEdit1 = calulationInputs.editPercentageFirst;
      }

      //التمويل الشخصي اولا حساب القسط

      if (calulationInputs.editPersonalInstallment == "") {
        var personInstallment =
          (precentAfterEdit1 * calulationInputs.netSalary) / 100;
      } else {
        var personInstallment = calulationInputs.editPersonalInstallment;
      }

      //التمويل الشخصي ثالثا حساب مبلغ التمويل
      var PersonalFinance1 =
        (personInstallment * maxxDurationBefore) /
        (1 + 0.01 * profitadd * (maxxDurationBefore / 12));

      // التمويل الشخصي رابعا حساب فوائد الشخصي
      var profitPersonalFinance =
        personInstallment * maxxDurationBefore - PersonalFinance1;
      var total1 = PersonalFinance1 + profitPersonalFinance;

      //نهايه حسابات بنك الشخصي

      setCalulationOutputs({
        ...calulationOutputs,
        age: ageClint,
        durationPersonal: maxxDurationBefore,
        profitRatePersonal: profitadd,
        precent: precentAfterEdit1,
        firstInstallment: personInstallment,
        personalFinance: new Intl.NumberFormat().format(
          PersonalFinance1.toFixed(0)
        ),
        netProfit: new Intl.NumberFormat().format(
          profitPersonalFinance.toFixed(0)
        ),
        total: new Intl.NumberFormat().format(total1.toFixed(0)),

        //تغير الكتابه

        //   nameAmountHousingSupport:outNameHosingSuppory,
      });

      //الاخري
    } else {
      //حساب  العمر

      var monthClint =
        calulationInputs.currentMonth - calulationInputs.birthMonth;
      var yearClint = calulationInputs.currentYear - calulationInputs.birthYear;
      var ageClint = ((monthClint + yearClint * 12) / 12).toFixed(2);
      //الاعمار التقاعديه
      var array1 = [75, 60, 60, 44, 46, 48, 50, 52, 44, 46, 48, 50, 52]; //التقاعد الفعلي
      var array2 = [
        "متقاعد",
        "مدني",
        "خاص",
        "جندي",
        "عريف",
        "وكيل رقيب",
        "رقيب",
        "رئيس رقباء",
        "ملازم",
        "نقيب",
        "رائد",
        "عقيد",
        "عميد",
      ];

      var numberJob = array2.indexOf(calulationInputs.job);
      var ageBeforeRetirement = array1.at(numberJob);
      // حساب المده المتبقيه الي التقاعد الفعلي
      var durationBefore = (ageBeforeRetirement - ageClint) * 12;
      var totalInstallment = calulationInputs.installment1;
      var precentTotalInstallment1 =
        (100 * totalInstallment) / calulationInputs.netSalary;

      if (precentTotalInstallment1 >= 45) {
        var precentTotalInstallment = 45;
      } else {
        var precentTotalInstallment = precentTotalInstallment1;
      }

      //حساب اقصي مده للتمويل
      if (calulationInputs.netSalary == 0 || precentTotalInstallment >= 45) {
        var maxxDurationBefore = 0;
      } else if (calulationInputs.editDurationPersonal == "") {
        var maxxDurationBefore = Math.min(durationBefore, 60);
      } else {
        var maxxDurationBefore = Math.min(
          durationBefore,
          60,
          calulationInputs.editDurationPersonal
        );
      }

      if (calulationInputs.netSalary == 0) {
        var profitadd = 0;
      } else if (calulationInputs.editProfitRatePersonal != "") {
        var profitadd = calulationInputs.editProfitRatePersonal;
      } else {
        var profitadd = 4.2;
      }

      // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد
      if (calulationInputs.netSalary == 0) {
        var precentAfterEdit1 = 0;
      } else if (
        calulationInputs.editPercentageFirst == "" &&
        calulationInputs.job == array2.at(0)
      ) {
        var precentAfterEdit1 = Math.min(45 - precentTotalInstallment);
      } else if (calulationInputs.editPercentageFirst == "") {
        var precentAfterEdit1 = Math.min(45 - precentTotalInstallment);
      } else {
        var precentAfterEdit1 = calulationInputs.editPercentageFirst;
      }

      //التمويل الشخصي اولا حساب القسط

      if (calulationInputs.editPersonalInstallment == "") {
        var personInstallment =
          (precentAfterEdit1 * calulationInputs.netSalary) / 100;
      } else {
        var personInstallment = calulationInputs.editPersonalInstallment;
      }

      //التمويل الشخصي ثالثا حساب مبلغ التمويل
      var PersonalFinance1 =
        (personInstallment * maxxDurationBefore) /
        (1 + 0.01 * profitadd * (maxxDurationBefore / 12));

      // التمويل الشخصي رابعا حساب فوائد الشخصي
      var profitPersonalFinance =
        personInstallment * maxxDurationBefore - PersonalFinance1;
      var total1 = PersonalFinance1 + profitPersonalFinance;

      //نهايه حسابات بنك الشخصي

      setCalulationOutputs({
        ...calulationOutputs,
        age: ageClint,
        durationPersonal: maxxDurationBefore,
        profitRatePersonal: profitadd,
        precent: precentAfterEdit1,
        firstInstallment: personInstallment,
        personalFinance: new Intl.NumberFormat().format(
          PersonalFinance1.toFixed(0)
        ),
        netProfit: new Intl.NumberFormat().format(
          profitPersonalFinance.toFixed(0)
        ),
        total: new Intl.NumberFormat().format(total1.toFixed(0)),

        //تغير الكتابه

        //   nameAmountHousingSupport:outNameHosingSuppory,
      });
    }

    event.preventDefault();


    
  //   setErrorMassge(null);

  //   const {
  //     netSalary,
  //     birthMonth,
  //     currentMonth,
  //     birthYear,
  //     currentYear,
  //     installment1,
  //   } = calulationInputs;
  //   if (netSalary.length < 4 || netSalary.length > 5) {
  //     setErrorMassge("خطأ فضلا التاكد من الراتب الصافي");
  //     audio3.play();
  //   } else if (birthYear < 1366 || birthYear > 1428) {
  //     setErrorMassge("خطأ تاكد من سنة الميلاد من 1366 الي 1428 ");
  //     audio3.play();
  //   } else if (birthMonth < 1 || birthMonth > 12) {
  //     setErrorMassge(" خطأ تاكد من شهر الميلاد من 1 الي 12 ");
  //     audio3.play();
  //   } else if (currentYear < 1444 || currentYear > 1447) {
  //     setErrorMassge("خطأ تاكد من تاريخ السنه الحاليه ");
  //     audio3.play();
  //   } else if (currentMonth < 1 || currentMonth > 12) {
  //     setErrorMassge("خطأ تاكد من تاريخ الشهر الحالي ");
  //     audio3.play();
  //   } else if (installment1.length > 5) {
  //     setErrorMassge(" فضلا تاكد من مجموع الاقساط الحاليه ");
  //     audio3.play();
  //   } else if (installment1 == "") {
  //     setErrorMassge(" فضلا اكتب مجموع الاقساط الحاليه ان وجد ");
  //     audio2.play();
  //   }

  //   setShowModal(true);
  // }


setErrorMassge(null);

const errors = []; // مصفوفة الأخطاء

const {
  netSalary,
  birthMonth,
  currentMonth,
  birthYear,
  currentYear,
  installment1,
} = calulationInputs;

// تحقق من الشروط وأضف الأخطاء للمصفوفة
if (netSalary.length < 4 || netSalary.length > 5) {
  errors.push("خطأ فضلا التاكد من الراتب الصافي");
  audio3.play();
}

if (birthYear < 1366 || birthYear > 1428) {
  errors.push("خطأ تاكد من سنة الميلاد من 1366 الي 1428 ");
  audio3.play();
}

if (birthMonth < 1 || birthMonth > 12) {
  errors.push("خطأ تاكد من شهر الميلاد من 1 الي 12 ");
  audio3.play();
}

if (currentYear < 1444 || currentYear > 1447) {
  errors.push("خطأ تاكد من تاريخ السنه الحاليه ");
  audio3.play();
}

if (currentMonth < 1 || currentMonth > 12) {
  errors.push("خطأ تاكد من تاريخ الشهر الحالي ");
  audio3.play();
}



if (installment1 == "") {
  errors.push("فضلا اكتب مجموع الاقساط الحاليه ان وجد او اكتب صفر");
  audio2.play();
}

if(installment1!="0"){
  if (installment1.length > 5) {
  errors.push("فضلا تاكد من مجموع الاقساط الحاليه   ");
  audio3.play();
}
}

// عرض الأخطاء أو المتابعة
if (errors.length > 0) {
  setErrorMassge(errors); // خزن المصفوفة كما هي
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

  // function checkLength(e) {
  //   if (e.target.value.length === e.target.maxLength) {
  //     e.stopPropagation();
  //     e.preventDefault();
  //     return false;
  //   }
  //   return true;
  // }

  const handleNumericInput = (e, field, maxLength) => {
    const newValue = e.target.value;

    if (/^\d*$/.test(newValue) && newValue.length <= maxLength) {
      setcalulationInputs((prev) => ({
        ...prev,
        [field]: newValue,
      }));
    }
  };
  var namePhoto = "القروض الاضافيه" + ".png";
  function capture() {
    // إخفاء العناصر غير المرغوب فيها
    document.querySelectorAll(".no-print, .hide-on-export").forEach((el) => {
      el.style.display = "none";
    });

    html2canvas(document.querySelector(".photo-print"), {
      scale: 2,
      useCORS: true,
    }).then((canvas) => {
      let a = document.createElement("a");
      a.download = namePhoto;
      a.href = canvas.toDataURL("image/png");
      a.click();

      // إعادة إظهار العناصر بعد الالتقاط
      document.querySelectorAll(".no-print, .hide-on-export").forEach((el) => {
        el.style.display = "";
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
           
               addNote={"تمت الحسبة على حسب البيانات\nومبغ القرض هو: " +calulationOutputs.personalFinance}


          />

      <div className="p-relative" style={{ margin: "0px 5px" }}>
        <div className="row flex-mobile" style={{ marginBottom: "200px" }}>
          <div
            className="col box input-css"
            id={classNameModel}
            style={{ marginBottom: "0px" }}
          >
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
                <div className="input-wrapper">
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
                  <span className="underline-input"></span>
                </div>
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">نوع القرض</label>
                <div className="input-wrapper">
                  <select
                    className="w-60"
                    value={calulationInputs.type}
                    onChange={(event) => {
                      setcalulationInputs({
                        ...calulationInputs,
                        type: event.target.value,
                      });
                    }}
                  >
                    <option value="1">شخصي</option>
                    <option selected value="2">
                      امكان
                    </option>
                    <option value="3"> نايفات</option>
                    <option value="4">دوتيشيه</option>
                    <option value="5">تسهيل</option>
                    <option value="6"> الفرنسي</option>
                    <option value="7"> ساب</option>
                    <option value="8">الاخري</option>
                  </select>
                  <span className="underline-input"></span>
                </div>
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">الــوظيفـــة</label>
                <div className="input-wrapper">
                  <select
                    className="w-60"
                    value={calulationInputs.job}
                    onChange={(event) => {
                      setcalulationInputs({
                        ...calulationInputs,
                        job: event.target.value,
                      });
                    }}
                  >
                    <option value="متقاعد">متقاعد</option>
                    <option selected value="مدني">
                      مدني
                    </option>
                    <option value="خاص">خاص</option>
                    <option value="جندي">جندي</option>
                    <option value="عريف">عريف</option>
                    <option value="وكيل رقيب">وكيل رقيب</option>
                    <option value="رقيب"> رقيب</option>
                    <option value="رئيس رقباء">رئيس رقباء</option>
                    <option value="ملازم">ملازم</option>
                    <option value="نقيب">نقيب</option>
                    <option value="رائد">رائد</option>
                    <option value="عقيد">عقيد</option>
                    <option value="عميد">عميد</option>
                  </select>
                  <span className="underline-input"></span>
                </div>
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">الراتب الصافي</label>
                <div className="input-wrapper">
                  <input
                    className="w-60"
                    // onKeyDown={checkLength}

                    value={calulationInputs.netSalary}
                    type="text"
                    inputMode="numeric"
                    maxLength={5}
                    onChange={(e) => handleNumericInput(e, "netSalary", 10)}
                  />
                  <span className="underline-input"></span>
                </div>
              </div>

              {/* <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">تاريخ الميلاد</label>
                <input
                  className="w-28"
                  placeholder=" شهر  "
                  // onKeyDown={checkLength}
                
                  value={calulationInputs.birthMonth}
                  
               
                  type="text"
                  inputMode="numeric"
                  maxLength={2}
                  onChange={(e) => handleNumericInput(e, 'birthMonth', 10)}
                />
                <input
                  className="w-32"
                  placeholder=" سنه "
                   // onKeyDown={checkLength}
         
                  value={calulationInputs.birthYear}
      

                  type="text"
                  inputMode="numeric"
                  maxLength={4}
                  onChange={(e) => handleNumericInput(e, 'birthYear', 10)}
                />
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label className="">تاريخ اليوم</label>
                <input
                  className="w-28"
                  placeholder=" شهر"
                   // onKeyDown={checkLength}
                
                  value={calulationInputs.currentMonth}
               

                  type="text"
                  inputMode="numeric"
                  maxLength={2}
                  onChange={(e) => handleNumericInput(e, 'currentMonth', 10)}
                />
                <input
                  className="w-32"
                  placeholder=" سنه"
                   // onKeyDown={checkLength}
                
                  value={calulationInputs.currentYear}
               

                  type="text"
                  inputMode="numeric"
                  maxLength={4}
                  onChange={(e) => handleNumericInput(e, 'currentYear', 10)}
                />
              </div> */}

              <div className="form-row">
                <label>تاريخ الميلاد</label>

                <div className="input-wrapper-day month">
                  <input
                    style={{ width: "100%" }}
                    className="input-field"
                    name="birthMonth"
                    placeholder="شهر"
                    type="text"
                    inputMode="numeric"
                    maxLength={2}
                    value={calulationInputs.birthMonth}
                    onChange={(e) => handleNumericInput(e, "birthMonth", 10)}
                  />
                  <span className="underline-input-day"></span>
                </div>

                <div className="input-wrapper-day year">
                  <input
                    style={{ width: "100%" }}
                    className="input-field"
                    name="birthYear"
                    placeholder="سنة"
                    type="text"
                    inputMode="numeric"
                    maxLength={4}
                    value={calulationInputs.birthYear}
                    onChange={(e) => handleNumericInput(e, "birthYear", 10)}
                  />
                  <span className="underline-input-day"></span>
                </div>
              </div>

              <div className="form-row">
                <label>تاريخ اليوم</label>

                <div className="input-wrapper-day month">
                  <input
                    className="input-field"
                    style={{ width: "100%" }}
                    name="currentMonth"
                    placeholder="شهر"
                    type="text"
                    inputMode="numeric"
                    maxLength={2}
                    value={calulationInputs.currentMonth}
                    onChange={(e) => handleNumericInput(e, "currentMonth", 10)}
                  />
                  <span className="underline-input-day"></span>
                </div>

                <div className="input-wrapper-day year">
                  <input
                    style={{ width: "100%" }}
                    className="input-field"
                    name="currentYear"
                    placeholder="سنة"
                    type="text"
                    inputMode="numeric"
                    maxLength={4}
                    value={calulationInputs.currentYear}
                    onChange={(e) => handleNumericInput(e, "currentYear", 10)}
                  />
                  <span className="underline-input-day"></span>
                </div>
              </div>

              {/* <div style={{width:"100%" , direction:"rtl"}}>
              <label>تاريخ اليوم</label>
              <input type="date" value={calulationInputs.netSalary} onChange={(event)=>{setcalulationInputs({...calulationInputs , netSalary:event.target.value})}}/>
              </div> */}

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
              <div style={{ width: "100%", direction: "rtl" }}></div>
            </form>
          </div>

          <div
            className="col box"
            id={classNameModel}
            style={{ marginBottom: "0px" }}
          >
            {/* <div style={{overflowX:"auto"}}> */}
            <div className="edit">
              <h4
                style={{ textAlign: "center", margin: "0px", padding: "6px" }}
              >
                الالتزامات
              </h4>
              <hr></hr>
              <div className="input-wrapper" style={{ width: " 100%" }}>
                <input
                  placeholder="اجمالي الاقساط الحاليه"
                  style={{ width: "100%", marginLeft: "1%", height: "41px" }}
                  value={calulationInputs.installment1}
                  // onKeyDown={checkLength}

                  type="text"
                  inputMode="numeric"
                  maxLength={5}
                  onChange={(e) => handleNumericInput(e, "installment1", 10)}
                ></input>
                <span className="underline-input"></span>
              </div>

              <h4
                style={{
                  textAlign: "center",
                  margin: "0px",
                  padding: "6px",
                  marginTop: "12px",
                  marginBottom: "12px",
                }}
              >
                التعديلات
              </h4>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label style={{ minWidth: "47%", marginLeft: "2%" }}>
                  {" "}
                  نسبة الاستقطاع{" "}
                </label>
                <div className="input-wrapper">
                  <input
                    style={{}}
                    value={calulationInputs.editPercentageFirst}
                    // onKeyDown={checkLength}
                    maxLength="5"
                    type="number"
                    onChange={(event) => {
                      setcalulationInputs({
                        ...calulationInputs,
                        editPercentageFirst: event.target.value,
                      });
                    }}
                  ></input>
                  <span className="underline-input"></span>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label style={{ minWidth: "47%", marginLeft: "2%" }}>
                  مده التمويل{" "}
                </label>
                <div className="input-wrapper">
                  <input
                    style={{}}
                    value={calulationInputs.editDurationPersonal}
                    // onKeyDown={checkLength}

                    type="text"
                    inputMode="numeric"
                    maxLength={2}
                    onChange={(e) =>
                      handleNumericInput(e, "editDurationPersonal", 10)
                    }
                  ></input>
                  <span className="underline-input"></span>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label style={{ minWidth: "47%", marginLeft: "2%" }}>
                  نسبه الفوائد{" "}
                </label>
                <div className="input-wrapper">
                  <input
                    style={{}}
                    value={calulationInputs.editProfitRatePersonal}
                    // onKeyDown={checkLength}
                    maxLength="5"
                    type="number"
                    onChange={(event) => {
                      setcalulationInputs({
                        ...calulationInputs,
                        editProfitRatePersonal: event.target.value,
                      });
                    }}
                  ></input>
                  <span className="underline-input"></span>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label style={{ minWidth: "47%", marginLeft: "2%" }}>
                  القسط للقرض{" "}
                </label>
                <div className="input-wrapper">
                  <input
                    style={{}}
                    value={calulationInputs.editPersonalInstallment}
                    // onKeyDown={checkLength}

                    type="text"
                    inputMode="numeric"
                    maxLength={5}
                    onChange={(e) =>
                      handleNumericInput(e, "editPersonalInstallment", 10)
                    }
                  ></input>
                  <span className="underline-input"></span>
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
            </div>
          </div>

          <div
            className="col box photo-print"
            id={classNameModel}
            style={{ marginBottom: "0px" }}
          >
            <div style={{}}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  className="loader-container"
                  style={{ height: "auto", width: "150px" }}
                >
                  <div className="logo-reveal">
                    <img
                      src={im}
                      alt="Eskan Salman Logo"
                      className={darkSide ? "logo-color" : "logo-color-dark"}
                      style={{ width: "135px" }}
                    />
                    <div className="logo-mask-infinite"></div>
                  </div>
                </div>
                {/* <img alt="" src={im} className={darkSide ? "logo-screen" : "logo-screen-dark" } style={{    width: "135px"}} /> */}
                <img
                  alt="لوجو "
                  src={imageBank}
                  className={darkSide ? "logo-screen" : "logo-screen-dark"}
                  style={{ height: "auto" }}
                />
              </div>
              <hr style={{ marginTop: "1px" }}></hr>

              {/* <img alt="" src={im} className={darkSide ? "logo-screen" : "logo-screen-dark" } style={{}} /> */}

              {/* <h4
                style={{ textAlign: "center", margin: "0px", padding: "6px" }}
              >
                عرض السعر
              </h4>
              <hr></hr> */}

              <table className={tableDark}>
                <tr>
                  <td>مبلغ التمويل</td>
                  <td>
                    {calulationOutputs.personalFinance}
                    <img
                      className={
                        darkSide ? "currency-color" : "currency-color-dark"
                      }
                      style={{
                        display: currency ? "" : "none",
                        width: "15px",
                        marginRight: "5px",
                      }}
                      src={currencyLogo}
                      alt="SAR"
                    />
                  </td>
                </tr>

                <tr>
                  <td>القسط للقرض</td>
                  <td>
                    {calulationOutputs.firstInstallment}
                    <img
                      className={
                        darkSide ? "currency-color" : "currency-color-dark"
                      }
                      style={{
                        display: currency ? "" : "none",
                        width: "15px",
                        marginRight: "5px",
                      }}
                      src={currencyLogo}
                      alt="SAR"
                    />
                  </td>
                </tr>

                <tr>
                  <td> مدة التمويل</td>
                  <td>{calulationOutputs.durationPersonal}</td>
                </tr>

                <tr>
                  <td>نسبه الاستقطاع </td>
                  <td>{calulationOutputs.precent}</td>
                </tr>

                <tr>
                  <td>نسبه الفوائد </td>
                  <td>{calulationOutputs.profitRatePersonal}</td>
                </tr>
                <tr>
                  <td>مبلغ الفوائد </td>
                  <td>
                    {calulationOutputs.netProfit}
                    <img
                      className={
                        darkSide ? "currency-color" : "currency-color-dark"
                      }
                      style={{
                        display: currency ? "" : "none",
                        width: "15px",
                        marginRight: "5px",
                      }}
                      src={currencyLogo}
                      alt="SAR"
                    />
                  </td>
                </tr>

                <tr>
                  <td>الاجمالي مع الفوائد</td>
                  <td>
                    {calulationOutputs.total}
                    <img
                      className={
                        darkSide ? "currency-color" : "currency-color-dark"
                      }
                      style={{
                        display: currency ? "" : "none",
                        width: "15px",
                        marginRight: "5px",
                      }}
                      src={currencyLogo}
                      alt="SAR"
                    />
                  </td>
                </tr>
                <tr>
                  <td>عمر العميل</td>
                  <td>{calulationOutputs.age}</td>
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
