
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import im from "../logo.png";
import aqar from "../photo/aqar.jpg"

  import ArrowBackIcon from '@mui/icons-material/ArrowBack';
 

import   ProgressCounter from "../components/ProgressCounter"
import image2 from "../logo.png";

import { Modal, Box, IconButton  } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation , Pagination as SwiperPagination } from 'swiper/modules';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import html2pdf from "html2pdf.js";
import {
  faArrowLeft,
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
faPhone,
faMap,
faFileContract,
faIdCard,
faBirthdayCake,
faFileSignature,
faFileAlt,
faPhoneAlt,




} from "@fortawesome/free-solid-svg-icons";
import { ColorModeContext } from "../Context/ThemeContext";


const OfferDetails = () => {
  const [open, setOpen] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  var idUser = localStorage.getItem("name")
  console.log(idUser,typeof(idUser))

  const handleOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };



  const { id } = useParams(); // ← يأتي كسلسلة نصية (string)

      const [openModal, setOpenModal] = useState(false);
  const [modalImage, setModalImage] = useState("");
const [modalImages, setModalImages] = useState([]);
const [modalIndex, setModalIndex] = useState(0);









  const [loading, setLoading] = useState(true);


// دالة عند الضغط على صورة
const handleImageClick = (img, index, images) => {
  setModalImages(images); // خزّن جميع الصور
  setModalIndex(index);   // حدد الصورة النشطة
  setOpenModal(true);     // افتح المودال
}


  // إغلاق المودال عند الضغط على زر ESC
  useEffect(() => {
    function handleEsc(event) {
      if (event.key === "Escape") {
        setOpenModal(false);
      }
    }
    if (openModal) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [openModal, setOpenModal]);






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


  const [recordsA, setRecordsA] = useState([]);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8090/offersAll");
        const data = await response.json();
          setRecordsA(data);
          setLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
          setLoading(false);
      }
    }
    fetchData();
  }, []);

  // تحويل id إلى رقم للمقارنة الصحيحة
  const offer = recordsA.find((o) => o.id === Number(id));

  console.log(recordsA)
    console.log(offer)

  if (!offer) {
    return (
      // <div style={{ color: "red", padding: "20px" }}>
      //   العرض غير موجود أو لم يتم تحميل البيانات بعد.
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

      // </div>
    );
  }



   


  if (loading) return 
  
  
  // <p>


    
  
  // ...جارٍ تحميل العرض</p>;


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
  

  return (


//       <div className="p-relative" style={{ margin: "0px 10px" }}>
//         <div className="row flex-mobile " id={classNameModel} style={{ marginBottom: "200px" , margin:"auto"  , padding:"inherit"}}>


//         <div className="offer-details">




//     <div  className={`card-offer ${!darkSide ? "card-dark" : "card-light"}`}
  
 
//           >
//           <img
//           src={im}
//           alt="علامة مائية"
          
//            className={ darkSide ? "card-watermark" : "card-watermark dark-logo-offers" } 
//         />
//       <div className="card-header-bar" style={{backgroundColor: !darkSide ? "#fff":""}}>
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


// <FontAwesomeIcon icon={
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


  

// <div className="card-header-img" style={{ position: "relative"   }}

    
// >

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








// <Swiper
//   modules={[Navigation, SwiperPagination]}
//   spaceBetween={10}
//   slidesPerView={1}
//   navigation
//   pagination={{ clickable: true }}
//   style={{ borderRadius: "15px 15px 0px 0px", width: "100%" }}
// >
//   {(() => {
//     const images = [
//       offer.image,
//       offer.imageFacade,
//       offer.imageBathroom,
//       offer.imageKitchen,
//       offer.imageRoom,
//       offer.imageLiving,
//     ].filter(Boolean);

//     return images.length > 0 ? (
//       images.map((img, idx) => (
//         <SwiperSlide key={idx} style={{ width: "100%" }}>
//           <img
//             src={img}
//             alt={`صورة ${idx + 1}`}
//             crossOrigin="anonymous"
//             className={"card-img-top" + (idx !== 0 ? " no-print no-export" : "")}
//             style={{
//               width: "100%",
//               height: "200px", // ✅ ارتفاع موحد
//               objectFit: "cover", // ✅ بدون فراغات
//               // objectFit:"fill",
//               // borderRadius: "20px",
//               border: "2px solid black",
//             }}
//           />
//         </SwiperSlide>
//       ))
//     ) : (
//       <SwiperSlide>
//         <img
//           src={offer.image || aqar}
//           alt="صورة العرض"
//           crossOrigin="anonymous"
//           className="card-img-top"
//           style={{
//             width: "100%",
//             height: "200px",
//             objectFit: "cover",
//             // borderRadius: "20px",
//             border: "2px solid black",
//           }}
//         />
//       </SwiperSlide>
//     );
//   })()}
// </Swiper>









 











     


//       <div><strong>اسم الموظف:</strong> {offer.selectedName}</div>
//       <div><strong>تاريخ الإضافة:</strong> {offer.dateAdd ? moment(offer.dateAdd).locale('en').format('DD/MM/YYYY HH:mm') : '—'}</div>
//       <div><strong>نوع العقار:</strong> {offer.aqarConnected}</div>
//       <div><strong>فئة العقار:</strong> {offer.aqarStairs}</div>
//       <div><strong>مكان الوحدة:</strong> {offer.aqarFloor}</div>
//       <div><strong>المساحة:</strong> {offer.area}</div>
//       {offer.roomsCountMastar && <div><strong>عدد الغرف الماستر:</strong> {offer.roomsCountMastar}</div>}
//       {offer.roomsCount && <div><strong>عدد الغرف:</strong> {offer.roomsCount}</div>}
//       {offer.bathroomsCount && <div><strong>دورات المياه:</strong> {offer.bathroomsCount}</div>}
//       {offer.majlesCount && <div><strong>عدد المجالس:</strong> {offer.majlesCount}</div>}
//       {offer.hallsCount && <div><strong>عدد الصالات:</strong> {offer.hallsCount}</div>}
//       {offer.maqlatCount && <div><strong>عدد المقلط:</strong> {offer.maqlatCount}</div>}
//       {offer.kitchenCount && <div><strong>عدد المطابخ:</strong> {offer.kitchenCount}</div>}
//       {offer.aqarFacade && <div><strong>الواجهة:</strong> {offer.aqarFacade}</div>}
//       {offer.streetsWidth && <div><strong>عرض الشارع:</strong> {offer.streetsWidth} م</div>}
//       {offer.featureCarEntrance && <div>مدخل سيارة</div>}
//       {offer.featureYard && <div>حوش</div>}
//       {offer.featureStorage && <div>مستودع</div>}
//       {offer.featureRoof && <div>سطح</div>}
//       {offer.featureNearServices && <div>قريب من الخدمات</div>}
//       {offer.featureLaundryRoom && <div>غرفة غسيل</div>}
//       {offer.featureBalcony && <div>بلكونه</div>}
//       {offer.featureParking && <div>موقف سيارات</div>}
//       {offer.featureElevator && <div>مصعد</div>}
//       {offer.featureElevatorT && <div>تاسيس مصعد</div>}
//       {offer.featureAnnex && <div>ملحق</div>}
//       {offer.featureMaid && <div>غرفة خادمة</div>}
//       {offer.featureGuard && <div>غرفة حارس</div>}
//       {offer.featureDriver && <div>غرفة سائق</div>}
//       <div><strong>المنطقة:</strong> {offer.selectedRegion}</div>
//       <div><strong>المدينة - الحي:</strong> {offer.selectedCity + " - " + offer.selectedDistricts}</div>
//       <div><strong>الموقع:</strong> <a href={`https://www.google.com/maps/place/${offer.locationCoordinates}`} target="_blank" rel="noreferrer">عرض على الخريطة</a></div>
//       <div><strong>لينك العرض:</strong> <a href={offer.link} target="_blank" rel="noreferrer">{offer.link}</a></div>
//       <div><strong>ملاحظات:</strong> {offer.comments}</div>


//             </div>


//                 <div>
//                   <button
//                     className={backColor}
//                     activeClassName="active_sidebar"
//                     style={{
//                       borderRadius: "30px",
//                       maxWidth: "130px",
//                       position: "fixed",
//                       left: "30px",
//                       bottom: "48px",
//                       zIndex:"1"
//                     }}
//                     onClick={handelDarkSide}
//                   >


//                     <div className="icon" style={{ marginRight: "5px" }}>
//                       {
//                         <FontAwesomeIcon
//                           icon={ic1}
//                           rotation={classRotate}
//                           style={{ color: { classColor } }}
//                         />
//                       }
//                     </div>
//                     <div style={{ margin: "0 10px" }} className="link_text">
//                       {textMode}
//                     </div>
//                   </button>
//                 </div>


// </div>
// </div></div></div>













  <div div style={{ marginTop: "10px", height: "100vh" }}>
     
    

      <div className="p-relative" style={{ margin: "0px 10px" }}>
        <div className="row flex-mobile" style={{ marginBottom: "200px" }}>
          <div
            className="col box input-css"
            id={classNameModel}
            style={{
              width: "100%",
              marginBottom: "0px",
              margin: "5px 4px",
              // padding: "20px 10px",
                padding: "20px",
            }}
          >




              <div
                className="calculation-flex flex-2dir input-css flex-dir table-client table-responsive"
             
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
       


<div style={{    textAlign: "left",
    padding: "2px",
    marginLeft: "20px"}}><span>العودة إلى جميع العروض  </span>
    {/* <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk" tabindex="0" type="button">
       <FontAwesomeIcon icon={faArrowLeft} />
      </button> */}


     <IconButton aria-label="delete" size="small" onClick={() => window.history.back()}>
               <ArrowBackIcon fontSize="small" />
             
      </IconButton>
      </div>





    <div  className={`card-offer ${!darkSide ? "card-dark" : "card-light"}`}
  
 
          >
          <img
          src={im}
          alt="علامة مائية"
          
           className={ darkSide ? "card-watermark" : "card-watermark dark-logo-offers" } 
        />
      <div className="card-header-bar" style={{backgroundColor: !darkSide ? "#fff":""}}>
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


  

{/* <div className="card-header-img" style={{ position: "relative"   }}

    
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
              border: "2px solid black",
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









 










</div> */}



 <div className="card-header-img" style={{ position: "relative" ,    height: "auto" }}>
      {/* 🏷️ حالة العقار */}
      {offer.aqarState && (
        <div
          className={`card-state-badge ${
            offer.aqarState === "غير مكرر"
              ? "card-state-available"
              : offer.aqarState === "مكرر الاعلان" || offer.aqarState === "مكرر مع الزملاء"
              ? "card-state-duplicate"
              : offer.aqarState === "محجوز"
              ? "card-state-reserved"
              : offer.aqarState === "مباع"
              ? "card-state-sold"
              : "card-state-available"
          }`}
        >
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




{/*    
      <Swiper
        modules={[Navigation, SwiperPagination]}
        spaceBetween={10}
        slidesPerView={2.5}
        navigation
        pagination={{ clickable: true }}
        style={{ borderRadius: "10px", width: "100%", padding: "10px 0" }}
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

  if (images.length === 0) return null;

  return images.map((img, idx) => (
    <SwiperSlide key={idx} style={{ width: "100%" }}>
      <img
        src={img}
        alt={`صورة ${idx + 1}`}
        crossOrigin="anonymous"
        onClick={() => handleImageClick(img)}
        style={{
          width: "100%",
          height: "200px",
        //   objectFit: "contain", // 
          border: "2px solid black",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      />
    </SwiperSlide>
  ));
})()}


     
      </Swiper>

     
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            bgcolor: "rgba(0, 0, 0, 0.9)",
          }}
        >
          <img
            src={modalImage}
            alt="صورة مكبرة"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
              borderRadius: "10px",
              border: "4px solid white",
            }}
          />
        </Box>
      </Modal>
 */}






{/* <Swiper
  modules={[Navigation, SwiperPagination]}
  spaceBetween={10}
  slidesPerView={2.5}
  navigation
  pagination={{ clickable: true }}
  style={{ borderRadius: "10px", width: "100%", padding: "10px 0" }}
> */}


    <Swiper
  modules={[Navigation, SwiperPagination]}
  spaceBetween={10}
  slidesPerView={3.2} // الافتراضي للكمبيوتر
  navigation
  pagination={{ clickable: true }}
  style={{ borderRadius: "10px", width: "100%", padding: "10px 0" }}
  breakpoints={{
    0: {           // من 0 بكسل (أصغر شاشة)
      slidesPerView: 1.2, // صورة وربع فقط
    },
    480: {
      slidesPerView: 1.8,
    },
    640: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 3.2, // العرض العادي للكمبيوتر
    },
  }}
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

    if (images.length === 0) return null;

    return images.map((img, idx) => (
      <SwiperSlide key={idx} style={{ width: "100%" }}>
        <img
          src={img}
          alt={`صورة ${idx + 1}`}
          crossOrigin="anonymous"
          onClick={() => handleImageClick(img, idx, images)} // ⚠️ إرسال كل الصور مع الفهرس
          style={{
            width: "100%",
            height: "240px",
            // objectFit: "contain",
            border: "2px solid black",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        />
      </SwiperSlide>
    ));
  })()}
</Swiper>





{/* <Modal open={openModal} onClose={() => setOpenModal(false)}>
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      bgcolor: "rgba(0, 0, 0, 0.9)",
    }}
  >
    <Swiper
      initialSlide={modalIndex}
      modules={[Navigation, SwiperPagination]}
      navigation
      pagination={{ clickable: true }}
      style={{
        width: "90%",
        height: "90%",
      }}
      touchRatio={1} // السحب مفعّل تلقائيًا، لكن للإيضاح فقط
    >
      {modalImages.map((img, idx) => {
        // أسماء الصور حسب ترتيبها
        const labels = [
          "الصورة الرئيسية",
          "الواجهة",
          "الحمام",
          "المطبخ",
          "الغرفة",
          "الصالة",
        ];

        return (
          <SwiperSlide key={idx}>
            <Box sx={{ textAlign: "center", color: "white" }}>
              <img
                src={img}
                alt={`صورة ${idx + 1}`}
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  borderRadius: "10px",
                  border: "4px solid white",
                  margin: "auto",
                  display: "block",
                }}
              />
              <div style={{ marginTop: "12px", fontSize: "18px" }}>
                {labels[idx] || `صورة ${idx + 1}`}
              </div>
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </Box>
</Modal> */}


<Modal
  open={openModal}
  onClose={() => setOpenModal(false)}
  aria-labelledby="image-modal"
  aria-describedby="عرض الصور بالحجم الكامل"
>
  <Box
    tabIndex={-1} // لالتقاط أحداث لوحة المفاتيح
    sx={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      bgcolor: "rgba(0, 0, 0, 0.9)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "none",
      zIndex: 1300,
      padding: 2,
    }}
    onClick={() => setOpenModal(false)} // إغلاق عند الضغط خارج السلايدر
    onKeyDown={(e) => {
      if (e.key === "Escape") setOpenModal(false); // إغلاق عند ESC
    }}
  >
    {/* زر الإغلاق */}
    <IconButton
      aria-label="close"
      onClick={(e) => {
        e.stopPropagation(); // منع إغلاق عند الضغط على الزر
        setOpenModal(false);
      }}
      sx={{
        position: "absolute",
        top: 16,
        left: 16,
        bgcolor: "rgba(255, 255, 255, 0.2)",
        color: "white",
        "&:hover": {
          bgcolor: "rgba(255, 255, 255, 0.4)",
        },
        borderRadius: "50%",
        width: 40,
        height: 40,
        zIndex: 1400,
      }}
    >
      <CloseIcon />
    </IconButton>

    {/* صندوق السلايدر لمنع إغلاق عند الضغط داخل الصور */}
    <Box
      onClick={(e) => e.stopPropagation()}
      sx={{
        width: "90%",
        height: "90%",
      }}
    >
      <Swiper
        initialSlide={modalIndex}
        modules={[Navigation, SwiperPagination]}
        navigation
        pagination={{ clickable: true }}
        style={{
          width: "100%",
          height: "100%",
        }}
        touchRatio={1} // السحب مفعّل
      >
        {modalImages.map((img, idx) => {
          const labels = [
            "الصورة الرئيسية",
            "الواجهة",
            "الحمام",
            "المطبخ",
            "الغرفة",
            "الصالة",
          ];

          return (
            <SwiperSlide key={idx}>
              <Box sx={{ textAlign: "center", color: "white" }}>
                <img
                  src={img}
                  alt={`صورة ${idx + 1}`}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "80vh",
                    objectFit: "contain",
                    borderRadius: "10px",
                    border: "4px solid white",
                    margin: "auto",
                    display: "block",
                    userSelect: "none",
                  }}
                  draggable={false}
                />
                <div style={{ marginTop: 12, fontSize: 18 }}>
                  {labels[idx] || `صورة ${idx + 1}`}
                </div>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  </Box>
</Modal>





    </div>








     
{/* <div > 

      <div><strong>اسم الموظف:</strong> {offer.selectedName}</div>
      <div><strong>تاريخ الإضافة:</strong> {offer.dateAdd ? moment(offer.dateAdd).locale('en').format('DD/MM/YYYY HH:mm') : '—'}</div>
      <div><strong>نوع العقار:</strong> {offer.aqarConnected}</div>
      <div><strong>فئة العقار:</strong> {offer.aqarStairs}</div>
      <div><strong>مكان الوحدة:</strong> {offer.aqarFloor}</div>
      <div><strong>المساحة:</strong> {offer.area}</div>
      {offer.roomsCountMastar && <div><strong>عدد الغرف الماستر:</strong> {offer.roomsCountMastar}</div>}
      {offer.roomsCount && <div><strong>عدد الغرف:</strong> {offer.roomsCount}</div>}
      {offer.bathroomsCount && <div><strong>دورات المياه:</strong> {offer.bathroomsCount}</div>}
      {offer.majlesCount && <div><strong>عدد المجالس:</strong> {offer.majlesCount}</div>}
      {offer.hallsCount && <div><strong>عدد الصالات:</strong> {offer.hallsCount}</div>}
      {offer.maqlatCount && <div><strong>عدد المقلط:</strong> {offer.maqlatCount}</div>}
      {offer.kitchenCount && <div><strong>عدد المطابخ:</strong> {offer.kitchenCount}</div>}
      {offer.aqarFacade && <div><strong>الواجهة:</strong> {offer.aqarFacade}</div>}
      {offer.streetsWidth && <div><strong>عرض الشارع:</strong> {offer.streetsWidth} م</div>}
      {offer.featureCarEntrance && <div>مدخل سيارة</div>}
      {offer.featureYard && <div>حوش</div>}
      {offer.featureStorage && <div>مستودع</div>}
      {offer.featureRoof && <div>سطح</div>}
      {offer.featureNearServices && <div>قريب من الخدمات</div>}
      {offer.featureLaundryRoom && <div>غرفة غسيل</div>}
      {offer.featureBalcony && <div>بلكونه</div>}
      {offer.featureParking && <div>موقف سيارات</div>}
      {offer.featureElevator && <div>مصعد</div>}
      {offer.featureElevatorT && <div>تاسيس مصعد</div>}
      {offer.featureAnnex && <div>ملحق</div>}
      {offer.featureMaid && <div>غرفة خادمة</div>}
      {offer.featureGuard && <div>غرفة حارس</div>}
      {offer.featureDriver && <div>غرفة سائق</div>}
      <div><strong>المنطقة:</strong> {offer.selectedRegion}</div>
      <div><strong>المدينة - الحي:</strong> {offer.selectedCity + " - " + offer.selectedDistricts}</div>
      <div><strong>الموقع:</strong> <a href={`https://www.google.com/maps/place/${offer.locationCoordinates}`} target="_blank" rel="noreferrer">عرض على الخريطة</a></div>
      <div><strong>لينك العرض:</strong> <a href={offer.link} target="_blank" rel="noreferrer">{offer.link}</a></div>
      <div><strong>ملاحظات:</strong> {offer.comments}</div>


   </div> */}


   {/* <div>
  <div><FontAwesomeIcon icon={faUser} /> <strong>اسم الموظف:</strong> {offer.selectedName}</div>
  <div><FontAwesomeIcon icon={faCalendarAlt} /> <strong>تاريخ الإضافة:</strong> {offer.dateAdd ? moment(offer.dateAdd).locale('en').format('DD/MM/YYYY HH:mm') : '—'}</div>
  <div><FontAwesomeIcon icon={faHome} /> <strong>نوع العقار:</strong> {offer.aqarConnected}</div>
  <div><FontAwesomeIcon icon={faLayerGroup} /> <strong>فئة العقار:</strong> {offer.aqarStairs}</div>
  <div><FontAwesomeIcon icon={faStairs} /> <strong>مكان الوحدة:</strong> {offer.aqarFloor}</div>
  <div><FontAwesomeIcon icon={faRulerCombined} /> <strong>المساحة:</strong> {offer.area}</div>

  {offer.roomsCountMastar && <div><FontAwesomeIcon icon={faBed} /> <strong>عدد الغرف الماستر:</strong> {offer.roomsCountMastar}</div>}
  {offer.roomsCount && <div><FontAwesomeIcon icon={faBed} /> <strong>عدد الغرف:</strong> {offer.roomsCount}</div>}
  {offer.bathroomsCount && <div><FontAwesomeIcon icon={faBath} /> <strong>دورات المياه:</strong> {offer.bathroomsCount}</div>}
  {offer.majlesCount && <div><FontAwesomeIcon icon={faCouch} /> <strong>عدد المجالس:</strong> {offer.majlesCount}</div>}
  {offer.hallsCount && <div><FontAwesomeIcon icon={faDoorOpen} /> <strong>عدد الصالات:</strong> {offer.hallsCount}</div>}
  {offer.maqlatCount && <div><FontAwesomeIcon icon={faUsers} /> <strong>عدد المقلط:</strong> {offer.maqlatCount}</div>}
  {offer.kitchenCount && <div><FontAwesomeIcon icon={faUtensils} /> <strong>عدد المطابخ:</strong> {offer.kitchenCount}</div>}
  {offer.aqarFacade && <div><FontAwesomeIcon icon={faBuilding} /> <strong>الواجهة:</strong> {offer.aqarFacade}</div>}
  {offer.streetsWidth && <div><FontAwesomeIcon icon={faRoad} /> <strong>عرض الشارع:</strong> {offer.streetsWidth} م</div>}

  {offer.featureCarEntrance && <div><FontAwesomeIcon icon={faCar} /> مدخل سيارة</div>}
  {offer.featureYard && <div><FontAwesomeIcon icon={faTree} /> حوش</div>}
  {offer.featureStorage && <div><FontAwesomeIcon icon={faBoxes} /> مستودع</div>}
  {offer.featureRoof && <div><FontAwesomeIcon icon={faStairs} /> سطح</div>}
  {offer.featureNearServices && <div><FontAwesomeIcon icon={faMapMarkerAlt} /> قريب من الخدمات</div>}
  {offer.featureLaundryRoom && <div><FontAwesomeIcon icon={faHandsWash} /> غرفة غسيل</div>}
  {offer.featureBalcony && <div><FontAwesomeIcon icon={faSolarPanel} /> بلكونه</div>}
  {offer.featureParking && <div><FontAwesomeIcon icon={faCar} /> موقف سيارات</div>}
  {offer.featureElevator && <div><FontAwesomeIcon icon={faElevator} /> مصعد</div>}
  {offer.featureElevatorT && <div><FontAwesomeIcon icon={faElevator} /> تأسيس مصعد</div>}
  {offer.featureAnnex && <div><FontAwesomeIcon icon={faHome} /> ملحق</div>}
  {offer.featureMaid && <div><FontAwesomeIcon icon={faUserNurse} /> غرفة خادمة</div>}
  {offer.featureGuard && <div><FontAwesomeIcon icon={faUserShield} /> غرفة حارس</div>}
  {offer.featureDriver && <div><FontAwesomeIcon icon={faUserTie} /> غرفة سائق</div>}

  <div><FontAwesomeIcon icon={faMapMarkedAlt} /> <strong>المنطقة:</strong> {offer.selectedRegion}</div>
  <div><FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>المدينة - الحي:</strong> {offer.selectedCity + " - " + offer.selectedDistricts}</div>
  <div><FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>الموقع:</strong> <a href={`https://www.google.com/maps/place/${offer.locationCoordinates}`} target="_blank" rel="noreferrer">عرض على الخريطة</a></div>
  <div><FontAwesomeIcon icon={faLink} /> <strong>لينك العرض:</strong> <a href={offer.link} target="_blank" rel="noreferrer">{offer.link}</a></div>
  <div><FontAwesomeIcon icon={faStickyNote} /> <strong>ملاحظات:</strong> {offer.comments}</div>
</div> */}




{/* <div className="m-b-12">

<h4 style={{ marginTop: "10px", fontWeight: "bold" , padding:"5px" }}>📌 البيانات الأساسية</h4>
<div><FontAwesomeIcon icon={faUser} /> <strong>اسم الموظف:</strong> {offer.selectedName}</div>
<div><FontAwesomeIcon icon={faCalendarAlt} /> <strong>تاريخ الإضافة:</strong> {offer.dateAdd ? moment(offer.dateAdd).locale('en').format('DD/MM/YYYY HH:mm') : '—'}</div>
<div><FontAwesomeIcon icon={faHome} /> <strong>نوع العقار:</strong> {offer.aqarConnected}</div>
<div><FontAwesomeIcon icon={faLayerGroup} /> <strong>فئة العقار:</strong> {offer.aqarStairs}</div>
<div><FontAwesomeIcon icon={faStairs} /> <strong>مكان الوحدة:</strong> {offer.aqarFloor}</div>
<div><FontAwesomeIcon icon={faRulerCombined} /> <strong>المساحة:</strong> {offer.area}</div>


<h4 style={{ marginTop: "15px", fontWeight: "bold" , padding:"5px"}}>🏠 التفاصيل الداخلية</h4>
{offer.roomsCountMastar && <div><FontAwesomeIcon icon={faBed} /> <strong>غرف ماستر:</strong> {offer.roomsCountMastar}</div>}
{offer.roomsCount && <div><FontAwesomeIcon icon={faBed} /> <strong>عدد الغرف:</strong> {offer.roomsCount}</div>}
{offer.bathroomsCount && <div><FontAwesomeIcon icon={faBath} /> <strong>دورات المياه:</strong> {offer.bathroomsCount}</div>}
{offer.majlesCount && <div><FontAwesomeIcon icon={faCouch} /> <strong>عدد المجالس:</strong> {offer.majlesCount}</div>}
{offer.hallsCount && <div><FontAwesomeIcon icon={faDoorOpen} /> <strong>عدد الصالات:</strong> {offer.hallsCount}</div>}
{offer.maqlatCount && <div><FontAwesomeIcon icon={faUsers} /> <strong>عدد المقلط:</strong> {offer.maqlatCount}</div>}
{offer.kitchenCount && <div><FontAwesomeIcon icon={faUtensils} /> <strong>عدد المطابخ:</strong> {offer.kitchenCount}</div>}
{offer.aqarFacade && <div><FontAwesomeIcon icon={faBuilding} /> <strong>الواجهة:</strong> {offer.aqarFacade}</div>}
{offer.streetsWidth && <div><FontAwesomeIcon icon={faRoad} /> <strong>عرض الشارع:</strong> {offer.streetsWidth} م</div>}

<h4 style={{ marginTop: "15px", fontWeight: "bold" ,padding:"5px" }}>🌟 المميزات الإضافية</h4>
{offer.featureCarEntrance && <div><FontAwesomeIcon icon={faCar} /> مدخل سيارة</div>}
{offer.featureYard && <div><FontAwesomeIcon icon={faTree} /> حوش</div>}
{offer.featureStorage && <div><FontAwesomeIcon icon={faBoxes} /> مستودع</div>}
{offer.featureRoof && <div><FontAwesomeIcon icon={faStairs} /> سطح</div>}
{offer.featureNearServices && <div><FontAwesomeIcon icon={faMapMarkerAlt} /> قريب من الخدمات</div>}
{offer.featureLaundryRoom && <div><FontAwesomeIcon icon={faHandsWash} /> غرفة غسيل</div>}
{offer.featureBalcony && <div><FontAwesomeIcon icon={faSolarPanel} /> بلكونه</div>}
{offer.featureParking && <div><FontAwesomeIcon icon={faCar} /> موقف سيارات</div>}
{offer.featureElevator && <div><FontAwesomeIcon icon={faElevator} /> مصعد</div>}
{offer.featureElevatorT && <div><FontAwesomeIcon icon={faElevator} /> تأسيس مصعد</div>}
{offer.featureAnnex && <div><FontAwesomeIcon icon={faHome} /> ملحق</div>}
{offer.featureMaid && <div><FontAwesomeIcon icon={faUserNurse} /> غرفة خادمة</div>}
{offer.featureGuard && <div><FontAwesomeIcon icon={faUserShield} /> غرفة حارس</div>}
{offer.featureDriver && <div><FontAwesomeIcon icon={faUserTie} /> غرفة سائق</div>}

</div> */}

<div className="m-b-12">

  {/* 📌 البيانات الأساسية */}
  <h4 style={{ marginTop: "10px", fontWeight: "bold", padding: "5px" }}>📌 البيانات الأساسية</h4>
  {offer.selectedName && <div><FontAwesomeIcon icon={faUser} /> <strong>اسم الموظف:</strong> {offer.selectedName}</div>}
  {offer.dateAdd && <div><FontAwesomeIcon icon={faCalendarAlt} /> <strong>تاريخ الإضافة:</strong> {moment(offer.dateAdd).locale('en').format('DD/MM/YYYY HH:mm')}</div>}


 {offer.selectedRegion && <div><FontAwesomeIcon icon={faMapMarkedAlt} /> <strong> المنطقة:</strong> {offer.selectedRegion}</div>}
 {offer.selectedCity && <div><FontAwesomeIcon icon={faMapMarkerAlt} /> <strong> المدينة - الحي:</strong> {offer.selectedCity + " - " + offer.selectedDistricts||""}</div>}

  {offer.aqarConnected && <div><FontAwesomeIcon icon={faHome} /> <strong>نوع العقار:</strong> {offer.aqarConnected}</div>}
  {offer.aqarStairs && <div><FontAwesomeIcon icon={faLayerGroup} /> <strong>فئة العقار:</strong> {offer.aqarStairs}</div>}
  {offer.aqarFloor && <div><FontAwesomeIcon icon={faStairs} /> <strong>مكان الوحدة:</strong> {offer.aqarFloor}</div>}
  {offer.area && <div><FontAwesomeIcon icon={faRulerCombined} /> <strong>المساحة:</strong> {offer.area}</div>}

  {/* 🏠 التفاصيل الداخلية */}
  <h4 style={{ marginTop: "15px", fontWeight: "bold", padding: "5px" }}>🏠 التفاصيل الداخلية</h4>
  {offer.roomsCountMastar !== "0" && offer.roomsCountMastar !== 0 && offer.roomsCountMastar !== "" && (
    <div><FontAwesomeIcon icon={faBed} /> <strong>غرف ماستر:</strong> {offer.roomsCountMastar}</div>
  )}
  {offer.roomsCount !== "0" && offer.roomsCount !== 0 && offer.roomsCount !== "" && (
    <div><FontAwesomeIcon icon={faBed} /> <strong>عدد الغرف:</strong> {offer.roomsCount}</div>
  )}
  {offer.bathroomsCount !== "0" && offer.bathroomsCount !== 0 && offer.bathroomsCount !== "" && (
    <div><FontAwesomeIcon icon={faBath} /> <strong>دورات المياه:</strong> {offer.bathroomsCount}</div>
  )}
  {offer.majlesCount !== "0" && offer.majlesCount !== 0 && offer.majlesCount !== "" && (
    <div><FontAwesomeIcon icon={faCouch} /> <strong>عدد المجالس:</strong> {offer.majlesCount}</div>
  )}
  {offer.hallsCount !== "0" && offer.hallsCount !== 0 && offer.hallsCount !== "" && (
    <div><FontAwesomeIcon icon={faDoorOpen} /> <strong>عدد الصالات:</strong> {offer.hallsCount}</div>
  )}
  {offer.maqlatCount !== "0" && offer.maqlatCount !== 0 && offer.maqlatCount !== "" && (
    <div><FontAwesomeIcon icon={faUsers} /> <strong>عدد المقلط:</strong> {offer.maqlatCount}</div>
  )}
  {offer.kitchenCount !== "0" && offer.kitchenCount !== 0 && offer.kitchenCount !== "" && (
    <div><FontAwesomeIcon icon={faUtensils} /> <strong>عدد المطابخ:</strong> {offer.kitchenCount}</div>
  )}
  {offer.aqarFacade && <div><FontAwesomeIcon icon={faBuilding} /> <strong>الواجهة:</strong> {offer.aqarFacade}</div>}
  {offer.streetsWidth && <div><FontAwesomeIcon icon={faRoad} /> <strong>عرض الشارع:</strong> {offer.streetsWidth} م</div>}

  {/* 🌟 المميزات الإضافية */}
  <h4 style={{ marginTop: "15px", fontWeight: "bold", padding: "5px" }}>🌟 المميزات الإضافية</h4>
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
    <div className="card-row"><FontAwesomeIcon icon={faElevator} /> <strong>تأسيس مصعد</strong></div>
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


  



    {offer.comments !== "0" && offer.comments !== 0 && offer.comments !== "" && (
    <div><FontAwesomeIcon icon={faStickyNote} /> <strong> الملاحظات:</strong> {offer.comments}</div>
  )}




  {/* 🏠 التفاصيل العقد */}

<h4 style={{ marginTop: "15px", fontWeight: "bold", padding: "5px" }}>
  📜 تفاصيل العقد
</h4>

{/* رقم الصك */}
{offer.contractNumber && offer.contractNumber !== "0" && idUser == offer.userAddData && (
  <div><FontAwesomeIcon icon={faFileContract} /> <strong> رقم الصك:</strong> {offer.contractNumber}</div>
)}

{/* مدة العقد */}
{offer.contractDuration && offer.contractDuration !== "0" && idUser == offer.userAddData && (
  <div><FontAwesomeIcon icon={faCalendarAlt} /> <strong> مدة العقد:</strong> {offer.contractDuration}</div>
)}

{/* رقم القطعة */}
{offer.plotNumber && offer.plotNumber !== "0" && idUser == offer.userAddData && (
  <div><FontAwesomeIcon icon={faMapMarkedAlt} /> <strong> رقم القطعة:</strong> {offer.plotNumber}</div>
)}

{/* رقم المخطط */}
{offer.planNumber && offer.planNumber !== "0" && idUser == offer.userAddData && (
  <div><FontAwesomeIcon icon={faMap} /> <strong> رقم المخطط:</strong> {offer.planNumber}</div>
)}

{/* بيانات المالك */}
    {offer.ownerName && idUser == offer.userAddData && (
      <div><FontAwesomeIcon icon={faUser} /> <strong> اسم المالك:</strong> {offer.ownerName}</div>
    )}
    {offer.ownerID && idUser == offer.userAddData && (
      <div><FontAwesomeIcon icon={faIdCard} /> <strong> رقم الهوية:</strong> {offer.ownerID}</div>
    )}
    {offer.ownerPhone && idUser == offer.userAddData && (
      <div><FontAwesomeIcon icon={faPhone} /> <strong> الجوال:</strong> {offer.ownerPhone}</div>
    )}
    {offer.ownerBirthDate && idUser == offer.userAddData && (
      <div><FontAwesomeIcon icon={faBirthdayCake} /> <strong> تاريخ الميلاد:</strong> {offer.ownerBirthDate ? moment(offer.ownerBirthDate).locale('en').format('DD/MM/YYYY') : '—'   }</div>
    )}


         

{offer.ownerType == "مؤسسة"|| offer.ownerType=="شركة شخص واحد" ||offer.ownerType=="شركة اكتر من شخص"?  (
  <>
    {offer.companyName && idUser == offer.userAddData && (
      <div><FontAwesomeIcon icon={faBuilding} /> <strong> اسم المؤسسة:</strong> {offer.companyName}</div>
    )}
    {offer.companyRegistry && idUser == offer.userAddData && (
      <div><FontAwesomeIcon icon={faFileSignature} /> <strong> السجل التجاري:</strong> {offer.companyRegistry}</div>
    )}
  </>):(<></>)
}

{/* بيانات الوكالة (فقط إذا نعم) */}
{offer.hasAgency === "نعم" && (
  <>
    {offer.agencyNumber && idUser == offer.userAddData && (
      <div><FontAwesomeIcon icon={faFileAlt} /> <strong> رقم الوكالة:</strong> {offer.agencyNumber}</div>
    )}
    {offer.agentName && idUser == offer.userAddData && (
      <div><FontAwesomeIcon icon={faUserTie} /> <strong> اسم الوكيل:</strong> {offer.agentName}</div>
    )}
    {offer.agentID && idUser == offer.userAddData && (
      <div><FontAwesomeIcon icon={faIdCard} /> <strong> رقم هوية الوكيل:</strong> {offer.agentID}</div>
    )}
    {offer.agentPhone && idUser == offer.userAddData && (
      <div><FontAwesomeIcon icon={faPhoneAlt} /> <strong> جوال الوكيل:</strong> {offer.agentPhone}</div>
    )}
    {offer.agentBirthDate && idUser == offer.userAddData && (
      <div><FontAwesomeIcon icon={faBirthdayCake} /> <strong> ميلاد الوكيل:</strong> {offer.agentBirthDate ? moment(offer.agentBirthDate).locale('en').format('DD/MM/YYYY') : '—'  }</div>
    )}
  </>
)}


{(() => {
  const imagesContractor = [offer.imageAgent, offer.imageContract].filter(Boolean);

  if (idUser != offer.userAddData || imagesContractor.length == 0) return null;

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        {imagesContractor.map((imgC, idx) => (
          <img
            key={idx}
            src={imgC}
            alt={`صورة ${idx + 1}`}
            crossOrigin="anonymous"
            onClick={() => handleOpen(imgC)}
            style={{
    width: "100%",
    height: "240px",
    // objectFit: "cover",
    border: "2px solid black",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  }}
         className="hover-zoom"
          />
        ))}
      </div>

      {/* Modal لعرض الصورة المكبرة */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            outline: "none",
            p: 1,
            maxWidth: "90vw",
            maxHeight: "90vh",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "black",
              zIndex: 10,
            }}
          >
            <CloseIcon />
          </IconButton>

          {selectedImage && (
            <img
              src={selectedImage}
              alt="عرض كامل"
              crossOrigin="anonymous"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                display: "block",
                borderRadius: "10px",
              }}
            />
          )}
        </Box>
      </Modal>
    </>
  );
})()}






    

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
                      left: "30px",
                      bottom: "48px",
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

  );
};

export default OfferDetails;






















































  
    