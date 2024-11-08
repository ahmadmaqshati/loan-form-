import Modal from 'react-bootstrap/Modal';

export default function FormModal({ isModalOpen, handleCloseModal, errorMessage }) {

    return (

        <Modal show={isModalOpen}
            onHide={handleCloseModal}
            dialogClassName="modal-centered"
            style={{ paddingLeft: "0" }}
        >

            <Modal.Body className="message"
                style={{ color: errorMessage ? 'red' : 'green' }}
            >
                {errorMessage ? errorMessage : "The Form Has Been Submitted Successfully"}
            </Modal.Body>

        </Modal>



    )
}
/* The Form Has Been Submitted Successfully */