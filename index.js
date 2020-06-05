import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import SaveWordCloudToImage from './SaveWordCloudToImage';

class App extends Component {
  render() {
    return (
      <div>
        <SaveWordCloudToImage/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
