// import React, { useState } from 'react';

// import axios from 'axios';

//   
// const Addto = () => {
//   
//     const [userField, setUserField] = useState({
//         name: "",
//         email: "",
//         password: ""
//     });
//   
//     const changeUserFieldHandler = (e) => {
//         setUserField({
//             ...userField,
//             [e.target.name]: e.target.value
//         });
//         //console.log(userField);
//   
//     }
//     const [loading,setLoading]=useState()
//   
//     const onSubmitChange = async (e) => {
//         e.preventDefault();
//         try {
//             const responce= await axios.post("http://localhost:8090/create", userField);
//             console.log(responce)
//             setLoading(true);
//         } catch (err) {
//             console.log("Something Wrong");
//         }
//     }
//     if(loading){
//         return <Addto/>
//     }
//   
//     return (
//         <div className="container">
//             <h2 className='w-100 d-flex justify-content-center p-3'>React JS Node JS Express Add and Fetch all data from mysql database | Axios</h2>
//                 <div className='row'>
//                     <div className='col-md-4'>
//                         <h3>Add Your Detail</h3>
//                         <form>
//                             <div className="mb-3 mt-3">
//                                 <label className="form-label"> Full Name:</label>
//                                 <input type="text" className="form-control" id="name" placeholder="Enter Your Full Name" name="name" onChange={e => changeUserFieldHandler(e)} />
//                             </div>
//                             <div className="mb-3 mt-3">
//                                 <label className="form-label">Email:</label>
//                                 <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={e => changeUserFieldHandler(e)} required/>
//                             </div>
//                             <div className="mb-3 mt-3">
//                                 <label className="form-label">Password:</label>
//                                 <input type="text" className="form-control" id="password" placeholder="Enter password" name="password" onChange={e => changeUserFieldHandler(e)} required/>
//                             </div>
//                               
//                             <button type="submit" className="btn btn-primary" onClick={e => onSubmitChange(e)}>Add User</button>
//                         </form>
//                     </div>
//                     <div className='col-md-8'>
//                      
//                     </div>
//                 </div>
//         </div>
//     )
// };
// export default Addto;