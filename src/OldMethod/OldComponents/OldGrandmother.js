import React, { Component } from 'react';
import OldMother from './OldMother';


class OldGrandmother extends Component {

    constructor (props) {
      super(props);
      this.state = {
        name: 'Nico'
      }
    }

  render() {
    return (
      <div>
        <OldMother name={this.state.name} />
      </div>
    )
  }
}

export default OldGrandmother;
