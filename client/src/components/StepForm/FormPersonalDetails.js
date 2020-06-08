import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            type="file"
          />
          <label htmlFor="raised-button-file">
            <RaisedButton
              primary={false}
              label="Upload Image"
              style={styles.button}
            ></RaisedButton>
          </label>
          <TextField
            hintText="Enter Your Name"
            floatingLabelText="Name"
            onChange={handleChange("name")}
            defaultValue={values.name}
          />
          <TextField
            hintText="Enter Your Age"
            floatingLabelText="Age"
            onChange={handleChange("age")}
            defaultValue={values.age}
          />
          <br />
          <TextField
            hintText="Enter Your Country"
            floatingLabelText="Country"
            onChange={handleChange("country")}
            defaultValue={values.country}
          />
          <br />
          <TextField
            hintText="Enter Your Interests"
            floatingLabelText="Interests"
            onChange={handleChange("interests")}
            defaultValue={values.interests}
          />
          <br />
          <TextField
            hintText="Enter Your Bio"
            floatingLabelText="Say Hi!"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
          <br />
          <TextField
            hintText="Enter Your Availability"
            floatingLabelText="Availability"
            onChange={handleChange("availability")}
            defaultValue={values.availability}
          />
          <br />{" "}
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormPersonalDetails;
