import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoanForm() {
  const [inputs, setInputs] = useState({
    name: '',
    phoneNumber: '',
    age: "",
    isEmployee: false,
    salary: ""
  });

  return (
    <div className='d-flex justify-content-center align-items-center vh-100' style={{}}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className='form text-white p-4 rounded'
        style={{ maxWidth: '700px', width: '90%' }} // تجعل العرض 90% وتحديد حد أقصى
      >
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            className="form-control"
            value={inputs.name}
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            name="name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number:</label>
          <input
            className="form-control"
            value={inputs.phoneNumber}
            onChange={(e) => setInputs({ ...inputs, phoneNumber: e.target.value })}
            name="number"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age:</label>
          <input
            className="form-control"
            value={inputs.age}
            onChange={(e) => setInputs({ ...inputs, age: e.target.value })}
            name="age"
          />
        </div>

        <div className="mb-3 form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={inputs.isEmployee}
            onChange={(e) => setInputs({ ...inputs, isEmployee: e.target.checked })}
          />
          <label className="form-check-label">Are you an employee?</label>
        </div>

        <div className="mb-3">
          <label className="form-label">Salary</label>
          <select
            className="form-select"
            value={inputs.salary}
            onChange={(e) => setInputs({ ...inputs, salary: e.target.value })}
          >
            <option>Less than 500$</option>
            <option>between 500$ and 2000$</option>
            <option>above 2000$</option>
          </select>
        </div>

        <button type="submit" className="btn btn-light w-100">
          Submit
        </button>
      </form>
    </div>
  );
}
