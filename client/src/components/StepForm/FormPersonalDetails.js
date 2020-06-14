import React from "react";
import ItemForm from "./ItemForm";

const FormPersonalDetails = ({ setForm, formData, navigation }) => {
  const { name, age, country, interests, bio, availability } = formData;

  const { next, previous } = navigation;

  return (
    <div className="form">
      <ItemForm
        label="First Name"
        name="name"
        value={name}
        onChange={setForm}
      />
      <ItemForm label="Age" name="age" value={age} onChange={setForm} />
      <ItemForm
        label="Country"
        name="country"
        value={country}
        onChange={setForm}
      />
      <ItemForm
        label="Interests"
        name="interests"
        value={interests}
        onChange={setForm}
      />
      <ItemForm label="Bio" name="bio" value={bio} onChange={setForm} />
      <ItemForm
        label="Availability"
        name="availability"
        value={availability}
        onChange={setForm}
      />
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default FormPersonalDetails;
