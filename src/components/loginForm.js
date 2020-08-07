import React, { useState } from "react";
import Input from "./common/input";

const LoginForm = () => {
  const [account, setAccount] = useState({ email: "", password: "" });
  const [err, setErr] = useState({});

  const validate = () => {
    const errors = {};
    if (account.email.trim() === "") errors.email = "Email is required";
    if (account.password.trim() === "")
      errors.password = "Password is required";
    return Object.keys(errors).length === 0 ? {} : errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErr(validate());
    // Call the server
    // console.log("submitted");
  };

  const validateProperty = ({ name, value }) => {
    if (name === "email") if (value === "") return "Please provide an Email";
    if (name === "password")
      if (value === "") return "Please provide a Password";
  };

  const handleChange = ({ currentTarget: input }) => {
    // currentTarget is destructured from e
    const newErrors = { ...err };
    const errorMessage = validateProperty(input);
    if (errorMessage) newErrors[input.name] = errorMessage;
    else delete newErrors[input.name];
    setErr(newErrors);

    const acc = { ...account };
    acc[input.name] = input.value;
    setAccount(acc);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <Input
              autoFocus={true}
              name="email"
              type="text"
              label="Email"
              value={account.email}
              onChange={handleChange}
              error={err.email}
            />
            <Input
              name="password"
              type="text"
              label="Password"
              value={account.password}
              onChange={handleChange}
              error={err.password}
            />
            <button className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
