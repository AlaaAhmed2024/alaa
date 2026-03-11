import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, HashRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import FinanceCalculatorPage from "./pages/FinanceCalculatorPage";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
// import './Nologin'
import Offers from "./pages/Offers";

import LoadingScreen from "./components/LoadingScreen";
import NewsDetails from "./pages/NewsDetails";
import WhatsAppButton from "./components/WhatsAppButton";


function AppContent({ data, setData }) {



  const location = useLocation();



  return (

    // <AnimatePresence exitBeforeEnter>
      
      <Routes location={location} key={location.pathname}>
        <Route
          path="/eskana"
          element={
            <PageTransition>
                   <Home />
            </PageTransition>
          }
        />
        <Route
          path="/mycalculator"
          element={
            <PageTransition>
                 <FinanceCalculatorPage data={data} setData={setData} />
            </PageTransition>
          }
        />


                <Route
          path="/newss/:id"
          element={
            <PageTransition>
              <NewsDetails />
            </PageTransition>
          }
        />





    <Route
          path="/offerss"
          element={
            <PageTransition>
              <Offers 
              />
            </PageTransition>
          }
        />


      </Routes>



  
      
    // </AnimatePresence>
  );
}




export default function AppNoLogin() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("financeData");
    return saved ? JSON.parse(saved) : {};
  });




const [isLoading, setIsLoading] = useState(true);
  // حفظ تلقائي
  useEffect(() => {
    localStorage.setItem("financeData", JSON.stringify(data));
  }, [data]);

    // مدة اللودنج
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 ثانية

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }




  return (
    <>
      <TopBar />
      <AppContent data={data} setData={setData} />
      <WhatsAppButton/>
      <Footer />
    </>
  );
}
