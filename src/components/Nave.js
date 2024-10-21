
import { NavLink } from "react-router-dom";
import "./home.css";
import im from "../logo.png";
import { useState } from "react";

export default function Nave() {
  //dark
  const [dark, setShwoDark] = useState(false);

  function handelDark() {
    setShwoDark(!dark);
  }

  return (
    <div className="" style={{ backgroundColor: dark ? "black" : "" }}>
      <nav
        className="fixed-top"
        style={{ backgroundColor: dark ? "black" : "" }}
      >
        <NavLink
          className="navbar-brand"
          to="/start"
          style={{ position: "fixed", left: "10px", top: "25px" }}
        >
          <img alt="" src={im} className="loge-left" />
        </NavLink>

        <div className="dark">
          <button onClick={handelDark}> {dark ? "ابيض" : "اسود"} </button>
        </div>

        <div className="ddd" style={{ marginRight: "200px" }}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/start"
                style={{ padding: "10px", marginRight: "150px" }}
              >
                {" "}
                المعلومات
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" style={{ padding: "10px" }}>
                الحسبة
              </NavLink>
            </li>

            {/* <li className='nav-item'>
                  <NavLink to="/login"  style={{padding:"10px"}}>الدخول</NavLink>
             </li> */}

            <li className="nav-item">
              <NavLink to="/clients" style={{ padding: "10px" }}>
                العملاء
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/profit" style={{ padding: "10px" }}>
                الفوائد
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/plus" style={{ padding: "10px" }}>
                قروض
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/netsalary" style={{ padding: "10px" }}>
                الراتب{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/banks" style={{ padding: "10px" }}>
                البنوك{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}






















// import { NavLink } from "react-router-dom";
// import "./home.css";
// import im from "../logo.png";
// import { useState } from "react";

// export default function Nave() {
//   //dark
//   const [dark, setShwoDark] = useState(false);

//   function handelDark() {
//     setShwoDark(!dark);
//   }

//   return (
//     <div className="" style={{ backgroundColor: dark ? "black" : "" }}>
//       <div
//         className="fixed-top"
//         style={{ backgroundColor: dark ? "black" : "" }}
//       >
//         <NavLink
//           className="navbar-brand"
//           style={{ position: "fixed", left: "10px", top: "25px" }}
//         >
//           <img alt="" src={im} className="loge-left" />
//         </NavLink>

//         <div className="dark">
//           <button onClick={handelDark}> {dark ? "ابيض" : "اسود"} </button>
//         </div>

//         {/* <div className='ddd navbar-nav ml-auto' style={{marginRight:"200px"}}> */}

//         <header className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionStatic css-pxz6q9">
//           <div className="MuiTabs-root css-h1nntf">
//             <div
//               className="MuiTabs-scroller MuiTabs-fixed css-1anid1y"
//               style={{overflow: "hidden", marginBottom: "0px"}}
//             >
//               <div
//                 aria-label="full width tabs"
//                 className="MuiTabs-flexContainer css-k008qs"
//                 role="tablist"
//               >
//                 <button
//                   className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary MuiTab-fullWidth Mui-selected css-mt1cr8"
//                   tabindex="0"
//                   type="button"
//                   role="tab"
//                   aria-selected="true"
//                   id="full-width-tab-0"
//                   aria-controls="full-width-tabpanel-0"
//                 >
//                   معلومات العقد
//                   <span className="MuiTouchRipple-root css-w0pj6f"></span>
//                 </button>
//                 <button
//                   className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary MuiTab-fullWidth css-ysavq2"
//                   tabindex="-1"
//                   type="button"
//                   role="tab"
//                   aria-selected="false"
//                   id="full-width-tab-1"
//                   aria-controls="full-width-tabpanel-1"
//                 >
//                   قنوات الإعلان
//                   <span className="MuiTouchRipple-root css-w0pj6f"></span>
//                 </button>
//                 <button
//                   className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary MuiTab-fullWidth css-ysavq2"
//                   tabindex="-1"
//                   type="button"
//                   role="tab"
//                   aria-selected="false"
//                   id="full-width-tab-2"
//                   aria-controls="full-width-tabpanel-2"
//                 >
//                   البيانات الأساسية
//                   <span className="MuiTouchRipple-root css-w0pj6f"></span>
//                 </button>

//             </div>
//           </div>
//           </div>
//         </header>
//       </div>
//     </div>
//   );
// }

{
  /* <div className="btn-group" role="group" aria-label="Basic radio toggle button group"  style={{marginRight:"200px"}}>
<div style={{marginRight:"50px"}}>
  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
  <label className="btn btn-outline-primary" for="btnradio1">Radio 1</label>
  </div>
  <div  style={{marginRight:"50px"}}>
 <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
 <label className="btn btn-outline-primary" for="btnradio2">Radio 2</label>
 </div>
 <div  style={{marginRight:"50px"}}>
 <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
 <label className="btn btn-outline-primary" for="btnradio3">Radio 3</label>
</div>
</div> */
}
