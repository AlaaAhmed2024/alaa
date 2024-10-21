import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
// import { Link } from "react-router-dom";
export default function Clients({ isVisble }) {
  const [userData, setUSerData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios("http://localhost:8090/users");
      //console.log(result.data);
      setUSerData(result.data);
    } catch (err) {
      console.log("somthing Wrong");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8090/users/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h3
        style={{
          backgroundColor: "white",
          margin: "30px 0px",
          padding: "3px",
          textAlign: "center",
          marginBottom: "7px",
        }}
      >
        صفحه عملائي
      </h3>
      <div className="calculation flex-container">
        <div
          className="calculation-flex flex-2dir input-css flex-dir"
          id="input-loan-form"
          style={{ padding: "5px", width: "100%", overflow: "scroll" }}
        >
          <table style={{ direction: "rtl" }}>
            <thead
              style={{ background: "rgba(34, 42, 69, 0.96)", color: "white" }}
            >
              <tr>
                <th>م</th>
                <th>اسم العميل</th>
                <th>الجوال</th>
                <th>البنك الحالي</th>
                <th>الوظيفه</th>
                <th>الراتب الصافي</th>
                <th>الراتب الاساسي</th>
                <th> شهر</th>
                <th> الميلاد</th>
                <th> شهر</th>
                <th> التعيين</th>
                {/* <th>الالتزامات</th> */}
                <th>الدعم</th>
                {/* <th>التمويل العقاري</th> */}
                <th> شهر</th>
                <th> الاضافه</th>
                <th>التعديل</th>
                <th>الحذف</th>
              </tr>
            </thead>
            <tbody>
              {/*   	
               
                             <tr >
                                <td>1</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                     */}

              {/* 	
                     { data.map((users, index)=>(
                             <tr key={index}>
                                <td>{users.id}</td>
                                <td>{users.name}</td>
                                <td>{users.phone}</td>
                                <td>{users.bank}</td>
                                <td>{users.job}</td>
                                <td>{users.salary}</td>
                                <td>{users.rs}</td>

                                <td>{users.bank}</td>
                                <td>{users.bank}</td>
                                <td>{users.bank}</td>
                                <td>{users.bank}</td>
                                <td>{users.bank}</td>
                                <td>{users.bank}</td>
                               
                                <td><FontAwesomeIcon icon={faPenToSquare} style={{color:"green" , cursor:"pointer"}} /></td>
                                <td><FontAwesomeIcon icon={faTrash}  style={{color:"red" , cursor:"pointer"}}/></td>
                            </tr>
                        ))
                      }
                    */}

              {userData.map((user, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    {/* <td>{user.name} </td>
                                <td>{user.email} </td> */}

                    <td>{user.name} </td>
                    <td>{user.phone} </td>
                    <td>{user.currentBank} </td>
                    <td>{user.job} </td>
                    <td>{user.netSalary} </td>
                    <td>{user.basicSalary} </td>
                    <td>{user.birthMonth} </td>
                    <td>{user.birthYear} </td>
                    <td>{user.startWorkMonth} </td>
                    <td>{user.startWorkYear} </td>
                    <td>{user.housingSupport} </td>
                    <td>{user.currentMonth} </td>
                    <td>{user.currentYear} </td>

                    <td>
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        style={{ color: "green", cursor: "pointer" }}
                      />
                    </td>
                    {/* <td><FontAwesomeIcon icon={faTrash}  style={{color:"red" , cursor:"pointer"}}/></td> */}
                    {/* <td>
                                <button  className="btn btn-info mx-2">Edit</button>
                                <button  className="btn btn-danger">Delete</button>
                     
                                </td> */}
                    <td>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
