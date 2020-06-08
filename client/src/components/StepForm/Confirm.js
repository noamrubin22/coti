import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
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
      },
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem primaryText="Name" secondaryText={name} />
            <ListItem
              primaryText="Native Language"
              secondaryText={nativeLanguage}
            />
            <ListItem primaryText="Level" secondaryText={level} />
            <ListItem
              primaryText="Wants to learn"
              secondaryText={foreignLanguage}
            />
            <ListItem primaryText="Age" secondaryText={age} />
            <ListItem primaryText="Country" secondaryText={country} />
            <ListItem primaryText="Interests" secondaryText={interests} />
            <ListItem primaryText="Bio" secondaryText={bio} />
            <ListItem primaryText="Availability" secondaryText={availability} />
            <ListItem primaryText="Email" secondaryText={email} />
          </List>
          <br />
          <RaisedButton
            label="Confirm & Continue"
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

export default FormUserDetails;
