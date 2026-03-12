export const validateInputsAbout = (inputs, inputDisabledBasicSalary, calulationOutputs,clientPhoneIsValid) => {
  const errors = [];

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
       currentBank,
       housingSupport,
    

  } = inputs;



    if (housingSupport == "select") {
    errors.push("خطأ فضلا التاكد من نوع الدعم");
  }


  if (netSalary.length < 4 || netSalary.length > 5) {
    errors.push("خطأ فضلا التاكد من الراتب الصافي");
  }

  if (basicSalary.length < 4 && !inputDisabledBasicSalary) {
    errors.push("فضلا التاكد من الراتب الاساسي");
  }

  if (!inputDisabledBasicSalary && basicSalary.length > 5) {
    errors.push("فضلا التاكد من الراتب الاساسي");
  }

  if (birthYear < 1366 || birthYear > 1428) {
    errors.push("خطأ تاكد من سنة الميلاد من 1366 الي 1428 ");
  }

  if (birthMonth < 1 || birthMonth > 12) {
    errors.push("خطأ تاكد من شهر الميلاد من 1 الي 12 ");
  }

  if (startWorkYear < birthYear && !inputDisabledBasicSalary) {
    errors.push("خطأ تاكد من سنه التعيين اقل من تاريخ الميلاد");
  }

  if (startWorkMonth < 1 && !inputDisabledBasicSalary) {
    errors.push("خطأ تاكد من شهر التعيين من 1 الي 12 ");
  }

  if (!inputDisabledBasicSalary && startWorkYear > currentYear) {
    errors.push("خطأ تاكد من سنه التعيين اكبر من تاريخ اليوم");
  }

  if (!inputDisabledBasicSalary && startWorkMonth > 12) {
    errors.push("خطأ تاكد من شهر التعيين من 1 الي 12 ");
  }

  if (currentYear < 1444 || currentYear > 1447) {
    errors.push("خطأ تاكد من تاريخ السنه الحاليه ");
  }

  if (currentMonth < 1 || currentMonth > 12) {
    errors.push("خطأ تاكد من تاريخ الشهر الحالي ");
  }

  if (
    Number(calulationOutputs.percentageNow) >
    Number(calulationOutputs.percentageBeforeRetirement)
  ) {
    errors.push("الاستقطاع الحالي اعلي من الحد");
  }

  if (job === "خاص" && realEstateBank !== "alahli" && durationIn === "") {
    errors.push("خطأ فضلا اكتب مدة الاشتراك بالتامينات");
  }

  if (job === "خاص" && realEstateBank !== "alahli" && durationIn < 1) {
    errors.push("خطأ فضلا تاكد من مدة الاشتراك بالتامينات");
  }

  if (job === "خاص" && realEstateBank !== "alahli" && durationIn > 744) {
    errors.push("خطأ فضلا تاكد من مدة الاشتراك بالتامينات");
  }

  if (
    realEstateBank === "alinma" &&
    privateSectorEmployee === "غير معتمد" &&
    job === "خاص"
  ) {
    errors.push("ان كان التمويل اكبر من 650 الف لا بد من تقليل الاستقطاع");
  }

  if (!name) {
    errors.push("فضلا اكتب اسم العميل");
  }

  if (phone === "9665" || phone.length !== 12) {
    errors.push("خطأ تاكد من رقم الجوال 12 رقم 9665");
  }


    // 🟢 رقم الجوال: 12 رقم يبدأ بـ 966
   if (
    !phone ||
    !/^\d{12}$/.test(phone) ||
    !phone.startsWith("9665")
     ) {
    errors.push("❌ رقم الجوال غير صالح (يجب أن يكون 12 رقم ويبدأ بـ 9665)");
 }

  

  if (typeof clientPhoneIsValid !== "undefined" && !clientPhoneIsValid) {
    errors.push("❌ رقم الجوال مستخدم من قبل أو غير صالح");
  }



  return errors;
};
