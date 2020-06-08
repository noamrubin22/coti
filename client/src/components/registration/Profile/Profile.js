import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Title from "../../Title/Title";
import "./Profile.css";

export default function Profile(props) {
  const { register, handleSubmit, errors } = useForm();
  console.log("USER PROFILE:", props.user);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Title />
      <div className="profile">
        <div className="add-img">
          <p>Add a picture</p>
          <div className="image"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="personal-info">
            <span>Name</span>
            <input type="text" placeholder="name" name="name" ref={register} />
            <span>Age</span>
            <input type="text" placeholder="age" name="age" ref={register} />
          </div>
          <div className="extra-info">
            <span>Interests</span>
            <input
              type="text"
              placeholder="interests"
              name="interests"
              ref={register}
            />
            <span>Say Hi</span>
            <input
              type="text"
              placeholder="sayHi"
              name="sayHi"
              ref={register}
            />
            <span>Availability</span>
            <input
              type="text"
              placeholder="availability"
              name="availability"
              ref={register}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
      <div className="btns">
        <Link to="/setup">
          <button>Return</button>
        </Link>
        <Link to="/setup/2">
          <button>Let's go!</button>
        </Link>
      </div>
    </div>
  );
}
