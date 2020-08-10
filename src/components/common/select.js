import React from "react";
import PropTypes from "prop-types";

const Select = ({ name, label, items, onChange, value }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        className="form-select"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        {items.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  items: PropTypes.array,
};

export default Select;
