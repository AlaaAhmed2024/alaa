// import React, { useEffect, useState } from "react";

// export default function PriceGuessGame({ onExit }) {
//   const [offers, setOffers] = useState([]);
//   const [currentOffer, setCurrentOffer] = useState(null);
//   const [options, setOptions] = useState([]);
//   const [message, setMessage] = useState("");
//   const [score, setScore] = useState(0);
//   const [index, setIndex] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(25);
//   const [gameOver, setGameOver] = useState(false);

//   const QUESTIONS_COUNT = 10; // عدد الأسئلة
//   const TIME_PER_QUESTION = 25; // ثواني

//   useEffect(() => {
//     fetch("http://localhost:8090/offers")
//       .then((res) => res.json())
//       .then((data) => {
//         setOffers(data);
//         if (data.length > 0) {
//           setupQuestion(data, 0);
//         }
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   const setupQuestion = (data, questionIndex) => {
//     const offer = data[questionIndex];
//     setCurrentOffer(offer);

//     const correctPrice = parseInt(offer.price, 10);
//     const randomPrices = generateClosePrices(correctPrice);
//     const allOptions = shuffleArray([correctPrice, ...randomPrices]);

//     setOptions(allOptions);
//     setTimeLeft(TIME_PER_QUESTION);
//   };

// //   const generateClosePrices = (price) => {
// //     const percentage = 0.15; // 15%
// //     const variance = Math.floor(price * percentage);
// //     return [
// //       price + variance,
// //       price - variance,
// //       price + Math.floor(variance / 2),
// //     ];
// //   };

//   const generateClosePrices = (price) => {
//   const percentage = 0.10; // 10%
//   const variance = Math.floor(price * percentage);

//   // نحسب 3 أسعار: أعلى، أقل، وأعلى شوي
//   let prices = [
//     price + variance,
//     price - variance,
//     price + Math.floor(variance / 2)
//   ];

//   // تقريب الأسعار لأقرب 10 آلاف
//   prices = prices.map((p) => Math.round(p / 10000) * 10000);

//   return prices;
// };


//   const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

//   const checkAnswer = (price) => {
//     if (price === parseInt(currentOffer.price, 10)) {
//       setScore(score + 1);
//       setMessage("إجابة صحيحة! 👏");
//     } else {
//       setMessage(`غلط! السعر الصحيح هو ${currentOffer.price} ريال`);
//     }

//     setTimeout(() => {
//       moveToNextQuestion(price === parseInt(currentOffer.price, 10));
//     }, 2000);
//   };

//   const moveToNextQuestion = (isCorrect = false) => {
//     const nextIndex = index + 1;
//     if (nextIndex < QUESTIONS_COUNT && nextIndex < offers.length) {
//       setIndex(nextIndex);
//       setupQuestion(offers, nextIndex);
//       setMessage("");
//     } else {
//       setMessage(
//         `انتهت اللعبة! نتيجتك: ${score + (isCorrect ? 1 : 0)} من ${
//           QUESTIONS_COUNT
//         }`
//       );
//       setGameOver(true);
//     }
//   };

//   // عداد الوقت
//   useEffect(() => {
//     if (!currentOffer || gameOver) return;

//     if (timeLeft === 0) {
//       setMessage(`انتهى الوقت! السعر الصحيح هو ${currentOffer.price} ريال`);
//       setTimeout(() => {
//         moveToNextQuestion(false);
//       }, 2000);
//       return;
//     }

//     const timer = setTimeout(() => {
//       setTimeLeft((prev) => prev - 1);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [timeLeft, currentOffer, gameOver]);

//   if (!currentOffer) return <p>جاري تحميل البيانات...</p>;

//   return (
//     <div className="container text-center mt-4">
//       {!gameOver && (
//         <p className="fw-bold">
//           سؤال {index + 1} من {QUESTIONS_COUNT}
//         </p>
//       )}

//   <div
//   style={{
//     textAlign: "center",
//     whiteSpace: "pre-line",
//     fontSize: "18px",
//     fontWeight: "500",
//     marginBottom: "15px",
//   }}
// >
//   كم تتوقع سعر {currentOffer.aqarType} بمدينة {currentOffer.selectedCity} حي{" "}
//   {currentOffer.selectedDistricts} بمساحة {currentOffer.area}م²
//   {"\n"}
//   {currentOffer.roomsCountMastar && currentOffer.roomsCountMastar !== "0" &&
//     `عدد الغرف الماستر: ${currentOffer.roomsCountMastar}\n`}
//   {currentOffer.roomsCount && currentOffer.roomsCount !== "0" &&
//     `عدد الغرف: ${currentOffer.roomsCount}\n`}
//   {currentOffer.bathroomsCount && currentOffer.bathroomsCount !== "0" &&
//     `عدد دورات المياه: ${currentOffer.bathroomsCount}\n`}
//   {currentOffer.majlesCount && currentOffer.majlesCount !== "0" &&
//     `عدد المجالس: ${currentOffer.majlesCount}\n`}
//   {currentOffer.hallsCount && currentOffer.hallsCount !== "0" &&
//     `عدد الصالات: ${currentOffer.hallsCount}\n`}
//   {currentOffer.maqlatCount && currentOffer.maqlatCount !== "0" &&
//     `عدد المقلط: ${currentOffer.maqlatCount}\n`}
//   {currentOffer.kitchenCount && currentOffer.kitchenCount !== "0" &&
//     `عدد المطابخ: ${currentOffer.kitchenCount}\n`}

//   {"\n"}
//   {currentOffer.featureCarEntrance && currentOffer.featureCarEntrance !== "0" && "مدخل سيارة\n"}
//   {currentOffer.featureYard && currentOffer.featureYard !== "0" && "حوش سيارات\n"}
//   {currentOffer.featureStorage && currentOffer.featureStorage !== "0" && "غرفة تخزين\n"}
//   {currentOffer.featureAnnex && currentOffer.featureAnnex !== "0" && "ملحق\n"}
//   {currentOffer.featureElevator && currentOffer.featureElevator !== "0" && "مصعد\n"}
//   {currentOffer.featureElevatorT && currentOffer.featureElevatorT !== "0" && "تاسيس مصعد\n"}
//   {currentOffer.featureRoof && currentOffer.featureRoof !== "0" && "سطح\n"}
//   {currentOffer.featureNearServices && currentOffer.featureNearServices !== "0" && "قريب من الخدمات\n"}
//   {currentOffer.featureLaundryRoom && currentOffer.featureLaundryRoom !== "0" && "غرفة غسيل\n"}
//   {currentOffer.featureBalcony && currentOffer.featureBalcony !== "0" && "بلكونه\n"}
//   {currentOffer.featureParking && currentOffer.featureParking !== "0" && "موقف سيارات\n"}
//   {currentOffer.featureMaid && currentOffer.featureMaid !== "0" && "غرفة خادمة\n"}
//   {currentOffer.featureGuard && currentOffer.featureGuard !== "0" && "غرفة حارس\n"}
//   {currentOffer.featureDriver && currentOffer.featureDriver !== "0" && "غرفة سائق\n"}
// </div>





//       {!gameOver && (
//         <div className="alert alert-info">
//           <i className="fas fa-clock"></i> الوقت المتبقي:{" "}
//           <span className={timeLeft <= 5 ? "text-danger" : ""}>
//             {timeLeft} ثانية
//           </span>
//         </div>
//       )}

//       {!gameOver && (
//         <div className="mt-3">
//           {options.map((price, idx) => (
//             <button
//               key={idx}
//               className="btn btn-outline-primary m-2"
//               onClick={() => checkAnswer(price)}
//             >
//               {price.toLocaleString()} ريال
//             </button>
//           ))}
//         </div>
//       )}

//       <p className="mt-3">{message}</p>
//       {!gameOver && <p>النتيجة الحالية: {score}</p>}

//       {gameOver && (
//         <button className="btn btn-primary mt-3" onClick={onExit}>
//           العودة للرئيسية
//         </button>
//       )}
//     </div>
//   );
// }











// import React, { useEffect, useState } from "react";

// export default function PriceGuessGame({ onExit }) {
//   const [offers, setOffers] = useState([]);
//   const [currentOffer, setCurrentOffer] = useState(null);
//   const [options, setOptions] = useState([]);
//   const [message, setMessage] = useState("");
//   const [score, setScore] = useState(0);
//   const [index, setIndex] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(25);
//   const [gameOver, setGameOver] = useState(false);
//   const [usingFallback, setUsingFallback] = useState(false);

//   const QUESTIONS_COUNT = 10; // عدد الأسئلة
//   const TIME_PER_QUESTION = 25; // ثواني

//   // بيانات مثال في حال عدم وجود بيانات من API
//   const fallbackData = [
//     {
//       aqarType: "فيلا",
//       selectedCity: "الرياض",
//       selectedDistricts: "العليا",
//       area: 400,
//       price: 1200000,
//       roomsCountMastar: 1,
//       roomsCount: 5,
//       bathroomsCount: 4,
//       majlesCount: 2,
//       hallsCount: 1,
//       maqlatCount: 1,
//       kitchenCount: 1,
//       featureCarEntrance: 1,
//       featureYard: 1,
//       featureStorage: 0,
//       featureAnnex: 1,
//       featureElevator: 0,
//       featureElevatorT: 0,
//       featureRoof: 1,
//       featureNearServices: 1,
//       featureLaundryRoom: 1,
//       featureBalcony: 1,
//       featureParking: 1,
//       featureMaid: 0,
//       featureGuard: 0,
//       featureDriver: 0,
//     },
//     {
//       aqarType: "شقة",
//       selectedCity: "جدة",
//       selectedDistricts: "الروضة",
//       area: 200,
//       price: 600000,
//       roomsCountMastar: 0,
//       roomsCount: 3,
//       bathroomsCount: 2,
//       majlesCount: 1,
//       hallsCount: 1,
//       maqlatCount: 0,
//       kitchenCount: 1,
//       featureCarEntrance: 0,
//       featureYard: 0,
//       featureStorage: 1,
//       featureAnnex: 0,
//       featureElevator: 1,
//       featureElevatorT: 0,
//       featureRoof: 0,
//       featureNearServices: 1,
//       featureLaundryRoom: 1,
//       featureBalcony: 1,
//       featureParking: 1,
//       featureMaid: 0,
//       featureGuard: 0,
//       featureDriver: 0,
//     },
//   ];

//   useEffect(() => {
//     fetch("http://localhost:8090/offers")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.length > 0) {
//           setOffers(data);
//           setupQuestion(data, 0);
//         } else {
//           setOffers(fallbackData);
//           setupQuestion(fallbackData, 0);
//           setUsingFallback(true);
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//         setOffers(fallbackData);
//         setupQuestion(fallbackData, 0);
//         setUsingFallback(true);
//       });
//   }, []);

//   const setupQuestion = (data, questionIndex) => {
//     const offer = data[questionIndex];
//     setCurrentOffer(offer);

//     const correctPrice = parseInt(offer.price, 10);
//     const randomPrices = generateClosePrices(correctPrice);
//     const allOptions = shuffleArray([correctPrice, ...randomPrices]);

//     setOptions(allOptions);
//     setTimeLeft(TIME_PER_QUESTION);
//   };

//   const generateClosePrices = (price) => {
//     const percentage = 0.1; // 10%
//     const variance = Math.floor(price * percentage);

//     let prices = [
//       price + variance,
//       price - variance,
//       price + Math.floor(variance / 2),
//     ];

//     // تقريب الأسعار لأقرب 10 آلاف
//     prices = prices.map((p) => Math.round(p / 10000) * 10000);

//     return prices;
//   };

//   const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

//   const checkAnswer = (price) => {
//     if (price === parseInt(currentOffer.price, 10)) {
//       setScore(score + 1);
//       setMessage("إجابة صحيحة! 👏");
//     } else {
//       setMessage(`غلط! السعر الصحيح هو ${currentOffer.price} ريال`);
//     }

//     setTimeout(() => {
//       moveToNextQuestion(price === parseInt(currentOffer.price, 10));
//     }, 2000);
//   };

//   const moveToNextQuestion = (isCorrect = false) => {
//     const nextIndex = index + 1;
//     if (nextIndex < QUESTIONS_COUNT && nextIndex < offers.length) {
//       setIndex(nextIndex);
//       setupQuestion(offers, nextIndex);
//       setMessage("");
//     } else {
//       setMessage(
//         `انتهت اللعبة! نتيجتك: ${score + (isCorrect ? 1 : 0)} من ${
//           QUESTIONS_COUNT
//         }`
//       );
//       setGameOver(true);
//     }
//   };

//   // عداد الوقت
//   useEffect(() => {
//     if (!currentOffer || gameOver) return;

//     if (timeLeft === 0) {
//       setMessage(`انتهى الوقت! السعر الصحيح هو ${currentOffer.price} ريال`);
//       setTimeout(() => {
//         moveToNextQuestion(false);
//       }, 2000);
//       return;
//     }

//     const timer = setTimeout(() => {
//       setTimeLeft((prev) => prev - 1);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [timeLeft, currentOffer, gameOver]);

//   if (!currentOffer) return <p>جاري تحميل البيانات...</p>;

//   return (
//     <div className="container text-center mt-4">
//       {/* رسالة استخدام بيانات مثال */}
//       {usingFallback && (
//         <div className="alert alert-warning">
//           لم يتم العثور على قاعده البيانات , جاري استخدام بيانات مثال للتجربة.
//         </div>
//       )}

//       {!gameOver && (
//         <p className="fw-bold">
//           سؤال {index + 1} من {QUESTIONS_COUNT}
//         </p>
//       )}

//       <div
//         style={{
//           textAlign: "center",
//           whiteSpace: "pre-line",
//           fontSize: "18px",
//           fontWeight: "500",
//           marginBottom: "15px",
//         }}
//       >
//         كم تتوقع سعر {currentOffer.aqarType} بمدينة {currentOffer.selectedCity} حي{" "}
//         {currentOffer.selectedDistricts} بمساحة {currentOffer.area}م²
//         {"\n"}
//         {currentOffer.roomsCountMastar && currentOffer.roomsCountMastar !== "0" &&
//           `عدد الغرف الماستر: ${currentOffer.roomsCountMastar}\n`}
//         {currentOffer.roomsCount && currentOffer.roomsCount !== "0" &&
//           `عدد الغرف: ${currentOffer.roomsCount}\n`}
//         {currentOffer.bathroomsCount && currentOffer.bathroomsCount !== "0" &&
//           `عدد دورات المياه: ${currentOffer.bathroomsCount}\n`}
//         {currentOffer.majlesCount && currentOffer.majlesCount !== "0" &&
//           `عدد المجالس: ${currentOffer.majlesCount}\n`}
//         {currentOffer.hallsCount && currentOffer.hallsCount !== "0" &&
//           `عدد الصالات: ${currentOffer.hallsCount}\n`}
//         {currentOffer.maqlatCount && currentOffer.maqlatCount !== "0" &&
//           `عدد المقلط: ${currentOffer.maqlatCount}\n`}
//         {currentOffer.kitchenCount && currentOffer.kitchenCount !== "0" &&
//           `عدد المطابخ: ${currentOffer.kitchenCount}\n`}

//         {"\n"}
//         {currentOffer.featureCarEntrance && currentOffer.featureCarEntrance !== "0" && "مدخل سيارة\n"}
//         {currentOffer.featureYard && currentOffer.featureYard !== "0" && "حوش سيارات\n"}
//         {currentOffer.featureStorage && currentOffer.featureStorage !== "0" && "غرفة تخزين\n"}
//         {currentOffer.featureAnnex && currentOffer.featureAnnex !== "0" && "ملحق\n"}
//         {currentOffer.featureElevator && currentOffer.featureElevator !== "0" && "مصعد\n"}
//         {currentOffer.featureElevatorT && currentOffer.featureElevatorT !== "0" && "تاسيس مصعد\n"}
//         {currentOffer.featureRoof && currentOffer.featureRoof !== "0" && "سطح\n"}
//         {currentOffer.featureNearServices && currentOffer.featureNearServices !== "0" && "قريب من الخدمات\n"}
//         {currentOffer.featureLaundryRoom && currentOffer.featureLaundryRoom !== "0" && "غرفة غسيل\n"}
//         {currentOffer.featureBalcony && currentOffer.featureBalcony !== "0" && "بلكونه\n"}
//         {currentOffer.featureParking && currentOffer.featureParking !== "0" && "موقف سيارات\n"}
//         {currentOffer.featureMaid && currentOffer.featureMaid !== "0" && "غرفة خادمة\n"}
//         {currentOffer.featureGuard && currentOffer.featureGuard !== "0" && "غرفة حارس\n"}
//         {currentOffer.featureDriver && currentOffer.featureDriver !== "0" && "غرفة سائق\n"}
//       </div>

//       {!gameOver && (
//         <div className="alert alert-info">
//           <i className="fas fa-clock"></i> الوقت المتبقي:{" "}
//           <span className={timeLeft <= 5 ? "text-danger" : ""}>
//             {timeLeft} ثانية
//           </span>
//         </div>
//       )}

//       {!gameOver && (
//         <div className="mt-3">
//           {options.map((price, idx) => (
//             <button
//               key={idx}
//               className="btn btn-outline-primary m-2"
//               onClick={() => checkAnswer(price)}
//             >
//               {price.toLocaleString()} ريال
//             </button>
//           ))}
//         </div>
//       )}

//       <p className="mt-3">{message}</p>
//       {!gameOver && <p>النتيجة الحالية: {score}</p>}

//       {/* {gameOver && (
//         <button className="btn btn-primary mt-3" onClick={onExit}>
//           العودة للرئيسية
//         </button>
//       )} */}

//       {gameOver && (
//   <div className="mt-3">
//     <button
//       className="btn btn-success m-2"
//       onClick={() => {
//         // إعادة تعيين الحالة للبدء من جديد
//         setScore(0);
//         setIndex(0);
//         setGameOver(false);
//         setupQuestion(offers, 0);
//         setMessage("");
//       }}
//     >
//       إعادة اللعب
//     </button>

//     <button className="btn btn-primary m-2" onClick={onExit}>
//       العودة للرئيسية
//     </button>
//   </div>
// )}

//     </div>
//   );
// }






// import React, { useEffect, useState } from "react";

// export default function PriceGuessGame({ onExit }) {
//   const [offers, setOffers] = useState([]);
//   const [currentOffer, setCurrentOffer] = useState(null);
//   const [options, setOptions] = useState([]);
//   const [message, setMessage] = useState("");
//   const [score, setScore] = useState(0);
//   const [index, setIndex] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(25);
//   const [gameOver, setGameOver] = useState(false);
//   const [usingExampleData, setUsingExampleData] = useState(false);
//   const [answered, setAnswered] = useState(false); // لتعطيل الأزرار بعد الإجابة

//   const QUESTIONS_COUNT = 10; // عدد الأسئلة
//   const TIME_PER_QUESTION = 25; // ثواني

//   const exampleData = [
//     {
//       selectedCity: "جدة",
//       selectedDistricts: "الروضة",
//       area: 150,
//       roomsCountMastar: "1",
//       roomsCount: "3",
//       bathroomsCount: "2",
//       majlesCount: "0",
//       hallsCount: "1",
//       maqlatCount: "0",
//       kitchenCount: "1",
//       featureCarEntrance: "0",
//       featureYard: "0",
//       featureStorage: "0",
//       featureAnnex: "0",
//       featureElevator: "1",
//       featureElevatorT: "0",
//       featureRoof: "0",
//       featureNearServices: "1",
//       featureLaundryRoom: "1",
//       featureBalcony: "1",
//       featureParking: "0",
//       featureMaid: "0",
//       featureGuard: "0",
//       featureDriver: "0",
//       aqarFloor: 1,
//       price: 700000,
//       aqarType: "فيلا",
//     },
//     // يمكن إضافة بيانات مثال إضافية هنا
//   ];

//   const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

//   // تحميل بيانات المثال عند الفشل أو عدم وجود بيانات
//   const loadExampleData = () => {
//     setUsingExampleData(true);
//     setOffers(shuffleArray(exampleData));
//     setupQuestion(shuffleArray(exampleData), 0);
//   };

//   useEffect(() => {
//     fetch("http://localhost:8090/offers")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data && data.length > 0) {
//           const shuffled = shuffleArray(data);
//           setOffers(shuffled);
//           setupQuestion(shuffled, 0);
//         } else {
//           loadExampleData();
//         }
//       })
//       .catch(() => {
//         loadExampleData();
//       });
//   }, []);

//   const setupQuestion = (data, questionIndex) => {
//     const offer = data[questionIndex];
//     setCurrentOffer(offer);

//     const correctPrice = parseInt(offer.price, 10);
//     const randomPrices = generateClosePrices(correctPrice);
//     const allOptions = shuffleArray([correctPrice, ...randomPrices]);

//     setOptions(allOptions);
//     setTimeLeft(TIME_PER_QUESTION);
//     setMessage("");
//     setAnswered(false);
//   };

//   const generateClosePrices = (price) => {
//     const percentage = 0.10; // 10%
//     const variance = Math.floor(price * percentage);

//     let prices = [
//       price + variance,
//       price - variance,
//       price + Math.floor(variance / 2),
//     ];

//     prices = prices.map((p) => Math.round(p / 10000) * 10000);
//     return prices;
//   };

//   const checkAnswer = (price) => {
//     if (answered) return; // منع الإجابة أكثر من مرة

//     setAnswered(true);
//     const correct = price === parseInt(currentOffer.price, 10);

//     if (correct) {
//       setScore(score + 1);
//       setMessage("إجابة صحيحة! 👏");
//     } else {
//       setMessage(`غلط! السعر الصحيح هو ${currentOffer.price} ريال`);
//     }
//   };

//   const moveToNextQuestion = () => {
//     if (!answered) return; // لا يسمح بالانتقال بدون إجابة

//     const nextIndex = index + 1;
//     const maxQuestions = usingExampleData ? exampleData.length : Math.min(offers.length, QUESTIONS_COUNT);

//     if (nextIndex < maxQuestions) {
//       setIndex(nextIndex);
//       setupQuestion(usingExampleData ? exampleData : offers, nextIndex);
//     } else {
//       setGameOver(true);
//       setMessage(`انتهت اللعبة! نتيجتك: ${score} من ${maxQuestions}`);
//     }
//   };

//   // عداد الوقت
//   useEffect(() => {
//     if (!currentOffer || gameOver || answered) return;

//     if (timeLeft === 0) {
//       setMessage(`انتهى الوقت! السعر الصحيح هو ${currentOffer.price} ريال`);
//       setAnswered(true);
//       return;
//     }

//     const timer = setTimeout(() => {
//       setTimeLeft(timeLeft - 1);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [timeLeft, currentOffer, gameOver, answered]);

//   if (!currentOffer) return <p>جاري تحميل البيانات...</p>;

//   // دالة مساعدة لعرض البيانات مع تجاهل القيم صفر أو "0"
//   const showIfPositive = (val, label) => {
//     if (!val || val === "0" || val === 0) return null;
//     return label;
//   };

//   return (
//     <div className="container text-center mt-4">
//       {usingExampleData && (
//         <div className="alert alert-warning">
//           لم يتم الاتصال بقاعدة البيانات الحقيقية، جاري استخدام بيانات مثال.
//         </div>
//       )}

//       {!gameOver && (
//         <p className="fw-bold">
//           سؤال {index + 1} من{" "}
//           {usingExampleData ? exampleData.length : QUESTIONS_COUNT}
//         </p>
//       )}

//       {!gameOver && (
//         <div
//           style={{
//             textAlign: "center",
//             whiteSpace: "pre-line",
//             fontSize: "18px",
//             fontWeight: "500",
//             marginBottom: "15px",
//           }}
//         >
//           كم تتوقع سعر {currentOffer.aqarType} بمدينة {currentOffer.selectedCity} حي{" "}
//           {currentOffer.selectedDistricts} بمساحة {currentOffer.area}م²
//           {"\n"}
//           {showIfPositive(currentOffer.roomsCountMastar, `عدد الغرف الماستر: ${currentOffer.roomsCountMastar}\n`)}
//           {showIfPositive(currentOffer.roomsCount, `عدد الغرف: ${currentOffer.roomsCount}\n`)}
//           {showIfPositive(currentOffer.bathroomsCount, `عدد دورات المياه: ${currentOffer.bathroomsCount}\n`)}
//           {showIfPositive(currentOffer.majlesCount, `عدد المجالس: ${currentOffer.majlesCount}\n`)}
//           {showIfPositive(currentOffer.hallsCount, `عدد الصالات: ${currentOffer.hallsCount}\n`)}
//           {showIfPositive(currentOffer.maqlatCount, `عدد المقلط: ${currentOffer.maqlatCount}\n`)}
//           {showIfPositive(currentOffer.kitchenCount, `عدد المطابخ: ${currentOffer.kitchenCount}\n`)}

//           {"\n"}
//           {showIfPositive(currentOffer.featureCarEntrance, "مدخل سيارة\n")}
//           {showIfPositive(currentOffer.featureYard, "حوش سيارات\n")}
//           {showIfPositive(currentOffer.featureStorage, "غرفة تخزين\n")}
//           {showIfPositive(currentOffer.featureAnnex, "ملحق\n")}
//           {showIfPositive(currentOffer.featureElevator, "مصعد\n")}
//           {showIfPositive(currentOffer.featureElevatorT, "تاسيس مصعد\n")}
//           {showIfPositive(currentOffer.featureRoof, "سطح\n")}
//           {showIfPositive(currentOffer.featureNearServices, "قريب من الخدمات\n")}
//           {showIfPositive(currentOffer.featureLaundryRoom, "غرفة غسيل\n")}
//           {showIfPositive(currentOffer.featureBalcony, "بلكونه\n")}
//           {showIfPositive(currentOffer.featureParking, "موقف سيارات\n")}
//           {showIfPositive(currentOffer.featureMaid, "غرفة خادمة\n")}
//           {showIfPositive(currentOffer.featureGuard, "غرفة حارس\n")}
//           {showIfPositive(currentOffer.featureDriver, "غرفة سائق\n")}
//         </div>
//       )}

//       {!gameOver && (
//         <>
//           <div className="alert alert-info">
//             <i className="fas fa-clock"></i> الوقت المتبقي:{" "}
//             <span className={timeLeft <= 5 ? "text-danger" : ""}>
//               {timeLeft} ثانية
//             </span>
//           </div>

//           <div className="mt-3">
//             {options.map((price, idx) => (
//               <button
//                 key={idx}
//                 className="btn btn-outline-primary m-2"
//                 onClick={() => checkAnswer(price)}
//                 disabled={answered}
//               >
//                 {price.toLocaleString()} ريال
//               </button>
//             ))}
//           </div>

//           {/* زر التالي يظهر فقط بعد الإجابة */}
//           {answered && (
//             <button
//               className="btn btn-success mt-3"
//               onClick={moveToNextQuestion}
//             >
//               التالي
//             </button>
//           )}
//         </>
//       )}

//       {gameOver && (
//         <>
//           <p className="fw-bold mt-3">
//             انتهت اللعبة! نتيجتك: {score} من{" "}
//             {usingExampleData ? exampleData.length : QUESTIONS_COUNT}
//           </p>

//           <button
//             className="btn btn-primary mt-2 me-2"
//             onClick={() => {
//               setGameOver(false);
//               setIndex(0);
//               setScore(0);
//               setMessage("");
//               setTimeLeft(TIME_PER_QUESTION);
//               setAnswered(false);
//               if (usingExampleData) setupQuestion(exampleData, 0);
//               else setupQuestion(offers, 0);
//             }}
//           >
//             إعادة اللعب
//           </button>

//           <button className="btn btn-secondary mt-2" onClick={onExit}>
//             العودة للرئيسية
//           </button>
//         </>
//       )}

//       <p className="mt-3 text-muted">
//         {gameOver
//           ? "شكراً للعبك!"
//           : "اختر سعرًا من الخيارات ثم اضغط التالي للانتقال للسؤال القادم."}
//       </p>
//     </div>
//   );
// }





import React, { useEffect, useState } from "react";

export default function PriceGuessGame({ onExit, darkSide }) {


    
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
    


  const [offers, setOffers] = useState([]);
  const [currentOffer, setCurrentOffer] = useState(null);
  const [options, setOptions] = useState([]);
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(25);
  const [gameOver, setGameOver] = useState(false);
  const [usingExampleData, setUsingExampleData] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const QUESTIONS_COUNT = 10;
  const TIME_PER_QUESTION = 25;

  const exampleData = [
    {
      selectedCity: "جدة",
      selectedDistricts: "الروضة",
      area: 150,
      roomsCountMastar: "1",
      roomsCount: "3",
      bathroomsCount: "2",
      majlesCount: "0",
      hallsCount: "1",
      maqlatCount: "0",
      kitchenCount: "1",
      featureCarEntrance: "0",
      featureYard: "0",
      featureStorage: "0",
      featureAnnex: "0",
      featureElevator: "1",
      featureElevatorT: "0",
      featureRoof: "0",
      featureNearServices: "1",
      featureLaundryRoom: "1",
      featureBalcony: "1",
      featureParking: "0",
      featureMaid: "0",
      featureGuard: "0",
      featureDriver: "0",
      aqarFloor: 1,
      price: 700000,
      aqarType: "فيلا",
    }, {
      aqarType: "فيلا",
      selectedCity: "الرياض",
      selectedDistricts: "العليا",
      area: 400,
      price: 1200000,
      roomsCountMastar: 1,
      roomsCount: 5,
      bathroomsCount: 4,
      majlesCount: 2,
      hallsCount: 1,
      maqlatCount: 1,
      kitchenCount: 1,
      featureCarEntrance: 1,
      featureYard: 1,
      featureStorage: 0,
      featureAnnex: 1,
      featureElevator: 0,
      featureElevatorT: 0,
      featureRoof: 1,
      featureNearServices: 1,
      featureLaundryRoom: 1,
      featureBalcony: 1,
      featureParking: 1,
      featureMaid: 0,
      featureGuard: 0,
      featureDriver: 0,
    },
    {
      aqarType: "شقة",
      selectedCity: "جدة",
      selectedDistricts: "الروضة",
      area: 200,
      price: 600000,
      roomsCountMastar: 0,
      roomsCount: 3,
      bathroomsCount: 2,
      majlesCount: 1,
      hallsCount: 1,
      maqlatCount: 0,
      kitchenCount: 1,
      featureCarEntrance: 0,
      featureYard: 0,
      featureStorage: 1,
      featureAnnex: 0,
      featureElevator: 1,
      featureElevatorT: 0,
      featureRoof: 0,
      featureNearServices: 1,
      featureLaundryRoom: 1,
      featureBalcony: 1,
      featureParking: 1,
      featureMaid: 0,
      featureGuard: 0,
      featureDriver: 0,
    },





  ];


  
   
  

  const loadExampleData = () => {
    setUsingExampleData(true);
    setOffers(exampleData);
    setupQuestion(exampleData, 0);
  };

  useEffect(() => {
    fetch("http://localhost:8090/offersAll")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          const shuffled = shuffleArray(data);
          setOffers(shuffled);
          setupQuestion(shuffled, 0);
        } else {
          loadExampleData();
        }
      })
      .catch(() => {
        loadExampleData();
      });
  }, []);

  const setupQuestion = (data, questionIndex) => {
    const offer = data[questionIndex];
    setCurrentOffer(offer);

    const correctPrice = parseInt(offer.price, 10);
    const randomPrices = generateClosePrices(correctPrice);
    const allOptions = shuffleArray([correctPrice, ...randomPrices]);

    setOptions(allOptions);
    setTimeLeft(TIME_PER_QUESTION);
    setSelectedAnswer(null);
  };

  const generateClosePrices = (price) => {
    const percentage = 0.1; // 10%
    const variance = Math.floor(price * percentage);

    let prices = [
      price + variance,
      price - variance,
      price + Math.floor(variance / 2),
    ];

    prices = prices.map((p) => Math.round(p / 10000) * 10000);
    return prices;
  };

  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

  const checkAnswer = (price) => {
    setSelectedAnswer(price);
    if (price === parseInt(currentOffer.price, 10)) {
      setScore(score + 1);
      setMessage("إجابة صحيحة! 👏");
    } else {
      setMessage(`غلط! السعر الصحيح هو ${currentOffer.price} ريال`);
    }
  };

  const moveToNextQuestion = () => {
    const nextIndex = index + 1;
    if (
      nextIndex <
      (usingExampleData
        ? exampleData.length
        : Math.min(offers.length, QUESTIONS_COUNT))
    ) {
      setIndex(nextIndex);
      setupQuestion(usingExampleData ? exampleData : offers, nextIndex);
      setMessage("");
      setTimeLeft(TIME_PER_QUESTION);
    } else {
      setGameOver(true);
      setMessage(
        `انتهت اللعبة! نتيجتك: ${score} من ${
          usingExampleData ? exampleData.length : QUESTIONS_COUNT
        }`
      );
    }
  };

  // عداد الوقت
  useEffect(() => {
    if (!currentOffer || gameOver) return;

    if (timeLeft === 0) {
      setMessage(`انتهى الوقت! السعر الصحيح هو ${currentOffer.price} ريال`);
    }

    const timer = setTimeout(() => {
      if (timeLeft > 0) setTimeLeft(timeLeft - 1);
      else moveToNextQuestion();
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, currentOffer, gameOver]);

  if (!currentOffer||currentOffer==null) 
    return (
          <div div style={{ marginTop: "10px", height: "100vh" }}>
          <div className="p-relative" style={{ margin: "20px 0px" }}>
            <div className="row flex-mobile " id={classNameModel} style={{ marginBottom: "200px" , margin:"auto"  , padding:"inherit" ,height:"100vh",  color:darkSide?"black":""}}>
  
          <p style={{ color:darkSide?"black":"" , zIndex:"1000"}}>جاري تحميل البيانات...</p>
  </div>
  </div>
  </div>

  )
 

  const isZeroOrEmpty = (val) =>
    val === 0 || val === "0" || val === null || val === undefined;

  return (
        //  <div div style={{ marginTop: "10px", height: "100vh" }}>
        <div div style={{ marginTop: "10px" }}>
          <div className="p-relative" style={{ margin: "20px 0px" }}>
            <div className="row flex-mobile " id={classNameModel} style={{ marginBottom: "200px" , margin:"auto"  , padding:"inherit" ,  color:darkSide?"black":""}}>
    
    
    <div className="container text-center mt-4">
      {usingExampleData && (
        <div className="alert alert-warning">
          لم يتم العثور على الاتصال بقاعده البيانات الحقيقية، جاري استخدام بيانات مثال.
        </div>
      )}

      {!gameOver && (
        <p className="fw-bold">
          سؤال {index + 1} من{" "}
          {usingExampleData ? exampleData.length : QUESTIONS_COUNT}
        </p>
      )}

      {!gameOver && (
        <div
          style={{
            textAlign: "center",
            whiteSpace: "pre-line",
            fontSize: "18px",
            fontWeight: "500",
            marginBottom: "15px",
          }}
        >
          كم تتوقع سعر {currentOffer.aqarType} بمدينة {currentOffer.selectedCity} حي{" "}
          {currentOffer.selectedDistricts} بمساحة {currentOffer.area}م²
          {"\n"}
          {!isZeroOrEmpty(currentOffer.roomsCountMastar) &&
            `عدد الغرف الماستر: ${currentOffer.roomsCountMastar}\n`}
          {!isZeroOrEmpty(currentOffer.roomsCount) &&
            `عدد الغرف: ${currentOffer.roomsCount}\n`}
          {!isZeroOrEmpty(currentOffer.bathroomsCount) &&
            `عدد دورات المياه: ${currentOffer.bathroomsCount}\n`}
          {!isZeroOrEmpty(currentOffer.majlesCount) &&
            `عدد المجالس: ${currentOffer.majlesCount}\n`}
          {!isZeroOrEmpty(currentOffer.hallsCount) &&
            `عدد الصالات: ${currentOffer.hallsCount}\n`}
          {!isZeroOrEmpty(currentOffer.maqlatCount) &&
            `عدد المقلط: ${currentOffer.maqlatCount}\n`}
          {!isZeroOrEmpty(currentOffer.kitchenCount) &&
            `عدد المطابخ: ${currentOffer.kitchenCount}\n`}

          {"\n"}
          {!isZeroOrEmpty(currentOffer.featureCarEntrance) && "مدخل سيارة\n"}
          {!isZeroOrEmpty(currentOffer.featureYard) && "حوش سيارات\n"}
          {!isZeroOrEmpty(currentOffer.featureStorage) && "غرفة تخزين\n"}
          {!isZeroOrEmpty(currentOffer.featureAnnex) && "ملحق\n"}
          {!isZeroOrEmpty(currentOffer.featureElevator) && "مصعد\n"}
          {!isZeroOrEmpty(currentOffer.featureElevatorT) && "تاسيس مصعد\n"}
          {!isZeroOrEmpty(currentOffer.featureRoof) && "سطح\n"}
          {!isZeroOrEmpty(currentOffer.featureNearServices) && "قريب من الخدمات\n"}
          {!isZeroOrEmpty(currentOffer.featureLaundryRoom) && "غرفة غسيل\n"}
          {!isZeroOrEmpty(currentOffer.featureBalcony) && "بلكونه\n"}
          {!isZeroOrEmpty(currentOffer.featureParking) && "موقف سيارات\n"}
          {!isZeroOrEmpty(currentOffer.featureMaid) && "غرفة خادمة\n"}
          {!isZeroOrEmpty(currentOffer.featureGuard) && "غرفة حارس\n"}
          {!isZeroOrEmpty(currentOffer.featureDriver) && "غرفة سائق\n"}
        </div>
      )}

      {!gameOver && (
        <>
          <div className="alert alert-info">
            <i className="fas fa-clock"></i> الوقت المتبقي:{" "}
            <span className={timeLeft <= 5 ? "text-danger" : ""}>
              {timeLeft} ثانية
            </span>
          </div>

          <div className="mt-3">
            {/* {options.map((price, idx) => {
              const isCorrect = price === parseInt(currentOffer.price, 10);
              const isSelected = selectedAnswer === price;

              return (
                <button
                  key={idx}
                  className={`btn m-2 ${
                    isSelected
                      ? isCorrect
                        ? "btn-success animate__animated animate__pulse"
                        : "btn-danger animate__animated animate__shakeX"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => checkAnswer(price)}
                  disabled={selectedAnswer !== null}
                >
                  {price.toLocaleString()} ريال
                </button>




              );
            })} */}


            {/* {options.map((price, idx) => {
  const isCorrect = price === parseInt(currentOffer.price, 10);
  const isSelected = selectedAnswer === price;

  return (
    <button
      key={idx}
      className={`btn m-2 ${
        isSelected
          ? isCorrect
            ? "btn-success animate-flash"
            : "btn-danger animate-shake"
          : "btn-outline-primary"
      }`}
      onClick={() => checkAnswer(price)}
      disabled={selectedAnswer !== null}
    >
      {price.toLocaleString()} ريال
    </button>
  );
})} */}


{options.map((price, idx) => {
  const isCorrect = price === parseInt(currentOffer.price, 10);
  const isSelected = selectedAnswer === price;

  return (
    <button
      key={idx}
      className={`btn m-2 ${
        selectedAnswer !== null
          ? isCorrect
            ? "btn-success animate-flash" // يلون الأخضر الصحيح
            : isSelected
            ? "btn-danger animate-shake"  // يلون الأحمر الخاطئ
            : "btn-outline-secondary"     // باقي الأزرار لون رمادي
          : "btn-outline-primary"          // قبل الاختيار اللون الأساسي
      }`}
      onClick={() => checkAnswer(price)}
      disabled={selectedAnswer !== null}
    >
      {price.toLocaleString()} ريال
    </button>
  );
})}


          </div>

          {selectedAnswer !== null && (
            <button className=" btn btn-primary mt-3" onClick={moveToNextQuestion}>
              التالي
            </button>
          )}
        </>
      )}

      {/* <p className="mt-3">{message}</p> */}

      {!gameOver && <p>النتيجة الحالية: {score}</p>}

      {gameOver && (
        <>

                   <div div style={{ marginTop: "10px", height: "100vh" }}>
          <div className="p-relative" style={{ margin: "20px 0px" }}>
            <div className="row flex-mobile " id={classNameModel} style={{ marginBottom: "200px" , margin:"auto"  , padding:"inherit" ,height:"100vh",  color:darkSide?"black":""}}>
  
      


<div>

        <p className="fw-bold mt-3">
            انتهت اللعبة! نتيجتك: {score} من{" "}
            {usingExampleData ? exampleData.length : QUESTIONS_COUNT}
          </p>
          <button
            className="btn btn-primary mt-2 me-2"
            onClick={() => {
              setGameOver(false);
              setIndex(0);
              setScore(0);
              setMessage("");
              setTimeLeft(TIME_PER_QUESTION);
              if (usingExampleData) setupQuestion(exampleData, 0);
              else setupQuestion(offers, 0);
            }}
          >
            إعادة اللعب
          </button>

          <button className="btn btn-secondary mt-2  me-2" onClick={onExit}>
            العودة للرئيسية
          </button>
</div>
          </div>
          </div>
          </div>
        </>
      )}
    </div>

    </div></div></div>
  );
}
