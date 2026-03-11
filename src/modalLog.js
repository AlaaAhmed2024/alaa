import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="SM"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="login-alart"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            <h5>تنبيه</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
        <p>
         {props.errorMassage}
        </p>
        {/* <p> واعادة المحاوله</p> */}
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>اغلاق</Button> */}
      </Modal.Footer>
    </Modal>
  );
}