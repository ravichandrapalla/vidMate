import React from "react";

const Input = (props) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.name} className="form-label">
        {props.label}
      </label>
      <input
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        type="text"
        className="form-control"
        id={props.name}
        aria-describedby="emailHelp"
      />
      {props.error && (
        <div class="alert alert-danger" role="alert">
          {props.error}
        </div>
      )}
    </div>
  );
};

export default Input;
