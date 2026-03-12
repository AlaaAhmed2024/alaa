



import React, { useEffect, useState, useRef, useContext } from "react";
import { Tabs, Tab } from "react-bootstrap";  // تأكد أن هذا import موجود في الأعلى
import Form from 'react-bootstrap/Form';
import "../Project1.css";
import AlartBootstap from "../components/alartBootstrap";
import "../components/netSalary.css";
import audioError from "../sound/error.mp3";
import audioSuccess from "../sound/success.mp3";
import audioWarning from "../sound/warning.mp3";
import image2 from "../logo.png";
import ProgressCounter from "../components/ProgressCounter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  faX,
  faTrashAlt,
     faHashtag,
  faHouseChimney,
  faRulerCombined,
  faUserTie,
  faLayerGroup,
  faMoneyBillWave,
  faBuildingUser,
  faLink,
  faMap,
  faCity,
  faMapPin,
  faLocationDot,
  faUser,
  faImage,
    faBed,
  faCouch,
  faUtensils,
  faToilet,
  faDoorOpen,
  faChair,
  faHouse,
  faRoad,
    faCar,          // مدخل سيارة
  faWarehouse,    // مستودع (غرفة تخزين)
 
  faUserShield,   // حارس (غرفة حارس)
  faYard,         // حوش (فناء أمامي للسيارات) — للأسف لا يوجد أيقونة yard في FontAwesome، سنستخدم faTree
  faTree,
 
  faStickyNote,   // ملاحظات (ايقونة بديلة)



  faPark, // لا يوجد فعليًا faYard في FA، يمكن استبداله بـ faTree أو faPark

  faBuilding,
  faUserNurse,
  
  faElevator,

faObjectGroup,

  faSolarPanel,
  faMapMarkedAlt,
  faHandsWash,
  faBalcony,          // غير موجود رسميًا، سنستخدم بديل مناسب
           // لموقف سيارات
  faBroom,            // بديل للغسيل
  faMapMarkerAlt,     // قريب من الخدمات
  faStairs,           // للسطح مثلاً أو الطوابق



} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ModalX from "../modalX";
import About from "../components/About";
import { useNavigate } from "react-router-dom";
import {
  DownloadTableExcel,
  useDownloadExcel,
} from "react-export-table-to-excel";
import ReactPaginate from "react-paginate";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/esm/Container";
import Dropdown from "../components/select";

import Select from "react-select";
import CreatableSelect from "react-select/creatable";


import { CheckAddClient } from "./checkAddClient";
import { ColorModeContext } from "../Context/ThemeContext";


export default function AddClient(props) {
  const arrData = props.editClint;













    const [modalShowBootstap, setModalShowBootstap] = useState(false);

 const [showa, setShowa] = useState(false);




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


const [userDataEdit, setUSerDataEdit] = useState();


  const [clientOptions, setClientOptions] = useState([]);
  const [employeeOptions, setEmployeeOptions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8090/followups")
      .then((response) => {
        const options = response.data.map((item) => ({
          value: item.name,
          label: item.name,
        }));
        setEmployeeOptions(options);
      })



      .catch((error) => {
        console.error("خطأ في جلب الأسماء:", error);
      });
  }, []);



  // عند الاختيار أو الإضافة
  const handleChange = async (selectedOption) => {
    if (!selectedOption) {
      setcalulationInputs({ ...calulationInputs, name: ""  });
      return;
    }

    const exists = employeeOptions.find(
      (opt) => opt.value === selectedOption.value
    );

    // إذا الاسم جديد: أضف وأرسل POST
    if (!exists) {
      try {
        await axios.post("http://localhost:8090/followups", {
         name: selectedOption.value,
        });
        console.log("تم حفظ الاسم الجديد بنجاح ✅");
      } catch (err) {
        console.error("فشل حفظ الاسم الجديد ❌:", err);
      }

      setEmployeeOptions([...employeeOptions, selectedOption]);
    }

    setcalulationInputs({
      ...calulationInputs,
      name: selectedOption.value,
    });
  };



  useEffect(() => {
    axios.get("http://localhost:8090/followups")

        .then((response) => {
        const options = response.data.map((item) => ({
          value: item.clientName,
          label: item.clientName,
        }));
        setClientOptions(options);
      })



      .catch((error) => {
        console.error("خطأ في جلب الأسماء:", error);
      });
  }, []);

    // عند الاختيار أو الإضافة
  const handleChangeClient = async (selectedOptionClient) => {
    if (!selectedOptionClient) {
      setcalulationInputs({ ...calulationInputs, clientName: ""  });
      return;
    }

    const exists = clientOptions.find(
      (opt) => opt.value === selectedOptionClient.value
    );

    // إذا الاسم جديد: أضف وأرسل POST
    if (!exists) {
      try {
        await axios.post("http://localhost:8090/followups", {
         clientName: selectedOptionClient.value,
        });
        console.log("تم حفظ الاسم الجديد بنجاح ✅");
      } catch (err) {
        console.error("فشل حفظ الاسم الجديد ❌:", err);
      }

      setClientOptions([...clientOptions, selectedOptionClient]);
    }

    setcalulationInputs({
      ...calulationInputs,
      clientName: selectedOptionClient.value,
    });
  };



const [nextId, setNextId] = useState(null);

 



useEffect(() => {
  fetch("http://localhost:8090/followups")
    .then((res) => res.json())
    .then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        const maxId = Math.max(...data.map((item) => item.id || 0));
        setNextId(maxId + 1);
      } else {
        setNextId(1); // إذا كانت القائمة فاضية
      }
    })
    .catch((err) => console.error("خطأ في جلب ID:", err));
}, []);



  // في حالة arrData غير موجود (إضافة جديدة)
if (arrData === undefined) {
  var selectStateShow=false
  var textTitle = " عميل جديد";
  var showHead = true;
  var textSend = "اضافه للعملاء";
  var editnumberOffers = nextId;
  
var editName = "";
var editCommunicationType = "";
var editClientType=""
var editOfferNumber = "";
var editClientName = "";
var editClientPhone = "";
var editRegion = "";
var editCities = "";
var editCity = [];
var editDistricts = [];
var editPropertyTypes = "";
var editPlatform = "";
var editNotes = "";
var editAddedByEmployee = "";
var editStatus = "انتظار التواصل";
var editAddedDate = "";
var editStatusLastUpdate = "";


var editAllDisabled=false
 

} else {
   var selectStateShow=true
  var textTitle = " تعديل العرض" + " رقم  " + arrData.id;
  var textSend = "تحديث العرض";
  var showHead = false;
  var editnumberOffers = arrData.id;
 
  var editName = arrData.name;

var editCommunicationType = arrData.communicationType;
var editClientType=arrData.clientType
var editOfferNumber = arrData.offerNumber;
var editClientName = arrData.clientName;
var editClientPhone = arrData.clientPhone;
var editRegion = arrData.region;
var editCities = arrData.cities;
var editCity = arrData.city;
var editDistricts = arrData.districts;
var editPropertyTypes = arrData.propertyTypes;
var editPlatform = arrData.platform;
var editNotes = arrData.notes;
var editAddedByEmployee = arrData.addedByEmployee;
var editStatus = arrData.status;
var editAddedDate = arrData.addedDate;
var editStatusLastUpdate = arrData.statusLastUpdate;

var editAllDisabled=true

}

const [calulationInputs, setcalulationInputs] = useState({
  numberOffers: editnumberOffers,
 
  userAddData: window.localStorage.getItem("name"),
  offerNumber :editOfferNumber,
clientName: editClientName,
clientPhone: editClientPhone,
region: editRegion,
cities: editCities,
city: editCity,
districts: editDistricts,
propertyTypes: editPropertyTypes,
platform: editPlatform,
notes: editNotes,
addedByEmployee: editAddedByEmployee,
status: editStatus,
addedDate: editAddedDate,
statusLastUpdate: editStatusLastUpdate,
communicationType: editCommunicationType,
name: editName,
allDisabled:editAllDisabled,
 
clientType:editClientType,

});


const [showPriceArea,setShowPriceArea]=useState({
  price:"",
  area:""
})



  const regionsData = {
  "المنطقة الشرقية": {
    cities: {
      "الدمام": ["الفيصلية", "الشراع"],
      "الخبر": ["العليا", "البندرية"],
    },
  },
  "المنطقة الجنوبيه": {
    cities: {
      "أبها": ["الربوة", "الضباب"],
      "خميس مشيط": ["الصناعية", "الرصراص"],
    },
  },
   "المنطقة الغربية": {
    cities: {
      "أبها": ["الربوة", "الضباب"],
      "خميس مشيط": ["الصناعية", "الرصراص"],
    },
  },
   "المنطقة الشمالية": {
    cities: {
      "أبها": ["الربوة", "الضباب"],
      "خميس مشيط": ["الصناعية", "الرصراص"],
    },
  },
   "المنطقة الوسطي": {
    cities: {
      "أبها": ["الربوة", "الضباب"],
      "خميس مشيط": ["الصناعية", "الرصراص"],
    },
  },
}









const customSelectStyle = {
  control: (base) => ({
    ...base,
    minHeight: '40px',
    height: '40px',
    fontSize: '14px',
  }),
  valueContainer: (base) => ({
    ...base,
    height: '40px',
    padding: '0 6px',
  }),
  input: (base) => ({
    ...base,
    margin: '0px',
  }),
  indicatorsContainer: (base) => ({
    ...base,
    height: '40px',
  }),
};


const customSelectStyleS = {
  control: (provided, state) => ({
    ...provided,
    minHeight: "38px",
    height: "38px",
    borderColor: state.isFocused ? "#999" : "#ccc",
    boxShadow: "none",
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: "38px",
    padding: "0 8px",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: "38px",
  }),
  input: (provided) => ({
    ...provided,
    margin: "0px",
    padding: "0px",
  }),
};





const [districtOptions, setDistrictOptions] = useState([]);
   const [cityOptions, setCityOptions] = useState([]);












 const logoBase64 =
"data:image/png;base64,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"












//    useEffect(() => {
//   axios.get("http://localhost:8090/followups")
//     .then((res) => {
//       const data = res.data;
//       if (calulationInputs.region) {
//         const cities = data
//           .filter((item) => item.region === calulationInputs.region)
//           .map((item) => item.cities);

//         const uniqueCities = [...new Set(cities)].map((city) => ({
//           value: city,
//           label: city,
//         }));

//         setCityOptions(uniqueCities);
//       }

//       // استخراج الأحياء حسب المدينة
//       if (calulationInputs.cities) {
//         const districts = data
//           .filter((item) => item.cities === calulationInputs.cities)
//           .map((item) => item.districts);

//         const uniqueDistricts = [...new Set(districts)].map((d) => ({
//           value: d,
//           label: d,
//         }));

//         setDistrictOptions(uniqueDistricts);
//       }
//     })
//     .catch((err) => console.error("خطأ أثناء جلب البيانات:", err));
// }, [calulationInputs.region, calulationInputs.cities]);





useEffect(() => {
  axios.get("http://localhost:8090/followups")
    .then((res) => {
      const data = res.data;

      if (calulationInputs.region) {
        const cities = data
          .filter((item) => item.region === calulationInputs.region)
          .map((item) => item.cities);

        const uniqueCities = [...new Set(cities)].map((city) => ({
          value: city,
          label: city,
        }));
        setCityOptions(uniqueCities);
      }

      if (calulationInputs.cities) {
        const districts = data
          .filter((item) => item.cities === calulationInputs.cities)
          .map((item) => item.districts);

        const uniqueDistricts = [...new Set(districts)].map((d) => ({
          value: d,
          label: d,
        }));
        setDistrictOptions(uniqueDistricts);
      }
    })
    .catch((err) => console.error("خطأ أثناء جلب البيانات:", err));
}, [calulationInputs.region, calulationInputs.cities]);








const regionOptions = Object.keys(regionsData).map((region) => ({
  value: region,
  label: region,
}));
















  const handleNumericInput = (e, field, maxLength) => {
    const newValue = e.target.value;

    if (/^\d*$/.test(newValue) && newValue.length <= maxLength) {
      setcalulationInputs((prev) => ({
        ...prev,
        [field]: newValue,
      }));
    }
  };

    function handelDarkSide() {
    // setShwoDarkSide(!darkSide);
    const newMode = !darkSide;
  setShwoDarkSide(newMode);
  localStorage.setItem("darkMode", newMode); // حفظ الوضع
  }


  if (darkSide) {
    var textMode = "داكن";
       var classNameModelBootstrap = "box-dark-bootstrap  z-index-alart";
    var classNameModel = "col box box-about";
    var classNameModelPrint = "col box box-about photo-print";
    var ic1 = faMoon;
    var classRotate = 0;
    var classColor = "model-light";
    var tableDark = "";
    var backColor = "link-log-dark  dark-buttom-about";
    var backTab = "";
    var borderStyle = "3px solid rgb(41 45 72)";
  } else {
    var textMode = "فاتح";
    var classNameModel = "col box-dark box-abput";
       var classNameModelBootstrap = "box-dark-bootstrap z-index-alart";
    var classNameModelPrint = "col box-dark box-abput  photo-print";

    var ic1 = faCircleHalfStroke;
    var classRotate = 180;
    var classColor = "#050505";
    var tableDark = "table-Dark";
    var backColor = "link-log-dark  dark-buttom-about  back-color";
    var backTab = "#29314d";
    var borderStyle = " 3px solid #b6b1ff";
  }

  const [showDelete, setShowDelete] = useState(false);
  const [loading, setLoading] = useState();
  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);
if(arrData === undefined){
   var sa=false  //اضغط ع اضافه العرض لاظهار المودديل
   //var sa=true   //مباشر اظهار الموديل للاضافه
}else{
  var sa= true  //مباشر اظهار الموديل للتعديل
}
  const [showAdd, setShowAdd] = useState(sa);

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  const dueDate = new Date();

  const datEAdd = dueDate.toLocaleDateString("en-CA"); // yyyy-mm-dd
  const timeAdd = dueDate.toLocaleTimeString("en-GB"); // HH:MM:SS بصيغة 24 ساعة

  function handleAdd() {}

  const zone = [
    { value: "الشمالية", label: "المنطقة الشمالية" },
    { value: "الجنوبية", label: "المنطقة الجنوبية" },
    { value: "الشرقية", label: "المنطقة الشرقية" },
  ];

  const city = {
    الشمالية: [
      { value: "عرعر", label: "عرعر" },
      { value: "طريف", label: "طريف" },
    ],
    الجنوبية: [
      { value: "أبها", label: "أبها" },
      { value: "خميس مشيط", label: "خميس مشيط" },
    ],
    الشرقية: [
      { value: "الدمام", label: "الدمام" },
      { value: "الخبر", label: "الخبر" },
    ],
  };

  const districts = {
    عرعر: [
      { value: "حي المروج", label: "حي المروج" },
      { value: "حي الروابي", label: "حي الروابي" },
    ],
    طريف: [
      { value: "حي الفيصلية", label: "حي الفيصلية" },
      { value: "حي العزيزية", label: "حي العزيزية" },
    ],
    أبها: [
      { value: "حي الوردتين", label: "حي الوردتين" },
      { value: "حي السد", label: "حي السد" },
    ],
    "خميس مشيط": [
      { value: "حي الرصراص", label: "حي الرصراص" },
      { value: "حي شكر", label: "حي شكر" },
    ],
    الدمام: [
      { value: "حي الشاطئ", label: "حي الشاطئ" },
      { value: "حي الفيصلية", label: "حي الفيصلية" },
    ],
    الخبر: [
      { value: "حي العقربية", label: "حي العقربية" },
      { value: "حي العليا", label: "حي العليا" },
    ],
  };

  const [options, setOptions] = useState([
    { value: "علاء", label: "علاء احمد " },
    { value: "احمد", label: " احمد المنصور" },
    { value: "محمود", label: "محمود  السيد" },
    { value: "ابراهيم", label: "محمد  ابراهيم" },
    { value: "الكل", label: "  جميع الموظفين" },
  ]);








useEffect(() => {
  if (calulationInputs.region && calulationInputs.cities) {
    const newDistricts =
      regionsData[calulationInputs.region].cities[calulationInputs.cities] || [];

    setDistrictOptions(newDistricts.map((d) => ({ value: d, label: d })));
  } else {
    setDistrictOptions([]);
  }
 
}, [calulationInputs.region, calulationInputs.cities]);


// const [offersList, setOffersList] = useState([]);

// useEffect(() => {
//   axios.get("http://localhost:8090/offers")
//     .then((res) => {
//       const options = res.data.map((offer) => ({
//         value: offer.id,
//         label: offer.id
//       }));
//       setOffersList(options);
//     })
//     .catch((err) => {
//       console.error("فشل تحميل العروض:", err);
//     });
// }, []);



const [offersList, setOffersList] = useState([]);

useEffect(() => {
  axios.get("http://localhost:8090/offersAll")
    .then((res) => {
      const options = res.data.map((offer) => ({
        value: offer.id,
        label: offer.id.toString(),
        name: offer.selectedName, // اسم الموظف في قاعدة البيانات
        aqarType: offer.aqarType   ,       // نوع العقار في قاعدة البيانات
        region: offer.selectedRegion,   // ✅ المنطقة
        cities: offer.selectedCity,     // ✅ المدينة
        districts: offer.selectedDistricts, // ✅ الحي
        area: offer.area,     // ✅ المساحة
        price: offer.price    // ✅ السعر


      }));
      setOffersList(options);
    })
    .catch((err) => {
      console.error("فشل تحميل العروض:", err);
    });
}, []);






  
//-------------------

 const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText((prev) => !prev);
  };
  
//------------------------

  // const onSubmitChangeEdit = async (ide) => {
  //   setShowa(true);
  //   setErrorMassge(" تم  تحديث  العرض   ");
  //   setShowModal(true);
  //   setTimeout(() => {
  //     // setLoading(true);
  //     if (
  //       window.location.href != "https://alaaahmed2024.github.io/alaa/#/show-offers"
  //     ) {
  //       window.location.href = "https://alaaahmed2024.github.io/alaa/#/show-offers";
  //     } else {
  //       window.location.href = "https://alaaahmed2024.github.io/alaa/#/show-offers";
  //     }

  //     window.location.reload()
  //     //  window.location.href = "https://alaaahmed2024.github.io/alaa/#/show-offers";
  //     //  setLoading(true);
  //   //  window.location.reload()
  //     // setShowInCalculation(1);
  //   }, 2300);

  //   // const{id}=useParams
  //   //  e.preventDefault();

  //   try {
  //     const responce = await axios.put(
  //       `http://localhost:8090/updateOffers/${ide}`,
  //       calulationInputs
  //     );
  //     // naviga('/clients')
  //     console.log(responce);
  //     console.log(calulationInputs);

  //     setTimeout(() => {
  //       // setLoading(true);
  //       // window.location.href = "https://alaaahmed2024.github.io/alaa/#/about";


  //         //  window.location.reload()
  //     }, 2300);
   

  //   } catch (err) {
  //     console.log("Something Wrong DataBase");
  //   }

  //   let audio1 = new Audio(audioSuccess);
  //   audio1.play();
  // };









//   const onSubmitChangeEdit = async (ide) => {
//   setShowa(true);
//   setErrorMassge("تم تحديث العرض");
//   setShowModal(true);

//   try {
//     let imageUrl = uploadedImageUrl;

//     // ✅ رفع الصورة الجديدة فقط إذا تم اختيار واحدة
//     if (selectedImage) {
//       const data = new FormData();
//       data.append("file", selectedImage);
//       data.append("upload_preset", "default_preset");

//       const res = await fetch("https://api.cloudinary.com/v1_1/dexc22lcl/image/upload", {
//         method: "POST",
//         body: data,
//       });

//       const cloudData = await res.json();
//       if (cloudData.secure_url) {
//         imageUrl = cloudData.secure_url;
//         setUploadedImageUrl(imageUrl);
//       } else {
//         setErrorMassge("فشل في رفع الصورة، حاول مرة أخرى.");
//         return;
//       }
//     }

//     const updatedData = {
//       ...calulationInputs,
//       image: imageUrl, // الصورة النهائية (قد تكون نفس القديمة أو الجديدة)
//     };

//     await axios.put(`http://localhost:8090/updateOffers/${ide}`, updatedData);

//     let audio1 = new Audio(audioSuccess);
//     audio1.play();

//     setTimeout(() => {
//       window.location.href = "https://alaaahmed2024.github.io/alaa/#/show-offers";
//       window.location.reload();
//     }, 2300);
//   } catch (err) {
//     console.error("حدث خطأ أثناء التعديل:", err);
//     setErrorMassge("فشل التعديل. تأكد من الاتصال.");
//   }
// };






const onSubmitChangeEdit = async (ide) => {



  
  
  setErrorMassge(null);

  // ✅ تحقق من البيانات قبل الإرسال
 const errors = CheckAddClient({
  ...calulationInputs,
 
});

  if (errors.length > 0) {
    setErrorMassge(errors); // مصفوفة الأخطاء
    setShowa(true);
    setShowModal(true);
    
  setModalShowBootstap(true);
    return;
  }

  // ✅ إذا لا يوجد أخطاء، تابع الإرسال
 
    setErrorMassge("تم تحديث العميل" + ide);
  setShowa(true);
  setShowModal(true);
   
  setModalShowBootstap(true);
  // setLoading(true); // بدء التحميل

   setTimeout(() => {
      // setLoading(true);
      if (
        window.location.href != "https://alaaahmed2024.github.io/alaa/#/add-client"
      ) {
        window.location.href = "https://alaaahmed2024.github.io/alaa/#/add-client";
      } else {
        window.location.href = "https://alaaahmed2024.github.io/alaa/#/show-client";
      }

      // setShowInCalculation(1);
    }, 2300);





  try {









  

 

 

 
    // تحضير بيانات التحديث مع تحويلات مناسبة
    const updatedData = {
    ...calulationInputs,







    };

 





    await axios.put(`http://localhost:8090/updateClient/${ide}`, updatedData);

    // تشغيل صوت النجاح
    let audio1 = new Audio(audioSuccess);
    audio1.play();

 
  } catch (err) {
    console.error("حدث خطأ أثناء التعديل:", err);
    setErrorMassge("فشل التعديل. تأكد من الاتصال.");
  } finally {
    setLoading(false); // إيقاف التحميل مهما كانت النتيجة
  }
};
















// const onSubmitChange = async (e) => {
//   e.preventDefault();



  
//   setErrorMassge(null);

//   // ✅ تحقق من البيانات قبل الإرسال
// const errors = CheckAddClient({
//   ...calulationInputs,
 
// });


//   if (errors.length > 0) {
//     setErrorMassge(errors); // مصفوفة الأخطاء
//     setShowa(true);
//     setShowModal(true);
    
//    setModalShowBootstap(true);
//     return;
//   }

//   // ✅ إذا لا يوجد أخطاء، تابع الإرسال
//   setErrorMassge("جاري إضافة العرض..." + nextId);
//   setShowa(true);
//   setShowModal(true);
   
//   setModalShowBootstap(true);








//   try {






//     // تجهيز البيانات للإرسال


//     const requestData = {
//   ...calulationInputs,


// };

// console.log("📤 البيانات المرسلة:", requestData);
//     // إرسال الطلب للسيرفر
//     await axios.post("http://localhost:8090/createClient", requestData);



//     setErrorMassge("✅ تم إضافة العرض بنجاح");
//     setShowa(true);
//     setShowModal(true);
  



//        setTimeout(() => {
//            window.location.href = "/alaa/#/show-client";
//         setLoading(true);
     




//       }, 2300);



//   } catch (err) {
//     console.error("خطأ أثناء الإرسال:", err);
//     setErrorMassge("❌ فشل في الإرسال، تحقق من الاتصال وحاول لاحقًا");
//     setShowa(true);



//   } finally {
//     setLoading(false);
//   }
// };





const onSubmitChange = async (e) => {
  e.preventDefault();

  setErrorMassge(null);

  // تحقق من البيانات قبل الإرسال
  const errors = CheckAddClient({ ...calulationInputs });

  if (errors.length > 0) {
    setErrorMassge(errors);
    setShowa(true);
    setShowModal(true);
    setModalShowBootstap(true);
    return;
  }

  // إذا لا يوجد أخطاء، تابع الإرسال
  setErrorMassge("جاري إضافة العرض..." + nextId);
  setShowa(true);
  setShowModal(true);
  setModalShowBootstap(true);

  try {
    const requestData = { ...calulationInputs };

    console.log("📤 البيانات المرسلة:", requestData);

    await axios.post("http://localhost:8090/createClient", requestData);

    setErrorMassge("✅ تم إضافة العرض بنجاح");
    setShowa(true);
    setShowModal(true);

    setTimeout(() => {
      window.location.href = "/alaa/#/show-client";
      setLoading(true);
    }, 2300);

  } catch (err) {
    console.error("خطأ أثناء الإرسال:", err);

    if (err.response && err.response.status === 400 && err.response.data === "رقم الجوال موجود مسبقاً") {
      setErrorMassge("❌ رقم الجوال موجود مسبقاً، الرجاء استخدام رقم مختلف.");
    } else {
      setErrorMassge("❌ فشل في الإرسال، تحقق من الاتصال وحاول لاحقًا");
    }

    setShowa(true);
    setShowModal(true);

  } finally {
    setLoading(false);
  }
};


  let audio3 = new Audio(audioError);

  const tableRef = useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });

  const [searchedVal, setSearchedVal] = useState("");

  function handelDivClick() {
    if (showModdal == true) {
      setShowModal(false);
    }
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
      const result = await axios("http://localhost:8090/followups");
      //console.log(result.data);
      setUSerData(result.data);
      var textError = "";
    } catch (err) {
      console.log("somthing Wrong DataBase");
      var xx = 1;
      var textError = "(لا يوجد اتصال بقاعده البيانات) لا يوجد بيانات لعرضها";
    }
  };

  const idUser = window.localStorage.getItem("name");
  console.log(idUser, typeof idUser);



  const handleDelete = async (id) => {
    setShowa(true);
    setErrorMassge(" جاري  حذف العرض ");
    setShowModal(true);
    audio3.play();

    try {
      await axios.delete(`http://localhost:8090/followups/${id}`);
      // window.location.reload();
      setTimeout(() => {
        window.location.href = "https://alaaahmed2024.github.io/alaa/#/show-client";
        setLoading(true);
      }, 2300);
    } catch (err) {
      console.log(err);
    }
  };









  //===========================================

  // const navigate=useNavigate()
 


  const [edit, setEdit] = useState();

 console.log(edit)

  //===========================================

  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(false);
  }, 3500);

  function myFunction() {
    var x = 1;
  }

  const btnIsDisableToAdd =
    calulationInputs.name == "" ||
    calulationInputs.clientName == "" ||
    calulationInputs.clientPhone == "" 
    // ||calulationInputs.aqarStairs == "" 
 


 
 



  const [selectNumberRow, setSelectNumberRow] = useState({
    numerUserRow: 500,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = selectNumberRow.numerUserRow;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = userData.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(userData.length / recordsPerPage);
  const numders = [...Array(nPage + 1).keys()].slice(1);
  console.log(records.phone);
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



  // if (edit) {
  //   return (
  //     <>
  //       <About editClint={arrData} />;
  //     </>
  //   );
  // }

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
 if (loading) {
    return <AddClient />;
  }
 



  const handleOfferChange = (selectedOption) => {

  if (calulationInputs.communicationType != "عرض") return;


  const selectedName = selectedOption?.name || "";
  const aqarType = selectedOption?.aqarType || "";
  const region = selectedOption?.region || "";
  const cities = selectedOption?.cities || "";
  const districts = selectedOption?.districts || "";

  const price = selectedOption?.price || "";
  const area = selectedOption?.area || "";

  // أضف الاسم إلى قائمة الموظفين إن لم يكن موجود
  const exists = employeeOptions.find((e) => e.value === selectedName);
  if (selectedName && !exists) {
    setEmployeeOptions((prev) => [...prev, { value: selectedName, label: selectedName }]);
  }

  // تحديث المدن حسب المنطقة
  if (region) {
    const filteredCities = [...new Set(
      offersList
        .filter((item) => item.region === region)
        .map((item) => item.cities)
    )].map((city) => ({ value: city, label: city }));
    setCityOptions(filteredCities);
  }

  // تحديث الأحياء حسب المدينة
  if (cities) {
    const filteredDistricts = [...new Set(
      offersList
        .filter((item) => item.cities === cities)
        .map((item) => item.districts)
    )].map((d) => ({ value: d, label: d }));
    setDistrictOptions(filteredDistricts);
  }

  // تحديث بيانات الحساب
  setcalulationInputs((prev) => ({
    ...prev,
    offerNumber: selectedOption?.value || "",
    name: selectedName,
    propertyTypes: aqarType,
    region,
    cities,
    districts,
  }));

  setShowPriceArea({ price, area });
}
  ;






  return (
    <div div style={{ marginTop: "10px", height: "100vh" }}>
 



                  <AlartBootstap
                  show={modalShowBootstap}
                  onHide={() => setModalShowBootstap(false)}
                  errorMassage={errorMassge}
                  classNameModelBootstrap={classNameModelBootstrap}
                  darkSide={darkSide}
            
                addNote={"تمت الاضافه الي العملاء  "}

      
                />



      <div className="p-relative" style={{ margin: "0px 10px" }}>
        <div className="row flex-mobile" style={{ marginBottom: "200px" }}>
          <div
            className="col box input-css"
            id={classNameModel}
            style={{
              width: "100%",
              marginBottom: "0px",
              margin: "5px 4px",
              padding: "20px 10px",
            }}
          >
     

            <div
              className="calculation flex-container"
              style={{ display: show ? "none" : "" }}
            >
              <div
                className="calculation-flex flex-2dir input-css flex-dir table-client table-responsive"
                onClick={handelDivClick}
                id="input-loan-form"
                style={{
                  padding: "5px",
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
               

                <Button variant="primary"  active    onClick={handleShowAdd}>
                 {textTitle}
                </Button>



  <Container style={{ marginTop: "20px" , marginBottom: "100px" }} className={darkSide?" labels-modal-color ba-img-light" :" labels-modal-color-dark ba-img-dark dark-lib"}>
      <Tabs defaultActiveKey="tab1" id="property-tabs"  className="tab-d-l" style={{marginBottom:"20px" , padding:"4px" , backgroundColor:"#d7e0ff"}}>


        <Tab eventKey="tab1" title=" بيانات">


      

      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Row className="row-700 " >
          <Col xs={12} md={4}>
            <div className="input-wrapper" style={{ width: "100%" }}>
              <label>
                <FontAwesomeIcon
                  icon={faHashtag}
                  style={{ marginLeft: "6px", color: "#888" }}
                />
                المرجعي 
              </label>
              <input
                style={{ height: " " }}
                name="numberOffer"
                value={calulationInputs.numberOffers}
                   disabled={calulationInputs.allDisabled}
                readOnly
                type="text"
                inputMode="numeric"
                maxLength={5}
                onChange={(e) => handleNumericInput(e, "numberOffer", 10)}
              />
              <span className="underline-input"></span>
            </div>






            <div className="input-wrapper" style={{ width: "100%" }}>
              <label>
                <FontAwesomeIcon
                  icon={faBuildingUser}
                  style={{ marginLeft: "6px", color: "#888" }}
                />
                 المنصة
              </label>
              <select
                style={{ height: " " }}
                value={calulationInputs.platform}
                   disabled={calulationInputs.allDisabled}
                onChange={(event) => {
                  setcalulationInputs({
                    ...calulationInputs,
                    platform: event.target.value,
                  });
                }}
              >
         
                            <option value=""> اختر المنصه</option>
                            <option value="عقار">عقار</option>
                            <option value="حراج">حراج</option>
                            <option value="وصلت">وصلت</option>
                            <option value="بيوت"> بيوت</option>
                            <option value="اخري"> اخري</option>

              </select>
              <span className="underline-input"></span>
            </div>












            <div className="input-wrapper" style={{ width: "100%" }}>
              <label>
                <FontAwesomeIcon
                  icon={faRulerCombined}
                  style={{ marginLeft: "6px", color: "#888" }}
                />
              رقم الجوال
              </label>
              <input
                style={{ height: " " }}
                name="clientPhone"
                value={calulationInputs.clientPhone}
                disabled={calulationInputs.allDisabled}
                type="text"
                inputMode="numeric"
                maxLength={12}
                onChange={(e) => handleNumericInput(e, "clientPhone", 12)}
              />
              <span className="underline-input"></span>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <div className="input-wrapper" style={{ width: "100%" }}>
              <label>
                <FontAwesomeIcon
                  icon={faUserTie}
                  style={{ marginLeft: "6px", color: "#888" }}
                />
                اسم الموظف
              </label>
              <CreatableSelect
                placeholder="اختر أو أضف اسم "
                options={employeeOptions}
                isDisabled={calulationInputs.allDisabled}
                value={employeeOptions.find(
                  (e) => e.value === calulationInputs.name
                )}
                onChange={handleChange}
                styles={customSelectStyle}
                isClearable
                formatCreateLabel={(inputValue) => inputValue}
              />
              <span className="underline-input"></span>
            </div>





 <div className="input-wrapper" style={{ width: "100%" }}>
              <label>
                <FontAwesomeIcon
                  icon={faUserTie}
                  style={{ marginLeft: "6px", color: "#888" }}
                />
                اسم العميل
              </label>
              <CreatableSelect
                placeholder="اختر أو أضف اسم "
                options={clientOptions}
                   isDisabled={calulationInputs.allDisabled}
                value={clientOptions.find(
                  (e) => e.value === calulationInputs.clientName
                )}
                onChange={handleChangeClient}
                styles={customSelectStyle}
                isClearable
                formatCreateLabel={(inputValue) => inputValue}
              />
              <span className="underline-input"></span>
            </div>




            <div className="input-wrapper" style={{ width: "100%" }}>
              <label style={{ marginTop: "5px" }}>
                <FontAwesomeIcon
                  icon={faLayerGroup}
                  style={{ marginLeft: "6px", color: "#888" }}
                />
                نوع العقار
              </label>
              <select
                style={{ height: " " }}
                value={calulationInputs.propertyTypes}
                onChange={(event) => {
                  setcalulationInputs({
                    ...calulationInputs,
                    propertyTypes: event.target.value,
                  });
                }}
              >
                     <option value="">نوع العقار</option>
                            <option value="فيلا">فيلا</option>
                            <option value="شقه">شقه</option>
                            <option value="دور">دور</option>
                            <option value="دور مع ملحق">دور مع ملحق</option>
                            <option value="شقه روف">شقه روف</option>
                            <option value="فيلا روف">فيلا روف</option>
                            <option value="فيلا تاون هاوس">
                              فيلا تاون هاوس
                            </option>
              </select>
              <span className="underline-input"></span>
            </div>




          </Col>

          <Col xs={12} md={4}>


            <div className="input-wrapper" style={{ width: "100%" }}>
              <label>
                <FontAwesomeIcon
                  icon={faHouseChimney}
                  style={{ marginLeft: "6px", color: "#888" }}
                />
                نوع التواصل
              </label>
              <select
                style={{ height: " " }}
                value={calulationInputs.communicationType}
                   disabled={calulationInputs.allDisabled}
                onChange={(event) => {
                  setcalulationInputs({
                    ...calulationInputs,
                    communicationType: event.target.value,
                  });
                }}
              >
               <option value="">نوع التواصل</option>
                            <option value="عام">  تواصل عام </option>
                            <option value="عرض"> تواصل علي عرض </option>
              </select>
              <span className="underline-input"></span>
            </div>





{calulationInputs.communicationType=="عرض"? (

            // <div className="input-wrapper" style={{ width: "100%" }}>
            //   <label>
            //     <FontAwesomeIcon
            //       icon={faMoneyBillWave}
            //       style={{ marginLeft: "6px", color: "#888" }}
            //     />
            //     رقم  الاعلان
            //   </label>
            //   <input
            //     style={{ height: " " }}
            //     name="offerNumber"
            //     value={calulationInputs.offerNumber}
            //     type="text"
            //     inputMode="numeric"
            //     maxLength={4}
            //     onChange={(e) => handleNumericInput(e, "offerNumber", 4)}
            //   />
            //   <span className="underline-input"></span>
            // </div>


            <div className="input-wrapper" style={{ width: "100%" }}>
  <label>
    <FontAwesomeIcon
      icon={faMoneyBillWave}
      style={{ marginLeft: "6px", color: "#888" }}
    />
    رقم الإعلان
  </label>









{/* 
<Select
  options={offersList}
  value={offersList.find(option => option.value === calulationInputs.offerNumber)}
  onChange={
    
    
    (selectedOption) => {
    const selectedName = selectedOption?.name || "";
    const aqarType = selectedOption?.aqarType || "";
    const region = selectedOption?.region || "";
    const cities = selectedOption?.cities || "";
    const districts = selectedOption?.districts || "";


    const prcie = selectedOption?.price || "";
    const area = selectedOption?.area || "";

    // أضف الاسم إلى قائمة الموظفين إن لم يكن موجود
    const exists = employeeOptions.find((e) => e.value === selectedName);
    if (selectedName && !exists) {
      setEmployeeOptions((prev) => [...prev, { value: selectedName, label: selectedName }]);
    }

    // تحديث المدن والأحياء تلقائيًا من العروض
    if (region) {
      const filteredCities = [...new Set(
        offersList
          .filter((item) => item.region === region)
          .map((item) => item.cities)
      )].map((city) => ({ value: city, label: city }));
      setCityOptions(filteredCities);
    }

    if (cities) {
      const filteredDistricts = [...new Set(
        offersList
          .filter((item) => item.cities === cities)
          .map((item) => item.districts)
      )].map((d) => ({ value: d, label: d }));
      setDistrictOptions(filteredDistricts);
    }

    setcalulationInputs((prev) => ({
      ...prev,
      offerNumber: selectedOption?.value || "",
      name: selectedName,
      propertyTypes: aqarType,
      region,
      cities,
      districts,
    }));

    setShowPriceArea((prev)=>({
      price:prcie,
      area:area
    }))
  

  }}
  placeholder="اختر رقم الإعلان"
  isSearchable
   styles={customSelectStyle}
/> */}

<Select
  options={offersList}
  value={offersList.find(option => option.value === calulationInputs.offerNumber)}
  onChange={handleOfferChange}
  placeholder="اختر رقم الإعلان"
  isSearchable
  styles={customSelectStyle}
/>



</div>

      


):(


<></>



)


}
            



            <div className="input-wrapper" style={{ width: "100%" }}>
              <label>
                <FontAwesomeIcon
                  icon={faHouseChimney}
                  style={{ marginLeft: "6px", color: "#888" }}
                />
                 الحالة
              </label>
              <select
                style={{ height: " " }}
                value={calulationInputs.status}
                onChange={(event) => {
                  setcalulationInputs({
                    ...calulationInputs,
                    status: event.target.value,
                  });
                }}
              >
               <option value="انتظار التواصل"> انتظار التواصل</option>
                <option value="لم يرد">لم يرد </option>
                <option value="جاري المتابعه"> جاري المتابعه </option>
                <option value="الرقم خطا"> الرقم خطا</option>
              
              </select>
              <span className="underline-input"></span>
            </div>




          </Col>


        </Row>

        <Row>
          <Col xs={12} md={4}>
            <div className="input-wrapper" style={{ width: "100%" }}>
              <label>
                <FontAwesomeIcon
                  icon={faMap}
                  style={{ marginLeft: "6px", color: "#888" }}
                />
                المنطقة
              </label>




<Select
  placeholder="اختر المنطقة"
  options={regionOptions}
  value={regionOptions.find((r) => r.value === calulationInputs.region)}
  onChange={(selectedOption) => {
    setcalulationInputs({
      ...calulationInputs,
      region: selectedOption.value,
      cities: "",
      districts: "",
    });
    setCityOptions([]);
    setDistrictOptions([]);
  }}
  styles={customSelectStyle}
/>




              <span className="underline-input"></span>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <div className="input-wrapper" style={{ width: "100%" }}>
              <label>
                <FontAwesomeIcon
                  icon={faCity}
                  style={{ marginLeft: "6px", color: "#888" }}
                />
                المدينة
              </label>



<CreatableSelect
  placeholder="اختر أو أضف مدينة"
  options={cityOptions}
  value={
    cityOptions.find((c) => c.value === calulationInputs.cities) ||
    (calulationInputs.cities && {
      value: calulationInputs.cities,
      label: calulationInputs.cities,
    })
  }
  onChange={(selectedOption) => {
    const exists = cityOptions.find((opt) => opt.value === selectedOption.value);
    if (!exists) {
      setCityOptions([...cityOptions, selectedOption]);
    }
    setcalulationInputs({
      ...calulationInputs,
      cities: selectedOption.value,
      districts: "",
    });
  }}
  isDisabled={!calulationInputs.region}
  formatCreateLabel={(inputValue) => inputValue}
  styles={customSelectStyle}
/>



              <span className="underline-input"></span>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <div className="input-wrapper" style={{ width: "100%" }}>
              <label>
                <FontAwesomeIcon
                  icon={faMapPin}
                  style={{ marginLeft: "6px", color: "#888" }}
                />
                الحي
              </label>




 <CreatableSelect
  placeholder="اختر أو أضف حي"
  options={districtOptions}
  value={
    districtOptions.find((d) => d.value === calulationInputs.districts) ||
    (calulationInputs.districts && {
      value: calulationInputs.districts,
      label: calulationInputs.districts,
    })
  }
  onChange={(selectedOption) => {
    const exists = districtOptions.find((opt) => opt.value === selectedOption.value);
    if (!exists) {
      setDistrictOptions([...districtOptions, selectedOption]);
    }
    setcalulationInputs({
      ...calulationInputs,
      districts: selectedOption.value,
    });
  }}
  isDisabled={!calulationInputs.cities}
  formatCreateLabel={(inputValue) => inputValue}
  styles={customSelectStyle}
/>

              <span className="underline-input"></span>
            </div>


          </Col>






 





{/* 
        <Col xs={12} md={4}>
        
        
            <div className="input-wrapper" style={{ width: "100%"  , marginTop:"8px" }}>
              <label>
                <FontAwesomeIcon
                  icon={faObjectGroup}


                  
                  style={{ marginLeft: "6px", color: "#888" }}
                />
                 حاله العقار
              </label>
              <select
                style={{ height: " " }}
                value={calulationInputs.aqarState}
                onChange={(event) => {
                  setcalulationInputs({
                    ...calulationInputs,
                    aqarState: event.target.value,
                  });
                }}
              >
                <option value="no">  اختر الحاله</option>
                 <option value="غير مكرر">غير  مكرر</option>
                <option value="مكرر الاعلان">مكرر الاعلان معي</option>
                <option value="مكرر مع الزملاء">مكرر مع الزملاء</option>
                {selectStateShow?(
                  <>
                        <option value="محجوز"> محجوز</option>
                <option value="مباع"> مباع</option>
                  </>
           

                ):(
                 <>
                  </>
                )}
           
              </select>
              <span className="underline-input"></span>
            </div>


             


         
        </Col>

 */}





        </Row>

      


      
{calulationInputs.communicationType=="عرض"? (
   <div style={{ display:"flex" , marginTop:"12px" , backgroundColor:"white" , color:"black"}}
            
  >
       
          <p style={{margin:".5rem"}}>
            <strong>المساحة:</strong> {showPriceArea.area} متر
          </p>
     
          <p style={{margin:".5rem 1rem 0.5rem 0.5rem" }}>
            <strong>السعر:</strong> {showPriceArea.price} ريال
          </p>
        
      </div>
  
):(<></>)}


            <div className="input-wrapper" style={{ width: "100%" }}>
              <label>
                <FontAwesomeIcon
                  icon={faHouseChimney}
                  style={{ marginLeft: "6px", color: "#888" }}
                />
              نوع العميل 
              </label>
              <select
                style={{ height: " " }}
                value={calulationInputs.clientType}
                 
                onChange={(event) => {
                  setcalulationInputs({
                    ...calulationInputs,
                    clientType: event.target.value,
                  });
                }}
              >
               <option value="عميل"> عميل</option>
                <option value="مسوق">مسوق </option>
                <option value="مكتب">  مكتب </option>
                <option value="مالك">مالك</option>
                <option value="اخري">  اخري</option>
              
              </select>
              <span className="underline-input"></span>
            </div>



        <div className="input-wrapper" style={{ width: "100%" }}>
    <label>ملاحظات</label>
    <textarea
      style={{ width: "100%" , backgroundColor:"#c4d1ff" }}
      placeholder="ملاحظات  ..."
      value={calulationInputs.notes}
      onChange={(event) => {
        setcalulationInputs({
          ...calulationInputs,
          notes: event.target.value,
        });
      }}
      name="notes"
      className="form-control"
      rows="2"
    />
    <span className="underline-input"></span>
  </div>






{/* 
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
  <div
    className="circle user-name-input-css-log"
    style={{
      position: "relative",
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      backgroundColor: "#f0f0f0",
      overflow: "hidden",
      right: "0px",
    }}
  >
    {previewImage ? (
      <img
        src={previewImage}
        alt="preview"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    ) : (

      <FontAwesomeIcon
        icon={faImage}
        style={{
          fontSize: "50px",
          color: "#aaa",
          position: "absolute",
          top: "30%",
          left: "35%",
        }}
      />
    )}

    <input
      type="file"
      accept="image/*"
      onChange={handleImageChange}
      style={{
        opacity: 0,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        cursor: "pointer",
      }}
      title="اختر صورة"
    />
  </div>
</div> */}

{/* 
        {!previewImage && (
          <small
            style={{
              display: "block",
              marginTop: "8px",
              color: "#888",
              textAlign: "center",
            }}
          >
            اختر الصورة
          </small>
        )} */}
      </form>


         
       </Tab>


{/* 
<Tab eventKey="tab2" title="تفاصيل العقار">
  <Row>
    <Col md={4}>
      <div className="input-wrapper" style={{width:"100%"}}>
        <label>
          <FontAwesomeIcon icon={faBed} style={{ marginLeft: "6px", color: "#888" }} />
          عدد الغرف
        </label>
        <input
          type="number"
          value={calulationInputs.roomsCount}
          onChange={(e) =>
            setcalulationInputs({ ...calulationInputs, roomsCount: e.target.value })
          }
        />
        <span className="underline-input"></span>
      </div>

      <div className="input-wrapper" style={{width:"100%"}}>
        <label>
          <FontAwesomeIcon icon={faBed} style={{ marginLeft: "6px", color: "#888" }} />
          عدد الغرف الماستر
        </label>
        <input
          type="number"
          value={calulationInputs.roomsCountMastar}
          onChange={(e) =>
            setcalulationInputs({ ...calulationInputs, roomsCountMastar: e.target.value })
          }
        />
        <span className="underline-input"></span>
      </div>


      <div className="input-wrapper" style={{width:"100%"}}>
        <label>
          <FontAwesomeIcon icon={faCouch} style={{ marginLeft: "6px", color: "#888" }} />
          عدد المجالس
        </label>
        <input
          type="number"
          value={calulationInputs.majlesCount}
          onChange={(e) =>
            setcalulationInputs({ ...calulationInputs, majlesCount: e.target.value })
          }
        />
        <span className="underline-input"></span>
      </div>
      <div className="input-wrapper" style={{width:"100%"}}>
        <label>
          <FontAwesomeIcon icon={faUtensils} style={{ marginLeft: "6px", color: "#888" }} />
          عدد المطابخ
        </label>
        <input
          type="number"
          value={calulationInputs.kitchenCount}
          onChange={(e) =>
            setcalulationInputs({ ...calulationInputs, kitchenCount: e.target.value })
          }
        />
        <span className="underline-input"></span>
      </div>
    </Col>

    <Col md={4}>
      <div className="input-wrapper" style={{width:"100%"}}>
        <label>
          <FontAwesomeIcon icon={faToilet} style={{ marginLeft: "6px", color: "#888" }} />
          عدد دورات المياه
        </label>
        <input
          type="number"
          value={calulationInputs.bathroomsCount}
          onChange={(e) =>
            setcalulationInputs({ ...calulationInputs, bathroomsCount: e.target.value })
          }
        />
        <span className="underline-input"></span>
      </div>
      <div className="input-wrapper" style={{width:"100%"}}>
        <label>
          <FontAwesomeIcon icon={faDoorOpen} style={{ marginLeft: "6px", color: "#888" }} />
          عدد الصالات
        </label>
        <input
          type="number"
          value={calulationInputs.hallsCount}
          onChange={(e) =>
            setcalulationInputs({ ...calulationInputs, hallsCount: e.target.value })
          }
        />
        <span className="underline-input"></span>
      </div>

      <div className="input-wrapper" style={{width:"100%"}}>
        <label>
          <FontAwesomeIcon icon={faChair} style={{ marginLeft: "6px", color: "#888" }} />
          عدد المقلط
        </label>
        <input
          type="number"
          value={calulationInputs.maqlatCount}
          onChange={(e) =>
            setcalulationInputs({ ...calulationInputs, maqlatCount: e.target.value })
          }
        />
        <span className="underline-input"></span>
      </div>
    </Col>

    <Col md={4}>
      <div className="input-wrapper" style={{width:"100%"}}>
        <label>
          <FontAwesomeIcon icon={faHouse} style={{ marginLeft: "6px", color: "#888" }} />
          واجهات العقار
        </label>
        <Select
          isMulti
          options={[
            { value: "شمالية", label: "شمالية" },
            { value: "جنوبية", label: "جنوبية" },
            { value: "شرقية", label: "شرقية" },
            { value: "غربية", label: "غربية" },
          ]}
          value={Array.isArray(calulationInputs.aqarFacade) ? calulationInputs.aqarFacade : []}
          onChange={(selectedOptions) => {
            setcalulationInputs({
              ...calulationInputs,
              aqarFacade: selectedOptions,
            });
          }}
          placeholder="اختر الواجهات"
          styles={customSelectStyle}
        />
        <span className="underline-input"></span>
      </div>

      {Array.isArray(calulationInputs.aqarFacade) && calulationInputs.aqarFacade.length > 0 && (
        <div style={{ marginTop: "10px" }}>
          <label>
            <FontAwesomeIcon icon={faRoad} style={{ marginLeft: "6px", color: "#888" }} />
            عرض الشوارع لكل واجهة
          </label>
          {(calulationInputs.aqarFacade).map((facade) => (
            <div
              key={facade.value}
              className="input-wrapper "
              style={{ marginBottom: "8px" , width:"100%"}}
            >
              <label style={{ fontWeight: "bold" }}>{facade.label}</label>
              <input
                type="number"
                min={0}
                value={calulationInputs.streetsWidth?.[facade.value] || ""}
                onChange={(e) => {
                  const newStreetsWidth = { ...(calulationInputs.streetsWidth || {}) };
                  newStreetsWidth[facade.value] =
                    e.target.value === "" ? "" : Number(e.target.value);
                  setcalulationInputs({
                    ...calulationInputs,
                    streetsWidth: newStreetsWidth,
                  });
                }}
                placeholder={`عرض شارع ${facade.label} بالمتر`}
              />
              <span className="underline-input"></span>
            </div>
          ))}
        </div>
      )}
    </Col>
  </Row>
</Tab>



 */}




{/* 

<Tab eventKey="images" title="صور العقار">
 


  <Row className="mt-3">
  {[
    { key: "image", label: "الصورة الرئسية" },
    { key: "imageFacade", label: "صورة الواجهة" },
    { key: "imageBathroom", label: "صورة الحمام" },
    { key: "imageKitchen", label: "صورة المطبخ" },
    { key: "imageRoom", label: "صورة الغرفة" },
    { key: "imageLiving", label: "صورة الصالة" },
  ].map(({ key, label }) => (
    <Col md={4} key={key} className="mb-4">
      <label>{label}</label>
      <div
        className="circle"
        style={{
          width: "100%",
          height: "250px",
          position: "relative",
          backgroundColor: "#f0f0f0",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >



    {previewImages[key] ? (
  <>
    <img
      src={previewImages[key]}
      alt={label}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
      }}
    />
    
 
    {key !== "image" && (
      <button
  onClick={(e) => {
    e.stopPropagation();
    handleRemoveImage(key);
  }}
  style={{
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    fontSize: "16px",
    cursor: "pointer",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
  title="حذف الصورة"
>
  <FontAwesomeIcon icon={faTrashAlt} />
</button>
    )}
  </>





        ) : (
          <FontAwesomeIcon
            icon={faImage}
            style={{
              fontSize: "40px",
              color: "#aaa",
              position: "absolute",
              top: "40%",
              left: "40%",
            }}
          />
        )}

        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageGroupChange(e, key)}
          style={{
            opacity: 0,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
          title={`اختر ${label}`}
        />
      </div>
    </Col>
  ))}
</Row>

</Tab>
 */}










{/* 
<Tab eventKey="features" title="مميزات العقار">
  <Row className="mt-3">
    <Col md={12}>
      <div className="features-grid">
        {[
          { label: "مدخل سيارة", key: "featureCarEntrance", icon: faCar },
          { label: "حوش سيارات", key: "featureYard", icon: faTree },
          { label: "غرفة تخزين", key: "featureStorage", icon: faWarehouse },
          { label: "ملحق", key: "featureAnnex", icon: faBuilding },
          { label: "غرفة خادمة", key: "featureMaid", icon: faUserNurse },
          { label: "غرفة حارس", key: "featureGuard", icon: faUserShield },
          { label: "غرفه سائق", key: "featureDriver", icon: faUserTie },
          { label: "مصعد", key: "featureElevator", icon: faElevator },
          { label: "تأسيس مصعد", key: "featureElevatorT", icon: faElevator },
          { label: "سطح", key: "featureRoof", icon: faStairs },
          { label: "قريب من الخدمات", key: "featureNearServices", icon: faMapMarkerAlt },
          { label: "غرفة غسيل", key: "featureLaundryRoom", icon: faHandsWash },
          { label: "بلكونة", key: "featureBalcony", icon: faSolarPanel },
          { label: "موقف سيارات", key: "featureParking", icon: faCar },
        ].map(({ label, key, icon }) => (
          <div key={key} style={{ minWidth: "140px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Form.Check
              type="checkbox"
              label={
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <FontAwesomeIcon icon={icon} />
                  {label}
                </span>
              }
              checked={calulationInputs[key]}
              onChange={(e) =>
                setcalulationInputs({
                  ...calulationInputs,
                  [key]: e.target.checked,
                })
              }
            />
          </div>
        ))}
      </div>
    </Col>
  </Row>

  <div className="input-wrapper" style={{ width: "100%" }}>
    <label>ملاحظات</label>
    <textarea
      style={{ width: "100%" , backgroundColor:"#c4d1ff" }}
      placeholder="ملاحظات  ..."
      value={calulationInputs.comments}
      onChange={(event) => {
        setcalulationInputs({
          ...calulationInputs,
          comments: event.target.value,
        });
      }}
      name="comments"
      className="form-control"
      rows="2"
    />
    <span className="underline-input"></span>
  </div>
</Tab> */}





      </Tabs>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {/* <Button variant="secondary" onClick={handleCloseAdd}>اغلاق</Button> */}
        {arrData === undefined ? (
          <Button
            disabled={btnIsDisableToAdd}
            onClick={onSubmitChange}
            className={btnIsDisableToAdd ? "disabled button-move" : "button-move"}
            style={{ width: "65%", minHeight: "40px", color: "white", fontSize: "1rem", padding: "2px", borderRadius: ".375rem", backgroundColor: btnIsDisableToAdd ? "" : "#0238e8", cursor: btnIsDisableToAdd ? "not-allowed" : "pointer" }}
          >
            {textSend}
          </Button>
        ) : (
          <Button
            disabled={btnIsDisableToAdd}
            onClick={() => onSubmitChangeEdit(arrData.id)}
            className={btnIsDisableToAdd ? "disabled" : "btn btn-primary"}
            style={{ width: "65%", minHeight: "40px", color: "white", backgroundColor: btnIsDisableToAdd ? "" : "#0238e8", cursor: btnIsDisableToAdd ? "not-allowed" : "pointer" }}
          >
            {textSend}
          </Button>
        )}
      </div>

   
    </Container>










{/* <div></div> */}



{/* <div></div> */}








                        <div
                          style={{
                            marginTop: "20px",
                            position: "fixed",
                            left: "2px",
                            bottom: "47px",
                           zIndex:"100",
                           maxWidth:"85%"
            
          
        
        
        
                          }}
                        >
                          <Row  className="no-print">
                            <Col xs={12} >
                              <Toast
                                onClose={() => setShowa(false)}
                                show={showa}
                                delay={6500}
                                autohide
                                 
                              >
                                <Toast.Header
                                  style={{
                                    direction: "ltr",
                                    backgroundColor: "#DEDFDF",
                                  }}
                                >
                                  <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                  />
                                  <strong className="me-auto">اشعار</strong>
                                  <small>just now</small>
                                </Toast.Header>
                                <Toast.Body
                                  style={{ backgroundColor: "#212529", color: "white" }}
                                >




                               {!Array.isArray(errorMassge) || errorMassge.length == 0 ? (
  "تمت الاضافه الي العملاء"
) : (
  errorMassge.map((err, i) => <div key={i}>{err}</div>)
)}

                                </Toast.Body>
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
                       zIndex:"1"
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















