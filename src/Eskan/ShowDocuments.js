
import React, { useEffect, useState, useRef, useContext } from "react";
import "../Project1.css";
import "../components/netSalary.css";
import audioError from "../sound/error.mp3";
import audioSuccess from "../sound/success.mp3";
import audioWarning from "../sound/warning.mp3";
import image2 from "../logo.png";
import ProgressCounter from "../components/ProgressCounter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from 'moment';
import {
  faPenToSquare,
  faTrash,
  faCircleHalfStroke,
  faMoon,
  faMagnifyingGlass,
  faBackward,
  faForward,
  faCaretRight,
  faCaretLeft,
  faDownload,
  faFileArrowDown,
  faX,
  faFileExcel,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ModalX from "../modalX";

import { useNavigate } from "react-router-dom";
import {
  DownloadTableExcel,
  useDownloadExcel,
} from "react-export-table-to-excel";
import ReactPaginate from "react-paginate";
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import '../offers/amiri-normal'; // لا حاجة لتصدير — التحميل يتم تلقائيًا
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';

import { reshape } from 'arabic-reshaper';
import { amiriFont } from '../offers/amiri-normal'; // ملف الخط بصيغة base64

import Select from "react-select";
import CreatableSelect from 'react-select/creatable';
import Eskan from "./Eskan";
import { ColorModeContext } from "../Context/ThemeContext";
export default function ShowDocuments(props, isVisble) {
  // const [darkSide, setShwoDarkSide] = useState(

  //       ()=>{

  //  const savedMode = localStorage.getItem("darkMode");
  // if (savedMode === "true") return true;
  // if (savedMode === "false") return false;
  // return true; // الوضع الافتراضي
  //   }
  // );


    const { mode } = useContext(ColorModeContext); // الوضع الحالي: light / dark


      const [darkSide, setShwoDarkSide] = useState(() => mode === "dark")
  useEffect(() => {
    
  setShwoDarkSide(mode === "dark");
}, [mode]);

  
  const [showModdal, setShowModal] = useState(false);
  const [errorMassge, setErrorMassge] = useState(null);

  const [showDelete, setShowDelete] = useState(false);

  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);

  const [showFullText, setShowFullText] = useState(false);
  const [recordsA, setRecordsA] = useState([]);
  const [searchedVal, setSearchedVal] = useState("");
  const [filter, setFilter] = useState({
   
    city: [],

   customerName: '',
  phone: '',
  documentType: '',
  prsonName: '',
  ownerName: '',
  priceFrom: '',
  priceTo: '',
  // aqarCity: [],

aqarCity: [],



 selectedCity: [],
  
 selectedDistricts: [],




        
  currentBank: "",
 
  person: "",
  branch: "",

  paymentAmount: "",
  eskanAmount: "",


  customerId: "",
  customerCity: "",

  
  prsonId: "",
  prsonCity: "",


  ownerId: "",
  price: "",
  cheq: "",
  typeOwner: "",

  ownerPrson: "",
  ownerNameAdd: "",
  ownerIdAdd: "",
  ownerAdd: "",

  nowDay: "",
  nowMonth: "",
  nowYear: "",

  nowDayH: "",
  nowMonthH: "",
  nowYearH: "",

  addDay: "",
  addMonth: "",
  addYear: "",



  dayNam: "",
  toEskan: "",
 
number:"",
number1:"",
  
  });

   const regionCities = {
    الوسطى: ['الرياض', 'بريدة'],
    الغربية: ['جدة', 'مكة', 'المدينة'],
    الشرقية: ['الدمام', 'الخبر'],
    الجنوبية: ['أبها', 'خميس مشيط'],
    الشمالية: ['عرعر', 'سكاكا'],
  };

  
  
  
  const cityDistricts = {
    الرياض: ['العقيق', 'النخيل', 'الياسمين'],
    جدة: ['الروضة', 'الفيصلية'],
    مكة: ['الشوقية', 'العوالي'],
    الدمام: ['الشراع', 'حي الفيصلية'],
      الخبر: ['الشراع', 'حي الفيصلية'],
    // ...
  };
  
  const districtOptions = (cityDistricts[filter.selectedCity] || []).map((d) => ({
    value: d,
    label: d,
  }));
  
  
  
  const [cityOptions, setCityOptions] = useState([]);










// useEffect(() => {
//   const name = localStorage.getItem("name");
//   if (!name || name === "alaa") {
//     console.warn("🚫 المستخدم alaa لا يُسمح له بجلب المدن");
//     return;
//   }

//   axios.get("http://localhost:8090/usersDocuments", {
//     params: { name }
//   })
//     .then(res => {
//       const cities = res.data
//         .map(item => item.aqarCity?.trim())
//         .filter(city => city)
//         .filter((city, index, self) => self.indexOf(city) === index)
//         .map(city => ({
//           value: city,
//           label: city,
//         }));

//       setCityOptions(cities);
//     })
//     .catch(err => {
//       console.error("❌ خطأ أثناء جلب المدن:", err);
//     });
// }, []);



useEffect(() => {
  const name = localStorage.getItem("name");
  if (!name || name === "alaa") {
    console.warn("🚫 المستخدم alaa لا يُسمح له بجلب المدن");
    return;
  }

  axios.get("http://localhost:8090/usersDocuments", {
    params: { name }
  })
    .then(res => {
      const cities = res.data
        .map(item =>
          typeof item.aqarCity === "string" ? item.aqarCity.trim() : null
        )
        .filter(city => city)
        .filter((city, index, self) => self.indexOf(city) === index)
        .map(city => ({
          value: city,
          label: city,
        }));

      setCityOptions(cities);
    })
    .catch(err => {
      console.error("❌ خطأ أثناء جلب المدن:", err);
    });
}, []);


















  
  
  const customSelectStyle = {
    control: (base) => ({
      ...base,
      minHeight: '38px',
      height: '38px',
      fontSize: ' .96rem !important',
    }),
    valueContainer: (base) => ({
      ...base,
      height: '38px',
      padding: '0 6px',
    }),
    input: (base) => ({
      ...base,
      margin: '0px',
    }),
    indicatorsContainer: (base) => ({
      ...base,
      height: '32px',
    }),
  };



    useEffect(() => {
  async function fetchData() {
    try {
      const name = localStorage.getItem("name");
      if (!name) {
        console.error("❌ لم يتم العثور على الاسم في localStorage");
        return;
      }

      // ⛔ منع جلب البيانات إذا المستخدم هو alaa
      if (name === "alaa") {
        console.warn("🚫 المستخدم alaa لا يُسمح له بجلب بيانات العملاء");
        return;
      }

      const response = await fetch(`http://localhost:8090/usersDocuments?name=${name}`);
      const data = await response.json();

      setRecordsA(data);
    } catch (error) {
      console.error("❌ فشل في جلب البيانات:", error);
    }
  }

  fetchData();
}, []);




  
    const toggleCity = (city) => {
      setFilter((f) => {
        if (f.city.includes(city)) {
          return { ...f, city: f.city.filter((c) => c !== city) };
        } else {
          return { ...f, city: [...f.city, city] };
        }
      });
    };
  
  





const filteredRecords = recordsA.filter((row) => {
  // بحث عام باستخدام المعروض
  if (searchedVal) {
    const search = searchedVal.toLowerCase();

    // القيم المعروضة للمستخدم
    const displayedValues = [
      row.customerName,
      row.branch,
      row.phone,
      row.documentType === "downPayment" ? " الدفعه المقدمة" :
      row.documentType === "pay" ? " سداد التزام" :
      row.documentType,
      row.aqarCity,

       row.person==="yes"?"نعم":
       row.person==="no"?"لا":
       row.person,

      row.typeOwner==="one"?"فرد":
       row.typeOwner==="any"?"موسسة / شركه":
       row.typeOwner,


       row.ownerPrson==="yes"?"نعم":
       row.ownerPrson==="no"?"لا":
       row.ownerPrson,

      row.currentBank === "alahli" ? "الاهلي":
      row.currentBank === "alrajhi" ? "الراجحي" :
      row.currentBank === "albilad" ? "البلاد":
      row.currentBank === "sab" ? "ساب" :
      row.currentBank ===  "alinma" ? "الانماء" :
      row.currentBank === "any" ? "الاخري" :
      row.currentBank,
   





row.currentBank,
row.person,
row.branch,

row.paymentAmount,
row.eskanAmount,

row.customerId,
row.customerCity,

row.prsonId,
row.prsonCity,

row.ownerId,
row.price,
row.cheq,
row.typeOwner,

row.ownerPrson,
row.ownerNameAdd,
row.ownerIdAdd,
row.ownerAdd,

row.nowDay,
row.nowMonth,
row.nowYear,

row.nowDayH,
row.nowMonthH,
row.nowYearH,

row.addDay,
row.addMonth,
row.addYear,

row.dayNam,
row.toEskan,

      // row.basicSalary?.toString(),
      // row.netSalary?.toString(),
      // row.birthYear?.toString(),
      // row.currentYear?.toString(),
      // row.startWorkYear?.toString(),
    ];


    


                         


          
    const foundInDisplay = displayedValues.some(val =>
      val?.toString().toLowerCase().includes(search)
    );

    if (!foundInDisplay) return false;
  }










  



//     if (
//       filter.name &&
//       !row.name.toLowerCase().includes(filter.name.toLowerCase())
//     ) return false;
  

//        if (
//       filter.job &&
//       !row.job.toLowerCase().includes(filter.job.toLowerCase())
//     ) return false;
//     if (
//       filter.phone &&
//       !row.phone.toLowerCase().includes(filter.phone.toLowerCase())
//     ) return false;

//           if (
//       filter.housingSupport&&
//       !row.housingSupport.toLowerCase().includes(filter.housingSupport.toLowerCase())
//     ) return false;
  
 
  

// if (
//   filter.currentYear &&
//   !row.currentYear?.toString().toLowerCase().includes(filter.currentYear.toLowerCase())
// ) return false;


//   if (
//   filter.startWorkYear &&
//   !row.startWorkYear?.toString().toLowerCase().includes(filter.startWorkYear.toLowerCase())
// ) return false;


  

//  if (
//   filter.birthYear &&
//   !row.birthYear?.toString().toLowerCase().includes(filter.birthYear.toLowerCase())
// ) return false;



//       if (
//       filter.realEstateBank &&
//       !row.realEstateBank.toLowerCase().includes(filter.realEstateBank.toLowerCase())
//     ) return false;
  

//       if (
//       filter.currentBank&&
//       !row.currentBank.toLowerCase().includes(filter.currentBank.toLowerCase())
//     ) return false;
  
 



//     if (filter.basicSalaryFrom && Number(row.basicSalary) < Number(filter.basicSalaryFrom))
//       return false;
//     if (filter.basicSalaryTo && Number(row.basicSalary) > Number(filter.basicSalaryTo))
//       return false;
  
//     if (filter.netSalaryFrom && Number(row.netSalary) < Number(filter.netSalaryFrom))
//       return false;
//     if (filter.netSalaryTo && Number(row.netSalary) > Number(filter.netSalaryTo))
//       return false;
  
//     if (
//       filter.ministryDefenseSelect &&
//       !row.ministryDefenseSelect.toLowerCase().includes(filter.ministryDefenseSelect.toLowerCase())
//     ) return false;
  
  
  
// if (
//   filter.selectedCity.length > 0 &&
//   !filter.selectedCity.includes(row.selectedCity)
// ) return false;
  

    
  
//     return true;
//   });
    


  if (filter.customerName && !row.customerName?.toLowerCase().includes(filter.customerName.toLowerCase()))
    return false;

  if (filter.customerId && !row.customerId?.toLowerCase().includes(filter.customerId.toLowerCase()))
    return false;

  if (filter.phone && !row.phone?.toLowerCase().includes(filter.phone.toLowerCase()))
    return false;

  if (filter.currentBank && !row.currentBank?.toLowerCase().includes(filter.currentBank.toLowerCase()))
    return false;

  if (filter.documentType && !row.documentType?.toLowerCase().includes(filter.documentType.toLowerCase()))
    return false;

  if (filter.branch && !row.branch?.toLowerCase().includes(filter.branch.toLowerCase()))
    return false;

  if (filter.paymentAmountFrom && Number(row.paymentAmount) < Number(filter.paymentAmountFrom))
    return false;

  if (filter.paymentAmountTo && Number(row.paymentAmount) > Number(filter.paymentAmountTo))
    return false;

  if (filter.eskanAmountFrom && Number(row.eskanAmount) < Number(filter.eskanAmountFrom))
    return false;

  if (filter.eskanAmountTo && Number(row.eskanAmount) > Number(filter.eskanAmountTo))
    return false;

  if (filter.customerCity && !row.customerCity?.toLowerCase().includes(filter.customerCity.toLowerCase()))
    return false;

  if (filter.prsonName && !row.prsonName?.toLowerCase().includes(filter.prsonName.toLowerCase()))
    return false;

  if (filter.prsonId && !row.prsonId?.toLowerCase().includes(filter.prsonId.toLowerCase()))
    return false;

  if (filter.prsonCity && !row.prsonCity?.toLowerCase().includes(filter.prsonCity.toLowerCase()))
    return false;

  if (filter.ownerName && !row.ownerName?.toLowerCase().includes(filter.ownerName.toLowerCase()))
    return false;

  if (filter.ownerId && !row.ownerId?.toLowerCase().includes(filter.ownerId.toLowerCase()))
    return false;

  if (filter.priceFrom && Number(row.price) < Number(filter.priceFrom))
    return false;

  if (filter.priceTo && Number(row.price) > Number(filter.priceTo))
    return false;

  if (filter.cheq && !row.cheq?.toLowerCase().includes(filter.cheq.toLowerCase()))
    return false;

  if (filter.typeOwner && !row.typeOwner?.toLowerCase().includes(filter.typeOwner.toLowerCase()))
    return false;

  if (filter.ownerPrson && !row.ownerPrson?.toLowerCase().includes(filter.ownerPrson.toLowerCase()))
    return false;

  if (filter.ownerNameAdd && !row.ownerNameAdd?.toLowerCase().includes(filter.ownerNameAdd.toLowerCase()))
    return false;

  if (filter.ownerIdAdd && !row.ownerIdAdd?.toLowerCase().includes(filter.ownerIdAdd.toLowerCase()))
    return false;

  if (filter.ownerAdd && !row.ownerAdd?.toLowerCase().includes(filter.ownerAdd.toLowerCase()))
    return false;

  // if (filter.aqarCity && !row.aqarCity?.toLowerCase().includes(filter.aqarCity.toLowerCase()))
  //   return false;
  if (
  filter.aqarCity.length > 0 &&
  !filter.aqarCity.includes(row.aqarCity)
) return false;

  if (filter.dayNam && !row.dayNam?.toLowerCase().includes(filter.dayNam.toLowerCase()))
    return false;

  if (filter.toEskan && !row.toEskan?.toLowerCase().includes(filter.toEskan.toLowerCase()))
    return false;

  if (filter.userAddData && !row.userAddData?.toLowerCase().includes(filter.userAddData.toLowerCase()))
    return false;

  if (
    filter.nowYear &&
    !row.nowYear?.toString().includes(filter.nowYear)
  )
    return false;

  if (
    filter.addYear &&
    !row.addYear?.toString().includes(filter.addYear)
  )
    return false;

  if (
    filter.nowYearH &&
    !row.nowYearH?.toString().includes(filter.nowYearH)
  )
    return false;

  return true;
});



  let audio3 = new Audio(audioError);

  const tableRef = useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: ` عملاء التوقيع _${new Date().toISOString().slice(0, 10)}`,
    sheet: "العملاء",
  });



  function handelDivClick() {
    if (showModdal == true) {
      setShowModal(false);
    }
  }

  function handelDarkSide() {
    // setShwoDarkSide(!darkSide);
    const newMode = !darkSide;
  setShwoDarkSide(newMode);
  localStorage.setItem("darkMode", newMode); // حفظ الوضع
  }

  if (darkSide) {
    var textMode = "داكن";
    var classNameModel = "loan-form";
    var ic1 = faMoon;
    var classRotate = 0;
    var classColor = "model-light";
    var tableDark = "";
    var lableMode = "flex net-salary";
    var backColor = "link-log-dark  dark-buttom-about";
    var searchClass = "light-search";
  } else {
    var textMode = "فاتح";
    var classNameModel = "loan-form-dark";
    var ic1 = faCircleHalfStroke;
    var classRotate = 180;
    var classColor = "#050505";
    var tableDark = "table-Dark";
    var lableMode = "flex net-salary-dark";
    var backColor = "link-log-dark  dark-buttom-about  back-color";
    var searchClass = "dark-search";
  }




const [userData, setUSerData] = useState([]);
  useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  try {
    const name = window.localStorage.getItem("name"); // ✅ نأخذ الاسم
    const result = await axios.get("http://localhost:8090/usersDocuments", {
      params: { name }, // ✅ نرسله كـ query parameter
    });
    setUSerData(result.data);
  } catch (err) {
    console.log("❌ خطأ في الاتصال بقاعدة البيانات");
  }
};






  const idUser = window.localStorage.getItem("name");
  console.log(idUser, typeof idUser);

  const [loading, setLoading] = useState();

  const handleDelete = async (id) => {



    
    
    setShowa(true)
    setErrorMassge(" جاري  حذف العميل ");
    setShowModal(true);
    audio3.play();

    try {
      await axios.delete(`http://localhost:8090/usersDocuments/${id}`);
      // window.location.reload();
      setTimeout(() => {
        window.location.href = "https://alaaahmed2024.github.io/alaa/#/show_documents";
        setLoading(true);
      }, 2300);
    } catch (err) {
      console.log(err);
    }
  };

  //===========================================

  // const navigate=useNavigate()
const [showa, setShowa] = useState(false);

  const [userDataEdit, setUSerDataEdit] = useState();
  useEffect(() => {
    fetchData();
  }, []);



  const [edit, setEdit] = useState();

  
  const handleEdit = async (id) => {
    setShowa(true)

    setErrorMassge("    الي صفحه التعديل      ");
    setShowModal(true);

    // e.preventDefault();
    try {
      const responceEdit = await axios.get(
        `http://localhost:8090/userdetailsDocuments/${id}`
      );
      // navigate("/about")

      console.log(responceEdit);
      setUSerDataEdit(responceEdit.data[0]);
      console.log(responceEdit.data[0]);

      setTimeout(() => {
        setEdit(true);
      }, 2300);
    } catch (err) {
      console.log("Something Wrong DataBase");
    }

    let audio1 = new Audio(audioSuccess);
    audio1.play();
  };

  //===========================================

  const [show, setShow] = useState(true);
  setTimeout(() => {
    setShow(false);
  }, 3500);

  function myFunction() {
    var x = 1;
  }


  const [selectNumberRow, setSelectNumberRow] = useState({
    numerUserRow: 500,
  });


  const [currentPage, setCurrentPage] = useState(1);

// useEffect(() => {
//   setCurrentPage(1);
// }, [filteredRecords]);




  const recordsPerPage = selectNumberRow.numerUserRow;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  // const records = userData.slice(firstIndex, lastIndex);
  const records = filteredRecords.slice(firstIndex, lastIndex);
  // const nPage = Math.ceil(userData.length / recordsPerPage);
  const nPage = Math.ceil(filteredRecords.length / recordsPerPage);
  const numders = [...Array(nPage + 1).keys()].slice(1);
console.log(records.phone)
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changeCpage(id) {
    setCurrentPage(id);
  }

  function pageFirst() {
    setCurrentPage(1);
  }

  function pageLast() {
    setCurrentPage(nPage);
  }



  if (loading) {
    return <ShowDocuments />;
  }

  if (edit) {
    return (
      <>
        <Eskan editClint={userDataEdit} />;
      </>
    );
  }


  
  
  var startPage, endPage;
  if (nPage <= 4) {
    // less than 10 total pages so show all
    startPage = 1;
    endPage = nPage;
  } else {
    // more than 10 total pages so calculate start and end pages
    if (currentPage <= 4) {
      startPage = 1;
      endPage = 4;
    } else if (currentPage + 2 >= nPage) {
      startPage = nPage - 3;
      endPage = nPage;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }
  // calculate start and end item indexes
  var startIndex = (currentPage - 1) * 1 * selectNumberRow.numerUserRow;
  var endIndex = Math.min(
    startIndex + 1 * selectNumberRow.numerUserRow - 1,
    userData.length - 1
  );
  console.log(endIndex);
  // create an array of pages to ng-repeat in the pager control

  if (nPage > 4) {
    var showLast = true;
    var x = 2;
  } else {
    var showLast = false;
    var x = 0;
  }
  var pages = [...Array(endPage + 1 - startPage).keys()].map(
    (i) => startPage + i
  );
  // return an object with all pager properties required by the view

  const handlePageClick = (data) => {
    const currentPageR = data.selected + 1;
    setCurrentPage(currentPageR);
  };


 

  
    const toggleText = () => {
      setShowFullText((prev) => !prev);
    };






 const logoBase64 =
 "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAADYCAYAAAAqCEsrAAAABHNCSVQICAgIfAhkiAAAGV1JREFUeF7tnXucHFWVx3+nepKJJoGgKyKoyYgi8FEQiAiZ6e6ZD6DgLhhwI3GmEyaB/QgijyzIYwZIDEweSghBgiJiOjI9oNGgIvhYdPoxCb7YBQSJsOyEj4ggi5uQzEx3T3ed/dyqrp7qmu6u6udMd9/+J+np+zz3W+ece+rcKkKDf1b07T1ZJeW923ve/5NsomjvHpwV9HdEG0VM1CgTzTbP5ev3nqSoeBzga/y9Lf5sZdy+4M/+9uZRi//7Zx+KNYKsGhaINAyEd4B5RS4gPL4QM/jnjQJFQwKx8ta/flhVxndDwCA+NkBoRRoEioYDQoPBNR4EcETaBDgAolGgaCggssLgUEMY8NS7pmgYIHLCUCAQ9a4pGgKIvDAUAUQ9Q1H3QNjCUCQQ9QpFXQPhCIYSgKhHKOoWCMcwlAhEvUFRl0AUBEMZgKgnKOoOiIJhKBMQ9QJFXQFRFAxlBKIeoKgbIIqGocxA1DoUdQFESTBUAIhahqLmgSgZhgoBUatQ1DQQZYGhgkDUIhQ1C0TZYMgDhMiWUhPKWPquaDH/YfwyHPB+qpiqU1GnJoEoKwwSiAzuag6IssMggahdICoCgwSiNoGoGAwSiNoDoqIwSCBqC4iKwyCBqB0gqgKDBKI2gKgaDBKI6Q9EVWGQQEx/IJbftvd8RcHOakXqCHTptp7591r7k5HKaq2ATT8SiKlbiGkZqZRASCAyJCCBkEBIIKaOAelUWmUvncoJiUgfAoAEQgJhUZNy22kIRGoIqSGkDyF9iNwerNQQUkNIDSE1hNQQeXf5cpchdxlyl5HjEpE+hPQhpA8hfQjpQ0gfwuG9EmkypMmQJkOaDGkypMmQJsOhBKTJkCZDmgxpMqTJcKgw5S5DmoypNxntSwaPwGzsy/Uuq0ZIsl104a6jd3+v9SWHF27VilVdQ3zi8795d7MSDSoz+PSgv2Nftpk2AhAeX+gqZiyIBLyrqrbaDjqqKhAGDCA6VmlSD2t0IADcyYw7pxMUVQPCDIMAVQIRukoAIWQxnaCoChBWGCQQgDAZBhBCHipjw1DAe6MDrV7RIhUHIhsMEojJQEwXKCoKRFtn5DCFkruFz2DFWpqMTA1hyGeqNUXFgBAwkKI+TsDJ2XScBCI7ELpPwasjgfa1FbUNORqvCBB2MEiTkd1kWNbohnC/d2O1oSg7EE5gkEA4AkKIqepQlBUIpzBIIBwDIUR1dbjfu6VamqJsQBQCgwSiICCqCkVZgCgUBglEwUBUDYqyAOHxhboA9Bei1pIzXYfs+k7bgUa+l2EOTNnLjkfC/e1z7MuVVkICMUW3v62RSvtllEDU9WMJJRCWS0CajNyBqezaQmoIqSEyyJBASCAkELoEGiVjSu4yTMQ3ug/h7gpeQUR3gfEEE+Im0czNfkNQmoy6NhmLlg1+JBad+5cndyzcb3UiW5cOHelyJX4IotMmfpNA1DUQdnEHkZmuzqQXQZQKRkkgGhoIAYynK/RjEM7T4ZFANDwQbl/wYQItlkDIF6ggZTL2gOhQCUQDAOHpCn002ezam+0Gn9sXfg+xulM6lSlPqxHiELm2nQQcAuCkyU6n9CHq2oeQN7fkza0MCcjAlAQiQwIyMCWBsItFZfwuA1MmcTSCU+mEDhmYaqBdhhMgZGBKApHmRAamGsxkyMCUdCodbTtlYCqLMW0Ep1IGpqSGcKQhAMiMKauSaAQNIQNTUkM42WladxkyY0pIpBE0hBM6ZGBKxiEy/QyZMaXLQ2oIyIwp86XRCEDIwJR0Kh1tO2VgSgamnPiXMg1fUSBT6DJQkTmVEggJROPsMuS9DOlUZkhAAiGBkEDkc58b/fkQUkNIDSE1hNQQInyAX4YD3k9ZZSE1hNQQUkNIDSE1hMMwLCCdSvng0gxYJBASCAmESQLSqZROpXQqpVMpnUrpVFolIOMQzpiQTqV0KqVTKZ3K3NpCagipIaSGkBpCaoipvLnVvX54ASVdJ0Lheczq0/7elqfsPDz5Vr46fCtf9/rhdjBtA7AgMy0T+0C8wt/T8qNcYEgg6gyI7r7hNSBanVcTMPn9vfNXZCvTcEAkkyriY+OIx+KIjcUQi8Yx623N/ke3njJJQO3dg7PUhDJmp2bzC796+RApzTDobLy8yt/Tcqe1bF0DMT6eRDwaRzy18LFYHMnx5CR5zT107vZHt57cbf2h5oDoG94LovmOgGDsg8In+W9s2WsuXx9AMBCPjWtXeywa0yGIxqGq7Eg29QBEd9/wx0D0X44mnC7E51v9iZoDQiyyseA6AHGMx+JgZ2ufVV51AkQ3SHMknX+Yv+LvbVlTMxpCqPdYbMLex8fiGB9POJ+ww5J1AcS64asB2uxwynox5i3+3parpz0Q56165qYD/7f/1mRCLWh+xRaeO29O/6N3n7Ksln2IwhzK1EyZV/h7W/zTHohzLv/DhpH9I9cXu8CF1pt76JzAo1tP8dU0EGuG52Em9gLGK5kcSIH5JGuwalr6EBKIbItpf/q7uxCzkcVciF4lEOLBkHWgIQyEutcNBwHy5tcP/DTiaPevadlnLSeBqDMgxALnjVYyb8E41lhhOGXJHw59O0ZnSiDqEAgNivXDC8BYDMYCEOYBeAqMoNVnaOuMfEBR1CM4Ri9GdnjekEDUKRB2LmWbL3KiAvUsAv821N8eMcprQLR1Rg5jF+aqUdcbT+xYVHDs3uMLdQHotxuE+fd8CTLSqSzOqXQi/7bOyJmKoi6Dih+HB7yTntKToSHalkeOoSS/j5L8Qvgh71+cdCDKSCDySGqaJNm2dg2epoi7oIw/jr41Z82TjywczTbqrCbDvSzsBavHk0rPhQe8YTswJBDTF4jWruA5CtH1BIyoqnLF0ID7f/KtZ14fQqdK+Swznh8KeL+Tq6Hjlzw3850z3zyPoK4E8EkQuewgUprUw4L+jknbHlFPmozSTYa7K+wj4h5mHEHAl8IB74DdmjiOQ7Qti3xCUdUrmfileHLW1t8+eNrruRo/ffnuo5qS8eUEWgHCh3KVa3Qg0i9ydbJK2m0H/CUS8L7frrjbF/5ngNcRcAKA7yeo6YrdD7T+3a5ehlPptLCnK/RJALcBeJGJNkX6Pf+Zr667K9xK4JUAfw5Ec8xlGx0Ix2c7mfcyKZsSsab78zn8+trwV7QXyDO/AqYvhAe8jzld26KA0CsxuTsjF4K4D8DfmHnL0Lh3J3bQ5MyTVC/tSwbnJJqVTgJWEvAJ8WcJRP40fAY/TUxfDcc938snW09n6NMg3ATC6WBOMNGdo/tnr87lNNoBUlIcwu0LXwLmW1K25x5lhvrNXH6BMRB3V/h4Il6uxNTbgjs6DmYbYEP7EMyDzMrGyIDnF/kWz+MLfQ7ADQBOSpWLJJOuy3Y92Pac3aIX7VQ6bdjdFfw3EK4n0NFgbIWCreEHvM87rW8t12hAMCDu8z9MCfSFH/LmzXpq8wVXEOgGAo5JaezXVBXXDQ20P1CsvM31StIQ1gG0dYVWKuCbQbQA4P9Q2XXXUMD900IH2jhA8EaAtquqsjHfdvD0Jbvf5mqOX6YwrgPRu9PyZGzap8xb/cwDJ44UKuNc5csKhNGJpyt0DRNWEzAXjBdB2LqP5n3b6cDP+/enVo7sG71/PD5ernnmbWfOvLnffezuky+yFqpkkq378+ET4pj5er4dmxiP2xe8jIBbADrCBMITqkvpHvqu+4VyC6giQIhBnrr8t+9sTo6tJqIrdF+UDzLhPkrQZidR0GVfe+3wA6+9cdPYaHTZ2MGxeSUlTdpIbc4hs+9/7J6Fl1QTCLuF9HSGLmYF102YBr2GCr5mqL/9Drv6xf5eMSCMAS26cNfRrqbxDUT0rxOD5B1JFd/YNdDu6AzBkp4XzoqNjq4ePTh2Wjwatw16FSqM6QKEMA0zmsevBPO1IPqnjHkwP6yy61q7SGOhc7eWrzgQRoetywYXKqzcToA5eeN5Zt4cCbTf52QiS9b8fU5i5I0vRw+OXDp2MHq4WkqqtanDXECIIh5fqIR8bqEYeXUk0L7Wbn66Y063EXC4uSyDX2K4Lhnqdwft2ijH71UDIu1fdIY+zQrWpyJpujUB3mDGvarS9HWnUbWlvXsWjhwc3Tg6EvWMR8ebShFG+YHgEYZyr4uTm4OBjlfyjc3dGf4MKbwewHEWjZBk4A7XDL4l6O+IljK/QupWHQhjcG2dwWVEuJUsJ40YCCRV9fbdAx22J5VFW0vW8MzxA89eERuLXjF2cGy+08M5ZiGVDQjm/UzK1kSsadMTOxb9I99CtPqCZynALQRqs5Zj4AWotCwy4PldIYtZjrJTBkRaY3SFLk/tSN6VqSqxG0ybIwHPD5xO9MKbXjx6ZP9bt8fG4ufEovFmp/VKBoL5dXE1j8bn3PvkjoX7bTTCUih8o1lDWspvDPd7RcBpSj5TDoSY9QnLnp49L7lvFRO+TIRDLKrzFQbucc3gb9hFQdP1mOmCa5+7eHR07ProyNgH7bRG0UAwv6IyvtY0k79lp9a1+zqkfhOgj2RbaWbsUlXXF0qNNJZK0bQAwpiEtlVVx3oJtCq70Pg+lZo27epv+7PTiS+9bs+RI9GxjWOjsfPj0djsbPUKBoJ5D0AbRmbPHnjyWwvzBks0Z1olsf3+l6xzAv4OpssL0YRO515MuWkFRNqMLA29j128logmnchOlfk1g+6J9Ht+WMikz73mmcXjo/E10ZGxE1RVTc/dKRAMPAOV1keOcX8fayjvsbI2X+RsQlKE89tzjZHBD7qa+IuONV8hky2y7LQEwpiLfiNM3QDQudmvLn6JGXe8pRy23WkUVLRz5vUvHTprZP+GaDS+NB6NzXMARESFsm6o3/1zOzm3dgY7FKJbidCaEwTmlxmuLxUT1rfrv9TfpzUQJjBaCert2r3+7LZEi4Ky6rq70MDN2Vc+fUYT4+0//fqJj2Rrus0XaXcSAxDZZS7QOhB15FsUlXFb0wy1z87nKHVhi61fE0CkwfCFPwuoG7W7qlk+4q4hMX4KBVvCD3h/XaxQCqmnJyarXyXCZ/LVY8YvxpPqpb95qCPjAR2F9FWNsjUFRNrH8InkEl4DkDiAkuPDzzLjLqdR0EKFfbpv8INNrNxEhEk3xcxtsZ5EdPlQoP3hQvuYivI1CYQQVHv34LxkQukl4Nr8guM3RdRQTShbdz3U9mqpQm5fMnhEspk2E2ipXVsMumN0/9tvLjZ7ya79Svxes0AYwmhdOnSk0pT4CoEm3a20CkxEQZUkbw092P5EMcIUeZDMWDspVjKpI97DrFw0FZHGYuZlrlPzQKTNyLLQccwi25gW2wqF8XsQtoT7vQHbsuIGV1eoMxVNTWUp5TFUTGsjAU/+xwI66XSKytQNEGmNIc6SQLk937bPKCvsO6m4R2H1m8EHO/7XugaertCFTNyXy4nN8BUYf0qy2uX0HswUrbdtt3UHRFpj6NnIG0D4qK0UtPwd9icV3rT7gY5nT1s6uGCmSxnQMpltPsx4i5lvHhpov8uubC38XrdAGMLXTjBBvVXP83TwEVnPoPlE+IBtaeaHlTh/Mbij4zXbsjVSoO6BSGsM3SG8hQjvKHVtmPEPBl9SK1vJQubbMEAIobSuHJqrxBI3EmEVQLMKEVTa72D+QVKZcbnTRJ5i+pjKOg0FRNqM+MLvIfAGAMsdC18cjwNdHA54f+m4Tg0WbEggjHVq64ycolDy7pz3SFIFGbh7P827oZAbaDXIgjbkhgYi7V90hToB3gii92YsJPNTAC0PB7x/rNUFLnTcEgiTxNxdQXEO4jKxI2HwdZH+9q8VKtBaLy+ByLKCizp3zd890PpyrS9uMeOXQBQjtTquI4Go48UtZmoSiGKkVsd1JBB1vLjFTE0CUYzU6riOBKKOF7eYqUkgipFaHdeRQNTx4hYztYKB6L7t5XOh8E+ydpZ6Y+yKdX97l8qxe4n4TIDmamWZ/0ykrN/WM397ug3mP/t7W4412rqob+9OIpzPjF8p1Pz5bT3veUP8Zvwd4AP+npaMs5+m8bzq71lwlHlc3euGfwfQxwnULfrNNmZxB9QVS64G2Gc8v4mBEBHWWlP5PV2h20G4BsyvhwPtE4/4AeDtCn6ciX4n6kb6vZNOa7V1Bq9UFNoCFTeHB7ziWZ8Zn3z1nfQL8LPh/vaMZCBPV+iHIFwAwhlOjyWUAAQfALAnY1aMx8Rr/7r7hveA6MMAXgX4r3oZ+rhY6O29C87MBkR338vbQNwtwAFhsb+nRWtbwMWIvmSAZV1cM6BG+8aYnADh9oWC+kNM+Fkw6c9sEkIE7g/3e9OJuzo4iRfTD/2yCNkxEACSCddR1gxwYxxWoJz2m5pzxpirC4Tl6k5f5eteFk+vHRIwEJo/Zlzl3euGj4WqfMh/0/xHrEBMvCtKg+xUAwbRpuntMCKF/shJi27VWKZ3UdoB0eob+rALyT0ChuTMpkW7vtMm+ofI5G5yJY4KBdp/b8zL0xW6CAS/Bo5+gjtD+IUAYa3r9oUXE1g7t2EFwmm/6QuT0R0OeDVtON2AEOeozhMAWNWjGQiw8mXdBPEBqEqXtXz3ur1Cwxwp2oKiBoSmYFDb9p75uzRgspmwVL/OgQCI+VQzANYxe3zBPwoQRDkGHhGaIgnXscZJ9AKBgLmu0XZWIBz2ax6vMZfqAqE7BukrSHzz97ScmrqqDZMhyhxgpseJaZux2BOLqGkEoaPnMuPh7b0LhKpOf8zgEM1y634Jzofp7fYZcGlNaaYKhObDGdFH7XyICZOh+TmvA9RP4O+Z4TAvtjrTda7mcwhfwuQPOAVC808Ar6EJ0hqAsVOYKrOGKLRffd76M7zEC2pcsaS/ij6E9RrSF0GYCM3uc7QXwNnGAmn4WH2ISU3wcWZzkXYmU68UNINkOJdWaEz+Rsp/sXcqKZpYQQpdYHkgWtokGE6dqvJVIrvaWCizc+kUCAERCCfpi0/nE4uHiIgniCuXCrNhBqLQfnVYDT8n5RNVzanM4UNMMg/CdxBgAGs1x1CofvFJ7VSEZiDi94orWfgdxk5BdyZjxmP9M5xTvQ9e5e9pudPqj1w04cOkh5Jvl2Eer34KTD1VWySidwvVm2hu2uOKJ99K9Wl1PCEWNdLv+VEhQBDxL8SOJN03o5vAfzLvUjRnsoh+J/wi08yqssvIA4RwBIlmbTUcygwzYgZC24rOcmvLa+wkUuYg76sGU+ZKmKisOxbLC03zASFUdrLZtdNwKEXThhnR/QU6Xncmc3wYO8MB72cLAUJsO9NbyZRD2xRLHGsGYsKZLLxfs5Oq1a4KEKlFyRguK89B2EIjTqFvId8CSMQHjtRjEbPcrMZP08qYoDI7h2IBGbxO1LEupllzCOeSVLzD2pYY00TsQsgjexwirfpT3j0x3gTxMcJ5FKpbU8HxxG5tV2ERqvkKFg5iEycOSV/1QgamT5JcPaQmPmWOQwht5GpK/jWXhkk7mg77zbI70WMm1QXCQq+x4By9HMDSCf8h5VgS9wgfIVdgqrtv+E4QXWVqNWPravz9or69jxPhDM3cMG3LBoRZK+UCIhWUuoAJK9L+Q8qxTCZdd7hmJI8F41fWbakxDo8v9G0AF4OxSTiiGWbALBrCGWqSP+I0MCWCYoX2my0glnaYK6khcqpO+UNdSKDgSGVdzFpOIqcEJBASjgwJSCAkEBIIyUBuCUgNIemQGkIyIDWEZMChBKTJcCioRikmgWiUlXY4TwmEQ0E1SrGKATGRM4BN4YDX5mmzpYvbSGI1bhaV3qLzFozMLCAzn8N5C9lLmvI/tFv9pbTndIwSiFKknKrrVNiFdtW9bm/qjYB67keh9c3lnY5RAlGKlCsIhDmXNFteaqHDrhoQRqKHNUm13kyGljUOel7kkRq5o8aiOBW200VMt5dKHXRaL185p2MsWUNUC4iJDCN92lZfoVgfwkhECfd788qiWkBMHEkwL+9kCO0gSbdj5KOmDi3Z+TklA5FrYOXUEOlTT5bOzFDkAkJ/M+/EqabJ3/X0ejsgynH12S2i+D07EFqCckZW+kQyUSq3NJ1clPpupBFOJRBmYZcTCPOZCJEen84Z5IkdTDWBmLQYDq8+J0BYy5h2GhmmaloBYQjfSEs3JlFpIIyr2MhHFPmbIsFV9F8pIAxP39+zIK1NqwmErjW03UbG2dVpBUQuu1s5IPQXshtnIieSYydMQX5IAQMm4+Xuub5btmpXA7QZFuduWgFhmATDZOT67lCLFeVDaEI1XZ3ZNET6KtYP6IBo8r/iIKP26FTrv6Y6tmrWqGsqaPRnWzddYPLJae3KNIRsOZJoBcKc4Z3yeLPPK898nY+10JJpn0I7CV92p3JiobMcP7c6cMZx9ByCEFQRCOZ/wZQBj7GjEP8aB2K1/zOfmmScrhBtmXgeLz+rqrgv82/6jsRc1/rdavoMkZseQ5ARGJqkIfI9IiELqNYLxNkS83H6tjfj8yqYd5gy1a3fYZi6im47jUOkZkGmdwJZNIezCU+/UuazIhk+hBFBzHGYefrNxPmIijIZ5gMu1q6m4l6C8+kWXnLiyppUd9IDSgpvvXo1jHlkO1RtHkVRQIgGzD6C0aDdkfrqTb+8PU3yEbJEK8vbY3lb0zWderNx9DFfKLxoIMo7ZNlaJSWQirL+yvrIpWx9SiAquRLTpG2Lhstr6v4fVcLwqgiqWrMAAAAASUVORK5CYII="






  const generatePDF = () => {
  
    setTimeout(() => {
  
  
    const doc = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a3' });
  
    doc.addFileToVFS('Amiri-Regular.ttf', amiriFont);
    doc.addFont('Amiri-Regular.ttf', 'Amiri', 'normal');
    doc.setFont('Amiri');
    doc.setFontSize(12);
  
    const table = tableRef.current;
    const headers = [];
    const body = [];
    const colIndexesToSkip = [];
  
    let linkColumnIndex = -1;
    let xxyColumnIndex = -1; // ✅ لتحديد عرض عمود XXY فقط
  
    // 🟡 1. استخراج رؤوس الأعمدة
    const ths = Array.from(table.querySelectorAll('thead th'));
    ths.forEach((th, i) => {
      if (th.classList.contains('no-export')) {
        colIndexesToSkip.push(i);
      } else {
        if (th.classList.contains('is-link')) {
          linkColumnIndex = headers.length;
          headers.push('لينك الإعلان');
        } else {
          headers.push(th.innerText.trim());
        }
  
        // ✅ نحفظ فهرس عمود XXY (لأجل cellWidth فقط)
        if (th.classList.contains('XXY')) {
          xxyColumnIndex = headers.length - 1;
        }
      }
    });
  
    // 🟡 2. استخراج الصفوف
    const trs = Array.from(table.querySelectorAll('tbody tr'));
    trs.forEach(tr => {
      const row = [];
      Array.from(tr.children).forEach((td, i) => {
        if (!colIndexesToSkip.includes(i)) {
          const isLink = td.classList.contains('is-link');
          const href = td.querySelector('a')?.href || '';
          row.push({ text: isLink ? '' : td.innerText.trim(), isLink, href });
        }
      });
      body.push(row);
    });
  
    // 🟡 3. إنشاء جدول PDF
    autoTable(doc, {
      head: [headers],
      body: body.map(row =>
        row.map(cell => (cell.isLink ? '' : cell.text))
      ),
      styles: {
        font: 'Amiri',
        fontStyle: 'normal',
        halign: 'right',
            valign: 'middle',
      },
      headStyles: {
        fillColor: [41, 128, 185],
        textColor: 255,
        halign: 'right',
            valign: 'middle',
      },
      margin: { top: 10, right: 10, left: 10 },
  
      // ✅ تخصيص عرض الأعمدة باستخدام className
      columnStyles: {
        // ...(linkColumnIndex !== -1 && { [linkColumnIndex]: { cellWidth: 120 } }),
        ...(xxyColumnIndex !== -1 && { [xxyColumnIndex]: { cellWidth: 160 } }),
      },
 // ✅ أضف الخلفية في كل صفحة
  didDrawPage: function (data) {
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const imgWidth = 280; // عرض الشعار
    const imgHeight = 355; // ارتفاع الشعار

    const centerX = (pageWidth - imgWidth) / 2;
    const centerY = (pageHeight - imgHeight) / 2;

    // 🔵 اجعل الشفافية 0.1
    if (doc.setGState) {
      doc.setGState(new doc.GState({ opacity: 0.2 }));
    }

    doc.addImage(logoBase64, 'PNG', centerX, centerY, imgWidth, imgHeight);

    // إعادة الشفافية للوضع الطبيعي
    if (doc.setGState) {
      doc.setGState(new doc.GState({ opacity: 1 }));
    }
  },









  
      // ✅ رسم رابط "اضغط هنا" في خلايا is-link فقط
      didDrawCell: (data) => {
        const rowIdx = data.row.index;
        const colIdx = data.column.index;
        const cell = body?.[rowIdx]?.[colIdx];
  
        if (cell?.isLink && cell.href?.startsWith('http')) {
          doc.setTextColor(0, 0, 255);
          doc.textWithLink('اضغط هنا', data.cell.x + 5, data.cell.y + 10, {
            url: cell.href,
          });
          doc.setTextColor(0, 0, 0);
        }
      },
    });
   doc.save(`نسب الفوائد _${new Date().toISOString().slice(0, 10)}.pdf`);
  }
    
    , 1500);
   setShowFullText(true)
   };
  



 const nameOptions = Array.from(
  new Set(recordsA.map(r => r.customerName).filter(Boolean))
).map(customerName => ({ value: customerName, label: customerName }));

  return (
    <div div style={{ marginTop: "10px", height: "100vh" }}>
      <ModalX isVisble={showModdal} errorMassage={errorMassge} darkMode={darkSide}  />
    

      <div className="p-relative" style={{ margin: "0px 10px" }}>
        <div className="row flex-mobile" style={{ marginBottom: "200px" }}>
          <div
            className="col box input-css"
            id={classNameModel}
            style={{
              width: "100%",
              marginBottom: "0px",
              margin: "5px",
              // padding: "20px 10px",
                padding: "20px",
            }}
          >



<div
  // className="col box input-css"
  // id={classNameModel}
  style={{
    // width: "100%",
    margin: "5px",
    // padding: "20px",
  }}
>
  <div
    className="row align-items-center justify-content-between text-center text-md-start"
    style={{
      backgroundColor: darkSide ? "#e1e5ed" : "#0f1a36",
      color: darkSide ? "black" : "white",
      padding: "5px",
      marginBottom: "7px",


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
    <div className="col-12 col-md-3 mb-2 d-flex justify-content-center">
      <h3 className="m-0">عملائي</h3>
    </div>

    {/* مربع البحث على اليسار */}
    {/* <div className="col-12 col-md-3 mb-2 d-flex justify-content-md-end justify-content-center" style={{ position: "relative" }}>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        id="search-icon"
        style={{
          position: "absolute",
          top: "50%",
          right: "10%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          color: darkSide ? "#000" : "#888",
          transition: "opacity 0.3s",
          opacity: searchedVal.length > 0 ? 0 : 1,
        }}
      />
      <input
        id="myInput-search"
        className={`form-control ${searchClass}`}
        style={{
          color: "black",
          padding: "5px 10px 5px 10px",
          width: "100%",
          borderBottom: darkSide ? "2px solid #0d6efd" : "2px solid gray",
          maxWidth: "250px",
        }}
        type="search"
        placeholder="بحث عام"
        value={searchedVal}
        onChange={(e) => setSearchedVal(e.target.value)}
        onFocus={() => {
          const icon = document.getElementById("search-icon");
          if (icon) icon.style.opacity = 0;
        }}
        onBlur={() => {
          const icon = document.getElementById("search-icon");
          if (icon && !searchedVal) icon.style.opacity = 1;
        }}
      />
    </div> */}

    {/* مربع البحث على اليسار */}
<div
  className="col-12 col-md-3 d-flex justify-content-md-end justify-content-center"
  style={{ position: "relative" }} 
>

  <FontAwesomeIcon
    icon={faMagnifyingGlass}
    id="search-icon"
    style={{
      position: "absolute",
      top: "50%",
      right: "10px", // ✅ استخدم قيمة ثابتة بدل "10%"
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: darkSide ? "#000" : "#888",
      transition: "opacity 0.3s",
      opacity: searchedVal.length > 0 ? 0 : 1,
      zIndex: 2,
    }}
  />
  <input
    id="myInput-search"
    className={`form-control ${searchClass}`}
    style={{
      color: "black",
      padding: "5px 35px 5px 10px", // ✅ مساحة يمين 35px عشان الأيقونة
      width: "100%",
      borderBottom: darkSide ? "2px solid #0d6efd" : "2px solid gray",
    }}
    type="search"
    placeholder="بحث عام"
    value={searchedVal}
    onChange={(e) => setSearchedVal(e.target.value)}
    onFocus={() => {
      const icon = document.getElementById("search-icon");
      if (icon) icon.style.opacity = 0;
    }}
    onBlur={() => {
      const icon = document.getElementById("search-icon");
      if (icon && !searchedVal) icon.style.opacity = 1;
    }}
  />
</div>

  </div>
</div>


{/* 
<div className="filters-container" style={{ display: 'flex', gap: "5px", flexWrap: 'wrap', marginBottom: "10px" }}>
   <div  className="input-wrapper-search">


                <CreatableSelect
          placeholder="اسم العميل"
          options={nameOptions}
          value={filter.name ? { value: filter.name, label: filter.name } : null}
          onChange={(selected) =>
            setFilter(f => ({ ...f, name: selected ? selected.value : '' }))
          }
          isClearable
          isSearchable
           styles={customSelectStyle}
          formatCreateLabel={(inputValue) => inputValue}
        />

        <span  className="underline-input"></span>
</div>
 <div  className="input-wrapper-search">
        <input
          type="text"
          placeholder="رقم الجوال"
          value={filter.phone}
          onChange={e => setFilter(f => ({ ...f, phone: e.target.value }))}
        />



    <span  className="underline-input"></span>
    
 
   
    </div>

   <div  className="input-wrapper-search">
  <select
    style={{maxWidth:"180px" , minWidth:"180px"}}
                      name="job"
                        value={filter.job}
                       onChange={e => setFilter(f => ({ ...f, job: e.target.value }))}
                    >

                        <option selected value="">
                        اختر الوظيفه
                      </option>
                      <option  value="متقاعد">
                        متقاعد
                      </option>
                      <option value="مدني">مدني</option>
                      <option value="خاص">خاص</option>
                      <option value="جندي">جندي</option>
                      <option value="عريف">عريف</option>
                      <option value="وكيل رقيب">وكيل رقيب</option>
                      <option value="رقيب"> رقيب</option>
                      <option value="رئيس رقباء">رئيس رقباء</option>
                      <option value="ملازم">ملازم</option>
                      <option value="نقيب">نقيب</option>
                      <option value="رائد">رائد</option>
                      <option value="عقيد">عقيد</option>
                      <option value="عميد">عميد</option>
                    </select>
    <span  className="underline-input"></span>
</div>
    
 <div  className="input-wrapper-search">
        <select
                 style={{maxWidth:"180px" , minWidth:"180px"}}
                 value={filter.currentBank}
                onChange={e => setFilter(f => ({ ...f, currentBank: e.target.value }))}
        
        >
                       <option value="">اختر البنك </option>
                      <option value="alahli">الاهلي</option>
                      <option value="alrajhi">
                        الراجحي
                      </option>
                      <option value="albilad"> البلاد</option>
                      <option value="sab">ساب</option>
                      <option value="alinma">الانماء</option>
                      <option value="riyad"> لاحقا الرياض</option>
                      <option value="alfransi">لاحقا الفرنسي</option>
                      <option value="aljazira">لاحقا الجزيرة</option>
                      <option value="any">الاخري</option>
        </select>

   <span  className="underline-input"></span>

</div>
 <div  className="input-wrapper-search">
           <select
        style={{maxWidth:"180px" , minWidth:"180px"}}
                 value={filter.realEstateBank}
                onChange={e => setFilter(f => ({ ...f, realEstateBank: e.target.value }))}
        
        >
                      <option value="">البنك العقاري  </option>
                      <option value="alahli">الاهلي</option>
                      <option value="alrajhi">
                        الراجحي
                      </option>
                      <option value="albilad"> البلاد</option>
                      <option value="sab">ساب</option>
                      <option value="alinma">الانماء</option>
                      <option value="riyad"> لاحقا الرياض</option>
                      <option value="alfransi">لاحقا الفرنسي</option>
                      <option value="aljazira">لاحقا الجزيرة</option>
                      <option value="any">الاخري</option>
        </select>
           <span  className="underline-input"></span>
           </div>
  <div  className="input-wrapper-search">
                    <select

                      style={{maxWidth:"180px", minWidth:"180px"}}
                 value={filter.housingSupport}
                onChange={e => setFilter(f => ({ ...f, housingSupport: e.target.value }))}
                   
               
                    >

                       <option value=""> الدعم السكني</option>
                      <option value="monthly">قسط شهري</option>
                      <option selected value="baqa">
                     
                        باقة الدعم
                      </option>
                      <option value="no">غير مدعوم</option>
                     
                    </select>
                       <span  className="underline-input"></span>
                       </div>

 <div  className="input-wrapper-search">

                              <select

                                 style={{maxWidth:"180px" , minWidth:"180px"}}
                    value={filter.ministryDefenseSelect}
                     onChange={e => setFilter(f => ({ ...f, ministryDefenseSelect: e.target.value }))}
                      >
                        <option value="">وزارة الدفاع</option>
                        <option value="yes">نعم</option>
                        <option value="no">لا</option>
                      </select>
                         <span  className="underline-input"></span>
                         </div>
 <div  className="input-wrapper-search">
        <input
          type="text"
          placeholder="سنه الميلاد"
          value={filter.birthYear}
          onChange={e => setFilter(f => ({ ...f, birthYear: e.target.value }))}
        />
           <span  className="underline-input"></span>
           </div>
 <div  className="input-wrapper-search">
        <input
          type="text"
          placeholder=" سنه التعيين"
          value={filter.startWorkYear}
          onChange={e => setFilter(f => ({ ...f, startWorkYear: e.target.value }))}
        />
           <span  className="underline-input"></span>
           </div>
 <div  className="input-wrapper-search">
        <input
          type="text"
          placeholder="سنه الحسبة"
          value={filter.currentYear}
          onChange={e => setFilter(f => ({ ...f, currentYear: e.target.value }))}
        />
           <span  className="underline-input"></span>
           </div>
 <div  className="input-wrapper-search">
        
        <input
          type="number"
          placeholder="الراتب الاساسي من"
          value={filter.basicSalaryFrom}
          onChange={e => setFilter(f => ({ ...f, basicSalaryFrom: e.target.value }))}
          
        />
           <span  className="underline-input"></span>
           </div>
         <div  className="input-wrapper-search">
        <input
          type="number"
          placeholder="الراتب الاساسي إلى"
          value={filter.basicSalaryTo}
          onChange={e => setFilter(f => ({ ...f, basicSalaryTo: e.target.value }))}
          
        />
           <span  className="underline-input"></span>
           </div>
 <div  className="input-wrapper-search">
       
        <input
          type="number"
          placeholder="الصافي من"
          value={filter.netSalaryFrom}
          onChange={e => setFilter(f => ({ ...f, netSalaryFrom: e.target.value }))}
          
        />
           <span  className="underline-input"></span>
</div>
         <div  className="input-wrapper-search">
        <input
          type="number"
          placeholder="الصافي إلى"
          value={filter.netSalaryTo}
          onChange={e => setFilter(f => ({ ...f, netSalaryTo: e.target.value }))}
          
        />
   <span  className="underline-input"></span>
</div>



<Select
  isMulti
  options={cityOptions}
  placeholder="اختر المدن"
  value={filter.selectedCity.map((city) => ({
    value: city,
    label: city,
  }))}
  onChange={(selectedOptions) => {
    const selectedValues = selectedOptions.map((opt) => opt.value);

    setFilter({
      ...filter,
      selectedCity: selectedValues,
    });
  }}
  styles={customSelectStyle}
   className="w-auto"
/>



      </div> */}


      <div className="filters-container" style={{ display: 'flex', gap: "5px", flexWrap: 'wrap', marginBottom: "10px" }}>
  
  {/* اسم العميل */}
  <div className="input-wrapper-search">
    <CreatableSelect
      placeholder="اسم العميل"
      options={nameOptions}
      value={filter.customerName ? { value: filter.customerName, label: filter.customerName } : null}
      onChange={(selected) =>
        setFilter(f => ({ ...f, customerName: selected ? selected.value : '' }))
      }
      isClearable
      isSearchable
      styles={customSelectStyle}
      formatCreateLabel={(inputValue) => inputValue}
    />
    <span className="underline-input"></span>
  </div>

  {/* رقم الجوال */}
  <div className="input-wrapper-search">
    <input
      type="text"
      placeholder="رقم الجوال"
      value={filter.phone}
      onChange={e => setFilter(f => ({ ...f, phone: e.target.value }))}
    />
    <span className="underline-input"></span>
  </div>

  {/* نوع السند */}
  <div className="input-wrapper-search">
    <select
      style={{ maxWidth: "180px", minWidth: "180px" }}
      value={filter.documentType}
      onChange={e => setFilter(f => ({ ...f, documentType: e.target.value }))}
    >
      <option value="">نوع السند</option>
     
                  <option value="downPayment">الدفعه المقدمه</option>
                  <option selected value="pay">سداد الالتزامات</option>
    </select>
    <span className="underline-input"></span>
  </div>





  {/* البنك  */}
  <div className="input-wrapper-search">
    <select
      style={{ maxWidth: "180px", minWidth: "180px" }}
      value={filter.currentBank}
      onChange={e => setFilter(f => ({ ...f, currentBank: e.target.value }))}
    >
      <option value="">البنك للعميل</option>
                       <option value="alahli">الاهلي</option>
                  <option selected value="alrajhi">
                    الراجحي
                  </option>
                  <option value="albilad"> البلاد</option>
                  <option value="sab">ساب</option>
                  <option value="alinma">الانماء</option>
                  <option value="riyad"> الرياض</option>
                  <option value="alfransi"> الفرنسي</option>
                  <option value="aljazira"> الجزيرة</option>
                  <option value="any">الاخري</option>
    </select>
    <span className="underline-input"></span>
  </div>



  {/* فرع  */}
  <div className="input-wrapper-search">
    <select
      style={{ maxWidth: "180px", minWidth: "180px" }}
      value={filter.branch}
      onChange={e => setFilter(f => ({ ...f, branch: e.target.value }))}
    >
      <option value="">فرع التوقيع</option>
                      
               
                  <option selected value="الدمام">
                    الدمام
                  </option>
                  <option value="الرياض">الرياض</option>
                  <option value="القصيم">القصيم</option>
                  <option value="خميس مشيط">خميس مشيط</option>
                  <option value="جيزان "> جيزان</option>
                  <option value="جدة"> جدة</option>
                  <option value=" مكه المكرمة">مكه المكرمة</option>
                  <option value="المدينه المنوره">المدينه المنورة</option>
                  <option value="الطائف">الطائف</option>
    </select>
    <span className="underline-input"></span>
  </div>



 

  {/* اسم الكفيل */}
  <div className="input-wrapper-search">
    <input
      type="text"
      placeholder="اسم الكفيل"
      value={filter.prsonName}
      onChange={e => setFilter(f => ({ ...f, prsonName: e.target.value }))}
    />
    <span className="underline-input"></span>
  </div>

  {/* اسم المالك */}
  <div className="input-wrapper-search">
    <input
      type="text"
      placeholder="اسم المالك"
      value={filter.ownerName}
      onChange={e => setFilter(f => ({ ...f, ownerName: e.target.value }))}
    />
    <span className="underline-input"></span>
  </div>

  {/* السعر من */}
  <div className="input-wrapper-search">
    <input
      type="number"
      placeholder="السعر من"
      value={filter.priceFrom}
      onChange={e => setFilter(f => ({ ...f, priceFrom: e.target.value }))}
    />
    <span className="underline-input"></span>
  </div>

  {/* السعر إلى */}
  <div className="input-wrapper-search">
    <input
      type="number"
      placeholder="السعر إلى"
      value={filter.priceTo}
      onChange={e => setFilter(f => ({ ...f, priceTo: e.target.value }))}
    />
    <span className="underline-input"></span>
  </div>

  {/* مدن العقار */}
  {/* <Select
    isMulti
    options={cityOptions}
    placeholder="اختر المدن"
    value={filter.aqarCity.map((city) => ({
      value: city,
      label: city,
    }))}
    onChange={(selectedOptions) => {
      const selectedValues = selectedOptions.map((opt) => opt.value);
      setFilter(f => ({ ...f, aqarCity: selectedValues }));
    }}
    styles={customSelectStyle}
    className="w-auto"
  /> */}
  <Select
  isMulti
  options={cityOptions}
  placeholder="اختر المدن"
  value={
    Array.isArray(filter.aqarCity)
      ? filter.aqarCity.map(city => ({ value: city, label: city }))
      : []
  }
  onChange={(selectedOptions) => {
    const selectedValues = selectedOptions.map((opt) => opt.value);
    setFilter(f => ({ ...f, aqarCity: selectedValues }));
  }}
  styles={customSelectStyle}
  className="w-auto"
/>

</div>


            <div style={{ display: show ? "" : "none" }}>
            

              <div
                className="loader-container"
                style={{ flexDirection: "column", marginTop: "-100px" }}
              >
                <div className="logo-reveal" style={{ marginBottom: "10px" }}>
                  <img
                    src={image2}
                    alt="Eskan Salman Logo"
                    className="logo-color"
                  />
                  <div className="logo-mask"></div>
                </div>

                <ProgressCounter />
              </div>
            </div>

            <div
              className="calculation flex-container"
              style={{ display: show ? "none" : "" }}
            >
              <div
                className="calculation-flex flex-2dir input-css flex-dir table-client table-responsive"
                onClick={handelDivClick}
                id="input-loan-form"
                style={{
                  // padding: "5px",
                  padding:"0px",
                  width: "100%",
                  overflow: "scroll",
                  height: "88vh",
                  marginBottom: "60px",
                  overflowX: "auto",
                  marginRight: "5px",
                  marginLeft: "5px",
                  marginTop: "0px",
                  // height: "100vh",
                  backgroundColor: darkSide ? "" : "#2c375b",

                  display: "flex",

                  flexDirection: "column",
                  /* BORDER-RADIUS: 50PX; */
                  borderRadius: "20px",
                }}
              >
                {/* <table style={{ direction: "rtl" , height:"200%"  }}> */}

                <table
                  ref={tableRef}
                  style={{
                    direction: "rtl",
                    height: "100%",
                    marginBottom: "10px",
                    maxHeight: "40px",
                  }}
                  className={
                    darkSide
                      ? "table-clients-show    align-middle  table table-striped table-hover  css-table  hover-css-light"
                      : "table-clients-show  table-striped   align-middle table table-dark table-hover  css-table  hover-css-dark"
                  }
                >
                  <thead
                    style={{
                      background: "rgba(34, 42, 69, 0.96)",
                      color: "white",
                    }}
                    className={darkSide ? "table-light" : "table-dark"}
                  >
                    <tr style={{ verticalAlign: "middle"  , position: "sticky",
top: "0",
zIndex: "10" }}>
                 
                      <th scope="col" style={{ width: "32px", height: "50px" }}>
                        رقم
                      </th>
                      <th scope="col" style={{ width: "140px" }}>
                        اسم العميل
                      </th>
                        <th scope="col">هويه العميل</th>

                         <th scope="col">عنوان العميل </th>
                      <th scope="col">البنك </th>
                  

                      <th scope="col">فرع التوقيع</th>
                      <th scope="col">  المبلغ</th>
                     
                      <th scope="col">  نوع السندات</th>
                       <th scope="col">   يوجد كفيل </th>
                     
                    
                      <th scope="col" style={{ textAlign: "center" }}>
                        {" "}
                        اسم المالك
                      </th>

                       <th scope="col">  وكيل  للمالك</th>
                 

                    <th scope="col" style={{ textAlign: "center" }}>
                   سعر العقار 
                      </th>
                      
                        <th scope="col">  مدينه العقار </th>
                        <th scope="col" style={{ textAlign: "center" }}>
                                                       اليوم
                       </th>

                                          <th scope="col" style={{ textAlign: "center" }}>
                  تاريخ الانشاء 
                      </th>

                    
                                  
                                          <th scope="col" style={{ textAlign: "center" }}>
                   تاريخ الاستحقاق
                      </th>

                     
                     <th scope="col" style={{ textAlign: "center" }}>
                   طريقه الاسترداد
                      </th>

                      <th
                        scope="col"
                        style={{ width: "120px", textAlign: "center" }}
                      >
                        التعديل
                      </th>
                      <th scope="col"  className="no-export">الحذف</th>
                    </tr>
                  </thead>
                  <tbody
                    className={tableDark}
                    style={{ color: darkSide ? "black" : "white" }}
                  >

 {/* {filteredRecords.length === 0 ? ( */}
  {records.length === 0 ? (
            <tr>
              <td colSpan={19} style={{ textAlign: 'center' }}>
                لا يوجد اتصال بقاعدة البيانات
              </td>
            </tr>
          ) : (
            // filteredRecords.map((user, i) => (
                    records.map((user, i) => (
       

                         
                     


                          // <tr className="align-middle" key={i}>
                          


                        
                          //   <td style={{ width: "32px" }}>{user.id} </td>
                          //   <td style={{ width: "140px" }}>{user.name} </td>
                          //   <td style={{ width: "120px" }}>{user.phone} </td>
                        
                            

                          //   <td style={{ textAlign: "center" }}>
                          //     {user.currentBank == "alahli"
                          //       ? "الاهلي"
                          //       : user.currentBank == "alrajhi"
                          //       ? "الراجحي"
                          //       : user.currentBank == "albilad"
                          //       ? "البلاد"
                          //       : user.currentBank == "sab"
                          //       ? "ساب"
                          //       : user.currentBank == "alinma"
                          //       ? "الانماء"
                          //       : "الاخري"}{" "}
                          //   </td>
                          //   <td style={{ textAlign: "center" }}>
                          //     {user.realEstateBank == "alahli"
                          //       ? "الاهلي"
                          //       : user.realEstateBank == "alrajhi"
                          //       ? "الراجحي"
                          //       : user.realEstateBank == "albilad"
                          //       ? "البلاد"
                          //       : user.realEstateBank == "sab"
                          //       ? "ساب"
                          //       : user.realEstateBank == "alinma"
                          //       ? "الانماء"
                          //       : "الاخري"}{" "}
                          //   </td>

                          //   <td style={{ textAlign: "center" }}>{user.job} </td>
                          //   <td style={{ textAlign: "center" }}>
                          //     {user.netSalary}{" "}
                          //   </td>
                          //   <td style={{ textAlign: "center" }}>
                          //     {user.basicSalary}{" "}
                          //   </td>
                          //   <td style={{ textAlign: "center" }}>
                          //     {user.housingSupport == "baqa"
                          //       ? "باقه الدعم"
                          //       : user.housingSupport == "no"
                          //       ? "غير مدعوم"
                          //       : "قسط دعم"}
                          //   </td>

                          //   <td style={{ textAlign: "center" }}>
                          //     {user.birthYear + "-" + user.birthMonth}{" "}
                          //   </td>
                          //   <td style={{ textAlign: "center" }}>
                          //     {user.startWorkYear + "-" + user.startWorkMonth}{" "}
                          //   </td>

                          //   <td scope="row" style={{ textAlign: "center" }}>
                          //     {user.currentYear + "-" + user.currentMonth}{" "}
                          //   </td>
                          // <td scope="row" style={{ textAlign: "center" }}>
                          //     {user.selectedCity}
                          //   </td>


                           <tr className="align-middle" key={i}>
        <td>{user.id}</td>
        <td>{user.customerName}</td>
        <td>{user.customerId}</td>
       
        <td>{user.customerCity}</td>
        <td>{
          
                                 user.currentBank == "alahli"
                                ? "الاهلي"
                                : user.currentBank == "alrajhi"
                                ? "الراجحي"
                                : user.currentBank == "albilad"
                                ? "البلاد"
                                : user.currentBank == "sab"
                                ? "ساب"
                                : user.currentBank == "alinma"
                                ? "الانماء"
                                : "الاخري"
          
          
          
          }</td>
        <td>{user.branch}</td>
        <td>{user.number}</td>
       
        <td>{
        
        
       
        
       user.documentType == "downPayment" ? " الدفعه المقدمة" :
       user.documentType == "pay" ? " سداد التزام" : "سداد"
        
        
        
        }</td>
        <td>{
       
       user.person==="yes"?"نعم":
       user.person==="no"?"لا":"لا"
        
        }</td>
    

        <td>{user.ownerName}</td>
       
        <td>{
        
        
       
       user.ownerPrson==="yes"?"نعم":
       user.ownerPrson==="no"?"لا":"لا"


          
          }</td>

       
        <td>{user.price}</td>
        
        <td>{user.aqarCity}</td>
        <td>{user.dayNam}</td>
        <td>{`${user.nowYear}/${user.nowMonth}/${user.nowDay}`}</td>
       
        <td>{`${user.addYear}/${user.addMonth}/${user.addDay}`}</td>
        <td>{user.toEskan}</td>




<td style={{ textAlign: "center" }}>

<div class="hover-container">
  <p class="hover-target" tabindex="0" style={{    margin: "auto"}}>
  <button
                                  onClick={() => handleEdit(user.id)}
                                  // className="btn  btn-danger-alaa-edit"
                                  className="btn btn-success"
                                  style={{
                                    fontSize: "13px",
                                    border: "1px solid green",
                                  }}
                                  // title={user.currentYear + "الدعم السكني"}
                                  title={" اعادة الاحتساب"}
                                >
                                  <FontAwesomeIcon
                                    icon={faPenToSquare}
                                    style={{
                                      // color: darkSide ? "green" : "#00ff31",
                                      cursor: "pointer",
                                    }}
                                    className="edit-icon"
                                  />
                                 

                                    {/* <p> {"ضمانات - استثناء : "+ user.typeException }</p> */}
                                  
                                </button>

  </p>
  <aside className={darkSide?"hover-popup shadow p-3 mb-5  rounded":"hover-popup shadow p-3 mb-5  rounded dark-arrow"} style={{
                                      backgroundColor: darkSide
                                        ? "rgb(255 255 255)"
                                        : "black ",
                                      color: darkSide ? "black" : "white",
                                    }}>
                             <h5 style={{marginBottom: "0px"}}>معلومات اضافيه</h5>
    

    <p>
      
      
   

                                  
                                    <p> {"تاريخ الاضافه : " +  moment(user.dateAdd).format('DD/MM/YYYY hh:mm A') }</p>
                                  
  
                                    <p>
                                      <mark style={{ padding: "2px" }}>
                                       التفاصيل
                                      </mark>
                                    </p>
                                    <p>
                                    
                                      {"تاريخ الانشاء هـ  : " +
                                       `${user.nowYearH}/${user.nowMonthH}/${user.nowDayH}`
                        
                                       }
                                    </p>
                                    <p>
                                     
                                      {"رقم الجوال : " +
                                       user.phone
                                      }
                                    </p>
                                    <p>
                                      {" "}
                                      {"مبلغ السعي : " +

                                       user.number1
                                       }
                                    </p>
                   



                                    
                                    {user.person=="no" ? (
                                      <p> يوجد كفيل : <span>لا</span></p>
                                    ) : (
                                      <>
                                        <p>  يوجد كفيل :  <span> نعم</span></p>
                                         <p>{"اسم الكفيل : "+user.prsonName}</p> 
                                         <p>{"هويه الكفيل : "+user.prsonId}</p> 
                                         <p>{"عنوان الكفيل : "+user.prsonCity}</p>  
                                                  
                                    
                                      </>
      
                      
                                    )}





                                                                        
                                    {user.ownerPrson=="no" ? (
                                      <p> وكيل المالك : <span>لا</span></p>
                                    ) : (
                                      <>
                                        <p>  يوجد وكيل :  <span> نعم</span></p>
                                         <p>{"اسم الوكيل : "+user.ownerNameAdd}</p> 
                                         <p>{"هويه الوكيل : "+user.ownerIdAdd}</p> 
                                         <p>{"رقم الوكاله : "+user.ownerAdd}</p>  

  
                                    
                                      </>
      
                      
                                    )}


                                                                           
                                    {user.typeOwner=="one" ? (
                                      <>
                                      <p> {" المالك : فرد" }</p>
                                      <p>{"هويه المالك : " + user.ownerId}</p>
                                      <p>{"شيك المالك : " + user.cheq}</p>
                                   
                                      </>

                                    ) : (
                                     <>
                                      <p> { "المالك : موسسة /شركه" }</p>
                                       <p>{"السجل التجاري :"+ user.ownerId}</p>
                                       <p>{"شيك المالك : " + user.cheq}</p>
                                     </>
                              
                            
                    
                                    )}

 


  


                                    {/* <p> {"مدة الاشترك : " + user.durationIn}</p>

                                    {user.typeException === "normal" ? (
                                      <p> ضمانات /استثناء : بدون</p>
                                    ) : user.typeException === "exception" ? (
                                      <p> ضمانات /استثناء : استثناء </p>
                                    ) : user.typeException === "damanat" ? (
                                      <p> ضمانات / استثناء : ضمانات</p>
                                    ) : (
                                      <p>
                                        {" "}
                                        ضمانات / استثناء : ضمانات مع استثناء
                                      </p>
                                    )}

                                    {user.job == "متقاعد" ||
                                    user.job == "خاص" ||
                                    user.job == "مدني" ? (
                                      <></>
                                    ) : user.ministryDefenseSelect === "yes" ? (
                                      <p>عسكري وزارة الدفاع : نعم</p>
                                    ) : user.ministryDefenseSelect === "no" ? (
                                      <p>عسكري وزارة الدفاع : لا</p>
                                    ) : (
                                      <></>
                                    )}
                                    
                                    <p>{" طريقه الوصول : " + user.requests   }</p>
                                    <p>{" ملاحظات : " + user.comments   }</p>
         */}
       
      
       </p>
  </aside>
</div>


</td>







                            <td>








                               <button
                                onClick={() => handleDelete(user.id)}
                                // className="btn btn-danger btn-danger-alaa"
                                className="btn btn-danger"
                                style={{ fontSize: "13px" }}
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  className="delete-icon"
                                />
                              </button> 




                            </td>
                          </tr>
                                                 ))
          )}
                          

                     


                  </tbody>
                </table>

                         <nav
                   style={{ marginBottom: "45px" }}
                   aria-label="Page navigation example"
                 >
                   <ul
                     className="pagination justify-content-center"
                     style={{ marginTop: "40px" }}
                   >
                     <div
                       style={{
                         margin: "5px 0 0 10px",
                         color: darkSide ? "black" : "white",
                       }}
                     >
                       <span>{nPage===0? 1:nPage}</span>
                       {/* <pre style={{display:"inline-block" , fontSize:".875em"}}> من </pre> */}
                       <span>/</span>
                       <span>{ currentPage===0? 1:currentPage}</span>
                     </div>
                     <div className="sc-bXCLTC fpXtsl">
                       <select
                         aria-label="Rows per page:"
                         className="sc-hmdomO iECIQW"
                         style={{
                           backgroundColor: "rgb(242, 242, 242)",
                           border: "1px solid #d5d5d5",
                           borderRadius: "5px",
                           color: darkSide ? "black" : "black",
                           height: "36px",
                           width: "120%",
                           padding: "0 5px",
                           marginLeft: "18px",
                           marginTop: "-1px",
                         }}
                         value={selectNumberRow.numerUserRow}
                         // onChange={(event) => {
                         //   setSelectNumberRow({
                         //     ...selectNumberRow,
                         //     numerUserRow: event.target.value,
                         //   });
                         // }}
                         onChange={(event) => {
   setSelectNumberRow({
     ...selectNumberRow,
     numerUserRow: parseInt(event.target.value),
   });
   setCurrentPage(1); // ضروري تعيد الصفحة الأولى عند تغيير عدد الصفوف
 }}
                       >
                         <option value={5}>5</option>
                         <option value={8}>8</option>
                         <option value={10}>10</option>
                         <option value={20}>20</option>
                         <option value={30}>30</option>
                         <option value={50}>50</option>
                         <option value={100}>100</option>
                         <option value={500}>500</option>
                         <option value={100000}>الكل</option>
                       </select>
 
                       <svg
                         xmlns="http://www.w3.org/2000/svg"
                         width="24"
                         height="36"
                         viewBox="0 0 24 24"
                         style={{ color: "black" }}
                       >
                         <path d="M7 10l5 5 5-5z"></path>
                         <path d="M0 0h24v24H0z" fill="none"></path>
                       </svg>
                     </div>
 
 
 
 
 
 
 
 
                     <ReactPaginate
                       previousLabel={<FontAwesomeIcon icon={faCaretRight} />}
                       nextLabel={<FontAwesomeIcon icon={faCaretLeft} />}
                       breakLabel="..."
                       pageCount={nPage}
                       marginPagesDisplayed={1}
                       pageRangeDisplayed={3}
                       onPageChange={handlePageClick}
                       containerClassName="pagination  justify-content-center"
                       pageClassName="page-item"
                       pageLinkClassName="page-link"
                       previousClassName="page-item"
                       previousLinkClassName="page-link"
                       nextClassName="page-item"
                       nextLinkClassName="page-link"
                       breakClassName="page-item"
                       breakLinkClassName="page-link"
                       activeClassName="active"
                     />
                   </ul>
                 </nav>
 



                <div style={{marginTop:"20px"   ,  position: "fixed",
    left: "30px",
    bottom: "90px"
   }}>

<Row >
      <Col xs={12}>
        <Toast onClose={() => setShowa(false)} show={showa} delay={5500} autohide >
          <Toast.Header style={{direction:"ltr" , backgroundColor:"#DEDFDF"}}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">اشعار</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body style={{backgroundColor:"#212529" , color:"white"}}>  {errorMassge}</Toast.Body>
        </Toast>
      </Col>
  
    </Row>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}








