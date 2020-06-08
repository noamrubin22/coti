import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import Title from "../../Title/Title";
import "./Setup.css";
import updateAction from "../updateAction";

export default function Setup(props) {
  const { state, action } = useStateMachine(updateAction);
  const { register, handleSubmit, errors } = useForm({
    defaultValues: state.yourDetails,
  });
  const { push } = useHistory();
  console.log("USER SETUP:", props.user);

  const onSubmit = (data) => {
    action(data);
    // push("/setup/1");
  };

  return (
    <div className="setup">
      <Title />
      <div className="avatar-img"></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="setup-section">
          <div className="native">
            <div className="subcat">
              <label>Native language</label>
              <input
                type="text"
                placeholder="Native language"
                name="nativelanguage"
                ref={register({ required: "This is required" })}
              />
              <ErrorMessage errors={errors} name="nativelanguage" as="p" />
            </div>
            {/* <input type="submit" /> */}
          </div>
          <button>Add</button>
        </div>
        <div className="setup-section">
          <div className="practice">
            <div className="subcat">
              <label>I want to practice..</label>
              <input
                type="text"
                placeholder="I want to practice"
                name="foreignlanguage"
                ref={register({ required: "This is required" })}
              />
              <ErrorMessage errors={errors} name="foreignlanguage" as="p" />
            </div>
            <div className="subcat">
              <label>Level</label>
              <input
                type="text"
                placeholder="level"
                name="level"
                ref={register({ required: "This is required" })}
              />
              <ErrorMessage errors={errors} name="level" as="p" />
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
