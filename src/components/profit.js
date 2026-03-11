import React, { useContext, useEffect, useState } from "react";

import * as XLSX from "xlsx";
import "../offers/amiri-normal"; // لا حاجة لتصدير — التحميل يتم تلقائيًا
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable";
// import { reshape } from 'arabic-reshaper';
import { amiriFont } from "../offers/amiri-normal"; // ملف الخط بصيغة base64
import "../Project1.css";
// import * as reshape from "arabic-reshaper";
import bidi from "bidi-js";

import reshape from "arabic-reshaper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleHalfStroke,
  faMoon,
  faFilePdf,
  faFileExcel,
} from "@fortawesome/free-solid-svg-icons";
import { ColorModeContext } from "../Context/ThemeContext";

export default function Profit(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/profit")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  });

  //    مصفوفه نسب الفوائد اولا المدعوم
  var durationRealEstates = [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  ]; // المده بالسنوات
  var arr1 = [
    4.0, 4.0, 4.06, 4.12, 4.18, 4.24, 4.3, 4.36, 4.43, 4.49, 4.56, 4.62, 4.62,
    4.62, 4.62, 4.62, 4.62,
  ]; //نسب الفوائد للمدعوم
  let arr11 = [
    3.78, 3.78, 3.84, 3.9, 3.95, 4.01, 4.07, 4.13, 4.19, 4.25, 4.31, 4.37, 4.37,
    4.37, 4.37, 4.37, 4.37,
  ]; //ضمانات
  //مصفوفه نسب الفوائد ثانيا غير المدعوم
  var durationRealEstates2 = [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
    28, 29, 30,
  ];
  var arr2 = [
    4.55, 4.4, 4.46, 4.52, 4.58, 4.65, 4.7, 4.76, 4.81, 4.86, 4.92, 4.98, 5.08,
    5.13, 5.17, 5.23, 5.28, 5.75, 5.75, 5.75, 5.75, 5.75,
  ]; // الغير مدعوم راتب اقل من 10 الف
  var arr3 = [
    4.05, 3.9, 3.96, 4.02, 4.08, 4.15, 4.2, 4.26, 4.31, 4.36, 4.42, 4.48, 4.58,
    4.63, 4.67, 4.73, 4.78, 5.15, 5.15, 5.15, 5.15, 5.15,
  ]; //الغير مدعوم راتب فوق 10 الف

  // for (let i = 0; i<arr11.length; i++) {
  //     var p2=arr11[i]
  //     console.log(p2)

  // }

  // const [darkSide, setShwoDarkSide] = useState(() => {
  //   const savedMode = localStorage.getItem("darkMode");
  //   if (savedMode === "true") return true;
  //   if (savedMode === "false") return false;
  //   return true; // الوضع الافتراضي
  // });

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

  // if (props.pDarkSide) {
  //   var textMode = "داكن";
  //   var classNameModel = "input-loan-form";
  //   var ic1 = faMoon;
  //   var classRotate = 0;
  //   var classColor = "model-light";
  //   var tableDark = "";
  //   var backColor = "link-log-dark  dark-buttom-about";
  // } else

  if (darkSide) {
    var textMode = "داكن";
    var classNameModel = "input-loan-form";
    var ic1 = faMoon;
    var classRotate = 0;
    var classColor = "model-light";
    var tableDark = "";
    var backColor = "link-log-dark  dark-buttom-about";
    var bacgroundFooter = "card-footer";
  } else {
    var textMode = "فاتح";
    var classNameModel = "input-loan-form-dark";
    var ic1 = faCircleHalfStroke;
    var classRotate = 180;
    var classColor = "#050505";
    var tableDark = "table-Dark";
    var backColor = "link-log-dark  dark-buttom-about  back-color";
    var bacgroundFooter = "card-footer bg-dark";
  }

  window.logoBase64 =
    "data:image/png;base64,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";

  // function toArabicText(text) {
  //   try {
  //     const reshaped = reshape.reshape(text || '');
  //     const bidiText = bidi.getVisualString(reshaped);
  //     return bidiText;
  //   } catch (e) {
  //     console.error('Error reshaping text:', e);
  //     return text;
  //   }
  // }

  // const generatePDF = () => {
  //   const doc = new jsPDF({ orientation: 'landscape', putOnlyUsedFonts: true });
  //   const pageWidth = doc.internal.pageSize.getWidth();
  //   const pageHeight = doc.internal.pageSize.getHeight();

  //   doc.addFileToVFS("Amiri-Regular.ttf", amiriFont);
  //   doc.addFont("Amiri-Regular.ttf", "Amiri", "normal");
  //   doc.setFont("Amiri");

  //   const tables = Array.from(document.querySelectorAll('table.pdf-table'));

  //   const drawLogo = () => {
  //     if (window.logoBase64) {
  //       doc.setGState?.(new doc.GState({ opacity: 0.08 }));
  //       const imgW = 170;
  //       const imgH = 250;
  //       const centerX = (pageWidth - imgW) / 2;
  //       const centerY = (pageHeight - imgH) / 2;
  //       doc.addImage(window.logoBase64, 'PNG', centerX, centerY, imgW, imgH);
  //       doc.setGState?.(new doc.GState({ opacity: 1 }));
  //     }
  //   };

  //   for (let i = 0; i < tables.length; i += 2) {
  //     if (i !== 0) doc.addPage();
  //     drawLogo();

  //     const drawSingleTable = (table, offsetX) => {
  //       const headerRow = Array.from(table.querySelectorAll('thead tr'))[1];
  //       const headers = [Array.from(headerRow.querySelectorAll('th')).map(th => toArabicText(th.innerText.trim()))];

  //       const body = Array.from(table.querySelectorAll('tbody tr')).map(row => {
  //         return Array.from(row.querySelectorAll('td')).map(td => toArabicText(td.innerText.trim()));
  //       });

  //       const caption = toArabicText(table.querySelector('caption')?.innerText || '');
  //       const bankName = toArabicText(table.querySelector('thead tr:first-child th')?.innerText || '');

  //       // ✅ عنوان البنك والتاريخ بخط أحمر وتحته خط
  //       doc.setFontSize(12);
  //       doc.setTextColor(200, 0, 0);
  //       doc.text(`${caption} - ${bankName}`, offsetX + ((pageWidth / 2) - 20) / 2, 22, { align: 'center' });
  //       const textWidth = doc.getTextWidth(`${caption} - ${bankName}`);
  //       const lineX = offsetX + ((pageWidth / 2) - 20) / 2 - textWidth / 2;
  //       doc.setDrawColor(200, 0, 0);
  //       doc.setLineWidth(0.5);
  //       doc.line(lineX, 24, lineX + textWidth, 24);
  //       doc.setTextColor(0, 0, 0); // رجوع للون الأسود

  //       // ✅ جدول البيانات
  //       autoTable(doc, {
  //         startY: 30,
  //         margin: { left: offsetX, right: 10 },
  //         tableWidth: (pageWidth / 2) - 20,
  //         head: headers,
  //         body,
  //         styles: {
  //           font: 'Amiri',
  //           fontStyle: 'normal',
  //           fontSize: 9,
  //           halign: 'right',
  //         },
  //         headStyles: {
  //           fillColor: [41, 128, 185],
  //           textColor: 255,
  //           fontSize: 10,
  //           halign: 'right',
  //         },
  //       });
  //     };

  //     drawSingleTable(tables[i], 10);
  //     if (tables[i + 1]) {
  //       drawSingleTable(tables[i + 1], pageWidth / 2 + 10);
  //     }
  //   }

  //   doc.save('أسعار_التمويل_البنكي.pdf');
  // };

  // const toArabicText = (text) => {
  //   try {
  //     const reshaped = reshape(text || "");
  //     const bidiText = bidi.getEmbeddingLevels(reshaped);
  //     return bidiText
  //       .map((b) =>
  //         b.level % 2 === 1 ? b.text.split("").reverse().join("") : b.text
  //       )
  //       .join("");
  //   } catch (e) {
  //     return text;
  //   }
  // };

  // const generatePDF = () => {
  //   const doc = new jsPDF({ orientation: "landscape", putOnlyUsedFonts: true });
  //   const pageWidth = doc.internal.pageSize.getWidth();
  //   const pageHeight = doc.internal.pageSize.getHeight();

  //   doc.addFileToVFS("Amiri-Regular.ttf", amiriFont);
  //   doc.addFont("Amiri-Regular.ttf", "Amiri", "normal");
  //   doc.setFont("Amiri");

  //   const tables = Array.from(document.querySelectorAll("table.pdf-table"));
  //   // let pageNumber = 1;

  //   const drawLogo = () => {
  //     if (window.logoBase64) {
  //       doc.setGState?.(new doc.GState({ opacity: 0.08 }));
  //       const imgW = 120;
  //       const imgH = 150;
  //       const centerX = (pageWidth - imgW) / 2;
  //       const centerY = (pageHeight - imgH) / 2 - 20;
  //       doc.addImage(window.logoBase64, "PNG", centerX, centerY, imgW, imgH);
  //       doc.setGState?.(new doc.GState({ opacity: 1 }));
  //     }
  //   };

  //   for (let i = 0; i < tables.length; i += 2) {
  //     if (i !== 0) doc.addPage();
  //     drawLogo();

  //     const drawSingleTable = (table, offsetX) => {
  //       const caption = toArabicText(
  //         table.querySelector("caption")?.innerText || ""
  //       );
  //       const bankName = toArabicText(
  //         table.querySelector("thead tr:first-child th")?.innerText || ""
  //       );

  //       const headerRow = Array.from(table.querySelectorAll("thead tr"))[1];
  //       const headers = [
  //         Array.from(headerRow.querySelectorAll("th")).map((th) =>
  //           toArabicText(th.innerText.trim())
  //         ),
  //       ];

  //       const body = Array.from(table.querySelectorAll("tbody tr")).map((row) =>
  //         Array.from(row.querySelectorAll("td")).map((td) =>
  //           toArabicText(td.innerText.trim())
  //         )
  //       );

  //       // 🟥 اسم البنك باللون الأحمر وتحته خط
  //       doc.setFontSize(11);
  //       doc.setTextColor(200, 0, 0);
  //       doc.text(`${bankName} - ${caption}`, offsetX + ((pageWidth / 2) - 20) / 2, 18, {
  //         align: "center",
  //       });
  //       doc.setDrawColor(200, 0, 0);
  //       doc.setLineWidth(0.5);
  //       doc.line(
  //         offsetX + 15,
  //         32,
  //         offsetX + (pageWidth / 2) - 25,
  //         32
  //       );

  //       // ✅ الجدول نفسه
  //       autoTable(doc, {
  //         startY: 22,
  //         margin: { left: offsetX, right: 10 },
  //         tableWidth: (pageWidth / 2) - 20,
  //         head: headers,
  //         body: body,
  //         styles: {
  //           font: "Amiri",
  //           fontStyle: "normal",
  //           fontSize: 9,
  //           halign: "right",

  //         },
  //         headStyles: {
  //           fillColor: [41, 128, 185],
  //           textColor: 255,
  //           fontSize: 10,
  //           halign: "right",
  //         },
  //         willDrawCell: (data) => {
  //           if (data.section === "head") {
  //             data.cell.styles.fontStyle = "normal";
  //           }
  //         },
  //       });
  //     };

  //     drawSingleTable(tables[i], 10);
  //     if (tables[i + 1]) {
  //       drawSingleTable(tables[i + 1], pageWidth / 2 + 10);
  //     }

  //     // pageNumber++;
  //   }

  //   doc.save("أسعار_التمويل_البنكي.pdf");
  // };

  const toArabicText = (text) => {
    try {
      const reshaped = reshape(text || "");
      const bidiText = bidi.getEmbeddingLevels(reshaped);
      return bidiText
        .map((b) =>
          b.level % 2 === 1 ? b.text.split("").reverse().join("") : b.text
        )
        .join("");
    } catch (e) {
      return text;
    }
  };

  // const generatePDF = () => {
  //   const doc = new jsPDF({ orientation: "landscape", putOnlyUsedFonts: true });
  //   const pageWidth = doc.internal.pageSize.getWidth();
  //   const pageHeight = doc.internal.pageSize.getHeight();

  //   doc.addFileToVFS("Amiri-Regular.ttf", amiriFont);
  //   doc.addFont("Amiri-Regular.ttf", "Amiri", "normal");
  //   doc.setFont("Amiri");

  //   const tables = Array.from(document.querySelectorAll("table.pdf-table"));

  //   for (let i = 0; i < tables.length; i += 2) {
  //     if (i !== 0) doc.addPage();

  //     const drawSingleTable = (table, offsetX) => {
  //       const caption = toArabicText(
  //         table.querySelector("caption")?.innerText || ""
  //       );
  //       const bankName = toArabicText(
  //         table.querySelector("thead tr:first-child th")?.innerText || ""
  //       );

  //       const headerRow = Array.from(table.querySelectorAll("thead tr"))[1];
  //       const headers = [
  //         Array.from(headerRow.querySelectorAll("th")).map((th) =>
  //           toArabicText(th.innerText.trim())
  //         ),
  //       ];

  //       const body = Array.from(table.querySelectorAll("tbody tr")).map((row) =>
  //         Array.from(row.querySelectorAll("td")).map((td) =>
  //           toArabicText(td.innerText.trim())
  //         )
  //       );

  //       // 🟥 اسم البنك باللون الأحمر وتحته خط
  //       doc.setFontSize(11);
  //       doc.setTextColor(200, 0, 0);
  //       doc.text(
  //         `${bankName} - ${caption}`,
  //         offsetX + ((pageWidth / 2) - 20) / 2,
  //         15,
  //         { align: "center" }
  //       );
  //       doc.setDrawColor(200, 0, 0);
  //       doc.setLineWidth(0.5);
  //       doc.line(offsetX + 15, 32, offsetX + (pageWidth / 2) - 25, 32);

  //       // ✅ الجدول نفسه
  //       autoTable(doc, {
  //         startY: 21,
  //         margin: { left: offsetX, right: 10 },
  //         tableWidth: (pageWidth / 2) - 20,
  //         head: headers,
  //         body: body,
  //         styles: {
  //           font: "Amiri",
  //           fontStyle: "normal",
  //           fontSize: 12,
  //           halign: "right",
  //            cellPadding: 1.2,
  //         },
  //         headStyles: {
  //           fillColor: [41, 128, 185],
  //           textColor: 255,
  //           fontSize: 14,
  //           halign: "right",
  //            cellPadding: 1.2,
  //         },
  //         willDrawCell: (data) => {
  //           if (data.section === "head") {
  //             data.cell.styles.fontStyle = "normal";
  //           }
  //         },
  //         didDrawPage: () => {
  //           // رسم الشعار فوق الجدول كعلامة مائية
  //           if (window.logoBase64) {
  //             if (doc.setGState) doc.setGState(new doc.GState({ opacity: 0.08 }));
  //             const imgW = 120;
  //             const imgH = 150;
  //             const centerX = (pageWidth - imgW) / 2;
  //             const centerY = (pageHeight - imgH) / 2 - 20;
  //             doc.addImage(window.logoBase64, "PNG", centerX, centerY, imgW, imgH);
  //             if (doc.setGState) doc.setGState(new doc.GState({ opacity: 1 }));
  //           }
  //         },
  //       });
  //     };

  //     drawSingleTable(tables[i], 10);
  //     if (tables[i + 1]) {
  //       drawSingleTable(tables[i + 1], pageWidth / 2 + 10);
  //     }
  //   }

  //   doc.save("أسعار_التمويل_البنكي.pdf");
  // };

  const generatePDF = () => {
    const doc = new jsPDF({ orientation: "landscape", putOnlyUsedFonts: true });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    doc.addFileToVFS("Amiri-Regular.ttf", amiriFont);
    doc.addFont("Amiri-Regular.ttf", "Amiri", "normal");
    doc.setFont("Amiri");

    const tables = Array.from(document.querySelectorAll("table.pdf-table"));

    for (let i = 0; i < tables.length; i += 2) {
      if (i !== 0) doc.addPage();

      const drawSingleTable = (table, offsetX) => {
        const caption = toArabicText(
          table.querySelector("caption")?.innerText || ""
        );
        const bankName = toArabicText(
          table.querySelector("thead tr:first-child th")?.innerText || ""
        );

        const headerRow = Array.from(table.querySelectorAll("thead tr"))[1];
        const headers = [
          Array.from(headerRow.querySelectorAll("th")).map((th) =>
            toArabicText(th.innerText.trim())
          ),
        ];

        const body = Array.from(table.querySelectorAll("tbody tr")).map((row) =>
          Array.from(row.querySelectorAll("td")).map((td) =>
            toArabicText(td.innerText.trim())
          )
        );

        doc.setFontSize(11);
        doc.setTextColor(200, 0, 0);
        doc.text(
          `${bankName} - ${caption}`,
          offsetX + (pageWidth / 2 - 10) / 2,
          15,
          { align: "center" }
        );
        doc.setDrawColor(200, 0, 0);
        doc.setLineWidth(0.5);
        doc.line(offsetX + 10, 32, offsetX + pageWidth / 2 - 15, 32);

        autoTable(doc, {
          startY: 21,
          margin: { left: offsetX, right: 5 }, // ✅ تعديل المسافات
          tableWidth: pageWidth / 2 - 10, // ✅ زيادة العرض
          head: headers,
          body: body,
          styles: {
            font: "Amiri",
            fontStyle: "normal",
            fontSize: 12,
            // halign: "right",
            halign: "center", // ✅ محاذاة أفقية وسط
            valign: "middle", // ✅ محاذاة عمودية وسط
            cellPadding: 1.2,
            lineWidth: 0.1, // ✅ خطوط خفيفة جدًا
            lineColor: [180, 180, 180], // ✅ لون رمادي فاتح جدًا
          },
          headStyles: {
            fillColor: [41, 128, 185],

            textColor: 255,
            fontSize: 12,
            // halign: "right",
            halign: "center", // ✅ محاذاة أفقية وسط
            valign: "middle", // ✅ محاذاة عمودية وسط
            cellPadding: 1.2,
            lineWidth: 0.1, // ✅ خطوط خفيفة جدًا
            lineColor: [180, 180, 180], // ✅ لون رمادي فاتح جدًا
          },
          tableLineWidth: 0.25, // ✅ الحد الخارجي
          tableLineColor: [100, 100, 100], // ✅ لون الحد

          willDrawCell: (data) => {
            if (data.section === "head") {
              data.cell.styles.fontStyle = "normal";
            }
          },
          didDrawPage: () => {
            if (window.logoBase64) {
              if (doc.setGState)
                doc.setGState(new doc.GState({ opacity: 0.08 }));
              const imgW = 120;
              const imgH = 150;
              const centerX = (pageWidth - imgW) / 2;
              const centerY = (pageHeight - imgH) / 2;
              doc.addImage(
                window.logoBase64,
                "PNG",
                centerX,
                centerY,
                imgW,
                imgH
              );
              if (doc.setGState) doc.setGState(new doc.GState({ opacity: 1 }));
            }
          },
        });
      };

      drawSingleTable(tables[i], 6); // ✅ تقليل المسافة من يسار الصفحة
      if (tables[i + 1]) {
        drawSingleTable(tables[i + 1], pageWidth / 2 + 2); // ✅ تقريب الجدولين من بعض
      }
    }

    doc.save(`نسب الفوائد _${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  const onDownload = () => {
    const tables = document.querySelectorAll("table");
    const ws = XLSX.utils.aoa_to_sheet([]);
    let currentCol = 0;

    tables.forEach((table) => {
      const rows = [];

      const caption = table.querySelector("caption")?.innerText || "";
      const bankName =
        table.querySelector("thead tr:first-child th")?.innerText || "";
      rows.push([`${caption} - ${bankName}`]);

      const theadRows = table.querySelectorAll("thead tr");
      theadRows.forEach((tr) => {
        const row = Array.from(tr.querySelectorAll("th")).map((th) =>
          th.innerText.trim()
        );
        rows.push(row);
      });

      const tbodyRows = table.querySelectorAll("tbody tr");
      tbodyRows.forEach((tr) => {
        const row = Array.from(tr.querySelectorAll("td")).map((td) =>
          td.innerText.trim()
        );
        rows.push(row);
      });

      XLSX.utils.sheet_add_aoa(ws, rows, { origin: { r: 0, c: currentCol } });

      currentCol += Math.max(...rows.map((r) => r.length)) + 2; // مسافة عمودين بين الجداول
    });

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "جداول نسب الفوائد العقاري");
    XLSX.writeFile(
      wb,
      `نسب الفوائد _${new Date().toISOString().slice(0, 10)}.xlsx`
    );
  };

  return (
    <div>
      <div
        // className="col box input-css"
        // id={classNameModel}
        style={{
          width: "100%",
          margin: "5px",
          padding: "10px 10px 0 20px",
        }}
      >
        <div
          className="row align-items-center justify-content-between text-center text-md-start"
          style={{
            backgroundColor: darkSide ? "#e1e5ed" : "#0f1a36",
            color: darkSide ? "black" : "white",
            padding: "5px",
            marginBottom: "7px",
            marginTop: "7px",
          }}
        >
          {/* زر PDF و Excel على اليمين */}
          <div className="col-12 col-md-3 mb-2 d-flex justify-content-md-start justify-content-center gap-2">
            <button className="btn btn-danger" onClick={generatePDF}>
              <FontAwesomeIcon icon={faFilePdf} /> تحميل PDF
            </button>
            <button className="btn btn-success" onClick={onDownload}>
              <FontAwesomeIcon icon={faFileExcel} /> تحميل Excel
            </button>
          </div>

          {/* العنوان في المنتصف */}
          {/* <div className="col-12 col-md-3 mb-2 d-flex justify-content-center">
            <h3 className="m-0">نسب البنوك</h3>
          </div> */}
        </div>
      </div>

      <div
        className=" grid-container"
        style={{ gap: "10px", marginTop: "15px", marginBottom: "40px" }}
      >
        {/* <div
        className="calculation-flex flex-2dir input-css flex-dir"
        id={classNameModel}
        style={{ marginTop: "10px", marginRight: "0px" }}
      >
        <table style={{ direction: "rtl" }} className=" pdf-table">
          <thead>
            <tr>
              <th style={{ width: "100%", textAlign: "center" }}>
                بنك الراجحي
              </th>
            </tr>
            <tr
              style={{ color: "white", background: "rgba(34, 42, 69, 0.96)" }}
            >
              <th>السنوات</th>

              <th>المدعوم </th>
              <th>ضمانات </th>
              <th>غير مدعوم </th>
              <th style={{ height: "57px" }}> فوق 10 غير مدعوم </th>
            </tr>
          </thead>
          <tbody className={tableDark}>
            {data.map((users, index) => (
              <tr key={index}>
                <td>{users.year}</td>
                
                <td>{users.support.toFixed(2)}</td>
                <td>{users.supportEx.toFixed(2)}</td>
                <td>{users.nosupport.toFixed(2)}</td>
                <td>{users.nosupport2.toFixed(2)}</td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

        <div
          className="calculation-flex flex-2dir input-css flex-dir"
          id={classNameModel}
          style={{ marginTop: "10px", marginRight: "0px" }}
        >
          <table style={{ direction: "rtl" }} className=" pdf-table">
            <caption
              style={{
                textAlign: "center",
                color: darkSide ? "black" : "white",
                fontSize: "13px",
              }}
              className={bacgroundFooter}
            >
              النسب ترتقع علي حسب البيانات للعميل
            </caption>
            <caption
              style={{
                textAlign: "center",
                color: darkSide ? "black" : "white",
              }}
              className={bacgroundFooter}
            >
              11-01-2026
            </caption>
            <thead>
              <tr>
                <th style={{ width: "100%", textAlign: "center" }}>
                  بنك الراجحي
                </th>
              </tr>
              <tr
                style={{ color: "white", background: "rgba(34, 42, 69, 0.96)" }}
              >
                <th>السنوات</th>
                <th>المدعوم </th>
                <th>ضمانات دفاع </th>
                <th>ضمانات المدعوم </th>
                <th style={{ height: "57px" }}> الغير مدعوم </th>
              </tr>
            </thead>
            <tbody className={tableDark}>
             
              <tr>
               
                <td style={{ padding: "7px 4px 0" }}>9-6</td> <td>3.83</td>
                <td>3.78</td> <td>3.78</td> <td>4.26</td>
              </tr>
             
              <tr>
               
                <td>10</td> <td>3.83</td> <td>3.78</td> <td>3.78</td>
                <td>4.26</td>
              </tr>
             
              <tr>
               
                <td>11</td> <td>3.89</td> <td>3.84</td> <td>3.84</td>
                <td>4.33</td>
              </tr>
             
              <tr>
               
                <td>12</td> <td>3.95</td> <td>3.90</td> <td>3.90</td> <td>4.40</td>
              </tr>
             
              <tr>
               
                <td>13</td> <td>4.01</td> <td>3.96</td> <td>3.96</td>
                <td>4.46</td>
              </tr>
             
              <tr>
               
                <td>14</td> <td>4.08</td> <td>4.02</td> <td>4.02</td>
                <td>4.54</td>
              </tr>
             
              <tr>
               
                <td>15</td> <td>4.14</td> <td>4.09</td> <td>4.09</td>
                <td>4.61</td>
              </tr>
             
              <tr>
               
                <td>16</td> <td>4.20</td> <td>4.16</td> <td>4.16</td>
                <td>4.69</td>
              </tr>
             
              <tr>
               
                <td>17</td> <td>4.28</td> <td>4.22</td> <td>4.22</td>
                <td>4.76</td>
              </tr>
             
              <tr>
               
                <td>18</td> <td>4.34</td> <td>4.29</td> <td>4.29</td>
                <td>4.84</td>
              </tr>
             
              <tr>
               
                <td>19</td> <td>4.42</td> <td>4.36</td> <td>4.36</td>
                <td>4.92</td>
              </tr>
             
              <tr>
               
                <td>20</td> <td>4.48</td> <td>4.42</td> <td>4.42</td>
                <td>4.99</td>
              </tr>
             
              <tr>
               
                <td>21</td> <td>4.55</td> <td>4.50</td> <td>4.50</td>
                <td>5.07</td>
              </tr>
             
              <tr>
               
                <td>22</td> <td>4.63</td> <td>4.57</td> <td>4.57</td>
                <td>5.14</td>
              </tr>
             
              <tr>
               
                <td>23</td> <td>4.69</td> <td>4.63</td> <td>4.63</td>
                <td>5.22</td>
              </tr>
             
              <tr>
               
                <td>24</td> <td>4.76</td> <td>4.69</td> <td>4.69</td>
                <td>5.30</td>
              </tr>
             
              <tr>
               
                <td>25</td> <td>4.82</td> <td>4.76</td> <td>4.76</td>
                <td>5.37</td>
              </tr>
             
              <tr>
               
                <td>26</td> <td>4.89</td> <td>4.82</td> <td>4.82</td>
                <td>5.43</td>
              </tr>
             
              <tr>
               
                <td>27</td> <td>4.95</td> <td>4.88</td> <td>4.88</td>
                <td>5.50</td>
              </tr>
             
              <tr>
               
                <td>28</td> <td>5.01</td> <td>4.94</td> <td>4.94</td>
                <td>5.57</td>
              </tr>
             
              <tr>
               
                <td>29</td> <td>5.07</td> <td>5.00</td> <td>5.00</td> <td>5.64</td>
              </tr>
             
              <tr>
               
                <td>30</td> <td>5.09</td> <td>5.02</td> <td>5.02</td>
                <td>5.70</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          className="calculation-flex flex-2dir input-css flex-dir"
          id={classNameModel}
          style={{ marginTop: "10px", marginRight: "0px" }}
        >
          <table style={{ direction: "rtl" }} className=" pdf-table">
            <caption
              style={{
                textAlign: "center",
                color: darkSide ? "black" : "white",
                fontSize: "13px",
              }}
              className={bacgroundFooter}
            >
              في حاله وجود التزامات يتم اضافه 90 نقطه لقسط الدعم و 180 نقطه
              للباقة
            </caption>

            <caption
              style={{
                textAlign: "center",
                color: darkSide ? "black" : "white",
                fontSize: "13px",
              }}
              className={bacgroundFooter}
            >
              هذه نسب قسط دعم بدون التزام و حاله باقه بدون التزام اضافه 90 نقطه
            </caption>
            <caption
              style={{
                textAlign: "center",
                color: darkSide ? "black" : "white",
              }}
              className={bacgroundFooter}
            >
              05-01-2026
            </caption>

            <thead>
              <tr>
                <th style={{ width: "100%", textAlign: "center" }}>
                  بنك الاهلي
                </th>
              </tr>
              <tr
                style={{ background: "rgba(34, 42, 69, 0.96)", color: "white" }}
              >
                <th>السنوات</th>

                <th>المدعوم </th>
                <th> بدون تحويل مدعوم </th>

                <th> وزارة الدفاع </th>
                <th style={{ height: "57px" }}>غير مدعوم </th>
              </tr>
            </thead>
            <tbody className={tableDark}>
              {/*           
            <tr>
              
              <td style={{padding:"7px 4px 0"}}>9-6</td> <td>3.29</td> <td>3.29</td> <td>3.50</td>
              <td>3.30</td>
            </tr>
          
            <tr>
              
              <td>10</td> <td>3.29</td> <td>3.29</td> <td>3.50</td> <td>3.30</td>
            </tr>
          
            <tr>
              
              <td>11</td> <td>3.65</td> <td>3.65</td> <td>3.50</td> <td>3.65</td>
            </tr>
          
            <tr>
              
              <td>12</td> <td>3.65</td> <td>3.65</td> <td>3.50</td> <td>3.65</td>
            </tr>
          
            <tr>
              
              <td>13</td> <td>3.65</td> <td>3.65</td> <td>3.50</td> <td>3.65</td>
            </tr>
          
            <tr>
              
              <td>14</td> <td>3.65</td> <td>3.65</td> <td>3.50</td> <td>3.65</td>
            </tr>
          
            <tr>
              
              <td>15</td> <td>3.75</td> <td>3.75</td> <td>3.65</td> <td>3.90</td>
            </tr>
          
            <tr>
              
              <td>16</td> <td>3.75</td> <td>3.75</td> <td>3.65</td> <td>3.90</td>
            </tr>
          
            <tr>
              
              <td>17</td> <td>3.75</td> <td>3.75</td> <td>3.65</td> <td>3.90</td>
            </tr>
          
            <tr>
              
              <td>18</td> <td>3.75</td> <td>3.75</td> <td>3.65</td> <td>3.90</td>
            </tr>
          
            <tr>
              
              <td>19</td> <td>3.75</td> <td>3.75</td> <td>3.65</td> <td>3.90</td>
            </tr>
          
            <tr>
              
              <td>20</td> <td>4.00</td> <td>4.00</td> <td>3.75</td> <td>4.10</td>
            </tr>
          
            <tr>
              
              <td>21</td> <td>4.00</td> <td>4.00</td> <td>3.75</td> <td>4.10</td>
            </tr>
          
            <tr>
              
              <td>22</td> <td>4.00</td> <td>4.00</td> <td>3.75</td> <td>4.10</td>
            </tr>
          
            <tr>
              
              <td>23</td> <td>4.00</td> <td>4.00</td> <td>3.75</td> <td>4.10</td>
            </tr>
          
            <tr>
              
              <td>24</td> <td>4.00</td> <td>4.00</td> <td>3.75</td> <td>4.10</td>
            </tr>
          
            <tr>
              
              <td>25</td> <td>4.40</td> <td>4.40</td> <td>3.85</td> <td>4.50</td>
            </tr>
          
            <tr>
              
              <td>26</td> <td>4.40</td> <td>4.40</td> <td>3.85</td> <td>4.50</td>
            </tr>
          
            <tr>
              
              <td>27</td> <td>4.40</td> <td>4.40</td> <td>3.85</td> <td>4.50</td>
            </tr>
          
            <tr>
              
              <td>28</td> <td>4.40</td> <td>4.40</td> <td>3.85</td> <td>4.50</td>
            </tr>
          
            <tr>
              
              <td>29</td> <td>4.40</td> <td>4.40</td> <td>3.85</td> <td>4.50</td>
            </tr>
          
            <tr>
              
              <td>30</td> <td>4.40</td> <td>4.40</td> <td>3.85</td> <td>4.50</td>
            </tr> */}

              <tr>
                <td style={{ padding: "7px 4px 0" }}>9-6</td> <td>3.80</td>
                <td>3.86</td> <td>3.50</td>
                <td>4.70</td>
              </tr>

              <tr>
                <td>10</td> <td>3.90</td> <td>3.90</td> <td>3.50</td>
                <td>5.10</td>
              </tr>

              <tr>
                <td>11</td> <td>3.90</td> <td>3.96</td> <td>3.50</td>
                <td>5.10</td>
              </tr>

              <tr>
                <td>12</td> <td>3.90</td> <td>4.02</td> <td>3.50</td>
                <td>5.10</td>
              </tr>

              <tr>
                <td>13</td> <td>3.90</td> <td>4.08</td> <td>3.50</td>
                <td>5.10</td>
              </tr>

              <tr>
                <td>14</td> <td>3.90</td> <td>4.15</td> <td>3.50</td>
                <td>5.10</td>
              </tr>

              <tr>
                <td>15</td> <td>4.20</td> <td>4.22</td> <td>3.50</td>
                <td>5.30</td>
              </tr>

              <tr>
                <td>16</td> <td>4.20</td> <td>4.29</td> <td>3.65</td>
                <td>5.30</td>
              </tr>

              <tr>
                <td>17</td> <td>4.20</td> <td>4.35</td> <td>3.65</td>
                <td>5.30</td>
              </tr>

              <tr>
                <td>18</td> <td>4.20</td> <td>4.42</td> <td>3.65</td>
                <td>5.30</td>
              </tr>

              <tr>
                <td>19</td> <td>4.20</td> <td>4.50</td> <td>3.65</td>
                <td>5.30</td>
              </tr>

              <tr>
                <td>20</td> <td>4.30</td> <td>4.57</td> <td>3.65</td>
                <td>5.50</td>
              </tr>

              <tr>
                <td>21</td> <td>4.30</td> <td>4.64</td> <td>3.75</td>
                <td>5.50</td>
              </tr>

              <tr>
                <td>22</td> <td>4.30</td> <td>4.71</td> <td>3.75</td>
                <td>5.50</td>
              </tr>

              <tr>
                <td>23</td> <td>4.30</td> <td>4.78</td> <td>3.75</td>
                <td>5.50</td>
              </tr>

              <tr>
                <td>24</td> <td>4.30</td> <td>4.85</td> <td>3.75</td>
                <td>5.50</td>
              </tr>

              <tr>
                <td>25</td> <td>4.50</td> <td>4.85</td> <td>3.75</td>
                <td>5.90</td>
              </tr>

              <tr>
                <td>26</td> <td>4.50</td> <td>---</td> <td>3.85</td>
                <td>5.90</td>
              </tr>

              <tr>
                <td>27</td> <td>4.50</td> <td>---</td> <td>3.85</td>
                <td>5.90</td>
              </tr>

              <tr>
                <td>28</td> <td>4.50</td> <td>---</td> <td>3.85</td>
                <td>5.90</td>
              </tr>

              <tr>
                <td>29</td> <td>4.50</td> <td>---</td> <td>3.85</td>
                <td>5.90</td>
              </tr>

              <tr>
                <td>30</td> <td>4.50</td> <td>---</td> <td>3.85</td>
                <td>5.90</td>
              </tr>
              {/* <tr>
              <td style={{padding:"7px 4px 0"}}>9-6</td> <td>108-72</td> <td>3.35</td> <td>3.35</td>
              <td>3.50</td> <td>4.10</td>
            </tr>

            <tr>
              <td>10</td> <td>120</td> <td>3.40</td> <td>3.40</td> <td>3.50</td>
              <td>4.13</td>
            </tr>

            <tr>
              <td>11</td> <td>132</td> <td>3.45</td> <td>3.45</td> <td>3.50</td>
              <td>4.17</td>
            </tr>

            <tr>
              <td>12</td> <td>144</td> <td>3.50</td> <td>3.50</td> <td>3.50</td>
              <td>4.22</td>
            </tr>

            <tr>
              <td>13</td> <td>156</td> <td>3.55</td> <td>3.55</td> <td>3.50</td>
              <td>4.27</td>
            </tr>

            <tr>
              <td>14</td> <td>168</td> <td>3.60</td> <td>3.60</td> <td>3.50</td>
              <td>4.33</td>
            </tr>

            <tr>
              <td>15</td> <td>180</td> <td>3.65</td> <td>3.65</td> <td>3.50</td>
              <td>4.38</td>
            </tr>

            <tr>
              <td>16</td> <td>192</td> <td>3.70</td> <td>3.70</td> <td>3.65</td>
              <td>4.44</td>
            </tr>

            <tr>
              <td>17</td> <td>204</td> <td>3.75</td> <td>3.75</td> <td>3.65</td>
              <td>4.5</td>
            </tr>

            <tr>
              <td>18</td> <td>216</td> <td>3.80</td> <td>3.80</td> <td>3.65</td>
              <td>4.56</td>
            </tr>

            <tr>
              <td>19</td> <td>228</td> <td>3.85</td> <td>3.85</td> <td>3.65</td>
              <td>4.62</td>
            </tr>

            <tr>
              <td>20</td> <td>240</td> <td>3.90</td> <td>3.90</td> <td>3.65</td>
              <td>4.68</td>
            </tr>

            <tr>
              <td>21</td> <td>252</td> <td>3.95</td> <td>3.95</td> <td>3.75</td>
              <td>4.74</td>
            </tr>

            <tr>
              <td>22</td> <td>264</td> <td>3.95</td> <td>3.95</td> <td>3.75</td>
              <td>4.81</td>
            </tr>

            <tr>
              <td>23</td> <td>276</td> <td>3.95</td> <td>3.95</td> <td>3.75</td>
              <td>4.87</td>
            </tr>

            <tr>
              <td>24</td> <td>288</td> <td>3.95</td> <td>3.95</td> <td>3.75</td>
              <td>4.93</td>
            </tr>

            <tr>
              <td>25</td> <td>300</td> <td>4.30</td> <td>4.30</td> <td>3.75</td>
              <td>5.00</td>
            </tr>

            <tr>
              <td>26</td> <td>312</td> <td>4.35</td> <td>4.35</td> <td>3.85</td>
              <td>5.05</td>
            </tr>

            <tr>
              <td>27</td> <td>324</td> <td>4.40</td> <td>4.40</td> <td>3.85</td>
              <td>5.11</td>
            </tr>

            <tr>
              <td>28</td> <td>336</td> <td>4.45</td> <td>4.45</td> <td>3.85</td>
              <td>5.17</td>
            </tr>

            <tr>
              <td>29</td> <td>348</td> <td>4.50</td> <td>4.50</td> <td>3.85</td>
              <td>5.28</td>
            </tr>

            <tr>
              <td>30</td> <td>360</td> <td>4.55</td> <td>4.55</td> <td>3.85</td>
              <td>5.33</td>
            </tr> */}
            </tbody>
          </table>
        </div>
        <div
          className="calculation-flex flex-2dir input-css flex-dir"
          id={classNameModel}
          style={{ marginTop: "10px", marginRight: "0px" }}
        >
          <table style={{ direction: "rtl" }} className="pdf-table">

                        <caption
              style={{
                textAlign: "center",
                color: darkSide ? "black" : "white",
                fontSize: "13px",
              }}
              className={bacgroundFooter}
            >
           ترتفع النسب 20 نقطه للجندي و العريف و غير كلاس A
           ترتفع النسب 50 نقطه في حاله مدعوم مع باقه الدعم

            </caption>

            <caption
              style={{
                textAlign: "center",
                color: darkSide ? "black" : "white",
              }}
              className={bacgroundFooter}
            >
              09-03-2026
            </caption>

            <thead>
              <tr>
                <th style={{ width: "100%", textAlign: "center" }}>
                  بنك البلاد
                </th>
              </tr>
              <tr
                style={{ background: "rgba(34, 42, 69, 0.96)", color: "white" }}
              >
                <th>السنوات</th>
                <th>المدعوم </th>
                <th>خارج البنك المدعوم </th>
                <th>غير مدعوم </th>
                <th style={{ height: "57px" }}>خارج البنك غير مدعوم </th>
              </tr>
            </thead>

<tbody className={tableDark}>
<tr>
<td style={{ padding: "7px 4px 0" }}>6-9</td> <td>4.00</td> <td>4.40</td> <td>4.00</td> <td>4.50</td><td>4.00</td> 
</tr>
 <tr>
<td>10</td> <td>4.00</td> <td>4.40</td> <td>4.00</td> <td>4.50</td>
 </tr>
 <tr>
<td>12</td> <td>4.05</td> <td>4.45</td> <td>4.05</td> <td>4.55</td>
 </tr>
 <tr>
<td>13</td> <td>4.06</td> <td>4.46</td> <td>4.07</td> <td>4.57</td>
 </tr>
 <tr>
<td>14</td> <td>4.08</td> <td>4.48</td> <td>4.09</td> <td>4.59</td>
 </tr>
 <tr>
<td>15</td> <td>4.10</td> <td>4.50</td> <td>4.10</td> <td>4.60</td>
 </tr>
 <tr>
<td>16</td> <td>4.13</td> <td>4.53</td> <td>4.12</td> <td>4.62</td>
 </tr>
 <tr>
<td>17</td> <td>4.15</td> <td>4.55</td> <td>4.15</td> <td>4.65</td>
 </tr>
 <tr>
<td>18</td> <td>4.16</td> <td>4.56</td> <td>4.17</td> <td>4.67</td>
 </tr>
 <tr>
<td>19</td> <td>4.18</td> <td>4.58</td> <td>4.19</td> <td>4.69</td>
 </tr>
 <tr>
<td>20</td> <td>4.20</td> <td>4.60</td> <td>4.20</td> <td>4.70</td>
 </tr>
 <tr>
<td>21</td> <td>4.30</td> <td>4.70</td> <td>4.22</td> <td>4.72</td>
 </tr>
 <tr>
<td>22</td> <td>4.30</td> <td>4.70</td> <td>4.25</td> <td>4.75</td>
 </tr>
 <tr>
<td>23</td> <td>4.30</td> <td>4.70</td> <td>4.27</td> <td>4.77</td>
 </tr>
 <tr>
<td>24</td> <td>4.30</td> <td>4.70</td> <td>4.29</td> <td>4.79</td>
 </tr>
 <tr>
<td>25</td> <td>4.30</td> <td>4.70</td> <td>4.30</td> <td>4.80</td>
 </tr>
 <tr>
<td>26</td> <td>4.40</td> <td>4.80</td> <td>4.40</td> <td>4.90</td>
 </tr>
 <tr>
<td>27</td> <td>4.40</td> <td>4.80</td> <td>4.40</td> <td>4.90</td>
 </tr>
 <tr>
<td>28</td> <td>4.40</td> <td>4.80</td> <td>4.40</td> <td>4.90</td>
 </tr>
 <tr>
<td>29</td> <td>4.40</td> <td>4.80</td> <td>4.40</td> <td>4.90</td>
 </tr>
 <tr>
<td>30</td> <td>4.40</td> <td>4.80</td> <td>4.40</td> <td>4.90</td>
 </tr>
</tbody>

          </table>
        </div>

        <div
          className="calculation-flex flex-2dir input-css flex-dir"
          id={classNameModel}
          style={{ marginTop: "15px", marginRight: "0px" }}
        >
          <table style={{ direction: "rtl" }} className=" pdf-table">
            <caption
              style={{
                textAlign: "center",
                color: darkSide ? "black" : "white",
                fontSize: "13px",
              }}
              className={bacgroundFooter}
            >
               تقليل 45 نقطه في حاله الراتب فوق 25 الف

            </caption>
            <caption
              style={{
                textAlign: "center",
                color: darkSide ? "black" : "white",
              }}
              className={bacgroundFooter}
            >
              11-02-2026
            </caption>
            <thead>
              <tr>
                <th style={{ width: "100%", textAlign: "center" }}>
                  بنك الانماء
                </th>
              </tr>
              <tr
                style={{ background: "rgba(34, 42, 69, 0.96)", color: "white" }}
              >
                <th>السنوات</th>





                <th> بدون التزام </th>
                <th>بدون التزام بدون تحويل</th>
                 <th>بدون التزام غير معتمد</th>
                  <th>   عميل البنك اقل من 25 الف </th>
                   <th style={{ height: "57px" }}> بدون تحويل</th>
                    <th>غير معتمد</th>
                     <th>وزارة الدفاع</th>
         
             
              </tr>
            </thead>
<tbody className={tableDark}>
<tr>
<td style={{ padding: "7px 4px 0" }}>6-9</td> <td>3.30</td> <td>3.80</td> <td>4.80</td> <td>4.30</td><td>4.80</td> <td>5.80</td> <td>3.11</td> 
</tr>
 <tr>
<td>10</td> <td>3.35</td> <td>3.85</td> <td>4.85</td> <td>4.35</td><td>4.85</td> <td>5.85</td> <td>3.11</td> 
 </tr>
 <tr>
<td>12</td> <td>3.45</td> <td>3.95</td> <td>4.95</td> <td>4.45</td><td>4.95</td> <td>5.95</td> <td>3.35</td> 
 </tr>
 <tr>
<td>13</td> <td>3.47</td> <td>3.97</td> <td>4.97</td> <td>4.47</td><td>4.97</td> <td>5.97</td> <td>3.35</td> 
 </tr>
 <tr>
<td>14</td> <td>3.55</td> <td>4.05</td> <td>5.05</td> <td>4.55</td><td>5.05</td> <td>6.05</td> <td>3.35</td> 
 </tr>
 <tr>
<td>15</td> <td>3.59</td> <td>4.09</td> <td>5.09</td> <td>4.59</td><td>5.09</td> <td>6.09</td> <td>3.35</td> 
 </tr>
 <tr>
<td>16</td> <td>3.65</td> <td>4.15</td> <td>5.15</td> <td>4.65</td><td>5.15</td> <td>6.15</td> <td>3.65</td> 
 </tr>
 <tr>
<td>17</td> <td>3.69</td> <td>4.19</td> <td>5.19</td> <td>4.69</td><td>5.19</td> <td>6.19</td> <td>3.65</td> 
 </tr>
 <tr>
<td>18</td> <td>3.74</td> <td>4.24</td> <td>5.24</td> <td>4.74</td><td>5.24</td> <td>6.24</td> <td>3.65</td> 
 </tr>
 <tr>
<td>19</td> <td>3.79</td> <td>4.29</td> <td>5.29</td> <td>4.79</td><td>5.29</td> <td>6.29</td> <td>3.65</td> 
 </tr>
 <tr>
<td>20</td> <td>3.84</td> <td>4.34</td> <td>5.34</td> <td>4.84</td><td>5.34</td> <td>6.34</td> <td>3.65</td> 
 </tr>
 <tr>
<td>21</td> <td>3.89</td> <td>4.39</td> <td>5.39</td> <td>4.89</td><td>5.39</td> <td>6.39</td> <td>---</td> 
 </tr>
 <tr>
<td>22</td> <td>3.94</td> <td>4.44</td> <td>5.44</td> <td>4.94</td><td>5.44</td> <td>6.44</td> <td>---</td> 
 </tr>
 <tr>
<td>23</td> <td>3.98</td> <td>4.48</td> <td>5.48</td> <td>4.98</td><td>5.48</td> <td>6.48</td> <td>---</td> 
 </tr>
 <tr>
<td>24</td> <td>4.03</td> <td>4.53</td> <td>5.53</td> <td>5.03</td><td>5.53</td> <td>6.53</td> <td>---</td> 
 </tr>
 <tr>
<td>25</td> <td>4.08</td> <td>4.58</td> <td>5.58</td> <td>5.08</td><td>5.58</td> <td>6.58</td> <td>---</td> 
 </tr>
 <tr>
<td>26</td> <td>4.11</td> <td>4.61</td> <td>5.61</td> <td>5.11</td><td>5.61</td> <td>6.61</td> <td>---</td> 
 </tr>
 <tr>
<td>27</td> <td>4.16</td> <td>4.66</td> <td>5.66</td> <td>5.16</td><td>5.66</td> <td>6.66</td> <td>---</td> 
 </tr>
 <tr>
<td>28</td> <td>4.21</td> <td>4.71</td> <td>5.71</td> <td>5.21</td><td>5.71</td> <td>6.71</td> <td>---</td> 
 </tr>
 <tr>
<td>29</td> <td>4.26</td> <td>4.76</td> <td>5.76</td> <td>5.26</td><td>5.76</td> <td>6.76</td> <td>---</td> 
 </tr>
 <tr>
<td>30</td> <td>4.30</td> <td>4.80</td> <td>5.80</td> <td>5.30</td><td>5.80</td> <td>6.80</td> <td>---</td> 
 </tr>
</tbody>


          </table>
        </div>

        <div
          className="calculation-flex flex-2dir input-css flex-dir"
          id={classNameModel}
          style={{ marginTop: "15px", marginRight: "0px" }}
        >
          <table style={{ direction: "rtl" }} className=" pdf-table">
            <caption
              style={{
                textAlign: "center",
                color: darkSide ? "black" : "white",
                fontSize: "13px",
              }}
              className={bacgroundFooter}
            >
              ترتفع النسب حسب البيانات
            </caption>
            <caption
              style={{
                textAlign: "center",
                color: darkSide ? "black" : "white",
              }}
              className={bacgroundFooter}
            >
              05-01-2026
            </caption>

            <thead>
              <tr>
                <th style={{ width: "100%", textAlign: "center" }}>
                  مسار النمو
                </th>
              </tr>
              <tr
                style={{ background: "rgba(34, 42, 69, 0.96)", color: "white" }}
              >
                <th>السنوات</th>

                <th>ضمانات المدعوم </th>
                <th>بدون ضمانات مدعوم </th>
                <th style={{ height: "57px" }}> باقي العملاء </th>
              </tr>
            </thead>
            <tbody className={tableDark}>
              <tr>
                <td style={{ padding: "7px 4px 0" }}>9-6</td> <td>3.66</td>
                <td>3.70</td> <td>3.70</td>
              </tr>

              <tr>
                <td>10</td> <td>3.66</td> <td>3.70</td> <td>3.70</td>
              </tr>

              <tr>
                <td>11</td> <td>3.71</td> <td>3.76</td> <td>3.76</td>
              </tr>

              <tr>
                <td>12</td> <td>3.77</td> <td>3.81</td> <td>3.81</td>
              </tr>

              <tr>
                <td>13</td> <td>3.82</td> <td>3.87</td> <td>3.87</td>
              </tr>

              <tr>
                <td>14</td> <td>3.88</td> <td>3.94</td> <td>3.94</td>
              </tr>

              <tr>
                <td>15</td> <td>3.94</td> <td>4.00</td> <td>4.00</td>
              </tr>

              <tr>
                <td>16</td> <td>4.01</td> <td>4.06</td> <td>4.06</td>
              </tr>

              <tr>
                <td>17</td> <td>4.07</td> <td>4.12</td> <td>4.12</td>
              </tr>

              <tr>
                <td>18</td> <td>4.14</td> <td>4.19</td> <td>4.19</td>
              </tr>

              <tr>
                <td>19</td> <td>4.20</td> <td>4.26</td> <td>4.26</td>
              </tr>

              <tr>
                <td>20</td> <td>4.27</td> <td>4.32</td> <td>4.32</td>
              </tr>

              <tr>
                <td>21</td> <td>4.34</td> <td>4.40</td> <td>4.40</td>
              </tr>

              <tr>
                <td>22</td> <td>4.40</td> <td>4.46</td> <td>4.46</td>
              </tr>

              <tr>
                <td>23</td> <td>4.47</td> <td>4.53</td> <td>4.53</td>
              </tr>

              <tr>
                <td>24</td> <td>4.54</td> <td>4.6</td> <td>4.6</td>
              </tr>

              <tr>
                <td>25</td> <td>4.60</td> <td>4.66</td> <td>4.66</td>
              </tr>

              <tr>
                <td>26</td> <td>4.66</td> <td>4.72</td> <td>4.72</td>
              </tr>

              <tr>
                <td>27</td> <td>4.72</td> <td>4.78</td> <td>4.78</td>
              </tr>

              <tr>
                <td>28</td> <td>4.78</td> <td>4.84</td> <td>4.84</td>
              </tr>

              <tr>
                <td>29</td> <td>4.83</td> <td>4.90</td> <td>4.90</td>
              </tr>

              <tr>
                <td>30</td> <td>4.89</td> <td>4.96</td> <td>4.96</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          className="calculation-flex flex-2dir input-css flex-dir"
          id={classNameModel}
          style={{ marginTop: "15px", marginRight: "0px" }}
        >
          <table style={{ direction: "rtl" }} className=" pdf-table">


 <caption
              style={{
                textAlign: "center",
                color: darkSide ? "black" : "white",
                fontSize: "13px",
              }}
              className={bacgroundFooter}
            >
            بدون تحويل و غير مدعوم + 80 نقطه
            </caption>
            <caption
              style={{
                textAlign: "center",
                color: darkSide ? "black" : "white",
              }}
              className={bacgroundFooter}
            >
              11-02-2026
            </caption>

            <thead>
              <tr>
                <th style={{ width: "100%", textAlign: "center" }}>بنك ساب</th>
              </tr>
              <tr
                style={{ background: "rgba(34, 42, 69, 0.96)", color: "white" }}
              >
                <th>السنوات</th>
                <th title="حكومي - شبة حكومي - خاص  A,B">مدعوم - غير مدعوم </th>
                <th title="لو غير مدعوم اضافه 80 نقطه"> بدون تحويل مدعوم </th>
                <th>بدون التزام مدعوم و غير </th>

                 <th tyle={{ height: "57px" }}> c d  مدعوم - غير مدعوم </th>
               
              </tr>
            </thead>
<tbody className={tableDark}>
<tr>
<td style={{ padding: "7px 4px 0" }}>6-9</td> <td>3.57</td> <td>3.58</td> <td>3.30</td> <td>3.75</td>
</tr>
 <tr>
<td>10</td> <td>3.57</td> <td>3.58</td> <td>3.30</td> <td>3.75</td>
 </tr>
 <tr>
<td>12</td> <td>3.61</td> <td>3.63</td> <td>3.40</td> <td>3.85</td>
 </tr>
 <tr>
<td>13</td> <td>3.62</td> <td>3.75</td> <td>3.45</td> <td>3.90</td>
 </tr>
 <tr>
<td>14</td> <td>3.67</td> <td>3.85</td> <td>3.50</td> <td>3.95</td>
 </tr>
 <tr>
<td>15</td> <td>3.72</td> <td>3.90</td> <td>3.55</td> <td>4.00</td>
 </tr>
 <tr>
<td>16</td> <td>3.76</td> <td>3.98</td> <td>3.60</td> <td>4.15</td>
 </tr>
 <tr>
<td>17</td> <td>3.79</td> <td>4.05</td> <td>3.65</td> <td>4.18</td>
 </tr>
 <tr>
<td>18</td> <td>3.82</td> <td>4.10</td> <td>3.70</td> <td>4.20</td>
 </tr>
 <tr>
<td>19</td> <td>3.85</td> <td>4.20</td> <td>3.72</td> <td>4.23</td>
 </tr>
 <tr>
<td>20</td> <td>3.89</td> <td>4.25</td> <td>3.74</td> <td>4.25</td>
 </tr>
 <tr>
<td>21</td> <td>4.25</td> <td>4.34</td> <td>3.80</td> <td>4.30</td>
 </tr>
 <tr>
<td>22</td> <td>4.35</td> <td>4.37</td> <td>3.95</td> <td>4.40</td>
 </tr>
 <tr>
<td>23</td> <td>4.45</td> <td>4.45</td> <td>4.00</td> <td>4.50</td>
 </tr>
 <tr>
<td>24</td> <td>4.50</td> <td>4.50</td> <td>4.05</td> <td>4.55</td>
 </tr>
 <tr>
<td>25</td> <td>4.55</td> <td>4.60</td> <td>4.10</td> <td>4.60</td>
 </tr>
 <tr>
<td>26</td> <td>4.60</td> <td>---</td> <td>4.15</td> <td>4.75</td>
 </tr>
 <tr>
<td>27</td> <td>4.70</td> <td>---</td> <td>4.20</td> <td>4.85</td>
 </tr>
 <tr>
<td>28</td> <td>4.80</td> <td>---</td> <td>4.25</td> <td>4.95</td>
 </tr>
 <tr>
<td>29</td> <td>4.90</td> <td>---</td> <td>4.30</td> <td>5.05</td>
 </tr>
 <tr>
<td>30</td> <td>4.95</td> <td>---</td> <td>4.45</td> <td>5.20</td>
 </tr>
</tbody>


          </table>

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
              <div style={{ margin: "0 10px" }} className="link_text">
                {textMode}
              </div>
            </button>
          </div>
        </div>

        <div
          className="calculation-flex flex-2dir input-css flex-dir"
          id={classNameModel}
          style={{ marginTop: "15px", marginRight: "0px" }}
        >
          <table style={{ direction: "rtl" }} className=" pdf-table">
            <caption
              style={{
                textAlign: "center",
                color: darkSide ? "black" : "white",
              }}
              className={bacgroundFooter}
            >
              20-10-2025
            </caption>

            <thead>
              <tr>
                <th style={{ width: "100%", textAlign: "center" }}>
                  بنك العربي
                </th>
              </tr>
              <tr
                style={{ background: "rgba(34, 42, 69, 0.96)", color: "white" }}
              >
                <th>السنوات</th>
                <th> مدعوم قسط- غير مدعوم فوق 12 الف </th>
                <th> مدعوم باقه فوق 12 الف </th>
                <th>مدعوم غير معتمد -اقل من 12 الف </th>
                <th style={{ height: "57px" }}> غير معتد غير مدعوم </th>
              </tr>
            </thead>
            <tbody className={tableDark}>
              <tr>
                <td style={{ padding: "7px 4px 0" }}>9-6</td> <td>3.79</td>
                <td>3.79</td> <td>3.65</td> <td>3.89</td>
              </tr>

              <tr>
                <td>10</td> <td>3.79</td> <td>3.79</td> <td>3.69</td>
                <td>3.89</td>
              </tr>

              <tr>
                <td>11</td> <td>3.89</td> <td>3.99</td> <td>3.74</td>
                <td>4.17</td>
              </tr>

              <tr>
                <td>12</td> <td>3.89</td> <td>3.99</td> <td>3.80</td>
                <td>4.17</td>
              </tr>

              <tr>
                <td>13</td> <td>3.89</td> <td>3.99</td> <td>3.86</td>
                <td>4.17</td>
              </tr>

              <tr>
                <td>14</td> <td>3.89</td> <td>3.99</td> <td>3.92</td>
                <td>4.17</td>
              </tr>

              <tr>
                <td>15</td> <td>3.89</td> <td>3.99</td> <td>3.99</td>
                <td>4.17</td>
              </tr>

              <tr>
                <td>16</td> <td>3.99</td> <td>4.09</td> <td>4.06</td>
                <td>4.47</td>
              </tr>

              <tr>
                <td>17</td> <td>3.99</td> <td>4.09</td> <td>4.13</td>
                <td>4.47</td>
              </tr>

              <tr>
                <td>18</td> <td>3.99</td> <td>4.09</td> <td>4.20</td>
                <td>4.47</td>
              </tr>

              <tr>
                <td>19</td> <td>3.99</td> <td>4.09</td> <td>4.27</td>
                <td>4.47</td>
              </tr>

              <tr>
                <td>20</td> <td>3.99</td> <td>4.09</td> <td>4.35</td>
                <td>4.47</td>
              </tr>

              <tr>
                <td>21</td> <td>4.29</td> <td>4.39</td> <td>4.43</td>
                <td>4.77</td>
              </tr>

              <tr>
                <td>22</td> <td>4.29</td> <td>4.39</td> <td>4.50</td>
                <td>4.77</td>
              </tr>

              <tr>
                <td>23</td> <td>4.29</td> <td>4.39</td> <td>4.58</td>
                <td>4.77</td>
              </tr>

              <tr>
                <td>24</td> <td>4.29</td> <td>4.39</td> <td>4.62</td>
                <td>4.77</td>
              </tr>

              <tr>
                <td>25</td> <td>4.29</td> <td>4.39</td> <td>4.72</td>
                <td>4.77</td>
              </tr>

              <tr>
                <td>26</td> <td>5.07</td> <td>5.17</td> <td>4.79</td>
                <td>5.77</td>
              </tr>

              <tr>
                <td>27</td> <td>5.07</td> <td>5.17</td> <td>4.86</td>
                <td>5.77</td>
              </tr>

              <tr>
                <td>28</td> <td>5.07</td> <td>5.17</td> <td>4.93</td>
                <td>5.77</td>
              </tr>

              <tr>
                <td>29</td> <td>5.07</td> <td>5.17</td> <td>4.99</td>
                <td>5.77</td>
              </tr>

              <tr>
                <td>30</td> <td>5.07</td> <td>5.17</td> <td>5.05</td>
                <td>5.77</td>
              </tr>
            </tbody>
          </table>

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
              <div style={{ margin: "0 10px" }} className="link_text">
                {textMode}
              </div>
            </button>
          </div>
        </div>

        <div
          className="calculation-flex flex-2dir input-css flex-dir"
          id={classNameModel}
          style={{ marginTop: "15px", marginRight: "0px" }}
        >
          <table style={{ direction: "rtl" }} className=" pdf-table">
            <caption
              style={{
                textAlign: "center",
                color: darkSide ? "black" : "white",
              }}
              className={bacgroundFooter}
            >
              17-9-2025
            </caption>

            <thead>
              <tr>
                <th style={{ width: "100%", textAlign: "center" }}>
                  البنك الفرنسي
                </th>
              </tr>
              <tr
                style={{ background: "rgba(34, 42, 69, 0.96)", color: "white" }}
              >
                <th>السنوات</th>

                <th> مدعوم </th>
                <th> غير مدعوم </th>
                <th style={{ height: "57px" }}> الدفاع </th>
                <th> قطاع خاص غير معتمد </th>
              </tr>
            </thead>
            <tbody className={tableDark}>
              <tr>
                <td style={{ padding: "7px 4px 0" }}>9-6</td> <td>3.75</td>
                <td>3.75</td> <td>3.75</td> <td>4.55</td>
              </tr>

              <tr>
                <td>10</td> <td>3.80</td> <td>3.80</td> <td>3.75</td>
                <td>4.60</td>
              </tr>

              <tr>
                <td>11</td> <td>3.85</td> <td>3.85</td> <td>3.85</td>
                <td>4.65</td>
              </tr>

              <tr>
                <td>12</td> <td>3.95</td> <td>3.95</td> <td>3.85</td>
                <td>4.75</td>
              </tr>

              <tr>
                <td>13</td> <td>4.00</td> <td>4.00</td> <td>3.85</td>
                <td>4.80</td>
              </tr>

              <tr>
                <td>14</td> <td>4.05</td> <td>4.05</td> <td>3.85</td>
                <td>4.85</td>
              </tr>

              <tr>
                <td>15</td> <td>4.10</td> <td>4.10</td> <td>3.85</td>
                <td>4.90</td>
              </tr>

              <tr>
                <td>16</td> <td>4.20</td> <td>4.20</td> <td>3.98</td>
                <td>5.00</td>
              </tr>

              <tr>
                <td>17</td> <td>4.25</td> <td>4.25</td> <td>3.98</td>
                <td>5.05</td>
              </tr>

              <tr>
                <td>18</td> <td>4.30</td> <td>4.30</td> <td>3.98</td>
                <td>5.10</td>
              </tr>

              <tr>
                <td>19</td> <td>4.35</td> <td>4.35</td> <td>3.98</td>
                <td>5.15</td>
              </tr>

              <tr>
                <td>20</td> <td>4.40</td> <td>4.40</td> <td>3.98</td>
                <td>5.20</td>
              </tr>

              <tr>
                <td>21</td> <td>4.45</td> <td>4.45</td> <td>4.30</td>
                <td>5.25</td>
              </tr>

              <tr>
                <td>22</td> <td>4.55</td> <td>4.55</td> <td>4.30</td>
                <td>5.35</td>
              </tr>

              <tr>
                <td>23</td> <td>4.60</td> <td>4.60</td> <td>4.30</td>
                <td>5.40</td>
              </tr>

              <tr>
                <td>24</td> <td>4.65</td> <td>4.65</td> <td>4.30</td>
                <td>5.45</td>
              </tr>

              <tr>
                <td>25</td> <td>4.70</td> <td>4.70</td> <td>4.30</td>
                <td>5.50</td>
              </tr>

              <tr>
                <td>26</td> <td>---</td> <td>---</td> <td>---</td> <td>---</td>
              </tr>

              <tr>
                <td>27</td> <td>---</td> <td>---</td> <td>---</td> <td>---</td>
              </tr>

              <tr>
                <td>28</td> <td>---</td> <td>---</td> <td>---</td> <td>---</td>
              </tr>

              <tr>
                <td>29</td> <td>---</td> <td>---</td> <td>---</td> <td>---</td>
              </tr>

              <tr>
                <td>30</td> <td>---</td> <td>---</td> <td>---</td> <td>---</td>
              </tr>
            </tbody>
          </table>

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
              <div style={{ margin: "0 10px" }} className="link_text">
                {textMode}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
