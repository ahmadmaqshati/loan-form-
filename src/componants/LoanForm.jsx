import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormModal from './FormModal';
import MyInput from './MyInput';

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

  //======= Handle form submission======//
  const handleSubmit = () => {
    setErrorMessage('');
    const { phoneNumber, age, name, salary, isEmployee } = formInputs;

    let error = ''

    // Check required fields
    if (!name || !phoneNumber || !age || !salary || !isEmployee) {
      error = 'All fields are required!'
    }

    // Check phone number validity 
    else if (isNaN(phoneNumber) || phoneNumber.length < 10) {
      error = 'Phone Number Format Is Incorrect'
    }


    // Check age
    else if (isNaN(age) || age < 20 || age > 50) {
      error = 'The age is not allowed'
      console.log('age');
    }

    // If there's an error, set the error message and open the modal
    if (error) {
      setErrorMessage(error)
      handleOpenModal()
      return
    }

    // If all inputs are valid, open modal without setting error message
    handleOpenModal();
  };

  function isSubmitDisabled() {
    return (!formInputs.name || !formInputs.age || !formInputs.phoneNumber)
  }


  function handlePhoneInputChange(value) {
    setFormInputs({ ...formInputs, phoneNumber: value })
  }

  function handleAgeInputChange(value) {
    setFormInputs({ ...formInputs, age: value })
  }

  function handleNameInputChange(value) {
    setFormInputs({ ...formInputs, name: value })
  }

  function handleEmployeeInputChange(value) {
    setFormInputs({ ...formInputs, isEmployee: value })
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>

      <form onSubmit={(e) => {
        e.preventDefault()
      }}
        className='form text-white p-4 rounded'
        // Set the display to 90% and specify a maximum limit"
        style={{ maxWidth: '700px', width: '90%' }} >

        <h1 className='title'>Requesting a loan</h1>

        {/* UserName field */}
        <MyInput value={formInputs.name}
          handleChange={handleNameInputChange}
          inputTitle='Name:'
          inputName='name'
        />

        {/* Phone number field */}
        <MyInput value={formInputs.phoneNumber}
          handleChange={handlePhoneInputChange}
          inputTitle='Phone Number:'
          inputName='phoneNumber'
        />

        {/* Age field */}
        <MyInput value={formInputs.age}
          handleChange={handleAgeInputChange}
          inputTitle='Age:'
          inputName='age'
        />

        {/* Checkbox field for employee status */}
        <MyInput
          type='checkbox'
          value={formInputs.isEmployee}
          handleChange={handleEmployeeInputChange}
          inputTitle='Are you an employee:'
          inputName='isEmployee'
        />

        {/* Salary selection field */}
        <MyInput
          type="select"
          value={formInputs.salary}
          handleChange={(value) => setFormInputs({ ...formInputs, salary: value })}
          inputTitle="Salary:"
          inputName="salary"
          options={[
            { value: 'lessThan500', label: 'Less than 500$' },
            { value: 'between500and2000', label: 'Between 500$ and 2000$' },
            { value: 'above2000', label: 'Above 2000$' }
          ]}
        />







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
        errorMessage={errorMessage} />

    </div>
  );
}
