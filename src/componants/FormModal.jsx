import Modal from 'react-bootstrap/Modal';

export default function FormModal({ isModalOpen, handleClose }) {

    return (

        <Modal show={isModalOpen}
            onHide={handleClose}
            dialogClassName="modal-centered"
            style={{ paddingLeft: "0" }}
        >

            <Modal.Body className="message">
                The Form Has Been Submitted Successfully
            </Modal.Body>

        </Modal>



    )
}
