import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, classname, value, onChange, onBlur } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`form-control ${classname}`}
      />
    </div>
  );
};

export default CustomInput;
