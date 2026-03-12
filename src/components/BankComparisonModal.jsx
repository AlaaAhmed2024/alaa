import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import html2canvas from "html2canvas";
import Form from 'react-bootstrap/Form';
import '../offers/amiri-normal'; // لا حاجة لتصدير — التحميل يتم تلقائيًا
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';

import { reshape } from 'arabic-reshaper';
import { amiriFont } from '../offers/amiri-normal'; // ملف الخط بصيغة base64
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";




import { formatNumberArabic, getBestBankBy } from './bankCalculationUtils';


/**
 * مكون Modal يعرض مقارنة شاملة بين جميع البنوك
 */
const BankComparisonModal = ({ show, onHide, comparisonData }) => {


  const [userEdit, setUserEdit] = useState("no");
  // الحصول على أفضل البنوك حسب معايير مختلفة
    const bestBynetNet1 = getBestBankBy(comparisonData, 'netNet1');
  const bestByProfit = getBestBankBy(comparisonData, 'lowestProfit');
  const bestByInstallment = getBestBankBy(comparisonData, 'lowestInstallment');
  const bestByDuration = getBestBankBy(comparisonData, 'shortestDuration');
  const bestByRate = getBestBankBy(comparisonData, 'lowestRate');
console.log(comparisonData)

const savedMode = localStorage.getItem("darkMode");


  if (savedMode) {
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

 const logoBase64 =
 "data:image/png;base64,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"



 var namePhotoPdf = date + "-"  +time+ ".pdf";
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
 const pdf = new jsPDF('l', 'pt', 'a4');
  // const pdf = new jsPDF('p', 'pt', 'a4');
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
    <Modal show={show} onHide={onHide} size="xl" centered scrollable>
      <Modal.Header closeButton>
        <Modal.Title style={{ textAlign: 'right', width: '100%' }}>
          🏦 مقارنة شاملة للبنوك
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="visable-x-y-auto" id="visable-x-y-auto">
        <div className="section-to-print  specific">
        {/* جدول المقارنة الرئيسي */}
        <div style={{ overflowX: 'auto', direction: 'rtl', marginBottom: '20px' }}>
          <h5 style={{ textAlign: 'right', marginBottom: '15px' }}>جدول المقارنة التفصيلي</h5>
          <table className="table table-striped table-hover table-sm">
            <thead className="table-dark">
              <tr style={{display:"table-row"}}>
                <th style={{ textAlign: 'right' }}>البنك</th>
                <th style={{ textAlign: 'center' }}>التمويل العقاري</th>
          
                <th style={{ textAlign: 'center' }}>التمويل الشخصي</th>
                <th style={{ textAlign: 'center' }}>دعم الإسكان</th>
                {userEdit==="yes"?(

                <th style={{ textAlign: 'center' }}>التمويل الصافي</th>
                ):(

                       <th style={{ textAlign: 'center' }}> اجمالي التمويل</th>
                )}
                 
           
                <th style={{ textAlign: 'center' }}>القسط الأول</th>
                <th style={{ textAlign: 'center' }}>القسط قبل التقاعد (المدة)</th>
                <th style={{ textAlign: 'center' }}>القسط بعد التقاعد (المدة)</th>
                <th style={{ textAlign: 'center' }}>المدة الكلية (شهر)</th>
                <th style={{ textAlign: 'center' }}>نسبة الفائدة %</th>

                                 












              </tr>
            </thead>
            <tbody className='diaply-css-fit' >
              {comparisonData && comparisonData.length > 0 ? (
                comparisonData.map((bank, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }}>
                    <td style={{ textAlign: 'right', fontWeight: 'bold' }}>
                      {bank.bankName}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      {(bank.realEstateFinance)}
                    </td>

                    <td style={{ textAlign: 'center' }}>
                      {(bank.personalFinance)}
                    </td>
                    <td style={{ textAlign: 'center'  }}>
                      {(bank.amountHousingSupport)}
                    </td>
                    {userEdit==="yes"?(


                    <td style={{ textAlign: 'center' }}>
                      {(bank.netNet1)}
                    </td>
                    ):(

                      <td style={{ textAlign: 'center' }}>
                        {(bank.total)}
                    </td>
                    )}
                   
                   
                    <td style={{ textAlign: 'center' }}>
                      {(bank.firstInstallment)}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      {`${bank.installmentBeforeRetirement } (${bank.durationBeforeRetirement})` }
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      {`${bank.installmentAfterRetirement} (${bank.durationAfterRetirement}) `}
                    </td>

                                     
                    <td style={{ textAlign: 'center' }}>
                      {formatNumberArabic(bank.totalDuration)}
                    </td>
                                        
                    <td style={{ textAlign: 'center' }}>
                    {Number(bank.profitRateRealEstate).toFixed(2)}%
                    </td>






                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '20px' }}>
                    <span style={{ color: '#999' }}>لا توجد بيانات للمقارنة</span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* جدول الفوائد والمدة */}
        {/* <div style={{ overflowX: 'auto', direction: 'rtl', marginBottom: '20px' }}>
          <h5 style={{ textAlign: 'right', marginBottom: '15px' }}>الفوائد والمدة</h5>
          <table className="table table-striped table-hover table-sm">
            <thead className="table-dark">
              <tr>
                <th style={{ textAlign: 'right' }}>البنك</th>
                <th style={{ textAlign: 'center' }}>المدة الكلية (شهر)</th>
                <th style={{ textAlign: 'center' }}>المدة قبل التقاعد</th>
                <th style={{ textAlign: 'center' }}>المدة بعد التقاعد</th>
                <th style={{ textAlign: 'center' }}>إجمالي الفائدة</th>
                <th style={{ textAlign: 'center' }}>نسبة الفائدة %</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData && comparisonData.length > 0 ? (
                comparisonData.map((bank, index) => (
                  <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }}>
                    <td style={{ textAlign: 'right', fontWeight: 'bold' }}>
                      {bank.bankName}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      {formatNumberArabic(bank.totalDuration)}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      {formatNumberArabic(bank.durationBeforeRetirement)}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      {formatNumberArabic(bank.durationAfterRetirement)}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      {formatNumberArabic(bank.totalProfit)}
                    </td>
                    <td style={{ textAlign: 'center', fontWeight: 'bold' }}>
                      {Number(bank.profitRateRealEstate).toFixed(2)}%
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center', padding: '20px' }}>
                    <span style={{ color: '#999' }}>لا توجد بيانات للمقارنة</span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div> */}

        {/* ملخص المقارنة والتوصيات */}
        {comparisonData && comparisonData.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <h5 style={{ textAlign: 'right', marginBottom: '15px', color: '#0238e8' }}>
              📊 ملخص المقارنة والتوصيات
            </h5>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '15px',
              direction: 'rtl'
            }}>
              {/* اعلي تمويل صافي   */}


               {bestBynetNet1 && (
                <div style={{
                  padding: '15px',
                  backgroundColor: '#e8f5e9',
                  borderRight: '4px solid #4caf50',
                  borderRadius: '5px'
                }}>
                  <h6 style={{ textAlign: 'right', marginBottom: '10px', color: '#2e7d32' }}>
                    ✓ أقل إجمالي فائدة
                  </h6>
                  <p style={{ textAlign: 'right', margin: '5px 0' }}>
                    <strong>{bestBynetNet1.bankName}</strong>
                  </p>
                  <p style={{ textAlign: 'right', margin: '5px 0', fontSize: '0.9em', color: '#555' }}>
                    الفائدة: {formatNumberArabic(bestBynetNet1.netNet1)} ريال
                  </p>
                </div>
              )}

              {bestByProfit && (
                <div style={{
                  padding: '15px',
                  backgroundColor: '#e8f5e9',
                  borderRight: '4px solid #4caf50',
                  borderRadius: '5px'
                }}>
                  <h6 style={{ textAlign: 'right', marginBottom: '10px', color: '#2e7d32' }}>
                    ✓ أقل إجمالي فائدة
                  </h6>
                  <p style={{ textAlign: 'right', margin: '5px 0' }}>
                    <strong>{bestByProfit.bankName}</strong>
                  </p>
                  <p style={{ textAlign: 'right', margin: '5px 0', fontSize: '0.9em', color: '#555' }}>
                    الفائدة: {formatNumberArabic(bestByProfit.totalProfit)} ريال
                  </p>
                </div>
              )}

              {/* أقل قسط أول */}
              {bestByInstallment && (
                <div style={{
                  padding: '15px',
                  backgroundColor: '#e3f2fd',
                  borderRight: '4px solid #2196f3',
                  borderRadius: '5px'
                }}>
                  <h6 style={{ textAlign: 'right', marginBottom: '10px', color: '#1565c0' }}>
                    ✓ أقل قسط أول
                  </h6>
                  <p style={{ textAlign: 'right', margin: '5px 0' }}>
                    <strong>{bestByInstallment.bankName}</strong>
                  </p>
                  <p style={{ textAlign: 'right', margin: '5px 0', fontSize: '0.9em', color: '#555' }}>
                    القسط: {formatNumberArabic(bestByInstallment.installmentBeforeRetirement)} ريال
                  </p>
                </div>
              )}

              {/* أقصر مدة */}
              {bestByDuration && (
                <div style={{
                  padding: '15px',
                  backgroundColor: '#fff3e0',
                  borderRight: '4px solid #ff9800',
                  borderRadius: '5px'
                }}>
                  <h6 style={{ textAlign: 'right', marginBottom: '10px', color: '#e65100' }}>
                    ✓ أقصر مدة تمويل
                  </h6>
                  <p style={{ textAlign: 'right', margin: '5px 0' }}>
                    <strong>{bestByDuration.bankName}</strong>
                  </p>
                  <p style={{ textAlign: 'right', margin: '5px 0', fontSize: '0.9em', color: '#555' }}>
                    المدة: {formatNumberArabic(bestByDuration.totalDuration)} شهر
                  </p>
                </div>
              )}

              {/* أقل نسبة فائدة */}
              {bestByRate && (
                <div style={{
                  padding: '15px',
                  backgroundColor: '#f3e5f5',
                  borderRight: '4px solid #9c27b0',
                  borderRadius: '5px'
                }}>
                  <h6 style={{ textAlign: 'right', marginBottom: '10px', color: '#6a1b9a' }}>
                    ✓ أقل نسبة فائدة
                  </h6>
                  <p style={{ textAlign: 'right', margin: '5px 0' }}>
                    <strong>{bestByRate.bankName}</strong>
                  </p>
                  <p style={{ textAlign: 'right', margin: '5px 0', fontSize: '0.9em', color: '#555' }}>
                    النسبة: {Number(bestByRate.profitRateRealEstate).toFixed(2)}%
                  </p>
                </div>
              )}
            </div>

            {/* ملاحظات مهمة */}
            <div style={{
              marginTop: '20px',
              padding: '15px',
              backgroundColor: '#fff9c4',
              borderLeft: '4px solid #fbc02d',
              borderRadius: '5px',
              direction: 'rtl',
              textAlign: 'right'
            }}>
              <h6 style={{ marginBottom: '10px', color: '#f57f17' }}>⚠️ ملاحظات مهمة:</h6>
              <ul style={{ margin: '0', paddingRight: '20px', fontSize: '0.9em' }}>
                <li>يجب مراعاة شروط كل بنك بالإضافة إلى الأرقام المعروضة</li>
                <li>يجيب تغير المده يدويا للمقارنه</li>
                <li>يجب تغير نظام الدعم و اعتيادي او ممتد و اعاده المقارنة</li>
                <li>هذه المقارنة بناءً على البيانات المدخلة فقط</li>
                <li>{`التاريخ و الوقت :  ${date + "-"  +time} `}</li>
              </ul>
            </div>
          </div>
        )}
        </div>
      </Modal.Body>
      <Modal.Footer>
          <div
    style={{ marginTop: "8px", direction: "" }}
    id="not-print"
    className="no-print responsive-footer"

  >
<Form.Select
  style={{ margin: "0px", height: "unset" }}
  value={userEdit}
  onChange={(event) => {
    setUserEdit(event.target.value);
  }}
>
  <option value="no">اظهار الاجمالي</option>
  <option value="yes">اظهار الصافي</option>
</Form.Select>


        <Button variant="secondary" onClick={onHide} style={{marginLeft:"20px"}}>
          إغلاق
        </Button>
        <Button 
          variant="primary" 

           onClick={printPdf}
        >
          طباعة المقارنة
        </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default BankComparisonModal;
