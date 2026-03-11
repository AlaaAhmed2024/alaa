
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./first.css"
import jsPDF from 'jspdf';


// import arabicReshaper from 'arabic-reshaper';
import bidi from 'bidi-js';
import 'jspdf-autotable';





import reshape from "arabic-reshaper";
import '../offers/amiri-normal'; // لا حاجة لتصدير — التحميل يتم تلقائيًا

import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';

import { amiriFont } from '../offers/amiri-normal'; // ملف الخط بصيغة base64








import html2canvas from 'html2canvas';
import React, { useRef } from 'react';
export default function Second(props) {

window.logoBase64 =

      "data:image/png;base64,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"


  const generateSndPdf = (props , mode = "save") => {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  doc.addFileToVFS("Amiri-Regular.ttf", amiriFont);
  doc.addFont("Amiri-Regular.ttf", "Amiri", "normal");
  doc.setFont("Amiri");
  doc.setFontSize(14);

  // ✅ رسم الحدود
  doc.setDrawColor(0, 0, 0);
  doc.rect(10, 10, pageWidth - 20, pageHeight - 20);

  let y = 30;

  // ✅ العنوان في المنتصف
  doc.setFontSize(14);
  doc.text("(سند لأمر)", pageWidth / 2, y, { align: "center" });
  y += 17;

  // ✅ التاريخ يمين والمبلغ يسار داخل مستطيل أصفر
  doc.setFontSize(12);
  doc.text(
    `تاريخ السند: ${props.input.nowYear}/${props.input.nowMonth}/${props.input.nowDay}`,
    pageWidth - 15,
    y,
    { align: "right" }
  );

  const rectX = 12;
  const rectY = y - 6;
  const rectW = 38;
  const rectH = 10;

  doc.setFillColor(255, 255, 0);
  doc.setDrawColor(0, 0, 0);
  doc.rect(rectX, rectY, rectW, rectH, "FD");
  doc.setTextColor(0, 0, 0);
  doc.text(`المبلغ: ${props.number}`, rectX + rectW / 2, rectY + 7, {
    align: "center",
  });

  y += 13;

  const lines = [
    `مكان إنشاء السند: ${props.input.branch}`,
    `ميعاد الاستحقاق: ${props.input.addYear}/${props.input.addMonth}/${props.input.addDay}`,
    "مكان الوفاء: الرياض",
    "اسم من يجب الوفاء لأمره: شركة إسكان سلمان العقارية",
    "بطاقة رقم: 1010657719",
    `قيمة السند: ${props.data} ريال سعودي فقط لا غير`,
    `بموجب هذا أتعهد أنا: ${props.input.customerName}`,
  ];

  lines.forEach((line) => {
    doc.text(line, pageWidth - 15, y, { align: "right" });
    y += 9;
  });

  // ✅ الجنسية والبطاقة بنفس السطر
  doc.text("الجنسية: سعودي", pageWidth - 15, y, { align: "right" });
  doc.text(`بطاقة رقم: ${props.input.customerId}`, pageWidth - 75, y, {
    align: "right",
  });
  y += 9;

  doc.text(`عنواني: ${props.input.customerCity}`, pageWidth - 15, y, {
    align: "right"
  });
  y += 9;

  doc.text(
    "بأن أدفع دون قيد أو شرط لأمر: شركة إسكان سلمان العقارية",
    pageWidth - 15,
    y,
    { align: "right" }
  );
  y += 9;

  doc.text("الجنسية: سعودي", pageWidth - 15, y, { align: "right" });
  doc.text("بطاقة رقم: 1010657719", pageWidth - 75, y, { align: "right" });
  y += 9;

  const otherLines = [
    `المبلغ المنصوص عليه أعلاه وقدره: ${props.data} ريال سعودي فقط لا غير`,
    `وإن للمستفيد حق الرجوع إلى الدوائر المختصة بموجب النظام السعودي للأوراق التجارية مع إعفائه من إجراءات`,
    `. الأحتجاج وكافة المصاريف التي يتم تكبدها في سبيل تنفيذ تحصيله`,
  
  ];

  otherLines.forEach((line) => {
    doc.text(line, pageWidth - 15, y, { align: "right" });
    y += 9;
  });






  // ✅ اسم محرر السند (يسار) + التوقيع تحته مباشرة بمحاذاة الاسم
  const fullText = `اسم محرر السند: ${props.input.customerName}`;
  doc.text(fullText, 15, y, { align: "left" });
  y += 9;
   // ✅ التوقيع تحت نهاية السطر مباشرة
  const fullWidth = doc.getTextWidth(fullText);
  doc.text(": التوقيع", 15 + fullWidth, y, { align: "right" });


  y += 13;

  const notice =   [
  `( هذا السند واجب الدفع بدون تعلل بموجب قرار مجلس الوزراء رقم )692( بتاريخ )26/9/1383 هـ `,
  `. و المتوج بالمرسوم الملكي رقم )37( بتاريخ )11/10/1383 هـ( من نظام الأوراق التجارية `
  ]

  const noticeLines = doc.splitTextToSize(notice, pageWidth - 30);
  const boxHeight = noticeLines.length * 7 + 4;

  doc.setFillColor(255, 255, 0);
  doc.setDrawColor(0, 0, 0);
  doc.rect(12, y, pageWidth - 24, boxHeight, "FD");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(12);
  doc.text(noticeLines, pageWidth - 15, y + 8, { align: "right" });

  // if (window.logoBase64) {
  //   if (doc.setGState) doc.setGState(new doc.GState({ opacity: 0.08 }));
  //   const imgW = 100;
  //   const imgH = 120;
  //   const centerX = (pageWidth - imgW) / 2;
  //   const centerY = (pageHeight - imgH) / 2;
  //   doc.addImage(window.logoBase64, "PNG", centerX, centerY, imgW, imgH);
  //   if (doc.setGState) doc.setGState(new doc.GState({ opacity: 1 }));
  // }

  // doc.save("سند-لامر-العميل.pdf");
    // ✅ الحفظ أو الطباعة
  if (mode === "print") {
    doc.autoPrint();
    window.open(doc.output("bloburl"), "_blank");
  } else {
    
      doc.save(`سند-لامر-العميل أ/${props.input.customerName}.pdf`);
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
    
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    
        // هنا تكتب الاسم اللي تبغاه للملف
      

        var textName="سند لامر عميل "+ props.input.customerName+".pdf"
        pdf.save(textName);
      };











        


//   const doc = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });

//   doc.addFileToVFS('Amiri-Regular.ttf', amiriFont);
//   doc.addFont('Amiri-Regular.ttf', 'Amiri', 'normal');
//   doc.setFont('Amiri');
//   doc.setFontSize(12);

//   const element = pageRef.current;

// doc.html(element, {
//   callback: function (doc) {
//     doc.setFont('Amiri');
//     doc.save("سند لامر عميل " + props.input.customerName + ".pdf");
//   },
//   margin: 10,
//   autoPaging: 'text',
//   html2canvas: {
//     scale: 2,       // 🟢 جودة أعلى عند الطباعة
//     useCORS: true,  // 🟢 يسمح بتحميل الصور والخطوط الخارجية
//     backgroundColor: null  // ✅ للحفاظ على خلفية العنصر كما هي (وليس بيضاء فقط)
//   },
//   x: 10,
//   y: 10
// })

// }









//   const generatePDF = () => {

 


//   const doc = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' });

//   doc.addFileToVFS('Amiri-Regular.ttf', amiriFont);
//   doc.addFont('Amiri-Regular.ttf', 'Amiri', 'normal');
//   doc.setFont('Amiri');
//   doc.setFontSize(12);

//   const table = pageRef.current;
//   const headers = [];
//   const body = [];
//   const colIndexesToSkip = [];

//   let linkColumnIndex = -1;
//   let xxyColumnIndex = -1; // ✅ لتحديد عرض عمود XXY فقط

//   // 🟡 1. استخراج رؤوس الأعمدة
//   const ths = Array.from(table.querySelectorAll('thead th'));
//   ths.forEach((th, i) => {
//     if (th.classList.contains('no-export')) {
//       colIndexesToSkip.push(i);
//     } else {
//       if (th.classList.contains('is-link-location')) {
//         linkColumnIndex = headers.length;
//         headers.push('موقع العقار');
//       }else if(th.classList.contains('is-link')){
//         headers.push('لينك الإعلان');
//       } else {
//         headers.push(th.innerText.trim());
//       }

//       // ✅ نحفظ فهرس عمود XXY (لأجل cellWidth فقط)
//       if (th.classList.contains('XXY')) {
//         xxyColumnIndex = headers.length - 1;
//       }
//     }
//   });

//   // 🟡 2. استخراج الصفوف
//   const trs = Array.from(table.querySelectorAll('tbody tr'));
//   trs.forEach(tr => {
//     const row = [];
//     Array.from(tr.children).forEach((td, i) => {
//       if (!colIndexesToSkip.includes(i)) {
//         const isLink = td.classList.contains('is-link');
//         const href = td.querySelector('a')?.href || '';
//         row.push({ text: isLink ? '' : td.innerText.trim(), isLink, href });
//       }
//     });
//     body.push(row);
//   });

//   // 🟡 3. إنشاء جدول PDF
//   autoTable(doc, {
//     head: [headers],
//     body: body.map(row =>
//       row.map(cell => (cell.isLink ? '' : cell.text))
//     ),
//     styles: {
//       font: 'Amiri',
//       fontStyle: 'normal',
//       halign: 'right',
//           valign: 'middle',
//     },
//     headStyles: {
//       fillColor: [41, 128, 185],
//       textColor: 255,
//       halign: 'right',
//           valign: 'middle',
//     },
//     margin: { top: 10, right: 10, left: 10 },

//     // ✅ تخصيص عرض الأعمدة باستخدام className
//     columnStyles: {
//       // ...(linkColumnIndex !== -1 && { [linkColumnIndex]: { cellWidth: 120 } }),
//       ...(xxyColumnIndex !== -1 && { [xxyColumnIndex]: { cellWidth: 180 } }),
//     },

//     // ✅ رسم رابط "اضغط هنا" في خلايا is-link فقط
//     // didDrawCell: (data) => {
//     //   const rowIdx = data.row.index;
//     //   const colIdx = data.column.index;
//     //   const cell = body?.[rowIdx]?.[colIdx];

//     //   if (cell?.isLink && cell.href?.startsWith('http')) {
//     //     doc.setTextColor(0, 0, 255);
//     //     doc.textWithLink('اضغط هنا', data.cell.x + 5, data.cell.y + 10, {
//     //       url: cell.href,
//     //     });
//     //     doc.setTextColor(0, 0, 0);
//     //   }
//     // },







// //     didDrawCell: (data) => {
// //   const rowIdx = data.row.index;
// //   const colIdx = data.column.index;
// //   const cell = body?.[rowIdx]?.[colIdx];

// //   if (cell?.isLink && cell.href?.startsWith('http')) {
// //     doc.setTextColor(0, 0, 255);

// //     // 🟢 حساب منتصف ارتفاع الخلية تقريبًا
// //     const text = 'اضغط هنا';
// //     const textHeight = 12; // أو استخدم: doc.getFontSize()
// //     const yCentered = data.cell.y + (data.cell.height + textHeight) / 2 - 2;

// //     doc.textWithLink(text, data.cell.x + 5, yCentered, {
// //       url: cell.href,
// //     });

// //     doc.setTextColor(0, 0, 0);
// //   }
// // },







// didDrawCell: (data) => {
//   const rowIdx = data.row.index;
//   const colIdx = data.column.index;
//   const cell = body?.[rowIdx]?.[colIdx];

//   if (data.section === 'body' && cell?.isLink && cell.href?.startsWith('http')) {
//     doc.setTextColor(0, 0, 255);

//     const text = 'اضغط هنا';
//     const textHeight = doc.getFontSize(); // أو 12 حسب ما استخدمته
//     const textWidth = doc.getTextWidth(text);

//     const yCentered = data.cell.y + (data.cell.height + textHeight) / 2 - 2;
//     const xRightAligned = data.cell.x + data.cell.width - textWidth - 5; // 5px padding من اليمين

//     doc.textWithLink(text, xRightAligned, yCentered, {
//       url: cell.href,
//     });

//     doc.setTextColor(0, 0, 0);
//   }
// }





//   });

//   doc.save('عرض.pdf');
// }
  
 
// const generatePDF = () => {
//   const doc = new jsPDF({
//     orientation: 'portrait',
//     unit: 'pt',
//     format: 'a4'
//   });

//   doc.addFileToVFS('Amiri-Regular.ttf', amiriFont);
//   doc.addFont('Amiri-Regular.ttf', 'Amiri', 'normal');
//   doc.setFont('Amiri');
//   doc.setFontSize(14);

//   const page = pageRef.current;
  
//   // ✅ نقرأ فقط الفقرات النصية
 

//   const paragraphs = Array.from(page.querySelectorAll('p, div'))
//   .filter(el => {
//     // تجاهل العناصر التي بداخلها عناصر نصية أخرى
//     return el.childElementCount === 0 || el.tagName === 'P';
//   });

//   let y = 40;
//   const lineSpacing = 25;

//   paragraphs.forEach(el => {
//     const style = window.getComputedStyle(el);
//     let text = el.innerText.trim();
//     if (!text) return;

//     const align = style.textAlign === 'center'
//       ? 'center'
//       : (style.float === 'left' ? 'left' : 'right');

//     let x = 40;
//     if (align === 'right') x = doc.internal.pageSize.getWidth() - 40;
//     else if (align === 'center') x = doc.internal.pageSize.getWidth() / 2;

//     const bgColor = style.backgroundColor;
//     if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
//       const width = doc.getTextWidth(text) + 10;
//       doc.setFillColor(...bgColor.replace(/[^\d,]/g, '').split(',').map(Number));
//       doc.rect(x - width, y - 14, width, 20, 'F');
//     }

//     doc.text(text, x, y, { align });

//     y += lineSpacing;
//     if (y > doc.internal.pageSize.getHeight() - 40) {
//       doc.addPage();
//       y = 40;
//     }
//   });

//   doc.save('سند.pdf');
// };




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
          سند لامر عميل
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
        <div class="book all" >
    <div class="page"   
    
    ref={pageRef}
    style={{ direction: 'rtl', textAlign: 'right'}}
    // style={{ fontFamily: 'Amiri', padding: 20 }}
    
    >
        <div class="subpage">


            <p style={{textAlign: "center"}}>(سند لأمر )</p>
            <div>
            <p style={{    float: "right"}}> { " تاريخ السند   :  " + props.input.nowYear+"/"+ props.input.nowMonth+"/"+props.input.nowDay}</p>
            <p style={{   backgroundColor: "yellow",
    width: "130px",
    border:" 1PX solid",
    padding: "1px 5px 1px 1px",   float: "left"}}> { "  المبلغ   :  " + props.number }</p>
            
            </div>
            <div style={{clear: "both"}}>
            { "   مكان إنشاء السند:  " + props.input.branch }
            </div>

            <div>

            
            { "   ميعاد الاستحقاق:  " + props.input.addYear+"/" +props.input.addMonth+"/"+props.input.addDay}
           
            </div>

            <div>
            مكان الوفاء: الرياض 
           
           </div>
           
            
           <div>
           اسم من يجب الوفاء لأمره:  شركة إسكان سلمان العقارية 
           </div>



           <div>
            
بطاقة رقم:  1010657719
           </div>

           
           <div>
           { "     قيمة السند :   " +props.data +"  ريال سعودي فقط لاغير  "}
           
           </div>

           <div>
            { " بموجب هذا أتعهد أنا :  " + props.input.customerName }
              
            </div>


            <div >
            <p style={{float: "right"}}>الجنسية:  سعودي      </p>
<p style={{    marginRight: "250px"}}>
{ "     بطاقة رقم :  " + props.input.customerId }
    
    </p>


            </div>


<div style={{clear: "both"}}>
{ "  عنواني:   " + props.input.customerCity }



</div>


<div>
بأن أدفع دون قيد او شرط لأمر:  شركة إسكان سلمان العقارية 

</div>


<div>
          
            <p  style={{float: "right"}}>الجنسية: سعودي   </p>
            <p style={{    marginRight: "250px"}}>
                   بطاقة رقم:  1010657719
                
                  </p>
            </div>



            <div style={{clear: "both"}}>
              

            { "   المبلغ المنصوص عليه أعلاه وقدره:    " + props.data +"  ريال سعودي فقط لاغير  "}
                
            </div>



            <div>
              <p>  وإن للمستفيد حق الرجوع إلى الدوائر المختصة بموجب النظام السعودي للأوراق التجارية مع إعفائه من إجراءات الأحتجاج وكافة المصاريف التي يتم تكبدها في سبيل تنفيذ تحصيله.</p>
        
            </div>


<div style={{    float: "left"}}>

<div>

{ "    إسم محرر السند:  " + props.input.customerName }
    
            </div>


            <div style={    {margin: "10px 0 20px 0"}}>
            التوقيع:  
            </div>

</div>



<div style={{border: "1px solid",
    padding:" 5px", backgroundColor: "yellow" ,     clear: "both"}}>

هذا السند واجب الدفع بدون تعلل بموجب قرار مجلس الوزراء رقم (692) بتاريخ (26/9/1383 هـ) والمتوج بالمرسوم الملكي رقم (37) بتاريخ (11/10/1383 هـ) من نظام الأوراق التجارية.

</div>


                                


                  





                                                          


            
            
            
            
            </div>    
    </div>
  
</div>
      </Modal.Body>
      <Modal.Footer>
        <Button  variant="outline-danger" onClick={props.onHide}>Close</Button>
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







