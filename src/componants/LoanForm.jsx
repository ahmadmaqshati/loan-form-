import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
export default function LoanForm() {
  const [inputs, setInputs] = useState({
    name: '',
    phoneNumber: '',
    age: "",
    isEmployee: false,
    salary: ""
  });

  const [isModalOpen, setIsModal] = useState(false)
  const handleClose = () => {
    setIsModal(false)
  }
  const handleOpen = () => {
    setIsModal(true)
  }


  function handleChangingInputs(e) {
    const { name, value, type, checked } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: type === 'checkbox' ? checked : value
    }));
  }


  function handleSubmit() {
    handleOpen()
  }

  function btnIsDisabled() {
    return (!inputs.name || !inputs.age || !inputs.phoneNumber)
  }




  return (
    <div className='d-flex justify-content-center align-items-center vh-100' style={{}}>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className='form text-white p-4 rounded'
        // Set the display to 90% and specify a maximum limit"
        style={{ maxWidth: '700px', width: '90%' }}
      >
        <h1 className='title'>Requesting a loan</h1>

        {/* Name field */}
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            className="form-control"
            value={inputs.name}
            onChange={handleChangingInputs}
            name="name"
          />
        </div>

        {/* Phone number field */}
        <div className="mb-3">
          <label className="form-label">Phone Number:</label>
          <input
            className="form-control"
            value={inputs.phoneNumber}
            onChange={handleChangingInputs}
            name="phoneNumber"
          />
        </div>

        {/* Age field */}
        <div className="mb-3">
          <label className="form-label">Age:</label>
          <input
            className="form-control"
            value={inputs.age}
            onChange={handleChangingInputs}
            name="age"
          />
        </div>

        {/* Checkbox field for employee status */}
        <div className="mb-3 form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={inputs.isEmployee}
            onChange={handleChangingInputs}
            name="isEmployee"
          />
          <label className="form-check-label">Are you an employee?</label>
        </div>

        {/* Salary selection field */}
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <select
            className="form-select"
            value={inputs.salary}
            onChange={handleChangingInputs}
          >
            <option>Less than 500$</option>
            <option>between 500$ and 2000$</option>
            <option>above 2000$</option>
          </select>
        </div>

        {/* Submit button */}
        <div className='d-flex justify-content-center align-items-center'>
          <button
            disabled={btnIsDisabled()}
            style={{
              background: btnIsDisabled() ? 'gray' : '#ff6ac0',
              color: btnIsDisabled() ? 'black' : '#0000cdd6'
            }}
            onClick={handleSubmit} type="submit" className="btn btn-light">
            Submit
          </button>
        </div>
      </form>


      {/* modal */}
      <div>
        <Modal show={isModalOpen}
          onHide={handleClose}
          dialogClassName="modal-centered"
          style={{ paddingLeft: "0" }}
        >

          <Modal.Body className="message">
            The Form Has Been Submitted Successfully
          </Modal.Body>

        </Modal>
      </div>

    </div>
  );
}
