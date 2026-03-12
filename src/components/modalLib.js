import { useState } from "react";
import "../Project1.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke, faMoon } from "@fortawesome/free-solid-svg-icons";
import im from "../logo.png";
import ahly from "../alahliLogo.png";
import alrajhi from "../alrajhiLogo.png";
import albilad from "../albiladLogo.png";
import alfransi from "../alfransiLlogo.png";
import alinma from "../alinmaLogo.png";
import sab from "../sabLogo.png";

export default function Liabilities({ isVisble, data, input }) {
  const [darkSide, setShwoDarkSide] = useState(true);
  function handelDarkSide() {
    setShwoDarkSide(!darkSide);
  }

  if (darkSide) {
    var textMode = "داكن";
    var backgroundColor = "#F2F2F2";
    var ic1 = faMoon;
    var classRotate = 0;
    var classColor = "model-light";
    var tableDark = "";
    var backColor = "link-log-dark  dark-buttom-about";
    var text = "black";
    var borderStyle = "3px solid rgb(41 45 72)";
  } else {
    var textMode = "فاتح";
    var backgroundColor = "#222A44";
    var ic1 = faCircleHalfStroke;
    var classRotate = 180;
    var classColor = "#050505";
    var tableDark = "table-Dark";
    var backColor = "link-log-dark  dark-buttom-about  back-color";
    var text = "white";
    var borderStyle = " 3px solid #b6b1ff";
  }

  if (input.realEstateBank === "alahli") {
    var imageBank = ahly;
  } else if (input.realEstateBank === "alrajhi") {
    var imageBank = alrajhi;
  } else if (input.realEstateBank === "albilad") {
    var imageBank = albilad;
  } else if (input.realEstateBank === "alfransi") {
    var imageBank = alfransi;
  } else if (input.realEstateBank === "alinma") {
    var imageBank = alinma;
  } else if (input.realEstateBank === "sab") {
    var imageBank = sab;
  } else {
    var imageBank = "";
  }

  var top = "-120px";

  if (isVisble) {
    return (
      <div id="modal">
        <div
          id="modal-content"
          className="phone-width"
          style={{
            backgroundColor: darkSide ? "#F2F2F2" : "#222A44",
            color: darkSide ? "black" : "white",
            top: "0px",
            marginTop: top,
            border: borderStyle,
            padding: "15px 15px 5px 15px",

            overflowY: "scroll",

            height: "70%",
          }}
        >
          <div className="lib-table-css">
            <table>
              <thead>
                <tr style={{ height: "50px" }}>
                  <th>
                    {" "}
                    <img
                      alt=""
                      src={imageBank}
                      className={darkSide ? "loge-right" : "imageWtoB-right"}
                      style={{ right: "30px", height: "35px", width: "80px" }}
                    />
                  </th>
                  <th colspan="3" className="show-eskan">
                    اسكان سلمان العقارية
                  </th>
                  <th>
                    <img
                      alt=""
                      src={im}
                      className={darkSide ? "loge-left" : "imageWtoB"}
                      style={{ height: "35px", width: "80px" }}
                    />
                  </th>
                  {/* <th><img alt="" src={im} className={ darkSide ? "loge-left" : "imageWtoB" } style={{ marginLeft: "15px", height:"35px",width:"80px"}} /></th> */}
                </tr>
              </thead>
              <tbody className={tableDark}>
                <tr
                  style={{
                    justifyContent: "center",

                    backgroundColor: "black",
                    padding: "1px 0px",
                  }}
                >
                  <td
                    colSpan="5"
                    style={{ color: "rgb(25, 135, 84)", fontWeight: "bold" }}
                  >
                    الالتزام الاول
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="القسط 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="القسط 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="القسط 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="القسط 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="القسط 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>
                    <input
                      placeholder="المدة 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="المدة 2 "
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder=" 3 المدة"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder=" المدة 4"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="المدة 5"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>
                </tr>

                <tr
                  style={{
                    justifyContent: "center",

                    backgroundColor: "black",
                    padding: "1px 0px",
                  }}
                >
                  <td
                    colSpan="5"
                    style={{ color: "rgb(25, 135, 84)", fontWeight: "bold" }}
                  >
                    الالتزام الاول
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="القسط 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="القسط 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="القسط 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="القسط 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="القسط 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>
                    <input
                      placeholder="المدة 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="المدة 2 "
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder=" 3 المدة"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder=" المدة 4"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="المدة 5"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>
                </tr>

                <tr
                  style={{
                    justifyContent: "center",

                    backgroundColor: "black",
                    padding: "1px 0px",
                  }}
                >
                  <td
                    colSpan="5"
                    style={{ color: "rgb(25, 135, 84)", fontWeight: "bold" }}
                  >
                    الالتزام الاول
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="القسط 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="القسط 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="القسط 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="القسط 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="القسط 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>
                    <input
                      placeholder="المدة 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="المدة 2 "
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder=" 3 المدة"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder=" المدة 4"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="المدة 5"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>
                </tr>

              
                <tr
                  style={{
                    justifyContent: "center",

                    backgroundColor: "black",
                    padding: "1px 0px",
                  }}
                >
                  <td
                    colSpan="5"
                    style={{ color: "rgb(25, 135, 84)", fontWeight: "bold" }}
                  >
                    الالتزام الاول
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="القسط 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="القسط 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="القسط 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="القسط 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="القسط 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>
                </tr>

                <tr>
                  <td>
                    <input
                      placeholder="المدة 1"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="المدة 2 "
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder=" 3 المدة"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder=" المدة 4"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>

                  <td>
                    <input
                      placeholder="المدة 5"
                      // onKeyDown={checkLength}
                      maxLength="5"
                      type="number"
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <button
            className={backColor}
            activeClassName="active_sidebar"
            style={{
              borderRadius: "15px",
              maxWidth: "130px",
              right: "40%",
              padding: "4px",
              marginTop: "2px",

              //   position: "fixed",
              //   left: "30px",
              //   bottom: "40px",
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
    );
  } else {
    return <></>;
  }
}
