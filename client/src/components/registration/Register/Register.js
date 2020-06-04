import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Title from "../../Title/Title";
import "./Register.css";

function Register() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Title />
      <h2>Your profile is almost done</h2>
      <div className="subsct">
        <div className="register-section">
          <input type="text" placeholder="email" name="email" ref={register} />
          <input
            type="password"
            placeholder="password"
            name="password"
            ref={register}
          />
          <input type="submit" />
        </div>
        <div className="btns">
          <Link to="/setup/1">
            <button>Return</button>
          </Link>
          <Link to="/setup/3">
            <button>Let's go!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
