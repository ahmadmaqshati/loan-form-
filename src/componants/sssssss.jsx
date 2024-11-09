import MyInput from './MyInput';

export default function LoanForm() {

    const [formInputs, setFormInputs] = useState({
        name: '',
        phoneNumber: '',
        age: "",
        isEmployee: false,
        salary: ""
    });


    function handleChangingInputs(e) {
        const { name, value, type, checked } = e.target;
        setFormInputs(prevInputs => ({
            ...prevInputs,
            [name]: type === 'checkbox' ? checked : value
        }));
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

            </form>

        </div>
    );
}
