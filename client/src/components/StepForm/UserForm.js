import React from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import FormRegistrationDetails from "./FormRegistrationDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import { useForm, useStep } from "react-hooks-helper";

const steps = [
  { id: "userdetails" },
  { id: "personal" },
  { id: "registration" },
  { id: "confirm" },
  { id: "submit" },
];

const defaultData = {
  nativeLanguage: "Dutch",
  foreignLanguage: "German",
  level: "B1",
  name: "Noam",
  age: "26",
  country: "Germany",
  interests: "swimming",
  bio: "Hi, my name is Noam and I am looking for a tandem to practice German",
  availability: "22/3/2020",
  email: "noamru22@gmail.com",
  password: "hallohallo2",
};

const UserForm = ({ images }) => {
  const [formData, setForm] = useForm(defaultData);

  console.log(formData, "formData");
  console.log(setForm, "setForm");
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "userdetails":
      return <FormUserDetails {...props} />;
    case "personal":
      return <FormPersonalDetails {...props} />;
    case "registration":
      return <FormRegistrationDetails {...props} />;
    case "confirm":
      return <Confirm {...props} />;
    case "submit":
      return <Success {...props} />;
    default:
      return null;
  }
};

export default UserForm;
