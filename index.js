import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import SaveWordCloudToImage from './SaveWordCloudToImage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <SaveWordCloudToImage/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
