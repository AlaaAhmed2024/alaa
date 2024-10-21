import { useEffect, useState } from "react";
import "../Project1.css";
import Modal from "../Model";
import NetSalary from "./NetSlary";
import NetSalaryModel2 from "./NetSalaryModel";

import Banks from "./Banks";
import Plus from "./Plus";
import Profit from "./profit";

import audioError from "../sound/error.mp3";
import audioSuccess from "../sound/success.mp3";
import audioWarning from "../sound/warning.mp3";

import axios from "axios";
import { NavLink } from "react-router-dom";
import Clients from "./clients";
export default function About() {
  //ارسال البيانات

  //عرض البيانات
  // const[data,setData]=useState([])
  // useEffect(()=>{
  //  fetch('http://localhost:8081/my_clients')
  //  .then(res =>res.json())
  //  .then(data =>setData(data))
  //  .catch(err=>console.log(err))
  // },[])

  const [calulationInputs, setcalulationInputs] = useState({
    netSalary: "",
    basicSalary: "",
    currentBank: "alrajhi",
    realEstateBank: "alrajhi",
    housingSupport: "baqa",
    newPersonalFinance: "noNewPrsonal",
    job: "مدني",
    financingType: "afterRetirement",
    durationIn: "",
    typeException: "",

    installment1: "",
    installment2: "",
    installment3: "",
    installment4: "",
    duration1: "",
    duration2: "",
    duration3: "",
    duration4: "",

    editDurationPersonal: "",
    editTotalDuration: "",

    editPercentageFirst: "",
    editPercentageBeforeRetirement: "",
    editPercentageAfterRetirement: "",

    editProfitRateRealEstate: "",
    editProfitRatePersonal: "",

    editPersonalInstallment: "",
    editAmountHousingSupport: "",
    editAmountHousingSupportBaqa: "",

    birthMonth: "",
    currentMonth: "",
    startWorkMonth: "",

    birthYear: "",
    currentYear: "",
    startWorkYear: "",

    inputSelect: "",
    inputCheck: false,
    name: "",
    phone: "",
    alinmaPersonal: "",
    privateSectorEmployee: "",
    downPayment: "10",
    firstHouse: "yes",
  });

  const [calulationOutputs, setCalulationOutputs] = useState({
    realEstateFinance: "",
    personalFinance: "",
    amountHousingSupport: "",
    total: "",

    firstInstallment: "",
    installmentBeforeRetirement: "",
    installmentAfterRetirement: "",

    durationBeforeRetirement: "",
    durationAfterRetirement: "",
    totalDuration: "",

    totalProfit: "",
    netProfit: "",
    profitPersonal: "",
    salaryAfterRetirement: "",
    profitRateRealEstate: "",
    profitRatePersonal: "",
    age: "",
    work: "",

    percentageBeforeRetirement: "",
    percentageAfterRetirement: "",

    installmentPersonal: "",
    durationPersonal: "",

    netNet1: "",
    nameAmountHousingSupport: "قسط الدعم",
    phoneOut: "https://api.whatsapp.com/send?phone=966552224592",

    // inputSelect:"",
    // inputCheck:false
  });

  const [showModdal, setShowModal] = useState(false);
  const [errorMassge, setErrorMassge] = useState(null);

  function calculation(event) {
    let audio1 = new Audio(audioSuccess);
    let audio2 = new Audio(audioWarning);
    let audio3 = new Audio(audioError);

    if (calulationInputs.realEstateBank === "alrajhi") {
      //  مصفوفه الدعم ع حسب الراتب
      var arrayHousingSupportSalary = [
        10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000,
      ];
      var arrayHousingSupport = [
        416, 599, 673, 757, 850, 955, 1073, 1206, 1350,
      ];

      //حساب قسط الدعم
      if (
        calulationInputs.netSalary == 0 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var housingSupport = 0;
      } else if (
        calulationInputs.netSalary != 0 &&
        calulationInputs.housingSupport == "monthly" &&
        calulationInputs.editAmountHousingSupport != ""
      ) {
        housingSupport = calulationInputs.editAmountHousingSupport;
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(0) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(0);
      } else if (
        calulationInputs.netSalary == arrayHousingSupportSalary.at(0) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(1);
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(1) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(2) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport =
          ((10000 - calulationInputs.netSalary) * (673 - 599)) / 1000 + 599;
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(2) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport =
          ((9000 - calulationInputs.netSalary) * (757 - 673)) / 1000 + 673;
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(3) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport =
          ((8000 - calulationInputs.netSalary) * (850 - 757)) / 1000 + 757;
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(4) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport =
          ((7000 - calulationInputs.netSalary) * (955 - 850)) / 1000 + 850;
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(5) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport =
          ((6000 - calulationInputs.netSalary) * (1073 - 955)) / 1000 + 955;
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(6) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport =
          ((5000 - calulationInputs.netSalary) * (1206 - 1073)) / 1000 + 1073;
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(7) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport =
          ((4000 - calulationInputs.netSalary) * (1350 - 1206)) / 1000 + 1206;
      } else {
        housingSupport = 0;
      }

      //حساب العمر و مده الخدمة
      var monthWork =
        calulationInputs.currentMonth - calulationInputs.startWorkMonth;
      var yearWork =
        calulationInputs.currentYear - calulationInputs.startWorkYear;
      var durationWork = ((monthWork + yearWork * 12) / 12).toFixed(2);
      var monthClint =
        calulationInputs.currentMonth - calulationInputs.birthMonth;
      var yearClint = calulationInputs.currentYear - calulationInputs.birthYear;
      var ageClint = ((monthClint + yearClint * 12) / 12).toFixed(2);

      //الاعمار التقاعديه
      var array1 = [77, 60, 60, 44, 46, 48, 50, 52, 44, 46, 48, 50, 52];
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
      var array3 = [0, 77, 77, 70, 70, 70, 70, 70, 77, 77, 77, 77, 77];
      var numberJob = array2.indexOf(calulationInputs.job);
      var ageBeforeRetirement = array1.at(numberJob);

      //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
      if (calulationInputs.financingType == "normal") {
        var agePercentageAfterRetirement = 0;
      } else {
        agePercentageAfterRetirement = array3.at(numberJob);
      }

      //اقصي مده للتمويل مدعوم وغير مدعوم وباقه
      if (
        calulationInputs.housingSupport == "monthly" ||
        calulationInputs.housingSupport == "baqa"
      ) {
        var maxDuration = 360;
      } else {
        maxDuration = 360;
      }
      // حساب المده المتبقيه الي التقاعد الفعلي
      var durationBefore = (ageBeforeRetirement - ageClint) * 12;
      if (calulationInputs.netSalary == 0) {
        var maxxDurationBefore = 0;
      } else if (calulationInputs.editTotalDuration == "") {
        maxxDurationBefore = Math.min(durationBefore, maxDuration);
      } else {
        maxxDurationBefore = Math.min(
          calulationInputs.editTotalDuration,
          durationBefore,
          maxDuration
        );
      }

      //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
      if (calulationInputs.financingType == "normal") {
        var durationAfter = 0;
      } else {
        durationAfter =
          (agePercentageAfterRetirement - ageBeforeRetirement) * 12;
      }

      //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
      if (
        (calulationInputs.financingType == "afterRetirement" &&
          calulationInputs.job == "متقاعد") ||
        calulationInputs.netSalary == 0
      ) {
        var maxxDurationAfter = 0;
      } else if (calulationInputs.editTotalDuration == "") {
        var maxxDurationAfter = Math.min(
          durationAfter,
          maxDuration - maxxDurationBefore
        );
      } else {
        var maxxDurationAfter = Math.min(
          durationAfter,
          maxDuration - maxxDurationBefore,
          calulationInputs.editTotalDuration - maxxDurationBefore
        );
      }

      //اجمالي مده التمويل
      var totalDuration = maxxDurationAfter + maxxDurationBefore;

      //مصفوفه نسب الفوائد اولا المدعوم
      var durationRealEstates = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25, 26, 27, 28, 29, 30,
      ]; // المده بالسنوات
      var arr1 = [
        3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.6, 3.66, 3.7, 3.75, 3.81, 3.86, 3.92,
        3.98, 4.04, 4.1, 4.16, 4.16, 4.16, 4.16, 4.16, 4.16, 4.73, 4.79, 4.85,
        4.91, 4.96,
      ]; //نسب الفوائد للمدعوم
      var arr11 = [
        3.44, 3.44, 3.44, 3.44, 3.44, 3.44, 3.44, 3.5, 3.54, 3.58, 3.64, 3.69,
        3.75, 3.8, 3.86, 3.92, 3.98, 3.98, 3.98, 3.98, 3.98, 3.98, 4.53, 4.58,
        4.64, 4.69, 4.75,
      ]; //ضمانات
      //مصفوفه نسب الفوائد ثانيا غير المدعوم
      var durationRealEstates2 = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25, 26, 27, 28, 29, 30,
      ];
      var arr2 = [
        4.09, 4.09, 4.09, 4.09, 4.09, 4.09, 3.94, 3.99, 4.04, 4.09, 4.14, 4.19,
        4.24, 4.29, 4.34, 4.39, 4.44, 4.54, 4.59, 4.63, 4.69, 4.74, 4.99, 4.99,
        4.99, 4.99, 4.99,
      ]; // الغير مدعوم راتب اقل من 10 الف
      var arr3 = [
        4.09, 4.09, 4.09, 4.09, 4.09, 4.09, 3.94, 3.99, 4.04, 4.09, 4.14, 4.19,
        4.24, 4.29, 4.34, 4.39, 4.44, 4.54, 4.59, 4.63, 4.69, 4.74, 4.99, 4.99,
        4.99, 4.99, 4.99,
      ]; //الغير مدعوم راتب فوق 10 الف

      // تقريب مده التمويل الي الاعلي سنه
      var totalDurationUP = Math.floor(totalDuration / 12);

      if (calulationInputs.typeException == "damanat") {
        var vl = durationRealEstates.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
        var profitRatioRealEstates1 = arr11.at(vl); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
      } else if (
        calulationInputs.typeException == "damanatAndexception" &&
        calulationInputs.netSalary < 15000
      ) {
        var vl = durationRealEstates.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
        var profitRatioRealEstates1 = arr11.at(vl) - 0.2; // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
      } else if (
        calulationInputs.typeException == "damanatAndexception" &&
        calulationInputs.netSalary >= 15000
      ) {
        var vl = durationRealEstates.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
        var profitRatioRealEstates1 = arr11.at(vl) - 0.4; // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
      } else {
        var vl = durationRealEstates.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
        var profitRatioRealEstates1 = arr1.at(vl); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
      }

      var v2 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates2 = arr2.at(v2); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      var v3 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates3 = arr3.at(v3); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      if (calulationInputs.netSalary == 0) {
        var profitRatioRealEstates = 0;
      } else if (calulationInputs.editProfitRateRealEstate != "") {
        var profitRatioRealEstates = calulationInputs.editProfitRateRealEstate;
      } else if (calulationInputs.housingSupport == "monthly") {
        var profitRatioRealEstates = profitRatioRealEstates1;
      } else if (calulationInputs.housingSupport == "baqa") {
        var profitRatioRealEstates = profitRatioRealEstates1;
      } else if (
        calulationInputs.netSalary <= 10000 &&
        calulationInputs.housingSupport == "no"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates2;
      } else {
        var profitRatioRealEstates = profitRatioRealEstates3;
      }

      //المخرجات رابعا اظهار بعض المعلومات نسب الفوائد و الاستقطاع
      if (
        calulationInputs.typeException == "exception" &&
        calulationInputs.netSalary < 15000
      ) {
        var profitRatioRealEstates1 = profitRatioRealEstates - 0.2;
      } else if (
        calulationInputs.typeException == "exception" &&
        calulationInputs.netSalary > 15000
      ) {
        var profitRatioRealEstates1 = profitRatioRealEstates - 0.4;
      } else {
        var profitRatioRealEstates1 = profitRatioRealEstates;
      }

      //   حساب مبلغ قسط الدعم اللي مش حقيقي  لتعديل مبلغ التمويل العقاري
      if (housingSupport == 0) {
        var housingSupportNotReal = 0;
      } else if (totalDuration <= 240) {
        var housingSupportNotReal = housingSupport;
      } else if (totalDuration > 240) {
        var housingSupportNotReal = (housingSupport * 240) / totalDuration;
      } else {
        var housingSupportNotReal = 0;
      }

      //حساب الراتب التقاعدي
      if (calulationInputs.job == "متقاعد") {
        var addTypeClint = 0;
      } else if (
        calulationInputs.job == array2.at(2) &&
        calulationInputs.privateSectorEmployee == "حكومي"
      ) {
        var addTypeClint = 0.0125;
      } else if (
        calulationInputs.job == array2.at(2) &&
        calulationInputs.privateSectorEmployee == "غير معتمد"
      ) {
        var addTypeClint = 0;
      } else if (
        calulationInputs.job == array2.at(2) &&
        calulationInputs.privateSectorEmployee == "معتمد"
      ) {
        var addTypeClint = 0;
      } else {
        var addTypeClint = 0.025;
      }

      var edit1 = calulationInputs.basicSalary * (1 + addTypeClint);
      var edit2 = edit1 * (1 + addTypeClint);
      var edit3 = edit2 * (1 + addTypeClint);
      var edit4 = edit3 * (1 + addTypeClint);
      var edit5 = edit4 * (1 + addTypeClint);
      var edit6 = edit5 * (1 + addTypeClint);
      var edit7 = edit6 * (1 + addTypeClint);
      var edit8 = edit7 * (1 + addTypeClint);
      var edit9 = edit8 * (1 + addTypeClint);
      var edit10 = edit9 * (1 + addTypeClint);
      var edit11 = edit10 * (1 + addTypeClint);
      var edit12 = edit11 * (1 + addTypeClint);

      if (maxxDurationBefore >= 12 * 12) {
        var EditBasicSalary = edit12;
      } else if (maxxDurationBefore >= 11 * 12) {
        var EditBasicSalary = edit11;
      } else if (maxxDurationBefore >= 10 * 12) {
        var EditBasicSalary = edit10;
      } else if (maxxDurationBefore >= 9 * 12) {
        var EditBasicSalary = edit9;
      } else if (maxxDurationBefore >= 8 * 12) {
        var EditBasicSalary = edit8;
      } else if (maxxDurationBefore >= 7 * 12) {
        var EditBasicSalary = edit7;
      } else if (maxxDurationBefore >= 6 * 12) {
        var EditBasicSalary = edit6;
      } else if (maxxDurationBefore >= 5 * 12) {
        var EditBasicSalary = edit5;
      } else if (maxxDurationBefore >= 0) {
        var EditBasicSalary = calulationInputs.basicSalary;
      }

      if (calulationInputs.job == array2.at(1)) {
        var salaryAfter =
          (EditBasicSalary * (12 * durationWork + durationBefore)) / 480;
      } else if (calulationInputs.job == array2.at(2)) {
        var salaryAfter =
          (1 *
            EditBasicSalary *
            (1 * calulationInputs.durationIn + durationBefore)) /
          480;
      } else if (calulationInputs.job == array2.at(0)) {
        var salaryAfter = 0;
      } else {
        var salaryAfter =
          (EditBasicSalary * (12 * durationWork + durationBefore)) / 420;
      }

      console.log(array2.at(2));
      console.log(calulationInputs.privateSectorEmployee);
      console.log(EditBasicSalary);
      console.log(salaryAfter);

      // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد
      if (calulationInputs.editPercentageBeforeRetirement == "") {
        var precentBeforeEdit1 = 100;
      } else {
        var precentBeforeEdit1 =
          calulationInputs.editPercentageBeforeRetirement;
      }

      // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات بعد التقاعد
      if (calulationInputs.editPercentageAfterRetirement == "") {
        var precentAfterEdit1 = 100;
      } else {
        var precentAfterEdit1 = calulationInputs.editPercentageAfterRetirement;
      }

      //اقص نسبه استقطاع قبل و بعد التقاعد للمدعوم و غير المدعوم و ايضا قيمه الباقه
      if (calulationInputs.netSalary == 0) {
        var b = 0;
        var precentBefore = 0;
        var precentAfter = 0;
      } else if (
        calulationInputs.netSalary == 0 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary != 0 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.housingSupport == "baqa" &&
        calulationInputs.editAmountHousingSupportBaqa != ""
      ) {
        var b = calulationInputs.editAmountHousingSupportBaqa;
        if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter <= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        }
      } else if (
        calulationInputs.netSalary >= 10000 &&
        calulationInputs.housingSupport == "baqa"
      ) {
        var b = 100000;
        if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter <= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        }
      } else if (
        calulationInputs.netSalary < 10000 &&
        calulationInputs.housingSupport == "baqa" &&
        calulationInputs.editAmountHousingSupportBaqa != ""
      ) {
        var b = calulationInputs.editAmountHousingSupportBaqa;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary < 10000 &&
        calulationInputs.housingSupport == "baqa"
      ) {
        var b = 150000;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 15000 &&
        salaryAfter >= 15000 &&
        calulationInputs.housingSupport == "no"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary < 15000 &&
        salaryAfter >= 15000 &&
        calulationInputs.housingSupport == "no"
      ) {
        var b = 0;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 15000 &&
        salaryAfter < 15000 &&
        calulationInputs.housingSupport == "no"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(55, precentAfterEdit1);
      } else {
        var b = 0;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        var precentAfter = Math.min(55, precentAfterEdit1);
      }

      if (calulationInputs.editPercentageFirst != "") {
        var prcent1 =
          (1 * (precentBefore - 1 * calulationInputs.editPercentageFirst)) /
          100;
      } else {
        var prcent1 = 0;
      }

      //التمويل الشخصي اولا حساب القسط
      if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.editPersonalInstallment != ""
      ) {
        var personInstallment = 1 * calulationInputs.editPersonalInstallment;
      } else if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.job == array2.at(0) &&
        calulationInputs.editPersonalInstallment == ""
      ) {
        var personInstallment = 0.25 * calulationInputs.netSalary;
      } else if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.job != array2.at(0) &&
        calulationInputs.editPersonalInstallment == ""
      ) {
        var personInstallment = 0.33 * calulationInputs.netSalary;
      } else {
        var personInstallment = 0;
      }

      //التمويل الشخصي ثانيا حساب المدة
      if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.netSalary != 0 &&
        calulationInputs.editDurationPersonal == ""
      ) {
        var durationPerson = Math.min(60, durationBefore); //بالشهر
      } else if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.netSalary != 0 &&
        calulationInputs.editDurationPersonal != ""
      ) {
        var durationPerson = Math.min(
          60,
          durationBefore,
          calulationInputs.editDurationPersonal
        );
      } else {
        var durationPerson = 0;
      }

      //التمويل الشخصي ثالثا حساب مبلغ التمويل

      //نسب الفوائد
      if (calculation.job == "مدني" || calulationInputs.job == "متقاعد") {
        var prcentPrsonaFinal = 5;
      } else if (calulationInputs.job == "خاص") {
        var prcentPrsonaFinal = 5 + 0.6;
      } else {
        var prcentPrsonaFinal = 5 + 0.75;
      }

      if (calulationInputs.netSalary == 0) {
        var profitadd = 0;
      } else if (calulationInputs.editProfitRatePersonal != "") {
        var profitadd = calulationInputs.editProfitRatePersonal * 1;
      } else {
        var profitadd = prcentPrsonaFinal;
      }

      if (calulationInputs.newPersonalFinance == "yesNewPrsonal") {
        var PersonalFinance =
          (personInstallment * durationPerson) /
          (1 + 0.01 * profitadd * (durationPerson / 12));
        // التمويل الشخصي رابعا حساب فوائد الشخصي
        var profitPersonalFinance =
          personInstallment * durationPerson - PersonalFinance;
      } else {
        var PersonalFinance = 0;
        var profitPersonalFinance = 0;
      }

      //مبلغ الالتزامات الحاليه
      var liabilities =
        1 * calulationInputs.installment1 * calulationInputs.duration1 +
        1 * calulationInputs.installment2 * calulationInputs.duration2 +
        1 * calulationInputs.installment3 * calulationInputs.duration3 +
        1 * calulationInputs.installment4 * calulationInputs.duration4 +
        PersonalFinance +
        profitPersonalFinance;
      var sl5 = personInstallment;

      // التمويل العقاري
      // التمويل العقاري اولا حساب القسط الحقيقي
      var installment =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupport)) /
          100 -
        1 * calulationInputs.installment1 -
        1 * calulationInputs.installment2 -
        1 * calulationInputs.installment3 -
        1 * calulationInputs.installment4 -
        sl5;
      var installmentBefore =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupport)) /
        100;

      if (calulationInputs.financingType == "normal") {
        var installmentAfter = 0;
      } else if (
        calulationInputs.financingType == "afterRetirement" &&
        maxxDurationBefore == 0
      ) {
        var installmentAfter = 0;
      } else if (
        calulationInputs.financingType == "afterRetirement" &&
        calulationInputs.job == "متقاعد"
      ) {
        var installmentAfter = 0;
      } else {
        var installmentAfter =
          (precentAfter * (1 * salaryAfter + 1 * housingSupport)) / 100;
      }

      //التمويل العقاري ثانيا حساب القسط الوهمي
      var installmentNotReal =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupportNotReal)) /
        100;
      var installmentBeforeNotReal =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupportNotReal)) /
        100;
      var installmentAfterNotReal =
        (precentAfter * (1 * salaryAfter + 1 * housingSupportNotReal)) / 100;

      // التمويل العقاري ثالثا حساب مبلغ التمويل
      if (
        calulationInputs.typeException == "exception" &&
        calulationInputs.netSalary < 15000
      ) {
        var totalRealEstateFinance =
          installmentBeforeNotReal * maxxDurationBefore +
          installmentAfterNotReal * maxxDurationAfter -
          liabilities -
          prcent1 *
            1 *
            calulationInputs.netSalary *
            Math.max(
              calulationInputs.duration1,
              calulationInputs.duration2,
              calulationInputs.duration3,
              calulationInputs.duration4,
              durationPerson
            );
        var netRealEstateFinance =
          totalRealEstateFinance /
          (1 + (profitRatioRealEstates - 0.2) * 0.01 * (totalDuration / 12));
      } else if (
        calulationInputs.typeException == "exception" &&
        calulationInputs.netSalary > 15000
      ) {
        var totalRealEstateFinance =
          installmentBeforeNotReal * maxxDurationBefore +
          installmentAfterNotReal * maxxDurationAfter -
          liabilities -
          prcent1 *
            1 *
            calulationInputs.netSalary *
            Math.max(
              calulationInputs.duration1,
              calulationInputs.duration2,
              calulationInputs.duration3,
              calulationInputs.duration4,
              durationPerson
            );
        var netRealEstateFinance =
          totalRealEstateFinance /
          (1 + (profitRatioRealEstates - 0.4) * 0.01 * (totalDuration / 12));
      } else {
        var totalRealEstateFinance =
          installmentBeforeNotReal * maxxDurationBefore +
          installmentAfterNotReal * maxxDurationAfter -
          liabilities -
          prcent1 *
            1 *
            calulationInputs.netSalary *
            Math.max(
              calulationInputs.duration1,
              calulationInputs.duration2,
              calulationInputs.duration3,
              calulationInputs.duration4,
              durationPerson
            );
        var netRealEstateFinance =
          totalRealEstateFinance /
          (1 + profitRatioRealEstates * 0.01 * (totalDuration / 12));
      }

      var xxxx = 1 * prcent1 * 1 * calulationInputs.netSalary;
      //التمويل العقاري خامسا حساب فوائد للتمويل
      var totalProfitEstateFinance =
        totalRealEstateFinance - netRealEstateFinance;
      var netProfitEstateFinance =
        totalProfitEstateFinance -
        housingSupport * Math.min(240, totalDuration);

      // التمويل العقاري سادسا حساب  اجمالي المده للتمويل
      var total = netRealEstateFinance + PersonalFinance + b;

      if (calulationInputs.housingSupport == "baqa") {
        var outNameHosingSuppory = "باقة الدعم";
        var amountHousingSupport = b;
      } else if (calulationInputs.housingSupport == "no") {
        var outNameHosingSuppory = "الدعم السكني";
        var amountHousingSupport = 0;
      } else {
        var outNameHosingSuppory = "قسط الدعم";
        var amountHousingSupport = housingSupport;
      }

      if (calulationInputs.firstHouse === "yes") {
        if (calulationInputs.downPayment === "10") {
          var netT = total / 0.9;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "5") {
          var netT = total / 0.95;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "20") {
          var netT = total / 0.8;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else {
          var netT = total / 0.7;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        }
      } else {
        if (calulationInputs.downPayment === "10") {
          var netT = total / 0.9;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "5") {
          var netT = total / 0.95;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "20") {
          var netT = total / 0.8;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else {
          var netT = calulationOutputs.total / 0.7;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        }
      }

      var phoneToWattap =
        "https://api.whatsapp.com/send?phone=" + calulationInputs.phone;

      setCalulationOutputs({
        ...calulationOutputs,
        age: ageClint,
        work: durationWork,

        durationBeforeRetirement: maxxDurationBefore.toFixed(0),
        durationAfterRetirement: maxxDurationAfter.toFixed(0),
        totalDuration: totalDurationUP.toFixed(2),

        profitRateRealEstate: profitRatioRealEstates1,
        salaryAfterRetirement: new Intl.NumberFormat().format(
          salaryAfter.toFixed(0)
        ),
        percentageBeforeRetirement: precentBefore.toFixed(2),
        percentageAfterRetirement: precentAfter.toFixed(2),

        profitRatePersonal: profitadd,
        personalFinance: new Intl.NumberFormat().format(
          PersonalFinance.toFixed(0)
        ),
        profitPersonal: new Intl.NumberFormat().format(
          profitPersonalFinance.toFixed(0)
        ),
        amountHousingSupport: new Intl.NumberFormat().format(
          amountHousingSupport
        ),

        realEstateFinance: new Intl.NumberFormat().format(
          netRealEstateFinance.toFixed(0)
        ),
        total: new Intl.NumberFormat().format(total),
        firstInstallment: new Intl.NumberFormat().format(
          (installment - xxxx).toFixed(0)
        ),

        installmentBeforeRetirement: new Intl.NumberFormat().format(
          installmentBefore.toFixed(0)
        ),
        installmentAfterRetirement: new Intl.NumberFormat().format(
          installmentAfter.toFixed(0)
        ),
        totalProfit: new Intl.NumberFormat().format(
          totalProfitEstateFinance.toFixed(0)
        ),
        netProfit: new Intl.NumberFormat().format(
          netProfitEstateFinance.toFixed(0)
        ),

        netNet1: new Intl.NumberFormat().format(netNet.toFixed(0)),

        // personInstallment
        installmentPersonal: new Intl.NumberFormat().format(
          personInstallment.toFixed(0)
        ),
        durationPersonal: durationPerson,
        //تغير الكتابه

        nameAmountHousingSupport: outNameHosingSuppory,
        phoneOut: phoneToWattap,
      });

      //==================بدايه الاهلي =========================//
    } else if (calulationInputs.realEstateBank === "alahli") {
      //  مصفوفه الدعم ع حسب الراتب
      var arrayHousingSupportSalary = [
        10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000,
      ];
      var arrayHousingSupport = [
        416, 599, 673, 757, 850, 955, 1073, 1206, 1350,
      ];

      //حساب قسط الدعم
      if (calulationInputs.housingSupport == "monthly") {
        if (
          calulationInputs.netSalary == 0 &&
          calulationInputs.housingSupport == "monthly"
        ) {
          var housingSupport = 0;
        } else if (
          calulationInputs.netSalary != 0 &&
          calulationInputs.housingSupport == "monthly" &&
          calulationInputs.editAmountHousingSupport != ""
        ) {
          housingSupport = calulationInputs.editAmountHousingSupport;
        } else if (
          calulationInputs.netSalary > arrayHousingSupportSalary.at(0) &&
          calulationInputs.housingSupport == "monthly"
        ) {
          housingSupport = arrayHousingSupport.at(0);
        } else if (
          calulationInputs.netSalary == arrayHousingSupportSalary.at(0) &&
          calulationInputs.housingSupport == "monthly"
        ) {
          housingSupport = arrayHousingSupport.at(1);
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(1) &&
          calulationInputs.netSalary <= arrayHousingSupportSalary.at(2) &&
          calulationInputs.housingSupport == "monthly"
        ) {
          housingSupport =
            ((10000 - calulationInputs.netSalary) * (673 - 599)) / 1000 + 599;
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(2) &&
          calulationInputs.housingSupport == "monthly"
        ) {
          housingSupport =
            ((9000 - calulationInputs.netSalary) * (757 - 673)) / 1000 + 673;
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(3) &&
          calulationInputs.housingSupport == "monthly"
        ) {
          housingSupport =
            ((8000 - calulationInputs.netSalary) * (850 - 757)) / 1000 + 757;
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(4) &&
          calulationInputs.housingSupport == "monthly"
        ) {
          housingSupport =
            ((7000 - calulationInputs.netSalary) * (955 - 850)) / 1000 + 850;
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(5) &&
          calulationInputs.housingSupport == "monthly"
        ) {
          housingSupport =
            ((6000 - calulationInputs.netSalary) * (1073 - 955)) / 1000 + 955;
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(6) &&
          calulationInputs.housingSupport == "monthly"
        ) {
          housingSupport =
            ((5000 - calulationInputs.netSalary) * (1206 - 1073)) / 1000 + 1073;
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(7) &&
          calulationInputs.housingSupport == "monthly"
        ) {
          housingSupport =
            ((4000 - calulationInputs.netSalary) * (1350 - 1206)) / 1000 + 1206;
        } else {
          housingSupport = 0;
        }
      } else {
        housingSupport = 0;
      }

      if (calulationInputs.housingSupport == "noMonthly") {
        if (
          calulationInputs.netSalary == 0 &&
          calulationInputs.housingSupport == "noMonthly"
        ) {
          var housingSupport2 = 0;
        } else if (
          calulationInputs.netSalary != 0 &&
          calulationInputs.housingSupport == "noMonthly" &&
          calulationInputs.editAmountHousingSupport != ""
        ) {
          housingSupport2 = calulationInputs.editAmountHousingSupport;
        } else if (
          calulationInputs.netSalary > arrayHousingSupportSalary.at(0) &&
          calulationInputs.housingSupport == "noMonthly"
        ) {
          housingSupport2 = arrayHousingSupport.at(0);
        } else if (
          calulationInputs.netSalary == arrayHousingSupportSalary.at(0) &&
          calulationInputs.housingSupport == "noMonthly"
        ) {
          housingSupport2 = arrayHousingSupport.at(1);
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(1) &&
          calulationInputs.netSalary <= arrayHousingSupportSalary.at(2) &&
          calulationInputs.housingSupport2 == "noMonthly"
        ) {
          housingSupport2 =
            ((10000 - calulationInputs.netSalary) * (673 - 599)) / 1000 + 599;
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(2) &&
          calulationInputs.housingSupport == "noMonthly"
        ) {
          housingSupport2 =
            ((9000 - calulationInputs.netSalary) * (757 - 673)) / 1000 + 673;
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(3) &&
          calulationInputs.housingSupport == "noMonthly"
        ) {
          housingSupport2 =
            ((8000 - calulationInputs.netSalary) * (850 - 757)) / 1000 + 757;
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(4) &&
          calulationInputs.housingSupport == "noMonthly"
        ) {
          housingSupport2 =
            ((7000 - calulationInputs.netSalary) * (955 - 850)) / 1000 + 850;
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(5) &&
          calulationInputs.housingSupport == "noMonthly"
        ) {
          housingSupport2 =
            ((6000 - calulationInputs.netSalary) * (1073 - 955)) / 1000 + 955;
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(6) &&
          calulationInputs.housingSupport == "noMonthly"
        ) {
          housingSupport2 =
            ((5000 - calulationInputs.netSalary) * (1206 - 1073)) / 1000 + 1073;
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(7) &&
          calulationInputs.housingSupport == "noMonthly"
        ) {
          housingSupport2 =
            ((4000 - calulationInputs.netSalary) * (1350 - 1206)) / 1000 + 1206;
        } else {
          housingSupport2 = 0;
        }
      } else {
        housingSupport2 = 0;
      }

      //حساب العمر و مده الخدمة
      var monthWork =
        calulationInputs.currentMonth - calulationInputs.startWorkMonth;
      var yearWork =
        calulationInputs.currentYear - calulationInputs.startWorkYear;
      var durationWork1 = (monthWork + yearWork * 12) / 12;
      var durationWork = ((durationWork1 * 354.334) / 365).toFixed(2);

      var monthClint =
        calulationInputs.currentMonth - calulationInputs.birthMonth;
      var yearClint = calulationInputs.currentYear - calulationInputs.birthYear;
      var ageClint1 = ((monthClint + yearClint * 12) / 12).toFixed(2);
      var ageClint = ((ageClint1 * 354.334) / 365).toFixed(2);

      //الاعمار التقاعديه
      var array1 = [75, 60, 60, 44, 46, 48, 50, 52, 44, 46, 48, 50, 52];
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
      var array3 = [0, 75, 75, 70, 70, 70, 75, 75, 75, 75, 75, 75, 75];
      var numberJob = array2.indexOf(calulationInputs.job);
      var ageBeforeRetirement = array1.at(numberJob);

      //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
      if (calulationInputs.financingType == "normal") {
        var agePercentageAfterRetirement = 0;
      } else {
        agePercentageAfterRetirement = array3.at(numberJob);
      }

      //اقصي مده للتمويل مدعوم وغير مدعوم وباقه
      if (
        calulationInputs.housingSupport == "noMonthly" ||
        calulationInputs.housingSupport == "baqa"
      ) {
        var maxDuration = 360;
      } else if (calulationInputs.housingSupport == "monthly") {
        var maxDuration = 240;
      } else {
        maxDuration = 360;
      }
      // حساب المده المتبقيه الي التقاعد الفعلي
      var durationBefore = (ageBeforeRetirement - ageClint) * 12;
      var durationBefore1 = (ageBeforeRetirement - ageClint1) * 12;
      if (calulationInputs.netSalary == 0) {
        var maxxDurationBefore = 0;
      } else if (calulationInputs.editTotalDuration == "") {
        maxxDurationBefore = Math.min(durationBefore, maxDuration);
      } else {
        maxxDurationBefore = Math.min(
          calulationInputs.editTotalDuration,
          durationBefore,
          maxDuration
        );
      }

      //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
      if (calulationInputs.financingType == "normal") {
        var durationAfter = 0;
      } else {
        durationAfter =
          (agePercentageAfterRetirement - ageBeforeRetirement) * 12;
      }

      //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
      if (
        (calulationInputs.financingType == "afterRetirement" &&
          calulationInputs.job == "متقاعد") ||
        calulationInputs.netSalary == 0
      ) {
        var maxxDurationAfter = 0;
      } else if (calulationInputs.editTotalDuration == "") {
        var maxxDurationAfter = Math.min(
          180,
          durationAfter,
          maxDuration - maxxDurationBefore
        );
      } else {
        var maxxDurationAfter = Math.min(
          180,
          durationAfter,
          maxDuration - maxxDurationBefore,
          calulationInputs.editTotalDuration - maxxDurationBefore
        );
      }

      //اجمالي مده التمويل
      var totalDuration = maxxDurationAfter + maxxDurationBefore;

      //مصفوفه نسب الفوائد اولا المدعوم
      var durationRealEstates = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25, 26, 27, 28, 29, 30,
      ]; // المده بالسنوات
      var arr1 = [
        3.75, 3.75, 3.75, 3.75, 3.75, 3.75, 3.79, 3.84, 3.89, 3.95, 4.0, 4.06,
        4.12, 4.18, 4.24, 4.3, 4.36, 4.43, 4.49, 4.55, 4.62, 4.67, 4.73, 4.79,
        4.84, 4.9, 4.95,
      ]; //نسب الفوائد للمدعوم

      //مصفوفه نسب الفوائد ثانيا غير المدعوم
      var durationRealEstates2 = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25, 26, 27, 28, 29, 30,
      ];
      var arr2 = [
        4.31, 4.31, 4.31, 4.31, 4.31, 4.31, 4.07, 4.1, 4.12, 4.18, 4.24, 4.31,
        4.37, 4.43, 4.47, 4.57, 4.63, 4.7, 4.77, 4.84, 4.91, 4.98, 5.05, 5.12,
        5.19, 5.26, 5.33,
      ]; // الغير مدعوم راتب اقل من 10 الف
      var arr3 = [
        4.61, 4.61, 4.61, 4.61, 4.61, 4.61, 4.37, 4.4, 4.42, 4.48, 4.54, 4.61,
        4.67, 4.73, 4.77, 4.87, 4.93, 5, 5.07, 5.14, 5.21, 5.28, 5.35, 5.42,
        5.49, 5.56, 5.63,
      ]; //الغير مدعوم راتب فوق 10 الف

      // تقريب مده التمويل الي الاعلي سنه
      var totalDurationUP = Math.floor(totalDuration / 12);

      var vl = durationRealEstates.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates1 = arr1.at(vl); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      var v2 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates2 = arr2.at(v2); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      var v3 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates3 = arr3.at(v3); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      if (calulationInputs.netSalary == 0) {
        var profitRatioRealEstates = 0;
      } else if (calulationInputs.editProfitRateRealEstate != "") {
        var profitRatioRealEstates = calulationInputs.editProfitRateRealEstate;
      } else if (
        calulationInputs.housingSupport == "monthly" ||
        calulationInputs.housingSupport == "baqa" ||
        calulationInputs.housingSupport == "noMonthly"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates1;
      } else if (
        calulationInputs.housingSupport == "no" &&
        calulationInputs.currentBank == "alahli"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates2;
      } else {
        var profitRatioRealEstates = profitRatioRealEstates3;
      }
      var profitRatioRealEstates11 = profitRatioRealEstates;
      //   حساب مبلغ قسط الدعم اللي مش حقيقي  لتعديل مبلغ التمويل العقاري
      if (
        housingSupport == 0 ||
        calulationInputs.housingSupport == "noMonthly"
      ) {
        var housingSupportNotReal = 0;
      } else if (totalDuration <= 240) {
        var housingSupportNotReal = housingSupport;
      } else if (totalDuration > 240) {
        var housingSupportNotReal = (housingSupport * 240) / totalDuration;
      } else {
        var housingSupportNotReal = 0;
      }

      if (calulationInputs.job == array2.at(0)) {
        var salaryAfter = 0;
      } else if (
        calulationInputs.job == array2.at(1) &&
        maxxDurationBefore >= 60
      ) {
        var salaryAfter = 0.8 * calulationInputs.netSalary;
      } else if (
        calulationInputs.job == array2.at(1) &&
        maxxDurationBefore < 60
      ) {
        var salaryAfter = 0.7 * calulationInputs.netSalary;
      } else if (
        calulationInputs.job == array2.at(2) &&
        maxxDurationBefore >= 60
      ) {
        var salaryAfter = 0.8 * calulationInputs.netSalary;
      } else if (
        calulationInputs.job == array2.at(2) &&
        maxxDurationBefore < 60
      ) {
        var salaryAfter = 0.7 * calulationInputs.netSalary;
      } else if (
        calulationInputs.job == array2.at(3) &&
        maxxDurationBefore >= 60
      ) {
        var salaryAfter = 0.7 * calulationInputs.netSalary;
      } else if (
        calulationInputs.job == array2.at(3) &&
        maxxDurationBefore < 60
      ) {
        var salaryAfter = 0.6 * calulationInputs.netSalary;
      } else if (
        calulationInputs.job == array2.at(4) &&
        maxxDurationBefore >= 60
      ) {
        var salaryAfter = 0.7 * calulationInputs.netSalary;
      } else if (
        calulationInputs.job == array2.at(4) &&
        maxxDurationBefore < 60
      ) {
        var salaryAfter = 0.6 * calulationInputs.netSalary;
      } else if (
        calulationInputs.job == array2.at(5) &&
        maxxDurationBefore >= 60
      ) {
        var salaryAfter = 0.7 * calulationInputs.netSalary;
      } else if (
        calulationInputs.job == array2.at(5) &&
        maxxDurationBefore < 60
      ) {
        var salaryAfter = 0.6 * calulationInputs.netSalary;
      } else if (maxxDurationBefore >= 60) {
        var salaryAfter = 0.8 * calulationInputs.netSalary;
      } else {
        var salaryAfter = 0.7 * calulationInputs.netSalary;
      }

      // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد
      if (calulationInputs.editPercentageBeforeRetirement == "") {
        var precentBeforeEdit1 = 100;
      } else {
        var precentBeforeEdit1 =
          calulationInputs.editPercentageBeforeRetirement;
      }

      // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات بعد التقاعد
      if (calulationInputs.editPercentageAfterRetirement == "") {
        var precentAfterEdit1 = 100;
      } else {
        var precentAfterEdit1 = calulationInputs.editPercentageAfterRetirement;
      }

      //اقص نسبه استقطاع قبل و بعد التقاعد للمدعوم و غير المدعوم و ايضا قيمه الباقه
      if (calulationInputs.netSalary == 0) {
        var b = 0;
        var precentBefore = 0;
        var precentAfter = 0;
      } else if (
        calulationInputs.netSalary == 0 &&
        calulationInputs.housingSupport == "noMonthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary != 0 &&
        calulationInputs.housingSupport == "noMonthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary == 0 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary != 0 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.housingSupport == "baqa" &&
        calulationInputs.editAmountHousingSupportBaqa != ""
      ) {
        var b = calulationInputs.editAmountHousingSupportBaqa;
        if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter <= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        }
      } else if (
        calulationInputs.netSalary >= 10000 &&
        calulationInputs.housingSupport == "baqa"
      ) {
        var b = 100000;
        if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter <= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        }
      } else if (
        calulationInputs.netSalary < 10000 &&
        calulationInputs.housingSupport == "baqa" &&
        calulationInputs.editAmountHousingSupportBaqa != ""
      ) {
        var b = calulationInputs.editAmountHousingSupportBaqa;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary < 10000 &&
        calulationInputs.housingSupport == "baqa"
      ) {
        var b = 150000;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 15000 &&
        salaryAfter >= 15000 &&
        calulationInputs.housingSupport == "no"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 15000 &&
        salaryAfter < 15000 &&
        calulationInputs.housingSupport == "no"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(55, precentAfterEdit1);
      } else {
        var b = 0;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        var precentAfter = Math.min(55, precentAfterEdit1);
      }

      if (calulationInputs.editPercentageFirst != "") {
        var prcent1 =
          (precentBefore - calulationInputs.editPercentageFirst) / 100;
      } else {
        var prcent1 = 0;
      }

      //التمويل الشخصي اولا حساب القسط
      if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.editPersonalInstallment != ""
      ) {
        var personInstallment = calulationInputs.editPersonalInstallment;
      } else if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.job == array2.at(0) &&
        calulationInputs.editPersonalInstallment == ""
      ) {
        var personInstallment = 0.25 * calulationInputs.netSalary;
      } else if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.job != array2.at(0) &&
        calulationInputs.editPersonalInstallment == ""
      ) {
        var personInstallment = 0.33 * calulationInputs.netSalary;
      } else {
        var personInstallment = 0;
      }

      //التمويل الشخصي ثانيا حساب المدة
      if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.netSalary != 0 &&
        calulationInputs.editDurationPersonal == ""
      ) {
        var durationPerson = Math.min(60, durationBefore1); //بالشهر
      } else if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.netSalary != 0 &&
        calulationInputs.editDurationPersonal != ""
      ) {
        var durationPerson = Math.min(
          60,
          durationBefore1,
          calulationInputs.editDurationPersonal
        );
      } else {
        var durationPerson = 0;
      }

      //التمويل الشخصي ثالثا حساب مبلغ التمويل

      //نسب الفوائد
      if (calculation.job == "مدني" || calulationInputs.job == "متقاعد") {
        var prcentPrsonaFinal = 5;
      } else if (calulationInputs.job == "خاص") {
        var prcentPrsonaFinal = 5 + 0.6;
      } else {
        var prcentPrsonaFinal = 5 + 0.75;
      }

      if (calulationInputs.netSalary == 0) {
        var profitadd = 0;
      } else if (calulationInputs.editProfitRatePersonal != "") {
        var profitadd = calulationInputs.editProfitRatePersonal * 1;
      } else {
        var profitadd = prcentPrsonaFinal;
      }

      if (calulationInputs.newPersonalFinance == "yesNewPrsonal") {
        var PersonalFinance =
          (personInstallment * durationPerson) /
          (1 + 0.01 * profitadd * (durationPerson / 12));
        // التمويل الشخصي رابعا حساب فوائد الشخصي
        var profitPersonalFinance =
          personInstallment * durationPerson - PersonalFinance;
      } else {
        var PersonalFinance = 0;
        var profitPersonalFinance = 0;
      }

      //مبلغ الالتزامات الحاليه
      if (calulationInputs.newPersonalFinance == "yesNewPrsonal") {
        var liabilities =
          maxxDurationBefore *
            (1 * calulationInputs.installment1 +
              1 * calulationInputs.installment2 +
              1 * calulationInputs.installment3 +
              1 * calulationInputs.installment4) +
          PersonalFinance +
          profitPersonalFinance;
        var sl5 = personInstallment;
      } else {
        var liabilities =
          1 * calulationInputs.installment1 * calulationInputs.duration1 +
          maxxDurationBefore *
            (1 * calulationInputs.installment2 +
              1 * calulationInputs.installment3 +
              1 * calulationInputs.installment4);
        var sl5 = 0;
      }
      // التمويل العقاري
      // التمويل العقاري اولا حساب القسط الحقيقي

      if (calulationInputs.newPersonalFinance == "yesNewPrsonal") {
        var zxx =
          1 * calulationInputs.installment1 +
          1 * calulationInputs.installment2 +
          1 * calulationInputs.installment3 +
          1 * calulationInputs.installment4;
      } else {
        var zxx =
          1 * calulationInputs.installment2 +
          1 * calulationInputs.installment3 +
          1 * calulationInputs.installment4;
        var sl5 = 0;
      }

      //التمويل العقاري ثانيا حساب القسط الوهمي

      var installment =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupport)) /
          100 -
        1 * calulationInputs.installment1 -
        1 * calulationInputs.installment2 -
        1 * calulationInputs.installment3 -
        1 * calulationInputs.installment4 -
        sl5;
      var installmentBefore =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupport)) /
          100 -
        zxx;

      if (calulationInputs.financingType == "normal") {
        var installmentAfter = 0;
      } else if (
        calulationInputs.financingType == "afterRetirement" &&
        maxxDurationBefore == 0
      ) {
        var installmentAfter = 0;
      } else if (
        calulationInputs.financingType == "afterRetirement" &&
        calulationInputs.job == "متقاعد"
      ) {
        var installmentAfter = 0;
      } else {
        var installmentAfter =
          (precentAfter * (1 * salaryAfter + 1 * housingSupport)) / 100;
      }

      //التمويل العقاري ثانيا حساب القسط الوهمي
      var installmentNotReal =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupportNotReal)) /
        100;
      var installmentBeforeNotReal =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupportNotReal)) /
        100;
      var installmentAfterNotReal =
        (precentAfter * (1 * salaryAfter + 1 * housingSupportNotReal)) / 100;

      // التمويل العقاري ثالثا حساب مبلغ التمويل
      if (
        calulationInputs.typeException == "exception" &&
        calulationInputs.netSalary < 15000
      ) {
        var totalRealEstateFinance =
          installmentBeforeNotReal * maxxDurationBefore +
          installmentAfterNotReal * maxxDurationAfter -
          liabilities -
          prcent1 *
            1 *
            calulationInputs.netSalary *
            Math.max(
              calulationInputs.duration1,
              calulationInputs.duration2,
              calulationInputs.duration3,
              calulationInputs.duration4,
              durationPerson
            );
        var netRealEstateFinance =
          totalRealEstateFinance /
          (1 + (profitRatioRealEstates - 0.2) * 0.01 * (totalDuration / 12));
      } else if (
        calulationInputs.typeException == "exception" &&
        calulationInputs.netSalary > 15000
      ) {
        var totalRealEstateFinance =
          installmentBeforeNotReal * maxxDurationBefore +
          installmentAfterNotReal * maxxDurationAfter -
          liabilities -
          prcent1 *
            1 *
            calulationInputs.netSalary *
            Math.max(
              calulationInputs.duration1,
              calulationInputs.duration2,
              calulationInputs.duration3,
              calulationInputs.duration4,
              durationPerson
            );
        var netRealEstateFinance =
          totalRealEstateFinance /
          (1 + (profitRatioRealEstates - 0.4) * 0.01 * (totalDuration / 12));
      } else {
        var totalRealEstateFinance =
          installmentBeforeNotReal * maxxDurationBefore +
          installmentAfterNotReal * maxxDurationAfter -
          liabilities -
          prcent1 *
            1 *
            calulationInputs.netSalary *
            Math.max(
              calulationInputs.duration1,
              calulationInputs.duration2,
              calulationInputs.duration3,
              calulationInputs.duration4,
              durationPerson
            );
        var netRealEstateFinance =
          totalRealEstateFinance /
          (1 + profitRatioRealEstates * 0.01 * (totalDuration / 12));
      }

      var xxxx = 1 * prcent1 * 1 * calulationInputs.netSalary;
      //التمويل العقاري خامسا حساب فوائد للتمويل
      var totalProfitEstateFinance =
        totalRealEstateFinance - netRealEstateFinance;
      var netProfitEstateFinance =
        totalProfitEstateFinance -
        housingSupport * Math.min(240, totalDuration);

      // التمويل العقاري سادسا حساب  اجمالي المده للتمويل
      var total = netRealEstateFinance + PersonalFinance + b;

      if (calulationInputs.housingSupport == "monthly") {
        var housingSupport1 = housingSupport;
      } else if (calulationInputs.housingSupport == "noMonthly") {
        var housingSupport1 = housingSupport2;
      } else {
        var housingSupport1 = 0;
      }

      if (calulationInputs.housingSupport == "baqa") {
        var outNameHosingSuppory = "باقة الدعم";
        var amountHousingSupport = b;
      } else if (calulationInputs.housingSupport == "no") {
        var outNameHosingSuppory = "الدعم السكني";
        var amountHousingSupport = 0;
      } else {
        var outNameHosingSuppory = "قسط الدعم";
        var amountHousingSupport = housingSupport1;
      }

      if (calulationInputs.firstHouse === "yes") {
        if (calulationInputs.downPayment === "10") {
          var netT = total / 0.9;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0.15 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "5") {
          var netT = total / 0.95;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0.15 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "20") {
          var netT = total / 0.8;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0.15 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else {
          var netT = total / 0.7;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0.15 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        }
      } else {
        if (calulationInputs.downPayment === "10") {
          var netT = total / 0.9;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0.15 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "5") {
          var netT = total / 0.95;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0.15 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "20") {
          var netT = total / 0.8;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0.15 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else {
          var netT = calulationOutputs.total / 0.7;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0.15 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        }
      }

      var phoneToWattap =
        "https://api.whatsapp.com/send?phone=" + calulationInputs.phone;
      setCalulationOutputs({
        ...calulationOutputs,
        age: ageClint,
        work: durationWork,

        durationBeforeRetirement: maxxDurationBefore.toFixed(0),
        durationAfterRetirement: maxxDurationAfter.toFixed(0),
        totalDuration: totalDurationUP.toFixed(2),

        profitRateRealEstate: profitRatioRealEstates11,
        salaryAfterRetirement: new Intl.NumberFormat().format(
          salaryAfter.toFixed(0)
        ),
        percentageBeforeRetirement: precentBefore.toFixed(2),
        percentageAfterRetirement: precentAfter.toFixed(2),

        profitRatePersonal: profitadd,
        personalFinance: new Intl.NumberFormat().format(
          PersonalFinance.toFixed(0)
        ),
        profitPersonal: new Intl.NumberFormat().format(
          profitPersonalFinance.toFixed(0)
        ),
        amountHousingSupport: new Intl.NumberFormat().format(
          amountHousingSupport
        ),

        realEstateFinance: new Intl.NumberFormat().format(
          netRealEstateFinance.toFixed(0)
        ),
        total: new Intl.NumberFormat().format(total),
        firstInstallment: new Intl.NumberFormat().format(
          (installment - xxxx).toFixed(0)
        ),

        installmentBeforeRetirement: new Intl.NumberFormat().format(
          installmentBefore.toFixed(0)
        ),
        installmentAfterRetirement: new Intl.NumberFormat().format(
          installmentAfter.toFixed(0)
        ),
        totalProfit: new Intl.NumberFormat().format(
          totalProfitEstateFinance.toFixed(0)
        ),
        netProfit: new Intl.NumberFormat().format(
          netProfitEstateFinance.toFixed(0)
        ),

        netNet1: new Intl.NumberFormat().format(netNet.toFixed(0)),

        installmentPersonal: new Intl.NumberFormat().format(
          personInstallment.toFixed(0)
        ),
        durationPersonal: durationPerson,
        //تغير الكتابه

        nameAmountHousingSupport: outNameHosingSuppory,
        phoneOut: phoneToWattap,
      });

      //==================بدايه البلاد  =========================//
    } else if (calulationInputs.realEstateBank === "albilad") {
      //  مصفوفه الدعم ع حسب الراتب
      var arrayHousingSupportSalary = [
        10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000,
      ];
      var arrayHousingSupport = [
        416, 599, 673, 757, 850, 955, 1073, 1206, 1350,
      ];

      //حساب قسط الدعم
      if (
        calulationInputs.netSalary == 0 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var housingSupport = 0;
      } else if (
        calulationInputs.netSalary != 0 &&
        calulationInputs.housingSupport == "monthly" &&
        calulationInputs.editAmountHousingSupport != ""
      ) {
        housingSupport = calulationInputs.editAmountHousingSupport;
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(0) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(0);
      } else if (
        calulationInputs.netSalary == arrayHousingSupportSalary.at(0) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(1);
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(1) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(2) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport =
          ((10000 - calulationInputs.netSalary) * (673 - 599)) / 1000 + 599;
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(2) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport =
          ((9000 - calulationInputs.netSalary) * (757 - 673)) / 1000 + 673;
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(3) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport =
          ((8000 - calulationInputs.netSalary) * (850 - 757)) / 1000 + 757;
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(4) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport =
          ((7000 - calulationInputs.netSalary) * (955 - 850)) / 1000 + 850;
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(5) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport =
          ((6000 - calulationInputs.netSalary) * (1073 - 955)) / 1000 + 955;
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(6) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport =
          ((5000 - calulationInputs.netSalary) * (1206 - 1073)) / 1000 + 1073;
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(7) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport =
          ((4000 - calulationInputs.netSalary) * (1350 - 1206)) / 1000 + 1206;
      } else {
        housingSupport = 0;
      }

      //حساب العمر و مده الخدمة
      var monthWork =
        calulationInputs.currentMonth - calulationInputs.startWorkMonth;
      var yearWork =
        calulationInputs.currentYear - calulationInputs.startWorkYear;
      var durationWork = ((monthWork + yearWork * 12) / 12).toFixed(2);
      var monthClint =
        calulationInputs.currentMonth - calulationInputs.birthMonth;
      var yearClint = calulationInputs.currentYear - calulationInputs.birthYear;
      var ageClint = ((monthClint + yearClint * 12) / 12).toFixed(2);

      //الاعمار التقاعديه
      if (
        calulationInputs.housingSupport == "monthly" ||
        calulationInputs.housingSupport == "baqa"
      ) {
        //متقاعد
        var ct = 70;
      } else {
        var ct = 65;
      }

      //الاعمار التقاعديه
      var array1 = [ct, 60, 60, 44, 46, 48, 50, 52, 44, 46, 48, 50, 52];
      var arPlus2 = [ct, 60, 60, 44, 46, 50, 52, 54, 46, 48, 50, 52, 54];
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
      var array3 = [0, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75];
      var numberJob = array2.indexOf(calulationInputs.job);
      var ageBeforeRetirement = array1.at(numberJob);
      var ageBeforeRetirementPlus = arPlus2.at(numberJob);

      //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
      if (calulationInputs.financingType == "normal") {
        var agePercentageAfterRetirement = 0;
      } else {
        agePercentageAfterRetirement = array3.at(numberJob);
      }

      //اقصي مده للتمويل مدعوم وغير مدعوم وباقه
      if (
        calulationInputs.housingSupport == "monthly" ||
        calulationInputs.housingSupport == "baqa"
      ) {
        var maxDuration = 360;
      } else {
        maxDuration = 360;
      }
      // حساب المده المتبقيه الي التقاعد الفعلي

      if (
        calulationInputs.financingType == "normal" &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var durationBefore = (ageBeforeRetirementPlus - ageClint) * 12;
      } else {
        var durationBefore = (ageBeforeRetirement - ageClint) * 12;
      }

      if (calulationInputs.netSalary == 0) {
        var maxxDurationBefore = 0;
      } else if (calulationInputs.editTotalDuration == "") {
        maxxDurationBefore = Math.min(durationBefore, maxDuration);
      } else {
        maxxDurationBefore = Math.min(
          calulationInputs.editTotalDuration,
          durationBefore,
          maxDuration
        );
      }

      //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
      if (calulationInputs.financingType == "normal") {
        var durationAfter = 0;
      } else {
        durationAfter =
          (agePercentageAfterRetirement - ageBeforeRetirement) * 12;
      }

      //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
      if (
        (calulationInputs.financingType == "afterRetirement" &&
          calulationInputs.job == "متقاعد") ||
        calulationInputs.netSalary == 0
      ) {
        var maxxDurationAfter = 0;
      } else if (calulationInputs.editTotalDuration == "") {
        var maxxDurationAfter = Math.min(
          durationAfter,
          maxDuration - maxxDurationBefore
        );
      } else {
        var maxxDurationAfter = Math.min(
          durationAfter,
          maxDuration - maxxDurationBefore,
          calulationInputs.editTotalDuration - maxxDurationBefore
        );
      }

      //اجمالي مده التمويل
      var totalDuration = maxxDurationAfter + maxxDurationBefore;

      //مصفوفه نسب الفوائد اولا المدعوم
      var durationRealEstates = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25, 26, 27, 28, 29, 30,
      ]; // المده بالسنوات
      var arr1 = [
        3.79, 3.79, 3.79, 3.79, 3.79, 3.79, 3.82, 3.84, 3.85, 3.87, 3.89, 3.92,
        3.94, 3.95, 3.97, 3.99, 4.09, 4.09, 4.09, 4.09, 4.09, 4.09, 4.19, 4.19,
        4.19, 4.19, 4.19,
      ]; //نسب الفوائد للمدعوم
      var arr12 = [
        3.99, 3.99, 3.99, 3.99, 3.99, 3.99, 4.02, 4.04, 4.05, 4.07, 4.09, 4.12,
        4.14, 4.15, 4.17, 4.19, 4.29, 4.29, 4.29, 4.29, 4.29, 4.29, 4.39, 4.39,
        4.39, 4.39, 4.39,
      ];
      //مصفوفه نسب الفوائد ثانيا غير المدعوم
      var durationRealEstates2 = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25, 26, 27, 28, 29, 30,
      ];
      var arr2 = [
        3.79, 3.79, 3.79, 3.79, 3.79, 3.79, 3.79, 3.81, 3.84, 3.86, 3.88, 3.89,
        3.91, 3.94, 3.96, 3.98, 3.99, 4.01, 4.04, 4.06, 4.08, 4.09, 4.19, 4.19,
        4.19, 4.19, 4.19,
      ]; //الغير مدعوم  البنك
      var arr3 = [
        4.09, 4.09, 4.09, 4.09, 4.09, 4.09, 4.09, 4.11, 4.14, 4.16, 4.18, 4.19,
        4.21, 4.24, 4.26, 4.28, 4.29, 4.31, 4.34, 4.36, 4.38, 4.39, 4.49, 4.49,
        4.49, 4.49, 4.49,
      ]; //الغير مدعوم خارج البنك

      // تقريب مده التمويل الي الاعلي سنه
      var totalDurationUP = Math.floor(totalDuration / 12);

      var vl = durationRealEstates.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates1 = arr1.at(vl);
      var profitRatioRealEstates12 = arr12.at(vl); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
      var v2 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates2 = arr2.at(v2); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      var v3 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates3 = arr3.at(v3); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      if (calulationInputs.netSalary == 0) {
        var profitRatioRealEstates = 0;
      } else if (calulationInputs.editProfitRateRealEstate != "") {
        var profitRatioRealEstates = calulationInputs.editProfitRateRealEstate;
      } else if (
        calulationInputs.housingSupport == "monthly" &&
        calulationInputs.currentBank == "albilad"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates1;
      } else if (
        calulationInputs.housingSupport == "baqa" &&
        calulationInputs.currentBank == "albilad"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates1;
      } else if (
        calulationInputs.housingSupport == "monthly" &&
        calulationInputs.currentBank != "albilad"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates12;
      } else if (
        calulationInputs.housingSupport == "baqa" &&
        calulationInputs.currentBank != "albilad"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates12;
      } else if (
        calulationInputs.currentBank == "albilad" &&
        calulationInputs.housingSupport == "no"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates2;
      } else {
        var profitRatioRealEstates = profitRatioRealEstates3;
      }

      var profitRatioRealEstates12 = profitRatioRealEstates;

      //   حساب مبلغ قسط الدعم اللي مش حقيقي  لتعديل مبلغ التمويل العقاري
      if (housingSupport == 0) {
        var housingSupportNotReal = 0;
      } else if (totalDuration <= 240) {
        var housingSupportNotReal = housingSupport;
      } else if (totalDuration > 240) {
        var housingSupportNotReal = (housingSupport * 240) / totalDuration;
      } else {
        var housingSupportNotReal = 0;
      }

      //حساب الراتب التقاعدي
      if (calulationInputs.job == array2.at(1)) {
        var salaryAfter =
          (1 *
            calulationInputs.basicSalary *
            (12 * durationWork + durationBefore)) /
          432;
      } else if (calulationInputs.job == array2.at(2)) {
        var salaryAfter =
          (1 *
            calulationInputs.basicSalary *
            (1 * calulationInputs.durationIn + durationBefore)) /
          432;
      } else if (calulationInputs.job == array2.at(0)) {
        var salaryAfter = 0;
      } else {
        var salaryAfter =
          (1 *
            calulationInputs.basicSalary *
            (12 * durationWork + durationBefore)) /
          432;
      }

      // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد
      if (calulationInputs.editPercentageBeforeRetirement == "") {
        var precentBeforeEdit1 = 100;
      } else {
        var precentBeforeEdit1 =
          calulationInputs.editPercentageBeforeRetirement;
      }

      // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات بعد التقاعد
      if (calulationInputs.editPercentageAfterRetirement == "") {
        var precentAfterEdit1 = 100;
      } else {
        var precentAfterEdit1 = calulationInputs.editPercentageAfterRetirement;
      }

      //اقص نسبه استقطاع قبل و بعد التقاعد للمدعوم و غير المدعوم و ايضا قيمه الباقه
      if (calulationInputs.netSalary == 0) {
        var b = 0;
        var precentBefore = 0;
        var precentAfter = 0;
      } else if (
        calulationInputs.netSalary == 0 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary != 0 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.housingSupport == "baqa" &&
        calulationInputs.editAmountHousingSupportBaqa != ""
      ) {
        var b = calulationInputs.editAmountHousingSupportBaqa;
        if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter <= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else {
          var precentBefore = Math.min(55, precentBeforeEdit1);
          var precentAfter = Math.min(55, precentAfterEdit1);
        }
      } else if (
        calulationInputs.netSalary >= 10000 &&
        calulationInputs.housingSupport == "baqa"
      ) {
        var b = 100000;
        if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter <= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else {
          var precentBefore = Math.min(55, precentBeforeEdit1);
          var precentAfter = Math.min(55, precentAfterEdit1);
        }
      } else if (
        calulationInputs.netSalary < 10000 &&
        calulationInputs.housingSupport == "baqa" &&
        calulationInputs.editAmountHousingSupportBaqa != ""
      ) {
        var b = calulationInputs.editAmountHousingSupportBaqa;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        var precentAfter = Math.min(55, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary < 10000 &&
        calulationInputs.housingSupport == "baqa"
      ) {
        var b = 150000;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        var precentAfter = Math.min(55, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 15000 &&
        salaryAfter >= 15000 &&
        calulationInputs.housingSupport == "no"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 15000 &&
        salaryAfter < 15000 &&
        calulationInputs.housingSupport == "no"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(55, precentAfterEdit1);
      } else {
        var b = 0;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        var precentAfter = Math.min(55, precentAfterEdit1);
      }

      if (calulationInputs.editPercentageFirst != "") {
        var prcent1 =
          (precentBefore - calulationInputs.editPercentageFirst) / 100;
      } else {
        var prcent1 = 0;
      }

      //التمويل الشخصي اولا حساب القسط
      if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.editPersonalInstallment != ""
      ) {
        var personInstallment = 1 * calulationInputs.editPersonalInstallment;
      } else if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.job == array2.at(0) &&
        calulationInputs.editPersonalInstallment == ""
      ) {
        var personInstallment = 0.25 * calulationInputs.netSalary;
      } else if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.job != array2.at(0) &&
        calulationInputs.editPersonalInstallment == ""
      ) {
        var personInstallment = 0.33 * calulationInputs.netSalary;
      } else {
        var personInstallment = 0;
      }

      //التمويل الشخصي ثانيا حساب المدة
      if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.netSalary != 0 &&
        calulationInputs.editDurationPersonal == ""
      ) {
        var durationPerson = Math.min(60, durationBefore); //بالشهر
      } else if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.netSalary != 0 &&
        calulationInputs.editDurationPersonal != ""
      ) {
        var durationPerson = Math.min(
          60,
          durationBefore,
          calulationInputs.editDurationPersonal
        );
      } else {
        var durationPerson = 0;
      }

      //التمويل الشخصي ثالثا حساب مبلغ التمويل

      //نسب الفوائد
      if (calculation.job == "مدني" || calulationInputs.job == "متقاعد") {
        var prcentPrsonaFinal = 5;
      } else if (calulationInputs.job == "خاص") {
        var prcentPrsonaFinal = 5 + 0.6;
      } else {
        var prcentPrsonaFinal = 5 + 0.75;
      }

      if (calulationInputs.netSalary == 0) {
        var profitadd = 0;
      } else if (calulationInputs.editProfitRatePersonal != "") {
        var profitadd = calulationInputs.editProfitRatePersonal * 1;
      } else {
        var profitadd = prcentPrsonaFinal;
      }

      if (calulationInputs.newPersonalFinance == "yesNewPrsonal") {
        var PersonalFinance =
          (personInstallment * durationPerson) /
          (1 + 0.01 * profitadd * (durationPerson / 12));
        // التمويل الشخصي رابعا حساب فوائد الشخصي
        var profitPersonalFinance =
          personInstallment * durationPerson - PersonalFinance;
      } else {
        var PersonalFinance = 0;
        var profitPersonalFinance = 0;
      }

      //مبلغ الالتزامات الحاليه
      var liabilities =
        1 * calulationInputs.installment1 * calulationInputs.duration1 +
        1 * calulationInputs.installment2 * calulationInputs.duration2 +
        1 * calulationInputs.installment3 * calulationInputs.duration3 +
        1 * calulationInputs.installment4 * calulationInputs.duration4 +
        PersonalFinance +
        profitPersonalFinance;
      var sl5 = personInstallment;

      // التمويل العقاري
      // التمويل العقاري اولا حساب القسط الحقيقي
      var installment =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupport)) /
          100 -
        1 * calulationInputs.installment1 -
        1 * calulationInputs.installment2 -
        1 * calulationInputs.installment3 -
        1 * calulationInputs.installment4 -
        sl5;
      var installmentBefore =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupport)) /
        100;

      if (calulationInputs.financingType == "normal") {
        var installmentAfter = 0;
      } else if (
        calulationInputs.financingType == "afterRetirement" &&
        maxxDurationBefore == 0
      ) {
        var installmentAfter = 0;
      } else if (
        calulationInputs.financingType == "afterRetirement" &&
        calulationInputs.job == "متقاعد"
      ) {
        var installmentAfter = 0;
      } else {
        var installmentAfter = (precentAfter * (1 * salaryAfter + 0)) / 100;
      }

      //التمويل العقاري ثانيا حساب القسط الوهمي
      var installmentNotReal =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupportNotReal)) /
        100;
      var installmentBeforeNotReal =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupportNotReal)) /
        100;
      var installmentAfterNotReal =
        (precentAfter * (1 * salaryAfter + 1 * 0)) / 100;

      // التمويل العقاري ثالثا حساب مبلغ التمويل

      var totalRealEstateFinance =
        installmentBeforeNotReal * maxxDurationBefore +
        installmentAfterNotReal * maxxDurationAfter -
        liabilities -
        prcent1 *
          1 *
          calulationInputs.netSalary *
          Math.max(
            calulationInputs.duration1,
            calulationInputs.duration2,
            calulationInputs.duration3,
            calulationInputs.duration4,
            durationPerson
          );
      var netRealEstateFinance =
        totalRealEstateFinance /
        (1 + profitRatioRealEstates * 0.01 * (totalDuration / 12));

      var xxxx = 1 * prcent1 * 1 * calulationInputs.netSalary;
      //التمويل العقاري خامسا حساب فوائد للتمويل
      var totalProfitEstateFinance =
        totalRealEstateFinance - netRealEstateFinance;
      var netProfitEstateFinance =
        totalProfitEstateFinance -
        housingSupport * Math.min(240, totalDuration);

      // التمويل العقاري سادسا حساب  اجمالي المده للتمويل
      var total = netRealEstateFinance + PersonalFinance + b;

      if (calulationInputs.housingSupport == "baqa") {
        var outNameHosingSuppory = "باقة الدعم";
        var amountHousingSupport = b;
      } else if (calulationInputs.housingSupport == "no") {
        var outNameHosingSuppory = "الدعم السكني";
        var amountHousingSupport = 0;
      } else {
        var outNameHosingSuppory = "قسط الدعم";
        var amountHousingSupport = housingSupport;
      }

      if (calulationInputs.firstHouse === "yes") {
        if (calulationInputs.downPayment === "10") {
          var netT = total / 0.9;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "5") {
          var netT = total / 0.95;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "20") {
          var netT = total / 0.8;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else {
          var netT = total / 0.7;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        }
      } else {
        if (calulationInputs.downPayment === "10") {
          var netT = total / 0.9;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "5") {
          var netT = total / 0.95;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "20") {
          var netT = total / 0.8;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else {
          var netT = calulationOutputs.total / 0.7;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        }
      }

      var phoneToWattap =
        "https://api.whatsapp.com/send?phone=" + calulationInputs.phone;
      setCalulationOutputs({
        ...calulationOutputs,
        age: ageClint,
        work: durationWork,

        durationBeforeRetirement: maxxDurationBefore.toFixed(0),
        durationAfterRetirement: maxxDurationAfter.toFixed(0),
        totalDuration: totalDurationUP.toFixed(2),

        profitRateRealEstate: profitRatioRealEstates12,
        salaryAfterRetirement: new Intl.NumberFormat().format(
          salaryAfter.toFixed(0)
        ),
        percentageBeforeRetirement: precentBefore.toFixed(2),
        percentageAfterRetirement: precentAfter.toFixed(2),

        profitRatePersonal: profitadd,
        personalFinance: new Intl.NumberFormat().format(
          PersonalFinance.toFixed(0)
        ),
        profitPersonal: new Intl.NumberFormat().format(
          profitPersonalFinance.toFixed(0)
        ),
        amountHousingSupport: new Intl.NumberFormat().format(
          amountHousingSupport
        ),

        realEstateFinance: new Intl.NumberFormat().format(
          netRealEstateFinance.toFixed(0)
        ),
        total: new Intl.NumberFormat().format(total),
        firstInstallment: new Intl.NumberFormat().format(
          (installment - xxxx).toFixed(0)
        ),
        installmentBeforeRetirement: new Intl.NumberFormat().format(
          installmentBefore.toFixed(0)
        ),
        installmentAfterRetirement: new Intl.NumberFormat().format(
          installmentAfter.toFixed(0)
        ),
        totalProfit: new Intl.NumberFormat().format(
          totalProfitEstateFinance.toFixed(0)
        ),
        netProfit: new Intl.NumberFormat().format(
          netProfitEstateFinance.toFixed(0)
        ),

        netNet1: new Intl.NumberFormat().format(netNet.toFixed(0)),

        installmentPersonal: new Intl.NumberFormat().format(
          personInstallment.toFixed(0)
        ),
        durationPersonal: durationPerson,
        //تغير الكتابه

        nameAmountHousingSupport: outNameHosingSuppory,
        phoneOut: phoneToWattap,
      });

      //==================بدايه ساب =========================//
    } else if (calulationInputs.realEstateBank === "sab") {
      //  مصفوفه الدعم ع حسب الراتب
      var arrayHousingSupportSalary = [
        3999, 4999, 5999, 6999, 7999, 8999, 9999, 10000, 10001,
      ];
      var arrayHousingSupport = [
        1350, 1206, 1073, 955, 850, 757, 673, 599, 416,
      ];

      //حساب قسط الدعم
      if (
        calulationInputs.netSalary == 0 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var housingSupport = 0;
      } else if (
        calulationInputs.netSalary != 0 &&
        calulationInputs.housingSupport == "monthly" &&
        calulationInputs.editAmountHousingSupport != ""
      ) {
        housingSupport = calulationInputs.editAmountHousingSupport;
      } else if (
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(0) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(0);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(0) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(1) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(1);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(1) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(2) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(2);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(2) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(3) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(3);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(3) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(4) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(4);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(4) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(5) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(5);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(5) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(6) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(6);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(6) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(7) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(7);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(8) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(8);
      } else {
        housingSupport = 0;
      }

      //حساب العمر و مده الخدمة
      var monthWork =
        calulationInputs.currentMonth - calulationInputs.startWorkMonth;
      var yearWork =
        calulationInputs.currentYear - calulationInputs.startWorkYear;
      var durationWork = ((monthWork + yearWork * 12) / 12).toFixed(2);
      var monthClint =
        calulationInputs.currentMonth - calulationInputs.birthMonth;
      var yearClint = calulationInputs.currentYear - calulationInputs.birthYear;
      var ageClint = ((monthClint + yearClint * 12) / 12).toFixed(2);

      //الاعمار التقاعديه
      var array1 = [77, 60, 60, 44, 46, 48, 50, 52, 44, 46, 48, 50, 52];
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
      var array3 = [0, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77];
      var numberJob = array2.indexOf(calulationInputs.job);
      var ageBeforeRetirement = array1.at(numberJob);

      //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
      if (calulationInputs.financingType == "normal") {
        var agePercentageAfterRetirement = 0;
      } else {
        agePercentageAfterRetirement = array3.at(numberJob);
      }

      //اقصي مده للتمويل مدعوم وغير مدعوم وباقه
      if (calulationInputs.housingSupport == "monthly") {
        var maxDuration = 240;
      } else if (calulationInputs.housingSupport == "baqa") {
        var maxDuration = 300;
      } else {
        maxDuration = 360;
      }
      // حساب المده المتبقيه الي التقاعد الفعلي
      var durationBefore = (ageBeforeRetirement - ageClint) * 12;
      if (calulationInputs.netSalary == 0) {
        var maxxDurationBefore = 0;
      } else if (calulationInputs.editTotalDuration == "") {
        maxxDurationBefore = Math.min(durationBefore, maxDuration);
      } else {
        maxxDurationBefore = Math.min(
          calulationInputs.editTotalDuration,
          durationBefore,
          maxDuration
        );
      }

      //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
      if (calulationInputs.financingType == "normal") {
        var durationAfter = 0;
      } else {
        durationAfter =
          (agePercentageAfterRetirement - ageBeforeRetirement) * 12;
      }

      //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
      if (
        (calulationInputs.financingType == "afterRetirement" &&
          calulationInputs.job == "متقاعد") ||
        calulationInputs.netSalary == 0
      ) {
        var maxxDurationAfter = 0;
      } else if (calulationInputs.editTotalDuration == "") {
        var maxxDurationAfter = Math.min(
          durationAfter,
          maxDuration - maxxDurationBefore
        );
      } else {
        var maxxDurationAfter = Math.min(
          durationAfter,
          maxDuration - maxxDurationBefore,
          calulationInputs.editTotalDuration - maxxDurationBefore
        );
      }

      //اجمالي مده التمويل
      var totalDuration = maxxDurationAfter + maxxDurationBefore;

      //مصفوفه نسب الفوائد اولا المدعوم
      var durationRealEstates = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25,
      ]; // المده بالسنوات
      var arr1 = [
        3.45, 3.45, 3.45, 3.45, 3.45, 3.45, 3.45, 3.45, 3.55, 3.55, 3.6, 3.6,
        3.65, 3.65, 3.75, 3.75, 3.79, 3.95, 3.98, 4.01, 4.04, 4.06,
      ]; //نسب الفوائد للمدعوم

      //مصفوفه نسب الفوائد ثانيا غير المدعوم
      var durationRealEstates2 = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25, 26, 27, 28, 29, 30,
      ];
      var arr2 = [
        3.45, 3.45, 3.45, 3.45, 3.45, 3.45, 3.45, 3.45, 3.55, 3.55, 3.6, 3.6,
        3.65, 3.65, 3.75, 3.75, 3.79, 3.95, 3.98, 4.01, 4.04, 4.06, 4.12, 4.16,
        4.19, 4.23, 4.26,
      ]; // الغير مدعوم راتب اقل من 10 الف
      var arr3 = [
        3.45, 3.45, 3.45, 3.45, 3.45, 3.45, 3.45, 3.45, 3.55, 3.55, 3.6, 3.6,
        3.65, 3.65, 3.75, 3.75, 3.79, 3.95, 3.98, 4.01, 4.04, 4.06, 4.12, 4.16,
        4.19, 4.23, 4.26,
      ]; //الغير مدعوم راتب فوق 10 الف

      // تقريب مده التمويل الي الاعلي سنه
      var totalDurationUP = Math.floor(totalDuration / 12);

      var vl = durationRealEstates.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates1 = arr1.at(vl); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      var v2 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates2 = arr2.at(v2); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      var v3 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates3 = arr3.at(v3); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      var profitRatioRealEstates = profitRatioRealEstates3;

      if (calulationInputs.netSalary == 0) {
        var profitRatioRealEstates = 0;
      } else if (calulationInputs.editProfitRateRealEstate != "") {
        var profitRatioRealEstates = calulationInputs.editProfitRateRealEstate;
      } else if (calulationInputs.housingSupport == "monthly") {
        var profitRatioRealEstates = profitRatioRealEstates1;
      } else if (calulationInputs.housingSupport == "baqa") {
        var profitRatioRealEstates = profitRatioRealEstates1;
      } else {
        var profitRatioRealEstates = profitRatioRealEstates3;
      }

      var profitRatioRealEstates1 = profitRatioRealEstates;

      //   حساب مبلغ قسط الدعم اللي مش حقيقي  لتعديل مبلغ التمويل العقاري
      if (housingSupport == 0) {
        var housingSupportNotReal = 0;
      } else if (totalDuration <= 240) {
        var housingSupportNotReal = housingSupport;
      } else if (totalDuration > 240) {
        var housingSupportNotReal = (housingSupport * 240) / totalDuration;
      } else {
        var housingSupportNotReal = 0;
      }

      //حساب الراتب التقاعدي
      if (calulationInputs.job == array2.at(1)) {
        var salaryAfter =
          (1 *
            calulationInputs.basicSalary *
            (12 * durationWork + durationBefore)) /
          480;
      } else if (calulationInputs.job == array2.at(2)) {
        var salaryAfter =
          (1 *
            calulationInputs.basicSalary *
            (1 * calulationInputs.durationIn + durationBefore)) /
          480;
      } else if (calulationInputs.job == array2.at(0)) {
        var salaryAfter = 0;
      } else {
        var salaryAfter =
          (1 *
            calulationInputs.basicSalary *
            (12 * durationWork + durationBefore)) /
          420;
      }

      // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد
      if (calulationInputs.editPercentageBeforeRetirement == "") {
        var precentBeforeEdit1 = 100;
      } else {
        var precentBeforeEdit1 =
          calulationInputs.editPercentageBeforeRetirement;
      }

      // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات بعد التقاعد
      if (calulationInputs.editPercentageAfterRetirement == "") {
        var precentAfterEdit1 = 100;
      } else {
        var precentAfterEdit1 = calulationInputs.editPercentageAfterRetirement;
      }

      //اقص نسبه استقطاع قبل و بعد التقاعد للمدعوم و غير المدعوم و ايضا قيمه الباقه
      if (calulationInputs.netSalary == 0) {
        var b = 0;
        var precentBefore = 0;
        var precentAfter = 0;
      } else if (
        calulationInputs.netSalary == 0 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary != 0 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.housingSupport == "baqa" &&
        calulationInputs.editAmountHousingSupportBaqa != ""
      ) {
        var b = calulationInputs.editAmountHousingSupportBaqa;
        if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter <= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(55, precentAfterEdit1);
        } else {
          var precentBefore = Math.min(55, precentBeforeEdit1);
          var precentAfter = Math.min(55, precentAfterEdit1);
        }
      } else if (
        calulationInputs.netSalary >= 10000 &&
        calulationInputs.housingSupport == "baqa"
      ) {
        var b = 100000;
        if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter <= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(55, precentAfterEdit1);
        } else {
          var precentBefore = Math.min(55, precentBeforeEdit1);
          var precentAfter = Math.min(55, precentAfterEdit1);
        }
      } else if (
        calulationInputs.netSalary < 10000 &&
        calulationInputs.housingSupport == "baqa" &&
        calulationInputs.editAmountHousingSupportBaqa != ""
      ) {
        var b = calulationInputs.editAmountHousingSupportBaqa;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        var precentAfter = Math.min(55, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary < 10000 &&
        calulationInputs.housingSupport == "baqa"
      ) {
        var b = 150000;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        var precentAfter = Math.min(55, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 15000 &&
        salaryAfter >= 15000 &&
        calulationInputs.housingSupport == "no"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 15000 &&
        salaryAfter < 15000 &&
        calulationInputs.housingSupport == "no"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(55, precentAfterEdit1);
      } else {
        var b = 0;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        var precentAfter = Math.min(55, precentAfterEdit1);
      }

      if (calulationInputs.editPercentageFirst != "") {
        var prcent1 =
          (precentBefore - calulationInputs.editPercentageFirst) / 100;
      } else {
        var prcent1 = 0;
      }

      //التمويل الشخصي اولا حساب القسط
      if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.editPersonalInstallment != ""
      ) {
        var personInstallment = 1 * calulationInputs.editPersonalInstallment;
      } else if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.job == array2.at(0) &&
        calulationInputs.editPersonalInstallment == ""
      ) {
        var personInstallment = 0.25 * calulationInputs.netSalary;
      } else if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.job != array2.at(0) &&
        calulationInputs.editPersonalInstallment == ""
      ) {
        var personInstallment = 0.33 * calulationInputs.netSalary;
      } else {
        var personInstallment = 0;
      }
      //التمويل الشخصي ثانيا حساب المدة
      if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.netSalary != 0 &&
        calulationInputs.editDurationPersonal == ""
      ) {
        var durationPerson = Math.min(60, durationBefore); //بالشهر
      } else if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.netSalary != 0 &&
        calulationInputs.editDurationPersonal != ""
      ) {
        var durationPerson = Math.min(
          60,
          durationBefore,
          calulationInputs.editDurationPersonal
        );
      } else {
        var durationPerson = 0;
      }

      //التمويل الشخصي ثالثا حساب مبلغ التمويل

      //نسب الفوائد
      if (calculation.job == "مدني" || calulationInputs.job == "متقاعد") {
        var prcentPrsonaFinal = 5;
      } else if (calulationInputs.job == "خاص") {
        var prcentPrsonaFinal = 5 + 0.6;
      } else {
        var prcentPrsonaFinal = 5 + 0.75;
      }

      if (calulationInputs.netSalary == 0) {
        var profitadd = 0;
      } else if (calulationInputs.editProfitRatePersonal != "") {
        var profitadd = calulationInputs.editProfitRatePersonal * 1;
      } else {
        var profitadd = prcentPrsonaFinal;
      }

      if (calulationInputs.newPersonalFinance == "yesNewPrsonal") {
        var PersonalFinance =
          (personInstallment * durationPerson) /
          (1 + 0.01 * profitadd * (durationPerson / 12));
        // التمويل الشخصي رابعا حساب فوائد الشخصي
        var profitPersonalFinance =
          personInstallment * durationPerson - PersonalFinance;
      } else {
        var PersonalFinance = 0;
        var profitPersonalFinance = 0;
      }

      //مبلغ الالتزامات الحاليه
      if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" ||
        calulationInputs.currentBank != "sab"
      ) {
        var liabilities =
          totalDuration *
            (1 * calulationInputs.installment1 +
              1 * calulationInputs.installment2 +
              1 * calulationInputs.installment3 +
              1 * calulationInputs.installment4) +
          PersonalFinance +
          profitPersonalFinance;
        var sl5 = personInstallment;
      } else {
        var liabilities =
          1 * calulationInputs.installment1 * calulationInputs.duration1 +
          totalDuration *
            (1 * calulationInputs.installment2 +
              1 * calulationInputs.installment3 +
              1 * calulationInputs.installment4);
        var sl5 = 0;
      }
      // التمويل العقاري
      // التمويل العقاري اولا حساب القسط الحقيقي

      if (calulationInputs.newPersonalFinance == "yesNewPrsonal") {
        var zxx =
          1 * calulationInputs.installment1 +
          1 * calulationInputs.installment2 +
          1 * calulationInputs.installment3 +
          1 * calulationInputs.installment4;
      } else {
        var zxx =
          1 * calulationInputs.installment2 +
          1 * calulationInputs.installment3 +
          1 * calulationInputs.installment4;
        var sl5 = 0;
      }

      //التمويل العقاري ثانيا حساب القسط الوهمي

      var installment =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupport)) /
          100 -
        1 * calulationInputs.installment1 -
        1 * calulationInputs.installment2 -
        1 * calulationInputs.installment3 -
        1 * calulationInputs.installment4 -
        sl5;
      var installmentBefore =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupport)) /
          100 -
        zxx;

      if (calulationInputs.financingType == "normal") {
        var installmentAfter = 0;
      } else if (
        calulationInputs.financingType == "afterRetirement" &&
        maxxDurationBefore == 0
      ) {
        var installmentAfter = 0;
      } else if (
        calulationInputs.financingType == "afterRetirement" &&
        calulationInputs.job == "متقاعد"
      ) {
        var installmentAfter = 0;
      } else {
        var installmentAfter =
          (precentAfter * (1 * salaryAfter + 1 * housingSupport)) / 100 - zxx;
      }

      //التمويل العقاري ثانيا حساب القسط الوهمي
      var installmentNotReal =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupportNotReal)) /
        100;
      var installmentBeforeNotReal =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupportNotReal)) /
        100;
      var installmentAfterNotReal =
        (precentAfter * (1 * salaryAfter + 1 * housingSupportNotReal)) / 100;
      // التمويل العقاري ثالثا حساب مبلغ التمويل
      if (
        calulationInputs.typeException == "exception" &&
        calulationInputs.netSalary < 15000
      ) {
        var totalRealEstateFinance =
          installmentBeforeNotReal * maxxDurationBefore +
          installmentAfterNotReal * maxxDurationAfter -
          liabilities -
          prcent1 *
            1 *
            calulationInputs.netSalary *
            Math.max(
              calulationInputs.duration1,
              calulationInputs.duration2,
              calulationInputs.duration3,
              calulationInputs.duration4,
              durationPerson
            );
        var netRealEstateFinance =
          totalRealEstateFinance /
          (1 + (profitRatioRealEstates - 0.2) * 0.01 * (totalDuration / 12));
      } else if (
        calulationInputs.typeException == "exception" &&
        calulationInputs.netSalary > 15000
      ) {
        var totalRealEstateFinance =
          installmentBeforeNotReal * maxxDurationBefore +
          installmentAfterNotReal * maxxDurationAfter -
          liabilities -
          prcent1 *
            1 *
            calulationInputs.netSalary *
            Math.max(
              calulationInputs.duration1,
              calulationInputs.duration2,
              calulationInputs.duration3,
              calulationInputs.duration4,
              durationPerson
            );
        var netRealEstateFinance =
          totalRealEstateFinance /
          (1 + (profitRatioRealEstates - 0.4) * 0.01 * (totalDuration / 12));
      } else {
        var totalRealEstateFinance =
          installmentBeforeNotReal * maxxDurationBefore +
          installmentAfterNotReal * maxxDurationAfter -
          liabilities -
          prcent1 *
            1 *
            calulationInputs.netSalary *
            Math.max(
              calulationInputs.duration1,
              calulationInputs.duration2,
              calulationInputs.duration3,
              calulationInputs.duration4,
              durationPerson
            );
        var netRealEstateFinance =
          totalRealEstateFinance /
          (1 + profitRatioRealEstates * 0.01 * (totalDuration / 12));
      }

      var xxxx = 1 * prcent1 * 1 * calulationInputs.netSalary;
      //التمويل العقاري خامسا حساب فوائد للتمويل
      var totalProfitEstateFinance =
        totalRealEstateFinance - netRealEstateFinance;
      var netProfitEstateFinance =
        totalProfitEstateFinance -
        housingSupport * Math.min(240, totalDuration);

      // التمويل العقاري سادسا حساب  اجمالي المده للتمويل
      var total = netRealEstateFinance + PersonalFinance + b;

      if (calulationInputs.housingSupport == "baqa") {
        var outNameHosingSuppory = "باقة الدعم";
        var amountHousingSupport = b;
      } else if (calulationInputs.housingSupport == "no") {
        var outNameHosingSuppory = "الدعم السكني";
        var amountHousingSupport = 0;
      } else {
        var outNameHosingSuppory = "قسط الدعم";
        var amountHousingSupport = housingSupport;
      }

      if (calulationInputs.firstHouse === "yes") {
        if (calulationInputs.downPayment === "10") {
          var netT = total / 0.9;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "5") {
          var netT = total / 0.95;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "20") {
          var netT = total / 0.8;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else {
          var netT = total / 0.7;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        }
      } else {
        if (calulationInputs.downPayment === "10") {
          var netT = total / 0.9;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "5") {
          var netT = total / 0.95;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "20") {
          var netT = total / 0.8;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else {
          var netT = calulationOutputs.total / 0.7;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        }
      }

      var phoneToWattap =
        "https://api.whatsapp.com/send?phone=" + calulationInputs.phone;
      setCalulationOutputs({
        ...calulationOutputs,
        age: ageClint,
        work: durationWork,

        durationBeforeRetirement: maxxDurationBefore.toFixed(0),
        durationAfterRetirement: maxxDurationAfter.toFixed(0),
        totalDuration: totalDurationUP.toFixed(2),

        profitRateRealEstate: profitRatioRealEstates1,
        salaryAfterRetirement: new Intl.NumberFormat().format(
          salaryAfter.toFixed(0)
        ),
        percentageBeforeRetirement: precentBefore.toFixed(2),
        percentageAfterRetirement: precentAfter.toFixed(2),

        profitRatePersonal: profitadd,
        personalFinance: new Intl.NumberFormat().format(
          PersonalFinance.toFixed(0)
        ),
        profitPersonal: new Intl.NumberFormat().format(
          profitPersonalFinance.toFixed(0)
        ),
        amountHousingSupport: new Intl.NumberFormat().format(
          amountHousingSupport
        ),

        realEstateFinance: new Intl.NumberFormat().format(
          netRealEstateFinance.toFixed(0)
        ),
        total: new Intl.NumberFormat().format(total),
        firstInstallment: new Intl.NumberFormat().format(
          (installment - xxxx).toFixed(0)
        ),

        installmentBeforeRetirement: new Intl.NumberFormat().format(
          installmentBefore.toFixed(0)
        ),
        installmentAfterRetirement: new Intl.NumberFormat().format(
          installmentAfter.toFixed(0)
        ),
        totalProfit: new Intl.NumberFormat().format(
          totalProfitEstateFinance.toFixed(0)
        ),
        netProfit: new Intl.NumberFormat().format(
          netProfitEstateFinance.toFixed(0)
        ),

        netNet1: new Intl.NumberFormat().format(netNet.toFixed(0)),

        installmentPersonal: new Intl.NumberFormat().format(
          personInstallment.toFixed(0)
        ),
        durationPersonal: durationPerson,
        //تغير الكتابه

        nameAmountHousingSupport: outNameHosingSuppory,
        phoneOut: phoneToWattap,
      });

      //==================بدايه الانماء =========================//
    } else if (calulationInputs.realEstateBank === "alinma") {
      //  مصفوفه الدعم ع حسب الراتب
      var arrayHousingSupportSalary = [
        3999, 4999, 5999, 6999, 7999, 8999, 9999, 10000, 10001,
      ];
      var arrayHousingSupport = [
        1350, 1206, 1073, 955, 850, 757, 673, 599, 416,
      ];

      //حساب قسط الدعم
      if (
        calulationInputs.netSalary == 0 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var housingSupport = 0;
      } else if (
        calulationInputs.netSalary != 0 &&
        calulationInputs.housingSupport == "monthly" &&
        calulationInputs.editAmountHousingSupport != ""
      ) {
        housingSupport = calulationInputs.editAmountHousingSupport;
      } else if (
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(0) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(0);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(0) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(1) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(1);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(1) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(2) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(2);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(2) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(3) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(3);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(3) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(4) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(4);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(4) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(5) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(5);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(5) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(6) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(6);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(6) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(7) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(7);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(8) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(8);
      } else {
        housingSupport = 0;
      }

      //حساب العمر و مده الخدمة
      var monthWork =
        calulationInputs.currentMonth - calulationInputs.startWorkMonth;
      var yearWork =
        calulationInputs.currentYear - calulationInputs.startWorkYear;
      var durationWork = ((monthWork + yearWork * 12) / 12).toFixed(2);
      var monthClint =
        calulationInputs.currentMonth - calulationInputs.birthMonth;
      var yearClint = calulationInputs.currentYear - calulationInputs.birthYear;
      var ageClint = ((monthClint + yearClint * 12) / 12).toFixed(2);

      //الاعمار التقاعديه
      var array1 = [75, 60, 60, 44, 46, 48, 50, 52, 44, 46, 48, 50, 52];
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
      var array3 = [0, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75];
      var numberJob = array2.indexOf(calulationInputs.job);
      var ageBeforeRetirement = array1.at(numberJob);

      //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
      if (calulationInputs.financingType == "normal") {
        var agePercentageAfterRetirement = 0;
      } else {
        agePercentageAfterRetirement = array3.at(numberJob);
      }

      //اقصي مده للتمويل مدعوم وغير مدعوم وباقه
      if (
        calulationInputs.housingSupport == "monthly" ||
        calulationInputs.housingSupport == "baqa"
      ) {
        var maxDuration = 300;
      } else {
        maxDuration = 300;
      }
      // حساب المده المتبقيه الي التقاعد الفعلي
      var durationBefore = (ageBeforeRetirement - ageClint) * 12;
      if (calulationInputs.netSalary == 0) {
        var maxxDurationBefore = 0;
      } else if (calulationInputs.editTotalDuration == "") {
        maxxDurationBefore = Math.min(durationBefore, maxDuration);
      } else {
        maxxDurationBefore = Math.min(
          calulationInputs.editTotalDuration,
          durationBefore,
          maxDuration
        );
      }

      //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
      if (calulationInputs.financingType == "normal") {
        var durationAfter = 0;
      } else {
        durationAfter =
          (agePercentageAfterRetirement - ageBeforeRetirement) * 12;
      }

      //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
      if (
        (calulationInputs.financingType == "afterRetirement" &&
          calulationInputs.job == "متقاعد") ||
        calulationInputs.netSalary == 0
      ) {
        var maxxDurationAfter = 0;
      } else if (calulationInputs.editTotalDuration == "") {
        var maxxDurationAfter = Math.min(
          durationAfter,
          maxDuration - maxxDurationBefore
        );
      } else {
        var maxxDurationAfter = Math.min(
          durationAfter,
          maxDuration - maxxDurationBefore,
          calulationInputs.editTotalDuration - maxxDurationBefore
        );
      }

      //اجمالي مده التمويل
      var totalDuration = maxxDurationAfter + maxxDurationBefore;

      //مصفوفه نسب الفوائد اولا المدعوم
      var durationRealEstates = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25,
      ]; // المده بالسنوات
      var arr1 = [
        2.99, 2.99, 2.99, 2.99, 2.99, 2.99, 3.52, 3.71, 3.71, 3.71, 3.71, 3.71,
        3.99, 3.99, 3.99, 3.99, 3.99, 3.99, 3.99, 3.99, 3.99, 3.99,
      ]; //نسب الفوائد للمدعوم

      //مصفوفه نسب الفوائد ثانيا غير المدعوم
      var durationRealEstates2 = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25,
      ];
      var arr2 = [
        2.99, 2.99, 2.99, 2.99, 2.99, 2.99, 3.52, 3.71, 3.71, 3.71, 3.71, 3.71,
        3.99, 3.99, 3.99, 3.99, 3.99, 3.99, 3.99, 3.99, 3.99, 3.99,
      ];

      // الغير مدعوم
      var arr4 = [
        2.99, 2.99, 2.99, 2.99, 2.99, 2.99, 3.52, 3.71, 3.71, 3.71, 3.71, 3.71,
        3.99, 3.99, 3.99, 3.99, 3.99, 3.99, 3.99, 3.99, 3.99, 3.99,
      ]; //a b c d  الغير مدعوم
      var arr5 = [
        4.85, 4.85, 4.85, 4.85, 4.85, 4.85, 4.85, 4.9, 4.95, 5.0, 5.05, 5.1,
        5.15, 5.2, 5.25, 5.35, 5.65, 5.7, 5.85, 6.0, 6.15, 6.3,
      ];
      //غير معتمد  الغير مدعوم
      // تقريب مده التمويل الي الاعلي سنه
      var totalDurationUP = Math.floor(totalDuration / 12);

      //حساب نسبه الفوائد
      var vl = durationRealEstates.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates1 = arr1.at(vl); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      var v2 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates2 = arr2.at(v2); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      var v4 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates4 = arr4.at(v4); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      var v5 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates5 = arr5.at(v5); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      if (calulationInputs.netSalary == 0) {
        var profitRatioRealEstates = 0;
      } else if (calulationInputs.editProfitRateRealEstate != "") {
        var profitRatioRealEstates = calulationInputs.editProfitRateRealEstate;
      } else if (
        calulationInputs.housingSupport == "monthly" ||
        calulationInputs.housingSupport == "baqa"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates1;
      } else if (
        calulationInputs.privateSectorEmployee == "معتمد" &&
        calulationInputs.housingSupport == "no" &&
        calulationInputs.job == "خاص"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates4;
      } else if (
        calulationInputs.privateSectorEmployee == "غير معتمد" &&
        calulationInputs.housingSupport == "no" &&
        calulationInputs.job == "خاص"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates5;
      } else {
        var profitRatioRealEstates = profitRatioRealEstates2;
      }

      var profitRatioRealEstatesF = profitRatioRealEstates;

      //   حساب مبلغ قسط الدعم اللي مش حقيقي  لتعديل مبلغ التمويل العقاري
      if (housingSupport == 0) {
        var housingSupportNotReal = 0;
      } else if (totalDuration <= 240) {
        var housingSupportNotReal = housingSupport;
      } else if (totalDuration > 240) {
        var housingSupportNotReal = (housingSupport * 240) / totalDuration;
      } else {
        var housingSupportNotReal = 0;
      }

      //حساب الراتب التقاعدي

      if (calulationInputs.job == array2.at(1) && ageClint < 51) {
        var salaryAfter = 1 * calulationInputs.netSalary;
      } else if (calulationInputs.job == array2.at(1)) {
        var salaryAfter =
          (1 *
            calulationInputs.basicSalary *
            (12 * durationWork + durationBefore)) /
          480;
      } else if (calulationInputs.job == array2.at(2)) {
        var salaryAfter =
          (1 *
            calulationInputs.basicSalary *
            (1 * calulationInputs.durationIn + durationBefore)) /
          480;
      } else if (calulationInputs.job == array2.at(0)) {
        var salaryAfter = 0;
      } else {
        var salaryAfter =
          (1 *
            calulationInputs.basicSalary *
            (12 * durationWork + durationBefore)) /
          420;
      }

      // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد
      if (calulationInputs.editPercentageBeforeRetirement == "") {
        var precentBeforeEdit1 = 100;
      } else {
        var precentBeforeEdit1 =
          calulationInputs.editPercentageBeforeRetirement;
      }

      // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات بعد التقاعد
      if (calulationInputs.editPercentageAfterRetirement == "") {
        var precentAfterEdit1 = 100;
      } else {
        var precentAfterEdit1 = calulationInputs.editPercentageAfterRetirement;
      }

      //اقص نسبه استقطاع قبل و بعد التقاعد للمدعوم و غير المدعوم و ايضا قيمه الباقه
      if (calulationInputs.netSalary == 0) {
        var b = 0;
        var precentBefore = 0;
        var precentAfter = 0;
      } else if (
        calulationInputs.netSalary == 0 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary != 0 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.housingSupport == "baqa" &&
        calulationInputs.editAmountHousingSupportBaqa != ""
      ) {
        var b = calulationInputs.editAmountHousingSupportBaqa;
        if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter <= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else {
          var precentBefore = Math.min(55, precentBeforeEdit1);
          var precentAfter = Math.min(55, precentAfterEdit1);
        }
      } else if (
        calulationInputs.netSalary >= 10000 &&
        calulationInputs.housingSupport == "baqa"
      ) {
        var b = 100000;
        if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter <= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(55, precentAfterEdit1);
        } else {
          var precentBefore = Math.min(55, precentBeforeEdit1);
          var precentAfter = Math.min(55, precentAfterEdit1);
        }
      } else if (
        calulationInputs.netSalary < 10000 &&
        calulationInputs.housingSupport == "baqa" &&
        calulationInputs.editAmountHousingSupportBaqa != ""
      ) {
        var b = calulationInputs.editAmountHousingSupportBaqa;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        var precentAfter = Math.min(55, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary < 10000 &&
        calulationInputs.housingSupport == "baqa"
      ) {
        var b = 150000;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        var precentAfter = Math.min(55, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 15000 &&
        salaryAfter >= 15000 &&
        calulationInputs.housingSupport == "no"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 15000 &&
        salaryAfter < 15000 &&
        calulationInputs.housingSupport == "no"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(55, precentAfterEdit1);
      } else {
        var b = 0;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        var precentAfter = Math.min(55, precentAfterEdit1);
      }

      if (calulationInputs.editPercentageFirst != "") {
        var prcent1 =
          (precentBefore - calulationInputs.editPercentageFirst) / 100;
      } else {
        var prcent1 = 0;
      }

      //التمويل الشخصي اولا حساب القسط
      if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.editPersonalInstallment != ""
      ) {
        var personInstallment = 1 * calulationInputs.editPersonalInstallment;
      } else if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.job == array2.at(0) &&
        calulationInputs.editPersonalInstallment == ""
      ) {
        var personInstallment = 0.25 * calulationInputs.netSalary;
      } else if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.job != array2.at(0) &&
        calulationInputs.editPersonalInstallment == ""
      ) {
        var personInstallment = 0.33 * calulationInputs.netSalary;
      } else {
        var personInstallment = 0;
      }

      //التمويل الشخصي ثانيا حساب المدة
      if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.netSalary != 0 &&
        calulationInputs.editDurationPersonal == ""
      ) {
        var durationPerson = Math.min(60, durationBefore); //بالشهر
      } else if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.netSalary != 0 &&
        calulationInputs.editDurationPersonal != ""
      ) {
        var durationPerson = Math.min(
          60,
          durationBefore,
          calulationInputs.editDurationPersonal
        );
      } else {
        var durationPerson = 0;
      }

      //التمويل الشخصي ثالثا حساب مبلغ التمويل

      //نسب الفوائد
      if (calculation.job == "مدني" || calulationInputs.job == "متقاعد") {
        var prcentPrsonaFinal = 5;
      } else if (calulationInputs.job == "خاص") {
        var prcentPrsonaFinal = 5 + 0.6;
      } else {
        var prcentPrsonaFinal = 5 + 0.75;
      }

      if (calulationInputs.netSalary == 0) {
        var profitadd = 0;
      } else if (calulationInputs.editProfitRatePersonal != "") {
        var profitadd = calulationInputs.editProfitRatePersonal * 1;
      } else {
        var profitadd = prcentPrsonaFinal;
      }

      if (calulationInputs.newPersonalFinance == "yesNewPrsonal") {
        var PersonalFinance =
          (personInstallment * durationPerson) /
          (1 + 0.01 * profitadd * (durationPerson / 12));
        // التمويل الشخصي رابعا حساب فوائد الشخصي
        var profitPersonalFinance =
          personInstallment * durationPerson - PersonalFinance;
      } else {
        var PersonalFinance = 0;
        var profitPersonalFinance = 0;
      }

      //مبلغ الالتزامات الحاليه
      if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" ||
        calulationInputs.currentBank != "alinma"
      ) {
        var liabilities =
          totalDuration *
            (1 * calulationInputs.installment1 +
              1 * calulationInputs.installment2 +
              1 * calulationInputs.installment3 +
              1 * calulationInputs.installment4) +
          PersonalFinance +
          profitPersonalFinance;
        var sl5 = personInstallment;
      } else {
        if (calulationInputs.alinmaPersonal == "yesPrsonal") {
          var liabilities =
            1 * calulationInputs.installment1 * calulationInputs.duration1 +
            totalDuration *
              (1 * calulationInputs.installment2 +
                1 * calulationInputs.installment3 +
                1 * calulationInputs.installment4);
          var sl5 = 0;
        } else {
          var liabilities =
            1 * calulationInputs.installment1 * totalDuration +
            totalDuration *
              (1 * calulationInputs.installment2 +
                1 * calulationInputs.installment3 +
                1 * calulationInputs.installment4);
          var sl5 = 0;
        }
      }
      // التمويل العقاري
      // التمويل العقاري اولا حساب القسط الحقيقي

      if (calulationInputs.newPersonalFinance == "yesNewPrsonal") {
        var zxx =
          1 * calulationInputs.installment1 +
          1 * calulationInputs.installment2 +
          1 * calulationInputs.installment3 +
          1 * calulationInputs.installment4;
      } else {
        var zxx =
          1 * calulationInputs.installment2 +
          1 * calulationInputs.installment3 +
          1 * calulationInputs.installment4;
        var sl5 = 0;
      }

      //التمويل العقاري ثانيا حساب القسط الوهمي

      var installment =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupport)) /
          100 -
        1 * calulationInputs.installment1 -
        1 * calulationInputs.installment2 -
        1 * calulationInputs.installment3 -
        1 * calulationInputs.installment4 -
        sl5;
      var installmentBefore =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupport)) /
        100;

      if (calulationInputs.financingType == "normal") {
        var installmentAfter = 0;
      } else if (
        calulationInputs.financingType == "afterRetirement" &&
        maxxDurationBefore == 0
      ) {
        var installmentAfter = 0;
      } else if (
        calulationInputs.financingType == "afterRetirement" &&
        calulationInputs.job == "متقاعد"
      ) {
        var installmentAfter = 0;
      } else {
        var installmentAfter =
          (precentAfter * (1 * salaryAfter + 1 * housingSupport)) / 100 - zxx;
      }

      //التمويل العقاري ثانيا حساب القسط الوهمي
      var installmentNotReal =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupportNotReal)) /
        100;
      var installmentBeforeNotReal =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupportNotReal)) /
        100;
      var installmentAfterNotReal =
        (precentAfter * (1 * salaryAfter + 1 * housingSupportNotReal)) / 100;

      // التمويل العقاري ثالثا حساب مبلغ التمويل
      if (
        calulationInputs.typeException == "exception" &&
        calulationInputs.netSalary < 15000
      ) {
        var totalRealEstateFinance =
          installmentBeforeNotReal * maxxDurationBefore +
          installmentAfterNotReal * maxxDurationAfter -
          liabilities -
          prcent1 *
            1 *
            calulationInputs.netSalary *
            Math.max(
              calulationInputs.duration1,
              calulationInputs.duration2,
              calulationInputs.duration3,
              calulationInputs.duration4,
              durationPerson
            );
        var netRealEstateFinance =
          totalRealEstateFinance /
          (1 + (profitRatioRealEstates - 0.2) * 0.01 * (totalDuration / 12));
      } else if (
        calulationInputs.typeException == "exception" &&
        calulationInputs.netSalary > 15000
      ) {
        var totalRealEstateFinance =
          installmentBeforeNotReal * maxxDurationBefore +
          installmentAfterNotReal * maxxDurationAfter -
          liabilities -
          prcent1 *
            1 *
            calulationInputs.netSalary *
            Math.max(
              calulationInputs.duration1,
              calulationInputs.duration2,
              calulationInputs.duration3,
              calulationInputs.duration4,
              durationPerson
            );
        var netRealEstateFinance =
          totalRealEstateFinance /
          (1 + (profitRatioRealEstates - 0.4) * 0.01 * (totalDuration / 12));
      } else {
        var totalRealEstateFinance =
          installmentBeforeNotReal * maxxDurationBefore +
          installmentAfterNotReal * maxxDurationAfter -
          liabilities -
          prcent1 *
            1 *
            calulationInputs.netSalary *
            Math.max(
              calulationInputs.duration1,
              calulationInputs.duration2,
              calulationInputs.duration3,
              calulationInputs.duration4,
              durationPerson
            );
        var netRealEstateFinance =
          totalRealEstateFinance /
          (1 + profitRatioRealEstates * 0.01 * (totalDuration / 12));
      }

      var xxxx = 1 * prcent1 * 1 * calulationInputs.netSalary;
      //التمويل العقاري خامسا حساب فوائد للتمويل
      var totalProfitEstateFinance =
        totalRealEstateFinance - netRealEstateFinance;
      var netProfitEstateFinance =
        totalProfitEstateFinance -
        housingSupport * Math.min(240, totalDuration);

      // التمويل العقاري سادسا حساب  اجمالي المده للتمويل
      var total = netRealEstateFinance + PersonalFinance + b;

      //

      if (calulationInputs.housingSupport == "baqa") {
        var outNameHosingSuppory = "باقة الدعم";
        var amountHousingSupport = b;
      } else if (calulationInputs.housingSupport == "no") {
        var outNameHosingSuppory = "الدعم السكني";
        var amountHousingSupport = 0;
      } else {
        var outNameHosingSuppory = "قسط الدعم";
        var amountHousingSupport = housingSupport;
      }

      if (calulationInputs.firstHouse === "yes") {
        if (calulationInputs.downPayment === "10") {
          var netT = total / 0.9;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0.15 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "5") {
          var netT = total / 0.95;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0.15 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "20") {
          var netT = total / 0.8;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0.15 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else {
          var netT = total / 0.7;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0.15 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        }
      } else {
        if (calulationInputs.downPayment === "10") {
          var netT = total / 0.9;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0.15 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "5") {
          var netT = total / 0.95;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0.15 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "20") {
          var netT = total / 0.8;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0.15 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else {
          var netT = calulationOutputs.total / 0.7;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0.15 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        }
      }

      var phoneToWattap =
        "https://api.whatsapp.com/send?phone=" + calulationInputs.phone;
      setCalulationOutputs({
        ...calulationOutputs,
        age: ageClint,
        work: durationWork,

        durationBeforeRetirement: maxxDurationBefore.toFixed(0),
        durationAfterRetirement: maxxDurationAfter.toFixed(0),
        totalDuration: totalDurationUP.toFixed(2),

        profitRateRealEstate: profitRatioRealEstatesF,
        salaryAfterRetirement: new Intl.NumberFormat().format(
          salaryAfter.toFixed(0)
        ),
        percentageBeforeRetirement: precentBefore.toFixed(2),
        percentageAfterRetirement: precentAfter.toFixed(2),

        profitRatePersonal: profitadd,
        personalFinance: new Intl.NumberFormat().format(
          PersonalFinance.toFixed(0)
        ),
        profitPersonal: new Intl.NumberFormat().format(
          profitPersonalFinance.toFixed(0)
        ),
        amountHousingSupport: new Intl.NumberFormat().format(
          amountHousingSupport
        ),

        realEstateFinance: new Intl.NumberFormat().format(
          netRealEstateFinance.toFixed(0)
        ),
        total: new Intl.NumberFormat().format(total),
        firstInstallment: new Intl.NumberFormat().format(
          (installment - xxxx).toFixed(0)
        ),

        installmentBeforeRetirement: new Intl.NumberFormat().format(
          installmentBefore.toFixed(0)
        ),
        installmentAfterRetirement: new Intl.NumberFormat().format(
          installmentAfter.toFixed(0)
        ),
        totalProfit: new Intl.NumberFormat().format(
          totalProfitEstateFinance.toFixed(0)
        ),
        netProfit: new Intl.NumberFormat().format(
          netProfitEstateFinance.toFixed(0)
        ),

        netNet1: new Intl.NumberFormat().format(netNet.toFixed(0)),

        installmentPersonal: new Intl.NumberFormat().format(
          personInstallment.toFixed(2)
        ),

        durationPersonal: durationPerson,
        //تغير الكتابه

        nameAmountHousingSupport: outNameHosingSuppory,
        phoneOut: phoneToWattap,
      });

      //==================بدايه الاخري =========================//
    } else {
      //  مصفوفه الدعم ع حسب الراتب
      var arrayHousingSupportSalary = [
        3999, 4999, 5999, 6999, 7999, 8999, 9999, 10000, 10001,
      ];
      var arrayHousingSupport = [
        1350, 1206, 1073, 955, 850, 757, 673, 599, 416,
      ];

      //حساب قسط الدعم
      if (
        calulationInputs.netSalary == 0 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var housingSupport = 0;
      } else if (
        calulationInputs.netSalary != 0 &&
        calulationInputs.housingSupport == "monthly" &&
        calulationInputs.editAmountHousingSupport != ""
      ) {
        housingSupport = calulationInputs.editAmountHousingSupport;
      } else if (
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(0) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(0);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(0) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(1) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(1);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(1) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(2) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(2);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(2) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(3) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(3);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(3) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(4) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(4);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(4) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(5) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(5);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(5) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(6) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(6);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(6) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(7) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(7);
      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(8) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(8);
      } else {
        housingSupport = 0;
      }

      //حساب العمر و مده الخدمة
      var monthWork =
        calulationInputs.currentMonth - calulationInputs.startWorkMonth;
      var yearWork =
        calulationInputs.currentYear - calulationInputs.startWorkYear;
      var durationWork = ((monthWork + yearWork * 12) / 12).toFixed(2);
      var monthClint =
        calulationInputs.currentMonth - calulationInputs.birthMonth;
      var yearClint = calulationInputs.currentYear - calulationInputs.birthYear;
      var ageClint = ((monthClint + yearClint * 12) / 12).toFixed(2);

      //الاعمار التقاعديه
      if (
        calulationInputs.housingSupport == "monthly" ||
        calulationInputs.housingSupport == "baqa"
      ) {
        //متقاعد
        var ct = 70;
      } else {
        var ct = 65;
      }

      //الاعمار التقاعديه
      var array1 = [ct, 60, 60, 44, 46, 48, 50, 52, 44, 46, 48, 50, 52];
      var arPlus2 = [ct, 60, 60, 46, 48, 50, 52, 54, 46, 48, 50, 52, 54];
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
      var array3 = [0, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70];
      var numberJob = array2.indexOf(calulationInputs.job);
      var ageBeforeRetirement = array1.at(numberJob);
      var ageBeforeRetirementPlus = arPlus2.at(numberJob);

      //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
      if (calulationInputs.financingType == "normal") {
        var agePercentageAfterRetirement = 0;
      } else {
        agePercentageAfterRetirement = array3.at(numberJob);
      }

      //اقصي مده للتمويل مدعوم وغير مدعوم وباقه
      if (
        calulationInputs.housingSupport == "monthly" ||
        calulationInputs.housingSupport == "baqa"
      ) {
        var maxDuration = 300;
      } else {
        maxDuration = 300;
      }
      // حساب المده المتبقيه الي التقاعد الفعلي

      if (
        calulationInputs.financingType == "normal" &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var durationBefore = (ageBeforeRetirementPlus - ageClint) * 12;
      } else {
        var durationBefore = (ageBeforeRetirement - ageClint) * 12;
      }

      if (calulationInputs.netSalary == 0) {
        var maxxDurationBefore = 0;
      } else if (calulationInputs.editTotalDuration == "") {
        maxxDurationBefore = Math.min(durationBefore, maxDuration);
      } else {
        maxxDurationBefore = Math.min(
          calulationInputs.editTotalDuration,
          durationBefore,
          maxDuration
        );
      }

      //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
      if (calulationInputs.financingType == "normal") {
        var durationAfter = 0;
      } else {
        durationAfter =
          (agePercentageAfterRetirement - ageBeforeRetirement) * 12;
      }

      //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
      if (
        (calulationInputs.financingType == "afterRetirement" &&
          calulationInputs.job == "متقاعد") ||
        calulationInputs.netSalary == 0
      ) {
        var maxxDurationAfter = 0;
      } else if (calulationInputs.editTotalDuration == "") {
        var maxxDurationAfter = Math.min(
          durationAfter,
          maxDuration - maxxDurationBefore
        );
      } else {
        var maxxDurationAfter = Math.min(
          durationAfter,
          maxDuration - maxxDurationBefore,
          calulationInputs.editTotalDuration - maxxDurationBefore
        );
      }

      //اجمالي مده التمويل
      var totalDuration = maxxDurationAfter + maxxDurationBefore;

      //مصفوفه نسب الفوائد اولا المدعوم
      var durationRealEstates = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25,
      ]; // المده بالسنوات
      var arr1 = [
        4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.3, 4.33, 4.35, 4.36, 4.38, 4.4, 4.43,
        4.45, 4.46, 4.48, 4.5, 4.6, 4.6, 4.6, 4.6, 4.6,
      ]; //نسب الفوائد للمدعوم

      //مصفوفه نسب الفوائد ثانيا غير المدعوم
      var durationRealEstates2 = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25,
      ];
      var arr2 = [
        4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.42, 4.45, 4.47, 4.49, 4.5, 4.52,
        4.55, 4.57, 4.59, 4.6, 4.62, 4.65, 4.67, 4.69, 4.7,
      ]; //الغير مدعوم  البنك
      var arr3 = [
        4.45, 4.45, 4.45, 4.45, 4.45, 4.45, 4.45, 4.47, 4.49, 4.5, 4.52, 4.55,
        4.57, 4.6, 4.62, 4.64, 4.65, 4.67, 4.69, 4.72, 4.74, 4.75,
      ]; //الغير مدعوم خارج البنك

      // تقريب مده التمويل الي الاعلي سنه
      var totalDurationUP = Math.floor(totalDuration / 12);

      var vl = durationRealEstates.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates1 = arr1.at(vl); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
      var v2 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates2 = arr2.at(v2); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      var v3 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates3 = arr3.at(v3); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      if (calulationInputs.netSalary == 0) {
        var profitRatioRealEstates = 0;
      } else if (calulationInputs.editProfitRateRealEstate != "") {
        var profitRatioRealEstates = calulationInputs.editProfitRateRealEstate;
      } else if (calulationInputs.housingSupport == "monthly") {
        var profitRatioRealEstates = profitRatioRealEstates1;
      } else if (calulationInputs.housingSupport == "baqa") {
        var profitRatioRealEstates = profitRatioRealEstates1;
      } else if (
        calulationInputs.currentBank == "albilad" &&
        calulationInputs.housingSupport == "no"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates2;
      } else {
        var profitRatioRealEstates = profitRatioRealEstates3;
      }

      var profitRatioRealEstates1 = profitRatioRealEstates;

      //   حساب مبلغ قسط الدعم اللي مش حقيقي  لتعديل مبلغ التمويل العقاري
      if (housingSupport == 0) {
        var housingSupportNotReal = 0;
      } else if (totalDuration <= 240) {
        var housingSupportNotReal = housingSupport;
      } else if (totalDuration > 240) {
        var housingSupportNotReal = (housingSupport * 240) / totalDuration;
      } else {
        var housingSupportNotReal = 0;
      }

      //حساب الراتب التقاعدي
      if (calulationInputs.job == array2.at(1)) {
        var salaryAfter =
          (1 *
            calulationInputs.basicSalary *
            (12 * durationWork + durationBefore)) /
          480;
      } else if (calulationInputs.job == array2.at(2)) {
        var salaryAfter =
          (1 *
            calulationInputs.basicSalary *
            (1 * calulationInputs.durationIn + durationBefore)) /
          480;
      } else if (calulationInputs.job == array2.at(0)) {
        var salaryAfter = 0;
      } else {
        var salaryAfter =
          (1 *
            calulationInputs.basicSalary *
            (12 * durationWork + durationBefore)) /
          420;
      }

      // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد
      if (calulationInputs.editPercentageBeforeRetirement == "") {
        var precentBeforeEdit1 = 100;
      } else {
        var precentBeforeEdit1 =
          calulationInputs.editPercentageBeforeRetirement;
      }

      // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات بعد التقاعد
      if (calulationInputs.editPercentageAfterRetirement == "") {
        var precentAfterEdit1 = 100;
      } else {
        var precentAfterEdit1 = calulationInputs.editPercentageAfterRetirement;
      }

      //اقص نسبه استقطاع قبل و بعد التقاعد للمدعوم و غير المدعوم و ايضا قيمه الباقه
      if (calulationInputs.netSalary == 0) {
        var b = 0;
        var precentBefore = 0;
        var precentAfter = 0;
      } else if (
        calulationInputs.netSalary == 0 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary != 0 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.housingSupport == "baqa" &&
        calulationInputs.editAmountHousingSupportBaqa != ""
      ) {
        var b = calulationInputs.editAmountHousingSupportBaqa;
        if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter <= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(55, precentAfterEdit1);
        } else {
          var precentBefore = Math.min(55, precentBeforeEdit1);
          var precentAfter = Math.min(55, precentAfterEdit1);
        }
      } else if (
        calulationInputs.netSalary >= 10000 &&
        calulationInputs.housingSupport == "baqa"
      ) {
        var b = 100000;
        if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter <= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(55, precentAfterEdit1);
        } else {
          var precentBefore = Math.min(55, precentBeforeEdit1);
          var precentAfter = Math.min(55, precentAfterEdit1);
        }
      } else if (
        calulationInputs.netSalary < 10000 &&
        calulationInputs.housingSupport == "baqa" &&
        calulationInputs.editAmountHousingSupportBaqa != ""
      ) {
        var b = calulationInputs.editAmountHousingSupportBaqa;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        var precentAfter = Math.min(55, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary < 10000 &&
        calulationInputs.housingSupport == "baqa"
      ) {
        var b = 150000;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        var precentAfter = Math.min(55, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 15000 &&
        salaryAfter >= 15000 &&
        calulationInputs.housingSupport == "no"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 15000 &&
        salaryAfter < 15000 &&
        calulationInputs.housingSupport == "no"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(55, precentAfterEdit1);
      } else {
        var b = 0;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        var precentAfter = Math.min(55, precentAfterEdit1);
      }

      if (calulationInputs.editPercentageFirst != "") {
        var prcent1 =
          (precentBefore - calulationInputs.editPercentageFirst) / 100;
      } else {
        var prcent1 = 0;
      }

      //التمويل الشخصي اولا حساب القسط
      if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.editPersonalInstallment != ""
      ) {
        var personInstallment = 1 * calulationInputs.editPersonalInstallment;
      } else if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.job == array2.at(0) &&
        calulationInputs.editPersonalInstallment == ""
      ) {
        var personInstallment = 0.25 * calulationInputs.netSalary;
      } else if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.job != array2.at(0) &&
        calulationInputs.editPersonalInstallment == ""
      ) {
        var personInstallment = 0.33 * calulationInputs.netSalary;
      } else {
        var personInstallment = 0;
      }

      //التمويل الشخصي اولا حساب القسط
      // if (
      //   calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
      //   calulationInputs.editPersonalInstallment == ""
      // ) {
      //   if (calulationInputs.job == array2.at(0)) {
      //     var personInstallment = 0.25 * calulationInputs.netSalary;
      //   } else {
      //     var personInstallment = 0.33 * calulationInputs.netSalary;
      //   }
      // } else if (calulationInputs.newPersonalFinance == "yesNewPrsonal") {
      //   var personInstallment = calulationInputs.editPersonalInstallment;
      // } else {
      //   var personInstallment = 0;
      // }

      //التمويل الشخصي ثانيا حساب المدة
      if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.netSalary != 0 &&
        calulationInputs.editDurationPersonal == ""
      ) {
        var durationPerson = Math.min(60, durationBefore); //بالشهر
      } else if (
        calulationInputs.newPersonalFinance == "yesNewPrsonal" &&
        calulationInputs.netSalary != 0 &&
        calulationInputs.editDurationPersonal != ""
      ) {
        var durationPerson = Math.min(
          60,
          durationBefore,
          calulationInputs.editDurationPersonal
        );
      } else {
        var durationPerson = 0;
      }

      //التمويل الشخصي ثالثا حساب مبلغ التمويل

      //نسب الفوائد
      if (calculation.job == "مدني" || calulationInputs.job == "متقاعد") {
        var prcentPrsonaFinal = 5;
      } else if (calulationInputs.job == "خاص") {
        var prcentPrsonaFinal = 5 + 0.6;
      } else {
        var prcentPrsonaFinal = 5 + 0.75;
      }

      if (calulationInputs.netSalary == 0) {
        var profitadd = 0;
      } else if (calulationInputs.editProfitRatePersonal != "") {
        var profitadd = calulationInputs.editProfitRatePersonal * 1;
      } else {
        var profitadd = prcentPrsonaFinal;
      }

      if (calulationInputs.newPersonalFinance == "yesNewPrsonal") {
        var PersonalFinance =
          (personInstallment * durationPerson) /
          (1 + 0.01 * profitadd * (durationPerson / 12));
        // التمويل الشخصي رابعا حساب فوائد الشخصي
        var profitPersonalFinance =
          personInstallment * durationPerson - PersonalFinance;
      } else {
        var PersonalFinance = 0;
        var profitPersonalFinance = 0;
      }

      //مبلغ الالتزامات الحاليه
      var liabilities =
        1 * calulationInputs.installment1 * calulationInputs.duration1 +
        1 * calulationInputs.installment2 * calulationInputs.duration2 +
        1 * calulationInputs.installment3 * calulationInputs.duration3 +
        1 * calulationInputs.installment4 * calulationInputs.duration4 +
        PersonalFinance +
        profitPersonalFinance;
      var sl5 = personInstallment;

      // التمويل العقاري
      // التمويل العقاري اولا حساب القسط الحقيقي
      var installment =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupport)) /
          100 -
        1 * calulationInputs.installment1 -
        1 * calulationInputs.installment2 -
        1 * calulationInputs.installment3 -
        1 * calulationInputs.installment4 -
        sl5;
      var installmentBefore =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupport)) /
        100;

      if (calulationInputs.financingType == "normal") {
        var installmentAfter = 0;
      } else if (
        calulationInputs.financingType == "afterRetirement" &&
        maxxDurationBefore == 0
      ) {
        var installmentAfter = 0;
      } else if (
        calulationInputs.financingType == "afterRetirement" &&
        calulationInputs.job == "متقاعد"
      ) {
        var installmentAfter = 0;
      } else {
        var installmentAfter =
          (precentAfter * (1 * salaryAfter + 1 * housingSupport)) / 100;
      }

      //التمويل العقاري ثانيا حساب القسط الوهمي
      var installmentNotReal =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupportNotReal)) /
        100;
      var installmentBeforeNotReal =
        (precentBefore *
          (1 * calulationInputs.netSalary + 1 * housingSupportNotReal)) /
        100;
      var installmentAfterNotReal =
        (precentAfter * (1 * salaryAfter + 1 * housingSupportNotReal)) / 100;

      // التمويل العقاري ثالثا حساب مبلغ التمويل
      if (
        calulationInputs.typeException == "exception" &&
        calulationInputs.netSalary < 15000
      ) {
        var totalRealEstateFinance =
          installmentBeforeNotReal * maxxDurationBefore +
          installmentAfterNotReal * maxxDurationAfter -
          liabilities -
          prcent1 *
            1 *
            calulationInputs.netSalary *
            Math.max(
              calulationInputs.duration1,
              calulationInputs.duration2,
              calulationInputs.duration3,
              calulationInputs.duration4,
              durationPerson
            );
        var netRealEstateFinance =
          totalRealEstateFinance /
          (1 + (profitRatioRealEstates - 0.2) * 0.01 * (totalDuration / 12));
      } else if (
        calulationInputs.typeException == "exception" &&
        calulationInputs.netSalary > 15000
      ) {
        var totalRealEstateFinance =
          installmentBeforeNotReal * maxxDurationBefore +
          installmentAfterNotReal * maxxDurationAfter -
          liabilities -
          prcent1 *
            1 *
            calulationInputs.netSalary *
            Math.max(
              calulationInputs.duration1,
              calulationInputs.duration2,
              calulationInputs.duration3,
              calulationInputs.duration4,
              durationPerson
            );
        var netRealEstateFinance =
          totalRealEstateFinance /
          (1 + (profitRatioRealEstates - 0.4) * 0.01 * (totalDuration / 12));
      } else {
        var totalRealEstateFinance =
          installmentBeforeNotReal * maxxDurationBefore +
          installmentAfterNotReal * maxxDurationAfter -
          liabilities -
          prcent1 *
            1 *
            calulationInputs.netSalary *
            Math.max(
              calulationInputs.duration1,
              calulationInputs.duration2,
              calulationInputs.duration3,
              calulationInputs.duration4,
              durationPerson
            );
        var netRealEstateFinance =
          totalRealEstateFinance /
          (1 + profitRatioRealEstates * 0.01 * (totalDuration / 12));
      }

      var xxxx = 1 * prcent1 * 1 * calulationInputs.netSalary;
      //التمويل العقاري خامسا حساب فوائد للتمويل
      var totalProfitEstateFinance =
        totalRealEstateFinance - netRealEstateFinance;
      var netProfitEstateFinance =
        totalProfitEstateFinance -
        housingSupport * Math.min(240, totalDuration);

      // التمويل العقاري سادسا حساب  اجمالي المده للتمويل
      var total = netRealEstateFinance + PersonalFinance + b;

      if (calulationInputs.housingSupport == "baqa") {
        var outNameHosingSuppory = "باقة الدعم";
        var amountHousingSupport = b;
      } else if (calulationInputs.housingSupport == "no") {
        var outNameHosingSuppory = "الدعم السكني";
        var amountHousingSupport = 0;
      } else {
        var outNameHosingSuppory = "قسط الدعم";
        var amountHousingSupport = housingSupport;
      }

      if (calulationInputs.firstHouse === "yes") {
        if (calulationInputs.downPayment === "10") {
          var netT = total / 0.9;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "5") {
          var netT = total / 0.95;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "20") {
          var netT = total / 0.8;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else {
          var netT = total / 0.7;
          var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        }
      } else {
        if (calulationInputs.downPayment === "10") {
          var netT = total / 0.9;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "5") {
          var netT = total / 0.95;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else if (calulationInputs.downPayment === "20") {
          var netT = total / 0.8;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        } else {
          var netT = calulationOutputs.total / 0.7;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        }
      }

      var phoneToWattap =
        "https://api.whatsapp.com/send?phone=" + calulationInputs.phone;
      setCalulationOutputs({
        ...calulationOutputs,
        age: ageClint,
        work: durationWork,

        durationBeforeRetirement: maxxDurationBefore.toFixed(0),
        durationAfterRetirement: maxxDurationAfter.toFixed(0),
        totalDuration: totalDurationUP.toFixed(2),

        profitRateRealEstate: profitRatioRealEstates1,
        salaryAfterRetirement: new Intl.NumberFormat().format(
          salaryAfter.toFixed(0)
        ),
        percentageBeforeRetirement: precentBefore.toFixed(2),
        percentageAfterRetirement: precentAfter.toFixed(2),

        profitRatePersonal: profitadd,
        personalFinance: new Intl.NumberFormat().format(
          PersonalFinance.toFixed(0)
        ),
        profitPersonal: new Intl.NumberFormat().format(
          profitPersonalFinance.toFixed(0)
        ),
        amountHousingSupport: new Intl.NumberFormat().format(
          amountHousingSupport
        ),

        realEstateFinance: new Intl.NumberFormat().format(
          netRealEstateFinance.toFixed(0)
        ),
        total: new Intl.NumberFormat().format(total),

        firstInstallment: new Intl.NumberFormat().format(
          (installment - xxxx).toFixed(0)
        ),

        installmentBeforeRetirement: new Intl.NumberFormat().format(
          installmentBefore.toFixed(0)
        ),
        installmentAfterRetirement: new Intl.NumberFormat().format(
          installmentAfter.toFixed(0)
        ),
        totalProfit: new Intl.NumberFormat().format(
          totalProfitEstateFinance.toFixed(0)
        ),
        netProfit: new Intl.NumberFormat().format(
          netProfitEstateFinance.toFixed(0)
        ),

        netNet1: new Intl.NumberFormat().format(netNet.toFixed(0)),

        installmentPersonal: new Intl.NumberFormat().format(
          personInstallment.toFixed(0)
        ),
        durationPersonal: durationPerson,
        //تغير الكتابه

        nameAmountHousingSupport: outNameHosingSuppory,
        phoneOut: phoneToWattap,
      });
    }

    event.preventDefault();

    setErrorMassge(null);

    const {
      basicSalary,
      netSalary,
      birthMonth,
      currentMonth,
      startWorkMonth,
      birthYear,
      currentYear,
      startWorkYear,
      name,
      phone,
      durationIn,
      realEstateBank,
      job,
      privateSectorEmployee,
    } = calulationInputs;

    if (netSalary.length < 4 || netSalary.length > 5) {
      setErrorMassge("خطأ فضلا التاكد من الراتب الصافي");
      audio3.play();
    } else if (basicSalary.length < 4 && inputDisabledBasicSalary === false) {
      setErrorMassge(" فضلا التاكد من الراتب الاساسي");
      audio2.play();
    } else if (inputDisabledBasicSalary === false && basicSalary.length > 5) {
      setErrorMassge(" فضلا التاكد من الراتب الاساسي");
      audio2.play();
    } else if (birthYear < 1366 || birthYear > 1428) {
      setErrorMassge("خطأ تاكد من سنة الميلاد من 1366 الي 1428 ");
      audio3.play();
    } else if (birthMonth < 1 || birthMonth > 12) {
      setErrorMassge(" خطأ تاكد من شهر الميلاد من 1 الي 12 ");
      audio3.play();
    } else if (
      startWorkYear < birthYear &&
      inputDisabledBasicSalary === false
    ) {
      setErrorMassge("خطأ تاكد من  سنه التعيين ");
      audio2.play();
    } else if (startWorkMonth < 1 && inputDisabledBasicSalary === false) {
      setErrorMassge("خطأ تاكد من شهر التعيين من 1 الي 12 ");
      audio2.play();
    } else if (
      inputDisabledBasicSalary === false &&
      startWorkYear > currentYear
    ) {
      setErrorMassge("خطأ تاكد من  سنه التعيين ");
      audio2.play();
    } else if (inputDisabledBasicSalary === false && startWorkMonth > 12) {
      setErrorMassge("خطأ تاكد من شهر التعيين من 1 الي 12 ");
      audio2.play();
    } else if (currentYear < 1444 || currentYear > 1447) {
      setErrorMassge("خطأ تاكد من تاريخ السنه الحاليه ");
      audio3.play();
    } else if (currentMonth < 1 || currentMonth > 12) {
      setErrorMassge("خطأ تاكد من تاريخ الشهر الحالي ");
      audio3.play();
    } else if (job == "خاص" && realEstateBank != "alahli") {
      if (durationIn == "") {
        setErrorMassge("خطأ فضلا اكتب مدة الاشتراك بالتامينات ");
        audio2.play();
      } else if (durationIn < 1 || durationIn > 744) {
        setErrorMassge("خطأ فضلا تاكد من مدة الاشتراك بالتامينات ");
        audio2.play();
      }
    } else if (
      realEstateBank == "alinma" &&
      privateSectorEmployee == "غير معتمد" &&
      job == "خاص"
    ) {
      setErrorMassge("ان كان التمويل اكبر من 650 الف فضلا تقليل الاستقطاع");
      audio3.play();
    } else if (name == "") {
      setErrorMassge("فضلا اكتب اسم العميل");
      audio2.play();
    } else if (phone.length != 12) {
      setErrorMassge("خطأ تاكد من رقم الجوال 12 رقم 966 ");
      audio2.play();
    }

    setShowModal(true);
  }

  function handelChecked(event) {
    setcalulationInputs({
      ...calulationInputs,
      inputCheck: event.target.checked,
    });
  }

  // const[showModdal,setShowModal]=useState(false)
  // const [errorMassge ,setErrorMassge]=useState(null)

  //  function handelCheckDisable(event){
  //      event.preventDefault()

  //      setErrorMassge(null)

  //      const { basicSalary,netSalary ,birthMonth,currentMonth,startWorkMonth,birthYear,currentYear,startWorkYear} =calulationInputs
  //       if(netSalary.length < 4 || basicSalary.length<4){
  //            setErrorMassge("خطأ فضلا التاكد من الرواتب")
  //          }else if(birthMonth.length<1 ||birthYear.length<4){
  //              setErrorMassge("خطأ تاكد من تاريخ الميلاد ")
  //         }else if(startWorkMonth.length<1 ||startWorkYear.length<4){
  //           setErrorMassge("خطأ تاكد من تاريخ التعيين ")
  //       }else if(currentMonth.length<1 ||currentYear.length<4){
  //         setErrorMassge("خطأ تاكد من تاريخ اليوم ")
  //       }else{
  //        setShowModal(true)
  //       }
  //  };

  const inputMonthly =
    calulationInputs.housingSupport == "monthly" ||
    calulationInputs.housingSupport == "noMonthly";
  const inputbaqa = calulationInputs.housingSupport == "baqa";
  const inputNewPersonal =
    calulationInputs.newPersonalFinance == "noNewPrsonal";
  if (
    calulationInputs.realEstateBank == "alahli" ||
    calulationInputs.realEstateBank == "alinma" ||
    calulationInputs.realEstateBank == "sab"
  ) {
    var colsedInput = "close";
  } else {
    var colsedInput = "open";
  }

  const inputDisabledalinma = calulationInputs.realEstateBank != "alinma";

  const inpustAlahliInstallment1 =
    colsedInput == "close" &&
    calulationInputs.newPersonalFinance == "yesNewPrsonal";
  const inpustAlahliInstallment2 =
    calulationInputs.realEstateBank == "alahli" ||
    calulationInputs.realEstateBank == "alinma" ||
    calulationInputs.realEstateBank == "sab";
  const inputDisabledType = calulationInputs.job == "خاص";
  const inputDisabled =
    calulationInputs.job == "خاص" || calulationInputs.job == "مدني";
  const inputDisabledBasicSalary =
    calulationInputs.job == "متقاعد" ||
    calulationInputs.financingType == "normal";
  const btnIsDisable =
    calulationInputs.netSalary == "" ||
    calulationInputs.birthMonth == "" ||
    calulationInputs.birthYear == "" ||
    calulationInputs.currentMonth == "" ||
    calulationInputs.currentYear == "";

  function handelDivClick() {
    if (showModdal == true) {
      setShowModal(false);
    }
  }

  if (calulationInputs.realEstateBank == "alahli") {
    var noHousingAdd = "بدون اضافه قسط الدعم";
  } else {
    var noHousingAdd = "";
  }

  const [showModdalNet, setShwoModelNet] = useState(false);

  const showNetSalaryModel = () => {
    setShwoModelNet(!showModdalNet);
    let audio1 = new Audio(audioSuccess);
    audio1.play();
  };
  console.log(showModdalNet);

  const changeUserFieldHandler = (e) => {
    setcalulationInputs({
      ...calulationInputs,
      [e.target.name]: e.target.value,
      [e.target.value]: e.target.value,
    }); //console.log(userField);
  };
  // name="email" onChange={e => changeUserFieldHandler(e)} required

  const [loading, setLoading] = useState();
  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post(
        "http://localhost:8090/create",
        calulationInputs
      );
      console.log(responce);
      setLoading(true);
    } catch (err) {
      console.log("Something Wrong");
    }
    let audio1 = new Audio(audioSuccess);
    audio1.play();
  };
  if (loading) {
    return <About />;
  }

  if (calulationInputs.realEstateBank === "alrajhi") {
    var textBaseSalary = "الاساسي+ السكن";
  } else {
    var textBaseSalary = "الراتب الاساسي";
  }

  return (
    <div style={{ marginTop: "10px" }} onClick={handelDivClick}>
      <div className="p-relative" style={{ margin: "0 10px" }}>
        {/* <div className="container p-relative"> */}
        <div className="row flex-mobile">
          <Modal isVisble={showModdal} errorMassage={errorMassge} />
          <NetSalaryModel2 isVisble={showModdalNet} />

          <div className="col box">
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <h4
                style={{
                  textAlign: "center",
                  marginTop: "15px",
                  padding: "6px",
                }}
              >
                البيانات
              </h4>
              <hr></hr>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label>البنك الحالي</label>
                <select
                  value={calulationInputs.currentBank}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      currentBank: event.target.value,
                    });
                  }}
                >
                  {/* <select name="bank"  value={calulationInputs.currentBank} onChange={e => changeUserFieldHandler(e)}> */}
                  <option value="alahli">الاهلي</option>
                  <option selected value="alrajhi">
                    الراجحي
                  </option>
                  <option value="albilad"> البلاد</option>
                  <option value="sab">ساب</option>
                  <option value="alinma">الانماء</option>
                  <option value="riyad"> لاحقا الرياض</option>
                  <option value="alfransi">لاحقا الفرنسي</option>
                  <option value="aljazira">لاحقا الجزيرة</option>
                  <option value="any">الاخري</option>
                </select>
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label>البنك العقاري</label>
                <select
                  value={calulationInputs.realEstateBank}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      realEstateBank: event.target.value,
                    });
                  }}
                >
                  <option selected value="alahli">
                    الاهلي
                  </option>
                  <option value="alrajhi">الراجحي</option>
                  <option value="albilad"> البلاد</option>
                  <option value="sab">ساب</option>
                  <option value="alinma">الانماء</option>
                  <option value="riyad"> لاحقا الرياض</option>
                  <option value="alfransi">لاحقا الفرنسي</option>
                  <option value="aljazira">لاحقا الجزيرة</option>
                  <option value="bidaya">لاحقا بداية</option>
                  <option value="darAltamleek">لاحقا دار التمليك</option>
                  <option value="any">الاخري</option>
                </select>
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label>الــوظيفـــة</label>
                <select
                  name="job"
                  value={calulationInputs.job}
                  onChange={(e) => changeUserFieldHandler(e)}
                >
                  <option selected value="متقاعد">
                    متقاعد
                  </option>
                  <option value="مدني">مدني</option>
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
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label>ممتد / اعتيادي</label>
                <select
                  value={calulationInputs.financingType}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      financingType: event.target.value,
                    });
                  }}
                >
                  <option value="normal">اعتيادي</option>
                  <option selected value="afterRetirement">
                    ممتد
                  </option>
                </select>
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label>شخصي جديد</label>
                <select
                  value={calulationInputs.newPersonalFinance}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      newPersonalFinance: event.target.value,
                    });
                  }}
                >
                  <option value="yesNewPrsonal">نعم</option>
                  <option selected value="noNewPrsonal">
                    لا
                  </option>
                </select>
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label>الدعم السكني</label>
                <select
                  name="housingSupport"
                  value={calulationInputs.housingSupport}
                  onChange={(e) => changeUserFieldHandler(e)}
                >
                  <option value="monthly">قسط شهري</option>
                  <option selected value="baqa">
                    باقة الدعم
                  </option>
                  <option value="no">غير مدعوم</option>
                  <option value="noMonthly">{noHousingAdd}</option>
                </select>
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label>الراتب الصافي</label>
                <input
                  name="netSalary"
                  type="number"
                  value={calulationInputs.netSalary}
                  onChange={(e) => changeUserFieldHandler(e)}
                />
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label>{textBaseSalary}</label>
                <input
                  name="basicSalary"
                  style={{
                    background: inputDisabledBasicSalary
                      ? "rgb(223 220 220)"
                      : "",
                  }}
                  placeholder={inputDisabledBasicSalary ? "غير مطلوب" : ""}
                  disabled={inputDisabledBasicSalary}
                  type="number"
                  value={calulationInputs.basicSalary}
                  onChange={(e) => changeUserFieldHandler(e)}
                />
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label>مده الاشتراك </label>
                <input
                  style={{
                    background: !inputDisabled ? "rgb(223 220 220)" : "",
                  }}
                  disabled={!inputDisabled}
                  placeholder={!inputDisabled ? "غير مطلوب" : ""}
                  type="number"
                  value={calulationInputs.durationIn}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      durationIn: event.target.value,
                    });
                  }}
                />
              </div>

              <div
                style={{
                  width: "100%",
                  direction: "rtl",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <label>تاريخ الميلاد</label>
                <input
                  name="birthMonth"
                  placeholder=" شهر  "
                  type="number"
                  style={{ width: "28%" }}
                  value={calulationInputs.birthMonth}
                  onChange={(e) => changeUserFieldHandler(e)}
                />
                <input
                  name="birthYear"
                  placeholder=" سنه "
                  type="number"
                  style={{ width: "35%", margin: "0 0 0 8px" }}
                  value={calulationInputs.birthYear}
                  onChange={(e) => changeUserFieldHandler(e)}
                />
              </div>

              <div
                style={{
                  width: "100%",
                  direction: "rtl",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <label>تاريخ التعيين</label>
                <input
                  name="startWorkMonth"
                  style={{
                    background: inputDisabledBasicSalary
                      ? "rgb(223 220 220)"
                      : "",
                    width: "28%",
                  }}
                  disabled={inputDisabledBasicSalary}
                  placeholder={inputDisabledBasicSalary ? "غير مطلوب" : "شهر"}
                  type="number"
                  value={calulationInputs.startWorkMonth}
                  onChange={(e) => changeUserFieldHandler(e)}
                />
                <input
                  name="startWorkYear"
                  style={{
                    background: inputDisabledBasicSalary
                      ? "rgb(223 220 220)"
                      : "",
                    width: "35%",
                    margin: "0 0 0 8px",
                  }}
                  disabled={inputDisabledBasicSalary}
                  placeholder={inputDisabledBasicSalary ? "غير مطلوب" : "سنه"}
                  type="number"
                  value={calulationInputs.startWorkYear}
                  onChange={(e) => changeUserFieldHandler(e)}
                />
              </div>

              <div
                style={{
                  width: "100%",
                  direction: "rtl",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <label>تاريخ اليوم</label>
                <input
                  name="currentMonth"
                  placeholder=" شهر"
                  type="number"
                  style={{ width: "28%" }}
                  value={calulationInputs.currentMonth}
                  onChange={(e) => changeUserFieldHandler(e)}
                />
                <input
                  name="currentYear"
                  placeholder=" سنه"
                  type="number"
                  style={{ width: "35%", margin: "0 0 0 8px" }}
                  value={calulationInputs.currentYear}
                  onChange={(e) => changeUserFieldHandler(e)}
                />
              </div>

              {/* <div style={{width:"100%" , direction:"rtl"}}>
              <label>تاريخ اليوم</label>
              <input type="date" value={calulationInputs.netSalary} onChange={(event)=>{setcalulationInputs({...calulationInputs , netSalary:event.target.value})}}/>
              </div> */}

              <div style={{ width: "100%", direction: "rtl" }}>
                <label> ضمان اسثثناء</label>
                <select
                  value={calulationInputs.typeException}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      typeException: event.target.value,
                    });
                  }}
                >
                  <option selected value="normal">
                    بدون
                  </option>
                  <option value="exception">استثناء</option>
                  <option value="damanat">ضمانات</option>
                  <option value="damanatAndexception">ضمانات مع اسثثناء</option>
                </select>
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label> حكومي- خاص </label>
                <select
                  disabled={!inputDisabledType}
                  style={{
                    background: !inputDisabledType ? "rgb(223 220 220)" : "",
                  }}
                  value={calulationInputs.privateSectorEmployee}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      privateSectorEmployee: event.target.value,
                    });
                  }}
                >
                  <option selected value="حكومي">
                    {" "}
                    شبه/حكومي
                  </option>
                  <option value="معتمد">خاص معتمد</option>
                  <option value="غير معتمد">خاص غير معتمد</option>
                </select>
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label>اسم العميل </label>
                <input
                  name="name"
                  value={calulationInputs.name}
                  onChange={(e) => changeUserFieldHandler(e)}
                />
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label>رقم الجوال </label>
                <input
                  name="phone"
                  maxLength={12}
                  value={calulationInputs.phone}
                  onChange={(e) => changeUserFieldHandler(e)}
                  placeholder="966..."
                />
              </div>

              {/* <div>
               <button className="" onClick={handelCheckDisableNet} id="submit-loan-btn" style={{width:"100%"}}>Submit</button>
               </div> */}

              <div style={{ width: "100%", direction: "rtl" }}>
                <label>نوع الالتزام </label>
                <select
                  style={{
                    background: inputDisabledalinma ? "rgb(223 220 220)" : "",
                  }}
                  disabled={inputDisabledalinma}
                  value={calulationInputs.alinmaPersonal}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      alinmaPersonal: event.target.value,
                    });
                  }}
                >
                  <option value="yesPrsonal">شخصي</option>
                  <option selected value="noPrsonal">
                    اخري
                  </option>
                </select>
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label>نسبة الدفعه</label>
                <select
                  value={calulationInputs.downPayment}
                  placeholder="%..."
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      downPayment: event.target.value,
                    });
                  }}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label> المسكن الاول</label>
                <select
                  value={calulationInputs.firstHouse}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      firstHouse: event.target.value,
                    });
                  }}
                >
                  <option value="yes">نعم</option>
                  <option value="no">لا</option>
                </select>
              </div>

              <div style={{ width: "100%", direction: "rtl" }}>
                <label style={{ marginTop: "10px" }}> الراتب الصافي</label>
                <button
                  onClick={showNetSalaryModel}
                  style={{ width: "65%" }}
                  className="btn btn-primary"
                >
                  احسب{" "}
                </button>
              </div>
            </form>
          </div>

          <div className="col box">
            <div className="edit" style={{}}>
              <h4
                style={{
                  textAlign: "center",
                  marginTop: "15px",
                  padding: "6px",
                }}
              >
                الالتزامات
              </h4>
              <hr></hr>
              <div>
                <input
                  placeholder="القسط 1"
                  value={calulationInputs.installment1}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      installment1: event.target.value,
                    });
                  }}
                ></input>
                <input
                  style={{
                    background: inpustAlahliInstallment1
                      ? "rgb(223 220 220)"
                      : "",
                  }}
                  disabled={inpustAlahliInstallment1}
                  placeholder={
                    inpustAlahliInstallment1 ? "غير مطلوب" : " المدة 1"
                  }
                  value={calulationInputs.duration1}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      duration1: event.target.value,
                    });
                  }}
                ></input>
              </div>

              <div>
                <input
                  placeholder="القسط 2"
                  value={calulationInputs.installment2}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      installment2: event.target.value,
                    });
                  }}
                ></input>
                <input
                  style={{
                    background: inpustAlahliInstallment2
                      ? "rgb(223 220 220)"
                      : "",
                  }}
                  disabled={inpustAlahliInstallment2}
                  placeholder={
                    inpustAlahliInstallment2 ? "غير مطلوب" : " المدة 2"
                  }
                  value={calulationInputs.duration2}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      duration2: event.target.value,
                    });
                  }}
                ></input>
              </div>

              <div>
                <input
                  placeholder="القسط 3"
                  value={calulationInputs.installment3}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      installment3: event.target.value,
                    });
                  }}
                ></input>
                <input
                  style={{
                    background: inpustAlahliInstallment2
                      ? "rgb(223 220 220)"
                      : "",
                  }}
                  disabled={inpustAlahliInstallment2}
                  placeholder={
                    inpustAlahliInstallment2 ? "غير مطلوب" : " المدة 3"
                  }
                  value={calulationInputs.duration3}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      duration3: event.target.value,
                    });
                  }}
                ></input>
              </div>

              <div>
                <input
                  placeholder=" القسط 4"
                  value={calulationInputs.installment4}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      installment4: event.target.value,
                    });
                  }}
                ></input>
                <input
                  style={{
                    background: inpustAlahliInstallment2
                      ? "rgb(223 220 220)"
                      : "",
                  }}
                  disabled={inpustAlahliInstallment2}
                  placeholder={
                    inpustAlahliInstallment2 ? "غير مطلوب" : " المدة 4"
                  }
                  value={calulationInputs.duration4}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      duration4: event.target.value,
                    });
                  }}
                ></input>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  textAlign: "center",
                }}
              >
                <p
                  placeholder="شخصي جديد"
                  style={{ marginRight: "20%", marginBottom: "0" }}
                >
                  {" "}
                  {calulationOutputs.installmentPersonal}
                </p>
                <p
                  placeholder="شخصي جديد "
                  style={{ marginLeft: "20%", marginBottom: "0" }}
                >
                  {" "}
                  {calulationOutputs.durationPersonal}
                </p>
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
                التعديلات يدويا
              </h4>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label style={{ width: "49%" }}> الاستقطاع فتره الالتزام</label>
                <input
                  value={calulationInputs.editPercentageFirst}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      editPercentageFirst: event.target.value,
                    });
                  }}
                ></input>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label style={{ width: "49%" }}>الاستقطاع قبل التقاعد </label>
                <input
                  value={calulationInputs.editPercentageBeforeRetirement}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      editPercentageBeforeRetirement: event.target.value,
                    });
                  }}
                ></input>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label style={{ width: "49%" }}> الاستقطاع بعد التقاعد</label>
                <input
                  style={{
                    background: inputDisabledBasicSalary
                      ? "rgb(223 220 220)"
                      : "",
                  }}
                  disabled={inputDisabledBasicSalary}
                  placeholder={inputDisabledBasicSalary ? "غير مسموح" : ""}
                  value={calulationInputs.editPercentageAfterRetirement}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      editPercentageAfterRetirement: event.target.value,
                    });
                  }}
                ></input>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label style={{ width: "49%" }}> مدة التمويل العقاري</label>
                <input
                  value={calulationInputs.editTotalDuration}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      editTotalDuration: event.target.value,
                    });
                  }}
                ></input>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label style={{ width: "49%" }}>مده التمويل الشخصي</label>
                <input
                  style={{
                    background: inputNewPersonal ? "rgb(223 220 220)" : "",
                  }}
                  disabled={inputNewPersonal}
                  placeholder={inputNewPersonal ? "غير مسموح" : ""}
                  value={calulationInputs.editDurationPersonal}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      editDurationPersonal: event.target.value,
                    });
                  }}
                ></input>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label style={{ width: "49%" }}> نسبه الفوائد العقاري</label>
                <input
                  value={calulationInputs.editProfitRateRealEstate}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      editProfitRateRealEstate: event.target.value,
                    });
                  }}
                ></input>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label style={{ width: "49%" }}>نسبه الفوائد الشخصي </label>
                <input
                  style={{
                    background: inputNewPersonal ? "rgb(223 220 220)" : "",
                  }}
                  disabled={inputNewPersonal}
                  placeholder={inputNewPersonal ? "غير مسموح" : ""}
                  value={calulationInputs.editProfitRatePersonal}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      editProfitRatePersonal: event.target.value,
                    });
                  }}
                ></input>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label style={{ width: "49%" }}>القسط للشخصي </label>
                <input
                  style={{
                    background: inputNewPersonal ? "rgb(223 220 220)" : "",
                  }}
                  disabled={inputNewPersonal}
                  placeholder={inputNewPersonal ? "غير مسموح" : ""}
                  value={calulationInputs.editPersonalInstallment}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      editPersonalInstallment: event.target.value,
                    });
                  }}
                ></input>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label style={{ width: "49%" }}>قسط الدعم الشهري </label>
                <input
                  style={{
                    background: !inputMonthly ? "rgb(223 220 220)" : "",
                  }}
                  disabled={!inputMonthly}
                  placeholder={!inputMonthly ? "غير مسموح" : ""}
                  value={calulationInputs.editAmountHousingSupport}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      editAmountHousingSupport: event.target.value,
                    });
                  }}
                ></input>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label style={{ width: "49%" }}> باقه الدعم السكني </label>
                <input
                  style={{ background: !inputbaqa ? "rgb(223 220 220)" : "" }}
                  disabled={!inputbaqa}
                  placeholder={!inputbaqa ? "غير مسموح" : ""}
                  value={calulationInputs.editAmountHousingSupportBaqa}
                  onChange={(event) => {
                    setcalulationInputs({
                      ...calulationInputs,
                      editAmountHousingSupportBaqa: event.target.value,
                    });
                  }}
                ></input>
              </div>
              {/* <div>
        <button className={btnIsDisable? "disabled" :""} disabled={btnIsDisable} onClick={handelCheckDisable} id="submit-loan-btn" style={{width:"100%"}}>Submit</button>
        </div> */}

              <div>
                <button
                  className={btnIsDisable ? "disabled" : ""}
                  disabled={btnIsDisable}
                  onClick={calculation}
                  id="submit-loan-btn2"
                  style={{ width: "100%" }}
                >
                  calculation
                </button>
              </div>

              <div
                style={{ width: "100%", direction: "rtl", marginTop: "6px" }}
              >
                <label style={{ marginTop: "10px" }}>لينك واتساب</label>

                <a
                  target="_blank"
                  className="btn btn-primary"
                  style={{ width: "65%", height: "40px" }}
                  title="whatsapp.com"
                  href={calulationOutputs.phoneOut}
                >
                  اضغط هنا
                </a>
              </div>

              <div
                style={{ width: "100%", direction: "rtl", marginTop: "6px" }}
              >
                <label style={{ marginTop: "10px" }}> اضافه للعملاء</label>
                <button
                  disabled={btnIsDisable}
                  type="submit"
                  style={{ width: "65%", minHeight: "40px", color: "white" }}
                  className={btnIsDisable ? "disabled" : "btn btn-primary"}
                  onClick={(e) => onSubmitChange(e)}
                >
                  اضافه{" "}
                </button>
                {/* <input type="checkbox" checked={calulationInputs.inputCheck}  onChange={handelChecked} style={{width:"60%" , height:"28px"}}/> */}
              </div>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "15px",
                  fontWeight: "bold",
                }}
              >
                Eskan Salman calculation &copy;
              </div>
            </div>
          </div>

          <div className="col box">
            <h4
              style={{ textAlign: "center", marginTop: "15px", padding: "6px" }}
            >
              الحسبة
            </h4>
            <hr></hr>
            <table>
              <tr>
                <th>تمويل عقاري</th>
                <th>{calulationOutputs.realEstateFinance}</th>
              </tr>
              <tr>
                <td>القرض الشخصي</td>
                <td>{calulationOutputs.personalFinance}</td>
              </tr>
              <tr>
                <td>{calulationOutputs.nameAmountHousingSupport}</td>
                <td>{calulationOutputs.amountHousingSupport}</td>
              </tr>
              <tr>
                <td>الاجمالي</td>
                <td>{calulationOutputs.total}</td>
              </tr>
              <tr>
                <td>القسط فتره الالتزام</td>
                <td>{calulationOutputs.firstInstallment}</td>
              </tr>
              <tr>
                <td>القسط قبل التقاعد</td>
                <td>{calulationOutputs.installmentBeforeRetirement}</td>
              </tr>
              <tr>
                <td>القسط بعد التقاعد</td>
                <td>{calulationOutputs.installmentAfterRetirement}</td>
              </tr>
              <tr>
                <td>المده قبل التقاعد</td>
                <td>{calulationOutputs.durationBeforeRetirement}</td>
              </tr>
              <tr>
                <td>المده بعد التقاعد</td>
                <td>{calulationOutputs.durationAfterRetirement}</td>
              </tr>
              <tr>
                <td>اجمالي مده التمويل</td>
                <td>{calulationOutputs.totalDuration}</td>
              </tr>
              <tr>
                <td>اجمالي الفوائد</td>
                <td>{calulationOutputs.totalProfit}</td>
              </tr>
              <tr>
                <td>صافي الفوائد</td>
                <td>{calulationOutputs.netProfit}</td>
              </tr>
              <tr>
                <td>الراتب التقاعدي</td>
                <td>{calulationOutputs.salaryAfterRetirement}</td>
              </tr>
              <tr>
                <td>نسبه الفوائد العقاري</td>
                <td>{calulationOutputs.profitRateRealEstate}</td>
              </tr>
              <tr>
                <td>نسبه الفوائد الشخصي</td>
                <td>{calulationOutputs.profitRatePersonal}</td>
              </tr>
              <tr>
                <td>مبلغ الفوائد الشخصي</td>
                <td>{calulationOutputs.profitPersonal}</td>
              </tr>
              <tr>
                <td>عمر العميل</td>
                <td>{calulationOutputs.age}</td>
              </tr>
              <tr>
                <td>خدمة العميل</td>
                <td>{calulationOutputs.work}</td>
              </tr>

              <tr>
                <td> الاستقطاع قبل التقاعد</td>
                <td>{calulationOutputs.percentageBeforeRetirement}</td>
              </tr>

              <tr>
                <td> الاستقطاع بعد التقاعد</td>
                <td>{calulationOutputs.percentageAfterRetirement}</td>
              </tr>

              <tr>
                <td>صافي تحصيل العقار</td>
                <td>{calulationOutputs.netNet1}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
