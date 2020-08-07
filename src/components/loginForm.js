import React, { useState } from "react";
import Input from "./common/input";

const LoginForm = () => {
  const [account, setAccount] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    // const errors = {};
    if (account.email === "") errors.email = "Email is required";
    if (account.password === "") errors.password = "Password is required";
    // console.log(Object.values(errors));
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    console.log(errors);
    if (errors) return;
    console.log("submitted");
  };

  const handleChange = ({ currentTarget: input }) => {
    // currentTarget is destructured from e
    const acc = { ...account };
    acc[input.name] = input.value;
    setAccount(acc);
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          autoFocus={true}
          name="email"
          type="email"
          label="Email"
          value={account.email}
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          label="Password"
          value={account.password}
          onChange={handleChange}
        />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
