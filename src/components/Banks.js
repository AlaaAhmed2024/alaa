import { useContext, useEffect, useState } from "react";
import "./home.css";
import showImage from "../show.png";
import noneshowImage from "../noun-plus-2178969.png";
import bankFile from "../photo/bankFileFinalLast.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faCircleMinus,
  faCircleHalfStroke,
  faMoon,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { ColorModeContext } from "../Context/ThemeContext";
{
  /* <FontAwesomeIcon icon={faCloudArrowDown} />
<FontAwesomeIcon icon={faDownload} />
<FontAwesomeIcon icon={faFileArrowDown} /> */
}

export default function Banks(props) {



  // const [darkSide, setShwoDarkSide] = useState( ()=>{

  // const savedMode = localStorage.getItem("darkMode");
  //  if (savedMode === "true") return true;
  //  if (savedMode === "false") return false;
  // return true; // الوضع الافتراضي
  // }
  
  
  // );

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



  // function handelDarkSide() {
  //   setShwoDarkSide(!darkSide);
  // }

  if (props.pDarkSide) {
    var textMode = "داكن";
    var classNameModel = "col-4 box bank";
    var ic1 = faMoon;
    var classRotate = 0;
    var classColor = "model-light";
    var tableDark = "";
    var lableMode = "flex net-salary";
    var backColor = "link-log-dark  dark-buttom-about";
  } else if (darkSide) {
    var textMode = "داكن";
    var classNameModel = "col-4 box bank";
    var ic1 = faMoon;
    var classRotate = 0;
    var classColor = "model-light";
    var tableDark = "";
    var lableMode = "flex net-salary";
    var backColor = "link-log-dark  dark-buttom-about";
  } else {
    var textMode = "فاتح";
    var classNameModel = "col-4 box bank-dark";
    var ic1 = faCircleHalfStroke;
    var classRotate = 180;
    var classColor = "#050505";
    var tableDark = "table-Dark";
    var lableMode = "flex net-salary-dark";
    var backColor = "link-log-dark  dark-buttom-about  back-color";
  }

  const [shwo, setShow] = useState(false);
  const [shwo2, setShow2] = useState(false);
  const [shwo3, setShow3] = useState(false);
  const [shwo4, setShow4] = useState(false);
  const [shwo5, setShow5] = useState(false);
  const [shwo6, setShow6] = useState(false);
  const [shwo7, setShow7] = useState(false);
  const [shwo8, setShow8] = useState(false);
  const [shwo9, setShow9] = useState(false);

  const handleShow = () => {
    setShow(!shwo);
  };

  const handleShow2 = () => {
    setShow2(!shwo2);
  };
  const handleShow3 = () => {
    setShow3(!shwo3);
  };
  const handleShow4 = () => {
    setShow4(!shwo4);
  };
  const handleShow5 = () => {
    setShow5(!shwo5);
  };
  const handleShow6 = () => {
    setShow6(!shwo6);
  };
  const handleShow7 = () => {
    setShow7(!shwo7);
  };

  const handleShow8 = () => {
    setShow8(!shwo8);
  };
  const handleShow9 = () => {
    setShow9(!shwo9);
  };
  return (
    <div className="container">
      <div
        className="row"
        style={{
          backgroundColor: darkSide ? "white" : "#242844",
          marginTop: " 30px",
        }}
      >
        <div className={classNameModel} style={{ marginTop: "0px" }}>
          <h4
            style={{
              color: "white",
              marginTop: "10px",
              textAlign: "center",
              padding: "5px",
            }}
          >
            <b> ملف السياسات </b>
            <span>
              <button className="btn-show">
                <a
                  href={bankFile}
                  alt="pdf"
                  title="تحميل الملف"
                  target="_blank"
                  style={{ padding: "5px" }}
                >
                  <span>
                    <FontAwesomeIcon
                      icon={faFileArrowDown}
                      style={{ color: "#374fc8", fontSize: "1.3rem" }}
                    />
                    <span style={{ padding: "10px", color: "black" }}>
                      تحميل
                    </span>
                  </span>
                </a>
              </button>
            </span>
          </h4>
        </div>

        <div className={classNameModel}>
          <h4
            style={{
              color: "white",
              marginTop: "10px",
              textAlign: "center",
              padding: "5px",
              cursor:"pointer"
            }}
            onClick={handleShow}
          >
            <b >سياسة الأهلي</b>
            <span>
              <button onClick={handleShow} className="btn-show">
                <span>
                  {shwo ? (
                    <FontAwesomeIcon
                      icon={faCircleMinus}
                      flip="both"
                      style={{ color: "#374fc8", fontSize: "1.3rem" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCirclePlus}
                      flip="both"
                      style={{ color: "#374fc8", fontSize: "1.3rem" }}
                    />
                  )}
                  <span style={{ padding: "10px" }}>
                    {shwo ? "اخفاء" : "اظهار"}
                  </span>
                </span>
              </button>
            </span>

            {/* <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div> */}
          </h4>
          <div>
            <div style={{ display: shwo ? "" : "none" }}>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>حدود الرواتب </b>
              </u>
              <li>
                {" "}
                اقل راتب القطاع الحكومي والعسكري <mark>5,000</mark>
              </li>
              <li>
                {" "}
                اقل راتب للقطاع الخاص المعتمد <mark>5,000</mark>
              </li>
              <li>
                {" "}
                اقل راتب للمتقاعدين <mark>4.000</mark>
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b> التمويل الشخصي </b>
              </u>
              <li>
                {" "}
                القطاع العسكري والحكومي والمتقاعدين بداية من اول راتب علي البنك{" "}
              </li>
              <li> القطاع الخاص المعتمد بداية من اول راتب علي البنك </li>
              <li> القطاع الخاص الغير معتمد لا يستحق تمويل شخصي </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>التمويل العقاري </b>
              </u>

              <li>
                {" "}
                التقاعد الفعلي للمدنيين 60 سنه بالإضافة الي 15 سنة تمديد(75) سنه
              </li>
              <li>
                {" "}
                التقاعد الفعلي للعساكر علي الرتبة الفعلية + 15 سنة تمديد بحد
                اقصي{" "}
              </li>
              <li>
                {" "}
                في حالة عدم انتظام الثلاث رواتب الأخيرة نعتمد علي متوسط الراتب
              </li>
              <li>
                {" "}
                الأفضل في حالة وجود اكثر من التزام توحيد الالتزامات في حاله رغبه
                العميل في الحصول علي اقصي مبلغ تمويل ( مده الالتزامات الاخري حتي
                التقاعد )
              </li>
              <li> شراء وحدة جاهزة من السوق -ارض وقرض-بناء ذاتي </li>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>أولا : عميل البنك مدعوم</b>
              </u>
              <li> الاستقطاع من الراتب في حاله الباقه او قسط الدعم 65% </li>
              <li>
                {" "}
                اقصي مدة للتمويل في حاله اضافه قسط الدعم جزء من الدخل 20 سنه و
                في حاله عدم اضافه قسط الدعم علي الراتب او باقه الدعم 30 سنه
              </li>
              <u style={{ color: darkSide ? "red" : "#5edc44" }}>
                <b>ثانيا : عميل البنك الغير مدعوم</b>
              </u>
              <li> الراتب الأقل من 15.000 استقطاع 55% </li>
              <li> الراتب الاعلي من 15,000 استقطاع 65%</li>
              <li> مدة التمويل تصل الي 30 سنة</li>
              <li>
                {" "}
                (بالنسبة للعقار لا يحتاج شهادة الاشغال وبرنت اطلاق التيار)
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>ثالثا : عميل بدون تحويل راتب المدعوم و غير المدعوم </b>
              </u>

              <li> لا يوجد في الوقت الراهن ...</li>
              <u style={{ color: darkSide ? "red" : "#5edc44" }}>
                <b>الدعم السكني</b>
              </u>
              <li> قسط دعم شهري علي 20 سنه علي حسب الراتب</li>
              <li> باقة دعم 150.000 الرواتب اقل من 10.000 </li>
              <li> باقة دعم 100.000 الرواتب اكبر من 10.000 </li>

              <hr></hr>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>كيفية احتساب عميل الممتد </b>
              </u>
              <br></br>
              <u style={{ color: darkSide ? "red" : "#5edc44" }}>
                <b>أولا الراتب التقاعدي الي 70 سنة </b>
              </u>

              <li> الفئة : جندي - عريف - وكيل رقيب</li>
              <li>
                {" "}
                60% من الراتب الصافي في حالة متبقي علي تقاعدة اقل من 5 سنوات
              </li>
              <li>
                {" "}
                70% من الراتب الصافي في حالة متبقي علي تقاعدة اكتر من 5 سنوات
              </li>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>ثانيا الراتب التقاعدي الي 75 سنة </b>
              </u>

              <li>
                {" "}
                الفئة : رقيب - رئيس رقباء - ضباط- مدنين- القطاعات المعتمدة
              </li>
              <li>
                {" "}
                70% من الراتب الصافي في حالة متبقي علي تقاعدة اقل من 5 سنوات
              </li>
              <li>
                {" "}
                80% من الراتب الصافي في حالة متبقي علي تقاعدة اكتر من 5 سنوات
              </li>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>القطاع الخاص الغير معتمد </b>
              </u>

              <li> لابد من نزول 3 رواتب علي البنك </li>
              <li> اقل مدة خدمة 6 اشهر </li>
              <li> المحتسب علي التقاعد الفعلي </li>
              <li> اعلي مبلغ تمويل 1,000,000</li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>ملاحظات </b>
              </u>
              <li>
                {" "}
                الحد الاقصي لمده التمويل 15 سنة بعد التقاعد لجميع القطاعات
              </li>
              <li> تنطبق سياسة الممتد مع عميل البنك مدعوم او غير مدعوم </li>
              <li>
                {" "}
                في حاله كان الراتب اللي بينزل بالصراف +10% من الراتب اللي
                بالصراف اقل من صافي التعريف يتم احتساب علي الصراف +10% الصراف{" "}
              </li>
            </div>
          </div>
        </div>

        <div className={classNameModel}>
          <h4
            style={{
              color: "white",
              marginTop: "10px",
              textAlign: "center",
              padding: "5px",
               cursor:"pointer"
            }}
            onClick={handleShow2}
          >
            <b>سياسة الراجحي</b>
            <span>
              <button onClick={handleShow2} className="btn-show">
                <span>
                  {shwo2 ? (
                    <FontAwesomeIcon
                      icon={faCircleMinus}
                      flip="both"
                      style={{ color: "#374fc8", fontSize: "1.3rem" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCirclePlus}
                      flip="both"
                      style={{ color: "#374fc8", fontSize: "1.3rem" }}
                    />
                  )}
                  <span style={{ padding: "10px" }}>
                    {shwo2 ? "اخفاء" : "اظهار"}
                  </span>
                </span>
              </button>
            </span>
          </h4>
          <div>
            <div style={{ display: shwo2 ? "" : "none" }}>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>حدود الرواتب </b>
              </u>
              <li>
                {" "}
                اقل راتب في حاله قسط الدعم لجميع القطاعات يكون بالصراف 5,000 و
                الإجمالي بالتعريف مع اضافه قسط الدعم 6,000{" "}
              </li>
              <li>
                {" "}
                اقل راتب في حاله الباقه او غير مدعوم يكون بالصراف{" "}
                <mark>5,000</mark> و الإجمالي بالتعريف <mark>6,000</mark>{" "}
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b> التمويل الشخصي </b>
              </u>
              <li>
                {" "}
                القطاع العسكري والحكومي والمتقاعدين والقطاعات المعتمدة بداية من
                اول راتب علي البنك
              </li>
              <li> القطاع الخاص الغير معتمد لا يستحق تمويل شخصي </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>التمويل العقاري</b>
              </u>

              <li>
                {" "}
                التقاعد الفعلي للمدنيين 60 سنه بالإضافة الي تمديد لـ عمر77
              </li>
              <li>
                {" "}
                التقاعد الفعلي للعساكر الافراد علي الرتبة الفعلية + تمديد لـ عمر
                70
              </li>
              <li>
                {" "}
                الأفضل للعساكر حاله الراتب الأساسي قليل تمويل الي التقاعد الفعلي
              </li>
              <li> المتقاعد حتي عمر 77 سنه</li>
              <li> شراء وحدة جاهزة من السوق -ارض وقرض-بناء ذاتي </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>أولا : عميل البنك مدعوم</b>
              </u>
              <li> الاستقطاع من الراتب في حاله الباقه او قسط الدعم 65% </li>
              <li>اقصي مدة للتمويل 30 سنه</li>
              <li>
                {" "}
                لا بد من اضافه قسط الدعم علي الراتب بدلا من الباقه في حاله
                الراتب الإجمالي اقل من 6,000
              </li>

              <u style={{ color: darkSide ? "red" : "#5edc44" }}>
                <b>ثانيا : عميل البنك الغير مدعوم</b>
              </u>
              <li> الراتب الأقل من 15.000 استقطاع 55% </li>
              <li> الراتب الاعلي من 15,000 استقطاع 65%</li>
              <li> مدة التمويل تصل الي 30 سنة</li>
              <li>
                {" "}
                (بالنسبة للعقار لا يحتاج شهادة الاشغال وبرنت اطلاق التيار)
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>ثالثا : عميل بدون تحويل راتب المدعوم و غير المدعوم </b>
              </u>

              <li>
                {" "}
                الافراد جندي الي رئيس رقباء – خاص غير معتمد ) لا يستحق بدون
                تحويل لابد من تحويل الراتب علي البنك
              </li>
              <li>العملاء المدنيين والعساكر بداية من ملازم </li>
              <li>اقل راتب للمدنيين والعسكرين ضباط و قطاع خاص المعتمد 7,500</li>

              <u style={{ color: darkSide ? "red" : "#5edc44" }}>
                <b>الدعم السكني</b>
              </u>
              <li> قسط دعم شهري علي 20 سنه علي حسب الراتب</li>
              <li> باقة دعم 150.000 الرواتب اقل من 10.000 </li>
              <li> باقة دعم 100.000 الرواتب اكبر من 10.000 </li>

              <hr></hr>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>كيفية احتساب عميل الممتد </b>
              </u>
              <br></br>

              <li>
                بالنسبة للقطاع الحومي والعسكري يتم زيادة الراتب الاساسي بمقدار
                2.5% من الراتب الاساسي + بدل السكن كل سنه بحد اقصي 12 سنه بشرط
                المدة المتبقيه للتقاعد اكبر من 5 سنوات
              </li>
              <li>
                بالنسبة للقطاعات الشبه حكومي والشركات الكبري يتم زيادة الراتب
                الاساسي بمقدار 1.25% من الراتب الاساسي + بدل السكن كل سنه بحد
                اقصي 12 سنه بشرط المدة المتبقيه للتقاعد اكبر من 5 سنوات
              </li>

              <li>بالنسبة للقطاعات الخاصه لا يتم زيادة التقاعدي</li>
              <li>
                الراتب التقاعدي للمدني اجمالي مده الخدمه السابقه و القادمه تقسيم
                40 سنه ضرب الراتب الاساسي بعد التعديل
              </li>
              <li>
                الراتب التقاعدي للعساكر اجمالي مده الخدمه السابقه و القادمه
                تقسيم 35 سنه ضرب الراتب الاساسي بعد التعديل
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>القطاع الخاص الغير معتمد </b>
              </u>
              <li>الحد الأدنى للراتب 7.000</li>
              <li> لابد من نزول 6 رواتب علي البنك </li>
              <li> اقل مدة خدمة سنه </li>
              <li> المحتسب علي التقاعد الفعلي </li>
              <li> اعلي مبلغ تمويل 2,000,000</li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>ملاحظات </b>
              </u>
              <li> الاستقطاع من الراتب في حاله باقة الدعم 65% </li>
              <li>
                {" "}
                امكانيه التضامن ولكن بدون الدعم السكنى حتي لو مستحق و المحتسب
                على مدة التمويل الأقل للمتضامنيين
              </li>
            </div>
          </div>
        </div>

        <div className={classNameModel}>
          <h4
            style={{
              color: "white",
              marginTop: "10px",
              textAlign: "center",
              padding: "5px",
               cursor:"pointer"
            }}
            onClick={handleShow3}
          >
            <b>سياسة البلاد</b>
            <span>
              <button onClick={handleShow3} className="btn-show">
                <span>
                  {shwo3 ? (
                    <FontAwesomeIcon
                      icon={faCircleMinus}
                      flip="both"
                      style={{ color: "#374fc8", fontSize: "1.3rem" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCirclePlus}
                      flip="both"
                      style={{ color: "#374fc8", fontSize: "1.3rem" }}
                    />
                  )}
                  <span style={{ padding: "10px" }}>
                    {shwo3 ? "اخفاء" : "اظهار"}
                  </span>
                </span>
              </button>
            </span>
          </h4>
          <div>
            <div style={{ display: shwo3 ? "" : "none" }}>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>حدود الرواتب </b>
              </u>
              <li>
                {" "}
                اقل راتب القطاع الحكومي <mark>3,000</mark>
              </li>
              <li>
                {" "}
                اقل راتب القطاع العسكري <mark>5,000</mark>
              </li>
              <li>
                {" "}
                اقل راتب للقطاع الخاص المعتمد كلاس A <mark>3,000</mark>
              </li>
              <li>
                {" "}
                اقل راتب للقطاع الخاص المعتمد كلاس B <mark>5,000</mark>
              </li>
              <li>
                {" "}
                اقل راتب للمتقاعدين <mark>3.500</mark>
              </li>
              <li>
                {" "}
                اقل راتب للقطاع الحومي و العسكري و الخاص المعتمد بدون تحويل راتب{" "}
                <mark>7.000</mark>
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b> التمويل الشخصي </b>
              </u>
              <li>
                {" "}
                القطاع العسكري والحكومي والمتقاعدين بداية من اول راتب علي البنك{" "}
              </li>
              <li> القطاع الخاص المعتمد بداية من اول راتب علي البنك </li>
              <li> القطاع الخاص الغير معتمد لا يستحق تمويل شخصي </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>التمويل العقاري </b>
              </u>

              <li>
                {" "}
                التقاعد الفعلي للمدنيين 60 سنه بالإضافة الي 10 سنوات تمديد(70)
                سنه
              </li>
              <li>
                {" "}
                التقاعد الفعلي للعساكر علي الرتبة الفعلية + تمديد الي 70 سنه{" "}
              </li>
              <li>
                اضافه سنتين استثناء للعساكر علي التقاعد الفعلي ماعدا الجندي و
                والعريف لشرط يكون مدعوم
              </li>
              <li>
                المتقاعد مدة التمويل الي عمر 70 سنه للمدعوم و الي عمر 65 سنه
                للغير مدعوم
              </li>
              <li>
                اضافه قسط الدعم للمدعوم علي الراتب حتي التقاعد الفعلي حتي وان
                كان اقل من 20 سنه
              </li>
              <li>اقصي مده للتمويل 30 سنه</li>
              <li> شراء وحدة جاهزة من السوق -ارض وقرض-بناء ذاتي </li>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>أولا : عميل البنك مدعوم</b>
              </u>
              <li>الاستقطاع من الراتب في حاله قسط الدعم 65%</li>
              <li>
                اضافه قسط الدعم علي الراتب الي التقاعد الفعلي فقط او 20 سنه
                ايهما اقل
              </li>
              <li>
                الاستقطاع من الراتب في حاله باقة الدعم نفس سيساسه الاستقطاع
                للغير مدعوم
              </li>
              <u style={{ color: darkSide ? "red" : "#5edc44" }}>
                <b>ثانيا : عميل البنك الغير مدعوم</b>
              </u>
              <li> الراتب الأقل من 15.000 استقطاع 55% </li>
              <li> الراتب الاعلي من 15,000 استقطاع 65%</li>
              <li> مدة التمويل تصل الي 30 سنة</li>
              <li>
                {" "}
                (بالنسبة للعقار لا يحتاج شهادة الاشغال وبرنت اطلاق التيار)
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>ثالثا : عميل بدون تحويل راتب المدعوم و غير المدعوم </b>
              </u>
              <li>
                اقل راتب للقطاع الحكومي و العسكري و الخاص المعتمد{" "}
                <mark>7,000</mark>
              </li>
              <li>النتقاعد لابد من تحويل الراتب علي البنك</li>
              <li>المنتجات المتاحه شراء وحدة سكنيه جاهزه من السوق</li>
              <li>نقاط سمه لا تقل عن 510</li>
              <li></li>
              <li>اقل مده للخدمة سنه في التامينات و الوظيفه الحاليه 6 اشهر</li>
              <li>لا يوجد متعثرات اخر 6 اشهر</li>

              <li>
                امكانيه منح التمويل العقاري بتثبيت الراتب للقطاع الحكومي و
                العسكري و شبه الحكومي القطاع المعتمد شبه الحكومي و متقاعد
                التامينات اما متقاعد المؤسسه لابد من نزول راتب علي البنك{" "}
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>القطاع الخاص الغير معتمدالمدعوم عميل البنك </b>
              </u>
              <li>
                اقل راتب <mark>15,000</mark>
              </li>

              <li> مدة الخدمة لا تقل عن سنه </li>

              <li> لابد من تحويل الراتب علي البنك </li>

              <u style={{ color: darkSide ? "red" : "#5edc44" }}>
                <b>الدعم السكني</b>
              </u>
              <li> قسط دعم شهري علي 20 سنه علي حسب الراتب</li>
              <li> باقة دعم 150.000 الرواتب اقل من 10.000 </li>
              <li> باقة دعم 100.000 الرواتب اكبر من 10.000 </li>

              <hr></hr>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>كيفية احتساب عميل الممتد </b>
              </u>
              <br></br>

              <li>
                الراتب التقاعدي للمدني اجمالي مده الخدمه السابقه و القادمه تقسيم
                36 سنه ضرب الراتب الاساسي
              </li>
              <li>
                الراتب التقاعدي للعساكر اجمالي مده الخدمه السابقه و القادمه
                تقسيم 36 سنه ضرب الراتب الاساسي
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>ملاحظات </b>
              </u>
              <li>
                الاستقطاع من الراتب في حاله باقه الدعم هو نفس الاستقطاع في حاله
                العميل الغير مدعوم
              </li>
              <li>
                سنوات الاستثناء للعساكر ماعد الجندي و العرف شرط ان يكون مدعوم
              </li>
              <li>
                اقل مده خدمة للعساكر الافراد من جندي الي رئيس رقباء 3 اشهر
              </li>
              <li>اقل مده خدمة للعساكر الضباط شهر</li>
              <li>اقل مده خدمة للقطاع الخاص كلاس A شهر</li>
              <li>اقل مده خدمة للقطاع الخاص كلاس B ثلاث شهر</li>
              <li>
                {" "}
                الاستفاده من الدعم في حاله التضامن للعميل المدعوم و يعامل كل
                عميل كانة عميل لحاله
              </li>
            </div>
          </div>
        </div>

        <div className={classNameModel}>
          <h4
            style={{
              color: "white",
              marginTop: "10px",
              textAlign: "center",
              padding: "5px",
               cursor:"pointer"
            }}
            onClick={handleShow4}
          >
            <b>سياسة الانماء</b>
            <span>
              <button onClick={handleShow4} className="btn-show">
                <span>
                  {shwo4 ? (
                    <FontAwesomeIcon
                      icon={faCircleMinus}
                      flip="both"
                      style={{ color: "#374fc8", fontSize: "1.3rem" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCirclePlus}
                      flip="both"
                      style={{ color: "#374fc8", fontSize: "1.3rem" }}
                    />
                  )}
                  <span style={{ padding: "10px" }}>
                    {shwo4 ? "اخفاء" : "اظهار"}
                  </span>
                </span>
              </button>
            </span>
          </h4>
          <div>
            <div style={{ display: shwo4 ? "" : "none" }}>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>حدود الرواتب </b>
              </u>
              <li>
                {" "}
                اقل راتب للمدعوم لجميع القطاعات <mark>3,000</mark>
              </li>
              <li>
                {" "}
                اقل راتب للغير مدعوم الحكومي و العسكري و الخاص المعتمد{" "}
                <mark>5,000</mark>
              </li>
              <li>
                {" "}
                اقل راتب للغير مدعوم القطاع الخاص الغير معنمد{" "}
                <mark>10,000</mark>
              </li>
              <li>
                {" "}
                اقل راتب للمتقاعدين <mark>3.000</mark>
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b> التمويل الشخصي </b>
              </u>
              <li>
                {" "}
                القطاع العسكري والحكومي والمتقاعدين بداية من اول راتب علي البنك{" "}
              </li>
              <li>
                {" "}
                القطاع الخاص المعتمد بداية من اول راتب علي البنك و لا يقل الراتب
                عن <mark>5,000</mark>{" "}
              </li>
              <li> القطاع الخاص الغير معتمد لا يستحق تمويل شخصي </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>التمويل العقاري </b>
              </u>

              <li>
                {" "}
                التقاعد الفعلي للمدنيين 60 سنه بالإضافة الي 15 سنة تمديد(75) سنه
              </li>
              <li>
                {" "}
                التقاعد الفعلي للعساكر علي الرتبة الفعلية + تمديد الي 75 سنه
              </li>
              <li> اضافه قسط الدعم علي الراتب</li>
              <li>
                القطاع الخاص الغير معتمد لا تقل مدة الخدمة عن سنه في الشركه
                الحالية
              </li>

              <li>
                الموظف المدني لو العمر اقل من 51 سنه يتم الاحتساب علي الراتب
                الصافي الحالي طول مده التمويل
              </li>

              <li>
                الموظف المدني لو مده الخدمة السابفه اكبر من 25 سنه يتم الاحتساب
                علي الراتب الصافي الحالي طول مده التمويل
              </li>

              <li> شراء وحدة جاهزة من السوق -ارض وقرض - بناء ذاتي </li>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>أولا : عميل البنك مدعوم</b>
              </u>
              <li> الاستقطاع من الراتب في حاله قسط الدعم 65% </li>

              <li>
                {" "}
                الاستقطاع من الراتب في حاله باقه الدعم نفس سياسة الغير مدعوم{" "}
              </li>
              <li>اقصي مدة للتمويل 25 سنه</li>
              <u style={{ color: darkSide ? "red" : "#5edc44" }}>
                <b>ثانيا : عميل البنك الغير مدعوم</b>
              </u>
              <li> الراتب الأقل من 15.000 استقطاع 55% </li>
              <li> الراتب الاعلي من 15,000 استقطاع 65%</li>
              <li> مدة التمويل تصل الي 25 سنة</li>
              <li>
                {" "}
                (بالنسبة للعقار لا يحتاج شهادة الاشغال وبرنت اطلاق التيار)
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>ثالثا : عميل بدون تحويل راتب المدعوم و غير المدعوم </b>
              </u>

              <li>
                اقل راتب للمدني و المتقاعد و العساكر و القطاع الخاص المعتمد{" "}
                <mark>6,000</mark>{" "}
              </li>

              <li>اضافه قسم الدعم علي الراتب للمدعوم</li>
              <li>شراء وحدة سكنية جاهزه من السوق - بناء ذاتي</li>
              <li>
                اي التزام خارج البنك مده الالتزام هي مدة التمويل العقاري و ليست
                المدة الحقيقيه للالتزام
              </li>
              <li>
                امكانية منح التمويل العقاري للقطاعات الحومية و العساكر والخاص
                المعتد كلاس A او الخاص المعتمد كلاس B , C ,D لابد من نزول راتب
                علي البنك
              </li>
              <u style={{ color: darkSide ? "red" : "#5edc44" }}>
                <b>الدعم السكني</b>
              </u>
              <li> قسط دعم شهري علي 20 سنه علي حسب الراتب</li>
              <li> باقة دعم 150.000 الرواتب اقل من 10.000 </li>
              <li> باقة دعم 100.000 الرواتب اكبر من 10.000 </li>

              <hr></hr>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>كيفية احتساب عميل الممتد </b>
              </u>
              <br></br>
              <u style={{ color: darkSide ? "red" : "#5edc44" }}>
                <b> الراتب التقاعدي </b>
              </u>

              <br></br>

              <li>
                الراتب التقاعدي للمدني اجمالي مده الخدمه السابقه و القادمه تقسيم
                40 سنه ضرب الراتب الاساسي
              </li>
              <li>
                الراتب التقاعدي للعساكر اجمالي مده الخدمه السابقه و القادمه
                تقسيم 35 سنه ضرب الراتب الاساسي
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>القطاع الخاص الغير معتمد </b>
              </u>

              <li> لابد من نزول الراتب علي البنك </li>
              <li> اقل مدة خدمة سنه </li>

              <li> اعلي مبلغ تمويل 650,000</li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>ملاحظات </b>
              </u>
              <li>سجل الائتماني نظيف خلال 12 شهر الاخيرة</li>
              <li>
                {" "}
                الموظف المدني لو العمر اقل من 51 سنه او التعيين اكبر من 25 سنه
                يتم الاحتساب علب الراتب الحالي طول مده التمويل{" "}
              </li>
              <li>
                لا يوجد تعثرات او ايقاف خدمات او متاخرات و في حاله التعثر لقرض
                حكومي بنك التسليف او صندوق التنمية ... يمشي ب استثناء
              </li>
            </div>
          </div>
        </div>

        <div className={classNameModel}>
          <h4
            style={{
              color: "white",
              marginTop: "10px",
              textAlign: "center",
              padding: "5px",
               cursor:"pointer"
            }}
            onClick={handleShow5}
          >
            <b>سياسة ساب</b>
            <span>
              <button onClick={handleShow5} className="btn-show">
                <span>
                  {shwo5 ? (
                    <FontAwesomeIcon
                      icon={faCircleMinus}
                      flip="both"
                      style={{ color: "#374fc8", fontSize: "1.3rem" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCirclePlus}
                      flip="both"
                      style={{ color: "#374fc8", fontSize: "1.3rem" }}
                    />
                  )}
                  <span style={{ padding: "10px" }}>
                    {shwo5 ? "اخفاء" : "اظهار"}
                  </span>
                </span>
              </button>
            </span>
          </h4>
          <div>
            <div style={{ display: shwo5 ? "" : "none" }}>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>حدود الرواتب </b>
              </u>
              <li>
                {" "}
                اقل راتب القطاع الحكومي والعسكري <mark>5,000</mark>
              </li>
              <li>
                {" "}
                اقل راتب للقطاع الخاص علي حسب التصنيف <mark>5,000</mark>
              </li>
              <li>
                {" "}
                اقل راتب للمتقاعدين <mark>3,500</mark>
              </li>
              <li>
                {" "}
                اقل راتب للقطاع الخاص الغير معتمد <mark>6,000</mark>
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b> التمويل الشخصي </b>
              </u>
              <li>
                {" "}
                القطاع العسكري والحكومي والمتقاعدين بداية من اول راتب علي البنك{" "}
              </li>
              <li>
                {" "}
                القطاع الخاص المعتمد بداية من اول راتب علي البنك و لا يقل الراتب
                عن 5,000{" "}
              </li>
              <li> القطاع الخاص الغير معتمد لا يستحق تمويل شخصي </li>
              <li>
                {" "}
                يوجد تمويل اضافي بدون تحويل الراتب استقطاع حتي 45% من الراتب و
                اقصي مدة للتمويل 3 سنوات و لا يقل الراتب عن 10,000{" "}
              </li>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>التمويل العقاري </b>
              </u>

              <li>
                {" "}
                التقاعد الفعلي للمدنيين 60 سنه بالإضافة الي 17 سنة تمديد(77) سنه
              </li>
              <li>
                {" "}
                التقاعد الفعلي للعساكر علي الرتبة الفعلية + تمديد الي 77 سنه
              </li>

              <li> اضافه قسط الدعم علي الراتب</li>

              <li>
                القطاع الخاص الغير معتمد لا تقل مدة الخدمة عن سنه في الشركه
                الحالية
              </li>

              <li> شراء وحدة جاهزة من السوق -ارض وقرض - بناء ذاتي </li>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>أولا : عميل البنك مدعوم</b>
              </u>
              <li> الاستقطاع من الراتب في حاله قسط الدعم 65% </li>

              <li>
                {" "}
                الاستقطاع من الراتب في حاله باقه الدعم نفس سياسة الغير مدعوم{" "}
              </li>
              <li>
                اقصي مدة للتمويل 20 سنه في حاله اضافه قسط الدعم كجزء من الدخل و
                25 سنه في حاله باقه الدعم
              </li>
              <u style={{ color: darkSide ? "red" : "#5edc44" }}>
                <b>ثانيا : عميل البنك الغير مدعوم</b>
              </u>
              <li> الراتب الأقل من 15.000 استقطاع 55% </li>
              <li> الراتب الاعلي من 15,000 استقطاع 65%</li>
              <li> مدة التمويل تصل الي 25 سنة</li>
              <li>
                {" "}
                (بالنسبة للعقار لا يحتاج شهادة الاشغال وبرنت اطلاق التيار)
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>ثالثا : عميل بدون تحويل راتب المدعوم و غير المدعوم </b>
              </u>
              <li>اضافه قسم الدعم علي الراتب للمدعوم</li>
              <li>
                اي التزام خارج البنك مده الالتزام هي مدة التمويل العقاري و ليست
                المدة الحقيقيه للالتزام
              </li>
              <li>
                امكانية منح التمويل العقاري للقطاعات الحومية و العساكر و الخاص
                المعتد اما الخاص الغير معتمد لابد من نزول راتب علي البنك
              </li>
              <u style={{ color: darkSide ? "red" : "#5edc44" }}>
                <b>الدعم السكني</b>
              </u>
              <li> قسط دعم شهري علي 20 سنه علي حسب الراتب</li>
              <li> باقة دعم 150.000 الرواتب اقل من 10.000 </li>
              <li> باقة دعم 100.000 الرواتب اكبر من 10.000 </li>

              <hr></hr>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>كيفية احتساب عميل الممتد </b>
              </u>
              <br></br>
              <u style={{ color: darkSide ? "red" : "#5edc44" }}>
                <b> الراتب التقاعدي </b>
              </u>

              <br></br>

              <li>
                الراتب التقاعدي للمدني اجمالي مده الخدمه السابقه و القادمه تقسيم
                40 سنه ضرب الراتب الاساسي
              </li>
              <li>
                الراتب التقاعدي للعساكر اجمالي مده الخدمه السابقه و القادمه
                تقسيم 35 سنه ضرب الراتب الاساسي
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>القطاع الخاص الغير معتمد </b>
              </u>

              <li> لابد من نزول الراتب علي البنك </li>
              <li> اقل مدة خدمة سنه </li>

              <li> اعلي مبلغ تمويل 650,000</li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>ملاحظات </b>
              </u>
              <li>الحسبة بالتقويم الميلادي </li>
              <li> نسبة الاستقطاع للتامينات 9.76 % من الراتب</li>

              <li>
                {" "}
                يفضل يكون العميل عنده التزام واحد لان الالتزام الثاني يحث طول
                مدة التمويل العقاري
              </li>

              <li>
                {" "}
                امكانية التضامن و لكن المحتسب كانة غير مدعوم و تكون مده التمويل
                هي المدة الاقل للعملاء المتضامنين و النسبة الاعلي{" "}
              </li>
              <li>البناء الذاتي الدفعه الاولي 25% من التمويل + باقة المقدمة</li>
              <li>لا يوجد شيك سعي لا بد من اضافه السعي علي سعر العقار</li>
              <li>امكانية شراء العقار العظم</li>
            </div>
          </div>
        </div>

        <div className={classNameModel}>
          <h4
            style={{
              color: "white",
              marginTop: "10px",
              textAlign: "center",
              padding: "5px",
               cursor:"pointer"
            }}
            onClick={handleShow6}
          >
            <b>سياسة الفرنسي</b>
            <span>
              <button onClick={handleShow6} className="btn-show">
                <span>
                  {shwo6 ? (
                    <FontAwesomeIcon
                      icon={faCircleMinus}
                      flip="both"
                      style={{ color: "#374fc8", fontSize: "1.3rem" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCirclePlus}
                      flip="both"
                      style={{ color: "#374fc8", fontSize: "1.3rem" }}
                    />
                  )}
                  <span style={{ padding: "10px" }}>
                    {shwo6 ? "اخفاء" : "اظهار"}
                  </span>
                </span>
              </button>
            </span>
          </h4>
          <div>
            <div style={{ display: shwo6 ? "" : "none" }}>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>حدود الرواتب </b>
              </u>
              <li>
                {" "}
                اقل راتب القطاع الحكومي والعسكري <mark>5,000</mark>
              </li>
              <li>
                {" "}
                اقل راتب للقطاع الخاص المعتد كلاس A <mark>5,000</mark>
              </li>
              <li>
                {" "}
                اقل راتب للقطاع الخاص المعتد كلاس B<mark>7,000</mark>
              </li>
              <li>
                {" "}
                اقل راتب للقطاع الخاص الغير معتمد و مدعوم <mark>7,000</mark>
              </li>
              <li>
                {" "}
                اقل راتب للقطاع الخاص الغير معتمد و غير مدعوم{" "}
                <mark>10,000</mark>
              </li>
              <li>
                {" "}
                اقل راتب للقطاع الخاص معتمد للمقيم <mark>15,000</mark>
              </li>
              <li>
                {" "}
                اقل راتب للمتقاعدين <mark>0.000</mark>
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b> التمويل الشخصي </b>
              </u>

              <li> القطاع الخاص الغير معتمد لا يستحق تمويل شخصي </li>
              <li>
                {" "}
                يوجد تمويل اضافي بدون تحويل الراتب استقطاع حتي 45% من الراتب{" "}
              </li>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>التمويل العقاري </b>
              </u>

              <li>
                {" "}
                التقاعد الفعلي للمدنيين 60 سنه بالإضافة الي 15 سنة تمديد(75) سنه
              </li>
              <li>
                {" "}
                التقاعد الفعلي للعساكر علي الرتبة الفعلية + تمديد الي 75 سنه
              </li>

              <li> المتقاعد الي سن 75 سنه</li>

              <li> اضافه قسط الدعم علي الراتب</li>

              <li>اضافه سنتين استثناء علي التقاعد الفعلي للعساكر</li>

              <li>الرهن و البناء الذاتي 90% من قيمه العقار</li>
              <li>يوجد شراء مديونية العقاريةمع امكانية الاستفاده من الدعم</li>

              <li>
                اقصي مدة للمقيم هي 10 سنوات و الدفعه المقدمة 30% و يشترط موافقه
                الامارة
              </li>

              <li> شراء وحدة جاهزة من السوق -ارض وقرض - بناء ذاتي </li>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>أولا : عميل البنك مدعوم</b>
              </u>
              <li> الاستقطاع من الراتب في حاله قسط الدعم 65% </li>

              <li>
                {" "}
                الاستقطاع من الراتب في حاله باقه الدعم نفس سياسة الغير مدعوم{" "}
              </li>
              <li>اقصي مدة للتمويل 25 سنه</li>
              <u style={{ color: darkSide ? "red" : "#5edc44" }}>
                <b>ثانيا : عميل البنك الغير مدعوم</b>
              </u>
              <li> الراتب الأقل من 15.000 استقطاع 55% </li>
              <li> الراتب الاعلي من 15,000 استقطاع 65%</li>
              <li> مدة التمويل تصل الي 25 سنة</li>
              <li>امكانية شراء و رهن العقار للعميل</li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>ثالثا : عميل بدون تحويل راتب المدعوم و غير المدعوم </b>
              </u>
              <li>لا يزجد في الوقت الراهن ...</li>

              <hr></hr>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>كيفية احتساب عميل الممتد </b>
              </u>
              <br></br>
              <u style={{ color: darkSide ? "red" : "#5edc44" }}>
                <b> الراتب التقاعدي </b>
              </u>

              <br></br>

              <li>
                الراتب التقاعدي للمدني اجمالي مده الخدمه السابقه و القادمه تقسيم
                40 سنه ضرب الراتب الاساسي
              </li>
              <li>
                الراتب التقاعدي للعساكر اجمالي مده الخدمه السابقه و القادمه
                تقسيم 35 سنه ضرب الراتب الاساسي
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>ملاحظات </b>
              </u>
              <li>
                تمويل اصحاب الشركات لكن بشرط ان يكون مسجل بالتامينات براتب شهري
                و ان للشركة قوائم ماليه
              </li>
              <li>
                يتم اعتماد الدخل الاضافس سواء راتب اخر او ايجارات معتمدة بمنصه
                ايجار مع وجود كشف حساب يثبت ذالك
              </li>
            </div>
          </div>
        </div>

        <div className={classNameModel}>
          <h4
            style={{
              color: "white",
              marginTop: "10px",
              textAlign: "center",
              padding: "5px",
               cursor:"pointer"
            }}
            onClick={handleShow7}
          >
            <b> دار التمليك</b>
            <span>
              <button onClick={handleShow7} className="btn-show">
                <span>
                  {shwo7 ? (
                    <FontAwesomeIcon
                      icon={faCircleMinus}
                      flip="both"
                      style={{ color: "#374fc8", fontSize: "1.3rem" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCirclePlus}
                      flip="both"
                      style={{ color: "#374fc8", fontSize: "1.3rem" }}
                    />
                  )}
                  <span style={{ padding: "10px" }}>
                    {shwo7 ? "اخفاء" : "اظهار"}
                  </span>
                </span>
              </button>
            </span>
          </h4>
          <div>
            <div style={{ display: shwo7 ? "" : "none" }}>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>حدود الرواتب </b>
              </u>
              <li>
                {" "}
                اقل راتب القطاع الحكومي والعسكري <mark>4,000</mark>
              </li>
              <li>
                اقل راتب للقطاع الخاص المدعوم بعد خصم التامينات
                <mark>6,100</mark>
              </li>
              <li>
                اقل راتب للقطاع الخاص الغير المدعوم بعد خصم التامينات
                <mark>7,000</mark>
              </li>
              <li>
                {" "}
                اقل راتب للمتقاعدين <mark>4,000</mark>
              </li>

              <li>
                {" "}
                اقل راتب في حاله التضامن لكل عميل <mark>7,000</mark>
              </li>
              <li>
                {" "}
                في حاله التضامن بين الزوجين لا يقل مجموع راتبهم عن{" "}
                <mark>4,000</mark>
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b> مدة الاشتراك في التامينات او التعيين </b>
              </u>

              <li>مدة الاشتراك في برنت التامينات الاجتماعية لا تقل عن سنه</li>
              <li>تاريخ التعيين الحالي لا تقل عن سنه</li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>أولا: العميل المدعوم</b>
              </u>
              <li> الاستقطاع من الراتب في حاله قسط الدعم 65% </li>

              <li>لا يوجد باقه دعم</li>
              <li>اقصي مدة للتمويل 25 سنه</li>
              <u style={{ color: darkSide ? "red" : "#5edc44" }}>
                <b>ثانيا : العميل الغير مدعوم</b>
              </u>
              <li> الراتب الأقل من 15.000 استقطاع 55% </li>
              <li> الراتب الاعلي من 15,000 استقطاع 65%</li>
              <li> مدة التمويل تصل الي 30 سنة</li>

              <br></br>
              <u style={{ color: darkSide ? "red" : "#5edc44" }}>
                <b> الراتب التقاعدي </b>
              </u>

              <br></br>

              <li>
                الراتب التقاعدي للمدني اجمالي مده الخدمه السابقه و القادمه تقسيم
                40 سنه ضرب الراتب الاساسي
              </li>
              <li>
                الراتب التقاعدي للعساكر اجمالي مده الخدمه السابقه و القادمه
                تقسيم 35 سنه ضرب الراتب الاساسي
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b> ملاحظات </b>
              </u>

              <li>اقصي مدة للتمويل 77 سنه</li>

              <li>
                الصك بيكون باسم العميل مرهون للتامينات الاجتماعية برنامج مساكن
              </li>

              <li>يوجد تضامن</li>

              <li>لا يوجد باقه دعم</li>
            </div>
          </div>
        </div>

        <div className={classNameModel}>
          <h4
            style={{
              color: "white",
              marginTop: "10px",
              textAlign: "center",
              padding: "5px",
               cursor:"pointer"
            }}
            onClick={handleShow8}
          >
            <b>سياسة بدايه</b>
            <span>
              <button onClick={handleShow8} className="btn-show">
                <span>
                  {shwo8 ? (
                    <FontAwesomeIcon
                      icon={faCircleMinus}
                      flip="both"
                      style={{ color: "#374fc8", fontSize: "1.3rem" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCirclePlus}
                      flip="both"
                      style={{ color: "#374fc8", fontSize: "1.3rem" }}
                    />
                  )}
                  <span style={{ padding: "10px" }}>
                    {shwo8 ? "اخفاء" : "اظهار"}
                  </span>
                </span>
              </button>
            </span>
          </h4>
          <div>
            <div style={{ display: shwo8 ? "" : "none" }}>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>حدود الرواتب </b>
              </u>
              <li>
                {" "}
                اقل راتب القطاع الحكومي و العسكري بعد اضافه الدعم{" "}
                <mark>3,000</mark>
              </li>

              <li>
                اقل راتب للقطاع الخاص الغير المدعوم بعد خصم التامينات
                <mark>7,000</mark>
              </li>
              <li>
                {" "}
                اقل راتب للمتقاعد بعد اضافه قسط الدعم <mark>3,000</mark>
              </li>

              <li>
                {" "}
                اقل راتب في حاله التضامن <mark>7,000</mark>
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b> مدة الاشتراك في التامينات او التعيين </b>
              </u>

              <li>مدة الاشتراك في برنت التامينات الاجتماعية لا تقل عن سنه</li>
              <li>تاريخ التعيين الحالي لا تقل عن 3 شهور</li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>أولا: العميل المدعوم</b>
              </u>
              <li> الاستقطاع من الراتب في حاله قسط الدعم 65% </li>

              <li>لا يوجد باقه دعم</li>
              <li>اقصي مدة للتمويل للعميل المدعوم 20 سنه</li>

              <u style={{ color: darkSide ? "red" : "#5edc44" }}>
                <b>ثانيا : العميل الغير مدعوم</b>
              </u>
              <li> الراتب الأقل من 15.000 استقطاع 55% </li>
              <li> الراتب الاعلي من 15,000 استقطاع 65%</li>
              <li> مدة التمويل تصل الي 30 سنة</li>

              <br></br>
              <u style={{ color: darkSide ? "red" : "#5edc44" }}>
                <b> الراتب التقاعدي </b>
              </u>

              <br></br>

              <li>
                الراتب التقاعدي للمدني اجمالي مده الخدمه السابقه و القادمه تقسيم
                40 سنه ضرب الراتب الاساسي
              </li>
              <li>
                الراتب التقاعدي للعساكر اجمالي مده الخدمه السابقه و القادمه
                تقسيم 35 سنه ضرب الراتب الاساسي
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b> ملاحظات </b>
              </u>

              <li> اقصي مدة للتمويل 70 سنه لنسب الفوائد الثابته</li>
              <li> اقصي مدة للتمويل 75 سنه لنسب الفوائد المتغيرة</li>
              <li>
                الصك بيكون باسم العميل مرهون للتامينات الاجتماعية برنامج مساكن
              </li>

              <li>يوجد تضامن</li>

              <li>لا يوجد باقه دعم</li>
              <li>
                في حاله العميل عندة راتبين المحتسب علي الراتب الاول + نصف الراتب
                الثاني
              </li>
            </div>
          </div>
        </div>

        <div className={classNameModel} style={{ marginBottom: "40px" }}>
          <h4
            style={{
              color: "white",
              marginTop: "10px",
              textAlign: "center",
              padding: "5px",
               cursor:"pointer"
            }}
            onClick={handleShow9}
          >
            <b>سياسة مسار النمو</b>
            <span>
              <button onClick={handleShow9} className="btn-show">
                <span>
                  {shwo9 ? (
                    <FontAwesomeIcon
                      icon={faCircleMinus}
                      flip="both"
                      style={{ color: "#374fc8", fontSize: "1.3rem" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCirclePlus}
                      flip="both"
                      style={{ color: "#374fc8", fontSize: "1.3rem" }}
                    />
                  )}
                  <span style={{ padding: "10px" }}>
                    {shwo9 ? "اخفاء" : "اظهار"}
                  </span>
                </span>
              </button>
            </span>
          </h4>
          <div>
            <div style={{ display: shwo9 ? "" : "none" }}>
              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>حدود الرواتب </b>
              </u>
              <li>
                اقل راتب رجال بعد اضافه الدعم <mark>7,000</mark>
              </li>

              <li>
                في حاله التضامن لا يقل مجموع راتبهم عن
                <mark>7,000</mark>
              </li>
              <li>
                اقل راتب النساء قطاع حكومي بعد اضافه قسط الدعم{" "}
                <mark>10,000</mark>
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b> مدة الاشتراك في التامينات او التعيين </b>
              </u>

              <li>مدة الاشتراك في برنت التامينات الاجتماعية لا تقل عن سنه</li>
              <li>تاريخ التعيين الحالي لا تقل عن 3 شهور</li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b>أولا: العميل المدعوم</b>
              </u>
              <li> الاستقطاع من الراتب في حاله قسط الدعم 65% </li>

              <li>لا يوجد باقه دعم</li>
              <li>اقصي مدة للتمويل للعميل المدعوم 30 سنه</li>

              <u style={{ color: darkSide ? "red" : "#5edc44" }}>
                <b>ثانيا : العميل الغير مدعوم</b>
              </u>
              <li> الراتب الأقل من 15.000 استقطاع 55% </li>
              <li> الراتب الاعلي من 15,000 استقطاع 65%</li>
              <li> مدة التمويل تصل الي 30 سنة</li>

              <br></br>
              <u style={{ color: darkSide ? "red" : "#5edc44" }}>
                <b> الراتب التقاعدي </b>
              </u>

              <br></br>

              <li>
                الراتب التقاعدي للمدني اجمالي مده الخدمه السابقه و القادمه تقسيم
                40 سنه ضرب الراتب الاساسي
              </li>
              <li>
                الراتب التقاعدي للعساكر اجمالي مده الخدمه السابقه و القادمه
                تقسيم 35 سنه ضرب الراتب الاساسي
              </li>

              <u
                style={{
                  color: darkSide ? "red" : "#5edc44",
                  marginTop: "30px",
                }}
              >
                <b> ملاحظات </b>
              </u>

              <li> اقصي مدة للتمويل 77 سنه لنسب  </li>

              <li>يوجد تضامن</li>
              <li>
                يوجد برنامج ضمانات نسب فوائد اقل و مده التمويــل تصل 20 سنه بشرط يكون
                مدعوم و الراتب لا يزيد عن 5,000
              </li>

              <li>لا يوجد باقه دعم</li>
              <li>
                في حاله العميل عندة راتبين المحتسب علي الراتب الاول + نصف الراتب
                الثاني
              </li>
            </div>
          </div>
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
          <div style={{ margin: "0 10px" }} className="link_text">
            {textMode}
          </div>
        </button>
      </div>
    </div>
  );
}
