import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import ItemForm from "./ItemForm";

const FormPersonalDetails = ({ setForm, formData, navigation }) => {
  const { email, password } = formData;

  const { previous, next } = navigation;
  return (
    <div className="form">
      <h3>Almost there! </h3>
      <ItemForm label="E-mail" name="email" value={email} onChange={setForm} />
      <ItemForm
        label="Password"
        type="password"
        name="password"
        value={password}
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
