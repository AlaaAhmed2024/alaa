// export function calculateFinance(data, bank) {
//   const currentAge = new Date().getFullYear() - data.birthYear;
//   const retirementAge = data.retirementAge || 60;
//   const loanAmount = data.propertyValue - (data.downPayment || 0);
//   const termYears = data.termYears || 25;

//   const monthlyRate = bank.interest / 100 / 12;
//   const months = termYears * 12;
//   const monthly =
//     (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));

//   const totalInterest = monthly * months - loanAmount;
//   const interestPercentage = (totalInterest / loanAmount) * 100;

//   const yearsBeforeRetirement = Math.min(termYears, retirementAge - currentAge);
//   const yearsAfterRetirement = Math.max(0, termYears - yearsBeforeRetirement);

//   // افتراضياً قيمة الدعم 0، يمكن تعديلها حسب البنك
//   const supportAmount = (data.supportRate || 0) * loanAmount / 100;

//   return {
//     bankName: bank.name,
//     interestRate: bank.interest,
//     loanAmount,
//     monthly,
//     termYears,
//     yearsBeforeRetirement,
//     yearsAfterRetirement,
//     totalInterest,
//     interestPercentage,
//     supportAmount,
//     totalPayment: loanAmount + totalInterest - supportAmount
//   };
// }



// // FinanceCalculator.js
// export function calculateFinance(data, saudiBanks) {
//   // دالة لحساب كل بنك بناءً على بيانات المستخدم
//   const results = saudiBanks.map((bank) => {
//     // مثال لحساب القسط
//     const principal = parseFloat(data.netSalary || 0) * 5; // افتراض: 5 أضعاف الراتب
//     const annualRate = 0.05; // نسبة الفائدة السنوية 5%
//     const durationYears = 20; // مدة التمويل افتراضية 20 سنة

//     // القسط الشهري باستخدام صيغة التمويل
//     const monthlyRate = annualRate / 12;
//     const n = durationYears * 12;
//     const monthlyInstallment = principal * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);

//     // حساب الدعم (إذا مستخدم مدعوم من الإسكان)
//     const housingSupport = data.houseSuuportYesNo === "yes" ? (data.houseSuuport === "yesMontly" ? monthlyInstallment * 0.1 : 5000) : 0;

//     // فترة قبل وبعد التقاعد
//     const currentYear = new Date().getFullYear();
//     const birthYear = parseInt(data.yearBirth || currentYear - 30);
//     const retirementAge = data.employmentSector === "military" ? 60 : 60; // افتراض
//     const ageNow = currentYear - birthYear;
//     const yearsToRetirement = retirementAge - ageNow;
//     const durationBeforeRetirement = Math.min(yearsToRetirement, durationYears);
//     const durationAfterRetirement = Math.max(durationYears - durationBeforeRetirement, 0);

//     // إجمالي الفوائد
//     const totalPayment = monthlyInstallment * n;
//     const totalInterest = totalPayment - principal;

//     return {
//       bank,
//       principal,
//       monthlyInstallment: monthlyInstallment.toFixed(2),
//       totalInterest: totalInterest.toFixed(2),
//       totalPayment: totalPayment.toFixed(2),
//       housingSupport,
//       durationBeforeRetirement,
//       durationAfterRetirement,
//       durationYears,
//       interestRate: (annualRate * 100).toFixed(2) + "%",
//     };
//   });

//   return results;
// }






// FinanceCalculator.js
export function calculateFinance(data, bank) {



var salaryAfter=0
if(data.houseSuuportYesNo == "yes"&& data.houseSuuport=="yesMontly"){
var prcBefore=65
var prcAfter=65


}else if(data.netSalary>15000&&salaryAfter<15000){
var prcBefore=65
var prcAfter=55


}else if(data.netSalary>15000&&salaryAfter>15000){
var prcBefore=65
var prcAfter=65


}else if(data.netSalary<15000&&salaryAfter>15000){
var prcBefore=55
var prcAfter=65


}else{
var prcBefore=55
var prcAfter=55
}


  const durationYears = 25;
  const currentYear = new Date().getFullYear();
  const birthYear = parseInt(data.yearBirth );
  const retirementAge = data.employmentSector === "military" ? 44 : 60;
  const ageNow = currentYear - birthYear;
  const durationBeforeRetirement = Math.min(durationYears, retirementAge - ageNow);
  const durationAfterRetirement = Math.max(durationYears - durationBeforeRetirement, 0);


if(data.downPayment === 100&&data.editList === "editMonthly" ){


 var installmentBeforeRetirement = 1*data.netSalary * prcBefore/100
 var installmentAfterRetirement = 1*salaryAfter *prcAfter/100 ;
}else{
    installmentBeforeRetirement =Math.min(data.netSalary * prcBefore/100,data.downPayment ) 
    installmentAfterRetirement = Math.min(salaryAfter *prcAfter/100,data.downPayment )
}




//   // Basic data
// var age = age;
// var salary = netSalary;
// var pensionSalary = pensionSalary;

// // Limits
// var maxFinanceDuration = 30;   // years
// var financeUntilAge = 70;      // years

// // Retirement age based on job type
// var retirementAge;

// if (job === "employee") {
//   retirementAge = 60;
// } else {
//   retirementAge = 44;
// }

// // Durations
// var durationBeforeRetirement = retirementAge - age;

// var durationAfterRetirement = Math.min(
//   financeUntilAge - retirementAge,
//   maxFinanceDuration - durationBeforeRetirement
// );



// // Total finance amount
// var total =
//   (installmentBeforeRetirement * 12 * durationBeforeRetirement) +
//   (installmentAfterRetirement * 12 * durationAfterRetirement);



  const principal = parseFloat(data.netSalary || 0) * 5;
  const annualRate = bank.rate / 100; // استخدم معدل البنك



  const monthlyRate = annualRate / 12;
  const n = durationYears * 12;
  const monthlyInstallment = principal * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);

  const housingSupport = data.houseSuuportYesNo === "yes" ? 5000 : 0;



  const totalPayment =0* monthlyInstallment * n+ 0* installmentBeforeRetirement * n;
  const totalInterest = totalPayment - principal;

  return {
    // bankName: bank.name,
    // loanAmount: principal,
    // installmentBeforeRetirement: installmentBeforeRetirement,
    // installmentAfterRetirement:installmentAfterRetirement,
    // totalInterest,
    // totalPayment,
    // supportAmount: housingSupport,
    // termYears: durationYears,
    // yearsBeforeRetirement: durationBeforeRetirement,
    // yearsAfterRetirement: durationAfterRetirement,
    // interestPercentage: annualRate * 100,
    bankName: bank.name,
    loanAmount: bank.x3,
    installmentBeforeRetirement: bank.x9,
    installmentAfterRetirement:bank.x10,

    // totalInterest,
    // totalPayment,
    // supportAmount: housingSupport,
    termYears: bank.x1,
    yearsBeforeRetirement: bank.x11,
    yearsAfterRetirement: bank.x12,
    interestPercentage: bank.x17,
  };
}

