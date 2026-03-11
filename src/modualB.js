import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      //size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h6>
            
          فضلا تاكد من البيانات 

          </h6>
        
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <p>
       { props.errorMassage!=null?
       
       <>
       
       <h5> طبقا للمدخلات تاكد من</h5>
       {props.errorMassage}
       
       </>
       :<div>
       
       
    <strong>تم</strong> الحسبه علي حسب البيانات
                 
                    
       
       
       </div>}
 
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>اغلاق</Button>
      </Modal.Footer>
    </Modal>
  );
}

