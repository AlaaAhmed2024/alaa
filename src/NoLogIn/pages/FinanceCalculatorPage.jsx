// import { Stepper, Step, StepLabel, Box } from "@mui/material";

// import Step1Contact from "../components/Step1Contact";
// import Step2Identity from "../components/Step2Identity";
// import Step3Job from "../components/Step3Job";
// import Step4CurrentFinance from "../components/Step4CurrentFinance";
// import Step5Property from "../components/Step5Property";
// import Step6Result from "../components/Step6Result";
// import   '../index.css'
// import { useState, useContext } from "react";
// import { ColorModeContext } from "../context/ThemeContext"; // استدعاء السياق
// const steps = [
//   "بيانات التواصل",
//   "بيانات الهوية",
//   "العمل والدخل",
//   "التمويل الحالي",
//   "العقار والتمويل",
//   "النتيجة",
// ];

// export default function FinanceCalculatorPage({ data, setData }) {
//   const [activeStep, setActiveStep] = useState(0);

//   const next = () => setActiveStep((s) => s + 1);
//   const back = () => setActiveStep((s) => s - 1);

//     const { mode } = useContext(ColorModeContext); // الوضع الحالي: light / dark
//      const bgColor = mode === "light" ? "#f4f6fa" : "#182237";

//   return (
//     <Box sx={{ p: 3, minHeight: "100vh",backgroundColor: bgColor }}>
//       <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>

//       {activeStep === 0 && <Step1Contact data={data} setData={setData} onNext={next} />}
//       {activeStep === 1 && <Step2Identity data={data} setData={setData} onNext={next} onBack={back} />}
//       {activeStep === 2 && <Step3Job data={data} setData={setData} onNext={next} onBack={back} />}
//       {activeStep === 3 && <Step4CurrentFinance data={data} setData={setData} onNext={next} onBack={back} />}
//       {activeStep === 4 && <Step5Property data={data} setData={setData} onNext={next} onBack={back} />}
//       {activeStep === 5 && <Step6Result data={data} onBack={back} />}
//     </Box>
//   );
// }




import { Stepper, Step, StepLabel, Box } from "@mui/material";
import { useState, useContext } from "react";
import { ColorModeContext } from "../context/ThemeContext"; // الوضع الحالي
import PageTransition from "../components/PageTransition"; // الحركة
import Step1Contact from "../components/Step1Contact";
import Step2Identity from "../components/Step2Identity";
import Step3Job from "../components/Step3Job";
import Step4CurrentFinance from "../components/Step4CurrentFinance";
import Step5Property from "../components/Step5Property";
import Step6Result from "../components/Step6Result";
// import './Nologin'

const steps = [
  "الوظيفه و البنك",
  "الرواتب و التواريخ ",
 
  " الالتزامات الحالية",
  "الجنسية و الدعم ",
   " بيانات التواصل",
  "الحسبة و الاقساط",
 
];

export default function FinanceCalculatorPage({ data, setData }) {
  const [activeStep, setActiveStep] = useState(0);
  const { mode } = useContext(ColorModeContext); // الوضع الحالي: light / dark
  const bgColor = mode === "light" ? "#f4f6fa" : "#182237";

  const next = () => setActiveStep((s) => s + 1);
  const back = () => setActiveStep((s) => s - 1);
  

  return (
    <Box

    className="nofocuse"
      sx={{
        minHeight: "100vh",
        backgroundColor: bgColor, // الخلفية حسب الوضع
        py: 6,
        px: 2,
         transition: "background-color 0.5s ease", // ✅ هذا يضيف Transition سلس
      }}
    >
      <Box sx={{ maxWidth: 700, mx: "auto" }}>
        
        
        {/* <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4, backgroundColor: "transparent" }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper> */}


        <Stepper
  activeStep={activeStep}
  alternativeLabel
  sx={{
    mb: 4,
    backgroundColor: "transparent",
    // direction: "rtl",
      direction: "ltr",
    "& .MuiStepConnector-root": {
      borderColor: mode === "light" ? "#ccc" : "#555",
      top: "12px",
    },
  }}
>
  {steps.map((label) => (
    <Step key={label}>
      <StepLabel>{label}</StepLabel>
    </Step>
  ))}
</Stepper>


        {/* Steps مع PageTransition */}
        {activeStep === 0 && (
          <PageTransition>
            <Step1Contact data={data} setData={setData} onNext={next} />
          </PageTransition>
        )}
        {activeStep === 1 && (
          <PageTransition>
            <Step2Identity data={data} setData={setData} onNext={next} onBack={back} />
          </PageTransition>
        )}
        {activeStep === 2 && (
          <PageTransition>
            <Step3Job data={data} setData={setData} onNext={next} onBack={back} />
          </PageTransition>
        )}
        {activeStep === 3 && (
          <PageTransition>
            <Step4CurrentFinance data={data} setData={setData} onNext={next} onBack={back} />
          </PageTransition>
        )}
        {activeStep === 4 && (
          <PageTransition>
            <Step5Property data={data} setData={setData} onNext={next} onBack={back} />
          </PageTransition>
        )}
        {activeStep === 5 && (
          <PageTransition>
            <Step6Result data={data} setData={setData} onBack={back} />
          </PageTransition>
        )}
      </Box>
    </Box>
  );
}
