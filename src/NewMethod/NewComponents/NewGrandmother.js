import React, { Component } from "react";
import { FamilyProvider } from "./FamilyContext";
import NewMother from './NewMother'

class NewGrandmother extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Bob"
          };
    }

  render() {
    return (
      // We wrap all of the components that need access 
      // to the lastName property in FamilyProvider.
      <FamilyProvider value={this.state.name}>
        <NewMother />
      </FamilyProvider>
    );
  }
}

export default NewGrandmother;