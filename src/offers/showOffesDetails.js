import React, { useEffect, useState, useRef , useMemo, useContext} from "react";
import { useNavigate } from "react-router-dom";

import Select from "react-select";
import CreatableSelect from 'react-select/creatable';
import "../Project1.css";
import "../components/netSalary.css";
import audioError from "../sound/error.mp3";
import audioSuccess from "../sound/success.mp3";
import audioWarning from "../sound/warning.mp3";
import image2 from "../logo.png";
import aqar from "../photo/aqar.jpg"
import aqar1 from "../photo/aqar1.jpg";
import aqar2 from "../photo/aqar2.jpg";
import aqar3 from "../photo/aqar3.jpg";
import aqar4 from "../photo/aqar4.jpg";
import im from "../logo.png";
import ProgressCounter from "../components/ProgressCounter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import html2pdf from "html2pdf.js";
import { Button as MUIButton } from "@mui/material";
import Button from "react-bootstrap/Button";
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
  faLock,
  faX,
  faFileExcel,
  faFilePdf,
    faHashtag,
  faUser,
  faCalendarAlt,
  faHome,
  faLayerGroup,
  faStairs,
  faRulerCombined,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faMapLocationDot,
  faLink,
  faStickyNote,
 

  faDollarSign,

  faBuilding,
  faWarehouse,
  faCity,
  faHotel,
  faHouseChimney,
  faHouseUser,

   faBed,
  faBath,
  faCouch,
  faDoorOpen,
  faUtensils,
 faUsers,
  faRoad,
  faCar,
  faTree,
  faBoxes,

  faUserNurse,
  faUserShield,
  faUserTie,
  faElevator,

    faSolarPanel,
  
  faHandsWash,
  faBalcony,          // غير موجود رسميًا، سنستخدم بديل مناسب
           // لموقف سيارات
  faBroom,            // بديل للغسيل
 

faObjectGroup,




} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ModalX from "../modalX";


import cardPDF2 from "./offerPdf2.pdf"
import cardPDF4 from "./offerpdf4.pdf"


import './amiri-normal.js'; // لا حاجة لتصدير — التحميل يتم تلقائيًا
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';
// import registerAmiriFont from './amiri-normal';
import { reshape } from 'arabic-reshaper';
import { amiriFont } from './amiri-normal'; // ملف الخط بصيغة base64
// import arabicReshaper from 'arabic-reshaper';
import bidi from 'bidi-js';
// import '../fonts/amiri-normal.js';
//import amiriFont from './amiri-normal.js'; // ملف الخط المُضمن كـ base64

import {
  DownloadTableExcel,
  useDownloadExcel,
} from "react-export-table-to-excel";
import ReactPaginate from "react-paginate";
import Pagination from 'react-bootstrap/Pagination';

import Modal from 'react-bootstrap/Modal';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import AddOffersDetails from "./addOfferDetails";
import moment from 'moment';
import Slider from "react-slick";
// import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation , Pagination as SwiperPagination } from 'swiper/modules';
import ChatDialog from "./ChatDialog.js";
import ChatModal from "./ChatDialog.js";
import CommentsModal from "./CommentsModal.js";
import { ColorModeContext } from "../Context/ThemeContext.js";

export default function ShowOffersAll({ props, isVisble }) {

 const [open, setOpen] = useState(false);
 const [openModal, setOpenModal] = useState(false);
const [selectedOfferId, setSelectedOfferId] = useState(null);

  const statusTabs = [
  { key: "كل عروضي" ,  label: "كل عروضي" },
  { key: "المرفوض" ,  label: "المرفوض" },
  { key: "انتظار العقد", label: "انتظار العقد" },
  { key: "انتظار المالك" , label: "انتظار المالك" },
  { key: "انتظار النشر", label: "انتظار النشر" },
  { key: "المنشور", label: "المنشور" },
  // أضف حسب حالات statusOffer لديك
];


  const navigate = useNavigate();

  const [copiedOfferId, setCopiedOfferId] = useState(null);

 
const[imageAtPrint , setImageAtPrint] = useState(false)




 const [openChat, setOpenChat] = useState(false);



const [viewMode, setViewMode] = useState("card"); 
const [tabCounts, setTabCounts] = useState({});
const [totalCount, setTotalCount] = useState(0);



const [viewMyOffers, setViewMyOffers] = useState("all"); 
const [activeStatus, setActiveStatus] = useState("all");  // الحالة الحالية للتبويب
const cardRef = useRef();
  const [recordsA, setRecordsA] = useState([]);
  const [searchedVal, setSearchedVal] = useState("");

  function offersDisply() {
  setViewMyOffers(viewMyOffers === "myOffers" ? "all" : "myOffers")
  }

  const [filter, setFilter] = useState({
    name: "",
    priceFrom: "",
    priceTo: "",
    areaFrom: "",
    areaTo: "",
    city: [],
    aqarType: "",
    link: "",
    aqarConnected: "",
    aqarFloor:"",
    aqarStairs: "",
    aqarState:"",
    comments: "",
  selectedCity: '',
  selectedRegion: '',
  selectedDistricts: [],
  


  // تاب 2
  roomsCountMastar:"",
  roomsCount: "",
  bathroomsCount: "",
  majlesCount: "",
  hallsCount: "",
  maqlatCount:"",
  totalRoomsMin: 0,
  kitchenCount: "",
  aqarFacade: "",

  streetsWidth: "", // عرض الشوارع لكل واجهة

  // تاب 3
  featureCarEntrance: "",
  featureYard: "",
  featureStorage: "",
  featureAnnex: "",
  featureMaid: "",
  featureGuard: "",
  featureDriver: "",
  featureElevator:"",
  featureElevatorT:"",

  featureRoof: "",
  featureNearServices: "",
  featureLaundryRoom: "",
  featureBalcony: "",
  featureParking: "",

  contractNumber:"",
  ownerPhone:"",
  
  });

  

const totalRoomsOptions = [
  { label: "2 غرف أو أكثر", value: 2 },
  { label: "3 غرف أو أكثر", value: 3 },
  { label: "4 غرف أو أكثر", value: 4 },
  { label: "5 غرف أو أكثر", value: 5 },
  { label: "6 غرف أو أكثر", value: 6 },
];


  const optionsFace = [
  { value: "شمالية", label: "شمالية" },
  { value: "جنوبية", label: "جنوبية" },
  { value: "شرقية", label: "شرقية" },
  { value: "غربية", label: "غربية" },
];

const featureOptions = [
  { label: "مدخل سيارة", value: "مدخل سيارة" },
  { label: "حوش سيارات", value: "حوش سيارات" },
  { label: "غرفة تخزين", value: "غرفة تخزين" },
  { label: "ملحق", value: "ملحق" },
  { label: "غرفة خادمة", value: "غرفة خادمة" },
  { label: "غرفة حارس", value: "غرفة حارس" },
  { label: "غرفة سائق", value: "غرفة سائق" },
  { label: "مصعد", value: "مصعد" },
  { label: "تأسيس مصعد", value: "تأسيس مصعد" },


  { label: "سطح", value: "سطح" },
   { label: "بلكونه", value: "بلكونه" },
    { label: "غرفه غسيل", value: "غرفه غسيل" },
     { label: "قريب من الخدمات", value: "قريب من الخدمات" },
       { label: "  موقف سيارات", value: "  موقف سيارات" },
 
];





  const regionCities = {
  الوسطى: ['الرياض', 'بريدة'],
  الغربية: ['جدة', 'مكة', 'المدينة'],
  الشرقية: ['الدمام', 'الخبر'],
  الجنوبية: ['أبها', 'خميس مشيط'],
  الشمالية: ['عرعر', 'سكاكا'],
};

// const cityOptions = (filter.selectedRegion
//   ? regionCities[filter.selectedRegion]
//   : []
// ).map((city) => ({ value: city, label: city }));
  

const aqarImage = [aqar,aqar, aqar];
// const images = [aqar1, aqar2, aqar3, aqar4];


// const images = offer.images || [aqar1];


const cityDistricts = {
  الرياض: ['العقيق', 'النخيل', 'الياسمين'],
  جدة: ['الروضة', 'الفيصلية'],
  مكة: ['الشوقية', 'العوالي'],
  الدمام: ['الشراع', 'حي الفيصلية'],
    الخبر: ['الشراع', 'حي الفيصلية'],
  // ...
};


// const districtOptions = (cityDistricts[filter.selectedCity] || []).map((d) => ({
//   value: d,
//   label: d,
// }));

const [offersData, setOffersData] = useState([]);
const [cityOptions, setCityOptions] = useState([]);
const [districtOptions, setDistrictOptions] = useState([]);



const [showImageModal, setShowImageModal] = useState(false);
const [modalImageSrc, setModalImageSrc] = useState("");

  const handelChatOpen = (e) => {
    e.stopPropagation(); // يمنع الـ onClick للكارد
    e.preventDefault();  // يمنع أي توجيه من Link أو أي عنصر آخر
    setOpenChat(true);
  };

const handleImageClick = (src) => {
  setModalImageSrc(src);
  setShowImageModal(true);
};

const options = [
  { value: "link", label: "لينك الاعلان" },
  { value: "data", label: "تاريخ الاضافة" },
  { value: "name", label: "اسم الموظف" },
    { value: "region", label: "المنطقة" },
      { value: "location", label: "الموقع" },
       { value: "image", label: "الواجهه" },
        { value: "comments", label: "الملاحظات" },
];


const stateOptionsDuplicates = [
  { value: "all", label: "عرض الجميع" },
  { value: "exclude-duplicates", label: "استبعاد المكرر " },
  { value: "exclude-reserved", label: "استبعاد المحجوز" },
  { value: "exclude-sold", label: "استبعاد المباع" },
];

  const [selected, setSelected] = useState([]);
  const [classNames, setClassNames] = useState({
    link: "",
    data: "",
    name: "",
    region:"",
   location:"",
   image:"",
   comments:"",
  });

  const handleChange = (selectedOptions) => {
    const selectedValues = selectedOptions.map((opt) => opt.value);
    setSelected(selectedValues);

    // Update classNames dynamically
    setClassNames({
      link: selectedValues.includes("link") ? "no-export" : "",
      data: selectedValues.includes("data") ? "no-export" : "",
      name: selectedValues.includes("name") ? "no-export" : "",
      location: selectedValues.includes("location") ? "no-export" : "",
       region: selectedValues.includes("region") ? "no-export" : "",
       image : selectedValues.includes("image") ? "no-export" : "",
        comments : selectedValues.includes("comments") ? "no-export" : "XXY",
    });
  };

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


  const idUser = window.localStorage.getItem("name");
  console.log(idUser, typeof idUser);

  // 1. جلب البيانات من API (مثلاً)
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       // مثال: جلب بيانات من API
  //       const response = await fetch("http://localhost:8090/offers");
  //       const data = await response.json();

  //       // فرضاً البيانات بالشكل الصحيح مباشرة
  //       setRecordsA(data);
  //     } catch (error) {
  //       console.error("Failed to fetch data:", error);
  //       // يمكنك وضع بيانات افتراضية هنا إذا فشل الجلب
  //     }
  //   }
  //   fetchData();
  // }, []);



if(viewMode=="all"){
  var x =[]
}else {
  var x =[viewMyOffers, activeStatus, idUser]
}

const[showPart,setShowPart]=useState("part")

  function onChangeShowPart(e) {
    setShowPart(e.target.value);
  }

const[heightCard,setHeightCard]=useState({height:"505px" , overflow: "hidden"})


 useEffect(() => {
  if (viewMyOffers === "all") {
    if (showPart === "part") {
      setHeightCard({ height: "505px", overflow: "hidden" });
    } else {
      setHeightCard({ height: "auto", overflow: "auto" });
    }
  } else {
    setHeightCard({ height: "auto", overflow: "auto" });
  }
}, [showPart, viewMyOffers]);


useEffect(() => {

  
  async function fetchData() {
    


    try {

     if(viewMyOffers=="all"){

     
        

      // مثال: جلب بيانات من API
        const response = await fetch("http://localhost:8090/offersAll");
        const data = await response.json();

        // فرضاً البيانات بالشكل الصحيح مباشرة
        setRecordsA(data);


 

   }else{


      const url = new URL("http://localhost:8090/offers");
      url.searchParams.append("view", viewMyOffers);
      if (viewMyOffers === "myOffers") {
        url.searchParams.append("user", idUser);
      }
      if (activeStatus && activeStatus !== "كل عروضي") {
        url.searchParams.append("status", activeStatus);
      }

      const res = await fetch(url);
      const { offers, counts, total } = await res.json();

      setRecordsA(offers);

      // تحويل counts إلى object
      const countsMap = {};
      counts.forEach(c => {
        countsMap[c.statusOffer] = c.count;
      });
      setTabCounts(countsMap);
      setTotalCount(total);


   }



    }catch (error) {
      console.error(error);
    }
   }

   
  fetchData();
}, x);





  const toggleCity = (city) => {
    setFilter((f) => {
      if (f.city.includes(city)) {
        return { ...f, city: f.city.filter((c) => c !== city) };
      } else {
        return { ...f, city: [...f.city, city] };
      }
    });
  };


  const featureMap = {
  "مدخل سيارة": "featureCarEntrance",
  "حوش سيارات": "featureYard",
  "غرفة تخزين": "featureStorage",
  "ملحق": "featureAnnex",
  "غرفة خادمة": "featureMaid",
  "غرفة حارس": "featureGuard",
  "غرفة سائق": "featureDriver",
  "مصعد": "featureElevator",
  "تأسيس مصعد": "featureElevatorT",
  "سطح": "featureRoof",
  "بلكونه": "featureBalcony",
  "غرفه غسيل": "featureLaundryRoom",
  "قريب من الخدمات": "featureNearServices",
  "موقف سيارات": "featureParking",
};



// فلترة البيانات حسب البحث و الفلاتر (يمكنك إضافة المزيد حسب متطلباتك)

  // 2. فلترة البيانات
  const filteredRecords = recordsA.filter((row) => {
  if (searchedVal) {
    const search = searchedVal.toLowerCase();
    const foundInAny = Object.values(row).some((val) =>
      val?.toString().toLowerCase().includes(search)
    );
    if (!foundInAny) return false;
  }

  if (
    filter.name &&
    !row.selectedName.toLowerCase().includes(filter.name.toLowerCase())
  ) return false;

  if (
    filter.aqarType &&
    // !row.aqarType.toLowerCase().includes(filter.aqarType.toLowerCase())
     row.aqarType.toLowerCase() !== filter.aqarType.toLowerCase()
  ) return false;

  if (filter.link && !row.link.toLowerCase().includes(filter.link.toLowerCase()))
    return false;

  if (filter.priceFrom && Number(row.price) < Number(filter.priceFrom))
    return false;
  if (filter.priceTo && Number(row.price) > Number(filter.priceTo))
    return false;

  if (filter.areaFrom && Number(row.area) < Number(filter.areaFrom))
    return false;
  if (filter.areaTo && Number(row.area) > Number(filter.areaTo))
    return false;

  if (
    filter.aqarConnected &&
    !row.aqarConnected.toLowerCase().includes(filter.aqarConnected.toLowerCase())
  ) return false;

  if (
    filter.aqarStairs &&
    !row.aqarStairs.toLowerCase().includes(filter.aqarStairs.toLowerCase())
  ) return false;









    if (
    filter.aqarFloor &&
    !row.aqarFloor.toLowerCase().includes(filter.aqarFloor.toLowerCase())
  ) return false;


  //     if (
  //   filter.contractNumber &&
  //   !row.contractNumber.toLowerCase().includes(filter.contractNumber.toLowerCase())
  // ) return false;


  //     if (
  //   filter.ownerPhone &&
  //   !row.ownerPhone.toLowerCase().includes(filter.ownerPhone.toLowerCase())
  // ) return false;

if (
  filter.contractNumber &&
  !(row.contractNumber?.toLowerCase().includes(filter.contractNumber.toLowerCase()))
) {
  return false;
}

if (
  filter.ownerPhone &&
  !(row.ownerPhone?.toLowerCase().includes(filter.ownerPhone.toLowerCase()))
) {
  return false;
}


  if (
    filter.comments &&
    !row.comments.toLowerCase().includes(filter.comments.toLowerCase())
  ) return false;

  // ✅ المنطقة
  // if (
  //   filter.selectedRegion &&
  //   row.selectedRegion !== filter.selectedRegion
  // ) return false;


    if (
    filter.selectedRegion &&
    // !row.aqarType.toLowerCase().includes(filter.aqarType.toLowerCase())
     row.selectedRegion.toLowerCase() !== filter.selectedRegion.toLowerCase()
  ) return false;


  

  // ✅ المدينة
  if (
    filter.selectedCity &&
    row.selectedCity !== filter.selectedCity
  ) return false;

  // ✅ الأحياء (قائمة متعددة)
  if (
    filter.selectedDistricts.length > 0 &&
    !filter.selectedDistricts.includes(row.selectedDistricts)
  ) return false;





  // ✅ الواجهة (aqarFacade) - قائمة متعددة
  if (
    filter.aqarFacade.length > 0 &&
    !filter.aqarFacade.map(f => f.value).includes(row.aqarFacade)
  ) return false;



  // ✅ ميزات العقار
if (Array.isArray(filter.features) && filter.features.length > 0) {
  const selectedFeatures = filter.features.map(f => f.value);
  for (let featureName of selectedFeatures) {
    const dbField = featureMap[featureName];
    if (!row[dbField] || row[dbField] == 0) {
      return false;
    }
  }
}


if (filter.totalRoomsMin) {
  const totalRooms =
    Number(row.roomsCountMastar || 0) +
    Number(row.roomsCount || 0) +
    Number(row.majlesCount || 0) +
    Number(row.maqlatCount || 0); // أو hallsCount إذا المقصود به مقلط

  if (totalRooms < filter.totalRoomsMin) return false;
}





// ✅ فلترة حالة العقار (aqarState) - اختيار متعدد
if (Array.isArray(filter.aqarState) && filter.aqarState.length > 0) {
  const selectedStates = filter.aqarState.map((opt) => opt.value);

  if (
    selectedStates.includes("exclude-duplicates") &&
    (row.aqarState === "مكرر الاعلان" || row.aqarState === "مكرر مع الزملاء")
  ) {
    return false;
  }

  if (selectedStates.includes("exclude-reserved") && row.aqarState === "محجوز") {
    return false;
  }

  if (selectedStates.includes("exclude-sold") && row.aqarState === "مباع") {
    return false;
  }
}



  

  return true;
});
  








useEffect(() => {
  axios.get("http://localhost:8090/offersAll")
    .then((res) => setOffersData(res.data))
    .catch((err) => console.error("خطأ في جلب البيانات:", err));

}, []);

useEffect(() => {
  if (filter.selectedRegion) {
    const cities = offersData
      .filter((item) => item.selectedRegion.trim() === filter.selectedRegion.trim())
      .map((item) => item.selectedCity);

      

    const uniqueCities = [...new Set(cities)].map((city) => ({
      value: city,
      label: city,
    }));

    setCityOptions(uniqueCities);
    setFilter((prev) => ({
      ...prev,
      selectedCity: "",
      selectedDistricts: [],
    }));
    setDistrictOptions([]);
  }
}, [filter.selectedRegion, offersData]);


useEffect(() => {
  if (filter.selectedCity) {
    const districts = offersData
      .filter((item) => item.selectedCity.trim() === filter.selectedCity.trim())
      .map((item) => item.selectedDistricts);

    const uniqueDistricts = [...new Set(districts)].map((d) => ({
      value: d,
      label: d,
    }));

    setDistrictOptions(uniqueDistricts);
    setFilter((prev) => ({
      ...prev,
      selectedDistricts: [],
    }));
  }
}, [filter.selectedCity, offersData]);




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



console.log("ggg")







  let audio3 = new Audio(audioError);

  const tableRef = useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename:  ` العروض ${new Date().toISOString().slice(0, 10)}`,
    sheet: "العروض",
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
      const result = await axios("http://localhost:8090/offersAll");
      //console.log(result.data);
      setUSerData(result.data);
      var textError=""
    } catch (err) {
      console.log("somthing Wrong DataBase");
      var xx=1
      var textError="(لا يوجد اتصال بقاعده البيانات) لا يوجد بيانات لعرضها"
    }
  };



  const [loading, setLoading] = useState();

  const handleDelete = async (id,e) => {

  e.stopPropagation(); // منع فتح الكارد

    
    
    setShowa(true)
    setErrorMassge(" جاري  حذف العرض ");
    setShowModal(true);
    audio3.play();

    try {
      await axios.delete(`http://localhost:8090/offersAll/${id}`);
      // window.location.reload();
      setTimeout(() => {
        window.location.href = "https://alaaahmed2024.github.io/alaa/#/show-offers";
        setLoading(true);
      }, 2300);
    } catch (err) {
      console.log(err);
    }
  };

//  function handelLink(){
  
//     window.location.href = "https://alaaahmed2024.github.io/alaa/#/add-offers";

//   }
  //===========================================

  // const navigate=useNavigate()
const [showa, setShowa] = useState(false);

  const [userDataEdit, setUSerDataEdit] = useState();
  useEffect(() => {
    fetchData();
  }, []);



  const [edit, setEdit] = useState();

  


const handleEdit = async (id,e) => {
    e.stopPropagation(); // منع فتح الكارد
  setShowa(true);
  setErrorMassge(" الي تعديل العرض   " + id);
  setShowModal(true);

  try {
    const responceEdit = await axios.get(`http://localhost:8090/userdetailsOffers/${id}`);
    const data = responceEdit.data[0];

    // معالجة aqarFacade وتحويلها إلى Array من الكائنات { value, label }
    const parsedFacade =
      typeof data.aqarFacade === "string" && data.aqarFacade.trim() !== ""
        ? data.aqarFacade
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean) // إزالة الفراغات الفارغة
            .map((item) => ({ value: item, label: item }))
        : Array.isArray(data.aqarFacade)
        ? data.aqarFacade
        : [];

    // تحويل ميزات العقار إلى boolean صريح
    const toBool = (val) => val === 1 || val === true || val === "1" || val === "true";

    setUSerDataEdit({
      ...data,
      aqarFacade: parsedFacade,
      featureCarEntrance: toBool(data.featureCarEntrance),
      featureYard: toBool(data.featureYard),
      featureStorage: toBool(data.featureStorage),
      featureAnnex: toBool(data.featureAnnex),
      featureMaid: toBool(data.featureMaid),
      featureGuard: toBool(data.featureGuard),
      featureDriver: toBool(data.featureDriver),


       featureElevator: toBool(data.featureElevator),
        featureElevatorT: toBool(data.featureElevatorT),


         featureRoof: toBool(data.featureRoof),
          featureNearServices: toBool(data.featureNearServices),
           featureLaundryRoom: toBool(data.featureLaundryRoom),
            featureBalcony: toBool(data.featureBalcony),
             featureParking: toBool(data.featureParking),



 

    });

   
      setTimeout(() => {
        setEdit(true);
      }, 2300);

  
  } catch (err) {
    console.error("حدث خطأ أثناء جلب بيانات العرض:", err);
  }

    const audio1 = new Audio(audioSuccess);
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
    // const records = filteredByStatus.slice(firstIndex, lastIndex);
  // const nPage = Math.ceil(userData.length / recordsPerPage);
  const nPage = Math.ceil(filteredRecords.length / recordsPerPage);
    // const nPage = Math.ceil(filteredByStatus.length / recordsPerPage);
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
  const [showFullText, setShowFullText] = useState(false);
  
    const toggleText = () => {
      setShowFullText((prev) => !prev);
    };
     

  if (loading) {
    return <ShowOffersAll />;
  }

  if (edit) {
    return (
      <>
        <AddOffersDetails editClint={userDataEdit} />;
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


 


 const logoBase64 =
"data:image/png;base64,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"






const getBase64ImageFromURL = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous'; // للسماح بجلب الصور من Cloudinary
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      resolve(canvas.toDataURL('image/jpeg'));
    };
    img.onerror = (err) => reject(err);
    img.src = url;
  });
};






const generatePDF = async () => {
  const doc = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' });

  doc.addFileToVFS('Amiri-Regular.ttf', amiriFont);
  doc.addFont('Amiri-Regular.ttf', 'Amiri', 'normal');
  doc.setFont('Amiri');
  doc.setFontSize(12);

  const table = tableRef.current;
  const headers = [];
  const colIndexesToSkip = [];

  let linkColumnIndex = -1;
  let xxyColumnIndex = -1;
  let imageColumnIndex = -1;
  let originalImageColumnIndex = -1;

  // 🟡 رؤوس الأعمدة
  const ths = Array.from(table.querySelectorAll('thead th'));
  ths.forEach((th, i) => {
    if (th.classList.contains('no-export')) {
      colIndexesToSkip.push(i);
    } else {
      if (th.classList.contains('image')) {
        imageColumnIndex = headers.length;
        originalImageColumnIndex = i;
        headers.push('واجهة العقار');
      } else if (th.classList.contains('is-link-location')) {
        linkColumnIndex = headers.length;
        headers.push('موقع العقار');
      } else if (th.classList.contains('is-link')) {
        headers.push('لينك الإعلان');
      } else {
        headers.push(th.innerText.trim());
      }

      if (th.classList.contains('XXY')) {
        xxyColumnIndex = headers.length - 1;
      }
    }
  });

  // 🟡 استخراج الصفوف مع الصور Base64
  const trs = Array.from(table.querySelectorAll('tbody tr'));
  const bodyData = await Promise.all(trs.map(async (tr) => {
    const row = [];
    const tds = Array.from(tr.children);

    for (let i = 0; i < tds.length; i++) {
      if (!colIndexesToSkip.includes(i)) {
        const td = tds[i];
        const isLink = td.classList.contains('is-link');
        const href = td.querySelector('a')?.href || '';
        const isImage = i === originalImageColumnIndex;
        const imageUrl = isImage ? td.querySelector('img')?.src : '';

        let base64Image = '';
        if (isImage && imageUrl) {
          try {
            base64Image = await getBase64ImageFromURL(imageUrl);
          } catch (err) {
            console.warn("فشل في تحميل الصورة:", imageUrl, err);
          }
        }

        row.push({
          text: isLink || isImage ? '' : td.innerText.trim(),
          isLink,
          href,
          imageBase64: base64Image,
        });
      }
    }

    return row;
  }));

  // 🟡 إنشاء جدول PDF
  autoTable(doc, {
    head: [headers],
    body: bodyData.map(row => row.map(cell => cell.text)),
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
    columnStyles: {
      ...(xxyColumnIndex !== -1 && { [xxyColumnIndex]: { cellWidth: 100 } }),
    },

    didDrawPage: function (data) {
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const imgWidth = 180;
      const imgHeight = 255;
      const centerX = (pageWidth - imgWidth) / 2;
      const centerY = (pageHeight - imgHeight) / 2;

      if (doc.setGState) doc.setGState(new doc.GState({ opacity: 0.2 }));
      doc.addImage(logoBase64, 'PNG', centerX, centerY, imgWidth, imgHeight);
      if (doc.setGState) doc.setGState(new doc.GState({ opacity: 1 }));
    },

    didDrawCell: function (data) {
      const rowIdx = data.row.index;
      const colIdx = data.column.index;
      const cell = bodyData?.[rowIdx]?.[colIdx];

      // 🔵 روابط
      if (data.section === 'body' && cell?.isLink && cell.href?.startsWith('http')) {
        doc.setTextColor(0, 0, 255);
        const text = 'اضغط هنا';
        const textHeight = doc.getFontSize();
        const textWidth = doc.getTextWidth(text);
        const y = data.cell.y + (data.cell.height + textHeight) / 2 - 2;
        const x = data.cell.x + data.cell.width - textWidth - 5;
        doc.textWithLink(text, x, y, { url: cell.href });
        doc.setTextColor(0, 0, 0);
      }

      // 🟢 صور Base64 متناسقة مع ارتفاع الصف
      if (data.section === 'body' && colIdx === imageColumnIndex && cell?.imageBase64) {
        const maxImgWidth = data.cell.width - 6;
        const maxImgHeight = data.cell.height - 6;

        const originalWidth = 80;
        const originalHeight = 80;

        const scale = Math.min(maxImgWidth / originalWidth, maxImgHeight / originalHeight);
        const displayWidth = originalWidth * scale;
        const displayHeight = originalHeight * scale;

        const x = data.cell.x + (data.cell.width - displayWidth) / 2;
        const y = data.cell.y + (data.cell.height - displayHeight) / 2;

        doc.addImage(cell.imageBase64, 'JPEG', x, y, displayWidth, displayHeight);
      }
    },
  });

  // 🟢 إعادة العناصر المخفية
  document.querySelectorAll('.hide-o').forEach(el => {
    el.style.display = '';
  });
  setShowFullText(false);

   doc.save(` العروض ${new Date().toISOString().slice(0, 10)}.pdf`);
};



const startPDFGeneration = () => {
  setShowFullText(true);
  document.querySelectorAll('.hide-o').forEach(el => {
    el.style.display = 'none';
  });

  setTimeout(() => {
    generatePDF(); // استدعاء الدالة async
  }, 1000);
};





 const nameOptions = Array.from(
  new Set(recordsA.map(r => r.selectedName).filter(Boolean))
).map(name => ({ value: name, label: name }));






if(showPart==="part"){
  var filePdf= cardPDF4
}else{
  var filePdf= cardPDF2
}

// const downloadCardsAsPDF = () => {

//   if (idUser === "alaa") {
//     // إعادة التوجيه لملف PDF بدل الطباعة
//     window.open(filePdf, "_offers");
//     return;
//   }


//   const elementsToHide = document.querySelectorAll('.no-export');
//   elementsToHide.forEach(el => (el.style.display = 'none'));
//    setImageAtPrint(true)
//   setTimeout(async () => {
//     const element = cardRef.current;

//     const getBase64FromUrl = (url) => {
//       return new Promise((resolve, reject) => {
//         const img = new Image();
//         img.crossOrigin = 'anonymous';
//         img.onload = () => {
//           const canvas = document.createElement('canvas');
//           canvas.width = img.width;
//           canvas.height = img.height;
//           const ctx = canvas.getContext('2d');
//           ctx.drawImage(img, 0, 0);
//           const dataURL = canvas.toDataURL('image/jpeg');
//           resolve(dataURL);
//         };
//         img.onerror = (err) => reject(err);
//         img.src = url;
//       });
//     };

//     // حوّل كل الصور داخل الكروت إلى base64
//     const images = element.querySelectorAll('img');
//     for (const img of images) {
//       if (!img.src.startsWith('data:')) {
//         try {
//           const base64 = await getBase64FromUrl(img.src);
//           img.src = base64;
//         } catch (error) {
//           console.error('خطأ في تحويل الصورة إلى Base64:', error);
//         }
//       }
//     }

//     // CSS للطباعة
//     const style = document.createElement('style');
//     style.innerHTML = `
//       .pdf-title {
//         text-align: center;
//         font-weight: bold;
//         font-size: 16px;
//           margin-top: 0;           /* إزالة أي مسافة من الأعلى */
//         margin-bottom: 0.05cm;    /* تقليل المسافة بين العنوان والكروت */
//         color: #000;
//          page-break-inside: avoid; /* منع انقسام العنوان */
//       }

//       .pdf-row {
//         display: flex;
//         flex-wrap: nowrap;
//         justify-content: center;


//         margin-bottom: 0.05cm;       /* مسافة صغيرة تحت الصف */
//       }

//       .card-offer {
//         flex: 0 0 48%;
      
//          margin:0.2%

//          margin: 0.1% 0.5%;          /* تقليل هامش الكروت */
//       }


//       .page-container {
//         break-before: page;
//         page-break-before: always;
//         page-break-inside: avoid; /* منع الانقسام داخل الصفحة */
//         padding-top: 0.2cm;     /* تقليل المسافة من الأعلى */
//         padding-bottom: 0.2cm;    /* ترك مسافة مناسبة من الأسفل */


//            padding-top: 0.1cm;         /* تقليل المسافة من الأعلى */
//     padding-bottom: 0.1cm;      /* تقليل المسافة من الأسفل */
//       padding-left: 0.3cm;        /* إضافة حشو يسار أقل */
//      padding-right: 0.3cm;       /* إضافة حشو يمين أقل */
//       }

//       .page-container:first-child {
//         break-before: auto;
//         page-break-before: auto;
//       }
//     `;
//     document.head.appendChild(style);

//     // بناء صفحات PDF
//     const originalCards = Array.from(element.querySelectorAll('.card-offer'));
//     const wrapper = document.createElement('div');
//     wrapper.classList.add('pdf-export');

//     // for (let i = 0; i < originalCards.length; i += 2) {
//     //   const pageContainer = document.createElement('div');
//     //   pageContainer.className = 'page-container';

//     //   // عنوان الصفحة
//     //   const pageTitle = document.createElement('div');
//     //   pageTitle.className = 'pdf-title';
//     //   pageTitle.innerText = `شركة اسكان سلمان العقارية - الصفحة ${Math.floor(i / 2) + 1}`;

//     //   // صف الكروت
//     //   const row = document.createElement('div');
//     //   row.classList.add('pdf-row');
//     //   row.appendChild(originalCards[i].cloneNode(true));
//     //   if (originalCards[i + 1]) {
//     //     row.appendChild(originalCards[i + 1].cloneNode(true));
//     //   }

//     //   // تجميع الصفحة
//     //   pageContainer.appendChild(pageTitle);
//     //   pageContainer.appendChild(row);
//     //   wrapper.appendChild(pageContainer);
//     // }



// const cardsPerRow = 2; // ثابت: كل صف فيه كاردين
// const rowsPerPage = showPart === "part" ? 2 : 1; // عدد الصفوف في الصفحة
// const cardsPerPage = cardsPerRow * rowsPerPage;

// for (let i = 0; i < originalCards.length; i += cardsPerPage) {
//   const pageContainer = document.createElement('div');
//   pageContainer.className = 'page-container';

//   const pageTitle = document.createElement('div');
//   pageTitle.className = 'pdf-title';
//   pageTitle.innerText = `شركة اسكان سلمان العقارية - الصفحة ${Math.floor(i / cardsPerPage) + 1}`;

//   pageContainer.appendChild(pageTitle);
//   // إنشاء الصفوف داخل الصفحة
//   for (let r = 0; r < rowsPerPage; r++) {
//     const row = document.createElement('div');
//     row.classList.add('pdf-row');

//     for (let c = 0; c < cardsPerRow; c++) {
//       const cardIndex = i + r * cardsPerRow + c;
//       if (originalCards[cardIndex]) {
//         row.appendChild(originalCards[cardIndex].cloneNode(true));
//       }
//     }

//     pageContainer.appendChild(row);
//   }

//   wrapper.appendChild(pageContainer);
// }












//     // إعدادات PDF
//     const opt = {
//       margin: 0.3,
//       filename: `العروض${new Date().toLocaleDateString()}.pdf`,
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
//       jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
//     };

//   //  if(viewMyOffers=="all"){


 
//   //   setHeightCard({height:"505px" , overflow: "hidden"})
//   //  }else{
//   //    setHeightCard({height:"auto" , overflow: "auto"})
//   //  }

//     setShowFullText(false);
//    setImageAtPrint(false)
//     html2pdf().set(opt).from(wrapper).save().then(() => {
//       elementsToHide.forEach(el => (el.style.display = ''));
//       style.remove();
//     });
//   }, 1000);

//   setShowFullText(true);
//   setImageAtPrint(true)
//   // setHeightCard({height:"auto" , overflow: "auto"})
// };




const downloadCardsAsPDF = () => {
  if (idUser === "alaa") {
    window.open(filePdf, "_offers");
    return;
  }

  const elementsToHide = document.querySelectorAll('.no-export');
  elementsToHide.forEach(el => (el.style.display = 'none'));
  setImageAtPrint(true);

  setTimeout(async () => {
    const element = cardRef.current;

    const getBase64FromUrl = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          const dataURL = canvas.toDataURL('image/jpeg');
          resolve(dataURL);
        };
        img.onerror = (err) => reject(err);
        img.src = url;
      });
    };

    // تحويل الصور إلى base64
    const images = element.querySelectorAll('img');
    for (const img of images) {
      if (!img.src.startsWith('data:')) {
        try {
          const base64 = await getBase64FromUrl(img.src);
          img.src = base64;
        } catch (error) {
          console.error('خطأ في تحويل الصورة إلى Base64:', error);
        }
      }
    }

    // CSS للطباعة
    const style = document.createElement('style');
    style.innerHTML = `
      .pdf-title {
        text-align: center;
        font-weight: bold;
        font-size: 16px;
        margin-top: 0;
        margin-bottom: 0.05cm;
        color: #000;
        page-break-inside: avoid;
      }

      .pdf-row {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        margin-bottom: 0.05cm;
        page-break-inside: avoid;
      }

      .card-offer {
        flex: 0 0 48%;
        margin: 0.1% 0.5%;
        page-break-inside: avoid;
      }

      .page-container {
        break-before: page;
        page-break-before: always;
        page-break-inside: avoid;
        padding: 0.1cm 0.3cm;
      }

      .page-container:first-child {
        break-before: auto;
        page-break-before: auto;
      }
    `;
    document.head.appendChild(style);

    // بناء الصفحات
    const originalCards = Array.from(element.querySelectorAll('.card-offer'));
    const wrapper = document.createElement('div');
    wrapper.classList.add('pdf-export');

    const cardsPerRow = 2;
    const rowsPerPage = showPart === "part" ? 2 : 1;
    const cardsPerPage = cardsPerRow * rowsPerPage;

    for (let i = 0; i < originalCards.length; i += cardsPerPage) {
      const pageContainer = document.createElement('div');
      pageContainer.className = 'page-container';

      const pageTitle = document.createElement('div');
      pageTitle.className = 'pdf-title';
      pageTitle.innerText = `شركة اسكان سلمان العقارية - الصفحة ${Math.floor(i / cardsPerPage) + 1}`;

      pageContainer.appendChild(pageTitle);

      for (let r = 0; r < rowsPerPage; r++) {
        const row = document.createElement('div');
        row.classList.add('pdf-row');

        for (let c = 0; c < cardsPerRow; c++) {
          const cardIndex = i + r * cardsPerRow + c;
          if (originalCards[cardIndex]) {
            row.appendChild(originalCards[cardIndex].cloneNode(true));
          }
        }

        pageContainer.appendChild(row);
      }

      wrapper.appendChild(pageContainer);
    }

    const opt = {
      margin: 0.3,
      filename: `العروض${new Date().toLocaleDateString()}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
      jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
    };

    setShowFullText(false);
    setImageAtPrint(false);

    html2pdf().set(opt).from(wrapper).save().then(() => {
      elementsToHide.forEach(el => (el.style.display = ''));
      style.remove();
    });

  }, 1000);

  setShowFullText(true);
  setImageAtPrint(true);
};




// ✅ دالة تقطيع المصفوفة كل 2 عنصر
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};








  return (
    <div div style={{ marginTop: "10px", height: "100vh" }}>
      <ModalX isVisble={showModdal} errorMassage={errorMassge} darkMode={darkSide} />
    

      <div className="p-relative" style={{ margin: "20px 0px" }}>
        <div className="row flex-mobile " id={classNameModel} style={{ marginBottom: "200px" , margin:"auto"  , padding:"inherit"}}>


 <div
  // className="col box input-css"
  // id={classNameModel}
  style={{
    // width: "100%",
    // margin: "5px",
    marginTop:"15px",
      padding:"0 20px"
    

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
      {viewMode === "table" ?(
      <button className="btn btn-danger" onClick={startPDFGeneration}>
        <FontAwesomeIcon icon={faFilePdf} />  تحميل PDF
      </button>
      ):(

       <button className="btn btn-danger" onClick={downloadCardsAsPDF}>
        <FontAwesomeIcon icon={faFilePdf} />  تحميل PDF
        
       </button>


      )
    }

        

      <button className="btn btn-success" onClick={onDownload}>
        <FontAwesomeIcon icon={faFileExcel} /> تحميل Excel
      </button>
    </div>

    {/* العنوان في المنتصف */}
    <div className="col-12 col-md-3 mb-2 d-flex justify-content-center">
      <h3 className="m-0">العروض </h3>
    </div>

    <div
      className="col-12 col-md-3 d-flex justify-content-md-end justify-content-center"
      style={{ position: "relative" }} // 
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







<div className="filters-container" style={{ display: 'flex', gap: "5px", flexWrap: 'wrap', marginBottom: "10px" }}>
         <div  className="input-wrapper-search">
       
  

        <CreatableSelect
  placeholder="اسم الموظف"
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
      

                      <select
                            style={{  height: " ",maxWidth:"180px" , minWidth:"180px" }}
                                   value={filter.aqarType}
                          onChange={e => setFilter(f => ({ ...f, aqarType: e.target.value }))}
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

        
        
    <span  className="underline-input"></span>
    </div>
 <div  className="input-wrapper-search">
        <input
          type="text"
          placeholder="الرابط"
          value={filter.link}
          onChange={e => setFilter(f => ({ ...f, link: e.target.value }))}
        />
        
    <span  className="underline-input"></span>
    </div>
 <div  className="input-wrapper-search">
        {/* <input
          type="text"
          placeholder="الحالة الاتصال"
          value={filter.aqarConnected}
          onChange={e => setFilter(f => ({ ...f, aqarConnected: e.target.value }))}
        /> */}

                                                    <select
                            style={{  height: " ",maxWidth:"180px" , minWidth:"180px"  }}
                                   value={filter.aqarConnected}
                         onChange={e => setFilter(f => ({ ...f, aqarConnected: e.target.value }))}
                          >
                              <option value="">حاله الاتصال</option>
                            <option value="متصل">متصل</option>
                            <option value="منفصل">منفصل</option>
                            <option value="شبه متصل">شبه متصل</option>
                            <option value="شبه منفصل">شبه منفصل</option>
                          </select>

        
    <span  className="underline-input"></span>
    </div>

 <div  className="input-wrapper-search">
 

                                                            <select
                            style={{  height: " ",maxWidth:"180px" , minWidth:"180px"  }}
                                   value={filter.aqarStairs}
          onChange={e => setFilter(f => ({ ...f, aqarStairs: e.target.value }))}
                          >
                             <option value="">نوع الدرج</option>
                            <option value="درج داخلي">درج داخلي</option>
                            <option value="درج خارجي">درج خارجي</option>
                            <option value="---">---</option>
                          </select>
        
    <span  className="underline-input"></span>
    </div>

 <div  className="input-wrapper-search">
  
                                                            <select
                                                            style={{maxWidth:"180px" , minWidth:"180px" }}
                         value={filter.aqarFloor}
                         onChange={e => setFilter(f => ({ ...f, aqarFloor: e.target.value }))}
                          >
                             <option value=""> مكان العقار</option>
                    

  
             {filter.aqarType=="فيلا"?(
              
              <>
               <option value="دورين و ملحق">دورين و ملحق</option>
                <option value="دور و ملحق">دور و ملحق</option>
                <option value="دورين"> دورين</option>
              
                     </>): filter.aqarType=="دور مع ملحق"||filter.aqarType=="فيلا روف"||filter.aqarType=="فيلا تاون هاوس"||filter.aqarType== "شقه روف" ? (

                
                
                
                
                <>
                
                 <option value="دور ارضي و ملحق">دور ارضي و ملحق</option>
                  <option value="دور اول و ملحق">دور اول و ملحق</option>
                   <option value="دور ثاني و ملحق">دور ثاني و ملحق</option>
                    <option value="دورين">دورين   </option>
                
                </>):
              
              
              (<>

               <option value="دورين"> دورين </option>
              
                  <option value="الارضي">الدور الارضي</option>
                <option value="الاول"> الدور الاول</option>
                <option value="الثاني">الدور الثاني </option>
                <option value="الثالث">الدور الثالث </option>
                <option value="الرابع">الدور الرابع</option>
                <option value="الملحق">الملحق </option>
              
              </>)}
               
            



                          </select>

        
    <span  className="underline-input"></span>
    </div>


 <div  className="input-wrapper-search">
        <input
          type="text"
          placeholder="ملاحظات"
          value={filter.comments}
          onChange={e => setFilter(f => ({ ...f, comments: e.target.value }))}
        />
        
    <span  className="underline-input"></span>
    </div>
 <div  className="input-wrapper-search">
        {/* نطاق السعر */}
        <input
          type="number"
          placeholder="السعر من"
          value={filter.priceFrom}
          onChange={e => setFilter(f => ({ ...f, priceFrom: e.target.value }))}
          
        />
        
    <span  className="underline-input"></span>
    </div>

         <div  className="input-wrapper-search">
        <input
          type="number"
          placeholder="السعر إلى"
          value={filter.priceTo}
          onChange={e => setFilter(f => ({ ...f, priceTo: e.target.value }))}
          
        />
        
    <span  className="underline-input"></span>
    </div>
 <div  className="input-wrapper-search">
        {/* نطاق المساحة */}
        <input
          type="number"
          placeholder="المساحة من"
          value={filter.areaFrom}
          onChange={e => setFilter(f => ({ ...f, areaFrom: e.target.value }))}
          
        />
        
    <span  className="underline-input"></span>
    </div>
         <div  className="input-wrapper-search">
        <input
          type="number"
          placeholder="المساحة إلى"
          value={filter.areaTo}
          onChange={e => setFilter(f => ({ ...f, areaTo: e.target.value }))}
          
        />

    <span  className="underline-input"></span>
    </div>



 
 <div  className="input-wrapper-search">
 

                                                            <select
                            style={{  height: " ",maxWidth:"180px" , minWidth:"180px"  }}
                            value={showPart}
                            onChange={(e) => onChangeShowPart(e)}
                          >
                           {viewMyOffers=="all"?( 
                             <option value="part"> جزء من التفاصيل</option>
                             ):(<></>)}
                          

                            <option value="all">كامل التفاصيل</option>
                        
                           
                          </select>
        
    <span  className="underline-input"></span>
    </div>


   
 <div  className="input-wrapper-search">
        <input
          type="text"
          placeholder="رقم الصك"
          value={filter.contractNumber}
          onChange={e => setFilter(f => ({ ...f, contractNumber: e.target.value }))}
        />
        
    <span  className="underline-input"></span>
    </div>


     <div  className="input-wrapper-search">
        <input
          type="text"
          maxLength={10}
          placeholder="جوال المالك"
          value={filter.ownerPhone}
          onChange={e => setFilter(f => ({ ...f, ownerPhone: e.target.value }))}
        />
        
    <span  className="underline-input"></span>
    </div>


        <Select
        isMulti
        options={options}
        onChange={handleChange}
        placeholder="الاخفاء من pdf"
          styles={customSelectStyle}

        className="w-auto"
      />
 











  <Select
    isMulti
    name="aqarFacade"
    options={optionsFace}
    
    classNamePrefix="select"
    placeholder="اختر الواجهة"
    value={filter.aqarFacade} // ← يجب أن تكون Array
    onChange={(selectedOptions) =>
      setFilter({ ...filter, aqarFacade: selectedOptions })
    }
        styles={customSelectStyle}

        className="w-auto"
  />





  <Select
    isMulti
    options={featureOptions}
    
    classNamePrefix="select"
    placeholder="اختر الميزات"
    value={filter.features} // ← يجب أن تكون مصفوفة من الكائنات {label, value}
    onChange={(selected) => setFilter({ ...filter, features: selected })}
           styles={customSelectStyle}

        className="w-auto" 
  />













<div className="input-wrapper-search">
  <select
    style={{ maxWidth: "180px", minWidth: "180px" }}
    value={filter.totalRoomsMin}
    onChange={(e) =>
      setFilter((f) => ({ ...f, totalRoomsMin: Number(e.target.value) }))
    }
  >
    <option value="0"> اجمالي الغرف</option>
    <option value="2">2 غرف أو أكثر</option>
    <option value="3">3 غرف أو أكثر</option>
    <option value="4">4 غرف أو أكثر</option>
    <option value="5">5 غرف أو أكثر</option>
    <option value="6">6 غرف أو أكثر</option>
    <option value="7">7 غرف أو أكثر</option>
    <option value="8">8 غرف أو أكثر</option>
  </select>

  <span className="underline-input"></span>
</div>










<Select
  isMulti
  options={stateOptionsDuplicates}
  placeholder=" حسب حالة العرض"
  classNamePrefix="select"
  className="w-auto"
  value={filter.aqarState}
  onChange={(selected) => {
    if (selected.some((opt) => opt.value === "all")) {
      setFilter((f) => ({ ...f, aqarState: [] })); // "عرض الجميع"
    } else {
      setFilter((f) => ({ ...f, aqarState: selected }));
    }
  }}
  styles={customSelectStyle}
/>









<div  className="input-wrapper-search">
<select
    style={{maxWidth: "180px" , minWidth:"180px" }}
    className="form-control"
    value={filter.selectedRegion}
    onChange={(e) =>
      setFilter({ ...filter, selectedRegion: e.target.value })
    }
      styles={customSelectStyle }
  >
    <option value="">اختر المنطقة</option>
    <option value= "المنطقة الشرقية"> 
      المنطقة الشرقية</option>
    <option value="المنطقة الجنوبيه">المنطقة الجنوبيه</option>
    <option value="المنطقة الغربية">المنطقة الغربية</option>
    <option value="المنطقة الشمالية">المنطقة الشمالية</option>
    <option value= "المنطقة الوسطي"> المنطقة الوسطي</option>
  </select>
 
    <span  className="underline-input"></span>
    </div>



  <Select
  options={cityOptions}
  placeholder="اختر المدينة"
  value={cityOptions.find(opt => opt.value === filter.selectedCity)}
  onChange={(selectedOption) => {
    setFilter({
      ...filter,
      selectedCity: selectedOption?.value || '',
      selectedDistricts: [],
    });
  }}
  isDisabled={!filter.selectedRegion}
  styles={customSelectStyle}
/>


  <Select
  isMulti
  options={districtOptions}
  placeholder="اختر الأحياء"
  value={districtOptions.filter(opt =>
    filter.selectedDistricts.includes(opt.value)
  )}
  onChange={(selected) =>
    setFilter({
      ...filter,
      selectedDistricts: selected.map((opt) => opt.value),
    })
  }
  isDisabled={!filter.selectedCity}
  styles={customSelectStyle}
  className="w-auto"
/>




      </div>










    <div
      className="no-print"
    
     style={{    
    
        display: "flex", justifyContent: "space-between" }}
        >   




<div style={{ marginBottom: "15px", textAlign: "right" }}>
  <MUIButton 
  
  variant="contained" size="large"
  
    style={{minWidth:"110px"}}

    onClick={offersDisply}
    className=" btn btn-outline-primary"
  >
    {viewMyOffers === "myOffers" ? "جميع العروض" : "عروضي" }
  </MUIButton>


 
</div>










<div style={{ marginBottom: "15px", textAlign: "left" }}>
  <MUIButton 
  
  variant="contained" size="large"
  // variant="outlined" 
  style={{minWidth:"110px"}}

    onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
    className=" btn btn-outline-primary"
  >
    {viewMode === "table" ? "نمط البطاقات " : "نمط الجدول "}
  </MUIButton>


 
</div>




</div> 


      {/* تبويبات الحالة تظهر فقط عند اختيار "عروضي" */}
      {/* {viewMyOffers === "myOffers" && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "15px",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          {statusTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveStatus(tab.key)}
              style={{
                padding: "8px 16px",
                cursor: "pointer",
                backgroundColor: activeStatus === tab.key ? "#007bff" : "#f0f0f0",
                color: activeStatus === tab.key ? "#fff" : "#333",
                border: "none",
                borderRadius: "4px",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )} */}


{viewMyOffers === "myOffers" && (
  <div
    style={{
      display: "flex",
      justifyContent: "flex-start",
      marginBottom: "15px",
      gap: "10px",
      flexWrap: "wrap",


    padding: "8px",
    marginRight: "5px",
   
    maxWidth:" 99%",
    backgroundColor: darkSide ? "#e1e5ed" : "#0f1a36",

    }}
  >
    {statusTabs.map((tab) => (
      <button
        key={tab.key}
        onClick={() => setActiveStatus(tab.key)}
        style={{
          padding: "8px 16px",
          cursor: "pointer",
          backgroundColor: activeStatus === tab.key ? "#007bff" : "#f0f0f0",
          color: activeStatus === tab.key ? "#fff" : "#333",
          border: "none",
          borderRadius: "4px",
        }}
      >
        {tab.label}{" "}
        {tab.key === "كل عروضي"
          ? `(${totalCount})`
          : tabCounts[tab.key] !== undefined && `(${tabCounts[tab.key]})`}
      </button>
    ))}
  </div>
)}







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

                     {/* <Button variant="primary" onClick={handelLink}>
                  اضافه عرض
                </Button> */}

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
                  //   overflowY: "auto",
                  // overflowX: "auto", 
                           
                  overflow: "scroll",
                   overflowX: "auto",
                  height: "88vh",
                  marginBottom: "60px",
                 
                  marginRight: "5px",
                  marginLeft: "5px",
                  marginTop: "0px",
                 
                  backgroundColor: darkSide ? "" : "#2c375b",

                  display: "flex",

                  flexDirection: "column",
                  /* BORDER-RADIUS: 50PX; */
                  borderRadius: "20px",
                }}
              >
                {/* <table style={{ direction: "rtl" , height:"200%"  }}> */}


































{viewMode === "table" ? (
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
                    <tr style={{ verticalAlign: "middle" , position: "sticky",
top: "0",
zIndex: "10"  }}>
                      {/* <th scope="col" style={{ width: "32px", height: "50px" }}>
                        م
                      </th> */}
                      <th scope="col" style={{ width: "32px", height: "50px" }}>
                        رقم
                      </th>
                      <th scope="col" style={{ width: "140px" }} className={classNames.name}>
                        اسم الموظف
                      </th>
                      <th
                     className={classNames.data}
                        scope="col"
                        style={{ width: "120px", textAlign: "center" }}
                      >
                        تاريخ الاضافه
                      </th>

                      {/* <th
                        scope="col"
                        style={{ width: "120px", textAlign: "center" }}
                      >
                         عن طريق
                      </th>
                       */}
                      <th scope="col">نوع العقار</th>
                      <th scope="col"> قسم العقار</th>

                      <th scope="col">فئة العقار</th>
                      <th scope="col"> مكان الوحدة</th>
                      <th scope="col"> المساحه</th>
                       <th scope="col" style={{    minWidth: "150px"}}> تفاصيل العقار</th>
                       <th scope="col"> مميزات العقار</th>
                       <th scope="col"> الشوارع </th>
                      <th scope="col" style={{ textAlign: "center" }}>
                        السعر
                      </th>
                      <th scope="col" style={{ width: "140px" }} className={classNames.region}>
                       المنطقه
                      </th>
                      <th scope="col" style={{ textAlign: "center" }} >
                        {" "}
                        المدينه - الحي
                      </th>

                      {/* <th scope="col" style={{ textAlign: "center" }} className={classNames.image}>واجهة </th> */}
                      <th scope="col" style={{ textAlign: "center" }} className={`image ${classNames.image}`}>
                      واجهة العقار
                       </th>

                      <th scope="col" style={{ textAlign: "center" }}  className={classNames.location +" " +"is-link is-link-location"}>
                      الموقع
                      </th>
                      <th scope="col" style={{ textAlign: "center" }}
                      
                      className={classNames.link +" " +"is-link"}
                      >
                        {" "}
                        اللينك
                      </th>
                      <th className= {classNames.comments } scope="col" style={{ textAlign: "center" }}>
                        {" "}
                        الملاحظات
                      </th>

                      <th
                        scope="col"
                        style={{ width: "120px", textAlign: "center" }}
                        className="no-export"
                      >
                        التعديل
                      </th>
                      <th scope="col" className="no-export">الحذف</th>
                    </tr>
                  </thead>
                  
                              <tbody
                    className={tableDark}
                    style={{ color: darkSide ? "black" : "white" }}
                  >
     {
     
    //  records.length == 0 ?(
    //           <tr style={{  }}>
    //                   <td colSpan={15} style={{ textAlign: "center" }}  className="no-export">
    //                     لا يوجد اتصال بقواعد البيانات
    //                   </td>
    //                 </tr>
    //  ):(
    //   <>

    //   </>
    //  )

             
     }

 {/* {filteredRecords.length === 0 ? ( */}

   {records.length === 0 ? (
            <tr className="no-export">
              <td colSpan={20} style={{ textAlign: 'center' }} >
                لا يوجد اتصال بقاعدة البيانات
              </td>
            </tr>
          ) : (
            // filteredRecords.map((offer, i) => (
                records.map((offer, i) => (
                      
                          <tr className="align-middle" key={i}>
                            {/* <th scope="row">{i + 1}</th> */}

                            {/* <td style={{ width: "32px" }}>{i + 1}</td> */}
                            <td style={{ width: "32px" }}>{offer.id} </td>
                            <td style={{ width: "140px" }}>
                              {offer.selectedName}{" "}
                            </td>
                            {/* <td style={{ width: "120px" }}>{offer.phone} </td> */}


                            <td style={{ width: "120px" }}>{
                            

                            //  offer.dateAdd.replace('T', ' ').replace('.000Z', '')
                             
                               offer.dateAdd
                                     ? moment(offer.dateAdd).locale('en').format('DD/MM/YYYY HH:mm')
                                   
                                        : '—'
                             } 
                             
                             </td>

                            <td style={{ textAlign: "center" }}>
                              {offer.aqarConnected}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {offer.aqarType}
                            </td>

                            <td style={{ textAlign: "center" }}>
                              {offer.aqarStairs}{" "}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {offer.aqarFloor}{" "}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {offer.area}{" "}
                            </td>


                         <td style={{ textAlign: "center", whiteSpace: "pre-line" }}>
 {offer.roomsCountMastar != 0 && offer.roomsCountMastar !== "" && "عدد الغرف الماستر: " + offer.roomsCountMastar + "\n"}
  {offer.roomsCount != 0 && offer.roomsCount !== "" && "عدد الغرف: " + offer.roomsCount + "\n"}

  {offer.bathroomsCount != 0 && offer.bathroomsCount !== "" && "عدد دورات المياه: " + offer.bathroomsCount + "\n"}
  {offer.majlesCount != 0 && offer.majlesCount !== "" && "عدد المجالس: " + offer.majlesCount + "\n"}
  {offer.hallsCount != 0 && offer.hallsCount !== "" && "عدد الصالات: " + offer.hallsCount + "\n"}
   {offer.maqlatCount != 0 && offer.maqlatCount !== "" && "عدد المقلط: " + offer.maqlatCount + "\n"}
  {offer.kitchenCount != 0 && offer.kitchenCount !== "" && "عدد المطابخ: " + offer.kitchenCount }

</td>


                            <td style={{ textAlign: "center"  , whiteSpace: "pre-line"}}>
  {offer.featureCarEntrance !== "0" && offer.featureCarEntrance !== 0 && offer.featureCarEntrance !== "" && "مدخل سيارة\n"}
  {offer.featureYard !== "0" && offer.featureYard !== 0 && offer.featureYard !== "" && "حوش سيارات\n"}
  {offer.featureStorage !== "0" && offer.featureStorage !== 0 && offer.featureStorage !== "" && "غرفة تخزين\n"}
  {offer.featureAnnex !== "0" && offer.featureAnnex !== 0 && offer.featureAnnex !== "" && "ملحق\n"}
    {offer.featureElevator !== "0" && offer.featureElevator !== 0 && offer.featureElevator !== "" && "مصعد\n"}
      {offer.featureElevatorT !== "0" && offer.featureElevatorT !== 0 && offer.featureElevatorT !== "" && "تاسيس مصعد\n"}

   {offer.featureRoof !== "0" && offer.featureRoof !== 0 && offer.featureRoof !== "" && "سطح\n"}
      {offer.featureNearServices !== "0" && offer.featureNearServices !== 0 && offer.featureNearServices !== "" && "قريب من الخدمات\n"}
         {offer.featureLaundryRoom !== "0" && offer.featureLaundryRoom !== 0 && offer.featureLaundryRoom !== "" && "غرفة غسيل\n"}
            {offer.featureBalcony !== "0" && offer.featureBalcony !== 0 && offer.featureBalcony !== "" && "بلكونه\n"}
               {offer.featureParking !== "0" && offer.featureParking !== 0 && offer.featureParking !== "" && "موقف سيارات\n"}


  {offer.featureMaid !== "0" && offer.featureMaid !== 0 && offer.featureMaid !== "" && "غرفة خادمة\n"}
  {offer.featureGuard !== "0" && offer.featureGuard !== 0 && offer.featureGuard !== "" && "غرفة حارس\n"}
  {offer.featureDriver !== "0" && offer.featureDriver !== 0 && offer.featureDriver !== "" && "غرفة سائق"}
                            </td>



                            <td style={{ textAlign: "center" , whiteSpace: "pre-line" }}>
                               
                                { " الشوارع: " + offer.streetsWidth }
                            </td>












                            
                            <td style={{ textAlign: "center" }}>
                              {/* {offer.price} */}
                             
                             {Number(offer.price).toLocaleString('en-US')}
                            </td>

                            <td style={{ textAlign: "center" }}>
                              {offer.selectedRegion }
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {offer.selectedCity +
                                "- " +
                                offer.selectedDistricts}
                            </td>


<td style={{ textAlign: "center" }} className={`image ${classNames.image}`}>
  {offer.image ? (
    <img
      src={offer.image}
      alt="واجهة العقار"
      onClick={() => handleImageClick(offer.image)}
      style={{
        width: "50px",
        height: "50px",
        objectFit: "cover",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "transform 0.3s, box-shadow 0.3s",
        boxShadow: "0 0 2px rgba(0,0,0,0.2)",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 0 2px rgba(0,0,0,0.2)";
      }}
      title="اضغط لعرض الصورة"
    />
  ) : (
    <span style={{ color: "#999", fontSize: "12px" }}>لا توجد صورة</span>
  )}
</td>







              <td  className={classNames.location +" " +"is-link is-link-location"} style={{ textAlign: "center" }}>
                {offer.userAddData == idUser ?(

                <a href={"https://www.google.com/maps/place/"+ offer.locationCoordinates} target="_blank" style={{ color: "blue" }}>
                  الموقع
                </a>

                ):(
  <span
    title="ليس لديك صلاحية الموقع"
    style={{
      color: "gray",
      fontSize: "16px",
      marginLeft: "10px",
      cursor: "not-allowed",
    }}
  >
    <FontAwesomeIcon icon={faLock}  style={{    fontSize: "19px"}} />
  </span>

                )}

              </td>

   




{/*                             
                            <td style={{ textAlign: "center" }}>

              <button className="btn-show" style={{border:"none"}}>


                <a
                  href={offer.link}
                  alt="pdf"
                  title=" لينك"
                  target="_blank"
                  style={{ padding: "5px" , color:"blue" }}
                >
         
                    <span style={{}}>
                      لينك العرض
                    </span>
                
                </a>
              </button>


                                
                           
                            </td> */}

                            {/* <td className="is-link" style={{ textAlign: "center" }}>
                <a
                  href={offer.link}
                  target="_blank"
                  style={{ color: "blue" }}
                >
                 
                </a>
              </td> */}


              <td  className={classNames.link +" " +"is-link"} style={{ textAlign: "center" }}>
                {/* لن يتم أخذ هذا النص في PDF */}
                <a href={offer.link} target="_blank" style={{ color: "blue" }}>
                  لينك العرض
                </a>
              </td>
  {/* <td  scope="row" style={{ textAlign: "center",
    whiteSpace: "nowrap",
  maxWidth:" 100px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    cursor: "pointer",
   }}>


    
                              {offer.comments}
 </td> */}

 <td 
 className={classNames.comments }
 style={{
      // textAlign: "center",
      textAlign:"right",
      whiteSpace: showFullText ? "normal" : "nowrap",
      // maxWidth: "200px",
       minWidth: "180px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      cursor: "pointer",
      paddingRight:"15px"
      
    }}>
      {showFullText ? offer.comments : offer.comments.slice(0, 22) + "... "}
      <span  className="no-export hide-o"
        onClick={toggleText}
        style={{ color: "blue", textDecoration: "underline" , fontWeight: "bold",
    marginRight:" 7px" }}
      >

        {showFullText ? "إخفاء" : "المزيد"}

      </span>
    </td>

<td style={{ textAlign: "center" }}>

<div class="hover-container">
  <p class="hover-target" tabindex="0" style={{    margin: "auto" , padding:"3px 7px 3px 0"}}>


  {/* <button
  disabled={offer.userAddData!=idUser}
                                  onClick={() => handleEdit(offer.id)}
                                  className="btn  btn-danger-alaa-edit"
                                  style={{
                                    fontSize: "13px",
                                    border: "1px solid green",
                                  }}
                                  // title={user.currentYear + "الدعم السكني"}
                                  title={"  تعديل العرض"}
                                >
                                  <FontAwesomeIcon
                                    icon={faPenToSquare}
                                    style={{
                                      color: darkSide ? "green" : "#00ff31",
                                      cursor: "pointer",
                                    }}
                                    className="edit-icon"
                                  />
                                 

                                   
                                  
                                </button> */}



  {offer.userAddData == idUser ? (
  <button
    onClick={(e) => handleEdit(offer.id,e)     }
    // className="btn btn-danger-alaa-edit"
    className="btn btn-success"
    style={{
      fontSize: "13px",
      border: "1px solid green",
    }}
    title="تعديل العرض"
  >
    <FontAwesomeIcon
      icon={faPenToSquare}
      style={{
        // color: darkSide ? "green" : "#00ff31",
        cursor: "pointer",
      }}
      className="edit-icon"
    />
  </button>
) : (
  <span
    title="ليس لديك صلاحية التعديل"
    style={{
      color: "gray",
      fontSize: "16px",
      marginLeft: "10px",
      cursor: "not-allowed",
    }}
  >
    <FontAwesomeIcon icon={faLock}  style={{    fontSize: "19px"}} />
  </span>
)}

  </p>

</div>


</td>








{/* 
                            <td style={{ width: "120px" }}>
                              <div className="parent-element">
                                <button
                                  onClick={() => handleEdit(user.id)}
                                  className="btn  btn-danger-alaa-edit"
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
                                      color: darkSide ? "green" : "#00ff31",
                                      cursor: "pointer",
                                    }}
                                    className="edit-icon"
                                  />
                                  <div
                                    className="hidden-element"
                                    style={{
                                      backgroundColor: darkSide
                                        ? "rgb(255 255 255)"
                                        : "black",
                                      color: darkSide ? "black" : "white",
                                    }}
                                  >
                                    <div className="arrow"></div>

                                    {user.newPersonalFinance ===
                                    "noNewPrsonal" ? (
                                      <p> شخصي جديد : لا</p>
                                    ) : (
                                      <p> شخصي جديد : نعم </p>
                                    )}

                                    <p>
                                      <mark style={{ padding: "2px" }}>
                                        الالتزامات
                                      </mark>
                                    </p>
                                    <p>
                                      {" "}
                                      {"القسط الاول : " +
                                        user.installment1 +
                                        " لمدة :" +
                                        user.duration1}
                                    </p>
                                    <p>
                                      {" "}
                                      {"القسط الثاني : " +
                                        user.installment2 +
                                        " لمدة :" +
                                        user.duration2}
                                    </p>
                                    <p>
                                      {" "}
                                      {"القسط الثالث : " +
                                        user.installment3 +
                                        " لمدة :" +
                                        user.duration3}
                                    </p>
                                    <p>
                                      {" "}
                                      {"القسط الرابع : " +
                                        user.installment4 +
                                        " لمدة :" +
                                        user.duration4}
                                    </p>
                                    <p> {"مدة الاشترك : " + user.durationIn}</p>

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

                                
                                  </div>
                                </button>
                              </div>
                            </td> */}

                            <td>
{/* 

                            <Button variant="primary" onClick={handleShow} 
                                                            className="btn btn-danger btn-danger-alaa"
                                                            style={{ fontSize: "13px" }}
                                                          >
                                                            <FontAwesomeIcon
                                                              icon={faTrash}
                                                              className="delete-icon"
                                                            />
                            
                            

      </Button>

      
      <Modal
        show={showDelete}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        className={darkSide?"":"dark-lib"}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color:darkSide? "black" : "white"}}>حذف </Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{ color:darkSide? "black" : "white"}}>
    هل تريد بالفعل حذف العميل
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            لا
          </Button>
          <Button variant="primary" onClick={() => handleDelete(user.id)}>نعم</Button>
        </Modal.Footer>
      </Modal> */}







                               {/* <button
                                disabled={offer.userAddData!=idUser}
                                onClick={() => handleDelete(offer.id)}
                                className="btn btn-danger btn-danger-alaa"
                                style={{ fontSize: "13px" }}
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  className="delete-icon"
                                />
                              </button>  */}


    {offer.userAddData == idUser ? (
  <button
    onClick={(e) => handleDelete(offer.id,e)}
    // className="btn btn-danger btn-danger-alaa"
    className="btn btn-danger"
    style={{ fontSize: "13px" }}
    title={"حذف العرض"}
  >
    <FontAwesomeIcon icon={faTrash} className="delete-icon" />
  </button>
) : (
  <span
    title="ليس لديك صلاحية الحذف"
    style={{
      color: "gray",
      fontSize: "16px",
      marginLeft: "10px",
      cursor: "not-allowed",
       padding:"3px 7px 3px 0"
    }}
  >
    <FontAwesomeIcon icon={faLock}   style={{    fontSize: "19px"}}/>
  </span>
)}




                            </td>
                          </tr>
                      ))
          )}
                     


{/* ملغي */}




                    {/* <nav style={  { position:"fixed" ,bottom: "40px",right: "20%"}}>< */}

                    {/* <li 
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                    
                  >
                    <a
                      href="/alaa/#/clients"
                      className="page-link"
                      tabindex={currentPage === 1 ? "-1" : ""}
                      aria-disabled={currentPage === 1 ? "true" : "false"}
                      style={{ marginRight: "6px" }}
                      onClick={pageFirst}
                    >
                      <FontAwesomeIcon icon={faForward} />
                    </a>
                  </li> */}

                    {/* 
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <a
                      href="/alaa/#/clients"
                      className="page-link"
                      tabindex={currentPage === 1 ? "-1" : ""}
                      aria-disabled={currentPage === 1 ? "true" : "false"}
                      onClick={prePage}
                    >
                      <FontAwesomeIcon icon={faCaretRight} />
                    </a>
                  </li>

                 
                 
                  {pages.map((n, i) => (
                 
                    <li
                      className={`page-item ${
                        currentPage === n ? "active" : ""
                      }`}
                      key={i}
                    >
                      <a
                        href="/alaa/#/clients"
                        className="page-link"
                        onClick={() => changeCpage(n)}
                      >
                        {n}
                      </a>
                      
            
                    </li>
                  ))}

                
                  



                  <li
                    className={`page-item ${
                      currentPage === nPage ? "disabled" : ""
                    }`}
                  >
                    <a
                      href="/alaa/#/clients"
                      className="page-link"
                      tabindex={currentPage === nPage ? "-1" : ""}
                      aria-disabled={currentPage === nPage ? "true" : "false"}
                      onClick={nextPage}
                    >
                      <FontAwesomeIcon icon={faCaretLeft} />
                    </a>
                  </li> */}

                    {/* <li
                    className={`page-item ${
                      currentPage === nPage ? "disabled" : ""
                    }`}
                  >
                    <a
                      href="/alaa/#/clients"
                      className="page-link"
                      tabindex={currentPage === nPage ? "-1" : ""}
                      aria-disabled={currentPage === nPage ? "true" : "false"}
                      onClick={pageLast}
                    >
                      <FontAwesomeIcon icon={faBackward} />
                    </a>
                  </li> */}




                  </tbody>
                </table>




) : (


//   <div className="cards-grid" ref={cardRef}>
  
//     {records.length === 0 ? (


//       <div className="no-data">لا يوجد اتصال بقاعدة البيانات</div>
//     ) : (
      
//           records.map((offer, i) => (
       

      
  


//             <div key={i} className={`card-offer ${!darkSide ? "card-dark" : "card-light"}`}>





//           {/* ✅ الشريط العلوي */}
//           <div className="card-header-bar" style={{backgroundColor: !darkSide ? "#fff":""}}>
//             <span className="card-id">
//               <FontAwesomeIcon icon={faHashtag} /> {offer.id}
//             </span>
//             <span className="card-price">
//               {/* <FontAwesomeIcon icon={faDollarSign} /> */}
//                <em>{Number(offer.price).toLocaleString("en-US")} ريال</em>
//             </span>
//             <span 
    



//   className={`card-type ${
//     offer.aqarType === "شقه" ? "type-flat" :
//     offer.aqarType === "فيلا" ? "type-villa" :
//     offer.aqarType === "دور" ? "type-floor" :
//     offer.aqarType === "دور مع ملحق" ? "type-floor-annex" :
//     offer.aqarType === "شقه روف" ? "type-roof-flat" :
//     offer.aqarType === "فيلا روف" ? "type-roof-villa" :
//     offer.aqarType === "فيلا تاون هاوس" ? "type-townhouse" :
//     "type-other"
//   }`}
            
            
//             >


//               <FontAwesomeIcon icon={
//     offer.aqarType === "شقه" ? faBuilding :
//     offer.aqarType === "فيلا" ? faHome :
//     offer.aqarType === "دور" ? faWarehouse :
//     offer.aqarType === "دور مع ملحق" ? faHouseChimney :
//     offer.aqarType === "شقه روف" ? faHotel :
//     offer.aqarType === "فيلا روف" ? faHouseUser :
//     offer.aqarType === "فيلا تاون هاوس" ? faCity :
//     faBuilding
//   } />



//               {offer.aqarType}
//             </span>
//           </div>

  

// <div className="card-header-img" style={{ position: "relative"   }}>
//   {/* ✅ شارة حالة العقار فوق الصورة */}
//   {offer.aqarState && (
//     <div className={`card-state-badge ${
//       offer.aqarState === "غير مكرر"
//         ? "card-state-available"
//         : offer.aqarState === "مكرر الاعلان" || offer.aqarState === "مكرر مع الزملاء"
//         ? "card-state-duplicate"
//         : offer.aqarState === "محجوز" 
//         ? "card-state-reserved"
//         : offer.aqarState === "مباع"
//         ? "card-state-sold"
//         : "card-state-available"
//     }`}>
//       {offer.aqarState === "غير مكرر"
//         ? "متاح"
//         : offer.aqarState === "مكرر الاعلان" || offer.aqarState === "مكرر مع الزملاء"
//         ? "مكرر"
//         : offer.aqarState === "محجوز"
//         ? "محجوز"
//         : offer.aqarState === "مباع"
//         ? "مباع"
//         : "متاح"}
//     </div>
//   )}

//   <img
//     src={offer.image || aqar}
//     alt="صورة العرض"
//     crossOrigin="anonymous"
//     className="card-img-top"
//     style={{ 
      
      
//       // marginTop: "4px", 
//       borderRadius: "15px 15px 0px 0px" }}
//   />
// </div>





    


//           <div style={{marginTop:"16px"}} className={`card-row ${classNames.name}`}><FontAwesomeIcon icon={faUser} /> <strong>اسم الموظف:</strong> {offer.selectedName}</div>
//           <div className={`card-row ${classNames.data}`}><FontAwesomeIcon icon={faCalendarAlt} /> <strong>تاريخ الإضافة:</strong> {offer.dateAdd ? moment(offer.dateAdd).locale('en').format('DD/MM/YYYY HH:mm') : '—'}</div>
//           <div className="card-row"><FontAwesomeIcon icon={faHome} /> <strong>نوع العقار:</strong> {offer.aqarConnected}</div>
//           <div className="card-row"><FontAwesomeIcon icon={faLayerGroup} /> <strong>فئة العقار:</strong> {offer.aqarStairs}</div>
//           <div className="card-row"><FontAwesomeIcon icon={faStairs} /> <strong>مكان الوحدة:</strong> {offer.aqarFloor}</div>
//           <div className="card-row"><FontAwesomeIcon icon={faRulerCombined} /> <strong>المساحة:</strong> {offer.area}</div>

// <div className="card-details" style={{ whiteSpace: "pre-line" }}>

//   {offer.roomsCount != 0 && offer.roomsCount !== "" && (
//     <div className="card-row"><FontAwesomeIcon icon={faBed} /> <strong>عدد الغرف:</strong> {offer.roomsCount}</div>
//   )}
//   {offer.bathroomsCount != 0 && offer.bathroomsCount !== "" && (
//     <div className="card-row"><FontAwesomeIcon icon={faBath} /> <strong>دورات المياه:</strong> {offer.bathroomsCount}</div>
//   )}
//   {offer.majlesCount != 0 && offer.majlesCount !== "" && (
//     <div className="card-row"><FontAwesomeIcon icon={faCouch} /> <strong>عدد المجالس:</strong> {offer.majlesCount}</div>
//   )}
//   {offer.hallsCount != 0 && offer.hallsCount !== "" && (
//     <div className="card-row"><FontAwesomeIcon icon={faDoorOpen} /> <strong>عدد الصالات:</strong> {offer.hallsCount}</div>
//   )}


//     {offer.maqlatCount != 0 && offer.maqlatCount !== "" && (
//     <div className="card-row"><FontAwesomeIcon icon={faUsers} /> <strong>عدد المقلط:</strong> {offer.maqlatCount}</div>
//   )}



//   {offer.kitchenCount != 0 && offer.kitchenCount !== "" && (
//     <div className="card-row"><FontAwesomeIcon icon={faUtensils} /> <strong>عدد المطابخ:</strong> {offer.kitchenCount}</div>
//   )}
//   {offer.aqarFacade && offer.aqarFacade !== "0" && (
//     <div className="card-row"><FontAwesomeIcon icon={faBuilding} /> <strong>الواجهة:</strong> {offer.aqarFacade}</div>
//   )}
//   {offer.streetsWidth != 0 && offer.streetsWidth !== "" && (
//     <div className="card-row"><FontAwesomeIcon icon={faRoad} /> <strong>عرض الشارع:</strong> {offer.streetsWidth} م</div>
//   )}

//   {/* الميزات */}
//   {offer.featureCarEntrance !== "0" && offer.featureCarEntrance !== 0 && offer.featureCarEntrance !== "" && (
//     <div className="card-row"><FontAwesomeIcon icon={faCar} /> <strong>مدخل سيارة</strong></div>
//   )}
//   {offer.featureYard !== "0" && offer.featureYard !== 0 && offer.featureYard !== "" && (
//     <div className="card-row"><FontAwesomeIcon icon={faTree} /> <strong>حوش</strong></div>
//   )}
//   {offer.featureStorage !== "0" && offer.featureStorage !== 0 && offer.featureStorage !== "" && (
//     <div className="card-row"><FontAwesomeIcon icon={faBoxes} /> <strong>مستودع</strong></div>
//   )}






//  {offer.featureRoof !== "0" && offer.featureRoof !== 0 && offer.featureRoof !== "" && (
//     <div className="card-row"><FontAwesomeIcon icon={faStairs} /> <strong>سطح</strong></div>
//   )}

//  {offer.featureNearServices !== "0" && offer.featureNearServices !== 0 && offer.featureNearServices !== "" && (
//     <div className="card-row"><FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>قريب من الخدمات</strong></div>
//   )}

//  {offer.featureLaundryRoom !== "0" && offer.featureLaundryRoom !== 0 && offer.featureLaundryRoom !== "" && (
//     <div className="card-row"><FontAwesomeIcon icon={faHandsWash} /> <strong>غرفة غسيل</strong></div>
//   )}


//  {offer.featureBalcony !== "0" && offer.featureBalcony !== 0 && offer.featureBalcony !== "" && (
//     <div className="card-row"><FontAwesomeIcon icon={faSolarPanel} /> <strong>بلكونه</strong></div>
//   )}


//  {offer.featureParking !== "0" && offer.featureParking !== 0 && offer.featureParking !== "" && (
//     <div className="card-row"><FontAwesomeIcon icon={faCar} /> <strong>موقف سيارات</strong></div>
//   )}




//   {offer.featureElevator !== "0" && offer.featureElevator !== 0 && offer.featureElevator !== "" && (
//     <div className="card-row"><FontAwesomeIcon icon={faElevator} /> <strong>مصعد</strong></div>
//   )}






//     {offer.featureElevatorT !== "0" && offer.featureElevatorT !== 0 && offer.featureElevatorT !== "" && (
//     <div className="card-row"><FontAwesomeIcon icon={faElevator} /> <strong>تاسيس مصعد</strong></div>
//   )}

//   {offer.featureAnnex !== "0" && offer.featureAnnex !== 0 && offer.featureAnnex !== "" && (
//     <div className="card-row"><FontAwesomeIcon icon={faHome} /> <strong>ملحق</strong></div>
//   )}
//   {offer.featureMaid !== "0" && offer.featureMaid !== 0 && offer.featureMaid !== "" && (
//     <div className="card-row"><FontAwesomeIcon icon={faUserNurse} /> <strong>غرفة خادمة</strong></div>
//   )}
//   {offer.featureGuard !== "0" && offer.featureGuard !== 0 && offer.featureGuard !== "" && (
//     <div className="card-row"><FontAwesomeIcon icon={faUserShield} /> <strong>غرفة حارس</strong></div>
//   )}
//   {offer.featureDriver !== "0" && offer.featureDriver !== 0 && offer.featureDriver !== "" && (
//     <div className="card-row"><FontAwesomeIcon icon={faUserTie} /> <strong>غرفة سائق</strong></div>
//   )}
// </div>



          
//           <div className={`card-row ${classNames.region}`}><FontAwesomeIcon icon={faMapMarkedAlt} /> <strong>المنطقة:</strong> {offer.selectedRegion}</div>
//           <div className="card-row"><FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>المدينة - الحي:</strong> {offer.selectedCity + " - " + offer.selectedDistricts}</div>
          
//           <div className={`card-row ${classNames.location}`}><FontAwesomeIcon icon={faMapLocationDot} /> <strong>الموقع:</strong>
//           { offer.userAddData == idUser ? (


//             <a href={`https://www.google.com/maps/place/${offer.locationCoordinates}`} target="_blank" rel="noreferrer" style={{ color: "#007bff" }}>
//               عرض على الخريطة
//             </a>
//           ):(

//        <span
//     title="ليس لديك صلاحية الموقع"
//     style={{
//       color: "gray",
//       fontSize: "16px",
//       marginLeft: "10px",
//       cursor: "not-allowed",
//     }}
//   >
//     <FontAwesomeIcon icon={faLock}  style={{    fontSize: "19px"}} />
//   </span>

//           )}

//           </div>
//           <div className={`card-row ${classNames.link}`}><FontAwesomeIcon icon={faLink} /> <strong>لينك العرض:</strong>
//             <a href={offer.link} target="_blank" rel="noreferrer" style={{ color: "#007bff" }}>
//               {offer.link}
//             </a>
//           </div>
//           <div className={`card-row ${classNames.comments}`}>
//             <FontAwesomeIcon icon={faStickyNote} /> <strong>الملاحظات:</strong> {showFullText ? offer.comments : offer.comments.slice(0, 22) + "... "}
//             <span
//               className="card-toggle no-export hide-o"
//               onClick={toggleText}
//             >
//               {showFullText ? "إخفاء" : "المزيد"}
//             </span>
//           </div>

//           <div className="card-actions no-export" >
//             {offer.userAddData == idUser ? (
//               <>
//                 <button onClick={() => handleEdit(offer.id)} className="btn btn-success">
//                   <FontAwesomeIcon icon={faPenToSquare} style={{ color: darkSide ? "green" : "#00ff31", cursor: "pointer" }} className="edit-icon" />
//                 </button>
//                 <button onClick={() => handleDelete(offer.id)} className="btn btn-danger">
//                   <FontAwesomeIcon icon={faTrash} className="delete-icon" />
//                 </button>
//               </>
//             ) : (
//               <span className={darkSide?"text-muted ":"  text-muted text-muted-light"}>ليس لديك صلاحية التعديل أو الحذف</span>
//             )}
//           </div>
//         </div>








//       ))
//     )}
//   </div>



<div className="cards-grid" ref={cardRef}>
  {records.length === 0 ? (
    <div className="no-data" style={{marginTop:"25px", textAlign:"center"}}>لا يوجد اتصال بقاعدة البيانات</div>
  ) : (
    chunkArray(records, 2).map((chunk, rowIndex) => (

      <div className="pdf-row" key={rowIndex}>
        {chunk.map((offer, i) =>
        ( 
          <div key={i} className={`card-offer ${!darkSide ? "card-dark" : "card-light"}` }
  
           onClick={() => navigate(`/offers/${offer.id}`)} // ← استخدم react-router-dom
           style={heightCard}
          >
          <img
          src={im}
          alt="علامة مائية"
          
           className={ darkSide ? "card-watermark" : "card-watermark dark-logo-offers" } 
           style={{marginTop:showPart=="part"?"80px":""}}
        />
      <div className="card-header-bar" style={{backgroundColor: !darkSide ? "#fff":"" }}>
            <span className="card-id">
              <FontAwesomeIcon icon={faHashtag} /> {offer.id}
            </span>
            <span className="card-price">
              {/* <FontAwesomeIcon icon={faDollarSign} /> */}
               <em>{Number(offer.price).toLocaleString("en-US")} ريال</em>
            </span>
            <span 
    



  className={`card-type ${
    offer.aqarType === "شقه" ? "type-flat" :
    offer.aqarType === "فيلا" ? "type-villa" :
    offer.aqarType === "دور" ? "type-floor" :
    offer.aqarType === "دور مع ملحق" ? "type-floor-annex" :
    offer.aqarType === "شقه روف" ? "type-roof-flat" :
    offer.aqarType === "فيلا روف" ? "type-roof-villa" :
    offer.aqarType === "فيلا تاون هاوس" ? "type-townhouse" :
    "type-other"
  }`}
            
            
            >


<FontAwesomeIcon icon={
    offer.aqarType === "شقه" ? faBuilding :
    offer.aqarType === "فيلا" ? faHome :
    offer.aqarType === "دور" ? faWarehouse :
    offer.aqarType === "دور مع ملحق" ? faHouseChimney :
    offer.aqarType === "شقه روف" ? faHotel :
    offer.aqarType === "فيلا روف" ? faHouseUser :
    offer.aqarType === "فيلا تاون هاوس" ? faCity :
    faBuilding
  } />



              {offer.aqarType}
            </span>
          </div>


  

<div className="card-header-img" style={{ position: "relative"   }}

     onClick={(e) => {
        e.stopPropagation(); // منع فتح الكارد
 
      }}

>

  {offer.aqarState && (
    <div className={`card-state-badge ${
      offer.aqarState === "غير مكرر"
        ? "card-state-available"
        : offer.aqarState === "مكرر الاعلان" || offer.aqarState === "مكرر مع الزملاء"
        ? "card-state-duplicate"
        : offer.aqarState === "محجوز" 
        ? "card-state-reserved"
        : offer.aqarState === "مباع"
        ? "card-state-sold"
        : "card-state-available"
    }`}>
      {offer.aqarState === "غير مكرر"
        ? "متاح"
        : offer.aqarState === "مكرر الاعلان" || offer.aqarState === "مكرر مع الزملاء"
        ? "مكرر"
        : offer.aqarState === "محجوز"
        ? "محجوز"
        : offer.aqarState === "مباع"
        ? "مباع"
        : "متاح"}
    </div>
  )}



{imageAtPrint?(

 <img
    src={offer.image || aqar}
    alt="صورة العرض"
    crossOrigin="anonymous"
    className="card-img-top"
    style={{ 
      
     
      // marginTop: "4px", 
      borderRadius: "15px 15px 0px 0px" }}
  /> 


):(





<Swiper
  modules={[Navigation, SwiperPagination]}
  spaceBetween={10}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  style={{ borderRadius: "15px 15px 0px 0px", width: "100%" }}
>
  {(() => {
    const images = [
      offer.image,
      offer.imageFacade,
      offer.imageBathroom,
      offer.imageKitchen,
      offer.imageRoom,
      offer.imageLiving,
    ].filter(Boolean);

    return images.length > 0 ? (
      images.map((img, idx) => (
        <SwiperSlide key={idx} style={{ width: "100%" }}>
          <img
            src={img}
            alt={`صورة ${idx + 1}`}
            crossOrigin="anonymous"
            className={"card-img-top" + (idx !== 0 ? " no-print no-export" : "")}
            style={{
              width: "100%",
              height: "200px", // ✅ ارتفاع موحد
              objectFit: "cover", // ✅ بدون فراغات
              // objectFit:"fill",
              // borderRadius: "20px",
              border: "2px solid gray",
            }}
          />
        </SwiperSlide>
      ))
    ) : (
      <SwiperSlide>
        <img
          src={offer.image || aqar}
          alt="صورة العرض"
          crossOrigin="anonymous"
          className="card-img-top"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            // borderRadius: "20px",
            border: "2px solid black",
          }}
        />
      </SwiperSlide>
    );
  })()}
</Swiper>








)}

 







</div>



          <div style={{marginTop:"16px"}} className={`card-row ${classNames.name}`}><FontAwesomeIcon icon={faUser} /> <strong>اسم الموظف:</strong> {offer.selectedName}</div>
          <div className={`card-row ${classNames.data}`}><FontAwesomeIcon icon={faCalendarAlt} /> <strong>تاريخ الإضافة:</strong> {offer.dateAdd ? moment(offer.dateAdd).locale('en').format('DD/MM/YYYY HH:mm') : '—'}</div>
          <div className={`card-row ${classNames.region}`}><FontAwesomeIcon icon={faMapMarkedAlt} /> <strong>المنطقة:</strong> {offer.selectedRegion}</div>
          <div className="card-row"><FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>المدينة - الحي:</strong> {offer.selectedCity + " - " + offer.selectedDistricts}</div>
          <div className="card-row"><FontAwesomeIcon icon={faHome} /> <strong>نوع العقار:</strong> {offer.aqarConnected}</div>
          <div className="card-row"><FontAwesomeIcon icon={faLayerGroup} /> <strong>فئة العقار:</strong> {offer.aqarStairs}</div>
          <div className="card-row"><FontAwesomeIcon icon={faStairs} /> <strong>مكان الوحدة:</strong> {offer.aqarFloor}</div>
          <div className="card-row"><FontAwesomeIcon icon={faRulerCombined} /> <strong>المساحة:</strong> {offer.area}</div>

<div className="card-details" style={{ whiteSpace: "pre-line" }}>

 {offer.roomsCountMastar != 0 && offer.roomsCountMastar !== "" && (
    <div className="card-row"><FontAwesomeIcon icon={faBed} /> <strong>عدد الغرف الماستر:</strong> {offer.roomsCountMastar}</div>
  )}



  {offer.roomsCount != 0 && offer.roomsCount !== "" && (
    <div className="card-row"><FontAwesomeIcon icon={faBed} /> <strong>عدد الغرف:</strong> {offer.roomsCount}</div>
  )}



  {offer.bathroomsCount != 0 && offer.bathroomsCount !== "" && (
    <div className="card-row"><FontAwesomeIcon icon={faBath} /> <strong>دورات المياه:</strong> {offer.bathroomsCount}</div>
  )}
  {offer.majlesCount != 0 && offer.majlesCount !== "" && (
    <div className="card-row"><FontAwesomeIcon icon={faCouch} /> <strong>عدد المجالس:</strong> {offer.majlesCount}</div>
  )}
  {offer.hallsCount != 0 && offer.hallsCount !== "" && (
    <div className="card-row"><FontAwesomeIcon icon={faDoorOpen} /> <strong>عدد الصالات:</strong> {offer.hallsCount}</div>
  )}


    {offer.maqlatCount != 0 && offer.maqlatCount !== "" && (
    <div className="card-row"><FontAwesomeIcon icon={faUsers} /> <strong>عدد المقلط:</strong> {offer.maqlatCount}</div>
  )}



  {offer.kitchenCount != 0 && offer.kitchenCount !== "" && (
    <div className="card-row"><FontAwesomeIcon icon={faUtensils} /> <strong>عدد المطابخ:</strong> {offer.kitchenCount}</div>
  )}
  {offer.aqarFacade && offer.aqarFacade !== "0" && (
    <div className="card-row"><FontAwesomeIcon icon={faBuilding} /> <strong>الواجهة:</strong> {offer.aqarFacade}</div>
  )}
  {offer.streetsWidth != 0 && offer.streetsWidth !== "" && (
    <div className="card-row"><FontAwesomeIcon icon={faRoad} /> <strong>عرض الشارع:</strong> {offer.streetsWidth} م</div>
  )}

  {/* الميزات */}

  {/* <div className="card-features-group"> */}
  {offer.featureCarEntrance !== "0" && offer.featureCarEntrance !== 0 && offer.featureCarEntrance !== "" && (
    <div className="card-row"><FontAwesomeIcon icon={faCar} /> <strong>مدخل سيارة</strong></div>
  )}
  {offer.featureYard !== "0" && offer.featureYard !== 0 && offer.featureYard !== "" && (
    <div className="card-row"><FontAwesomeIcon icon={faTree} /> <strong>حوش</strong></div>
  )}
  {offer.featureStorage !== "0" && offer.featureStorage !== 0 && offer.featureStorage !== "" && (
    <div className="card-row"><FontAwesomeIcon icon={faBoxes} /> <strong>مستودع</strong></div>
  )}






 {offer.featureRoof !== "0" && offer.featureRoof !== 0 && offer.featureRoof !== "" && (
    <div className="card-row"><FontAwesomeIcon icon={faStairs} /> <strong>سطح</strong></div>
  )}

 {offer.featureNearServices !== "0" && offer.featureNearServices !== 0 && offer.featureNearServices !== "" && (
    <div className="card-row"><FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>قريب من الخدمات</strong></div>
  )}

 {offer.featureLaundryRoom !== "0" && offer.featureLaundryRoom !== 0 && offer.featureLaundryRoom !== "" && (
    <div className="card-row"><FontAwesomeIcon icon={faHandsWash} /> <strong>غرفة غسيل</strong></div>
  )}


 {offer.featureBalcony !== "0" && offer.featureBalcony !== 0 && offer.featureBalcony !== "" && (
    <div className="card-row"><FontAwesomeIcon icon={faSolarPanel} /> <strong>بلكونه</strong></div>
  )}


 {offer.featureParking !== "0" && offer.featureParking !== 0 && offer.featureParking !== "" && (
    <div className="card-row"><FontAwesomeIcon icon={faCar} /> <strong>موقف سيارات</strong></div>
  )}




  {offer.featureElevator !== "0" && offer.featureElevator !== 0 && offer.featureElevator !== "" && (
    <div className="card-row"><FontAwesomeIcon icon={faElevator} /> <strong>مصعد</strong></div>
  )}






    {offer.featureElevatorT !== "0" && offer.featureElevatorT !== 0 && offer.featureElevatorT !== "" && (
    <div className="card-row"><FontAwesomeIcon icon={faElevator} /> <strong>تاسيس مصعد</strong></div>
  )}

  {offer.featureAnnex !== "0" && offer.featureAnnex !== 0 && offer.featureAnnex !== "" && (
    <div className="card-row"><FontAwesomeIcon icon={faHome} /> <strong>ملحق</strong></div>
  )}
  {offer.featureMaid !== "0" && offer.featureMaid !== 0 && offer.featureMaid !== "" && (
    <div className="card-row"><FontAwesomeIcon icon={faUserNurse} /> <strong>غرفة خادمة</strong></div>
  )}
  {offer.featureGuard !== "0" && offer.featureGuard !== 0 && offer.featureGuard !== "" && (
    <div className="card-row"><FontAwesomeIcon icon={faUserShield} /> <strong>غرفة حارس</strong></div>
  )}
  {offer.featureDriver !== "0" && offer.featureDriver !== 0 && offer.featureDriver !== "" && (
    <div className="card-row"><FontAwesomeIcon icon={faUserTie} /> <strong>غرفة سائق</strong></div>
  )}

{/* </div> */}



  
</div>



          
 
          
          <div className={`card-row ${classNames.location}`}><FontAwesomeIcon icon={faMapLocationDot} /> <strong>الموقع:</strong>
          { offer.userAddData == idUser ? (


            <a href={`https://www.google.com/maps/place/${offer.locationCoordinates}`} target="_blank" rel="noreferrer" style={{ color: "#007bff" }}>
              عرض على الخريطة
            </a>
          ):(

       <span
    title="ليس لديك صلاحية الموقع"
    style={{
      color: "gray",
      fontSize: "16px",
      marginLeft: "10px",
      cursor: "not-allowed",

    }}
  >
    <FontAwesomeIcon icon={faLock}  style={{    fontSize: "19px"}} />
  </span>

          )}

          </div>
          <div className={`card-row ${classNames.link}`}><FontAwesomeIcon icon={faLink} /> <strong>لينك العرض:</strong>
            <a href={offer.link} target="_blank" rel="noreferrer" style={{ color: "#007bff" }}>
              {offer.link}
            </a>


          </div>


      
      <div className={`card-row ${classNames.link}`}><FontAwesomeIcon icon={faLink} /> <strong> مشاركه :</strong>
        {/* <a
  href={`${window.location.origin}/alaa/#/offers/${offer.id}`}
  target="_blank"
  rel="noreferrer"
  style={{ color: "#007bff" }}
> 
  رابط العرض
</a>

<button
  onClick={() =>
    navigator.clipboard.writeText(`${window.location.origin}/offers/${offer.id}`)
  }
  style={{
    marginLeft: "10px",
    background: "transparent",
    border: "none",
    color: "#007bff",
    cursor: "pointer",
  }}
>
  نسخ الرابط
</button> */}



        <a
          href={`${window.location.origin}/alaa/#/offers/${offer.id}`}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#007bff", marginRight: "8px" }}
          onClick={(e) => e.stopPropagation()} // منع فتح الكارد عند الضغط على الرابط
        >
          رابط العرض
        </a>

 <button
      onClick={(e) => {
        e.stopPropagation(); // منع فتح الكارد

        navigator.clipboard.writeText(
          `${window.location.origin}/alaa/#/offers/${offer.id}`
        );

        setCopiedOfferId(offer.id);
        setTimeout(() => setCopiedOfferId(null), 2000);

      }}
      style={{
        marginLeft: "10px",
        background: "transparent",
        border: "none",
        color: "#007bff",
        cursor: "pointer",
      }}
    >
      {copiedOfferId === offer.id ? "✅ تم النسخ" : "نسخ الرابط"}
    </button>


          </div>




          <div className={`card-row ${classNames.comments}`}>
            <FontAwesomeIcon icon={faStickyNote} /> <strong>الملاحظات:</strong> {showFullText ? offer.comments : offer.comments.slice(0, 22) + "... "}
            <span
              className="card-toggle no-export hide-o"
              onClick={toggleText}
            >
              {showFullText ? "إخفاء" : "المزيد"}
            </span>
          </div>

          <div className="card-actions no-export" >
            {offer.userAddData == idUser ? (
              <>
                <button onClick={(e) => handleEdit(offer.id,e)} className="btn btn-success">
                  <FontAwesomeIcon icon={faPenToSquare} style={{ 
                    // color: darkSide ? "green" : "#00ff31",
                    
                    cursor: "pointer" }} className="edit-icon" />
                </button>
                <button onClick={(e) => handleDelete(offer.id,e)} className="btn btn-danger">
                  <FontAwesomeIcon icon={faTrash} className="delete-icon" />
                </button>

 
        <button
  className="btn btn-primary"
  onClick={(e) => {
    e.stopPropagation();
    setSelectedOfferId(offer.id); // تخزين id العرض الحالي
    setOpenModal(true);           // فتح المودال
  }}
>
  💬 التعليقات
</button>


<CommentsModal
  offerId={selectedOfferId}
  open={openModal}
  onClose={() => setOpenModal(false)}
  
/>



     {/* <button className="btn btn-primary" 
      onClick={(e) =>{

      e.stopPropagation()
       setOpen(true)
      }

      }
        
        
        >💬 التعليقات</button> 
    
      <CommentsModal offerId={offer.id} open={open} onClose={(e) => {
        e.stopPropagation()
        
        setOpen(false)}} /> */}



          
{/*              

            <button  className="btn btn-primary" onClick={handelChatOpen
           
          
            
            }>💬 الشات</button>

          <ChatModal open={openChat} onClose={(e) =>{setOpenChat(false)
           e.stopPropagation()}
          } offerId={offer.id} />

    */}





              </>
            ) : (
              <div>
   <button
  className="btn btn-primary"
  onClick={(e) => {
    e.stopPropagation();
    setSelectedOfferId(offer.id); // تخزين id العرض الحالي
    setOpenModal(true);           // فتح المودال
  }}
>
  💬 التعليقات
</button>


<CommentsModal
  offerId={selectedOfferId}
  open={openModal}
  onClose={() => setOpenModal(false)}
  
/>
</div>
            )}
          </div>
    

          
          </div>
        ))}
      </div>
    ))
  )}
</div>
  
)}








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
        <Modal
  show={showImageModal}
  onHide={() => setShowImageModal(false)}
  centered
  size="lg"
  className={darkSide ? "" : "dark-lib"}
>
  <Modal.Header closeButton>
    <Modal.Title>صورة العرض</Modal.Title>
  </Modal.Header>
  <Modal.Body style={{ textAlign: "center" }}>
    <img
      src={modalImageSrc}
      alt="صورة كاملة"
      style={{
        maxWidth: "100%",
        maxHeight: "80vh",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      }}
    />
  </Modal.Body>
</Modal>
      </div>
    
  );
}
