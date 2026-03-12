// import React, { useState, useEffect } from "react";

// const neighborhoodsData = {
//   easy: [
//     // الرياض
//     { city: "الرياض", neighborhood: "الملقا" },
//     { city: "الرياض", neighborhood: "العليا" },
//     { city: "الرياض", neighborhood: "الياسمين" },
//     { city: "الرياض", neighborhood: "النرجس" },
//     { city: "الرياض", neighborhood: "الصحافة" },

//     // جدة
//     { city: "جدة", neighborhood: "الروضة" },
//     { city: "جدة", neighborhood: "الحمراء" },
//     { city: "جدة", neighborhood: "السلامة" },
//     { city: "جدة", neighborhood: "النزهة" },
//     { city: "جدة", neighborhood: "البوادي" },

//     // مكة
//     { city: "مكة", neighborhood: "العوالي" },
//     { city: "مكة", neighborhood: "العزيزية" },
//     { city: "مكة", neighborhood: "الشوقية" },
//     { city: "مكة", neighborhood: "النزهة" },
//     { city: "مكة", neighborhood: "الرصيفة" },

//     // المدينة
//     { city: "المدينة", neighborhood: "العوالي" },
//     { city: "المدينة", neighborhood: "قربان" },
//     { city: "المدينة", neighborhood: "العزيزية" },
//     { city: "المدينة", neighborhood: "الخالدية" },
//     { city: "المدينة", neighborhood: "بني ظفر" },

//     // الدمام
//     { city: "الدمام", neighborhood: "الشاطئ" },
//     { city: "الدمام", neighborhood: "البديع" },
//     { city: "الدمام", neighborhood: "الريان" },
//     { city: "الدمام", neighborhood: "المنار" },
//     { city: "الدمام", neighborhood: "الزهور" },

//     // الخبر
//     { city: "الخبر", neighborhood: "العقربية" },
//     { city: "الخبر", neighborhood: "الخبر الشمالية" },
//     { city: "الخبر", neighborhood: "الحزام الذهبي" },
//     { city: "الخبر", neighborhood: "البندرية" },
//     { city: "الخبر", neighborhood: "العليا" },

//     // الطائف
//     { city: "الطائف", neighborhood: "الحوية" },
//     { city: "الطائف", neighborhood: "الوسام" },
//     { city: "الطائف", neighborhood: "شهار" },
//     { city: "الطائف", neighborhood: "السيل الكبير" },
//     { city: "الطائف", neighborhood: "قروى" },

//     // أبها
//     { city: "أبها", neighborhood: "المشهد" },
//     { city: "أبها", neighborhood: "النميص" },
//     { city: "أبها", neighborhood: "الربوة" },
//     { city: "أبها", neighborhood: "السروات" },
//     { city: "أبها", neighborhood: "المحالة" },

//     // تبوك
//     { city: "تبوك", neighborhood: "مروج الأمير" },
//     { city: "تبوك", neighborhood: "الروضة" },
//     { city: "تبوك", neighborhood: "الصفا" },
//     { city: "تبوك", neighborhood: "البوادي" },
//     { city: "تبوك", neighborhood: "المهرجان" }
//   ],

//   medium: [
//     { city: "الرياض", neighborhood: "الحطين" },
//     { city: "الرياض", neighborhood: "المونسية" },
//     { city: "الرياض", neighborhood: "الروابي" },
//     { city: "الرياض", neighborhood: "المنصورة" },
//     { city: "الرياض", neighborhood: "القادسية" },

//     { city: "جدة", neighborhood: "الكورنيش" },
//     { city: "جدة", neighborhood: "أبحر الشمالية" },
//     { city: "جدة", neighborhood: "أبحر الجنوبية" },
//     { city: "جدة", neighborhood: "الفيصلية" },
//     { city: "جدة", neighborhood: "الكوثر" },

//     { city: "مكة", neighborhood: "جبل النور" },
//     { city: "مكة", neighborhood: "المعابدة" },
//     { city: "مكة", neighborhood: "الهجرة" },
//     { city: "مكة", neighborhood: "الخالدية" },
//     { city: "مكة", neighborhood: "كدي" },

//     { city: "المدينة", neighborhood: "الدعيثة" },
//     { city: "المدينة", neighborhood: "الهدا" },
//     { city: "المدينة", neighborhood: "البركة" },
//     { city: "المدينة", neighborhood: "الخاتم" },
//     { city: "المدينة", neighborhood: "القصور" },

//     { city: "الدمام", neighborhood: "الشاطئ الغربي" },
//     { city: "الدمام", neighborhood: "المريكبات" },
//     { city: "الدمام", neighborhood: "العزيزية" },
//     { city: "الدمام", neighborhood: "المطار" },
//     { city: "الدمام", neighborhood: "البديعة" }
//   ]
// };

// const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

// export default function SaudiNeighborhoodChoiceGame({ level, onExit }) {
//   const [data, setData] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(15);
//   const [message, setMessage] = useState("");
//   const [gameOver, setGameOver] = useState(false);



//   useEffect(() => {
//   const questions = neighborhoodsData[level] || neighborhoodsData.easy;
//   if (questions && questions.length > 0) {
//     let selectedQuestions = shuffle(questions);

//     // لو المستوى easy ناخذ فقط 10 أسئلة
//     if (level === "easy" && selectedQuestions.length > 10) {
//       selectedQuestions = selectedQuestions.slice(0, 10);
//     }

//     setData(selectedQuestions);
//     setCurrentIndex(0);
//     setScore(0);
//     setTimeLeft(15);
//   }
// }, [level]);


//   useEffect(() => {
//     if (gameOver) return;

//     if (timeLeft === 0) {
//       setMessage("انتهى الوقت!");
//       setTimeout(() => {
//         moveToNextQuestion();
//       }, 1500);
//       return;
//     }

//     const timer = setTimeout(() => {
//       setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [timeLeft, gameOver]);

//   const handleAnswer = (selected) => {
//     const currentQuestion = data[currentIndex];
//     if (!currentQuestion) return;

//     if (selected === currentQuestion.city) {
//       setScore(score + 1);
//       setMessage("صح! 👏");
//     } else {
//       setMessage(`غلط! الحي "${currentQuestion.neighborhood}" في ${currentQuestion.city}`);
//     }

//     setTimeout(() => {
//       moveToNextQuestion();
//     }, 1000);
//   };

//   const moveToNextQuestion = () => {
//     if (currentIndex < data.length - 1) {
//       setCurrentIndex((prev) => prev + 1);
//       setMessage("");
//       setTimeLeft(15);
//     } else {
//       setGameOver(true);
//     }
//   };

//   if (!data.length) {
//     return <div className="text-center mt-4">جاري تحميل الأسئلة...</div>;
//   }

//   const currentQuestion = data[currentIndex];

//   if (!currentQuestion) {
//     return <div className="text-center mt-4">جاري التحضير للسؤال...</div>;
//   }

//   const options = shuffle([
//     currentQuestion.city,
//     ...shuffle(
//       [...new Set(data.map((n) => n.city))].filter((c) => c !== currentQuestion.city)
//     ).slice(0, 2)
//   ]);

//   if (gameOver) {
//     return (
//       <div className="text-center mt-4">
//         <h3>انتهت اللعبة!</h3>
//         <p>نتيجتك: {score} من {data.length}</p>
//         <button className="btn btn-primary mt-2" onClick={onExit}>
//           <i className="fas fa-home"></i> العودة للرئيسية
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="text-center mt-4">
//       <h3>اختر المدينة الصحيحة</h3>
//       <p>في أي مدينة يقع حي <b>{currentQuestion.neighborhood}</b>؟</p>

//       <div className="alert alert-secondary">
//         <i className="fas fa-clock"></i> الوقت المتبقي:{" "}
//         <span className={timeLeft <= 5 ? "text-danger" : ""}>{timeLeft} ثانية</span>
//       </div>

//       <div className="d-flex justify-content-center flex-wrap gap-2">
//         {options.map((option, idx) => (
//           <button
//             key={idx}
//             className="btn btn-success m-1"
//             onClick={() => handleAnswer(option)}
//           >
//             {option}
//           </button>
//         ))}
//       </div>

//       <p className="mt-3">{message}</p>
//       <p>السؤال {currentIndex + 1} من {data.length}</p>
//       <p>النتيجة: {score}</p>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";


const neighborhoodsData = {
  easy: [
    { city: "الرياض", neighborhood: "الملقا" },
    { city: "الرياض", neighborhood: "العليا" },
    { city: "الرياض", neighborhood: "الياسمين" },
    { city: "الرياض", neighborhood: "النرجس" },
    { city: "الرياض", neighborhood: "الصحافة" },
    { city: "الرياض", neighborhood: "الحطين" },
    { city: "الرياض", neighborhood: "المونسية" },
    { city: "الرياض", neighborhood: "الروابي" },
    { city: "الرياض", neighborhood: "المنصورة" },
    { city: "الرياض", neighborhood: "القادسية" },

    { city: "جدة", neighborhood: "الروضة" },
    { city: "جدة", neighborhood: "الحمراء" },
    { city: "جدة", neighborhood: "السلامة" },
    { city: "جدة", neighborhood: "النزهة" },
    { city: "جدة", neighborhood: "البوادي" },
        { city: "جدة", neighborhood: "الكورنيش" },
    { city: "جدة", neighborhood: "أبحر الشمالية" },
    { city: "جدة", neighborhood: "أبحر الجنوبية" },
    { city: "جدة", neighborhood: "الفيصلية" },
    { city: "جدة", neighborhood: "الكوثر" },

    { city: "مكة", neighborhood: "العوالي" },
    { city: "مكة", neighborhood: "العزيزية" },
    { city: "مكة", neighborhood: "الشوقية" },
    { city: "مكة", neighborhood: "النزهة" },
    { city: "مكة", neighborhood: "الرصيفة" },
     { city: "مكة", neighborhood: "جبل النور" },
    { city: "مكة", neighborhood: "المعابدة" },
    { city: "مكة", neighborhood: "الهجرة" },
    { city: "مكة", neighborhood: "الخالدية" },
    { city: "مكة", neighborhood: "كدي" },

    { city: "المدينة", neighborhood: "العوالي" },
    { city: "المدينة", neighborhood: "قربان" },
    { city: "المدينة", neighborhood: "العزيزية" },
    { city: "المدينة", neighborhood: "الخالدية" },
    { city: "المدينة", neighborhood: "بني ظفر" },

    { city: "الدمام", neighborhood: "الشاطئ" },
    { city: "الدمام", neighborhood: "البديع" },
    { city: "الدمام", neighborhood: "الريان" },
    { city: "الدمام", neighborhood: "المنار" },
    { city: "الدمام", neighborhood: "الزهور" },

    { city: "الخبر", neighborhood: "العقربية" },
    { city: "الخبر", neighborhood: "الخبر الشمالية" },
    { city: "الخبر", neighborhood: "الحزام الذهبي" },
    { city: "الخبر", neighborhood: "البندرية" },
    { city: "الخبر", neighborhood: "العليا" }
  ],

  medium: [
    { city: "الرياض", neighborhood: "الحطين" },
    { city: "الرياض", neighborhood: "المونسية" },
    { city: "الرياض", neighborhood: "الروابي" },
    { city: "الرياض", neighborhood: "المنصورة" },
    { city: "الرياض", neighborhood: "القادسية" },

    { city: "جدة", neighborhood: "الكورنيش" },
    { city: "جدة", neighborhood: "أبحر الشمالية" },
    { city: "جدة", neighborhood: "أبحر الجنوبية" },
    { city: "جدة", neighborhood: "الفيصلية" },
    { city: "جدة", neighborhood: "الكوثر" },

    { city: "مكة", neighborhood: "جبل النور" },
    { city: "مكة", neighborhood: "المعابدة" },
    { city: "مكة", neighborhood: "الهجرة" },
    { city: "مكة", neighborhood: "الخالدية" },
    { city: "مكة", neighborhood: "كدي" }
  ]
};

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

export default function SaudiNeighborhoodChoiceGame({ level, onExit , darkSide }) {



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



  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const questions = neighborhoodsData[level] || neighborhoodsData.easy;
    if (questions && questions.length > 0) {
      let selectedQuestions = shuffle(questions);
      if (level === "easy" && selectedQuestions.length > 10) {
        selectedQuestions = selectedQuestions.slice(0, 10);
      }
      setData(selectedQuestions);
      setCurrentIndex(0);
      setScore(0);
      setTimeLeft(15);
      setSelectedAnswer(null);
      setMessage("");
      setGameOver(false);
    }
  }, [level]);

  useEffect(() => {
    if (gameOver || selectedAnswer !== null) return;

    if (timeLeft === 0) {
      setMessage("انتهى الوقت!");
      setSelectedAnswer("timeout");
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, gameOver, selectedAnswer]);

  useEffect(() => {
    if (!data.length) return;

    const currentQuestion = data[currentIndex];
    const allCities = [
      ...new Set(
        [...neighborhoodsData.easy, ...neighborhoodsData.medium].map((n) => n.city)
      )
    ];

    let choices = [currentQuestion.city];
    while (choices.length < 4) {
      const randomCity = allCities[Math.floor(Math.random() * allCities.length)];
      if (!choices.includes(randomCity)) {
        choices.push(randomCity);
      }
    }

    setOptions(shuffle(choices));
  }, [currentIndex, data]);

  const handleAnswer = (selected) => {
    if (selectedAnswer !== null) return;

    const currentQuestion = data[currentIndex];
    setSelectedAnswer(selected);

    if (selected === currentQuestion.city) {
      setScore(score + 1);
      setMessage("صح! 👏");
    } else {
      setMessage(`غلط! الحي "${currentQuestion.neighborhood}" في ${currentQuestion.city}`);
    }
  };

  const moveToNextQuestion = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setMessage("");
      setTimeLeft(15);
      setSelectedAnswer(null);
    } else {
      setGameOver(true);
    }
  };

  const restartGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setTimeLeft(15);
    setSelectedAnswer(null);
    setMessage("");
    setGameOver(false);
  };

  if (!data.length) {
    return (
    <>
   
   
               <div div style={{ marginTop: "10px", height: "100vh" }}>
          <div className="p-relative" style={{ margin: "20px 0px" }}>
            <div className="row flex-mobile " id={classNameModel} style={{ marginBottom: "200px" , margin:"auto"  , padding:"inherit" ,height:"100vh",  color:darkSide?"black":""}}>
  
    
    <div className="text-center mt-4">جاري تحميل الأسئلة...</div>;
    </div></div></div>
    </>
    )
  }

  const currentQuestion = data[currentIndex];

  if (!currentQuestion) {
    return (
    
               <div div style={{ marginTop: "10px", height: "100vh" }}>
          <div className="p-relative" style={{ margin: "20px 0px" }}>
            <div className="row flex-mobile " id={classNameModel} style={{ marginBottom: "200px" , margin:"auto"  , padding:"inherit" ,height:"100vh",  color:darkSide?"black":""}}>
  
    <div className="text-center mt-4">جاري التحضير للسؤال...</div>
    </div></div></div>
    )
  }

  if (gameOver) {
    return (
                 <div div style={{ marginTop: "10px", height: "100vh" }}>
          <div className="p-relative" style={{ margin: "20px 0px" }}>
            <div className="row flex-mobile " id={classNameModel} style={{ marginBottom: "200px" , margin:"auto"  , padding:"inherit" ,height:"100vh",  color:darkSide?"black":""}}>
  
      <div className="text-center mt-4">
        <h3>انتهت اللعبة!</h3>
        <p>نتيجتك: {score} من {data.length}</p>
        <div>
        <button className="btn btn-success mt-2 me-2" onClick={restartGame}>
          إعادة اللعب
        </button>
        <button className="btn btn-secondary mt-2  me-2" onClick={onExit}>
          العودة للرئيسية
        </button>

        </div>
      </div>
      </div>
      </div>
      </div>
    );
  }

  return (


     <div div style={{ marginTop: "10px", height: "100vh" }}>
          <div className="p-relative" style={{ margin: "20px 0px" }}>
            <div className="row flex-mobile " id={classNameModel} style={{ marginBottom: "200px" , margin:"auto"  , padding:"inherit" ,height:"100vh", color:darkSide?"black":""}}>
    
    

    <div className="text-center mt-4">
      <h4 style={{padding:"5px"}}>اختر المدينة الصحيحة</h4>
      <p>في أي مدينة يقع حي <b>{currentQuestion.neighborhood}</b>؟</p>

      <div className="alert alert-secondary">
        <i className="fas fa-clock"></i> الوقت المتبقي:{" "}
        <span className={timeLeft <= 5 ? "text-danger" : ""}>{timeLeft} ثانية</span>
      </div>

      <div className="d-flex justify-content-center flex-wrap gap-2">
        {/* {options.map((option, idx) => {
          const isCorrect = option === currentQuestion.city;
          const isSelected = selectedAnswer === option;

          return (
            <button
              key={idx}
              className={`btn m-1 ${
                selectedAnswer === null
                  ? "btn-outline-success"
                  : isCorrect
                  ? "btn-success animate-flash"
                  : isSelected
                  ? "btn-danger animate-shake"
                  : "btn-outline-secondary"
              }`}
              onClick={() => handleAnswer(option)}
              disabled={selectedAnswer !== null}
            >
              {option}
            </button>
          );
        })} */}


        {options.map((option, idx) => {
  const isCorrect = option === currentQuestion.city;
  const isSelected = selectedAnswer === option;

  return (
    <button
      key={idx}
      className={`btn m-1 ${
        selectedAnswer === null
          ? "btn-outline-primary" // اللون الافتراضي قبل الاختيار
          : isCorrect
          ? "btn-success animate-flash" // الصحيح بعد الاختيار
          : isSelected
          ? "btn-danger animate-shake" // الخاطئ اللي اختاره المستخدم
          : "btn-outline-secondary" // باقي الأزرار بعد الإجابة
      }`}
      onClick={() => handleAnswer(option)}
      disabled={selectedAnswer !== null}
    >
      {option}
    </button>
  );
})}

      </div>

      {selectedAnswer !== null && (
        <button className="btn btn-primary mt-3" onClick={moveToNextQuestion}>
          التالي
        </button>
      )}

      <p className="mt-3">{message}</p>
      <p>السؤال {currentIndex + 1} من {data.length}</p>
      <p>النتيجة: {score}</p>
    </div>
    </div>
    </div>
    </div>
  );
}
