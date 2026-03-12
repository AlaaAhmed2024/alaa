
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./first.css"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import React, { useRef } from 'react';
import head from '../logo-head-dec.png'


import reshape from "arabic-reshaper";
import '../offers/amiri-normal'; // لا حاجة لتصدير — التحميل يتم تلقائيًا

import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';

import { amiriFont } from '../offers/amiri-normal'; // ملف الخط بصيغة base64




export default function Therd(props) {




window.logoBase64 =

      "data:image/png;base64,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"








// const generateSndPdf = (props) => {
//   const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
//   const pageWidth = doc.internal.pageSize.getWidth();
//   const pageHeight = doc.internal.pageSize.getHeight();

//   doc.addFileToVFS("Amiri-Regular.ttf", amiriFont);
//   doc.addFont("Amiri-Regular.ttf", "Amiri", "normal");
//   doc.setFont("Amiri");
//   doc.setFontSize(14);

//   // ✅ رأس الصفحة
//   doc.setFontSize(13);
//   doc.text("شركة", pageWidth - 20, 20, { align: "right" });
//   doc.text("إسكان سلمان العقارية", pageWidth - 20, 28, { align: "right" });
//   doc.text("س . ت : 1010657719", pageWidth - 20, 36, { align: "right" });

//   doc.text("Eskan Salman", 20, 20, { align: "left" });
//   doc.text("Real Estate Company", 20, 28, { align: "left" });
//   doc.text("C.R: 1010657719", 20, 36, { align: "left" });

//   // ✅ الشعار الواضح في رأس الصفحة (منتصف العرض)
//   if (window.logoBase64) {
//     const logoW = 45;
//     const logoH = 45;
//     const logoX = (pageWidth - logoW) / 2;
//     const logoY = 10;
//     doc.addImage(window.logoBase64, "PNG", logoX, logoY, logoW, logoH);
//   }

//   // ✅ الشعار الخفيف (منتصف الصفحة)
//   if (window.logoBase64 && doc.setGState) {
//     doc.setGState(new doc.GState({ opacity: 0.08 }));
//     const imgW = 100;
//     const imgH = 120;
//     const centerX = (pageWidth - imgW) / 2;
//     const centerY = (pageHeight - imgH) / 2;
//     doc.addImage(window.logoBase64, "PNG", centerX, centerY, imgW, imgH);
//     doc.setGState(new doc.GState({ opacity: 1 }));
//   }

//   // ✅ التاريخ
//   let y = 60;
//   doc.setFontSize(12);
//   doc.text(`التاريخ: ${props.input.nowYearH}/${props.input.nowMonthH}/${props.input.nowDayH}`, pageWidth - 15, y, { align: "right" });
//   doc.text(`Date: ${props.input.nowYear}/${props.input.nowMonth}/${props.input.nowDay}`, 15, y, { align: "left" });

//   // ✅ خط أفقي واحد تحت التاريخ
//   y += 6;
//   doc.line(20, y, pageWidth - 20, y);
//   y += 14; // زيادة المسافة بعد الخط

//   // ✅ العنوان الرئيسي
//   doc.setFontSize(16);
//   doc.text("إقرار", pageWidth / 2, y, { align: "center" });

//   // ✅ النص الرئيسي
//   doc.setFontSize(13);
//   y += 20;

//   const lines = [
//     "السلام عليكم ورحمة الله وبركاته",
//     `أقر أنا / ${props.input.customerName}`,
//     `حامل هوية وطنية رقم (${props.input.customerId})`,
//     `أقر وأنا بكامل أهليتي القانونية الجائزة شرعاً وقانوناً باستلامي مبلغ (${props.number}) ريال سعودي`,
//     "من شركة إسكان سلمان العقارية وصاحبها مريم عايض غصيبة البلوي بدون أرباح نهائياً.",
//     `وأتعهد باسترجاع هذا المبلغ ${props.input.toEskan} في وقت لا يتجاوز 10 أيام من تاريخ اليوم: ${props.input.nowYear}/${props.input.nowMonth}/${props.input.nowDay}`,
//     "وفي حالة التأخر أتحمل أتعاب المحاماة كاملة وهذا إقرار مني بذلك ..",
//     `الاسم / ${props.input.customerName}`,
//     "التوقيع /",
//     "البصمة /"
//   ];

//   lines.forEach((line) => {
//     doc.text(line, pageWidth - 15, y, { align: "right" });
//     y += 14;
//   });

//   // ✅ حفظ
//   doc.save("اقرار-بدون-ربح.pdf");
// };

const generateSndPdf = (props , mode = "save") => {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  doc.addFileToVFS("Amiri-Regular.ttf", amiriFont);
  doc.addFont("Amiri-Regular.ttf", "Amiri", "normal");
  doc.setFont("Amiri");
  doc.setFontSize(14);

  // ✅ رأس الصفحة
  doc.setFontSize(14);
  doc.text("شركة", pageWidth - 20, 20, { align: "right" });
  doc.text("إسكان سلمان العقارية", pageWidth - 20, 30, { align: "right" });
  doc.text("س . ت : 1010657719", pageWidth - 20, 38, { align: "right" });

  doc.text("Eskan Salman", 20, 20, { align: "left" });
  doc.text("Real Estate Company", 20, 30, { align: "left" });
  doc.text("C.R: 1010657719", 20, 38, { align: "left" });

  // ✅ الشعار الواضح في رأس الصفحة (منتصف العرض) - مصغر
  if (window.logoBase64) {
    const logoW = 25;
    const logoH = 40;
    const logoX = (pageWidth - logoW) / 2;
    const logoY = 10;
    doc.addImage(window.logoBase64, "PNG", logoX, logoY, logoW, logoH);
  }

  // ✅ الشعار الخفيف (منتصف الصفحة)
  if (window.logoBase64 && doc.setGState) {
    doc.setGState(new doc.GState({ opacity: 0.15 }));
    const imgW = 100;
    const imgH = 120;
    const centerX = (pageWidth - imgW) / 2;
    const centerY = (pageHeight - imgH) / 2;
    doc.addImage(window.logoBase64, "PNG", centerX, centerY, imgW, imgH);
    doc.setGState(new doc.GState({ opacity: 1 }));
  }

  // ✅ خط أفقي واحد فوق التاريخ
  let y = 53;
  doc.line(20, y, pageWidth - 20, y);
  y += 11;

  // ✅ التاريخ
  doc.setFontSize(13);
  doc.text(`التاريخ: ${props.input.nowYearH}/${props.input.nowMonthH}/${props.input.nowDayH}`, pageWidth - 15, y, { align: "right" });
  doc.text(`Date: ${props.input.nowYear}/${props.input.nowMonth}/${props.input.nowDay}`, 15, y, { align: "left" });

  y += 15; // زيادة المسافة بعد التاريخ

  // ✅ العنوان الرئيسي
  doc.setFontSize(16);
  doc.text("إقرار", pageWidth / 2, y, { align: "center" });

  // ✅ النص الرئيسي
  doc.setFontSize(13);
  y += 15;

  const lines = [
    "السلام عليكم ورحمة الله وبركاته",
    `أقر أنا / ${props.input.customerName}`,
    `  حامل هوية وطنية رقم  ${props.input.customerId}`,
    ` أقر وأنا بكامل أهليتي القانونية الجائزة شرعاً وقانوناً باستلامي مبلغ ${props.number} ريال سعودي`,
    ". من شركة إسكان سلمان العقارية وصاحبها مريم عايض غصيبة البلوي بدون أرباح نهائياً ",
    `وأتعهد باسترجاع هذا المبلغ ${props.input.toEskan} في وقت لا يتجاوز 10 أيام من تاريخ اليوم: ${props.input.nowYear}/${props.input.nowMonth}/${props.input.nowDay}`,
    ".. وفي حالة التأخر أتحمل أتعاب المحاماة كاملة وهذا إقرار مني بذلك ",
    `الاسم / ${props.input.customerName}`,
    "/  التوقيع ",
    "/ البصمة "
  ];

  lines.forEach((line) => {
    doc.text(line, pageWidth - 15, y, { align: "right" });
    y += 13;
  });

  // ✅ حفظ
  // doc.save("اقرار-بدون-ربح.pdf");

    // ✅ الحفظ أو الطباعة
  if (mode === "print") {
    doc.autoPrint();
    window.open(doc.output("bloburl"), "_blank");
  } else {
   
      doc.save(`اقرار-بدون-ربح أ/${props.input.customerName}.pdf`);
  }
};






 
    const printPdf = () => {
        // window.print();
       
      };

      const pageRef = useRef();











      const handleDownloadPdf = async () => {
        const input = pageRef.current;
    
        const canvas = await html2canvas(input, { windowHeight: 1000 , scale:2 });
        const imgData = canvas.toDataURL('image/png');
        // const marginTop = 5;
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

       
        // pdf.addImage(imgData, 'PNG', 0, marginTop, pdfWidth, pdfHeight);
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

        
    
        // هنا تكتب الاسم اللي تبغاه للملف
        var textName="اقرار بدون ربح  "+ props.input.customerName+".pdf"
        pdf.save(textName);
      };

  


 
      

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fullscreen={true}
     

      className="zindex f-sc-show"

    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        اقرار بدون ربح 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
        <div class="book all">
    <div class="page"  ref={pageRef} style={{ direction: 'rtl', textAlign: 'right' }}>
        <div class="subpage eskan-salman">
          <div style={{display:"flex" , justifyContent:"space-between"}}>
            <div style={{fontSize:"22px"}} >
              <p>شركة </p>
              <p> اسكان سلمان العقارية</p>
              <p>س . ت : 1010657719 </p>
            </div>
            <div>

          <img  style={{height: "140px"}} alt="eskan" src={head}/>
            </div>
            <div style={{textAlign:"left" , fontSize:"22px"}}> 
               <p>Eskan Salman</p>
               <p>Real Estate Company</p>
               <p>C.R: 1010657719</p>
            </div>

          </div>
      <hr></hr>
           
            <div>
            <p style={{    float: "right"}}> { " التاريخ    :  " + props.input.nowYearH+"/"+ props.input.nowMonthH+"/"+props.input.nowDayH}</p>
            <p style={{   
               width: "180px"
             ,   float: "left"}}> { "  Date   :  " + props.input.nowYear+"/"+ props.input.nowMonth+"/"+props.input.nowDay }</p>
             <p style={{textAlign: "center",clear: "both"}}>اقرار</p>
            </div>
            <div style={{clear: "both"}}>



               
           
<div>السلام عليكم ورحمة الله وبركاته</div>
<div>{"  اقر انا   /  " + props.input.customerName}</div>
<div>{"  حامل هوية وطنية رقم   " + "(" +props.input.customerId +")"}</div>
<div>{"اقر وانا بكامل اهليتي القانونية الجائزة شرعاً وقانوناً باستلامي مبلغ "+"(" + props.number +")" +" ريال سعودي"} </div>
<div>  من شركة إسكان سلمان العقارية وصاحبها مريم عايض غصيبة البلوي بدون أرباح نهائيا</div>
<div>{"واتعهد باسترجاع هذا المبلغ  "+props.input.toEskan +" في وقت "}</div>
<div>{"لا يتجاوز 10 أيام  من تاريخ اليوم: " +  props.input.nowYear+"/"+ props.input.nowMonth+"/"+props.input.nowDay}</div>
<div>وفي حالة التأخر اتحمل اتعاب المحاماة  كاملة وهذا إقرار مني بذلك ..  </div>
<div style={{marginTop:"30px"}}>{"  الاسم    /  " + props.input.customerName}</div>
<div style={{marginTop:"25px"}}>التوقيع /</div>
<div style={{marginTop:"25px"}}>البصمة /</div>




                                       



       

                 


                  





                                                          


            
            
            
            </div>  
            </div>    
    </div>
  
</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={props.onHide}>Close</Button>
         {/* <Button variant="outline-secondary"  onClick={printPdf}>طباعة</Button>
         <Button onClick={handleDownloadPdf}> تحميل </Button> */}
                    <Button variant="outline-secondary" onClick={() => generateSndPdf(props, "print")}>
    طباعة 
  </Button>

  <Button variant="outline-success" onClick={() => generateSndPdf(props, "save")}>
    تحميل PDF
  </Button>
      </Modal.Footer>
    </Modal>
  );
}







