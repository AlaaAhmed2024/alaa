import { useState } from "react";
import Profit from "./profit";
import Banks from "./Banks";
import Clients from "./clients";
import Plus from "./Plus";
import NetSalary from "./NetSlary";

function Noor() {
  const [show, setShow] = useState(1);

  function bnt1() {
    setShow(1);
  }

  function bnt2() {
    setShow(2);
  }

  function bnt3() {
    setShow(3);
  }

  function bnt4() {
    setShow(4);
  }

  function bnt5() {
    setShow(5);
  }

  function bnt6() {
    setShow(6);
  }

  var className1 =
    "MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary MuiTab-fullWidth Mui-selected css-mt1cr8";
  var className2 =
    "MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary MuiTab-fullWidth css-ysavq2";
  var className3 = "MuiTabs-indicator css-13x8htl";
  var className4 = "MuiTouchRipple-root css-w0pj6f";

  if (show === 1) {
    var rightMove = "5px";
  } else if (show === 2) {
    var rightMove = "18%";
    var showCompontent = <Profit />;
  } else if (show === 3) {
    var rightMove = "36%";
    var showCompontent = <Banks />;
  } else if (show === 4) {
    var rightMove = "54%";
    var showCompontent = <Clients />;
  } else if (show === 5) {
    var rightMove = "72%";
    var showCompontent = <Plus />;
  } else if (show === 6) {
    var rightMove = "90%";
    var showCompontent = <NetSalary />;
  }

  console.log(show);
  console.log(className1);
  console.log(className2);

  return (
    <div>
      <header
        className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionStatic css-pxz6q9"
        style={{ marginTop: "20px" }}
      >
        <div className="MuiTabs-root css-h1nntf">
          <div
            className="MuiTabs-scroller MuiTabs-fixed css-1anid1y"
            style={{ overflow: "scroll", marginBottom: "0px" }}
          >
            <div
              aria-label="full width tabs"
              className="MuiTabs-flexContainer css-k008qs"
              role="tablist"
            >
              <button
                className={show === 1 ? className1 : className2}
                tabindex="0"
                type="button"
                role="tab"
                aria-selected="true"
                id="full-width-tab-0"
                aria-controls="full-width-tabpanel-0"
                onClick={bnt1}
              >
                الحسبة
                <span className={show === 1 ? className3 : className4}></span>
              </button>
              <button
                className={show === 2 ? className1 : className2}
                tabindex="-1"
                type="button"
                role="tab"
                aria-selected="false"
                id="full-width-tab-1"
                aria-controls="full-width-tabpanel-1"
                onClick={bnt2}
              >
                نسب الفوائد
                <span className={show === 2 ? className3 : className4}></span>
              </button>

              <button
                className={show === 3 ? className1 : className2}
                tabindex="-1"
                type="button"
                role="tab"
                aria-selected="false"
                id="full-width-tab-1"
                aria-controls="full-width-tabpanel-1"
                onClick={bnt3}
              >
                سياسه البنوك
                <span className={show === 3 ? className3 : className4}></span>
              </button>

              <button
                className={show === 4 ? className1 : className2}
                tabindex="-1"
                type="button"
                role="tab"
                aria-selected="false"
                id="full-width-tab-1"
                aria-controls="full-width-tabpanel-1"
                onClick={bnt4}
              >
                العملاء
                <span className={show === 4 ? className3 : className4}></span>
              </button>

              <button
                className={show === 5 ? className1 : className2}
                tabindex="-1"
                type="button"
                role="tab"
                aria-selected="false"
                id="full-width-tab-1"
                aria-controls="full-width-tabpanel-1"
                onClick={bnt5}
              >
                القروض الاضافية
                <span className={show === 5 ? className3 : className4}></span>
              </button>

              <button
                className={show === 6 ? className1 : className2}
                tabindex="-1"
                type="button"
                role="tab"
                aria-selected="false"
                id="full-width-tab-1"
                aria-controls="full-width-tabpanel-1"
                onClick={bnt6}
              >
                الراتب الصافي
                <span className={show === 6 ? className3 : className4}></span>
              </button>
            </div>
            <span
              className="MuiTabs-indicator css-13x8htl"
              style={{ right: rightMove, width: "90px" }}
            ></span>
          </div>
        </div>
      </header>

      {show === 1 ? <div></div> : showCompontent}
    </div>
  );
}
export default Noor;