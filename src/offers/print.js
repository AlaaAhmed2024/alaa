
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./first.css"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import React, { useRef } from 'react';
import head from '../logo-head-dec.png'


export default function Therd(props) {

 
    const printPdf = () => {
        window.print();
       
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
     

      className="zindex"

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
        <Button onClick={props.onHide}>Close</Button>
         <Button variant="outline-secondary"  onClick={printPdf}>طباعة</Button>
        
      </Modal.Footer>
    </Modal>
  );
}







