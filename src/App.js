import React, { Component } from 'react';
import OldGrandmother from './OldMethod/OldComponents/OldGrandmother';
import NewGrandmother from './NewMethod/NewComponents/NewGrandmother';

class App extends Component {
  render() {
    return (
      <div>
        <OldGrandmother />
        <NewGrandmother />
      </div>
    );
  }
}

export default App;
