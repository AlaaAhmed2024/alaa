import React, { useEffect, useState, useRef } from "react";
import "../Project1.css";
import "./netSalary.css";
import audioError from "../sound/error.mp3";
import audioSuccess from "../sound/success.mp3";
import audioWarning from "../sound/warning.mp3";
import image2 from "../logo.png";
import ProgressCounter from "./ProgressCounter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faCircleHalfStroke,
  faMoon,
  faMagnifyingGlass,
  faBackward,
  faForward,
  faCaretRight,
  faCaretLeft,
  faDownload,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ModalX from "../modalX";
import About from "./About";
import { useNavigate } from "react-router-dom";
import {
  DownloadTableExcel,
  useDownloadExcel,
} from "react-export-table-to-excel";
import ReactPaginate from "react-paginate";
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

// import { Link } from "react-router-dom";
export default function Clients(props, isVisble) {
  const [darkSide, setShwoDarkSide] = useState(true);
  const [showModdal, setShowModal] = useState(false);
  const [errorMassge, setErrorMassge] = useState(null);

  const [showDelete, setShowDelete] = useState(false);

  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);






  let audio3 = new Audio(audioError);

  const tableRef = useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });


  const [showModalDetet, setShowModalDetet] = useState(false);

  const handleCloseModalDetet = () => setShowModalDetet(false);



  const [searchedVal, setSearchedVal] = useState("");

  function handelDivClick() {
    if (showModdal == true) {
      setShowModal(false);
    }
  }

  function handelDarkSide() {
    setShwoDarkSide(!darkSide);
  }

  if (darkSide) {
    var textMode = "داكن";
    var classNameModel = "loan-form";
    var ic1 = faMoon;
    var classRotate = 0;
    var classColor = "model-light";
    var tableDark = "";
    var lableMode = "flex net-salary";
    var backColor = "link-log-dark  dark-buttom-about";
    var searchClass = "light-search";
  } else {
    var textMode = "فاتح";
    var classNameModel = "loan-form-dark";
    var ic1 = faCircleHalfStroke;
    var classRotate = 180;
    var classColor = "#050505";
    var tableDark = "table-Dark";
    var lableMode = "flex net-salary-dark";
    var backColor = "link-log-dark  dark-buttom-about  back-color";
    var searchClass = "dark-search";
  }

  const [userData, setUSerData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios("http://localhost:8090/users");
      //console.log(result.data);
      setUSerData(result.data);
      var textError=""
    } catch (err) {
      console.log("somthing Wrong DataBase");
      var xx=1
      var textError="(لا يوجد اتصال بقاعده البيانات) لا يوجد بيانات لعرضها"
    }
  };

  const idUser = window.localStorage.getItem("name");
  console.log(idUser, typeof idUser);

  const [loading, setLoading] = useState();




  const handleShowModalDetet = async (id) => {



    
    setShowa(true)
   setShowModalDetet(true);
    setErrorMassge(" جاري  حذف العميل ");
    // setShowModal(true);
    audio3.play();

    try {
      await axios.delete(`http://localhost:8090/users/${id}`);
      // window.location.reload();
      setTimeout(() => {
        window.location.href = "https://alaaahmed2024.github.io/alaa/#/clients";
        setLoading(true);
      }, 2300);
    } catch (err) {
      console.log(err);
    }
  };



  // const handleDelete = async (id) => {



    
    
  //   setShowa(true)
  //   setErrorMassge(" جاري  حذف العميل ");
  //   setShowModal(true);
  //   audio3.play();

  //   try {
  //     await axios.delete(`http://localhost:8090/users/${id}`);
  //     // window.location.reload();
  //     setTimeout(() => {
  //       window.location.href = "https://alaaahmed2024.github.io/alaa/#/clients";
  //       setLoading(true);
  //     }, 2300);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  //===========================================

  // const navigate=useNavigate()
const [showa, setShowa] = useState(false);

  const [userDataEdit, setUSerDataEdit] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const [edit, setEdit] = useState();
  const handleEdit = async (id) => {
    setShowa(true)

    setErrorMassge("    الي اعاده المحتسب   ");
    setShowModal(true);

    // e.preventDefault();
    try {
      const responceEdit = await axios.get(
        `http://localhost:8090/userdetails/${id}`
      );
      // navigate("/about")

      console.log(responceEdit);
      setUSerDataEdit(responceEdit.data[0]);
      console.log(responceEdit.data[0]);

      setTimeout(() => {
        setEdit(true);
      }, 2300);
    } catch (err) {
      console.log("Something Wrong DataBase");
    }

    let audio1 = new Audio(audioSuccess);
    audio1.play();
  };

  //===========================================

  const [show, setShow] = useState(true);
  setTimeout(() => {
    setShow(false);
  }, 3500);

  function myFunction() {
    var x = 1;
  }

  const [selectNumberRow, setSelectNumberRow] = useState({
    numerUserRow: 500,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = selectNumberRow.numerUserRow;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = userData.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(userData.length / recordsPerPage);
  const numders = [...Array(nPage + 1).keys()].slice(1);
console.log(records.phone)
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changeCpage(id) {
    setCurrentPage(id);
  }

  function pageFirst() {
    setCurrentPage(1);
  }

  function pageLast() {
    setCurrentPage(nPage);
  }

  if (loading) {
    return <Clients />;
  }

  if (edit) {
    return (
      <>
        <About editClint={userDataEdit} />;
      </>
    );
  }

  var startPage, endPage;
  if (nPage <= 4) {
    // less than 10 total pages so show all
    startPage = 1;
    endPage = nPage;
  } else {
    // more than 10 total pages so calculate start and end pages
    if (currentPage <= 4) {
      startPage = 1;
      endPage = 4;
    } else if (currentPage + 2 >= nPage) {
      startPage = nPage - 3;
      endPage = nPage;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }
  // calculate start and end item indexes
  var startIndex = (currentPage - 1) * 1 * selectNumberRow.numerUserRow;
  var endIndex = Math.min(
    startIndex + 1 * selectNumberRow.numerUserRow - 1,
    userData.length - 1
  );
  console.log(endIndex);
  // create an array of pages to ng-repeat in the pager control

  if (nPage > 4) {
    var showLast = true;
    var x = 2;
  } else {
    var showLast = false;
    var x = 0;
  }
  var pages = [...Array(endPage + 1 - startPage).keys()].map(
    (i) => startPage + i
  );
  // return an object with all pager properties required by the view

  const handlePageClick = (data) => {
    const currentPageR = data.selected + 1;
    setCurrentPage(currentPageR);
  };





  return (
    <div div style={{ marginTop: "10px", height: "100vh" }}>
      {/* <ModalX isVisble={showModdal} errorMassage={errorMassge} /> */}







  

      <Modal show={showModalDetet} onHide={handleCloseModalDetet}>
        <Modal.Header closeButton>
          <Modal.Title>حذف العميل</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل تريد حذف العميل !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalDetet}>
         الغاء
          </Button>
          <Button variant="primary" onClick={handleShowModalDetet}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>

    

      <div className="p-relative" style={{ margin: "0px 10px" }}>
        <div className="row flex-mobile" style={{ marginBottom: "200px" }}>
          <div
            className="col box input-css"
            id={classNameModel}
            style={{
              width: "100%",
              marginBottom: "0px",
              margin: "5px",
              padding: "20px 10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: darkSide ? "#e1e5ed" : "#0f1a36",
                color: darkSide ? "black" : "white",
                margin: "0px 0px",
                padding: "3px",
                textAlign: "center",
                marginBottom: "7px",
              }}
            >
              <div>
                <button
                  onClick={onDownload}
                  className="download"
                  style={{ border: "none" }}
                  title=" تحميل اكسل"
                >
                  <FontAwesomeIcon icon={faDownload} />
                </button>
              </div>
              <div>
                <h3
                  style={{
                    width: "80%",
                    marginLeft: "10px",
                    marginTop: "5px",
                    marginBottom: "0px",
                  }}
                >
                  عملائي
                </h3>
              </div>
              {/* <input type="search"  placeholder="البحث ... " className={searchClass} onKeyUp={myFunction}
           onChange={(e) => setSearchedVal(e.target.value)}
           title="بحث في العملاء"
           />
       */}

              <div>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{
                    marginTop: " 15px",
                    marginLeft: "-25px",
                  }}
                  id="search-icon"
                />

                <input
                  style={{
                    color: "black",
                    marginBottom: "0px",

                    borderBottom: darkSide
                      ? "2px solid #0d6efd"
                      : "2px solid gray",
                  }}
                  className={searchClass}
                  onChange={(e) => setSearchedVal(e.target.value)}
                  // type="text"
                  type="search"
                  id="myInput-search"
                  onKeyUp={myFunction}
                  placeholder="البحث ... "
                  title="بحث في العملاء"
                ></input>
              </div>
            </div>

            <div style={{ display: show ? "" : "none" }}>
              {/* <div style={{ display: show ? "" : "none" }} className="fade-in-image"> */}
              {/* <img id="fading-div" alt="logo" src={image2} /> */}

              <div
                className="loader-container"
                style={{ flexDirection: "column", marginTop: "-100px" }}
              >
                <div className="logo-reveal" style={{ marginBottom: "10px" }}>
                  <img
                    src={image2}
                    alt="Eskan Salman Logo"
                    className="logo-color"
                  />
                  <div className="logo-mask"></div>
                </div>

                <ProgressCounter />
              </div>
            </div>

            <div
              className="calculation flex-container"
              style={{ display: show ? "none" : "" }}
            >
              <div
                className="calculation-flex flex-2dir input-css flex-dir table-client table-responsive"
                onClick={handelDivClick}
                id="input-loan-form"
                style={{
                  padding: "5px",
                  width: "100%",
                  overflow: "scroll",
                  height: "88vh",
                  marginBottom: "60px",
                  overflowX: "auto",
                  marginRight: "5px",
                  marginLeft: "5px",
                  marginTop: "0px",
                  // height: "100vh",
                  backgroundColor: darkSide ? "" : "#2c375b",

                  display: "flex",

                  flexDirection: "column",
                  /* BORDER-RADIUS: 50PX; */
                  borderRadius: "20px",
                }}
              >
                {/* <table style={{ direction: "rtl" , height:"200%"  }}> */}

                <table
                  ref={tableRef}
                  style={{
                    direction: "rtl",
                    height: "100%",
                    marginBottom: "10px",
                    maxHeight: "40px",
                  }}
                  className={
                    darkSide
                      ? "table-clients-show    align-middle  table table-striped table-hover  css-table  hover-css-light"
                      : "table-clients-show  table-striped   align-middle table table-dark table-hover  css-table  hover-css-dark"
                  }
                >
                  <thead
                    style={{
                      background: "rgba(34, 42, 69, 0.96)",
                      color: "white",
                    }}
                    className={darkSide ? "table-light" : "table-dark"}
                  >
                    <tr style={{ verticalAlign: "middle" }}>
                      {/* <th scope="col" style={{ width: "32px", height: "50px" }}>
                        م
                      </th> */}
                      <th scope="col" style={{ width: "32px", height: "50px" }}>
                        رقم
                      </th>
                      <th scope="col" style={{ width: "140px" }}>
                        اسم العميل
                      </th>
                      <th
                        scope="col"
                        style={{ width: "120px", textAlign: "center" }}
                      >
                        رقم الجوال
                      </th>

                      {/* <th
                        scope="col"
                        style={{ width: "120px", textAlign: "center" }}
                      >
                         عن طريق
                      </th>
                       */}
                      <th scope="col">البنك الحالي</th>
                      <th scope="col">البنك العقاري</th>

                      <th scope="col">الوظيفه</th>
                      <th scope="col"> الراتب الصافي</th>
                      <th scope="col"> الراتب الاساسي</th>
                      <th scope="col" style={{ textAlign: "center" }}>
                        الدعم السكني
                      </th>

                      <th scope="col" style={{ textAlign: "center" }}>
                        {" "}
                        تاريخ الميلاد
                      </th>
                      <th scope="col" style={{ textAlign: "center" }}>
                        {" "}
                        تاريخ التعيين
                      </th>
                      <th scope="col" style={{ textAlign: "center" }}>
                        {" "}
                        تاريخ الحسبة{" "}
                      </th>
                      <th
                        scope="col"
                        style={{ width: "120px", textAlign: "center" }}
                      >
                        التعديل
                      </th>
                      <th scope="col">الحذف</th>
                    </tr>
                  </thead>
                  <tbody
                    className={tableDark}
                    style={{ color: darkSide ? "black" : "white" }}
                  >


           <tr style={{display:records.length==0?"":"none"}} >

                <td colSpan={15} style={{    textAlign: "center"}}>لا يوجد اتصال بقواعد البيانات</td>
          </tr>
                   



                    
                    {
                    

                    records
                      .filter(
                        (row) =>
                          !searchedVal.length ||
                          row.phone
                            .toString()
                            .toLowerCase()
                            .includes(searchedVal.toString().toLowerCase()) ||
                          row.currentBank
                            .toString()
                            .toLowerCase()
                            .includes(searchedVal.toString().toLowerCase()) ||
                          row.realEstateBank
                            .toString()
                            .toLowerCase()
                            .includes(searchedVal.toString().toLowerCase()) ||
                          row.housingSupport
                            .toString()
                            .toLowerCase()
                            .includes(searchedVal.toString().toLowerCase()) ||
                          row.name
                            .toString()
                            .toLowerCase()
                            .includes(searchedVal.toString().toLowerCase()) ||
                          row.netSalary
                            .toString()
                            .toLowerCase()
                            .includes(searchedVal.toString().toLowerCase()) ||
                          row.id
                            .toString()
                            .toLowerCase()
                            .includes(searchedVal.toString().toLowerCase()) ||
                          row.birthYear
                            .toString()
                            .toLowerCase()
                            .includes(searchedVal.toString().toLowerCase()) ||
                          row.job
                            .toString()
                            .toLowerCase()
                            .includes(searchedVal.toString().toLowerCase())||
                            row.requests
                            .toString()
                            .toLowerCase()
                            .includes(searchedVal.toString().toLowerCase())||
                            row.comments
                            .toString()
                            .toLowerCase()
                            .includes(searchedVal.toString().toLowerCase())||

// UPDATE `users` SET `currentBank`= CASE           WHEN currentBank="alrajhi" THEN "الراجحي" WHEN currentBank="alahli"  THEN "الاهلي" WHEN currentBank="albilad"  THEN "البلاد" WHEN currentBank="sab"  THEN "ساب" WHEN currentBank="alinma"  THEN "الانماء" WHEN currentBank="riyad"  THEN "الرياض" WHEN currentBank="alfransi"  THEN "الفرنسي" WHEN currentBank="aljazira"  THEN "الجزيزة" WHEN currentBank="bidaya"  THEN "بداية" WHEN currentBank="darAltamleek"  THEN "دار التمليك" WHEN currentBank="any"  THEN "الاخري" ELSE "الاخري"  END

                            row.bank_edit	
                            .toString()
                            .toLowerCase()
                            .includes(searchedVal.toString().toLowerCase())||

                            row.edit_bank_real
                            .toString()
                            .toLowerCase()
                            .includes(searchedVal.toString().toLowerCase())||

                            row.edit_house
                            .toString()
                            .toLowerCase()
                            .includes(searchedVal.toString().toLowerCase())
                            
                      )
                      .map((user, i) => {
                        return (
                         
                     


                          <tr className="align-middle" key={i}>
                            {/* <th scope="row">{i + 1}</th> */}


                            {/* <td style={{ width: "32px" }}>{i + 1}</td> */}
                            <td style={{ width: "32px" }}>{user.id} </td>
                            <td style={{ width: "140px" }}>{user.name} </td>
                            <td style={{ width: "120px" }}>{user.phone} </td>
                            {/* <td style={{ width: "120px" }}>{user.requests} </td> */}
                            

                            <td style={{ textAlign: "center" }}>
                              {user.currentBank == "alahli"
                                ? "الاهلي"
                                : user.currentBank == "alrajhi"
                                ? "الراجحي"
                                : user.currentBank == "albilad"
                                ? "البلاد"
                                : user.currentBank == "sab"
                                ? "ساب"
                                : user.currentBank == "alinma"
                                ? "الانماء"
                                : "الاخري"}{" "}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {user.realEstateBank == "alahli"
                                ? "الاهلي"
                                : user.realEstateBank == "alrajhi"
                                ? "الراجحي"
                                : user.realEstateBank == "albilad"
                                ? "البلاد"
                                : user.realEstateBank == "sab"
                                ? "ساب"
                                : user.realEstateBank == "alinma"
                                ? "الانماء"
                                : "الاخري"}{" "}
                            </td>

                            <td style={{ textAlign: "center" }}>{user.job} </td>
                            <td style={{ textAlign: "center" }}>
                              {user.netSalary}{" "}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {user.basicSalary}{" "}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {user.housingSupport == "baqa"
                                ? "باقه الدعم"
                                : user.housingSupport == "no"
                                ? "غير مدعوم"
                                : "قسط دعم"}
                            </td>

                            <td style={{ textAlign: "center" }}>
                              {user.birthYear + "-" + user.birthMonth}{" "}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {user.startWorkYear + "-" + user.startWorkMonth}{" "}
                            </td>

                            <td scope="row" style={{ textAlign: "center" }}>
                              {user.currentYear + "-" + user.currentMonth}{" "}
                            </td>


<td style={{ textAlign: "center" }}>

<div class="hover-container">
  <p class="hover-target" tabindex="0" style={{    margin: "auto"}}>
  <button
                                  onClick={() => handleEdit(user.id)}
                                  className="btn  btn-danger-alaa-edit"
                                  style={{
                                    fontSize: "13px",
                                    border: "1px solid green",
                                  }}
                                  // title={user.currentYear + "الدعم السكني"}
                                  title={" اعادة الاحتساب"}
                                >
                                  <FontAwesomeIcon
                                    icon={faPenToSquare}
                                    style={{
                                      color: darkSide ? "green" : "#00ff31",
                                      cursor: "pointer",
                                    }}
                                    className="edit-icon"
                                  />
                                 

                                    {/* <p> {"ضمانات - استثناء : "+ user.typeException }</p> */}
                                  
                                </button>

  </p>
  <aside className={darkSide?"hover-popup shadow p-3 mb-5  rounded":"hover-popup shadow p-3 mb-5  rounded dark-arrow"} style={{
                                      backgroundColor: darkSide
                                        ? "rgb(255 255 255)"
                                        : "black ",
                                      color: darkSide ? "black" : "white",
                                    }}>
                             <h5 style={{marginBottom: "0px"}}>معلومات اضافيه</h5>
    

    <p>
      
      
   

                                    {user.newPersonalFinance ===
                                    "noNewPrsonal" ? (
                                      <p> شخصي جديد : <span>لا</span></p>
                                    ) : (
                                      <p> شخصي جديد :  <span> نعم</span></p>
                                    )}
  
                                    <p>
                                      <mark style={{ padding: "2px" }}>
                                        الالتزامات
                                      </mark>
                                    </p>
                                    <p>
                                      {" "}
                                      {"القسط الاول : " +
                                        user.installment1 +
                                        " لمدة :" +
                                        user.duration1}
                                    </p>
                                    <p>
                                      {" "}
                                      {"القسط الثاني : " +
                                        user.installment2 +
                                        " لمدة :" +
                                        user.duration2}
                                    </p>
                                    <p>
                                      {" "}
                                      {"القسط الثالث : " +
                                        user.installment3 +
                                        " لمدة :" +
                                        user.duration3}
                                    </p>
                                    <p>
                                      {" "}
                                      {"القسط الرابع : " +
                                        user.installment4 +
                                        " لمدة :" +
                                        user.duration4}
                                    </p>
                                    <p> {"مدة الاشترك : " + user.durationIn}</p>

                                    {user.typeException === "normal" ? (
                                      <p> ضمانات /استثناء : بدون</p>
                                    ) : user.typeException === "exception" ? (
                                      <p> ضمانات /استثناء : استثناء </p>
                                    ) : user.typeException === "damanat" ? (
                                      <p> ضمانات / استثناء : ضمانات</p>
                                    ) : (
                                      <p>
                                        {" "}
                                        ضمانات / استثناء : ضمانات مع استثناء
                                      </p>
                                    )}

                                    {user.job == "متقاعد" ||
                                    user.job == "خاص" ||
                                    user.job == "مدني" ? (
                                      <></>
                                    ) : user.ministryDefenseSelect === "yes" ? (
                                      <p>عسكري وزارة الدفاع : نعم</p>
                                    ) : user.ministryDefenseSelect === "no" ? (
                                      <p>عسكري وزارة الدفاع : لا</p>
                                    ) : (
                                      <></>
                                    )}
                                    
                                    <p>{" طريقه الوصول : " + user.requests   }</p>
                                    <p>{" ملاحظات : " + user.comments   }</p>
        
       
      
       </p>
  </aside>
</div>


</td>








{/* 
                            <td style={{ width: "120px" }}>
                              <div className="parent-element">
                                <button
                                  onClick={() => handleEdit(user.id)}
                                  className="btn  btn-danger-alaa-edit"
                                  style={{
                                    fontSize: "13px",
                                    border: "1px solid green",
                                  }}
                                  // title={user.currentYear + "الدعم السكني"}
                                  title={" اعادة الاحتساب"}
                                >
                                  <FontAwesomeIcon
                                    icon={faPenToSquare}
                                    style={{
                                      color: darkSide ? "green" : "#00ff31",
                                      cursor: "pointer",
                                    }}
                                    className="edit-icon"
                                  />
                                  <div
                                    className="hidden-element"
                                    style={{
                                      backgroundColor: darkSide
                                        ? "rgb(255 255 255)"
                                        : "black",
                                      color: darkSide ? "black" : "white",
                                    }}
                                  >
                                    <div className="arrow"></div>

                                    {user.newPersonalFinance ===
                                    "noNewPrsonal" ? (
                                      <p> شخصي جديد : لا</p>
                                    ) : (
                                      <p> شخصي جديد : نعم </p>
                                    )}

                                    <p>
                                      <mark style={{ padding: "2px" }}>
                                        الالتزامات
                                      </mark>
                                    </p>
                                    <p>
                                      {" "}
                                      {"القسط الاول : " +
                                        user.installment1 +
                                        " لمدة :" +
                                        user.duration1}
                                    </p>
                                    <p>
                                      {" "}
                                      {"القسط الثاني : " +
                                        user.installment2 +
                                        " لمدة :" +
                                        user.duration2}
                                    </p>
                                    <p>
                                      {" "}
                                      {"القسط الثالث : " +
                                        user.installment3 +
                                        " لمدة :" +
                                        user.duration3}
                                    </p>
                                    <p>
                                      {" "}
                                      {"القسط الرابع : " +
                                        user.installment4 +
                                        " لمدة :" +
                                        user.duration4}
                                    </p>
                                    <p> {"مدة الاشترك : " + user.durationIn}</p>

                                    {user.typeException === "normal" ? (
                                      <p> ضمانات /استثناء : بدون</p>
                                    ) : user.typeException === "exception" ? (
                                      <p> ضمانات /استثناء : استثناء </p>
                                    ) : user.typeException === "damanat" ? (
                                      <p> ضمانات / استثناء : ضمانات</p>
                                    ) : (
                                      <p>
                                        {" "}
                                        ضمانات / استثناء : ضمانات مع استثناء
                                      </p>
                                    )}

                                    {user.job == "متقاعد" ||
                                    user.job == "خاص" ||
                                    user.job == "مدني" ? (
                                      <></>
                                    ) : user.ministryDefenseSelect === "yes" ? (
                                      <p>عسكري وزارة الدفاع : نعم</p>
                                    ) : user.ministryDefenseSelect === "no" ? (
                                      <p>عسكري وزارة الدفاع : لا</p>
                                    ) : (
                                      <></>
                                    )}

                                
                                  </div>
                                </button>
                              </div>
                            </td> */}

                            <td>
{/* 

                            <Button variant="primary" onClick={handleShow} 
                                                            className="btn btn-danger btn-danger-alaa"
                                                            style={{ fontSize: "13px" }}
                                                          >
                                                            <FontAwesomeIcon
                                                              icon={faTrash}
                                                              className="delete-icon"
                                                            />
                            
                            

      </Button>

      
      <Modal
        show={showDelete}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        className={darkSide?"":"dark-lib"}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color:darkSide? "black" : "white"}}>حذف </Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{ color:darkSide? "black" : "white"}}>
    هل تريد بالفعل حذف العميل
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            لا
          </Button>
          <Button variant="primary" onClick={() => handleDelete(user.id)}>نعم</Button>
        </Modal.Footer>
      </Modal> */}







                               <button
                                onClick={() => handleShowModalDetet(user.id)}
                                className="btn btn-danger btn-danger-alaa"
                                style={{ fontSize: "13px" }}
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  className="delete-icon"
                                />
                              </button> 




                            </td>
                          </tr>
                           );
                      })}

                     


{/* ملغي */}




                    {/* <nav style={  { position:"fixed" ,bottom: "40px",right: "20%"}}>< */}

                    {/* <li 
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                    
                  >
                    <a
                      href="/alaa/#/clients"
                      className="page-link"
                      tabindex={currentPage === 1 ? "-1" : ""}
                      aria-disabled={currentPage === 1 ? "true" : "false"}
                      style={{ marginRight: "6px" }}
                      onClick={pageFirst}
                    >
                      <FontAwesomeIcon icon={faForward} />
                    </a>
                  </li> */}

                    {/* 
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <a
                      href="/alaa/#/clients"
                      className="page-link"
                      tabindex={currentPage === 1 ? "-1" : ""}
                      aria-disabled={currentPage === 1 ? "true" : "false"}
                      onClick={prePage}
                    >
                      <FontAwesomeIcon icon={faCaretRight} />
                    </a>
                  </li>

                 
                 
                  {pages.map((n, i) => (
                 
                    <li
                      className={`page-item ${
                        currentPage === n ? "active" : ""
                      }`}
                      key={i}
                    >
                      <a
                        href="/alaa/#/clients"
                        className="page-link"
                        onClick={() => changeCpage(n)}
                      >
                        {n}
                      </a>
                      
            
                    </li>
                  ))}

                
                  



                  <li
                    className={`page-item ${
                      currentPage === nPage ? "disabled" : ""
                    }`}
                  >
                    <a
                      href="/alaa/#/clients"
                      className="page-link"
                      tabindex={currentPage === nPage ? "-1" : ""}
                      aria-disabled={currentPage === nPage ? "true" : "false"}
                      onClick={nextPage}
                    >
                      <FontAwesomeIcon icon={faCaretLeft} />
                    </a>
                  </li> */}

                    {/* <li
                    className={`page-item ${
                      currentPage === nPage ? "disabled" : ""
                    }`}
                  >
                    <a
                      href="/alaa/#/clients"
                      className="page-link"
                      tabindex={currentPage === nPage ? "-1" : ""}
                      aria-disabled={currentPage === nPage ? "true" : "false"}
                      onClick={pageLast}
                    >
                      <FontAwesomeIcon icon={faBackward} />
                    </a>
                  </li> */}




                  </tbody>
                </table>

                <nav
                  style={{ marginBottom: "45px" }}
                  aria-label="Page navigation example"
                >
                  <ul
                    className="pagination justify-content-center"
                    style={{ marginTop: "40px" }}
                  >
                    <div
                      style={{
                        margin: "5px 0 0 10px",
                        color: darkSide ? "black" : "white",
                      }}
                    >
                      <span>{nPage===0? 1:nPage}</span>
                      {/* <pre style={{display:"inline-block" , fontSize:".875em"}}> من </pre> */}
                      <span>/</span>
                      <span>{ currentPage===0? 1:currentPage}</span>
                    </div>
                    <div className="sc-bXCLTC fpXtsl">
                      <select
                        aria-label="Rows per page:"
                        className="sc-hmdomO iECIQW"
                        style={{
                          backgroundColor: "rgb(242, 242, 242)",
                          border: "1px solid #d5d5d5",
                          borderRadius: "5px",
                          color: darkSide ? "black" : "black",
                          height: "36px",
                          width: "120%",
                          padding: "0 5px",
                          marginLeft: "18px",
                          marginTop: "-1px",
                        }}
                        value={selectNumberRow.numerUserRow}
                        onChange={(event) => {
                          setSelectNumberRow({
                            ...selectNumberRow,
                            numerUserRow: event.target.value,
                          });
                        }}
                      >
                        <option value={5}>5</option>
                        <option value={8}>8</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                        <option value={500}>500</option>
                        <option value={100000}>الكل</option>
                      </select>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="36"
                        viewBox="0 0 24 24"
                        style={{ color: "black" }}
                      >
                        <path d="M7 10l5 5 5-5z"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                      </svg>
                    </div>








                    <ReactPaginate
                      previousLabel={<FontAwesomeIcon icon={faCaretRight} />}
                      nextLabel={<FontAwesomeIcon icon={faCaretLeft} />}
                      breakLabel="..."
                      pageCount={nPage}
                      marginPagesDisplayed={1}
                      pageRangeDisplayed={3}
                      onPageChange={handlePageClick}
                      containerClassName="pagination  justify-content-center"
                      pageClassName="page-item"
                      pageLinkClassName="page-link"
                      previousClassName="page-item"
                      previousLinkClassName="page-link"
                      nextClassName="page-item"
                      nextLinkClassName="page-link"
                      breakClassName="page-item"
                      breakLinkClassName="page-link"
                      activeClassName="active"
                    />
                  </ul>
                </nav>





                <div style={{marginTop:"20px"   ,  position: "fixed",
    left: "30px",
    bottom: "90px"
   }}>

<Row >
      <Col xs={12}>
        <Toast onClose={() => setShowa(false)} show={showa} delay={5500} autohide >
          <Toast.Header style={{direction:"ltr" , backgroundColor:"#DEDFDF"}}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">اشعار</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body style={{backgroundColor:"#212529" , color:"white"}}>  {errorMassge}</Toast.Body>
        </Toast>
      </Col>
  
    </Row>
    </div>
                <div>
                  <button
                    className={backColor}
                    activeClassName="active_sidebar"
                    style={{
                      borderRadius: "30px",
                      maxWidth: "130px",
                      position: "fixed",
                      left: "30px",
                      bottom: "48px",
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
