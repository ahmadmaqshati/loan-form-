import Modal from 'react-bootstrap/Modal';

export default function FormModal({ isModalOpen, handleCloseModal, messageType }) {

    return (

        <Modal show={isModalOpen}
            onHide={handleCloseModal}
            dialogClassName="modal-centered"
            style={{ paddingLeft: "0" }}
        >

            <Modal.Body className="message"
                style={{ color: messageType == 'error' ? 'red' : 'green' }}
            >
                {messageType}
            </Modal.Body>

        </Modal>



    )
}
