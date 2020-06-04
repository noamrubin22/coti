import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Title from "../../Title/Title";

export default function Profile() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Title />
      <form onSubmit={handleSubmit}>
        {/* image */}
        <input type="text" placeholder="name" name="name" ref={register} />
        <input type="text" placeholder="age" name="age" ref={register} />
        <input
          type="text"
          placeholder="interests"
          name="interests"
          ref={register}
        />
        <input type="text" placeholder="sayHi" name="sayHi" ref={register} />
        <input
          type="text"
          placeholder="availability"
          name="availability"
          ref={register}
        />
        <input type="submit" />
      </form>
      <Link to="/setup/2">
        <button>Let's go!</button>
      </Link>
      <Link to="/setup">
        <button>Return</button>
      </Link>
    </div>
  );
}
