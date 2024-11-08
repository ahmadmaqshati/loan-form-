import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormModal from './FormModal';

export default function LoanForm() {
  const [formInputs, setFormInputs] = useState({
    name: '',
    phoneNumber: '',
    age: "",
    isEmployee: false,
    salary: ""
  });

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  const handleOpenModal = () => {
    setIsModalOpen(true)
  }


  function handleChangingInputs(e) {
    const { name, value, type, checked } = e.target;
    setFormInputs(prevInputs => ({
      ...prevInputs,
      [name]: type === 'checkbox' ? checked : value
    }));
  }


  // Handle form submission
  const handleSubmit = () => {
    setErrorMessage('');
    const { phoneNumber, age, name, salary, isEmployee } = formInputs;

    // Check required fields
    if (!name || !phoneNumber || !age || !salary || !isEmployee) {
      setErrorMessage('All fields are required!');
      return;
    }

    // Check phone number validity
    if (phoneNumber.length < 10) {
      setErrorMessage('Phone Number Format Is Incorrect');
      return;
    }

    // Check age
    if (age < 20 || age > 50) {
      setErrorMessage('The age is not allowed');
      return;
    }

    // If all inputs are valid, open modal without setting error message
    handleOpenModal();
  };





  function isSubmitDisabled() {
    return (!formInputs.name || !formInputs.age || !formInputs.phoneNumber)
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>

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
            value={formInputs.name}
            onChange={handleChangingInputs}
            name="name"
          />
        </div>

        {/* Phone number field */}
        <div className="mb-3">
          <label className="form-label">Phone Number:</label>
          <input
            className="form-control"
            value={formInputs.phoneNumber}
            onChange={handleChangingInputs}
            name="phoneNumber"
          />
        </div>

        {/* Age field */}
        <div className="mb-3">
          <label className="form-label">Age:</label>
          <input
            className="form-control"
            value={formInputs.age}
            onChange={handleChangingInputs}
            name="age"
          />
        </div>

        {/* Checkbox field for employee status */}
        <div className="mb-3 form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={formInputs.isEmployee}
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
            value={formInputs.salary}
            onChange={handleChangingInputs}
            name="salary"
          >
            <option>Less than 500$</option>
            <option>between 500$ and 2000$</option>
            <option>above 2000$</option>
          </select>
        </div>

        {/* Submit button */}
        <div className='d-flex justify-content-center align-items-center'>
          <button
            disabled={isSubmitDisabled()}
            style={{
              background: isSubmitDisabled() ? 'gray' : '#ff6ac0',
              color: isSubmitDisabled() ? 'black' : '#0000cdd6'
            }}
            onClick={handleSubmit} type="submit" className="btn btn-light">
            Submit
          </button>
        </div>
      </form>

      <FormModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}
        errorMessage={errorMessage}
      />

    </div>
  );
}
