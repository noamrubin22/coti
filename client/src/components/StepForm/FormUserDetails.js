import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Choose Language" />
          <TextField
            hintText="Enter Your Native Language"
            floatingLabelText="Native Language"
            onChange={handleChange("nativeLanguage")}
            defaultValue={values.nativeLanguage}
          />

          <TextField
            hintText="Foreign Language"
            floatingLabelText="I want to practice"
            onChange={handleChange("foreignLanguage")}
            defaultValue={values.foreignLanguage}
          />
          <br />
          <TextField
            hintText="Enter Your Level"
            floatingLabelText="Current Level"
            onChange={handleChange("level")}
            defaultValue={values.level}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
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

export default FormUserDetails;
