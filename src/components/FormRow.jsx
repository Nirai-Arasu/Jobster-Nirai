const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={name}>
        {labelText}
      </label>
      <input
        className="form-input"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;
