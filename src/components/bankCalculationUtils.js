/**
 * bankCalculationUtils.js
 * ملف دوال الحساب لجميع البنوك - مستخرج بالكامل من الكود الأصلي بنسبة 100%
 * يشمل كافة البنوك: الراجحي، الأهلي، البلاد، ساب، الإنماء، الفرنسي، الراجحي (الرب)، ومسار النمو
 */

// ============================================
// الدوال المساعدة العامة
// ============================================


export const formatNumberArabic = (number) => {
  if (!number || isNaN(number)) return '0';
  return Number(number).toLocaleString('ar-SA');
};

export const validateInputsForCalculation = (inputs) => {
  const errors = [];
  if (!inputs.netSalary || inputs.netSalary === 0) errors.push('الراتب الصافي مطلوب');
  if (!inputs.basicSalary || inputs.basicSalary === 0) errors.push('الراتب الأساسي مطلوب');
  if (!inputs.birthYear || !inputs.currentYear) errors.push('بيانات العمر مطلوبة');
  return { isValid: errors.length === 0, errors };
};

// ============================================
// منطق حساب بنك الراجحي (alrajhi)
// ============================================
const calculateAlrajhi = (inputs) => {
  

  try {
    var calulationInputs = inputs;

    
    //  const [summary, setSummary] = useState([]); // لتخزين الفترات الملرخصة
  

 let liabilitiesSpecial={
    specialInstallmentC1R1: "",
    specialInstallmentC1R2: "",
    specialInstallmentC1R3: "",
    specialInstallmentC1R4: "",

    specialDurationC1R1: "",
    specialDurationC1R2: "",
    specialDurationC1R3: "",
    specialDurationC1R4: "",

    specialInstallmentC2R1: "",
    specialInstallmentC2R2: "",
    specialInstallmentC2R3: "",
    specialInstallmentC2R4: "",

    specialDurationC2R1: "",
    specialDurationC2R2: "",
    specialDurationC2R3: "",
    specialDurationC2R4: "",
  };

  const totalInstallmentSpecialC1 =
    1 * liabilitiesSpecial.specialInstallmentC1R1 +
    1 * liabilitiesSpecial.specialInstallmentC2R1;
  const totalInstallmentSpecialC2 =
    1 * liabilitiesSpecial.specialInstallmentC1R2 +
    1 * liabilitiesSpecial.specialInstallmentC2R2;
  const totalInstallmentSpecialC3 =
    1 * liabilitiesSpecial.specialInstallmentC1R3 +
    1 * liabilitiesSpecial.specialInstallmentC2R3;
  const totalInstallmentSpecialC4 =
    1 * liabilitiesSpecial.specialInstallmentC1R4 +
    1 * liabilitiesSpecial.specialInstallmentC2R4;

  var maxSpecialDurationc1 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R1,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc2 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R2,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc3 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R3,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc4 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R4,
    0 * liabilitiesSpecial.specialDurationC2R1
  );


    const liabilitiesSpecialTotal1 =
    1 *
      liabilitiesSpecial.specialInstallmentC1R1 *
      (1 * liabilitiesSpecial.specialDurationC1R1) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R2 *
      (1 * liabilitiesSpecial.specialDurationC1R2) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R3 *
      (1 * liabilitiesSpecial.specialDurationC1R3) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R4 *
      (1 * liabilitiesSpecial.specialDurationC1R4);
  const liabilitiesSpecialTotal2 =
    1 *
      liabilitiesSpecial.specialInstallmentC2R1 *
      (1 * liabilitiesSpecial.specialDurationC2R1) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R2 *
      (1 * liabilitiesSpecial.specialDurationC2R2) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R3 *
      (1 * liabilitiesSpecial.specialDurationC2R3) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R4 *
      (1 * liabilitiesSpecial.specialDurationC2R4);
  const totalLiabilitiesSpecial =
    liabilitiesSpecialTotal1 + liabilitiesSpecialTotal2;
   
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
        housingSupport = Math.ceil(
          ((10000 - calulationInputs.netSalary) * (673 - 599)) / 1000 + 599
        );
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(2) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = Math.ceil(
          ((9000 - calulationInputs.netSalary) * (757 - 673)) / 1000 + 673
        );
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(3) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = Math.ceil(
          ((8000 - calulationInputs.netSalary) * (850 - 757)) / 1000 + 757
        );
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(4) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = Math.ceil(
          ((7000 - calulationInputs.netSalary) * (955 - 850)) / 1000 + 850
        );
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(5) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = Math.ceil(
          ((6000 - calulationInputs.netSalary) * (1073 - 955)) / 1000 + 955
        );
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(6) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = Math.ceil(
          ((5000 - calulationInputs.netSalary) * (1206 - 1073)) / 1000 + 1073
        );
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(7) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = Math.ceil(
          ((4000 - calulationInputs.netSalary) * (1350 - 1206)) / 1000 + 1206
        );
      } else {
        housingSupport = 0;
      }

      //حساب العمر و مده الخدمة
      var monthWork =
        calulationInputs.currentMonth - calulationInputs.startWorkMonth;
      var yearWork =
        calulationInputs.currentYear - calulationInputs.startWorkYear;

          var durationWork = ((monthWork + yearWork * 12) / 12).toFixed(2);
      // var durationWork1 = (monthWork + yearWork * 12) / 12;
      // var durationWork = ((durationWork1 * 354.334) / 365).toFixed(2);
    
      var monthClint =
        calulationInputs.currentMonth - calulationInputs.birthMonth;
      var yearClint = calulationInputs.currentYear - calulationInputs.birthYear;
      var ageClint = ((monthClint + yearClint * 12) / 12).toFixed(2);
      // var ageClint1 = ((monthClint + yearClint * 12) / 12).toFixed(2);
      // var ageClint = ((ageClint1 * 354.334) / 365).toFixed(2);

      //الاعمار التقاعديه
      var array1 = [77, 60, 60, 44, 46, 48, 50, 52, 44, 46, 48, 50, 52,54];
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
        "مقدم",
        "عقيد",
        "عميد",
      ];
      var array3 = [0, 77, 77, 70, 70, 70, 70, 70, 77, 77, 77,77, 77, 77];
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
      3.74,3.74,3.74,3.74,3.74, 3.74,3.74,3.79,3.85,3.91,3.97,4.03,4.09,4.16,4.23,4.29,4.36,4.43,4.5,4.56,4.63,4.69,4.76,4.82,4.87,4.93,4.96
      ]; //نسب الفوائد للمدعوم

      var arr1Apr=[
   6.78,6.78,6.78,6.78,6.78,  6.78,6.78,6.82,6.86,6.90,6.94,6.98,7.02,7.07,7.11,7.16,7.20,7.24,7.29,7.33,7.36,7.40,7.43,7.46,7.49,7.52,7.54
        //  6.63, 6.63, 6.63, 6.63, 6.63,  6.63,6.63,6.67,6.7,6.74,6.78,6.82,6.86,6.9,6.95,6.99,7.03,7.08,7.12,7.16,7.2,7.23,7.27,7.3,7.32,7.35,7.38
      ]



//ضمانات
      var arr11 = [
       3.69,3.69,3.69,3.69,3.69,  3.69,3.69,3.74,3.8,3.86,3.92,3.98,4.04,4.11,4.17,4.24,4.31,4.37,4.44,4.5,4.57,4.64,4.7,4.76,4.81,4.86,4.89
      ]; //ضمانات

      var arr11Apr=[
      //  6.56, 6.56, 6.56, 6.56, 6.56,  6.56,6.56,6.59,6.63,6.66,6.7,6.74,6.78,6.83,6.87,6.91,6.96,7,7.04,7.08,7.12,7.16,7.19,7.22,7.25,7.27,7.3
      
      6.70,6.70,6.70,6.70,6.70,  6.70,6.70,6.74,6.78,6.82,6.86,6.90,6.95,6.99,7.04,7.08,7.12,7.17,7.21,7.25,7.28,7.32,7.35,7.38,7.41,7.44,7.46
    ]

      // var arrMinistryDefense = [
      //  3.83,3.83,3.83,3.83,3.83,   3.83,3.83,3.83,3.83,3.83,3.83,3.83,4.09,4.09,4.09,4.09,4.09,4.37,4.37,4.37,4.37,4.37,4.55,4.55,4.55,4.55,4.55

      // ];
      // //مصفوفه نسب الفوائد ثانيا غير المدعوم

      //     var arrMinistryDefenseApr=[
      //   6.92, 6.92,6.92,6.92,6.92,6.92, 6.92,6.95,6.99,7.03,7.08,7.12,7.17,7.21,7.26,7.31,7.36,7.41,7.46,7.50,7.54,7.59,7.62,7.66,7.69,7.72,7.75
      // ]


      var durationRealEstates2 = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25, 26, 27, 28, 29, 30,
      ];
      var arr2 = [
         4.26,4.26,4.26,4.26,4.26,   4.26,4.26,4.33,4.4,4.46,4.54,4.61,4.69,4.76,4.84,4.92,4.99,5.07,5.14,5.22,5.3,5.37,5.43,5.5,5.57,5.64,5.7
      ]; // الغير مدعوم راتب اقل من 10 الف
      var arr3 = [
         4.26,4.26,4.26,4.26,4.26,   4.26,4.26,4.33,4.4,4.46,4.54,4.61,4.69,4.76,4.84,4.92,4.99,5.07,5.14,5.22,5.3,5.37,5.43,5.5,5.57,5.64,5.7

      ]; //الغير مدعوم راتب فوق 10 الف

var arr2Apr=[
   7.53, 7.53, 7.53, 7.53, 7.53,7.53,7.53,7.57,7.61,7.64,7.68,7.73,7.77,7.81,7.85,7.9,7.94,7.98,8.02,8.06,8.1,8.13,8.16,8.19,8.22,8.25,8.27
]
var arr3Apr=[
  7.53, 7.53, 7.53, 7.53, 7.53, 7.53,7.53,7.57,7.61,7.64,7.68,7.73,7.77,7.81,7.85,7.9,7.94,7.98,8.02,8.06,8.1,8.13,8.16,8.19,8.22,8.25,8.27
]

      // تقريب مده التمويل الي الاعلي سنه

      if (calulationInputs.housingSupport != "no") {
        var totalDurationUP = Math.floor(totalDuration / 12);
        // var totalDurationUP = Math.ceil(totalDuration / 12);
      } else {
        var totalDurationUP = Math.floor(totalDuration / 12);
      }

      if (
        calulationInputs.job == "متقاعد" ||
        calulationInputs.job == "خاص" ||
        calulationInputs.job == "مدني"
      ) {
        var ministryDefense1 = false;
      } else {
        var ministryDefense1 = true;
      }

      // if (
      //   calulationInputs.ministryDefenseSelect === "yes" &&
      //   ministryDefense1 === true
      // ) {
      //   var vl = durationRealEstates.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      //   var profitRatioRealEstates1 = arrMinistryDefense.at(vl);
      //     var profitRatioRealEstates1Apr = arrMinistryDefenseApr.at(vl);

      // } else 
        
        if (calulationInputs.typeException == "damanat") {
        var vl = durationRealEstates.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
        var profitRatioRealEstates1 = arr11.at(vl); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

                var profitRatioRealEstates1Apr = arr11Apr.at(vl); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      } else if (
        calulationInputs.typeException == "damanatAndexception" &&
        calulationInputs.netSalary < 15000
      ) {
        var vl = durationRealEstates.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
        var profitRatioRealEstates1 = arr11.at(vl) - 0.2; // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
                var profitRatioRealEstates1Apr = arr11Apr.at(vl) - 0.2; // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
      } else if (
        calulationInputs.typeException == "damanatAndexception" &&
        calulationInputs.netSalary >= 15000
      ) {
        var vl = durationRealEstates.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
        var profitRatioRealEstates1 = arr11.at(vl) - 0.4; // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
             var profitRatioRealEstates1Apr = arr11Apr.at(vl) - 0.4; // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
      } else {
        var vl = durationRealEstates.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
        var profitRatioRealEstates1 = arr1.at(vl); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
         var profitRatioRealEstates1Apr = arr1Apr.at(vl);
      }



      var v2 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates2 = arr2.at(v2); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
      var profitRatioRealEstates2Apr = arr2Apr.at(v2); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه


      var v3 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates3 = arr3.at(v3); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
      var profitRatioRealEstates3Apr = arr3Apr.at(v3); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه


      if (calulationInputs.netSalary == 0) {
        var profitRatioRealEstates = 0;
        

      } else if (calulationInputs.editProfitRateRealEstate != "") {
        var profitRatioRealEstates = calulationInputs.editProfitRateRealEstate;

      } else if (calulationInputs.housingSupport == "monthly") {
        var profitRatioRealEstates = profitRatioRealEstates1;
 var profitRatioRealEstatesApr = profitRatioRealEstates1Apr;

      } else if (calulationInputs.housingSupport == "baqa") {
        var profitRatioRealEstates = profitRatioRealEstates1;
            var profitRatioRealEstatesApr = profitRatioRealEstates1Apr;
      } else if (
        calulationInputs.netSalary <= 10000 &&
        calulationInputs.housingSupport == "no"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates2;
        var profitRatioRealEstatesApr = profitRatioRealEstates2Apr;
      } else {
        var profitRatioRealEstates = profitRatioRealEstates3;
          var profitRatioRealEstatesApr = profitRatioRealEstates3Apr;
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
         var profitRatioRealEstates1Apr = profitRatioRealEstatesApr;
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
        calulationInputs.netSalary >= 25000 &&
        salaryAfter >= 25000 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(75, precentBeforeEdit1);
        var precentAfter = Math.min(75, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 25000 &&
        salaryAfter >= 15000 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(75, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 25000 &&
        salaryAfter < 15000 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(75, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 15000 &&
        salaryAfter >= 25000 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(75, precentAfterEdit1);
      } else if (
        // calulationInputs.netSalary < 15000 && salaryAfter <15000 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.housingSupport == "baqa" &&
        calulationInputs.editAmountHousingSupportBaqa != ""
      ) {
        var b = 1 * calulationInputs.editAmountHousingSupportBaqa;
        if (
          calulationInputs.netSalary >= 25000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 25000
        ) {
          var precentBefore = Math.min(75, precentBeforeEdit1);
          var precentAfter = Math.min(75, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 25000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(75, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 25000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter < 15000
        ) {
          var precentBefore = Math.min(75, precentBeforeEdit1);
          var precentAfter = Math.min(55, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 25000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(75, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary < 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 25000
        ) {
          var precentBefore = Math.min(55, precentBeforeEdit1);
          var precentAfter = Math.min(75, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter < 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(55, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary < 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(55, precentBeforeEdit1);
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
          calulationInputs.netSalary >= 25000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 25000
        ) {
          var precentBefore = Math.min(75, precentBeforeEdit1);
          var precentAfter = Math.min(75, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 25000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(75, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 25000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(75, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter < 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(55, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary < 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(55, precentBeforeEdit1);
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
        var b = 1 * calulationInputs.editAmountHousingSupportBaqa;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        if (salaryAfter >= 15000) {
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else {
          var precentAfter = Math.min(55, precentAfterEdit1);
        }
      } else if (
        calulationInputs.netSalary < 10000 &&
        calulationInputs.housingSupport == "baqa"
      ) {
        var b = 150000;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        if (salaryAfter >= 15000) {
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else {
          var precentAfter = Math.min(55, precentAfterEdit1);
        }
      } else if (
        calulationInputs.netSalary >= 25000 &&
        salaryAfter >= 25000 &&
        calulationInputs.housingSupport == "no"
      ) {
        var b = 0;
        var precentBefore = Math.min(75, precentBeforeEdit1);
        var precentAfter = Math.min(75, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 25000 &&
        salaryAfter >= 15000 &&
        calulationInputs.housingSupport == "no"
      ) {
        var b = 0;
        var precentBefore = Math.min(75, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 15000 &&
        salaryAfter >= 25000 &&
        calulationInputs.housingSupport == "no"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(75, precentAfterEdit1);
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
      if (calulationInputs.job == "مدني" || calulationInputs.job == "متقاعد") {
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

      if (
        calulationInputs.job == "متقاعد" ||
        calulationInputs.job == "خاص" ||
        calulationInputs.job == "مدني"
      ) {
        var ministryDefense = false;
      } else if (calulationInputs.housingSupport != "no") {
        var ministryDefense = true;
      } else {
        var ministryDefense = false;
      }
      if (ministryDefense && calulationInputs.ministryDefenseSelect === "yes") {
        var addministryDefense = 160000;

        var durationMinistryDefense = Math.min(240 - 24, totalDuration - 24);
       

        // var durationMinistryDefense = 0;

        if (calulationInputs.userMinistryDefense != "") {
          var installmentMinistryDefense =
            1 * calulationInputs.userMinistryDefense;
        } else {
          var installmentMinistryDefense =
            // addministryDefense / durationMinistryDefense;
            741
        }
      } else {
        var addministryDefense = 0;
        var durationMinistryDefense = 0;
        var installmentMinistryDefense = 0;
      }

      //مبلغ الالتزامات الحاليه

      var liabilities =
        1 * calulationInputs.installment1 * calulationInputs.duration1 +
        1 * calulationInputs.installment2 * calulationInputs.duration2 +
        1 * calulationInputs.installment3 * calulationInputs.duration3 +
        1 * calulationInputs.installment4 * calulationInputs.duration4 +
        installmentMinistryDefense * durationMinistryDefense +
        totalLiabilitiesSpecial +
        PersonalFinance +
        profitPersonalFinance;
      var sl5 = personInstallment;

      var maxDurationFirstInstallmentCalc = Math.max(
        1 * calulationInputs.duration1,
        1 * calulationInputs.duration2,
        1 * calulationInputs.duration3,
        1 * calulationInputs.duration4,
        durationPerson
      );
      var totalPercentageNow =
        1 * calulationInputs.installment1 +
        1 * calulationInputs.installment2 +
        1 * calulationInputs.installment3 +
        1 * calulationInputs.installment4 +
        sl5;
      var percentageNow =
        (100 * totalPercentageNow) / (1 * calulationInputs.netSalary);
      console.log(totalPercentageNow);
      console.log(percentageNow);
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







// function getMonthlyLiabilities(liabilitiesSpecial) {
//   const liabilities = [];
  
//   let currentMonth = 0; // مؤشر بداية كل صف

//   // العمود 1
//   for (let i = 1; i <= 4; i++) {
//     const installment = Number(liabilitiesSpecial[`specialInstallmentC1R${i}`]) || 0;
//     const duration = Number(liabilitiesSpecial[`specialDurationC1R${i}`]) || 0;

//     if (installment > 0 && duration > 0) {
//       for (let m = 0; m < duration; m++) {
//         liabilities[currentMonth + m] = (liabilities[currentMonth + m] || 0) + installment;
//       }
//       currentMonth += duration; // الصف التالي يبدأ بعد الصف الحالي
//     }
//   }

//   // العمود 2
//   currentMonth = 0; // إذا تريد أن العمود 2 يبدأ مستقل، يمكن إعادة تعيين currentMonth
//   for (let i = 1; i <= 4; i++) {
//     const installment = Number(liabilitiesSpecial[`specialInstallmentC2R${i}`]) || 0;
//     const duration = Number(liabilitiesSpecial[`specialDurationC2R${i}`]) || 0;

//     if (installment > 0 && duration > 0) {
//       for (let m = 0; m < duration; m++) {
//         liabilities[currentMonth + m] = (liabilities[currentMonth + m] || 0) + installment;
//       }
//       currentMonth += duration;
//     }
//   }

//   return liabilities;
// }


// // ✅ دالة الالتزامات العادية
// function getRegularLiabilities(calulationInputs, calulationOutputs) {
//   const liabilities = [];

//   for (let i = 1; i <= 4; i++) {
//     const installment = Number(calulationInputs[`installment${i}`]) || 0;
//     const duration = Number(calulationInputs[`duration${i}`]) || 0;

//     if (installment > 0 && duration > 0) {
//       for (let m = 0; m < duration; m++) {
//         liabilities[m] = (liabilities[m] || 0) + installment;
//       }
//     }
//   }

//   // وزارة الدفاع

//     const installment = Number(installmentMinistryDefense) || 0;
//     const duration = Number(durationMinistryDefense )|| 0;
//     if (installment > 0 && duration > 0) {
//       for (let m = 0; m < duration; m++) {
//         liabilities[m] = (liabilities[m] || 0) + installment;
//       }
//     }
  
//   // القرض الشخصي الجديد
//   const personalInstallment = Number(personInstallment) || 0;
//   const personalDuration = Number(durationPerson) || 0;
//   if (personalInstallment > 0 && personalDuration > 0) {
//     for (let m = 0; m < personalDuration; m++) {
//       liabilities[m] = (liabilities[m] || 0) + personalInstallment;
//     }
//   }

//      return liabilities;

//   }

// // ✅ دمج الالتزامات العادية والخاصة
// function getAllMonthlyLiabilities(calulationInputs, calulationOutputs, liabilitiesSpecial) {
//   const regular = getRegularLiabilities(calulationInputs, calulationOutputs);
//   const special = getMonthlyLiabilities(liabilitiesSpecial);

//   const maxMonths = Math.max(regular.length, special.length);
//   const merged = [];

//   for (let m = 0; m < maxMonths; m++) {
//     merged[m] = (regular[m] || 0) + (special[m] || 0);
//   }

//   return merged;
// }

// // ✅ دالة حساب القسط العقاري الفعلي لكل شهر
// function calculateRealEstateInstallments({
//   apr,
//   totalMonths,
//   monthsBeforeRetirement,
//   monthsAfterRetirement,
//   maxInstallmentBefore,
//   maxInstallmentAfter,
//   calulationInputs,
//   calulationOutputs,
//   liabilitiesSpecial
// }) {
//   const monthlyRate = apr / 100 / 12;
//   const monthlyLiabilities = getAllMonthlyLiabilities(calulationInputs, calulationOutputs, liabilitiesSpecial);

//   const monthlyInstallments = [];
//   let totalPrincipal = 0;
//   let totalInterest = 0;

//   for (let month = 0; month < totalMonths; month++) {
//     const isBeforeRetirement = month < monthsBeforeRetirement;
//     const maxInstallment = isBeforeRetirement ? maxInstallmentBefore : maxInstallmentAfter;

//     const liability = monthlyLiabilities[month] || 0;

//     // ✅ القسط العقاري الفعلي = الحد الأقصى - الالتزام
//     const realEstateInstallment = Math.max(maxInstallment - liability, 0);

//     // تفصيل الـ Flat Rate
//     const principalShare = realEstateInstallment / (isBeforeRetirement ? monthsBeforeRetirement : monthsAfterRetirement);
//     const interest = realEstateInstallment * monthlyRate;
//     const monthlyFlat = principalShare + interest;

//     monthlyInstallments.push({
//       month,
//       liability,
//       realEstateInstallment, // هذا هو القسط العقاري الفعلي قبل حساب الفائدة
//       principal: principalShare,
//       interest,
//       total: monthlyFlat
//     });

//     totalPrincipal += principalShare;
//     totalInterest += interest;
//   }

//   const npv = monthlyInstallments.reduce((acc, val, idx) => {
//     return acc + val.total / Math.pow(1 + monthlyRate, idx + 1);
//   }, 0);




//   return {
//     monthlyInstallments,
//     totalPrincipal,
//     totalInterest,
//     totalPaid: totalPrincipal + totalInterest,
//     npv
//   };
// }





// // بعد استدعاء الدالة calculateRealEstateInstallments
// const result = calculateRealEstateInstallments({
//   apr: profitRatioRealEstates1Apr,
//   totalMonths: totalDuration,
//   monthsBeforeRetirement: maxxDurationBefore,
//   monthsAfterRetirement: maxxDurationAfter,
//   maxInstallmentBefore: installmentBefore,
//   maxInstallmentAfter: installmentAfter,
//   calulationInputs,
//   calulationOutputs,
//   liabilitiesSpecial
// });

// // حساب صافي التمويل PV بنفس معادلة Excel: =NPV(B1/12, G4:G302)
// const monthlyRate = profitRatioRealEstates1Apr / 100 / 12;
// const pv = result.monthlyInstallments.reduce((acc, val, idx) => {
//   return acc + val / Math.pow(1 + monthlyRate, idx + 1);
// }, 0);

// // حساب Flat Rate بنفس معادلة Excel: =(SUM(G4:G302)-PV)/(PV*مدة التمويل)
// const sumInstallments = result.monthlyInstallments.reduce((acc, val) => acc + val, 0);
// const flatRate = (sumInstallments - pv) / (pv * totalDuration/12);

// console.log("📊 التفاصيل الشهرية:", result.monthlyInstallments);
// console.log("💰 إجمالي أصل الدين:", result.totalPrincipal);
// console.log("💰 إجمالي الفوائد:", result.totalInterest);
// console.log("💰 الإجمالي المدفوع:", result.totalPaid);
// console.log("📉 NPV (صافي التمويل):", pv);
// console.log("📈 Flat Rate:", flatRate);
// console.log("APR:", result.apr);

// console.log(profitRatioRealEstates1Apr)















// // ===================== دوال الالتزامات الخاصة =====================
// function getMonthlyLiabilities(liabilitiesSpecial) {
//   const liabilities = [];
  
//   // العمود 1
//   let currentMonth = 0;
//   for (let i = 1; i <= 4; i++) {
//     const installment = Number(liabilitiesSpecial[`specialInstallmentC1R${i}`]) || 0;
//     const duration = Number(liabilitiesSpecial[`specialDurationC1R${i}`]) || 0;

//     if (installment > 0 && duration > 0) {
//       for (let m = 0; m < duration; m++) {
//         liabilities[currentMonth + m] = (liabilities[currentMonth + m] || 0) + installment;
//       }
//       currentMonth += duration;
//     }
//   }

//   // العمود 2
//   currentMonth = 0; // إذا تريد العمود 2 مستقل
//   for (let i = 1; i <= 4; i++) {
//     const installment = Number(liabilitiesSpecial[`specialInstallmentC2R${i}`]) || 0;
//     const duration = Number(liabilitiesSpecial[`specialDurationC2R${i}`]) || 0;

//     if (installment > 0 && duration > 0) {
//       for (let m = 0; m < duration; m++) {
//         liabilities[currentMonth + m] = (liabilities[currentMonth + m] || 0) + installment;
//       }
//       currentMonth += duration;
//     }
//   }

//   return liabilities;
// }

// // ===================== دوال الالتزامات العادية =====================
// function getRegularLiabilities(calulationInputs) {
//   const liabilities = [];

//   for (let i = 1; i <= 4; i++) {
//     const installment = Number(calulationInputs[`installment${i}`]) || 0;
//     const duration = Number(calulationInputs[`duration${i}`]) || 0;

//     if (installment > 0 && duration > 0) {
//       for (let m = 0; m < duration; m++) {
//         liabilities[m] = (liabilities[m] || 0) + installment;
//       }
//     }
//   }

//   // وزارة الدفاع
//   const installmentMinistryDefense = Number(calulationInputs.installmentMinistryDefense) || 0;
//   const durationMinistryDefense = Number(calulationInputs.durationMinistryDefense) || 0;
//   if (installmentMinistryDefense > 0 && durationMinistryDefense > 0) {
//     for (let m = 0; m < durationMinistryDefense; m++) {
//       liabilities[m] = (liabilities[m] || 0) + installmentMinistryDefense;
//     }
//   }

//   // القرض الشخصي الجديد
//   const personalInstallment = Number(calulationInputs.personInstallment) || 0;
//   const personalDuration = Number(calulationInputs.durationPerson) || 0;
//   if (personalInstallment > 0 && personalDuration > 0) {
//     for (let m = 0; m < personalDuration; m++) {
//       liabilities[m] = (liabilities[m] || 0) + personalInstallment;
//     }
//   }

//   return liabilities;
// }




// // ===================== دمج الالتزامات =====================
// function getAllMonthlyLiabilities(calulationInputs, liabilitiesSpecial) {
//   const regular = getRegularLiabilities(calulationInputs);
//   const special = getMonthlyLiabilities(liabilitiesSpecial);

//   const maxMonths = Math.max(regular.length, special.length);
//   const merged = [];

//   for (let m = 0; m < maxMonths; m++) {
//     merged[m] = (regular[m] || 0) + (special[m] || 0);
//   }

//   return merged;
// }

// // ===================== حساب القسط العقاري =====================
// function calculateRealEstateInstallments({
//   apr,
//   totalMonths,
//   monthsBeforeRetirement,
//   monthsAfterRetirement,
//   maxInstallmentBefore,
//   maxInstallmentAfter,
//   calulationInputs,
//   liabilitiesSpecial
// }) {
//   const monthlyRate = apr / 100 / 12;
//   const monthlyLiabilities = getAllMonthlyLiabilities(calulationInputs, liabilitiesSpecial);



//   const monthlyInstallments = [];
//   let totalPrincipal = 0;
//   let totalInterest = 0;

//   for (let month = 0; month < totalMonths; month++) {
//     const isBeforeRetirement = month < monthsBeforeRetirement;
//     const maxInstallment = isBeforeRetirement ? maxInstallmentBefore : maxInstallmentAfter;

//     const liability = monthlyLiabilities[month] || 0;

//     // القسط العقاري الفعلي
//     const realEstateInstallment = Math.max(maxInstallment - liability, 0);

//     // تفصيل الـ Flat Rate
//     const principalShare = realEstateInstallment / (isBeforeRetirement ? monthsBeforeRetirement : monthsAfterRetirement);
//     const interest = realEstateInstallment * monthlyRate;
//     const monthlyFlat = principalShare + interest;

//     monthlyInstallments.push({
//       month: month + 1,
//       liability,
//       realEstateInstallment,
//       principal: principalShare,
//       interest,
//       total: monthlyFlat
//     });

//     totalPrincipal += principalShare;
//     totalInterest += interest;
//   }

//   // صافي التمويل (NPV) بنفس معادلة Excel
//   const npv = monthlyInstallments.reduce((acc, val, idx) => {
//     return acc + val.total / Math.pow(1 + monthlyRate, idx + 1);
//   }, 0);




//   // Flat Rate
//   const sumInstallments = monthlyInstallments.reduce((acc, val) => acc + val.total, 0);
//   const flatRate = (sumInstallments - npv) / (npv * (totalMonths / 12));

//   return {
//     monthlyInstallments,
//     totalPrincipal,
//     totalInterest,
//     totalPaid: totalPrincipal + totalInterest,
//     npv,
//     flatRate
//   };
// }

// // ===================== مثال على استدعاء الدالة =====================
// const result = calculateRealEstateInstallments({
//   apr: profitRatioRealEstates1Apr,
//   totalMonths: totalDuration,
//   monthsBeforeRetirement: maxxDurationBefore,
//   monthsAfterRetirement: maxxDurationAfter,
//   maxInstallmentBefore: installmentBefore,
//   maxInstallmentAfter: installmentAfter,
//   calulationInputs,
//   liabilitiesSpecial
// });

// // ✅ طباعة النتائج
// console.log("📊 التفاصيل الشهرية:", result.monthlyInstallments.map(m => ({
//   month: m.month,
//   liability: m.liability.toFixed(2),
//   realEstateInstallment: m.realEstateInstallment.toFixed(2),
//   principal: m.principal.toFixed(2),
//   interest: m.interest.toFixed(2),
//   total: m.total.toFixed(2)
// })));
// console.log("💰 إجمالي أصل الدين:", result.totalPrincipal.toFixed(2));
// console.log("💰 إجمالي الفوائد:", result.totalInterest.toFixed(2));
// console.log("💰 الإجمالي المدفوع:", result.totalPaid.toFixed(2));
// console.log("📉 NPV (صافي التمويل):", result.npv.toFixed(2));
// console.log("📈 Flat Rate:", (result.flatRate * 100).toFixed(2) + "%");








if(totalDuration>240 && calulationInputs.housingSupport == "monthly" ){

 if(maxxDurationBefore>=240){
     var editInhouse1=precentBefore*housingSupport/100
     var durationEditInhouse1=totalDuration-maxxDurationBefore

     if(maxxDurationBefore>=totalDuration){
           var editInhouse2=0
          var durationEditInhouse2=0

     }else{

      var editInhouse2=precentAfter*housingSupport/100
      var durationEditInhouse2=totalDuration-maxxDurationBefore-durationEditInhouse1
     }

  }else{

   var editInhouse1=0
     var durationEditInhouse1=0


   var editInhouse2=precentAfter*housingSupport/100

    var durationEditInhouse2=totalDuration-240
  }


}else{
     var editInhouse1=0
     var editInhouse2=0
     var durationEditInhouse1=0
     var durationEditInhouse2=0
}






// ✅ دالة الالتزامات الخاصة
function getMonthlyLiabilities(liabilitiesSpecial) {
  const liabilities = [];
  
  let currentMonth = 0;

  // العمود 1
  for (let i = 1; i <= 4; i++) {
    const installment = Number(liabilitiesSpecial[`specialInstallmentC1R${i}`]) || 0;
    const duration = Number(liabilitiesSpecial[`specialDurationC1R${i}`]) || 0;

    if (installment > 0 && duration > 0) {
      for (let m = 0; m < duration; m++) {
        liabilities[currentMonth + m] = (liabilities[currentMonth + m] || 0) + installment;
      }
      currentMonth += duration;
    }
  }

  // العمود 2
  currentMonth = 0;
  for (let i = 1; i <= 4; i++) {
    const installment = Number(liabilitiesSpecial[`specialInstallmentC2R${i}`]) || 0;
    const duration = Number(liabilitiesSpecial[`specialDurationC2R${i}`]) || 0;

    if (installment > 0 && duration > 0) {
      for (let m = 0; m < duration; m++) {
        liabilities[currentMonth + m] = (liabilities[currentMonth + m] || 0) + installment;
      }
      currentMonth += duration;
    }
  }

  return liabilities;
}

// ✅ دالة الالتزامات العادية
function getRegularLiabilities(calulationInputs) {
  const liabilities = [];

  for (let i = 1; i <= 4; i++) {
    const installment = Number(calulationInputs[`installment${i}`]) || 0;
    const duration = Number(calulationInputs[`duration${i}`]) || 0;

    if (installment > 0 && duration > 0) {
      for (let m = 0; m < duration; m++) {
        liabilities[m] = (liabilities[m] || 0) + installment;
      }
    }
  }



  // وزارة الدفاع
const installmentMinistryDefenset = Number(installmentMinistryDefense) || 0;
const durationMinistryDefenset = Number(durationMinistryDefense) || 0;

if (installmentMinistryDefenset > 0 && durationMinistryDefenset > 0) {
  // ✅ تحقق من البنك الحالي
  const startMonth = ( calulationInputs.realEstateBank == "alrajhi"|| calulationInputs.realEstateBank == "albilad") ? 24 : 0;

  for (let m = 0; m < durationMinistryDefense; m++) {
    const monthIndex = startMonth + m;
    liabilities[monthIndex] = (liabilities[monthIndex] || 0) + installmentMinistryDefenset;
  }
}



  // القرض الشخصي
  const personalInstallment = Number(personInstallment) || 0;
  const personalDuration = Number(durationPerson) || 0;
  if (personalInstallment > 0 && personalDuration > 0) {
    for (let m = 0; m < personalDuration; m++) {
      liabilities[m] = (liabilities[m] || 0) + personalInstallment;
    }
  }

  return liabilities;
}

// ✅ دمج الالتزامات
function getAllMonthlyLiabilities(calulationInputs, liabilitiesSpecial) {



  const regular = getRegularLiabilities(calulationInputs);
  const special = getMonthlyLiabilities(liabilitiesSpecial);

  const maxMonths = Math.max(regular.length, special.length);
  const merged = [];

  for (let m = 0; m < maxMonths; m++) {
    merged[m] = (regular[m] || 0) + (special[m] || 0);
  }

  return merged;
}

// ✅ دالة حساب القسط العقاري لكل شهر
function calculateRealEstateInstallments({
  apr,
  totalMonths,
  maxInstallmentBefore,
  maxInstallmentAfter,
  monthsBeforeRetirement,
  monthsAfterRetirement,
  calulationInputs,
  liabilitiesSpecial
}) {
  const monthlyRate = apr / 100 / 12;
  const monthlyLiabilities = getAllMonthlyLiabilities(calulationInputs, liabilitiesSpecial);



    // تطبيق التزامات "editInhouse" إذا تحققت الشروط
  (function applyEditInhouse() {
    const START_AFTER_MONTHS = 240; // ابداء الإلتزام بعد نهاية 240 شهر (أي من المؤشر 240)
  
    // تحقق أولي
    if (!(totalMonths > START_AFTER_MONTHS  && calulationInputs.housingSupport === "monthly")) {
      return;
    }

    // قراءة القيم من calulationInputs أو استخدام صفر كافتراضي
    const housingSupportValue = Number(housingSupport ?? housingSupport ?? 0) || 0;
    const precentBefore1= Number(precentBefore ?? 0) || 0;
    const precentAfter1 = Number(precentAfter ?? 0) || 0;

    // monthsBeforeRetirement هو البراميتر الذي استدعيت به الدالة (يعادل maxxDurationBefore)
    // استخدم monthsBeforeRetirement الموجود في scope الدالة
    let editInhouse1 = 0, editInhouse2 = 0;
    let durationEditInhouse1 = 0, durationEditInhouse2 = 0;

    if (monthsBeforeRetirement >= START_AFTER_MONTHS) {
      // الحالة الأولى كما في منطقك
      editInhouse1 = (0*precentBefore1 * housingSupportValue) / 100;
      // durationEditInhouse1 = Math.max(0, totalMonths - monthsBeforeRetirement);
         durationEditInhouse1 = Math.max(0, monthsBeforeRetirement- 240);

      if (monthsBeforeRetirement >= totalMonths) {
        editInhouse2 = 0;
        durationEditInhouse2 = 0;
      } else {
        editInhouse2 = (0*precentAfter1 * housingSupportValue) / 100;
        // durationEditInhouse2 = Math.max(0, totalMonths - monthsBeforeRetirement - durationEditInhouse1);
              durationEditInhouse2 = Math.max(0, totalMonths - monthsBeforeRetirement );
      }
    } else {
      // الحالة الثانية كما في منطقك
      editInhouse1 = 0;
      durationEditInhouse1 = 0;

      editInhouse2 = (0*precentAfter1 * housingSupportValue) / 100;
      durationEditInhouse2 = Math.max(0, totalMonths - START_AFTER_MONTHS);
    }





    // الآن نطبّق الإلتزامات على monthlyLiabilities
    // نضمن أن monthlyLiabilities طوله >= totalMonths (نوسّعه إذا لزم)
    for (let i = monthlyLiabilities.length; i < totalMonths; i++) monthlyLiabilities[i] = monthlyLiabilities[i] || 0;

    let applyIndex = START_AFTER_MONTHS; // بداية الإلزام (مؤشر 240 => شهر 241)
    // أضف editInhouse1 لمدة durationEditInhouse1
    for (let m = 0; m < durationEditInhouse1 && (applyIndex + m) < totalMonths; m++) {
      monthlyLiabilities[applyIndex + m] = (monthlyLiabilities[applyIndex + m] || 0) + editInhouse1;
    }
    applyIndex += durationEditInhouse1;

    // أضف editInhouse2 لمدة durationEditInhouse2 (يكمل على ما سبق)
    for (let m = 0; m < durationEditInhouse2 && (applyIndex + m) < totalMonths; m++) {
      monthlyLiabilities[applyIndex + m] = (monthlyLiabilities[applyIndex + m] || 0) + editInhouse2;
    }

    // انتهى تطبيق الالتزامات
  })();







  const monthlyInstallments = [];
  let totalPrincipal = 0;
  let totalInterest = 0;

  for (let month = 0; month < totalMonths; month++) {
    const isBeforeRetirement = month < monthsBeforeRetirement;
    const maxInstallment = isBeforeRetirement ? maxInstallmentBefore : maxInstallmentAfter;

    const liability = monthlyLiabilities[month] || 0;

    // القسط العقاري الفعلي = الحد الأقصى - الالتزام
    const realEstateInstallment = Math.max(maxInstallment - liability, 0);

    // 💡 التصحيح: القسط نفسه هو الأصل، والفائدة على صافي التمويل
    const principal = realEstateInstallment;
    const interest = principal * monthlyRate;
    const total = principal + interest;

    monthlyInstallments.push({
      month: month + 1,
      liability,
      realEstateInstallment,
      principal,
      interest,
      total
    });

    totalPrincipal += principal;
    totalInterest += interest;
  }

  // حساب صافي التمويل (NPV) بنفس Excel
  const npv = monthlyInstallments.reduce((acc, val, idx) => {
    return acc + val.total / Math.pow(1 + monthlyRate, idx + 1);
  }, 0);

  // Flat Rate = (SUM(totalPayments) - PV) / (PV * سنوات التمويل)
  const sumInstallments = monthlyInstallments.reduce((acc, val) => acc + val.total, 0);
  const flatRate = (sumInstallments - npv) / (npv * (totalMonths / 12));

  return {
    monthlyInstallments,
    totalPrincipal,
    totalInterest,
    totalPaid: totalPrincipal + totalInterest,
    npv,
    flatRate
  };
}

// ✅ مثال استدعاء الدالة
const result = calculateRealEstateInstallments({
  apr: profitRatioRealEstates1Apr,
  totalMonths: totalDuration,
  monthsBeforeRetirement: maxxDurationBefore,
  monthsAfterRetirement: maxxDurationAfter,
  maxInstallmentBefore:installmentBeforeNotReal ,
  maxInstallmentAfter: installmentAfterNotReal,
  calulationInputs,
  liabilitiesSpecial
});

console.log("📊 التفاصيل الشهرية:", result.monthlyInstallments);
console.log("💰 إجمالي أصل الدين:", result.totalPrincipal);
console.log("💰 إجمالي الفوائد:", result.totalInterest);
console.log("💰 الإجمالي المدفوع:", result.totalPaid);
console.log("📉 NPV (صافي التمويل):", result.npv);
console.log("📈 Flat Rate:", (result.flatRate * 100).toFixed(2) + "%");


if(   calulationInputs.housingSupport == "baqa"||calulationInputs.housingSupport == "no"){
var splite=360
}else{
var splite=240
}

// function summarizeInstallments(installments, splitAt = splite) {
//   const summary = [];
//   if (installments.length === 0) return summary;

//   let current = {
//     period: 1,
//     realEstateInstallment: installments[0].realEstateInstallment,
//     months: 1,
//     total: installments[0].realEstateInstallment
//   };

//   for (let i = 1; i < installments.length; i++) {
//     const currentInstallment = installments[i].realEstateInstallment;

//     // فصل عند تغير القسط أو عند splitAt
//     if (currentInstallment !== current.realEstateInstallment || i === splitAt) {
//       summary.push({ ...current });

//       // إذا وصلنا لشهر splitAt، نكمل بنفس القسط بعده
//       current = {
//         period: current.period + 1,
//         realEstateInstallment: currentInstallment,
//         months: 1,
//         total: currentInstallment
//       };
//     } else {
//       current.months++;
//       current.total += currentInstallment;
//     }
//   }

//   // أضف آخر فترة
//   summary.push({ ...current });

//   return summary;
// }

// setSummary(summarizeInstallments(result.monthlyInstallments, splite));


// console.log("📊 ملخص الفترات:");
// summary.forEach((p) => {
//   console.log(
//     `الفترة ${p.period} ➝ القسط: ${p.realEstateInstallment} | عدد الأشهر: ${p.months}`
//   );
// });


function summarizeInstallments(installments, splitAt = splite) {
  const summary = [];
  if (installments.length === 0) return summary;

  let current = {
    period: 1,
    realEstateInstallment: installments[0].realEstateInstallment,
    months: 1,
    total: installments[0].realEstateInstallment
  };

  for (let i = 1; i < installments.length; i++) {
    const currentInstallment = installments[i].realEstateInstallment;

    // فصل عند تغير القسط أو عند splitAt
    if (currentInstallment !== current.realEstateInstallment || i === splitAt) {
      summary.push({ ...current });

      // إذا وصلنا لشهر splitAt، نكمل بنفس القسط بعده
      current = {
        period: current.period + 1,
        realEstateInstallment: currentInstallment,
        months: 1,
        total: currentInstallment
      };
    } else {
      current.months++;
      current.total += currentInstallment;
    }
  }

  // أضف آخر فترة
  summary.push({ ...current });

  return summary;
}

// بدل setSummary
const summaryResult = summarizeInstallments(result.monthlyInstallments, splite);

console.log("📊 ملخص الفترات:");
summaryResult.forEach((p) => {
  console.log(
    `الفترة ${p.period} ➝ القسط: ${p.realEstateInstallment} | عدد الأشهر: ${p.months}`
  );
});


if( calulationInputs.ministryDefenseSelect === "yes" &&
        ministryDefense1 === true){
   
         var rateFinal= (result.flatRate * 100).toFixed(2)

      }else{
     var rateFinal= (result.flatRate * 100).toFixed(2)

      }











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
          (1 + (rateFinal) * 0.01 * (totalDuration / 12));
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
          (1 + (rateFinal) * 0.01 * (totalDuration / 12));
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
          (1 + rateFinal * 0.01 * (totalDuration / 12));
      }

      var xxxx = 1 * prcent1 * 1 * calulationInputs.netSalary;
      //التمويل العقاري خامسا حساب فوائد للتمويل
      var totalProfitEstateFinance =
        totalRealEstateFinance - netRealEstateFinance;
      var netProfitEstateFinance =
        totalProfitEstateFinance -
        housingSupport * Math.min(240, totalDuration);

      if (
        calulationInputs.job == "متقاعد" ||
        calulationInputs.job == "خاص" ||
        calulationInputs.job == "مدني"
      ) {
        var ministryDefense = false;
      } else if (calulationInputs.housingSupport != "no") {
        var ministryDefense = true;
      } else {
        var ministryDefense = false;
      }
      if (ministryDefense && calulationInputs.ministryDefenseSelect === "yes") {
        var addministryDefense = 160000;
      } else {
        var addministryDefense = 0;
      }

      // التمويل العقاري سادسا حساب  اجمالي المده للتمويل
      var total =
        netRealEstateFinance + PersonalFinance + b + addministryDefense;

      if (calulationInputs.housingSupport == "baqa") {
        var outNameHosingSuppory = "باقة الدعم";
        var amountHousingSupport = b;
      } else if (calulationInputs.housingSupport == "no") {
        var outNameHosingSuppory = "الدعم السكني";
        var amountHousingSupport = 0;
      } else {
        var outNameHosingSuppory = "قسط الدعم";
        // var amountHousingSupport = new Intl.NumberFormat().format(
        //   housingSupport.toFixed(0)
        // );

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
          var netT = total / 0.7;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        }
      }
      if (percentageNow > precentBefore) {
        var prentError = "red";
      } else {
        var prentError = "";
      }

      var phoneToWattap =
        "https://api.whatsapp.com/send?phone=" + calulationInputs.phone;

      if (
        calulationInputs.housingSupport == "baqa" ||
        calulationInputs.housingSupport == "noMonthly"
      ) {
        var amountHousingSupportN = 0;
      } else {
        var amountHousingSupportN = amountHousingSupport;
      }


      var colFouer = new Intl.NumberFormat().format(
        ((salaryAfter * precentAfter) / 100).toFixed(0)
      );


      var colFirstN = new Intl.NumberFormat().format(
        (installment - xxxx - amountHousingSupportN).toFixed(0)
      );
      var colSecendN = new Intl.NumberFormat().format(
        (installmentBeforeNotReal - amountHousingSupportN).toFixed(0)
      );
      var colThridN = new Intl.NumberFormat().format(
        (installmentAfterNotReal - amountHousingSupportN).toFixed(0)
      );

      // var outPresonalN=new Intl.NumberFormat().format((1*PersonalFinance-0).toFixed(0))
      // var outRealN=new Intl.NumberFormat().format((1*netRealEstateFinance).toFixed(0))
      // var outBaqaN= new Intl.NumberFormat().format((1*b).toFixed(0))
      var outPresonalN = PersonalFinance;
      var outRealN = netRealEstateFinance;
      var outBaqaN = b;
      var outAddministryDefenseN = addministryDefense;



    return {
      bankName: 'الراجحي',
       
        age: ageClint,
        work: durationWork,

        durationBeforeRetirement: maxxDurationBefore.toFixed(0),
        durationAfterRetirement: maxxDurationAfter.toFixed(0),
        totalDuration: Math.round((totalDuration * 100) / 12) / 100,

        // profitRateRealEstate: profitRatioRealEstates1,
           profitRateRealEstate: rateFinal,
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
        total: new Intl.NumberFormat().format(total.toFixed(0)),
        firstInstallment: new Intl.NumberFormat().format(
          (installment - xxxx).toFixed(0)
        ),
        percentageNow: percentageNow.toFixed(2),

        installmentBeforeRetirement: new Intl.NumberFormat().format(
          installmentBeforeNotReal.toFixed(0)
        ),
        installmentAfterRetirement: new Intl.NumberFormat().format(
          installmentAfterNotReal.toFixed(0)
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
        durationPersonal: Math.ceil(durationPerson),
        //تغير الكتابه

        nameAmountHousingSupport: outNameHosingSuppory,
        phoneOut: phoneToWattap,
        colorError: prentError,
        //----------
        maxDurationFirstInstallment: maxDurationFirstInstallmentCalc,
        colFirst: new Intl.NumberFormat().format(
          (installment - xxxx).toFixed(0)
        ),
        colSecend: new Intl.NumberFormat().format(installmentBeforeNotReal.toFixed(0)),
        colThrid: new Intl.NumberFormat().format(installmentAfterNotReal.toFixed(0)),
        house: new Intl.NumberFormat().format(amountHousingSupport),

        colFouer: colFouer,
        colFirstN: colFirstN,
        colSecendN: colSecendN,
        colThridN: colThridN,
        outPresonal: outPresonalN,
        outReal: outRealN,
        outAddministryDefense: outAddministryDefenseN,

        outBaqa: outBaqaN,
        totalDurationN: Math.round((totalDuration * 100) / 12) / 100,
        durationMinistryDefense: durationMinistryDefense.toFixed(0),
        installmentMinistryDefense: installmentMinistryDefense.toFixed(0),
        addministryDefenseC: new Intl.NumberFormat().format(addministryDefense),

    };
  } catch (e) { return null; }
};

// ============================================
// منطق حساب بنك الأهلي (alahli)
// ============================================
const calculateAlahli = (inputs) => {
  try {
    var calulationInputs = inputs;
 

 let liabilitiesSpecial={
    specialInstallmentC1R1: "",
    specialInstallmentC1R2: "",
    specialInstallmentC1R3: "",
    specialInstallmentC1R4: "",

    specialDurationC1R1: "",
    specialDurationC1R2: "",
    specialDurationC1R3: "",
    specialDurationC1R4: "",

    specialInstallmentC2R1: "",
    specialInstallmentC2R2: "",
    specialInstallmentC2R3: "",
    specialInstallmentC2R4: "",

    specialDurationC2R1: "",
    specialDurationC2R2: "",
    specialDurationC2R3: "",
    specialDurationC2R4: "",
  };

  const totalInstallmentSpecialC1 =
    1 * liabilitiesSpecial.specialInstallmentC1R1 +
    1 * liabilitiesSpecial.specialInstallmentC2R1;
  const totalInstallmentSpecialC2 =
    1 * liabilitiesSpecial.specialInstallmentC1R2 +
    1 * liabilitiesSpecial.specialInstallmentC2R2;
  const totalInstallmentSpecialC3 =
    1 * liabilitiesSpecial.specialInstallmentC1R3 +
    1 * liabilitiesSpecial.specialInstallmentC2R3;
  const totalInstallmentSpecialC4 =
    1 * liabilitiesSpecial.specialInstallmentC1R4 +
    1 * liabilitiesSpecial.specialInstallmentC2R4;

  var maxSpecialDurationc1 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R1,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc2 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R2,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc3 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R3,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc4 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R4,
    0 * liabilitiesSpecial.specialDurationC2R1
  );


    const liabilitiesSpecialTotal1 =
    1 *
      liabilitiesSpecial.specialInstallmentC1R1 *
      (1 * liabilitiesSpecial.specialDurationC1R1) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R2 *
      (1 * liabilitiesSpecial.specialDurationC1R2) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R3 *
      (1 * liabilitiesSpecial.specialDurationC1R3) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R4 *
      (1 * liabilitiesSpecial.specialDurationC1R4);
  const liabilitiesSpecialTotal2 =
    1 *
      liabilitiesSpecial.specialInstallmentC2R1 *
      (1 * liabilitiesSpecial.specialDurationC2R1) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R2 *
      (1 * liabilitiesSpecial.specialDurationC2R2) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R3 *
      (1 * liabilitiesSpecial.specialDurationC2R3) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R4 *
      (1 * liabilitiesSpecial.specialDurationC2R4);
  const totalLiabilitiesSpecial =
    liabilitiesSpecialTotal1 + liabilitiesSpecialTotal2;
    
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
          housingSupport = Math.ceil(
            ((10000 - calulationInputs.netSalary) * (673 - 599)) / 1000 + 599
          );
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(2) &&
          calulationInputs.housingSupport == "monthly"
        ) {
          housingSupport = Math.ceil(
            ((9000 - calulationInputs.netSalary) * (757 - 673)) / 1000 + 673
          );
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(3) &&
          calulationInputs.housingSupport == "monthly"
        ) {
          housingSupport = Math.ceil(
            ((8000 - calulationInputs.netSalary) * (850 - 757)) / 1000 + 757
          );
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(4) &&
          calulationInputs.housingSupport == "monthly"
        ) {
          housingSupport = Math.ceil(
            ((7000 - calulationInputs.netSalary) * (955 - 850)) / 1000 + 850
          );
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(5) &&
          calulationInputs.housingSupport == "monthly"
        ) {
          housingSupport = Math.ceil(
            ((6000 - calulationInputs.netSalary) * (1073 - 955)) / 1000 + 955
          );
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(6) &&
          calulationInputs.housingSupport == "monthly"
        ) {
          housingSupport = Math.ceil(
            ((5000 - calulationInputs.netSalary) * (1206 - 1073)) / 1000 + 1073
          );
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(7) &&
          calulationInputs.housingSupport == "monthly"
        ) {
          housingSupport = Math.ceil(
            ((4000 - calulationInputs.netSalary) * (1350 - 1206)) / 1000 + 1206
          );
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
          housingSupport2 = Math.ceil(
            ((10000 - calulationInputs.netSalary) * (673 - 599)) / 1000 + 599
          );
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(2) &&
          calulationInputs.housingSupport == "noMonthly"
        ) {
          housingSupport2 = Math.ceil(
            ((9000 - calulationInputs.netSalary) * (757 - 673)) / 1000 + 673
          );
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(3) &&
          calulationInputs.housingSupport == "noMonthly"
        ) {
          housingSupport2 = Math.ceil(
            ((8000 - calulationInputs.netSalary) * (850 - 757)) / 1000 + 757
          );
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(4) &&
          calulationInputs.housingSupport == "noMonthly"
        ) {
          housingSupport2 = Math.ceil(
            ((7000 - calulationInputs.netSalary) * (955 - 850)) / 1000 + 850
          );
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(5) &&
          calulationInputs.housingSupport == "noMonthly"
        ) {
          housingSupport2 = Math.ceil(
            ((6000 - calulationInputs.netSalary) * (1073 - 955)) / 1000 + 955
          );
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(6) &&
          calulationInputs.housingSupport == "noMonthly"
        ) {
          housingSupport2 = Math.ceil(
            ((5000 - calulationInputs.netSalary) * (1206 - 1073)) / 1000 + 1073
          );
        } else if (
          calulationInputs.netSalary >= arrayHousingSupportSalary.at(7) &&
          calulationInputs.housingSupport == "noMonthly"
        ) {
          housingSupport2 = Math.ceil(
            ((4000 - calulationInputs.netSalary) * (1350 - 1206)) / 1000 + 1206
          );
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
      var array1 = [75, 60, 60, 44, 46, 48, 50, 52, 44, 46, 48, 50, 52,54];
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
         "مقدم",
        "عقيد",
        "عميد",
      ];
      var array3 = [0, 75, 75, 70, 70, 70, 75, 75, 75, 75, 75,75, 75, 75];
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
        if ((calulationInputs.currentBank == "alahli")) {
          var maxDuration = 360;
        } else {
          var maxDuration = 300;
        }
      } else if (calulationInputs.housingSupport == "monthly") {
        var maxDuration = 240;
      } else {
        if ((calulationInputs.currentBank == "alahli")) {
          var maxDuration = 360;
        } else {
          var maxDuration = 300;
        }
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
        //3.35, 3.35, 3.35, 3.35, 3.35,3.35,3.4,3.45,3.5,3.55,3.6,3.65,3.7,3.75,3.8,3.85,3.9,3.95,3.95,3.95,3.95,4.3,4.35,4.4,4.45,4.5,4.55
        //3.29,3.29,3.29,3.29,3.29,3.29,3.29,3.65,3.65,3.65,3.65,3.75,3.75,3.75,3.75,3.75,4,4,4,4,4,4.4,4.4,4.4,4.4,4.4,4.4

        3.8,
        3.8, 3.8, 3.8, 3.8, 3.8, 3.9, 3.9, 3.9, 3.9, 3.9, 4.2, 4.2, 4.2, 4.2,
        4.2, 4.3, 4.3, 4.3, 4.3, 4.3, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5,
      ]; //نسب الفوائد للمدعوم

      var arrMinistryDefense = [
        2.5,2.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.65,3.65,3.65,3.65,3.65,3.75,3.75,3.75,3.75,3.75,3.85,3.85,3.85,3.85,3.85,3.85
        // 3.8,
        // 3.8, 3.8, 3.8, 3.8, 3.8, 3.9, 3.9, 3.9, 3.9, 3.9, 4.2, 4.2, 4.2, 4.2,
        // 4.2, 4.3, 4.3, 4.3, 4.3, 4.3, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5,
      ];

           

      var arrOutAhli=[
             3.8,
        3.8, 3.8, 3.8, 3.8, 3.8, 3.9, 3.9, 3.9, 3.9, 3.9, 4.2, 4.2, 4.2, 4.2,
        4.2, 4.3, 4.3, 4.3, 4.3, 4.3, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5,
        // 3.86,3.86,3.86,3.86,3.86,3.86,3.90,3.96,4.02,4.08,4.15,4.22,4.29,4.35,4.42,4.50,4.57,4.64,4.71,4.78,4.85,4.85
      ]

      //مصفوفه نسب الفوائد ثانيا غير المدعوم
      var durationRealEstates2 = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25, 26, 27, 28, 29, 30,
      ];
      var arr2 = [
        // 4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.13, 4.17, 4.22, 4.27, 4.33, 4.38,
        // 4.44, 4.5, 4.56, 4.62, 4.68, 4.74, 4.81, 4.87, 4.93, 5.0, 5.05, 5.11,
        // 5.17, 5.28, 5.33,

        //3.3,3.3,3.3,3.3,3.3,3.3,3.3,3.65,3.65,3.65,3.65,3.9,3.9,3.9,3.9,3.9,4.1,4.1,4.1,4.1,4.1,4.5,4.5,4.5,4.5,4.5,4.5
          4.7,
        4.7, 4.7, 4.7, 4.7, 4.7, 5.10, 5.10, 5.10, 5.10, 5.10, 5.30, 5.30, 5.30, 5.30,
        5.30, 5.5, 5.5, 5.5, 5.5, 5.5, 5.9, 5.9, 5.9, 5.9, 5.9, 5.9,
      ]; // الغير مدعوم راتب اقل من 10 الف
      var arr3 = [
        // 4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.13, 4.17, 4.22, 4.27, 4.33, 4.38,
        // 4.44, 4.5, 4.56, 4.62, 4.68, 4.74, 4.81, 4.87, 4.93, 5.0, 5.05, 5.11,
        // 5.17, 5.28, 5.33,

        //3.3,3.3,3.3,3.3,3.3,3.3,3.3,3.65,3.65,3.65,3.65,3.9,3.9,3.9,3.9,3.9,4.1,4.1,4.1,4.1,4.1,4.5,4.5,4.5,4.5,4.5,4.5

        4.7,
        4.7, 4.7, 4.7, 4.7, 4.7, 5.10, 5.10, 5.10, 5.10, 5.10, 5.30, 5.30, 5.30, 5.30,
        5.30, 5.5, 5.5, 5.5, 5.5, 5.5, 5.9, 5.9, 5.9, 5.9, 5.9, 5.9,
      ]; //الغير مدعوم راتب فوق 10 الف

      // تقريب مده التمويل الي الاعلي سنه
      var totalDurationUP = Math.floor(totalDuration / 12);

      if (
        calulationInputs.job == "متقاعد" ||
        calulationInputs.job == "خاص" ||
        calulationInputs.job == "مدني"
      ) {
        var ministryDefense1 = false;
      } else {
        var ministryDefense1 = true;
      }

      if (
        calulationInputs.ministryDefenseSelect === "yes" &&
        ministryDefense1 === true
      ) {
        var vl = durationRealEstates.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
        var profitRatioRealEstates1 = arrMinistryDefense.at(vl);
      } else {
        var vl = durationRealEstates.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
        var profitRatioRealEstates1 = arr1.at(vl); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
      }

      var v2 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates2 = arr2.at(v2); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      var v3 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates3 = arr3.at(v3); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
      
      
      var vo=durationRealEstates.indexOf(totalDurationUP)
      // var profitRateRealEstateOut=arrOutAhli.at(vo)
      
       var profitRateRealEstateOut = arr1.at(vl);
















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

      if (
        calulationInputs.job == array2.at(1) ||
        calulationInputs.job == array2.at(2)
      ) {
        var salaryAfter =
          (1 *
            calulationInputs.basicSalary *
            (12 * durationWork + durationBefore)) /
          480;
        // } else if (calulationInputs.job == array2.at(2)) {
        //   var salaryAfter =
        //     (1 *
        //       calulationInputs.basicSalary *
        //       (1 * calulationInputs.durationIn + durationBefore)) /
        //     480;
      } else if (calulationInputs.job == array2.at(0)) {
        var salaryAfter = 0;
      } else {
        var salaryAfter =
          (1 *
            calulationInputs.basicSalary *
            (12 * durationWork + durationBefore)) /
          420;
      }

      // if (calulationInputs.job == array2.at(0)) {
      //   var salaryAfter = 0;
      // } else if (
      //   calulationInputs.job == array2.at(1) &&
      //   maxxDurationBefore >= 60
      // ) {
      //   var salaryAfter = 0.8 * calulationInputs.netSalary;
      // } else if (
      //   calulationInputs.job == array2.at(1) &&
      //   maxxDurationBefore < 60
      // ) {
      //   var salaryAfter = 0.7 * calulationInputs.netSalary;
      // } else if (
      //   calulationInputs.job == array2.at(2) &&
      //   maxxDurationBefore >= 60
      // ) {
      //   var salaryAfter = 0.8 * calulationInputs.netSalary;
      // } else if (
      //   calulationInputs.job == array2.at(2) &&
      //   maxxDurationBefore < 60
      // ) {
      //   var salaryAfter = 0.7 * calulationInputs.netSalary;
      // } else if (
      //   calulationInputs.job == array2.at(3) &&
      //   maxxDurationBefore >= 60
      // ) {
      //   var salaryAfter = 0.7 * calulationInputs.netSalary;
      // } else if (
      //   calulationInputs.job == array2.at(3) &&
      //   maxxDurationBefore < 60
      // ) {
      //   var salaryAfter = 0.6 * calulationInputs.netSalary;
      // } else if (
      //   calulationInputs.job == array2.at(4) &&
      //   maxxDurationBefore >= 60
      // ) {
      //   var salaryAfter = 0.7 * calulationInputs.netSalary;
      // } else if (
      //   calulationInputs.job == array2.at(4) &&
      //   maxxDurationBefore < 60
      // ) {
      //   var salaryAfter = 0.6 * calulationInputs.netSalary;
      // } else if (
      //   calulationInputs.job == array2.at(5) &&
      //   maxxDurationBefore >= 60
      // ) {
      //   var salaryAfter = 0.7 * calulationInputs.netSalary;
      // } else if (
      //   calulationInputs.job == array2.at(5) &&
      //   maxxDurationBefore < 60
      // ) {
      //   var salaryAfter = 0.6 * calulationInputs.netSalary;
      // } else if (maxxDurationBefore >= 60) {
      //   var salaryAfter = 0.8 * calulationInputs.netSalary;
      // } else {
      //   var salaryAfter = 0.7 * calulationInputs.netSalary;
      // }

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
        var b = 1 * calulationInputs.editAmountHousingSupportBaqa;
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
          // var precentAfter = Math.min(55, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary < 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter < 15000
        ) {
          var precentBefore = Math.min(55, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
          //var precentAfter = Math.min(55, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary < 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(55, precentBeforeEdit1);
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
          salaryAfter < 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
          //var precentAfter = Math.min(55, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary < 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(55, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary < 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter < 15000
        ) {
          var precentBefore = Math.min(55, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
          // var precentAfter = Math.min(55, precentAfterEdit1);
        } else {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        }
      } else if (
        calulationInputs.netSalary < 10000 &&
        calulationInputs.housingSupport == "baqa" &&
        calulationInputs.editAmountHousingSupportBaqa != ""
      ) {
        var b = 1 * calulationInputs.editAmountHousingSupportBaqa;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        if (salaryAfter >= 15000) {
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else {
          // var precentAfter = Math.min(55, precentAfterEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        }

      } else if (
        calulationInputs.netSalary < 10000 &&
        calulationInputs.housingSupport == "baqa"
      ) {
        var b = 150000;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        if (salaryAfter >= 15000) {
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else {
          // var precentAfter = Math.min(55, precentAfterEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        }
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
      if (calulationInputs.job == "مدني" || calulationInputs.job == "متقاعد") {
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

      //==================================================

      if (
        calulationInputs.job == "متقاعد" ||
        calulationInputs.job == "خاص" ||
        calulationInputs.job == "مدني"
      ) {
        var ministryDefense = false;
      } else if (calulationInputs.housingSupport != "no") {
        var ministryDefense = true;
      } else {
        var ministryDefense = false;
      }
      if (ministryDefense && calulationInputs.ministryDefenseSelect === "yes") {
        var addministryDefense = 160000;

      
        //  var durationMinistryDefense = Math.min(240 - 24, totalDuration - 24);
           
       var durationMinistryDefense  = maxxDurationBefore ;


        if (calulationInputs.userMinistryDefense != "") {
          var installmentMinistryDefense =
            1 * calulationInputs.userMinistryDefense;
        } else {
          var installmentMinistryDefense =
            // addministryDefense / durationMinistryDefense;
            741
        }
      } else {
        var addministryDefense = 0;
        var durationMinistryDefense = 0;
        var installmentMinistryDefense = 0;
      }

      console.log(installmentMinistryDefense);
      console.log(liabilities);
      //=========================================================================
      //مبلغ الالتزامات الحاليه

      if (calulationInputs.newPersonalFinance == "yesNewPrsonal") {
        var liabilities =
          maxxDurationBefore *
            (1 * calulationInputs.installment1 +
              1 * calulationInputs.installment2 +
              1 * calulationInputs.installment3 +
              1 * calulationInputs.installment4 +
              installmentMinistryDefense) +
          totalLiabilitiesSpecial +
          PersonalFinance +
          profitPersonalFinance;
        var sl5 = personInstallment;
      } else {
        var liabilities =
          1 * calulationInputs.installment1 * calulationInputs.duration1 +
          totalLiabilitiesSpecial +
          maxxDurationBefore *
            (1 * calulationInputs.installment2 +
              1 * calulationInputs.installment3 +
              1 * calulationInputs.installment4 +
              installmentMinistryDefense);

        var sl5 = 0;
      }
      var maxDurationFirstInstallmentCalc = Math.max(
        1 * calulationInputs.duration1,
        1 * calulationInputs.duration2,
        1 * calulationInputs.duration3,
        1 * calulationInputs.duration4,
        durationPerson
      );
      var totalPercentageNow =
        1 * calulationInputs.installment1 +
        1 * calulationInputs.installment2 +
        1 * calulationInputs.installment3 +
        1 * calulationInputs.installment4 +
        sl5;
      var percentageNow =
        (100 * totalPercentageNow) / (1 * calulationInputs.netSalary);

      // التمويل العقاري
      // التمويل العقاري اولا حساب القسط الحقيقي

      if (calulationInputs.newPersonalFinance == "yesNewPrsonal") {
        var zxx =
          1 * calulationInputs.installment1 +
          1 * calulationInputs.installment2 +
          1 * calulationInputs.installment3 +
          1 * calulationInputs.installment4 +
          installmentMinistryDefense;
      } else {
        var zxx =
          1 * calulationInputs.installment2 +
          1 * calulationInputs.installment3 +
          1 * calulationInputs.installment4 +
          installmentMinistryDefense;
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
        installmentMinistryDefense -
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







var ifLiabilities = personInstallment +       1 * calulationInputs.installment1 +
          1 * calulationInputs.installment2 +
          1 * calulationInputs.installment3 +
          1 * calulationInputs.installment4 +   1 *
      liabilitiesSpecial.specialInstallmentC1R1 +   1 *
      liabilitiesSpecial.specialInstallmentC1R2 +  1 *
      liabilitiesSpecial.specialInstallmentC1R3 +  1 *
      liabilitiesSpecial.specialInstallmentC1R4 +  1 *
      liabilitiesSpecial.specialInstallmentC2R1 +  1 *
      liabilitiesSpecial.specialInstallmentC2R2 +     1 *
      liabilitiesSpecial.specialInstallmentC2R3 +1 *
      liabilitiesSpecial.specialInstallmentC2R4 


    

//       if (calulationInputs.netSalary == 0) {
//         var profitRatioRealEstates = 0;
//       } else if (calulationInputs.editProfitRateRealEstate != "") {
//         var profitRatioRealEstates = calulationInputs.editProfitRateRealEstate;



 
    
      

// console.log(liabilities,typeof(liabilities))
// console.log("test")
//       }else if(calulationInputs.housingSupport == "monthly" &&liabilities==0){

//            if(calulationInputs.currentBank == "alahli"){
//               var profitRatioRealEstates = profitRatioRealEstates1;
//            }else{
//            var profitRatioRealEstates = profitRateRealEstateOut;
//           }

//       }else if(calulationInputs.housingSupport == "baqa" &&liabilities==0){

//           if(calulationInputs.currentBank == "alahli"){
//               var profitRatioRealEstates = profitRatioRealEstates1;
//            }else{
//            var profitRatioRealEstates = profitRateRealEstateOut;
//           }

//       }else if(calulationInputs.housingSupport == "noMonthly" &&liabilities==0){

//         if(calulationInputs.currentBank == "alahli"){
//               var profitRatioRealEstates = profitRatioRealEstates1;
//            }else{
//            var profitRatioRealEstates = profitRateRealEstateOut;
//        }




       


//     }else if(calulationInputs.housingSupport == "monthly" && calulationInputs.ministryDefenseSelect === "no" &&
//         ministryDefense1 === false &&liabilities!=0){

//               if(calulationInputs.currentBank == "alahli"){
//               var profitRatioRealEstates = profitRatioRealEstates1+ 0.5;
//            }else{
//            var profitRatioRealEstates = profitRateRealEstateOut +0.5;
//            }



//    }else if( calulationInputs.housingSupport == "noMonthly" && calulationInputs.ministryDefenseSelect === "no" &&
//         ministryDefense1 === false &&liabilities!=0){

//        if(calulationInputs.currentBank == "alahli"){
//               var profitRatioRealEstates = profitRatioRealEstates1+0.5;
//            }else{
//            var profitRatioRealEstates = profitRateRealEstateOut+0.5;
//        }

//    }else if(calulationInputs.housingSupport == "baqa"  && calulationInputs.ministryDefenseSelect === "no" &&
//         ministryDefense1 === false && liabilities!=0){

//         if(calulationInputs.currentBank == "alahli"){
//               var profitRatioRealEstates = profitRatioRealEstates1+1;
//            }else{
//            var profitRatioRealEstates = profitRateRealEstateOut +1 ;
//        }

//       }else if(calulationInputs.housingSupport == "baqa"||calulationInputs.housingSupport == "noMonthly"||calulationInputs.housingSupport == "monthly"){
   

//        if(calulationInputs.currentBank == "alahli"){
//               var profitRatioRealEstates = profitRatioRealEstates1;
//            }else{
//            var profitRatioRealEstates = profitRateRealEstateOut;
//        }




//       } else if (
//         calulationInputs.housingSupport == "no" &&
//         calulationInputs.currentBank == "alahli"
//       ) {
//         var profitRatioRealEstates = profitRatioRealEstates2;
//       } else {
//         var profitRatioRealEstates = profitRatioRealEstates3;
//       }

//    var profitRatioRealEstates11 = profitRatioRealEstates;




























if (calulationInputs.netSalary == 0) {

 var profitRatioRealEstates = 0;

} else if (calulationInputs.editProfitRateRealEstate != "") {

  profitRatioRealEstates = calulationInputs.editProfitRateRealEstate;

/* ================= liabilities == 0 ================= */

} else if (
  liabilities == 0 &&
  (calulationInputs.housingSupport == "monthly" ||
   calulationInputs.housingSupport == "noMonthly")
) {

  profitRatioRealEstates =
    calulationInputs.currentBank == "alahli"
      ? profitRatioRealEstates1
      : profitRateRealEstateOut;


} else if (
  liabilities == 0 &&
  (
   calulationInputs.housingSupport == "baqa" 
 )
) {

  profitRatioRealEstates =
    calulationInputs.currentBank == "alahli"
      ? profitRatioRealEstates1+ 0.9
      : profitRateRealEstateOut+ 0.9;

/* ================= liabilities != 0 ================= */

} else if (
  liabilities != 0 &&
  calulationInputs.ministryDefenseSelect === "no" &&
  ministryDefense1 === false
) {

  if (calulationInputs.housingSupport == "baqa") {
    profitRatioRealEstates =
      calulationInputs.currentBank == "alahli"
        ? profitRatioRealEstates1 + 1.8
        : profitRateRealEstateOut + 1.8;
  } else {
    profitRatioRealEstates =
      calulationInputs.currentBank == "alahli"
        ? profitRatioRealEstates1 + 0.9
        : profitRateRealEstateOut + 0.9;
  }

/* ================= no support ================= */

} else if (
  calulationInputs.housingSupport == "no" &&
  calulationInputs.currentBank == "alahli"
) {

  profitRatioRealEstates = profitRatioRealEstates2;

} else {

  profitRatioRealEstates = profitRatioRealEstates3;
}

const profitRatioRealEstates11 = profitRatioRealEstates;








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
          (1 + (profitRatioRealEstates - 0) * 0.01 * (totalDuration / 12));
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
          (1 + (profitRatioRealEstates - 0) * 0.01 * (totalDuration / 12));
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
      var total =
        netRealEstateFinance + PersonalFinance + b + addministryDefense;

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
        // var amountHousingSupport = new Intl.NumberFormat().format(
        //   housingSupport1.toFixed(0)
        // );
        if (calulationInputs.housingSupport == "noMonthly") {
          var amountHousingSupport = housingSupport2;
        } else {
          var amountHousingSupport = housingSupport;
        }
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
          var netT = total / 0.7;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0.15 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        }
      }

      if (percentageNow > precentBefore) {
        var prentError = "red";
      } else {
        var prentError = "";
      }

      var phoneToWattap =
        "https://api.whatsapp.com/send?phone=" + calulationInputs.phone;
      if (
        calulationInputs.housingSupport == "baqa" ||
        calulationInputs.housingSupport == "noMonthly"
      ) {
        var amountHousingSupportN = 0;
      } else {
        var amountHousingSupportN = amountHousingSupport;
      }

      var colFouer = new Intl.NumberFormat().format(
        ((salaryAfter * precentAfter) / 100).toFixed(0)
      );
      var colFirstN = new Intl.NumberFormat().format(
        (installment - xxxx - amountHousingSupportN).toFixed(0)
      );
      var colSecendN = new Intl.NumberFormat().format(
        (installmentBefore - amountHousingSupportN).toFixed(0)
      );
      var colThridN = new Intl.NumberFormat().format(
        (installmentAfter - amountHousingSupportN).toFixed(0)
      );
      var outPresonalN = PersonalFinance;
      var outRealN = netRealEstateFinance;
      var outBaqaN = b;
      var outAddministryDefenseN = addministryDefense;






    return {
      bankName: 'الأهلي',
       age: ageClint,
        work: durationWork,

        durationBeforeRetirement: maxxDurationBefore.toFixed(0),
        durationAfterRetirement: maxxDurationAfter.toFixed(0),
        totalDuration: Math.round((totalDuration * 100) / 12) / 100,

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
        total: new Intl.NumberFormat().format(total.toFixed(0)),
        firstInstallment: new Intl.NumberFormat().format(
          (installment - xxxx).toFixed(0)
        ),

        percentageNow: percentageNow.toFixed(2),

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
        durationPersonal: Math.ceil(durationPerson),
        //تغير الكتابه

        nameAmountHousingSupport: outNameHosingSuppory,
        phoneOut: phoneToWattap,
        colorError: prentError,
        maxDurationFirstInstallment: maxDurationFirstInstallmentCalc,
        colFirst: new Intl.NumberFormat().format(
          (installment - xxxx).toFixed(0)
        ),
        colSecend: new Intl.NumberFormat().format(installmentBefore.toFixed(0)),
        colThrid: new Intl.NumberFormat().format(installmentAfter.toFixed(0)),
        house: new Intl.NumberFormat().format(amountHousingSupport),
        colFouer: colFouer,
        colFirstN: colFirstN,
        colSecendN: colSecendN,
        colThridN: colThridN,
        outPresonal: outPresonalN,
        outReal: outRealN,
        outAddministryDefense: outAddministryDefenseN,
        outBaqa: outBaqaN,
        totalDurationN: Math.round((totalDuration * 100) / 12) / 100,

        durationMinistryDefense: durationMinistryDefense.toFixed(0),
        installmentMinistryDefense: installmentMinistryDefense.toFixed(0),
        addministryDefenseC: new Intl.NumberFormat().format(addministryDefense),



    };
  } catch (e) { return null; }
};

// ============================================
// منطق حساب بنك البلاد (albilad)
// ============================================
const calculateAlbilad = (inputs) => {
  try {
    var calulationInputs = inputs;


 let liabilitiesSpecial={
    specialInstallmentC1R1: "",
    specialInstallmentC1R2: "",
    specialInstallmentC1R3: "",
    specialInstallmentC1R4: "",

    specialDurationC1R1: "",
    specialDurationC1R2: "",
    specialDurationC1R3: "",
    specialDurationC1R4: "",

    specialInstallmentC2R1: "",
    specialInstallmentC2R2: "",
    specialInstallmentC2R3: "",
    specialInstallmentC2R4: "",

    specialDurationC2R1: "",
    specialDurationC2R2: "",
    specialDurationC2R3: "",
    specialDurationC2R4: "",
  };

  const totalInstallmentSpecialC1 =
    1 * liabilitiesSpecial.specialInstallmentC1R1 +
    1 * liabilitiesSpecial.specialInstallmentC2R1;
  const totalInstallmentSpecialC2 =
    1 * liabilitiesSpecial.specialInstallmentC1R2 +
    1 * liabilitiesSpecial.specialInstallmentC2R2;
  const totalInstallmentSpecialC3 =
    1 * liabilitiesSpecial.specialInstallmentC1R3 +
    1 * liabilitiesSpecial.specialInstallmentC2R3;
  const totalInstallmentSpecialC4 =
    1 * liabilitiesSpecial.specialInstallmentC1R4 +
    1 * liabilitiesSpecial.specialInstallmentC2R4;

  var maxSpecialDurationc1 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R1,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc2 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R2,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc3 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R3,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc4 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R4,
    0 * liabilitiesSpecial.specialDurationC2R1
  );


    const liabilitiesSpecialTotal1 =
    1 *
      liabilitiesSpecial.specialInstallmentC1R1 *
      (1 * liabilitiesSpecial.specialDurationC1R1) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R2 *
      (1 * liabilitiesSpecial.specialDurationC1R2) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R3 *
      (1 * liabilitiesSpecial.specialDurationC1R3) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R4 *
      (1 * liabilitiesSpecial.specialDurationC1R4);
  const liabilitiesSpecialTotal2 =
    1 *
      liabilitiesSpecial.specialInstallmentC2R1 *
      (1 * liabilitiesSpecial.specialDurationC2R1) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R2 *
      (1 * liabilitiesSpecial.specialDurationC2R2) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R3 *
      (1 * liabilitiesSpecial.specialDurationC2R3) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R4 *
      (1 * liabilitiesSpecial.specialDurationC2R4);
  const totalLiabilitiesSpecial =
    liabilitiesSpecialTotal1 + liabilitiesSpecialTotal2;

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
        housingSupport = Math.ceil(
          ((10000 - calulationInputs.netSalary) * (673 - 599)) / 1000 + 599
        );
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(2) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = Math.ceil(
          ((9000 - calulationInputs.netSalary) * (757 - 673)) / 1000 + 673
        );
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(3) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = Math.ceil(
          ((8000 - calulationInputs.netSalary) * (850 - 757)) / 1000 + 757
        );
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(4) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = Math.ceil(
          ((7000 - calulationInputs.netSalary) * (955 - 850)) / 1000 + 850
        );
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(5) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = Math.ceil(
          ((6000 - calulationInputs.netSalary) * (1073 - 955)) / 1000 + 955
        );
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(6) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = Math.ceil(
          ((5000 - calulationInputs.netSalary) * (1206 - 1073)) / 1000 + 1073
        );
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(7) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = Math.ceil(
          ((4000 - calulationInputs.netSalary) * (1350 - 1206)) / 1000 + 1206
        );
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
        var ctHouse = true;
      } else {
        var ctHouse = false;
      }
      //متقاعد
      if (ctHouse === true && calulationInputs.currentBank == "albilad") {
        var ct = 70;
      } else if (ctHouse === true) {
        var ct = 70;
      } else {
        var ct = 70;
      }

      //الاعمار التقاعديه
      var array1 = [ct, 60, 60, 44, 46, 48, 50, 52, 44, 46, 48, 50,52, 54];
      var arPlus2 = [ct, 60, 60, 44, 46, 50, 52, 52, 46, 48, 50, 52, 54,54];
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
        "مقدم",
        "عقيد",
        "عميد",
      ];

      if (ctHouse === true && calulationInputs.currentBank == "albilad") {
        var array3 = [0, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75,75, 75];
      } else {
        var array3 = [0, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70,70, 70];
      }

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
        // calulationInputs.financingType == "normal" &&

        calulationInputs.typeException="yes"&&
        calulationInputs.housingSupport != "no"
      ) {
        var durationBefore = (ageBeforeRetirementPlus - ageClint) * 12;
      } else if (
        calulationInputs.financingType == "afterRetirement" &&
        calulationInputs.housingSupport != "no"
      ) {
        var durationBefore = (ageBeforeRetirementPlus - ageClint) * 12-3;
      } else {
        var durationBefore = (ageBeforeRetirement - ageClint) * 12-3;
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
      } else if (calulationInputs.housingSupport != "no") {
        durationAfter =
          (agePercentageAfterRetirement - ageBeforeRetirementPlus) * 12;
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
     3.9,3.9,4,4,4,4,4,4.03,4.05,4.06,4.08,4.1,4.13,4.15,4.16,4.18,4.2,4.3,4.3,4.3,4.3,4.3,4.4,4.4,4.4,4.4,4.4

      ]; //نسب الفوائد للمدعوم
      var arr12 = [
      4.3,4.3,4.4,4.4,4.4,4.4,4.4,4.43,4.45,4.46,4.48,4.5,4.53,4.55,4.56,4.58,4.6,4.7,4.7,4.7,4.7,4.7,4.8,4.8,4.8,4.8,4.8

      ];
      //مصفوفه نسب الفوائد ثانيا غير المدعوم
      var durationRealEstates2 = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25, 26, 27, 28, 29, 30,
      ];
      var arr2 = [
       3.9,3.9,4,4,4,4,4,4.02,4.05,4.07,4.09,4.1,4.12,4.15,4.17,4.19,4.2,4.22,4.25,4.27,4.29,4.3,4.4,4.4,4.4,4.4,4.4

      ]; //الغير مدعوم  البنك
      var arr3 = [
     4.4,4.4,4.5,4.5,4.5,4.5,4.5,4.52,4.55,4.57,4.59,4.6,4.62,4.65,4.67,4.69,4.7,4.72,4.75,4.77,4.79,4.8,4.9,4.9,4.9,4.9,4.9

      ]; //الغير مدعوم خارج البنك


      // تقريب مده التمويل الي الاعلي سنه
      var totalDurationUP = Math.ceil(totalDuration / 12);

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
        calulationInputs.housingSupport == "no" &&
        calulationInputs.currentBank == "albilad" &&
        calulationInputs.job == "خاص" &&
        calulationInputs.privateSectorEmployee == "غير معتمد"
      ) {
        var profitRatioRealEstates = 1 * profitRatioRealEstates2 + 0.2;
      } else if (
        calulationInputs.housingSupport == "no" &&
        calulationInputs.currentBank == "albilad" &&
        calulationInputs.job != "خاص"
      ) {
        var profitRatioRealEstates = 1 * profitRatioRealEstates2;
      } else if (
        calulationInputs.housingSupport == "no" &&
        calulationInputs.currentBank != "albilad"
      ) {
        var profitRatioRealEstates = 1 * profitRatioRealEstates3;
      } else if (
        calulationInputs.housingSupport == "monthly" &&
        calulationInputs.currentBank == "albilad" &&
        calulationInputs.job != "خاص"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates1;
      } else if (
        calulationInputs.housingSupport == "baqa" &&
        calulationInputs.currentBank == "albilad" &&
        calulationInputs.job != "خاص"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates1 +0.5;
      } else if (
        calulationInputs.housingSupport == "monthly" &&
        calulationInputs.currentBank == "albilad" &&
        calulationInputs.job == "خاص" &&
        calulationInputs.privateSectorEmployee == "غير معتمد"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates1 + 0.2;
      } else if (
        calulationInputs.housingSupport == "baqa" &&
        calulationInputs.currentBank == "albilad" &&
        calulationInputs.job == "خاص" &&
        calulationInputs.privateSectorEmployee == "غير معتمد"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates1 + 0.2 +0.5;
      } else if (
        calulationInputs.housingSupport == "monthly" &&
        calulationInputs.currentBank != "albilad"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates12;
      } else if (
        calulationInputs.housingSupport == "baqa" &&
        calulationInputs.currentBank != "albilad"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates12 +0.5;
      } else if (
        calulationInputs.currentBank == "albilad" &&
        calulationInputs.housingSupport == "no"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates2;
      } else {
        var profitRatioRealEstates = profitRatioRealEstates3;
      }

      if(calulationInputs.job== "عريف"||calulationInputs.job=="جندي"){
       var profitRatioRealEstates=profitRatioRealEstates+0.2
      }
      var profitRatioRealEstates12 = profitRatioRealEstates;

      //   حساب مبلغ قسط الدعم اللي مش حقيقي  لتعديل مبلغ التمويل العقاري
      if (housingSupport == 0) {
        var housingSupportNotReal = 0;
      } else if (totalDuration <= 240) {
        var housingSupportNotReal =
          (housingSupport * maxxDurationBefore) / totalDuration;
      } else if (totalDuration > 240) {
        var housingSupportNotReal =
          (housingSupport * maxxDurationBefore) / totalDuration;
      } else {
        var housingSupportNotReal = 0;
      }

      //حساب الراتب التقاعدي
      if (calulationInputs.job == array2.at(1)) {
        var salaryAfter =
          (1 *
            calulationInputs.basicSalary *
            (12 * durationWork + durationBefore)) /
          492;
      } else if (calulationInputs.job == array2.at(2)) {
        var salaryAfter =
          (1 *
            calulationInputs.basicSalary *
            (1 * calulationInputs.durationIn + durationBefore)) /
          492;
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
        var b = 1 * calulationInputs.editAmountHousingSupportBaqa;
        if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa"
          //  && salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa"
          // && salaryAfter <= 15000
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
          calulationInputs.housingSupport == "baqa"
          // && salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa"
          // &&salaryAfter <= 15000
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
        var b = 1 * calulationInputs.editAmountHousingSupportBaqa;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        // if(salaryAfter >= 15000){
        //   var precentAfter = Math.min(65, precentAfterEdit1);
        // }else{
        //   var precentAfter = Math.min(55, precentAfterEdit1);
        // }
        var precentAfter = Math.min(55, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary < 10000 &&
        calulationInputs.housingSupport == "baqa"
      ) {
        var b = 150000;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        // if(salaryAfter >= 15000){
        //   var precentAfter = Math.min(65, precentAfterEdit1);
        // }else{
        //   var precentAfter = Math.min(55, precentAfterEdit1);
        // }
        var precentAfter = Math.min(55, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 15000 &&
        //  &&salaryAfter >= 15000
        calulationInputs.housingSupport == "no"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 15000 &&
        // &&salaryAfter < 15000
        calulationInputs.housingSupport == "no"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
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
      if (calulationInputs.job == "مدني" || calulationInputs.job == "متقاعد") {
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

      if (
        calulationInputs.job == "متقاعد" ||
        calulationInputs.job == "خاص" ||
        calulationInputs.job == "مدني"
      ) {
        var ministryDefense = false;
      } else if (calulationInputs.housingSupport != "no") {
        var ministryDefense = true;
      } else {
        var ministryDefense = false;
      }
      if (ministryDefense && calulationInputs.ministryDefenseSelect === "yes") {
        var addministryDefense = 160000;

       var durationMinistryDefense = Math.min(240 - 24, totalDuration - 24);
         

    

        if (calulationInputs.userMinistryDefense != "") {
          var installmentMinistryDefense =
            1 * calulationInputs.userMinistryDefense;
        } else {
          var installmentMinistryDefense =
            // addministryDefense / durationMinistryDefense;
            741
        }
      } else {
        var addministryDefense = 0;
        var durationMinistryDefense = 0;
        var installmentMinistryDefense = 0;
      }

      //مبلغ الالتزامات الحاليه

      var liabilities =
        1 * calulationInputs.installment1 * calulationInputs.duration1 +
        1 * calulationInputs.installment2 * calulationInputs.duration2 +
        1 * calulationInputs.installment3 * calulationInputs.duration3 +
        1 * calulationInputs.installment4 * calulationInputs.duration4 +
        installmentMinistryDefense * durationMinistryDefense +
        totalLiabilitiesSpecial +
        PersonalFinance +
        profitPersonalFinance;
      var sl5 = personInstallment;

      var maxDurationFirstInstallmentCalc = Math.max(
        1 * calulationInputs.duration1,
        1 * calulationInputs.duration2,
        1 * calulationInputs.duration3,
        1 * calulationInputs.duration4,
        durationPerson
      );
      var totalPercentageNow =
        1 * calulationInputs.installment1 +
        1 * calulationInputs.installment2 +
        1 * calulationInputs.installment3 +
        1 * calulationInputs.installment4 +
        sl5;
      var percentageNow =
        (100 * totalPercentageNow) / (1 * calulationInputs.netSalary);
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
        (precentAfter * (1 * salaryAfter + 1 * housingSupportNotReal)) / 100;

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

      if (
        calulationInputs.job == "متقاعد" ||
        calulationInputs.job == "خاص" ||
        calulationInputs.job == "مدني"
      ) {
        var ministryDefense = false;
      } else if (calulationInputs.housingSupport != "no") {
        var ministryDefense = true;
      } else {
        var ministryDefense = false;
      }
      if (ministryDefense && calulationInputs.ministryDefenseSelect === "yes") {
        var addministryDefense = 160000;
      } else {
        var addministryDefense = 0;
      }

      // التمويل العقاري سادسا حساب  اجمالي المده للتمويل
      var total =
        netRealEstateFinance + PersonalFinance + b + addministryDefense;

      if (calulationInputs.housingSupport == "baqa") {
        var outNameHosingSuppory = "باقة الدعم";
        var amountHousingSupport = b;
      } else if (calulationInputs.housingSupport == "no") {
        var outNameHosingSuppory = "الدعم السكني";
        var amountHousingSupport = 0;
      } else {
        var outNameHosingSuppory = "قسط الدعم";
        // var amountHousingSupport = new Intl.NumberFormat().format(
        //   housingSupport.toFixed(0)
        // );
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
          var netT = total / 0.7;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        }
      }
      if (percentageNow > precentBefore) {
        var prentError = "red";
      } else {
        var prentError = "";
      }

      var phoneToWattap =
        "https://api.whatsapp.com/send?phone=" + calulationInputs.phone;
      if (
        calulationInputs.housingSupport == "baqa" ||
        calulationInputs.housingSupport == "noMonthly"
      ) {
        var amountHousingSupportN = 0;
      } else {
        var amountHousingSupportN = amountHousingSupport;
      }

      var colFouer = new Intl.NumberFormat().format(
        ((salaryAfter * precentAfter) / 100).toFixed(0)
      );
      var colFirstN = new Intl.NumberFormat().format(
        (installment - xxxx - amountHousingSupportN).toFixed(0)
      );
      var colSecendN = new Intl.NumberFormat().format(
        (installmentBefore - amountHousingSupportN).toFixed(0)
      );
      var colThridN = new Intl.NumberFormat().format(
        (installmentAfter - amountHousingSupportN).toFixed(0)
      );
      var outPresonalN = PersonalFinance;
      var outRealN = netRealEstateFinance;
      var outBaqaN = b;
      var outAddministryDefenseN = addministryDefense;


    
    return {
      bankName: 'البلاد',
  age: ageClint,
        work: durationWork,

        durationBeforeRetirement: maxxDurationBefore.toFixed(0),
        durationAfterRetirement: maxxDurationAfter.toFixed(0),
        totalDuration: Math.round((totalDuration * 100) / 12) / 100,

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
        total: new Intl.NumberFormat().format(total.toFixed(0)),
        firstInstallment: new Intl.NumberFormat().format(
          (installment - xxxx).toFixed(0)
        ),
        percentageNow: percentageNow.toFixed(2),

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
        durationPersonal: Math.ceil(durationPerson),
        //تغير الكتابه

        nameAmountHousingSupport: outNameHosingSuppory,
        phoneOut: phoneToWattap,
        colorError: prentError,
        maxDurationFirstInstallment: maxDurationFirstInstallmentCalc,
        colFirst: new Intl.NumberFormat().format(
          (installment - xxxx).toFixed(0)
        ),
        colSecend: new Intl.NumberFormat().format(installmentBefore.toFixed(0)),
        colThrid: new Intl.NumberFormat().format(installmentAfter.toFixed(0)),
        house: new Intl.NumberFormat().format(amountHousingSupport),
        colFouer: colFouer,
        colFirstN: colFirstN,
        colSecendN: colSecendN,
        colThridN: colThridN,
        outPresonal: outPresonalN,
        outReal: outRealN,
        outAddministryDefense: outAddministryDefenseN,
        outBaqa: outBaqaN,
        totalDurationN: Math.round((totalDuration * 100) / 12) / 100,
        durationMinistryDefense: durationMinistryDefense.toFixed(0),
        installmentMinistryDefense: installmentMinistryDefense.toFixed(0),
        addministryDefenseC: new Intl.NumberFormat().format(addministryDefense),


    };
  } catch (e) { return null; }
};

// ============================================
// منطق حساب بنك ساب (sab)
// ============================================
const calculateSab = (inputs) => {
  try {
    var calulationInputs = inputs;


 let liabilitiesSpecial={
    specialInstallmentC1R1: "",
    specialInstallmentC1R2: "",
    specialInstallmentC1R3: "",
    specialInstallmentC1R4: "",

    specialDurationC1R1: "",
    specialDurationC1R2: "",
    specialDurationC1R3: "",
    specialDurationC1R4: "",

    specialInstallmentC2R1: "",
    specialInstallmentC2R2: "",
    specialInstallmentC2R3: "",
    specialInstallmentC2R4: "",

    specialDurationC2R1: "",
    specialDurationC2R2: "",
    specialDurationC2R3: "",
    specialDurationC2R4: "",
  };

  const totalInstallmentSpecialC1 =
    1 * liabilitiesSpecial.specialInstallmentC1R1 +
    1 * liabilitiesSpecial.specialInstallmentC2R1;
  const totalInstallmentSpecialC2 =
    1 * liabilitiesSpecial.specialInstallmentC1R2 +
    1 * liabilitiesSpecial.specialInstallmentC2R2;
  const totalInstallmentSpecialC3 =
    1 * liabilitiesSpecial.specialInstallmentC1R3 +
    1 * liabilitiesSpecial.specialInstallmentC2R3;
  const totalInstallmentSpecialC4 =
    1 * liabilitiesSpecial.specialInstallmentC1R4 +
    1 * liabilitiesSpecial.specialInstallmentC2R4;

  var maxSpecialDurationc1 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R1,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc2 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R2,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc3 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R3,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc4 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R4,
    0 * liabilitiesSpecial.specialDurationC2R1
  );


    const liabilitiesSpecialTotal1 =
    1 *
      liabilitiesSpecial.specialInstallmentC1R1 *
      (1 * liabilitiesSpecial.specialDurationC1R1) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R2 *
      (1 * liabilitiesSpecial.specialDurationC1R2) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R3 *
      (1 * liabilitiesSpecial.specialDurationC1R3) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R4 *
      (1 * liabilitiesSpecial.specialDurationC1R4);
  const liabilitiesSpecialTotal2 =
    1 *
      liabilitiesSpecial.specialInstallmentC2R1 *
      (1 * liabilitiesSpecial.specialDurationC2R1) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R2 *
      (1 * liabilitiesSpecial.specialDurationC2R2) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R3 *
      (1 * liabilitiesSpecial.specialDurationC2R3) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R4 *
      (1 * liabilitiesSpecial.specialDurationC2R4);
  const totalLiabilitiesSpecial =
    liabilitiesSpecialTotal1 + liabilitiesSpecialTotal2;
     //  مصفوفه الدعم ع حسب الراتب
      var arrayHousingSupportSalary = [
        3999, 4999, 5999, 6999, 7999, 8999, 9999, 10000, 10001,
      ];
      var arrayHousingSupport = [
        1350, 1206, 1073, 955, 850, 757, 673, 599, 416,
      ];

      //حساب قسط الدعم
      // if (
      //   calulationInputs.netSalary == 0 &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   var housingSupport = 0;
      // } else if (
      //   calulationInputs.netSalary != 0 &&
      //   calulationInputs.housingSupport == "monthly" &&
      //   calulationInputs.editAmountHousingSupport != ""
      // ) {
      //   housingSupport = calulationInputs.editAmountHousingSupport;
      // } else if (
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(0) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(0);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(0) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(1) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(1);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(1) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(2) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(2);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(2) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(3) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(3);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(3) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(4) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(4);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(4) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(5) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(5);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(5) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(6) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(6);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(6) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(7) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(7);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(8) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(8);
      // } else {
      //   housingSupport = 0;
      // }

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
      var durationWork1 = ((monthWork + yearWork * 12) / 12).toFixed(2);

      
      var durationWork = parseFloat(((durationWork1 * 354.334) / 365).toFixed(2)) + 2;

      var monthClint =
        calulationInputs.currentMonth - calulationInputs.birthMonth;
      var yearClint = calulationInputs.currentYear - calulationInputs.birthYear;
      var ageClint1 = ((monthClint + yearClint * 12) / 12);
      var ageClint = parseFloat(((ageClint1 * 354.334) / 365).toFixed(2)) + 2;

 

   



      //الاعمار التقاعديه
      var array1 = [77, 65, 65, 44, 46, 48, 50, 52, 44, 46, 48, 50, 52,54];
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
         "مقدم",
        "عقيد",
        "عميد",
      ];
      var array3 = [0, 77, 77, 77, 77, 77, 77, 77, 77, 77,77, 77, 77, 77];
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
      }else if(calulationInputs.currentBank!="sab"){
        var maxDuration = 300;
      } else if (calulationInputs.housingSupport == "baqa") {
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
      3.32,3.32,3.57,3.57,3.57,3.57,3.57,3.59,3.61,3.62,3.67,3.72,3.76,3.79,3.82,3.85,3.89,4.25,4.35,4.45,4.5,4.55,4.6,4.7,4.8,4.9,4.95

      ]; //نسب الفوائد للمدعوم


   


    
      
      var arr1sOut = [
3.43,3.43,3.58,3.58,3.58,3.58,3.58,3.63,3.63,3.75,3.85,3.9,3.98,4.05,4.1,4.2,4.25,4.34,4.37,4.45,4.5,4.6

      ];

   var arr1NoLib = [3.25,3.25,3.3,3.3,3.3,3.3,3.3,3.35,3.4,3.45,3.5,3.55,3.6,3.65,3.7,3.72,3.74,3.8,3.95,4,4.05,4.1,4.15,4.2,4.25,4.3,4.45
]

      //مصفوفه نسب الفوائد ثانيا غير المدعوم
      var durationRealEstates2 = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25, 26, 27, 28, 29, 30,
      ];
      var arr2 = [
3.4,3.4,3.75,3.75,3.75,3.75,3.75,3.8,3.85,3.9,3.95,4,4.15,4.18,4.2,4.23,4.25,4.3,4.4,4.5,4.55,4.6,4.75,4.85,4.95,5.05,5.2

      ]; // الغير مدعوم راتب اقل من 10 الف
    
    
      //   var arr3 = [
    // 3.4,3.4,3.75,3.75,3.75,3.75,3.75,3.8,3.85,3.9,3.95,4,4.15,4.18,4.2,4.23,4.25,4.3,4.4,4.5,4.55,4.6,4.75,4.85,4.95,5.05,5.2

    //   ]; //الغير مدعوم راتب فوق 10 الف

      // تقريب مده التمويل الي الاعلي سنه
      var totalDurationUP = Math.ceil(totalDuration / 12);
      
      var vl = durationRealEstates.indexOf(totalDurationUP); 
      var profitRatioRealEstates1 = arr1.at(vl); 
       var profitRatioRealEstates2 = arr1sOut.at(vl); 
    var profitRatioRealEstates3 = arr1NoLib.at(vl); 


     var v2 = durationRealEstates2.indexOf(totalDurationUP)
    var profitRatioRealEstates4 = arr2.at(v2); 


      // var vl = durationRealEstates.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      // var profitRatioRealEstates1 = arr1.at(vl); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      // var profitRatioRealEstates1s = arr1s.at(vl);
      // var v2 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      // var profitRatioRealEstates2 = arr2.at(v2); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      // var v3 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      // var profitRatioRealEstates3 = arr3.at(v3); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      // var profitRatioRealEstates = profitRatioRealEstates3;

//       if (calulationInputs.netSalary == 0) {
//         var profitRatioRealEstates = 0;
//       } else if (calulationInputs.editProfitRateRealEstate != "") {
//         var profitRatioRealEstates = calulationInputs.editProfitRateRealEstate;
//       } else if (
//         calulationInputs.privateSectorEmployee == "cd" &&
//         calulationInputs.job == "خاص"
//       ) {
//         var profitRatioRealEstates = profitRatioRealEstates2;
//       } else if (
//         calulationInputs.privateSectorEmployee == "غير معتمد" &&
//         calulationInputs.job == "خاص"
//       ) {
//         var profitRatioRealEstates = profitRatioRealEstates2;
//       } else {
//         var profitRatioRealEstates = profitRatioRealEstates1s;
//       }

// if(calulationInputs.typeException=="yes"){
//   var profitRatioRealEstates1 = profitRatioRealEstates- 0.1;
// }else{
//   var profitRatioRealEstates1 = profitRatioRealEstates;
// }


    




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
        var precentAfter = Math.min(55, precentAfterEdit1);
        // var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary != 0 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(55, precentAfterEdit1);
        // var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.housingSupport == "baqa" &&
        calulationInputs.editAmountHousingSupportBaqa != ""
      ) {
        var b = 1 * calulationInputs.editAmountHousingSupportBaqa;
        if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(55, precentAfterEdit1);
          // var precentAfter = Math.min(65, precentAfterEdit1);
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
          var precentAfter = Math.min(55, precentAfterEdit1);
          // var precentAfter = Math.min(65, precentAfterEdit1);
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
        var b = 1 * calulationInputs.editAmountHousingSupportBaqa;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        if (salaryAfter >= 15000) {
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else {
          var precentAfter = Math.min(55, precentAfterEdit1);
        }
      } else if (
        calulationInputs.netSalary < 10000 &&
        calulationInputs.housingSupport == "baqa"
      ) {
        var b = 150000;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        if (salaryAfter >= 15000) {
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else {
          var precentAfter = Math.min(55, precentAfterEdit1);
        }
      } else if (
        calulationInputs.netSalary >= 15000 &&
        salaryAfter >= 15000 &&
        calulationInputs.housingSupport == "no"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(55, precentAfterEdit1);
        // var precentAfter = Math.min(65, precentAfterEdit1);
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
      if (calulationInputs.job == "مدني" || calulationInputs.job == "متقاعد") {
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

      if (
        calulationInputs.job == "متقاعد" ||
        calulationInputs.job == "خاص" ||
        calulationInputs.job == "مدني"
      ) {
        var ministryDefense = false;
      } else if (calulationInputs.housingSupport != "no") {
        var ministryDefense = true;
      } else {
        var ministryDefense = false;
      }
      if (ministryDefense && calulationInputs.ministryDefenseSelect === "yes") {
        var addministryDefense = 160000;

        var durationMinistryDefense = 0;
        var installmentMinistryDefense = 1;
      } else {
        var addministryDefense = 0;
        var durationMinistryDefense = 0;
        var installmentMinistryDefense = 0;
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
          totalLiabilitiesSpecial +
          PersonalFinance +
          profitPersonalFinance;
        var sl5 = personInstallment;
      } else {
        var liabilities =
          1 * calulationInputs.installment1 * calulationInputs.duration1 +
          totalLiabilitiesSpecial +
          maxxDurationBefore *
            (1 * calulationInputs.installment2 +
              1 * calulationInputs.installment3 +
              1 * calulationInputs.installment4);
        var sl5 = 0;
      }
      var maxDurationFirstInstallmentCalc = Math.max(
        1 * calulationInputs.duration1,
        1 * calulationInputs.duration2,
        1 * calulationInputs.duration3,
        1 * calulationInputs.duration4,
        durationPerson
      );
      var totalPercentageNow =
        1 * calulationInputs.installment1 +
        1 * calulationInputs.installment2 +
        1 * calulationInputs.installment3 +
        1 * calulationInputs.installment4 +
        sl5;
      var percentageNow =
        (100 * totalPercentageNow) / (1 * calulationInputs.netSalary);

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



      if (calulationInputs.netSalary == 0) {
        var profitRatioRealEstates = 0;
      } else if (calulationInputs.editProfitRateRealEstate != "") {
        var profitRatioRealEstates = calulationInputs.editProfitRateRealEstate;

      } else if (liabilities==0
      ) {
        var profitRatioRealEstates = profitRatioRealEstates3;

   } else if (calulationInputs.currentBank!="sab" &&  calulationInputs.housingSupport === "monthly" 
     

      ) {
        var profitRatioRealEstates = profitRatioRealEstates2;

 } else if (calulationInputs.currentBank!="sab" &&      calulationInputs.housingSupport === "baqa"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates2;
 } else if (calulationInputs.currentBank!="sab"
     

      ) {
        var profitRatioRealEstates = profitRatioRealEstates2 + 0.8;



      } else if (
        calulationInputs.privateSectorEmployee == "cd" &&
        calulationInputs.job == "خاص"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates4;
      } else if (
        calulationInputs.privateSectorEmployee == "غير معتمد" &&
        calulationInputs.job == "خاص"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates4;
      } else {
        var profitRatioRealEstates = profitRatioRealEstates1;
      }

if(calulationInputs.typeException=="yes"){
  var profitRatioRealEstates1f = profitRatioRealEstates- 0.1;
}else{
  var profitRatioRealEstates1f = profitRatioRealEstates;
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
          (1 + (profitRatioRealEstates1f - 0) * 0.01 * (totalDuration / 12));
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
          (1 + (profitRatioRealEstates1f - 0) * 0.01 * (totalDuration / 12));
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
          (1 + profitRatioRealEstates1f * 0.01 * (totalDuration / 12));
      }

      var xxxx = 1 * prcent1 * 1 * calulationInputs.netSalary;
      //التمويل العقاري خامسا حساب فوائد للتمويل
      var totalProfitEstateFinance =
        totalRealEstateFinance - netRealEstateFinance;
      var netProfitEstateFinance =
        totalProfitEstateFinance -
        housingSupport * Math.min(240, totalDuration);

      if (
        calulationInputs.job == "متقاعد" ||
        calulationInputs.job == "خاص" ||
        calulationInputs.job == "مدني"
      ) {
        var ministryDefense = false;
      } else if (calulationInputs.housingSupport != "no") {
        var ministryDefense = true;
      } else {
        var ministryDefense = false;
      }
      if (ministryDefense && calulationInputs.ministryDefenseSelect === "yes") {
        var addministryDefense = 160000;
      } else {
        var addministryDefense = 0;
      }

      // التمويل العقاري سادسا حساب  اجمالي المده للتمويل
      var total =
        netRealEstateFinance + PersonalFinance + b + addministryDefense;

      if (calulationInputs.housingSupport == "baqa") {
        var outNameHosingSuppory = "باقة الدعم";
        var amountHousingSupport = b;
      } else if (calulationInputs.housingSupport == "no") {
        var outNameHosingSuppory = "الدعم السكني";
        var amountHousingSupport = 0;
      } else {
        var outNameHosingSuppory = "قسط الدعم";
        // var amountHousingSupport = new Intl.NumberFormat().format(
        //   housingSupport.toFixed(0)
        // );
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
          var netT = total / 0.7;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        }
      }
      if (percentageNow > precentBefore) {
        var prentError = "red";
      } else {
        var prentError = "";
      }

      var phoneToWattap =
        "https://api.whatsapp.com/send?phone=" + calulationInputs.phone;
      if (
        calulationInputs.housingSupport == "baqa" ||
        calulationInputs.housingSupport == "noMonthly"
      ) {
        var amountHousingSupportN = 0;
      } else {
        var amountHousingSupportN = amountHousingSupport;
      }
      var colFouer = new Intl.NumberFormat().format(
        ((salaryAfter * precentAfter) / 100).toFixed(0)
      );
      var colFirstN = new Intl.NumberFormat().format(
        (installment - xxxx - amountHousingSupportN).toFixed(0)
      );
      var colSecendN = new Intl.NumberFormat().format(
        (installmentBefore - amountHousingSupportN).toFixed(0)
      );
      var colThridN = new Intl.NumberFormat().format(
        (installmentAfter - amountHousingSupportN).toFixed(0)
      );
      var outPresonalN = PersonalFinance;
      var outRealN = netRealEstateFinance;
      var outBaqaN = b;
      var outAddministryDefenseN = addministryDefense;


 
    return {
      bankName: 'ساب (SAB)',
        age: ageClint,
        work: durationWork,

        durationBeforeRetirement: maxxDurationBefore.toFixed(0),
        durationAfterRetirement: maxxDurationAfter.toFixed(0),
        totalDuration: Math.round((totalDuration * 100) / 12) / 100,

        profitRateRealEstate: profitRatioRealEstates1f.toFixed(2),
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
        total: new Intl.NumberFormat().format(total.toFixed(0)),
        firstInstallment: new Intl.NumberFormat().format(
          (installment - xxxx).toFixed(0)
        ),
        percentageNow: percentageNow.toFixed(2),

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
        durationPersonal: Math.ceil(durationPerson),
        //تغير الكتابه

        nameAmountHousingSupport: outNameHosingSuppory,
        phoneOut: phoneToWattap,
        colorError: prentError,
        maxDurationFirstInstallment: maxDurationFirstInstallmentCalc,
        colFirst: new Intl.NumberFormat().format(
          (installment - xxxx).toFixed(0)
        ),
        colSecend: new Intl.NumberFormat().format(installmentBefore.toFixed(0)),
        colThrid: new Intl.NumberFormat().format(installmentAfter.toFixed(0)),
        house: new Intl.NumberFormat().format(amountHousingSupport),
        colFouer: colFouer,
        colFirstN: colFirstN,
        colSecendN: colSecendN,
        colThridN: colThridN,
        outPresonal: outPresonalN,
        outReal: outRealN,
        outAddministryDefense: outAddministryDefenseN,
        outBaqa: outBaqaN,
        totalDurationN: Math.round((totalDuration * 100) / 12) / 100,
        durationMinistryDefense: durationMinistryDefense.toFixed(0),
        installmentMinistryDefense: installmentMinistryDefense.toFixed(0),
        addministryDefenseC: new Intl.NumberFormat().format(addministryDefense),


    };
  } catch (e) { return null; }
};

// ============================================
// منطق حساب بنك الإنماء (alinma)
// ============================================
const calculateAlinma = (inputs) => {
  try {
    var calulationInputs = inputs;

 let liabilitiesSpecial={
    specialInstallmentC1R1: "",
    specialInstallmentC1R2: "",
    specialInstallmentC1R3: "",
    specialInstallmentC1R4: "",

    specialDurationC1R1: "",
    specialDurationC1R2: "",
    specialDurationC1R3: "",
    specialDurationC1R4: "",

    specialInstallmentC2R1: "",
    specialInstallmentC2R2: "",
    specialInstallmentC2R3: "",
    specialInstallmentC2R4: "",

    specialDurationC2R1: "",
    specialDurationC2R2: "",
    specialDurationC2R3: "",
    specialDurationC2R4: "",
  };

  const totalInstallmentSpecialC1 =
    1 * liabilitiesSpecial.specialInstallmentC1R1 +
    1 * liabilitiesSpecial.specialInstallmentC2R1;
  const totalInstallmentSpecialC2 =
    1 * liabilitiesSpecial.specialInstallmentC1R2 +
    1 * liabilitiesSpecial.specialInstallmentC2R2;
  const totalInstallmentSpecialC3 =
    1 * liabilitiesSpecial.specialInstallmentC1R3 +
    1 * liabilitiesSpecial.specialInstallmentC2R3;
  const totalInstallmentSpecialC4 =
    1 * liabilitiesSpecial.specialInstallmentC1R4 +
    1 * liabilitiesSpecial.specialInstallmentC2R4;

  var maxSpecialDurationc1 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R1,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc2 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R2,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc3 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R3,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc4 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R4,
    0 * liabilitiesSpecial.specialDurationC2R1
  );


    const liabilitiesSpecialTotal1 =
    1 *
      liabilitiesSpecial.specialInstallmentC1R1 *
      (1 * liabilitiesSpecial.specialDurationC1R1) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R2 *
      (1 * liabilitiesSpecial.specialDurationC1R2) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R3 *
      (1 * liabilitiesSpecial.specialDurationC1R3) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R4 *
      (1 * liabilitiesSpecial.specialDurationC1R4);
  const liabilitiesSpecialTotal2 =
    1 *
      liabilitiesSpecial.specialInstallmentC2R1 *
      (1 * liabilitiesSpecial.specialDurationC2R1) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R2 *
      (1 * liabilitiesSpecial.specialDurationC2R2) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R3 *
      (1 * liabilitiesSpecial.specialDurationC2R3) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R4 *
      (1 * liabilitiesSpecial.specialDurationC2R4);
  const totalLiabilitiesSpecial =
    liabilitiesSpecialTotal1 + liabilitiesSpecialTotal2;


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
        housingSupport = Math.ceil(
          ((10000 - calulationInputs.netSalary) * (673 - 599)) / 1000 + 599
        );
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(2) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = Math.ceil(
          ((9000 - calulationInputs.netSalary) * (757 - 673)) / 1000 + 673
        );
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(3) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = Math.ceil(
          ((8000 - calulationInputs.netSalary) * (850 - 757)) / 1000 + 757
        );
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(4) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = Math.ceil(
          ((7000 - calulationInputs.netSalary) * (955 - 850)) / 1000 + 850
        );
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(5) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = Math.ceil(
          ((6000 - calulationInputs.netSalary) * (1073 - 955)) / 1000 + 955
        );
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(6) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = Math.ceil(
          ((5000 - calulationInputs.netSalary) * (1206 - 1073)) / 1000 + 1073
        );
      } else if (
        calulationInputs.netSalary >= arrayHousingSupportSalary.at(7) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = Math.ceil(
          ((4000 - calulationInputs.netSalary) * (1350 - 1206)) / 1000 + 1206
        );
      } else {
        housingSupport = 0;
      }



      // //  مصفوفه الدعم ع حسب الراتب
      // var arrayHousingSupportSalary = [
      //   3999, 4999, 5999, 6999, 7999, 8999, 9999, 10000, 10001,
      // ];
      // var arrayHousingSupport = [
      //   1350, 1206, 1073, 955, 850, 757, 673, 599, 416,
      // ];

      // //حساب قسط الدعم

      // if (calulationInputs.housingSupport == "monthly") {
      //   if (
      //     calulationInputs.netSalary == 0 &&
      //     calulationInputs.housingSupport == "monthly"
      //   ) {
      //     var housingSupport = 0;
      //   } else if (
      //     calulationInputs.netSalary != 0 &&
      //     calulationInputs.housingSupport == "monthly" &&
      //     calulationInputs.editAmountHousingSupport != ""
      //   ) {
      //     housingSupport = calulationInputs.editAmountHousingSupport;
      //   } else if (
      //     calulationInputs.netSalary > arrayHousingSupportSalary.at(0) &&
      //     calulationInputs.housingSupport == "monthly"
      //   ) {
      //     housingSupport = arrayHousingSupport.at(0);
      //   } else if (
      //     calulationInputs.netSalary == arrayHousingSupportSalary.at(0) &&
      //     calulationInputs.housingSupport == "monthly"
      //   ) {
      //     housingSupport = arrayHousingSupport.at(1);
      //   } else if (
      //     calulationInputs.netSalary >= arrayHousingSupportSalary.at(1) &&
      //     calulationInputs.netSalary <= arrayHousingSupportSalary.at(2) &&
      //     calulationInputs.housingSupport == "monthly"
      //   ) {
      //     housingSupport = Math.ceil(
      //       ((10000 - calulationInputs.netSalary) * (673 - 599)) / 1000 + 599
      //     );
      //   } else if (
      //     calulationInputs.netSalary >= arrayHousingSupportSalary.at(2) &&
      //     calulationInputs.housingSupport == "monthly"
      //   ) {
      //     housingSupport = Math.ceil(
      //       ((9000 - calulationInputs.netSalary) * (757 - 673)) / 1000 + 673
      //     );
      //   } else if (
      //     calulationInputs.netSalary >= arrayHousingSupportSalary.at(3) &&
      //     calulationInputs.housingSupport == "monthly"
      //   ) {
      //     housingSupport = Math.ceil(
      //       ((8000 - calulationInputs.netSalary) * (850 - 757)) / 1000 + 757
      //     );
      //   } else if (
      //     calulationInputs.netSalary >= arrayHousingSupportSalary.at(4) &&
      //     calulationInputs.housingSupport == "monthly"
      //   ) {
      //     housingSupport = Math.ceil(
      //       ((7000 - calulationInputs.netSalary) * (955 - 850)) / 1000 + 850
      //     );
      //   } else if (
      //     calulationInputs.netSalary >= arrayHousingSupportSalary.at(5) &&
      //     calulationInputs.housingSupport == "monthly"
      //   ) {
      //     housingSupport = Math.ceil(
      //       ((6000 - calulationInputs.netSalary) * (1073 - 955)) / 1000 + 955
      //     );
      //   } else if (
      //     calulationInputs.netSalary >= arrayHousingSupportSalary.at(6) &&
      //     calulationInputs.housingSupport == "monthly"
      //   ) {
      //     housingSupport = Math.ceil(
      //       ((5000 - calulationInputs.netSalary) * (1206 - 1073)) / 1000 + 1073
      //     );
      //   } else if (
      //     calulationInputs.netSalary >= arrayHousingSupportSalary.at(7) &&
      //     calulationInputs.housingSupport == "monthly"
      //   ) {
      //     housingSupport = Math.ceil(
      //       ((4000 - calulationInputs.netSalary) * (1350 - 1206)) / 1000 + 1206
      //     );
      //   } else {
      //     housingSupport = 0;
      //   }
      // } else {
      //   housingSupport = 0;
      // }

      // if (calulationInputs.housingSupport == "noMonthly") {
      //   if (
      //     calulationInputs.netSalary == 0 &&
      //     calulationInputs.housingSupport == "noMonthly"
      //   ) {
      //     var housingSupport2 = 0;
      //   } else if (
      //     calulationInputs.netSalary != 0 &&
      //     calulationInputs.housingSupport == "noMonthly" &&
      //     calulationInputs.editAmountHousingSupport != ""
      //   ) {
      //     housingSupport2 = calulationInputs.editAmountHousingSupport;
      //   } else if (
      //     calulationInputs.netSalary > arrayHousingSupportSalary.at(0) &&
      //     calulationInputs.housingSupport == "noMonthly"
      //   ) {
      //     housingSupport2 = arrayHousingSupport.at(0);
      //   } else if (
      //     calulationInputs.netSalary == arrayHousingSupportSalary.at(0) &&
      //     calulationInputs.housingSupport == "noMonthly"
      //   ) {
      //     housingSupport2 = arrayHousingSupport.at(1);
      //   } else if (
      //     calulationInputs.netSalary >= arrayHousingSupportSalary.at(1) &&
      //     calulationInputs.netSalary <= arrayHousingSupportSalary.at(2) &&
      //     calulationInputs.housingSupport2 == "noMonthly"
      //   ) {
      //     housingSupport2 = Math.ceil(
      //       ((10000 - calulationInputs.netSalary) * (673 - 599)) / 1000 + 599
      //     );
      //   } else if (
      //     calulationInputs.netSalary >= arrayHousingSupportSalary.at(2) &&
      //     calulationInputs.housingSupport == "noMonthly"
      //   ) {
      //     housingSupport2 = Math.ceil(
      //       ((9000 - calulationInputs.netSalary) * (757 - 673)) / 1000 + 673
      //     );
      //   } else if (
      //     calulationInputs.netSalary >= arrayHousingSupportSalary.at(3) &&
      //     calulationInputs.housingSupport == "noMonthly"
      //   ) {
      //     housingSupport2 = Math.ceil(
      //       ((8000 - calulationInputs.netSalary) * (850 - 757)) / 1000 + 757
      //     );
      //   } else if (
      //     calulationInputs.netSalary >= arrayHousingSupportSalary.at(4) &&
      //     calulationInputs.housingSupport == "noMonthly"
      //   ) {
      //     housingSupport2 = Math.ceil(
      //       ((7000 - calulationInputs.netSalary) * (955 - 850)) / 1000 + 850
      //     );
      //   } else if (
      //     calulationInputs.netSalary >= arrayHousingSupportSalary.at(5) &&
      //     calulationInputs.housingSupport == "noMonthly"
      //   ) {
      //     housingSupport2 = Math.ceil(
      //       ((6000 - calulationInputs.netSalary) * (1073 - 955)) / 1000 + 955
      //     );
      //   } else if (
      //     calulationInputs.netSalary >= arrayHousingSupportSalary.at(6) &&
      //     calulationInputs.housingSupport == "noMonthly"
      //   ) {
      //     housingSupport2 = Math.ceil(
      //       ((5000 - calulationInputs.netSalary) * (1206 - 1073)) / 1000 + 1073
      //     );
      //   } else if (
      //     calulationInputs.netSalary >= arrayHousingSupportSalary.at(7) &&
      //     calulationInputs.housingSupport == "noMonthly"
      //   ) {
      //     housingSupport2 = Math.ceil(
      //       ((4000 - calulationInputs.netSalary) * (1350 - 1206)) / 1000 + 1206
      //     );
      //   } else {
      //     housingSupport2 = 0;
      //   }
      // } else {
      //   housingSupport2 = 0;
      // }

      //حساب قسط الدعم
      // if (
      //   calulationInputs.netSalary == 0 &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   var housingSupport = 0;
      // } else if (
      //   calulationInputs.netSalary != 0 &&
      //   calulationInputs.housingSupport == "monthly" &&
      //   calulationInputs.editAmountHousingSupport != ""
      // ) {
      //   housingSupport = calulationInputs.editAmountHousingSupport;
      // } else if (
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(0) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(0);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(0) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(1) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(1);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(1) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(2) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(2);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(2) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(3) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(3);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(3) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(4) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(4);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(4) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(5) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(5);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(5) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(6) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(6);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(6) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(7) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(7);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(8) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(8);
      // } else {
      //   housingSupport = 0;
      // }
     
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
      var array1 = [75, 60, 60, 44,44, 46, 48, 50,50, 52, 44,44, 46, 48, 50, 52,54];
      var array2 = [
        "متقاعد",
        "مدني",
        "خاص",
        "جندي",
        "جندي اول",
        "عريف",
        "وكيل رقيب",
        "رقيب",
        "رقيب اول",
        "رئيس رقباء",
        "ملازم",
        "ملازم اول",
        "نقيب",
        "رائد",
         "مقدم",
        "عقيد",
        "عميد",
      ];
      var array3 = [0, 75, 75,75, 75, 75, 75, 75,75,75, 75, 75, 75, 75, 75,75, 75];
      var numberJob = array2.indexOf(calulationInputs.job);
      var ageBeforeRetirement = array1.at(numberJob);

      //  لحساب اقصي مده بعد التقاعد لنهايه التمويل
      if (calulationInputs.financingType == "normal") {
        var agePercentageAfterRetirement = 0;
      } else {
        agePercentageAfterRetirement = array3.at(numberJob);
      }

      
      
      if (
        calulationInputs.job == "متقاعد" ||
        calulationInputs.job == "خاص" ||
        calulationInputs.job == "مدني"
      ) {
        var ministryDefense1 = false;
      } else {
        var ministryDefense1 = true;
      }


      

  //اقصي مده للتمويل مدعوم وغير مدعوم وباقه
    if (
        calulationInputs.ministryDefenseSelect === "yes" &&
        ministryDefense1 === true
      ){
    var maxDuration = 240;
    }else if (
        calulationInputs.housingSupport == "monthly" ||
        calulationInputs.housingSupport == "baqa"
   ) {
        var maxDuration = 360;
      } else {
        maxDuration = 360;
      }
      // حساب المده المتبقيه الي التقاعد الفعلي
      var durationBefore1 = (ageBeforeRetirement - ageClint) * 12;

      if(calulationInputs.job=="خاص"){
       var totalRemining=durationBefore1+ calulationInputs.durationIn
      }else{
        var totalRemining=durationBefore1+ durationWork*12
      }
    

      if(calulationInputs.job=="مدني"||calulationInputs.job=="خاص"){
       var civil =true
      }else{
         var civil =false
      }

     if(civil===true&&totalRemining>=240){
        var durationBefore=1.175*durationBefore1-2
      }else if(civil===true&&totalRemining>=180){
       var durationBefore=1.15*durationBefore1-2 
      }else if(civil===true&&totalRemining>=120){
       var durationBefore=1.1*durationBefore1-2
      }else{
        var durationBefore=1*durationBefore1-2
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

         3.13,3.13,3.18,3.21,3.25,3.3,3.35,3.42,3.45,3.47,3.55,3.59,3.65,3.69,3.74,3.79,3.84,3.89,3.94,3.98,4.03,4.08,4.11,4.16,4.21,4.26,4.3

      ]; //نسب الفوائد للمدعوم

      var arr2=[3.63,3.63,3.68,3.71,3.75,3.8,3.85,3.92,3.95,3.97,4.05,4.09,4.15,4.19,4.24,4.29,4.34,4.39,4.44,4.48,4.53,4.58,4.61,4.66,4.71,4.76,4.8
]


var arr3=[4.63,4.63,4.68,4.71,4.75,4.8,4.85,4.92,4.95,4.97,5.05,5.09,5.15,5.19,5.24,5.29,5.34,5.39,5.44,5.48,5.53,5.58,5.61,5.66,5.71,5.76,5.8
]

var arr4=[4.13,4.13,4.18,4.21,4.25,4.3,4.35,4.42,4.45,4.47,4.55,4.59,4.65,4.69,4.74,4.79,4.84,4.89,4.94,4.98,5.03,5.08,5.11,5.16,5.21,5.26,5.3
]

var arr5=[4.63,4.63,4.68,4.71,4.75,4.8,4.85,4.92,4.95,4.97,5.05,5.09,5.15,5.19,5.24,5.29,5.34,5.39,5.44,5.48,5.53,5.58,5.61,5.66,5.71,5.76,5.8
]

var arr6=[5.63,5.63,5.68,5.71,5.75,5.8,5.85,5.92,5.95,5.97,6.05,6.09,6.15,6.19,6.24,6.29,6.34,6.39,6.44,6.48,6.53,6.58,6.61,6.66,6.71,6.76,6.8
]
var arrMinistryDefense=[3.11,3.11,3.11,3.11,3.11,3.11,3.11,3.35,3.35,3.35,3.35,3.35,3.65,3.65,3.65,3.65,3.65
]
    //   var arrS1 = [

    //  3.91,3.91,3.91,3.91,3.91, 3.91,3.94,4.03,4.06,4.10,4.13,4.16,4.25,4.29,4.32,4.35,4.38,4.47,4.50,4.54,4.57,4.60,4.65,4.68,4.71,4.72,4.77


    //   ];

      // var arrNo=[

      // 4.91,4.91,4.91,4.91,4.91,  4.91,4.94,5.03,5.06,5.10,5.13,5.16,5.25,5.29,5.32,5.35,5.38,5.47,5.50,5.54,5.57,5.60,5.65,5.68,5.71,5.72,5.77

      // ]



      // var arrS2 = [
      //   3.99, 3.99, 3.99, 3.99, 3.99, 3.99, 3.99, 4.0, 4.05, 4.1, 4.15, 4.2,
      //   4.25, 4.3, 4.35, 4.4, 4.5, 4.55, 4.6, 4.65, 4.7, 4.75,
      // ];

      // var arrS3 = [
      //   4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.2, 4.25, 4.3, 4.35, 4.4, 4.45, 4.5,
      //   4.55, 4.6, 4.65, 4.7, 4.75, 4.8, 4.85, 4.9,
      // ];

      //مصفوفه نسب الفوائد ثانيا غير المدعوم
      // var durationRealEstates2 = [
      //   4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
      //   23, 24, 25, 26, 27, 28, 29, 30,
      // ];

      // var arr2 = [
      //   3.99, 3.99, 3.99, 3.99, 3.99, 3.99, 3.99, 4, 4.05, 4.1, 4.15, 4.2, 4.25,
      //   4.3, 4.35, 4.4, 4.5, 4.55, 4.6, 4.65, 4.7, 4.75, 4.8, 4.85, 4.9, 4.95,
      //   5,
      // ];

      // الغير مدعوم
      // var arr4 = [
      //   4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.1, 4.2, 4.25, 4.3, 4.35, 4.4, 4.45, 4.5,
      //   4.55, 4.6, 4.65, 4.7, 4.75, 4.8, 4.85, 4.9, 4.95, 5, 5.05, 5.1, 5.15,
      // ]; //a b c d  الغير مدعوم
      // var arr5 = [
      //   4.85, 4.85, 4.85, 4.85, 4.85, 4.85, 4.85, 4.9, 4.95, 5.0, 5.05, 5.1,
      //   5.15, 5.2, 5.25, 5.35, 5.65, 5.7, 5.85, 6.0, 6.15, 6.3, 6.45, 6.65,
      //   6.75, 6.95, 7.1,
      // ];

      //غير معتمد  الغير مدعوم
      // تقريب مده التمويل الي الاعلي سنه
      var totalDurationUP = Math.ceil(totalDuration / 12);

      //حساب نسبه الفوائد
      var vl = durationRealEstates.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates1 = arr1.at(vl); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
       var profitRatioRealEstates2 = arr2.at(vl); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
      var profitRatioRealEstates3 = arr3.at(vl); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
      var profitRatioRealEstates4= arr4.at(vl); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
      var profitRatioRealEstates5 = arr5.at(vl); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
      var profitRatioRealEstates6 = arr6.at(vl); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
      var profitRatioRealEstatesMinistryDefense=arrMinistryDefense.at(vl)

      // var v2 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      // var profitRatioRealEstates2 = arr2.at(v2); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      // var v4 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      // var profitRatioRealEstates4 = arr4.at(v4); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      // var v5 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      // var profitRatioRealEstates5 = arr5.at(v5); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      //==================

      // if (
      //   calulationInputs.job == "جندي" ||
      //   calulationInputs.job == "عريف" ||
      //   calulationInputs.job == "وكيل رقيب" ||
      //   calulationInputs.job == "رقيب" ||
      //   calulationInputs.job == "رئيس رقباء"
      // ) {
      //   var xy = 1;
      // } else if (calulationInputs.job == "خاص") {
      //   var xy = 1;
      // } else {
      //   var xy = 1;
      // }

      // var profitRatioRealEstates4s = arrS1.at(v5); //4.55
      // var profitRatioRealEstates7s = arr1.at(v5); //3.99





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

      // if (calulationInputs.job == array2.at(1) && ageClint < 51) {
      //   var salaryAfter = 1 * calulationInputs.netSalary;
      // } else if (calulationInputs.job == array2.at(2) && ageClint < 51) {
      //   var salaryAfter = 1 * calulationInputs.netSalary;
      // } else if (calulationInputs.job == array2.at(1) && durationWork > 25) {
      //   var salaryAfter = 1 * calulationInputs.netSalary;
      // } else if (
      //   calulationInputs.job == array2.at(2) &&
      //   1 * calulationInputs.durationIn > 25
      // ) {
      //   var salaryAfter = 1 * calulationInputs.netSalary;
      // } else


     if(calulationInputs.job == array2.at(0)||calulationInputs.job == array2.at(1)||calulationInputs.job == array2.at(2)||calulationInputs.job == array2.at(3)||calulationInputs.job == array2.at(7)||calulationInputs.job == array2.at(9)||calulationInputs.job == array2.at(10)||calulationInputs.job == array2.at(15)){
      var addAfter= 0+Math.floor(durationBefore/12)
     }else{
      var addAfter=2 + Math.floor(durationBefore/12)
     }

     
      //ميلادي لحساب راتب التقاعد
     var durationWorkSalary = Math.floor(durationWork);




     if(calulationInputs.job == array2.at(1)){
      var pAdd =0.04

      
     }else if(calulationInputs.job == array2.at(2)){
      var pAdd=.03
     }else{
      var pAdd=0.04
     }



     



      if (calulationInputs.job == array2.at(1) && ageClint < 45) {
        var salaryAfter = 1 * calulationInputs.netSalary;
      } else if (calulationInputs.job == array2.at(2) && ageClint < 45) {
        var salaryAfter = 1 * calulationInputs.netSalary;


      }else if (calulationInputs.job == array2.at(1)||calulationInputs.job == array2.at(2))  {
        var salaryAfter =Math.max(1984,Math.min(45000,1 *calulationInputs.basicSalary *(1+pAdd)**(addAfter))*((durationWorkSalary+addAfter)/40))



    


      } else if (calulationInputs.job == array2.at(0)) {
        var salaryAfter = 0;


      } else {
        var salaryAfter =Math.max(1984,Math.min(45000,1 *calulationInputs.basicSalary *(1+pAdd)**(addAfter))*((durationWorkSalary+addAfter)/35))


      }


  
console.log(pAdd)

console.log(durationWorkSalary)
console.log(addAfter)



      // // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات قبل التقاعد
      // if (calulationInputs.editPercentageBeforeRetirement == "") {
      //   var precentBeforeEdit1 = 100;
      // } else {
      //   var precentBeforeEdit1 =
      //     calulationInputs.editPercentageBeforeRetirement;
      // }

      // // يدويا تعديل نسبه الاستقطاع طبقا لمدخلات بعد التقاعد
      // if (calulationInputs.editPercentageAfterRetirement == "") {
      //   var precentAfterEdit1 = 100;
      // } else {
      //   var precentAfterEdit1 = calulationInputs.editPercentageAfterRetirement;
      // }

      // //اقص نسبه استقطاع قبل و بعد التقاعد للمدعوم و غير المدعوم و ايضا قيمه الباقه
      // if (calulationInputs.netSalary == 0) {
      //   var b = 0;
      //   var precentBefore = 0;
      //   var precentAfter = 0;
        
      // } else if (
      //   calulationInputs.netSalary == 0 &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   var b = 0;
      //   var precentBefore = Math.min(65, precentBeforeEdit1);
      //   var precentAfter = Math.min(65, precentAfterEdit1);
      // } else if (
      //   calulationInputs.netSalary != 0 &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   var b = 0;
      //   var precentBefore = Math.min(65, precentBeforeEdit1);
      //   var precentAfter = Math.min(65, precentAfterEdit1);
      // } else if (
      //   calulationInputs.housingSupport == "baqa" &&
      //   calulationInputs.editAmountHousingSupportBaqa != ""
      // ) {
      //   var b = 1 * calulationInputs.editAmountHousingSupportBaqa;
      //   if (
      //     calulationInputs.netSalary >= 15000 &&
      //     calulationInputs.housingSupport == "baqa" &&
      //     salaryAfter >= 15000
      //   ) {
      //     var precentBefore = Math.min(65, precentBeforeEdit1);
      //     var precentAfter = Math.min(65, precentAfterEdit1);
      //   } else if (
      //     calulationInputs.netSalary >= 15000 &&
      //     calulationInputs.housingSupport == "baqa" &&
      //     salaryAfter <= 15000
      //   ) {
      //     var precentBefore = Math.min(65, precentBeforeEdit1);
      //     var precentAfter = Math.min(65, precentAfterEdit1);
      //   } else {
      //     var precentBefore = Math.min(55, precentBeforeEdit1);
      //     var precentAfter = Math.min(55, precentAfterEdit1);
      //   }
      // } else if (
      //   calulationInputs.netSalary >= 10000 &&
      //   calulationInputs.housingSupport == "baqa"
      // ) {
      //   var b = 100000;
      //   if (
      //     calulationInputs.netSalary >= 15000 &&
      //     calulationInputs.housingSupport == "baqa" &&
      //     salaryAfter >= 15000
      //   ) {
      //     var precentBefore = Math.min(65, precentBeforeEdit1);
      //     var precentAfter = Math.min(65, precentAfterEdit1);
      //   } else if (
      //     calulationInputs.netSalary >= 15000 &&
      //     calulationInputs.housingSupport == "baqa" &&
      //     salaryAfter <= 15000
      //   ) {
      //     var precentBefore = Math.min(65, precentBeforeEdit1);
      //     var precentAfter = Math.min(55, precentAfterEdit1);
      //   } else {
      //     var precentBefore = Math.min(55, precentBeforeEdit1);
      //     var precentAfter = Math.min(55, precentAfterEdit1);
      //   }
      // } else if (
      //   calulationInputs.netSalary < 10000 &&
      //   calulationInputs.housingSupport == "baqa" &&
      //   calulationInputs.editAmountHousingSupportBaqa != ""
      // ) {
      //   var b = 1 * calulationInputs.editAmountHousingSupportBaqa;
      //   var precentBefore = Math.min(55, precentBeforeEdit1);
      //   if (salaryAfter >= 15000) {
      //     var precentAfter = Math.min(65, precentAfterEdit1);
      //   } else {
      //     var precentAfter = Math.min(55, precentAfterEdit1);
      //   }
      // } else if (
      //   calulationInputs.netSalary < 10000 &&
      //   calulationInputs.housingSupport == "baqa"
      // ) {
      //   var b = 150000;
      //   var precentBefore = Math.min(55, precentBeforeEdit1);
      //   if (salaryAfter >= 15000) {
      //     var precentAfter = Math.min(65, precentAfterEdit1);
      //   } else {
      //     var precentAfter = Math.min(55, precentAfterEdit1);
      //   }
      // } else if (
      //   calulationInputs.netSalary >= 15000 &&
      //   salaryAfter >= 15000 &&
      //   calulationInputs.housingSupport == "no"
      // ) {
      //   var b = 0;
      //   var precentBefore = Math.min(65, precentBeforeEdit1);
      //   var precentAfter = Math.min(65, precentAfterEdit1);
      // } else if (
      //   calulationInputs.netSalary >= 15000 &&
      //   salaryAfter < 15000 &&
      //   calulationInputs.housingSupport == "no"
      // ) {
      //   var b = 0;
      //   var precentBefore = Math.min(65, precentBeforeEdit1);
      //   var precentAfter = Math.min(55, precentAfterEdit1);
      // } else {
      //   var b = 0;
      //   var precentBefore = Math.min(55, precentBeforeEdit1);
      //   var precentAfter = Math.min(55, precentAfterEdit1);
      // }

      // if (calulationInputs.editPercentageFirst != "") {
      //   var prcent1 =
      //     (precentBefore - calulationInputs.editPercentageFirst) / 100;
      // } else {
      //   var prcent1 = 0;
      // }


      

      
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
        calulationInputs.netSalary >= 25000 &&
        salaryAfter >= 25000 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(70, precentBeforeEdit1);
        var precentAfter = Math.min(70, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 25000 &&
        salaryAfter >= 15000 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(70, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 25000 &&
        salaryAfter < 15000 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(70, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 15000 &&
        salaryAfter >= 25000 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(70, precentAfterEdit1);
      } else if (
        // calulationInputs.netSalary < 15000 && salaryAfter <15000 &&
        calulationInputs.housingSupport == "monthly"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.housingSupport == "baqa" &&
        calulationInputs.editAmountHousingSupportBaqa != ""
      ) {
        var b = 1 * calulationInputs.editAmountHousingSupportBaqa;
        if (
          calulationInputs.netSalary >= 25000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 25000
        ) {
          var precentBefore = Math.min(70, precentBeforeEdit1);
          var precentAfter = Math.min(70, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 25000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(70, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 25000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter < 15000
        ) {
          var precentBefore = Math.min(70, precentBeforeEdit1);
          var precentAfter = Math.min(55, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 25000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(70, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary < 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 25000
        ) {
          var precentBefore = Math.min(55, precentBeforeEdit1);
          var precentAfter = Math.min(70, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter < 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(55, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary < 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(55, precentBeforeEdit1);
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
          calulationInputs.netSalary >= 25000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 25000
        ) {
          var precentBefore = Math.min(70, precentBeforeEdit1);
          var precentAfter = Math.min(70, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 25000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(70, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 25000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(70, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary >= 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter < 15000
        ) {
          var precentBefore = Math.min(65, precentBeforeEdit1);
          var precentAfter = Math.min(55, precentAfterEdit1);
        } else if (
          calulationInputs.netSalary < 15000 &&
          calulationInputs.housingSupport == "baqa" &&
          salaryAfter >= 15000
        ) {
          var precentBefore = Math.min(55, precentBeforeEdit1);
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
        var b = 1 * calulationInputs.editAmountHousingSupportBaqa;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        if (salaryAfter >= 15000) {
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else {
          var precentAfter = Math.min(55, precentAfterEdit1);
        }
      } else if (
        calulationInputs.netSalary < 10000 &&
        calulationInputs.housingSupport == "baqa"
      ) {
        var b = 150000;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        if (salaryAfter >= 15000) {
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else {
          var precentAfter = Math.min(55, precentAfterEdit1);
        }
      } else if (
        calulationInputs.netSalary >= 25000 &&
        salaryAfter >= 25000 &&
        calulationInputs.housingSupport == "no"
      ) {
        var b = 0;
        var precentBefore = Math.min(70, precentBeforeEdit1);
        var precentAfter = Math.min(70, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 25000 &&
        salaryAfter >= 15000 &&
        calulationInputs.housingSupport == "no"
      ) {
        var b = 0;
        var precentBefore = Math.min(70, precentBeforeEdit1);
        var precentAfter = Math.min(65, precentAfterEdit1);
      } else if (
        calulationInputs.netSalary >= 15000 &&
        salaryAfter >= 25000 &&
        calulationInputs.housingSupport == "no"
      ) {
        var b = 0;
        var precentBefore = Math.min(65, precentBeforeEdit1);
        var precentAfter = Math.min(70, precentAfterEdit1);
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
      if (calulationInputs.job == "مدني" || calulationInputs.job == "متقاعد") {
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
      if (
        calulationInputs.job == "متقاعد" ||
        calulationInputs.job == "خاص" ||
        calulationInputs.job == "مدني"
      ) {
        var ministryDefense = false;
      } else if (calulationInputs.housingSupport != "no") {
        var ministryDefense = true;
      } else {
        var ministryDefense = false;
      }
      if (ministryDefense && calulationInputs.ministryDefenseSelect === "yes") {
        var addministryDefense = 160000;

        var durationMinistryDefense = Math.min(240 , totalDuration);;
               if (calulationInputs.userMinistryDefense != "") {
          var installmentMinistryDefense =
            1 * calulationInputs.userMinistryDefense;
        } else {
          var installmentMinistryDefense =
            // addministryDefense / durationMinistryDefense;
            741
        }

      } else {
        var addministryDefense = 0;
        var durationMinistryDefense = 0;
        var installmentMinistryDefense = 0;
      }

      //مبلغ الالتزامات الحاليه

     
      
   


    //   if (
    //     calulationInputs.newPersonalFinance == "yesNewPrsonal" ||
    //     calulationInputs.currentBank != "alinma"
    //   ) {

    //     if( calulationInputs.alinmaPersonal =="yesAll"){
    //     var liabilities =
    //       totalDuration *
    //         (1 * calulationInputs.installment1 +
    //           1 * calulationInputs.installment2 +
    //           1 * calulationInputs.installment3 +
    //           1 * calulationInputs.installment4) +
    //       totalLiabilitiesSpecial +
    //       PersonalFinance +
    //       profitPersonalFinance;
    //     var sl5 = personInstallment;
    //   }else if(calulationInputs.alinmaPersonal =="yesTo"){

    //             var liabilities =
    //       maxxDurationBefore *
    //         (1 * calulationInputs.installment1 +
    //           1 * calulationInputs.installment2 +
    //           1 * calulationInputs.installment3 +
    //           1 * calulationInputs.installment4) +
    //       totalLiabilitiesSpecial +
    //       PersonalFinance +
    //       profitPersonalFinance;
    //     var sl5 = personInstallment;


    //   }else if( calulationInputs.alinmaPersonal =="yesFrom"){

    //     var liabilities =
    //       maxxDurationAfter *
    //         (1 * calulationInputs.installment1 +
    //           1 * calulationInputs.installment2 +
    //           1 * calulationInputs.installment3 +
    //           1 * calulationInputs.installment4) +
    //       totalLiabilitiesSpecial +
    //       PersonalFinance +
    //       profitPersonalFinance;
    //     var sl5 = personInstallment;

    //   }else if(  calulationInputs.alinmaPersonal =="yes2A3"){

    //                     var liabilities =
    //       maxxDurationBefore *
    //         (1 * calulationInputs.installment1) +

    //        maxxDurationAfter * ( 1 * calulationInputs.installment2 +
    //           1 * calulationInputs.installment3 +
    //           1 * calulationInputs.installment4) +
    //       totalLiabilitiesSpecial +
    //       PersonalFinance +
    //       profitPersonalFinance;
    //     var sl5 = personInstallment;


    //   }




    //   } else {
    //     if (calulationInputs.alinmaPersonal == "yesPrsonal") {
            


    //    if( calulationInputs.alinmaPersonal =="yesAll"){
    //     var liabilities =
    //       totalDuration *
    //         (1 * calulationInputs.installment1 +
    //           1 * calulationInputs.installment2 +
    //           1 * calulationInputs.installment3 +
    //           1 * calulationInputs.installment4) +
    //       totalLiabilitiesSpecial +
    //       PersonalFinance +
    //       profitPersonalFinance;
    //     var sl5 = personInstallment;
    //   }else if(calulationInputs.alinmaPersonal =="yesTo"){

    //             var liabilities =
    //       maxxDurationBefore *
    //         (1 * calulationInputs.installment1 +
    //           1 * calulationInputs.installment2 +
    //           1 * calulationInputs.installment3 +
    //           1 * calulationInputs.installment4) +
    //       totalLiabilitiesSpecial +
    //       PersonalFinance +
    //       profitPersonalFinance;
    //     var sl5 = personInstallment;


    //   }else if( calulationInputs.alinmaPersonal =="yesFrom"){

    //     var liabilities =
    //       maxxDurationAfter *
    //         (1 * calulationInputs.installment1 +
    //           1 * calulationInputs.installment2 +
    //           1 * calulationInputs.installment3 +
    //           1 * calulationInputs.installment4) +
    //       totalLiabilitiesSpecial +
    //       PersonalFinance +
    //       profitPersonalFinance;
    //     var sl5 = personInstallment;

    //   }else if(  calulationInputs.alinmaPersonal =="yes2A3"){

    //                     var liabilities =
    //       maxxDurationBefore *
    //         (1 * calulationInputs.installment1) +

    //        maxxDurationAfter * ( 1 * calulationInputs.installment2 +
    //           1 * calulationInputs.installment3 +
    //           1 * calulationInputs.installment4) +
    //       totalLiabilitiesSpecial +
    //       PersonalFinance +
    //       profitPersonalFinance;
    //     var sl5 = personInstallment;


    //   }



    // } else {

    //       if(calulationInputs.alinmaPersonal =="yesAll"){

    //                   var liabilities =
    //         1 * calulationInputs.installment1 * totalDuration +
    //         totalLiabilitiesSpecial +
    //         totalDuration *
    //           (1 * calulationInputs.installment2 +
    //             1 * calulationInputs.installment3 +
    //             1 * calulationInputs.installment4);
    //       var sl5 = 0;

    //       }else if(calulationInputs.alinmaPersonal =="yesTo"){


    //                   var liabilities =
    //         1 * calulationInputs.installment1 * totalDuration +
    //         totalLiabilitiesSpecial +
    //         maxxDurationBefore *
    //           (1 * calulationInputs.installment2 +
    //             1 * calulationInputs.installment3 +
    //             1 * calulationInputs.installment4);
    //       var sl5 = 0;

    //       }else if(calulationInputs.alinmaPersonal =="yesFrom"){

    //                   var liabilities =
    //         1 * calulationInputs.installment1 * totalDuration +
    //         totalLiabilitiesSpecial +
    //         maxxDurationAfter *
    //           (1 * calulationInputs.installment2 +
    //             1 * calulationInputs.installment3 +
    //             1 * calulationInputs.installment4);
    //       var sl5 = 0;

    //       }else if(calulationInputs.alinmaPersonal =="yes2A3"){

    //                   var liabilities =
    //         1 * calulationInputs.installment1 * totalDuration +
    //         totalLiabilitiesSpecial +
    //         maxxDurationBefore *(1 * calulationInputs.installment2) +

    //             maxxDurationAfter*(1 * calulationInputs.installment3 +
    //             1 * calulationInputs.installment4);
    //       var sl5 = 0;

    //       }




    //       var liabilities =
    //         1 * calulationInputs.installment1 * totalDuration +
    //         totalLiabilitiesSpecial +
    //         totalDuration *
    //           (1 * calulationInputs.installment2 +
    //             1 * calulationInputs.installment3 +
    //             1 * calulationInputs.installment4);
    //       var sl5 = 0;
    //     }
    //   }















let liabilities = 0;
let sl5 = 0;

const sumInstallments =
  Number(calulationInputs.installment1) +
  Number(calulationInputs.installment2) +
  Number(calulationInputs.installment3) +
  Number(calulationInputs.installment4);

if (
  calulationInputs.newPersonalFinance === "yesNewPrsonal" ||
  calulationInputs.currentBank !== "alinma"
) {

  sl5 = personInstallment;

  if (calulationInputs.alinmaPersonal === "yesAll") {

    liabilities =
      totalDuration * sumInstallments +
      totalLiabilitiesSpecial +
      PersonalFinance +
      profitPersonalFinance;

  } else if (calulationInputs.alinmaPersonal === "yesTo") {

    liabilities =
      maxxDurationBefore * sumInstallments +
      totalLiabilitiesSpecial +
      PersonalFinance +
      profitPersonalFinance;

  } else if (calulationInputs.alinmaPersonal === "yesFrom") {

    liabilities =
      maxxDurationAfter * sumInstallments +
      totalLiabilitiesSpecial +
      PersonalFinance +
      profitPersonalFinance;

  } else if (calulationInputs.alinmaPersonal === "yes2A3") {

    liabilities =
      maxxDurationBefore * Number(calulationInputs.installment1) +
      maxxDurationAfter *
        (Number(calulationInputs.installment2) +
         Number(calulationInputs.installment3) +
         Number(calulationInputs.installment4)) +
      totalLiabilitiesSpecial +
      PersonalFinance +
      profitPersonalFinance;
  }

} else {

  if (calulationInputs.alinmaPersonal === "yesAll") {

    liabilities =
      totalDuration * sumInstallments +
      totalLiabilitiesSpecial;

  } else if (calulationInputs.alinmaPersonal === "yesTo") {

    liabilities =
      maxxDurationBefore * sumInstallments +
      totalLiabilitiesSpecial;

  } else if (calulationInputs.alinmaPersonal === "yesFrom") {

    liabilities =
      maxxDurationAfter * sumInstallments +
      totalLiabilitiesSpecial;

  } else if (calulationInputs.alinmaPersonal === "yes2A3") {

    liabilities =
      maxxDurationBefore * Number(calulationInputs.installment1) +
      maxxDurationAfter *
        (Number(calulationInputs.installment2) +
         Number(calulationInputs.installment3) +
         Number(calulationInputs.installment4)) +
      totalLiabilitiesSpecial;
  }

  sl5 = 0;
}



      var maxDurationFirstInstallmentCalc = Math.max(
        1 * calulationInputs.duration1,
        1 * calulationInputs.duration2,
        1 * calulationInputs.duration3,
        1 * calulationInputs.duration4,
        durationPerson
      );
      var totalPercentageNow =
        1 * calulationInputs.installment1 +
        1 * calulationInputs.installment2 +
        1 * calulationInputs.installment3 +
        1 * calulationInputs.installment4 +
        sl5;
      var percentageNow =
        (100 * totalPercentageNow) / (1 * calulationInputs.netSalary);
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
        // var sl5 = 0;
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







    if (calulationInputs.netSalary == 0) {
        var profitRatioRealEstates = 0;
      } else if (calulationInputs.editProfitRateRealEstate != "") {
        var profitRatioRealEstates = calulationInputs.editProfitRateRealEstate;
      }else if (
        calulationInputs.ministryDefenseSelect === "yes" &&
        ministryDefense1 === true
      ){
      
          var profitRatioRealEstates= profitRatioRealEstatesMinistryDefense
     }else if (
 
        calulationInputs.currentBank == "alinma"&&liabilities==0&& calulationInputs.privateSectorEmployee != "غير معتمد" 
      ) {
        var profitRatioRealEstates = profitRatioRealEstates1;
      } else if (
        // calulationInputs.housingSupport == "monthly" &&
        // calulationInputs.typeException == "damanat"
         calulationInputs.currentBank != "alinma"&&liabilities==0&& calulationInputs.privateSectorEmployee != "غير معتمد" 
      ) {
        var profitRatioRealEstates = profitRatioRealEstates2;
      } else if (
        // calulationInputs.housingSupport == "baqa" &&
        // calulationInputs.typeException != "damanat"
         calulationInputs.currentBank == "alinma"&&liabilities==0&& calulationInputs.privateSectorEmployee == "غير معتمد" &&calulationInputs.job == "خاص"
      ) {
        // var profitRatioRealEstates = profitRatioRealEstates1;
         var profitRatioRealEstates = profitRatioRealEstates3;
      } else if (
        // calulationInputs.housingSupport == "baqa" &&
        // calulationInputs.typeException == "damanat"
         calulationInputs.currentBank == "alinma"&& calulationInputs.netSalary>=25000&& calulationInputs.privateSectorEmployee != "غير معتمد" 
      ) {
        var profitRatioRealEstates = profitRatioRealEstates4 - 0.45;
      } else if (
        // calulationInputs.privateSectorEmployee == "cd" &&
        // calulationInputs.job == "خاص" &&
        // calulationInputs.housingSupport == "no"
              calulationInputs.currentBank != "alinma"&& calulationInputs.netSalary>=25000&& calulationInputs.privateSectorEmployee != "غير معتمد" 
      ) {
        // var profitRatioRealEstates = profitRatioRealEstates4;
          var profitRatioRealEstates = profitRatioRealEstates5- 0.45;
      } else if (
        // calulationInputs.privateSectorEmployee == "غير معتمد" &&
        // calulationInputs.housingSupport == "no" &&
        // calulationInputs.job == "خاص"
              calulationInputs.currentBank == "alinma"&& calulationInputs.netSalary>=25000&& calulationInputs.privateSectorEmployee == "غير معتمد" &&calulationInputs.job == "خاص"
      ) {
        // var profitRatioRealEstates = profitRatioRealEstates5;
          var profitRatioRealEstates = profitRatioRealEstates6 -0.45;


          } else if (
 
         calulationInputs.currentBank == "alinma"&& calulationInputs.netSalary<25000&& calulationInputs.privateSectorEmployee != "غير معتمد" 
      ) {
        var profitRatioRealEstates = profitRatioRealEstates4;
      } else if (
 
              calulationInputs.currentBank != "alinma"&& calulationInputs.netSalary<25000&& calulationInputs.privateSectorEmployee != "غير معتمد" 
      ) {
      
          var profitRatioRealEstates = profitRatioRealEstates5;
      } else if (
     
              calulationInputs.currentBank == "alinma"&& calulationInputs.netSalary<25000&& calulationInputs.privateSectorEmployee == "غير معتمد" &&calulationInputs.job == "خاص"
      ) {
        // var profitRatioRealEstates = profitRatioRealEstates5;
          var profitRatioRealEstates = profitRatioRealEstates6;
      } else {
        var profitRatioRealEstates = profitRatioRealEstates6;
      }

      var profitRatioRealEstatesF = profitRatioRealEstates;







      

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

      if (calulationInputs.housingSupport == "monthly" && totalDuration > 240) {
        var addInmai = Math.max(
          (totalDuration - 240) * (precentAfter / 100) * housingSupport,
          0
        );
      } else {
        var addInmai = 0;
      }
      if (
        calulationInputs.typeException == "exception" &&
        calulationInputs.netSalary < 15000
      ) {
        var totalRealEstateFinance =
          addInmai +
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
          (1 + (profitRatioRealEstatesF - 0) * 0.01 * (totalDuration / 12));
      } else if (
        calulationInputs.typeException == "exception" &&
        calulationInputs.netSalary > 15000
      ) {
        var totalRealEstateFinance =
          addInmai +
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
          (1 + (profitRatioRealEstatesF - 0) * 0.01 * (totalDuration / 12));
      } else {
        var totalRealEstateFinance =
          addInmai +
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
          (1 + profitRatioRealEstatesF * 0.01 * (totalDuration / 12));
      }

      var xxxx = 1 * prcent1 * 1 * calulationInputs.netSalary;
      //التمويل العقاري خامسا حساب فوائد للتمويل
      var totalProfitEstateFinance =
        totalRealEstateFinance - netRealEstateFinance;
      var netProfitEstateFinance =
        totalProfitEstateFinance -
        housingSupport * Math.min(240, totalDuration);

      if (
        calulationInputs.job == "متقاعد" ||
        calulationInputs.job == "خاص" ||
        calulationInputs.job == "مدني"
      ) {
        var ministryDefense = false;
      } else if (calulationInputs.housingSupport != "no") {
        var ministryDefense = true;
      } else {
        var ministryDefense = false;
      }
      if (ministryDefense && calulationInputs.ministryDefenseSelect === "yes") {
        var addministryDefense = 160000;
      } else {
        var addministryDefense = 0;
      }

      // التمويل العقاري سادسا حساب  اجمالي المده للتمويل
      var total =
        netRealEstateFinance + PersonalFinance + b + addministryDefense;
      //

      if (calulationInputs.housingSupport == "baqa") {
        var outNameHosingSuppory = "باقة الدعم";
        var amountHousingSupport = b;
      } else if (calulationInputs.housingSupport == "no") {
        var outNameHosingSuppory = "الدعم السكني";
        var amountHousingSupport = 0;
      } else {
        var outNameHosingSuppory = "قسط الدعم";
        // var amountHousingSupport = new Intl.NumberFormat().format(
        //   housingSupport.toFixed(0)
        // );

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
          var netT = total / 0.7;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0.15 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        }
      }

      if (percentageNow > precentBefore) {
        var prentError = "red";
      } else {
        var prentError = "";
      }

      var phoneToWattap =
        "https://api.whatsapp.com/send?phone=" + calulationInputs.phone;
      if (
        calulationInputs.housingSupport == "baqa" ||
        calulationInputs.housingSupport == "noMonthly"
      ) {
        var amountHousingSupportN = 0;
      } else {
        var amountHousingSupportN = amountHousingSupport;
      }
      var colFouer = new Intl.NumberFormat().format(
        ((salaryAfter * precentAfter) / 100).toFixed(0)
      );
      var colFirstN = new Intl.NumberFormat().format(
        (installment - xxxx - amountHousingSupportN).toFixed(0)
      );
      var colSecendN = new Intl.NumberFormat().format(
        (installmentBefore - amountHousingSupportN).toFixed(0)
      );
      var colThridN = new Intl.NumberFormat().format(
        (installmentAfter - amountHousingSupportN).toFixed(0)
      );
      var outPresonalN = PersonalFinance;
      var outRealN = netRealEstateFinance;
      var outBaqaN = b;
      var outAddministryDefenseN = addministryDefense;


    return {
      bankName: 'الإنماء',
       age: ageClint,
        work: durationWork,

        durationBeforeRetirement: maxxDurationBefore.toFixed(0),
        durationAfterRetirement: maxxDurationAfter.toFixed(0),
        // totalDuration: totalDurationUP.toFixed(2),
        totalDuration: Math.round((totalDuration * 100) / 12) / 100,

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
        total: new Intl.NumberFormat().format(total.toFixed(0)),
        firstInstallment: new Intl.NumberFormat().format(
          (installment - xxxx).toFixed(0)
        ),
        percentageNow: percentageNow.toFixed(2),

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

        durationPersonal: Math.ceil(durationPerson),
        //تغير الكتابه

        nameAmountHousingSupport: outNameHosingSuppory,
        phoneOut: phoneToWattap,
        colorError: prentError,
        maxDurationFirstInstallment: maxDurationFirstInstallmentCalc,
        colFirst: new Intl.NumberFormat().format(
          (installment - xxxx).toFixed(0)
        ),
        colSecend: new Intl.NumberFormat().format(installmentBefore.toFixed(0)),
        colThrid: new Intl.NumberFormat().format(installmentAfter.toFixed(0)),
        house: new Intl.NumberFormat().format(amountHousingSupport),
        colFouer: colFouer,
        colFirstN: colFirstN,
        colSecendN: colSecendN,
        colThridN: colThridN,
        outPresonal: outPresonalN,
        outReal: outRealN,
        outAddministryDefense: outAddministryDefenseN,
        outBaqa: outBaqaN,
        totalDurationN: Math.round((totalDuration * 100) / 12) / 100,
        durationMinistryDefense: durationMinistryDefense.toFixed(0),
        installmentMinistryDefense: installmentMinistryDefense.toFixed(0),
        addministryDefenseC: new Intl.NumberFormat().format(addministryDefense),

    };
  } catch (e) { return null; }
};

// ============================================
// منطق حساب بنك الفرنسي (alfransi)
// ============================================
const calculateAlfransi = (inputs) => {
  try {
    var calulationInputs = inputs;


 let liabilitiesSpecial={
    specialInstallmentC1R1: "",
    specialInstallmentC1R2: "",
    specialInstallmentC1R3: "",
    specialInstallmentC1R4: "",

    specialDurationC1R1: "",
    specialDurationC1R2: "",
    specialDurationC1R3: "",
    specialDurationC1R4: "",

    specialInstallmentC2R1: "",
    specialInstallmentC2R2: "",
    specialInstallmentC2R3: "",
    specialInstallmentC2R4: "",

    specialDurationC2R1: "",
    specialDurationC2R2: "",
    specialDurationC2R3: "",
    specialDurationC2R4: "",
  };

  const totalInstallmentSpecialC1 =
    1 * liabilitiesSpecial.specialInstallmentC1R1 +
    1 * liabilitiesSpecial.specialInstallmentC2R1;
  const totalInstallmentSpecialC2 =
    1 * liabilitiesSpecial.specialInstallmentC1R2 +
    1 * liabilitiesSpecial.specialInstallmentC2R2;
  const totalInstallmentSpecialC3 =
    1 * liabilitiesSpecial.specialInstallmentC1R3 +
    1 * liabilitiesSpecial.specialInstallmentC2R3;
  const totalInstallmentSpecialC4 =
    1 * liabilitiesSpecial.specialInstallmentC1R4 +
    1 * liabilitiesSpecial.specialInstallmentC2R4;

  var maxSpecialDurationc1 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R1,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc2 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R2,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc3 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R3,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc4 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R4,
    0 * liabilitiesSpecial.specialDurationC2R1
  );


    const liabilitiesSpecialTotal1 =
    1 *
      liabilitiesSpecial.specialInstallmentC1R1 *
      (1 * liabilitiesSpecial.specialDurationC1R1) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R2 *
      (1 * liabilitiesSpecial.specialDurationC1R2) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R3 *
      (1 * liabilitiesSpecial.specialDurationC1R3) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R4 *
      (1 * liabilitiesSpecial.specialDurationC1R4);
  const liabilitiesSpecialTotal2 =
    1 *
      liabilitiesSpecial.specialInstallmentC2R1 *
      (1 * liabilitiesSpecial.specialDurationC2R1) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R2 *
      (1 * liabilitiesSpecial.specialDurationC2R2) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R3 *
      (1 * liabilitiesSpecial.specialDurationC2R3) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R4 *
      (1 * liabilitiesSpecial.specialDurationC2R4);
  const totalLiabilitiesSpecial =
    liabilitiesSpecialTotal1 + liabilitiesSpecialTotal2;
 //  مصفوفه الدعم ع حسب الراتب
      var arrayHousingSupportSalary = [
        3999, 4999, 5999, 6999, 7999, 8999, 9999, 10000, 10001,
      ];
      var arrayHousingSupport = [
        1350, 1206, 1073, 955, 850, 757, 673, 599, 416,
      ];

      //حساب قسط الدعم
      // if (
      //   calulationInputs.netSalary == 0 &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   var housingSupport = 0;
      // } else if (
      //   calulationInputs.netSalary != 0 &&
      //   calulationInputs.housingSupport == "monthly" &&
      //   calulationInputs.editAmountHousingSupport != ""
      // ) {
      //   housingSupport = calulationInputs.editAmountHousingSupport;
      // } else if (
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(0) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(0);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(0) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(1) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(1);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(1) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(2) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(2);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(2) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(3) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(3);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(3) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(4) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(4);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(4) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(5) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(5);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(5) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(6) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(6);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(6) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(7) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(7);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(8) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(8);
      // } else {
      //   housingSupport = 0;
      // }

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
        var ct = 80;
      } else {
        var ct = 80;
      }

      //الاعمار التقاعديه
      var array1 = [ct, 60, 60, 44, 46, 48, 50, 52, 44, 46, 48, 50, 52,54];
      var arPlus2 = [ct, 60, 60, 46, 48, 50, 52, 54, 46, 48, 50, 52, 54,54];
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
         "مقدم",
        "عقيد",
        "عميد",
      ];
      var array3 = [0, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75,75, 75, 75];
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
        calulationInputs.typeException=="yes"
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
       3.75,3.75,3.75,3.75,3.75,3.75,3.8,3.85,3.95,4,4.05,4.1,4.2,4.25,4.3,4.35,4.4,4.45,4.55,4.6,4.65,4.7
      ]; //نسب الفوائد مدعوم و غير مدعوم

      //مصفوفه نسب الفوائد ثانيا غير المدعوم
      var durationRealEstates2 = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25,
      ];
      var arr2 = [
         4.55,4.55,4.55,4.55,4.55,4.55,4.6,4.65,4.75,4.8,4.85,4.9,5,5.05,5.1,5.15,5.2,5.25,5.35,5.4,5.45,5.5  
      ]; //الغير معتمد  البنك
  
    var arrMinistryDefense=[3.75,3.75,3.75,3.75,3.75,3.75,3.75,3.85,3.85,3.85,3.85,3.85,3.98,3.98,3.98,3.98,3.98,4.3,4.3,4.3,4.3,4.3]


      // تقريب مده التمويل الي الاعلي سنه

      var totalDurationUP = Math.ceil(totalDuration / 12);



      
      if (
        calulationInputs.job == "متقاعد" ||
        calulationInputs.job == "خاص" ||
        calulationInputs.job == "مدني"
      ) {
        var ministryDefense1 = false;
      } else {
        var ministryDefense1 = true;
      }

      if (
        calulationInputs.ministryDefenseSelect === "yes" &&
        ministryDefense1 === true
      ) {
        var vl = durationRealEstates.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
        var profitRatioRealEstates1 = arrMinistryDefense.at(vl);
      } else {
        var vl = durationRealEstates.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
        var profitRatioRealEstates1 = arr1.at(vl); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
      }


      var v2 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates2 = arr2.at(v2); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه



      if (calulationInputs.netSalary == 0) {
        var profitRatioRealEstates = 0;
      } else if (calulationInputs.editProfitRateRealEstate != "") {
        var profitRatioRealEstates = calulationInputs.editProfitRateRealEstate;
      } else if (  calulationInputs.privateSectorEmployee == "غير معتمد" &&
        calulationInputs.job == "خاص") {
        var profitRatioRealEstates = profitRatioRealEstates2;
    
      } else {
        var profitRatioRealEstates = profitRatioRealEstates1;
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
            (Math.floor(durationWork) +Math.floor(durationBefore / 12) )) /
          40;
      } else if (calulationInputs.job == array2.at(2)) {
        var salaryAfter =
          (1 *
            calulationInputs.basicSalary *
            (Math.floor(1 * calulationInputs.durationIn/12) + Math.floor(durationBefore/12))) /
          40;
      } else if (calulationInputs.job == array2.at(0)) {
        var salaryAfter = 0;
      } else {
        var salaryAfter =
          (1 *
            calulationInputs.basicSalary *
            (Math.floor( durationWork )+ Math.floor(durationBefore/12))) /
          35;
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
        var b = 1 * calulationInputs.editAmountHousingSupportBaqa;
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
        var b = 1 * calulationInputs.editAmountHousingSupportBaqa;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        if (salaryAfter >= 15000) {
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else {
          var precentAfter = Math.min(55, precentAfterEdit1);
        }
      } else if (
        calulationInputs.netSalary < 10000 &&
        calulationInputs.housingSupport == "baqa"
      ) {
        var b = 150000;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        if (salaryAfter >= 15000) {
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else {
          var precentAfter = Math.min(55, precentAfterEdit1);
        }
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
        var personInstallment = 0.3334 * calulationInputs.netSalary;
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
      if (calulationInputs.job == "مدني" || calulationInputs.job == "متقاعد") {
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



      if (
        calulationInputs.job == "متقاعد" ||
        calulationInputs.job == "خاص" ||
        calulationInputs.job == "مدني"
      ) {
        var ministryDefense = false;
      } else if (calulationInputs.housingSupport != "no") {
        var ministryDefense = true;
      } else {
        var ministryDefense = false;
      }





       if (ministryDefense && calulationInputs.ministryDefenseSelect === "yes") {
        var addministryDefense = 160000;

        var durationMinistryDefense = totalDuration;
       

        // var durationMinistryDefense = 0;

        if (calulationInputs.userMinistryDefense != "") {
          var installmentMinistryDefense =
            1 * calulationInputs.userMinistryDefense;
        } else {
          var installmentMinistryDefense =
            // addministryDefense / durationMinistryDefense;
            741
        }
      } else {
        var addministryDefense = 0;
        var durationMinistryDefense = 0;
        var installmentMinistryDefense = 0;
      }










      // if (ministryDefense && calulationInputs.ministryDefenseSelect === "yes") {
      //   var addministryDefense = 160000;

      //   var durationMinistryDefense = 0;
      //   var installmentMinistryDefense = 1;
      // } else {
      //   var addministryDefense = 0;
      //   var durationMinistryDefense = 0;
      //   var installmentMinistryDefense = 0;
      // }





      //مبلغ الالتزامات الحاليه

      var liabilities =
        1 * calulationInputs.installment1 * calulationInputs.duration1 +
        1 * calulationInputs.installment2 * calulationInputs.duration2 +
        1 * calulationInputs.installment3 * calulationInputs.duration3 +
        1 * calulationInputs.installment4 * calulationInputs.duration4 +
        totalLiabilitiesSpecial +
        PersonalFinance +
        profitPersonalFinance;
      var sl5 = personInstallment;
      var maxDurationFirstInstallmentCalc = Math.max(
        1 * calulationInputs.duration1,
        1 * calulationInputs.duration2,
        1 * calulationInputs.duration3,
        1 * calulationInputs.duration4,
        durationPerson
      );
      var totalPercentageNow =
        1 * calulationInputs.installment1 +
        1 * calulationInputs.installment2 +
        1 * calulationInputs.installment3 +
        1 * calulationInputs.installment4 +
        sl5;
      var percentageNow =
        (100 * totalPercentageNow) / (1 * calulationInputs.netSalary);
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
          (1 + (profitRatioRealEstates - 0) * 0.01 * (totalDuration / 12));
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
          (1 + (profitRatioRealEstates - 0.0) * 0.01 * (totalDuration / 12));
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

      if (
        calulationInputs.job == "متقاعد" ||
        calulationInputs.job == "خاص" ||
        calulationInputs.job == "مدني"
      ) {
        var ministryDefense = false;
      } else if (calulationInputs.housingSupport != "no") {
        var ministryDefense = true;
      } else {
        var ministryDefense = false;
      }
      if (ministryDefense && calulationInputs.ministryDefenseSelect === "yes") {
        var addministryDefense = 160000;
      } else {
        var addministryDefense = 0;
      }

      // التمويل العقاري سادسا حساب  اجمالي المده للتمويل
      var total =
        netRealEstateFinance + PersonalFinance + b + addministryDefense;

      if (calulationInputs.housingSupport == "baqa") {
        var outNameHosingSuppory = "باقة الدعم";
        var amountHousingSupport = b;
      } else if (calulationInputs.housingSupport == "no") {
        var outNameHosingSuppory = "الدعم السكني";
        var amountHousingSupport = 0;
      } else {
        var outNameHosingSuppory = "قسط الدعم";

        // var amountHousingSupport = new Intl.NumberFormat().format(
        //   housingSupport.toFixed(0)
        // );
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
          var netT = total / 0.7;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        }
      }

      if (percentageNow > precentBefore) {
        var prentError = "red";
      } else {
        var prentError = "";
      }

      var phoneToWattap =
        "https://api.whatsapp.com/send?phone=" + calulationInputs.phone;
      if (
        calulationInputs.housingSupport == "baqa" ||
        calulationInputs.housingSupport == "noMonthly"
      ) {
        var amountHousingSupportN = 0;
      } else {
        var amountHousingSupportN = amountHousingSupport;
      }
      var colFouer = new Intl.NumberFormat().format(
        ((salaryAfter * precentAfter) / 100).toFixed(0)
      );
      var colFirstN = new Intl.NumberFormat().format(
        (installment - xxxx - amountHousingSupportN).toFixed(0)
      );
      var colSecendN = new Intl.NumberFormat().format(
        (installmentBefore - amountHousingSupportN).toFixed(0)
      );
      var colThridN = new Intl.NumberFormat().format(
        (installmentAfter - amountHousingSupportN).toFixed(0)
      );
      var outPresonalN = PersonalFinance;
      var outRealN = netRealEstateFinance;
      var outBaqaN = b;
      var outAddministryDefenseN = addministryDefense;





















    return {
      bankName: 'الفرنسي',
              age: ageClint,
        work: durationWork,

        durationBeforeRetirement: maxxDurationBefore.toFixed(0),
        durationAfterRetirement: maxxDurationAfter.toFixed(0),
        totalDuration: Math.round((totalDuration * 100) / 12) / 100,

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
        total: new Intl.NumberFormat().format(total.toFixed(0)),

        firstInstallment: new Intl.NumberFormat().format(
          (installment - xxxx).toFixed(0)
        ),
        percentageNow: new Intl.NumberFormat().format(percentageNow.toFixed(2)),

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
        durationPersonal: Math.ceil(durationPerson),
        //تغير الكتابه

        nameAmountHousingSupport: outNameHosingSuppory,
        phoneOut: phoneToWattap,
        colorError: prentError,
        maxDurationFirstInstallment: maxDurationFirstInstallmentCalc,
        colFirst: new Intl.NumberFormat().format(
          (installment - xxxx).toFixed(0)
        ),
        colSecend: new Intl.NumberFormat().format(installmentBefore.toFixed(0)),
        colThrid: new Intl.NumberFormat().format(installmentAfter.toFixed(0)),
        house: new Intl.NumberFormat().format(amountHousingSupport),
        colFouer: colFouer,
        colFirstN: colFirstN,
        colSecendN: colSecendN,
        colThridN: colThridN,
        outPresonal: outPresonalN,
        outReal: outRealN,
        outAddministryDefense: outAddministryDefenseN,
        outBaqa: outBaqaN,
        totalDurationN: Math.round((totalDuration * 100) / 12) / 100,
        durationMinistryDefense: durationMinistryDefense.toFixed(0),
        installmentMinistryDefense: installmentMinistryDefense.toFixed(0),
        addministryDefenseC: new Intl.NumberFormat().format(addministryDefense),



    };
  } catch (e) { return null; }
};

// ============================================
// منطق حساب بنك العربي -  (alrab)
// ============================================
const calculateAlrab = (inputs) => {
  try {
    var calulationInputs = inputs;


 let liabilitiesSpecial={
    specialInstallmentC1R1: "",
    specialInstallmentC1R2: "",
    specialInstallmentC1R3: "",
    specialInstallmentC1R4: "",

    specialDurationC1R1: "",
    specialDurationC1R2: "",
    specialDurationC1R3: "",
    specialDurationC1R4: "",

    specialInstallmentC2R1: "",
    specialInstallmentC2R2: "",
    specialInstallmentC2R3: "",
    specialInstallmentC2R4: "",

    specialDurationC2R1: "",
    specialDurationC2R2: "",
    specialDurationC2R3: "",
    specialDurationC2R4: "",
  };

  const totalInstallmentSpecialC1 =
    1 * liabilitiesSpecial.specialInstallmentC1R1 +
    1 * liabilitiesSpecial.specialInstallmentC2R1;
  const totalInstallmentSpecialC2 =
    1 * liabilitiesSpecial.specialInstallmentC1R2 +
    1 * liabilitiesSpecial.specialInstallmentC2R2;
  const totalInstallmentSpecialC3 =
    1 * liabilitiesSpecial.specialInstallmentC1R3 +
    1 * liabilitiesSpecial.specialInstallmentC2R3;
  const totalInstallmentSpecialC4 =
    1 * liabilitiesSpecial.specialInstallmentC1R4 +
    1 * liabilitiesSpecial.specialInstallmentC2R4;

  var maxSpecialDurationc1 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R1,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc2 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R2,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc3 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R3,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc4 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R4,
    0 * liabilitiesSpecial.specialDurationC2R1
  );


    const liabilitiesSpecialTotal1 =
    1 *
      liabilitiesSpecial.specialInstallmentC1R1 *
      (1 * liabilitiesSpecial.specialDurationC1R1) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R2 *
      (1 * liabilitiesSpecial.specialDurationC1R2) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R3 *
      (1 * liabilitiesSpecial.specialDurationC1R3) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R4 *
      (1 * liabilitiesSpecial.specialDurationC1R4);
  const liabilitiesSpecialTotal2 =
    1 *
      liabilitiesSpecial.specialInstallmentC2R1 *
      (1 * liabilitiesSpecial.specialDurationC2R1) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R2 *
      (1 * liabilitiesSpecial.specialDurationC2R2) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R3 *
      (1 * liabilitiesSpecial.specialDurationC2R3) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R4 *
      (1 * liabilitiesSpecial.specialDurationC2R4);
  const totalLiabilitiesSpecial =
    liabilitiesSpecialTotal1 + liabilitiesSpecialTotal2;


      //  مصفوفه الدعم ع حسب الراتب
      var arrayHousingSupportSalary = [
        3999, 4999, 5999, 6999, 7999, 8999, 9999, 10000, 10001,
      ];
      var arrayHousingSupport = [
        1350, 1206, 1073, 955, 850, 757, 673, 599, 416,
      ];

      //حساب قسط الدعم
      // if (
      //   calulationInputs.netSalary == 0 &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   var housingSupport = 0;
      // } else if (
      //   calulationInputs.netSalary != 0 &&
      //   calulationInputs.housingSupport == "monthly" &&
      //   calulationInputs.editAmountHousingSupport != ""
      // ) {
      //   housingSupport = calulationInputs.editAmountHousingSupport;
      // } else if (
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(0) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(0);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(0) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(1) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(1);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(1) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(2) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(2);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(2) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(3) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(3);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(3) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(4) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(4);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(4) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(5) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(5);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(5) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(6) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(6);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(6) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(7) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(7);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(8) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(8);
      // } else {
      //   housingSupport = 0;
      // }

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
        var ct = 75;
      } else {
        var ct = 75;
      }

      //الاعمار التقاعديه
      var array1 = [ct, 60, 60, 44, 46, 48, 50, 52, 44, 46, 48, 50, 52,54];
      var arPlus2 = [ct, 60, 60, 44, 46, 48, 50, 52, 46, 48, 50, 52, 54,54];
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
         "مقدم",
        "عقيد",
        "عميد",
      ];
      var array3 = [0, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75,75, 75, 75];
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
        // calulationInputs.typeException=="yes"

      (ageBeforeRetirement - ageClint) * 12 > 46
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
      3.65,3.65,3.65,3.65,3.65,3.65,3.69,3.74,3.8,3.86,3.92,3.99,4.06,4.13,4.2,4.27,4.35,4.43,4.5,4.58,4.62,4.72,4.79,4.86,4.93,4.99,5.05

      ]; //نسب الفوائد للمدعوم

      //مصفوفه نسب الفوائد ثانيا غير المدعوم
      var durationRealEstates2 = [
        4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25,
      ];
      var arr2 = [
      
      ]; //الغير مدعوم  البنك
      var arr3 = [
      3.65,3.65,3.65,3.65,3.65,3.65,3.69,3.74,3.8,3.86,3.92,3.99,4.06,4.13,4.2,4.27,4.35,4.43,4.5,4.58,4.62,4.72,4.79,4.86,4.93,4.99,5.05
      ]; //الغير مدعوم خارج البنك




      //جميع الراتب اقل من 12 الف - قطاع خاص غير معتمد مدعوم

      var allMax12=[3.86,3.86,3.86,3.86,3.86,  3.86,3.9,3.96,4.03,4.09,4.15,4.22,4.29,4.35,4.43,4.5,4.56,4.63,4.7,4.77,4.84,4.91,4.98,5.03,5.1,5.16]

    // قسط دعم او غير مدعوم  فوق 12 
      var monthlyOrNoMin12 =[ 3.79,3.79,3.79,3.79,3.79, 3.79,3.79,3.89,3.89,3.89,3.89,3.89,3.99,3.99,3.99,3.99,3.99,4.29,4.29,4.29,4.29,4.29,5.07,5.07,5.07,5.07,5.07
]

    // مدعوم باقة فوق 12
    var baqaMin12=[3.79,3.79,3.79,3.79,3.79, 3.79,3.79,3.99,3.99,3.99,3.99,3.99,4.09,4.09,4.09,4.09,4.09,4.39,4.39,4.39,4.39,4.39,5.17,5.17,5.17,5.17,5.17]

  // غير مدعوم غير معتمد
   var noMonthNoC=[3.89,3.89,3.89,3.89,3.89,  3.89,3.89,4.17,4.17,4.17,4.17,4.17,4.47,4.47,4.47,4.47,4.47,4.77,4.77,4.77,4.77,4.77,5.77,5.77,5.77,5.77]

   var totalDurationUP = Math.ceil(totalDuration / 12);
   var vl = durationRealEstates.indexOf(totalDurationUP)

   var profitRatioRealEstatesAllMax12 = allMax12.at(vl);

 var profitRatioRealEstatesMonthlyOrNoMin12 = monthlyOrNoMin12.at(vl);
  var profitRatioRealEstatesBaqaMin12 = baqaMin12.at(vl);
   var profitRatioRealEstatesNoMonthNoC = noMonthNoC.at(vl);


   if( calulationInputs.privateSectorEmployee == "غير معتمد" && calulationInputs.job == "خاص"){
      var profitPrivate=true
   }else{
       var profitPrivate= false
   }




 if(profitPrivate===true&&calulationInputs.housingSupport == "no"){
  var profitRatioRealEstates = profitRatioRealEstatesNoMonthNoC;

 }else if(calulationInputs.netSalary>=12000&& profitPrivate===false){

      if(calulationInputs.housingSupport == "monthly"||calulationInputs.housingSupport == "no" ){
          var profitRatioRealEstates = profitRatioRealEstatesMonthlyOrNoMin12;
      }else{
         var profitRatioRealEstates = profitRatioRealEstatesBaqaMin12;
      }
  }else {
  var profitRatioRealEstates = profitRatioRealEstatesAllMax12;
  }

      // // تقريب مده التمويل الي الاعلي سنه

      // var totalDurationUP = Math.ceil(totalDuration / 12);

      // var vl = durationRealEstates.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      // var profitRatioRealEstates1 = arr1.at(vl); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
      // var v2 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      // var profitRatioRealEstates2 = arr2.at(v2); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه

      // var v3 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      // var profitRatioRealEstates3 = arr3.at(v3); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه




      // if (calulationInputs.netSalary == 0) {
      //   var profitRatioRealEstates = 0;
      // } else if (calulationInputs.editProfitRateRealEstate != "") {
      //   var profitRatioRealEstates = calulationInputs.editProfitRateRealEstate;
      // } else if (calulationInputs.housingSupport == "monthly") {
      //   var profitRatioRealEstates = profitRatioRealEstates1;
      // } else if (calulationInputs.housingSupport == "baqa") {
      //   var profitRatioRealEstates = profitRatioRealEstates1;
      // } else if (
      //   calulationInputs.currentBank == "albilad" &&
      //   calulationInputs.housingSupport == "no"
      // ) {
      //   var profitRatioRealEstates = profitRatioRealEstates2;
      // } else {
      //   var profitRatioRealEstates = profitRatioRealEstates3;
      // }


      if(profitPrivate===true){
       var profitRatioRealEstates1 = profitRatioRealEstates;
      }else if(calulationInputs.typeException == "exception"||calulationInputs.typeException == "yes"){
       var profitRatioRealEstates1 = profitRatioRealEstates-0.25;
      }else{
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
      if (calulationInputs.job == array2.at(1)) {
        var salaryAfter =
          (1 *
            calulationInputs.basicSalary *
            (Math.floor(durationWork) + Math.floor(durationBefore / 12) )) /
          40;
      } else if (calulationInputs.job == array2.at(2)) {
        var salaryAfter =
          (1 *
            calulationInputs.basicSalary *
            (Math.floor(1 * calulationInputs.durationIn/12) + Math.floor(durationBefore/12))) /
          40;
      } else if (calulationInputs.job == array2.at(0)) {
        var salaryAfter = 0;
      } else {
        var salaryAfter =
          (1 *
            calulationInputs.basicSalary *
            (Math.floor( durationWork )+ Math.floor(durationBefore/12))) /
          35;
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
        var b = 1 * calulationInputs.editAmountHousingSupportBaqa;
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
        var b = 1 * calulationInputs.editAmountHousingSupportBaqa;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        if (salaryAfter >= 15000) {
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else {
          var precentAfter = Math.min(55, precentAfterEdit1);
        }
      } else if (
        calulationInputs.netSalary < 10000 &&
        calulationInputs.housingSupport == "baqa"
      ) {
        var b = 150000;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        if (salaryAfter >= 15000) {
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else {
          var precentAfter = Math.min(55, precentAfterEdit1);
        }
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
        var personInstallment = 0.3334 * calulationInputs.netSalary;
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
      if (calulationInputs.job == "مدني" || calulationInputs.job == "متقاعد") {
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



      if (
        calulationInputs.job == "متقاعد" ||
        calulationInputs.job == "خاص" ||
        calulationInputs.job == "مدني"
      ) {
        var ministryDefense = false;
      } else if (calulationInputs.housingSupport != "no") {
        var ministryDefense = true;
      } else {
        var ministryDefense = false;
      }





       if (ministryDefense && calulationInputs.ministryDefenseSelect === "yes") {
        var addministryDefense = 160000;

        var durationMinistryDefense = totalDuration;
       

        // var durationMinistryDefense = 0;

        if (calulationInputs.userMinistryDefense != "") {
          var installmentMinistryDefense =
            1 * calulationInputs.userMinistryDefense;
        } else {
          var installmentMinistryDefense =
            // addministryDefense / durationMinistryDefense;
            741
        }
      } else {
        var addministryDefense = 0;
        var durationMinistryDefense = 0;
        var installmentMinistryDefense = 0;
      }










      // if (ministryDefense && calulationInputs.ministryDefenseSelect === "yes") {
      //   var addministryDefense = 160000;

      //   var durationMinistryDefense = 0;
      //   var installmentMinistryDefense = 1;
      // } else {
      //   var addministryDefense = 0;
      //   var durationMinistryDefense = 0;
      //   var installmentMinistryDefense = 0;
      // }





      //مبلغ الالتزامات الحاليه

      var liabilities =
        1 * calulationInputs.installment1 * calulationInputs.duration1 +
        1 * calulationInputs.installment2 * calulationInputs.duration2 +
        1 * calulationInputs.installment3 * calulationInputs.duration3 +
        1 * calulationInputs.installment4 * calulationInputs.duration4 +
        totalLiabilitiesSpecial +
        PersonalFinance +
        profitPersonalFinance;
      var sl5 = personInstallment;
      var maxDurationFirstInstallmentCalc = Math.max(
        1 * calulationInputs.duration1,
        1 * calulationInputs.duration2,
        1 * calulationInputs.duration3,
        1 * calulationInputs.duration4,
        durationPerson
      );
      var totalPercentageNow =
        1 * calulationInputs.installment1 +
        1 * calulationInputs.installment2 +
        1 * calulationInputs.installment3 +
        1 * calulationInputs.installment4 +
        sl5;
      var percentageNow =
        (100 * totalPercentageNow) / (1 * calulationInputs.netSalary);
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
          (1 + (profitRatioRealEstates - 0) * 0.01 * (totalDuration / 12));
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
          (1 + (profitRatioRealEstates - 0.0) * 0.01 * (totalDuration / 12));
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

      if (
        calulationInputs.job == "متقاعد" ||
        calulationInputs.job == "خاص" ||
        calulationInputs.job == "مدني"
      ) {
        var ministryDefense = false;
      } else if (calulationInputs.housingSupport != "no") {
        var ministryDefense = true;
      } else {
        var ministryDefense = false;
      }
      if (ministryDefense && calulationInputs.ministryDefenseSelect === "yes") {
        var addministryDefense = 160000;
      } else {
        var addministryDefense = 0;
      }

      // التمويل العقاري سادسا حساب  اجمالي المده للتمويل
      var total =
        netRealEstateFinance + PersonalFinance + b + addministryDefense;

      if (calulationInputs.housingSupport == "baqa") {
        var outNameHosingSuppory = "باقة الدعم";
        var amountHousingSupport = b;
      } else if (calulationInputs.housingSupport == "no") {
        var outNameHosingSuppory = "الدعم السكني";
        var amountHousingSupport = 0;
      } else {
        var outNameHosingSuppory = "قسط الدعم";

        // var amountHousingSupport = new Intl.NumberFormat().format(
        //   housingSupport.toFixed(0)
        // );
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
          var netT = total / 0.7;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        }
      }

      if (percentageNow > precentBefore) {
        var prentError = "red";
      } else {
        var prentError = "";
      }

      var phoneToWattap =
        "https://api.whatsapp.com/send?phone=" + calulationInputs.phone;
      if (
        calulationInputs.housingSupport == "baqa" ||
        calulationInputs.housingSupport == "noMonthly"
      ) {
        var amountHousingSupportN = 0;
      } else {
        var amountHousingSupportN = amountHousingSupport;
      }
      var colFouer = new Intl.NumberFormat().format(
        ((salaryAfter * precentAfter) / 100).toFixed(0)
      );
      var colFirstN = new Intl.NumberFormat().format(
        (installment - xxxx - amountHousingSupportN).toFixed(0)
      );
      var colSecendN = new Intl.NumberFormat().format(
        (installmentBefore - amountHousingSupportN).toFixed(0)
      );
      var colThridN = new Intl.NumberFormat().format(
        (installmentAfter - amountHousingSupportN).toFixed(0)
      );
      var outPresonalN = PersonalFinance;
      var outRealN = netRealEstateFinance;
      var outBaqaN = b;
      var outAddministryDefenseN = addministryDefense;

    
    return {
      bankName: 'العربي)',
       age: ageClint,
        work: durationWork,

        durationBeforeRetirement: maxxDurationBefore.toFixed(0),
        durationAfterRetirement: maxxDurationAfter.toFixed(0),
        totalDuration: Math.round((totalDuration * 100) / 12) / 100,

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
        total: new Intl.NumberFormat().format(total.toFixed(0)),

        firstInstallment: new Intl.NumberFormat().format(
          (installment - xxxx).toFixed(0)
        ),
        percentageNow: new Intl.NumberFormat().format(percentageNow.toFixed(2)),

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
        durationPersonal: Math.ceil(durationPerson),
        //تغير الكتابه

        nameAmountHousingSupport: outNameHosingSuppory,
        phoneOut: phoneToWattap,
        colorError: prentError,
        maxDurationFirstInstallment: maxDurationFirstInstallmentCalc,
        colFirst: new Intl.NumberFormat().format(
          (installment - xxxx).toFixed(0)
        ),
        colSecend: new Intl.NumberFormat().format(installmentBefore.toFixed(0)),
        colThrid: new Intl.NumberFormat().format(installmentAfter.toFixed(0)),
        house: new Intl.NumberFormat().format(amountHousingSupport),
        colFouer: colFouer,
        colFirstN: colFirstN,
        colSecendN: colSecendN,
        colThridN: colThridN,
        outPresonal: outPresonalN,
        outReal: outRealN,
        outAddministryDefense: outAddministryDefenseN,
        outBaqa: outBaqaN,
        totalDurationN: Math.round((totalDuration * 100) / 12) / 100,
        durationMinistryDefense: durationMinistryDefense.toFixed(0),
        installmentMinistryDefense: installmentMinistryDefense.toFixed(0),
        addministryDefenseC: new Intl.NumberFormat().format(addministryDefense),
    };
  } catch (e) { return null; }
};

// ============================================
// منطق حساب مسار النمو (masar)
// ============================================
const calculateMasar = (inputs) => {
  try {
    var calulationInputs = inputs;
   

 let liabilitiesSpecial={
    specialInstallmentC1R1: "",
    specialInstallmentC1R2: "",
    specialInstallmentC1R3: "",
    specialInstallmentC1R4: "",

    specialDurationC1R1: "",
    specialDurationC1R2: "",
    specialDurationC1R3: "",
    specialDurationC1R4: "",

    specialInstallmentC2R1: "",
    specialInstallmentC2R2: "",
    specialInstallmentC2R3: "",
    specialInstallmentC2R4: "",

    specialDurationC2R1: "",
    specialDurationC2R2: "",
    specialDurationC2R3: "",
    specialDurationC2R4: "",
  };

  const totalInstallmentSpecialC1 =
    1 * liabilitiesSpecial.specialInstallmentC1R1 +
    1 * liabilitiesSpecial.specialInstallmentC2R1;
  const totalInstallmentSpecialC2 =
    1 * liabilitiesSpecial.specialInstallmentC1R2 +
    1 * liabilitiesSpecial.specialInstallmentC2R2;
  const totalInstallmentSpecialC3 =
    1 * liabilitiesSpecial.specialInstallmentC1R3 +
    1 * liabilitiesSpecial.specialInstallmentC2R3;
  const totalInstallmentSpecialC4 =
    1 * liabilitiesSpecial.specialInstallmentC1R4 +
    1 * liabilitiesSpecial.specialInstallmentC2R4;

  var maxSpecialDurationc1 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R1,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc2 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R2,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc3 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R3,
    0 * liabilitiesSpecial.specialDurationC2R1
  );
  var maxSpecialDurationc4 = Math.max(
    0,
    1 * liabilitiesSpecial.specialDurationC1R4,
    0 * liabilitiesSpecial.specialDurationC2R1
  );


    const liabilitiesSpecialTotal1 =
    1 *
      liabilitiesSpecial.specialInstallmentC1R1 *
      (1 * liabilitiesSpecial.specialDurationC1R1) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R2 *
      (1 * liabilitiesSpecial.specialDurationC1R2) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R3 *
      (1 * liabilitiesSpecial.specialDurationC1R3) +
    1 *
      liabilitiesSpecial.specialInstallmentC1R4 *
      (1 * liabilitiesSpecial.specialDurationC1R4);
  const liabilitiesSpecialTotal2 =
    1 *
      liabilitiesSpecial.specialInstallmentC2R1 *
      (1 * liabilitiesSpecial.specialDurationC2R1) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R2 *
      (1 * liabilitiesSpecial.specialDurationC2R2) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R3 *
      (1 * liabilitiesSpecial.specialDurationC2R3) +
    1 *
      liabilitiesSpecial.specialInstallmentC2R4 *
      (1 * liabilitiesSpecial.specialDurationC2R4);
  const totalLiabilitiesSpecial =
    liabilitiesSpecialTotal1 + liabilitiesSpecialTotal2;


 //  مصفوفه الدعم ع حسب الراتب

            var arrayHousingSupportSalary = [
        3000,4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000,13000,14000
      ];
      var arrayHousingSupport = [
        1350, 1201, 1069, 950, 847, 753, 670, 579, 531,472,420,416,
      ];


      //حساب قسط الدعم
      // if (
      //   calulationInputs.netSalary == 0 &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   var housingSupport = 0;
      // } else if (
      //   calulationInputs.netSalary != 0 &&
      //   calulationInputs.housingSupport == "monthly" &&
      //   calulationInputs.editAmountHousingSupport != ""
      // ) {
      //   housingSupport = calulationInputs.editAmountHousingSupport;
      // } else if (
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(0) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(0);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(0) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(1) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(1);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(1) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(2) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(2);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(2) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(3) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(3);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(3) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(4) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(4);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(4) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(5) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(5);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(5) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(6) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(6);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(6) &&
      //   calulationInputs.netSalary <= arrayHousingSupportSalary.at(7) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(7);
      // } else if (
      //   calulationInputs.netSalary > arrayHousingSupportSalary.at(8) &&
      //   calulationInputs.housingSupport == "monthly"
      // ) {
      //   housingSupport = arrayHousingSupport.at(8);
      // } else {
      //   housingSupport = 0;
      // }

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
        calulationInputs.netSalary > arrayHousingSupportSalary.at(7) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(8) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(8);
      


              } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(8) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(9) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(9);


      
      

              } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(9) &&
        calulationInputs.netSalary <= arrayHousingSupportSalary.at(10) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(10);
      


      } else if (
        calulationInputs.netSalary > arrayHousingSupportSalary.at(11) &&
        calulationInputs.housingSupport == "monthly"
      ) {
        housingSupport = arrayHousingSupport.at(11);
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
    


            var ageClint1 = ((monthClint + yearClint * 12) / 12).toFixed(2);
      var ageClint = ((ageClint1 * 354.334) / 365).toFixed(2);

      //الاعمار التقاعديه
      if (
        calulationInputs.housingSupport == "monthly" ||
        calulationInputs.housingSupport == "baqa"
      ) {
        //متقاعد
        var ct = 75;
      } else {
        var ct = 75;
      }

      //الاعمار التقاعديه
      var array1 = [ct, 65, 65, 44, 46, 48, 50, 52, 44, 46, 48, 50, 52,54];
      var arPlus2 = [ct, 65, 65, 44, 46, 48, 50, 52, 44, 46, 48, 50, 52,54];
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
         "مقدم",
        "عقيد",
        "عميد",
      ];
      var array3 = [0, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75,75, 75, 75];
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
        23, 24, 25,26,27,28,29,30
      ]; // المده بالسنوات
      var arr1 = [
       3.68, 3.68, 3.68, 3.68, 3.68, 3.68,3.68,3.74,3.8,3.86,3.92,3.99,4.06,4.13,4.2,4.27,4.35,4.42,4.5,4.58,4.64,4.72,4.79,4.85,4.92,4.98,5.05
      ]; //نسب الفوائد للمدعوم

      var arr1Apr=[6.70,6.70,6.70,6.70,6.70,  6.70,6.70,6.74,6.78,6.82,6.86,6.90,6.95,6.99,7.04,7.08,7.12,7.17,7.21,7.25,7.28,7.32,7.35,7.38,7.41,7.44,7.46]
      //مصفوفه نسب الفوائد ثانيا غير المدعوم
      var durationRealEstates2 = [
          4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        23, 24, 25,26,27,28,29,30
      ];
      var arr2 = [
       3.73, 3.73, 3.73, 3.73, 3.73,  3.73,3.73,3.79,3.85,3.91,3.97,4.05,4.11,4.19,4.26,4.33,4.4,4.48,4.56,4.63,4.7,4.78,4.85,4.92,4.98,5.05,5.11

      ]; //الغير مدعوم  البنك
      var arr2Apr =[6.78,6.78,6.78,6.78,6.78,   6.78,6.78,6.82,6.86,6.90,6.94,6.98,7.02,7.07,7.11,7.16,7.20,7.24,7.29,7.33,7.36,7.40,7.43,7.46,7.49,7.52,7.54]
      
      var arr3 = [
      3.73, 3.73, 3.73, 3.73, 3.73,  3.73,3.73,3.79,3.85,3.91,3.97,4.05,4.11,4.19,4.26,4.33,4.4,4.48,4.56,4.63,4.7,4.78,4.85,4.92,4.98,5.05,5.11
      ]; //الغير مدعوم خارج البنك


       var arr3Apr =[6.78,6.78,6.78,6.78,6.78,   6.78,6.78,6.82,6.86,6.90,6.94,6.98,7.02,7.07,7.11,7.16,7.20,7.24,7.29,7.33,7.36,7.40,7.43,7.46,7.49,7.52,7.54]














      // تقريب مده التمويل الي الاعلي سنه

      var totalDurationUP = Math.ceil(totalDuration / 12);

      var vl = durationRealEstates.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates1 = arr1.at(vl); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
        var profitRatioRealEstates1Apr = arr1Apr.at(vl);
      var v2 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates2 = arr2.at(v2); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
    var profitRatioRealEstates2Apr = arr2Apr.at(v2);

      var v3 = durationRealEstates2.indexOf(totalDurationUP); // للحصول علي مكان معامل المده في المصفوفه
      var profitRatioRealEstates3 = arr3.at(v3); // للحصول ع النسبة ع حسب رقم العنصر من المصفوفه السابقه
  var profitRatioRealEstates3Apr = arr3Apr.at(v3);

      if (calulationInputs.netSalary == 0) {
        var profitRatioRealEstates = 0;
      } else if (calulationInputs.editProfitRateRealEstate != "") {
        var profitRatioRealEstates = calulationInputs.editProfitRateRealEstate;
      } else if (calulationInputs.housingSupport == "monthly"&&calulationInputs.typeException=="damanat") {
        var profitRatioRealEstates = profitRatioRealEstates1;
           var profitRatioRealEstatesApr = profitRatioRealEstates1Apr;
      } else if (calulationInputs.housingSupport == "baqa"&&calulationInputs.typeException=="damanat") {
        var profitRatioRealEstates = profitRatioRealEstates1;
             var profitRatioRealEstatesApr = profitRatioRealEstates1Apr;
      } else if (
       calulationInputs.housingSupport == "monthly"||calulationInputs.housingSupport == "baqa"
      ) {
        var profitRatioRealEstates = profitRatioRealEstates2;
        var profitRatioRealEstatesApr = profitRatioRealEstates2Apr;
      } else {
        var profitRatioRealEstates = profitRatioRealEstates3;
            var profitRatioRealEstatesApr = profitRatioRealEstates3Apr;
      }

      var profitRatioRealEstates1 = profitRatioRealEstates;
         var profitRatioRealEstates1Apr = profitRatioRealEstatesApr;


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
        // if(){
        //  var precentAfter = Math.min(65, precentAfterEdit1);
        // }else{
        //    var precentAfter = Math.min(65, precentAfterEdit1);
        // }
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
        var b = 1 * calulationInputs.editAmountHousingSupportBaqa;
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
        var b = 1 * calulationInputs.editAmountHousingSupportBaqa;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        if (salaryAfter >= 15000) {
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else {
          var precentAfter = Math.min(55, precentAfterEdit1);
        }
      } else if (
        calulationInputs.netSalary < 10000 &&
        calulationInputs.housingSupport == "baqa"
      ) {
        var b = 150000;
        var precentBefore = Math.min(55, precentBeforeEdit1);
        if (salaryAfter >= 15000) {
          var precentAfter = Math.min(65, precentAfterEdit1);
        } else {
          var precentAfter = Math.min(55, precentAfterEdit1);
        }
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
      if (calulationInputs.job == "مدني" || calulationInputs.job == "متقاعد") {
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

      if (
        calulationInputs.job == "متقاعد" ||
        calulationInputs.job == "خاص" ||
        calulationInputs.job == "مدني"
      ) {
        var ministryDefense = false;
      } else if (calulationInputs.housingSupport != "no") {
        var ministryDefense = true;
      } else {
        var ministryDefense = false;
      }
      if (ministryDefense && calulationInputs.ministryDefenseSelect === "yes") {
        var addministryDefense = 160000;

        var durationMinistryDefense = 0;
        var installmentMinistryDefense = 1;
      } else {
        var addministryDefense = 0;
        var durationMinistryDefense = 0;
        var installmentMinistryDefense = 0;
      }

      //مبلغ الالتزامات الحاليه

      var liabilities =
        1 * calulationInputs.installment1 * calulationInputs.duration1 +
        1 * calulationInputs.installment2 * calulationInputs.duration2 +
        1 * calulationInputs.installment3 * calulationInputs.duration3 +
        1 * calulationInputs.installment4 * calulationInputs.duration4 +
        totalLiabilitiesSpecial +
        PersonalFinance +
        profitPersonalFinance;
      var sl5 = personInstallment;
      var maxDurationFirstInstallmentCalc = Math.max(
        1 * calulationInputs.duration1,
        1 * calulationInputs.duration2,
        1 * calulationInputs.duration3,
        1 * calulationInputs.duration4,
        durationPerson
      );
      var totalPercentageNow =
        1 * calulationInputs.installment1 +
        1 * calulationInputs.installment2 +
        1 * calulationInputs.installment3 +
        1 * calulationInputs.installment4 +
        sl5;
      var percentageNow =
        (100 * totalPercentageNow) / (1 * calulationInputs.netSalary);
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












if(totalDuration>240 && calulationInputs.housingSupport == "monthly" ){

 if(maxxDurationBefore>=240){
     var editInhouse1=precentBefore*housingSupport/100
     var durationEditInhouse1=totalDuration-maxxDurationBefore

     if(maxxDurationBefore>=totalDuration){
           var editInhouse2=0
          var durationEditInhouse2=0

     }else{

      var editInhouse2=precentAfter*housingSupport/100
      var durationEditInhouse2=totalDuration-maxxDurationBefore-durationEditInhouse1
     }

  }else{

   var editInhouse1=0
     var durationEditInhouse1=0


   var editInhouse2=precentAfter*housingSupport/100

    var durationEditInhouse2=totalDuration-240
  }


}else{
     var editInhouse1=0
     var editInhouse2=0
     var durationEditInhouse1=0
     var durationEditInhouse2=0
}






// ✅ دالة الالتزامات الخاصة
function getMonthlyLiabilities(liabilitiesSpecial) {
  const liabilities = [];
  
  let currentMonth = 0;

  // العمود 1
  for (let i = 1; i <= 4; i++) {
    const installment = Number(liabilitiesSpecial[`specialInstallmentC1R${i}`]) || 0;
    const duration = Number(liabilitiesSpecial[`specialDurationC1R${i}`]) || 0;

    if (installment > 0 && duration > 0) {
      for (let m = 0; m < duration; m++) {
        liabilities[currentMonth + m] = (liabilities[currentMonth + m] || 0) + installment;
      }
      currentMonth += duration;
    }
  }

  // العمود 2
  currentMonth = 0;
  for (let i = 1; i <= 4; i++) {
    const installment = Number(liabilitiesSpecial[`specialInstallmentC2R${i}`]) || 0;
    const duration = Number(liabilitiesSpecial[`specialDurationC2R${i}`]) || 0;

    if (installment > 0 && duration > 0) {
      for (let m = 0; m < duration; m++) {
        liabilities[currentMonth + m] = (liabilities[currentMonth + m] || 0) + installment;
      }
      currentMonth += duration;
    }
  }

  return liabilities;
}

// ✅ دالة الالتزامات العادية
function getRegularLiabilities(calulationInputs) {
  const liabilities = [];

  for (let i = 1; i <= 4; i++) {
    const installment = Number(calulationInputs[`installment${i}`]) || 0;
    const duration = Number(calulationInputs[`duration${i}`]) || 0;

    if (installment > 0 && duration > 0) {
      for (let m = 0; m < duration; m++) {
        liabilities[m] = (liabilities[m] || 0) + installment;
      }
    }
  }







  // القرض الشخصي
  const personalInstallment = Number(personInstallment) || 0;
  const personalDuration = Number(durationPerson) || 0;
  if (personalInstallment > 0 && personalDuration > 0) {
    for (let m = 0; m < personalDuration; m++) {
      liabilities[m] = (liabilities[m] || 0) + personalInstallment;
    }
  }

  return liabilities;
}

// ✅ دمج الالتزامات
function getAllMonthlyLiabilities(calulationInputs, liabilitiesSpecial) {



  const regular = getRegularLiabilities(calulationInputs);
  const special = getMonthlyLiabilities(liabilitiesSpecial);

  const maxMonths = Math.max(regular.length, special.length);
  const merged = [];

  for (let m = 0; m < maxMonths; m++) {
    merged[m] = (regular[m] || 0) + (special[m] || 0);
  }

  return merged;
}

// ✅ دالة حساب القسط العقاري لكل شهر
function calculateRealEstateInstallments({
  apr,
  totalMonths,
  maxInstallmentBefore,
  maxInstallmentAfter,
  monthsBeforeRetirement,
  monthsAfterRetirement,
  calulationInputs,
  liabilitiesSpecial
}) {
  const monthlyRate = apr / 100 / 12;
  const monthlyLiabilities = getAllMonthlyLiabilities(calulationInputs, liabilitiesSpecial);



    // تطبيق التزامات "editInhouse" إذا تحققت الشروط
  (function applyEditInhouse() {
    const START_AFTER_MONTHS = 240; // ابداء الإلتزام بعد نهاية 240 شهر (أي من المؤشر 240)
  
    // تحقق أولي
    if (!(totalMonths > START_AFTER_MONTHS  && calulationInputs.housingSupport === "monthly")) {
      return;
    }

    // قراءة القيم من calulationInputs أو استخدام صفر كافتراضي
    const housingSupportValue = Number(housingSupport ?? housingSupport ?? 0) || 0;
    const precentBefore1= Number(precentBefore ?? 0) || 0;
    const precentAfter1 = Number(precentAfter ?? 0) || 0;

    // monthsBeforeRetirement هو البراميتر الذي استدعيت به الدالة (يعادل maxxDurationBefore)
    // استخدم monthsBeforeRetirement الموجود في scope الدالة
    let editInhouse1 = 0, editInhouse2 = 0;
    let durationEditInhouse1 = 0, durationEditInhouse2 = 0;

    if (monthsBeforeRetirement >= START_AFTER_MONTHS) {
      // الحالة الأولى كما في منطقك
      editInhouse1 = (0*precentBefore1 * housingSupportValue) / 100;
      // durationEditInhouse1 = Math.max(0, totalMonths - monthsBeforeRetirement);
         durationEditInhouse1 = Math.max(0, monthsBeforeRetirement- 240);

      if (monthsBeforeRetirement >= totalMonths) {
        editInhouse2 = 0;
        durationEditInhouse2 = 0;
      } else {
        editInhouse2 = (0*precentAfter1 * housingSupportValue) / 100;
        // durationEditInhouse2 = Math.max(0, totalMonths - monthsBeforeRetirement - durationEditInhouse1);
              durationEditInhouse2 = Math.max(0, totalMonths - monthsBeforeRetirement );
      }
    } else {
      // الحالة الثانية كما في منطقك
      editInhouse1 = 0;
      durationEditInhouse1 = 0;

      editInhouse2 = (0*precentAfter1 * housingSupportValue) / 100;
      durationEditInhouse2 = Math.max(0, totalMonths - START_AFTER_MONTHS);
    }





    // الآن نطبّق الإلتزامات على monthlyLiabilities
    // نضمن أن monthlyLiabilities طوله >= totalMonths (نوسّعه إذا لزم)
    for (let i = monthlyLiabilities.length; i < totalMonths; i++) monthlyLiabilities[i] = monthlyLiabilities[i] || 0;

    let applyIndex = START_AFTER_MONTHS; // بداية الإلزام (مؤشر 240 => شهر 241)
    // أضف editInhouse1 لمدة durationEditInhouse1
    for (let m = 0; m < durationEditInhouse1 && (applyIndex + m) < totalMonths; m++) {
      monthlyLiabilities[applyIndex + m] = (monthlyLiabilities[applyIndex + m] || 0) + editInhouse1;
    }
    applyIndex += durationEditInhouse1;

    // أضف editInhouse2 لمدة durationEditInhouse2 (يكمل على ما سبق)
    for (let m = 0; m < durationEditInhouse2 && (applyIndex + m) < totalMonths; m++) {
      monthlyLiabilities[applyIndex + m] = (monthlyLiabilities[applyIndex + m] || 0) + editInhouse2;
    }

    // انتهى تطبيق الالتزامات
  })();







  const monthlyInstallments = [];
  let totalPrincipal = 0;
  let totalInterest = 0;

  for (let month = 0; month < totalMonths; month++) {
    const isBeforeRetirement = month < monthsBeforeRetirement;
    const maxInstallment = isBeforeRetirement ? maxInstallmentBefore : maxInstallmentAfter;

    const liability = monthlyLiabilities[month] || 0;

    // القسط العقاري الفعلي = الحد الأقصى - الالتزام
    const realEstateInstallment = Math.max(maxInstallment - liability, 0);

    // 💡 التصحيح: القسط نفسه هو الأصل، والفائدة على صافي التمويل
    const principal = realEstateInstallment;
    const interest = principal * monthlyRate;
    const total = principal + interest;

    monthlyInstallments.push({
      month: month + 1,
      liability,
      realEstateInstallment,
      principal,
      interest,
      total
    });

    totalPrincipal += principal;
    totalInterest += interest;
  }

  // حساب صافي التمويل (NPV) بنفس Excel
  const npv = monthlyInstallments.reduce((acc, val, idx) => {
    return acc + val.total / Math.pow(1 + monthlyRate, idx + 1);
  }, 0);

  // Flat Rate = (SUM(totalPayments) - PV) / (PV * سنوات التمويل)
  const sumInstallments = monthlyInstallments.reduce((acc, val) => acc + val.total, 0);
  const flatRate = (sumInstallments - npv) / (npv * (totalMonths / 12));

  return {
    monthlyInstallments,
    totalPrincipal,
    totalInterest,
    totalPaid: totalPrincipal + totalInterest,
    npv,
    flatRate
  };
}

// ✅ مثال استدعاء الدالة
const result = calculateRealEstateInstallments({
  apr: profitRatioRealEstates1Apr,
  totalMonths: totalDuration,
  monthsBeforeRetirement: maxxDurationBefore,
  monthsAfterRetirement: maxxDurationAfter,
  maxInstallmentBefore:installmentBeforeNotReal ,
  maxInstallmentAfter: installmentAfterNotReal,
  calulationInputs,
  liabilitiesSpecial
});

console.log("📊 التفاصيل الشهرية:", result.monthlyInstallments);
console.log("💰 إجمالي أصل الدين:", result.totalPrincipal);
console.log("💰 إجمالي الفوائد:", result.totalInterest);
console.log("💰 الإجمالي المدفوع:", result.totalPaid);
console.log("📉 NPV (صافي التمويل):", result.npv);
console.log("📈 Flat Rate:", (result.flatRate * 100).toFixed(2) + "%");


// if(calulationInputs.housingSupport == "baqa"||calulationInputs.housingSupport == "no"){
// var splite=360
// }else{
// var splite=240
// }

// function summarizeInstallments(installments, splitAt = splite) {
//   const summary = [];
//   if (installments.length === 0) return summary;

//   let current = {
//     period: 1,
//     realEstateInstallment: installments[0].realEstateInstallment,
//     months: 1,
//     total: installments[0].realEstateInstallment
//   };

//   for (let i = 1; i < installments.length; i++) {
//     const currentInstallment = installments[i].realEstateInstallment;

//     // فصل عند تغير القسط أو عند splitAt
//     if (currentInstallment !== current.realEstateInstallment || i === splitAt) {
//       summary.push({ ...current });

//       // إذا وصلنا لشهر splitAt، نكمل بنفس القسط بعده
//       current = {
//         period: current.period + 1,
//         realEstateInstallment: currentInstallment,
//         months: 1,
//         total: currentInstallment
//       };
//     } else {
//       current.months++;
//       current.total += currentInstallment;
//     }
//   }

//   // أضف آخر فترة
//   summary.push({ ...current });

//   return summary;
// }

// setSummary(summarizeInstallments(result.monthlyInstallments, splite));


// console.log("📊 ملخص الفترات:");
// summary.forEach((p) => {
//   console.log(
//     `الفترة ${p.period} ➝ القسط: ${p.realEstateInstallment} | عدد الأشهر: ${p.months}`
//   );
// });




// دالة تلخيص الأقساط على فترات
function summarizeInstallments(installments, splitAt) {
  const summary = [];
  if (!installments || installments.length === 0) return summary;

  let current = {
    period: 1,
    realEstateInstallment: installments[0].realEstateInstallment,
    months: 1,
    total: installments[0].realEstateInstallment
  };

  for (let i = 1; i < installments.length; i++) {
    const currentInstallment = installments[i].realEstateInstallment;

    // فصل عند تغير القسط أو عند splitAt
    if (currentInstallment !== current.realEstateInstallment || i === splitAt) {
      summary.push({ ...current });

      // البدء بفترة جديدة
      current = {
        period: current.period + 1,
        realEstateInstallment: currentInstallment,
        months: 1,
        total: currentInstallment
      };
    } else {
      current.months++;
      current.total += currentInstallment;
    }
  }

  // أضف آخر فترة
  summary.push({ ...current });

  return summary;
}

// مثال استخدام دالة الحسابات
const splite = calulationInputs.housingSupport === "baqa" || calulationInputs.housingSupport === "no" ? 360 : 240;

// استدعاء الدالة للحصول على الملخص
const summary = summarizeInstallments(result.monthlyInstallments, splite);

// طباعة النتائج
console.log("📊 ملخص الفترات:");
summary.forEach((p) => {
  console.log(
    `الفترة ${p.period} ➝ القسط: ${p.realEstateInstallment} | عدد الأشهر: ${p.months} | الإجمالي: ${p.total}`
  );
});









// if( calulationInputs.ministryDefenseSelect === "yes" &&
//         ministryDefense1 === true){
   
         var rateFinal= (result.flatRate * 100).toFixed(2)

    //   }else{
    //  var rateFinal= (result.flatRate * 100).toFixed(2)

    //   }















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
          (1 + (rateFinal - 0) * 0.01 * (totalDuration / 12));
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
          (1 + (rateFinal - 0) * 0.01 * (totalDuration / 12));
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
          (1 + rateFinal * 0.01 * (totalDuration / 12));
      }

      var xxxx = 1 * prcent1 * 1 * calulationInputs.netSalary;
      //التمويل العقاري خامسا حساب فوائد للتمويل
      var totalProfitEstateFinance =
        totalRealEstateFinance - netRealEstateFinance;
      var netProfitEstateFinance =
        totalProfitEstateFinance -
        housingSupport * Math.min(240, totalDuration);

      if (
        calulationInputs.job == "متقاعد" ||
        calulationInputs.job == "خاص" ||
        calulationInputs.job == "مدني"
      ) {
        var ministryDefense = false;
      } else if (calulationInputs.housingSupport != "no") {
        var ministryDefense = true;
      } else {
        var ministryDefense = false;
      }
      if (ministryDefense && calulationInputs.ministryDefenseSelect === "yes") {
        var addministryDefense = 160000;
      } else {
        var addministryDefense = 0;
      }

      // التمويل العقاري سادسا حساب  اجمالي المده للتمويل
      var total =
        netRealEstateFinance + PersonalFinance + b + addministryDefense;

      if (calulationInputs.housingSupport == "baqa") {
        var outNameHosingSuppory = "باقة الدعم";
        var amountHousingSupport = b;
      } else if (calulationInputs.housingSupport == "no") {
        var outNameHosingSuppory = "الدعم السكني";
        var amountHousingSupport = 0;
      } else {
        var outNameHosingSuppory = "قسط الدعم";

        // var amountHousingSupport = new Intl.NumberFormat().format(
        //   housingSupport.toFixed(0)
        // );
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
          var netT = total / 0.7;
          var netT1 = (netT * 5) / 100;
          var netT2 = (netT * 2.5) / 100;
          var net3 = 0 * netT2;
          var netNet = total - netT1 - netT2 - net3 - 5700;
        }
      }

      if (percentageNow > precentBefore) {
        var prentError = "red";
      } else {
        var prentError = "";
      }

      var phoneToWattap =
        "https://api.whatsapp.com/send?phone=" + calulationInputs.phone;
      if (
        calulationInputs.housingSupport == "baqa" ||
        calulationInputs.housingSupport == "noMonthly"
      ) {
        var amountHousingSupportN = 0;
      } else {
        var amountHousingSupportN = amountHousingSupport;
      }
      var colFouer = new Intl.NumberFormat().format(
        ((salaryAfter * precentAfter) / 100).toFixed(0)
      );
      var colFirstN = new Intl.NumberFormat().format(
        (installment - xxxx - amountHousingSupportN).toFixed(0)
      );
      var colSecendN = new Intl.NumberFormat().format(
        (installmentBefore - amountHousingSupportN).toFixed(0)
      );
      var colThridN = new Intl.NumberFormat().format(
        (installmentAfter - amountHousingSupportN).toFixed(0)
      );
      var outPresonalN = PersonalFinance;
      var outRealN = netRealEstateFinance;
      var outBaqaN = b;
      var outAddministryDefenseN = addministryDefense;





    return {
      bankName: 'مسار النمو',
      age: ageClint,
        work: durationWork,

        durationBeforeRetirement: maxxDurationBefore.toFixed(0),
        durationAfterRetirement: maxxDurationAfter.toFixed(0),
        totalDuration: Math.round((totalDuration * 100) / 12) / 100,

        // profitRateRealEstate: profitRatioRealEstates1,
          profitRateRealEstate: rateFinal,
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
        total: new Intl.NumberFormat().format(total.toFixed(0)),

        firstInstallment: new Intl.NumberFormat().format(
          (installment - xxxx).toFixed(0)
        ),
        percentageNow: new Intl.NumberFormat().format(percentageNow.toFixed(2)),

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
        durationPersonal: Math.ceil(durationPerson),
        //تغير الكتابه

        nameAmountHousingSupport: outNameHosingSuppory,
        phoneOut: phoneToWattap,
        colorError: prentError,
        maxDurationFirstInstallment: maxDurationFirstInstallmentCalc,
        colFirst: new Intl.NumberFormat().format(
          (installment - xxxx).toFixed(0)
        ),
        colSecend: new Intl.NumberFormat().format(installmentBefore.toFixed(0)),
        colThrid: new Intl.NumberFormat().format(installmentAfter.toFixed(0)),
        house: new Intl.NumberFormat().format(amountHousingSupport),
        colFouer: colFouer,
        colFirstN: colFirstN,
        colSecendN: colSecendN,
        colThridN: colThridN,
        outPresonal: outPresonalN,
        outReal: outRealN,
        outAddministryDefense: outAddministryDefenseN,
        outBaqa: outBaqaN,
        totalDurationN: Math.round((totalDuration * 100) / 12) / 100,
        durationMinistryDefense: durationMinistryDefense.toFixed(0),
        installmentMinistryDefense: installmentMinistryDefense.toFixed(0),
        addministryDefenseC: new Intl.NumberFormat().format(addministryDefense),
    };
  } catch (e) { return null; }
};

// ============================================
// الدالة الرئيسية للمقارنة
// ============================================
export const calculateForBank = (inputs, bankName) => {
  switch (bankName) {
    case 'alrajhi': return calculateAlrajhi(inputs);
    case 'alahli': return calculateAlahli(inputs);
    case 'albilad': return calculateAlbilad(inputs);
    case 'alfransi': return calculateAlfransi(inputs);
    case 'alinma': return calculateAlinma(inputs);
    case 'sab': return calculateSab(inputs);
    case 'masar': return calculateMasar(inputs);
    case 'alrab': return calculateAlrab(inputs);
    default: return null;
  }
};

export const compareAllBanks = (inputs) => {
  const banks = ['alrajhi', 'alahli', 'albilad', 'alfransi', 'alinma', 'sab', 'masar', 'alrab'];
  return banks.map(bank => calculateForBank(inputs, bank)).filter(res => res !== null);
};



export const getBestBankBy = (comparisonData, criteria) => {
  if (!comparisonData || comparisonData.length === 0) return null;
  switch (criteria) {
    case 'netNet1': return comparisonData.reduce((max, b) => b.netNet1 < max.netNet1 ? b : max);
    case 'lowestProfit': return comparisonData.reduce((min, b) => b.totalProfit < min.totalProfit ? b : min);
    case 'lowestInstallment': return comparisonData.reduce((min, b) => b.installmentBeforeRetirement < min.installmentBeforeRetirement ? b : min);
    case 'shortestDuration': return comparisonData.reduce((min, b) => b.totalDuration < min.totalDuration ? b : min);
    case 'lowestRate': return comparisonData.reduce((min, b) => b.profitRateRealEstate < min.profitRateRealEstate ? b : min);
    default: return null;
  }
};




