import React, { Component } from 'react';
import CardList from './components/CardList';

class App extends Component {
  render() {
    return (
      <CardList store={this.props.store}/>
    );
  }
}

export default App;
