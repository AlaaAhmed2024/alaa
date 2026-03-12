// import React, { useState, useEffect } from "react";
// import { MapContainer, TileLayer, Marker, useMapEvents, Circle } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// const markerIcon = new L.Icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
//   iconSize: [30, 30]
// });

// const neighborhoods = [
//   // --- الرياض ---
//   { city: "الرياض", neighborhood: "العليا", lat: 24.704, lng: 46.709 },
//   { city: "الرياض", neighborhood: "الملقا", lat: 24.803, lng: 46.635 },
//   { city: "الرياض", neighborhood: "النرجس", lat: 24.885, lng: 46.690 },
//   { city: "الرياض", neighborhood: "الياسمين", lat: 24.755, lng: 46.745 },
//   { city: "الرياض", neighborhood: "الصحافة", lat: 24.754, lng: 46.717 },
//   { city: "الرياض", neighborhood: "حي السفارات", lat: 24.706, lng: 46.642 },
//   { city: "الرياض", neighborhood: "الفاروق", lat: 24.770, lng: 46.720 },
//   { city: "الرياض", neighborhood: "العود", lat: 24.6217, lng: 46.7198 },
//   { city: "الرياض", neighborhood: "النسيم الشرقي", lat: 24.716, lng: 46.800 },
//   { city: "الرياض", neighborhood: "النسيم الغربي", lat: 24.720, lng: 46.760 },
//   { city: "الرياض", neighborhood: "حي المربع", lat: 24.686, lng: 46.713 },
//   { city: "الرياض", neighborhood: "حي الملك فهد", lat: 24.728, lng: 46.658 },
//   { city: "الرياض", neighborhood: "حي الروضة", lat: 24.760, lng: 46.794 },
//   { city: "الرياض", neighborhood: "حي الرمال", lat: 24.856, lng: 46.843 },

//   // --- جدة ---
//   { city: "جدة", neighborhood: "الروضة", lat: 21.543, lng: 39.172 },
//   { city: "جدة", neighborhood: "الحمراء", lat: 21.516, lng: 39.163 },
//   { city: "جدة", neighborhood: "السلامة", lat: 21.565, lng: 39.155 },
//   { city: "جدة", neighborhood: "النزهة", lat: 21.578, lng: 39.190 },
//   { city: "جدة", neighborhood: "البوادي", lat: 21.506, lng: 39.145 },
//   { city: "جدة", neighborhood: "الصفا", lat: 21.5849, lng: 39.2060 },
//   { city: "جدة", neighborhood: "مشرفة", lat: 21.544, lng: 39.200 },
//   { city: "جدة", neighborhood: "العزيزية", lat: 21.532, lng: 39.187 },
//   { city: "جدة", neighborhood: "بني مالك", lat: 21.540, lng: 39.189 },

//   // --- مكة ---
//   { city: "مكة", neighborhood: "العوالي", lat: 21.385, lng: 39.858 },
//   { city: "مكة", neighborhood: "العزيزية", lat: 21.418, lng: 39.825 },
//   { city: "مكة", neighborhood: "الشوقية", lat: 21.420, lng: 39.850 },
//   { city: "مكة", neighborhood: "الشرائع", lat: 21.406, lng: 39.855 },
//   { city: "مكة", neighborhood: "الهجرة", lat: 21.417, lng: 39.823 },
//   { city: "مكة", neighborhood: "الرصيفة", lat: 21.389, lng: 39.861 },
//   { city: "مكة", neighborhood: "أجياد", lat: 21.420, lng: 39.820 },
//   { city: "مكة", neighborhood: "الطندبوي", lat: 21.420, lng: 39.830 },

//   // --- المدينة ---
//   { city: "المدينة", neighborhood: "العوالي", lat: 24.483, lng: 39.610 },
//   { city: "المدينة", neighborhood: "قربان", lat: 24.517, lng: 39.616 },
//   { city: "المدينة", neighborhood: "بني ظفر", lat: 24.520, lng: 39.600 },
//   { city: "المدينة", neighborhood: "القصور", lat: 24.489, lng: 39.620 },
//   { city: "المدينة", neighborhood: "الحرة الشرقية", lat: 24.485, lng: 39.605 },

//   // --- الدمام ---
//   { city: "الدمام", neighborhood: "الشاطئ", lat: 26.425, lng: 50.097 },
//   { city: "الدمام", neighborhood: "البديع", lat: 26.425, lng: 50.120 },
//   { city: "الدمام", neighborhood: "العزيزية", lat: 26.430, lng: 50.083 },
//   { city: "الدمام", neighborhood: "المنار", lat: 26.430, lng: 50.120 },
//   { city: "الدمام", neighborhood: "النور", lat: 26.428, lng: 50.095 },

//   // --- الخبر ---
//   { city: "الخبر", neighborhood: "العقربية", lat: 26.312, lng: 50.164 },
//   { city: "الخبر", neighborhood: "البندرية", lat: 26.292, lng: 50.200 },
//   { city: "الخبر", neighborhood: "الخزامى", lat: 26.302, lng: 50.182 },
//   { city: "الخبر", neighborhood: "الصفوة", lat: 26.320, lng: 50.170 },

//   // --- الطائف ---
//   { city: "الطائف", neighborhood: "الحوية", lat: 21.284, lng: 40.423 },
//   { city: "الطائف", neighborhood: "السيل الكبير", lat: 21.301, lng: 40.376 },
//   { city: "الطائف", neighborhood: "القيم", lat: 21.285, lng: 40.410 },

//   // --- أبها ---
//   { city: "أبها", neighborhood: "المشهد", lat: 18.223, lng: 42.505 },
//   { city: "أبها", neighborhood: "النميص", lat: 18.229, lng: 42.494 },
//   { city: "أبها", neighborhood: "المحالة", lat: 18.210, lng: 42.503 },

//   // --- تبوك ---
//   { city: "تبوك", neighborhood: "مروج الأمير", lat: 28.393, lng: 36.567 },
//   { city: "تبوك", neighborhood: "الروضة", lat: 28.386, lng: 36.555 },
//   { city: "تبوك", neighborhood: "الصفا", lat: 28.400, lng: 36.570 },

//   // --- نجران ---
//   { city: "نجران", neighborhood: "الفهد", lat: 17.549, lng: 44.223 },
//   { city: "نجران", neighborhood: "الشرفة", lat: 17.540, lng: 44.230 },

//   // --- حائل ---
//   { city: "حائل", neighborhood: "الوسيطاء", lat: 27.524, lng: 41.690 },
//   { city: "حائل", neighborhood: "شراف", lat: 27.505, lng: 41.680 },
//   { city: "حائل", neighborhood: "المغواة", lat: 27.530, lng: 41.700 },

//   // --- جازان ---
//   { city: "جازان", neighborhood: "الشاطئ", lat: 16.889, lng: 42.570 },
//   { city: "جازان", neighborhood: "الصفوة", lat: 16.902, lng: 42.565 },

//   // --- عرعر ---
//   { city: "عرعر", neighborhood: "المساعدية", lat: 30.975, lng: 41.038 },
//   { city: "عرعر", neighborhood: "المحمدية", lat: 30.990, lng: 41.045 },

//   // --- الباحة ---
//   { city: "الباحة", neighborhood: "شهبة", lat: 20.012, lng: 41.471 },
//   { city: "الباحة", neighborhood: "غابة رغدان", lat: 20.014, lng: 41.473 },

//   // --- سكاكا ---
//   { city: "سكاكا", neighborhood: "النهضة", lat: 29.972, lng: 40.206 },
//   { city: "سكاكا", neighborhood: "المشرفة", lat: 29.980, lng: 40.215 },
// ];

// const RADIUS = 3000;

// function LocationMarker({ setPosition }) {
//   useMapEvents({
//     click(e) {
//       setPosition(e.latlng);
//     }
//   });
//   return null;
// }

// function getDistance(lat1, lon1, lat2, lon2) {
//   const R = 6371e3;
//   const φ1 = (lat1 * Math.PI) / 180;
//   const φ2 = (lat2 * Math.PI) / 180;
//   const Δφ = ((lat2 - lat1) * Math.PI) / 180;
//   const Δλ = ((lon2 - lon1) * Math.PI) / 180;

//   const a =
//     Math.sin(Δφ / 2) ** 2 +
//     Math.cos(φ1) * Math.cos(φ2) *
//     Math.sin(Δλ / 2) ** 2;
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//   return R * c;
// }

// export default function SaudiNeighborhoodMapGame({ onExit , darkSide }) {



  
//       if (darkSide) {
//         var textMode = "داكن";
//         var classNameModel = "loan-form";
     
//         var classRotate = 0;
//         var classColor = "model-light";
//         var tableDark = "";
//         var lableMode = "flex net-salary";
//         var backColor = "link-log-dark  dark-buttom-about";
//         var searchClass = "light-search";
//       } else {
//         var textMode = "فاتح";
//         var classNameModel = "loan-form-dark";
       
//         var classRotate = 180;
//         var classColor = "#050505";
//         var tableDark = "table-Dark";
//         var lableMode = "flex net-salary-dark";
//         var backColor = "link-log-dark  dark-buttom-about  back-color";
//         var searchClass = "dark-search";
//       }
  

//   const [questions, setQuestions] = useState([]);
//   const [index, setIndex] = useState(0);
//   const [position, setPosition] = useState(null);
//   const [score, setScore] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(25);
//   const [message, setMessage] = useState("");
//   const [gameOver, setGameOver] = useState(false);

//   useEffect(() => {
//     const shuffled = [...neighborhoods].sort(() => Math.random() - 0.5);
//     setQuestions(shuffled.slice(0, 10)); // 10 أسئلة فقط
//   }, []);

//   const currentQuestion = questions[index];

//   useEffect(() => {
//     if (gameOver || !currentQuestion) return;

//     if (timeLeft === 0) {
//       setMessage("انتهى الوقت! 😢");
//       setTimeout(() => {
//         moveToNextQuestion();


//       }, 2000);
//       return;
//     }

//     const timer = setTimeout(() => {
//       if (timeLeft > 0) {
//         setTimeLeft((prev) => prev - 1);
//       }
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [timeLeft, gameOver, currentQuestion]);

//   const checkAnswer = () => {
//     if (!position) {
//       setMessage("اختر موقعاً أولاً!");
//       return;
//     }

//     const distance = getDistance(
//       position.lat,
//       position.lng,
//       currentQuestion.lat,
//       currentQuestion.lng
//     );

//     if (distance <= RADIUS) {
//       setScore((prev) => prev + 1);
//       setMessage("صح! 👏");
//     } else {
//       setMessage(`غلط! الحي "${currentQuestion.neighborhood}" في ${currentQuestion.city}`);
//     }

//     setTimeout(() => {
//       moveToNextQuestion();
//     }, 1500);
//   };

//   const moveToNextQuestion = () => {
//     if (index < questions.length - 1) {
//       setIndex((prev) => prev + 1);
//       setMessage("");
//       setPosition(null);
//       setTimeLeft(25);
//     } else {
//       setGameOver(true);
//     }
//   };

//   if (!currentQuestion) {
//     return (

//            <div div style={{ marginTop: "10px", height: "100vh" }}>
//           <div className="p-relative" style={{ margin: "20px 0px" }}>
//             <div className="row flex-mobile " id={classNameModel} style={{ marginBottom: "200px" , margin:"auto"  , padding:"inherit" ,height:"100vh",  color:darkSide?"black":""}}>
  
//  <div className="text-center mt-4">جاري تجهيز اللعبة...</div>;
//  </div></div></div>
//     )
//   }

//   if (gameOver) {
//     return (
//                  <div div style={{ marginTop: "10px", height: "100vh" }}>
//           <div className="p-relative" style={{ margin: "20px 0px" }}>
//             <div className="row flex-mobile " id={classNameModel} style={{ marginBottom: "200px" , margin:"auto"  , padding:"inherit" ,height:"100vh",  color:darkSide?"black":""}}>
  
//       <div className="text-center mt-4">
//         <h3>انتهت اللعبة!</h3>
//         <p>نتيجتك: {score} من {questions.length}</p>
//         <button className="btn btn-primary mt-2" onClick={onExit}>
//           <i className="fas fa-home"></i> العودة للرئيسية
//         </button>
//       </div>
//       </div></div></div>
//     );
//   }

//   return (

//          <div div style={{ marginTop: "10px", height: "100vh" }}>
//           <div className="p-relative" style={{ margin: "20px 0px" }}>
//             <div className="row flex-mobile " id={classNameModel} style={{ marginBottom: "200px" , margin:"auto"   , color:darkSide?"black":""}}>
    
    
//     <div className="container text-center mt-4">
//       <h3>حدد موقع حي <b>{currentQuestion.neighborhood}</b> على الخريطة</h3>

//       <div className="alert alert-info">
//         <i className="fas fa-clock"></i> الوقت المتبقي:{" "}
//         <span className={timeLeft <= 5 ? "text-danger" : ""}>{timeLeft} ثانية</span>
//       </div>

//       <p>السؤال {index + 1} من 10</p> {/* عداد الأسئلة */}

//       <div className="mt-3" style={{ height: "400px" }}>
//         <MapContainer
//           center={[23.8859, 45.0792]}
//           zoom={5}
//           style={{ height: "100%", width: "100%" }}
//         >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution="&copy; OpenStreetMap contributors"
//           />
//           <LocationMarker setPosition={setPosition} />
//           {position && <Marker position={position} icon={markerIcon}></Marker>}
//           <Circle
//             center={[currentQuestion.lat, currentQuestion.lng]}
//             radius={RADIUS}
//             pathOptions={{ color: "green", fillOpacity: 0.1 }}
//           />
//         </MapContainer>
//       </div>

//       <button
//         className="btn btn-success mt-3"
//         onClick={checkAnswer}
//       >
//         <i className="fas fa-check"></i> تحقق من الإجابة
//       </button>

//       <p className="mt-2">{message}</p>
//       <p>النتيجة: {score}</p>
//     </div>
//     </div>
//     </div></div>
//   );
// }



import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30]
});

const neighborhoods = [

  { city: "الرياض", neighborhood: "العليا", lat: 24.704, lng: 46.709 },
  { city: "الرياض", neighborhood: "الملقا", lat: 24.803, lng: 46.635 },
  { city: "الرياض", neighborhood: "النرجس", lat: 24.885, lng: 46.690 },
  { city: "الرياض", neighborhood: "الياسمين", lat: 24.755, lng: 46.745 },
  { city: "الرياض", neighborhood: "الصحافة", lat: 24.754, lng: 46.717 },
  { city: "الرياض", neighborhood: "حي السفارات", lat: 24.706, lng: 46.642 },
  { city: "الرياض", neighborhood: "الفاروق", lat: 24.770, lng: 46.720 },
  { city: "الرياض", neighborhood: "العود", lat: 24.6217, lng: 46.7198 },
  { city: "الرياض", neighborhood: "النسيم الشرقي", lat: 24.716, lng: 46.800 },
  { city: "الرياض", neighborhood: "النسيم الغربي", lat: 24.720, lng: 46.760 },
  { city: "الرياض", neighborhood: "حي المربع", lat: 24.686, lng: 46.713 },
  { city: "الرياض", neighborhood: "حي الملك فهد", lat: 24.728, lng: 46.658 },
  { city: "الرياض", neighborhood: "حي الروضة", lat: 24.760, lng: 46.794 },
  { city: "الرياض", neighborhood: "حي الرمال", lat: 24.856, lng: 46.843 },

  // --- جدة ---
  { city: "جدة", neighborhood: "الروضة", lat: 21.543, lng: 39.172 },
  { city: "جدة", neighborhood: "الحمراء", lat: 21.516, lng: 39.163 },
  { city: "جدة", neighborhood: "السلامة", lat: 21.565, lng: 39.155 },
  { city: "جدة", neighborhood: "النزهة", lat: 21.578, lng: 39.190 },
  { city: "جدة", neighborhood: "البوادي", lat: 21.506, lng: 39.145 },
  { city: "جدة", neighborhood: "الصفا", lat: 21.5849, lng: 39.2060 },
  { city: "جدة", neighborhood: "مشرفة", lat: 21.544, lng: 39.200 },
  { city: "جدة", neighborhood: "العزيزية", lat: 21.532, lng: 39.187 },
  { city: "جدة", neighborhood: "بني مالك", lat: 21.540, lng: 39.189 },

  // --- مكة ---
  { city: "مكة", neighborhood: "العوالي", lat: 21.385, lng: 39.858 },
  { city: "مكة", neighborhood: "العزيزية", lat: 21.418, lng: 39.825 },
  { city: "مكة", neighborhood: "الشوقية", lat: 21.420, lng: 39.850 },
  { city: "مكة", neighborhood: "الشرائع", lat: 21.406, lng: 39.855 },
  { city: "مكة", neighborhood: "الهجرة", lat: 21.417, lng: 39.823 },
  { city: "مكة", neighborhood: "الرصيفة", lat: 21.389, lng: 39.861 },
  { city: "مكة", neighborhood: "أجياد", lat: 21.420, lng: 39.820 },
  { city: "مكة", neighborhood: "الطندبوي", lat: 21.420, lng: 39.830 },

  // --- المدينة ---
  { city: "المدينة", neighborhood: "العوالي", lat: 24.483, lng: 39.610 },
  { city: "المدينة", neighborhood: "قربان", lat: 24.517, lng: 39.616 },
  { city: "المدينة", neighborhood: "بني ظفر", lat: 24.520, lng: 39.600 },
  { city: "المدينة", neighborhood: "القصور", lat: 24.489, lng: 39.620 },
  { city: "المدينة", neighborhood: "الحرة الشرقية", lat: 24.485, lng: 39.605 },

  // --- الدمام ---
  { city: "الدمام", neighborhood: "الشاطئ", lat: 26.425, lng: 50.097 },
  { city: "الدمام", neighborhood: "البديع", lat: 26.425, lng: 50.120 },
  { city: "الدمام", neighborhood: "العزيزية", lat: 26.430, lng: 50.083 },
  { city: "الدمام", neighborhood: "المنار", lat: 26.430, lng: 50.120 },
  { city: "الدمام", neighborhood: "النور", lat: 26.428, lng: 50.095 },

  // --- الخبر ---
  { city: "الخبر", neighborhood: "العقربية", lat: 26.312, lng: 50.164 },
  { city: "الخبر", neighborhood: "البندرية", lat: 26.292, lng: 50.200 },
  { city: "الخبر", neighborhood: "الخزامى", lat: 26.302, lng: 50.182 },
  { city: "الخبر", neighborhood: "الصفوة", lat: 26.320, lng: 50.170 },

  // --- الطائف ---
  { city: "الطائف", neighborhood: "الحوية", lat: 21.284, lng: 40.423 },
  { city: "الطائف", neighborhood: "السيل الكبير", lat: 21.301, lng: 40.376 },
  { city: "الطائف", neighborhood: "القيم", lat: 21.285, lng: 40.410 },

  // --- أبها ---
  { city: "أبها", neighborhood: "المشهد", lat: 18.223, lng: 42.505 },
  { city: "أبها", neighborhood: "النميص", lat: 18.229, lng: 42.494 },
  { city: "أبها", neighborhood: "المحالة", lat: 18.210, lng: 42.503 },

  // --- تبوك ---
  { city: "تبوك", neighborhood: "مروج الأمير", lat: 28.393, lng: 36.567 },
  { city: "تبوك", neighborhood: "الروضة", lat: 28.386, lng: 36.555 },
  { city: "تبوك", neighborhood: "الصفا", lat: 28.400, lng: 36.570 },

  // --- نجران ---
  { city: "نجران", neighborhood: "الفهد", lat: 17.549, lng: 44.223 },
  { city: "نجران", neighborhood: "الشرفة", lat: 17.540, lng: 44.230 },

  // --- حائل ---
  { city: "حائل", neighborhood: "الوسيطاء", lat: 27.524, lng: 41.690 },
  { city: "حائل", neighborhood: "شراف", lat: 27.505, lng: 41.680 },
  { city: "حائل", neighborhood: "المغواة", lat: 27.530, lng: 41.700 },

  // --- جازان ---
  { city: "جازان", neighborhood: "الشاطئ", lat: 16.889, lng: 42.570 },
  { city: "جازان", neighborhood: "الصفوة", lat: 16.902, lng: 42.565 },

  // --- عرعر ---
  { city: "عرعر", neighborhood: "المساعدية", lat: 30.975, lng: 41.038 },
  { city: "عرعر", neighborhood: "المحمدية", lat: 30.990, lng: 41.045 },

  // --- الباحة ---
  { city: "الباحة", neighborhood: "شهبة", lat: 20.012, lng: 41.471 },
  { city: "الباحة", neighborhood: "غابة رغدان", lat: 20.014, lng: 41.473 },

  // --- سكاكا ---
  { city: "سكاكا", neighborhood: "النهضة", lat: 29.972, lng: 40.206 },
  { city: "سكاكا", neighborhood: "المشرفة", lat: 29.980, lng: 40.215 },
];

const RADIUS = 3000;

function LocationMarker({ setPosition }) {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    }
  });
  return null;
}

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3;
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) ** 2 +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

export default function SaudiNeighborhoodMapGame({ onExit, darkSide }) {
  // إعداد الثيم
  if (darkSide) {
    var textMode = "داكن";
    var classNameModel = "loan-form";
    var classRotate = 0;
    var classColor = "model-light";
    var tableDark = "";
    var lableMode = "flex net-salary";
    var backColor = "link-log-dark  dark-buttom-about";
    var searchClass = "light-search";
  } else {
    var textMode = "فاتح";
    var classNameModel = "loan-form-dark";
    var classRotate = 180;
    var classColor = "#050505";
    var tableDark = "table-Dark";
    var lableMode = "flex net-salary-dark";
    var backColor = "link-log-dark  dark-buttom-about  back-color";
    var searchClass = "dark-search";
  }

  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(25);
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [answered, setAnswered] = useState(false); // لتحديد متى نظهر زر "التالي"

  // تحضير الأسئلة
  useEffect(() => {
    const shuffled = [...neighborhoods].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, 10));
  }, []);

  const currentQuestion = questions[index];

  // مؤقت الوقت
  useEffect(() => {
    if (gameOver || !currentQuestion) return;

    if (timeLeft === 0) {
      setMessage("انتهى الوقت! 😢");
      setAnswered(true); // حتى يظهر زر "التالي"
      return;
    }

    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft((prev) => prev - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, gameOver, currentQuestion]);

  // التحقق من الإجابة
  const checkAnswer = () => {
    if (!position) {
      setMessage("اختر موقعاً أولاً!");
      return;
    }

    const distance = getDistance(
      position.lat,
      position.lng,
      currentQuestion.lat,
      currentQuestion.lng
    );

    if (distance <= RADIUS) {
      setScore((prev) => prev + 1);
      setMessage("صح! 👏");
    } else {
      setMessage(`غلط! الحي "${currentQuestion.neighborhood}" في ${currentQuestion.city}`);
    }

    setAnswered(true); // إظهار زر التالي بعد التحقق
  };

  // الانتقال للسؤال التالي
  const moveToNextQuestion = () => {
    if (index < questions.length - 1) {
      setIndex((prev) => prev + 1);
      setMessage("");
      setPosition(null);
      setTimeLeft(25);
      setAnswered(false);
    } else {
      setGameOver(true);
    }
  };

  // إعادة اللعب
  const restartGame = () => {
    const shuffled = [...neighborhoods].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, 10));
    setIndex(0);
    setScore(0);
    setMessage("");
    setPosition(null);
    setTimeLeft(25);
    setGameOver(false);
    setAnswered(false);
  };

  // في حالة تحميل الأسئلة
  if (!currentQuestion) {
    return (
      <div style={{ marginTop: "10px", height: "100vh" }}>
        <div className="p-relative" style={{ margin: "20px 0px" }}>
          <div
            className="row flex-mobile"
            id={classNameModel}
            style={{
              marginBottom: "200px",
              margin: "auto",
              padding: "inherit",
              height: "100vh",
              color: darkSide ? "black" : ""
            }}
          >
            <div className="text-center mt-4">جاري تجهيز اللعبة...</div>
          </div>
        </div>
      </div>
    );
  }

  // في حالة انتهاء اللعبة
  if (gameOver) {
    return (
      <div style={{ marginTop: "10px", height: "100vh" }}>
        <div className="p-relative" style={{ margin: "20px 0px" }}>
          <div
            className="row flex-mobile"
            id={classNameModel}
            style={{
              marginBottom: "200px",
              margin: "auto",
              padding: "inherit",
              height: "100vh",
              color: darkSide ? "black" : ""
            }}
          >
            <div className="text-center mt-4">
              <h3>انتهت اللعبة!</h3>
              <p>نتيجتك: {score} من {questions.length}</p>
            <div>
              <button
                className="btn btn-success mt-2 me-2"
                onClick={restartGame}
              >
                <i className="fas fa-redo"></i> إعادة اللعب
              </button>

              <button className="btn btn-primary mt-2  me-2" onClick={onExit}>
                <i className="fas fa-home"></i> العودة للرئيسية
              </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // أثناء اللعب
  return (
    <div style={{ marginTop: "10px", height: "100vh" }}>
      <div className="p-relative" style={{ margin: "20px 0px" }}>
        <div
          className="row flex-mobile"
          id={classNameModel}
          style={{
            marginBottom: "200px",
            margin: "auto",
            color: darkSide ? "black" : ""
          }}
        >
          <div className="container text-center mt-4">
            <h3>حدد موقع حي <b>{currentQuestion.neighborhood}</b> على الخريطة</h3>

            <div className="alert alert-info">
              <i className="fas fa-clock"></i> الوقت المتبقي:{" "}
              <span className={timeLeft <= 5 ? "text-danger" : ""}>{timeLeft} ثانية</span>
            </div>

            <p>السؤال {index + 1} من 10</p>

            <div className="mt-3" style={{ height: "400px" }}>
              <MapContainer
                center={[23.8859, 45.0792]}
                zoom={5}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />
                <LocationMarker setPosition={setPosition} />
                {position && <Marker position={position} icon={markerIcon}></Marker>}
                <Circle
                  center={[currentQuestion.lat, currentQuestion.lng]}
                  radius={RADIUS}
                  pathOptions={{ color: "green", fillOpacity: 0.1 }}
                />
              </MapContainer>
            </div>

            <button className="btn btn-success mt-3" onClick={checkAnswer}>
              <i className="fas fa-check"></i> تحقق من الإجابة
            </button>

            {/* زر التالي يظهر بعد التحقق */}
            {answered && (
              <button
                className="btn btn-primary mt-3 ms-2 animate-bounce-in"
                onClick={moveToNextQuestion}
                style={{marginRight:"0.5rem"}}
              >
                التالي
              </button>
            )}

            <p className="mt-2">{message}</p>
            <p>النتيجة: {score}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

