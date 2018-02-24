import React, { Component } from 'react';
import Board from './components/Board';
import CardList from './components/CardList';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <CardList store={this.props.store} />
        <Board store={this.props.store} />
      </div>
    );
  }
}

export default App;
