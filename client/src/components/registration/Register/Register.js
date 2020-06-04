import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Title from "../../Title/Title";

function Register() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Title />
      <h1>Your profile is almost done</h1>
      <input type="text" placeholder="email" name="email" ref={register} />
      <input
        type="password"
        placeholder="password"
        name="password"
        ref={register}
      />
      <input type="submit" />
      <Link to="/setup/3">
        <button>Let's go!</button>
      </Link>
      <Link to="/setup/1">
        <button>Return</button>
      </Link>
    </div>
  );
}

export default Register;
