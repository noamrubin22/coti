import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Title from "../../Title/Title";
import "./Setup.css";

export default function Setup() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="setup">
      <Title />
      <div className="avatar-img"></div>
      <form onSubmit={handleSubmit}>
        <div className="setup-section">
          <div className="native">
            <div className="subcat">
              <span>Native language</span>
              <input
                type="text"
                placeholder="Native language"
                name="nativelanguage"
                ref={register}
              />
            </div>
            <input type="submit" />
          </div>
          <button>Add</button>
        </div>
        <div className="setup-section">
          <div className="practice">
            <div className="subcat">
              <span>I want to practice..</span>
              <input
                type="text"
                placeholder="I want to practice"
                name="foreignlanguage"
                ref={register}
              />
            </div>
            <div className="subcat">
              <span>Level</span>
              <input
                type="text"
                placeholder="level"
                name="level"
                ref={register}
              />
            </div>
            <input type="submit" />
          </div>
          <button>Add</button>
        </div>
      </form>
      <div className="btns">
        <Link to="/">
          <button>Return</button>
        </Link>
        <Link to="/setup/1">
          <button>Let's go!</button>
        </Link>
      </div>
    </div>
  );
}
