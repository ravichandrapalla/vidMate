import React, { useEffect, useState } from "react";

import Input from "./common/input";
const LoginForm = () => {
  const [account, setAccount] = useState({ username: "", password: "" });
  const [error, setError] = useState({});
  //const ref = useRef();

  const validate = () => {
    const errors = {};
    if (account.username.indexOf("@") < 0) {
      errors.username = "valid email is required";
    } else {
      console.log(account.email);
    }

    if (account.password.trim() === "") {
      errors.password = "password is required";
    } else {
      console.log(account.password.trim());
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    //const username = ref.current.value;
    const errors = validate();
    console.log(errors);
    setError(errors || {});
    if (error) return;
    //call the server
    console.log("submitted");
  };
  const validateProperty = (name, value) => {
    console.log("property name :", name, "property value", value);
    if (name === "username") {
      if (value.length === 0) return "username is required";
    }
    if (name === "password") {
      if (value.length === 0) return "password is required";
    }
  };
  const handleOnChange = (e) => {
    const errors = { ...error };

    const errorMsg = validateProperty(e.target.name, e.target.value);
    console.log("error msg is ", errorMsg);
    if (errorMsg) {
      errors[e.target.name] = errorMsg;
    } else {
      delete errors[e.target.name];
    }
    const newAccount = { ...account };
    newAccount[e.target.name] = e.target.value;
    console.log("property is ", e.target.name, "value is ", e.target.value);
    setAccount(newAccount);
    setError(errors);
  };
  useEffect(() => {
    //ref.current.focus();
  }, []);
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleOnSubmit}>
        {/*<div className="mb-3">
          <label htmlFor="username" className="form-label">
            Email address
          </label>
          <input
            autoFocus
            value={account.username}
            onChange={handleOnChange}
            name="username"
            type="email"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
          />
  </div>*/}
        <Input
          name="username"
          value={account.username}
          label="username"
          onChange={handleOnChange}
          error={error.username}
        />
        <Input
          name="password"
          value={account.password}
          label="password"
          onChange={handleOnChange}
          error={error.password}
        />
        {/*<div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={account.password}
            className="form-control"
            id="password"
            name="password"
            onChange={handleOnChange}
          />
</div>*/}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
