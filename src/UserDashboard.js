

import React, { useEffect, useState, useMemo ,memo, useContext } from "react";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
  CartesianGrid,
  Sector,
} from "recharts";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as reshape from "arabic-reshaper";
import bidi from "bidi-js";
import './offers/amiri-normal'; // لا حاجة لتصدير — التحميل يتم تلقائيًا
import 'jspdf-autotable';
import { amiriFont } from './offers/amiri-normal'; // ملف الخط بصيغة base64

import defaultPohto from './alaa.jpeg'


import { saveAs } from "file-saver";
// import XLSX from "xlsx";
 import * as XLSX from "xlsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUsers,
  faFilePdf,
  faFileExcel,
  faChartPie,
  faChartBar,
  faFilter,
  faCalendarAlt,
  faBuilding,
  faBuildingColumns,
  faMoneyBillWave,
  faHome,
  faBriefcase,
  faCity,
  faSortAmountDownAlt,
  faEnvelope,
  faCircleHalfStroke,
  faMoon,
  faUserGroup,
  faUsersGear,
  faLayerGroup,
  faBullhorn,
  faHourglassHalf,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { ColorModeContext } from "./Context/ThemeContext";










// ألوان الرسم البياني
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28EFF", "#FF7A7A", "#55DD55", "#DD5555"];

function toArabicText(text) {
  try {
    const reshaped = reshape.reshape(text);
    const bidiText = bidi.getEmbeddingLevels(reshaped);
    return bidiText
      .map((b) =>
        b.level % 2 === 1 ? b.text.split("").reverse().join("") : b.text
      )
      .join("");
  } catch (e) {
    console.error("Error reshaping text:", e);
    return text;
  }
}

// دالة لتجميع القيم ضمن مجموعات (مثلاً للأسعار أو المساحات)
function groupRanges(data, key, ranges) {
  // ranges: array of objects { label, min, max }
  const counts = ranges.map((r) => ({ name: r.label, value: 0 }));
  data.forEach((item) => {
    const val = item[key];
    for (let i = 0; i < ranges.length; i++) {
      if (val >= ranges[i].min && val < ranges[i].max) {
        counts[i].value++;
        break;
      }
    }
  });
  return counts.filter(c => c.value > 0);
}




export default function AdvancedDashboard(props) {


//  const [darkSide, setShwoDarkSide] = useState(

//       ()=>{

//    const savedMode = localStorage.getItem("darkMode");
//     if (savedMode === "true") return true;
//   if (savedMode === "false") return false;
//   return true; // الوضع الافتراضي
//     }
  

//  );

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
    var classNameModel = "loan-form";
    var ic1 = faMoon;
    var classRotate = 0;
    var classColor = "model-light";
    var tableDark = "";
    var lableMode = "flex net-salary";
    var backColor = "link-log-dark  dark-buttom-about";
  } else if (darkSide) {
    var textMode = "داكن";
    var classNameModel = "loan-form";
    var ic1 = faMoon;
    var classRotate = 0;
    var classColor = "model-light";
    var tableDark = "";
    var lableMode = "flex net-salary";
    var backColor = "link-log-dark  dark-buttom-about";
      var yesClassNameModel = true
  } else {
    var textMode = "فاتح";
    var classNameModel = "loan-form-dark";
    var yesClassNameModel = false
    var ic1 = faCircleHalfStroke;
    var classRotate = 180;
    var classColor = "#050505";
    var tableDark = "table-Dark";
    var lableMode = "flex net-salary-dark";
    var backColor = "link-log-dark  dark-buttom-about  back-color";
  }

  // بيانات المستخدم
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhoto, setUserPhoto] = useState("");

  // بيانات العملاء والعروض
  const [users, setUsers] = useState([]);
  const [offers, setOffers] = useState([]);
   const [followups, setFollowups] = useState([]);

  // فلترة سنة وشهر
  const [filterYear, setFilterYear] = useState("");
  const [filterMonth, setFilterMonth] = useState("");


  const [chartType, setChartType] = useState("pie");


  // جلب بيانات المستخدم والعملاء والعروض
  useEffect(() => {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const photo = localStorage.getItem("photo");
    if (name) setUserName(name);
    if (email) setUserEmail(email);
    if(name=="alaa"){
      setUserPhoto(defaultPohto)
    }else{
     if (photo) setUserPhoto(photo);
    }


    
   


    if (name) {
      // نضيف فلترة بالسنة والشهر في الرابط إذا تم اختيارهم
      let userUrl = `http://localhost:8090/usersDash?name=${name}`;
      let offerUrl = `http://localhost:8090/offersDash?name=${name}`;
      let followupsUrl = `http://localhost:8090/followupsDash?name=${name}`;

      if (filterYear) {
        userUrl += `&year=${filterYear}`;
        offerUrl += `&year=${filterYear}`;
        followupsUrl += `&year=${filterYear}`;
      }
      if (filterMonth) {
        userUrl += `&month=${filterMonth}`;
        offerUrl += `&month=${filterMonth}`;
         followupsUrl += `&month=${filterMonth}`;
      }

      axios.get(userUrl)
        .then(res => setUsers(res.data))
        .catch(e => console.error("خطأ جلب المستخدمين:", e));

      axios.get(offerUrl)
        .then(res => setOffers(res.data))
        .catch(e => console.error("خطأ جلب العروض:", e));
      axios.get(followupsUrl)
        .then(res => setFollowups(res.data))
        .catch(e => console.error("خطأ جلب العروض:", e));




    }
  }, [filterYear, filterMonth]);



  
//رسم الصورة للطباعه جوده عاليه
    const getCircularImage = (imgSrc, size = 500) => {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      ctx.clearRect(0, 0, size, size);

      // قص على شكل دائرة
      ctx.save();
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.clip();

      // رسم الصورة
      ctx.drawImage(img, 0, 0, size, size);
      ctx.restore();

      resolve(canvas.toDataURL("image/png"));
    };

    img.src = imgSrc;
  });
};




  // إعداد نطاقات الأسعار لتجميعها
  const priceRanges = [
    { label: "0-100,000", min: 0, max: 100000 },
    { label: "100,000-200,000", min: 100000, max: 200000 },
    { label: "200,000-300,000", min: 200000, max: 300000 },
    { label: "300,000-400,000", min: 300000, max: 400000 },
    { label: "400,000+", min: 400000, max: Infinity },
  ];

  // إعداد نطاقات المساحات لتجميعها (مثال)
  const areaRanges = [
    { label: "0-50", min: 0, max: 50 },
    { label: "50-100", min: 50, max: 100 },
    { label: "100-150", min: 100, max: 150 },
    { label: "150+", min: 150, max: Infinity },
  ];

  // التصفية حسب السنة والشهر داخل الداتا في الحالة (يمكن تحسينها لو سيرفر يدعم)
  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      if (!filterYear && !filterMonth) return true;
      const date = new Date(u.dateAdd || u.createdAt || null);
      if (!date.getTime()) return false;
      if (filterYear && date.getFullYear() !== +filterYear) return false;
      if (filterMonth && date.getMonth() + 1 !== +filterMonth) return false;
      return true;
    });
  }, [users, filterYear, filterMonth]);

  const filteredOffers = useMemo(() => {
    return offers.filter((o) => {
      if (!filterYear && !filterMonth) return true;
      const date = new Date(o.dateAdd || o.createdAt || null);
      if (!date.getTime()) return false;
      if (filterYear && date.getFullYear() !== +filterYear) return false;
      if (filterMonth && date.getMonth() + 1 !== +filterMonth) return false;
      return true;
    });
  }, [offers, filterYear, filterMonth]);


    const filteredFollowups = useMemo(() => {
    return followups.filter((o) => {
      if (!filterYear && !filterMonth) return true;
      const date = new Date(o.addedDate || o.createdAt || null);
      if (!date.getTime()) return false;
      if (filterYear && date.getFullYear() !== +filterYear) return false;
      if (filterMonth && date.getMonth() + 1 !== +filterMonth) return false;
      return true;
    });
  }, [followups, filterYear, filterMonth]);



  // إحصائيات العملاء
  const usersByJob = useMemo(() => {
    const counts = {};
    filteredUsers.forEach(u => { counts[u.job] = (counts[u.job] || 0) + 1; });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [filteredUsers]);

  const usersByBank = useMemo(() => {
    const counts = {};
    filteredUsers.forEach(u => { counts[u.currentBank] = (counts[u.currentBank] || 0) + 1; });
  



   return Object.entries(counts).map(([name, value]) => {
  let displayNamecurrentBank = "";

  if (name ===  "alahli" ) {
    displayNamecurrentBank = " الاهلي";
  } else if (name === "alrajhi") {
    displayNamecurrentBank = " الراجحي";
  } else if (name === "albilad") {
    displayNamecurrentBank = " البلاد";
  } else if (name === "sab") {
    displayNamecurrentBank = "    ساب";
  } else if (name === "alinma") {
    displayNamecurrentBank = "  الانماء  ";
  }else if (name ===  "any") {
    displayNamecurrentBank = "    الاخري";
  }else if (!name) {
    displayNamecurrentBank = " غير محدد";
  } else {
    displayNamecurrentBank = name; // القيمة كما هي إن لم تطابق أي شرط
  }

  return { name: displayNamecurrentBank, value };
  });
  }, [filteredUsers]);


  const usersByRealEstateBank = useMemo(() => {
    const counts = {};
    filteredUsers.forEach(u => { counts[u.realEstateBank] = (counts[u.realEstateBank] || 0) + 1; });
  



   return Object.entries(counts).map(([name, value]) => {
  let displayNamecurrentBankReal = "";

  if (name ===  "alahli" ) {
    displayNamecurrentBankReal = " الاهلي";
  } else if (name === "alrajhi") {
    displayNamecurrentBankReal = " الراجحي";
  } else if (name === "albilad") {
    displayNamecurrentBankReal = " البلاد";
  } else if (name === "sab") {
    displayNamecurrentBankReal = "    ساب";
  } else if (name === "alinma") {
    displayNamecurrentBankReal = "  الانماء  ";
  }else if (name ===  "any") {
    displayNamecurrentBankReal = "    الاخري";
  }else if (!name) {
    displayNamecurrentBankReal = " غير محدد";
  } else {
    displayNamecurrentBankReal = name; // القيمة كما هي إن لم تطابق أي شرط
  }

  return { name: displayNamecurrentBankReal, value };
  });
  }, [filteredUsers]);


  const usersByHousingSupport = useMemo(() => {
    
    const counts = {};
    filteredUsers.forEach(u => { counts[u.housingSupport] = (counts[u.housingSupport] || 0) + 1; });


 

  return Object.entries(counts).map(([name, value]) => {
  let displayNamehousingSupport = "";

  if (name === "baqa") {
    displayNamehousingSupport = "مدعوم باقة";
  } else if (name === "no") {
    displayNamehousingSupport = "غير مدعوم";
  } else if (name === "monthly") {
    displayNamehousingSupport = "مدعوم قسط";
  } else if (name === "noMonthly") {
    displayNamehousingSupport = "  الاهلي مدعوم قسط";
  }else if (!name) {
    displayNamehousingSupport = "غير محدد";
  } else {
    displayNamehousingSupport = name; // القيمة كما هي إن لم تطابق أي شرط
  }

  return { name: displayNamehousingSupport, value };
});
  
  }, [filteredUsers]);

  // إحصائيات العروض
  const offersByCity = useMemo(() => {
    const counts = {};
    filteredOffers.forEach(o => { counts[o.selectedCity] = (counts[o.selectedCity] || 0) + 1; });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [filteredOffers]);

  const offersByAqarType = useMemo(() => {
    const counts = {};
    filteredOffers.forEach(o => { counts[o.aqarType] = (counts[o.aqarType] || 0) + 1; });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [filteredOffers]);










  
  // إحصائيات التواصل
  const followupsByCity = useMemo(() => {
    const counts = {};
     filteredFollowups.forEach(o => { counts[o.cities] = (counts[o.cities] || 0) + 1; });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [filteredFollowups]);

  const followupByPlatform = useMemo(() => {
    const counts = {};
    filteredFollowups.forEach(o => { counts[o.platform] = (counts[o.platform] || 0) + 1; });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [filteredFollowups]);


    const followupByStatus = useMemo(() => {
    const counts = {};
    filteredFollowups.forEach(o => { counts[o.status] = (counts[o.status] || 0) + 1; });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [filteredFollowups]);


  const offersByPrice = useMemo(() => groupRanges(filteredOffers, "price", priceRanges), [filteredOffers]);
  const offersByArea = useMemo(() => groupRanges(filteredOffers, "area", areaRanges), [filteredOffers]);

  // أعلى إعلان (السعر)
  const highestOffer = useMemo(() => {
    if (!filteredOffers.length) return null;
    return filteredOffers.reduce((max, o) => (o.price > max.price ? o : max), filteredOffers[0]);
  }, [filteredOffers]);

  // أعلى إعلان (المساحة)
  const largestOffer = useMemo(() => {
    if (!filteredOffers.length) return null;
    return filteredOffers.reduce((max, o) => (o.area > max.area ? o : max), filteredOffers[0]);
  }, [filteredOffers]);

  // دالة تصدير PDF متكاملة
  const exportPDF = async () =>  {




const doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "portrait" });
  doc.addFileToVFS("Amiri-Regular.ttf", amiriFont);
  doc.addFont("Amiri-Regular.ttf", "Amiri", "normal");
  doc.setFont("Amiri");

  let y = 10;

  // ➤ صورة المستخدم
  if (userPhoto) {
    const circularImage = await getCircularImage(userPhoto, 500); // جودة عالية
    const imgSize = 30; // حجم الصورة داخل PDF
    const imgX = 105 - imgSize / 2;
    const imgY = y;

    // الدائرة الزرقاء حول الصورة (ناعمة)
    doc.setDrawColor(0, 102, 255);
    doc.setLineWidth(1);
    doc.circle(105, imgY + imgSize / 2, imgSize / 2 + 1.5, "S");

    // إدراج الصورة
    doc.addImage(circularImage, "PNG", imgX, imgY, imgSize, imgSize);

    y += imgSize + 10;
  }

  // ➤ عنوان التقرير
  doc.setFontSize(14);
  doc.text(toArabicText("تقرير إحصائيات العقارات والعملاء"), 105, y, { align: "center" });
  y += 10;

  // ➤ معلومات المستخدم
  doc.setFontSize(12);
   doc.text(toArabicText(`شركة اسكان سلمان العقارية `), 105, y, { align: "center" }); y += 8;
  doc.text(toArabicText(`اسم المستخدم: ${userName}`), 105, y, { align: "center" }); y += 8;
  doc.text(toArabicText(`البريد الإلكتروني: ${userEmail}`), 105, y, { align: "center" }); y += 10;
  doc.text(toArabicText(`عدد العملاء: ${filteredUsers.length}`), 105, y, { align: "center" }); y += 8;

  doc.text(toArabicText(`شهر و سنه التقرير: ${filterMonth} - ${filterYear}   `), 105, y, { align: "center" }); y += 8;
   doc.text(toArabicText(`عدد طلبات التواصل: ${filteredFollowups.length}`), 105, y, { align: "center" }); y += 8;
  doc.text(toArabicText(`عدد الإعلانات: ${filteredOffers.length}`), 105, y, { align: "center" }); y += 15;

  



const printTable = (title, data) => {
  doc.text(toArabicText(title), 105, y, { align: "center" }); // ✅ عنوان الجدول في المنتصف
  y += 6;
  autoTable(doc, {
    startY: y,
    head: [[toArabicText("التصنيف"), toArabicText("العدد")]],
    body: data.map((d) => [toArabicText(d.name || "غير محدد"), d.value]),
    styles: {
      font: "Amiri",
      fontStyle: "normal",
      fontSize: 10,
      halign: "center", // ✅ توسيط النصوص داخل الخلايا
    },
    headStyles: {
      font: "Amiri",
      fontStyle: "normal",
      fontSize: 11,
      halign: "center", // ✅ توسيط رؤوس الأعمدة
      // fillColor: [230, 230, 230], // لون خلفية للرأس (اختياري)
    },
    theme: "striped",
    margin: { left: 14, right: 14 },
    tableWidth: 'auto',
  });
  y = doc.lastAutoTable.finalY + 10;
};
    
    printTable("العملاء حسب الوظيفة", usersByJob);
    printTable("العملاء حسب البنك الحالي", usersByBank);
    printTable("العملاء حسب البنك العقاري", usersByRealEstateBank);
    
    printTable("العملاء حسب الدعم السكني", usersByHousingSupport);
    printTable("العروض حسب المدينة", offersByCity);
    printTable("العروض حسب نوع العقار", offersByAqarType);

    printTable("عملاء التواصل حسب  المدينه", followupsByCity);
    printTable("عملاء التواصل حسب المنصه", followupByPlatform);
        printTable("عملاء التواصل حسب  الحاله", followupByStatus);
 

    printTable("العروض حسب السعر", offersByPrice);
    printTable("العروض حسب المساحة", offersByArea);

    // تفاصيل أعلى إعلان سعرًا ومساحة
    // if (highestOffer) {
    //   doc.text(toArabicText("أعلى إعلان حسب السعر:"), 14, y);
    //   y += 6;
    //   doc.text(toArabicText(`المدينة: ${highestOffer.selectedCity || "-"}`), 14, y); y += 6;
    //   doc.text(toArabicText(`السعر: ${highestOffer.price || "-"}`), 14, y); y += 6;
    //   doc.text(toArabicText(`المساحة: ${highestOffer.area || "-"}`), 14, y); y += 10;
    // }
    // if (largestOffer) {
    //   doc.text(toArabicText("أعلى إعلان حسب المساحة:"), 14, y);
    //   y += 6;
    //   doc.text(toArabicText(`المدينة: ${largestOffer.selectedCity || "-"}`), 14, y); y += 6;
    //   doc.text(toArabicText(`المساحة: ${largestOffer.area || "-"}`), 14, y); y += 6;
    //   doc.text(toArabicText(`السعر: ${largestOffer.price || "-"}`), 14, y); y += 10;
    // }
    if (highestOffer) {
  doc.text(toArabicText("أعلى إعلان حسب السعر:"), 105, y, { align: "center" });
  y += 6;
  doc.text(toArabicText(`المدينة: ${highestOffer.selectedCity || "-"}`), 105, y, { align: "center" }); y += 6;
  doc.text(toArabicText(`السعر: ${highestOffer.price || "-"}`), 105, y, { align: "center" }); y += 6;
  doc.text(toArabicText(`المساحة: ${highestOffer.area || "-"}`), 105, y, { align: "center" }); y += 10;
}

if (largestOffer) {
  doc.text(toArabicText("أعلى إعلان حسب المساحة:"), 105, y, { align: "center" });
  y += 6;
  doc.text(toArabicText(`المدينة: ${largestOffer.selectedCity || "-"}`), 105, y, { align: "center" }); y += 6;
  doc.text(toArabicText(`المساحة: ${largestOffer.area || "-"}`), 105, y, { align: "center" }); y += 6;
  doc.text(toArabicText(`السعر: ${largestOffer.price || "-"}`), 105, y, { align: "center" }); y += 10;
}

    doc.save(`Report_${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  // دالة تصدير Excel كاملة
  const exportExcel = () => {
    const wb = XLSX.utils.book_new();

    const addSheet = (title, data, headers) => {
      const ws = XLSX.utils.json_to_sheet(
        data.map((row) => {
          const obj = {};
          headers.forEach((h) => {
            obj[h] = row[h] || row[h.toLowerCase()] || "";
          });
          return obj;
        })
      );
      XLSX.utils.book_append_sheet(wb, ws, title);
    };

    // ورقة العملاء
    addSheet("العملاء حسب الوظيفة", usersByJob, ["name", "value"]);
    addSheet("العملاء حسب البنك الحالي", usersByBank, ["name", "value"]);
    addSheet("العملاء حسب البك العقاري", usersByRealEstateBank, ["name", "value"]);
    addSheet("العملاء حسب الدعم السكني", usersByHousingSupport, ["name", "value"]);




    // ورقة العروض
    addSheet("العروض حسب المدينة", offersByCity, ["name", "value"]);
    addSheet("العروض حسب نوع العقار", offersByAqarType, ["name", "value"]);
    addSheet("العروض حسب السعر", offersByPrice, ["name", "value"]);
    addSheet("العروض حسب المساحة", offersByArea, ["name", "value"]);


        // ورقة طلبات التواصل
    addSheet("عملاء التواصل حسب المدينة", followupsByCity, ["name", "value"]);
    addSheet("عملاء التواصل حسب  الحاله", followupByStatus, ["name", "value"]);
    addSheet("عملاء التواصل حسب المنصه", followupByPlatform, ["name", "value"]);
   





    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    saveAs(
      new Blob([wbout], { type: "application/octet-stream" }),
      `Report_${new Date().toISOString().slice(0, 10)}.xlsx`
    );
  };

  const ChartRenderer = ({ data, chartType }) => {
  if (!data.length) return <p className="text-center" style={{opacity:".5"}}>لا توجد بيانات.</p>;

  const total = data.reduce((sum, entry) => sum + entry.value, 0);



  const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;

  return (
    <>
      {/* القطعة نفسها مع تأثير shadow */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 2} // رفع بسيط للخارج
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        stroke="#999"
        strokeWidth={1}
        style={{
          filter: "drop-shadow(0px 0px 6px rgba(0,0,0,0.3))", // ✅ شادو خارجي
          transition: "0.3s ease-in-out",
        }}
      />
    </>
  );
};







  if (chartType === "pie") {
    return (
      <div className="text-center">

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            {/* <Pie
              dataKey="value"
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={90}
               innerRadius={25}
              


               label={false}
    labelLine={false}
              
            >








              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie> */}


            <Pie
  dataKey="value"
  data={data}
  cx="50%"
  cy="50%"
  outerRadius={120}
  innerRadius={40}
  label={false}
  labelLine={false}
  activeShape={renderActiveShape} // ✅ شكل مخصص عند Hover
>
  {data.map((entry, index) => (
    <Cell
      key={`cell-${index}`}
      fill={COLORS[index % COLORS.length]}
    />
  ))}
</Pie>




            <Tooltip
              formatter={(value) =>
                `${value} (${((value / total) * 100).toFixed(1)}%)`
              }
            />
          </PieChart>
        </ResponsiveContainer>
        <small className="text-muted">الإجمالي: {total}</small>
      </div>
    );
  } else {
    return (





      
//     <ResponsiveContainer width="100%" height={300}>
//   <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//     <XAxis dataKey="name" tick={{ fontSize: 12 ,  fill:darkSide? "":"#fff"}} stroke={darkSide? "#000":"#fff"} />
//     <YAxis allowDecimals={false} tick={{ fontSize: 12, dx: -15 ,  fill:darkSide? "":"#fff"}} stroke={darkSide? "#000":"#fff"} />
//     <Tooltip />
//     <Legend />
//     <Bar dataKey="value" fill="#8884d8" />
//   </BarChart>
// </ResponsiveContainer>

 
<ResponsiveContainer width="100%" height={300}>
  <BarChart
    data={data}
    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
  >
    {/* ✅ خطوط أفقية فقط، غير متقطعة، مخصصة اللون والسماكة */}
    <CartesianGrid
      vertical={false} 
      strokeDasharray="0" 
      // stroke="#8884d8"     
       stroke={darkSide ? "#444" : "#ccc"} 
      strokeWidth={0.4}        // سماكة الخط
    />

    <XAxis
      dataKey="name"
      tick={{ fontSize: 12, fill: darkSide ? "#000" : "#fff" }}
      stroke={darkSide ? "#000" : "#fff"}

    />
    <YAxis
      allowDecimals={false}
      tick={{ fontSize: 12, dx: -15, fill: darkSide ? "#000" : "#fff" }}
      stroke={darkSide ? "#000" : "#fff"}
    />
    {/* <Tooltip
    

        formatter={(value) => [`${value}`, ""]} // حذف "value" من العرض
        labelFormatter={(label) => `${label}`} // ← اسم X Axis
        cursor={{ fill: "rgba(0,0,0,0.1)" }}
    /> */}

<Tooltip
  content={({ payload, label }) => {
    if (!payload || payload.length === 0) return null;

    return (

      <div style={{ background:!darkSide? "#000" :'#fff' , color:!darkSide?"#fff" :'#000', padding: '5px 10px', border: '1px solid #0d6efd', fontSize: '16px' }}>
        <span> {label}: {payload[0].value} </span>
      </div>

    );


  }}
  // cursor={{ fill: "rgba(0,0,0,0.1)" }}
  cursor={false}
/>


    <Legend />
    {
    /* <Bar
      dataKey="value"
      fill="#8884d8"
      barSize={25}
      radius={[4, 4, 0, 0]}
    /> */
    }

    <Bar
      dataKey="value"
      fill="#8884d8"
      barSize={25}
      radius={[4, 4, 0, 0]}
      activeBar={{ fill: '#7764c6' }} // ✅ لون عند Hover
    />

  </BarChart>
</ResponsiveContainer>


//  <ResponsiveContainer width="100%" height={300}>
//   <BarChart
//     data={data}
//     margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//   >
//     <XAxis
//       dataKey="name"
//       tick={{ fontSize: 12, fill: darkSide ? "#000" : "#fff" }}
//       stroke={darkSide ? "#000" : "#fff"}
//     />
//     <YAxis
//       allowDecimals={false}
//       tick={{ fontSize: 12, dx: -15, fill: darkSide ? "#000" : "#fff" }}
//       stroke={darkSide ? "#000" : "#fff"}
//     />
//     <Tooltip
//       formatter={(value) => `${value}`}  
//       cursor={{ fill: "rgba(0,0,0,0.1)" }}  
//     />
//     <Legend />





//     <Bar
//       dataKey="value"
//       fill="#8884d8"
//       barSize={25} 
//       radius={[4, 4, 0, 0]} 
//     />
//   </BarChart>
// </ResponsiveContainer> 









    );
  }
};





  return (
    <div className=" mt-4 f-l"   id={classNameModel}  dir="rtl" style={{ fontFamily: "'Amiri', serif" , color:yesClassNameModel?"black":"" ,     margin: "auto", padding:"20PX 15PX" , marginBottom:"50px"}}>
 









<div className="card mb-4 p-3 d-flex flex-md-row align-items-center gap-3" style={{color:darkSide?"#000":"#fff" ,backgroundColor:darkSide?"":"#2d3c7c"}}>
  {userPhoto ? (
    <img
      src={userPhoto}
      alt="user"
      className="rounded-circle"
      style={{ width: 70, height: 70, objectFit: "cover", border: "2px solid #007BFF" }}
    />
  ) : (
    <FontAwesomeIcon icon={faUser} size="3x" className="text-primary" />
  )}
  <div>
    <h5 className="mb-1">
      <FontAwesomeIcon icon={faUser} className="ms-2 text-primary" />
      {userName || "اسم المستخدم"}
    </h5>
    <p className="mb-0">
      <FontAwesomeIcon icon={faEnvelope} className="ms-2 text-primary" />
      {userEmail || "البريد الإلكتروني"}
    </p>
  </div>
</div>





      <div className="mb-4">
  <div className="d-flex flex-column flex-md-row gap-3 align-items-md-center">
    <div className="d-flex align-items-center gap-2">

      
   <div  className="input-wrapper-search">
      <select
  

        style={{ minWidth: "180px"  }}
   
        value={filterYear}
        onChange={(e) => setFilterYear(e.target.value)}
      >
        <option value="">جميع السنوات</option>
        {[2025, 2024, 2023, 2022, 2021].map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
          <span  className="underline-input"></span>
    
 
   
    
</div>

    </div>

    <div className="d-flex align-items-center gap-2">

      
   <div  className="input-wrapper-search">
      <select

 


          style={{ minWidth: "180px" }}
        value={filterMonth}
        onChange={(e) => setFilterMonth(e.target.value)}
      >
        <option value="">كل الاشهر</option>
        {[...Array(12)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
   <span  className="underline-input"></span>
      </div>


    </div>
  </div>
</div>


      


      <h5 className="mb-4 text-center fw-bold">إحصائيات عامة</h5>
<div className="row text-center">

  {/* عدد العملاء */}
  <div className="col-12 col-md-3 mb-3">
    <div className="card shadow-sm p-3 d-flex flex-column align-items-center justify-content-center" style={{color:darkSide?"#000":"#fff" ,backgroundColor:darkSide?"":"#2d3c7c"}}>
      <h6 className="mb-3 fw-bold" style={{ fontSize: "1.1rem" }}>عدد العملاء</h6>
      <div className="position-relative">
        <FontAwesomeIcon icon={faUsers} size="2x" className="text-success" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {filteredUsers.length}
        </span>
      </div>
    </div>
  </div>

  {/* عدد الإعلانات */}
  <div className="col-12 col-md-3 mb-3">
    <div className="card shadow-sm p-3 d-flex flex-column align-items-center justify-content-center" style={{color:darkSide?"#000":"#fff" ,backgroundColor:darkSide?"":"#2d3c7c"}}>
      <h6 className="mb-3 fw-bold" style={{ fontSize: "1.1rem" }}>عدد الإعلانات</h6>
      <div className="position-relative">
        <FontAwesomeIcon icon={faHome} size="2x" className="text-primary" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {filteredOffers.length}
        </span>
      </div>
    </div>
  </div>



  {/* عدد عملاء التواصل */}
  <div className="col-12 col-md-3 mb-3">
    <div className="card shadow-sm p-3 d-flex flex-column align-items-center justify-content-center" style={{color:darkSide?"#000":"#fff" ,backgroundColor:darkSide?"":"#2d3c7c"}}>
      <h6 className="mb-3 fw-bold" style={{ fontSize: "1.1rem" }}>عدد عملاء التواصل</h6>
      <div className="position-relative">
        <FontAwesomeIcon icon={faUsersGear} size="2x" className="text-primary" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {filteredFollowups.length}
        </span>
      </div>
    </div>
  </div>



  {/* عدد العملاء حسب المدينة */}
  <div className="col-12 col-md-3 mb-3">
    <div className="card shadow-sm p-3 d-flex flex-column align-items-center justify-content-center" style={{color:darkSide?"#000":"#fff" ,backgroundColor:darkSide?"":"#2d3c7c"}}>
      <h6 className="mb-3 fw-bold" style={{ fontSize: "1.1rem" }}>عدد العملاء حسب المدينة</h6>
      <div className="position-relative">
        <FontAwesomeIcon icon={faCity} size="2x" className="text-warning" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {
            [...new Set(filteredUsers.map(u => u.selectedCity))].filter(Boolean).length
          }
        </span>
      </div>
    </div>
  </div>

  {/* عدد الإعلانات حسب المدينة */}
  <div className="col-12 col-md-3 mb-3">
    <div className="card shadow-sm p-3 d-flex flex-column align-items-center justify-content-center" style={{color:darkSide?"#000":"#fff" ,backgroundColor:darkSide?"":"#2d3c7c"}}>
      <h6 className="mb-3 fw-bold" style={{ fontSize: "1.1rem" }}>عدد الإعلانات حسب المدينة</h6>
      <div className="position-relative">
        <FontAwesomeIcon icon={faCity} size="2x" className="text-info" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {
            [...new Set(filteredOffers.map(o => o.selectedCity))].filter(Boolean).length
          }
        </span>
      </div>
    </div>
  </div>





  {/* عدد عملا التواصل حسب المدينة */}
  <div className="col-12 col-md-3 mb-3">
    <div className="card shadow-sm p-3 d-flex flex-column align-items-center justify-content-center" style={{color:darkSide?"#000":"#fff" ,backgroundColor:darkSide?"":"#2d3c7c"}}>
      <h6 className="mb-3 fw-bold" style={{ fontSize: "1.1rem" }}>عدد عملاء التواصل حسب المدينة</h6>
      <div className="position-relative">
        <FontAwesomeIcon icon={faMapLocationDot} size="2x" className="text-success" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {
            [...new Set(filteredFollowups.map(u => u.cities))].filter(Boolean).length
          }
        </span>
      </div>
    </div>
  </div>



  {/* عدد عملا التواصل حسب الخاله */}
  <div className="col-12 col-md-3 mb-3">
    <div className="card shadow-sm p-3 d-flex flex-column align-items-center justify-content-center" style={{color:darkSide?"#000":"#fff" ,backgroundColor:darkSide?"":"#2d3c7c"}}>
      <h6 className="mb-3 fw-bold" style={{ fontSize: "1.1rem" }}>عدد عملاء التواصل حسب الحاله</h6>
      <div className="position-relative">
        <FontAwesomeIcon icon={faHourglassHalf} size="2x" className="text-primary" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {
            [...new Set(filteredFollowups.map(u => u.status))].filter(Boolean).length
          }
        </span>
      </div>
    </div>
  </div>


    {/* عدد عملا التواصل حسب المنصه */}
  <div className="col-12 col-md-3 mb-3">
    <div className="card shadow-sm p-3 d-flex flex-column align-items-center justify-content-center" style={{color:darkSide?"#000":"#fff" ,backgroundColor:darkSide?"":"#2d3c7c"}}>
      <h6 className="mb-3 fw-bold" style={{ fontSize: "1.1rem" }}>عدد عملاء التواصل حسب المنصه</h6>
      <div className="position-relative">
        <FontAwesomeIcon icon={faBullhorn} size="2x" className="text-warning" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {
            [...new Set(filteredFollowups.map(u => u.platform))].filter(Boolean).length
          }
        </span>
      </div>
    </div>
  </div>










</div>


     

<div className="mb-4">
  <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3">
   
    <div className="d-flex flex-wrap gap-2">
      <button
      style={{minWidth: "215px" }}
        className={`btn btn-md px-4 py-2 ${chartType === "pie" ? "btn-primary" : "btn-outline-primary"} maL-7`}
        onClick={() => setChartType("pie")}
      >
        <FontAwesomeIcon icon={faChartPie} className="me-2" />
        دائري
      </button>
      <button
      style={{minWidth: "215px" }}
        className={`btn btn-md px-4 py-2 ${chartType === "bar" ? "btn-primary" : "btn-outline-primary"} maL-7`}
        onClick={() => setChartType("bar")}
      >
        <FontAwesomeIcon icon={faChartBar} className="me-2" />
        عمودي
      </button>
    </div>
  </div>
</div>


            <h5 className="mb-3">إحصائيات العملاء</h5>
      <div className="row">
        <div className="col-md-4 mb-4">
          <h6>
            <FontAwesomeIcon icon={faBriefcase} /> حسب الوظيفة
          </h6>
          <ChartRenderer data={usersByJob} chartType={chartType} />
        </div>
        <div className="col-md-4 mb-4">
          <h6>
            <FontAwesomeIcon icon={faBuilding} /> حسب البنك الحالي
          </h6>
          <ChartRenderer data={usersByBank} chartType={chartType} />
        </div>
                <div className="col-md-4 mb-4">
          <h6>
            <FontAwesomeIcon icon={faBuildingColumns} /> حسب البنك العقاري
          </h6>
          <ChartRenderer data={usersByRealEstateBank} chartType={chartType} />
        </div>
        <div className="col-md-4 mb-4">
          <h6>
            <FontAwesomeIcon icon={faMoneyBillWave} /> حسب الدعم السكني
          </h6>
          <ChartRenderer data={usersByHousingSupport} chartType={chartType} />
        </div>
      </div>





      {/* الرسوم البيانية للعروض */}
      <h5 className="mb-3">إحصائيات العروض</h5>
      <div className="row">
        <div className="col-md-4 mb-4">
          <h6>
            <FontAwesomeIcon icon={faCity} /> حسب المدينة
          </h6>
          <ChartRenderer data={offersByCity} chartType={chartType} />
        </div>
        <div className="col-md-4 mb-4">
          <h6>
            <FontAwesomeIcon icon={faHome} /> حسب نوع العقار
          </h6>
          <ChartRenderer data={offersByAqarType} chartType={chartType} />
        </div>
        <div className="col-md-4 mb-4">
          <h6>
            <FontAwesomeIcon icon={faSortAmountDownAlt} /> حسب السعر
          </h6>
          <ChartRenderer data={offersByPrice} chartType={chartType} />
        </div>
        <div className="col-md-4 mb-4">
          <h6>
            <FontAwesomeIcon icon={faSortAmountDownAlt} /> حسب المساحة
          </h6>
          <ChartRenderer data={offersByArea} chartType={chartType} />
        </div>
      </div>





      {/* الرسوم البيانية عملاء التواصل */}
      <h5 className="mb-3">إحصائيات عملاء التواصل</h5>
      <div className="row">
        <div className="col-md-4 mb-4">
          <h6>
            <FontAwesomeIcon icon={faMapLocationDot} /> حسب المدينة
          </h6>
          <ChartRenderer data={followupsByCity} chartType={chartType} />
        </div>
        <div className="col-md-4 mb-4">
          <h6>
            <FontAwesomeIcon icon={faHourglassHalf} /> حسب  الحاله
          </h6>
          <ChartRenderer data={followupByStatus} chartType={chartType} />
        </div>
        <div className="col-md-4 mb-4">
          <h6>
            <FontAwesomeIcon icon={faBullhorn} /> حسب منصات التواصل
          </h6>
          <ChartRenderer data={followupByPlatform} chartType={chartType} />
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

      {/* تفاصيل أعلى إعلان */}
      {highestOffer && (
        <div className="card p-3 mb-4" style={{color:darkSide?"#000":"#fff" ,backgroundColor:darkSide?"":"#2d3c7c"}}>
          <h5>تفاصيل أعلى إعلان سعرًا</h5>
          <p>المدينة: {highestOffer.selectedCity || "-"}</p>
          <p>السعر: {highestOffer.price || "-"}</p>
          <p>المساحة: {highestOffer.area || "-"}</p>
        </div>
      )}
      {largestOffer && (
        <div className="card p-3 mb-4" style={{color:darkSide?"#000":"#fff" ,backgroundColor:darkSide?"":"#2d3c7c"}}>
          <h5>تفاصيل أكبر إعلان مساحة</h5>
          <p>المدينة: {largestOffer.selectedCity || "-"}</p>
          <p>المساحة: {largestOffer.area || "-"}</p>
          <p>السعر: {largestOffer.price || "-"}</p>
        </div>
      )}

      {/* أزرار التصدير */}
      <div className="mb-5 d-flex gap-3">
        <button className="btn btn-danger" onClick={exportPDF}>
          <FontAwesomeIcon icon={faFilePdf} /> تصدير PDF
        </button>
        <button className="btn btn-success" onClick={exportExcel}>
          <FontAwesomeIcon icon={faFileExcel} /> تصدير Excel
        </button>
      </div>
    </div>
  );
}




