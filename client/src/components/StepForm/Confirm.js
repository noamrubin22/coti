import React, { Component, useState, useEffect } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
import axios from "axios";

const FormUserDetails = ({ setForm, formData, navigation }) => {
  const {
    nativeLanguage,
    foreignLanguage,
    level,
    name,
    age,
    country,
    interests,
    bio,
    availability,
    email,
    password,
  } = formData;

  const { go, previous } = navigation;

  return (
    <div className="form">
      <h3>Review your data</h3>
      <div>
        {" "}
        Name: {`${name}`},
        <br />
        Age: {`${age}`},
        <br />
        Country: {`${country}`}
        <br />
        Native Language: {`${nativeLanguage}`},
        <br />I want to learn: {` ${foreignLanguage}`},
        <br />
        At the moment my level is: {`${level}`},
        <br />
        Interests: {`${interests}`},
        <br />
        Bio: {`${bio}`}
      </div>
      <div>
        Availability: {`${availability}`},
        <br />
        E-mail: {`${email}`},
        <br />
        Password: {`${password}`}
      </div>
      <div>
        <button onClick={() => go("submit")}>Submit</button>
      </div>
    </div>
  );
};

export default FormUserDetails;
