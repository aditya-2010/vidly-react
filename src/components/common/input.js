import React from "react";

const Input = ({
  name,
  type = "text",
  label,
  value,
  onChange,
  autoFocus = false,
  error,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus={autoFocus}
        type={type}
        className="form-control"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
