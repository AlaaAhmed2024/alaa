
import logo from './loginLogo.png'
import Button from "react-bootstrap/Button";

function NotFound() {
  return (




<div className="MuiBox-root css-1js05o1">
  <div className="MuiBox-root css-1cplb8k">

                               {/* <div
                                 className="loader-container"
                                 style={{ height: "auto", width: "150px" }}
                               >
                                 <div className="logo-reveal">
                                   <img
                                     src={logo}
                                     alt="Eskan Salman Logo"
                                     className="logo-color"
                                   />
                                   <div className="logo-mask-infinite"></div>
                                 </div>
                               </div> */}
             <img src={logo} alt="" className="css-1b46un8"/>

    
    <div style={{fontSize: "18px", color: "gray"}}><strong> الرابط غير صحيح </strong><strong>| 404 Not Found </strong>
    </div>
    <br/>
     <Button  onClick={() => window.history.back()}  variant="primary">العودة</Button>
    {/* <button onClick={() => window.history.back()} className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary css-va3gcn" tabindex="0" type="button">العودة<span class="MuiTouchRipple-root css-w0pj6f"></span></button> */}
    </div>
    </div>

  );
}

export default NotFound;