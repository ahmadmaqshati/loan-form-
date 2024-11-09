
export default function MyInput({ value, handleChange, inputTitle, inputName, type, options }) {
    return (
        <div className="mb-3">
            <label className="form-label">{inputTitle}</label>
            {
                type === 'checkbox' ?
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={value}
                        onChange={(e) => handleChange(e.target.checked)}
                        name={inputName}
                    />
                    : type === 'select' ?
                        <select
                            className="form-select"
                            value={value}
                            onChange={(e) => handleChange(e.target.value)}
                            name={inputName}
                        >
                            {options.map((option, index) => (
                                <option key={index} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        : <input
                            className="form-control"
                            value={value}
                            onChange={(e) => handleChange(e.target.value)}
                            name={inputName}
                        />

            }

        </div>
    )
}



/* 

 




<input
                    className="form-control"
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                    name={inputName}
                />
*/