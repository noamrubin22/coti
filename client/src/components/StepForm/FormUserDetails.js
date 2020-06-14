import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import ItemForm from "./ItemForm";

const FormUserDetails = ({ setForm, formData, navigation }) => {
  const { nativeLanguage, foreignLanguage, level } = formData;

  const { previous, next } = navigation;

  return (
    <div className="form">
      <h3>User details</h3>
      <ItemForm
        label="Native Language"
        name="nativeLanguage"
        value={nativeLanguage}
        onChange={setForm}
      />
      <ItemForm
        label="I want to practice"
        name="foreignLanguage"
        value={foreignLanguage}
        onChange={setForm}
      />
      <ItemForm
        label="My current level"
        name="level"
        value={level}
        onChange={setForm}
      />
      <div>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default FormUserDetails;
