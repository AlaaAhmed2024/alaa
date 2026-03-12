


import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import "../Project1.css";
import audioSuccess from "../sound/success.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke, faMoon } from "@fortawesome/free-solid-svg-icons";
import im from "../logo.png";
import ahly from "../alahliLogo.png";
import alrajhi from "../alrajhiLogo.png";
import albilad from "../albiladLogo.png";
import alfransi from "../alfransiLlogo.png";
import alinma from "../alinmaLogo.png";
import sab from "../sabLogo.png";
import html2canvas from "html2canvas";
import Canvas2Image from "canvas2image";






import '../offers/amiri-normal'; // لا حاجة لتصدير — التحميل يتم تلقائيًا
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';

import { reshape } from 'arabic-reshaper';
import { amiriFont } from '../offers/amiri-normal'; // ملف الخط بصيغة base64




export default function MydModalWithGrid(props) {

  const [userEdit, setUserEdit] = useState({
    editReal: "",
    net: "net",
    phoneUser: "050...",
    nameUser: "علاء احمد",
    hideBank:"no",
  });

  const [plus, setPlus] = useState(0);

  const changeUserFieldHandlerplus = (e) => {
    setPlus(e.target.value);
  };

  if (props.dark) {
    var textMode = "داكن";
    var backgroundColor = "#F2F2F2";
    var ic1 = faMoon;
    var classRotate = 0;
    var classColor = "model-light";
    var tableDark = "";
    var backColor = "link-log-dark  dark-buttom-about";
    var text = "black";
    var borderStyle = "3px solid rgb(41 45 72)";
  } else {
    var textMode = "فاتح";
    var backgroundColor = "#222A44";
    var ic1 = faCircleHalfStroke;
    var classRotate = 180;
    var classColor = "#050505";
    var tableDark = "table-Dark";
    var backColor = "link-log-dark  dark-buttom-about  back-color";
    var text = "white";
    var borderStyle = " 3px solid #b6b1ff";
  }

  //======================================

  if(userEdit.hideBank=="yes"){
  var imageBank = im;
  }else if (props.input.realEstateBank === "alahli") {
    var imageBank = ahly;
  } else if (props.input.realEstateBank === "alrajhi") {
    var imageBank = alrajhi;
  } else if (props.input.realEstateBank === "albilad") {
    var imageBank = albilad;
  } else if (props.input.realEstateBank === "alfransi") {
    var imageBank = alfransi;
  } else if (props.input.realEstateBank === "alinma") {
    var imageBank = alinma;
  } else if (props.input.realEstateBank === "sab") {
    var imageBank = sab;
  } else {
    var imageBank = "";
  }
  //=====================================

  var totalDurationOut = props.data.totalDurationN;

 var installmentMinistryDefense= props.data.installmentMinistryDefense
 var durationMinistryDefense=props.data.durationMinistryDefense
  if (
    props.data.installmentMinistryDefense == 0 ||
    props.data.installmentMinistryDefense == ""
  ) {
    var textRealEstateFinance = "التمويل العقاري ";
    var addMinistryDefense = 0;
  } else {
    var textRealEstateFinance = " العقاري و دعم الدفاع ";
    var addMinistryDefense = 160000;
  }

  //========================================================================
  if (props.input.housingSupport == "baqa" || props.input.housingSupport == "no") {
    var col1 = "القسط الشهري";
    var col2 = "";
    var col3 = "";
    var col4 = " المده بالاشهر";
    var displyNone = true;
    var house = 0;
    var top = "-160px";

    var colFirst = props.data.colFirst;
    var colSecend = props.data.colSecend;
    var colThrid = props.data.colThrid;
    var colFouer = 0;


   
        var durationColFirst = props.data.maxDurationFirstInstallment;
 
    


        var durationColSecond = props.data.durationBeforeRetirement - durationColFirst;
    
    
     
       var durationThird = 1 * props.data.durationAfterRetirement;

    


   
    var durationfour = 0;

    var outHouse = true;
    //========================================================================
  } else {
    var col1 = "القسط قبل الدعم";
    var col2 = "الدعم المسترد";
    var col3 = "القسط بعد الدعم";
    var col4 = " المده بالاشهر";
    var displyNone = false;
    var house =  props.data.house;
    // var house=props.data.amountHousingSupport
    var top = "-190px";

    var colFirst = props.data.colFirst;
    var colSecend = props.data.colSecend;

    var colFirstN = props.data.colFirstN;
    var colSecendN = props.data.colSecendN;

    var durationColFirst = props.data.maxDurationFirstInstallment;
    var durationColSecond = Math.min(
      240 - durationColFirst,
      1 * props.data.durationBeforeRetirement - durationColFirst
    );


    
    if (props.data.durationBeforeRetirement >= 240) {
      var colThrid = colSecendN; //200 تقريبي
      var colThridN = colThrid;

      var durationThird = Math.max(
        0,
        1 * (~~1 * props.data.durationBeforeRetirement - 240)
      );
      var durationfour =
        12 * totalDurationOut -
        (durationThird + durationColSecond + durationColFirst);



      if (props.data.durationBeforeRetirement >= 12 * totalDurationOut) {
        var colFouer = colThrid;
       } else {
        var colFouer = props.data.colFouer;
        }
    } else {
      var colFouer = props.data.colFouer;
      var colThrid = props.data.colThrid;
      var colThridN = props.data.colThridN;

      var durationThird = Math.max(
        0,
        Math.min(
          240 - (durationColFirst + durationColSecond),
          1 * (1 * props.data.durationAfterRetirement)
        )
      );
      var durationfour =
        12 * totalDurationOut -
        (durationThird + durationColSecond + durationColFirst);

      var outHouse = true;
    }
  }
  var durationfourOut = new Intl.NumberFormat().format(durationfour.toFixed(0));

  //================================
  const changeUserFieldHandler = (e) => {
    setUserEdit({
      ...userEdit,
      [e.target.name]: e.target.value,
      [e.target.value]: e.target.value,
    });
  };

    const handleNumericInput = (e, field, maxLength) => {
    const newValue = e.target.value;

    if (/^\d*$/.test(newValue) && newValue.length <= maxLength) {
      setUserEdit((prev) => ({
        ...prev,
        [field]: newValue,
      }));
    }
  };
  //===============================

  var tonumber = parseInt(1 * userEdit.editReal);
  if (userEdit.editReal === "") {
    var realEstateFinanceFinal = (~~1 * props.data.outReal) / 1;
    var totaledit =
      (~~1 *
        (1 * props.data.outPresonal +
          1 * props.data.outBaqa +
          1 * props.data.outReal +
          1 * props.data.outAddministryDefense)) /
        1 +
      (~~1 * plus) / 1;
  } else {
    var realEstateFinanceFinal = tonumber;
    var totaledit =
      (~~1 *
        (realEstateFinanceFinal +
          1 * props.data.outPresonal +
          1 * props.data.outBaqa +
          1 * props.data.outAddministryDefense)) /
        1 +
      (~~1 * plus) / 1;
  }

  if (props.data.outReal === 0 && userEdit.editReal === "") {
    var netNet = 0;
  } else if (userEdit.net == "net") {
    if (props.input.firstHouse === "yes") {
      if (props.input.downPayment === "10") {
        var netT = totaledit / 0.9;
        var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
        var netT2 = (netT * 2.5) / 100;
        var net3 = 0 * netT2;
        var netNet = totaledit - netT1 - netT2 - net3 - 5700;
      } else if (props.input.downPayment === "5") {
        var netT = totaledit / 0.95;
        var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
        var netT2 = (netT * 2.5) / 100;
        var net3 = 0 * netT2;
        var netNet = totaledit - netT1 - netT2 - net3 - 5700;
      } else if (props.input.downPayment === "20") {
        var netT = totaledit / 0.8;
        var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
        var netT2 = (netT * 2.5) / 100;
        var net3 = 0 * netT2;
        var netNet = totaledit - netT1 - netT2 - net3 - 5700;
      } else {
        var netT = totaledit / 0.7;
        var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
        var netT2 = (netT * 2.5) / 100;
        var net3 = 0 * netT2;
        var netNet = totaledit - netT1 - netT2 - net3 - 5700;
      }
    } else {
      if (props.input.downPayment === "10") {
        var netT = totaledit / 0.9;
        var netT1 = (netT * 5) / 100;
        var netT2 = (netT * 2.5) / 100;
        var net3 = 0 * netT2;
        var netNet = totaledit - netT1 - netT2 - net3 - 5700;
      } else if (props.input.downPayment === "5") {
        var netT = totaledit / 0.95;
        var netT1 = (netT * 5) / 100;
        var netT2 = (netT * 2.5) / 100;
        var net3 = 0 * netT2;
        var netNet = totaledit - netT1 - netT2 - net3 - 5700;
      } else if (props.input.downPayment === "20") {
        var netT = totaledit / 0.8;
        var netT1 = (netT * 5) / 100;
        var netT2 = (netT * 2.5) / 100;
        var net3 = 0 * netT2;
        var netNet = totaledit - netT1 - netT2 - net3 - 5700;
      } else {
        var netT = totaledit / 0.7;
        var netT1 = (netT * 5) / 100;
        var netT2 = (netT * 2.5) / 100;
        var net3 = 0 * netT2;
        var netNet = totaledit - netT1 - netT2 - net3 - 5700;
      }
    }
  } else {
    var netNet = totaledit;
  }
  console.log(netNet, typeof netNet);

  // var netChiqe=new Intl.NumberFormat().format(netNet.toFixed(0))
  var totaleditStyle = new Intl.NumberFormat().format(totaledit.toFixed(0));
  var netChiqe = new Intl.NumberFormat().format(netNet.toFixed(0));

  var realOutTotal = realEstateFinanceFinal + addMinistryDefense;

  var realStyle = new Intl.NumberFormat().format(realOutTotal.toFixed(0));

  var personStyle = new Intl.NumberFormat().format(
    (~~1 * props.data.outPresonal).toFixed(0)
  );

  if (durationColFirst === 0) {
    var text1 = false;
  } else {
    var text1 = true;
  }

  if (durationColSecond === 0) {
    var text2 = false;
    var next = "الفتره الثالثة";
  } else {
    var text2 = true;
  }

  if (durationThird === 0) {
    var text3 = false;
    var next = "الفتره الثانية";
  } else {
    var text3 = true;
  }

  if (durationfourOut === 0) {
    var text4 = false;
  } else {
    var text4 = true;
  }

  // const printPdf = () => {
  //   window.print();
  // };






  
  var namePhoto = props.input.name + ".png";

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
  // function capture() {
  //   html2canvas(document.body).then((canvas) => {
      
  //     let a = document.createElement("a");
  //     a.download = namePhoto;
  //     a.href = canvas.toDataURL("image/png");
  //     // a.href = canvas.toDataURL("image/jpeg");
  //     a.click();
  //   });
  // }




  
  // function capture() {
  //   html2canvas(document.querySelector('.modal-content')).then((canvas) => {
      

  //     let a = document.createElement("a");
  //     a.download = namePhoto;
  //     a.href = canvas.toDataURL("image/png");
  
  //     a.click();
  //   });
  // }












// function capture() {
//   const hiddenElements = document.querySelectorAll('.no-print, .hide-on-export');
//   hiddenElements.forEach(el => el.style.display = 'none');

//   const target = document.querySelector(".section-to-print");

//   // حفظ القيم الأصلية
//   const originalStyle = {
//     width: target.style.width,
//     overflow: target.style.overflow,
//     scrollTop: target.scrollTop,
//     scrollLeft: target.scrollLeft,
//   };

//   const screenWidth = window.innerWidth;

//   if (screenWidth <= 768) {
//     // الشاشات الصغيرة
//     const fullWidth = target.scrollWidth;
//     const fullHeight = target.scrollHeight;

//     target.style.width = fullWidth + "px";
//     target.style.overflow = "visible";

//     target.scrollTop = 0;
//     target.scrollLeft = 0;

//     setTimeout(() => {
//       html2canvas(target, {
//         scale: 2,
//         useCORS: true,
//         scrollX: 0,
//         scrollY: 0,
//         width: fullWidth,
//         height: fullHeight,
//         windowWidth: fullWidth,
//       }).then((canvas) => {
//         const a = document.createElement("a");
//         a.download = namePhoto;
//         a.href = canvas.toDataURL("image/png");
//         a.click();

//         hiddenElements.forEach(el => el.style.display = '');
//         target.style.width = originalStyle.width;
//         target.style.overflow = originalStyle.overflow;
//         target.scrollTop = originalStyle.scrollTop;
//         target.scrollLeft = originalStyle.scrollLeft;
//       });
//     }, 150);

//   } else {
//     // الشاشات الكبيرة: خلي العرض 100% أو auto
//     target.style.width = "100%";
//     target.style.overflow = "visible";

//     target.scrollTop = 0;
//     target.scrollLeft = 0;

//     setTimeout(() => {
//       html2canvas(target, {
//         scale: 2,
//         useCORS: true,
//         scrollX: 0,
//         scrollY: 0,
//         windowWidth: document.body.scrollWidth,
//       }).then((canvas) => {
//         const a = document.createElement("a");
//         a.download = namePhoto;
//         a.href = canvas.toDataURL("image/png");
//         a.click();

//         hiddenElements.forEach(el => el.style.display = '');
//         target.style.width = originalStyle.width;
//         target.style.overflow = originalStyle.overflow;
//         target.scrollTop = originalStyle.scrollTop;
//         target.scrollLeft = originalStyle.scrollLeft;
//       });
//     }, 150);
//   }
// }



 const logoBase64 =
 "data:image/png;base64,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"


function capture() {
  const hiddenElements = document.querySelectorAll('.no-print, .hide-on-export');
  hiddenElements.forEach(el => el.style.display = 'none');

  const target = document.querySelector(".section-to-print");

  // حفظ القيم الأصلية
  const originalStyle = {
    width: target.style.width,
    overflow: target.style.overflow,
    scrollTop: target.scrollTop,
    scrollLeft: target.scrollLeft,
  };

  const screenWidth = window.innerWidth;

  if (screenWidth <= 768) {
    // الشاشات الصغيرة
    const fullWidth = target.scrollWidth;
    const fullHeight = target.scrollHeight;

    target.style.width = fullWidth + "px";
    target.style.overflow = "visible";

    target.scrollTop = 0;
    target.scrollLeft = 0;

    setTimeout(() => {
      html2canvas(target, {
        scale: 2,
        useCORS: true,
        scrollX: 0,
        scrollY: 0,
        width: fullWidth,
        height: fullHeight,
        windowWidth: fullWidth,
      }).then((canvas) => {
        // ======== إضافة اللوجو هنا ========
        const ctx = canvas.getContext('2d');
        const logo = new Image();
        logo.src = logoBase64;  // تأكد أن logoBase64 معرف سابقاً

        logo.onload = () => {
          const canvasWidth = canvas.width;
          const canvasHeight = canvas.height;
          // const logoWidth = 250;
          // const logoHeight = 300;
            const logoWidth = 200;
           const logoHeight = 240;
          const centerX = (canvasWidth - logoWidth) / 2 - 380;
          const centerY = (canvasHeight - logoHeight) / 2 - 40;

          ctx.globalAlpha = 0.15;
          ctx.drawImage(logo, centerX, centerY, logoWidth, logoHeight);
          ctx.globalAlpha = 1;

          const a = document.createElement("a");
          a.download = namePhoto;
          a.href = canvas.toDataURL("image/png");
          a.click();

          hiddenElements.forEach(el => el.style.display = '');
          target.style.width = originalStyle.width;
          target.style.overflow = originalStyle.overflow;
          target.scrollTop = originalStyle.scrollTop;
          target.scrollLeft = originalStyle.scrollLeft;
        };
        // ======== نهاية إضافة اللوجو ========
      });
    }, 150);

  } else {
    // الشاشات الكبيرة: خلي العرض 100% أو auto
    target.style.width = "100%";
    target.style.overflow = "visible";

    target.scrollTop = 0;
    target.scrollLeft = 0;

    setTimeout(() => {
      html2canvas(target, {
        scale: 2,
        useCORS: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: document.body.scrollWidth,
      }).then((canvas) => {
        // ======== إضافة اللوجو هنا ========
        const ctx = canvas.getContext('2d');
        const logo = new Image();
        logo.src = logoBase64;  // تأكد أن logoBase64 معرف سابقاً

        logo.onload = () => {
          const canvasWidth = canvas.width;
          const canvasHeight = canvas.height;
          // const logoWidth = 250;
          // const logoHeight = 300;
            const logoWidth = 200;
            const logoHeight = 240;
          const centerX = (canvasWidth - logoWidth) / 2 + 30;
          const centerY = (canvasHeight - logoHeight) / 2 - 40 ;

          ctx.globalAlpha = 0.15;
          ctx.drawImage(logo, centerX, centerY, logoWidth, logoHeight);
          ctx.globalAlpha = 1;

          const a = document.createElement("a");
          a.download = namePhoto;
          a.href = canvas.toDataURL("image/png");
          a.click();

          hiddenElements.forEach(el => el.style.display = '');
          target.style.width = originalStyle.width;
          target.style.overflow = originalStyle.overflow;
          target.scrollTop = originalStyle.scrollTop;
          target.scrollLeft = originalStyle.scrollLeft;
        };
        // ======== نهاية إضافة اللوجو ========
      });
    }, 150);
  }
}








  
 const [colorSelect, setColorSelect] = useState("#f2f2f2");

  function onCangeColor(e) {
    setColorSelect(e.target.value);
  }

//   function capture() {
//     const captureElement = document.querySelector('#modal') 
//     html2canvas(captureElement)
//         .then(canvas => {
//             canvas.style.display = 'none'
//             document.body.appendChild(canvas)
//             return canvas
//         })
//         .then(canvas => {
//             const image = canvas.toDataURL('image/png')
//             const a = document.createElement('a')
//             a.setAttribute('download', namePhoto)
//             a.setAttribute('href', image)
//             a.click()
          
//             canvas.remove()
//         })
// }









  // function capture() {
    



  //   html2canvas(document.querySelector('#modal-content')).then(canvas=>{
 
  //     document.body.appendChild(canvas);
      
  //   })
            
  //  }
  


  //   const capture= ()=> {

  //     html2canvas($('body'),
  //     {
  //         onrendered: function (canvas) {
  //             var imgString = canvas.toDataURL("image/png");
  //             window.open(imgString);
  //         }
  //     }
  // )
  // }

  // const para = document.createElement("p");
  // para.innerHTML = "This is a paragraph.";
  // document.getElementById("myDIV").appendChild(para);









  // html2canvas(document.getElementById("main"), {
  //   allowTaint: true,
  //   useCORS: true,
  // })
  // .then(function (canvas) {
  //   // It will return a canvas element
  //   let image = canvas.toDataURL("image/png", 0.5);
  // })
  // .catch((e) => {
  //   // Handle errors
  //   console.log(e);
  // });
  





  //  function capture() {
    



  //   html2canvas(document.querySelector('#modal'), {
  //           onrendered: function(canvas) {
  //               // document.body.appendChild(canvas);
  //             return Canvas2Image.saveAsPNG(canvas);
  //           }
  //       });
  //  }


     

  // document.querySelector('button').addEventListener('click', function() {
  //   html2canvas(document.querySelector('.specific'), {
  //       onrendered: function(canvas) {
  //           // document.body.appendChild(canvas);
  //         return Canvas2Image.saveAsPNG(canvas);
  //       }
  //   });
  // });




  

 var namePhotoPdf = props.input.name + ".pdf";

// const printPdf = async () => {
//   const element = document.querySelector('.section-to-print');
//   if (!element) return;

//   // ✴️ تصغير سكرول الصفحة لتجنب تقطيع الصور
//   window.scrollTo(0, 0);

//   // ✅ التقط صورة عالية الجودة للقسم المطلوب
//   const canvas = await html2canvas(element, {
//     scale: 2,
//     useCORS: true,
//     backgroundColor: null,
//   });

//   const imgData = canvas.toDataURL('image/png');

//   const pdf = new jsPDF('p', 'pt', 'a4');
//   const pdfWidth = pdf.internal.pageSize.getWidth();
//   const pdfHeight = pdf.internal.pageSize.getHeight();

//   const imgProps = pdf.getImageProperties(imgData);
//   const imgRatio = imgProps.height / imgProps.width;
//   const imgHeight = pdfWidth * imgRatio;

//   // ✅ أضف العلامة المائية (الشعار) في وسط الصفحة
//   const watermarkWidth = 250;
//   const watermarkHeight = 300;
//   const centerX = (pdfWidth - watermarkWidth) / 2;
//   const centerY = (pdfHeight - watermarkHeight) / 2;

//   if (pdf.setGState) {
//     pdf.setGState(new pdf.GState({ opacity: 0.15 }));
//   }
//   pdf.addImage(logoBase64, 'PNG', centerX, centerY, watermarkWidth, watermarkHeight);
//   if (pdf.setGState) {
//     pdf.setGState(new pdf.GState({ opacity: 1 }));
//   }

//   // ✅ أضف صورة القسم بالكامل إلى الصفحة
//   pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, imgHeight);

//   // ✅ احفظ الملف
//   pdf.save(namePhotoPdf);
// };






const printPdf = async () => {
  const element = document.querySelector('.section-to-print');
  if (!element) return;

  window.scrollTo(0, 0);

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: null,
  });

  const imgData = canvas.toDataURL('image/png');

  const pdf = new jsPDF('p', 'pt', 'a4');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  const imgProps = pdf.getImageProperties(imgData);
  const imgRatio = imgProps.height / imgProps.width;

  const margin = 20; // الهامش الخارجي
  const availableWidth = pdfWidth - margin * 2;
  const imgHeight = availableWidth * imgRatio;
  const offsetY = (pdfHeight - imgHeight) / 2;

  // ✅ خلفية للإطار
  pdf.setFillColor(230, 240, 250); // لون أزرق فاتح
  pdf.roundedRect(margin, offsetY, availableWidth, imgHeight, 8, 8, 'FD'); // F=fill, D=draw

  // ✅ صورة المحتوى داخل الإطار
  pdf.addImage(imgData, 'PNG', margin, offsetY, availableWidth, imgHeight);

  // ✅ إضافة الشعار كعلامة مائية في وسط المحتوى
  // const watermarkWidth = 250;
  // const watermarkHeight = 300;

    const watermarkWidth = 180;
  const watermarkHeight = 220;
  
  
  const centerX = (pdfWidth - watermarkWidth) / 2;
  const centerY = offsetY + (imgHeight - watermarkHeight) / 2;

  if (pdf.setGState) {
    pdf.setGState(new pdf.GState({ opacity: 0.15 }));
  }
  pdf.addImage(logoBase64, 'PNG', centerX, centerY, watermarkWidth, watermarkHeight);
  if (pdf.setGState) {
    pdf.setGState(new pdf.GState({ opacity: 1 }));
  }

  // ✅ حفظ الملف
  pdf.save(namePhotoPdf);
};






  return (

<Modal
  {...props}
  aria-labelledby="contained-modal-title-vcenter"
  centered
  dialogClassName="custom-modal-width"
  className={props.dark ? "ba-img-light" : "ba-img-dark dark-lib"}
>

    {/* <Modal {...props}  aria-labelledby="contained-modal-title-vcenter"  size="lg"  centered className={props.dark?"ba-img-light":"  ba-img-dark dark-lib"}> */}
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <h5 style={{color:props.dark?"black":"white"}}> {  "تفاصيل الحسبة " }</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
  




     
      <div
        className="section-to-print  specific"
          style={{
    
               
              


            backgroundColor:colorSelect === "#f2f2f2" ? 
            
            
            
            props.dark ? "#F2F2F2" : "#222A44" :colorSelect ,


            color: props.dark ? "black" : "white",

         
          }}
        >
          <div className="table-outData" style={{direction: "rtl"}}>
            <table>
              <thead>
                <tr style={{ height: "60px", display: "table-row" }}>
                  <th>
          
                    <img
                      alt=""
                      src={imageBank}
                      className={props.dark ? "loge-right-out" : "imageWtoB-right-out"}
                      
                    />
                  </th>
                  <th
                    colspan="3"
                    className="show-eskan fon-la"
                    style={{  position: "relative" }}
                  >
                    اسكان سلمان العقارية
                  </th>
                  <th>
                    <img
                      alt=""
                      src={im}
                      className={props.dark ? "loge-left-out" : "imageWtoB-out"}
                    
                    />
                  </th>
                  {/* <th><img alt="" src={im} className={ props.dark ? "loge-left" : "imageWtoB" } style={{ marginLeft: "15px", height:"35px",width:"80px"}} /></th> */}
                </tr>
              </thead>
              <tbody className={tableDark}>
                <tr>
                  <td> {textRealEstateFinance}</td>
                  <td colspan="2">{realStyle}</td>

                  <td>قرض اضافي</td>
                  <td style={{ padding: "0 7px", marginTop: "3px" }}>
                    <input
                      name="netSalary"
                      value={plus}
                      onChange={(e) => changeUserFieldHandlerplus(e)}
                      //  // onKeyDown={checkLength}
                      maxLength="8"
                      type="number"
                      style={{
                        marginBottom: "0px",
                        height: "30px",
                        width: "80%",
                        backgroundColor: props.dark ? "#F2F2F2" : "#222A44",
                        color: props.dark ? "black" : "white",
                        padding: "0px",
                      }}
                    />
                  </td>
                </tr>

                <tr>
                  <td>شخصي جديد</td>
                  <td colspan="2">{personStyle}</td>

                  <td>الاجمالي</td>
                  <td>{totaleditStyle}</td>
                </tr>

                <tr>
                  <td> {props.data.nameAmountHousingSupport}</td>
                  <td colspan="2">{props.data.amountHousingSupport}</td>

                  <td>صافي العقار</td>
                  <td>{netChiqe}</td>
                </tr>
                <tr
                  style={{
                    justifyContent: "center",
                    backgroundColor: props.dark ? "#d5e2ef" : "black",
                    padding: " 1px 0",
                  }}
                >
                  <td
                    colspan="5"
                    style={{ color: "#198754", fontWeight: "bold" }}
                  >
                    تفاصيل الاقساط
                  </td>
                </tr>

                <tr>
                  <td>فترات التمويل</td>
                  <td colSpan={displyNone ? "2" : ""}>{col1}</td>
                  <td style={{ display: displyNone ? "none" : "" }}>{col2}</td>
                  <td style={{ display: displyNone ? "none" : "" }}>{col3}</td>
                  <td colSpan={displyNone ? "2" : ""}>{col4}</td>
                </tr>

                {props.input.realEstateBank != "alrajhi" && props.input.realEstateBank != "masar" ?
                (
                  
                  <>
                
                
                <tr className={text1 ? "showText" : "hidden"}>
                  <td>الفترة الاولي</td>
                  <td colSpan={displyNone ? "2" : ""}>{colFirst}</td>
                  <td style={{ display: displyNone ? "none" : "" }}>{house}</td>
                  <td style={{ display: displyNone ? "none" : "" }}>
                    {colFirstN}
                  </td>
                  <td colSpan={displyNone ? "2" : ""}>{durationColFirst}</td>
                </tr>

                <tr className={text2 ? "" : "hidden"}>
                  <td> {text1 ? "الفتره الثانية" : "الفترة الاولي"}</td>
                  <td colSpan={displyNone ? "2" : ""}>{colSecend}</td>
                  <td style={{ display: displyNone ? "none" : "" }}>{house}</td>
                  <td style={{ display: displyNone ? "none" : "" }}>
                    {colSecendN}
                  </td>
                  <td colSpan={displyNone ? "2" : ""}>{durationColSecond}</td>
                </tr>

                <tr className={text3 ? "" : "hidden"}>
                  <td>
                    {text2 && text1 ? "الفترة الثالثة" : "الفترة الثانية"}{" "}
                  </td>
                  <td colSpan={displyNone ? "2" : ""}>{colThrid}</td>
                  <td style={{ display: displyNone ? "none" : "" }}>
                    {outHouse ? house : "---"}
                  </td>
                  <td style={{ display: displyNone ? "none" : "" }}>
                    {colThrid == 0 ? 0 : colThridN}
                  </td>
                  <td colSpan={displyNone ? "2" : ""}>{durationThird}</td>
                </tr>

                <tr
                  className={displyNone || text4 === false ? "none hidden" : ""}
                  style={{
                    display:
                      displyNone || text4 === false ? "none" : "table-row",
                  }}
                >
                  <td> الفترة الاخيرة</td>
                  <td>{colFouer}</td>
                  <td>---</td>
                  <td>{colFouer}</td>
                  <td>{durationfourOut}</td>
                </tr>
                
                </>):(
                  
                  
                  <>
                  

{props.summary && props.summary.reduce((acc, p) => {
  // حساب عدد الأشهر التراكمي لكل فترة
  const cumulativeMonths = (acc.totalMonths || 0) + p.months;

  acc.rows.push({ ...p, cumulativeMonths });
  acc.totalMonths = cumulativeMonths;
  return acc;
}, { rows: [], totalMonths: 0 }).rows.map((p, idx) => {
  // لو الأشهر التراكمية >= 240 نجعل house = 0
  const houseValue = p.cumulativeMonths > 240 ? 0 : house;

  return (
    <tr key={idx}>
      <td>
        الفترة {p.period === 1 ? "الأولى" :
                 p.period === 2 ? "الثانية" :
                 p.period === 3 ? "الثالثة" :
                 p.period === 4 ? "الرابعة" :
                 p.period === 5 ? "الخامسة" : "السادسة"}
      </td>
      {/* <td colSpan={displyNone ? "2" : ""}>{Math.round(p.realEstateInstallment).toLocaleString()}</td> */}
       <td colSpan={displyNone ? "2" : ""}>{  new Intl.NumberFormat().format(
        (p.realEstateInstallment).toFixed(0))}</td>
     
      <td style={{ display: displyNone ? "none" : "" }}>
        {Math.round(houseValue).toLocaleString()}

          {/* { new Intl.NumberFormat().format( (houseValue).toFixed(0))} */}
      </td>
      <td style={{ display: displyNone ? "none" : "" }}>
        {/* {Math.round(p.realEstateInstallment - houseValue).toLocaleString()} */}
         

          {  new Intl.NumberFormat().format(
        (p.realEstateInstallment - houseValue).toFixed(0))}
      </td>
      <td colSpan={displyNone ? "2" : ""}>{p.months}</td>
    </tr>
  );
})}
                  
                  
                  
                  </>)}










                <tr>
                  <td> مده التمويل</td>
                  <td>{props.data.totalDuration}</td>
                  <td>{"ا/" + props.input.name}</td>
                  <td style={{ paddingLeft: "0px" }}>
                    <input
                      name="nameUser"
                      value={userEdit.nameUser}
                      onChange={(e) => changeUserFieldHandler(e)}
                      //  // onKeyDown={checkLength}
                      maxLength="50"
                      type="text"
                      style={{
                        marginBottom: "0px",
                        height: "30px",
                        width: "100%",
                        backgroundColor: props.dark ? "#F2F2F2" : "#222A44",
                        color: props.dark ? "black" : "white",
                        padding: "0px",
                      }}
                    />
                  </td>
                  <td>
                    <input
                      name="phoneUser"
                      value={userEdit.phoneUser}
                    
                      //  // onKeyDown={checkLength}
                    


                                              type="text"
                        inputMode="numeric"
                        maxLength={10}
                        onChange={(e) => handleNumericInput(e, "phoneUser", 10)}



                      style={{
                        marginBottom: "0px",
                        height: "30px",
                        width: "100%",
                        backgroundColor: props.dark ? "#F2F2F2" : "#222A44",
                        color: props.dark ? "black" : "white",
                        padding: "0px",
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <button type="button"  class="btn-close close-top " props.data-bs-dismiss="alert" aria-label="Close" style={{}}></button> */}
         
       
             <div style={{color: props.dark ? "black" : "white" , textAlign:"center" , fontSize:"13px" , marginTop:"10px"}}>
                 {"تاريخ و وقت الحسبة :" + nowToString}
              </div>
            <div style={{color: props.dark ? "black" : "white" , textAlign:"center" , fontSize:"13px" }}>لا تترد في الاستفسار مع اطيب التمنيات </div>



        </div>
       




      </Modal.Body>


{/* 
      <Modal.Footer style={{justifyContent: "center"}}>
        

        <div style={{ marginTop: "8px", direction: "" }} id="not-print"  className='no-print'>

        <InputGroup>
        <div className="color_picker" style={{height: "unset" ,  borderRadius: "0.375rem 0 0 0.375rem" }}>
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

        <input
              name="editReal"
              placeholder="التمويل يدوي"
              // onKeyDown={checkLength}
          
             
       style={{maxWidth:"20%", margin: "0px",
        height: "unset"}}
              value={userEdit.editReal}
            


                                      type="text"
                        inputMode="numeric"
                        maxLength={7}
                        onChange={(e) => handleNumericInput(e, "editReal", 10)}


            />


<Form.Select  

style={{ margin: "0px",
  height: "unset"}}
    value={userEdit.net}
    onChange={(event) => {
      setUserEdit({
        ...userEdit,
        net: event.target.value,
      });
    }}

>
    
      <option value="net">خصم المصروفات</option>
      <option value="alaa">بدون خصم</option>
    </Form.Select>


    <Form.Select  

style={{ margin: "0px",
  height: "unset"}}
    value={userEdit.hideBank}
    onChange={(event) => {
      setUserEdit({
        ...userEdit,
        hideBank: event.target.value,
      });
    }}

>
    
      <option value="no"> اظهار البنك</option>
      <option value="yes"> اخفاء البنك </option>
    </Form.Select>



        <Button variant="outline-secondary"  onClick={capture}>صورة</Button>
        <Button variant="outline-secondary"  onClick={printPdf}>ملف</Button>
        <Button onClick={props.onHide} style={{marginLeft:"15px"}}>اغلاق</Button>
      </InputGroup>

          </div>

      </Modal.Footer> */}





      <Modal.Footer style={{ justifyContent: "center" }}>
  <div
    style={{ marginTop: "8px", direction: "" }}
    id="not-print"
    className="no-print responsive-footer"
  >
    <InputGroup className="responsive-group">
      {/* <div
        className="color_picker"
        style={{
    
        }}
      >
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
      </div> */}

      <input
        name="editReal"
        placeholder="التمويل يدوي"
        style={{
          maxWidth: "100%",
          margin: "0px",
         
        }}
        value={userEdit.editReal}
        type="text"
        inputMode="numeric"
        maxLength={7}
        onChange={(e) => handleNumericInput(e, "editReal", 10)}
      />

      <Form.Select
        style={{ margin: "0px", height: "unset" }}
        value={userEdit.net}
        onChange={(event) => {
          setUserEdit({
            ...userEdit,
            net: event.target.value,
          });
        }}
      >
        <option value="net">خصم المصروفات</option>
        <option value="alaa">بدون خصم</option>
      </Form.Select>

      <Form.Select
        style={{ margin: "0px", height: "unset" }}
        value={userEdit.hideBank}
        onChange={(event) => {
          setUserEdit({
            ...userEdit,
            hideBank: event.target.value,
          });
        }}
      >
        <option value="no"> اظهار البنك</option>
        <option value="yes"> اخفاء البنك </option>
      </Form.Select>

      <Button variant="outline-secondary" onClick={capture}>
        صورة
      </Button>
      <Button variant="outline-secondary" onClick={printPdf}>
        ملف
      </Button>
      <Button onClick={props.onHide} style={{}}>
        اغلاق
      </Button>
    </InputGroup>
  </div>
</Modal.Footer>



    </Modal>
  );
}






// import { useState } from "react";
// import "../Project1.css";
// import audioSuccess from "../sound/success.mp3";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleHalfStroke, faMoon } from "@fortawesome/free-solid-svg-icons";
// import im from "../logo.png";
// import ahly from "../alahliLogo.png";
// import alrajhi from "../alrajhiLogo.png";
// import albilad from "../albiladLogo.png";
// import alfransi from "../alfransiLlogo.png";
// import alinma from "../alinmaLogo.png";
// import sab from "../sabLogo.png";
// import html2canvas from "html2canvas";
// import Canvas2Image from "canvas2image";
// import Button from 'react-bootstrap/Button';

// import Modal from 'react-bootstrap/Modal';



// export default function MyVerticallyCenteredModalOut(props) {
//   const [userEdit, setUserEdit] = useState({
//     editReal: "",
//     net: "net",
//     phoneUser: "050...",
//     nameUser: "احمد القحطاني",
//   });

//   const [plus, setPlus] = useState(0);

//   const changeUserFieldHandlerplus = (e) => {
//     setPlus(e.target.value);
//   };

//   if (props.dark) {
//     var textMode = "داكن";
//     var backgroundColor = "#F2F2F2";
//     var ic1 = faMoon;
//     var classRotate = 0;
//     var classColor = "model-light";
//     var tableDark = "";
//     var backColor = "link-log-props.dark  props.dark-buttom-about";
//     var text = "black";
//     var borderStyle = "3px solid rgb(41 45 72)";
//   } else {
//     var textMode = "فاتح";
//     var backgroundColor = "#222A44";
//     var ic1 = faCircleHalfStroke;
//     var classRotate = 180;
//     var classColor = "#050505";
//     var tableDark = "table-props.dark";
//     var backColor = "link-log-props.dark  props.dark-buttom-about  back-color";
//     var text = "white";
//     var borderStyle = " 3px solid #b6b1ff";
//   }

//   //======================================
//   if (props.input.realEstateBank === "alahli") {
//     var imageBank = ahly;
//   } else if (props.input.realEstateBank === "alrajhi") {
//     var imageBank = alrajhi;
//   } else if (props.input.realEstateBank === "albilad") {
//     var imageBank = albilad;
//   } else if (props.input.realEstateBank === "alfransi") {
//     var imageBank = alfransi;
//   } else if (props.input.realEstateBank === "alinma") {
//     var imageBank = alinma;
//   } else if (props.input.realEstateBank === "sab") {
//     var imageBank = sab;
//   } else {
//     var imageBank = "";
//   }
//   //=====================================

//   var totalDurationOut = props.data.totalDurationN;

//  var installmentMinistryDefense= props.data.installmentMinistryDefense
//  var durationMinistryDefense=props.data.durationMinistryDefense
//   if (
//     props.data.installmentMinistryDefense == 0 ||
//     props.data.installmentMinistryDefense == ""
//   ) {
//     var textRealEstateFinance = "التمويل العقاري ";
//     var addMinistryDefense = 0;
//   } else {
//     var textRealEstateFinance = " العقاري و دعم الدفاع ";
//     var addMinistryDefense = 160000;
//   }

//   //========================================================================
//   if (props.input.housingSupport == "baqa" || props.input.housingSupport == "no") {
//     var col1 = "القسط الشهري";
//     var col2 = "";
//     var col3 = "";
//     var col4 = " المده بالاشهر";
//     var displyNone = true;
//     var house = 0;
//     var top = "-160px";

//     var colFirst = props.data.colFirst;
//     var colSecend = props.data.colSecend;
//     var colThrid = props.data.colThrid;
//     var colFouer = 0;


   
//         var durationColFirst = props.data.maxDurationFirstInstallment;
 
    


//         var durationColSecond = props.data.durationBeforeRetirement - durationColFirst;
    
    
     
//        var durationThird = 1 * props.data.durationAfterRetirement;

    


   
//     var durationfour = 0;

//     var outHouse = true;
//     //========================================================================
//   } else {
//     var col1 = "القسط قبل الدعم";
//     var col2 = "الدعم المسترد";
//     var col3 = "القسط بعد الدعم";
//     var col4 = " المده بالاشهر";
//     var displyNone = false;
//     var house = new Intl.NumberFormat().format((~~1 * props.data.house).toFixed(0));
//     var top = "-190px";

//     var colFirst = props.data.colFirst;
//     var colSecend = props.data.colSecend;

//     var colFirstN = props.data.colFirstN;
//     var colSecendN = props.data.colSecendN;

//     var durationColFirst = props.data.maxDurationFirstInstallment;
//     var durationColSecond = Math.min(
//       240 - durationColFirst,
//       1 * props.data.durationBeforeRetirement - durationColFirst
//     );

//     if (props.data.durationBeforeRetirement >= 240) {
//       var colThrid = colSecendN; //200 تقريبي
//       var colThridN = colThrid;

//       var durationThird = Math.max(
//         0,
//         1 * (~~1 * props.data.durationBeforeRetirement - 240)
//       );
//       var durationfour =
//         12 * totalDurationOut -
//         (durationThird + durationColSecond + durationColFirst);

//       if (props.data.durationBeforeRetirement >= 12 * totalDurationOut) {
//         var colFouer = colThrid;
//       } else {
//         var colFouer = props.data.colFouer;
//       }
//     } else {
//       var colFouer = props.data.colFouer;
//       var colThrid = props.data.colThrid;
//       var colThridN = props.data.colThridN;

//       var durationThird = Math.max(
//         0,
//         Math.min(
//           240 - (durationColFirst + durationColSecond),
//           1 * (1 * props.data.durationAfterRetirement)
//         )
//       );
//       var durationfour =
//         12 * totalDurationOut -
//         (durationThird + durationColSecond + durationColFirst);

//       var outHouse = true;
//     }
//   }
//   var durationfourOut = new Intl.NumberFormat().format(durationfour.toFixed(0));

//   //================================
//   const changeUserFieldHandler = (e) => {
//     setUserEdit({
//       ...userEdit,
//       [e.target.name]: e.target.value,
//       [e.target.value]: e.target.value,
//     });
//   };

//   //===============================

//   var tonumber = parseInt(1 * userEdit.editReal);
//   if (userEdit.editReal === "") {
//     var realEstateFinanceFinal = (~~1 * props.data.outReal) / 1;
//     var totaledit =
//       (~~1 *
//         (1 * props.data.outPresonal +
//           1 * props.data.outBaqa +
//           1 * props.data.outReal +
//           1 * props.data.outAddministryDefense)) /
//         1 +
//       (~~1 * plus) / 1;
//   } else {
//     var realEstateFinanceFinal = tonumber;
//     var totaledit =
//       (~~1 *
//         (realEstateFinanceFinal +
//           1 * props.data.outPresonal +
//           1 * props.data.outBaqa +
//           1 * props.data.outAddministryDefense)) /
//         1 +
//       (~~1 * plus) / 1;
//   }

//   if (props.data.outReal === 0 && userEdit.editReal === "") {
//     var netNet = 0;
//   } else if (userEdit.net == "net") {
//     if (props.input.firstHouse === "yes") {
//       if (props.input.downPayment === "10") {
//         var netT = totaledit / 0.9;
//         var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
//         var netT2 = (netT * 2.5) / 100;
//         var net3 = 0 * netT2;
//         var netNet = totaledit - netT1 - netT2 - net3 - 5700;
//       } else if (props.input.downPayment === "5") {
//         var netT = totaledit / 0.95;
//         var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
//         var netT2 = (netT * 2.5) / 100;
//         var net3 = 0 * netT2;
//         var netNet = totaledit - netT1 - netT2 - net3 - 5700;
//       } else if (props.input.downPayment === "20") {
//         var netT = totaledit / 0.8;
//         var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
//         var netT2 = (netT * 2.5) / 100;
//         var net3 = 0 * netT2;
//         var netNet = totaledit - netT1 - netT2 - net3 - 5700;
//       } else {
//         var netT = totaledit / 0.7;
//         var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
//         var netT2 = (netT * 2.5) / 100;
//         var net3 = 0 * netT2;
//         var netNet = totaledit - netT1 - netT2 - net3 - 5700;
//       }
//     } else {
//       if (props.input.downPayment === "10") {
//         var netT = totaledit / 0.9;
//         var netT1 = (netT * 5) / 100;
//         var netT2 = (netT * 2.5) / 100;
//         var net3 = 0 * netT2;
//         var netNet = totaledit - netT1 - netT2 - net3 - 5700;
//       } else if (props.input.downPayment === "5") {
//         var netT = totaledit / 0.95;
//         var netT1 = (netT * 5) / 100;
//         var netT2 = (netT * 2.5) / 100;
//         var net3 = 0 * netT2;
//         var netNet = totaledit - netT1 - netT2 - net3 - 5700;
//       } else if (props.input.downPayment === "20") {
//         var netT = totaledit / 0.8;
//         var netT1 = (netT * 5) / 100;
//         var netT2 = (netT * 2.5) / 100;
//         var net3 = 0 * netT2;
//         var netNet = totaledit - netT1 - netT2 - net3 - 5700;
//       } else {
//         var netT = totaledit / 0.7;
//         var netT1 = (netT * 5) / 100;
//         var netT2 = (netT * 2.5) / 100;
//         var net3 = 0 * netT2;
//         var netNet = totaledit - netT1 - netT2 - net3 - 5700;
//       }
//     }
//   } else {
//     var netNet = totaledit;
//   }
//   console.log(netNet, typeof netNet);

//   // var netChiqe=new Intl.NumberFormat().format(netNet.toFixed(0))
//   var totaleditStyle = new Intl.NumberFormat().format(totaledit.toFixed(0));
//   var netChiqe = new Intl.NumberFormat().format(netNet.toFixed(0));

//   var realOutTotal = realEstateFinanceFinal + addMinistryDefense;

//   var realStyle = new Intl.NumberFormat().format(realOutTotal.toFixed(0));

//   var personStyle = new Intl.NumberFormat().format(
//     (~~1 * props.data.outPresonal).toFixed(0)
//   );

//   if (durationColFirst === 0) {
//     var text1 = false;
//   } else {
//     var text1 = true;
//   }

//   if (durationColSecond === 0) {
//     var text2 = false;
//     var next = "الفتره الثالثة";
//   } else {
//     var text2 = true;
//   }

//   if (durationThird === 0) {
//     var text3 = false;
//     var next = "الفتره الثانية";
//   } else {
//     var text3 = true;
//   }

//   if (durationfourOut === 0) {
//     var text4 = false;
//   } else {
//     var text4 = true;
//   }

//   const printPdf = () => {
//     window.print();
//   };






  
//   var namePhoto = props.input.name + ".png";

//   // function capture() {
//   //   html2canvas(document.body).then((canvas) => {
      
//   //     let a = document.createElement("a");
//   //     a.download = namePhoto;
//   //     a.href = canvas.toDataURL("image/png");
//   //     // a.href = canvas.toDataURL("image/jpeg");
//   //     a.click();
//   //   });
//   // }




  
//   function capture() {
//     html2canvas(document.querySelector('#modal-content')).then((canvas) => {
      

//       let a = document.createElement("a");
//       a.download = namePhoto;
//       a.href = canvas.toDataURL("image/png");
//       // a.href = canvas.toDataURL("image/jpeg");
//       // var base64image = canvas.toDataURL("image/png");
//       // window.open(base64image , "_blank");
//       a.click();
//     });
//   }


// //   function capture() {
// //     const captureElement = document.querySelector('#modal') 
// //     html2canvas(captureElement)
// //         .then(canvas => {
// //             canvas.style.display = 'none'
// //             document.body.appendChild(canvas)
// //             return canvas
// //         })
// //         .then(canvas => {
// //             const image = canvas.toDataURL('image/png')
// //             const a = document.createElement('a')
// //             a.setAttribute('download', namePhoto)
// //             a.setAttribute('href', image)
// //             a.click()
          
// //             canvas.remove()
// //         })
// // }









//   // function capture() {
    



//   //   html2canvas(document.querySelector('#modal-content')).then(canvas=>{
 
//   //     document.body.appendChild(canvas);
      
//   //   })
            
//   //  }
  


//   //   const capture= ()=> {

//   //     html2canvas($('body'),
//   //     {
//   //         onrendered: function (canvas) {
//   //             var imgString = canvas.toDataURL("image/png");
//   //             window.open(imgString);
//   //         }
//   //     }
//   // )
//   // }

//   // const para = document.createElement("p");
//   // para.innerHTML = "This is a paragraph.";
//   // document.getElementById("myDIV").appendChild(para);









//   // html2canvas(document.getElementById("main"), {
//   //   allowTaint: true,
//   //   useCORS: true,
//   // })
//   // .then(function (canvas) {
//   //   // It will return a canvas element
//   //   let image = canvas.toDataURL("image/png", 0.5);
//   // })
//   // .catch((e) => {
//   //   // Handle errors
//   //   console.log(e);
//   // });
  





//   //  function capture() {
    



//   //   html2canvas(document.querySelector('#modal'), {
//   //           onrendered: function(canvas) {
//   //               // document.body.appendChild(canvas);
//   //             return Canvas2Image.saveAsPNG(canvas);
//   //           }
//   //       });
//   //  }


     

//   // document.querySelector('button').addEventListener('click', function() {
//   //   html2canvas(document.querySelector('.specific'), {
//   //       onrendered: function(canvas) {
//   //           // document.body.appendChild(canvas);
//   //         return Canvas2Image.saveAsPNG(canvas);
//   //       }
//   //   });
//   // });

//   if (props.showOut) {
//     console.log(props.showOut)

// return(
//     <Modal {...props}   animation={true}     size="lg"
//     aria-labelledby="contained-modal-title-vcenter"
//     centered className={props.dark?"":"props.dark-lib"} >

//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//         <h5 style={{color:props.dark?"black":"white"}}>تفاصيل الحسبة </h5>
//         </Modal.Title>
//       </Modal.Header>
      
//       <Modal.Body >
       
        

//         <div id="modal" className="section-to-print  specific">
//         <div
//           id="modal-content"
//           className="phone-width"
//           style={{
//             backgroundColor: props.dark ? "#F2F2F2" : "#222A44",
//             color: props.dark ? "black" : "white",

//             marginTop: top,
//             border: borderStyle,
//             padding: "15px 15px 5px 15px",

//             position: "fixed",
//             right: "50%",
//             top: "5%",
//           }}
//         >
//           <div className="table-outData">
//             <table>
//               <thead>
//                 <tr style={{ height: "50px", display: "table-row" }}>
//                   <th>
//                     {" "}
//                     <img
//                       alt=""
//                       src={imageBank}
//                       className={props.dark ? "loge-right" : "imageWtoB-right"}
//                       style={{ right: "30px" }}
//                     />
//                   </th>
//                   <th
//                     colspan="3"
//                     className="show-eskan"
//                     style={{ verticalAlign: "top", position: "relative" }}
//                   >
//                     اسكان سلمان العقارية
//                   </th>
//                   <th>
//                     <img
//                       alt=""
//                       src={im}
//                       className={props.dark ? "loge-left" : "imageWtoB"}
//                       style={{}}
//                     />
//                   </th>
//                   {/* <th><img alt="" src={im} className={ props.dark ? "loge-left" : "imageWtoB" } style={{ marginLeft: "15px", height:"35px",width:"80px"}} /></th> */}
//                 </tr>
//               </thead>
//               <tbody className={tableDark}>
//                 <tr>
//                   <td> {textRealEstateFinance}</td>
//                   <td colspan="2">{realStyle}</td>

//                   <td>قرض اضافي</td>
//                   <td style={{ padding: "0 7px", marginTop: "3px" }}>
//                     <props.input
//                       name="netSalary"
//                       value={plus}
//                       onChange={(e) => changeUserFieldHandlerplus(e)}
//                       //  // onKeyDown={checkLength}
//                       maxLength="8"
//                       type="number"
//                       style={{
//                         marginBottom: "0px",
//                         height: "30px",
//                         width: "80%",
//                         backgroundColor: props.dark ? "#F2F2F2" : "#222A44",
//                         color: props.dark ? "black" : "white",
//                         padding: "0px",
//                       }}
//                     />
//                   </td>
//                 </tr>

//                 <tr>
//                   <td>شخصي جديد</td>
//                   <td colspan="2">{personStyle}</td>

//                   <td>الاجمالي</td>
//                   <td>{totaleditStyle}</td>
//                 </tr>

//                 <tr>
//                   <td> {props.data.nameAmountHousingSupport}</td>
//                   <td colspan="2">{props.data.amountHousingSupport}</td>

//                   <td>صافي العقار</td>
//                   <td>{netChiqe}</td>
//                 </tr>
//                 <tr
//                   style={{
//                     justifyContent: "center",
//                     backgroundColor: props.dark ? "#d5e2ef" : "black",
//                     padding: " 1px 0",
//                   }}
//                 >
//                   <td
//                     colspan="5"
//                     style={{ color: "#198754", fontWeight: "bold" }}
//                   >
//                     تفاصيل الاقساط
//                   </td>
//                 </tr>

//                 <tr>
//                   <td>فترات التمويل</td>
//                   <td colSpan={displyNone ? "2" : ""}>{col1}</td>
//                   <td style={{ display: displyNone ? "none" : "" }}>{col2}</td>
//                   <td style={{ display: displyNone ? "none" : "" }}>{col3}</td>
//                   <td colSpan={displyNone ? "2" : ""}>{col4}</td>
//                 </tr>

//                 <tr className={text1 ? "showText" : "hidden"}>
//                   <td>الفترة الاولي</td>
//                   <td colSpan={displyNone ? "2" : ""}>{colFirst}</td>
//                   <td style={{ display: displyNone ? "none" : "" }}>{house}</td>
//                   <td style={{ display: displyNone ? "none" : "" }}>
//                     {colFirstN}
//                   </td>
//                   <td colSpan={displyNone ? "2" : ""}>{durationColFirst}</td>
//                 </tr>

//                 <tr className={text2 ? "" : "hidden"}>
//                   <td> {text1 ? "الفتره الثانية" : "الفترة الاولي"}</td>
//                   <td colSpan={displyNone ? "2" : ""}>{colSecend}</td>
//                   <td style={{ display: displyNone ? "none" : "" }}>{house}</td>
//                   <td style={{ display: displyNone ? "none" : "" }}>
//                     {colSecendN}
//                   </td>
//                   <td colSpan={displyNone ? "2" : ""}>{durationColSecond}</td>
//                 </tr>

//                 <tr className={text3 ? "" : "hidden"}>
//                   <td>
//                     {text2 && text1 ? "الفترة الثالثة" : "الفترة الثانية"}{" "}
//                   </td>
//                   <td colSpan={displyNone ? "2" : ""}>{colThrid}</td>
//                   <td style={{ display: displyNone ? "none" : "" }}>
//                     {outHouse ? house : "---"}
//                   </td>
//                   <td style={{ display: displyNone ? "none" : "" }}>
//                     {colThrid == 0 ? 0 : colThridN}
//                   </td>
//                   <td colSpan={displyNone ? "2" : ""}>{durationThird}</td>
//                 </tr>

//                 <tr
//                   className={displyNone || text4 === false ? "none hidden" : ""}
//                   style={{
//                     display:
//                       displyNone || text4 === false ? "none" : "table-row",
//                   }}
//                 >
//                   <td> الفترة الاخيرة</td>
//                   <td>{colFouer}</td>
//                   <td>---</td>
//                   <td>{colFouer}</td>
//                   <td>{durationfourOut}</td>
//                 </tr>

//                 <tr>
//                   <td> مده التمويل</td>
//                   <td>{props.data.totalDuration}</td>
//                   <td>{"ا/" + props.input.name}</td>
//                   <td style={{ paddingLeft: "0px" }}>
//                     <props.input
//                       name="nameUser"
//                       value={userEdit.nameUser}
//                       onChange={(e) => changeUserFieldHandler(e)}
//                       //  // onKeyDown={checkLength}
//                       maxLength="50"
//                       type="text"
//                       style={{
//                         marginBottom: "0px",
//                         height: "30px",
//                         width: "100%",
//                         backgroundColor: props.dark ? "#F2F2F2" : "#222A44",
//                         color: props.dark ? "black" : "white",
//                         padding: "0px",
//                       }}
//                     />
//                   </td>
//                   <td>
//                     <props.input
//                       name="phoneUser"
//                       value={userEdit.phoneUser}
//                       onChange={(e) => changeUserFieldHandler(e)}
//                       //  // onKeyDown={checkLength}
//                       maxLength="50"
//                       type="number"
//                       style={{
//                         marginBottom: "0px",
//                         height: "30px",
//                         width: "100%",
//                         backgroundColor: props.dark ? "#F2F2F2" : "#222A44",
//                         color: props.dark ? "black" : "white",
//                         padding: "0px",
//                       }}
//                     />
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           {/* <button type="button"  class="btn-close close-top " props.data-bs-dismiss="alert" aria-label="Close" style={{}}></button> */}
         
//         </div>
//         </div>








      
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>اغلاق</Button>
//         <div style={{ marginTop: "8px" }} id="not-print">
//             <props.input
//               name="editReal"
//               placeholder="التمويل يدوي"
//               // onKeyDown={checkLength}
//               maxLength="8"
//               type="number"
//               style={{
//                 width: "31%",
//                 margin: "0 0 0 4px",
//                 display: "inline-block",
//                 height: "33px",
//               }}
//               value={userEdit.editReal}
//               onChange={(e) => changeUserFieldHandler(e)}
//             />

//             <select
//               style={{ width: "31% ", display: "inline-block", height: "33px" }}
//               value={userEdit.net}
//               onChange={(event) => {
//                 setUserEdit({
//                   ...userEdit,
//                   net: event.target.value,
//                 });
//               }}
//             >
//               <option value="net">خصم المصروفات</option>
//               <option value="alaa">بدون خصم</option>
//             </select>

//             <button
//               className="btn btn-secondary"
//               style={{
//                 display: "inline-block",
//                 width: " 17%",
//                 padding: "4px",
//                 marginTop: " -5px",
//                 marginLeft: "4px",
//               }}
//               onClick={printPdf}
//             >
//               طباعه
//             </button>

//             <button
//               className="btn btn-secondary"
//               style={{
//                 display: "inline-block",
//                 width: " 17%",
//                 padding: "4px",
//                 marginTop: " -5px",
//               }}
//               onClick={capture}
//             >
//               صورة
//             </button>

//             {/* <button type="button" className="btn btn-default button">Take a Screenshot!</button> */}
//           </div>
//       </Modal.Footer>
//     </Modal>


    
//     );
//   } else {
//     return <></>;
//   }
// }
