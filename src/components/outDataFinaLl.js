import { useState } from "react";
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


export default function OutDataFinal({ isVisble, data, input, dark }) {
  const [userEdit, setUserEdit] = useState({
    editReal: "",
    net: "net",
    phoneUser: "050...",
    nameUser: "احمد القحطاني",
  });

  const [plus, setPlus] = useState(0);

  const changeUserFieldHandlerplus = (e) => {
    setPlus(e.target.value);
  };

  if (dark) {
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
  if (input.realEstateBank === "alahli") {
    var imageBank = ahly;
  } else if (input.realEstateBank === "alrajhi") {
    var imageBank = alrajhi;
  } else if (input.realEstateBank === "albilad") {
    var imageBank = albilad;
  } else if (input.realEstateBank === "alfransi") {
    var imageBank = alfransi;
  } else if (input.realEstateBank === "alinma") {
    var imageBank = alinma;
  } else if (input.realEstateBank === "sab") {
    var imageBank = sab;
  } else {
    var imageBank = "";
  }
  //=====================================

  var totalDurationOut = data.totalDurationN;

 var installmentMinistryDefense= data.installmentMinistryDefense
 var durationMinistryDefense=data.durationMinistryDefense
  if (
    data.installmentMinistryDefense == 0 ||
    data.installmentMinistryDefense == ""
  ) {
    var textRealEstateFinance = "التمويل العقاري ";
    var addMinistryDefense = 0;
  } else {
    var textRealEstateFinance = " العقاري و دعم الدفاع ";
    var addMinistryDefense = 160000;
  }

  //========================================================================
  if (input.housingSupport == "baqa" || input.housingSupport == "no") {
    var col1 = "القسط الشهري";
    var col2 = "";
    var col3 = "";
    var col4 = " المده بالاشهر";
    var displyNone = true;
    var house = 0;
    var top = "-160px";

    var colFirst = data.colFirst;
    var colSecend = data.colSecend;
    var colThrid = data.colThrid;
    var colFouer = 0;


   
        var durationColFirst = data.maxDurationFirstInstallment;
 
    


        var durationColSecond = data.durationBeforeRetirement - durationColFirst;
    
    
     
       var durationThird = 1 * data.durationAfterRetirement;

    


   
    var durationfour = 0;

    var outHouse = true;
    //========================================================================
  } else {
    var col1 = "القسط قبل الدعم";
    var col2 = "الدعم المسترد";
    var col3 = "القسط بعد الدعم";
    var col4 = " المده بالاشهر";
    var displyNone = false;
   // var house = new Intl.NumberFormat().format((~~1 * data.house).toFixed(0));
   var house = data.amountHousingSupport
    var top = "-190px";

    var colFirst = data.colFirst;
    var colSecend = data.colSecend;

    var colFirstN = data.colFirstN;
    var colSecendN = data.colSecendN;

    var durationColFirst = data.maxDurationFirstInstallment;
    var durationColSecond = Math.min(
      240 - durationColFirst,
      1 * data.durationBeforeRetirement - durationColFirst
    );

    if (data.durationBeforeRetirement >= 240) {
      var colThrid = colSecendN; //200 تقريبي
      var colThridN = colThrid;

      var durationThird = Math.max(
        0,
        1 * (~~1 * data.durationBeforeRetirement - 240)
      );
      var durationfour =
        12 * totalDurationOut -
        (durationThird + durationColSecond + durationColFirst);

      if (data.durationBeforeRetirement >= 12 * totalDurationOut) {
        var colFouer = colThrid;
      } else {
        var colFouer = data.colFouer;
      }
    } else {
      var colFouer = data.colFouer;
      var colThrid = data.colThrid;
      var colThridN = data.colThridN;

      var durationThird = Math.max(
        0,
        Math.min(
          240 - (durationColFirst + durationColSecond),
          1 * (1 * data.durationAfterRetirement)
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

  //===============================

  var tonumber = parseInt(1 * userEdit.editReal);
  if (userEdit.editReal === "") {
    var realEstateFinanceFinal = (~~1 * data.outReal) / 1;
    var totaledit =
      (~~1 *
        (1 * data.outPresonal +
          1 * data.outBaqa +
          1 * data.outReal +
          1 * data.outAddministryDefense)) /
        1 +
      (~~1 * plus) / 1;
  } else {
    var realEstateFinanceFinal = tonumber;
    var totaledit =
      (~~1 *
        (realEstateFinanceFinal +
          1 * data.outPresonal +
          1 * data.outBaqa +
          1 * data.outAddministryDefense)) /
        1 +
      (~~1 * plus) / 1;
  }

  if (data.outReal === 0 && userEdit.editReal === "") {
    var netNet = 0;
  } else if (userEdit.net == "net") {
    if (input.firstHouse === "yes") {
      if (input.downPayment === "10") {
        var netT = totaledit / 0.9;
        var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
        var netT2 = (netT * 2.5) / 100;
        var net3 = 0 * netT2;
        var netNet = totaledit - netT1 - netT2 - net3 - 5700;
      } else if (input.downPayment === "5") {
        var netT = totaledit / 0.95;
        var netT1 = Math.max(0, ((netT - 1000000) * 5) / 100);
        var netT2 = (netT * 2.5) / 100;
        var net3 = 0 * netT2;
        var netNet = totaledit - netT1 - netT2 - net3 - 5700;
      } else if (input.downPayment === "20") {
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
      if (input.downPayment === "10") {
        var netT = totaledit / 0.9;
        var netT1 = (netT * 5) / 100;
        var netT2 = (netT * 2.5) / 100;
        var net3 = 0 * netT2;
        var netNet = totaledit - netT1 - netT2 - net3 - 5700;
      } else if (input.downPayment === "5") {
        var netT = totaledit / 0.95;
        var netT1 = (netT * 5) / 100;
        var netT2 = (netT * 2.5) / 100;
        var net3 = 0 * netT2;
        var netNet = totaledit - netT1 - netT2 - net3 - 5700;
      } else if (input.downPayment === "20") {
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
    (~~1 * data.outPresonal).toFixed(0)
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

  const printPdf = () => {
    window.print();
  };






  
  var namePhoto = input.name + ".png";

  // function capture() {
  //   html2canvas(document.body).then((canvas) => {
      
  //     let a = document.createElement("a");
  //     a.download = namePhoto;
  //     a.href = canvas.toDataURL("image/png");
  //     // a.href = canvas.toDataURL("image/jpeg");
  //     a.click();
  //   });
  // }




  
  function capture() {
    html2canvas(document.querySelector('#modal-content')).then((canvas) => {
      

      let a = document.createElement("a");
      a.download = namePhoto;
      a.href = canvas.toDataURL("image/png");
      // a.href = canvas.toDataURL("image/jpeg");
      // var base64image = canvas.toDataURL("image/png");
      // window.open(base64image , "_blank");
      a.click();
    });
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

  if (isVisble) {
    return (
      <div id="modal" className="section-to-print  specific">
        <div
          id="modal-content"
          className="phone-width"
          style={{
            backgroundColor: dark ? "#F2F2F2" : "#222A44",
            color: dark ? "black" : "white",

            marginTop: top,
            border: borderStyle,
            padding: "15px 15px 5px 15px",

            position: "fixed",
            right: "50%",
            top: "5%",
          }}
          
        >
          <div className="table-outData">
            <table>
              <thead>
                <tr style={{ height: "50px", display: "table-row" }}>
                  <th>
                    {" "}
                    <img
                      alt=""
                      src={imageBank}
                      className={dark ? "loge-right" : "imageWtoB-right"}
                      style={{ right: "30px" }}
                    />
                  </th>
                  <th
                    colspan="3"
                    className="show-eskan"
                    style={{ verticalAlign: "top", position: "relative" }}
                  >
                    اسكان سلمان العقارية
                  </th>
                  <th>
                    <img
                      alt=""
                      src={im}
                      className={dark ? "loge-left" : "imageWtoB"}
                      style={{}}
                    />
                  </th>
                  {/* <th><img alt="" src={im} className={ dark ? "loge-left" : "imageWtoB" } style={{ marginLeft: "15px", height:"35px",width:"80px"}} /></th> */}
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
                        backgroundColor: dark ? "#F2F2F2" : "#222A44",
                        color: dark ? "black" : "white",
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
                  <td> {data.nameAmountHousingSupport}</td>
                  <td colspan="2">{data.amountHousingSupport}</td>

                  <td>صافي العقار</td>
                  <td>{netChiqe}</td>
                </tr>
                <tr
                  style={{
                    justifyContent: "center",
                    backgroundColor: dark ? "#d5e2ef" : "black",
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

                <tr>
                  <td> مده التمويل</td>
                  <td>{data.totalDuration}</td>
                  <td>{"ا/" + input.name}</td>
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
                        backgroundColor: dark ? "#F2F2F2" : "#222A44",
                        color: dark ? "black" : "white",
                        padding: "0px",
                      }}
                    />
                  </td>
                  <td>
                    <input
                      name="phoneUser"
                      value={userEdit.phoneUser}
                      onChange={(e) => changeUserFieldHandler(e)}
                      //  // onKeyDown={checkLength}
                      maxLength="50"
                      type="number"
                      style={{
                        marginBottom: "0px",
                        height: "30px",
                        width: "100%",
                        backgroundColor: dark ? "#F2F2F2" : "#222A44",
                        color: dark ? "black" : "white",
                        padding: "0px",
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <button type="button"  class="btn-close close-top " data-bs-dismiss="alert" aria-label="Close" style={{}}></button> */}
          <div style={{ marginTop: "8px" }} id="not-print">
            <input
              name="editReal"
              placeholder="التمويل يدوي"
              // onKeyDown={checkLength}
              maxLength="8"
              type="number"
              style={{
                width: "31%",
                margin: "0 0 0 4px",
                display: "inline-block",
                height: "33px",
              }}
              value={userEdit.editReal}
              onChange={(e) => changeUserFieldHandler(e)}
            />

            <select id="font-13"
              style={{ width: "31% ", display: "inline-block", height: "33px" }}
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
            </select>

            <button
              className="btn btn-secondary"
              style={{
                display: "inline-block",
                width: " 17%",
                padding: "4px",
                marginTop: " -5px",
                marginLeft: "4px",
              }}
              onClick={printPdf}
            >
              طباعه
            </button>

            <button
              className="btn btn-secondary"
              style={{
                display: "inline-block",
                width: " 17%",
                padding: "4px",
                marginTop: " -5px",
              }}
              onClick={capture}
            >
              صورة
            </button>

            {/* <button type="button" className="btn btn-default button">Take a Screenshot!</button> */}
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
