import { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import audioSuccess from "./sound/success.mp3";

export default function ModalX({ isVisble, errorMassage = null, darkMode = false }) {
  const icon1 = errorMassage ? faCircleExclamation : faCircleCheck;

  useEffect(() => {
    if (isVisble && errorMassage === null) {
      const audio = new Audio(audioSuccess);
      audio.play();
    }
  }, [isVisble, errorMassage]);

  // ألوان حسب الوضع المظلم
  const colors = {
    background: darkMode ? (errorMassage ? "#4b1c1c" : "#1b3a1b") : (errorMassage ? "#fff3f3" : "#f0fdf4"),
    text: darkMode ? (errorMassage ? "#ffb3b3" : "#b0e6b0") : (errorMassage ? "#8d0000" : "#1a3f1a"),
    icon: errorMassage ? (darkMode ? "#ff4c4c" : "#d01616") : (darkMode ? "#4cc94c" : "#239c21"),
  };

  return (
    <Modal
      show={isVisble}
      centered
      backdrop="static"
      keyboard={false}
      contentClassName="p-4 text-center"
      dialogClassName="custom-bootstrap-modal"
    >
      <Modal.Body style={{
        backgroundColor: colors.background,
        borderRadius: "10px",
        fontSize: "18px",
        fontWeight: "bold",
        color: colors.text,
      }}>
        <div style={{ fontSize: "45px", marginBottom: "15px" }}>
          <FontAwesomeIcon icon={icon1} style={{ color: colors.icon }} />
        </div>
        <div>
          {errorMassage
            ? (Array.isArray(errorMassage)
              ? errorMassage.map((err, i) => <div key={i}>{err}</div>)
              : <div>{errorMassage}</div>)
            : "تمت العملية بنجاح حسب البيانات"
          }
        </div>
      </Modal.Body>
    </Modal>
  );
}



// import { useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';

// function AlertDismissibleExample() {
//   const [show, setShow] = useState(true);

//   if (show) {
//     return (
//       <Alert variant="danger" onClose={() => setShow(false)} dismissible>
//         <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
//         <p>
//           Change this and that and try again. Duis mollis, est non commodo
//           luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
//           Cras mattis consectetur purus sit amet fermentum.
//         </p>
//       </Alert>
//     );
//   }
//   return <Button onClick={() => setShow(true)}>Show Alert</Button>;
// }

// export default AlertDismissibleExample;





// import { useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';

// function AlertDismissible() {
//   const [show, setShow] = useState(true);

//   return (
//     <>
//       <Alert show={show} variant="success">
//         <Alert.Heading>My Alert</Alert.Heading>
//         <p>
//           Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
//           lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
//           fermentum.
//         </p>
//         <hr />
//         <div className="d-flex justify-content-end">
//           <Button onClick={() => setShow(false)} variant="outline-success">
//             Close me
//           </Button>
//         </div>
//       </Alert>

//       {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
//     </>
//   );
// }

// export default AlertDismissible;













// {<div class="alert alert-danger d-flex align-items-center" role="alert">
//   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
//   <div>
//     An example danger alert with an icon
//   </div>
// </div> 



//  <div class="alert alert-success d-flex align-items-center" role="alert">
//   <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
//   <div>
//     An example success alert with an icon
//   </div>
// </div> 




// <div class="alert alert-primary d-flex align-items-center" role="alert">
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
//     <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
//   </svg>
//   <div>
//     An example alert with an icon
//   </div>
// </div>



//  <div class="alert alert-warning alert-dismissible fade show" role="alert">
//   <strong>Holy guacamole!</strong> You should check in on some of those fields below.
//   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
// </div> 



