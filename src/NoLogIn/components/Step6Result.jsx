
// import { banks } from "./banks";
// import { calculateFinance } from "./calculateFinance";
// import {


  
// } from "@mui/material";
// import { 
//   Card, CardContent, Typography, Grid, Button, Box,
//   Snackbar, Alert,  Divider,   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Slider,
//   TextField,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//     Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Autocomplete
// } from "@mui/material";

// import emailjs from "emailjs-com";
// import { useState } from "react";

// import CircularProgress from "@mui/material/CircularProgress";



// export default function Step6Result({ data, onBack,setData }) {
//   const downAmount = ((data.propertyValue || 0) * (data.downPayment || 0)) / 100;
//   const loanAmount = (data.propertyValue || 0) - downAmount;
//   const monthly = loanAmount / ((data.termYears || 20) * 12);
//   const deduction = ((monthly / (data.netSalary || 1)) * 100).toFixed(2);



// const [selectedBank, setSelectedBank] = useState(null);

// const results = banks.map(bank => calculateFinance(data, bank));



// if(data.employmentSector === "retired"){
//   var title=""
//   var value=""

// }else if(data.employmentSector === "military"){
//   var title="الرتبة و الوزارة"
//   var value=data.militaryRank + "-" + data.militaryMinistry
// }else if(data.employmentSector === "noneGovernment"){
//   var title="جهه العمل"
//  var value=data.companyName
// }else if(data.employmentSector === "privateHight"){
//   var title="اسم الشركة"
//   var value=data.companyNameHight
// }else if(data.employmentSector === "government"){
//   var title="اسم الوزارة "
//   var value=data.civilianMinistry
// }else{
//   var title="اسم الوزارة"
//   var value=data.companyName
// }





// if(data.sauidyYesNo == "yes"){
// var sauidyYesNoText ="نعم"
// }else{
//   var sauidyYesNoText ="لا"
// }


// if(data.houseSuuportYesNo=="yes"&&data.sauidyYesNo == "yes"){
//    var houseSuuportYesNoText ="نعم"
// }else{
//   var houseSuuportYesNoText ="لا"
// }

// if(data.firstHouse=="yes"&&data.sauidyYesNo == "yes"){
// var firstHouseText ="نعم"
// }else{
//   var firstHouseText ="لا"
// }

//   const employmentSectorLabels = {
//   government: " قطاع حكومي مدني",
//    noneGovernment:"شبة حكومي",
//    military: "قطاع عسكري",
//   private: "قطاع خاص",
//   retired: "متقاعد",
//    privateHight: "شركات كبري",
// };



// const getObligationsSummary = (data) => {
//   if (data.obligationsYesNo !== "yes" || !data.obligations?.length) {
//     return "الالتزامات: لا يوجد";
//   }

//   return (
//     "الالتزامات:\n" +
//     data.obligations
//       .map((ob) => {
//         const remainingText =
//           ob.type === "المدة المتبقية"
//             ? `المدة المتبقية: ${ob.remaining || "-"}`
//             : `المبلغ المتبقي: ${ob.remaining || "-"}`;

//         return `• ${ob.name}
//   - القسط: ${ob.value || "-"}
//   - ${remainingText}`;
//       })
//       .join("\n\n")
//   );
// };



// const sendWhatsApp = () => {
//   const message = `
// طلب تمويل عقاري

// 👤 الاسم: ${data.name}
// 📱 الجوال: ${data.phone}
// 📍 المدينة: ${data.city}
// 🏢 القطاع: ${employmentSectorLabels[data.employmentSector] || "-"}
// ${title}: ${value || "-"}
// 🏦 البنك: ${data.saudiBanks || "-"}

// 💵 الراتب: ${data.netSalary}
// 💵 الراتب الأساسي: ${data.baseSalary || "-"}
// 🎂 تاريخ الميلاد: ${data.monthBirth} - ${data.yearBirth}
// 📅 تاريخ التعيين: ${data.monthStartWork} - ${data.yearStartWork}

// 🇸🇦 سعودي: ${sauidyYesNoText || "-"}
// 🏠 الدعم السكني: ${houseSuuportYesNoText || "-"}
// 🏡 المسكن الأول: ${firstHouseText || "-"}

// 🏠 نوع العقار: ${data.propertyType || "-"}
// 📍 المدينة: ${data.city || "-"}
// 📌 الحي: ${data.district || "-"}

// 📐 المساحة:
// من ${data.areaFrom || "-"} م²
// إلى ${data.areaTo || "-"} م²

// 💰 السعر:
// من ${data.priceFrom || "-"}
// إلى ${data.priceTo || "-"}

// 🏦 قيمة العقار: ${data.propertyValue || "-"}
// 💳 القسط التقريبي: ${monthly.toFixed(0)} ريال
// 📊 نسبة الاستقطاع: ${deduction}%

// ${getObligationsSummary(data)}

// 📝 ملاحظات:
// ${data.notes || "لا يوجد"}
// `;

//   const url = `https://wa.me/966508417587?text=${encodeURIComponent(message)}`;
//   window.open(url, "_blank");

//   localStorage.removeItem("financeData");
// };



// const [alert, setAlert] = useState({
//   open: false,
//   type: "success", // success | error
//   message: "",
// });

// const [loading, setLoading] = useState(false);




// const getObligationsEmailText = (data) => {
//   if (data.obligationsYesNo !== "yes" || !data.obligations?.length) {
//     return "لا يوجد";
//   }

//   return data.obligations
//     .map((ob, index) => {
//       const remaining =
//         ob.type === "المدة المتبقية"
//           ? `المدة المتبقية: ${ob.remaining || "-"}`
//           : `المبلغ المتبقي: ${ob.remaining || "-"}`;

//       return `${index + 1}) ${ob.name}
// - القسط: ${ob.value || "-"}
// - ${remaining}`;
//     })
//     .join("\n\n");
// };




// const sendEmail = (data) => {
//   setLoading(true);

//   const templateParams = {
//     name: data.name || "",
//     phone: data.phone || "",

//     salary: data.netSalary || "",
//     baseSalary: data.baseSalary || "",
//     employmentSector:
//       employmentSectorLabels[data.employmentSector] || "",
//     bank: data.saudiBanks || "",

//     birthDate: `${data.monthBirth || "-"} - ${data.yearBirth || "-"}`,
//     startWorkDate: `${data.monthStartWork || "-"} - ${data.yearStartWork || "-"}`,

//     saudi: sauidyYesNoText || "",
//     housingSupport: houseSuuportYesNoText || "",
//     firstHouse: firstHouseText || "",

//     propertyType: data.propertyType || "",
//     city: data.city || "",
//     district: data.district || "",

//     areaFrom: data.areaFrom || "",
//     areaTo: data.areaTo || "",

//     priceFrom: data.priceFrom || "",
//     priceTo: data.priceTo || "",

//     propertyValue: data.propertyValue || "",
//     monthlyInstallment: monthly ? monthly.toFixed(0) : "",
//     deduction: deduction ? `${deduction}%` : "",

//     obligations: getObligationsEmailText(data),

//     notes: data.notes || "لا يوجد",
//   };

//   emailjs
//     .send(
//       "service_l96zy2y",
//       "template_dmi5rdn",
//       templateParams,
//       "R0OMckKm-F4HVktjI"
//     )
//     .then(() => {
//       setAlert({
//         open: true,
//         type: "success",
//         message: "تم إرسال الطلب بنجاح، وسيتم التواصل معك قريبًا",
//       });
//     })
//     .catch(() => {
//       setAlert({
//         open: true,
//         type: "error",
//         message: "فشل إرسال الطلب، يمكنك الإرسال عبر واتساب",
//       });
//     })
//     .finally(() => {
//       setLoading(false);
//     });
// };




// const [openPropertyModal, setOpenPropertyModal] = useState(false);



// // خيارات افتراضية (يمكن ربطها API لاحقاً)
// const [propertyTypes, setPropertyTypes] = useState([
//   "شقة",
//   "فيلا",
//   "دوبلكس",
//   "أرض"
// ]);

// const [cities, setCities] = useState([
//   "الرياض",
//   "جدة",
//   "مكة المكرمة",
//   "المدينة المنورة",
//   "الدمام",
//   "الخبر",
//   "الظهران",
//   "الأحساء",
//   "القطيف",
//   "الطائف",
//   "أبها",
//   "خميس مشيط",
//   "جازان",
//   "نجران",
//   "الباحة",
//   "تبوك",
//   "سكاكا",
//   "عرعر",
//   "حائل",
//   "بريدة",
//   "عنيزة",
//   "الرس",
//   "ينبع",
//   "رابغ",
//   "القنفذة",
//   "الليث",
//   "بيشة",
//   "محايل",
//   "الدوادمي",
//   "الزلفي",
//   "المجمعة",
//   "وادي الدواسر",
//   "شرورة",
//   "رفحاء",
//   "طريف",
//   "الخفجي",
//   "حفر الباطن"
// ]);

// const [districts, setDistricts] = useState([
//   "النرجس",
//   "الياسمين",
//   "الملقا"
// ]);

 

//   return (
//     <Card sx={{ maxWidth: 650, mx: "auto", p: 3, borderRadius: 3, boxShadow: 4 }}>
//       <CardContent>
 

//          {/* اختيار بنك محدد */}
//       <Box sx={{ mb: 3 }}>
//         <Typography variant="h5" fontWeight="bold">المقارنة بين البنوك</Typography>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>البنك</TableCell>
//               <TableCell>القسط الشهري</TableCell>
//               <TableCell>إجمالي التمويل</TableCell>
//               <TableCell>الفوائد</TableCell>
//               <TableCell>الإجراءات</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {results.map(r => (
//               <TableRow key={r.bankName}>
//                 <TableCell>{r.bankName}</TableCell>
//                 <TableCell>{r.monthly.toFixed(0)} ريال</TableCell>
//                 <TableCell>{r.totalPayment.toFixed(0)} ريال</TableCell>
//                 <TableCell>{r.totalInterest.toFixed(0)} ريال</TableCell>
//                 <TableCell>
//                   <Button variant="contained" onClick={() => setSelectedBank(r)}>
//                     اختيار
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Box>

//       {/* كارد الحسبة لبنك محدد */}
//       {selectedBank && (
//         <Card sx={{ p: 3, borderRadius: 3, boxShadow: 4, mt: 3 }}>
//           <CardContent>
//             <Typography variant="h5" fontWeight="bold">
//               حسبة التمويل - {selectedBank.bankName}
//             </Typography>
//             <Divider sx={{ my: 2 }} />
//             <Typography>التمويل الإجمالي: {selectedBank.loanAmount.toLocaleString()} ريال</Typography>
//             <Typography>القسط الشهري: {selectedBank.monthly.toFixed(0).toLocaleString()} ريال</Typography>
//             <Typography>مدة التمويل: {selectedBank.termYears} سنة</Typography>
//             <Typography>قبل التقاعد: {selectedBank.yearsBeforeRetirement} سنة</Typography>
//             <Typography>بعد التقاعد: {selectedBank.yearsAfterRetirement} سنة</Typography>
//             <Typography>إجمالي الفوائد: {selectedBank.totalInterest.toFixed(0).toLocaleString()} ريال</Typography>
//             <Typography>نسبة الفوائد: {selectedBank.interestPercentage.toFixed(2)}%</Typography>
//             <Typography>قيمة الدعم: {selectedBank.supportAmount.toLocaleString()} ريال</Typography>
//             <Typography>إجمالي المدفوعات: {selectedBank.totalPayment.toFixed(0).toLocaleString()} ريال</Typography>
//           </CardContent>
//         </Card>
//       )}
//         <hr></hr>

//                 <Grid item xs={12}>
//                     <Typography> التعديل المطلوب</Typography>
//                     <RadioGroup
//                       row
//                       value={data.editList || "buy"}
//                       onChange={(e) => setData({ ...data, editList: e.target.value })}
//                     >
//                       <FormControlLabel value="editDuration" control={<Radio />} label="مدة التمويل" />
//                       <FormControlLabel value="editMonthly" control={<Radio />} label="القسط الشهري " />
//                       <FormControlLabel value="editAmount" control={<Radio />} label="مبلغ التمويل " />
//                     </RadioGroup>
//                   </Grid>


//                     {data.editList==="editAmount"&&
//                     <>
//                   <Grid item xs={12}>
//                     <TextField
//                       label="قيمة العقار"
//                       fullWidth
//                       type="number"
                 
//                       value={data.propertyValue || ""}
//                       onChange={(e) => setData({ ...data, propertyValue: e.target.value })}
//                     />
//                   </Grid>

//                   </>}


//                     {data.editList==="editMonthly"&&
//                     <>
//                   <Grid item xs={12}>
//                     <Typography>الدفعة الأولى: {data.downPayment || 10}%</Typography>
//                     <Slider
//                       value={data.downPayment || 10}
//                       min={0}
//                       max={50}
//                       step={1}
//                       valueLabelDisplay="auto"
//                       onChange={(e, v) => setData({ ...data, downPayment: v })}
//                     />
//                   </Grid>

//                   </>}

//                   {data.editList==="editDuration"&&
//                   <>
                  
//                   <Grid item xs={12}>
//                     <Typography>مدة التمويل: {data.termYears || 25} سنة</Typography>
//                     <Slider
//                       value={data.termYears || 25}
//                       min={5}
//                       max={30}
//                       step={1}
//                       valueLabelDisplay="auto"
//                       onChange={(e, v) => setData({ ...data, termYears: v })}
//                     />
//                   </Grid>
//                   </>
//                   }




//           <Grid item xs={12}>
//                     <TextField
//                       label="نوع العقار"
//                       fullWidth
//                       value={data.propertyType || ""}
//                       onChange={(e) => setData({ ...data, propertyType: e.target.value })}
//                     />
//              </Grid>


//           <Grid item xs={12} sx={ {width: "100%"}}>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               mt: 4,
          
//             }}
//           >
//             <Button
//               variant="outlined"
//               onClick={onBack}
//               sx={{ minWidth: 140 }}
//             >
//               السابق
//             </Button>
        
//             <Button
//               variant="contained"
//            onClick={() => setOpenPropertyModal(true)}
//               sx={{ minWidth: 140 }}
//             >
//                تحصيل العقار
//             </Button>
//           </Box>
//         </Grid>
//    <Grid item xs={12} sx={ {width: "100%"}}>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               mt: 4,
          
//             }}

//           >

// <Button
//    variant="contained"
  
//   fullWidth
//   disabled={loading}
//   onClick={() => sendEmail(data)}
//   startIcon={
//     loading ? <CircularProgress size={20} color="inherit" /> : null
//   }
// >
//   {loading ? "جارٍ الإرسال..." : "إرسال عبر الإيميل"}
// </Button>

//     <Button
     
//         variant="contained"
//       color="success"
//       fullWidth
//       onClick={sendWhatsApp}
//     >
//       إرسال عبر واتساب
//     </Button>


//           </Box>













// </Grid>


//       </CardContent>
//   <Snackbar
//   open={alert.open}
//   autoHideDuration={5000}
//   onClose={() => setAlert({ ...alert, open: false })}
//   anchorOrigin={{ vertical: "top", horizontal: "center" }}
// >
//   <Alert
//     severity={alert.type}
//     variant="filled"
//     sx={{ fontSize: 15 }}
//   >
//     {alert.message}
//   </Alert>
// </Snackbar>



// <Dialog
//   open={openPropertyModal}
//   onClose={() => setOpenPropertyModal(false)}
//   fullWidth
//   maxWidth="md"
//   dir="rtl"
// >
//   <DialogTitle sx={{ fontWeight: "bold", textAlign: "right" }}>
//     بيانات العقار المطلوبة
//   </DialogTitle>

//   <DialogContent
//     dividers
//     sx={{
//       "& .MuiTextField-root": {
//         backgroundColor: "#fff"
//       }
//     }}
//   >
//     <Grid container spacing={2}> {/* استخدمت spacing أقل */}

//       {/* الصف الأول: نوع العقار و المدينة */}
//       <Grid item xs={12} md={6}>
//         <Autocomplete
//           freeSolo
//           fullWidth
//           options={propertyTypes}
//           value={data.propertyType || ""}
//           onChange={(e, v) => {
//             if (v && !propertyTypes.includes(v)) setPropertyTypes([...propertyTypes, v]);
//             setData({ ...data, propertyType: v || "" });
//           }}
//           onInputChange={(e, v) => setData({ ...data, propertyType: v })}
//           renderInput={(params) => <TextField {...params} label="نوع العقار" fullWidth />}
//         />
//       </Grid>

//       <Grid item xs={12} md={6}>
//         <Autocomplete
//           freeSolo
//           fullWidth
//           options={cities}
//           value={data.city || ""}
//           onChange={(e, v) => {
//             if (v && !cities.includes(v)) setCities([...cities, v]);
//             setData({ ...data, city: v || "" });
//           }}
//           onInputChange={(e, v) => setData({ ...data, city: v })}
//           renderInput={(params) => <TextField {...params} label="المدينة" fullWidth />}
//         />
//       </Grid>

//       {/* الصف الثاني: الحي و المساحة من */}
//       <Grid item xs={12} md={6}>
//         <Autocomplete
//           freeSolo
//           fullWidth
//           options={districts}
//           value={data.district || ""}
//           onChange={(e, v) => {
//             if (v && !districts.includes(v)) setDistricts([...districts, v]);
//             setData({ ...data, district: v || "" });
//           }}
//           onInputChange={(e, v) => setData({ ...data, district: v })}
//           renderInput={(params) => <TextField {...params} label="الحي" fullWidth />}
//         />
//       </Grid>

//       <Grid item xs={12} md={6}>
//         <TextField
//           label="المساحة من (م²)"
//           type="number"
//           fullWidth
//           value={data.areaFrom || ""}
//           onChange={(e) => setData({ ...data, areaFrom: e.target.value })}
//         />
//       </Grid>

//       {/* الصف الثالث: المساحة إلى و السعر من */}
//       <Grid item xs={12} md={6}>
//         <TextField
//           label="المساحة إلى (م²)"
//           type="number"
//           fullWidth
//           value={data.areaTo || ""}
//           onChange={(e) => setData({ ...data, areaTo: e.target.value })}
//         />
//       </Grid>

//       <Grid item xs={12} md={6}>
//         <TextField
//           label="السعر من"
//           type="number"
//           fullWidth
//           value={data.priceFrom || ""}
//           onChange={(e) => setData({ ...data, priceFrom: e.target.value })}
//         />
//       </Grid>

//       {/* الصف الرابع: السعر إلى و الملاحظات */}
//       <Grid item xs={12} md={6}>
//         <TextField
//           label="السعر إلى"
//           type="number"
//           fullWidth
//           value={data.priceTo || ""}
//           onChange={(e) => setData({ ...data, priceTo: e.target.value })}
//         />
//       </Grid>

//       <Grid item xs={12} md={6}>
//         <TextField
//           label="ملاحظات"
//           multiline
//           rows={3}
//           fullWidth
//           value={data.notes || ""}
//           onChange={(e) => setData({ ...data, notes: e.target.value })}
//         />
//       </Grid>

//     </Grid>
//   </DialogContent>

//   <DialogActions sx={{ px: 3, pb: 2 }}>
//     <Button onClick={() => setOpenPropertyModal(false)}>إلغاء</Button>
//     <Button
//       variant="contained"
//       sx={{ minWidth: 140 }}
//       onClick={() => {
//         console.log("بيانات العقار:", data);
//         setOpenPropertyModal(false);
//       }}
//     >
//       حفظ الطلب
//     </Button>
//   </DialogActions>
// </Dialog>



//     </Card>
//   );
// }





import { useState, useMemo } from "react";
import { normalizeObligations } from "./normalizeObligations";
import html2canvas from "html2canvas";





import moment from "moment-hijri";
import "moment/locale/ar-sa";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Button,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  RadioGroup,
  FormControlLabel,
  Radio,
  Slider,
  TextField,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Autocomplete,

  CircularProgress
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import logoOut from "../photo/logo.png"
import { saudiBanks  } from "./banks";
import { calculateFinance } from "./calculateFinance";
import emailjs from "emailjs-com";
import { compareAllBanks } from "../../components/bankCalculationUtils";

export default function Step6Result({ data, onBack, setData }) {
  const [selectedBank, setSelectedBank] = useState(null);
  const [openPropertyModal, setOpenPropertyModal] = useState(false);
  const [alert, setAlert] = useState({ open: false, type: "success", message: "" });
  const [loading, setLoading] = useState(false);

  const [openDetailsModal, setOpenDetailsModal] = useState(false);

    const [showComparison, setShowComparison] = useState(false);
 // حساب النتائج لكل بنك
const banksArray = saudiBanks(data); // تمرير البيانات التي تريد استخدامها


 const logoBase64 =
 "data:image/png;base64,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"
var namePhoto = selectedBank?.bankName
  ? selectedBank.bankName + ".png"
  : "eskan.png";




function capture() {
  // إخفاء العناصر غير المرغوب فيها
  document.querySelectorAll(".no-print, .hide-on-export").forEach((el) => {
    el.style.display = "none";
  });

  const target = document.querySelector(".photo-print");
  const originalHeight = target.style.height;

  
  // تعيين الارتفاع إلى 100%
  target.style.height = "100%";
  target.style.position = "relative"; // مهم لجعل اللوجو في وسطه


  // ✅ إنشاء عنصر اللوجو ووضعه في منتصف العنصر
  const logo = document.createElement("img");
  logo.src = logoBase64; // تأكد أنه base64 صالح
  logo.style.position = "absolute";
  logo.style.top = "50%";
  logo.style.left = "50%";
  logo.style.transform = "translate(-50%, -50%)";
  logo.style.width = "150px"; // حجم أكبر
  logo.style.opacity = "0.1"; // شفافية مناسبة كخلفية
  logo.style.zIndex = "0"; // خلف المحتوى
  logo.classList.add("temp-logo");

  target.appendChild(logo); // أضف الشعار مؤقتاً

  html2canvas(target, {
    scale: 2,
    useCORS: true,
    
  }).then((canvas) => {
    const a = document.createElement("a");
    a.download = namePhoto;
    a.href = canvas.toDataURL("image/png");
    a.click();

    // إعادة القيم الأصلية بعد الالتقاط
    document.querySelectorAll(".no-print, .hide-on-export").forEach((el) => {
      el.style.display = "";
    });

    target.style.height = originalHeight;

    // ✅ إزالة الشعار المؤقت
    const tempLogo = document.querySelector(".temp-logo");
    if (tempLogo) tempLogo.remove();
  });
}



function capture2() {
  // إخفاء العناصر غير المرغوب فيها
  document.querySelectorAll(".no-print-2, .hide-on-export").forEach((el) => {
    el.style.display = "none";
  });

  const originalWidth = target.style.width;

 


  const target = document.querySelector(".photo-print-2");
  const originalHeight = target.style.height;

  // تعيين الارتفاع إلى 100%
  target.style.height = "100%";
  target.style.position = "relative"; // مهم لجعل اللوجو في وسطه


 // نكبر العرض مؤقتاً
  target.style.width = "350px";
  target.style.maxWidth = "350px";

  // ✅ إنشاء عنصر اللوجو ووضعه في منتصف العنصر
  const logo = document.createElement("img");
  logo.src = logoBase64; // تأكد أنه base64 صالح
  logo.style.position = "absolute";
  logo.style.top = "50%";
  logo.style.left = "50%";
  logo.style.transform = "translate(-50%, -50%)";
  logo.style.width = "150px"; // حجم أكبر
  logo.style.opacity = "0.1"; // شفافية مناسبة كخلفية
  logo.style.zIndex = "0"; // خلف المحتوى
  logo.classList.add("temp-logo");

  target.appendChild(logo); // أضف الشعار مؤقتاً

  html2canvas(target, {
    scale: 2,
    useCORS: true,
  }).then((canvas) => {
    const a = document.createElement("a");
    a.download = namePhoto;
    a.href = canvas.toDataURL("image/png");
    a.click();

    // إعادة القيم الأصلية بعد الالتقاط
    document.querySelectorAll(".no-print-2, .hide-on-export").forEach((el) => {
      el.style.display = "";
    });

      target.style.width = originalWidth;
    target.style.maxWidth = "";
    target.style.height = originalHeight;

    // ✅ إزالة الشعار المؤقت
    const tempLogo = document.querySelector(".temp-logo");
    if (tempLogo) tempLogo.remove();
  });
}



// const results = Array.isArray(saudiBanks) ? saudiBanks.map(bank => calculateFinance(data, bank)) : [];

  // إعداد النصوص العامة
  const sauidyYesNoText = data.sauidyYesNo === "yes" ? "نعم" : "لا";
  const houseSuuportYesNoText = data.houseSuuportYesNo === "yes" && data.sauidyYesNo === "yes" ? "نعم" : "لا";
  const firstHouseText = data.firstHouse === "yes" && data.sauidyYesNo === "yes" ? "نعم" : "لا";

  const employmentSectorLabels = {
    government: "قطاع حكومي مدني",
    noneGovernment: "شبة حكومي",
    military: "قطاع عسكري",
    private: "قطاع خاص",
    retired: "متقاعد",
    privateHight: "شركات كبري",
  };


  


if(data.obligationsYesNo === "no" &&data.newPrsonalYesNo==="yes"){
var editNewPersonalFinance ="yesNewPrsonal"
}else{
var editNewPersonalFinance ="noNewPrsonal"
}


if(data.employmentSector==="government"||data.employmentSector==="privateHight"||data.employmentSector==="noneGovernment"||data.employmentSector==="private"){
  var editjob ="مدني"
}else if(data.employmentSector==="retired"){
   var editjob ="متقاعد" 
}else if(data.employmentSector==="military"&&data.militaryRank==="جندي"){
   var editjob ="جندي" 
}else if(data.employmentSector==="military"&&data.militaryRank==="جندي أول"){
   var editjob ="جندي اول" 
}else if(data.employmentSector==="military"&&data.militaryRank==="عريف"){
   var editjob ="عريف" 
}else if(data.employmentSector==="military"&&data.militaryRank==="وكيل رقيب"){
   var editjob ="وكيل رقيب" 
}else if(data.employmentSector==="military"&&data.militaryRank==="رقيب"){
   var editjob ="رقيب" 
}else if(data.employmentSector==="military"&&data.militaryRank==="رقيب أول"){
   var editjob ="رقيب اول" 
}else if(data.employmentSector==="military"&&data.militaryRank==="رئيس رقباء"){
   var editjob ="رئيس رقباء" 
}else if(data.employmentSector==="military"&&data.militaryRank==="ملازم"){
   var editjob ="ملازم" 
}else if(data.employmentSector==="military"&&data.militaryRank==="ملازم أول"){
   var editjob ="ملازم اول" 
}else if(data.employmentSector==="military"&&data.militaryRank==="نقيب" ){
   var editjob ="تقيب" 
}else if(data.employmentSector==="military"&&data.militaryRank==="رائد"){
   var editjob ="رائد" 
}else if(data.employmentSector==="military"&&data.militaryRank==="مقدم"){
   var editjob ="مقدم" 
}else if(data.employmentSector==="military"&&data.militaryRank==="عقيد"){
   var editjob ="عقد" 
}else if(data.employmentSector==="military"&&data.militaryRank==="عميد"){
   var editjob ="عميد" 
}else if(data.employmentSector==="military"&&data.militaryRank==="لواء"){
   var editjob ="لواء" 
}else{
    var editjob ="مدني"
}

if(data.firstHouse==="yes"){
var editDownPayment=10
}else{
var editDownPayment=30
}



if(data.editList === "editDuration"){
 var editTotalDurationInput=(data.termYears)*12
}else{
  var editTotalDurationInput=""
}


if(data.editList === "editMonthly"){
 var editPercentageFirstInpt=100*(data.downPayment)/(data.netSalary)
}else{
  var editPercentageFirstInpt=""
}

var alaa="aaa"


if( data.houseSuuportYesNo === "yes"&&data.sauidyYesNo === "yes"){
  if(data.houseSuuport==="yesMontly"){
   var edithousingSupport = "monthly"
  }else{
    var edithousingSupport = "baqa"
  }

}else{
var edithousingSupport = "no"
}

if(data.houseSuuportYesNo=="yes"&&data.employmentSector==="military"&&data.militaryMinistry===
  "وزارة الدفاع"&&data.ministryDefenseSelect ==="yes"){
var editministryDefenseSelect="yes"
  }else{
    var editministryDefenseSelect="no"
  }


  if(data.employmentSector==="government"){
     var editprivateSectorEmployee="حكومي"
  }else if(data.employmentSector==="private"||data.employmentSector==="privateHight"){
    var editprivateSectorEmployee="معتمد"
  }
  // var editprivateSectorEmployee="cd"
  else if(data.employmentSector==="noneGovernment"){
  var editprivateSectorEmployee="غير معتمد"
  }

    const todayHijri = moment().locale("en").format("iD/iM/iYYYY");
    const [dayH, monthH, yearH] = todayHijri.split("/");
  

const hijriMonthsMap = {
  "محرم (1)": 1,
  "صفر (2)": 2,
  "ربيع الأول (3)": 3,
  "ربيع الآخر (4)": 4,
  "جمادى الأولى (5)": 5,
  "جمادى الآخرة (6)": 6,
  "رجب (7)": 7,
  "شعبان (8)": 8,
  "رمضان (9)": 9,
  "شوال (10)": 10,
  "ذو القعدة (11)": 11,
  "ذو الحجة (12)": 12
};

const editstartWorkMonth = hijriMonthsMap[data.monthStartWork] || 6;

const editBRirthkMonth = hijriMonthsMap[data.monthBirth] || 6;


if(data.obligationsYesNo === "yes"){

const normalized = normalizeObligations(data.obligations);
var editInstallment1 = normalized[0]?.installment || 0;
var editInstallment2 = normalized[1]?.installment || 0;
var editInstallment3 = normalized[2]?.installment || 0;
var editInstallment4 = normalized[3]?.installment || 0;

var editduration1 = normalized[0]?.duration || 0;
var editduration2 = normalized[1]?.duration || 0;
var editduration3 = normalized[2]?.duration || 0;
var editduration4 = normalized[3]?.duration || 0;

} else {
  // المستخدم اختار لا
  var editInstallment1 = 0;
  var editInstallment2 = 0;
  var editInstallment3 = 0;
  var editInstallment4 = 0;

  var editduration1 = 0;
  var editduration2 = 0;
  var editduration3 = 0;
  var editduration4 = 0;
}








   var editRealEstateBank =data.saudiBanks==="البنك الأهلي "?"alahli":data.saudiBanks==="مصرف الراجحي"?"alrajhi":data.saudiBanks==="البنك الفرنسي"?"alfransi":data.saudiBanks==="البنك العربي "?"alrab":data.saudiBanks==="بنك ساب"?"sab":data.saudiBanks==="بنك البلاد"?"albilad":data.saudiBanks==="بنك الإنماء"?"alinma":data.saudiBanks==="مسار النمو"?"masar":"any"
    // 1. توحيد المسميات (Mapping) لتطابق الجزء 1 و 2
    const calulationInputs = useMemo(() => {
      return {

      netSalary: parseFloat(data.netSalary) || 0,
      basicSalary: parseFloat(data.baseSalary) || 0,
      currentBank: editRealEstateBank,
      realEstateBank: editRealEstateBank,
      housingSupport: edithousingSupport,
      firstHouse: "yes",
      newPersonalFinance: editNewPersonalFinance,
      financingType:data.financingTypeYesNo==="yes"?"afterRetirement": "normal",
      durationIn: data.govDuration,
      job: editjob,
   
     
      typeException: "",
  

      installment1: editInstallment1,
      installment2: editInstallment2,
      installment3: editInstallment3,
      installment4: editInstallment4,
      duration1: editduration1,
      duration2: editduration2,
      duration3: editduration3,
      duration4: editduration4,












      comments: "",
  
      editDurationPersonal: "",
      editTotalDuration: editTotalDurationInput,
  






      editPercentageFirst: editPercentageFirstInpt,
      editPercentageBeforeRetirement: editPercentageFirstInpt,
      editPercentageAfterRetirement: "",
  

      editProfitRateRealEstate: "",
      editProfitRatePersonal: "",
  
      editPersonalInstallment: "",
      editAmountHousingSupport: "",
      editAmountHousingSupportBaqa: "",
  


 


      birthMonth:  editBRirthkMonth,
      currentMonth: monthH,
      startWorkMonth: editstartWorkMonth,
  
      birthYear: data.yearBirth,
      currentYear: yearH,
      startWorkYear: data.yearStartWork,
  
      inputSelect: "",
      inputCheck: false,
      name: "",
      phone: "",
      alinmaPersonal: "",
      privateSectorEmployee: editprivateSectorEmployee,
      downPayment: editDownPayment,
      
  
      ministryDefenseSelect: editministryDefenseSelect,
      
  
      userMinistryDefense: "",




        // netSalary: parseFloat(data.netSalary) || 0,
        // basicSalary: parseFloat(data.baseSalary) || 0, // تحويل baseSalary إلى basicSalary
        // job: data.employmentSector === "government" ? "مدني" : 
        //  data.employmentSector === "military" ? "عسكري" : 
        // data.employmentSector === "retired" ? "متقاعد" : "خاص",
        // currentBank: data.saudiBanks,
        // housingSupport: data.houseSuuportYesNo === "yes" ? "monthly" : "no",
        // birthYear: parseInt(data.yearBirth),
        // birthMonth: parseInt(data.monthBirth),
        // startWorkYear: parseInt(data.yearStartWork),
        // startWorkMonth: parseInt(data.monthStartWork),
        // currentYear: new Date().getFullYear(),
        // currentMonth: new Date().getMonth() + 1,
        // propertyValue: parseFloat(data.propertyValue) || 0,
        // termYears: data.termYears || 30
      };
    }, [data]);

      // 2. قائمة البنوك وحساب النتائج (يتم استدعاء calculateFinance من الجزء 1 هنا)
  //const banksList = ["الراجحي", "الأهلي", "البلاد", "الإنماء", "الفرنسي", "ساب"];
const banksList = ['alrajhi','alahli','albilad','alinma','alfransi','sab'];

  // ملاحظة: هنا يتم استبدال المنطق الوهمي بدوال الجزء 1 الفعلية
  // const results = useMemo(() => {
  //   return banksList.map(bank => {
   
  //    return  compareAllBanks(calulationInputs , bank)

   
 
  //   });
  // }, [calculationInputs]);


  const results = useMemo(() => {
  return compareAllBanks(calulationInputs);
}, [calulationInputs]);


console.log(results)
console.log("alaacomp")
console.log(data)


  const getObligationsSummary = (data) => {
    // if (data.obligationsYesNo !== "yes" || !data.obligations?.length) return "الالتزامات: لا يوجد";
  if (
    data.obligationsYesNo !== "yes" ||
    !Array.isArray(data.obligations) ||
    data.obligations.length === 0
  ) {
    return "الالتزامات: لا يوجد";
  }

    return data.obligations.map(ob => {
      const remainingText = ob.type === "المدة المتبقية" ? `المدة المتبقية: ${ob.remaining || "-"}` : `المبلغ المتبقي: ${ob.remaining || "-"}`;
      return `• ${ob.name} - القسط: ${ob.value || "-"} - ${remainingText}`;
    }).join("\n");
  };


  
  const sendWhatsApp = () => {
    // const message
    //  = `طلب تمويل عقاري\n\n👤 الاسم: ${data.name}\n📱 الجوال: ${data.phone}\n📍 المدينة: ${data.city}\n🏢 القطاع: ${employmentSectorLabels[data.employmentSector] || "-"}\n🏦 البنك: ${data.saudiBanks || "-"}\n💵 الراتب: ${data.netSalary}\n💳 القسط التقريبي: ${selectedBank?.installmentBeforeRetirement.toFixed(0) || "-"} ريال\n📊 نسبة الاستقطاع: ${((selectedBank?.installmentBeforeRetirement / data.netSalary) * 100).toFixed(2) || "-"}%\n${getObligationsSummary(data)}\n📝 ملاحظات: ${data.notes || "لا يوجد"}`;

    const message = `
طلب تمويل عقاري

👤 الاسم: ${data.name}
📱 الجوال: ${data.phone}
📍 المدينة: ${data.city}
🏢 القطاع: ${employmentSectorLabels[data.employmentSector] || "-"}
🏢 الوزرارة:${data.civilianMinistry||data.militaryMinistry||"-"}
🏢 الشركه:${data.companyNameHight||data.companyName||"-"}
🏦 الرتبة: ${data.militaryRank || "-"}

💵 الراتب: ${data.netSalary}
💵 الراتب الأساسي: ${data.baseSalary || "-"}

🎂 تاريخ الميلاد: ${data.monthBirth || "-"} - ${data.yearBirth || "-"}
📅 تاريخ التعيين: ${data.monthStartWork || "-"} - ${data.yearStartWork || "-"}

💵 مدة الاشتراك: ${data.govDuration || "-"}

🇸🇦 سعودي: ${sauidyYesNoText || "-"}
🏠 الدعم السكني: ${houseSuuportYesNoText || "-"}
🏡 المسكن الأول: ${firstHouseText || "-"}

🏠 نوع العقار: ${data.propertyType || "-"}
📌 الحي: ${data.district || "-"}

📐 المساحة:
من ${data.areaFrom || "-"} م²
إلى ${data.areaTo || "-"} م²

💰 السعر:
من ${data.priceFrom || "-"}
إلى ${data.priceTo || "-"}

🏦 قيمة العقار: ${data.propertyValue || "-"}

💳 القسط التقريبي: ${
  selectedBank?.installmentBeforeRetirement
    ? selectedBank.installmentBeforeRetirement.toFixed(0)
    : "-"
} ريال

📊 نسبة الاستقطاع: ${
  selectedBank?.installmentBeforeRetirement && data.netSalary
    ? ((selectedBank.installmentBeforeRetirement ) * 100).toFixed(2)
    : "-"
} %

${getObligationsSummary(data)}

📝 ملاحظات:
${data.notes || "لا يوجد"}
`;

    const url = `https://wa.me/966508417587?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const sendEmail = (data) => {
    setLoading(true);
    const templateParams = {
      name: data.name,
      phone: data.phone,
      salary: data.netSalary,
      employmentSector: employmentSectorLabels[data.employmentSector] || "",
      bank: data.saudiBanks || "",
      obligations: getObligationsSummary(data),
      notes: data.notes || "لا يوجد",
    };

    emailjs.send("service_l96zy2y", "template_dmi5rdn", templateParams, "R0OMckKm-F4HVktjI")
      .then(() => setAlert({ open: true, type: "success", message: "تم إرسال الطلب بنجاح" }))
      .catch(() => setAlert({ open: true, type: "error", message: "فشل الإرسال، يمكنك الإرسال عبر واتساب" }))
      .finally(() => setLoading(false));
  };

  // خيارات افتراضية للمودال
  const [propertyTypes, setPropertyTypes] = useState(["شقة", "فيلا", "دوبلكس", "أرض"]);
  const [cities, setCities] = useState(["الرياض", "جدة", "مكة المكرمة", "الدمام"]);
  const [districts, setDistricts] = useState(["النرجس", "الياسمين", "الملقا"]);

  return (
    <Card sx={{ maxWidth: 700, mx: "auto", p: 3, borderRadius: 3, boxShadow: 4 , overflowX:"auto"  }}>
      <CardContent>

        <Typography variant="h5" fontWeight="bold" mb={2} >المقارنة بين البنوك - اسكان سلمان</Typography>

           <Button onClick={capture} variant="contained">
   تنزيل الصورة
  </Button>
                  {/* <Button 
                    variant="contained" 
                    color="secondary" 
                    startIcon={<CompareArrowsIcon />}
                    onClick={() => setShowComparison(true)}
                  >
                    مقارنة جميع البنوك
                  </Button> */}
                   <Box
    sx={{
      position: "absolute",
      inset: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      pointerEvents: "none",
      opacity: 0.55,
      zIndex: 0
    }}
  >
    <img
      src={logoOut}   // ضع هنا مسار صورة الشعار
      alt="watermark"
      style={{
        width: "400px",
        transform: "rotate(-25deg)"
      }}
    />
  </Box>


        <Table className="table-unset-css-hover photo-print">
          <TableHead>
            <TableRow>
              <TableCell align="center">البنك</TableCell>
                <TableCell align="center"> مبلغ التمويل</TableCell>
              <TableCell align="center">القسط الشهري</TableCell>
              <TableCell align="center"> مدة التمويل</TableCell>
              <TableCell align="center">الفوائد</TableCell>
              <TableCell align="center">التفاصيل</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map(r => (
              <TableRow key={r.bankName}>
                <TableCell align="center">{r.bankName}</TableCell>
                   <TableCell align="center">{r.total}</TableCell>
                <TableCell align="center">{r.installmentBeforeRetirement} ريال</TableCell>
                <TableCell align="center">{r.totalDuration} سنة</TableCell>
                <TableCell align="center">{r.profitRateRealEstate} %</TableCell>
                <TableCell align="center">
{/* 
                 <Button variant="contained"   onClick={() => { setSelectedBank(r); setShowComparison(false); }} >التفاصيل</Button>
                */}

                   <Button variant="contained"   onClick={() => {  setSelectedBank(r); setOpenDetailsModal(true);}} >التفاصيل</Button>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>


        
    
        <Grid container spacing={2} sx={{ mt: 3 ,display:"inline-block" , width:"100%" }}>
          <Grid item xs={12}>
            <Typography>تعديل الحسبة</Typography>
            <RadioGroup row value={data.editList || "buy"} onChange={(e) => setData({ ...data, editList: e.target.value })}>
              <FormControlLabel value="editDuration" control={<Radio />} label=" مدة التمويل" />
              <FormControlLabel value="editMonthly" control={<Radio />} label=" القسط الشهري" />
             <FormControlLabel value="editAmount" control={<Radio />} label=" مبلغ التمويل" />
            </RadioGroup>
          </Grid>

          {data.editList === "editAmount" && (
            <Grid item xs={12}>
              <TextField label="قيمة العقار" type="number" fullWidth value={data.propertyValue || ""} onChange={(e) => setData({ ...data, propertyValue: e.target.value })} />
            </Grid>
          )}

          {data.editList === "editMonthly" && (
            <Grid item xs={12}>
              <Typography> القسط الشهري: {data.downPayment || 100}ريال</Typography>
              <Slider value={data.downPayment || 0.65*data.netSalary} min={100} max={0.8*data.netSalary} step={100} valueLabelDisplay="auto" onChange={(e, v) => setData({ ...data, downPayment: v })} />
            </Grid>
          )}
          

          {data.editList === "editDuration" && (
            <Grid item xs={12}>
              <Typography>مدة التمويل: {data.termYears || 30} سنة</Typography>
              <Slider value={data.termYears || 30} min={5} max={30} step={1} valueLabelDisplay="auto" onChange={(e, v) => setData({ ...data, termYears: v })} />
            </Grid>
          )}

          {/* <Grid item xs={12}>
            <TextField label="نوع العقار" fullWidth value={data.propertyType || ""} onChange={(e) => setData({ ...data, propertyType: e.target.value })} />
          </Grid> */}

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Box display="flex" justifyContent="space-between">
              <Button variant="outlined" onClick={onBack}>السابق</Button>
              <Button variant="contained" onClick={() => setOpenPropertyModal(true)}>تحصيل العقار</Button>
            </Box>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Box display="flex" gap={2} flexDirection={{ xs: "column", sm: "row" }}>
              <Button variant="contained" fullWidth disabled={loading} onClick={() => sendEmail(data)} startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}>
                {loading ? "جارٍ الإرسال..." : "إرسال عبر الإيميل"}
              </Button>
              <Button variant="contained" color="success" fullWidth onClick={sendWhatsApp}>إرسال عبر واتساب</Button>
            </Box>
          </Grid>
        </Grid>

      </CardContent>

      <Snackbar open={alert.open} autoHideDuration={5000} onClose={() => setAlert({ ...alert, open: false })} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert severity={alert.type} variant="filled">{alert.message}</Alert>
      </Snackbar>



   <Dialog
     
  open={openDetailsModal}
  onClose={() => {
  setOpenDetailsModal(false);
  setSelectedBank(null);
}}
  fullWidth
  maxWidth="sm"
  dir="rtl"
>
  <DialogTitle sx={{ fontWeight: "bold" }}>
     {`${selectedBank?.bankName}   - حسبة التمويل  ` }
  </DialogTitle>

  <DialogContent dividers  className="photo-print-2">
    {selectedBank && (
      <>
        <Typography> {`${selectedBank?.bankName}   - حسبة التمويل  ` }</Typography>
        <Typography>التمويل الإجمالي: {selectedBank.total} ريال</Typography>
        <Typography>التمويل العقاري: {selectedBank.realEstateFinance} ريال</Typography>
        <Typography>الدعم السكني: {selectedBank.amountHousingSupport} ريال</Typography>

        {editministryDefenseSelect === "yes" && (
          <Typography>دعم الدفاع: {selectedBank.addministryDefenseC} ريال</Typography>
        )}

        {editNewPersonalFinance === "yesNewPrsonal" && (
          <Typography>القرض الشخصي: {selectedBank.personalFinance} ريال</Typography>
        )}

        <Divider sx={{ my: 2 }} />

        <Typography>القسط قبل التقاعد: {selectedBank.installmentBeforeRetirement} ريال</Typography>
        <Typography>القسط بعد التقاعد: {selectedBank.installmentAfterRetirement} ريال</Typography>
        <Typography>مدة التمويل: {selectedBank.totalDuration} سنة</Typography>
        <Typography>إجمالي الفوائد: {selectedBank.netProfit} ريال</Typography>
        <Typography>نسبة الفوائد: {selectedBank.profitRateRealEstate}%</Typography>
      </>
    )}
  </DialogContent>

  <DialogActions className="no-print-2">
    <Button onClick={() => {
  setOpenDetailsModal(false);
  setSelectedBank(null);
}}>
      إغلاق
    </Button>
   <Button onClick={capture2} variant="contained">
   تنزيل الصورة
  </Button>
   
  </DialogActions>
</Dialog>


      <Dialog className="nofocuse" open={openPropertyModal} onClose={() => setOpenPropertyModal(false)} fullWidth maxWidth="md" dir="rtl">
        <DialogTitle sx={{ fontWeight: "bold", textAlign: "right" }}>بيانات العقار المطلوبة</DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Autocomplete freeSolo fullWidth options={propertyTypes} value={data.propertyType || ""} onChange={(e, v) => { if (v && !propertyTypes.includes(v)) setPropertyTypes([...propertyTypes, v]); setData({ ...data, propertyType: v || "" }); }} onInputChange={(e, v) => setData({ ...data, propertyType: v })} renderInput={(params) => <TextField {...params} label="نوع العقار" fullWidth />} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Autocomplete freeSolo fullWidth options={cities} value={data.city || ""} onChange={(e, v) => { if (v && !cities.includes(v)) setCities([...cities, v]); setData({ ...data, city: v || "" }); }} onInputChange={(e, v) => setData({ ...data, city: v })} renderInput={(params) => <TextField {...params} label="المدينة" fullWidth />} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Autocomplete freeSolo fullWidth options={districts} value={data.district || ""} onChange={(e, v) => { if (v && !districts.includes(v)) setDistricts([...districts, v]); setData({ ...data, district: v || "" }); }} onInputChange={(e, v) => setData({ ...data, district: v })} renderInput={(params) => <TextField {...params} label="الحي" fullWidth />} />
            </Grid>
            <Grid item xs={12} md={6}><TextField label="المساحة من (م²)" type="number" fullWidth value={data.areaFrom || ""} onChange={(e) => setData({ ...data, areaFrom: e.target.value })} /></Grid>
            <Grid item xs={12} md={6}><TextField label="المساحة إلى (م²)" type="number" fullWidth value={data.areaTo || ""} onChange={(e) => setData({ ...data, areaTo: e.target.value })} /></Grid>
            <Grid item xs={12} md={6}><TextField label="السعر من" type="number" fullWidth value={data.priceFrom || ""} onChange={(e) => setData({ ...data, priceFrom: e.target.value })} /></Grid>
            <Grid item xs={12} md={6}><TextField label="السعر إلى" type="number" fullWidth value={data.priceTo || ""} onChange={(e) => setData({ ...data, priceTo: e.target.value })} /></Grid>
            <Grid item xs={12}><TextField label="ملاحظات" multiline rows={3} fullWidth value={data.notes || ""} onChange={(e) => setData({ ...data, notes: e.target.value })} /></Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPropertyModal(false)}>إلغاء</Button>
          <Button variant="contained" onClick={() => setOpenPropertyModal(false)}>حفظ الطلب</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}