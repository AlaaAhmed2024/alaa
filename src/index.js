import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Logout } from './Context/Logout';
import ThemeContextProvider from './Context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));


const loader = document.getElementById("initial-loader");
if (loader) loader.remove();

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
       <Logout>
    
       <App />
  </Logout>
  </ThemeContextProvider>
  </React.StrictMode>
 
);
reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Logout } from './Context/Logout';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <Logout>
//       <App />
//     </Logout>
//   </React.StrictMode>
// );

// // إخفاء شاشة التحميل بعد ثانية واحدة
// setTimeout(() => {
//   const loader = document.getElementById("initial-loader");
//   if (loader) {
//     loader.classList.add("hidden");
//     setTimeout(() => loader.remove(), 500);
//   }
// }, 1000);

// reportWebVitals();
